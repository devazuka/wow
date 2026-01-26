#!/bin/sh
dir=$(dirname "$0")

echo "starting wow web server service"

/root/.deno/bin/deno serve -A --env-file="$dir/.env" --port $PORT web/server.js

# systemctl restart wow.service; journalctl _SYSTEMD_INVOCATION_ID=$(systemctl show -p InvocationID --value wow.service) --no-pager -o cat --lines 200 -f
# PORT=$(jq '.wow' /root/services/ports.json) /root/services/wow/start.sh
# /root/.deno/bin/deno serve -A --env-file="/root/services/wow/.env" --watch --port $(jq '.wow' /root/services/ports.json) /root/services/wow/web/server.js
