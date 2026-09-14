// Learnly 11+ / MyRank 11+ — Question Bank & Socratic Hint Routes
const express = require('express');
const router = express.Router();
const { queryGet } = require('../db/database');

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

// GET /api/questions/:id/hints — 3-tier Socratic scaffolding hints
router.get('/:id/hints', async (req, res) => {
  try {
    const q = await queryGet('SELECT socratic_hints_json, stem FROM questions WHERE id = ?', [req.params.id]);
    if (!q || !q.socratic_hints_json) {
      return res.json({
        hints: {
          tier1: 'Break the problem down and identify the main relationship between the items.',
          tier2: 'Eliminate two obvious wrong answers using contextual clues.',
          tier3: 'Compare the remaining two options against the grammatical structure.'
        }
      });
    }

    res.json({ hints: JSON.parse(q.socratic_hints_json) });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch hints' });
  }
});

module.exports = router;
