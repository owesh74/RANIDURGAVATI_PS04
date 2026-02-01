const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

/**
 * @route   GET /api/questions/fetch
 * @desc    Fetch a random question based on domain and difficulty
 * @access  Public (or Private if you add Auth middleware)
 */
router.get('/fetch', async (req, res) => {
    try {
        const { domain, difficulty } = req.query;

        // Build the query object based on user selection
        let query = {};
        if (domain) query.domain = domain;
        if (difficulty) query.difficulty = difficulty;

        console.log(`Received request for: ${domain || 'Any'} - ${difficulty || 'Any'}`);

        // 1. Count how many questions match the criteria
        const count = await Question.countDocuments(query);

        if (count === 0) {
            return res.status(404).json({ 
                success: false, 
                message: "No questions found in this category. Please check your MongoDB collection." 
            });
        }

        // 2. Select a random question using skip()
        const random = Math.floor(Math.random() * count);
        const randomQuestion = await Question.findOne(query).skip(random);

        // 3. Return the question and the ideal answer for AI matching
        res.status(200).json({
            success: true,
            id: randomQuestion._id,
            question: randomQuestion.question,
            ideal_answer: randomQuestion.ideal_answer, // Used by FastAPI for semantic matching
            domain: randomQuestion.domain,
            difficulty: randomQuestion.difficulty
        });

    } catch (err) {
        console.error("Error fetching question:", err);
        res.status(500).json({ 
            success: false, 
            error: "Internal Server Error" 
        });
    }
});

/**
 * @route   POST /api/questions/add
 * @desc    Manual helper to add questions (Useful for the Hackathon)
 */
router.post('/add', async (req, res) => {
    try {
        const newQuestion = new Question(req.body);
        await newQuestion.save();
        res.status(201).json({ success: true, message: "Question added successfully" });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

module.exports = router;