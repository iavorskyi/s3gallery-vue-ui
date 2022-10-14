
FROM node:16-alpine
WORKDIR /usr/src/s3gallery_ui
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "start" ]