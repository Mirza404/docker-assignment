# Use Node official image
FROM node:22

# Set working directory
WORKDIR /app

# Copy dependencies first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
