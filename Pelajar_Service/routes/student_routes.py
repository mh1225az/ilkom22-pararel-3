from flask import Blueprint, request, jsonify
from manage_data import add_student, join_class, leave_class, find_student
from models import Student

student_bp = Blueprint('students', __name__)

# Endpoint untuk mendaftarkan pelajar baru
@student_bp.route('/register', methods=['POST'])
def register_student():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    
    student, message = add_student(name, email)
    if not student:
        return jsonify({"message": message}), 400
    
    return jsonify({
        "id": student.id,
        "name": student.name,
        "email": student.email,
        "message": message
    }), 201

# Endpoint untuk mendaftarkan pelajar ke kelas tertentu
@student_bp.route('/join_class', methods=['POST'])
def join_class_endpoint():
    data = request.get_json()
    student_id = data.get('student_id')
    class_id = data.get('class_id')
    
    message, success = join_class(student_id, class_id)
    status_code = 200 if success else 400
    return jsonify({"message": message}), status_code

# Endpoint untuk mengeluarkan pelajar dari kelas tertentu
@student_bp.route('/leave_class', methods=['POST'])
def leave_class_endpoint():
    data = request.get_json()
    student_id = data.get('student_id')
    class_id = data.get('class_id')
    
    message, success = leave_class(student_id, class_id)
    status_code = 200 if success else 400
    return jsonify({"message": message}), status_code

# Endpoint untuk mendapatkan daftar kelas yang diikuti oleh pelajar tertentu
@student_bp.route('/students/<int:student_id>/classes', methods=['GET'])
def get_student_classes(student_id):
    student = find_student(student_id=student_id)
    if not student:
        return jsonify({"message": "Student not found"}), 404

    student_classes = [{"id": c.id, "name": c.name, "description": c.description} for c in student.classes]
    return jsonify({"student_id": student.id, "name": student.name, "classes": student_classes}), 200



# from models import db, Student, Class

# def find_student(student_id=None, email=None):
#     if student_id:
#         return Student.query.get(student_id)
#     elif email:
#         return Student.query.filter_by(email=email).first()
#     return None

# def find_class(class_id=None, name=None):
#     if class_id:
#         return Class.query.get(class_id)
#     elif name:
#         return Class.query.filter_by(name=name).first()
#     return None

# def add_student(name, email):
#     if find_student(email=email):
#         return None, "Email already registered"
#     new_student = Student(name=name, email=email)
#     db.session.add(new_student)
#     db.session.commit()
#     return new_student, "Student added successfully"

# def add_class(name, description):
#     if find_class(name=name):
#         return None, "Class with this name already exists"
#     new_class = Class(name=name, description=description)
#     db.session.add(new_class)
#     db.session.commit()
#     return new_class, "Class added successfully"

# def join_class(student_id, class_id):
#     student = find_student(student_id=student_id)
#     class_ = find_class(class_id=class_id)
#     if not student or not class_:
#         return "Student or class not found", False
#     if class_ in student.classes:
#         return "Student already in class", False
#     student.classes.append(class_)
#     db.session.commit()
#     return "Student joined the class successfully", True

# def leave_class(student_id, class_id):
#     student = find_student(student_id=student_id)
#     class_ = find_class(class_id=class_id)
#     if not student or not class_:
#         return "Student or class not found", False
#     if class_ not in student.classes:
#         return "Student is not enrolled in this class", False
#     student.classes.remove(class_)
#     db.session.commit()
#     return "Student left the class successfully", True
