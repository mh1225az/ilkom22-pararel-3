# Menggunakan base image Python
FROM python:3.9-slim

# Menentukan direktori kerja di dalam container
WORKDIR /usr/src/app

# Menyalin requirements.txt ke dalam container
COPY requirements.txt ./

# Menginstal dependensi dari requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Menyalin seluruh file aplikasi ke dalam container
COPY . .

EXPOSE 5000

# Menjalankan aplikasi
CMD ["python", "app.py"]
