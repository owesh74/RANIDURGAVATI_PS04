const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db'); // Import DB config
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();
// Inside index.js



// Connect to Database
connectDB();


const app = express();
// ... (rest of your existing code from Step 2)

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet()); // Security headers
app.use(morgan('dev')); // Logging
app.use('/api/auth', authRoutes);

// Health Check Route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});