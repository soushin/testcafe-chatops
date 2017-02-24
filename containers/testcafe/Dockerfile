FROM node:latest
MAINTAINER nsoushi

ENV PATH $PATH:/usr/local/bin

RUN mkdir /src /data

COPY ./test /src/test

WORKDIR /src
RUN npm install -g gulp

WORKDIR /src/test/custom_reporter
RUN npm install
RUN gulp build
RUN npm link

WORKDIR /src/test
RUN npm install
RUN npm link testcafe-reporter-custom-reporter

EXPOSE 1337
EXPOSE 1338
EXPOSE 8124

ENTRYPOINT ["node", "/src/test/webhook/app.js"]
