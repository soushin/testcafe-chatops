#! /bin/bash

DOCKER_COMPOSE_COMMAND=`which docker-compose`

if [ ! -x $DOCKER_COMPOSE_COMMAND ]; then
  echo "error, should install docker-compose" >&2
  exit -1
fi

if [ -z "$1" ]; then
  echo "USAGE: ./setup.sh <SLACK_API_TOKEN>" >&2
  exit -1
fi

sed -i.org -e "s/{ENV_SLACK_API_TOKEN}/$1/" ./docker-compose.yml
rm ./docker-compose.yml.org

$DOCKER_COMPOSE_COMMAND build --no-cache
$DOCKER_COMPOSE_COMMAND up -d
