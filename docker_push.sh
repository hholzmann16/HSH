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

# Push compose file to server
scp -i ~/.ssh/travis_deploy docker-compose.prod.yml "$SSH_USER"@"$SSH_HOST:/home/$SSH_USER/docker-compose.prod.yml"
scp -i ~/.ssh/travis_deploy deploy_app.sh "$SSH_USER"@"$SSH_HOST:/home/$SSH_USER/deploy_app.sh"

# Deploy
ssh -i ~/.ssh/travis_deploy "$SSH_USER"@"$SSH_HOST" "/home/$SSH_USER/deploy_app.sh $DB_NAME $DB_USER $DB_PASS $DB_HOST $DB_PORT $MYSQL_ROOT_PASSWORD $DB_NAME $DB_USER $DB_PASS"
