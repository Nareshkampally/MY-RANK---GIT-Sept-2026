// Learnly 11+ / MyRank 11+ — Cohort Leaderboard Routes
const express = require('express');
const router = express.Router();
const { queryAll } = require('../db/database');

// GET /api/leaderboard — retrieve cohort rankings and podium
router.get('/', async (req, res) => {
  try {
    const ranks = await queryAll('SELECT * FROM cohort_leaderboard ORDER BY rank ASC');
    const podium = ranks.slice(0, 3);
    const cohortList = ranks;

    res.json({
      totalCandidates: 1480,
      yourRank: 4,
      podium,
      rankings: cohortList
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

module.exports = router;
