import * as DBC from './dbc.ts'

const openDBC = async (dbcName) => {
  const bytes = await Deno.readFile(`data/dbc/${dbcName}`)
  return DBC.fromBytes(dbcName, bytes.buffer)
}

const items = await openDBC('Item.dbc')
const properties = await openDBC('ItemRandomProperties.dbc')
const suffixes = await openDBC('ItemRandomSuffix.dbc')
const enchants = await openDBC('SpellItemEnchantment.dbc')
console.log(suffixes.byIds.get(71).Name_Lang_enUS)
console.log(suffixes.byIds.get(78).Name_Lang_enUS)
console.log(suffixes.byIds.get(79).Name_Lang_enUS)
console.log(suffixes.byIds.get(80).Name_Lang_enUS)

const enchKeys = ['Enchantment_1','Enchantment_2','Enchantment_3','Enchantment_4', 'Enchantment_5']
const cleanupProperty = p => ({
  ID: p.ID,
  name: p.Name_Lang_enUS,
  effects: enchKeys.filter(k => p[k]).map(k => enchants.byIds.get(p[k])),
})
console.log(properties.rows.map(cleanupProperty))

console.log(cleanupProperty(suffixes.byIds.get(82)))

