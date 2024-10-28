from flask import Flask
from models import db
from routes import student_bp, class_bp  # Mengimpor blueprint dari routes

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///school.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# Mendaftarkan blueprint untuk rute pelajar dan kelas
app.register_blueprint(student_bp)
app.register_blueprint(class_bp)

# Rute dasar (/) untuk menampilkan pesan selamat datang
@app.route('/')
def home():
    return "Welcome to the Student and Class Service API!"

# Membuat database jika belum ada
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)

# if __name__ == "__main__" :
#     app = create_application()
#     app.run(host="127.0.0.1", port=5000, debug=True)