FROM node:12-alpine as builder

WORKDIR /usr/src/app/client

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
