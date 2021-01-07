FROM node:12-alpine AS build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/
COPY yarn.lock /app/

RUN yarn install

COPY . /app/

RUN yarn run build




#FROM nginx:1.17.8-alpine
#
#COPY --from=build /ui/build /usr/share/nginx/html
#
#RUN rm /etc/nginx/conf.d/default.conf
#
#COPY nginx/nginx.conf /etc/nginx/conf.d
#
#EXPOSE 3000
#
#CMD ["nginx", "-g", "daemon off;"]
