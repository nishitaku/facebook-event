FROM node:lts-alpine

WORKDIR /app

RUN apk update && \
  npm i -g @vue/cli
