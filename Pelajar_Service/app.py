from flask import Flask, jsonify, request
from flask_cors import CORS
from models import db, Student, Class
from manage_data import join_class

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///school.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)

db.init_app(app)

@app.route('/api/classes', methods=['GET'])
def get_classes():
    classes = Class.query.all()
    class_list = [{"id": c.id, "name": c.name, "description": c.description} for c in classes]
    return jsonify(class_list), 200

@app.route('/api/student/<int:student_id>', methods=['GET'])
def get_student(student_id):
    student = Student.query.get(student_id)
    if not student:
        return jsonify({"error": "Student not found"}), 404
    
    student_data = {
        "id": student.id,
        "name": student.name,
        "email": student.email,
        "classes": [{"id": c.id, "name": c.name, "description": c.description} for c in student.classes]
    }
    return jsonify(student_data), 200

@app.route('/api/join_class', methods=['POST'])
def join_class_endpoint():
    data = request.get_json()
    student_id = data.get('student_id')
    class_id = data.get('class_id')
    message, success = join_class(student_id, class_id)
    if success:
        return jsonify({"message": message}), 200
    return jsonify({"error": message}), 400

@app.route('/api/student/<int:student_id>/classes', methods=['GET'])
def get_student_classes(student_id):
    student = Student.query.get(student_id)
    if not student:
        return jsonify({"error": "Student not found"}), 404

    classes = [{"id": c.id, "name": c.name, "description": c.description} for c in student.classes]
    return jsonify(classes), 200

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
