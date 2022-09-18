FROM node:16-alpine3.15

WORKDIR /app
COPY package.json /app

RUN yarn

ADD . /app
CMD node src/index.js

EXPOSE 3000