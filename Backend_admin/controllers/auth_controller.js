const jwt = require('jsonwebtoken');
const User = require('../models/user_model');
require('dotenv').config();

// Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, results) => {
    if (err || !results || results.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: results.id, role: results.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Login successful',
      token: token
    });
  });
};

// Logout
exports.logout = (req, res) => {
  // Logout dapat menghapus token di frontend
  res.status(200).json({ message: 'Logout successful' });
};
