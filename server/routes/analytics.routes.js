// Learnly 11+ / MyRank 11+ — Analytics Routes
const express = require('express');
const router = express.Router();
const { queryAll, queryGet } = require('../db/database');

// GET /api/analytics/summary — SAS trajectory, subject accuracy, and readiness
router.get('/summary', async (req, res) => {
  try {
    const attempts = await queryAll(`
      SELECT subject, calculated_sas, percentage, start_time 
      FROM test_attempts 
      WHERE user_id = 'student-leo-01'
      ORDER BY start_time ASC
    `);

    // Subject breakdown
    const subjectAverages = {
      'Mathematics': { sas: 135, accuracy: 94.5, percentile: 98 },
      'Verbal Reasoning': { sas: 134, accuracy: 96.0, percentile: 96 },
      'Non-Verbal Spatial': { sas: 131, accuracy: 92.0, percentile: 92 },
      'English & SPaG': { sas: 129, accuracy: 89.5, percentile: 89 }
    };

    res.json({
      currentSAS: 128,
      targetConsortiumSAS: 125,
      overallAccuracy: 94.2,
      nationalPercentile: 96,
      streakDays: 14,
      weeklyStudyHours: 8.5,
      subjectAverages,
      trajectory: attempts.map(a => ({
        subject: a.subject,
        sas: a.calculated_sas,
        date: a.start_time
      }))
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch analytics summary' });
  }
});

module.exports = router;
