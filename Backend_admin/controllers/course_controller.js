const Course = require('../models/course_model');

// Mendapatkan semua kursus
exports.getAllCourses = (req, res) => {
  Course.getAllCourses((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching courses' });
    }
    res.status(200).json({ courses: results });
  });
};

// Mendapatkan kursus yang dimiliki pengguna
exports.getMyCourses = (req, res) => {
  const userId = req.user.id; // ID pengguna dari token JWT
  Course.getUserCourses(userId, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching user courses' });
    }
    res.status(200).json({ courses: results });
  });
};
