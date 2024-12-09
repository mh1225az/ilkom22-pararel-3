from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from models import db
from routes import register_blueprints  # Mengimpor fungsi untuk mendaftarkan Blueprint

app = Flask(__name__)

# Konfigurasi database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inisialisasi database
db.init_app(app)

# Registrasi Blueprint
register_blueprints(app)

@app.route('/')
def home():
    return "Selamat datang di aplikasi Flask!"

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Membuat tabel jika belum ada
    app.run(debug=True)
