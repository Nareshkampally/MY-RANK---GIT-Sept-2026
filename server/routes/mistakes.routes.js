// Learnly 11+ / MyRank 11+ — Mistake Vault Routes
const express = require('express');
const router = express.Router();
const { queryAll, queryRun } = require('../db/database');

// GET /api/mistakes — all recorded errors & traps
router.get('/', async (req, res) => {
  try {
    const mistakes = await queryAll('SELECT * FROM mistake_vault WHERE user_id = ? ORDER BY created_at DESC', ['student-leo-01']);
    res.json({ mistakes });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch mistake vault' });
  }
});

// POST /api/mistakes/:id/resolve — mark error as mastered on retry
router.post('/:id/resolve', async (req, res) => {
  try {
    await queryRun(`
      UPDATE mistake_vault 
      SET retried_count = retried_count + 1, resolved = 1 
      WHERE id = ?
    `, [req.params.id]);

    await queryRun('UPDATE users SET xp = xp + 35 WHERE id = ?', ['student-leo-01']);
    res.json({ success: true, message: 'Mistake mastered on retry' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to resolve mistake' });
  }
});

module.exports = router;
