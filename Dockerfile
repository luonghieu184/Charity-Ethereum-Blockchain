FROM node:latest
RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . /usr/src/app
# CMD [ "npm", "start" ]
WORKDIR /usr/src/app
# Installing dependencies
COPY package*.json ./
RUN npm install
# Copying source files
COPY . /usr/src/app
# Building app
RUN npm run build
# Running the app
CMD [ "npm", "start" ]
