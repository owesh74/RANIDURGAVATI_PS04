const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    domain: String,      // e.g., "Java", "Python"
    difficulty: String,  // e.g., "Medium", "Hard"
    question: String,    // The actual text
    ideal_answer: String // The reference for the "Brainy" AI match
});

module.exports = mongoose.model('Question', QuestionSchema);