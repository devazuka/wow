import { unemojify } from 'npm:node-emoji'

import { sql } from './db.js'
import { discord } from './discord-bot.js'
import { wowEvents } from './wow-events.js'
import { describeImage } from './gemini.js'
import { createAccount, setGmLevel, setPassword } from './ra-web.js'

const botUserID = '766251453337436170' // App Id
const guildId = Deno.env.get('DISCORD_GUILD_ID')
const generalChannelId = Deno.env.get('DISCORD_GUILD_ID')
const roleGMLevel = {
  [Deno.env.get('GM_LEVEL_1') || '_1']: 1,
  [Deno.env.get('GM_LEVEL_2') || '_2']: 2,
  [Deno.env.get('GM_LEVEL_3') || '_3']: 3,
}
const MAX_ACCOUNT_USERNAME_LENGTH = 17
const MAX_DISCORD_LOGIN_LENGTH = 255

const getHighestGMLevel = (acc, role) => Math.max(acc, roleGMLevel[role] || 0)
const toAccountNamePart = value => (value || '')
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]/g, '')

const toAccountUsername = (user, login = user.username) => {
  const idSuffix = user.id.slice(-6)
  const base = toAccountNamePart(login) || toAccountNamePart(user.username) || 'discord'
  const nameLength = MAX_ACCOUNT_USERNAME_LENGTH - idSuffix.length
  return `${base.slice(0, nameLength)}${idSuffix}`
}
const toDiscordLogin = (user, login) => {
  const normalized = (login || user.username || '')
    .normalize('NFKC')
  const dbSafe = [...normalized]
    .filter(char => char.codePointAt(0) <= 0xFFFF)
    .join('')
    .trim()
    .slice(0, MAX_DISCORD_LOGIN_LENGTH)
  return dbSafe || toAccountUsername(user)
}

const activeUsers = {}
const activeUsersByAccount = {}
const activeUserSyncs = new Map()
const syncUserDataNow = async (member, user) => {
  if (!member) return
  user || (user = member.user)
  if (!user || user.bot) return

  const gmLevel = member.roles.reduce(getHighestGMLevel, 0)
  const displayLogin = member.nick || user.global_name || user.username
  const login = toDiscordLogin(user, displayLogin)
  const accountUsername = toAccountUsername(user, displayLogin)
  const id = BigInt(user.id)
  let userData = activeUsers[id]
  if (!userData?.account) {
    const [currentData] = await sql`
      SELECT discord_id AS id, discord_login AS login, account_id AS account
      FROM acore_auth.discord_account WHERE discord_id=${id}
    `
    if (currentData) {
      userData = (activeUsers[id] = {
        ...currentData,
        gmLevel: userData?.gmLevel,
      })
      if (!userData.account) {
        const account = await createAccount({ username: accountUsername, useExisting: true })
        await sql`
          UPDATE acore_auth.discord_account
          SET account_id=${account.id}
          WHERE discord_id=${id}
        `
        userData.account = account.id
      }
    } else {
      const account = await createAccount({ username: accountUsername, useExisting: true })
      await sql`
        INSERT INTO acore_auth.discord_account (discord_id, discord_login, account_id)
        VALUES (${id}, ${login}, ${account.id})
      `
      userData = (activeUsers[id] = { id, login, account: account.id })
    }

    userData.account &&
      (activeUsersByAccount[userData.account] = userData)
  }

  if (userData.gmLevel == null) {
    const access = await sql`
      SELECT gmlevel FROM acore_auth.account_access
      WHERE id=${userData.account}
    `

    userData.gmLevel = access[0]?.gmlevel || 0
  }

  if (userData.login !== login) {
    await sql`
      UPDATE acore_auth.discord_account
      SET discord_login=${login}
      WHERE discord_id=${id}
    `
    userData.login = login
  }

  if (userData.gmLevel !== gmLevel) {
    console.log(`account ${login} gm-level changed from ${userData.gmLevel} to ${gmLevel}`)
    userData.gmLevel = gmLevel
    await setGmLevel(userData.account, gmLevel)
  }

  return userData
}

const syncUserData = (member, user = member?.user) => {
  if (!member || !user || user.bot) return
  const currentSync = activeUserSyncs.get(user.id)
  if (currentSync) return currentSync
  const sync = syncUserDataNow(member, user)
    .finally(() => activeUserSyncs.delete(user.id))
  activeUserSyncs.set(user.id, sync)
  return sync
}

const syncGuildMembers = async () => {
  if (!guildId) {
    console.log('DISCORD_GUILD_ID is not set; skipping guild member sync')
    return
  }

  console.time('Sync guild members')
  let after = '0'
  let synced = 0
  while (true) {
    const members = await discord.rest.GET_GUILD_MEMBERS({ guild: guildId, after })
    if (!members.length) break

    for (const member of members) {
      try {
        (await syncUserData(member)) && synced++
      } catch (err) {
        console.error(`Failed to sync Discord member ${member.user?.id}`, err)
      }
    }

    after = members.at(-1).user.id
    if (members.length < 1000) break
  }
  console.log(`Synced ${synced} Discord guild members`)
  console.timeEnd('Sync guild members')
}

discord.once.READY().then(syncGuildMembers).catch(err => {
  console.error('Failed to sync Discord guild members', err)
})

const getDiscordDataForAccount = async (account) => {
  const userData = activeUsersByAccount[account]
  if (userData) return userData
  const [currentData] = await sql`
    SELECT discord_id AS id, discord_login AS login, account_id AS account
    FROM acore_auth.discord_account WHERE account_id=${account}
  `
  currentData && (activeUsersByAccount[account] = currentData)
  return currentData
}
/*
const _messageCreateExample = {
  type: 0,
  tts: false,
  timestamp: "2024-10-27T21:01:59.371000+00:00",
  pinned: false,
  nonce: "1300202866849349632",
  mentions: [],
  mention_roles: [],
  mention_everyone: false,
  member: {
    roles: [ "1297691066660687892" ],
    premium_since: null,
    pending: false,
    nick: null,
    mute: false,
    joined_at: "2024-10-20T22:38:02.328000+00:00",
    flags: 0,
    deaf: false,
    communication_disabled_until: null,
    banner: null,
    avatar: null
  },
  id: "1300202863967997983",
  flags: 0,
  embeds: [],
  edited_timestamp: null,
  content: "nice",
  components: [],
  channel_id: "1298381467910537266",
  author: {
    username: "devazuka",
    public_flags: 0,
    id: "143860662987128832",
    global_name: "Clement",
    discriminator: "0",
    clan: null,
    avatar_decoration_data: null,
    avatar: "a_1ec4a57542f002dd770cccc8fae9b5db"
  },
  attachments: [
    {
      width: 1024,
      url: "https://cdn.discordapp.com/attachments/310186336961167385/1379823041445367850/119-insolite-46.png?ex=6841a3d8&is=68405258&hm=530ee95106f369002dfc1843861430f12a69d61fb9a0dd1fb005014dc9447788&",
      size: 849730,
      proxy_url: "https://media.discordapp.net/attachments/310186336961167385/1379823041445367850/119-insolite-46.png?ex=6841a3d8&is=68405258&hm=530ee95106f369002dfc1843861430f12a69d61fb9a0dd1fb005014dc9447788&",
      placeholder_version: 1,
      placeholder: "CQgGBIAQiXp4iIWxaIWwtQdMOA==",
      id: "1379823041445367850",
      height: 640,
      filename: "119-insolite-46.png",
      content_type: "image/png",
      content_scan_version: 1
    }
  ],
  guild_id: "1297688961170538496"
}
*/
discord.on.MESSAGE_CREATE(async event => {
  if (event.author.id === botUserID) return
  if (event.channel_type === 1) {
    const { members } = await discord.do.REQUEST_GUILD_MEMBERS({
      guild_id: guildId,
      user_ids: [event.author.id],
    })

    if (!members.length) return

    const userData = await syncUserData(members[0], event.author)
    const isPwdRequest = event.content.toLowerCase().indexOf('password')
    if (isPwdRequest > -1) {
      const password = event.content.slice(isPwdRequest + 'password'.length).trim()
      const result = await setPassword(userData.account, password)
      const content = result.success
        ? `${result.output.join('\n')}\nYour password is set to: ||\`${password}\`|| (click to reveal)`
        : `Unable to set your password:\n${result.output.message.trim()}`
      return discord.rest.POST_CHANNEL_MESSAGE({ channel: event.channel_id, content })
    }

    const content = `
To change your password type \`password\` followed by the password you want.
Example:
> password SuperSecret69
`
    return discord.rest.POST_CHANNEL_MESSAGE({ channel: event.channel_id, content })
  }
  if (event.channel_id !== generalChannelId) return
  const { id } = await syncUserData(event.member, event.author)
  let message = event.content
  if (message.includes('<@')) {
    const missingUsers = new Map()
    const content = event.content
      .split(/<@([0-9]+)>/g)
      .map((content, index) => {
        if (index % 2 === 0) return content
        const user = activeUsers[content]
        if (user) return user.account ? `<@${user.account}:${user.login}>` : user.login
        missingUsers.set(index, content)
        return '@unknown'
      })

    if (missingUsers.size) {
      const { members } = await discord.do.REQUEST_GUILD_MEMBERS({
        guild_id: guildId,
        user_ids: [...missingUsers.values()],
      })
      for (const [index, id] of missingUsers) {
        const user = await syncUserData(members.find(u => u.user.id === id))
        if (!user) continue
        content[index] = user.account ? `<@${user.account}:${user.login}>` : user.login
      }
    }
    message = content.join('')
  }

  // TODO: replace wowhead links to ingame chat links
  const attachement = await Promise.all(event.attachments.map(async (attachement) => {
    const { width, height, content_type, proxy_url } = attachement
    if (!content_type?.startsWith('image/')) return ''
    const imageUrl = new URL(proxy_url)
    imageUrl.searchParams.set('format', 'webp')
    imageUrl.searchParams.set('width', Math.round((width / height) * 256))
    imageUrl.searchParams.set('height', 256)
    try {
      return `[img:${await describeImage(imageUrl.href)}]`
    } catch (err) {
      console.log('error generating image description', err)
      console.log(imageUrl)
      return ''
    }
  }))

  const formattedMsg = unemojify(message.slice(0, 255))
  const fullMessage = [formattedMsg, ...attachement].filter(s => s && s.trim()).join(' ').slice(0, 255)
  if (!fullMessage.length) return console.log('empty message, skipping.')
  console.log('[general]:', fullMessage)
  await sql`
    INSERT INTO acore_auth.discord_message (message, discord_id)
    VALUES (${fullMessage}, ${id})
  `
})
/*
const _guildMemberUpdateExample = {
  user: {
    username: "devazuka",
    public_flags: 0,
    id: "143860662987128832",
    global_name: "Clement",
    discriminator: "0",
    clan: null,
    avatar_decoration_data: null,
    avatar: "a_1ec4a57542f002dd770cccc8fae9b5db"
  },
  unusual_dm_activity_until: null,
  roles: [ "1297691066660687892" ],
  premium_since: null,
  pending: false,
  nick: "Pedro",
  joined_at: "2024-10-20T22:38:02.328000+00:00",
  guild_id: "1297688961170538496",
  flags: 0,
  communication_disabled_until: null,
  banner: null,
  avatar: null
}
*/
discord.on.GUILD_MEMBER_ADD(syncUserData)
discord.on.GUILD_MEMBER_UPDATE(syncUserData)

const IsAlliance = race =>
  race == 11 // draenai
  || race == 4 // night elf
  || race == 3 // dwarf
  || race == 1 // human
  || race == 7 // gnome

/*
const _wowMessageEvent = {
  id: 76,
  type: "GENERAL_CHANNEL_MESSAGE",
  at: new Date('2024-10-27T22:55:47.476Z'),
  data: {
    player: { id: 9, name: "Asulol", race: 1, class: 4, account: "TEST1" },
    message: "yoo"
  },
  start: new Date('2024-10-27T22:55:47.617Z'),
  elapsed: 0.068
}
*/

const replaceItemLinks = (_, itemStr, itemName) => {
  const [itemId, _itemEnchant] = itemStr.split(':')
  return `[${itemName}](https://www.wowhead.com/wotlk/item=${itemId}/${itemName.replaceAll(' ', '+')})`
}

wowEvents.on.GENERAL_CHANNEL_MESSAGE(async ({ data }) => {
  const { player, message, ...rest } = data
  const user = activeUsersByAccount[player.account] || (await getDiscordDataForAccount(player.account))
  if (!user) {
    // TODO: try to init data now ?
  }
  const mention = user ? `<@${user.id}>` : ''
  const content = `**[${mention}${player.name}]**: ${message.replace(/\|Hitem:([^|]+)\|h\[([^\]]+)]\|h/, replaceItemLinks)}`
  await discord.rest.POST_CHANNEL_MESSAGE({ channel: generalChannelId, content })
})
