import { sql } from './db.js'
import { ac } from './soap.js'

const MAX_ACCOUNT_USERNAME_LENGTH = 17
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const getAccountByUsername = async (username) => {
  const start = Date.now()
  let attempts = -1
  while (++attempts < 10) {
    const [account] = await sql`SELECT * FROM acore_auth.account WHERE username LIKE ${username}`
    if (account) return account
    await sleep(100)
  }
  throw Error(`Created account ${username}, but it was not found in acore_auth.account`)
}

export const createAccount = async ({
  username: suggeredUsername,
  password = Math.random().toString(36).slice(2),
  gmLevel = 0,
  useExisting = false,
}) => {
  let i = -1
  let username = suggeredUsername
  let created = false
  while (++i < 20) {
    const result = await ac`account create ${username} ${password}`
    if (result.success) {
      created = true
      break
    }
    if (!result.output.message.includes('already exist')) {
      throw Error(result.output.message.trim())
    }
    if (useExisting) return getAccountByUsername(username)
    const key = i < 10 ? i.toString(36) : Math.floor(Math.random() * 999)
    username = `${suggeredUsername.slice(0, MAX_ACCOUNT_USERNAME_LENGTH - key.length)}${key}`.toLowerCase()
  }
  if (!created) {
    throw Error(`Unable to create account ${suggeredUsername}: too many username collisions`)
  }
  // TODO: use sql instead for this one
  gmLevel && (await setGmLevel(username, gmLevel))
  return getAccountByUsername(username)
}

const getUsername = async (accountIdOrName) => {
  if (typeof accountIdOrName === 'string') return accountIdOrName
  const [account] = await sql`SELECT username FROM acore_auth.account WHERE id = ${accountIdOrName}`
  return account?.username
}

export const setGmLevel = async (account, gmLevel) =>
  ac`account set gmlevel ${await getUsername(account)} ${gmLevel} -1`

export const setPassword = async (account, password) => 
  ac`account set password ${await getUsername(account)} ${password} ${password}`
