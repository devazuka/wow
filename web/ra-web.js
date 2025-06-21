import { sql } from './db.js'
import { ac } from './soap.js'

export const createAccount = async ({
  username: suggeredUsername,
  password = Math.random().toString(36).slice(2),
  gmLevel = 0,
}) => {
  let i = -1
  let username = suggeredUsername
  while (++i < 20) {
    const result = await ac`account create ${username} ${password}`
    if (result.success) break
    if (!result.output.message.includes('already exist')) {
      throw Error(result.output.message.trim())
    }
    const key = i < 10 ? i.toString(36) : Math.floor(Math.random() * 999)
    username = `${suggeredUsername}${key}`.toUpperCase()
  }
  // TODO: use sql instead for this one
  gmLevel && (await setGmLevel(username, gmLevel))
  const [account] = await sql`SELECT * FROM acore_auth.account WHERE username = ${username}`
  return account
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
