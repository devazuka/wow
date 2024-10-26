import { assertEquals as eq } from "jsr:@std/assert/equals"

const t = setTimeout(() => {
  console.log('unable to init remote console: timeout (10s)')
  Deno.exit(1)
}, 10000)

const password = Deno.env.get('PASSWORD').slice(0, 16)
const hostname = Deno.env.get('HOSTNAME') || 'localhost'

const conn = await Deno.connect({ hostname, port: '3443' })
const decoder = new TextDecoder()
const encoder = new TextEncoder()
const buf = new Uint8Array(15)
const send = async (str) => {
  const encoded = encoder.encode(str + '\r\n')
  const len = await conn.write(encoded)
  eq(len, encoded.byteLength, 'unexpected amount of data sent to remote console')
}
const next = async () => {
  buf.fill(0)
  const len = await conn.read(buf)
  const text = decoder.decode(buf.slice(0, len))
  return len === buf.byteLength ? text + (await next()) : text
}
const expect = async expectedText => {
  const text = await next()
  console.debug(text)
  eq(text, expectedText, 'unexpected remote console reply')
}

await expect('Authentication Required\r\n')
await expect('Username: ')
await send('system')
await expect('Password: ')
await send(password)
await expect(`Welcome to an AzerothCore server.
|cffFF4A2DThis server runs on AzerothCore|r |cff3CE7FFwww.azerothcore.org|r\r\n`)
await expect('AC>')

export const exec = async (cmd) => {
  await send(cmd)
  const result = []
  mainLoop: while (true) {
    const text = await next()
    for (const line of text.trim().split('\r\n')) {
      const l = line.trim()
      if (!l) continue
      if (l === 'AC>') break mainLoop
      result.push(l)
    }
  }
  return result
}

export const createAccount = (account, password) => exec(`account create ${account} ${password}`)
export const setGmLevel = (account, gmLevel) => exec(`account set gmlevel ${account} ${gmLevel} -1`)

/*
console.log(await createAccount('system', 'super secure pwd'))
console.log(await setGmLevel('system', 3))

*/
clearTimeout(t)
