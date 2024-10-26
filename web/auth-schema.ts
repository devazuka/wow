/**
 Schema Generated with mysql-schema-ts 1.9.0
*/

/**
 * Exposes all fields present in account as a typescript
 * interface.
 */
export interface Account {
  email: string
  /**  Defaults to: 2. */
  expansion: number
  /**  Defaults to: 0. */
  failed_logins: number
  /** Identifier  */
  id: number
  /**  Defaults to: CURRENT_TIMESTAMP. */
  joindate: Date
  /**  Defaults to: 127.0.0.1. */
  last_attempt_ip: string
  /**  Defaults to: 127.0.0.1. */
  last_ip: string
  last_login?: Date | null
  /**  Defaults to: 0. */
  locale: number
  /**  Defaults to: 00. */
  lock_country: string
  /**  Defaults to: 0. */
  locked: number
  muteby: string
  mutereason: string
  /**  Defaults to: 0. */
  mutetime: number
  /**  Defaults to: 0. */
  online: number
  os: string
  /**  Defaults to: 0. */
  recruiter: number
  reg_mail: string
  salt: string
  session_key?: string | null
  /**  Defaults to: 0. */
  totaltime: number
  totp_secret?: string | null
  username: string
  verifier: string
}
/**
 * Exposes all fields present in account_access as a typescript
 * interface.
 */
export interface AccountAccess {
  comment?: string | null
  gmlevel: number
  id: number
  /**  Defaults to: -1. */
  RealmID: number
}
/**
 * Exposes all fields present in account_banned as a typescript
 * interface.
 */
export interface AccountBanned {
  /**  Defaults to: 1. */
  active: number
  /**  Defaults to: 0. */
  bandate: number
  bannedby: string
  banreason: string
  /** Account id Defaults to: 0. */
  id: number
  /**  Defaults to: 0. */
  unbandate: number
}
/**
 * Exposes all fields present in account_muted as a typescript
 * interface.
 */
export interface AccountMuted {
  /** Global Unique Identifier Defaults to: 0. */
  guid: number
  /**  Defaults to: 0. */
  mutedate: number
  mutedby: string
  mutereason: string
  /**  Defaults to: 0. */
  mutetime: number
}
/**
 * Exposes all fields present in autobroadcast as a typescript
 * interface.
 */
export interface Autobroadcast {
  id: number
  /**  Defaults to: -1. */
  realmid: number
  text: string
  /**  Defaults to: 1. */
  weight?: number | null
}
/**
 * Exposes all fields present in build_info as a typescript
 * interface.
 */
export interface BuildInfo {
  bugfixVersion?: number | null
  build: number
  hotfixVersion?: string | null
  mac64AuthSeed?: string | null
  macChecksumSeed?: string | null
  majorVersion?: number | null
  minorVersion?: number | null
  win64AuthSeed?: string | null
  winAuthSeed?: string | null
  winChecksumSeed?: string | null
}
/**
 * Exposes all fields present in ip_banned as a typescript
 * interface.
 */
export interface IpBanned {
  bandate: number
  /**  Defaults to: [Console]. */
  bannedby: string
  /**  Defaults to: no reason. */
  banreason: string
  /**  Defaults to: 127.0.0.1. */
  ip: string
  unbandate: number
}
/**
 * Exposes all fields present in logs as a typescript
 * interface.
 */
export interface Logs {
  /**  Defaults to: 0. */
  level: number
  realm: number
  string_?: string | null
  time: number
  type: string
}
/**
 * Exposes all fields present in logs_ip_actions as a typescript
 * interface.
 */
export interface LogsIpActions {
  /** Account ID  */
  account_id: number
  /** Character Guid  */
  character_guid: number
  /** Allows users to add a comment  */
  comment?: string | null
  /** Unique Identifier  */
  id: number
  /**  Defaults to: 127.0.0.1. */
  ip: string
  /** Notes inserted by system  */
  systemnote?: string | null
  /** Timestamp Defaults to: CURRENT_TIMESTAMP. */
  time: Date
  type: number
  /** Unixtime  */
  unixtime: number
}
/**
 * Exposes all fields present in motd as a typescript
 * interface.
 */
export interface Motd {
  realmid: number
  text?: string | null
}
/**
 * Exposes all fields present in realmcharacters as a typescript
 * interface.
 */
export interface Realmcharacters {
  acctid: number
  /**  Defaults to: 0. */
  numchars: number
  /**  Defaults to: 0. */
  realmid: number
}
/**
 * Exposes all fields present in realmlist as a typescript
 * interface.
 */
export interface Realmlist {
  /**  Defaults to: 127.0.0.1. */
  address: string
  /**  Defaults to: 0. */
  allowedSecurityLevel: number
  /**  Defaults to: 2. */
  flag: number
  /**  Defaults to: 12340. */
  gamebuild: number
  /**  Defaults to: 0. */
  icon: number
  id: number
  /**  Defaults to: 127.0.0.1. */
  localAddress: string
  /**  Defaults to: 255.255.255.0. */
  localSubnetMask: string
  name: string
  /**  Defaults to: 0. */
  population: number
  /**  Defaults to: 8085. */
  port: number
  /**  Defaults to: 0. */
  timezone: number
}
/**
 * Exposes all fields present in secret_digest as a typescript
 * interface.
 */
export interface SecretDigest {
  digest: string
  id: number
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
 * Exposes all fields present in uptime as a typescript
 * interface.
 */
export interface Uptime {
  /**  Defaults to: 0. */
  maxplayers: number
  realmid: number
  /**  Defaults to: AzerothCore. */
  revision: string
  /**  Defaults to: 0. */
  starttime: number
  /**  Defaults to: 0. */
  uptime: number
}
