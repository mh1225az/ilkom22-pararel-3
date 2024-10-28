# models.py
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Model untuk Pelajar
class Student(db.Model):
    __tablename__ = 'students'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)

    # Relasi many-to-many ke Class melalui tabel association
    classes = db.relationship('Class', secondary='student_class', back_populates='students')

# Model untuk Kelas
class Class(db.Model):
    __tablename__ = 'classes'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255))

    # Relasi many-to-many ke Student melalui tabel association
    students = db.relationship('Student', secondary='student_class', back_populates='classes')

# Tabel Association untuk relasi many-to-many antara Student dan Class
student_class = db.Table(
    'student_class',
    db.Column('student_id', db.Integer, db.ForeignKey('students.id'), primary_key=True),
    db.Column('class_id', db.Integer, db.ForeignKey('classes.id'), primary_key=True)
)
