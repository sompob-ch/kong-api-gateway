# Use the official Node.js 14 image as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

COPY app.js ./

# Install dependencies
RUN npm install

# Expose the port on which the application will run
EXPOSE 3000

# Start the application
CMD npm run start