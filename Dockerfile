
FROM node:16-alpine
WORKDIR /usr/src/s3gallery_ui
COPY ./s3_gallery_ui .
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "start" ]