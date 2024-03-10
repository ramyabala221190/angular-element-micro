#!/bin/bash
cp /usr/share/nginx/html/assets/json/config-$(cat /config/env).json /usr/share/nginx/html/assets/json/config.json
echo "Starting container. Runtime environment variables. target environment=$(cat /config/env) description=$(cat /config/description) secret=$(cat /secret/pwd)" 
nginx -g 'daemon off;'