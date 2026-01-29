const express = require("express");
const router = express.Router();
const { judgeCode } = require("../services/aiJudge");
const Problem = require("../models/Problem");
const Solution = require("../models/Solution");

router.post("/judge", async (req, res) => {
  try {
    const { problemId, userCode, language } = req.body;

    const problem = await Problem.findById(problemId);

    const aiResult = await judgeCode(problem.description, userCode, language);

    const solution = await Solution.create({
      problemId,
      userCode,
      aiCode: aiResult,
      verdict: "AI_ANALYSIS",
      language
    });

    res.json({
      verdict: "AI_ANALYSIS_READY",
      aiResult,
      solutionId: solution._id
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
