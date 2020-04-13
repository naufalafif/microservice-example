 
FROM node:12.16.2-alpine3.10

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . /usr/src/app

EXPOSE 3000

# Run the script to start server
CMD [ "npm", "run", "start" ]