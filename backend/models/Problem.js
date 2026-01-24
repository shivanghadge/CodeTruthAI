const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    input: { type: String },
    output: { type: String },
    language: { type: String, default: 'Java' },
    aiSolution: { type: String },
    verifiedSolution: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Problem', ProblemSchema);
