const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    domain: String,
    overallScore: Number,
    feedbackDetails: Object, // Stores the JSON from Python AI
    transcript: String,
}, { timestamps: true });

module.exports = mongoose.model('Report', reportSchema);