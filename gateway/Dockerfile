FROM node:21-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY . .

# Install dependencies
RUN npm install

# Expose port 3000 (or any other port your Node.js app listens on)
EXPOSE 5001

# Command to run the application
CMD npm run dev