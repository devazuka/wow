#!/bin/sh
dir=$(dirname "$0")

echo "starting wow web server service"

/root/.deno/bin/deno serve -A --env-file="$dir/.env" --port $PORT web/server.js

