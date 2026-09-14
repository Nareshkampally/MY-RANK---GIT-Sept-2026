// Learnly 11+ / MyRank 11+ — Question Bank & Socratic Hint Routes
const express = require('express');
const router = express.Router();
const { queryGet } = require('../db/database');
const { generateSocraticHints } = require('../services/aiTutor');

// GET /api/questions/:id — fetch question stem, options, and passage
router.get('/:id', async (req, res) => {
  try {
    const q = await queryGet('SELECT * FROM questions WHERE id = ?', [req.params.id]);
    if (!q) {
      return res.status(404).json({ error: 'Question not found' });
    }

    res.json({
      question: {
        id: q.id,
        question_number: q.question_number,
        subject: q.subject,
        stem: q.stem,
        passage_context: q.passage_context,
        options: JSON.parse(q.options_json),
        correct_answer: q.correct_answer,
        explanation: q.explanation
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch question' });
  }
});

// GET /api/questions/:id/hints — 3-tier Socratic scaffolding hints via AI
router.post('/:id/hints', async (req, res) => {
  try {
    const q = await queryGet('SELECT * FROM questions WHERE id = ?', [req.params.id]);
    if (!q) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const { studentSAS, studentAnswer } = req.body;
    
    // Parse options and hints for fallback context
    const parsedOptions = JSON.parse(q.options_json || '[]');
    const staticHints = q.socratic_hints_json ? JSON.parse(q.socratic_hints_json) : null;
    
    // Construct question details for AI
    const questionDetails = {
      subject: q.subject,
      passage: q.passage_context,
      question_text: q.stem,
      correct_answer: q.correct_answer,
      hint_1: staticHints?.tier1,
      hint_2: staticHints?.tier2,
      hint_3: staticHints?.tier3
    };

    const hints = await generateSocraticHints(questionDetails, studentSAS || 100, studentAnswer);
    res.json({ hints });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch AI hints' });
  }
});

module.exports = router;
