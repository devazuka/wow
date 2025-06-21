/*
import { assertEquals as eq } from 'jsr:@std/assert/equals'
import { ssh } from './shell.js'
// import { emit } from './server.js'
const emit = (...args) => console.log(...args)

const password = Deno.env.get('PASSWORD').slice(0, 16)
const hostname = Deno.env.get('HOSTNAME') || 'localhost'
let CONN
let IS_CONNECTING
const PENDING_COMMANDS = []
const { BadResource, BrokenPipe } = Deno.errors
const flushCommands = async () => {
  if (!PENDING_COMMANDS.length) return
  if (IS_CONNECTING) return
  CONN || (await (IS_CONNECTING = connect()))
  const { cmd, reject, resolve } = PENDING_COMMANDS.shift()
  try {
    resolve(await execCommand(cmd))
  } catch (err) {
    // if it's disconnected here, just re-connect
    if (!(err instanceof BadResource || err instanceof BrokenPipe)) {
      return reject(err)
    }
    console.debug('ac connection lost')
    PENDING_COMMANDS.unshift({ cmd, reject, resolve })
    await (IS_CONNECTING = connect())
  }
  return flushCommands()
}

let lastKill
let keepAliveInterval
const connect = async (attempts = 1) => {
  console.debug('ac connection starting')
  let aborted = false
  const abort = async (kill) => {
    aborted = true
    try {
      CONN?.close()
    } catch (err) {
      console.error('unable to close the connection:', err.message)
    }
    clearInterval(keepAliveInterval)
    if (IS_CONNECTING) return
    emit('WORLDSERVER_DISCONNECTED')
    CONN = undefined
    console.log('Wait 15s and will try to reconnect')
    IS_CONNECTING = new Promise(s => setTimeout(() => s(connect()), 15000))
    if (!kill) return
    console.log('unresponsive, killing the server...')
    if (!lastKill) {
      lastKill = Date.now()
      await ssh`killall -9 worldserver`
    } else {
      // TODO:
      // - try to restart the server 
      // - try to recompile & restart
      // - try to reconfigure / recompile / restart (?)
      // - send an alert on discord to admins (with ping)
    }
  }
  const t = setTimeout(abort, 5000, true)
  try {
    const start = performance.now()
    CONN = await Deno.connect({ hostname, port: '3443' })
    await expect('Authentication Required\r\n')
    await expect('Username: ')
    await send('system')
    await expect('Password: ')
    await send(password)
    await expect(`Welcome to an AzerothCore server.\r\n`)
    await expect('AC>')
    console.debug('ac connection successful', performance.now() - start)
    emit('WORLDSERVER_CONNECTED')
    IS_CONNECTING = undefined
    lastKill = undefined
    const keepAlive = async () => {
      if (aborted) return
      const tt = setTimeout(abort, 5000, true)
      try {
        await exec('server info')
      } catch (err) {
        abort()
        console.log(err)
      } finally {
        clearTimeout(tt)
      }
    }
    clearInterval(keepAliveInterval)
    keepAliveInterval = setInterval(keepAlive, 5000)
  } catch (err) {
    if (!aborted && !(err instanceof Deno.errors.ConnectionRefused
      || err instanceof Deno.errors.ConnectionReset)) throw err
    await new Promise(s => setTimeout(s, (attempts*attempts) * 250))
    return connect(attempts + 1)
  } finally {
    clearTimeout(t)
  }
  return abort
}

const decoder = new TextDecoder()
const encoder = new TextEncoder()
const buf = new Uint8Array(1024)
const send = async (str) => {
  const encoded = encoder.encode(str + '\r\n')
  const len = await CONN.write(encoded)
  eq(
    len,
    encoded.byteLength,
    'unexpected amount of data sent to remote console',
  )
}
const next = async () => {
  buf.fill(0)
  const len = await CONN.read(buf)
  const text = decoder.decode(buf.slice(0, len))
  return len === buf.byteLength ? text + (await next()) : text
}
const expect = async (expectedText) => {
  const text = await next()
  eq(text, expectedText, 'unexpected remote console reply')
}

const execCommand = async (cmd) => {
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

export const exec = (cmd) => {
  const { promise, resolve, reject } = Promise.withResolvers()
  PENDING_COMMANDS.push({ cmd, resolve, reject })
  flushCommands()
  return promise
}

console.log(await createAccount('system', 'super secure pwd'))
console.log(await setGmLevel('system', 3))

connect(0)

const server = Deno.serve({ port: 7585 }, async req => {
  const cmd = await req.text()
  const output = await exec(cmd)
  console.log({ cmd, output })
  return new Response(String(output) || null, { status: 200 })
})
*/