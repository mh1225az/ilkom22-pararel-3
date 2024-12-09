// config/auth.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware untuk otentikasi (verifikasi token JWT)
exports.protect = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; // ambil token dari header

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Not authorized, invalid token' });
        }
        req.user = decoded;
        next();  // lanjutkan ke route handler berikutnya
    });
};

// Otorisasi berdasarkan role
exports.authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: `Role ${req.user.role} is not authorized` });
        }
        next();
    };
};
