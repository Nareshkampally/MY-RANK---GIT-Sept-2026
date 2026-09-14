// Learnly 11+ / MyRank 11+ — Parent Portal & Live Cheer Routes
const express = require('express');
const router = express.Router();
const { queryAll, queryRun } = require('../db/database');

// GET /api/parent/cheers — retrieve delivered cheer messages
router.get('/cheers', async (req, res) => {
  try {
    const cheers = await queryAll('SELECT * FROM parent_cheers WHERE user_id = ? ORDER BY created_at DESC LIMIT 10', ['student-leo-01']);
    res.json({ cheers });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch parent cheers' });
  }
});

// POST /api/parent/cheer — send an instant cheer to the student's study screen
router.post('/cheer', async (req, res) => {
  try {
    const { message, cheerType = 'star' } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message cannot be empty' });
    }

    const cheerId = 'cheer-' + Date.now();
    await queryRun(`
      INSERT INTO parent_cheers (id, user_id, message, cheer_type, delivered)
      VALUES (?, ?, ?, ?, 1)
    `, [cheerId, 'student-leo-01', message, cheerType]);

    res.json({
      success: true,
      cheerId,
      message: 'Cheer dispatched live to Leo\'s session!'
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send cheer' });
  }
});

module.exports = router;
