const password = Deno.env.get('PASSWORD').slice(0, 16)
const hostname = Deno.env.get('HOSTNAME') || 'localhost'
const SOAP_PORT = '7878'

const authorization = `Basic ${btoa(`system:${password}`)}`
const makeSoapBody = command => `
<?xml version="1.0" encoding="utf-8"?>
<SOAP-ENV:Envelope
xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsi="http://www.w3.org/1999/XMLSchema-instance"
xmlns:xsd="http://www.w3.org/1999/XMLSchema"
xmlns:ns1="urn:AC">
  <SOAP-ENV:Body>
    <ns1:executeCommand><command>${command}</command></ns1:executeCommand>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
`

const xmlEntities = {
  amp: `&`, // (ampersand)
  lt: `<`, // (less than)
  gt: `>`, // (greater than)
  quot: `"`, // (double quotation mark)
  apos: `'`, // (apostrophe or single quotation mark)
  nbsp: ` `, //(non-breaking space)
  copy: `©`, // (copyright symbol)
  reg: `®`, // (registered trademark symbol)
  trade: `™`, // (trademark symbol)
  euro: `€`, // (euro sign)
  mdash: `—`, // (em dash)
  ndash: `–`, // (en dash)
  ldquo: `“`, // (left double quotation mark)
  rdquo: `”`, // (right double quotation mark)
  lsquo: `‘`, // (left single quotation mark)
  rsquo: `’`, // (right single quotation mark)
}

const decodeEntities = (_, e) => e[0] === '#'
  ? String.fromCharCode((e[1] === 'x' || e[1] === 'X') ? parseInt(e.slice(2), 16) : e.slice(1))
  : (xmlEntities[e] || '')

const ignoreError = () => ''
const parseSoapTag = (text, tag) => {
  const start = text.indexOf(`<${tag}>`)
  const end = text.lastIndexOf(`</${tag}>`)
  if (start === -1 || end === -1) return ''
  return text
    .slice(start + tag.length + 2, end)
    .replace(/&([^;]+);/g, decodeEntities)
}

const parseSoap = (text) => {
  const result = parseSoapTag(text, 'result')
  if (result) return result.split('\r\n').filter(Boolean)
  const faultcode = parseSoapTag(text, 'faultcode') || 'No Code'
  const faultstring = parseSoapTag(text, 'faultstring') || 'No message'
  return { code: faultcode, message: faultstring }
}

export const ac = async (strings, ...values) => {
  try {
    const res = await fetch(`http://${hostname}:${SOAP_PORT}`, {
      method: 'POST',
      headers: { authorization },
      signal: AbortSignal.timeout(2000),
      body: makeSoapBody(String.raw(strings, ...values)),
    })
    const output = await res.text().then(parseSoap, ignoreError)
    return res.ok ? { success: true, output } : { error: res.status, output }
  } catch (err) {
    return { error: 600, output: err }
  }
}
