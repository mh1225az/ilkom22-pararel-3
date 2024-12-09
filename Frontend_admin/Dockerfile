# Tahap 1: Build aplikasi frontend (React.js) menggunakan Node.js
FROM node:16-alpine AS build

# Menetapkan direktori kerja di dalam container
WORKDIR /app

# Menyalin file package.json dan package-lock.json untuk instalasi dependensi
COPY package.json ./
COPY package-lock.json ./

# Install dependensi aplikasi dan membersihkan cache npm
RUN npm install

# Menyalin seluruh kode aplikasi ke dalam container
COPY . .

# Membangun aplikasi React (hasil build akan berada di folder /build)
RUN npm run build

# Tahap 2: Menyajikan aplikasi menggunakan Nginx
FROM nginx:alpine

# Menyalin hasil build React ke dalam folder default Nginx
COPY --from=build /app/build /usr/share/nginx/html/

# Mengekspos port 80 untuk akses ke aplikasi
EXPOSE 80

# Menjalankan Nginx pada port 80
CMD ["nginx", "-g", "daemon off;"]



