from flask import Blueprint

# Membuat blueprint untuk users
users_bp = Blueprint("users", __name__)

@users_bp.route("/")
def get_users():
    return {"message": "Users endpoint"}, 200
