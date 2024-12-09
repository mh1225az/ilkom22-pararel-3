const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth.middleware');
const {
    getProfile,
    updateProfile
} = require('../controllers/profile.controller');

router.route('/')
    .get(protect, getProfile)
    .put(protect, updateProfile);

module.exports = router;