# ---------- Stage 1: Build ----------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies (pakai cache layer untuk efisiensi)
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install

# Copy semua source code
COPY . .

# Build aplikasi (kalau pakai vite)
# Kalau masih pakai Next, ubah ke: RUN npm run build
RUN npm run build

# ---------- Stage 2: Run ----------
FROM node:20-alpine AS runner

# Set NODE_ENV ke production
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy package.json dan install dependencies production saja
COPY package*.json ./
RUN npm install --only=production

# Copy hasil build dari stage sebelumnya
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Port yang akan digunakan container
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]
