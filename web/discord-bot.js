import { cyan, magenta, brightRed } from 'jsr:@std/fmt/colors'
const TOKEN = Deno.env.get('DISCORD_TOKEN')

const ONCE = {}
const ON = {}

const eventTypes = {
  GUILDS: [
    // 'GUILD_CREATE',
    // 'GUILD_UPDATE',
    // 'GUILD_DELETE',
    // 'GUILD_ROLE_CREATE',
    // 'GUILD_ROLE_UPDATE',
    // 'GUILD_ROLE_DELETE',
    // 'CHANNEL_CREATE',
    // 'CHANNEL_UPDATE',
    // 'CHANNEL_DELETE',
    // 'CHANNEL_PINS_UPDATE',
  ],
  GUILD_MEMBERS: [
    // 'GUILD_MEMBER_ADD',
    'GUILD_MEMBER_UPDATE',
    // 'GUILD_MEMBER_REMOVE',
    'GUILD_MEMBERS_CHUNK',
  ],
  GUILD_BANS: [
    // 'GUILD_BAN_ADD',
    // 'GUILD_BAN_REMOVE',
  ],
  GUILD_EMOJIS: [
    // 'GUILD_EMOJIS_UPDATE',
  ],
  GUILD_INTEGRATIONS: [
    // 'GUILD_INTEGRATIONS_UPDATE',
    // 'INTEGRATION_CREATE',
    // 'INTEGRATION_UPDATE',
    // 'INTEGRATION_DELETE',
  ],
  GUILD_WEBHOOKS: [
    // 'WEBHOOKS_UPDATE',
  ],
  GUILD_INVITES: [
    // 'INVITE_CREATE',
    // 'INVITE_DELETE',
  ],
  GUILD_VOICE_STATES: [
    // 'VOICE_STATE_UPDATE',
  ],
  GUILD_PRESENCES: [
    // 'PRESENCE_UPDATE',
  ],
  GUILD_MESSAGES: [
    'MESSAGE_CREATE',
    // 'MESSAGE_UPDATE',
    // 'MESSAGE_DELETE',
    // 'MESSAGE_DELETE_BULK',
  ],
  GUILD_MESSAGE_REACTIONS: [
    // 'MESSAGE_REACTION_ADD',
    // 'MESSAGE_REACTION_REMOVE',
    // 'MESSAGE_REACTION_REMOVE_ALL',
    // 'MESSAGE_REACTION_REMOVE_EMOJI',
  ],
  GUILD_MESSAGE_TYPING: [
    // 'TYPING_START',
  ],
  DIRECT_MESSAGES: [
    'MESSAGE_CREATE',
    // 'MESSAGE_UPDATE',
    // 'MESSAGE_DELETE',
    // 'CHANNEL_PINS_UPDATE',
  ],
  DIRECT_MESSAGE_REACTIONS: [
    // 'MESSAGE_REACTION_ADD',
    // 'MESSAGE_REACTION_REMOVE',
    // 'MESSAGE_REACTION_REMOVE_ALL',
    // 'MESSAGE_REACTION_REMOVE_EMOJI',
  ],
  DIRECT_MESSAGE_TYPING: [
    // 'TYPING_START',
  ],
}

const actionTypes = {
  REQUEST_GUILD_MEMBERS: 8,
}


const restActionTypes = [
  { method: 'POST', action: ({ channelId, }) => `/channels/${channelId}/messages` }
]

export const discord = { once: {}, on: {}, do: {}, rest: {} }

const registerEvent = (type) => {
  const on = (ON[type] = new Set())
  const once = (ONCE[type] = new Set())
  const next = (fn) => once.add(fn)
  discord.on[type] = (fn) => on.add(fn)
  discord.once[type] = () => new Promise(next)
}

let intents = 1 << 15 // MESSAGE_CONTENT intent
Object.values(eventTypes).forEach((types, index) => {
  types.length && (intents |= 1 << index)
  types.forEach(registerEvent)
})

let handleMessages = () => {}

const messagesToSend = new Set()
for (const [key, op] of Object.entries(actionTypes)) {
  discord.do[key] = d => {
    messagesToSend.add(JSON.stringify({ op, d }))
    handleMessages()
    return discord.once.GUILD_MEMBERS_CHUNK()
  }
}

registerEvent('READY')

let gatewayUrl = 'wss://gateway.discord.gg'
discord.once.READY().then(d => gatewayUrl = d.resume_gateway_url)
const log = (type, d) => {
  if (!d) return console.log(type, null)
  const {
    v,
    user_settings,
    session_id,
    session_type,
    resume_gateway_url,
    private_channels,
    presences,
    guilds,
    guild_join_requests,
    geo_ordered_rtc_regions,
    game_relationships,
    application,
    relationships,
    auth,
    nonce,
    flags,
    embeds,
    guild_id,
    channel_id,
    channel_type,
    components,
    attachments,
    edited_timestamp,
    mentions,
    mention_roles,
    mention_everyone,
    pinned,
    tts,
    _trace,
    member,
    author,
    user,
    ...dd } = d

  user && (dd.user = { username: user.username, id: user.id })
  member && (dd.member = member.nick)
  author && (dd.author = { username: author.username, id: author.id })
  console.log(type, dd)
}

let last = Date.now()
const connect = failCount => {
  console.log('connecting to', magenta(gatewayUrl))
  const start = Date.now()
  const ws = new WebSocket(`${gatewayUrl}/?v=10&encoding=json`)
  let s = null
  let heartbeatAc
  let reconnecting
  const reconnect = () => {
    if (reconnecting) return
    reconnecting = true
    // limit reconnection attemps rate exponentially
    const nextTryIn = Math.max(0, (start + 1000*(2**failCount - 1) - Date.now()))
    setTimeout(connect, nextTryIn, failCount + 1)
  }
  // reset fail count once ready
  discord.once.READY().then(() => {
    console.log('connected in', Date.now() - last)
    handleMessages = () => {
      for (const message of messagesToSend) {
        ws.send(message)
        messagesToSend.delete(message)
      }
    }
    failCount = 0
    handleMessages()
  })

  const resetConnection = () => {
    // console.log(cyan('ZOMBIFED'), 'reconnect the client', new Date())
    // TODO: try too resume ?
    ws.close()
    reconnect()
  }

  const heartbeat = () => {
    heartbeatAc = setTimeout(resetConnection, 250)
    last = Date.now()
    ws.OPEN && ws.send(JSON.stringify({ op: 1, d: s }))
  }

  ws.addEventListener('close', (event) => {
    console.log('close socket', JSON.stringify({
      timeStamp: event.timeStamp,
      type: event.type,
      wasClean: event.wasClean,
      code: event.code,
      reason: event.reason,
    }))
    reconnect()
  })

  ws.addEventListener('message', (event) => {
    const { t, s, op, d } = JSON.parse(event.data)
    switch (op) {
      case 0: {
        // DISPATCH
        log(`${cyan(t)}`, d)
        const on = ON[t]
        const once = ONCE[t]
        if (!on) return
        for (const fn of on) fn(d)
        for (const fn of once) fn(d)
        once.clear()
        return
      }
      case 1: // HEARTBEAT
        return heartbeat()
      case 2: // IDENTIFY
        return log('IDENTIFY', d)
      case 3: // STATUSUPDATE
        return log('STATUSUPDATE', d)
      case 4: // VOICESTATEUPDATE
        return log('VOICESTATEUPDATE', d)
      case 6: // RESUME
        return log('RESUME', d)
      case 7: // RECONNECT
        return log('RECONNECT', d)
      case 8: // REQUESTGUILDMEMBERS
        return log('REQUESTGUILDMEMBERS', d)
      case 9: {
        resetConnection()
        return log('INVALIDSESSION', d)
      }
      case 10: // HELLO
        ws.send(
          JSON.stringify({
            op: 2, // IDENTIFY
            d: {
              token: TOKEN,
              intents,
              properties: { $os: 'linux', $browser: 'wow19', $device: 'wow19' },
            },
          }),
        )
        setInterval(heartbeat, d.heartbeat_interval)
        return
      case 11: // HEARTBEATAC
        // log('HEARTBEATAC', { delay: Date.now() - last })
        return clearTimeout(heartbeatAc)
      default:
        log(`OP_${op}`, d)
    }
  })
}

connect(0)

// DISCORD_APP_ID
// DISCORD_PUB_KEY
// DISCORD_TOKEN
// DISCORD_CLIENT_SECRET
const authorization = `Bot ${TOKEN}`
const apiUrl = "https://discord.com/api/v10"
const rest = async (pathname, params) => {
  console.log(pathname, params)
  if (params.body && typeof params.body !== 'string') {
    const headers = params.headers || (params.headers = {})
    const type = headers['content-type'] || headers['Content-Type']
    if (type === "application/x-www-form-urlencoded") {
      params.body = String(new URLSearchParams(params.body))
    } else  {
      type || (headers['content-type'] = 'application/json')
      params.body = JSON.stringify(params.body)
    }
  }
  const res = await fetch(`${apiUrl}${pathname}`, params)
  // TODO: check the response headers
  // to see if I should attempt JSON parsing
  let response = await res.text()
  try { response = JSON.parse(response) } catch {}
  if (!res.ok) {
    const err = Error(res.statusText)
    err.response = response
    console.log(res)
    console.log(response)
    throw err
  }
  return response
}

discord.rest.POST_CHANNEL_MESSAGE = ({ channel, content }) =>
  rest(`/channels/${channel}/messages`, {
    method: "POST",
    headers: { authorization },
    body: {
      content,
      flags: 4, // disable embeds
      allowed_mentions: { parse: [] }, // disable pings
    },
  })


const API = method => (url, init) => fetch(`https://discord.com/api/v10${url}`, {
  method,
  ...init,
  body: init?.body == null
    ? undefined
    : (typeof init.body === 'string' || init.body instanceof Uint8Array)
    ? init.body
    : JSON.stringify(init.body),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bot ${TOKEN}`,
    ...init?.headers,
  },
})

const POST = API('POST')
discord.do.createMessage = ({ channelId, content }) =>
  POST(`/channels/${channelId}/messages`, {
    method: 'POST',
    body: { content },
  })
