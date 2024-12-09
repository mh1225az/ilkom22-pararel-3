GNU nano 6.2                                           Dockerfile                                                     # Menggunakan image Nginx resmi sebagai base image
FROM nginx:alpine

# Menyalin file aplikasi front-end (HTML, CSS, JS) ke direktori yang digunakan Nginx
COPY ./build /usr/share/nginx/html

# Menyalin konfigurasi Nginx yang sudah disiapkan
COPY ./nginx.conf /etc/nginx/nginx.conf

# Mengexpose port yang digunakan oleh Nginx
EXPOSE 4501

# Menjalankan Nginx secara default
CMD ["nginx", "-g", "daemon off;"]
