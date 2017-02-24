FROM node:latest
MAINTAINER nsoushi

RUN mkdir /src /data

COPY ./bot /src/bot

WORKDIR /src/bot
RUN npm install

EXPOSE 8080

ENTRYPOINT ["/src/bot/bin/hubot", "--adapter", "slack"]