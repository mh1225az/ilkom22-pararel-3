from flask import Flask
from config import Config
from models import db
from routes.students import students_bp
from routes.teachers import teachers_bp

app = Flask(__name__)
app.config.from_object(Config)

# Inisialisasi database
db.init_app(app)

# Register blueprint untuk routing
app.register_blueprint(students_bp, url_prefix="/students")
app.register_blueprint(teachers_bp, url_prefix="/teachers")

if __name__ == "__main__":
    app.run(debug=True, port=5000)
