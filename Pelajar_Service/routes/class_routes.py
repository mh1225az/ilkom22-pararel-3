from flask import Blueprint, jsonify, request
from models import db, Class
from manage_data import add_class, find_class

class_bp = Blueprint('classes', __name__)

# Endpoint untuk mendapatkan daftar semua kelas
@class_bp.route('/classes', methods=['GET'])
def get_classes():
    classes = Class.query.all()
    classes_data = [{"id": c.id, "name": c.name, "description": c.description} for c in classes]
    return jsonify(classes_data), 200

# Endpoint untuk menambahkan kelas baru
@class_bp.route('/classes', methods=['POST'])
def create_class():
    data = request.get_json()
    name = data.get('name')
    description = data.get('description')

    new_class, message = add_class(name, description)
    if not new_class:
        return jsonify({"message": message}), 400

    return jsonify({
        "id": new_class.id,
        "name": new_class.name,
        "description": new_class.description,
        "message": message
    }), 201

# Endpoint untuk menghapus kelas berdasarkan ID
@class_bp.route('/classes/<int:class_id>', methods=['DELETE'])
def delete_class(class_id):
    class_ = find_class(class_id=class_id)
    if not class_:
        return jsonify({"message": "Class not found"}), 404
    
    db.session.delete(class_)
    db.session.commit()
    return jsonify({"message": "Class deleted successfully"}), 200
