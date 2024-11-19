from flask import Blueprint, jsonify, request
from .models import RuangKelas, db

kelas_bp = Blueprint('kelas_bp', __name__)

@kelas_bp.route('/kelas', methods=['GET'])
def get_kelas():
    kelas_list = RuangKelas.query.all()
    return jsonify([{'id': k.id, 'nama': k.nama, 'kapasitas': k.kapasitas, 'lokasi': k.lokasi} for k in kelas_list])

@kelas_bp.route('/kelas', methods=['POST'])
def add_kelas():
    data = request.get_json()
    kelas = RuangKelas(nama=data['nama'], kapasitas=data['kapasitas'], lokasi=data.get('lokasi'))
    db.session.add(kelas)
    db.session.commit()
    return jsonify({'message': 'Kelas berhasil ditambahkan'}), 201
