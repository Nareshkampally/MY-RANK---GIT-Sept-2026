// Learnly 11+ / MyRank 11+ — Question Bank & Socratic Hint Routes
const express = require('express');
const router = express.Router();
const { getFirestoreDb } = require('../db/firebase');
const { generateSocraticHints } = require('../services/aiTutor');

// GET /api/questions — query question catalog with customizable limit and subject
router.get('/', async (req, res) => {
  try {
    const { subject, limit = 25, paper_id } = req.query;
    const db = getFirestoreDb();
    const parsedLimit = Math.min(Math.max(parseInt(limit) || 25, 5), 100);

    let query = db.collection('questions');

    const subjectMap = {
      maths: 'Mathematics',
      mathematics: 'Mathematics',
      vr: 'Verbal Reasoning',
      'verbal reasoning': 'Verbal Reasoning',
      nvr: 'Non-Verbal Reasoning',
      'non-verbal reasoning': 'Non-Verbal Reasoning',
      english: 'English'
    };

    const targetSubject = subject ? subjectMap[subject.toLowerCase()] || subject : null;

    if (paper_id) {
      query = query.where('test_paper_id', '==', paper_id);
    } else if (targetSubject && targetSubject !== 'composite' && targetSubject !== 'all') {
      query = query.where('subject', '==', targetSubject);
    }

    const snapshot = await query.limit(parsedLimit).get();
    let questions = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        test_paper_id: data.test_paper_id,
        question_number: data.question_number,
        subject: data.subject,
        stem: data.stem,
        passage_context: data.passage_context,
        options: data.options || [],
        correct_answer: data.correct_answer,
        explanation: data.explanation,
        socratic_hints: data.socratic_hints
      };
    });

    res.json({
      count: questions.length,
      limit: parsedLimit,
      questions
    });
  } catch (err) {
    console.error('Failed to fetch questions:', err);
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

// GET /api/questions/:id — fetch question stem, options, and passage
router.get('/:id', async (req, res) => {
  try {
    const db = getFirestoreDb();
    const doc = await db.collection('questions').doc(req.params.id).get();
    
    if (!doc.exists) {
      return res.status(404).json({ error: 'Question not found' });
    }
    
    const q = { id: doc.id, ...doc.data() };

    res.json({
      question: {
        id: q.id,
        question_number: q.question_number,
        subject: q.subject,
        stem: q.stem,
        passage_context: q.passage_context,
        options: q.options || [],
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
    const db = getFirestoreDb();
    const doc = await db.collection('questions').doc(req.params.id).get();
    
    if (!doc.exists) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const q = { id: doc.id, ...doc.data() };
    const { studentSAS, studentAnswer } = req.body;
    
    // Parse options and hints for fallback context
    const parsedOptions = q.options || [];
    const staticHints = q.socratic_hints || null;
    
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
