const { GoogleGenAI } = require('@google/genai');

let aiClient = null;

try {
  if (process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  } else {
    console.warn("AI Tutor: GEMINI_API_KEY is not set. Socratic hints will fallback to static generation.");
  }
} catch (err) {
  console.warn("AI Tutor: Failed to initialize GoogleGenAI. Socratic hints will fallback to static generation.", err);
}

/**
 * Generate a dynamic Socratic hint based on the question, the student's SAS score, and their selected wrong answer.
 * @param {Object} question The question object from the database.
 * @param {number} studentSAS The student's SAS score to tailor the hint difficulty.
 * @param {string} studentAnswer The wrong answer the student provided (optional).
 * @returns {Promise<Object>} An object containing tier1, tier2, and tier3 hints.
 */
async function generateSocraticHints(question, studentSAS, studentAnswer = null) {
  // If the AI is not configured or fails, fallback to static hints or a generic template.
  const fallbackHints = {
    tier1: question.hint_1 || "Take a step back and read the question again carefully.",
    tier2: question.hint_2 || "Break the problem down into smaller parts.",
    tier3: question.hint_3 || "What concept are they testing here? Look closely at the details."
  };

  if (!aiClient) return fallbackHints;

  const prompt = `
You are an expert, encouraging, and highly effective 11+ exam tutor.
A student is struggling with a question. You need to provide 3 progressive Socratic hints.
The hints must NOT give away the answer, but instead guide the student to figure it out themselves.

Student's current Standard Age Score (SAS): ${studentSAS} (100 is average, 141 is max). Tailor your vocabulary and depth accordingly.
${studentAnswer ? `The student answered: "${studentAnswer}". Address this misconception if possible.` : ''}

Question Details:
Subject: ${question.subject}
Passage/Context: ${question.passage || 'None'}
Question Text: ${question.question_text}
Correct Answer: ${question.correct_answer}

Respond strictly in JSON format matching this schema:
{
  "tier1": "A gentle nudge pointing them to the right part of the question or passage.",
  "tier2": "A more specific guiding question that challenges their thinking or a specific misconception.",
  "tier3": "The strongest hint that virtually walks them to the threshold of the correct answer, without actually saying it."
}
`;

  try {
    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.7,
      }
    });
    
    if (response.text) {
      const parsedHints = JSON.parse(response.text);
      return {
        tier1: parsedHints.tier1 || fallbackHints.tier1,
        tier2: parsedHints.tier2 || fallbackHints.tier2,
        tier3: parsedHints.tier3 || fallbackHints.tier3
      };
    }
  } catch (error) {
    console.error("AI Tutor Error generating hints:", error);
  }

  return fallbackHints;
}

module.exports = {
  generateSocraticHints
};
