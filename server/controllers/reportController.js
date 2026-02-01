const Report = require('../models/Report');

exports.saveReport = async (req, res) => {
    try {
        const { userId, domain, overallScore, feedbackDetails, transcript } = req.body;
        const report = await Report.create({
            userId, domain, overallScore, feedbackDetails, transcript
        });
        res.status(201).json({ success: true, report });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};