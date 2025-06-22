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
