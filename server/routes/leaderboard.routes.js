// Learnly 11+ / MyRank 11+ — Cohort Leaderboard Routes
const express = require('express');
const router = express.Router();
const { queryAll } = require('../db/database');

// GET /api/leaderboard — retrieve cohort rankings and podium
router.get('/', async (req, res) => {
  try {
    const ranks = await queryAll('SELECT * FROM cohort_leaderboard ORDER BY rank ASC');
    
    // Compute podium (top 3)
    const podium = ranks.slice(0, 3);
    
    // Full table with user marked
    const table = ranks.map(r => ({
      ...r,
      isUser: r.name && r.name.toLowerCase().includes('leo')
    }));

    // Your stats
    const you = table.find(r => r.isUser) || { rank: 4, sas: 128, xp: 1450, accuracy: 94.2, tests_completed: 34 };
    
    res.json({
      totalCandidates: 1480,
      yourRank: you.rank || 4,
      podium,
      table: table.slice(3), // Everyone after top 3
      yourStats: {
        rank: you.rank || 4,
        sas: you.sas || 128,
        xp: you.xp || 1450,
        accuracy: you.accuracy || 94.2,
        tests_completed: you.tests_completed || 34,
        streak: 14,
        percentile: 96
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});


module.exports = router;
