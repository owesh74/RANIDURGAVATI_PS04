const express = require('express');
const router = express.Router();
const { getRandomQuestion } = require('../controllers/questionController');

router.get('/fetch', getRandomQuestion);

module.exports = router;    