const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const courseRouter = require('./routers/course_router');
const authRouter = require('./routers/auth_router');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON request body

// Routes
app.use('/api/courses', courseRouter);
app.use('/api/auth', authRouter);

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
