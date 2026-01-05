# 1️⃣ Start from Node.js official image
FROM node:20-alpine

# 2️⃣ Create app folder inside container
WORKDIR /app

# 3️⃣ Copy package files first
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install

# 5️⃣ Copy rest of the code
COPY . .

# 6️⃣ Tell container which port app uses
EXPOSE 3000

# 7️⃣ Command to start app
CMD ["node", "src/index.js"]
