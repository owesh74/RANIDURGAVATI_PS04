const express = require('express');
const router = express.Router();
const { saveReport } = require('../controllers/reportController');
const Report = require('../models/Report');

// Route to save a new interview report
router.post('/save', saveReport);

// Route to fetch history for a user
router.get('/:userId', async (req, res) => {
    try {
        const reports = await Report.find({ userId: req.params.userId }).sort({ createdAt: -1 });
        res.json({ success: true, reports });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;