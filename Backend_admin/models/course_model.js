const connection = require('../config/db');

const Course = {
  getAllCourses: (callback) => {
    connection.query('SELECT * FROM courses', callback);
  },
  getUserCourses: (userId, callback) => {
    connection.query('SELECT * FROM courses WHERE user_id = ?', [userId], callback);
  }
};

module.exports = Course;
