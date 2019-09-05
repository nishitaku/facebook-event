FROM node:lts-alpine

WORKDIR /app

RUN apk update && \
  npm i -g @vue/cli && \
  npm i -g firebase-tools
