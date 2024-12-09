from flask import Blueprint, jsonify
import requests
from config import Config

students_bp = Blueprint("students", __name__)

@students_bp.route("/", methods=["GET"])
def get_students():
    try:
        response = requests.get(f"{Config.STUDENT_SERVICE_URL}/students")
        return jsonify(response.json()), response.status_code
    except Exception as e:
        return jsonify({"error": str(e)}), 500
