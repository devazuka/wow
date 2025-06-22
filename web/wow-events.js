import { sql } from './db.js'

// tables

const ONCE = {}
const ON = {}
export const wowEvents = { on: {}, once: {} }
for (const type of [
  'COMMAND', // { player, target?, map, x, y, z, o, command }
  'LOGIN', // { id } -- playerId
  'LOGOUT', // { id } -- playerId
  'STARTUP',
  'SHUTDOWN',
  'QUEUE_STATE',
  'BATTLEGROUND_JOIN',
  'BATTLEGROUND_LEAVE',
  'BATTLEGROUND_START',
  'BATTLEGROUND_END',
  'PVP_KILL', // { player, victim, map, x, y, z }
  'LUCKY_FISHING_HAT_OBTAINED', // { player }
  'ARENA_GRAND_MASTER_OBTAINED', // { player }
  'GENERAL_CHANNEL_MESSAGE',
]) {
  const on = (ON[type] = new Set())
  const once = (ONCE[type] = new Set())
  const next = (fn) => once.add(fn)
  wowEvents.on[type] = (fn) => on.add(fn)
  wowEvents.once[type] = () => new Promise(next)
}

// await sql`DROP TABLE acore_auth.web_events;`
await sql`
CREATE TABLE IF NOT EXISTS acore_auth.web_events (
  id    INT  PRIMARY KEY AUTO_INCREMENT,
  type  TEXT NOT NULL,
  at    TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP(3),
  data  JSON DEFAULT NULL,
  start TIMESTAMP(3) DEFAULT NULL,
  end   TIMESTAMP(3) DEFAULT NULL
);
`

// Those events are not preserved in the database
const purgedEvents = new Set([
  'GENERAL_CHANNEL_MESSAGE',
  'BATTLEGROUND_QUEUE',
  'BATTLEGROUND_END',
  'ARENA_QUEUE',
  'ARENA_END',
])

const handleSingleEvent = async event => {
  try {
    event.start = Date.now()
    event.data = event.data ? JSON.parse(event.data) : {}
    event.at = event.at.getTime()
    const on = ON[event.type]
    if (on) {
      for (const fn of on) await fn(event)
    }
    const once = ONCE[event.type]
    if (once) {
      for (const fn of once) await fn(event)
      once.clear()
    }
  } catch (err) {
    console.log('Unable to handle event')
    console.log(event)
    console.log(err)
  }
}

async function handleNewEvents() {
  const events = await sql`
    SELECT * FROM acore_auth.web_events WHERE start IS NULL
  `

  for (const event of events) {
    try {
      await sql`UPDATE acore_auth.web_events SET start=NOW(3) WHERE id=${event.id}`
      await handleSingleEvent(event)
      if (purgedEvents.has(event.type)) {
        await sql`DELETE FROM acore_auth.web_events WHERE id=${event.id}`
        event.purged = true
      } else {
        await sql`UPDATE acore_auth.web_events SET end=NOW(3) WHERE id=${event.id}`
      }
      event.elapsed = (Date.now() - event.start) / 1000
      console.log('acore_auth.web_events:', event)
    } catch (err) {
      console.error(err)
    }
  }
  setTimeout(handleNewEvents, 500)
}

export async function handleInitialStateEvents() {
  const [startup] = await sql`
    SELECT at FROM acore_auth.web_events
    WHERE type = "STARTUP"
    ORDER BY at DESC LIMIT 1
  `

  const events = await sql`
    SELECT * FROM acore_auth.web_events WHERE at > ${startup.at}
  `

  for (const event of events) {
    await handleSingleEvent(event)
  }
  handleNewEvents()
  return startup.at.getTime()
}
