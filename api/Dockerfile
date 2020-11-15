FROM node:15

# App diirectory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Port
EXPOSE 3000

# Execution
CMD [ "npm", "start" ]