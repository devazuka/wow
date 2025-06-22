import { wowEvents, handleInitialStateEvents } from './wow-events.js'
import './world-chat.js'
import { ac } from './soap.js'
import { sh } from './shell.js'
const encoder = new TextEncoder()

const STATE = {
  startAt: 0, // 0 = not started, positive = time of start, negative = time since off
  version: '', // ex: AzerothCore rev. e21dd803812c+ 2025-06-18 19:10:33 +0100 (master branch) (Unix, Release, Static)
  players: {}, // array of characters ({ id, name, account, race, class })
  battlegrounds: {},
  warsongQueue: {},
  arena2v2Queue: {},
  arena3v3Queue: {},
  arenaSoloQueue: {},
  arena5v5Queue: {},
}

let killRequested = false
const checkServerState = async () => {
  const infos = await ac`server info`
  if (!infos.success) {
    if (STATE.startAt > 0) {
      STATE.startAt = -Date.now()
      emit('SHUTDOWN', { at: Date.now() })
      hasChanged = true
    }
    setTimeout(checkServerState, 250)
    console.log('server unresponsive since', Date.now() + STATE.startAt, 'ms')
    if (!killRequested && ((Date.now() + STATE.startAt) > 60_000)) {
      // more than 1 minute without being able to connect
      // send the kill signal
      killRequested = true
      console.log('Server stuck, trying to kill')
      await sh`killall -9 worldserver`
    }
    return
  }
  setTimeout(checkServerState, 5000)
  killRequested = false
  const [version, ...rest] = infos.output
  STATE.version = version
  const parsed = { version }
  for (const line of rest) {
    for (let part of line.split('.')) {
      part = part.trim()
      if (!part) continue
      const i = part.indexOf(':')
      const key = part.slice(0, i).replace('|- ', '')
      const value = part.slice(i + 2)
      if (!value) continue
      const numVal = Number(value)
      parsed[key] = Number.isNaN(numVal) ? value : numVal
    }
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

wowEvents.on.LOGIN(({ at, data: { player } }) => {
  STATE.players[player.id] = player
  // TODO get discord info & account name
  hasChanged = true
  emit('LOGIN', { player, at })
})

const removePlayerFromQueue = (playerId) => {
  STATE.warsongQueue[playerId] && (STATE.warsongQueue[playerId] = undefined)
  STATE.arena2v2Queue[playerId] && (STATE.arena2v2Queue[playerId] = undefined)
  STATE.arena3v3Queue[playerId] && (STATE.arena3v3Queue[playerId] = undefined)
  STATE.arena5v5Queue[playerId] && (STATE.arena5v5Queue[playerId] = undefined)
}

wowEvents.on.LOGOUT(({ data: { player } }) => {
  STATE.players[player.id] = undefined
  removePlayerFromQueue(player.id)
  hasChanged = true
  emit('LOGOUT', { id: player.id })
})

wowEvents.on.STARTUP(({ at }) => {
  STATE.startAt = at
  hasChanged = true
  emit('STARTUP', { at })
})

wowEvents.on.SHUTDOWN(({ at }) => {
  STATE.startAt = -at
  hasChanged = true
  emit('SHUTDOWN', { at })
})

const getQueueName = (type, arena) => {
  if (arena === 2) return 'arena2v2Queue'
  if (arena === 3) return 'arena3v3Queue'
  if (arena === 4) return 'arenaSoloQueue'
  if (arena === 5) return 'arena5v5Queue'
  if (type === 2) return 'warsongQueue'
}
const toQueueEntry = ({ id, at, source }) => [id, { at, source}]

wowEvents.on.QUEUE_STATE(({ data: { type, arena, queue } }) => {
  const queueName = getQueueName(type, arena)
  if (!STATE[queueName]) return
  STATE[queueName] = Object.fromEntries(queue.map(toQueueEntry))
  hasChanged = true
  emit('QUEUE_STATE', { type, arena, queue })
})

wowEvents.on.BATTLEGROUND_JOIN(({ at, data: { id, playerId, team } }) => {
  const participant = { team, at }
  STATE.battlegrounds[id] && (STATE.battlegrounds[id].participants[playerId] = participant)
  emit('BATTLEGROUND_JOIN', { playerId, id, team, at })
})

wowEvents.on.BATTLEGROUND_LEAVE(({ data: { id, playerId } }) => {
  STATE.battlegrounds[id] && (STATE.battlegrounds[id].participants[playerId] = undefined)
  emit('BATTLEGROUND_LEAVE', { player, id })
})

wowEvents.on.BATTLEGROUND_START(({ at, data: { id, type, arena } }) => {
  STATE.battlegrounds[id] = { id, type, start: at, participants: {} }
  hasChanged = true
  emit('BATTLEGROUND_START', { id, type, start: at })
})

wowEvents.on.BATTLEGROUND_END(({ data: { id } }) => {
  STATE.battlegrounds[id] = undefined
  hasChanged = true
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

const ACK_PAYLOAD = encoder.encode('event: ack\ndata: \n\n')
const routes = {
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
  'Access-Control-Allow-Origin': 'https://chupato.github.io',
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
if (!serverInfo) {
  STATE.startAt = -Date.now()
}
console.log(serverInfo)

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
