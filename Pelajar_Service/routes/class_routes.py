from flask import Blueprint, jsonify
from models import Class

class_bp = Blueprint('class', __name__, url_prefix='/classes')

@class_bp.route('/', methods=['GET'])
def get_classes():
    classes = Class.query.all()
    classes_data = [
        {"id": class_.id, "name": class_.name, "description": class_.description}
        for class_ in classes
    ]
    return jsonify(classes_data), 200
