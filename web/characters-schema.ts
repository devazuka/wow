/**
 Schema Generated with mysql-schema-ts 1.9.0
*/

/**
 * Exposes all fields present in account_data as a typescript
 * interface.
 */
export interface AccountData {
  /** Account Identifier Defaults to: 0. */
  accountId: number
  data: string
  /**  Defaults to: 0. */
  time: number
  /**  Defaults to: 0. */
  type: number
}
/**
 * Exposes all fields present in account_instance_times as a typescript
 * interface.
 */
export interface AccountInstanceTimes {
  accountId: number
  /**  Defaults to: 0. */
  instanceId: number
  /**  Defaults to: 0. */
  releaseTime: number
}
/**
 * Exposes all fields present in account_tutorial as a typescript
 * interface.
 */
export interface AccountTutorial {
  /** Account Identifier Defaults to: 0. */
  accountId: number
  /**  Defaults to: 0. */
  tut0: number
  /**  Defaults to: 0. */
  tut1: number
  /**  Defaults to: 0. */
  tut2: number
  /**  Defaults to: 0. */
  tut3: number
  /**  Defaults to: 0. */
  tut4: number
  /**  Defaults to: 0. */
  tut5: number
  /**  Defaults to: 0. */
  tut6: number
  /**  Defaults to: 0. */
  tut7: number
}
/**
 * Exposes all fields present in addons as a typescript
 * interface.
 */
export interface Addons {
  /**  Defaults to: 0. */
  crc: number
  name: string
}
/**
 * Exposes all fields present in arena_team as a typescript
 * interface.
 */
export interface ArenaTeam {
  /**  Defaults to: 0. */
  arenaTeamId: number
  /**  Defaults to: 0. */
  backgroundColor: number
  /**  Defaults to: 0. */
  borderColor: number
  /**  Defaults to: 0. */
  borderStyle: number
  /**  Defaults to: 0. */
  captainGuid: number
  /**  Defaults to: 0. */
  emblemColor: number
  /**  Defaults to: 0. */
  emblemStyle: number
  name: string
  /**  Defaults to: 0. */
  rank: number
  /**  Defaults to: 0. */
  rating: number
  /**  Defaults to: 0. */
  seasonGames: number
  /**  Defaults to: 0. */
  seasonWins: number
  /**  Defaults to: 0. */
  type: number
  /**  Defaults to: 0. */
  weekGames: number
  /**  Defaults to: 0. */
  weekWins: number
}
/**
 * Exposes all fields present in arena_team_member as a typescript
 * interface.
 */
export interface ArenaTeamMember {
  /**  Defaults to: 0. */
  arenaTeamId: number
  /**  Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  personalRating: number
  /**  Defaults to: 0. */
  seasonGames: number
  /**  Defaults to: 0. */
  seasonWins: number
  /**  Defaults to: 0. */
  weekGames: number
  /**  Defaults to: 0. */
  weekWins: number
}
/**
 * Exposes all fields present in auctionhouse as a typescript
 * interface.
 */
export interface Auctionhouse {
  /**  Defaults to: 0. */
  buyguid: number
  /**  Defaults to: 0. */
  buyoutprice: number
  /**  Defaults to: 0. */
  deposit: number
  /**  Defaults to: 7. */
  houseid: number
  /**  Defaults to: 0. */
  id: number
  /**  Defaults to: 0. */
  itemguid: number
  /**  Defaults to: 0. */
  itemowner: number
  /**  Defaults to: 0. */
  lastbid: number
  /**  Defaults to: 0. */
  startbid: number
  /**  Defaults to: 0. */
  time: number
}
/**
 * Exposes all fields present in banned_addons as a typescript
 * interface.
 */
export interface BannedAddons {
  Id: number
  Name: string
  /**  Defaults to: CURRENT_TIMESTAMP. */
  Timestamp: Date
  Version: string
}
/**
 * Exposes all fields present in battleground_deserters as a typescript
 * interface.
 */
export interface BattlegroundDeserters {
  /** datetime of the desertion  */
  datetime: Date
  /** characters.guid  */
  guid: number
  /** type of the desertion  */
  type: number
}
/**
 * Exposes all fields present in bugreport as a typescript
 * interface.
 */
export interface Bugreport {
  content: string
  /** Identifier  */
  id: number
  type: string
}
/**
 * Exposes all fields present in calendar_events as a typescript
 * interface.
 */
export interface CalendarEvents {
  /**  Defaults to: 0. */
  creator: number
  description: string
  /**  Defaults to: -1. */
  dungeon: number
  /**  Defaults to: 0. */
  eventtime: number
  /**  Defaults to: 0. */
  flags: number
  /**  Defaults to: 0. */
  id: number
  /**  Defaults to: 0. */
  time2: number
  title: string
  /**  Defaults to: 4. */
  type: number
}
/**
 * Exposes all fields present in calendar_invites as a typescript
 * interface.
 */
export interface CalendarInvites {
  /**  Defaults to: 0. */
  event: number
  /**  Defaults to: 0. */
  id: number
  /**  Defaults to: 0. */
  invitee: number
  /**  Defaults to: 0. */
  rank: number
  /**  Defaults to: 0. */
  sender: number
  /**  Defaults to: 0. */
  status: number
  /**  Defaults to: 0. */
  statustime: number
  text: string
}
/**
 * Exposes all fields present in channels as a typescript
 * interface.
 */
export interface Channels {
  /**  Defaults to: 1. */
  announce: number
  channelId: number
  lastUsed: number
  name: string
  /**  Defaults to: 1. */
  ownership: number
  password?: string | null
  team: number
}
/**
 * Exposes all fields present in channels_bans as a typescript
 * interface.
 */
export interface ChannelsBans {
  banTime: number
  channelId: number
  playerGUID: number
}
/**
 * Exposes all fields present in channels_rights as a typescript
 * interface.
 */
export interface ChannelsRights {
  delaymessage: string
  flags: number
  joinmessage: string
  moderators?: string | null
  name: string
  speakdelay: number
}
/**
 * Exposes all fields present in character_account_data as a typescript
 * interface.
 */
export interface CharacterAccountData {
  data: string
  /**  Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  time: number
  /**  Defaults to: 0. */
  type: number
}
/**
 * Exposes all fields present in character_achievement as a typescript
 * interface.
 */
export interface CharacterAchievement {
  achievement: number
  /**  Defaults to: 0. */
  date: number
  guid: number
}
/**
 * Exposes all fields present in character_achievement_offline_updates as a typescript
 * interface.
 */
export interface CharacterAchievementOfflineUpdates {
  /** For type 1: achievement ID; for type 2: ACHIEVEMENT_CRITERIA_TYPE  */
  arg1: number
  /** For type 2: miscValue1 for updating achievement criteria  */
  arg2?: number | null
  /** For type 2: miscValue2 for updating achievement criteria  */
  arg3?: number | null
  /** Character's GUID  */
  guid: number
  /** Supported types: 1 - COMPLETE_ACHIEVEMENT; 2 - UPDATE_CRITERIA  */
  update_type: number
}
/**
 * Exposes all fields present in character_achievement_progress as a typescript
 * interface.
 */
export interface CharacterAchievementProgress {
  counter: number
  criteria: number
  /**  Defaults to: 0. */
  date: number
  guid: number
}
/**
 * Exposes all fields present in character_action as a typescript
 * interface.
 */
export interface CharacterAction {
  /**  Defaults to: 0. */
  action: number
  /**  Defaults to: 0. */
  button: number
  /**  Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  spec: number
  /**  Defaults to: 0. */
  type: number
}
/**
 * Exposes all fields present in character_arena_stats as a typescript
 * interface.
 */
export interface CharacterArenaStats {
  /**  Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  matchMakerRating: number
  maxMMR: number
  /**  Defaults to: 0. */
  slot: number
}
/**
 * Exposes all fields present in character_aura as a typescript
 * interface.
 */
export interface CharacterAura {
  /**  Defaults to: 0. */
  amount0: number
  /**  Defaults to: 0. */
  amount1: number
  /**  Defaults to: 0. */
  amount2: number
  /**  Defaults to: 0. */
  base_amount0: number
  /**  Defaults to: 0. */
  base_amount1: number
  /**  Defaults to: 0. */
  base_amount2: number
  /** Full Global Unique Identifier Defaults to: 0. */
  casterGuid: number
  /**  Defaults to: 0. */
  effectMask: number
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  itemGuid: number
  /**  Defaults to: 0. */
  maxDuration: number
  /**  Defaults to: 0. */
  recalculateMask: number
  /**  Defaults to: 0. */
  remainCharges: number
  /**  Defaults to: 0. */
  remainTime: number
  /**  Defaults to: 0. */
  spell: number
  /**  Defaults to: 1. */
  stackCount: number
}
/**
 * Exposes all fields present in character_banned as a typescript
 * interface.
 */
export interface CharacterBanned {
  /**  Defaults to: 1. */
  active: number
  /**  Defaults to: 0. */
  bandate: number
  bannedby: string
  banreason: string
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  unbandate: number
}
/**
 * Exposes all fields present in character_battleground_random as a typescript
 * interface.
 */
export interface CharacterBattlegroundRandom {
  /**  Defaults to: 0. */
  guid: number
}
/**
 * Exposes all fields present in character_brew_of_the_month as a typescript
 * interface.
 */
export interface CharacterBrewOfTheMonth {
  guid: number
  /**  Defaults to: 0. */
  lastEventId: number
}
/**
 * Exposes all fields present in character_declinedname as a typescript
 * interface.
 */
export interface CharacterDeclinedname {
  accusative: string
  dative: string
  genitive: string
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  instrumental: string
  prepositional: string
}
/**
 * Exposes all fields present in character_entry_point as a typescript
 * interface.
 */
export interface CharacterEntryPoint {
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /** Map Identifier Defaults to: 0. */
  joinMapId: number
  /**  Defaults to: 0. */
  joinO: number
  /**  Defaults to: 0. */
  joinX: number
  /**  Defaults to: 0. */
  joinY: number
  /**  Defaults to: 0. */
  joinZ: number
  /**  Defaults to: 0. */
  mountSpell: number
  /**  Defaults to: 0. */
  taxiPath0: number
  /**  Defaults to: 0. */
  taxiPath1: number
}
/**
 * Exposes all fields present in character_equipmentsets as a typescript
 * interface.
 */
export interface CharacterEquipmentsets {
  /**  Defaults to: 0. */
  guid: number
  iconname: string
  /**  Defaults to: 0. */
  ignore_mask: number
  /**  Defaults to: 0. */
  item0: number
  /**  Defaults to: 0. */
  item1: number
  /**  Defaults to: 0. */
  item10: number
  /**  Defaults to: 0. */
  item11: number
  /**  Defaults to: 0. */
  item12: number
  /**  Defaults to: 0. */
  item13: number
  /**  Defaults to: 0. */
  item14: number
  /**  Defaults to: 0. */
  item15: number
  /**  Defaults to: 0. */
  item16: number
  /**  Defaults to: 0. */
  item17: number
  /**  Defaults to: 0. */
  item18: number
  /**  Defaults to: 0. */
  item2: number
  /**  Defaults to: 0. */
  item3: number
  /**  Defaults to: 0. */
  item4: number
  /**  Defaults to: 0. */
  item5: number
  /**  Defaults to: 0. */
  item6: number
  /**  Defaults to: 0. */
  item7: number
  /**  Defaults to: 0. */
  item8: number
  /**  Defaults to: 0. */
  item9: number
  name: string
  setguid: number
  /**  Defaults to: 0. */
  setindex: number
}
/**
 * Exposes all fields present in character_gifts as a typescript
 * interface.
 */
export interface CharacterGifts {
  /**  Defaults to: 0. */
  entry: number
  /**  Defaults to: 0. */
  flags: number
  /**  Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  item_guid: number
}
/**
 * Exposes all fields present in character_glyphs as a typescript
 * interface.
 */
export interface CharacterGlyphs {
  /**  Defaults to: 0. */
  glyph1?: number | null
  /**  Defaults to: 0. */
  glyph2?: number | null
  /**  Defaults to: 0. */
  glyph3?: number | null
  /**  Defaults to: 0. */
  glyph4?: number | null
  /**  Defaults to: 0. */
  glyph5?: number | null
  /**  Defaults to: 0. */
  glyph6?: number | null
  guid: number
  /**  Defaults to: 0. */
  talentGroup: number
}
/**
 * Exposes all fields present in character_homebind as a typescript
 * interface.
 */
export interface CharacterHomebind {
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /** Map Identifier Defaults to: 0. */
  mapId: number
  /**  Defaults to: 0. */
  posX: number
  /**  Defaults to: 0. */
  posY: number
  /**  Defaults to: 0. */
  posZ: number
  /** Zone Identifier Defaults to: 0. */
  zoneId: number
}
/**
 * Exposes all fields present in character_instance as a typescript
 * interface.
 */
export interface CharacterInstance {
  extended: number
  /**  Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  instance: number
  /**  Defaults to: 0. */
  permanent: number
}
/**
 * Exposes all fields present in character_inventory as a typescript
 * interface.
 */
export interface CharacterInventory {
  /**  Defaults to: 0. */
  bag: number
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /** Item Global Unique Identifier Defaults to: 0. */
  item: number
  /**  Defaults to: 0. */
  slot: number
}
/**
 * Exposes all fields present in character_pet as a typescript
 * interface.
 */
export interface CharacterPet {
  abdata?: string | null
  /**  Defaults to: 0. */
  CreatedBySpell?: number | null
  /**  Defaults to: 0. */
  curhappiness: number
  /**  Defaults to: 1. */
  curhealth: number
  /**  Defaults to: 0. */
  curmana: number
  /**  Defaults to: 0. */
  entry: number
  /**  Defaults to: 0. */
  exp: number
  /**  Defaults to: 0. */
  id: number
  /**  Defaults to: 1. */
  level: number
  /**  Defaults to: 0. */
  modelid?: number | null
  /**  Defaults to: Pet. */
  name: string
  /**  Defaults to: 0. */
  owner: number
  /**  Defaults to: 0. */
  PetType: number
  /**  Defaults to: 0. */
  Reactstate: number
  /**  Defaults to: 0. */
  renamed: number
  /**  Defaults to: 0. */
  savetime: number
  /**  Defaults to: 0. */
  slot: number
}
/**
 * Exposes all fields present in character_pet_declinedname as a typescript
 * interface.
 */
export interface CharacterPetDeclinedname {
  accusative: string
  dative: string
  genitive: string
  /**  Defaults to: 0. */
  id: number
  instrumental: string
  /**  Defaults to: 0. */
  owner: number
  prepositional: string
}
/**
 * Exposes all fields present in character_queststatus as a typescript
 * interface.
 */
export interface CharacterQueststatus {
  /**  Defaults to: 0. */
  explored: number
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  itemcount1: number
  /**  Defaults to: 0. */
  itemcount2: number
  /**  Defaults to: 0. */
  itemcount3: number
  /**  Defaults to: 0. */
  itemcount4: number
  /**  Defaults to: 0. */
  itemcount5: number
  /**  Defaults to: 0. */
  itemcount6: number
  /**  Defaults to: 0. */
  mobcount1: number
  /**  Defaults to: 0. */
  mobcount2: number
  /**  Defaults to: 0. */
  mobcount3: number
  /**  Defaults to: 0. */
  mobcount4: number
  /**  Defaults to: 0. */
  playercount: number
  /** Quest Identifier Defaults to: 0. */
  quest: number
  /**  Defaults to: 0. */
  status: number
  /**  Defaults to: 0. */
  timer: number
}
/**
 * Exposes all fields present in character_queststatus_daily as a typescript
 * interface.
 */
export interface CharacterQueststatusDaily {
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /** Quest Identifier Defaults to: 0. */
  quest: number
  /**  Defaults to: 0. */
  time: number
}
/**
 * Exposes all fields present in character_queststatus_monthly as a typescript
 * interface.
 */
export interface CharacterQueststatusMonthly {
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /** Quest Identifier Defaults to: 0. */
  quest: number
}
/**
 * Exposes all fields present in character_queststatus_rewarded as a typescript
 * interface.
 */
export interface CharacterQueststatusRewarded {
  /**  Defaults to: 1. */
  active: number
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /** Quest Identifier Defaults to: 0. */
  quest: number
}
/**
 * Exposes all fields present in character_queststatus_seasonal as a typescript
 * interface.
 */
export interface CharacterQueststatusSeasonal {
  /** Event Identifier Defaults to: 0. */
  event: number
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /** Quest Identifier Defaults to: 0. */
  quest: number
}
/**
 * Exposes all fields present in character_queststatus_weekly as a typescript
 * interface.
 */
export interface CharacterQueststatusWeekly {
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /** Quest Identifier Defaults to: 0. */
  quest: number
}
/**
 * Exposes all fields present in character_reputation as a typescript
 * interface.
 */
export interface CharacterReputation {
  /**  Defaults to: 0. */
  faction: number
  /**  Defaults to: 0. */
  flags: number
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  standing: number
}
/**
 * Exposes all fields present in character_settings as a typescript
 * interface.
 */
export interface CharacterSettings {
  data?: string | null
  guid: number
  source: string
}
/**
 * Exposes all fields present in character_skills as a typescript
 * interface.
 */
export interface CharacterSkills {
  /** Global Unique Identifier  */
  guid: number
  max: number
  skill: number
  value: number
}
/**
 * Exposes all fields present in character_social as a typescript
 * interface.
 */
export interface CharacterSocial {
  /** Friend Flags Defaults to: 0. */
  flags: number
  /** Friend Global Unique Identifier Defaults to: 0. */
  friend: number
  /** Character Global Unique Identifier Defaults to: 0. */
  guid: number
  /** Friend Note  */
  note: string
}
/**
 * Exposes all fields present in character_spell as a typescript
 * interface.
 */
export interface CharacterSpell {
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /**  Defaults to: 1. */
  specMask: number
  /** Spell Identifier Defaults to: 0. */
  spell: number
}
/**
 * Exposes all fields present in character_spell_cooldown as a typescript
 * interface.
 */
export interface CharacterSpellCooldown {
  /**  Defaults to: 0. */
  category?: number | null
  /** Global Unique Identifier, Low part Defaults to: 0. */
  guid: number
  /** Item Identifier Defaults to: 0. */
  item: number
  /**  Defaults to: 1. */
  needSend: number
  /** Spell Identifier Defaults to: 0. */
  spell: number
  /**  Defaults to: 0. */
  time: number
}
/**
 * Exposes all fields present in character_stats as a typescript
 * interface.
 */
export interface CharacterStats {
  /**  Defaults to: 0. */
  agility: number
  /**  Defaults to: 0. */
  armor: number
  /**  Defaults to: 0. */
  attackPower: number
  /**  Defaults to: 0. */
  blockPct: number
  /**  Defaults to: 0. */
  critPct: number
  /**  Defaults to: 0. */
  dodgePct: number
  /** Global Unique Identifier, Low part Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  intellect: number
  /**  Defaults to: 0. */
  maxhealth: number
  /**  Defaults to: 0. */
  maxpower1: number
  /**  Defaults to: 0. */
  maxpower2: number
  /**  Defaults to: 0. */
  maxpower3: number
  /**  Defaults to: 0. */
  maxpower4: number
  /**  Defaults to: 0. */
  maxpower5: number
  /**  Defaults to: 0. */
  maxpower6: number
  /**  Defaults to: 0. */
  maxpower7: number
  /**  Defaults to: 0. */
  parryPct: number
  /**  Defaults to: 0. */
  rangedAttackPower: number
  /**  Defaults to: 0. */
  rangedCritPct: number
  /**  Defaults to: 0. */
  resArcane: number
  /**  Defaults to: 0. */
  resFire: number
  /**  Defaults to: 0. */
  resFrost: number
  /**  Defaults to: 0. */
  resHoly: number
  /**  Defaults to: 0. */
  resilience: number
  /**  Defaults to: 0. */
  resNature: number
  /**  Defaults to: 0. */
  resShadow: number
  /**  Defaults to: 0. */
  spellCritPct: number
  /**  Defaults to: 0. */
  spellPower: number
  /**  Defaults to: 0. */
  spirit: number
  /**  Defaults to: 0. */
  stamina: number
  /**  Defaults to: 0. */
  strength: number
}
/**
 * Exposes all fields present in character_talent as a typescript
 * interface.
 */
export interface CharacterTalent {
  guid: number
  /**  Defaults to: 0. */
  specMask: number
  spell: number
}
/**
 * Exposes all fields present in characters as a typescript
 * interface.
 */
export interface Characters {
  /** Account Identifier Defaults to: 0. */
  account: number
  /**  Defaults to: 0. */
  actionBars: number
  /**  Defaults to: 0. */
  activeTalentGroup: number
  /**  Defaults to: 0. */
  ammoId: number
  /**  Defaults to: 0. */
  arenaPoints: number
  /**  Defaults to: 0. */
  at_login: number
  /**  Defaults to: 0. */
  bankSlots: number
  /**  Defaults to: 0. */
  chosenTitle: number
  /**  Defaults to: 0. */
  cinematic: number
  /**  Defaults to: 0. */
  class: number
  /**  Defaults to: CURRENT_TIMESTAMP. */
  creation_date: Date
  /**  Defaults to: 0. */
  death_expire_time: number
  deleteDate?: number | null
  deleteInfos_Account?: number | null
  deleteInfos_Name?: string | null
  /**  Defaults to: 0. */
  drunk: number
  equipmentCache?: string | null
  exploredZones?: string | null
  /**  Defaults to: 0. */
  extra_flags: number
  /**  Defaults to: 0. */
  extraBonusTalentCount: number
  /**  Defaults to: 0. */
  face: number
  /**  Defaults to: 0. */
  facialStyle: number
  /**  Defaults to: 0. */
  gender: number
  /**  Defaults to: 0. */
  grantableLevels: number
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  hairColor: number
  /**  Defaults to: 0. */
  hairStyle: number
  /**  Defaults to: 0. */
  health: number
  innTriggerId: number
  /**  Defaults to: 0. */
  instance_id: number
  /**  Defaults to: 0. */
  instance_mode_mask: number
  /**  Defaults to: 0. */
  is_logout_resting: number
  /**  Defaults to: 0. */
  knownCurrencies: number
  knownTitles?: string | null
  /**  Defaults to: 0. */
  latency?: number | null
  /**  Defaults to: 0. */
  level: number
  /**  Defaults to: 0. */
  leveltime: number
  /**  Defaults to: 0. */
  logout_time: number
  /** Map Identifier Defaults to: 0. */
  map: number
  /**  Defaults to: 0. */
  money: number
  name: string
  /**  Defaults to: 0. */
  online: number
  order?: number | null
  /**  Defaults to: 0. */
  orientation: number
  /**  Defaults to: 0. */
  playerFlags: number
  /**  Defaults to: 0. */
  position_x: number
  /**  Defaults to: 0. */
  position_y: number
  /**  Defaults to: 0. */
  position_z: number
  /**  Defaults to: 0. */
  power1: number
  /**  Defaults to: 0. */
  power2: number
  /**  Defaults to: 0. */
  power3: number
  /**  Defaults to: 0. */
  power4: number
  /**  Defaults to: 0. */
  power5: number
  /**  Defaults to: 0. */
  power6: number
  /**  Defaults to: 0. */
  power7: number
  /**  Defaults to: 0. */
  race: number
  /**  Defaults to: 0. */
  resettalents_cost: number
  /**  Defaults to: 0. */
  resettalents_time: number
  /**  Defaults to: 0. */
  rest_bonus: number
  /**  Defaults to: 0. */
  restState: number
  /**  Defaults to: 0. */
  skin: number
  /**  Defaults to: 0. */
  stable_slots: number
  /**  Defaults to: 1. */
  talentGroupsCount: number
  taxi_path?: string | null
  taximask: string
  /**  Defaults to: 0. */
  todayHonorPoints: number
  /**  Defaults to: 0. */
  todayKills: number
  /**  Defaults to: 0. */
  totalHonorPoints: number
  /**  Defaults to: 0. */
  totalKills: number
  /**  Defaults to: 0. */
  totaltime: number
  /**  Defaults to: 0. */
  trans_o: number
  /**  Defaults to: 0. */
  trans_x: number
  /**  Defaults to: 0. */
  trans_y: number
  /**  Defaults to: 0. */
  trans_z: number
  /**  Defaults to: 0. */
  transguid?: number | null
  /**  Defaults to: 0. */
  watchedFaction: number
  /**  Defaults to: 0. */
  xp: number
  /**  Defaults to: 0. */
  yesterdayHonorPoints: number
  /**  Defaults to: 0. */
  yesterdayKills: number
  /**  Defaults to: 0. */
  zone: number
}
/**
 * Exposes all fields present in corpse as a typescript
 * interface.
 */
export interface Corpse {
  /**  Defaults to: 0. */
  bytes1: number
  /**  Defaults to: 0. */
  bytes2: number
  /**  Defaults to: 0. */
  corpseType: number
  /**  Defaults to: 0. */
  displayId: number
  /**  Defaults to: 0. */
  dynFlags: number
  /**  Defaults to: 0. */
  flags: number
  /** Character Global Unique Identifier Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  guildId: number
  /** Instance Identifier Defaults to: 0. */
  instanceId: number
  itemCache: string
  /** Map Identifier Defaults to: 0. */
  mapId: number
  /**  Defaults to: 0. */
  orientation: number
  /**  Defaults to: 1. */
  phaseMask: number
  /**  Defaults to: 0. */
  posX: number
  /**  Defaults to: 0. */
  posY: number
  /**  Defaults to: 0. */
  posZ: number
  /**  Defaults to: 0. */
  time: number
}
/**
 * Exposes all fields present in creature_respawn as a typescript
 * interface.
 */
export interface CreatureRespawn {
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /** Instance Identifier Defaults to: 0. */
  instanceId: number
  /**  Defaults to: 0. */
  mapId: number
  /**  Defaults to: 0. */
  respawnTime: number
}
/**
 * Exposes all fields present in custom_solocraft_character_stats as a typescript
 * interface.
 */
export interface CustomSolocraftCharacterStats {
  Difficulty: number
  GroupSize: number
  GUID: number
  /**  Defaults to: 0. */
  SpellPower: number
  /**  Defaults to: 100. */
  Stats: number
}
/**
 * Exposes all fields present in game_event_condition_save as a typescript
 * interface.
 */
export interface GameEventConditionSave {
  /**  Defaults to: 0. */
  condition_id: number
  /**  Defaults to: 0. */
  done?: number | null
  eventEntry: number
}
/**
 * Exposes all fields present in game_event_save as a typescript
 * interface.
 */
export interface GameEventSave {
  eventEntry: number
  /**  Defaults to: 0. */
  next_start: number
  /**  Defaults to: 1. */
  state: number
}
/**
 * Exposes all fields present in gameobject_respawn as a typescript
 * interface.
 */
export interface GameobjectRespawn {
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /** Instance Identifier Defaults to: 0. */
  instanceId: number
  /**  Defaults to: 0. */
  mapId: number
  /**  Defaults to: 0. */
  respawnTime: number
}
/**
 * Exposes all fields present in gm_subsurvey as a typescript
 * interface.
 */
export interface GmSubsurvey {
  /**  Defaults to: 0. */
  answer: number
  answerComment: string
  /**  Defaults to: 0. */
  questionId: number
  surveyId: number
}
/**
 * Exposes all fields present in gm_survey as a typescript
 * interface.
 */
export interface GmSurvey {
  comment: string
  /**  Defaults to: 0. */
  createTime: number
  /**  Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  mainSurvey: number
  maxMMR: number
  surveyId: number
}
/**
 * Exposes all fields present in gm_ticket as a typescript
 * interface.
 */
export interface GmTicket {
  /** GUID of admin to whom ticket is assigned Defaults to: 0. */
  assignedTo: number
  /** -1 Closed by Console, >0 GUID of GM Defaults to: 0. */
  closedBy: number
  comment: string
  /**  Defaults to: 0. */
  completed: number
  /**  Defaults to: 0. */
  createTime: number
  description: string
  /**  Defaults to: 0. */
  escalated: number
  id: number
  /**  Defaults to: 0. */
  lastModifiedTime: number
  /**  Defaults to: 0. */
  mapId: number
  /** Name of ticket creator  */
  name: string
  /**  Defaults to: 0. */
  needMoreHelp: number
  /** Global Unique Identifier of ticket creator Defaults to: 0. */
  playerGuid: number
  /**  Defaults to: 0. */
  posX: number
  /**  Defaults to: 0. */
  posY: number
  /**  Defaults to: 0. */
  posZ: number
  /** -1 Resolved by Console, >0 GUID of GM Defaults to: 0. */
  resolvedBy: number
  response: string
  /** 0 open, 1 closed, 2 character deleted Defaults to: 0. */
  type: number
  /**  Defaults to: 0. */
  viewed: number
}
/**
 * Exposes all fields present in group_member as a typescript
 * interface.
 */
export interface GroupMember {
  guid: number
  /**  Defaults to: 0. */
  memberFlags: number
  memberGuid: number
  /**  Defaults to: 0. */
  roles: number
  /**  Defaults to: 0. */
  subgroup: number
}
/**
 * Exposes all fields present in groups as a typescript
 * interface.
 */
export interface Groups {
  /**  Defaults to: 0. */
  difficulty: number
  groupType: number
  guid: number
  icon1: number
  icon2: number
  icon3: number
  icon4: number
  icon5: number
  icon6: number
  icon7: number
  icon8: number
  leaderGuid: number
  looterGuid: number
  lootMethod: number
  lootThreshold: number
  masterLooterGuid: number
  /**  Defaults to: 0. */
  raidDifficulty: number
}
/**
 * Exposes all fields present in guild as a typescript
 * interface.
 */
export interface Guild {
  /**  Defaults to: 0. */
  BackgroundColor: number
  /**  Defaults to: 0. */
  BankMoney: number
  /**  Defaults to: 0. */
  BorderColor: number
  /**  Defaults to: 0. */
  BorderStyle: number
  /**  Defaults to: 0. */
  createdate: number
  /**  Defaults to: 0. */
  EmblemColor: number
  /**  Defaults to: 0. */
  EmblemStyle: number
  /**  Defaults to: 0. */
  guildid: number
  info: string
  /**  Defaults to: 0. */
  leaderguid: number
  motd: string
  name: string
}
/**
 * Exposes all fields present in guild_bank_eventlog as a typescript
 * interface.
 */
export interface GuildBankEventlog {
  /** Destination Tab Id Defaults to: 0. */
  DestTabId: number
  /** Event type Defaults to: 0. */
  EventType: number
  /** Guild Identificator Defaults to: 0. */
  guildid: number
  /**  Defaults to: 0. */
  ItemOrMoney: number
  /**  Defaults to: 0. */
  ItemStackCount: number
  /** Log record identificator - auxiliary column Defaults to: 0. */
  LogGuid: number
  /**  Defaults to: 0. */
  PlayerGuid: number
  /** Guild bank TabId Defaults to: 0. */
  TabId: number
  /** Event UNIX time Defaults to: 0. */
  TimeStamp: number
}
/**
 * Exposes all fields present in guild_bank_item as a typescript
 * interface.
 */
export interface GuildBankItem {
  /**  Defaults to: 0. */
  guildid: number
  /**  Defaults to: 0. */
  item_guid: number
  /**  Defaults to: 0. */
  SlotId: number
  /**  Defaults to: 0. */
  TabId: number
}
/**
 * Exposes all fields present in guild_bank_right as a typescript
 * interface.
 */
export interface GuildBankRight {
  /**  Defaults to: 0. */
  gbright: number
  /**  Defaults to: 0. */
  guildid: number
  /**  Defaults to: 0. */
  rid: number
  /**  Defaults to: 0. */
  SlotPerDay: number
  /**  Defaults to: 0. */
  TabId: number
}
/**
 * Exposes all fields present in guild_bank_tab as a typescript
 * interface.
 */
export interface GuildBankTab {
  /**  Defaults to: 0. */
  guildid: number
  TabIcon: string
  /**  Defaults to: 0. */
  TabId: number
  TabName: string
  TabText?: string | null
}
/**
 * Exposes all fields present in guild_eventlog as a typescript
 * interface.
 */
export interface GuildEventlog {
  /** Event type  */
  EventType: number
  /** Guild Identificator  */
  guildid: number
  /** Log record identificator - auxiliary column  */
  LogGuid: number
  /** New rank(in case promotion/demotion)  */
  NewRank: number
  /** Player 1  */
  PlayerGuid1: number
  /** Player 2  */
  PlayerGuid2: number
  /** Event UNIX time  */
  TimeStamp: number
}
/**
 * Exposes all fields present in guild_member as a typescript
 * interface.
 */
export interface GuildMember {
  guid: number
  /** Guild Identificator  */
  guildid: number
  offnote: string
  pnote: string
  rank: number
}
/**
 * Exposes all fields present in guild_member_withdraw as a typescript
 * interface.
 */
export interface GuildMemberWithdraw {
  guid: number
  /**  Defaults to: 0. */
  money: number
  /**  Defaults to: 0. */
  tab0: number
  /**  Defaults to: 0. */
  tab1: number
  /**  Defaults to: 0. */
  tab2: number
  /**  Defaults to: 0. */
  tab3: number
  /**  Defaults to: 0. */
  tab4: number
  /**  Defaults to: 0. */
  tab5: number
}
/**
 * Exposes all fields present in guild_rank as a typescript
 * interface.
 */
export interface GuildRank {
  /**  Defaults to: 0. */
  BankMoneyPerDay: number
  /**  Defaults to: 0. */
  guildid: number
  rid: number
  /**  Defaults to: 0. */
  rights?: number | null
  rname: string
}
/**
 * Exposes all fields present in instance as a typescript
 * interface.
 */
export interface Instance {
  /**  Defaults to: 0. */
  completedEncounters: number
  data: string
  /**  Defaults to: 0. */
  difficulty: number
  /**  Defaults to: 0. */
  id: number
  /**  Defaults to: 0. */
  map: number
  /**  Defaults to: 0. */
  resettime: number
}
/**
 * Exposes all fields present in instance_reset as a typescript
 * interface.
 */
export interface InstanceReset {
  /**  Defaults to: 0. */
  difficulty: number
  /**  Defaults to: 0. */
  mapid: number
  /**  Defaults to: 0. */
  resettime: number
}
/**
 * Exposes all fields present in instance_saved_go_state_data as a typescript
 * interface.
 */
export interface InstanceSavedGoStateData {
  /** gameobject.guid  */
  guid: number
  /** instance.id  */
  id: number
  /** gameobject.state Defaults to: 0. */
  state?: number | null
}
/**
 * Exposes all fields present in item_instance as a typescript
 * interface.
 */
export interface ItemInstance {
  charges?: string | null
  /**  Defaults to: 1. */
  count: number
  /**  Defaults to: 0. */
  creatorGuid: number
  /**  Defaults to: 0. */
  durability: number
  /**  Defaults to: 0. */
  duration: number
  enchantments: string
  /**  Defaults to: 0. */
  flags?: number | null
  /**  Defaults to: 0. */
  giftCreatorGuid: number
  /**  Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  itemEntry?: number | null
  /**  Defaults to: 0. */
  owner_guid: number
  /**  Defaults to: 0. */
  playedTime: number
  /**  Defaults to: 0. */
  randomPropertyId: number
  text?: string | null
}
/**
 * Exposes all fields present in item_loot_storage as a typescript
 * interface.
 */
export interface ItemLootStorage {
  /**  Defaults to: 0. */
  conditionLootId: number
  containerGUID: number
  count: number
  follow_loot_rules: number
  freeforall: number
  is_blocked: number
  is_counted: number
  is_underthreshold: number
  /**  Defaults to: 0. */
  item_index: number
  itemid: number
  needs_quest: number
  randomPropertyId: number
  randomSuffix: number
}
/**
 * Exposes all fields present in item_refund_instance as a typescript
 * interface.
 */
export interface ItemRefundInstance {
  /** Item GUID  */
  item_guid: number
  /**  Defaults to: 0. */
  paidExtendedCost: number
  /**  Defaults to: 0. */
  paidMoney: number
  /** Player GUID  */
  player_guid: number
}
/**
 * Exposes all fields present in item_soulbound_trade_data as a typescript
 * interface.
 */
export interface ItemSoulboundTradeData {
  /** Space separated GUID list of players who can receive this item in trade  */
  allowedPlayers: string
  /** Item GUID  */
  itemGuid: number
}
/**
 * Exposes all fields present in lag_reports as a typescript
 * interface.
 */
export interface LagReports {
  /**  Defaults to: 0. */
  createTime: number
  /**  Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  lagType: number
  /**  Defaults to: 0. */
  latency: number
  /**  Defaults to: 0. */
  mapId: number
  /**  Defaults to: 0. */
  posX: number
  /**  Defaults to: 0. */
  posY: number
  /**  Defaults to: 0. */
  posZ: number
  reportId: number
}
/**
 * Exposes all fields present in lfg_data as a typescript
 * interface.
 */
export interface LfgData {
  /**  Defaults to: 0. */
  dungeon: number
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  state: number
}
/**
 * Exposes all fields present in log_arena_fights as a typescript
 * interface.
 */
export interface LogArenaFights {
  currOnline: number
  duration: number
  fight_id: number
  loser: number
  loser_mmr: number
  loser_tr: number
  loser_tr_change: number
  time: Date
  type: number
  winner: number
  winner_mmr: number
  winner_tr: number
  winner_tr_change: number
}
/**
 * Exposes all fields present in log_arena_memberstats as a typescript
 * interface.
 */
export interface LogArenaMemberstats {
  account: number
  damage: number
  fight_id: number
  guid: number
  heal: number
  ip: string
  kblows: number
  member_id: number
  name: string
  team: number
}
/**
 * Exposes all fields present in log_encounter as a typescript
 * interface.
 */
export interface LogEncounter {
  creditEntry: number
  creditType: number
  difficulty: number
  map: number
  playersInfo: string
  time: Date
}
/**
 * Exposes all fields present in log_money as a typescript
 * interface.
 */
export interface LogMoney {
  date: Date
  money: number
  receiver_acc: number
  receiver_name: string
  sender_acc: number
  sender_guid: number
  sender_ip: string
  sender_name: string
  topic: string
  /** 1=COD,2=AH,3=GB DEPOSIT,4=GB WITHDRAW,5=MAIL,6=TRADE  */
  type: number
}
/**
 * Exposes all fields present in mail as a typescript
 * interface.
 */
export interface Mail {
  body?: string | null
  /**  Defaults to: 0. */
  checked: number
  /**  Defaults to: 0. */
  cod: number
  /**  Defaults to: 0. */
  deliver_time: number
  /**  Defaults to: 0. */
  expire_time: number
  /**  Defaults to: 0. */
  has_items: number
  /** Identifier Defaults to: 0. */
  id: number
  /**  Defaults to: 0. */
  mailTemplateId: number
  /**  Defaults to: 0. */
  messageType: number
  /**  Defaults to: 0. */
  money: number
  /** Character Global Unique Identifier Defaults to: 0. */
  receiver: number
  /** Character Global Unique Identifier Defaults to: 0. */
  sender: number
  /**  Defaults to: 41. */
  stationery: number
  subject?: string | null
}
/**
 * Exposes all fields present in mail_items as a typescript
 * interface.
 */
export interface MailItems {
  /**  Defaults to: 0. */
  item_guid: number
  /**  Defaults to: 0. */
  mail_id: number
  /** Character Global Unique Identifier Defaults to: 0. */
  receiver: number
}
/**
 * Exposes all fields present in mail_server_character as a typescript
 * interface.
 */
export interface MailServerCharacter {
  guid: number
  mailId: number
}
/**
 * Exposes all fields present in mail_server_template as a typescript
 * interface.
 */
export interface MailServerTemplate {
  /**  Defaults to: 1. */
  active: number
  body: string
  id: number
  /**  Defaults to: 0. */
  itemA: number
  /**  Defaults to: 0. */
  itemCountA: number
  /**  Defaults to: 0. */
  itemCountH: number
  /**  Defaults to: 0. */
  itemH: number
  /**  Defaults to: 0. */
  moneyA: number
  /**  Defaults to: 0. */
  moneyH: number
  /**  Defaults to: 0. */
  reqLevel: number
  /**  Defaults to: 0. */
  reqPlayTime: number
  subject: string
}
/**
 * Exposes all fields present in pet_aura as a typescript
 * interface.
 */
export interface PetAura {
  amount0?: number | null
  amount1?: number | null
  amount2?: number | null
  base_amount0?: number | null
  base_amount1?: number | null
  base_amount2?: number | null
  /** Full Global Unique Identifier Defaults to: 0. */
  casterGuid: number
  /**  Defaults to: 0. */
  effectMask: number
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  maxDuration: number
  /**  Defaults to: 0. */
  recalculateMask: number
  /**  Defaults to: 0. */
  remainCharges: number
  /**  Defaults to: 0. */
  remainTime: number
  /**  Defaults to: 0. */
  spell: number
  /**  Defaults to: 1. */
  stackCount: number
}
/**
 * Exposes all fields present in pet_spell as a typescript
 * interface.
 */
export interface PetSpell {
  /**  Defaults to: 0. */
  active: number
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /** Spell Identifier Defaults to: 0. */
  spell: number
}
/**
 * Exposes all fields present in pet_spell_cooldown as a typescript
 * interface.
 */
export interface PetSpellCooldown {
  /**  Defaults to: 0. */
  category?: number | null
  /** Global Unique Identifier, Low part Defaults to: 0. */
  guid: number
  /** Spell Identifier Defaults to: 0. */
  spell: number
  /**  Defaults to: 0. */
  time: number
}
/**
 * Exposes all fields present in petition as a typescript
 * interface.
 */
export interface Petition {
  name: string
  ownerguid: number
  /**  Defaults to: 0. */
  petitionguid?: number | null
  /**  Defaults to: 0. */
  type: number
}
/**
 * Exposes all fields present in petition_sign as a typescript
 * interface.
 */
export interface PetitionSign {
  ownerguid: number
  /**  Defaults to: 0. */
  petitionguid: number
  /**  Defaults to: 0. */
  player_account: number
  /**  Defaults to: 0. */
  playerguid: number
  /**  Defaults to: 0. */
  type: number
}
/**
 * Exposes all fields present in pool_quest_save as a typescript
 * interface.
 */
export interface PoolQuestSave {
  /**  Defaults to: 0. */
  pool_id: number
  /**  Defaults to: 0. */
  quest_id: number
}
/**
 * Exposes all fields present in profanity_name as a typescript
 * interface.
 */
export interface ProfanityName {
  name: string
}
/**
 * Exposes all fields present in pvpstats_battlegrounds as a typescript
 * interface.
 */
export interface PvpstatsBattlegrounds {
  bracket_id: number
  date: Date
  id: number
  type: number
  winner_faction: number
}
/**
 * Exposes all fields present in pvpstats_players as a typescript
 * interface.
 */
export interface PvpstatsPlayers {
  /**  Defaults to: 0. */
  attr_1?: number | null
  /**  Defaults to: 0. */
  attr_2?: number | null
  /**  Defaults to: 0. */
  attr_3?: number | null
  /**  Defaults to: 0. */
  attr_4?: number | null
  /**  Defaults to: 0. */
  attr_5?: number | null
  battleground_id: number
  character_guid: number
  score_bonus_honor?: number | null
  score_damage_done?: number | null
  score_deaths?: number | null
  score_healing_done?: number | null
  score_honorable_kills?: number | null
  score_killing_blows?: number | null
  winner: string
}
/**
 * Exposes all fields present in quest_tracker as a typescript
 * interface.
 */
export interface QuestTracker {
  /**  Defaults to: 0. */
  character_guid: number
  /**  Defaults to: 0. */
  completed_by_gm: number
  /**  Defaults to: 0. */
  core_hash: string
  /**  Defaults to: 0. */
  core_revision: string
  /**  Defaults to: 0. */
  id?: number | null
  quest_abandon_time?: Date | null
  quest_accept_time: Date
  quest_complete_time?: Date | null
}
/**
 * Exposes all fields present in recovery_item as a typescript
 * interface.
 */
export interface RecoveryItem {
  /**  Defaults to: 0. */
  Count: number
  DeleteDate?: number | null
  /**  Defaults to: 0. */
  Guid: number
  Id: number
  /**  Defaults to: 0. */
  ItemEntry?: number | null
}
/**
 * Exposes all fields present in reserved_name as a typescript
 * interface.
 */
export interface ReservedName {
  name: string
}
/**
 * Exposes all fields present in updates as a typescript
 * interface.
 */
export interface Updates {
  /** sha1 hash of the sql file.  */
  hash?: string | null
  /** filename with extension of the update.  */
  name: string
  /** time the query takes to apply in ms. Defaults to: 0. */
  speed: number
  /** defines if an update is released or archived. Defaults to: RELEASED. */
  state: 'RELEASED' | 'CUSTOM' | 'MODULE' | 'ARCHIVED'
  /** timestamp when the query was applied. Defaults to: CURRENT_TIMESTAMP. */
  timestamp: Date
}
/**
 * Exposes all fields present in updates_include as a typescript
 * interface.
 */
export interface UpdatesInclude {
  /** directory to include. $ means relative to the source directory.  */
  path: string
  /** defines if the directory contains released or archived updates. Defaults to: RELEASED. */
  state: 'RELEASED' | 'ARCHIVED' | 'CUSTOM'
}
/**
 * Exposes all fields present in warden_action as a typescript
 * interface.
 */
export interface WardenAction {
  action?: number | null
  wardenId: number
}
/**
 * Exposes all fields present in worldstates as a typescript
 * interface.
 */
export interface Worldstates {
  comment?: string | null
  /**  Defaults to: 0. */
  entry: number
  /**  Defaults to: 0. */
  value: number
}
