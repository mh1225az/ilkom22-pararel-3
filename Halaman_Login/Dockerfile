# Gunakan image base Nginx
FROM nginx:latest

# Salin file HTML, CSS, dan JavaScript ke direktori Nginx
COPY . /usr/share/nginx/html

# Ekspos port 3200 untuk aplikasi
EXPOSE 3200

# Gunakan konfigurasi default Nginx
CMD ["nginx", "-g", "daemon off;"]
