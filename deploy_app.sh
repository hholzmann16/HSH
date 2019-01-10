#!/bin/bash

IMAGE=hholzmann16/hsh
TAG=latest
CONTAINER_NAME=hsh_app

# Params
echo "#!/bin/bash
export DB_NAME=$1
export DB_USER=$2
export DB_PASS=$3
export DB_HOST=$4
export DB_PORT=$5
export MYSQL_ROOT_PASSWORD=$6
export MYSQL_DATABASE=$7
export MYSQL_USER=$8
export MYSQL_PASSWORD=$9" > .env
source .env
rm .env

# Pull latest image
echo "Pulling latest image from docker '$IMAGE'..."
docker pull $IMAGE:$TAG

# Stop current container
echo "Killing current docker container '$CONTAINER_NAME'..."
docker-compose -f docker-compose.prod.yml down

# Start database
docker-compose -f docker-compose.prod.yml up -d db

sleep 10

# Start app
docker-compose -f docker-compose.prod.yml up -d app

echo "Deployed :)"
