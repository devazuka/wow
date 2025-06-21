# WoW
World of Warcraft Twink 19 Private Server


## Setup

```bash

# Start chat bot
deno run -A --env-file=web/.env web/world-chat.js

# Sync DBC changes to the server
CLICOLOR_FORCE=1 watch -n 5 --color -d 'deno run -A --env-file=web/.env sync-to-server.js'

# Send update to lua scripts
deno run --env-file=web/.env -A auto-reload.js

```


