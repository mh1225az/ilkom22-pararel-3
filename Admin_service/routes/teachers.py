from flask import Blueprint, jsonify
import requests
from config import Config

teachers_bp = Blueprint("teachers", __name__)

@teachers_bp.route("/", methods=["GET"])
def get_teachers():
    try:
        response = requests.get(f"{Config.TEACHER_SERVICE_URL}/teachers")
        return jsonify(response.json()), response.status_code
    except Exception as e:
        return jsonify({"error": str(e)}), 500
