const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB database
connectDB();

const app = express();

// Middleware setup
app.use(express.json());  // for parsing application/json
app.use(cors());          // for enabling Cross-Origin Request
app.use(morgan('dev'));   // HTTP request logging

// Routes setup
app.use('/api/courses', require('./routes/course.router'));
app.use('/api/materials', require('./routes/material.router'));
app.use('/api/profile', require('./routes/profile.router'));

// Error handling middleware (catch any unhandled errors)
app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        error: err.message || 'Server Error'
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});