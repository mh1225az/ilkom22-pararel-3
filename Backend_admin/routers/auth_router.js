const express = require('express');
const router = express.Router();
const { login, logout } = require('../controllers/auth_controller');

router.route('/login')
  .post(login);

router.route('/logout')
  .post(logout);

module.exports = router;
