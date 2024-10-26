import { sql } from './db.js'


// TODO:
// - do polling on this table for "not handled events" (every 0.5s)
// - once we start to handle an event, set start time
// - once an event is handled, delete it from the list, save (it in a log file?)

// tables
const event_types = [
  'GM_COMMAND', // { player: character_id, target_type, target, map, x, y, z, command }
  'ARENA_2V2_RATED_QUEUE', // { player: character_id }
  'ARENA_3V3_RATED_QUEUE', // { player: character_id }
  'ARENA_5V5_RATED_QUEUE', // { player: character_id }
  'ARENA_2V2_SKIRMISH_QUEUE', // { player: character_id }
  'ARENA_3V3_SKIRMISH_QUEUE', // { player: character_id }
  'ARENA_5V5_SKIRMISH_QUEUE', // { player: character_id }
  'BATTLEGROUND_QUEUE', // { player: character_id }
  'PVP_KILL', // { player: character_id, target: character_id }
  'DUEL_WIN', // { player: character_id, target: character_id }
  'OBTAIN_ARENA_GRAND_MASTER', // { player: character_id }
  'OBTAIN_LUCKY_FISHING_HAT', // { player: character_id }
]
await sql`DROP TABLE web.event;`



await sql`
CREATE TABLE IF NOT EXISTS web.event (
  id    INT  PRIMARY KEY AUTO_INCREMENT,
  type  TEXT NOT NULL,
  at    TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP(3),
  data  JSON DEFAULT NULL,
  start TIMESTAMP(3) DEFAULT NULL
);
`

export const handlers = {
  GM_COMMAND: () => {},
  ARENA_2V2_RATED_QUEUE: () => {},
  ARENA_3V3_RATED_QUEUE: () => {},
  ARENA_5V5_RATED_QUEUE: () => {},
  ARENA_2V2_SKIRMISH_QUEUE: () => {},
  ARENA_3V3_SKIRMISH_QUEUE: () => {},
  ARENA_5V5_SKIRMISH_QUEUE: () => {},
  ARENA_COMPLETED: () => {},
  BATTLEGROUND_QUEUE: () => {},
  BATTLEGROUND_COMPLETED: () => {},
  PVP_KILL: () => {},
  DUEL_WIN: () => {},
  OBTAIN_ARENA_GRAND_MASTER: () => {},
  OBTAIN_LUCKY_FISHING_HAT: () => {},
}

async function handleNewEvents() {
  for (const event of await sql`SELECT * FROM web.event`) {
    try {
      event.start = new Date()
      event.data = event.data ? JSON.parse(event.data) : {}
      await sql`UPDATE web.event SET start=FROM_UNIXTIME(${event.start.getTime() / 1000}) WHERE id=${event.id}`
      // await discord.sendMessage()
      await handlers[event.type]?.(event)
      await sql`DELETE FROM web.event WHERE id=${event.id}`
      event.elapsed = (Date.now() - event.start) / 1000
      console.log(event)
    } catch (err) {
      console.error(err)
    }
  }
  setTimeout(handleNewEvents, 500)
}


await sql`
INSERT INTO web.event (type, data) VALUES 
('login', JSON_OBJECT('username', 'user1', 'status', 'success')),
('logout', JSON_OBJECT('username', 'user2', 'duration', 120)),
('purchase', JSON_OBJECT('item', 'sword', 'price', 100, 'currency', 'gold')),
('login', JSON_OBJECT('username', 'user3', 'status', 'failure', 'error', 'invalid password')),
('update_profile', JSON_OBJECT('username', 'user4', 'email', 'user4@example.com'));
`

handleNewEvents()


setTimeout(() => {

sql`
INSERT INTO web.event (type, data) VALUES (
  'PVP_KILL',
  JSON_OBJECT(
    'player', ${1},
    'target', ${23},
    'map', ${754},
    'z', ${7546.5465}
  )
);
`
}, 800)

/*
local event_id = 1
local name = "example_name"
local age = 30
local hobbies = {"reading", "coding", "gaming"}

local query = string.format([[
  INSERT INTO web_event_data (event_id, data) 
  VALUES (%d, JSON_OBJECT(
    'name', '%s', 
    'details', JSON_OBJECT(
      'age', %d, 
      'hobbies', JSON_ARRAY('%s', '%s', '%s')
    )
  ))
]], event_id, name, age, hobbies[1], hobbies[2], hobbies[3])

WorldDBExecute(query)
*/