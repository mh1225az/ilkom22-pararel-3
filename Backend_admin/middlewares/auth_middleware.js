const jwt = require('jsonwebtoken');
const connection = require('./db');
require('dotenv').config();

exports.protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Ambil token dari header

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Simpan data pengguna dari token ke dalam request
    next();
  } catch (err) {
    res.status(401).json({ message: 'Not authorized' });
  }
};
