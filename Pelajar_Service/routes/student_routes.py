from flask import Blueprint, jsonify
from models import Student

student_bp = Blueprint('student', __name__, url_prefix='/students')

@student_bp.route('/<int:student_id>', methods=['GET'])
def get_student_profile(student_id):
    student = Student.query.get(student_id)
    if not student:
        return jsonify({"error": "Student not found"}), 404

    profile_data = {
        "name": student.name,
        "email": student.email,
        "classes": [{"id": class_.id, "name": class_.name} for class_ in student.classes]
    }
    return jsonify(profile_data), 200
