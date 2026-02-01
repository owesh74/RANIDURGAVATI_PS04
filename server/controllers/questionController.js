const questions = require('../data/questions');

exports.getRandomQuestion = (req, res) => {
    const { domain, difficulty } = req.query;
    
    // Safety check: log to your server terminal to see if the request arrived
    console.log(`Received request for: ${domain} - ${difficulty}`);

    if (questions[domain] && questions[domain][difficulty]) {
        const domainQuestions = questions[domain][difficulty];
        const question = domainQuestions[Math.floor(Math.random() * domainQuestions.length)];
        return res.json({ success: true, question });
    }
    
    res.status(404).json({ success: false, message: "No questions found" });
};