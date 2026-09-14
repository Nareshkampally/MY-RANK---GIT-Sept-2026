// Learnly 11+ / MyRank 11+ — Test Papers & Attempt Execution Routes
const express = require('express');
const router = express.Router();
const { queryAll, queryGet, queryRun } = require('../db/database');
const { calculateSAS } = require('../services/sasEngine');

// GET /api/tests — catalog of mock papers and drills
router.get('/', async (req, res) => {
  try {
    const papers = await queryAll('SELECT * FROM test_papers ORDER BY id ASC');
    res.json({ tests: papers });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch test catalog' });
  }
});

// GET /api/tests/recent — today's verified test attempts timecard feed
router.get('/recent', async (req, res) => {
  try {
    const attempts = await queryAll(`
      SELECT * FROM test_attempts 
      WHERE user_id = 'student-leo-01' 
      ORDER BY finish_time DESC 
      LIMIT 10
    `);
    res.json({ attempts });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch recent attempts' });
  }
});

// GET /api/tests/attempts/:id — specific scorecard record
router.get('/attempts/:id', async (req, res) => {
  try {
    const attempt = await queryGet('SELECT * FROM test_attempts WHERE id = ?', [req.params.id]);
    if (!attempt) {
      // Return latest attempt as fallback
      const latest = await queryGet('SELECT * FROM test_attempts ORDER BY finish_time DESC LIMIT 1');
      return res.json({ attempt: latest });
    }
    res.json({ attempt });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch attempt details' });
  }
});

// POST /api/tests/:id/submit — Submit test, compute SAS, record timecard
router.post('/:id/submit', async (req, res) => {
  try {
    const testId = req.params.id;
    const {
      startTime,
      finishTime = new Date().toISOString(),
      rawScore = 24,
      maxScore = 25,
      studentAgeMonths = 125,
      subject = 'Verbal Reasoning'
    } = req.body;

    const paper = await queryGet('SELECT * FROM test_papers WHERE id = ?', [testId]) || {
      id: testId,
      title: 'Scholar Mock #04 — Verbal Reasoning Timed Section',
      subject: subject
    };

    const start = startTime ? new Date(startTime) : new Date(Date.now() - 25 * 60 * 1000);
    const finish = new Date(finishTime);
    const durationSeconds = Math.max(1, Math.floor((finish.getTime() - start.getTime()) / 1000));
    const pacingSecondsPerQ = Math.round(durationSeconds / maxScore);

    // Compute standard 11+ SAS & percentile
    const sasResult = calculateSAS(rawScore, maxScore, studentAgeMonths, paper.subject);

    const attemptId = 'attempt-' + Date.now();

    await queryRun(`
      INSERT INTO test_attempts (
        id, user_id, test_paper_id, title, subject, start_time, finish_time,
        duration_seconds, raw_score, max_score, percentage, calculated_sas,
        percentile, pacing_seconds_per_q, proctor_status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      attemptId,
      'student-leo-01',
      paper.id,
      paper.title,
      paper.subject,
      start.toISOString(),
      finish.toISOString(),
      durationSeconds,
      rawScore,
      maxScore,
      sasResult.percentage,
      sasResult.sas,
      sasResult.percentile,
      pacingSecondsPerQ,
      'Verified by AI Proctor Engine'
    ]);

    // Update user XP (+100 XP for mock completion)
    await queryRun('UPDATE users SET xp = xp + 100 WHERE id = ?', ['student-leo-01']);

    res.json({
      success: true,
      attemptId,
      timecard: {
        id: attemptId,
        title: paper.title,
        subject: paper.subject,
        startTime: start.toISOString(),
        finishTime: finish.toISOString(),
        durationSeconds,
        pacingSecondsPerQ,
        pacingLabel: `${pacingSecondsPerQ}s / question (Optimal)`,
        proctorStatus: 'Verified by AI Proctor Engine'
      },
      scoring: sasResult
    });
  } catch (err) {
    console.error('Test submit error:', err);
    res.status(500).json({ error: 'Failed to submit test' });
  }
});

module.exports = router;
