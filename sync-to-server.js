import { cyan, magenta, yellow, green, red } from 'jsr:@std/fmt/colors'
import { encodeBase64Url } from 'jsr:@std/encoding/base64url'
import * as DBC from './dbc.ts'
import { sql } from './web/db.js'
import { ac } from './web/soap.js'

const Enum = (o) => Object.fromEntries(
  Object.entries(o).flatMap(e => [e, e.toReversed()]),
)

const slots = Enum({
  HEAD: 0,
  NECK: 1,
  SHOULDERS: 2,
  BODY: 3,
  CHEST: 4,
  WAIST: 5,
  LEGS: 6,
  FEET: 7,
  WRISTS: 8,
  HANDS: 9,
  FINGER1: 10,
  FINGER2: 11,
  TRINKET1: 12,
  TRINKET2: 13,
  BACK: 14,
  MAINHAND: 15,
  OFFHAND: 16,
  RANGED: 17,
  TABARD: 18,
  // AMMO: 23,
})

const professions = Enum({
  Blacksmithing: 164,
  Leatherworking: 165,
  Alchemy: 171,
  Herbalism: 182,
  Mining: 186,
  Tailoring: 197,
  Engineering: 202,
  Enchanting: 333,
  Skinning: 393,
  Jewelcrafting: 755,
  Inscription: 773,
})

const gathering = [
  professions.Skinning,
  professions.Mining,
  professions.Herbalism,
]

const sheetID = '11PVL9YA1lmCoqaIguKjwuDFX58e8hzAh6kzDXA4jBV4'
const getSheet = async (page) =>
  (await fetch(`https://opensheet.elk.sh/${sheetID}/${page}`)).arrayBuffer()

const ts = (init) => {
  const at = new Date(init)
  const dd = String(at.getDate()).padStart(2, '0')
  const MM = String(at.getMonth() + 1).padStart(2, '0')
  const hh = String(at.getHours()).padStart(2, '0')
  const mm = String(at.getMinutes()).padStart(2, '0')
  // const ss = String(at.getSeconds()).padStart(2, '0')
  // const ms = String(at.getMilliseconds()).padStart(2, '0').slice(0, 2)
  return `${dd}/${MM} ${hh}h${mm}`
}

const tmpDir = await Deno.makeTempDir()

const scp = async (src, dest) =>
  new Deno.Command('scp', {
    stderr: 'inherit',
    stdout: 'inherit',
    args: [src, `root@ssh.devazuka.com:/root/services/wow/${dest}`]
  }).output()

const syncDBC = async (dbcName, dbc) => {
  await Deno.writeFile(`${tmpDir}/${dbcName}`, dbc)
  await scp(`${tmpDir}/${dbcName}`, `core/env/dist/bin/dbc/${dbcName}`)
  await Deno.remove(`${tmpDir}/${dbcName}`)
}

const openDBC = async (dbcName) => {
  const bytes = await Deno.readFile(`data/dbc/${dbcName}`)
  return DBC.fromBytes(dbcName, bytes.buffer)
}

const updateDBC = async (dbcName, data) => {
  try {
    const dbc = (await openDBC(dbcName)).assign(data).toBytes()
    await syncDBC(dbcName, dbc)
  } catch (err) {
    console.error(red(dbcName), data)
    throw err
  }
}

const resetDBC = (dbcName) =>
  scp(`data/dbc/${dbcName}`, `core/env/dist/bin/dbc/${dbcName}`)

const replaceDBC = async (dbcName, data) => {
  const dbc = DBC.toBytes(dbcName, data)
  await Deno.writeFile(`${tmpDir}\\${dbcName}`, dbc)
  await syncDBC(dbcName, dbc)
}

const actions = []
const onCodeChange = async (action) => {
  const { promise, resolve } = Promise.withResolvers()
  actions.push(promise)
  const label = action.name || `ACTION${actions.length}`
  try {
    const bytes = new TextEncoder().encode(String(action))
    const sha1 = encodeBase64Url(await crypto.subtle.digest('SHA-1', bytes))
    const key = `${label}-sha`
    const lastChange = JSON.parse(localStorage[key] || '{}')
    if (lastChange.sha1 === sha1) {
      return resolve({ label, data: lastChange.at })
    }
    await action()
    localStorage[key] = JSON.stringify({ sha1, at: Date.now() })
    return resolve({ label, data: Date.now(), justUpdated: true })
  } catch (err) {
    return resolve({ label, error: err })
  }
}

const onSheetChange = async (input, action) => {
  const { promise, resolve } = Promise.withResolvers()
  actions.push(promise)
  const sheetPages = Array.isArray(input) ? input : [input]
  const label = sheetPages.join('|')
  try {
    const sheets = await Promise.all(sheetPages.map(getSheet))
    const actionData = new TextEncoder().encode(String(action))
    const len = sheets.reduce((total, data) => total + data.byteLength, actionData.byteLength)
    const combined = new Uint8Array(len)
    let cursor = 0
    for (const data of [...sheets, actionData]) {
      combined.set(data, cursor)
      cursor += data.byteLength
    }
    const sha1 = encodeBase64Url(await crypto.subtle.digest('SHA-1', combined))
    const key = `${label}-sha`
    const lastChange = JSON.parse(localStorage[key] || '{}')
    if (lastChange.sha1 === sha1) {
      return resolve({ label, data: lastChange.at })
    }
    await action(...sheets.map(data => JSON.parse(new TextDecoder().decode(data))))
    localStorage[key] = JSON.stringify({ sha1, at: Date.now() })
    return resolve({ label, data: Date.now(), justUpdated: true })
  } catch (err) {
    return resolve({ label, error: err })
  }
}

/*
  await sql`DELETE FROM acore_characters.character_talent`
  await sql`UPDATE acore_characters.characters SET resettalents_cost = 0, resettalents_time = 0`
  await resetDBC('Talent.dbc')
*/

onSheetChange('TALENT.DBC', async (data) => {
  await replaceDBC('Talent.dbc', data)
  await sql`DELETE FROM acore_characters.character_talent`
  await sql`UPDATE acore_characters.characters SET resettalents_cost = 0, resettalents_time = 0`
})

onSheetChange('LFGDUNGEONS.DBC', async (data) => {
  await updateDBC('LFGDungeons.dbc', data)
})

// VerifiedBuild = 900000 // creature in stranglethorn
onSheetChange('CREATURE', async (data) => {
  const result = await Promise.all(data.map(async ({ minlevel, maxlevel, loot, entry }) => {
    await sql`UPDATE chupato_world.creature_template
    SET minlevel = ${minlevel || 1},
        maxlevel = ${maxlevel || minlevel || 1},
        VerifiedBuild = 900000
    WHERE entry = ${entry}`
  }))
})

onSheetChange(['GEAR', 'CLASS'], async (gear, classSpells) => {
  const startItems = {}
  // force to re-write
  for (const { class: c, item, slot } of gear) {
    if (!c || !item) continue
    const outfit = startItems[c.toUpperCase()] || (startItems[c.toUpperCase()] = [])
    item && outfit.push({ itemId: item, slot: slots[slot] ?? 'nil' })
  }

  const startingSpells = {}
  const missingClasses = new Set([
    'warrior',
    'paladin',
    'hunter',
    'rogue',
    'priest',
    'deathknight',
    'shaman',
    'mage',
    'warlock',
    'druid',
  ])

  const HUMAN = 1
  const ORC = 2
  const DWARF = 3
  const NIGHTELF = 4
  const UNDEAD = 5
  const TAUREN = 6
  const GNOME = 7
  const TROLL = 8
  const GOBLIN = 9
  const BLOODELF = 10
  const DRAENEI = 11

  const racesForClasses = {
    warrior: [HUMAN,ORC,DWARF,NIGHTELF,UNDEAD,TAUREN,GNOME,TROLL,DRAENEI],
    paladin: [HUMAN,DWARF,BLOODELF,DRAENEI],
    hunter: [ORC,DWARF,NIGHTELF,UNDEAD,TAUREN,TROLL,BLOODELF,DRAENEI],
    rogue: [HUMAN,ORC,DWARF,NIGHTELF,UNDEAD,GNOME,TROLL,BLOODELF],
    priest: [HUMAN,DWARF,NIGHTELF,UNDEAD,TROLL,BLOODELF,DRAENEI],
    deathknight: [HUMAN,ORC,DWARF,NIGHTELF,UNDEAD,TAUREN,GNOME,TROLL,BLOODELF,DRAENEI],
    shaman: [ORC,TAUREN,TROLL,DRAENEI],
    mage: [HUMAN,UNDEAD,GNOME,TROLL,BLOODELF,DRAENEI],
    warlock: [HUMAN,ORC,UNDEAD,GNOME,BLOODELF],
    druid: [NIGHTELF,TAUREN],
  }
  // TODO: generate sql instead of lua script
  // also insert actions and shit
  // have fun, take care.

  for (const spell of classSpells) {
    if (!spell.id) continue
    const c = spell.class?.toLowerCase()
    missingClasses.delete(c)
    ;(startingSpells[c] || (startingSpells[c] = [])).push(spell.id)
  }

  const startingSpellLua = Object.entries(startingSpells)
    .map(([className, spellId]) => `[${className.toUpperCase()}] = { ${spellId.join(', ')} },
`).join('  ')

  const startingItemLua = Object.entries(startItems)
    .map(([className, items]) => `[${className.toUpperCase()}] = { ${items.map(i => `{ item_id = ${i.itemId}, slot = ${i.slot} }`).join(', ')} },
`).join('  ')

  await Deno.writeTextFile(`./lua-scripts/starting-info.lua`, `
local starting_info = {}

starting_info.spells = {
  ${startingSpellLua}
  ${[...missingClasses].map(c => `[${c.toUpperCase()}] = {},\n`).join('  ')}
}

starting_info.items = {
  ${startingItemLua}
  ${[...missingClasses].map(c => `[${c.toUpperCase()}] = {},\n`).join('  ')}
}

return starting_info
`)

  /* reset item sell price
  await sql`
    UPDATE chupato_world.item_template AS chupato_item
    JOIN acore_world.item_template AS acore_item
      ON chupato_item.entry = acore_item.entry
    SET chupato_item.SellPrice = acore_item.SellPrice
  `
  */
  for (const item of Object.values(startItems)) {
    await sql`
      UPDATE chupato_world.item_template
      SET SellPrice = 1
      WHERE entry = ${item.itemId}
    `
  }
})

const forceAtLearn = new Set([
  13538, // Enchant bracer deflection
  13931, // Enchant chest absorbtion
])

const removedSkills = new Set([
  // Tailoring
  3908, // Apprentice
  3909, // Journeyman
  3915, // rown Linen Shirt
  2387, // Linen Cloak
  12044, // Simple Linen Pants 

  // Leatherworking
  2108, // Apprentice
  3104, // Journeyman
  9058, // Handstitched Leather Cloak
  7126, // Handstitched Leather Vest
  2149, // Handstitched Leather Boots
  9059, // Handstitched Leather Bracers

  // Blacksmithing
  2018, // Apprentice
  3100, // Journeyman
  2660, // Rough Sharpening Stone
  3115, // Rough Weightstone

  // Inscription
  48114, // Scroll of Intellect
  48116, // Scroll of Spirit
  45382, // Scroll of Stamina

  // Enchanting
  7418, // wesh
  7428, // wesh
])

// const apprentice = {
//   Tailoring: 3908,
//   Blacksmithing: 2018,
//   Leatherworking: 2108,
// }
// 
// const journeyman = {
//   Blacksmithing: 3100,
//   Tailoring: 3909,
//   Leatherworking: 3104,
// }

const trainers = {
  Leatherworking: 2846,
  Blacksmithing: 2836,
  Tailoring: 2627,
}

onCodeChange(async function REMOVE_ENCHANT_REQUIREMENTS() {

  const spellItemEnchantment = await openDBC('SpellItemEnchantment.dbc')
  for (const row of spellItemEnchantment.rows) {
    row.MinLevel = 0
  }
  await syncDBC('SpellItemEnchantment.dbc', spellItemEnchantment.toBytes())
})

onCodeChange(async function SET_DEFAULTS() {
  // Set starting location
  await sql`
    UPDATE chupato_world.playercreateinfo
    SET
      map=0,
      zone=35,
      position_x=-14284.343,
      position_y=559.23016,
      position_z=8.76681,
      orientation=4.223945
  `

  await sql`
    UPDATE chupato_world.item_template
    SET RequiredLevel = 10
    WHERE \`name\` LIKE 'Lesser Arcanum %' OR \`name\` LIKE 'Arcanum %'
  `

  await sql`
    UPDATE chupato_world.gameobject_template
    SET type = 5, Data0 = 0, Data2 = 0, AIName = ''
    WHERE entry = 148835;
  `

  await sql`
    UPDATE chupato_world.creature_template
    SET PetSpellDataId = 0
  `

  await sql`
    DELETE FROM chupato_world.creature_template WHERE entry = 55000
  `

  await sql`
    INSERT INTO chupato_world.creature_template (\`entry\`, \`difficulty_entry_1\`, \`difficulty_entry_2\`, \`difficulty_entry_3\`, \`KillCredit1\`, \`KillCredit2\`, \`name\`, \`subname\`, \`IconName\`, \`gossip_menu_id\`, \`minlevel\`, \`maxlevel\`, \`exp\`, \`faction\`, \`npcflag\`, \`speed_walk\`, \`speed_run\`, \`speed_swim\`, \`speed_flight\`, \`detection_range\`, \`scale\`, \`rank\`, \`dmgschool\`, \`DamageModifier\`, \`BaseAttackTime\`, \`RangeAttackTime\`, \`BaseVariance\`, \`RangeVariance\`, \`unit_class\`, \`unit_flags\`, \`unit_flags2\`, \`dynamicflags\`, \`family\`, \`trainer_type\`, \`trainer_spell\`, \`trainer_class\`, \`trainer_race\`, \`type\`, \`type_flags\`, \`lootid\`, \`pickpocketloot\`, \`skinloot\`, \`PetSpellDataId\`, \`VehicleId\`, \`mingold\`, \`maxgold\`, \`AIName\`, \`MovementType\`, \`HoverHeight\`, \`HealthModifier\`, \`ManaModifier\`, \`ArmorModifier\`, \`ExperienceModifier\`, \`RacialLeader\`, \`movementId\`, \`RegenHealth\`, \`mechanic_immune_mask\`, \`spell_school_immune_mask\`, \`flags_extra\`, \`ScriptName\`, \`VerifiedBuild\`)
    VALUES (55000, 0, 0, 0, 0, 0, 'Slahtz', 'B.E.T.A Provider', '', 10638, 19, 19, 0, 120, 1, 1, 1.14286, 1, 1, 20, 1, 0, 0, 1, 2000, 2000, 1, 1, 4, 256, 2048, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, '', 0, 1, 2.44989, 1, 1, 1, 0, 0, 1, 0, 0, 2, '', 10314)
  `
  await sql`
    DELETE FROM chupato_world.creature_template_model WHERE \`CreatureID\`=55000
  `

  await sql`
    INSERT INTO chupato_world.creature_template_model (\`CreatureID\`, \`Idx\`, \`CreatureDisplayID\`, \`DisplayScale\`, \`Probability\`, \`VerifiedBuild\`)
    VALUES (55000, 0, 29795, 1, 1, 10314)
  `

  await ac`reload creature_template 55000`

  await sql`
    DELETE FROM chupato_world.playercreateinfo_action WHERE class = 3;
  `
  await sql`
    INSERT INTO chupato_world.playercreateinfo_action (\`race\`, \`class\`, \`button\`, \`action\`, \`type\`) VALUES    
    (3,3,0,6603,0),
    (3,3,1,2973,0),
    (3,3,2,75,0),
    (3,3,3,20594,0),
    (3,3,4,2481,0)
    -- (3, 3,  0, 14261, 0),  -- Raptor Strike (Rank 3)
    -- (3, 3,  1, 1494, 0),   -- Track Beasts
    -- (3, 3,  2, 13163, 0),  -- Aspect of the Monkey
    -- (3, 3,  3, 13550, 0),  -- Serpent Sting (Rank 3)
    -- (3, 3,  4, 14281, 0),  -- Arcane Shot (Rank 2)
    -- (3, 3,  5, 1130, 0),   -- Hunter's Mark
    -- (3, 3,  6, 5116, 0),   -- Concussive Shot
    -- (3, 3,  7, 6991, 0),   -- Feed Pet
    -- (3, 3,  8, 1515, 0),   -- Tame Beast
    -- (3, 3,  9, 982, 0),    -- Revive Pet
    -- (3, 3, 10, 2641, 0),   -- Dismiss Pet
    -- (3, 3, 11, 14318, 0),  -- Aspect of the Hawk (Rank 2)
    -- (3, 3, 12, 19883, 0),  -- Track Humanoids
    -- (3, 3, 13, 883, 0),    -- Call Pet
    -- (3, 3, 14, 136, 0),    -- Mend Pet
    -- (3, 3, 15, 20736, 0),  -- Distracting Shot
    -- (3, 3, 16, 2974, 0),   -- Wing Clip
    -- (3, 3, 17, 1002, 0),   -- Eyes of the Beast
    -- (3, 3, 18, 1513, 0),   -- Scare Beast
    -- (3, 3, 19, 6197, 0),   -- Eagle Eye
    -- (3, 3, 20, 13795, 0),  -- Immolation Trap
    -- (3, 3, 21, 1495, 0),   -- Mongoose Bite
    -- (3, 3, 22, 19884, 0),  -- Track Undead
    -- (3, 3, 23, 2643, 0);   -- Multi-Shot
  `

})

const cleanupSheetRow = row => Object.fromEntries(Object.entries(row).flatMap(([k, v]) =>  {
  const valueStr = v.trim()
  const valueNbr = Number(v)
  return valueStr ? [[k, Number.isNaN(valueNbr) ? valueStr : valueNbr]] : []
}))

onSheetChange(['PROFESSION', 'SPELL.DBC', 'PET'], async (professionSheet, spellSheet, petSheet) => {
  const spellsDbc = await openDBC('Spell.dbc') 
  const creatureFamily = await openDBC('CreatureFamily.dbc')
  const skills = await openDBC('SkillLineAbility.dbc')
  const hunterPetFamilies = new Set(creatureFamily.rows.filter(r => r.SkillLine_2 === 270).map(r => r.SkillLine_1))
  const bannedSpell = new Set(petSheet.map(d => d.RemovedSpell))
  const withoutBannedPetSkills = skills.rows
    .filter(r => !hunterPetFamilies.has(r.SkillLine) || !bannedSpell.has(spellsDbc.byIds.get(r.Spell)?.Name_Lang_enUS))

  const bySpell = {}
  for (const skill of withoutBannedPetSkills) {
    bySpell[skill.Spell] = skill
    if (removedSkills.has(skill.Spell)) {
      skill.AcquireMethod = 0
    } else if (forceAtLearn.has(skill.Spell)) {
      skill.AcquireMethod = 1
    } else {
      continue
    }
    await sql`
      UPDATE chupato_world.skilllineability_dbc
      SET AcquireMethod=${skill.AcquireMethod}
      WHERE ID=${skill.ID}
    `
  }

  const spells = []
  const prices = []
//  const trained = Object.keys(trainers).flatMap(prof => [
//    { trainer: trainers[prof], spell: apprentice[prof], cost: 100, req: 0 },
//    { trainer: trainers[prof], spell: journeyman[prof], cost: 1500, req: 50, skill: professions[prof] },
//  ])
  for (const row of Array.isArray(spellSheet) ? spellSheet : []) {
    if (!row.ID) continue
    const spellId = Number(row.ID)
    const edit = cleanupSheetRow(row)
    spells.push(edit)
  }

  for (const row of professionSheet) {
    const spellId = Number(row.ID)
    const Reagent_1 = Number(row.Reagent_1) || 0 // "3839",
    const ReagentCount_1 = Number(row.ReagentCount_1) || 0 // "9",
    const Reagent_2 = Number(row.Reagent_2) || 0 // "2319",
    const ReagentCount_2 = Number(row.ReagentCount_2) || 0 // "2",
    const Reagent_3 = Number(row.Reagent_3) || 0 // "1705",
    const ReagentCount_3 = Number(row.ReagentCount_3) || 0 // "2",
    const Reagent_4 = Number(row.Reagent_4) || 0 // "2321",
    const ReagentCount_4 = Number(row.ReagentCount_4) || 0 // "1"
    const itemId = Number(row.item)
    const skillReq = Number(row.ReqSkillRank)
    if (!spellId) continue

    const skill = bySpell[spellId]
    if (skill) {
      skill.TrivialSkillLineRankHigh = skillReq + 15
      skill.TrivialSkillLineRankLow = skillReq + 7
    }

    if (!itemId) {
      // enchanting
      await sql`
      UPDATE chupato_world.spell_dbc SET
        Reagent_1=${Reagent_1},
        ReagentCount_1=${ReagentCount_1},
        Reagent_2=${Reagent_2},
        ReagentCount_2=${ReagentCount_2},
        Reagent_3=${Reagent_3},
        ReagentCount_3=${ReagentCount_3},
        Reagent_4=${Reagent_4},
        ReagentCount_4=${ReagentCount_4}
      WHERE ID=${spellId}
      `

    spells.push({
      ID: spellId,
      Reagent_1, ReagentCount_1,
      Reagent_2, ReagentCount_2,
      Reagent_3, ReagentCount_3,
      Reagent_4, ReagentCount_4,
    })
      continue
    }
    const [craft] = await sql`
      SELECT quality, name, itemlevel, SellPrice
      FROM chupato_world.item_template
      WHERE entry=${itemId}
    `

    if (!craft) {
      console.log('craft item not found:', { itemId, spellId })
      continue
    }

    //const baseReq = Math.max(craft.itemlevel - 19, 0)
    //const skillReq = baseReq * 25
      //+ Math.min(Math.round(craft.SellPrice / 500), 5) * 5

    await sql`
    UPDATE chupato_world.spell_dbc SET
      EffectItemType_1=${itemId},
      Name_Lang_enUS=${craft.name},
      Reagent_1=${Reagent_1},
      ReagentCount_1=${ReagentCount_1},
      Reagent_2=${Reagent_2},
      ReagentCount_2=${ReagentCount_2},
      Reagent_3=${Reagent_3},
      ReagentCount_3=${ReagentCount_3},
      Reagent_4=${Reagent_4},
      ReagentCount_4=${ReagentCount_4}
    WHERE ID=${spellId}
    `

    // Get 
    // spell.Name_Lang_enUS
    const patterns = await sql`
    SELECT entry, name, description
    FROM world.item_template
    WHERE spellid_2=${spellId}`
    for (const pattern of patterns) {
      const [prefix, oldName] = pattern.name.split(':')
      const newName = ` ${craft.name.split(':').at(-1).trim()}`
      if (oldName === newName) continue

      await sql`
        UPDATE chupato_world.item_template SET
        name=${`${prefix}:${newName}`},
        description=${pattern.description.replace(oldName, newName)},
        quality=${craft.quality},
        RequiredSkillRank=75
        WHERE entry=${pattern.entry}
      `
    }

    spells.push({
      ID: spellId,
      EffectItemType_1: itemId,
      Name_Lang_enUS: craft.name,
      Reagent_1, ReagentCount_1,
      Reagent_2, ReagentCount_2,
      Reagent_3, ReagentCount_3,
      Reagent_4, ReagentCount_4,
    })
  }

  await updateDBC('SkillLine.dbc', gathering.map(ID => ({ ID, CategoryID: 9 })))
  await updateDBC('Spell.dbc', spells)
  await replaceDBC('SkillLineAbility.dbc', withoutBannedPetSkills)
})

try {
  const result = await Promise.all(actions)
  const justUpdated = result.filter(line => line.justUpdated)
  const withErrors = result.filter(line => line.error)
  if (withErrors.length) {
    await ac`announce ${withErrors.map(l => l.label).join('|')} failed to update: ${withErrors[0]?.error?.message || ''}`
  }
  const updatedLabels = justUpdated.map(l => l.label).join('|')
  if (justUpdated.length) {
    await ac`announce ${updatedLabels} updated at ${ts(Date.now())}`
  }
  const now = Date.now()
  console.log(
    result.map(line => line.error
      ? `${red(line.label)}: ${line.error.stack}`
      : `${green(line.label)}: ${now - line.data < 60000 ? 'just now' : ts(line.data)}`
    ).join('\n')
  )
} finally {
  Deno.removeSync(tmpDir, { recursive: true })  
}
