#
#FROM node:16-alpine
#WORKDIR /usr/src/s3gallery_ui
#COPY . .
#RUN npm install
#EXPOSE 3000
#CMD [ "npm", "run", "serve" ]
#

# build stage
FROM node:lts-alpine as build-stage
WORKDIR /usr/src/s3gallery_ui
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]