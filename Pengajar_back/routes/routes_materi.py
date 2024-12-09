from flask import Blueprint

materi_routes = Blueprint('materi_routes', __name__)

@materi_routes.route('/materi', methods=['POST'])
def add_materi():
    # Fungsi untuk menambah materi
    return "Tambah Materi"
