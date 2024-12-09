import os

class Config:
    # Konfigurasi untuk secret key aplikasi (penting untuk keamanan)
    SECRET_KEY = "your_secret_key"  # Gantilah dengan kunci rahasia yang aman
    
    # Konfigurasi untuk database (gunakan SQLite atau database lain yang sesuai)
    SQLALCHEMY_DATABASE_URI = "sqlite:///admin.db"  # Lokasi database SQLite
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Matikan fitur pelacakan perubahan untuk menghemat memori

    # URL untuk microservices (pelajar dan pengajar)
    STUDENT_SERVICE_URL = "http://localhost:5001"  # URL untuk layanan pelajar
    TEACHER_SERVICE_URL = "http://localhost:5002"  # URL untuk layanan pengajar
