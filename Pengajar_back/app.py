import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)

# Konfigurasi database (gunakan SQLite untuk kemudahan)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inisialisasi database
db = SQLAlchemy(app)

# Model untuk materi (tabel materi)
class Materi(db.Model):
    __tablename__ = 'materi'
    id = db.Column(db.Integer, primary_key=True)
    judul_materi = db.Column(db.String(255), nullable=False)
    tipe_materi = db.Column(db.String(50), nullable=False)
    deskripsi = db.Column(db.Text, nullable=True)
    link_soal = db.Column(db.String(255), nullable=True)
    tingkatan = db.Column(db.String(50), nullable=False)
    file_materi = db.Column(db.String(255), nullable=True)
    link_materi = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, default=db.func.now())

# Route utama
@app.route('/')
def home():
    return "Selamat datang di aplikasi Flask!"

# Route untuk menambah data materi
@app.route('/materi', methods=['POST'])
def add_materi():
    judul_materi = request.form['judulMateri']
    tipe_materi = request.form['tipeMateri']
    deskripsi = request.form['deskripsi']
    link_soal = request.form['linkSoal']
    tingkatan = request.form['tingkatan']
    link_materi = request.form.get('linkMateri') 

    # Proses file jika ada
    file_materi = None
    if 'fileMateri' in request.files:
        file = request.files['fileMateri']
        if file:
            file_materi = os.path.join('uploads', file.filename)
            file.save(file_materi)

    # Menyimpan materi ke database
    materi = Materi(
        judul_materi=judul_materi,
        tipe_materi=tipe_materi,
        deskripsi=deskripsi,
        link_soal=link_soal,
        tingkatan=tingkatan,
        file_materi=file_materi,
        link_materi=link_materi 
    )
    db.session.add(materi)
    db.session.commit()

    return jsonify({"message": "Data materi berhasil disimpan!"}), 201

# Jalankan aplikasi
if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Membuat tabel jika belum ada
    app.run(debug=True)
