const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    domain: { 
        type: String, 
        enum: ['Java', 'Python', 'DSA', 'ML', 'HR', 'Cloud'], 
        required: true 
    },
    difficulty: { 
        type: String, 
        enum: ['Easy', 'Medium', 'Hard'], 
        default: 'Medium' 
    },
    status: { type: String, default: 'active' }, // active, completed
}, { timestamps: true });

module.exports = mongoose.model('Session', sessionSchema);