FROM node:18.8.0-bullseye

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN sh