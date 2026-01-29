const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
  problemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Problem"
  },
  userCode: String,
  aiCode: String,
  verdict: String,   // correct / wrong / optimized
  language: String
}, { timestamps: true });

module.exports = mongoose.model("Solution", solutionSchema);
