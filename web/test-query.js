import { sql } from './db.js'
import { createAccount, setGmLevel, setPassword } from './ra-web.js'


// await sql`SELECT * FROM world.reference_loot_template LIMIT 10`


await sql`
replace into chupato_world.player_class_stats
(class, level, Strength, Agility, Stamina, Intellect, Spirit)
values
(6, 19, 10, 10, 10, 10, 10),
(6, 18, 10, 10, 10, 10, 10);
`
/*
const test = await sql`
TRUNCATE chupato_world.item_template;
`
await sql`
INSERT INTO chupato_world.item_template SELECT * FROM world.item_template;
`
*/
/*

const accounts = await sql`
SELECT * FROM acore_auth.discord_account
WHERE account_id IS NULL
`
29
Mageroyal
Briarthorn
Bruiseweed

for (const account of accounts) {
  const user = await createAccount({ username: account.discord_login })
  const update = await sql`
    UPDATE acore_auth.discord_account
    SET account_id=${account.id}
    WHERE discord_id=${account.discord_id}
  `
}
OnBattlegroundStart
OnBattlegroundEnd
OnBattlegroundRemovePlayerAtLeave
OnBattlegroundAddPlayer

/*
const data = await sql`
  INSERT INTO acore_auth.discord_account (discord_id, discord_login, account_id)
  VALUES (${id}, ${login}, ${account.id})
`
const account = await createAccount({ username: login })*/

/*
worldserver Terminated after 10 seconds, termination count: : 11
Running without GDB
#----------------------------------------------------------------------#

>> FATAL ERROR

# Location: /root/services/wow/core/src/server/database/Database/DatabaseWorkerPool.cpp:68
# Function: DatabaseWorkerPool
# Condition: isSameClientDB
# Message: Used MySQL library version (8.0.41 id 80041) does not match the version id used to compile AzerothCore (id 80040).
Search the wiki for ACE00046 in Common Errors (https://www.azerothcore.org/wiki/common-errors#ace00046).

#----------------------------------------------------------------------#
*/