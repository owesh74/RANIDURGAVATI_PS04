const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

/**
 * @route   GET /api/questions/fetch
 * @desc    Fetch a unique random question strictly by domain and difficulty
 */
// server/routes/questionRoutes.js

router.get('/fetch', async (req, res) => {
    try {
        const { domain, difficulty, exclude } = req.query;

        // Start with basic filters
        let query = { domain, difficulty };

        // If exclude list exists, use the $nin (not in) operator
        if (exclude) {
            const excludeArray = Array.isArray(exclude) ? exclude : [exclude];
            query._id = { $nin: excludeArray }; 
        }

        const count = await Question.countDocuments(query);
        
        if (count === 0) {
            return res.status(404).json({ message: "Out of unique questions." });
        }

        const random = Math.floor(Math.random() * count);
        const question = await Question.findOne(query).skip(random);

        res.status(200).json({
            id: question._id,
            question: question.question,
            ideal_answer: question.ideal_answer
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;