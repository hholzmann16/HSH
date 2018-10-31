#!/bin/bash

IMAGE=hholzmann16/hsh
TAG=latest
CONTAINER_NAME=hsh_app

# Pull latest image
echo "Pulling latest image from docker '$IMAGE'..."
docker pull $IMAGE:$TAG

# Stop current container
echo "Killing current docker container '$CONTAINER_NAME'..."
docker kill $CONTAINER_NAME

echo "Removing old container '$CONTAINER_NAME'..."
docker rm $CONTAINER_NAME

# Start new container
echo "Starting a new container '$CONTAINER_NAME'..."
docker run -d --name $CONTAINER_NAME -e PORT=6060 -p 3000:6060 $IMAGE:$TAG npm start

echo "Deployed :)"
