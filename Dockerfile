# base image
FROM node:12.2.0-alpine

WORKDIR /app
COPY . ./

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

# start app
CMD ["npm", "start"]
