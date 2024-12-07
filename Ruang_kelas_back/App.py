from flask import Flask
from models import db
from routes import student_bp, class_bp  # Mengimpor blueprint dari routes

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///school.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# Mendaftarkan blueprint untuk rute pelajar dan kelas
app.register_blueprint(student_bp, url_prefix='/students')
app.register_blueprint(class_bp, url_prefix='/classes')

# Rute dasar (/) untuk menampilkan pesan selamat datang
@app.route('/')
def home():
    return "Welcome to the Student and Class Service API!"

# Membuat database jika belum ada
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
