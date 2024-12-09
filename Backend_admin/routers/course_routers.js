const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middlewares/auth.middleware');
const {
    getAllCourses,
    getMyCourses,
    createCourse,
    updateCourse,
    deleteCourse
} = require('../controllers/course.controller');

router.route('/')
    .get(getAllCourses)
    .post(protect, authorize('admin'), createCourse);

router.route('/my-courses')
    .get(protect, getMyCourses);

router.route('/:id')
    .put(protect, authorize('admin'), updateCourse)
    .delete(protect, authorize('admin'), deleteCourse);

module.exports = router;