#!/bin/bash
cp /usr/share/nginx/html/assets/json/config-${env}.json /usr/share/nginx/html/assets/json/config.json
echo "Starting container. Runtime environment variables. target environment=${env}, target description=${description}" 
nginx -g 'daemon off;'