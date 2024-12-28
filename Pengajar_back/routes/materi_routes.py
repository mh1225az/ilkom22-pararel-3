from flask import Blueprint, request, jsonify
from models import db, Materi
import os
import threading


# Inisialisasi Blueprint
materi_routes = Blueprint('materi_routes', __name__)

# Konfigurasi folder upload
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def process_file(file, file_path):
    # Simulasi proses berat, seperti validasi atau manipulasi file
    import time
    time.sleep(5)  # Simulasi tugas berat
    # File sudah disimpan, lakukan validasi atau manipulasi di sini jika diperlukan
    print(f"File {file.filename} diproses dan disimpan ke {file_path}")

@materi_routes.route('/', methods=['POST'])
def add_materi():
    judul_materi = request.form.get('judulMateri')
    tipe_materi = request.form.get('tipeMateri')
    deskripsi = request.form.get('deskripsi')
    link_soal = request.form.get('linkSoal')
    tingkatan = request.form.get('tingkatan')
    link_materi = request.form.get('linkMateri')

    # Proses file jika ada
    file_materi = None
    if 'fileMateri' in request.files:
        file = request.files['fileMateri']
        if file:
            file_materi = os.path.join(UPLOAD_FOLDER, file.filename)
            file.save(file_materi)
            # Jalankan proses berat dalam thread terpisah
            thread = threading.Thread(target=process_file, args=(file, file_materi))
            thread.start()

    # Simpan ke database
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

    return jsonify({"message": "Data materi berhasil disimpan! Proses file sedang berjalan."}), 201


# Route untuk mendapatkan semua data materi
@materi_routes.route('/', methods=['GET'])
def get_all_materi():
    materi_list = Materi.query.all()
    results = [
        {
            "id": materi.id,
            "judul_materi": materi.judul_materi,
            "tipe_materi": materi.tipe_materi,
            "deskripsi": materi.deskripsi,
            "link_soal": materi.link_soal,
            "tingkatan": materi.tingkatan,
            "file_materi": materi.file_materi,
            "link_materi": materi.link_materi,
            "created_at": materi.created_at
        }
        for materi in materi_list
    ]
    return jsonify(results), 200

# Route untuk mendapatkan data materi berdasarkan ID
@materi_routes.route('/<int:id>', methods=['GET'])
def get_materi_by_id(id):
    materi = Materi.query.get(id)
    if not materi:
        return jsonify({"error": "Materi tidak ditemukan"}), 404

    result = {
        "id": materi.id,
        "judul_materi": materi.judul_materi,
        "tipe_materi": materi.tipe_materi,
        "deskripsi": materi.deskripsi,
        "link_soal": materi.link_soal,
        "tingkatan": materi.tingkatan,
        "file_materi": materi.file_materi,
        "link_materi": materi.link_materi,
        "created_at": materi.created_at
    }
    return jsonify(result), 200
