const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

// Database Configuration
const connectDB = require('./config/db');

// Route Imports
const authRoutes = require('./routes/authRoutes');
const questionRoutes = require('./routes/questionRoutes');
const reportRoutes = require('./routes/reportRoutes');

// Initialize Express App
const app = express();

// Connect to MongoDB Atlas
connectDB();

// --- Middleware Stack ---
app.use(express.json()); // Parses incoming JSON requests
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST"]
})); // Critical: Allows React and FastAPI to communicate with this server
app.use(helmet()); // Security headers for production-ready code
app.use(morgan('dev')); // Logs requests to the console for easier debugging

// --- API Routes ---
app.use('/api/auth', authRoutes); // Auth: Signup, Login, JWT
app.use('/api/questions', questionRoutes); // Question Engine: Fetching domain questions
app.use('/api/reports', reportRoutes); // Reports: Saving and retrieving interview history

// Health Check Endpoint (For testing if the server is alive)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is running', database: 'Connected' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});