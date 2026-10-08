// Learnly 11+ / MyRank 11+ — Question Bank & Socratic Hint Routes
const express = require('express');
const router = express.Router();
const { getFirestoreDb } = require('../db/firebase');
const { generateSocraticHints } = require('../services/aiTutor');

// GET /api/questions — query question catalog with customizable limit and subject
router.get('/', async (req, res) => {
  try {
    const { subject, limit = 50, paper_id } = req.query;
    const db = getFirestoreDb();
    const parsedLimit = Math.min(Math.max(parseInt(limit) || 50, 5), 200);

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
    let questions = [];

    if (paper_id) {
      const snapshot = await db.collection('questions')
        .where('test_paper_id', '==', paper_id)
        .limit(parsedLimit)
        .get();
      questions = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } else if (targetSubject && targetSubject !== 'composite' && targetSubject !== 'all') {
      const snapshot = await db.collection('questions')
        .where('subject', '==', targetSubject)
        .limit(parsedLimit)
        .get();
      questions = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } else {
      // Balanced 4-subject distribution for composite/all
      const subjects = ['Mathematics', 'Verbal Reasoning', 'Non-Verbal Reasoning', 'English'];
      const perSubj = Math.ceil(parsedLimit / subjects.length);
      
      const snapshots = await Promise.all(
        subjects.map(s => db.collection('questions').where('subject', '==', s).limit(perSubj).get())
      );

      snapshots.forEach(snap => {
        snap.docs.forEach(doc => {
          questions.push({ id: doc.id, ...doc.data() });
        });
      });
    }

    // Sort clean questions and filter out any placeholder/generated stems if authentic ones exist
    const cleanQuestions = questions.filter(q => !q.stem?.startsWith('[Generated]'));
    const finalPool = cleanQuestions.length >= Math.min(parsedLimit, 25) ? cleanQuestions : questions;

    const formattedQuestions = finalPool.slice(0, parsedLimit).map(data => ({
      id: data.id,
      test_paper_id: data.test_paper_id,
      question_number: data.question_number,
      subject: data.subject,
      stem: data.stem,
      passage_context: data.passage_context || '',
      options: data.options || [],
      correct_answer: data.correct_answer,
      explanation: data.explanation || '',
      socratic_hints: data.socratic_hints || {}
    }));

    res.json({
      count: formattedQuestions.length,
      limit: parsedLimit,
      questions: formattedQuestions
    });
  } catch (err) {
    console.error('Failed to fetch questions:', err);
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

// GET /api/questions/random — return random balanced questions across subjects
router.get('/random', async (req, res) => {
  try {
    const { limit = 20, subject } = req.query;
    const db = getFirestoreDb();
    const parsedLimit = Math.min(Math.max(parseInt(limit) || 20, 1), 100);

    const subjects = subject 
      ? [subject] 
      : ['Mathematics', 'Verbal Reasoning', 'Non-Verbal Reasoning', 'English'];
    const perSubj = Math.ceil(parsedLimit / subjects.length);

    const snapshots = await Promise.all(
      subjects.map(s => db.collection('questions').where('subject', '==', s).limit(perSubj + 5).get())
    );

    let pool = [];
    snapshots.forEach(snap => {
      snap.docs.forEach(doc => {
        pool.push({ id: doc.id, ...doc.data() });
      });
    });

    // Shuffle pool
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const selected = pool.slice(0, parsedLimit);
    res.json({
      count: selected.length,
      questions: selected
    });
  } catch (err) {
    console.error('Failed to fetch random questions:', err);
    res.status(500).json({ error: 'Failed to fetch random questions' });
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
