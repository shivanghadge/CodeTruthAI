const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function judgeCode(problem, userCode, language) {
  const prompt = `
You are an expert competitive programming judge.

Problem:
${problem}

User code (${language}):
${userCode}

Do the following:
1. Check if the code is correct
2. If wrong, give the correct optimized solution
3. Analyze time and space complexity
4. Give final verdict: CORRECT / WRONG / OPTIMIZED / NEEDS IMPROVEMENT
5. Explain everything clearly
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }]
  });

  return response.choices[0].message.content;
}

module.exports = { judgeCode };
