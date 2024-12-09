const express = require('express');
const router = express.Router();
const { protect } = require('../config/auth');
const { getAllCourses, getMyCourses } = require('../controllers/course_controller');

router.route('/')
  .get(getAllCourses);

router.route('/my-courses')
  .get(protect, getMyCourses);

module.exports = router;
