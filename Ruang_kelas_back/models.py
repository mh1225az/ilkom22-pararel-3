from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class RuangKelas(db.Model):
    __tablename__ = 'ruang_kelas'
    id = db.Column(db.Integer, primary_key=True)
    nama = db.Column(db.String(50), nullable=False)
    kapasitas = db.Column(db.Integer, nullable=False)
    lokasi = db.Column(db.String(100), nullable=True)
