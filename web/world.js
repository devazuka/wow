import { db, sql } from './db.js'

export const creature_template = {
  /**
   * Get a creature.
   * @param {string} entry - the creature template entry
   * @returns {import('./world-schema.ts').CreatureTemplate} The creature template
   */
  get: async (entry) =>
    (await sql`
  SELECT * FROM acore_world.creature_template
  WHERE entry = ${entry}
  LIMIT 1
`)[0],
}

export const creature = {

  /**
   * Get a creature.
   * @param {string} id - the creature id
   * @returns {import('./world-schema.ts').Creature} The creature object
   */
  get: async (id) =>
    (await sql`
  SELECT * FROM acore_world.creature
  WHERE id1 = ${id}
  LIMIT 1
`)[0],
}


await sql`
SELECT * from acore_world.creature_template_model where CreatureID=35365 limit 1
`

const npc2 = await creature_template.get(35365)
