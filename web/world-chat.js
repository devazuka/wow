import { unemojify } from 'npm:node-emoji'

import { sql } from './db.js'
import { discord } from './discord-bot.js'
import { wowEvents } from './wow-events.js'
import { describeImage } from './gemini.js'
import { createAccount, setGmLevel, setPassword } from './ra-web.js'

const botUserID = '766251453337436170' // App Id
const guildId = '310186336961167385'
const generalChannelId = '310186336961167385'
const roleGMLevel = {
  '310187315081248779': 3,
  '1333925509171642368': 2,
}

const getHighestGMLevel = (acc, role) => Math.max(acc, roleGMLevel[role] || 0)

const activeUsers = {}
const activeUsersByAccount = {}
const syncUserData = async (member, user) => {
  if (!member) return
  const gmLevel = member.roles.reduce(getHighestGMLevel, 0)
  user || (user = member.user)
  const login = member.nick || user.global_name || user.username
  const id = BigInt(user.id)
  let userData = activeUsers[id]
  if (!userData) {
    const [currentData] = await sql`
      SELECT discord_id AS id, discord_login AS login, account_id AS account
      FROM acore_auth.discord_account WHERE discord_id=${id}
    `
    if (currentData) {
      currentData.account &&
        (activeUsersByAccount[currentData.account] = currentData)
      userData = (activeUsers[id] = currentData)
      if (!userData.account) {
        const account = await createAccount({ username: login })
        await sql`
          UPDATE acore_auth.discord_account
          SET account_id=${account.id}
          WHERE discord_id=${id}
        `
        userData.account = account.id
      }
    } else {
      const account = await createAccount({ username: login })
      await sql`
        INSERT INTO acore_auth.discord_account (discord_id, discord_login, account_id)
        VALUES (${id}, ${login}, ${account.id})
      `
      userData = (activeUsers[id] = { id, login, account: account.id })
    }    
  } else if (!userData.gmLevel) {
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
    await setGmLevel(userData.account, gmLevel)
  }

  return userData
}

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

    if (!members.length) {
      const content = `You must be in <#${guildId}> to talk to me.`
      return discord.rest.POST_CHANNEL_MESSAGE({ channel: event.channel_id, content })
    }

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
