from models import db, Student, Class

def find_student(student_id=None, email=None):
    if student_id:
        return Student.query.get(student_id)
    elif email:
        return Student.query.filter_by(email=email).first()
    return None

def find_class(class_id=None, name=None):
    if class_id:
        return Class.query.get(class_id)
    elif name:
        return Class.query.filter_by(name=name).first()
    return None

def add_student(name, email):
    if find_student(email=email):
        return None, "Email already registered"
    new_student = Student(name=name, email=email)
    db.session.add(new_student)
    db.session.commit()
    return new_student, "Student added successfully"

def add_class(name, description):
    if find_class(name=name):
        return None, "Class with this name already exists"
    new_class = Class(name=name, description=description)
    db.session.add(new_class)
    db.session.commit()
    return new_class, "Class added successfully"

def join_class(student_id, class_id):
    student = find_student(student_id=student_id)
    class_ = find_class(class_id=class_id)
    if not student or not class_:
        return "Student or class not found", False
    if class_ in student.classes:
        return "Student already in class", False
    student.classes.append(class_)
    db.session.commit()
    return "Student joined the class successfully", True

def leave_class(student_id, class_id):
    student = find_student(student_id=student_id)
    class_ = find_class(class_id=class_id)
    if not student or not class_:
        return "Student or class not found", False
    if class_ not in student.classes:
        return "Student is not enrolled in this class", False
    student.classes.remove(class_)
    db.session.commit()
    return "Student left the class successfully", True
