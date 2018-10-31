#!/bin/bash

# Log into docker
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

# Push docker image
docker push $DOCKER_USERNAME/$APP_NAME

# Run deploy script
eval "$(ssh-agent -s)"
chmod 600 ~/.ssh/travis_deploy
echo -e "Host $SSH_HOST\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
ssh-add ~/.ssh/travis_deploy
ssh -i ~/.ssh/travis_deploy "$SSH_USER"@"$SSH_HOST" "/home/$SSH_USER/deploy_app.sh"
