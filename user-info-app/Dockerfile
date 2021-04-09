FROM node:14

ENV env=dev
ENV CLUSTER=1
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
RUN mkdir dist
COPY dist ./dist
COPY userapp.js .

EXPOSE 8089
#CMD [ "node", "userapp.js" ]
CMD node userapp.js  --env=${env}