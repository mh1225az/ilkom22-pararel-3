from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Materi(db.Model):
    __tablename__ = 'materi'
    id = db.Column(db.Integer, primary_key=True)
    judul_materi = db.Column(db.String(255), nullable=False)
    tipe_materi = db.Column(db.String(50), nullable=False)
    deskripsi = db.Column(db.Text, nullable=True)
    link_soal = db.Column(db.String(255), nullable=True)
    tingkatan = db.Column(db.String(50), nullable=False)
    file_materi = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, default=db.func.now())
