from flask import Blueprint, request, jsonify
from manage_data import add_student, join_class, leave_class, find_student

student_bp = Blueprint('students', __name__)

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

@student_bp.route('/join_class', methods=['POST'])
def join_class_endpoint():
    data = request.get_json()
    student_id = data.get('student_id')
    class_id = data.get('class_id')
    
    message, success = join_class(student_id, class_id)
    status_code = 200 if success else 400
    return jsonify({"message": message}), status_code

@student_bp.route('/leave_class', methods=['POST'])
def leave_class_endpoint():
    data = request.get_json()
    student_id = data.get('student_id')
    class_id = data.get('class_id')
    
    message, success = leave_class(student_id, class_id)
    status_code = 200 if success else 400
    return jsonify({"message": message}), status_code
