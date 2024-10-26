import { exec } from './remote-access.js'

await exec('reload eluna')

export default {
  fetch(request) {
    return new Response('Hello')
  }
}