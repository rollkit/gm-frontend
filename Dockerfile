# Use the official Node.js Alpine image as the base
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the files to the container
COPY . .

# Install dependencies
RUN yarn

# Expose the port that the application will be running on
EXPOSE 3000

# Start the application
CMD ["yarn", "dev"]