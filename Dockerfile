
# Simple Node.js runtime image
FROM node:16-alpine
WORKDIR /app

# Install dependencies first (leverages Docker layer cache)
COPY package*.json ./
RUN npm ci || npm install --production

# Copy application
COPY . .

# Expose port (adjust to your app)
EXPOSE 3000

# Start (adjust command if needed)
CMD ["npm", "start"]
