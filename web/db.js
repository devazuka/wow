// npx mysql-schema-ts mysql://system:$PASSWORD@$HOSTNAME:3306/acore_world  > world-schema.ts

// CREATE USER 'DB_USER' IDENTIFIED BY 'DB_PASSWORD');
// CREATE DATABASE web;
// GRANT ALL PRIVILEGES ON web.* TO 'DB_USER';
// GRANT ALL PRIVILEGES ON acore_auth.* TO 'DB_USER';
// GRANT ALL PRIVILEGES ON acore_world.* TO 'DB_USER';
// GRANT ALL PRIVILEGES ON acore_characters.* TO 'DB_USER';

import { Client, configLogger } from "https://deno.land/x/mysql@v2.12.1/mod.ts"
import { red } from 'jsr:@std/fmt/colors'

await configLogger({ enable: false })
export const db = await new Client().connect({
  hostname: Deno.env.get('HOSTNAME'),
  username: 'system',
  poolSize: 3, // connection limit
  password: Deno.env.get('PASSWORD'),
})

export const sql = async (template, ...args) => {
  const query = template.join('?').trim()
  try {
    return await (query.slice(0, 6).toUpperCase() === 'SELECT'
      ? db.query(query, args)
      : db.execute(query, args))
  } catch (err) {
    console.log(red(query), args)
    throw err
  }
}
/*
Query Graveyard:

UPDATE acore_auth.discord_account SET account_id=${3}
WHERE discord_id=${525092099884974081n}
// 202907732062240769n = 'test1'
// 525092099884974081n = 'test2'

SELECT online, name FROM acore_characters.characters

INSERT INTO acore_auth.discord_message (message, discord_id)
VALUES (${`test-${Math.random()}`}, ${BigInt('143860662987128832')})

UPDATE acore_auth.discord_account SET discord_login=${'Clément'}
WHERE discord_id=${143860662987128832n}

INSERT INTO acore_auth.discord_account (discord_login, account_id, discord_id)
VALUES ('Clément', 1, 143860662987128832)


*/

