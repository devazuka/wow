import { wowEvents, handleInitialStateEvents } from './wow-events.js'
import './world-chat.js'
import { ac } from './soap.js'
import { sh } from './shell.js'
import { sql } from './db.js'
const encoder = new TextEncoder()

const STATE = {
  startAt: 0, // 0 = not started, positive = time of start, negative = time since off
  version: '', // ex: AzerothCore rev. e21dd803812c+ 2025-06-18 19:10:33 +0100 (master branch) (Unix, Release, Static)
  players: {}, // array of characters ({ id, name, account, race, class })
  battlegrounds: {},
  warsongQueue: {},
  arenaQueue: {},
  last10Active: [],
}

const prefix = Deno.env.get('DB_PREFIX') || 'acore_'
const origin = Deno.env.get('ORIGIN') || 'https://chupato.github.io'
const worldPidFile = Deno.env.get('WORLD_PID_FILE')
const charDb = `${prefix}characters`

const getRecentActivePlayers = () => sql([`
  SELECT
    c.guid as id,
    c.account,
    c.name,
    c.race,
    c.class,
    "World" as location,
    c.logout_time * 1000 as logoutAt,
    0 as loginAt
  FROM ${charDb}.characters c
  ORDER BY c.logout_time DESC
  LIMIT 10
`])

const getOnlinePlayers = () => sql([`
  SELECT
    c.guid as id,
    c.account,
    c.name,
    c.race,
    c.class,
    "World" as location,
    0 as logoutAt,
    UNIX_TIMESTAMP() * 1000 as loginAt
  FROM ${charDb}.characters c
  WHERE c.online = 1
  ORDER BY c.name
`])

const seedInitialState = async () => {
  const [last10Active, onlinePlayers] = await Promise.all([
    getRecentActivePlayers(),
    getOnlinePlayers(),
  ])

  STATE.last10Active = last10Active
  for (const player of onlinePlayers) {
    STATE.players[player.id] = player
    if (!STATE.last10Active.some(({ id }) => id === player.id)) {
      STATE.last10Active.unshift(player)
      STATE.last10Active.length = Math.min(STATE.last10Active.length, 10)
    }
  }

  hasChanged = true
}

let killRequested = false
const killWorldServer = async () => {
  if (!worldPidFile) {
    console.log('WORLD_PID_FILE is not set; skipping worldserver kill')
    return
  }

  let pid
  try {
    pid = (await Deno.readTextFile(worldPidFile)).trim()
  } catch (err) {
    console.error(`Failed to read WORLD_PID_FILE ${worldPidFile}`, err)
    return
  }

  if (!/^[1-9][0-9]*$/.test(pid)) {
    console.error(`Invalid worldserver PID in ${worldPidFile}: ${JSON.stringify(pid)}`)
    return
  }

  console.log('Server stuck, killing PID', pid)
  try {
    await sh`kill -9 ${pid}`
  } catch (err) {
    console.error(`Failed to kill worldserver PID ${pid}`, err)
  }
}

const checkServerState = async () => {
  const infos = await ac`server info`
  setTimeout(checkServerState, infos.success ? 5000 : 250)
  if (!infos.success) {
    if (STATE.startAt > 0) {
      STATE.startAt = -Date.now()
      emit('SHUTDOWN', { at: -STATE.startAt })
      hasChanged = true
    }
    console.log('server unresponsive since', Date.now() + STATE.startAt, 'ms')
    if (!killRequested && ((Date.now() + STATE.startAt) > 20_000)) {
      // more than 1 minute without being able to connect
      // send the kill signal
      killRequested = true
      console.log('Server stuck, trying to kill')
      await killWorldServer()
    }
    return
  }
  killRequested = false
  const [version, ...rest] = infos.output
  STATE.version = version
  if (STATE.startAt < 1) {
    STATE.startAt = Date.now()
    emit('STARTUP', { at: STATE.startAt })
    hasChanged = true
  }
  const parsed = { version }
  for (const line of rest) {
    for (let part of line.split('.')) {
      part = part.trim()
      if (!part) continue
      const i = part.indexOf(':')
      const key = part.slice(0, i).toLowerCase()
        .replace(/[^A-Za-z0-9]+/g, ' ').trim().replaceAll(' ', '_')
      const value = part.slice(i + 2)
      if (!value) continue
      const numVal = Number(value)
      parsed[key] = Number.isNaN(numVal) ? value : numVal
    }
  }
  const expected = Object.values(STATE.players).filter(Boolean).length
  if (parsed.connected_players !== expected) {
    // TODO refresh connected player list
    console.log('wrong number of players should fix!', {
      actual: parsed.connected_players,
      expected,
    })
  }
  return parsed
}

let hasChanged = true
let INIT_PAYLOAD
const getInitState = () => {
  if (hasChanged) {
    hasChanged = false
    INIT_PAYLOAD = encoder.encode(`event: init\ndata: ${JSON.stringify(STATE)}\n\n`)
  }
  return INIT_PAYLOAD
}

const byActivity = (a, b) => (a.loginAt - b.loginAt) || (a.logoutAt - b.logoutAt)

wowEvents.on.PLAYER_LOCATION(({ data: { id, location }}) => {
  const player = STATE.players[id]
  if (!player || player.location === location) return
  player.location = location
  hasChanged = true
  emit('PLAYER_LOCATION', { id, location })
})

wowEvents.on.LOGIN(({ at, data: { player } }) => {
  player.loginAt = at
  player.logoutAt = 0
  player.location = 'World'
  REORDER_ACTIVE_PLAYERS: {
    const { last10Active } = STATE
    let prev = last10Active[0]
    last10Active[0] = player
    if (prev.id === player.id) break REORDER_ACTIVE_PLAYERS
    let i = 0
    while (++i < 10) {
      let tmp = last10Active[i]
      if (!prev) break
      last10Active[i] = prev
      if (!tmp || tmp.id === player.id) break
      prev = tmp
    }
  }
  STATE.players[player.id] = player
  // TODO get discord info & account name
  hasChanged = true
  emit('LOGIN', { player, at })
})

const removePlayerFromQueue = (playerId) => {
  STATE.warsongQueue[playerId] && (STATE.warsongQueue[playerId] = undefined)
  STATE.arenaQueue[playerId] && (STATE.arenaQueue[playerId] = undefined)
}

wowEvents.on.LOGOUT(({ at, data: { player } }) => {
  STATE.players[player.id] = undefined
  removePlayerFromQueue(player.id)
  player.loginAt = 0
  player.logoutAt = at
  REORDER_ACTIVE_PLAYERS: {
    // get index of active player
    const { last10Active } = STATE
    let i = -1
    while (++i < 9) {
      const match = last10Active[i]
      if (!match || match.id === player.id) break
    }
    // push up active players
    let next
    while (next = last10Active[++i]) {
      if (!next.loginAt) {
        last10Active[i - 1] = player
        break
      }
      last10Active[i - 1] = next
      last10Active[i] = player
    }
  }
  hasChanged = true
  emit('LOGOUT', { at, id: player.id })
})

wowEvents.on.STARTUP(({ at }) => {
  STATE.startAt = at
  STATE.warsongQueue = {}
  STATE.arenaQueue = {}
  STATE.players = {}
  STATE.battlegrounds = {}
  hasChanged = true
  emit('STARTUP', { at })
})

wowEvents.on.SHUTDOWN(({ at }) => {
  STATE.startAt = -at
  hasChanged = true
  emit('SHUTDOWN', { at })
})

const toQueueEntry = ({ id, at, source }) => [id, { at, source}]

wowEvents.on.QUEUE_STATE(({ data: { type, arena, queue } }) => {
  const queueName = arena ? 'arenaQueue' : 'warsongQueue'
  if (!STATE[queueName]) return
  STATE[queueName] = Object.fromEntries(queue.map(toQueueEntry))
  hasChanged = true
  emit('QUEUE_STATE', { type: queueName.slice(0, -5), queue })
})

wowEvents.on.BATTLEGROUND_JOIN(({ at, data: { id, playerId, team } }) => {
  const participant = { team, at }
  STATE.battlegrounds[id] && (STATE.battlegrounds[id].participants[playerId] = participant)
  emit('BATTLEGROUND_JOIN', { playerId, id, team, at })
})

wowEvents.on.BATTLEGROUND_LEAVE(({ data: { id, playerId } }) => {
  STATE.battlegrounds[id] && (STATE.battlegrounds[id].participants[playerId] = undefined)
  emit('BATTLEGROUND_LEAVE', { playerId, id })
})

wowEvents.on.BATTLEGROUND_START(({ at, data: { id, type, arena } }) => {
  STATE.battlegrounds[id] = { id, type, start: at, participants: {} }
  hasChanged = true
  emit('BATTLEGROUND_START', { id, type, start: at })
})

wowEvents.on.BATTLEGROUND_END(({ data: { id, winner: _winner } }) => {
  STATE.battlegrounds[id] = undefined
  hasChanged = true
  // TODO: re-query the last 10 warsong
  emit('BATTLEGROUND_END', { id })
})

const eventListeners = new Set()
export const emit = (key, data) => {
  if (!eventListeners.size) return
  console.log(key, data)
  const payload = encoder.encode(`event: ${key}\ndata: ${JSON.stringify(data)}\n\n`)
  for (const controller of eventListeners) {
    controller.enqueue(payload)
  }
}

const json = (data) => new Response(JSON.stringify(data), { headers: JSON_HEADERS })

const ACK_PAYLOAD = encoder.encode('event: ack\ndata: \n\n')
const routes = {
  'GET/players/active': async () => json(await sql([`
    SELECT
      c.account,
      c.name,
      c.race,
      c.class,
      c.logout_time * 1000 as logoutAt
    FROM ${charDb}.characters c
    ORDER BY c.logout_time DESC
    LIMIT 10
  `])),
  // TODO: Get a specific player stats
  // TODO: Get a specific battleground info
  'GET/events': (req) => {
    if (!req.headers.get('accept')?.includes('text/event-stream')) {
      return new Response(null, { status: 400 })
    }

    let controller
    let ackInterval
    const body = new ReadableStream({
      start(c) {
        controller = c
        controller.enqueue(getInitState())
        ackInterval = setInterval(() => {
          try {
            controller.enqueue(ACK_PAYLOAD)
          } catch {
            clearInterval(ackInterval)
            eventListeners.delete(controller)
            try {
              controller.close()
            } catch { /* should already be closed */ }
          }
        }, 15_000)
        eventListeners.add(controller)
      },
      cancel() {
        clearInterval(ackInterval)
        eventListeners.delete(controller)
      },
    })

    return new Response(body, { headers: STREAM_HEADERS })
  }
}

const ALLOWED_METHODS = [...new Set(Object.keys(routes).map(k => k.split('/', 1)[0]))]
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': origin,
  'Vary': 'Origin',
  'Access-Control-Allow-Methods': `${ALLOWED_METHODS.join(', ')}, OPTIONS`,
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',  
}
const JSON_HEADERS = { ...CORS_HEADERS, 'Content-Type': 'application/json' }
const STREAM_HEADERS = {
  ...CORS_HEADERS,
  'Content-Type': 'text/event-stream',
  'Cache-Control': 'no-cache',
  'Connection': 'keep-alive',
}

const serverInfo = await checkServerState()
console.time('Initialize state')
STATE.startAt = await handleInitialStateEvents()
console.timeEnd('Initialize state')
console.time('Seed initial state')
await seedInitialState()
console.timeEnd('Seed initial state')
if (!serverInfo) {
  STATE.startAt = -Date.now()
}
console.log(serverInfo)

// Get last 10 active players

// Get a single player
// - with gear
// - with talent (dual spec !)
// - with recipies learned (?)
//   - list the professions and levelg
// - with pvp stats
//   - personnal rating
//   - last 10 warsong
//   - arena rating
//   - total kill ever / (week ?) / (day ?)
//   - world kill history (ratio, last 10 deaths)

export default {
  fetch(req) {
    const url = new URL(req.url, 'http://localhost')
    const key = `${req.method}${url.pathname}`
    console.log(key, new Date)
    const handler = routes[key]
    if (!handler) return new Response(null, { status: 404 })
    return handler(req, url)
  }
}

// TODO: use Map for internal state and properly convert when JSON.stringify (to entries)
// fineer grain on change management (only keys that changed)
