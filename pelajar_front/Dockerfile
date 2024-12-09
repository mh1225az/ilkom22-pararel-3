# Menggunakan image Node.js untuk build aplikasi React
FROM node:alpine AS build

# Menetapkan direktori kerja dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json (atau yarn.lock) untuk i>COPY package.json ./
COPY package-lock.json ./

# Instal dependensi
RUN npm install

# Menyalin seluruh kode aplikasi React ke dalam container
COPY . .

# Membangun aplikasi React
RUN npm run build

# Menggunakan image Nginx untuk serve aplikasi front-end
FROM nginx:alpine

# Menyalin hasil build aplikasi React ke dalam direktori Nginx
COPY --from=build /app/build /usr/share/nginx/html/

# Mengekspos port 2324
EXPOSE 2324

# Menjalankan Nginx pada port 2324
CMD ["nginx", "-g", "daemon off;"]