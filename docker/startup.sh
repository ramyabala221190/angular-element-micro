#!/bin/bash
cat /config/env
cat /config/description
cp /usr/share/nginx/html/assets/json/config-$(cat /config/env).json /usr/share/nginx/html/assets/json/config.json
echo "Starting container. Runtime environment variables. target environment=$(cat /config/env), target description=$(cat /config/description})" 
nginx -g 'daemon off;'