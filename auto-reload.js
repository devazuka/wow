import { watch } from 'node:fs/promises'
import { debounce } from "jsr:@std/async/debounce"
import { ac } from './web/soap.js'

const markedFiles = new Set()
const dir = `${import.meta.dirname}/lua-scripts`
const updateNow = debounce(async () => {
  try {
    const files = [...markedFiles]
    markedFiles.clear()
    for (const file of files) {
      const luac = new Deno.Command('luac', { args: [`${dir}/${file}`] })
      const rsync = new Deno.Command('rsync', {
        args: [
          `${dir}/${file}`,
          `root@ssh.devazuka.com:/root/services/wow/lua-scripts/${file}`,
        ]
        // /services/wow/core/env/dist/bin/dbc
      })
      if (!(await luac.spawn().status).success) {
        console.log('Error: Lua Check failed')
        continue
      }
      console.log(file, 'checked')
      if (!(await rsync.spawn().status).success) {
        console.log('Error: Server Sync failed')
        continue
      }
      console.log(file, 'synced')
      await ac`reload eluna`
      console.log(file, 'reloaded')
    }
  } catch (err) {
    console.error(err)
  }
}, 50)

for await (const change of watch(dir, { recursive: true })) {
  markedFiles.add(change.filename)
  updateNow()
}

// rsync 'dbc/Talent.dbc' 'root@ssh.devazuka.com:/root/services/wow/core/env/dist/bin/dbc/Talent.dbc'
// rsync 'web/worldserver.conf' 'root@ssh.devazuka.com:/root/services/wow/core/env/dist/etc/worldserver.conf'
