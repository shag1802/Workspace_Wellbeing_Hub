FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the entire current directory into the container
COPY . .

# Install app dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]