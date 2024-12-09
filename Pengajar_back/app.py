import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from models import db, Materi

app = Flask(__name__)

# Konfigurasi database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///MATERI.db'  # Gunakan SQLite
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Konfigurasi folder upload
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

db.init_app(app)

@app.route('/')
def home():
    return "API Back-End untuk Formulir Materi"

@app.route('/api/materi', methods=['POST'])
def add_materi():
    # Ambil data dari permintaan
    judul_materi = request.form.get('judulMateri')
    tipe_materi = request.form.get('tipeMateri')
    deskripsi = request.form.get('deskripsi')
    link_soal = request.form.get('linkSoal')
    tingkatan = request.form.get('tingkatan')
    link_materi = request.form.get('linkMateri') 

    # Proses file yang diunggah
    file_materi = None
    if 'fileMateri' in request.files:
        file = request.files['fileMateri']
        if file:
            file_materi = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
            file.save(file_materi)

    # Simpan ke database
    new_materi = Materi(
        judul_materi=judul_materi,
        tipe_materi=tipe_materi,
        deskripsi=deskripsi,
        link_soal=link_soal,
        tingkatan=tingkatan,
        file_materi=file_materi,
        link_materi=link_materi
    )
    db.session.add(new_materi)
    db.session.commit()

    return jsonify({"message": "Data berhasil disimpan!"}), 201

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Membuat tabel di database
    app.run(debug=True)
