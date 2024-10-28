# routes/__init__.py
from .student_routes import student_bp
from .class_routes import class_bp

__all__ = ["student_bp", "class_bp"]