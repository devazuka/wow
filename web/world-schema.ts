export interface AchievementCategoryDbc {
  /**  Defaults to: 0. */
  ID: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  Parent: number
  /**  Defaults to: 0. */
  Ui_Order: number
}

export interface AchievementCriteriaData {
  criteria_id: number
  ScriptName: string
  /**  Defaults to: 0. */
  type: number
  /**  Defaults to: 0. */
  value1: number
  /**  Defaults to: 0. */
  value2: number
}

export interface AchievementCriteriaDbc {
  /**  Defaults to: 0. */
  Achievement_Id: number
  /**  Defaults to: 0. */
  Asset_Id: number
  Description_Lang_deDE?: string | null
  Description_Lang_enCN?: string | null
  Description_Lang_enGB?: string | null
  Description_Lang_enTW?: string | null
  Description_Lang_enUS?: string | null
  Description_Lang_esES?: string | null
  Description_Lang_esMX?: string | null
  Description_Lang_frFR?: string | null
  Description_Lang_itIT?: string | null
  Description_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Description_Lang_Mask: number
  Description_Lang_ptBR?: string | null
  Description_Lang_ptPT?: string | null
  Description_Lang_ruRU?: string | null
  Description_Lang_Unk?: string | null
  Description_Lang_zhCN?: string | null
  Description_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  Fail_Asset: number
  /**  Defaults to: 0. */
  Fail_Event: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Quantity: number
  /**  Defaults to: 0. */
  Start_Asset: number
  /**  Defaults to: 0. */
  Start_Event: number
  /**  Defaults to: 0. */
  Timer_Asset_Id: number
  /**  Defaults to: 0. */
  Timer_Start_Event: number
  /**  Defaults to: 0. */
  Timer_Time: number
  /**  Defaults to: 0. */
  Type: number
  /**  Defaults to: 0. */
  Ui_Order: number
}

export interface AchievementDbc {
  /**  Defaults to: 0. */
  Category: number
  Description_Lang_deDE?: string | null
  Description_Lang_enCN?: string | null
  Description_Lang_enGB?: string | null
  Description_Lang_enTW?: string | null
  Description_Lang_enUS?: string | null
  Description_Lang_esES?: string | null
  Description_Lang_esMX?: string | null
  Description_Lang_frFR?: string | null
  Description_Lang_itIT?: string | null
  Description_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Description_Lang_Mask: number
  Description_Lang_ptBR?: string | null
  Description_Lang_ptPT?: string | null
  Description_Lang_ruRU?: string | null
  Description_Lang_Unk?: string | null
  Description_Lang_zhCN?: string | null
  Description_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  Faction: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  IconID: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Instance_Id: number
  /**  Defaults to: 0. */
  Minimum_Criteria: number
  /**  Defaults to: 0. */
  Points: number
  Reward_Lang_deDE?: string | null
  Reward_Lang_enCN?: string | null
  Reward_Lang_enGB?: string | null
  Reward_Lang_enTW?: string | null
  Reward_Lang_enUS?: string | null
  Reward_Lang_esES?: string | null
  Reward_Lang_esMX?: string | null
  Reward_Lang_frFR?: string | null
  Reward_Lang_itIT?: string | null
  Reward_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Reward_Lang_Mask: number
  Reward_Lang_ptBR?: string | null
  Reward_Lang_ptPT?: string | null
  Reward_Lang_ruRU?: string | null
  Reward_Lang_Unk?: string | null
  Reward_Lang_zhCN?: string | null
  Reward_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  Shares_Criteria: number
  /**  Defaults to: 0. */
  Supercedes: number
  Title_Lang_deDE?: string | null
  Title_Lang_enCN?: string | null
  Title_Lang_enGB?: string | null
  Title_Lang_enTW?: string | null
  Title_Lang_enUS?: string | null
  Title_Lang_esES?: string | null
  Title_Lang_esMX?: string | null
  Title_Lang_frFR?: string | null
  Title_Lang_itIT?: string | null
  Title_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Title_Lang_Mask: number
  Title_Lang_ptBR?: string | null
  Title_Lang_ptPT?: string | null
  Title_Lang_ruRU?: string | null
  Title_Lang_Unk?: string | null
  Title_Lang_zhCN?: string | null
  Title_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  Ui_Order: number
}

export interface AchievementReward {
  Body?: string | null
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  ItemID: number
  /**  Defaults to: 0. */
  MailTemplateID: number
  /**  Defaults to: 0. */
  Sender: number
  Subject?: string | null
  /**  Defaults to: 0. */
  TitleA: number
  /**  Defaults to: 0. */
  TitleH: number
}

export interface AchievementRewardLocale {
  /**  Defaults to: 0. */
  ID: number
  Locale: string
  Subject?: string | null
  Text?: string | null
}

export interface AcoreString {
  content_default: string
  /**  Defaults to: 0. */
  entry: number
  locale_deDE?: string | null
  locale_esES?: string | null
  locale_esMX?: string | null
  locale_frFR?: string | null
  locale_koKR?: string | null
  locale_ruRU?: string | null
  locale_zhCN?: string | null
  locale_zhTW?: string | null
}

export interface AreagroupDbc {
  /**  Defaults to: 0. */
  AreaID_1: number
  /**  Defaults to: 0. */
  AreaID_2: number
  /**  Defaults to: 0. */
  AreaID_3: number
  /**  Defaults to: 0. */
  AreaID_4: number
  /**  Defaults to: 0. */
  AreaID_5: number
  /**  Defaults to: 0. */
  AreaID_6: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  NextAreaID: number
}

export interface AreapoiDbc {
  /**  Defaults to: 0. */
  AreaID: number
  /**  Defaults to: 0. */
  ContinentID: number
  Description_Lang_deDE?: string | null
  Description_Lang_enCN?: string | null
  Description_Lang_enGB?: string | null
  Description_Lang_enTW?: string | null
  Description_Lang_enUS?: string | null
  Description_Lang_esES?: string | null
  Description_Lang_esMX?: string | null
  Description_Lang_frFR?: string | null
  Description_Lang_itIT?: string | null
  Description_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Description_Lang_Mask: number
  Description_Lang_ptBR?: string | null
  Description_Lang_ptPT?: string | null
  Description_Lang_ruRU?: string | null
  Description_Lang_Unk?: string | null
  Description_Lang_zhCN?: string | null
  Description_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  FactionID: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  Icon_1: number
  /**  Defaults to: 0. */
  Icon_2: number
  /**  Defaults to: 0. */
  Icon_3: number
  /**  Defaults to: 0. */
  Icon_4: number
  /**  Defaults to: 0. */
  Icon_5: number
  /**  Defaults to: 0. */
  Icon_6: number
  /**  Defaults to: 0. */
  Icon_7: number
  /**  Defaults to: 0. */
  Icon_8: number
  /**  Defaults to: 0. */
  Icon_9: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Importance: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  WorldMapLink: number
  /**  Defaults to: 0. */
  WorldStateID: number
  /**  Defaults to: 0. */
  X: number
  /**  Defaults to: 0. */
  Y: number
  /**  Defaults to: 0. */
  Z: number
}

export interface AreatableDbc {
  /**  Defaults to: 0. */
  AmbienceID: number
  /**  Defaults to: 0. */
  Ambient_Multiplier: number
  /**  Defaults to: 0. */
  AreaBit: number
  AreaName_Lang_deDE?: string | null
  AreaName_Lang_enCN?: string | null
  AreaName_Lang_enGB?: string | null
  AreaName_Lang_enTW?: string | null
  AreaName_Lang_enUS?: string | null
  AreaName_Lang_esES?: string | null
  AreaName_Lang_esMX?: string | null
  AreaName_Lang_frFR?: string | null
  AreaName_Lang_itIT?: string | null
  AreaName_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  AreaName_Lang_Mask: number
  AreaName_Lang_ptBR?: string | null
  AreaName_Lang_ptPT?: string | null
  AreaName_Lang_ruRU?: string | null
  AreaName_Lang_Unk?: string | null
  AreaName_Lang_zhCN?: string | null
  AreaName_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  ContinentID: number
  /**  Defaults to: 0. */
  ExplorationLevel: number
  /**  Defaults to: 0. */
  FactionGroupMask: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  IntroSound: number
  /**  Defaults to: 0. */
  Lightid: number
  /**  Defaults to: 0. */
  LiquidTypeID_1: number
  /**  Defaults to: 0. */
  LiquidTypeID_2: number
  /**  Defaults to: 0. */
  LiquidTypeID_3: number
  /**  Defaults to: 0. */
  LiquidTypeID_4: number
  /**  Defaults to: 0. */
  MinElevation: number
  /**  Defaults to: 0. */
  ParentAreaID: number
  /**  Defaults to: 0. */
  SoundProviderPref: number
  /**  Defaults to: 0. */
  SoundProviderPrefUnderwater: number
  /**  Defaults to: 0. */
  ZoneMusic: number
}

export interface Areatrigger {
  entry: number
  /** Most commonly used when size is 0, but not always Defaults to: 0. */
  height: number
  /** Most commonly used when size is 0, but not always Defaults to: 0. */
  length: number
  /**  Defaults to: 0. */
  map: number
  /** Most commonly used when size is 0, but not always Defaults to: 0. */
  orientation: number
  /** Seems to be a box of size yards with center at x,y,z Defaults to: 0. */
  radius: number
  /** Most commonly used when size is 0, but not always Defaults to: 0. */
  width: number
  /**  Defaults to: 0. */
  x: number
  /**  Defaults to: 0. */
  y: number
  /**  Defaults to: 0. */
  z: number
}

export interface AreatriggerInvolvedrelation {
  /** Identifier Defaults to: 0. */
  id: number
  /** Quest Identifier Defaults to: 0. */
  quest: number
}

export interface AreatriggerScripts {
  entry: number
  ScriptName: string
}

export interface AreatriggerTavern {
  /**  Defaults to: 0. */
  faction: number
  /** Identifier Defaults to: 0. */
  id: number
  name?: string | null
}

export interface AreatriggerTeleport {
  /**  Defaults to: 0. */
  ID: number
  Name?: string | null
  /**  Defaults to: 0. */
  target_map: number
  /**  Defaults to: 0. */
  target_orientation: number
  /**  Defaults to: 0. */
  target_position_x: number
  /**  Defaults to: 0. */
  target_position_y: number
  /**  Defaults to: 0. */
  target_position_z: number
}

export interface AuctionhouseDbc {
  /**  Defaults to: 0. */
  ConsignmentRate: number
  /**  Defaults to: 0. */
  DepositRate: number
  /**  Defaults to: 0. */
  FactionID: number
  /**  Defaults to: 0. */
  ID: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
}

export interface BankbagslotpricesDbc {
  /**  Defaults to: 0. */
  Cost: number
  /**  Defaults to: 0. */
  ID: number
}

export interface BarbershopstyleDbc {
  /**  Defaults to: 0. */
  Cost_Modifier: number
  /**  Defaults to: 0. */
  Data: number
  Description_Lang_deDE?: string | null
  Description_Lang_enCN?: string | null
  Description_Lang_enGB?: string | null
  Description_Lang_enTW?: string | null
  Description_Lang_enUS?: string | null
  Description_Lang_esES?: string | null
  Description_Lang_esMX?: string | null
  Description_Lang_frFR?: string | null
  Description_Lang_itIT?: string | null
  Description_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Description_Lang_Mask: number
  Description_Lang_ptBR?: string | null
  Description_Lang_ptPT?: string | null
  Description_Lang_ruRU?: string | null
  Description_Lang_Unk?: string | null
  Description_Lang_zhCN?: string | null
  Description_Lang_zhTW?: string | null
  DisplayName_Lang_deDE?: string | null
  DisplayName_Lang_enCN?: string | null
  DisplayName_Lang_enGB?: string | null
  DisplayName_Lang_enTW?: string | null
  DisplayName_Lang_enUS?: string | null
  DisplayName_Lang_esES?: string | null
  DisplayName_Lang_esMX?: string | null
  DisplayName_Lang_frFR?: string | null
  DisplayName_Lang_itIT?: string | null
  DisplayName_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  DisplayName_Lang_Mask: number
  DisplayName_Lang_ptBR?: string | null
  DisplayName_Lang_ptPT?: string | null
  DisplayName_Lang_ruRU?: string | null
  DisplayName_Lang_Unk?: string | null
  DisplayName_Lang_zhCN?: string | null
  DisplayName_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Race: number
  /**  Defaults to: 0. */
  Sex: number
  /**  Defaults to: 0. */
  Type: number
}

export interface BattlegroundTemplate {
  AllianceStartLoc?: number | null
  AllianceStartO: number
  Comment: string
  HordeStartLoc?: number | null
  HordeStartO: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  MaxLvl: number
  /**  Defaults to: 0. */
  MaxPlayersPerTeam: number
  /**  Defaults to: 0. */
  MinLvl: number
  /**  Defaults to: 0. */
  MinPlayersPerTeam: number
  ScriptName: string
  /**  Defaults to: 0. */
  StartMaxDist: number
  /**  Defaults to: 1. */
  Weight: number
}

export interface BattlemasterEntry {
  /** Battleground template id Defaults to: 0. */
  bg_template: number
  /** Entry of a creature Defaults to: 0. */
  entry: number
}

export interface BattlemasterlistDbc {
  /**  Defaults to: 0. */
  GroupsAllowed: number
  /**  Defaults to: 0. */
  HolidayWorldState: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  InstanceType: number
  /**  Defaults to: 0. */
  MapID_1: number
  /**  Defaults to: 0. */
  MapID_2: number
  /**  Defaults to: 0. */
  MapID_3: number
  /**  Defaults to: 0. */
  MapID_4: number
  /**  Defaults to: 0. */
  MapID_5: number
  /**  Defaults to: 0. */
  MapID_6: number
  /**  Defaults to: 0. */
  MapID_7: number
  /**  Defaults to: 0. */
  MapID_8: number
  /**  Defaults to: 0. */
  MaxGroupSize: number
  /**  Defaults to: 0. */
  Maxlevel: number
  /**  Defaults to: 0. */
  Minlevel: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
}

export interface BroadcastText {
  EmoteDelay1?: number | null
  EmoteDelay2?: number | null
  EmoteDelay3?: number | null
  EmoteID1?: number | null
  EmoteID2?: number | null
  EmoteID3?: number | null
  EmotesID?: number | null
  FemaleText?: string | null
  Flags?: number | null
  /**  Defaults to: 0. */
  ID: number
  LanguageID?: number | null
  MaleText?: string | null
  SoundEntriesId?: number | null
  /**  Defaults to: 0. */
  VerifiedBuild?: number | null
}

export interface BroadcastTextLocale {
  FemaleText?: string | null
  /**  Defaults to: 0. */
  ID: number
  locale: string
  MaleText?: string | null
  /**  Defaults to: 0. */
  VerifiedBuild?: number | null
}

export interface CharstartoutfitDbc {
  /**  Defaults to: 0. */
  ClassID: number
  /**  Defaults to: 0. */
  DisplayItemID_1: number
  /**  Defaults to: 0. */
  DisplayItemID_10: number
  /**  Defaults to: 0. */
  DisplayItemID_11: number
  /**  Defaults to: 0. */
  DisplayItemID_12: number
  /**  Defaults to: 0. */
  DisplayItemID_13: number
  /**  Defaults to: 0. */
  DisplayItemID_14: number
  /**  Defaults to: 0. */
  DisplayItemID_15: number
  /**  Defaults to: 0. */
  DisplayItemID_16: number
  /**  Defaults to: 0. */
  DisplayItemID_17: number
  /**  Defaults to: 0. */
  DisplayItemID_18: number
  /**  Defaults to: 0. */
  DisplayItemID_19: number
  /**  Defaults to: 0. */
  DisplayItemID_2: number
  /**  Defaults to: 0. */
  DisplayItemID_20: number
  /**  Defaults to: 0. */
  DisplayItemID_21: number
  /**  Defaults to: 0. */
  DisplayItemID_22: number
  /**  Defaults to: 0. */
  DisplayItemID_23: number
  /**  Defaults to: 0. */
  DisplayItemID_24: number
  /**  Defaults to: 0. */
  DisplayItemID_3: number
  /**  Defaults to: 0. */
  DisplayItemID_4: number
  /**  Defaults to: 0. */
  DisplayItemID_5: number
  /**  Defaults to: 0. */
  DisplayItemID_6: number
  /**  Defaults to: 0. */
  DisplayItemID_7: number
  /**  Defaults to: 0. */
  DisplayItemID_8: number
  /**  Defaults to: 0. */
  DisplayItemID_9: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  InventoryType_1: number
  /**  Defaults to: 0. */
  InventoryType_10: number
  /**  Defaults to: 0. */
  InventoryType_11: number
  /**  Defaults to: 0. */
  InventoryType_12: number
  /**  Defaults to: 0. */
  InventoryType_13: number
  /**  Defaults to: 0. */
  InventoryType_14: number
  /**  Defaults to: 0. */
  InventoryType_15: number
  /**  Defaults to: 0. */
  InventoryType_16: number
  /**  Defaults to: 0. */
  InventoryType_17: number
  /**  Defaults to: 0. */
  InventoryType_18: number
  /**  Defaults to: 0. */
  InventoryType_19: number
  /**  Defaults to: 0. */
  InventoryType_2: number
  /**  Defaults to: 0. */
  InventoryType_20: number
  /**  Defaults to: 0. */
  InventoryType_21: number
  /**  Defaults to: 0. */
  InventoryType_22: number
  /**  Defaults to: 0. */
  InventoryType_23: number
  /**  Defaults to: 0. */
  InventoryType_24: number
  /**  Defaults to: 0. */
  InventoryType_3: number
  /**  Defaults to: 0. */
  InventoryType_4: number
  /**  Defaults to: 0. */
  InventoryType_5: number
  /**  Defaults to: 0. */
  InventoryType_6: number
  /**  Defaults to: 0. */
  InventoryType_7: number
  /**  Defaults to: 0. */
  InventoryType_8: number
  /**  Defaults to: 0. */
  InventoryType_9: number
  /**  Defaults to: 0. */
  ItemID_1: number
  /**  Defaults to: 0. */
  ItemID_10: number
  /**  Defaults to: 0. */
  ItemID_11: number
  /**  Defaults to: 0. */
  ItemID_12: number
  /**  Defaults to: 0. */
  ItemID_13: number
  /**  Defaults to: 0. */
  ItemID_14: number
  /**  Defaults to: 0. */
  ItemID_15: number
  /**  Defaults to: 0. */
  ItemID_16: number
  /**  Defaults to: 0. */
  ItemID_17: number
  /**  Defaults to: 0. */
  ItemID_18: number
  /**  Defaults to: 0. */
  ItemID_19: number
  /**  Defaults to: 0. */
  ItemID_2: number
  /**  Defaults to: 0. */
  ItemID_20: number
  /**  Defaults to: 0. */
  ItemID_21: number
  /**  Defaults to: 0. */
  ItemID_22: number
  /**  Defaults to: 0. */
  ItemID_23: number
  /**  Defaults to: 0. */
  ItemID_24: number
  /**  Defaults to: 0. */
  ItemID_3: number
  /**  Defaults to: 0. */
  ItemID_4: number
  /**  Defaults to: 0. */
  ItemID_5: number
  /**  Defaults to: 0. */
  ItemID_6: number
  /**  Defaults to: 0. */
  ItemID_7: number
  /**  Defaults to: 0. */
  ItemID_8: number
  /**  Defaults to: 0. */
  ItemID_9: number
  /**  Defaults to: 0. */
  OutfitID: number
  /**  Defaults to: 0. */
  RaceID: number
  /**  Defaults to: 0. */
  SexID: number
}

export interface ChartitlesDbc {
  /**  Defaults to: 0. */
  Condition_ID: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Mask_ID: number
  Name1_Lang_deDE?: string | null
  Name1_Lang_enCN?: string | null
  Name1_Lang_enGB?: string | null
  Name1_Lang_enTW?: string | null
  Name1_Lang_enUS?: string | null
  Name1_Lang_esES?: string | null
  Name1_Lang_esMX?: string | null
  Name1_Lang_frFR?: string | null
  Name1_Lang_itIT?: string | null
  Name1_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name1_Lang_Mask: number
  Name1_Lang_ptBR?: string | null
  Name1_Lang_ptPT?: string | null
  Name1_Lang_ruRU?: string | null
  Name1_Lang_Unk?: string | null
  Name1_Lang_zhCN?: string | null
  Name1_Lang_zhTW?: string | null
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
}

export interface ChatchannelsDbc {
  /**  Defaults to: 0. */
  FactionGroup: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
  Shortcut_Lang_deDE?: string | null
  Shortcut_Lang_enCN?: string | null
  Shortcut_Lang_enGB?: string | null
  Shortcut_Lang_enTW?: string | null
  Shortcut_Lang_enUS?: string | null
  Shortcut_Lang_esES?: string | null
  Shortcut_Lang_esMX?: string | null
  Shortcut_Lang_frFR?: string | null
  Shortcut_Lang_itIT?: string | null
  Shortcut_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Shortcut_Lang_Mask: number
  Shortcut_Lang_ptBR?: string | null
  Shortcut_Lang_ptPT?: string | null
  Shortcut_Lang_ruRU?: string | null
  Shortcut_Lang_Unk?: string | null
  Shortcut_Lang_zhCN?: string | null
  Shortcut_Lang_zhTW?: string | null
}

export interface ChrclassesDbc {
  /**  Defaults to: 0. */
  CinematicSequenceID: number
  /**  Defaults to: 0. */
  DisplayPower: number
  /**  Defaults to: 0. */
  Field01: number
  Filename?: string | null
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
  Name_Female_Lang_deDE?: string | null
  Name_Female_Lang_enCN?: string | null
  Name_Female_Lang_enGB?: string | null
  Name_Female_Lang_enTW?: string | null
  Name_Female_Lang_enUS?: string | null
  Name_Female_Lang_esES?: string | null
  Name_Female_Lang_esMX?: string | null
  Name_Female_Lang_frFR?: string | null
  Name_Female_Lang_itIT?: string | null
  Name_Female_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Female_Lang_Mask: number
  Name_Female_Lang_ptBR?: string | null
  Name_Female_Lang_ptPT?: string | null
  Name_Female_Lang_ruRU?: string | null
  Name_Female_Lang_Unk?: string | null
  Name_Female_Lang_zhCN?: string | null
  Name_Female_Lang_zhTW?: string | null
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
  Name_Male_Lang_deDE?: string | null
  Name_Male_Lang_enCN?: string | null
  Name_Male_Lang_enGB?: string | null
  Name_Male_Lang_enTW?: string | null
  Name_Male_Lang_enUS?: string | null
  Name_Male_Lang_esES?: string | null
  Name_Male_Lang_esMX?: string | null
  Name_Male_Lang_frFR?: string | null
  Name_Male_Lang_itIT?: string | null
  Name_Male_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Male_Lang_Mask: number
  Name_Male_Lang_ptBR?: string | null
  Name_Male_Lang_ptPT?: string | null
  Name_Male_Lang_ruRU?: string | null
  Name_Male_Lang_Unk?: string | null
  Name_Male_Lang_zhCN?: string | null
  Name_Male_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  PetNameToken: number
  /**  Defaults to: 0. */
  Required_Expansion: number
  /**  Defaults to: 0. */
  SpellClassSet: number
}

export interface ChrracesDbc {
  /**  Defaults to: 0. */
  Alliance: number
  /**  Defaults to: 0. */
  BaseLanguage: number
  /**  Defaults to: 0. */
  CinematicSequenceID: number
  ClientFilestring?: string | null
  ClientPrefix?: string | null
  /**  Defaults to: 0. */
  CreatureType: number
  /**  Defaults to: 0. */
  ExplorationSoundID: number
  FacialHairCustomization_1?: string | null
  FacialHairCustomization_2?: string | null
  /**  Defaults to: 0. */
  FactionID: number
  /**  Defaults to: 0. */
  FemaleDisplayId: number
  /**  Defaults to: 0. */
  Flags: number
  HairCustomization?: string | null
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  MaleDisplayId: number
  Name_Female_Lang_deDE?: string | null
  Name_Female_Lang_enCN?: string | null
  Name_Female_Lang_enGB?: string | null
  Name_Female_Lang_enTW?: string | null
  Name_Female_Lang_enUS?: string | null
  Name_Female_Lang_esES?: string | null
  Name_Female_Lang_esMX?: string | null
  Name_Female_Lang_frFR?: string | null
  Name_Female_Lang_itIT?: string | null
  Name_Female_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Female_Lang_Mask: number
  Name_Female_Lang_ptBR?: string | null
  Name_Female_Lang_ptPT?: string | null
  Name_Female_Lang_ruRU?: string | null
  Name_Female_Lang_Unk?: string | null
  Name_Female_Lang_zhCN?: string | null
  Name_Female_Lang_zhTW?: string | null
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
  Name_Male_Lang_deDE?: string | null
  Name_Male_Lang_enCN?: string | null
  Name_Male_Lang_enGB?: string | null
  Name_Male_Lang_enTW?: string | null
  Name_Male_Lang_enUS?: string | null
  Name_Male_Lang_esES?: string | null
  Name_Male_Lang_esMX?: string | null
  Name_Male_Lang_frFR?: string | null
  Name_Male_Lang_itIT?: string | null
  Name_Male_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Male_Lang_Mask: number
  Name_Male_Lang_ptBR?: string | null
  Name_Male_Lang_ptPT?: string | null
  Name_Male_Lang_ruRU?: string | null
  Name_Male_Lang_Unk?: string | null
  Name_Male_Lang_zhCN?: string | null
  Name_Male_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  Required_Expansion: number
  /**  Defaults to: 0. */
  ResSicknessSpellID: number
  /**  Defaults to: 0. */
  SplashSoundID: number
}

export interface CinematiccameraDbc {
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  locationX: number
  /**  Defaults to: 0. */
  locationY: number
  /**  Defaults to: 0. */
  locationZ: number
  model?: string | null
  /**  Defaults to: 0. */
  rotation: number
  /**  Defaults to: 0. */
  soundEntry: number
}

export interface CinematicsequencesDbc {
  /**  Defaults to: 0. */
  Camera_1: number
  /**  Defaults to: 0. */
  Camera_2: number
  /**  Defaults to: 0. */
  Camera_3: number
  /**  Defaults to: 0. */
  Camera_4: number
  /**  Defaults to: 0. */
  Camera_5: number
  /**  Defaults to: 0. */
  Camera_6: number
  /**  Defaults to: 0. */
  Camera_7: number
  /**  Defaults to: 0. */
  Camera_8: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  SoundID: number
}

export interface Command {
  help?: string | null
  name: string
  /**  Defaults to: 0. */
  security: number
}

export interface Conditions {
  Comment?: string | null
  /**  Defaults to: 0. */
  ConditionTarget: number
  /**  Defaults to: 0. */
  ConditionTypeOrReference: number
  /**  Defaults to: 0. */
  ConditionValue1: number
  /**  Defaults to: 0. */
  ConditionValue2: number
  /**  Defaults to: 0. */
  ConditionValue3: number
  /**  Defaults to: 0. */
  ElseGroup: number
  /**  Defaults to: 0. */
  ErrorTextId: number
  /**  Defaults to: 0. */
  ErrorType: number
  /**  Defaults to: 0. */
  NegativeCondition: number
  ScriptName: string
  /**  Defaults to: 0. */
  SourceEntry: number
  /**  Defaults to: 0. */
  SourceGroup: number
  /**  Defaults to: 0. */
  SourceId: number
  /**  Defaults to: 0. */
  SourceTypeOrReferenceId: number
}

export interface Creature {
  /** Area Identifier Defaults to: 0. */
  areaId: number
  Comment?: string | null
  /**  Defaults to: 0. */
  CreateObject: number
  /**  Defaults to: 1. */
  curhealth: number
  /**  Defaults to: 0. */
  curmana: number
  /**  Defaults to: 0. */
  currentwaypoint: number
  /**  Defaults to: 0. */
  dynamicflags: number
  /**  Defaults to: 0. */
  equipment_id: number
  /** Global Unique Identifier  */
  guid: number
  /** Creature Identifier Defaults to: 0. */
  id1: number
  /** Creature Identifier Defaults to: 0. */
  id2: number
  /** Creature Identifier Defaults to: 0. */
  id3: number
  /** Map Identifier Defaults to: 0. */
  map: number
  /**  Defaults to: 0. */
  MovementType: number
  /**  Defaults to: 0. */
  npcflag: number
  /**  Defaults to: 0. */
  orientation: number
  /**  Defaults to: 1. */
  phaseMask: number
  /**  Defaults to: 0. */
  position_x: number
  /**  Defaults to: 0. */
  position_y: number
  /**  Defaults to: 0. */
  position_z: number
  ScriptName?: string | null
  /**  Defaults to: 1. */
  spawnMask: number
  /**  Defaults to: 120. */
  spawntimesecs: number
  /**  Defaults to: 0. */
  unit_flags: number
  VerifiedBuild?: number | null
  /**  Defaults to: 0. */
  wander_distance: number
  /** Zone Identifier Defaults to: 0. */
  zoneId: number
}

export interface CreatureAddon {
  auras?: string | null
  /**  Defaults to: 0. */
  bytes1: number
  /**  Defaults to: 0. */
  bytes2: number
  /**  Defaults to: 0. */
  emote: number
  /**  Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  mount: number
  /**  Defaults to: 0. */
  path_id: number
  /**  Defaults to: 0. */
  visibilityDistanceType: number
}

export interface CreatureClasslevelstats {
  /**  Defaults to: 0. */
  attackpower: number
  /**  Defaults to: 1. */
  basearmor: number
  /**  Defaults to: 1. */
  basehp0: number
  /**  Defaults to: 1. */
  basehp1: number
  /**  Defaults to: 1. */
  basehp2: number
  /**  Defaults to: 0. */
  basemana: number
  class: number
  comment?: string | null
  /**  Defaults to: 0. */
  damage_base: number
  /**  Defaults to: 0. */
  damage_exp1: number
  /**  Defaults to: 0. */
  damage_exp2: number
  level: number
  /**  Defaults to: 0. */
  rangedattackpower: number
}

export interface CreatureEquipTemplate {
  /**  Defaults to: 0. */
  CreatureID: number
  /**  Defaults to: 1. */
  ID: number
  /**  Defaults to: 0. */
  ItemID1: number
  /**  Defaults to: 0. */
  ItemID2: number
  /**  Defaults to: 0. */
  ItemID3: number
  VerifiedBuild?: number | null
}

export interface CreatureFormations {
  /**  Defaults to: 0. */
  angle: number
  /**  Defaults to: 0. */
  dist: number
  /**  Defaults to: 0. */
  groupAI: number
  /**  Defaults to: 0. */
  leaderGUID: number
  /**  Defaults to: 0. */
  memberGUID: number
  /**  Defaults to: 0. */
  point_1: number
  /**  Defaults to: 0. */
  point_2: number
}

export interface CreatureLootTemplate {
  /**  Defaults to: 100. */
  Chance: number
  Comment?: string | null
  /**  Defaults to: 0. */
  Entry: number
  /**  Defaults to: 0. */
  GroupId: number
  /**  Defaults to: 0. */
  Item: number
  /**  Defaults to: 1. */
  LootMode: number
  /**  Defaults to: 1. */
  MaxCount: number
  /**  Defaults to: 1. */
  MinCount: number
  /**  Defaults to: 0. */
  QuestRequired: number
  /**  Defaults to: 0. */
  Reference: number
}

export interface CreatureModelInfo {
  /**  Defaults to: 0. */
  BoundingRadius: number
  /**  Defaults to: 0. */
  CombatReach: number
  /**  Defaults to: 0. */
  DisplayID: number
  /**  Defaults to: 0. */
  DisplayID_Other_Gender: number
  /**  Defaults to: 2. */
  Gender: number
}

export interface CreatureMovementOverride {
  Chase?: number | null
  Flight?: number | null
  Ground?: number | null
  /** Time (in milliseconds) during which creature will not move after interaction with player  */
  InteractionPauseTimer?: number | null
  Random?: number | null
  Rooted?: number | null
  /**  Defaults to: 0. */
  SpawnId: number
  Swim?: number | null
}

export interface CreatureOnkillReputation {
  /** Creature Identifier Defaults to: 0. */
  creature_id: number
  /**  Defaults to: 0. */
  IsTeamAward1: number
  /**  Defaults to: 0. */
  IsTeamAward2: number
  /**  Defaults to: 0. */
  MaxStanding1: number
  /**  Defaults to: 0. */
  MaxStanding2: number
  /**  Defaults to: 0. */
  RewOnKillRepFaction1: number
  /**  Defaults to: 0. */
  RewOnKillRepFaction2: number
  /**  Defaults to: 0. */
  RewOnKillRepValue1: number
  /**  Defaults to: 0. */
  RewOnKillRepValue2: number
  /**  Defaults to: 0. */
  TeamDependent: number
}

export interface CreatureQuestender {
  /** Identifier Defaults to: 0. */
  id: number
  /** Quest Identifier Defaults to: 0. */
  quest: number
}

export interface CreatureQuestitem {
  /**  Defaults to: 0. */
  CreatureEntry: number
  /**  Defaults to: 0. */
  Idx: number
  /**  Defaults to: 0. */
  ItemId: number
  VerifiedBuild?: number | null
}

export interface CreatureQueststarter {
  /** Identifier Defaults to: 0. */
  id: number
  /** Quest Identifier Defaults to: 0. */
  quest: number
}

export interface CreatureSummonGroups {
  Comment: string
  /**  Defaults to: 0. */
  entry: number
  /**  Defaults to: 0. */
  groupId: number
  /**  Defaults to: 0. */
  orientation: number
  /**  Defaults to: 0. */
  position_x: number
  /**  Defaults to: 0. */
  position_y: number
  /**  Defaults to: 0. */
  position_z: number
  /**  Defaults to: 0. */
  summonerId: number
  /**  Defaults to: 0. */
  summonerType: number
  /**  Defaults to: 0. */
  summonTime: number
  /**  Defaults to: 0. */
  summonType: number
}

export interface CreatureTemplate {
  AIName: string
  /**  Defaults to: 1. */
  ArmorModifier: number
  /**  Defaults to: 0. */
  BaseAttackTime: number
  /**  Defaults to: 1. */
  BaseVariance: number
  /**  Defaults to: 1. */
  DamageModifier: number
  /**  Defaults to: 20. */
  detection_range: number
  /**  Defaults to: 0. */
  difficulty_entry_1: number
  /**  Defaults to: 0. */
  difficulty_entry_2: number
  /**  Defaults to: 0. */
  difficulty_entry_3: number
  /**  Defaults to: 0. */
  dmgschool: number
  /**  Defaults to: 0. */
  dynamicflags: number
  /**  Defaults to: 0. */
  entry: number
  /**  Defaults to: 0. */
  exp: number
  /**  Defaults to: 1. */
  ExperienceModifier: number
  /**  Defaults to: 0. */
  faction: number
  /**  Defaults to: 0. */
  family: number
  /**  Defaults to: 0. */
  flags_extra: number
  /**  Defaults to: 0. */
  gossip_menu_id: number
  /**  Defaults to: 1. */
  HealthModifier: number
  /**  Defaults to: 1. */
  HoverHeight: number
  IconName?: string | null
  /**  Defaults to: 0. */
  KillCredit1: number
  /**  Defaults to: 0. */
  KillCredit2: number
  /**  Defaults to: 0. */
  lootid: number
  /**  Defaults to: 1. */
  ManaModifier: number
  /**  Defaults to: 0. */
  maxgold: number
  /**  Defaults to: 1. */
  maxlevel: number
  /**  Defaults to: 0. */
  mechanic_immune_mask: number
  /**  Defaults to: 0. */
  mingold: number
  /**  Defaults to: 1. */
  minlevel: number
  /**  Defaults to: 0. */
  movementId: number
  /**  Defaults to: 0. */
  MovementType: number
  /**  Defaults to: 0. */
  name: string
  /**  Defaults to: 0. */
  npcflag: number
  /**  Defaults to: 0. */
  PetSpellDataId: number
  /**  Defaults to: 0. */
  pickpocketloot: number
  /**  Defaults to: 0. */
  RacialLeader: number
  /**  Defaults to: 0. */
  RangeAttackTime: number
  /**  Defaults to: 1. */
  RangeVariance: number
  /**  Defaults to: 0. */
  rank: number
  /**  Defaults to: 1. */
  RegenHealth: number
  /**  Defaults to: 1. */
  scale: number
  ScriptName: string
  /**  Defaults to: 0. */
  skinloot: number
  /**  Defaults to: 1. */
  speed_flight: number
  /** Result of 8.0/7.0, most common value Defaults to: 1.14286. */
  speed_run: number
  /**  Defaults to: 1. */
  speed_swim: number
  /** Result of 2.5/2.5, most common value Defaults to: 1. */
  speed_walk: number
  /**  Defaults to: 0. */
  spell_school_immune_mask: number
  subname?: string | null
  /**  Defaults to: 0. */
  trainer_class: number
  /**  Defaults to: 0. */
  trainer_race: number
  /**  Defaults to: 0. */
  trainer_spell: number
  /**  Defaults to: 0. */
  trainer_type: number
  /**  Defaults to: 0. */
  type: number
  /**  Defaults to: 0. */
  type_flags: number
  /**  Defaults to: 0. */
  unit_class: number
  /**  Defaults to: 0. */
  unit_flags: number
  /**  Defaults to: 0. */
  unit_flags2: number
  /**  Defaults to: 0. */
  VehicleId: number
  VerifiedBuild?: number | null
}

export interface CreatureTemplateAddon {
  auras?: string | null
  /**  Defaults to: 0. */
  bytes1: number
  /**  Defaults to: 0. */
  bytes2: number
  /**  Defaults to: 0. */
  emote: number
  /**  Defaults to: 0. */
  entry: number
  /**  Defaults to: 0. */
  mount: number
  /**  Defaults to: 0. */
  path_id: number
  /**  Defaults to: 0. */
  visibilityDistanceType: number
}

export interface CreatureTemplateLocale {
  /**  Defaults to: 0. */
  entry: number
  locale: string
  Name?: string | null
  Title?: string | null
  VerifiedBuild?: number | null
}

export interface CreatureTemplateModel {
  CreatureDisplayID: number
  CreatureID: number
  /**  Defaults to: 1. */
  DisplayScale: number
  /**  Defaults to: 0. */
  Idx: number
  /**  Defaults to: 0. */
  Probability: number
  VerifiedBuild?: number | null
}

export interface CreatureTemplateMovement {
  Chase?: number | null
  /**  Defaults to: 0. */
  CreatureId: number
  Flight?: number | null
  Ground?: number | null
  /** Time (in milliseconds) during which creature will not move after interaction with player  */
  InteractionPauseTimer?: number | null
  Random?: number | null
  Rooted?: number | null
  Swim?: number | null
}

export interface CreatureTemplateResistance {
  CreatureID: number
  Resistance?: number | null
  School: number
  VerifiedBuild?: number | null
}

export interface CreatureTemplateSpell {
  CreatureID: number
  /**  Defaults to: 0. */
  Index: number
  Spell?: number | null
  VerifiedBuild?: number | null
}

export interface CreatureText {
  /**  Defaults to: 0. */
  BroadcastTextId: number
  comment?: string | null
  /**  Defaults to: 0. */
  CreatureID: number
  /**  Defaults to: 0. */
  Duration: number
  /**  Defaults to: 0. */
  Emote: number
  /**  Defaults to: 0. */
  GroupID: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Language: number
  /**  Defaults to: 0. */
  Probability: number
  /**  Defaults to: 0. */
  Sound: number
  Text?: string | null
  /**  Defaults to: 0. */
  TextRange: number
  /**  Defaults to: 0. */
  Type: number
}

export interface CreatureTextLocale {
  /**  Defaults to: 0. */
  CreatureID: number
  /**  Defaults to: 0. */
  GroupID: number
  /**  Defaults to: 0. */
  ID: number
  Locale: string
  Text?: string | null
}

export interface CreaturedisplayinfoDbc {
  /**  Defaults to: 0. */
  BloodID: number
  /**  Defaults to: 0. */
  BloodLevel: number
  /**  Defaults to: 0. */
  CreatureGeosetData: number
  /**  Defaults to: 0. */
  CreatureModelAlpha: number
  /**  Defaults to: 0. */
  CreatureModelScale: number
  /**  Defaults to: 0. */
  ExtendedDisplayInfoID: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  ModelID: number
  /**  Defaults to: 0. */
  NPCSoundID: number
  /**  Defaults to: 0. */
  ObjectEffectPackageID: number
  /**  Defaults to: 0. */
  ParticleColorID: number
  PortraitTextureName?: string | null
  /**  Defaults to: 0. */
  SoundID: number
  TextureVariation_1?: string | null
  TextureVariation_2?: string | null
  TextureVariation_3?: string | null
}

export interface CreaturedisplayinfoextraDbc {
  BakeName: string
  /**  Defaults to: 0. */
  DisplayRaceID: number
  /**  Defaults to: 0. */
  DisplaySexID: number
  /**  Defaults to: 0. */
  FaceID: number
  /**  Defaults to: 0. */
  FacialHairID: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  HairColorID: number
  /**  Defaults to: 0. */
  HairStyleID: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  NPCItemDisplay1: number
  /**  Defaults to: 0. */
  NPCItemDisplay10: number
  /**  Defaults to: 0. */
  NPCItemDisplay11: number
  /**  Defaults to: 0. */
  NPCItemDisplay2: number
  /**  Defaults to: 0. */
  NPCItemDisplay3: number
  /**  Defaults to: 0. */
  NPCItemDisplay4: number
  /**  Defaults to: 0. */
  NPCItemDisplay5: number
  /**  Defaults to: 0. */
  NPCItemDisplay6: number
  /**  Defaults to: 0. */
  NPCItemDisplay7: number
  /**  Defaults to: 0. */
  NPCItemDisplay8: number
  /**  Defaults to: 0. */
  NPCItemDisplay9: number
  /**  Defaults to: 0. */
  SkinID: number
}

export interface CreaturefamilyDbc {
  /**  Defaults to: 0. */
  CategoryEnumID: number
  IconFile?: string | null
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  MaxScale: number
  /**  Defaults to: 0. */
  MaxScaleLevel: number
  /**  Defaults to: 0. */
  MinScale: number
  /**  Defaults to: 0. */
  MinScaleLevel: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  PetFoodMask: number
  /**  Defaults to: 0. */
  PetTalentType: number
  /**  Defaults to: 0. */
  SkillLine_1: number
  /**  Defaults to: 0. */
  SkillLine_2: number
}

export interface CreaturemodeldataDbc {
  /**  Defaults to: 0. */
  AttachedEffectScale: number
  /**  Defaults to: 0. */
  BloodID: number
  /**  Defaults to: 0. */
  CollisionHeight: number
  /**  Defaults to: 0. */
  CollisionWidth: number
  /**  Defaults to: 0. */
  DeathThudShakeSize: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  FoleyMaterialID: number
  /**  Defaults to: 0. */
  FootprintParticleScale: number
  /**  Defaults to: 0. */
  FootprintTextureID: number
  /**  Defaults to: 0. */
  FootprintTextureLength: number
  /**  Defaults to: 0. */
  FootprintTextureWidth: number
  /**  Defaults to: 0. */
  FootstepShakeSize: number
  /**  Defaults to: 0. */
  GeoBoxMaxX: number
  /**  Defaults to: 0. */
  GeoBoxMaxY: number
  /**  Defaults to: 0. */
  GeoBoxMaxZ: number
  /**  Defaults to: 0. */
  GeoBoxMinX: number
  /**  Defaults to: 0. */
  GeoBoxMinY: number
  /**  Defaults to: 0. */
  GeoBoxMinZ: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  MissileCollisionPush: number
  /**  Defaults to: 0. */
  MissileCollisionRadius: number
  /**  Defaults to: 0. */
  MissileCollisionRaise: number
  ModelName?: string | null
  /**  Defaults to: 0. */
  ModelScale: number
  /**  Defaults to: 0. */
  MountHeight: number
  /**  Defaults to: 0. */
  SizeClass: number
  /**  Defaults to: 0. */
  SoundID: number
  /**  Defaults to: 0. */
  WorldEffectScale: number
}

export interface CreaturespelldataDbc {
  /**  Defaults to: 0. */
  Availability_1: number
  /**  Defaults to: 0. */
  Availability_2: number
  /**  Defaults to: 0. */
  Availability_3: number
  /**  Defaults to: 0. */
  Availability_4: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Spells_1: number
  /**  Defaults to: 0. */
  Spells_2: number
  /**  Defaults to: 0. */
  Spells_3: number
  /**  Defaults to: 0. */
  Spells_4: number
}

export interface CreaturetypeDbc {
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
}

export interface CurrencytypesDbc {
  /**  Defaults to: 0. */
  BitIndex: number
  /**  Defaults to: 0. */
  CategoryID: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  ItemID: number
}

export interface DestructiblemodeldataDbc {
  /**  Defaults to: 0. */
  Field17: number
  /**  Defaults to: 0. */
  Field18: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  State0AmbientDoodadSet: number
  /**  Defaults to: 0. */
  State0DestructionDoodadSet: number
  /**  Defaults to: 0. */
  State0ImpactEffectDoodadSet: number
  /**  Defaults to: 0. */
  State0Wmo: number
  /**  Defaults to: 0. */
  State1AmbientDoodadSet: number
  /**  Defaults to: 0. */
  State1DestructionDoodadSet: number
  /**  Defaults to: 0. */
  State1ImpactEffectDoodadSet: number
  /**  Defaults to: 0. */
  State1Wmo: number
  /**  Defaults to: 0. */
  State2AmbientDoodadSet: number
  /**  Defaults to: 0. */
  State2DestructionDoodadSet: number
  /**  Defaults to: 0. */
  State2ImpactEffectDoodadSet: number
  /**  Defaults to: 0. */
  State2Wmo: number
  /**  Defaults to: 0. */
  State3AmbientDoodadSet: number
  /**  Defaults to: 0. */
  State3DestructionDoodadSet: number
  /**  Defaults to: 0. */
  State3ImpactEffectDoodadSet: number
  /**  Defaults to: 0. */
  State3Wmo: number
}

export interface Disables {
  comment: string
  entry: number
  /**  Defaults to: 0. */
  flags: number
  params_0: string
  params_1: string
  sourceType: number
}

export interface DisenchantLootTemplate {
  /**  Defaults to: 100. */
  Chance: number
  Comment?: string | null
  /**  Defaults to: 0. */
  Entry: number
  /**  Defaults to: 0. */
  GroupId: number
  /**  Defaults to: 0. */
  Item: number
  /**  Defaults to: 1. */
  LootMode: number
  /**  Defaults to: 1. */
  MaxCount: number
  /**  Defaults to: 1. */
  MinCount: number
  /**  Defaults to: 0. */
  QuestRequired: number
  /**  Defaults to: 0. */
  Reference: number
}

export interface DungeonAccessRequirements {
  comment?: string | null
  /** ID from dungeon_access_template  */
  dungeon_access_id: number
  /** 0 = Alliance, 1 = Horde, 2 = Both factions Defaults to: 2. */
  faction: number
  /** 0 = check the requirement for the player trying to enter, 1 = check the requirement for the party leader Defaults to: 0. */
  leader_only: number
  /** Priority order for the requirement, sorted by type. 0 is the highest priority  */
  priority?: number | null
  /** Achiev/quest/item ID  */
  requirement_id: number
  /** Optional msg shown ingame to player if he cannot enter. You can add extra info  */
  requirement_note?: string | null
  /** 0 = achiev, 1 = quest, 2 = item  */
  requirement_type: number
}

export interface DungeonAccessTemplate {
  /** Dungeon Name 5/10/25/40 man - Normal/Heroic  */
  comment?: string | null
  /** 5 man: 0 = normal, 1 = heroic, 2 = epic (not implemented) | 10 man: 0 = normal, 2 = heroic | 25 man: 1 = normal, 3 = heroic Defaults to: 0. */
  difficulty: number
  /** The dungeon template ID  */
  id: number
  /** Map ID from instance_template  */
  map_id?: number | null
  max_level?: number | null
  /** Min average ilvl required to enter  */
  min_avg_item_level?: number | null
  min_level?: number | null
}

export interface DungeonencounterDbc {
  /**  Defaults to: 0. */
  Bit: number
  /**  Defaults to: 0. */
  Difficulty: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  MapID: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  OrderIndex: number
  /**  Defaults to: 0. */
  SpellIconID: number
}

export interface DurabilitycostsDbc {
  /**  Defaults to: 0. */
  ArmorSubClassCost_1: number
  /**  Defaults to: 0. */
  ArmorSubClassCost_2: number
  /**  Defaults to: 0. */
  ArmorSubClassCost_3: number
  /**  Defaults to: 0. */
  ArmorSubClassCost_4: number
  /**  Defaults to: 0. */
  ArmorSubClassCost_5: number
  /**  Defaults to: 0. */
  ArmorSubClassCost_6: number
  /**  Defaults to: 0. */
  ArmorSubClassCost_7: number
  /**  Defaults to: 0. */
  ArmorSubClassCost_8: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_1: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_10: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_11: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_12: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_13: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_14: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_15: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_16: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_17: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_18: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_19: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_2: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_20: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_21: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_3: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_4: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_5: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_6: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_7: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_8: number
  /**  Defaults to: 0. */
  WeaponSubClassCost_9: number
}

export interface DurabilityqualityDbc {
  /**  Defaults to: 0. */
  Data: number
  /**  Defaults to: 0. */
  ID: number
}

export interface EmotesDbc {
  /**  Defaults to: 0. */
  AnimID: number
  /**  Defaults to: 0. */
  EmoteFlags: number
  EmoteSlashCommand?: string | null
  /**  Defaults to: 0. */
  EmoteSpecProc: number
  /**  Defaults to: 0. */
  EmoteSpecProcParam: number
  /**  Defaults to: 0. */
  EventSoundID: number
  /**  Defaults to: 0. */
  ID: number
}

export interface EmotestextDbc {
  /**  Defaults to: 0. */
  EmoteID: number
  /**  Defaults to: 0. */
  EmoteText_1: number
  /**  Defaults to: 0. */
  EmoteText_10: number
  /**  Defaults to: 0. */
  EmoteText_11: number
  /**  Defaults to: 0. */
  EmoteText_12: number
  /**  Defaults to: 0. */
  EmoteText_13: number
  /**  Defaults to: 0. */
  EmoteText_14: number
  /**  Defaults to: 0. */
  EmoteText_15: number
  /**  Defaults to: 0. */
  EmoteText_16: number
  /**  Defaults to: 0. */
  EmoteText_2: number
  /**  Defaults to: 0. */
  EmoteText_3: number
  /**  Defaults to: 0. */
  EmoteText_4: number
  /**  Defaults to: 0. */
  EmoteText_5: number
  /**  Defaults to: 0. */
  EmoteText_6: number
  /**  Defaults to: 0. */
  EmoteText_7: number
  /**  Defaults to: 0. */
  EmoteText_8: number
  /**  Defaults to: 0. */
  EmoteText_9: number
  /**  Defaults to: 0. */
  ID: number
  Name?: string | null
}

export interface EventScripts {
  /**  Defaults to: 0. */
  command: number
  /**  Defaults to: 0. */
  dataint: number
  /**  Defaults to: 0. */
  datalong: number
  /**  Defaults to: 0. */
  datalong2: number
  /**  Defaults to: 0. */
  delay: number
  /**  Defaults to: 0. */
  id: number
  /**  Defaults to: 0. */
  o: number
  /**  Defaults to: 0. */
  x: number
  /**  Defaults to: 0. */
  y: number
  /**  Defaults to: 0. */
  z: number
}

export interface ExplorationBasexp {
  /**  Defaults to: 0. */
  basexp: number
  /**  Defaults to: 0. */
  level: number
}

export interface FactionDbc {
  Description_Lang_deDE?: string | null
  Description_Lang_enCN?: string | null
  Description_Lang_enGB?: string | null
  Description_Lang_enTW?: string | null
  Description_Lang_enUS?: string | null
  Description_Lang_esES?: string | null
  Description_Lang_esMX?: string | null
  Description_Lang_frFR?: string | null
  Description_Lang_itIT?: string | null
  Description_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Description_Lang_Mask: number
  Description_Lang_ptBR?: string | null
  Description_Lang_ptPT?: string | null
  Description_Lang_ruRU?: string | null
  Description_Lang_Unk?: string | null
  Description_Lang_zhCN?: string | null
  Description_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  ID: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  ParentFactionCap_1: number
  /**  Defaults to: 0. */
  ParentFactionCap_2: number
  /**  Defaults to: 0. */
  ParentFactionID: number
  /**  Defaults to: 0. */
  ParentFactionMod_1: number
  /**  Defaults to: 0. */
  ParentFactionMod_2: number
  /**  Defaults to: 0. */
  ReputationBase_1: number
  /**  Defaults to: 0. */
  ReputationBase_2: number
  /**  Defaults to: 0. */
  ReputationBase_3: number
  /**  Defaults to: 0. */
  ReputationBase_4: number
  /**  Defaults to: 0. */
  ReputationClassMask_1: number
  /**  Defaults to: 0. */
  ReputationClassMask_2: number
  /**  Defaults to: 0. */
  ReputationClassMask_3: number
  /**  Defaults to: 0. */
  ReputationClassMask_4: number
  /**  Defaults to: 0. */
  ReputationFlags_1: number
  /**  Defaults to: 0. */
  ReputationFlags_2: number
  /**  Defaults to: 0. */
  ReputationFlags_3: number
  /**  Defaults to: 0. */
  ReputationFlags_4: number
  /**  Defaults to: 0. */
  ReputationIndex: number
  /**  Defaults to: 0. */
  ReputationRaceMask_1: number
  /**  Defaults to: 0. */
  ReputationRaceMask_2: number
  /**  Defaults to: 0. */
  ReputationRaceMask_3: number
  /**  Defaults to: 0. */
  ReputationRaceMask_4: number
}

export interface FactiontemplateDbc {
  /**  Defaults to: 0. */
  Enemies_1: number
  /**  Defaults to: 0. */
  Enemies_2: number
  /**  Defaults to: 0. */
  Enemies_3: number
  /**  Defaults to: 0. */
  Enemies_4: number
  /**  Defaults to: 0. */
  EnemyGroup: number
  /**  Defaults to: 0. */
  Faction: number
  /**  Defaults to: 0. */
  FactionGroup: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  Friend_1: number
  /**  Defaults to: 0. */
  Friend_2: number
  /**  Defaults to: 0. */
  Friend_3: number
  /**  Defaults to: 0. */
  Friend_4: number
  /**  Defaults to: 0. */
  FriendGroup: number
  /**  Defaults to: 0. */
  ID: number
}

export interface FishingLootTemplate {
  /**  Defaults to: 100. */
  Chance: number
  Comment?: string | null
  /**  Defaults to: 0. */
  Entry: number
  /**  Defaults to: 0. */
  GroupId: number
  /**  Defaults to: 0. */
  Item: number
  /**  Defaults to: 1. */
  LootMode: number
  /**  Defaults to: 1. */
  MaxCount: number
  /**  Defaults to: 1. */
  MinCount: number
  /**  Defaults to: 0. */
  QuestRequired: number
  /**  Defaults to: 0. */
  Reference: number
}

export interface GameEvent {
  /** 0 dont announce, 1 announce, 2 value from config Defaults to: 2. */
  announce: number
  /** Description of the event displayed in console  */
  description?: string | null
  /** Absolute end date, the event will never start after Defaults to: 2000-01-01 17:00:00. */
  end_time?: Date | null
  /** Entry of the game event  */
  eventEntry: number
  /** Client side holiday id Defaults to: 0. */
  holiday: number
  /**  Defaults to: 0. */
  holidayStage: number
  /** Length in minutes of the event Defaults to: 2592000. */
  length: number
  /** Delay in minutes between occurences of the event Defaults to: 5184000. */
  occurence: number
  /** Absolute start date, the event will never start before Defaults to: 2000-01-01 17:00:00. */
  start_time?: Date | null
  /** 0 if normal event, 1 if world event Defaults to: 0. */
  world_event: number
}

export interface GameEventArenaSeasons {
  /** Entry of the game event  */
  eventEntry: number
  /** Arena season number  */
  season: number
}

export interface GameEventBattlegroundHoliday {
  /**  Defaults to: 0. */
  bgflag: number
  /** Entry of the game event  */
  eventEntry: number
}

export interface GameEventCondition {
  /**  Defaults to: 0. */
  condition_id: number
  description: string
  /**  Defaults to: 0. */
  done_world_state_field: number
  /** Entry of the game event  */
  eventEntry: number
  /**  Defaults to: 0. */
  max_world_state_field: number
  /**  Defaults to: 0. */
  req_num?: number | null
}

export interface GameEventCreature {
  /** Entry of the game event. Put negative entry to remove during event.  */
  eventEntry: number
  guid: number
}

export interface GameEventCreatureQuest {
  /** Entry of the game event.  */
  eventEntry: number
  /**  Defaults to: 0. */
  id: number
  /**  Defaults to: 0. */
  quest: number
}

export interface GameEventGameobject {
  /** Entry of the game event. Put negative entry to remove during event.  */
  eventEntry: number
  guid: number
}

export interface GameEventGameobjectQuest {
  /** Entry of the game event  */
  eventEntry: number
  /**  Defaults to: 0. */
  id: number
  /**  Defaults to: 0. */
  quest: number
}

export interface GameEventModelEquip {
  /**  Defaults to: 0. */
  equipment_id: number
  /** Entry of the game event.  */
  eventEntry: number
  /**  Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  modelid: number
}

export interface GameEventNpcVendor {
  /** Entry of the game event.  */
  eventEntry: number
  /**  Defaults to: 0. */
  ExtendedCost: number
  /**  Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  incrtime: number
  /**  Defaults to: 0. */
  item: number
  /**  Defaults to: 0. */
  maxcount: number
  /**  Defaults to: 0. */
  slot: number
}

export interface GameEventNpcflag {
  /** Entry of the game event  */
  eventEntry: number
  /**  Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  npcflag: number
}

export interface GameEventPool {
  /** Entry of the game event. Put negative entry to remove during event.  */
  eventEntry: number
  /** Id of the pool Defaults to: 0. */
  pool_entry: number
}

export interface GameEventPrerequisite {
  /** Entry of the game event  */
  eventEntry: number
  prerequisite_event: number
}

export interface GameEventQuestCondition {
  /**  Defaults to: 0. */
  condition_id: number
  /** Entry of the game event.  */
  eventEntry: number
  /**  Defaults to: 0. */
  num?: number | null
  /**  Defaults to: 0. */
  quest: number
}

export interface GameEventSeasonalQuestrelation {
  /** Entry of the game event Defaults to: 0. */
  eventEntry: number
  /** Quest Identifier  */
  questId: number
}

export interface GameGraveyard {
  Comment?: string | null
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Map: number
  /**  Defaults to: 0. */
  x: number
  /**  Defaults to: 0. */
  y: number
  /**  Defaults to: 0. */
  z: number
}

export interface GameTele {
  id: number
  /**  Defaults to: 0. */
  map: number
  name: string
  /**  Defaults to: 0. */
  orientation: number
  /**  Defaults to: 0. */
  position_x: number
  /**  Defaults to: 0. */
  position_y: number
  /**  Defaults to: 0. */
  position_z: number
}

export interface GameWeather {
  /**  Defaults to: 25. */
  fall_rain_chance: number
  /**  Defaults to: 25. */
  fall_snow_chance: number
  /**  Defaults to: 25. */
  fall_storm_chance: number
  ScriptName: string
  /**  Defaults to: 25. */
  spring_rain_chance: number
  /**  Defaults to: 25. */
  spring_snow_chance: number
  /**  Defaults to: 25. */
  spring_storm_chance: number
  /**  Defaults to: 25. */
  summer_rain_chance: number
  /**  Defaults to: 25. */
  summer_snow_chance: number
  /**  Defaults to: 25. */
  summer_storm_chance: number
  /**  Defaults to: 25. */
  winter_rain_chance: number
  /**  Defaults to: 25. */
  winter_snow_chance: number
  /**  Defaults to: 25. */
  winter_storm_chance: number
  /**  Defaults to: 0. */
  zone: number
}

export interface Gameobject {
  /**  Defaults to: 0. */
  animprogress: number
  /** Area Identifier Defaults to: 0. */
  areaId: number
  Comment?: string | null
  /** Global Unique Identifier  */
  guid: number
  /** Gameobject Identifier Defaults to: 0. */
  id: number
  /** Map Identifier Defaults to: 0. */
  map: number
  /**  Defaults to: 0. */
  orientation: number
  /**  Defaults to: 1. */
  phaseMask: number
  /**  Defaults to: 0. */
  position_x: number
  /**  Defaults to: 0. */
  position_y: number
  /**  Defaults to: 0. */
  position_z: number
  /**  Defaults to: 0. */
  rotation0: number
  /**  Defaults to: 0. */
  rotation1: number
  /**  Defaults to: 0. */
  rotation2: number
  /**  Defaults to: 0. */
  rotation3: number
  ScriptName?: string | null
  /**  Defaults to: 1. */
  spawnMask: number
  /**  Defaults to: 0. */
  spawntimesecs: number
  /**  Defaults to: 0. */
  state: number
  VerifiedBuild?: number | null
  /** Zone Identifier Defaults to: 0. */
  zoneId: number
}

export interface GameobjectAddon {
  /**  Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  invisibilityType: number
  /**  Defaults to: 0. */
  invisibilityValue: number
}

export interface GameobjectLootTemplate {
  /**  Defaults to: 100. */
  Chance: number
  Comment?: string | null
  /**  Defaults to: 0. */
  Entry: number
  /**  Defaults to: 0. */
  GroupId: number
  /**  Defaults to: 0. */
  Item: number
  /**  Defaults to: 1. */
  LootMode: number
  /**  Defaults to: 1. */
  MaxCount: number
  /**  Defaults to: 1. */
  MinCount: number
  /**  Defaults to: 0. */
  QuestRequired: number
  /**  Defaults to: 0. */
  Reference: number
}

export interface GameobjectQuestender {
  /**  Defaults to: 0. */
  id: number
  /** Quest Identifier Defaults to: 0. */
  quest: number
}

export interface GameobjectQuestitem {
  /**  Defaults to: 0. */
  GameObjectEntry: number
  /**  Defaults to: 0. */
  Idx: number
  /**  Defaults to: 0. */
  ItemId: number
  VerifiedBuild?: number | null
}

export interface GameobjectQueststarter {
  /**  Defaults to: 0. */
  id: number
  /** Quest Identifier Defaults to: 0. */
  quest: number
}

export interface GameobjectTemplate {
  AIName: string
  castBarCaption: string
  /**  Defaults to: 0. */
  Data0: number
  /**  Defaults to: 0. */
  Data1: number
  /**  Defaults to: 0. */
  Data10: number
  /**  Defaults to: 0. */
  Data11: number
  /**  Defaults to: 0. */
  Data12: number
  /**  Defaults to: 0. */
  Data13: number
  /**  Defaults to: 0. */
  Data14: number
  /**  Defaults to: 0. */
  Data15: number
  /**  Defaults to: 0. */
  Data16: number
  /**  Defaults to: 0. */
  Data17: number
  /**  Defaults to: 0. */
  Data18: number
  /**  Defaults to: 0. */
  Data19: number
  /**  Defaults to: 0. */
  Data2: number
  /**  Defaults to: 0. */
  Data20: number
  /**  Defaults to: 0. */
  Data21: number
  /**  Defaults to: 0. */
  Data22: number
  /**  Defaults to: 0. */
  Data23: number
  /**  Defaults to: 0. */
  Data3: number
  /**  Defaults to: 0. */
  Data4: number
  /**  Defaults to: 0. */
  Data5: number
  /**  Defaults to: 0. */
  Data6: number
  /**  Defaults to: 0. */
  Data7: number
  /**  Defaults to: 0. */
  Data8: number
  /**  Defaults to: 0. */
  Data9: number
  /**  Defaults to: 0. */
  displayId: number
  /**  Defaults to: 0. */
  entry: number
  IconName: string
  name: string
  ScriptName: string
  /**  Defaults to: 1. */
  size: number
  /**  Defaults to: 0. */
  type: number
  unk1: string
  VerifiedBuild?: number | null
}

export interface GameobjectTemplateAddon {
  /**  Defaults to: 0. */
  artkit0: number
  /**  Defaults to: 0. */
  artkit1: number
  /**  Defaults to: 0. */
  artkit2: number
  /**  Defaults to: 0. */
  artkit3: number
  /**  Defaults to: 0. */
  entry: number
  /**  Defaults to: 0. */
  faction: number
  /**  Defaults to: 0. */
  flags: number
  /**  Defaults to: 0. */
  maxgold: number
  /**  Defaults to: 0. */
  mingold: number
}

export interface GameobjectTemplateLocale {
  castBarCaption?: string | null
  /**  Defaults to: 0. */
  entry: number
  locale: string
  name?: string | null
  VerifiedBuild?: number | null
}

export interface GameobjectartkitDbc {
  /**  Defaults to: 0. */
  Attach_Model_1: number
  /**  Defaults to: 0. */
  Attach_Model_2: number
  /**  Defaults to: 0. */
  Attach_Model_3: number
  /**  Defaults to: 0. */
  Attach_Model_4: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Texture_1: number
  /**  Defaults to: 0. */
  Texture_2: number
  /**  Defaults to: 0. */
  Texture_3: number
}

export interface GameobjectdisplayinfoDbc {
  /**  Defaults to: 0. */
  GeoBoxMaxX: number
  /**  Defaults to: 0. */
  GeoBoxMaxY: number
  /**  Defaults to: 0. */
  GeoBoxMaxZ: number
  /**  Defaults to: 0. */
  GeoBoxMinX: number
  /**  Defaults to: 0. */
  GeoBoxMinY: number
  /**  Defaults to: 0. */
  GeoBoxMinZ: number
  /**  Defaults to: 0. */
  ID: number
  ModelName?: string | null
  /**  Defaults to: 0. */
  ObjectEffectPackageID: number
  /**  Defaults to: 0. */
  Sound_1: number
  /**  Defaults to: 0. */
  Sound_10: number
  /**  Defaults to: 0. */
  Sound_2: number
  /**  Defaults to: 0. */
  Sound_3: number
  /**  Defaults to: 0. */
  Sound_4: number
  /**  Defaults to: 0. */
  Sound_5: number
  /**  Defaults to: 0. */
  Sound_6: number
  /**  Defaults to: 0. */
  Sound_7: number
  /**  Defaults to: 0. */
  Sound_8: number
  /**  Defaults to: 0. */
  Sound_9: number
}

export interface GempropertiesDbc {
  /**  Defaults to: 0. */
  Enchant_Id: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Maxcount_Inv: number
  /**  Defaults to: 0. */
  Maxcount_Item: number
  /**  Defaults to: 0. */
  Type: number
}

export interface GlyphpropertiesDbc {
  /**  Defaults to: 0. */
  GlyphSlotFlags: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  SpellIconID: number
  /**  Defaults to: 0. */
  SpellID: number
}

export interface GlyphslotDbc {
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Tooltip: number
  /**  Defaults to: 0. */
  Type: number
}

export interface GossipMenu {
  /**  Defaults to: 0. */
  MenuID: number
  /**  Defaults to: 0. */
  TextID: number
}

export interface GossipMenuOption {
  /**  Defaults to: 0. */
  ActionMenuID: number
  /**  Defaults to: 0. */
  ActionPoiID: number
  /**  Defaults to: 0. */
  BoxBroadcastTextID: number
  /**  Defaults to: 0. */
  BoxCoded: number
  /**  Defaults to: 0. */
  BoxMoney: number
  BoxText?: string | null
  /**  Defaults to: 0. */
  MenuID: number
  /**  Defaults to: 0. */
  OptionBroadcastTextID: number
  /**  Defaults to: 0. */
  OptionIcon: number
  /**  Defaults to: 0. */
  OptionID: number
  /**  Defaults to: 0. */
  OptionNpcFlag: number
  OptionText?: string | null
  /**  Defaults to: 0. */
  OptionType: number
  VerifiedBuild?: number | null
}

export interface GossipMenuOptionLocale {
  BoxText?: string | null
  Locale: string
  /**  Defaults to: 0. */
  MenuID: number
  /**  Defaults to: 0. */
  OptionID: number
  OptionText?: string | null
}

export interface GraveyardZone {
  Comment?: string | null
  /**  Defaults to: 0. */
  Faction: number
  /**  Defaults to: 0. */
  GhostZone: number
  /**  Defaults to: 0. */
  ID: number
}

export interface GtbarbershopcostbaseDbc {
  /**  Defaults to: 0. */
  Data: number
  /**  Defaults to: 0. */
  ID: number
}

export interface GtchancetomeleecritDbc {
  /**  Defaults to: 0. */
  Data: number
  /**  Defaults to: 0. */
  ID: number
}

export interface GtchancetomeleecritbaseDbc {
  /**  Defaults to: 0. */
  Data: number
  /**  Defaults to: 0. */
  ID: number
}

export interface GtchancetospellcritDbc {
  /**  Defaults to: 0. */
  Data: number
  /**  Defaults to: 0. */
  ID: number
}

export interface GtchancetospellcritbaseDbc {
  /**  Defaults to: 0. */
  Data: number
  /**  Defaults to: 0. */
  ID: number
}

export interface GtcombatratingsDbc {
  /**  Defaults to: 0. */
  Data: number
  /**  Defaults to: 0. */
  ID: number
}

export interface GtnpcmanacostscalerDbc {
  /**  Defaults to: 0. */
  Data: number
  /**  Defaults to: 0. */
  ID: number
}

export interface GtoctclasscombatratingscalarDbc {
  /**  Defaults to: 0. */
  Data: number
  /**  Defaults to: 0. */
  ID: number
}

export interface GtoctregenhpDbc {
  /**  Defaults to: 0. */
  Data: number
  /**  Defaults to: 0. */
  ID: number
}

export interface GtregenhppersptDbc {
  /**  Defaults to: 0. */
  Data: number
  /**  Defaults to: 0. */
  ID: number
}

export interface GtregenmppersptDbc {
  /**  Defaults to: 0. */
  Data: number
  /**  Defaults to: 0. */
  ID: number
}

export interface HolidayDates {
  date_id: number
  date_value: number
  /**  Defaults to: 0. */
  holiday_duration: number
  id: number
}

export interface HolidaysDbc {
  /**  Defaults to: 0. */
  CalendarFilterType: number
  /**  Defaults to: 0. */
  CalendarFlags_1: number
  /**  Defaults to: 0. */
  CalendarFlags_10: number
  /**  Defaults to: 0. */
  CalendarFlags_2: number
  /**  Defaults to: 0. */
  CalendarFlags_3: number
  /**  Defaults to: 0. */
  CalendarFlags_4: number
  /**  Defaults to: 0. */
  CalendarFlags_5: number
  /**  Defaults to: 0. */
  CalendarFlags_6: number
  /**  Defaults to: 0. */
  CalendarFlags_7: number
  /**  Defaults to: 0. */
  CalendarFlags_8: number
  /**  Defaults to: 0. */
  CalendarFlags_9: number
  /**  Defaults to: 0. */
  Date_1: number
  /**  Defaults to: 0. */
  Date_10: number
  /**  Defaults to: 0. */
  Date_11: number
  /**  Defaults to: 0. */
  Date_12: number
  /**  Defaults to: 0. */
  Date_13: number
  /**  Defaults to: 0. */
  Date_14: number
  /**  Defaults to: 0. */
  Date_15: number
  /**  Defaults to: 0. */
  Date_16: number
  /**  Defaults to: 0. */
  Date_17: number
  /**  Defaults to: 0. */
  Date_18: number
  /**  Defaults to: 0. */
  Date_19: number
  /**  Defaults to: 0. */
  Date_2: number
  /**  Defaults to: 0. */
  Date_20: number
  /**  Defaults to: 0. */
  Date_21: number
  /**  Defaults to: 0. */
  Date_22: number
  /**  Defaults to: 0. */
  Date_23: number
  /**  Defaults to: 0. */
  Date_24: number
  /**  Defaults to: 0. */
  Date_25: number
  /**  Defaults to: 0. */
  Date_26: number
  /**  Defaults to: 0. */
  Date_3: number
  /**  Defaults to: 0. */
  Date_4: number
  /**  Defaults to: 0. */
  Date_5: number
  /**  Defaults to: 0. */
  Date_6: number
  /**  Defaults to: 0. */
  Date_7: number
  /**  Defaults to: 0. */
  Date_8: number
  /**  Defaults to: 0. */
  Date_9: number
  /**  Defaults to: 0. */
  Duration_1: number
  /**  Defaults to: 0. */
  Duration_10: number
  /**  Defaults to: 0. */
  Duration_2: number
  /**  Defaults to: 0. */
  Duration_3: number
  /**  Defaults to: 0. */
  Duration_4: number
  /**  Defaults to: 0. */
  Duration_5: number
  /**  Defaults to: 0. */
  Duration_6: number
  /**  Defaults to: 0. */
  Duration_7: number
  /**  Defaults to: 0. */
  Duration_8: number
  /**  Defaults to: 0. */
  Duration_9: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  HolidayDescriptionID: number
  /**  Defaults to: 0. */
  HolidayNameID: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Looping: number
  /**  Defaults to: 0. */
  Priority: number
  /**  Defaults to: 0. */
  Region: number
  TextureFilename?: string | null
}

export interface InstanceEncounters {
  comment: string
  /**  Defaults to: 0. */
  creditEntry: number
  /**  Defaults to: 0. */
  creditType: number
  /** Unique entry from DungeonEncounter.dbc  */
  entry: number
  /** If not 0, LfgDungeon.dbc entry for the instance it is last encounter in Defaults to: 0. */
  lastEncounterDungeon: number
}

export interface InstanceTemplate {
  /**  Defaults to: 0. */
  allowMount: number
  map: number
  parent: number
  script: string
}

export interface ItemDbc {
  /**  Defaults to: 0. */
  ClassID: number
  /**  Defaults to: 0. */
  DisplayInfoID: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  InventoryType: number
  /**  Defaults to: 0. */
  Material: number
  /**  Defaults to: 0. */
  SheatheType: number
  /**  Defaults to: 0. */
  Sound_Override_Subclassid: number
  /**  Defaults to: 0. */
  SubclassID: number
}

export interface ItemEnchantmentTemplate {
  /**  Defaults to: 0. */
  chance: number
  /**  Defaults to: 0. */
  ench: number
  /**  Defaults to: 0. */
  entry: number
}

export interface ItemLootTemplate {
  /**  Defaults to: 100. */
  Chance: number
  Comment?: string | null
  /**  Defaults to: 0. */
  Entry: number
  /**  Defaults to: 0. */
  GroupId: number
  /**  Defaults to: 0. */
  Item: number
  /**  Defaults to: 1. */
  LootMode: number
  /**  Defaults to: 1. */
  MaxCount: number
  /**  Defaults to: 1. */
  MinCount: number
  /**  Defaults to: 0. */
  QuestRequired: number
  /**  Defaults to: 0. */
  Reference: number
}

export interface ItemSetNames {
  entry: number
  /**  Defaults to: 0. */
  InventoryType: number
  name: string
  VerifiedBuild?: number | null
}

export interface ItemSetNamesLocale {
  /**  Defaults to: 0. */
  ID: number
  locale: string
  Name?: string | null
  VerifiedBuild?: number | null
}

export interface ItemTemplate {
  /**  Defaults to: -1. */
  AllowableClass: number
  /**  Defaults to: -1. */
  AllowableRace: number
  /**  Defaults to: 0. */
  ammo_type: number
  arcane_res?: number | null
  /**  Defaults to: 0. */
  area: number
  /**  Defaults to: 0. */
  armor: number
  /**  Defaults to: 0. */
  ArmorDamageModifier: number
  /**  Defaults to: 0. */
  BagFamily: number
  /**  Defaults to: 0. */
  block: number
  /**  Defaults to: 0. */
  bonding: number
  /**  Defaults to: 1. */
  BuyCount: number
  /**  Defaults to: 0. */
  BuyPrice: number
  /**  Defaults to: 0. */
  class: number
  /**  Defaults to: 0. */
  ContainerSlots: number
  /**  Defaults to: 1000. */
  delay: number
  description: string
  /**  Defaults to: 0. */
  DisenchantID: number
  /**  Defaults to: 0. */
  displayid: number
  /**  Defaults to: 0. */
  dmg_max1: number
  /**  Defaults to: 0. */
  dmg_max2: number
  /**  Defaults to: 0. */
  dmg_min1: number
  /**  Defaults to: 0. */
  dmg_min2: number
  /**  Defaults to: 0. */
  dmg_type1: number
  /**  Defaults to: 0. */
  dmg_type2: number
  /**  Defaults to: 0. */
  duration: number
  /**  Defaults to: 0. */
  entry: number
  fire_res?: number | null
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  flagsCustom: number
  /**  Defaults to: 0. */
  FlagsExtra: number
  /**  Defaults to: 0. */
  FoodType: number
  frost_res?: number | null
  /**  Defaults to: 0. */
  GemProperties: number
  /**  Defaults to: 0. */
  HolidayId: number
  holy_res?: number | null
  /**  Defaults to: 0. */
  InventoryType: number
  /**  Defaults to: 0. */
  ItemLevel: number
  /**  Defaults to: 0. */
  ItemLimitCategory: number
  /**  Defaults to: 0. */
  itemset: number
  /**  Defaults to: 0. */
  LanguageID: number
  /**  Defaults to: 0. */
  lockid: number
  /**  Defaults to: 0. */
  Map: number
  /**  Defaults to: 0. */
  Material: number
  /**  Defaults to: 0. */
  maxcount: number
  /**  Defaults to: 0. */
  MaxDurability: number
  /**  Defaults to: 0. */
  maxMoneyLoot: number
  /**  Defaults to: 0. */
  minMoneyLoot: number
  name: string
  nature_res?: number | null
  /**  Defaults to: 0. */
  PageMaterial: number
  /**  Defaults to: 0. */
  PageText: number
  /**  Defaults to: 0. */
  Quality: number
  /**  Defaults to: 0. */
  RandomProperty: number
  /**  Defaults to: 0. */
  RandomSuffix: number
  /**  Defaults to: 0. */
  RangedModRange: number
  /**  Defaults to: 0. */
  RequiredCityRank: number
  /**  Defaults to: -1. */
  RequiredDisenchantSkill: number
  /**  Defaults to: 0. */
  requiredhonorrank: number
  /**  Defaults to: 0. */
  RequiredLevel: number
  /**  Defaults to: 0. */
  RequiredReputationFaction: number
  /**  Defaults to: 0. */
  RequiredReputationRank: number
  /**  Defaults to: 0. */
  RequiredSkill: number
  /**  Defaults to: 0. */
  RequiredSkillRank: number
  /**  Defaults to: 0. */
  requiredspell: number
  /**  Defaults to: 0. */
  ScalingStatDistribution: number
  /**  Defaults to: 0. */
  ScalingStatValue: number
  ScriptName: string
  /**  Defaults to: 0. */
  SellPrice: number
  shadow_res?: number | null
  /**  Defaults to: 0. */
  sheath: number
  /**  Defaults to: 0. */
  socketBonus: number
  /**  Defaults to: 0. */
  socketColor_1: number
  /**  Defaults to: 0. */
  socketColor_2: number
  /**  Defaults to: 0. */
  socketColor_3: number
  /**  Defaults to: 0. */
  socketContent_1: number
  /**  Defaults to: 0. */
  socketContent_2: number
  /**  Defaults to: 0. */
  socketContent_3: number
  /**  Defaults to: -1. */
  SoundOverrideSubclass: number
  /**  Defaults to: 0. */
  spellcategory_1: number
  /**  Defaults to: 0. */
  spellcategory_2: number
  /**  Defaults to: 0. */
  spellcategory_3: number
  /**  Defaults to: 0. */
  spellcategory_4: number
  /**  Defaults to: 0. */
  spellcategory_5: number
  /**  Defaults to: -1. */
  spellcategorycooldown_1: number
  /**  Defaults to: -1. */
  spellcategorycooldown_2: number
  /**  Defaults to: -1. */
  spellcategorycooldown_3: number
  /**  Defaults to: -1. */
  spellcategorycooldown_4: number
  /**  Defaults to: -1. */
  spellcategorycooldown_5: number
  /**  Defaults to: 0. */
  spellcharges_1: number
  /**  Defaults to: 0. */
  spellcharges_2: number
  /**  Defaults to: 0. */
  spellcharges_3: number
  /**  Defaults to: 0. */
  spellcharges_4: number
  /**  Defaults to: 0. */
  spellcharges_5: number
  /**  Defaults to: -1. */
  spellcooldown_1: number
  /**  Defaults to: -1. */
  spellcooldown_2: number
  /**  Defaults to: -1. */
  spellcooldown_3: number
  /**  Defaults to: -1. */
  spellcooldown_4: number
  /**  Defaults to: -1. */
  spellcooldown_5: number
  /**  Defaults to: 0. */
  spellid_1: number
  /**  Defaults to: 0. */
  spellid_2: number
  /**  Defaults to: 0. */
  spellid_3: number
  /**  Defaults to: 0. */
  spellid_4: number
  /**  Defaults to: 0. */
  spellid_5: number
  /**  Defaults to: 0. */
  spellppmRate_1: number
  /**  Defaults to: 0. */
  spellppmRate_2: number
  /**  Defaults to: 0. */
  spellppmRate_3: number
  /**  Defaults to: 0. */
  spellppmRate_4: number
  /**  Defaults to: 0. */
  spellppmRate_5: number
  /**  Defaults to: 0. */
  spelltrigger_1: number
  /**  Defaults to: 0. */
  spelltrigger_2: number
  /**  Defaults to: 0. */
  spelltrigger_3: number
  /**  Defaults to: 0. */
  spelltrigger_4: number
  /**  Defaults to: 0. */
  spelltrigger_5: number
  /**  Defaults to: 1. */
  stackable?: number | null
  /**  Defaults to: 0. */
  startquest: number
  /**  Defaults to: 0. */
  stat_type1: number
  /**  Defaults to: 0. */
  stat_type10: number
  /**  Defaults to: 0. */
  stat_type2: number
  /**  Defaults to: 0. */
  stat_type3: number
  /**  Defaults to: 0. */
  stat_type4: number
  /**  Defaults to: 0. */
  stat_type5: number
  /**  Defaults to: 0. */
  stat_type6: number
  /**  Defaults to: 0. */
  stat_type7: number
  /**  Defaults to: 0. */
  stat_type8: number
  /**  Defaults to: 0. */
  stat_type9: number
  /**  Defaults to: 0. */
  stat_value1: number
  /**  Defaults to: 0. */
  stat_value10: number
  /**  Defaults to: 0. */
  stat_value2: number
  /**  Defaults to: 0. */
  stat_value3: number
  /**  Defaults to: 0. */
  stat_value4: number
  /**  Defaults to: 0. */
  stat_value5: number
  /**  Defaults to: 0. */
  stat_value6: number
  /**  Defaults to: 0. */
  stat_value7: number
  /**  Defaults to: 0. */
  stat_value8: number
  /**  Defaults to: 0. */
  stat_value9: number
  /**  Defaults to: 0. */
  StatsCount: number
  /**  Defaults to: 0. */
  subclass: number
  /**  Defaults to: 0. */
  TotemCategory: number
  VerifiedBuild?: number | null
}

export interface ItemTemplateLocale {
  Description?: string | null
  /**  Defaults to: 0. */
  ID: number
  locale: string
  Name?: string | null
  VerifiedBuild?: number | null
}

export interface ItembagfamilyDbc {
  /**  Defaults to: 0. */
  ID: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
}

export interface ItemdisplayinfoDbc {
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  GeosetGroup_1: number
  /**  Defaults to: 0. */
  GeosetGroup_2: number
  /**  Defaults to: 0. */
  GeosetGroup_3: number
  /**  Defaults to: 0. */
  GroupSoundIndex: number
  /**  Defaults to: 0. */
  HelmetGeosetVis_1: number
  /**  Defaults to: 0. */
  HelmetGeosetVis_2: number
  /**  Defaults to: 0. */
  ID: number
  InventoryIcon_1?: string | null
  InventoryIcon_2?: string | null
  /**  Defaults to: 0. */
  ItemVisual: number
  ModelName_1?: string | null
  ModelName_2?: string | null
  ModelTexture_1?: string | null
  ModelTexture_2?: string | null
  /**  Defaults to: 0. */
  ParticleColorID: number
  /**  Defaults to: 0. */
  SpellVisualID: number
  Texture_1?: string | null
  Texture_2?: string | null
  Texture_3?: string | null
  Texture_4?: string | null
  Texture_5?: string | null
  Texture_6?: string | null
  Texture_7?: string | null
  Texture_8?: string | null
}

export interface ItemextendedcostDbc {
  /**  Defaults to: 0. */
  ArenaBracket: number
  /**  Defaults to: 0. */
  ArenaPoints: number
  /**  Defaults to: 0. */
  HonorPoints: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  ItemCount_1: number
  /**  Defaults to: 0. */
  ItemCount_2: number
  /**  Defaults to: 0. */
  ItemCount_3: number
  /**  Defaults to: 0. */
  ItemCount_4: number
  /**  Defaults to: 0. */
  ItemCount_5: number
  /**  Defaults to: 0. */
  ItemID_1: number
  /**  Defaults to: 0. */
  ItemID_2: number
  /**  Defaults to: 0. */
  ItemID_3: number
  /**  Defaults to: 0. */
  ItemID_4: number
  /**  Defaults to: 0. */
  ItemID_5: number
  /**  Defaults to: 0. */
  ItemPurchaseGroup: number
  /**  Defaults to: 0. */
  RequiredArenaRating: number
}

export interface ItemlimitcategoryDbc {
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  Quantity: number
}

export interface ItemrandompropertiesDbc {
  /**  Defaults to: 0. */
  Enchantment_1: number
  /**  Defaults to: 0. */
  Enchantment_2: number
  /**  Defaults to: 0. */
  Enchantment_3: number
  /**  Defaults to: 0. */
  Enchantment_4: number
  /**  Defaults to: 0. */
  Enchantment_5: number
  /**  Defaults to: 0. */
  ID: number
  Name?: string | null
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
}

export interface ItemrandomsuffixDbc {
  /**  Defaults to: 0. */
  AllocationPct_1: number
  /**  Defaults to: 0. */
  AllocationPct_2: number
  /**  Defaults to: 0. */
  AllocationPct_3: number
  /**  Defaults to: 0. */
  AllocationPct_4: number
  /**  Defaults to: 0. */
  AllocationPct_5: number
  /**  Defaults to: 0. */
  Enchantment_1: number
  /**  Defaults to: 0. */
  Enchantment_2: number
  /**  Defaults to: 0. */
  Enchantment_3: number
  /**  Defaults to: 0. */
  Enchantment_4: number
  /**  Defaults to: 0. */
  Enchantment_5: number
  /**  Defaults to: 0. */
  ID: number
  InternalName?: string | null
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
}

export interface ItemsetDbc {
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  ItemID_1: number
  /**  Defaults to: 0. */
  ItemID_10: number
  /**  Defaults to: 0. */
  ItemID_11: number
  /**  Defaults to: 0. */
  ItemID_12: number
  /**  Defaults to: 0. */
  ItemID_13: number
  /**  Defaults to: 0. */
  ItemID_14: number
  /**  Defaults to: 0. */
  ItemID_15: number
  /**  Defaults to: 0. */
  ItemID_16: number
  /**  Defaults to: 0. */
  ItemID_17: number
  /**  Defaults to: 0. */
  ItemID_2: number
  /**  Defaults to: 0. */
  ItemID_3: number
  /**  Defaults to: 0. */
  ItemID_4: number
  /**  Defaults to: 0. */
  ItemID_5: number
  /**  Defaults to: 0. */
  ItemID_6: number
  /**  Defaults to: 0. */
  ItemID_7: number
  /**  Defaults to: 0. */
  ItemID_8: number
  /**  Defaults to: 0. */
  ItemID_9: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  RequiredSkill: number
  /**  Defaults to: 0. */
  RequiredSkillRank: number
  /**  Defaults to: 0. */
  SetSpellID_1: number
  /**  Defaults to: 0. */
  SetSpellID_2: number
  /**  Defaults to: 0. */
  SetSpellID_3: number
  /**  Defaults to: 0. */
  SetSpellID_4: number
  /**  Defaults to: 0. */
  SetSpellID_5: number
  /**  Defaults to: 0. */
  SetSpellID_6: number
  /**  Defaults to: 0. */
  SetSpellID_7: number
  /**  Defaults to: 0. */
  SetSpellID_8: number
  /**  Defaults to: 0. */
  SetThreshold_1: number
  /**  Defaults to: 0. */
  SetThreshold_2: number
  /**  Defaults to: 0. */
  SetThreshold_3: number
  /**  Defaults to: 0. */
  SetThreshold_4: number
  /**  Defaults to: 0. */
  SetThreshold_5: number
  /**  Defaults to: 0. */
  SetThreshold_6: number
  /**  Defaults to: 0. */
  SetThreshold_7: number
  /**  Defaults to: 0. */
  SetThreshold_8: number
}

export interface LfgDungeonRewards {
  /** Dungeon entry from dbc Defaults to: 0. */
  dungeonId: number
  /** Quest id with rewards for first dungeon this day Defaults to: 0. */
  firstQuestId: number
  /** Max level at which this reward is rewarded Defaults to: 0. */
  maxLevel: number
  /** Quest id with rewards for Nth dungeon this day Defaults to: 0. */
  otherQuestId: number
}

export interface LfgDungeonTemplate {
  /** Unique id from LFGDungeons.dbc Defaults to: 0. */
  dungeonId: number
  name?: string | null
  /**  Defaults to: 0. */
  orientation: number
  /**  Defaults to: 0. */
  position_x: number
  /**  Defaults to: 0. */
  position_y: number
  /**  Defaults to: 0. */
  position_z: number
  VerifiedBuild?: number | null
}

export interface LfgdungeonsDbc {
  Description_Lang_deDE?: string | null
  Description_Lang_enCN?: string | null
  Description_Lang_enGB?: string | null
  Description_Lang_enTW?: string | null
  Description_Lang_enUS?: string | null
  Description_Lang_esES?: string | null
  Description_Lang_esMX?: string | null
  Description_Lang_frFR?: string | null
  Description_Lang_itIT?: string | null
  Description_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Description_Lang_Mask: number
  Description_Lang_ptBR?: string | null
  Description_Lang_ptPT?: string | null
  Description_Lang_ruRU?: string | null
  Description_Lang_Unk?: string | null
  Description_Lang_zhCN?: string | null
  Description_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  Difficulty: number
  /**  Defaults to: 0. */
  ExpansionLevel: number
  /**  Defaults to: 0. */
  Faction: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  Group_Id: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  MapID: number
  /**  Defaults to: 0. */
  MaxLevel: number
  /**  Defaults to: 0. */
  MinLevel: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  Order_Index: number
  /**  Defaults to: 0. */
  Target_Level: number
  /**  Defaults to: 0. */
  Target_Level_Max: number
  /**  Defaults to: 0. */
  Target_Level_Min: number
  TextureFilename?: string | null
  /**  Defaults to: 0. */
  TypeID: number
}

export interface LightDbc {
  /**  Defaults to: 0. */
  ContinentID: number
  /**  Defaults to: 0. */
  FalloffEnd: number
  /**  Defaults to: 0. */
  FalloffStart: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  LightParamsID_1: number
  /**  Defaults to: 0. */
  LightParamsID_2: number
  /**  Defaults to: 0. */
  LightParamsID_3: number
  /**  Defaults to: 0. */
  LightParamsID_4: number
  /**  Defaults to: 0. */
  LightParamsID_5: number
  /**  Defaults to: 0. */
  LightParamsID_6: number
  /**  Defaults to: 0. */
  LightParamsID_7: number
  /**  Defaults to: 0. */
  LightParamsID_8: number
  /**  Defaults to: 0. */
  X: number
  /**  Defaults to: 0. */
  Y: number
  /**  Defaults to: 0. */
  Z: number
}

export interface LinkedRespawn {
  /** dependent creature  */
  guid: number
  /** master creature  */
  linkedGuid: number
  /**  Defaults to: 0. */
  linkType: number
}

export interface LiquidtypeDbc {
  /**  Defaults to: 0. */
  AmbDarkenintensity: number
  /**  Defaults to: 0. */
  Color_1: number
  /**  Defaults to: 0. */
  Color_2: number
  /**  Defaults to: 0. */
  DirDarkenintensity: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  Float_1: number
  /**  Defaults to: 0. */
  Float_10: number
  /**  Defaults to: 0. */
  Float_11: number
  /**  Defaults to: 0. */
  Float_12: number
  /**  Defaults to: 0. */
  Float_13: number
  /**  Defaults to: 0. */
  Float_14: number
  /**  Defaults to: 0. */
  Float_15: number
  /**  Defaults to: 0. */
  Float_16: number
  /**  Defaults to: 0. */
  Float_17: number
  /**  Defaults to: 0. */
  Float_18: number
  /**  Defaults to: 0. */
  Float_2: number
  /**  Defaults to: 0. */
  Float_3: number
  /**  Defaults to: 0. */
  Float_4: number
  /**  Defaults to: 0. */
  Float_5: number
  /**  Defaults to: 0. */
  Float_6: number
  /**  Defaults to: 0. */
  Float_7: number
  /**  Defaults to: 0. */
  Float_8: number
  /**  Defaults to: 0. */
  Float_9: number
  /**  Defaults to: 0. */
  FogDarkenintensity: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Int_1: number
  /**  Defaults to: 0. */
  Int_2: number
  /**  Defaults to: 0. */
  Int_3: number
  /**  Defaults to: 0. */
  Int_4: number
  /**  Defaults to: 0. */
  LightID: number
  /**  Defaults to: 0. */
  MaterialID: number
  /**  Defaults to: 0. */
  MaxDarkenDepth: number
  Name?: string | null
  /**  Defaults to: 0. */
  ParticleMovement: number
  /**  Defaults to: 0. */
  ParticleScale: number
  /**  Defaults to: 0. */
  ParticleTexSlots: number
  /**  Defaults to: 0. */
  SoundID: number
  /**  Defaults to: 0. */
  SpellID: number
  Texture_1?: string | null
  Texture_2?: string | null
  Texture_3?: string | null
  Texture_4?: string | null
  Texture_5?: string | null
  Texture_6?: string | null
  /**  Defaults to: 0. */
  Type: number
}

export interface LockDbc {
  /**  Defaults to: 0. */
  Action_1: number
  /**  Defaults to: 0. */
  Action_2: number
  /**  Defaults to: 0. */
  Action_3: number
  /**  Defaults to: 0. */
  Action_4: number
  /**  Defaults to: 0. */
  Action_5: number
  /**  Defaults to: 0. */
  Action_6: number
  /**  Defaults to: 0. */
  Action_7: number
  /**  Defaults to: 0. */
  Action_8: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Index_1: number
  /**  Defaults to: 0. */
  Index_2: number
  /**  Defaults to: 0. */
  Index_3: number
  /**  Defaults to: 0. */
  Index_4: number
  /**  Defaults to: 0. */
  Index_5: number
  /**  Defaults to: 0. */
  Index_6: number
  /**  Defaults to: 0. */
  Index_7: number
  /**  Defaults to: 0. */
  Index_8: number
  /**  Defaults to: 0. */
  Skill_1: number
  /**  Defaults to: 0. */
  Skill_2: number
  /**  Defaults to: 0. */
  Skill_3: number
  /**  Defaults to: 0. */
  Skill_4: number
  /**  Defaults to: 0. */
  Skill_5: number
  /**  Defaults to: 0. */
  Skill_6: number
  /**  Defaults to: 0. */
  Skill_7: number
  /**  Defaults to: 0. */
  Skill_8: number
  /**  Defaults to: 0. */
  Type_1: number
  /**  Defaults to: 0. */
  Type_2: number
  /**  Defaults to: 0. */
  Type_3: number
  /**  Defaults to: 0. */
  Type_4: number
  /**  Defaults to: 0. */
  Type_5: number
  /**  Defaults to: 0. */
  Type_6: number
  /**  Defaults to: 0. */
  Type_7: number
  /**  Defaults to: 0. */
  Type_8: number
}

export interface MailLevelReward {
  /**  Defaults to: 0. */
  level: number
  /**  Defaults to: 0. */
  mailTemplateId: number
  /**  Defaults to: 0. */
  raceMask: number
  /**  Defaults to: 0. */
  senderEntry: number
}

export interface MailLootTemplate {
  /**  Defaults to: 100. */
  Chance: number
  Comment?: string | null
  /**  Defaults to: 0. */
  Entry: number
  /**  Defaults to: 0. */
  GroupId: number
  /**  Defaults to: 0. */
  Item: number
  /**  Defaults to: 1. */
  LootMode: number
  /**  Defaults to: 1. */
  MaxCount: number
  /**  Defaults to: 1. */
  MinCount: number
  /**  Defaults to: 0. */
  QuestRequired: number
  /**  Defaults to: 0. */
  Reference: number
}

export interface MailtemplateDbc {
  Body_Lang_deDE?: string | null
  Body_Lang_enCN?: string | null
  Body_Lang_enGB?: string | null
  Body_Lang_enTW?: string | null
  Body_Lang_enUS?: string | null
  Body_Lang_esES?: string | null
  Body_Lang_esMX?: string | null
  Body_Lang_frFR?: string | null
  Body_Lang_itIT?: string | null
  Body_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Body_Lang_Mask: number
  Body_Lang_ptBR?: string | null
  Body_Lang_ptPT?: string | null
  Body_Lang_ruRU?: string | null
  Body_Lang_Unk?: string | null
  Body_Lang_zhCN?: string | null
  Body_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  ID: number
  Subject_Lang_deDE?: string | null
  Subject_Lang_enCN?: string | null
  Subject_Lang_enGB?: string | null
  Subject_Lang_enTW?: string | null
  Subject_Lang_enUS?: string | null
  Subject_Lang_esES?: string | null
  Subject_Lang_esMX?: string | null
  Subject_Lang_frFR?: string | null
  Subject_Lang_itIT?: string | null
  Subject_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Subject_Lang_Mask: number
  Subject_Lang_ptBR?: string | null
  Subject_Lang_ptPT?: string | null
  Subject_Lang_ruRU?: string | null
  Subject_Lang_Unk?: string | null
  Subject_Lang_zhCN?: string | null
  Subject_Lang_zhTW?: string | null
}

export interface MapDbc {
  /**  Defaults to: 0. */
  AreaTableID: number
  /**  Defaults to: 0. */
  CorpseMapID: number
  /**  Defaults to: 0. */
  CorpseX: number
  /**  Defaults to: 0. */
  CorpseY: number
  Directory?: string | null
  /**  Defaults to: 0. */
  ExpansionID: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  InstanceType: number
  /**  Defaults to: 0. */
  LoadingScreenID: number
  MapDescription0_Lang_deDE?: string | null
  MapDescription0_Lang_enCN?: string | null
  MapDescription0_Lang_enGB?: string | null
  MapDescription0_Lang_enTW?: string | null
  MapDescription0_Lang_enUS?: string | null
  MapDescription0_Lang_esES?: string | null
  MapDescription0_Lang_esMX?: string | null
  MapDescription0_Lang_frFR?: string | null
  MapDescription0_Lang_itIT?: string | null
  MapDescription0_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  MapDescription0_Lang_Mask: number
  MapDescription0_Lang_ptBR?: string | null
  MapDescription0_Lang_ptPT?: string | null
  MapDescription0_Lang_ruRU?: string | null
  MapDescription0_Lang_Unk?: string | null
  MapDescription0_Lang_zhCN?: string | null
  MapDescription0_Lang_zhTW?: string | null
  MapDescription1_Lang_deDE?: string | null
  MapDescription1_Lang_enCN?: string | null
  MapDescription1_Lang_enGB?: string | null
  MapDescription1_Lang_enTW?: string | null
  MapDescription1_Lang_enUS?: string | null
  MapDescription1_Lang_esES?: string | null
  MapDescription1_Lang_esMX?: string | null
  MapDescription1_Lang_frFR?: string | null
  MapDescription1_Lang_itIT?: string | null
  MapDescription1_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  MapDescription1_Lang_Mask: number
  MapDescription1_Lang_ptBR?: string | null
  MapDescription1_Lang_ptPT?: string | null
  MapDescription1_Lang_ruRU?: string | null
  MapDescription1_Lang_Unk?: string | null
  MapDescription1_Lang_zhCN?: string | null
  MapDescription1_Lang_zhTW?: string | null
  MapName_Lang_deDE?: string | null
  MapName_Lang_enCN?: string | null
  MapName_Lang_enGB?: string | null
  MapName_Lang_enTW?: string | null
  MapName_Lang_enUS?: string | null
  MapName_Lang_esES?: string | null
  MapName_Lang_esMX?: string | null
  MapName_Lang_frFR?: string | null
  MapName_Lang_itIT?: string | null
  MapName_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  MapName_Lang_Mask: number
  MapName_Lang_ptBR?: string | null
  MapName_Lang_ptPT?: string | null
  MapName_Lang_ruRU?: string | null
  MapName_Lang_Unk?: string | null
  MapName_Lang_zhCN?: string | null
  MapName_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  MaxPlayers: number
  /**  Defaults to: 0. */
  MinimapIconScale: number
  /**  Defaults to: 0. */
  PVP: number
  /**  Defaults to: 0. */
  RaidOffset: number
  /**  Defaults to: 0. */
  TimeOfDayOverride: number
}

export interface MapdifficultyDbc {
  /**  Defaults to: 0. */
  Difficulty: number
  Difficultystring?: string | null
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  MapID: number
  /**  Defaults to: 0. */
  MaxPlayers: number
  Message_Lang_deDE?: string | null
  Message_Lang_enCN?: string | null
  Message_Lang_enGB?: string | null
  Message_Lang_enTW?: string | null
  Message_Lang_enUS?: string | null
  Message_Lang_esES?: string | null
  Message_Lang_esMX?: string | null
  Message_Lang_frFR?: string | null
  Message_Lang_itIT?: string | null
  Message_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Message_Lang_Mask: number
  Message_Lang_ptBR?: string | null
  Message_Lang_ptPT?: string | null
  Message_Lang_ruRU?: string | null
  Message_Lang_Unk?: string | null
  Message_Lang_zhCN?: string | null
  Message_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  RaidDuration: number
}

export interface MillingLootTemplate {
  /**  Defaults to: 100. */
  Chance: number
  Comment?: string | null
  /**  Defaults to: 0. */
  Entry: number
  /**  Defaults to: 0. */
  GroupId: number
  /**  Defaults to: 0. */
  Item: number
  /**  Defaults to: 1. */
  LootMode: number
  /**  Defaults to: 1. */
  MaxCount: number
  /**  Defaults to: 1. */
  MinCount: number
  /**  Defaults to: 0. */
  QuestRequired: number
  /**  Defaults to: 0. */
  Reference: number
}

export interface ModAuctionhousebot {
  /** mapID of the auctionhouse. Defaults to: 0. */
  auctionhouse: number
  /** Interval how frequently AHB bids on each AH. Time in minutes Defaults to: 1. */
  buyerbiddinginterval?: number | null
  /** number of bids to put in per bidding interval Defaults to: 1. */
  buyerbidsperinterval?: number | null
  /** Multiplier to vendorprice when buying blue items from auctionhouse Defaults to: 12. */
  buyerpriceblue?: number | null
  /** Multiplier to vendorprice when buying green items from auctionhouse Defaults to: 5. */
  buyerpricegreen?: number | null
  /** Multiplier to vendorprice when buying grey items from auctionhouse Defaults to: 1. */
  buyerpricegrey?: number | null
  /** Multiplier to vendorprice when buying orange items from auctionhouse Defaults to: 20. */
  buyerpriceorange?: number | null
  /** Multiplier to vendorprice when buying purple items from auctionhouse Defaults to: 15. */
  buyerpricepurple?: number | null
  /** Multiplier to vendorprice when buying white items from auctionhouse Defaults to: 3. */
  buyerpricewhite?: number | null
  /** Multiplier to vendorprice when buying yellow items from auctionhouse Defaults to: 22. */
  buyerpriceyellow?: number | null
  /** Starting bid price of Blue items as a percentage of the randomly chosen buyout price. Default: 100 Defaults to: 100. */
  maxbidpriceblue?: number | null
  /** Starting bid price of Green items as a percentage of the randomly chosen buyout price. Default: 100 Defaults to: 100. */
  maxbidpricegreen?: number | null
  /** Starting bid price of Grey items as a percentage of the randomly chosen buyout price. Default: 100 Defaults to: 100. */
  maxbidpricegrey?: number | null
  /** Starting bid price of Orange items as a percentage of the randomly chosen buyout price. Default: 100 Defaults to: 100. */
  maxbidpriceorange?: number | null
  /** Starting bid price of Purple items as a percentage of the randomly chosen buyout price. Default: 100 Defaults to: 100. */
  maxbidpricepurple?: number | null
  /** Starting bid price of White items as a percentage of the randomly chosen buyout price. Default: 100 Defaults to: 100. */
  maxbidpricewhite?: number | null
  /** Starting bid price of Yellow items as a percentage of the randomly chosen buyout price. Default: 100 Defaults to: 100. */
  maxbidpriceyellow?: number | null
  /** This is the number of items you want to keep in the auction house. Defaults to: 0. */
  maxitems?: number | null
  /** Maximum price of Blue items (percentage). Defaults to: 1750. */
  maxpriceblue?: number | null
  /** Maximum price of Green items (percentage). Defaults to: 1400. */
  maxpricegreen?: number | null
  /** Maximum price of Grey items (percentage). Defaults to: 150. */
  maxpricegrey?: number | null
  /** Maximum price of Orange items (percentage). Defaults to: 5550. */
  maxpriceorange?: number | null
  /** Maximum price of Purple items (percentage). Defaults to: 4550. */
  maxpricepurple?: number | null
  /** Maximum price of White items (percentage). Defaults to: 250. */
  maxpricewhite?: number | null
  /** Maximum price of Yellow items (percentage). Defaults to: 6550. */
  maxpriceyellow?: number | null
  /** Stack size limits for item qualities - a value of 0 will disable a maximum stack size for that quality, which will allow the bot to create items in stack as large as the item allows. Defaults to: 0. */
  maxstackblue?: number | null
  /** Stack size limits for item qualities - a value of 0 will disable a maximum stack size for that quality, which will allow the bot to create items in stack as large as the item allows. Defaults to: 0. */
  maxstackgreen?: number | null
  /** Stack size limits for item qualities - a value of 0 will disable a maximum stack size for that quality, which will allow the bot to create items in stack as large as the item allows. Defaults to: 0. */
  maxstackgrey?: number | null
  /** Stack size limits for item qualities - a value of 0 will disable a maximum stack size for that quality, which will allow the bot to create items in stack as large as the item allows. Defaults to: 0. */
  maxstackorange?: number | null
  /** Stack size limits for item qualities - a value of 0 will disable a maximum stack size for that quality, which will allow the bot to create items in stack as large as the item allows. Defaults to: 0. */
  maxstackpurple?: number | null
  /** Stack size limits for item qualities - a value of 0 will disable a maximum stack size for that quality, which will allow the bot to create items in stack as large as the item allows. Defaults to: 0. */
  maxstackwhite?: number | null
  /** Stack size limits for item qualities - a value of 0 will disable a maximum stack size for that quality, which will allow the bot to create items in stack as large as the item allows. Defaults to: 0. */
  maxstackyellow?: number | null
  /** Starting bid price of Blue items as a percentage of the randomly chosen buyout price. Default: 75 Defaults to: 75. */
  minbidpriceblue?: number | null
  /** Starting bid price of Green items as a percentage of the randomly chosen buyout price. Default: 80 Defaults to: 80. */
  minbidpricegreen?: number | null
  /** Starting bid price of Grey items as a percentage of the randomly chosen buyout price. Default: 70 Defaults to: 70. */
  minbidpricegrey?: number | null
  /** Starting bid price of Orange items as a percentage of the randomly chosen buyout price. Default: 80 Defaults to: 80. */
  minbidpriceorange?: number | null
  /** Starting bid price of Purple items as a percentage of the randomly chosen buyout price. Default: 80 Defaults to: 80. */
  minbidpricepurple?: number | null
  /** Starting bid price of White items as a percentage of the randomly chosen buyout price. Default: 70 Defaults to: 70. */
  minbidpricewhite?: number | null
  /** Starting bid price of Yellow items as a percentage of the randomly chosen buyout price. Default: 80 Defaults to: 80. */
  minbidpriceyellow?: number | null
  /** This is the minimum number of items you want to keep in the auction house. a 0 here will make it the same as the maximum. Defaults to: 0. */
  minitems?: number | null
  /** Minimum price of Blue items (percentage). Defaults to: 1250. */
  minpriceblue?: number | null
  /** Minimum price of Green items (percentage). Defaults to: 800. */
  minpricegreen?: number | null
  /** Minimum price of Grey items (percentage). Defaults to: 100. */
  minpricegrey?: number | null
  /** Minimum price of Orange items (percentage). Defaults to: 3250. */
  minpriceorange?: number | null
  /** Minimum price of Purple items (percentage). Defaults to: 2250. */
  minpricepurple?: number | null
  /** Minimum price of White items (percentage). Defaults to: 150. */
  minpricewhite?: number | null
  /** Minimum price of Yellow items (percentage). Defaults to: 5250. */
  minpriceyellow?: number | null
  /** Text name of the auctionhouse.  */
  name?: string | null
  /** Sets the percentage of the non trade Blue auction items Defaults to: 8. */
  percentblueitems?: number | null
  /** Sets the percentage of the Blue Trade Goods auction items Defaults to: 10. */
  percentbluetradegoods?: number | null
  /** Sets the percentage of the non trade Green auction items Defaults to: 30. */
  percentgreenitems?: number | null
  /** Sets the percentage of the Green Trade Goods auction items Defaults to: 12. */
  percentgreentradegoods?: number | null
  /** Sets the percentage of the non trade Grey auction items Defaults to: 0. */
  percentgreyitems?: number | null
  /** Sets the percentage of the Grey Trade Goods auction items Defaults to: 0. */
  percentgreytradegoods?: number | null
  /** Sets the percentage of the non trade Orange auction items Defaults to: 0. */
  percentorangeitems?: number | null
  /** Sets the percentage of the Orange Trade Goods auction items Defaults to: 0. */
  percentorangetradegoods?: number | null
  /** Sets the percentage of the non trade Purple auction items Defaults to: 2. */
  percentpurpleitems?: number | null
  /** Sets the percentage of the Purple Trade Goods auction items Defaults to: 1. */
  percentpurpletradegoods?: number | null
  /** Sets the percentage of the non trade White auction items Defaults to: 10. */
  percentwhiteitems?: number | null
  /** Sets the percentage of the White Trade Goods auction items Defaults to: 27. */
  percentwhitetradegoods?: number | null
  /** Sets the percentage of the non trade Yellow auction items Defaults to: 0. */
  percentyellowitems?: number | null
  /** Sets the percentage of the Yellow Trade Goods auction items Defaults to: 0. */
  percentyellowtradegoods?: number | null
}

export interface ModAuctionhousebotDisabledItems {
  item: number
}

export interface ModuleString {
  id: number
  /** module dir name, eg mod-cfbg  */
  module: string
  string_: string
}

export interface ModuleStringLocale {
  /** Corresponds to an existing entry in module_string  */
  id: number
  locale: 'koKR' | 'frFR' | 'deDE' | 'zhCN' | 'zhTW' | 'esES' | 'esMX' | 'ruRU'
  /** Corresponds to an existing entry in module_string  */
  module: string
  string_: string
}

export interface MovieDbc {
  Filename?: string | null
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Volume: number
}

export interface NamesprofanityDbc {
  ID: number
  LanguagueID: number
  Pattern: string
}

export interface NamesreservedDbc {
  ID: number
  LanguagueID: number
  Pattern: string
}

export interface NpcSpellclickSpells {
  /** first bit defines caster: 1=player, 0=creature; second bit defines target, same mapping as caster bit  */
  cast_flags: number
  /** reference to creature_template  */
  npc_entry: number
  /** spell which should be casted   */
  spell_id: number
  /** relation with summoner: 0-no 1-friendly 2-raid 3-party player can click Defaults to: 0. */
  user_type: number
}

export interface NpcText {
  /**  Defaults to: 0. */
  BroadcastTextID0: number
  /**  Defaults to: 0. */
  BroadcastTextID1: number
  /**  Defaults to: 0. */
  BroadcastTextID2: number
  /**  Defaults to: 0. */
  BroadcastTextID3: number
  /**  Defaults to: 0. */
  BroadcastTextID4: number
  /**  Defaults to: 0. */
  BroadcastTextID5: number
  /**  Defaults to: 0. */
  BroadcastTextID6: number
  /**  Defaults to: 0. */
  BroadcastTextID7: number
  /**  Defaults to: 0. */
  em0_0: number
  /**  Defaults to: 0. */
  em0_1: number
  /**  Defaults to: 0. */
  em0_2: number
  /**  Defaults to: 0. */
  em0_3: number
  /**  Defaults to: 0. */
  em0_4: number
  /**  Defaults to: 0. */
  em0_5: number
  /**  Defaults to: 0. */
  em1_0: number
  /**  Defaults to: 0. */
  em1_1: number
  /**  Defaults to: 0. */
  em1_2: number
  /**  Defaults to: 0. */
  em1_3: number
  /**  Defaults to: 0. */
  em1_4: number
  /**  Defaults to: 0. */
  em1_5: number
  /**  Defaults to: 0. */
  em2_0: number
  /**  Defaults to: 0. */
  em2_1: number
  /**  Defaults to: 0. */
  em2_2: number
  /**  Defaults to: 0. */
  em2_3: number
  /**  Defaults to: 0. */
  em2_4: number
  /**  Defaults to: 0. */
  em2_5: number
  /**  Defaults to: 0. */
  em3_0: number
  /**  Defaults to: 0. */
  em3_1: number
  /**  Defaults to: 0. */
  em3_2: number
  /**  Defaults to: 0. */
  em3_3: number
  /**  Defaults to: 0. */
  em3_4: number
  /**  Defaults to: 0. */
  em3_5: number
  /**  Defaults to: 0. */
  em4_0: number
  /**  Defaults to: 0. */
  em4_1: number
  /**  Defaults to: 0. */
  em4_2: number
  /**  Defaults to: 0. */
  em4_3: number
  /**  Defaults to: 0. */
  em4_4: number
  /**  Defaults to: 0. */
  em4_5: number
  /**  Defaults to: 0. */
  em5_0: number
  /**  Defaults to: 0. */
  em5_1: number
  /**  Defaults to: 0. */
  em5_2: number
  /**  Defaults to: 0. */
  em5_3: number
  /**  Defaults to: 0. */
  em5_4: number
  /**  Defaults to: 0. */
  em5_5: number
  /**  Defaults to: 0. */
  em6_0: number
  /**  Defaults to: 0. */
  em6_1: number
  /**  Defaults to: 0. */
  em6_2: number
  /**  Defaults to: 0. */
  em6_3: number
  /**  Defaults to: 0. */
  em6_4: number
  /**  Defaults to: 0. */
  em6_5: number
  /**  Defaults to: 0. */
  em7_0: number
  /**  Defaults to: 0. */
  em7_1: number
  /**  Defaults to: 0. */
  em7_2: number
  /**  Defaults to: 0. */
  em7_3: number
  /**  Defaults to: 0. */
  em7_4: number
  /**  Defaults to: 0. */
  em7_5: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  lang0: number
  /**  Defaults to: 0. */
  lang1: number
  /**  Defaults to: 0. */
  lang2: number
  /**  Defaults to: 0. */
  lang3: number
  /**  Defaults to: 0. */
  lang4: number
  /**  Defaults to: 0. */
  lang5: number
  /**  Defaults to: 0. */
  lang6: number
  /**  Defaults to: 0. */
  lang7: number
  /**  Defaults to: 0. */
  Probability0: number
  /**  Defaults to: 0. */
  Probability1: number
  /**  Defaults to: 0. */
  Probability2: number
  /**  Defaults to: 0. */
  Probability3: number
  /**  Defaults to: 0. */
  Probability4: number
  /**  Defaults to: 0. */
  Probability5: number
  /**  Defaults to: 0. */
  Probability6: number
  /**  Defaults to: 0. */
  Probability7: number
  text0_0?: string | null
  text0_1?: string | null
  text1_0?: string | null
  text1_1?: string | null
  text2_0?: string | null
  text2_1?: string | null
  text3_0?: string | null
  text3_1?: string | null
  text4_0?: string | null
  text4_1?: string | null
  text5_0?: string | null
  text5_1?: string | null
  text6_0?: string | null
  text6_1?: string | null
  text7_0?: string | null
  text7_1?: string | null
  VerifiedBuild?: number | null
}

export interface NpcTextLocale {
  /**  Defaults to: 0. */
  ID: number
  Locale: string
  Text0_0?: string | null
  Text0_1?: string | null
  Text1_0?: string | null
  Text1_1?: string | null
  Text2_0?: string | null
  Text2_1?: string | null
  Text3_0?: string | null
  Text3_1?: string | null
  Text4_0?: string | null
  Text4_1?: string | null
  Text5_0?: string | null
  Text5_1?: string | null
  Text6_0?: string | null
  Text6_1?: string | null
  Text7_0?: string | null
  Text7_1?: string | null
}

export interface NpcTrainer {
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  MoneyCost: number
  /**  Defaults to: 0. */
  ReqLevel: number
  /**  Defaults to: 0. */
  ReqSkillLine: number
  /**  Defaults to: 0. */
  ReqSkillRank: number
  /**  Defaults to: 0. */
  ReqSpell: number
  /**  Defaults to: 0. */
  SpellID: number
}

export interface NpcVendor {
  /**  Defaults to: 0. */
  entry: number
  /**  Defaults to: 0. */
  ExtendedCost: number
  /**  Defaults to: 0. */
  incrtime: number
  /**  Defaults to: 0. */
  item: number
  /**  Defaults to: 0. */
  maxcount: number
  /**  Defaults to: 0. */
  slot: number
  VerifiedBuild?: number | null
}

export interface OutdoorpvpTemplate {
  comment?: string | null
  ScriptName: string
  TypeId: number
}

export interface OverridespelldataDbc {
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Spells_1: number
  /**  Defaults to: 0. */
  Spells_10: number
  /**  Defaults to: 0. */
  Spells_2: number
  /**  Defaults to: 0. */
  Spells_3: number
  /**  Defaults to: 0. */
  Spells_4: number
  /**  Defaults to: 0. */
  Spells_5: number
  /**  Defaults to: 0. */
  Spells_6: number
  /**  Defaults to: 0. */
  Spells_7: number
  /**  Defaults to: 0. */
  Spells_8: number
  /**  Defaults to: 0. */
  Spells_9: number
}

export interface PageText {
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  NextPageID: number
  Text: string
  VerifiedBuild?: number | null
}

export interface PageTextLocale {
  /**  Defaults to: 0. */
  ID: number
  locale: string
  Text?: string | null
  VerifiedBuild?: number | null
}

export interface PetLevelstats {
  /**  Defaults to: 0. */
  agi: number
  /**  Defaults to: 0. */
  armor: number
  creature_entry: number
  /**  Defaults to: 0. */
  hp: number
  /**  Defaults to: 0. */
  inte: number
  level: number
  /**  Defaults to: 0. */
  mana: number
  /**  Defaults to: 0. */
  max_dmg: number
  /**  Defaults to: 0. */
  min_dmg: number
  /**  Defaults to: 0. */
  spi: number
  /**  Defaults to: 0. */
  sta: number
  /**  Defaults to: 0. */
  str: number
}

export interface PetNameGeneration {
  /**  Defaults to: 0. */
  entry: number
  /**  Defaults to: 0. */
  half: number
  id: number
  word: string
}

export interface PetNameGenerationLocale {
  /**  Defaults to: 0. */
  Entry: number
  /**  Defaults to: 0. */
  Half: number
  ID: number
  Locale: string
  Word: string
}

export interface PickpocketingLootTemplate {
  /**  Defaults to: 100. */
  Chance: number
  Comment?: string | null
  /**  Defaults to: 0. */
  Entry: number
  /**  Defaults to: 0. */
  GroupId: number
  /**  Defaults to: 0. */
  Item: number
  /**  Defaults to: 1. */
  LootMode: number
  /**  Defaults to: 1. */
  MaxCount: number
  /**  Defaults to: 1. */
  MinCount: number
  /**  Defaults to: 0. */
  QuestRequired: number
  /**  Defaults to: 0. */
  Reference: number
}

export interface PlayerClassStats {
  /**  Defaults to: 0. */
  Agility: number
  /**  Defaults to: 1. */
  BaseHP: number
  /**  Defaults to: 1. */
  BaseMana: number
  Class: number
  /**  Defaults to: 0. */
  Intellect: number
  Level: number
  /**  Defaults to: 0. */
  Spirit: number
  /**  Defaults to: 0. */
  Stamina: number
  /**  Defaults to: 0. */
  Strength: number
}

export interface PlayerFactionchangeAchievement {
  alliance_id: number
  horde_id: number
}

export interface PlayerFactionchangeItems {
  alliance_comment: string
  alliance_id: number
  horde_comment: string
  horde_id: number
}

export interface PlayerFactionchangeQuests {
  alliance_id: number
  horde_id: number
}

export interface PlayerFactionchangeReputations {
  alliance_id: number
  horde_id: number
}

export interface PlayerFactionchangeSpells {
  alliance_comment: string
  alliance_id: number
  horde_comment: string
  horde_id: number
}

export interface PlayerFactionchangeTitles {
  alliance_comment?: string | null
  alliance_id: number
  horde_comment?: string | null
  horde_id: number
}

export interface PlayerLootTemplate {
  /**  Defaults to: 100. */
  Chance: number
  Comment?: string | null
  /**  Defaults to: 0. */
  Entry: number
  /**  Defaults to: 0. */
  GroupId: number
  /**  Defaults to: 0. */
  Item: number
  /**  Defaults to: 1. */
  LootMode: number
  /**  Defaults to: 1. */
  MaxCount: number
  /**  Defaults to: 1. */
  MinCount: number
  /**  Defaults to: 0. */
  QuestRequired: number
  /**  Defaults to: 0. */
  Reference: number
}

export interface PlayerRaceStats {
  /**  Defaults to: 0. */
  Agility: number
  /**  Defaults to: 0. */
  Intellect: number
  Race: number
  /**  Defaults to: 0. */
  Spirit: number
  /**  Defaults to: 0. */
  Stamina: number
  /**  Defaults to: 0. */
  Strength: number
}

export interface PlayerXpForLevel {
  Experience: number
  Level: number
}

export interface Playercreateinfo {
  /**  Defaults to: 0. */
  class: number
  /**  Defaults to: 0. */
  map: number
  /**  Defaults to: 0. */
  orientation: number
  /**  Defaults to: 0. */
  position_x: number
  /**  Defaults to: 0. */
  position_y: number
  /**  Defaults to: 0. */
  position_z: number
  /**  Defaults to: 0. */
  race: number
  /**  Defaults to: 0. */
  zone: number
}

export interface PlayercreateinfoAction {
  /**  Defaults to: 0. */
  action: number
  /**  Defaults to: 0. */
  button: number
  /**  Defaults to: 0. */
  class: number
  /**  Defaults to: 0. */
  race: number
  /**  Defaults to: 0. */
  type: number
}

export interface PlayercreateinfoCastSpell {
  /**  Defaults to: 0. */
  classMask: number
  note?: string | null
  /**  Defaults to: 0. */
  raceMask: number
  /**  Defaults to: 0. */
  spell: number
}

export interface PlayercreateinfoItem {
  /**  Defaults to: 1. */
  amount: number
  /**  Defaults to: 0. */
  class: number
  /**  Defaults to: 0. */
  itemid: number
  Note?: string | null
  /**  Defaults to: 0. */
  race: number
}

export interface PlayercreateinfoSkills {
  classMask: number
  comment?: string | null
  raceMask: number
  /**  Defaults to: 0. */
  rank: number
  skill: number
}

export interface PlayercreateinfoSpellCustom {
  /**  Defaults to: 0. */
  classmask: number
  Note?: string | null
  /**  Defaults to: 0. */
  racemask: number
  /**  Defaults to: 0. */
  Spell: number
}

export interface PointsOfInterest {
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  Icon: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Importance: number
  Name: string
  /**  Defaults to: 0. */
  PositionX: number
  /**  Defaults to: 0. */
  PositionY: number
}

export interface PointsOfInterestLocale {
  /**  Defaults to: 0. */
  ID: number
  locale: string
  Name?: string | null
  VerifiedBuild?: number | null
}

export interface PoolCreature {
  /**  Defaults to: 0. */
  chance: number
  description?: string | null
  /**  Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  pool_entry: number
}

export interface PoolGameobject {
  /**  Defaults to: 0. */
  chance: number
  description?: string | null
  /**  Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  pool_entry: number
}

export interface PoolPool {
  /**  Defaults to: 0. */
  chance: number
  description?: string | null
  /**  Defaults to: 0. */
  mother_pool: number
  /**  Defaults to: 0. */
  pool_id: number
}

export interface PoolQuest {
  description?: string | null
  /**  Defaults to: 0. */
  entry: number
  /**  Defaults to: 0. */
  pool_entry: number
}

export interface PoolTemplate {
  description?: string | null
  /** Pool entry Defaults to: 0. */
  entry: number
  /** Max number of objects (0) is no limit Defaults to: 0. */
  max_limit: number
}

export interface PowerdisplayDbc {
  /**  Defaults to: 0. */
  ActualType: number
  /**  Defaults to: 0. */
  Blue: number
  GlobalstringBaseTag?: string | null
  /**  Defaults to: 0. */
  Green: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Red: number
}

export interface ProspectingLootTemplate {
  /**  Defaults to: 100. */
  Chance: number
  Comment?: string | null
  /**  Defaults to: 0. */
  Entry: number
  /**  Defaults to: 0. */
  GroupId: number
  /**  Defaults to: 0. */
  Item: number
  /**  Defaults to: 1. */
  LootMode: number
  /**  Defaults to: 1. */
  MaxCount: number
  /**  Defaults to: 1. */
  MinCount: number
  /**  Defaults to: 0. */
  QuestRequired: number
  /**  Defaults to: 0. */
  Reference: number
}

export interface PvpdifficultyDbc {
  /**  Defaults to: 0. */
  Difficulty: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  MapID: number
  /**  Defaults to: 0. */
  MaxLevel: number
  /**  Defaults to: 0. */
  MinLevel: number
  /**  Defaults to: 0. */
  RangeIndex: number
}

export interface QuestDetails {
  /**  Defaults to: 0. */
  Emote1: number
  /**  Defaults to: 0. */
  Emote2: number
  /**  Defaults to: 0. */
  Emote3: number
  /**  Defaults to: 0. */
  Emote4: number
  /**  Defaults to: 0. */
  EmoteDelay1: number
  /**  Defaults to: 0. */
  EmoteDelay2: number
  /**  Defaults to: 0. */
  EmoteDelay3: number
  /**  Defaults to: 0. */
  EmoteDelay4: number
  /**  Defaults to: 0. */
  ID: number
  VerifiedBuild?: number | null
}

export interface QuestGreeting {
  /**  Defaults to: 0. */
  GreetEmoteDelay: number
  /**  Defaults to: 0. */
  GreetEmoteType: number
  Greeting?: string | null
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  type: number
  VerifiedBuild?: number | null
}

export interface QuestGreetingLocale {
  Greeting?: string | null
  /**  Defaults to: 0. */
  ID: number
  locale: string
  /**  Defaults to: 0. */
  type: number
  VerifiedBuild?: number | null
}

export interface QuestMailSender {
  /**  Defaults to: 0. */
  QuestId: number
  /**  Defaults to: 0. */
  RewardMailSenderEntry: number
}

export interface QuestMoneyReward {
  /**  Defaults to: 0. */
  Level: number
  /**  Defaults to: 0. */
  Money0: number
  /**  Defaults to: 0. */
  Money1: number
  /**  Defaults to: 0. */
  Money2: number
  /**  Defaults to: 0. */
  Money3: number
  /**  Defaults to: 0. */
  Money4: number
  /**  Defaults to: 0. */
  Money5: number
  /**  Defaults to: 0. */
  Money6: number
  /**  Defaults to: 0. */
  Money7: number
  /**  Defaults to: 0. */
  Money8: number
  /**  Defaults to: 0. */
  Money9: number
}

export interface QuestOfferReward {
  /**  Defaults to: 0. */
  Emote1: number
  /**  Defaults to: 0. */
  Emote2: number
  /**  Defaults to: 0. */
  Emote3: number
  /**  Defaults to: 0. */
  Emote4: number
  /**  Defaults to: 0. */
  EmoteDelay1: number
  /**  Defaults to: 0. */
  EmoteDelay2: number
  /**  Defaults to: 0. */
  EmoteDelay3: number
  /**  Defaults to: 0. */
  EmoteDelay4: number
  /**  Defaults to: 0. */
  ID: number
  RewardText?: string | null
  VerifiedBuild?: number | null
}

export interface QuestOfferRewardLocale {
  /**  Defaults to: 0. */
  ID: number
  locale: string
  RewardText?: string | null
  VerifiedBuild?: number | null
}

export interface QuestPoi {
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  Floor: number
  /**  Defaults to: 0. */
  id: number
  /**  Defaults to: 0. */
  MapID: number
  /**  Defaults to: 0. */
  ObjectiveIndex: number
  /**  Defaults to: 0. */
  Priority: number
  /**  Defaults to: 0. */
  QuestID: number
  VerifiedBuild?: number | null
  /**  Defaults to: 0. */
  WorldMapAreaId: number
}

export interface QuestPoiPoints {
  /**  Defaults to: 0. */
  Idx1: number
  /**  Defaults to: 0. */
  Idx2: number
  /**  Defaults to: 0. */
  QuestID: number
  VerifiedBuild?: number | null
  /**  Defaults to: 0. */
  X: number
  /**  Defaults to: 0. */
  Y: number
}

export interface QuestRequestItems {
  CompletionText?: string | null
  /**  Defaults to: 0. */
  EmoteOnComplete: number
  /**  Defaults to: 0. */
  EmoteOnIncomplete: number
  /**  Defaults to: 0. */
  ID: number
  VerifiedBuild?: number | null
}

export interface QuestRequestItemsLocale {
  CompletionText?: string | null
  /**  Defaults to: 0. */
  ID: number
  locale: string
  VerifiedBuild?: number | null
}

export interface QuestTemplate {
  /**  Defaults to: 0. */
  AllowableRaces: number
  AreaDescription?: string | null
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  ItemDrop1: number
  /**  Defaults to: 0. */
  ItemDrop2: number
  /**  Defaults to: 0. */
  ItemDrop3: number
  /**  Defaults to: 0. */
  ItemDrop4: number
  /**  Defaults to: 0. */
  ItemDropQuantity1: number
  /**  Defaults to: 0. */
  ItemDropQuantity2: number
  /**  Defaults to: 0. */
  ItemDropQuantity3: number
  /**  Defaults to: 0. */
  ItemDropQuantity4: number
  LogDescription?: string | null
  LogTitle?: string | null
  /**  Defaults to: 0. */
  MinLevel: number
  ObjectiveText1?: string | null
  ObjectiveText2?: string | null
  ObjectiveText3?: string | null
  ObjectiveText4?: string | null
  /**  Defaults to: 0. */
  POIContinent: number
  /**  Defaults to: 0. */
  POIPriority: number
  /**  Defaults to: 0. */
  POIx: number
  /**  Defaults to: 0. */
  POIy: number
  QuestCompletionLog?: string | null
  QuestDescription?: string | null
  /**  Defaults to: 0. */
  QuestInfoID: number
  /**  Defaults to: 1. */
  QuestLevel: number
  /**  Defaults to: 0. */
  QuestSortID: number
  /**  Defaults to: 2. */
  QuestType: number
  /**  Defaults to: 0. */
  RequiredFactionId1: number
  /**  Defaults to: 0. */
  RequiredFactionId2: number
  /**  Defaults to: 0. */
  RequiredFactionValue1: number
  /**  Defaults to: 0. */
  RequiredFactionValue2: number
  /**  Defaults to: 0. */
  RequiredItemCount1: number
  /**  Defaults to: 0. */
  RequiredItemCount2: number
  /**  Defaults to: 0. */
  RequiredItemCount3: number
  /**  Defaults to: 0. */
  RequiredItemCount4: number
  /**  Defaults to: 0. */
  RequiredItemCount5: number
  /**  Defaults to: 0. */
  RequiredItemCount6: number
  /**  Defaults to: 0. */
  RequiredItemId1: number
  /**  Defaults to: 0. */
  RequiredItemId2: number
  /**  Defaults to: 0. */
  RequiredItemId3: number
  /**  Defaults to: 0. */
  RequiredItemId4: number
  /**  Defaults to: 0. */
  RequiredItemId5: number
  /**  Defaults to: 0. */
  RequiredItemId6: number
  /**  Defaults to: 0. */
  RequiredNpcOrGo1: number
  /**  Defaults to: 0. */
  RequiredNpcOrGo2: number
  /**  Defaults to: 0. */
  RequiredNpcOrGo3: number
  /**  Defaults to: 0. */
  RequiredNpcOrGo4: number
  /**  Defaults to: 0. */
  RequiredNpcOrGoCount1: number
  /**  Defaults to: 0. */
  RequiredNpcOrGoCount2: number
  /**  Defaults to: 0. */
  RequiredNpcOrGoCount3: number
  /**  Defaults to: 0. */
  RequiredNpcOrGoCount4: number
  /**  Defaults to: 0. */
  RequiredPlayerKills: number
  /**  Defaults to: 0. */
  RewardAmount1: number
  /**  Defaults to: 0. */
  RewardAmount2: number
  /**  Defaults to: 0. */
  RewardAmount3: number
  /**  Defaults to: 0. */
  RewardAmount4: number
  /**  Defaults to: 0. */
  RewardArenaPoints: number
  /**  Defaults to: 0. */
  RewardChoiceItemID1: number
  /**  Defaults to: 0. */
  RewardChoiceItemID2: number
  /**  Defaults to: 0. */
  RewardChoiceItemID3: number
  /**  Defaults to: 0. */
  RewardChoiceItemID4: number
  /**  Defaults to: 0. */
  RewardChoiceItemID5: number
  /**  Defaults to: 0. */
  RewardChoiceItemID6: number
  /**  Defaults to: 0. */
  RewardChoiceItemQuantity1: number
  /**  Defaults to: 0. */
  RewardChoiceItemQuantity2: number
  /**  Defaults to: 0. */
  RewardChoiceItemQuantity3: number
  /**  Defaults to: 0. */
  RewardChoiceItemQuantity4: number
  /**  Defaults to: 0. */
  RewardChoiceItemQuantity5: number
  /**  Defaults to: 0. */
  RewardChoiceItemQuantity6: number
  /**  Defaults to: 0. */
  RewardDisplaySpell: number
  /** faction id from Faction.dbc in this case Defaults to: 0. */
  RewardFactionID1: number
  /** faction id from Faction.dbc in this case Defaults to: 0. */
  RewardFactionID2: number
  /** faction id from Faction.dbc in this case Defaults to: 0. */
  RewardFactionID3: number
  /** faction id from Faction.dbc in this case Defaults to: 0. */
  RewardFactionID4: number
  /** faction id from Faction.dbc in this case Defaults to: 0. */
  RewardFactionID5: number
  /**  Defaults to: 0. */
  RewardFactionOverride1: number
  /**  Defaults to: 0. */
  RewardFactionOverride2: number
  /**  Defaults to: 0. */
  RewardFactionOverride3: number
  /**  Defaults to: 0. */
  RewardFactionOverride4: number
  /**  Defaults to: 0. */
  RewardFactionOverride5: number
  /**  Defaults to: 0. */
  RewardFactionValue1: number
  /**  Defaults to: 0. */
  RewardFactionValue2: number
  /**  Defaults to: 0. */
  RewardFactionValue3: number
  /**  Defaults to: 0. */
  RewardFactionValue4: number
  /**  Defaults to: 0. */
  RewardFactionValue5: number
  /**  Defaults to: 0. */
  RewardHonor: number
  /**  Defaults to: 0. */
  RewardItem1: number
  /**  Defaults to: 0. */
  RewardItem2: number
  /**  Defaults to: 0. */
  RewardItem3: number
  /**  Defaults to: 0. */
  RewardItem4: number
  /**  Defaults to: 0. */
  RewardKillHonor: number
  /**  Defaults to: 0. */
  RewardMoney: number
  /**  Defaults to: 0. */
  RewardMoneyDifficulty: number
  /**  Defaults to: 0. */
  RewardNextQuest: number
  /**  Defaults to: 0. */
  RewardSpell: number
  /**  Defaults to: 0. */
  RewardTalents: number
  /**  Defaults to: 0. */
  RewardTitle: number
  /**  Defaults to: 0. */
  RewardXPDifficulty: number
  /**  Defaults to: 0. */
  StartItem: number
  /**  Defaults to: 0. */
  SuggestedGroupNum: number
  /**  Defaults to: 0. */
  TimeAllowed: number
  /**  Defaults to: 0. */
  Unknown0: number
  VerifiedBuild?: number | null
}

export interface QuestTemplateAddon {
  /**  Defaults to: 0. */
  AllowableClasses: number
  /**  Defaults to: 0. */
  ExclusiveGroup: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  MaxLevel: number
  /**  Defaults to: 0. */
  NextQuestID: number
  /**  Defaults to: 0. */
  PrevQuestID: number
  /**  Defaults to: 0. */
  ProvidedItemCount: number
  /**  Defaults to: 0. */
  RequiredMaxRepFaction: number
  /**  Defaults to: 0. */
  RequiredMaxRepValue: number
  /**  Defaults to: 0. */
  RequiredMinRepFaction: number
  /**  Defaults to: 0. */
  RequiredMinRepValue: number
  /**  Defaults to: 0. */
  RequiredSkillID: number
  /**  Defaults to: 0. */
  RequiredSkillPoints: number
  /**  Defaults to: 0. */
  RewardMailDelay: number
  /**  Defaults to: 0. */
  RewardMailTemplateID: number
  /**  Defaults to: 0. */
  SourceSpellID: number
  /**  Defaults to: 0. */
  SpecialFlags: number
}

export interface QuestTemplateLocale {
  CompletedText?: string | null
  Details?: string | null
  EndText?: string | null
  /**  Defaults to: 0. */
  ID: number
  locale: string
  Objectives?: string | null
  ObjectiveText1?: string | null
  ObjectiveText2?: string | null
  ObjectiveText3?: string | null
  ObjectiveText4?: string | null
  Title?: string | null
  VerifiedBuild?: number | null
}

export interface QuestfactionrewardDbc {
  /**  Defaults to: 0. */
  Difficulty_1: number
  /**  Defaults to: 0. */
  Difficulty_10: number
  /**  Defaults to: 0. */
  Difficulty_2: number
  /**  Defaults to: 0. */
  Difficulty_3: number
  /**  Defaults to: 0. */
  Difficulty_4: number
  /**  Defaults to: 0. */
  Difficulty_5: number
  /**  Defaults to: 0. */
  Difficulty_6: number
  /**  Defaults to: 0. */
  Difficulty_7: number
  /**  Defaults to: 0. */
  Difficulty_8: number
  /**  Defaults to: 0. */
  Difficulty_9: number
  /**  Defaults to: 0. */
  ID: number
}

export interface QuestsortDbc {
  /**  Defaults to: 0. */
  ID: number
  SortName_Lang_deDE?: string | null
  SortName_Lang_enCN?: string | null
  SortName_Lang_enGB?: string | null
  SortName_Lang_enTW?: string | null
  SortName_Lang_enUS?: string | null
  SortName_Lang_esES?: string | null
  SortName_Lang_esMX?: string | null
  SortName_Lang_frFR?: string | null
  SortName_Lang_itIT?: string | null
  SortName_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  SortName_Lang_Mask: number
  SortName_Lang_ptBR?: string | null
  SortName_Lang_ptPT?: string | null
  SortName_Lang_ruRU?: string | null
  SortName_Lang_Unk?: string | null
  SortName_Lang_zhCN?: string | null
  SortName_Lang_zhTW?: string | null
}

export interface QuestxpDbc {
  /**  Defaults to: 0. */
  Difficulty_1: number
  /**  Defaults to: 0. */
  Difficulty_10: number
  /**  Defaults to: 0. */
  Difficulty_2: number
  /**  Defaults to: 0. */
  Difficulty_3: number
  /**  Defaults to: 0. */
  Difficulty_4: number
  /**  Defaults to: 0. */
  Difficulty_5: number
  /**  Defaults to: 0. */
  Difficulty_6: number
  /**  Defaults to: 0. */
  Difficulty_7: number
  /**  Defaults to: 0. */
  Difficulty_8: number
  /**  Defaults to: 0. */
  Difficulty_9: number
  /**  Defaults to: 0. */
  ID: number
}

export interface RandproppointsDbc {
  /**  Defaults to: 0. */
  Epic_1: number
  /**  Defaults to: 0. */
  Epic_2: number
  /**  Defaults to: 0. */
  Epic_3: number
  /**  Defaults to: 0. */
  Epic_4: number
  /**  Defaults to: 0. */
  Epic_5: number
  /**  Defaults to: 0. */
  Good_1: number
  /**  Defaults to: 0. */
  Good_2: number
  /**  Defaults to: 0. */
  Good_3: number
  /**  Defaults to: 0. */
  Good_4: number
  /**  Defaults to: 0. */
  Good_5: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Superior_1: number
  /**  Defaults to: 0. */
  Superior_2: number
  /**  Defaults to: 0. */
  Superior_3: number
  /**  Defaults to: 0. */
  Superior_4: number
  /**  Defaults to: 0. */
  Superior_5: number
}

export interface ReferenceLootTemplate {
  /**  Defaults to: 100. */
  Chance: number
  Comment?: string | null
  /**  Defaults to: 0. */
  Entry: number
  /**  Defaults to: 0. */
  GroupId: number
  /**  Defaults to: 0. */
  Item: number
  /**  Defaults to: 1. */
  LootMode: number
  /**  Defaults to: 1. */
  MaxCount: number
  /**  Defaults to: 1. */
  MinCount: number
  /**  Defaults to: 0. */
  QuestRequired: number
  /**  Defaults to: 0. */
  Reference: number
}

export interface ReputationRewardRate {
  /**  Defaults to: 1. */
  creature_rate: number
  /**  Defaults to: 0. */
  faction: number
  /**  Defaults to: 1. */
  quest_daily_rate: number
  /**  Defaults to: 1. */
  quest_monthly_rate: number
  /**  Defaults to: 1. */
  quest_rate: number
  /**  Defaults to: 1. */
  quest_repeatable_rate: number
  /**  Defaults to: 1. */
  quest_weekly_rate: number
  /**  Defaults to: 1. */
  spell_rate: number
}

export interface ReputationSpilloverTemplate {
  /** faction entry Defaults to: 0. */
  faction: number
  /** faction to give spillover for Defaults to: 0. */
  faction1: number
  /**  Defaults to: 0. */
  faction2: number
  /**  Defaults to: 0. */
  faction3: number
  /**  Defaults to: 0. */
  faction4: number
  /**  Defaults to: 0. */
  faction5: number
  /**  Defaults to: 0. */
  faction6: number
  /** max rank,above this will not give any spillover Defaults to: 0. */
  rank_1: number
  /**  Defaults to: 0. */
  rank_2: number
  /**  Defaults to: 0. */
  rank_3: number
  /**  Defaults to: 0. */
  rank_4: number
  /**  Defaults to: 0. */
  rank_5: number
  /**  Defaults to: 0. */
  rank_6: number
  /** the given rep points * rate Defaults to: 0. */
  rate_1: number
  /**  Defaults to: 0. */
  rate_2: number
  /**  Defaults to: 0. */
  rate_3: number
  /**  Defaults to: 0. */
  rate_4: number
  /**  Defaults to: 0. */
  rate_5: number
  /**  Defaults to: 0. */
  rate_6: number
}

export interface ScalingstatdistributionDbc {
  /**  Defaults to: 0. */
  Bonus_1: number
  /**  Defaults to: 0. */
  Bonus_10: number
  /**  Defaults to: 0. */
  Bonus_2: number
  /**  Defaults to: 0. */
  Bonus_3: number
  /**  Defaults to: 0. */
  Bonus_4: number
  /**  Defaults to: 0. */
  Bonus_5: number
  /**  Defaults to: 0. */
  Bonus_6: number
  /**  Defaults to: 0. */
  Bonus_7: number
  /**  Defaults to: 0. */
  Bonus_8: number
  /**  Defaults to: 0. */
  Bonus_9: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Maxlevel: number
  /**  Defaults to: 0. */
  StatID_1: number
  /**  Defaults to: 0. */
  StatID_10: number
  /**  Defaults to: 0. */
  StatID_2: number
  /**  Defaults to: 0. */
  StatID_3: number
  /**  Defaults to: 0. */
  StatID_4: number
  /**  Defaults to: 0. */
  StatID_5: number
  /**  Defaults to: 0. */
  StatID_6: number
  /**  Defaults to: 0. */
  StatID_7: number
  /**  Defaults to: 0. */
  StatID_8: number
  /**  Defaults to: 0. */
  StatID_9: number
}

export interface ScalingstatvaluesDbc {
  /**  Defaults to: 0. */
  Charlevel: number
  /**  Defaults to: 0. */
  ClothChestArmor: number
  /**  Defaults to: 0. */
  ClothCloakArmor: number
  /**  Defaults to: 0. */
  ClothShoulderArmor: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  LeatherChestArmor: number
  /**  Defaults to: 0. */
  LeatherShoulderArmor: number
  /**  Defaults to: 0. */
  MailChestArmor: number
  /**  Defaults to: 0. */
  MailShoulderArmor: number
  /**  Defaults to: 0. */
  PlateChestArmor: number
  /**  Defaults to: 0. */
  PlateShoulderArmor: number
  /**  Defaults to: 0. */
  PrimaryBudget: number
  /**  Defaults to: 0. */
  RangedBudget: number
  /**  Defaults to: 0. */
  RangedDPS: number
  /**  Defaults to: 0. */
  ShoulderBudget: number
  /**  Defaults to: 0. */
  SpellcasterDPS1H: number
  /**  Defaults to: 0. */
  SpellcasterDPS2H: number
  /**  Defaults to: 0. */
  SpellPower: number
  /**  Defaults to: 0. */
  TertiaryBudget: number
  /**  Defaults to: 0. */
  TrinketBudget: number
  /**  Defaults to: 0. */
  WandDPS: number
  /**  Defaults to: 0. */
  WeaponBudget1H: number
  /**  Defaults to: 0. */
  WeaponDPS1H: number
  /**  Defaults to: 0. */
  WeaponDPS2H: number
}

export interface ScriptWaypoint {
  /** creature_template entry Defaults to: 0. */
  entry: number
  /**  Defaults to: 0. */
  location_x: number
  /**  Defaults to: 0. */
  location_y: number
  /**  Defaults to: 0. */
  location_z: number
  point_comment?: string | null
  /**  Defaults to: 0. */
  pointid: number
  /** waittime in millisecs Defaults to: 0. */
  waittime: number
}

export interface SkillDiscoveryTemplate {
  /** chance to discover Defaults to: 0. */
  chance: number
  /** skill points requirement Defaults to: 0. */
  reqSkillValue: number
  /** spell requirement Defaults to: 0. */
  reqSpell: number
  /** SpellId of the discoverable spell Defaults to: 0. */
  spellId: number
}

export interface SkillExtraItemTemplate {
  /** chance to create add Defaults to: 0. */
  additionalCreateChance: number
  /**  Defaults to: 0. */
  additionalMaxNum: number
  /** Specialization spell id Defaults to: 0. */
  requiredSpecialization: number
  /** SpellId of the item creation spell Defaults to: 0. */
  spellId: number
}

export interface SkillFishingBaseLevel {
  /** Area identifier Defaults to: 0. */
  entry: number
  /** Base skill level requirement Defaults to: 0. */
  skill: number
}

export interface SkillPerfectItemTemplate {
  /** chance to create the perfect item instead Defaults to: 0. */
  perfectCreateChance: number
  /** perfect item type to create instead Defaults to: 0. */
  perfectItemType: number
  /** Specialization spell id Defaults to: 0. */
  requiredSpecialization: number
  /** SpellId of the item creation spell Defaults to: 0. */
  spellId: number
}

export interface SkilllineDbc {
  AlternateVerb_Lang_deDE?: string | null
  AlternateVerb_Lang_enCN?: string | null
  AlternateVerb_Lang_enGB?: string | null
  AlternateVerb_Lang_enTW?: string | null
  AlternateVerb_Lang_enUS?: string | null
  AlternateVerb_Lang_esES?: string | null
  AlternateVerb_Lang_esMX?: string | null
  AlternateVerb_Lang_frFR?: string | null
  AlternateVerb_Lang_itIT?: string | null
  AlternateVerb_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  AlternateVerb_Lang_Mask: number
  AlternateVerb_Lang_ptBR?: string | null
  AlternateVerb_Lang_ptPT?: string | null
  AlternateVerb_Lang_ruRU?: string | null
  AlternateVerb_Lang_Unk?: string | null
  AlternateVerb_Lang_zhCN?: string | null
  AlternateVerb_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  CanLink: number
  /**  Defaults to: 0. */
  CategoryID: number
  Description_Lang_deDE?: string | null
  Description_Lang_enCN?: string | null
  Description_Lang_enGB?: string | null
  Description_Lang_enTW?: string | null
  Description_Lang_enUS?: string | null
  Description_Lang_esES?: string | null
  Description_Lang_esMX?: string | null
  Description_Lang_frFR?: string | null
  Description_Lang_itIT?: string | null
  Description_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Description_Lang_Mask: number
  Description_Lang_ptBR?: string | null
  Description_Lang_ptPT?: string | null
  Description_Lang_ruRU?: string | null
  Description_Lang_Unk?: string | null
  Description_Lang_zhCN?: string | null
  Description_Lang_zhTW?: string | null
  DisplayName_Lang_deDE?: string | null
  DisplayName_Lang_enCN?: string | null
  DisplayName_Lang_enGB?: string | null
  DisplayName_Lang_enTW?: string | null
  DisplayName_Lang_enUS?: string | null
  DisplayName_Lang_esES?: string | null
  DisplayName_Lang_esMX?: string | null
  DisplayName_Lang_frFR?: string | null
  DisplayName_Lang_itIT?: string | null
  DisplayName_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  DisplayName_Lang_Mask: number
  DisplayName_Lang_ptBR?: string | null
  DisplayName_Lang_ptPT?: string | null
  DisplayName_Lang_ruRU?: string | null
  DisplayName_Lang_Unk?: string | null
  DisplayName_Lang_zhCN?: string | null
  DisplayName_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  SkillCostsID: number
  /**  Defaults to: 0. */
  SpellIconID: number
}

export interface SkilllineabilityDbc {
  /**  Defaults to: 0. */
  AcquireMethod: number
  /**  Defaults to: 0. */
  CharacterPoints_1: number
  /**  Defaults to: 0. */
  CharacterPoints_2: number
  /**  Defaults to: 0. */
  ClassMask: number
  /**  Defaults to: 0. */
  ExcludeClass: number
  /**  Defaults to: 0. */
  ExcludeRace: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  MinSkillLineRank: number
  /**  Defaults to: 0. */
  RaceMask: number
  /**  Defaults to: 0. */
  SkillLine: number
  /**  Defaults to: 0. */
  Spell: number
  /**  Defaults to: 0. */
  SupercededBySpell: number
  /**  Defaults to: 0. */
  TrivialSkillLineRankHigh: number
  /**  Defaults to: 0. */
  TrivialSkillLineRankLow: number
}

export interface SkillraceclassinfoDbc {
  /**  Defaults to: 0. */
  ClassMask: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  MinLevel: number
  /**  Defaults to: 0. */
  RaceMask: number
  /**  Defaults to: 0. */
  SkillCostIndex: number
  /**  Defaults to: 0. */
  SkillID: number
  /**  Defaults to: 0. */
  SkillTierID: number
}

export interface SkilltiersDbc {
  /**  Defaults to: 0. */
  Cost_1: number
  /**  Defaults to: 0. */
  Cost_10: number
  /**  Defaults to: 0. */
  Cost_11: number
  /**  Defaults to: 0. */
  Cost_12: number
  /**  Defaults to: 0. */
  Cost_13: number
  /**  Defaults to: 0. */
  Cost_14: number
  /**  Defaults to: 0. */
  Cost_15: number
  /**  Defaults to: 0. */
  Cost_16: number
  /**  Defaults to: 0. */
  Cost_2: number
  /**  Defaults to: 0. */
  Cost_3: number
  /**  Defaults to: 0. */
  Cost_4: number
  /**  Defaults to: 0. */
  Cost_5: number
  /**  Defaults to: 0. */
  Cost_6: number
  /**  Defaults to: 0. */
  Cost_7: number
  /**  Defaults to: 0. */
  Cost_8: number
  /**  Defaults to: 0. */
  Cost_9: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Value_1: number
  /**  Defaults to: 0. */
  Value_10: number
  /**  Defaults to: 0. */
  Value_11: number
  /**  Defaults to: 0. */
  Value_12: number
  /**  Defaults to: 0. */
  Value_13: number
  /**  Defaults to: 0. */
  Value_14: number
  /**  Defaults to: 0. */
  Value_15: number
  /**  Defaults to: 0. */
  Value_16: number
  /**  Defaults to: 0. */
  Value_2: number
  /**  Defaults to: 0. */
  Value_3: number
  /**  Defaults to: 0. */
  Value_4: number
  /**  Defaults to: 0. */
  Value_5: number
  /**  Defaults to: 0. */
  Value_6: number
  /**  Defaults to: 0. */
  Value_7: number
  /**  Defaults to: 0. */
  Value_8: number
  /**  Defaults to: 0. */
  Value_9: number
}

export interface SkinningLootTemplate {
  /**  Defaults to: 100. */
  Chance: number
  Comment?: string | null
  /**  Defaults to: 0. */
  Entry: number
  /**  Defaults to: 0. */
  GroupId: number
  /**  Defaults to: 0. */
  Item: number
  /**  Defaults to: 1. */
  LootMode: number
  /**  Defaults to: 1. */
  MaxCount: number
  /**  Defaults to: 1. */
  MinCount: number
  /**  Defaults to: 0. */
  QuestRequired: number
  /**  Defaults to: 0. */
  Reference: number
}

export interface SmartScripts {
  /**  Defaults to: 0. */
  action_param1: number
  /**  Defaults to: 0. */
  action_param2: number
  /**  Defaults to: 0. */
  action_param3: number
  /**  Defaults to: 0. */
  action_param4: number
  /**  Defaults to: 0. */
  action_param5: number
  /**  Defaults to: 0. */
  action_param6: number
  /**  Defaults to: 0. */
  action_type: number
  /** Event Comment  */
  comment: string
  entryorguid: number
  /**  Defaults to: 100. */
  event_chance: number
  /**  Defaults to: 0. */
  event_flags: number
  /**  Defaults to: 0. */
  event_param1: number
  /**  Defaults to: 0. */
  event_param2: number
  /**  Defaults to: 0. */
  event_param3: number
  /**  Defaults to: 0. */
  event_param4: number
  /**  Defaults to: 0. */
  event_param5: number
  /**  Defaults to: 0. */
  event_param6: number
  /**  Defaults to: 0. */
  event_phase_mask: number
  /**  Defaults to: 0. */
  event_type: number
  /**  Defaults to: 0. */
  id: number
  /**  Defaults to: 0. */
  link: number
  /**  Defaults to: 0. */
  source_type: number
  /**  Defaults to: 0. */
  target_o: number
  /**  Defaults to: 0. */
  target_param1: number
  /**  Defaults to: 0. */
  target_param2: number
  /**  Defaults to: 0. */
  target_param3: number
  /**  Defaults to: 0. */
  target_param4: number
  /**  Defaults to: 0. */
  target_type: number
  /**  Defaults to: 0. */
  target_x: number
  /**  Defaults to: 0. */
  target_y: number
  /**  Defaults to: 0. */
  target_z: number
}

export interface SoundentriesDbc {
  DirectoryBase?: string | null
  /**  Defaults to: 0. */
  DistanceCutoff: number
  /**  Defaults to: 0. */
  EAXDef: number
  File_1?: string | null
  File_10?: string | null
  File_2?: string | null
  File_3?: string | null
  File_4?: string | null
  File_5?: string | null
  File_6?: string | null
  File_7?: string | null
  File_8?: string | null
  File_9?: string | null
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  Freq_1: number
  /**  Defaults to: 0. */
  Freq_10: number
  /**  Defaults to: 0. */
  Freq_2: number
  /**  Defaults to: 0. */
  Freq_3: number
  /**  Defaults to: 0. */
  Freq_4: number
  /**  Defaults to: 0. */
  Freq_5: number
  /**  Defaults to: 0. */
  Freq_6: number
  /**  Defaults to: 0. */
  Freq_7: number
  /**  Defaults to: 0. */
  Freq_8: number
  /**  Defaults to: 0. */
  Freq_9: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  MinDistance: number
  Name?: string | null
  /**  Defaults to: 0. */
  SoundEntriesAdvancedID: number
  /**  Defaults to: 0. */
  SoundType: number
  /**  Defaults to: 0. */
  Volumefloat: number
}

export interface SpellArea {
  /**  Defaults to: 0. */
  area: number
  /**  Defaults to: 0. */
  aura_spell: number
  /**  Defaults to: 0. */
  autocast: number
  /**  Defaults to: 2. */
  gender: number
  /**  Defaults to: 0. */
  quest_end: number
  /**  Defaults to: 11. */
  quest_end_status: number
  /**  Defaults to: 0. */
  quest_start: number
  /**  Defaults to: 64. */
  quest_start_status: number
  /**  Defaults to: 0. */
  racemask: number
  /**  Defaults to: 0. */
  spell: number
}

export interface SpellBonusData {
  /**  Defaults to: 0. */
  ap_bonus: number
  /**  Defaults to: 0. */
  ap_dot_bonus: number
  comments?: string | null
  /**  Defaults to: 0. */
  direct_bonus: number
  /**  Defaults to: 0. */
  dot_bonus: number
  /**  Defaults to: 0. */
  entry: number
}

export interface SpellCooldownOverrides {
  /**  Defaults to: 0. */
  CategoryRecoveryTime: number
  Comment?: string | null
  Id: number
  /**  Defaults to: 0. */
  RecoveryTime: number
  /**  Defaults to: 0. */
  StartRecoveryCategory: number
  /**  Defaults to: 0. */
  StartRecoveryTime: number
}

export interface SpellCustomAttr {
  /** SpellCustomAttributes Defaults to: 0. */
  attributes: number
  /** spell id Defaults to: 0. */
  spell_id: number
}

export interface SpellDbc {
  /**  Defaults to: 0. */
  ActiveIconID: number
  /**  Defaults to: 0. */
  Attributes: number
  /**  Defaults to: 0. */
  AttributesEx: number
  /**  Defaults to: 0. */
  AttributesEx2: number
  /**  Defaults to: 0. */
  AttributesEx3: number
  /**  Defaults to: 0. */
  AttributesEx4: number
  /**  Defaults to: 0. */
  AttributesEx5: number
  /**  Defaults to: 0. */
  AttributesEx6: number
  /**  Defaults to: 0. */
  AttributesEx7: number
  AuraDescription_Lang_deDE?: string | null
  AuraDescription_Lang_enCN?: string | null
  AuraDescription_Lang_enGB?: string | null
  AuraDescription_Lang_enTW?: string | null
  AuraDescription_Lang_enUS?: string | null
  AuraDescription_Lang_esES?: string | null
  AuraDescription_Lang_esMX?: string | null
  AuraDescription_Lang_frFR?: string | null
  AuraDescription_Lang_itIT?: string | null
  AuraDescription_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  AuraDescription_Lang_Mask: number
  AuraDescription_Lang_ptBR?: string | null
  AuraDescription_Lang_ptPT?: string | null
  AuraDescription_Lang_ruRU?: string | null
  AuraDescription_Lang_Unk?: string | null
  AuraDescription_Lang_zhCN?: string | null
  AuraDescription_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  AuraInterruptFlags: number
  /**  Defaults to: 0. */
  BaseLevel: number
  /**  Defaults to: 0. */
  CasterAuraSpell: number
  /**  Defaults to: 0. */
  CasterAuraState: number
  /**  Defaults to: 0. */
  CastingTimeIndex: number
  /**  Defaults to: 0. */
  Category: number
  /**  Defaults to: 0. */
  CategoryRecoveryTime: number
  /**  Defaults to: 0. */
  ChannelInterruptFlags: number
  /**  Defaults to: 0. */
  CumulativeAura: number
  /**  Defaults to: 0. */
  DefenseType: number
  Description_Lang_deDE?: string | null
  Description_Lang_enCN?: string | null
  Description_Lang_enGB?: string | null
  Description_Lang_enTW?: string | null
  Description_Lang_enUS?: string | null
  Description_Lang_esES?: string | null
  Description_Lang_esMX?: string | null
  Description_Lang_frFR?: string | null
  Description_Lang_itIT?: string | null
  Description_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Description_Lang_Mask: number
  Description_Lang_ptBR?: string | null
  Description_Lang_ptPT?: string | null
  Description_Lang_ruRU?: string | null
  Description_Lang_Unk?: string | null
  Description_Lang_zhCN?: string | null
  Description_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  DispelType: number
  /**  Defaults to: 0. */
  DurationIndex: number
  /**  Defaults to: 0. */
  Effect_1: number
  /**  Defaults to: 0. */
  Effect_2: number
  /**  Defaults to: 0. */
  Effect_3: number
  /**  Defaults to: 0. */
  EffectAura_1: number
  /**  Defaults to: 0. */
  EffectAura_2: number
  /**  Defaults to: 0. */
  EffectAura_3: number
  /**  Defaults to: 0. */
  EffectAuraPeriod_1: number
  /**  Defaults to: 0. */
  EffectAuraPeriod_2: number
  /**  Defaults to: 0. */
  EffectAuraPeriod_3: number
  /**  Defaults to: 0. */
  EffectBasePoints_1: number
  /**  Defaults to: 0. */
  EffectBasePoints_2: number
  /**  Defaults to: 0. */
  EffectBasePoints_3: number
  /**  Defaults to: 0. */
  EffectBonusMultiplier_1: number
  /**  Defaults to: 0. */
  EffectBonusMultiplier_2: number
  /**  Defaults to: 0. */
  EffectBonusMultiplier_3: number
  /**  Defaults to: 0. */
  EffectChainAmplitude_1: number
  /**  Defaults to: 0. */
  EffectChainAmplitude_2: number
  /**  Defaults to: 0. */
  EffectChainAmplitude_3: number
  /**  Defaults to: 0. */
  EffectChainTargets_1: number
  /**  Defaults to: 0. */
  EffectChainTargets_2: number
  /**  Defaults to: 0. */
  EffectChainTargets_3: number
  /**  Defaults to: 0. */
  EffectDieSides_1: number
  /**  Defaults to: 0. */
  EffectDieSides_2: number
  /**  Defaults to: 0. */
  EffectDieSides_3: number
  /**  Defaults to: 0. */
  EffectItemType_1: number
  /**  Defaults to: 0. */
  EffectItemType_2: number
  /**  Defaults to: 0. */
  EffectItemType_3: number
  /**  Defaults to: 0. */
  EffectMechanic_1: number
  /**  Defaults to: 0. */
  EffectMechanic_2: number
  /**  Defaults to: 0. */
  EffectMechanic_3: number
  /**  Defaults to: 0. */
  EffectMiscValue_1: number
  /**  Defaults to: 0. */
  EffectMiscValue_2: number
  /**  Defaults to: 0. */
  EffectMiscValue_3: number
  /**  Defaults to: 0. */
  EffectMiscValueB_1: number
  /**  Defaults to: 0. */
  EffectMiscValueB_2: number
  /**  Defaults to: 0. */
  EffectMiscValueB_3: number
  /**  Defaults to: 0. */
  EffectMultipleValue_1: number
  /**  Defaults to: 0. */
  EffectMultipleValue_2: number
  /**  Defaults to: 0. */
  EffectMultipleValue_3: number
  /**  Defaults to: 0. */
  EffectPointsPerCombo_1: number
  /**  Defaults to: 0. */
  EffectPointsPerCombo_2: number
  /**  Defaults to: 0. */
  EffectPointsPerCombo_3: number
  /**  Defaults to: 0. */
  EffectRadiusIndex_1: number
  /**  Defaults to: 0. */
  EffectRadiusIndex_2: number
  /**  Defaults to: 0. */
  EffectRadiusIndex_3: number
  /**  Defaults to: 0. */
  EffectRealPointsPerLevel_1: number
  /**  Defaults to: 0. */
  EffectRealPointsPerLevel_2: number
  /**  Defaults to: 0. */
  EffectRealPointsPerLevel_3: number
  /**  Defaults to: 0. */
  EffectSpellClassMaskA_1: number
  /**  Defaults to: 0. */
  EffectSpellClassMaskA_2: number
  /**  Defaults to: 0. */
  EffectSpellClassMaskA_3: number
  /**  Defaults to: 0. */
  EffectSpellClassMaskB_1: number
  /**  Defaults to: 0. */
  EffectSpellClassMaskB_2: number
  /**  Defaults to: 0. */
  EffectSpellClassMaskB_3: number
  /**  Defaults to: 0. */
  EffectSpellClassMaskC_1: number
  /**  Defaults to: 0. */
  EffectSpellClassMaskC_2: number
  /**  Defaults to: 0. */
  EffectSpellClassMaskC_3: number
  /**  Defaults to: 0. */
  EffectTriggerSpell_1: number
  /**  Defaults to: 0. */
  EffectTriggerSpell_2: number
  /**  Defaults to: 0. */
  EffectTriggerSpell_3: number
  /**  Defaults to: 0. */
  EquippedItemClass: number
  /**  Defaults to: 0. */
  EquippedItemInvTypes: number
  /**  Defaults to: 0. */
  EquippedItemSubclass: number
  /**  Defaults to: 0. */
  ExcludeCasterAuraSpell: number
  /**  Defaults to: 0. */
  ExcludeCasterAuraState: number
  /**  Defaults to: 0. */
  ExcludeTargetAuraSpell: number
  /**  Defaults to: 0. */
  ExcludeTargetAuraState: number
  /**  Defaults to: 0. */
  FacingCasterFlags: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  ImplicitTargetA_1: number
  /**  Defaults to: 0. */
  ImplicitTargetA_2: number
  /**  Defaults to: 0. */
  ImplicitTargetA_3: number
  /**  Defaults to: 0. */
  ImplicitTargetB_1: number
  /**  Defaults to: 0. */
  ImplicitTargetB_2: number
  /**  Defaults to: 0. */
  ImplicitTargetB_3: number
  /**  Defaults to: 0. */
  InterruptFlags: number
  /**  Defaults to: 0. */
  ManaCost: number
  /**  Defaults to: 0. */
  ManaCostPct: number
  /**  Defaults to: 0. */
  ManaCostPerLevel: number
  /**  Defaults to: 0. */
  ManaPerSecond: number
  /**  Defaults to: 0. */
  ManaPerSecondPerLevel: number
  /**  Defaults to: 0. */
  MaxLevel: number
  /**  Defaults to: 0. */
  MaxTargetLevel: number
  /**  Defaults to: 0. */
  MaxTargets: number
  /**  Defaults to: 0. */
  Mechanic: number
  /**  Defaults to: 0. */
  MinFactionID: number
  /**  Defaults to: 0. */
  MinReputation: number
  /**  Defaults to: 0. */
  ModalNextSpell: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
  NameSubtext_Lang_deDE?: string | null
  NameSubtext_Lang_enCN?: string | null
  NameSubtext_Lang_enGB?: string | null
  NameSubtext_Lang_enTW?: string | null
  NameSubtext_Lang_enUS?: string | null
  NameSubtext_Lang_esES?: string | null
  NameSubtext_Lang_esMX?: string | null
  NameSubtext_Lang_frFR?: string | null
  NameSubtext_Lang_itIT?: string | null
  NameSubtext_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  NameSubtext_Lang_Mask: number
  NameSubtext_Lang_ptBR?: string | null
  NameSubtext_Lang_ptPT?: string | null
  NameSubtext_Lang_ruRU?: string | null
  NameSubtext_Lang_Unk?: string | null
  NameSubtext_Lang_zhCN?: string | null
  NameSubtext_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  PowerDisplayID: number
  /**  Defaults to: 0. */
  PowerType: number
  /**  Defaults to: 0. */
  PreventionType: number
  /**  Defaults to: 0. */
  ProcChance: number
  /**  Defaults to: 0. */
  ProcCharges: number
  /**  Defaults to: 0. */
  ProcTypeMask: number
  /**  Defaults to: 0. */
  RangeIndex: number
  /**  Defaults to: 0. */
  Reagent_1: number
  /**  Defaults to: 0. */
  Reagent_2: number
  /**  Defaults to: 0. */
  Reagent_3: number
  /**  Defaults to: 0. */
  Reagent_4: number
  /**  Defaults to: 0. */
  Reagent_5: number
  /**  Defaults to: 0. */
  Reagent_6: number
  /**  Defaults to: 0. */
  Reagent_7: number
  /**  Defaults to: 0. */
  Reagent_8: number
  /**  Defaults to: 0. */
  ReagentCount_1: number
  /**  Defaults to: 0. */
  ReagentCount_2: number
  /**  Defaults to: 0. */
  ReagentCount_3: number
  /**  Defaults to: 0. */
  ReagentCount_4: number
  /**  Defaults to: 0. */
  ReagentCount_5: number
  /**  Defaults to: 0. */
  ReagentCount_6: number
  /**  Defaults to: 0. */
  ReagentCount_7: number
  /**  Defaults to: 0. */
  ReagentCount_8: number
  /**  Defaults to: 0. */
  RecoveryTime: number
  /**  Defaults to: 0. */
  RequiredAreasID: number
  /**  Defaults to: 0. */
  RequiredAuraVision: number
  /**  Defaults to: 0. */
  RequiredTotemCategoryID_1: number
  /**  Defaults to: 0. */
  RequiredTotemCategoryID_2: number
  /**  Defaults to: 0. */
  RequiresSpellFocus: number
  /**  Defaults to: 0. */
  RuneCostID: number
  /**  Defaults to: 0. */
  SchoolMask: number
  /**  Defaults to: 0. */
  ShapeshiftExclude: number
  /**  Defaults to: 0. */
  ShapeshiftMask: number
  /**  Defaults to: 0. */
  Speed: number
  /**  Defaults to: 0. */
  SpellClassMask_1: number
  /**  Defaults to: 0. */
  SpellClassMask_2: number
  /**  Defaults to: 0. */
  SpellClassMask_3: number
  /**  Defaults to: 0. */
  SpellClassSet: number
  /**  Defaults to: 0. */
  SpellDescriptionVariableID: number
  /**  Defaults to: 0. */
  SpellDifficultyID: number
  /**  Defaults to: 0. */
  SpellIconID: number
  /**  Defaults to: 0. */
  SpellLevel: number
  /**  Defaults to: 0. */
  SpellMissileID: number
  /**  Defaults to: 0. */
  SpellPriority: number
  /**  Defaults to: 0. */
  SpellVisualID_1: number
  /**  Defaults to: 0. */
  SpellVisualID_2: number
  /**  Defaults to: 0. */
  StanceBarOrder: number
  /**  Defaults to: 0. */
  StartRecoveryCategory: number
  /**  Defaults to: 0. */
  StartRecoveryTime: number
  /**  Defaults to: 0. */
  TargetAuraSpell: number
  /**  Defaults to: 0. */
  TargetAuraState: number
  /**  Defaults to: 0. */
  TargetCreatureType: number
  /**  Defaults to: 0. */
  Targets: number
  /**  Defaults to: 0. */
  Totem_1: number
  /**  Defaults to: 0. */
  Totem_2: number
  /**  Defaults to: 0. */
  unk_320_2: number
  /**  Defaults to: 0. */
  unk_320_3: number
}

export interface SpellEnchantProcData {
  /**  Defaults to: 0. */
  attributeMask: number
  /**  Defaults to: 0. */
  customChance: number
  entry: number
  /**  Defaults to: 0. */
  PPMChance: number
  /**  Defaults to: 0. */
  procEx: number
}

export interface SpellGroup {
  /**  Defaults to: 0. */
  id: number
  /**  Defaults to: 0. */
  special_flag: number
  /**  Defaults to: 0. */
  spell_id: number
}

export interface SpellGroupStackRules {
  description: string
  /**  Defaults to: 0. */
  group_id: number
  /**  Defaults to: 0. */
  stack_rule: number
}

export interface SpellLinkedSpell {
  comment: string
  /**  Defaults to: 0. */
  spell_effect: number
  spell_trigger: number
  /**  Defaults to: 0. */
  type: number
}

export interface SpellLootTemplate {
  /**  Defaults to: 100. */
  Chance: number
  Comment?: string | null
  /**  Defaults to: 0. */
  Entry: number
  /**  Defaults to: 0. */
  GroupId: number
  /**  Defaults to: 0. */
  Item: number
  /**  Defaults to: 1. */
  LootMode: number
  /**  Defaults to: 1. */
  MaxCount: number
  /**  Defaults to: 1. */
  MinCount: number
  /**  Defaults to: 0. */
  QuestRequired: number
  /**  Defaults to: 0. */
  Reference: number
}

export interface SpellMixology {
  entry: number
  /** bonus multiplier Defaults to: 30. */
  pctMod: number
}

export interface SpellPetAuras {
  /** pet aura id  */
  aura: number
  /**  Defaults to: 0. */
  effectId: number
  /** pet id; 0 = all Defaults to: 0. */
  pet: number
  /** dummy spell id  */
  spell: number
}

export interface SpellProc {
  /**  Defaults to: 0. */
  AttributesMask: number
  /**  Defaults to: 0. */
  Chance: number
  /**  Defaults to: 0. */
  Charges: number
  /**  Defaults to: 0. */
  Cooldown: number
  /**  Defaults to: 0. */
  HitMask: number
  /**  Defaults to: 0. */
  ProcFlags: number
  /**  Defaults to: 0. */
  ProcsPerMinute: number
  /**  Defaults to: 0. */
  SchoolMask: number
  /**  Defaults to: 0. */
  SpellFamilyMask0: number
  /**  Defaults to: 0. */
  SpellFamilyMask1: number
  /**  Defaults to: 0. */
  SpellFamilyMask2: number
  /**  Defaults to: 0. */
  SpellFamilyName: number
  /**  Defaults to: 0. */
  SpellId: number
  /**  Defaults to: 0. */
  SpellPhaseMask: number
  /**  Defaults to: 0. */
  SpellTypeMask: number
}

export interface SpellProcEvent {
  /**  Defaults to: 0. */
  Cooldown: number
  /**  Defaults to: 0. */
  CustomChance: number
  /**  Defaults to: 0. */
  entry: number
  /**  Defaults to: 0. */
  ppmRate: number
  /**  Defaults to: 0. */
  procEx: number
  /**  Defaults to: 0. */
  procFlags: number
  /**  Defaults to: 0. */
  procPhase: number
  /**  Defaults to: 0. */
  SchoolMask: number
  /**  Defaults to: 0. */
  SpellFamilyMask0: number
  /**  Defaults to: 0. */
  SpellFamilyMask1: number
  /**  Defaults to: 0. */
  SpellFamilyMask2: number
  /**  Defaults to: 0. */
  SpellFamilyName: number
}

export interface SpellRanks {
  /**  Defaults to: 0. */
  first_spell_id: number
  /**  Defaults to: 0. */
  rank: number
  /**  Defaults to: 0. */
  spell_id: number
}

export interface SpellRequired {
  /**  Defaults to: 0. */
  req_spell: number
  /**  Defaults to: 0. */
  spell_id: number
}

export interface SpellScriptNames {
  ScriptName: string
  spell_id: number
}

export interface SpellScripts {
  /**  Defaults to: 0. */
  command: number
  /**  Defaults to: 0. */
  dataint: number
  /**  Defaults to: 0. */
  datalong: number
  /**  Defaults to: 0. */
  datalong2: number
  /**  Defaults to: 0. */
  delay: number
  /**  Defaults to: 0. */
  effIndex: number
  /**  Defaults to: 0. */
  id: number
  /**  Defaults to: 0. */
  o: number
  /**  Defaults to: 0. */
  x: number
  /**  Defaults to: 0. */
  y: number
  /**  Defaults to: 0. */
  z: number
}

export interface SpellTargetPosition {
  /**  Defaults to: 0. */
  EffectIndex: number
  /** Identifier Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  MapID: number
  /**  Defaults to: 0. */
  Orientation: number
  /**  Defaults to: 0. */
  PositionX: number
  /**  Defaults to: 0. */
  PositionY: number
  /**  Defaults to: 0. */
  PositionZ: number
  VerifiedBuild?: number | null
}

export interface SpellThreat {
  /** additional threat bonus from attack power Defaults to: 0. */
  apPctMod: number
  entry: number
  flatMod?: number | null
  /** threat multiplier for damage/healing Defaults to: 1. */
  pctMod: number
}

export interface SpellcasttimesDbc {
  /**  Defaults to: 0. */
  Base: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Minimum: number
  /**  Defaults to: 0. */
  PerLevel: number
}

export interface SpellcategoryDbc {
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
}

export interface SpelldifficultyDbc {
  /**  Defaults to: 0. */
  DifficultySpellID_1: number
  /**  Defaults to: 0. */
  DifficultySpellID_2: number
  /**  Defaults to: 0. */
  DifficultySpellID_3: number
  /**  Defaults to: 0. */
  DifficultySpellID_4: number
  /**  Defaults to: 0. */
  ID: number
}

export interface SpelldurationDbc {
  /**  Defaults to: 0. */
  Duration: number
  /**  Defaults to: 0. */
  DurationPerLevel: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  MaxDuration: number
}

export interface SpellfocusobjectDbc {
  /**  Defaults to: 0. */
  ID: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
}

export interface SpellitemenchantmentDbc {
  /**  Defaults to: 0. */
  Charges: number
  /**  Defaults to: 0. */
  Condition_Id: number
  /**  Defaults to: 0. */
  Effect_1: number
  /**  Defaults to: 0. */
  Effect_2: number
  /**  Defaults to: 0. */
  Effect_3: number
  /**  Defaults to: 0. */
  EffectArg_1: number
  /**  Defaults to: 0. */
  EffectArg_2: number
  /**  Defaults to: 0. */
  EffectArg_3: number
  /**  Defaults to: 0. */
  EffectPointsMax_1: number
  /**  Defaults to: 0. */
  EffectPointsMax_2: number
  /**  Defaults to: 0. */
  EffectPointsMax_3: number
  /**  Defaults to: 0. */
  EffectPointsMin_1: number
  /**  Defaults to: 0. */
  EffectPointsMin_2: number
  /**  Defaults to: 0. */
  EffectPointsMin_3: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  ItemVisual: number
  /**  Defaults to: 0. */
  MinLevel: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  RequiredSkillID: number
  /**  Defaults to: 0. */
  RequiredSkillRank: number
  /**  Defaults to: 0. */
  Src_ItemID: number
}

export interface SpellitemenchantmentconditionDbc {
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Logic_1: number
  /**  Defaults to: 0. */
  Logic_2: number
  /**  Defaults to: 0. */
  Logic_3: number
  /**  Defaults to: 0. */
  Logic_4: number
  /**  Defaults to: 0. */
  Logic_5: number
  /**  Defaults to: 0. */
  Lt_Operand_1: number
  /**  Defaults to: 0. */
  Lt_Operand_2: number
  /**  Defaults to: 0. */
  Lt_Operand_3: number
  /**  Defaults to: 0. */
  Lt_Operand_4: number
  /**  Defaults to: 0. */
  Lt_Operand_5: number
  /**  Defaults to: 0. */
  Lt_OperandType_1: number
  /**  Defaults to: 0. */
  Lt_OperandType_2: number
  /**  Defaults to: 0. */
  Lt_OperandType_3: number
  /**  Defaults to: 0. */
  Lt_OperandType_4: number
  /**  Defaults to: 0. */
  Lt_OperandType_5: number
  /**  Defaults to: 0. */
  Operator_1: number
  /**  Defaults to: 0. */
  Operator_2: number
  /**  Defaults to: 0. */
  Operator_3: number
  /**  Defaults to: 0. */
  Operator_4: number
  /**  Defaults to: 0. */
  Operator_5: number
  /**  Defaults to: 0. */
  Rt_Operand_1: number
  /**  Defaults to: 0. */
  Rt_Operand_2: number
  /**  Defaults to: 0. */
  Rt_Operand_3: number
  /**  Defaults to: 0. */
  Rt_Operand_4: number
  /**  Defaults to: 0. */
  Rt_Operand_5: number
  /**  Defaults to: 0. */
  Rt_OperandType_1: number
  /**  Defaults to: 0. */
  Rt_OperandType_2: number
  /**  Defaults to: 0. */
  Rt_OperandType_3: number
  /**  Defaults to: 0. */
  Rt_OperandType_4: number
  /**  Defaults to: 0. */
  Rt_OperandType_5: number
}

export interface SpellradiusDbc {
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Radius: number
  /**  Defaults to: 0. */
  RadiusMax: number
  /**  Defaults to: 0. */
  RadiusPerLevel: number
}

export interface SpellrangeDbc {
  DisplayName_Lang_deDE?: string | null
  DisplayName_Lang_enCN?: string | null
  DisplayName_Lang_enGB?: string | null
  DisplayName_Lang_enTW?: string | null
  DisplayName_Lang_enUS?: string | null
  DisplayName_Lang_esES?: string | null
  DisplayName_Lang_esMX?: string | null
  DisplayName_Lang_frFR?: string | null
  DisplayName_Lang_itIT?: string | null
  DisplayName_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  DisplayName_Lang_Mask: number
  DisplayName_Lang_ptBR?: string | null
  DisplayName_Lang_ptPT?: string | null
  DisplayName_Lang_ruRU?: string | null
  DisplayName_Lang_Unk?: string | null
  DisplayName_Lang_zhCN?: string | null
  DisplayName_Lang_zhTW?: string | null
  DisplayNameShort_Lang_deDE?: string | null
  DisplayNameShort_Lang_enCN?: string | null
  DisplayNameShort_Lang_enGB?: string | null
  DisplayNameShort_Lang_enTW?: string | null
  DisplayNameShort_Lang_enUS?: string | null
  DisplayNameShort_Lang_esES?: string | null
  DisplayNameShort_Lang_esMX?: string | null
  DisplayNameShort_Lang_frFR?: string | null
  DisplayNameShort_Lang_itIT?: string | null
  DisplayNameShort_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  DisplayNameShort_Lang_Mask: number
  DisplayNameShort_Lang_ptBR?: string | null
  DisplayNameShort_Lang_ptPT?: string | null
  DisplayNameShort_Lang_ruRU?: string | null
  DisplayNameShort_Lang_Unk?: string | null
  DisplayNameShort_Lang_zhCN?: string | null
  DisplayNameShort_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  RangeMax_1: number
  /**  Defaults to: 0. */
  RangeMax_2: number
  /**  Defaults to: 0. */
  RangeMin_1: number
  /**  Defaults to: 0. */
  RangeMin_2: number
}

export interface SpellrunecostDbc {
  /**  Defaults to: 0. */
  Blood: number
  /**  Defaults to: 0. */
  Frost: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  RunicPower: number
  /**  Defaults to: 0. */
  Unholy: number
}

export interface SpellshapeshiftformDbc {
  /**  Defaults to: 0. */
  AttackIconID: number
  /**  Defaults to: 0. */
  BonusActionBar: number
  /**  Defaults to: 0. */
  CombatRoundTime: number
  /**  Defaults to: 0. */
  CreatureDisplayID_1: number
  /**  Defaults to: 0. */
  CreatureDisplayID_2: number
  /**  Defaults to: 0. */
  CreatureDisplayID_3: number
  /**  Defaults to: 0. */
  CreatureDisplayID_4: number
  /**  Defaults to: 0. */
  CreatureType: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  PresetSpellID_1: number
  /**  Defaults to: 0. */
  PresetSpellID_2: number
  /**  Defaults to: 0. */
  PresetSpellID_3: number
  /**  Defaults to: 0. */
  PresetSpellID_4: number
  /**  Defaults to: 0. */
  PresetSpellID_5: number
  /**  Defaults to: 0. */
  PresetSpellID_6: number
  /**  Defaults to: 0. */
  PresetSpellID_7: number
  /**  Defaults to: 0. */
  PresetSpellID_8: number
}

export interface SpellvisualDbc {
  /**  Defaults to: 0. */
  AnimEventSoundID: number
  /**  Defaults to: 0. */
  CasterImpactKit: number
  /**  Defaults to: 0. */
  CastKit: number
  /**  Defaults to: 0. */
  ChannelKit: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  HasMissile: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  ImpactAreaKit: number
  /**  Defaults to: 0. */
  ImpactKit: number
  /**  Defaults to: 0. */
  InstantAreaKit: number
  /**  Defaults to: 0. */
  MissileAttachment: number
  /**  Defaults to: 0. */
  MissileCastOffsetX: number
  /**  Defaults to: 0. */
  MissileCastOffsetY: number
  /**  Defaults to: 0. */
  MissileCastOffsetZ: number
  /**  Defaults to: 0. */
  MissileDestinationAttachment: number
  /**  Defaults to: 0. */
  MissileFollowGroundApproach: number
  /**  Defaults to: 0. */
  MissileFollowGroundDropSpeed: number
  /**  Defaults to: 0. */
  MissileFollowGroundFlags: number
  /**  Defaults to: 0. */
  MissileFollowGroundHeight: number
  /**  Defaults to: 0. */
  MissileImpactOffsetX: number
  /**  Defaults to: 0. */
  MissileImpactOffsetY: number
  /**  Defaults to: 0. */
  MissileImpactOffsetZ: number
  /**  Defaults to: 0. */
  MissileModel: number
  /**  Defaults to: 0. */
  MissileMotion: number
  /**  Defaults to: 0. */
  MissilePathType: number
  /**  Defaults to: 0. */
  MissileSound: number
  /**  Defaults to: 0. */
  MissileTargetingKit: number
  /**  Defaults to: 0. */
  PersistentAreaKit: number
  /**  Defaults to: 0. */
  PrecastKit: number
  /**  Defaults to: 0. */
  StateDoneKit: number
  /**  Defaults to: 0. */
  StateKit: number
  /**  Defaults to: 0. */
  TargetImpactKit: number
}

export interface StableslotpricesDbc {
  /**  Defaults to: 0. */
  Cost: number
  /**  Defaults to: 0. */
  ID: number
}

export interface SummonpropertiesDbc {
  /**  Defaults to: 0. */
  Control: number
  /**  Defaults to: 0. */
  Faction: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  Slot: number
  /**  Defaults to: 0. */
  Title: number
}

export interface TalentDbc {
  /**  Defaults to: 0. */
  CategoryMask_1: number
  /**  Defaults to: 0. */
  CategoryMask_2: number
  /**  Defaults to: 0. */
  ColumnIndex: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  PrereqRank_1: number
  /**  Defaults to: 0. */
  PrereqRank_2: number
  /**  Defaults to: 0. */
  PrereqRank_3: number
  /**  Defaults to: 0. */
  PrereqTalent_1: number
  /**  Defaults to: 0. */
  PrereqTalent_2: number
  /**  Defaults to: 0. */
  PrereqTalent_3: number
  /**  Defaults to: 0. */
  RequiredSpellID: number
  /**  Defaults to: 0. */
  SpellRank_1: number
  /**  Defaults to: 0. */
  SpellRank_2: number
  /**  Defaults to: 0. */
  SpellRank_3: number
  /**  Defaults to: 0. */
  SpellRank_4: number
  /**  Defaults to: 0. */
  SpellRank_5: number
  /**  Defaults to: 0. */
  SpellRank_6: number
  /**  Defaults to: 0. */
  SpellRank_7: number
  /**  Defaults to: 0. */
  SpellRank_8: number
  /**  Defaults to: 0. */
  SpellRank_9: number
  /**  Defaults to: 0. */
  TabID: number
  /**  Defaults to: 0. */
  TierID: number
}

export interface TalenttabDbc {
  BackgroundFile?: string | null
  /**  Defaults to: 0. */
  ClassMask: number
  /**  Defaults to: 0. */
  ID: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  OrderIndex: number
  /**  Defaults to: 0. */
  PetTalentMask: number
  /**  Defaults to: 0. */
  RaceMask: number
  /**  Defaults to: 0. */
  SpellIconID: number
}

export interface TaxinodesDbc {
  /**  Defaults to: 0. */
  ContinentID: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  MountCreatureID_1: number
  /**  Defaults to: 0. */
  MountCreatureID_2: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  X: number
  /**  Defaults to: 0. */
  Y: number
  /**  Defaults to: 0. */
  Z: number
}

export interface TaxipathDbc {
  /**  Defaults to: 0. */
  Cost: number
  /**  Defaults to: 0. */
  FromTaxiNode: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  ToTaxiNode: number
}

export interface TaxipathnodeDbc {
  /**  Defaults to: 0. */
  ArrivalEventID: number
  /**  Defaults to: 0. */
  ContinentID: number
  /**  Defaults to: 0. */
  Delay: number
  /**  Defaults to: 0. */
  DepartureEventID: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  LocX: number
  /**  Defaults to: 0. */
  LocY: number
  /**  Defaults to: 0. */
  LocZ: number
  /**  Defaults to: 0. */
  NodeIndex: number
  /**  Defaults to: 0. */
  PathID: number
}

export interface TeamcontributionpointsDbc {
  /**  Defaults to: 0. */
  Data: number
  /**  Defaults to: 0. */
  ID: number
}

export interface TotemcategoryDbc {
  /**  Defaults to: 0. */
  ID: number
  Name_Lang_deDE?: string | null
  Name_Lang_enCN?: string | null
  Name_Lang_enGB?: string | null
  Name_Lang_enTW?: string | null
  Name_Lang_enUS?: string | null
  Name_Lang_esES?: string | null
  Name_Lang_esMX?: string | null
  Name_Lang_frFR?: string | null
  Name_Lang_itIT?: string | null
  Name_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  Name_Lang_Mask: number
  Name_Lang_ptBR?: string | null
  Name_Lang_ptPT?: string | null
  Name_Lang_ruRU?: string | null
  Name_Lang_Unk?: string | null
  Name_Lang_zhCN?: string | null
  Name_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  TotemCategoryMask: number
  /**  Defaults to: 0. */
  TotemCategoryType: number
}

export interface TransportanimationDbc {
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  PosX: number
  /**  Defaults to: 0. */
  PosY: number
  /**  Defaults to: 0. */
  PosZ: number
  /**  Defaults to: 0. */
  SequenceID: number
  /**  Defaults to: 0. */
  TimeIndex: number
  /**  Defaults to: 0. */
  TransportID: number
}

export interface TransportrotationDbc {
  /**  Defaults to: 0. */
  GameObjectsID: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  RotW: number
  /**  Defaults to: 0. */
  RotX: number
  /**  Defaults to: 0. */
  RotY: number
  /**  Defaults to: 0. */
  RotZ: number
  /**  Defaults to: 0. */
  TimeIndex: number
}

export interface Transports {
  /**  Defaults to: 0. */
  entry: number
  guid: number
  name?: string | null
  ScriptName: string
}

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

export interface UpdatesInclude {
  /** directory to include. $ means relative to the source directory.  */
  path: string
  /** defines if the directory contains released or archived updates. Defaults to: RELEASED. */
  state: 'RELEASED' | 'ARCHIVED' | 'CUSTOM'
}

export interface VehicleAccessory {
  /**  Defaults to: 0. */
  accessory_entry: number
  description: string
  /**  Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  minion: number
  /**  Defaults to: 0. */
  seat_id: number
  /** timer, only relevant for certain summontypes Defaults to: 30000. */
  summontimer: number
  /** see enum TempSummonType Defaults to: 6. */
  summontype: number
}

export interface VehicleDbc {
  /**  Defaults to: 0. */
  CameraFadeDistScalarMax: number
  /**  Defaults to: 0. */
  CameraFadeDistScalarMin: number
  /**  Defaults to: 0. */
  CameraPitchOffset: number
  /**  Defaults to: 0. */
  CameraYawOffset: number
  /**  Defaults to: 0. */
  FacingLimitLeft: number
  /**  Defaults to: 0. */
  FacingLimitRight: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  MouseLookOffsetPitch: number
  /**  Defaults to: 0. */
  MsslTrgtArcRepeat: number
  /**  Defaults to: 0. */
  MsslTrgtArcSpeed: number
  MsslTrgtArcTexture?: string | null
  /**  Defaults to: 0. */
  MsslTrgtArcWidth: number
  /**  Defaults to: 0. */
  MsslTrgtEndOpacity: number
  MsslTrgtImpactModel_1?: string | null
  MsslTrgtImpactModel_2?: string | null
  /**  Defaults to: 0. */
  MsslTrgtImpactRadius_1: number
  /**  Defaults to: 0. */
  MsslTrgtImpactRadius_2: number
  /**  Defaults to: 0. */
  MsslTrgtImpactTexRadius: number
  MsslTrgtImpactTexture?: string | null
  /**  Defaults to: 0. */
  MsslTrgtMouseLingering: number
  /**  Defaults to: 0. */
  MsslTrgtPitchLingering: number
  /**  Defaults to: 0. */
  MsslTrgtTurnLingering: number
  /**  Defaults to: 0. */
  PitchMax: number
  /**  Defaults to: 0. */
  PitchMin: number
  /**  Defaults to: 0. */
  PitchSpeed: number
  /**  Defaults to: 0. */
  PowerDisplayID_1: number
  /**  Defaults to: 0. */
  PowerDisplayID_2: number
  /**  Defaults to: 0. */
  PowerDisplayID_3: number
  /**  Defaults to: 0. */
  SeatID_1: number
  /**  Defaults to: 0. */
  SeatID_2: number
  /**  Defaults to: 0. */
  SeatID_3: number
  /**  Defaults to: 0. */
  SeatID_4: number
  /**  Defaults to: 0. */
  SeatID_5: number
  /**  Defaults to: 0. */
  SeatID_6: number
  /**  Defaults to: 0. */
  SeatID_7: number
  /**  Defaults to: 0. */
  SeatID_8: number
  /**  Defaults to: 0. */
  TurnSpeed: number
  /**  Defaults to: 0. */
  UilocomotionType: number
  /**  Defaults to: 0. */
  VehicleUIIndicatorID: number
}

export interface VehicleSeatAddon {
  /**  Defaults to: 0. */
  ExitParamO?: number | null
  /**  Defaults to: 0. */
  ExitParamValue?: number | null
  /**  Defaults to: 0. */
  ExitParamX?: number | null
  /**  Defaults to: 0. */
  ExitParamY?: number | null
  /**  Defaults to: 0. */
  ExitParamZ?: number | null
  /** VehicleSeatEntry.dbc identifier  */
  SeatEntry: number
  /** Seat Orientation override value Defaults to: 0. */
  SeatOrientation?: number | null
}

export interface VehicleTemplateAccessory {
  /**  Defaults to: 0. */
  accessory_entry: number
  description: string
  /**  Defaults to: 0. */
  entry: number
  /**  Defaults to: 0. */
  minion: number
  /**  Defaults to: 0. */
  seat_id: number
  /** timer, only relevant for certain summontypes Defaults to: 30000. */
  summontimer: number
  /** see enum TempSummonType Defaults to: 6. */
  summontype: number
}

export interface VehicleseatDbc {
  /**  Defaults to: 0. */
  AttachmentID: number
  /**  Defaults to: 0. */
  AttachmentOffsetX: number
  /**  Defaults to: 0. */
  AttachmentOffsetY: number
  /**  Defaults to: 0. */
  AttachmentOffsetZ: number
  /**  Defaults to: 0. */
  CameraEnteringDelay: number
  /**  Defaults to: 0. */
  CameraEnteringDuration: number
  /**  Defaults to: 0. */
  CameraEnteringZoom: number
  /**  Defaults to: 0. */
  CameraExitingDelay: number
  /**  Defaults to: 0. */
  CameraExitingDuration: number
  /**  Defaults to: 0. */
  CameraFacingChaseRate: number
  /**  Defaults to: 0. */
  CameraOffsetX: number
  /**  Defaults to: 0. */
  CameraOffsetY: number
  /**  Defaults to: 0. */
  CameraOffsetZ: number
  /**  Defaults to: 0. */
  CameraPosChaseRate: number
  /**  Defaults to: 0. */
  CameraSeatZoomMax: number
  /**  Defaults to: 0. */
  CameraSeatZoomMin: number
  /**  Defaults to: 0. */
  EnterAnimLoop: number
  /**  Defaults to: 0. */
  EnterAnimStart: number
  /**  Defaults to: 0. */
  EnterGravity: number
  /**  Defaults to: 0. */
  EnterMaxArcHeight: number
  /**  Defaults to: 0. */
  EnterMaxDuration: number
  /**  Defaults to: 0. */
  EnterMinArcHeight: number
  /**  Defaults to: 0. */
  EnterMinDuration: number
  /**  Defaults to: 0. */
  EnterPreDelay: number
  /**  Defaults to: 0. */
  EnterSpeed: number
  /**  Defaults to: 0. */
  EnterUISoundID: number
  /**  Defaults to: 0. */
  ExitAnimEnd: number
  /**  Defaults to: 0. */
  ExitAnimLoop: number
  /**  Defaults to: 0. */
  ExitAnimStart: number
  /**  Defaults to: 0. */
  ExitGravity: number
  /**  Defaults to: 0. */
  ExitMaxArcHeight: number
  /**  Defaults to: 0. */
  ExitMaxDuration: number
  /**  Defaults to: 0. */
  ExitMinArcHeight: number
  /**  Defaults to: 0. */
  ExitMinDuration: number
  /**  Defaults to: 0. */
  ExitPreDelay: number
  /**  Defaults to: 0. */
  ExitSpeed: number
  /**  Defaults to: 0. */
  ExitUISoundID: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  FlagsB: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  PassengerAttachmentID: number
  /**  Defaults to: 0. */
  PassengerPitch: number
  /**  Defaults to: 0. */
  PassengerRoll: number
  /**  Defaults to: 0. */
  PassengerYaw: number
  /**  Defaults to: 0. */
  RideAnimLoop: number
  /**  Defaults to: 0. */
  RideAnimStart: number
  /**  Defaults to: 0. */
  RideUpperAnimLoop: number
  /**  Defaults to: 0. */
  RideUpperAnimStart: number
  /**  Defaults to: 0. */
  UiSkin: number
  /**  Defaults to: 0. */
  VehicleAbilityDisplay: number
  /**  Defaults to: 0. */
  VehicleEnterAnim: number
  /**  Defaults to: 0. */
  VehicleEnterAnimBone: number
  /**  Defaults to: 0. */
  VehicleEnterAnimDelay: number
  /**  Defaults to: 0. */
  VehicleExitAnim: number
  /**  Defaults to: 0. */
  VehicleExitAnimBone: number
  /**  Defaults to: 0. */
  VehicleExitAnimDelay: number
  /**  Defaults to: 0. */
  VehicleRideAnimLoop: number
  /**  Defaults to: 0. */
  VehicleRideAnimLoopBone: number
}

export interface Version {
  /**  Defaults to: 0. */
  cache_id?: number | null
  core_revision?: string | null
  /** Core revision dumped at startup.  */
  core_version: string
  /** Version of world DB.  */
  db_version?: string | null
}

export interface WardenChecks {
  address?: number | null
  comment?: string | null
  data?: string | null
  id: number
  length?: number | null
  result?: string | null
  str?: string | null
  type?: number | null
}

export interface WaypointData {
  /**  Defaults to: 0. */
  action: number
  /**  Defaults to: 100. */
  action_chance: number
  /**  Defaults to: 0. */
  delay: number
  /** Creature GUID Defaults to: 0. */
  id: number
  /**  Defaults to: 0. */
  move_type: number
  orientation?: number | null
  /**  Defaults to: 0. */
  point: number
  /**  Defaults to: 0. */
  position_x: number
  /**  Defaults to: 0. */
  position_y: number
  /**  Defaults to: 0. */
  position_z: number
  /**  Defaults to: 0. */
  wpguid: number
}

export interface WaypointScripts {
  /**  Defaults to: 0. */
  command: number
  /**  Defaults to: 0. */
  dataint: number
  /**  Defaults to: 0. */
  datalong: number
  /**  Defaults to: 0. */
  datalong2: number
  /**  Defaults to: 0. */
  delay: number
  /**  Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  id: number
  /**  Defaults to: 0. */
  o: number
  /**  Defaults to: 0. */
  x: number
  /**  Defaults to: 0. */
  y: number
  /**  Defaults to: 0. */
  z: number
}

export interface Waypoints {
  /**  Defaults to: 0. */
  delay: number
  /**  Defaults to: 0. */
  entry: number
  orientation?: number | null
  point_comment?: string | null
  /**  Defaults to: 0. */
  pointid: number
  /**  Defaults to: 0. */
  position_x: number
  /**  Defaults to: 0. */
  position_y: number
  /**  Defaults to: 0. */
  position_z: number
}

export interface WmoareatableDbc {
  /**  Defaults to: 0. */
  AmbienceID: number
  AreaName_Lang_deDE?: string | null
  AreaName_Lang_enCN?: string | null
  AreaName_Lang_enGB?: string | null
  AreaName_Lang_enTW?: string | null
  AreaName_Lang_enUS?: string | null
  AreaName_Lang_esES?: string | null
  AreaName_Lang_esMX?: string | null
  AreaName_Lang_frFR?: string | null
  AreaName_Lang_itIT?: string | null
  AreaName_Lang_koKR?: string | null
  /**  Defaults to: 0. */
  AreaName_Lang_Mask: number
  AreaName_Lang_ptBR?: string | null
  AreaName_Lang_ptPT?: string | null
  AreaName_Lang_ruRU?: string | null
  AreaName_Lang_Unk?: string | null
  AreaName_Lang_zhCN?: string | null
  AreaName_Lang_zhTW?: string | null
  /**  Defaults to: 0. */
  AreaTableID: number
  /**  Defaults to: 0. */
  Flags: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  IntroSound: number
  /**  Defaults to: 0. */
  NameSetID: number
  /**  Defaults to: 0. */
  SoundProviderPref: number
  /**  Defaults to: 0. */
  SoundProviderPrefUnderwater: number
  /**  Defaults to: 0. */
  WMOGroupID: number
  /**  Defaults to: 0. */
  WMOID: number
  /**  Defaults to: 0. */
  ZoneMusic: number
}

export interface WorldmapareaDbc {
  /**  Defaults to: 0. */
  AreaID: number
  AreaName?: string | null
  /**  Defaults to: 0. */
  DefaultDungeonFloor: number
  /**  Defaults to: 0. */
  DisplayMapID: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  LocBottom: number
  /**  Defaults to: 0. */
  LocLeft: number
  /**  Defaults to: 0. */
  LocRight: number
  /**  Defaults to: 0. */
  LocTop: number
  /**  Defaults to: 0. */
  MapID: number
  /**  Defaults to: 0. */
  ParentWorldMapID: number
}

export interface WorldmapoverlayDbc {
  /**  Defaults to: 0. */
  AreaID_1: number
  /**  Defaults to: 0. */
  AreaID_2: number
  /**  Defaults to: 0. */
  AreaID_3: number
  /**  Defaults to: 0. */
  AreaID_4: number
  /**  Defaults to: 0. */
  HitRectBottom: number
  /**  Defaults to: 0. */
  HitRectLeft: number
  /**  Defaults to: 0. */
  HitRectRight: number
  /**  Defaults to: 0. */
  HitRectTop: number
  /**  Defaults to: 0. */
  ID: number
  /**  Defaults to: 0. */
  MapAreaID: number
  /**  Defaults to: 0. */
  MapPointX: number
  /**  Defaults to: 0. */
  MapPointY: number
  /**  Defaults to: 0. */
  OffsetX: number
  /**  Defaults to: 0. */
  OffsetY: number
  /**  Defaults to: 0. */
  TextureHeight: number
  TextureName?: string | null
  /**  Defaults to: 0. */
  TextureWidth: number
}
