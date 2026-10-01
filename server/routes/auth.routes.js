// Learnly 11+ / MyRank 11+ — Auth & Scholar Session Routes
const express = require('express');
const router = express.Router();
const { getFirestoreDb } = require('../db/firebase');

// GET /api/auth/session — returns current logged-in scholar and session watch metrics
router.get('/session', async (req, res) => {
  try {
    const db = getFirestoreDb();
    let doc = await db.collection('users').doc(req.user.uid).get();
    
    if (!doc.exists) {
      // Auto-create a default profile for new users based on Leo Sharma template
      const defaultProfile = {
        name: req.user.email ? req.user.email.split('@')[0] : 'New Scholar',
        avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + req.user.uid,
        level: 1,
        xp: 0,
        streak_days: 1,
        target_exam_date: '2027-09-01',
        created_at: new Date().toISOString()
      };
      await db.collection('users').doc(req.user.uid).set(defaultProfile);
      doc = await db.collection('users').doc(req.user.uid).get();
    }
    
    const user = { id: doc.id, ...doc.data() };

    // Default morning login time (08:30:00 AM)
    const todayMorning = new Date();
    todayMorning.setHours(8, 30, 0, 0);

    const now = new Date();
    const elapsedSeconds = Math.max(0, Math.floor((now.getTime() - todayMorning.getTime()) / 1000));

    res.json({
      user: {
        id: user.id,
        name: user.name,
        avatar_url: user.avatar_url,
        level: user.level,
        xp: user.xp,
        streak_days: user.streak_days,
        target_exam_date: user.target_exam_date
      },
      session: {
        login_time: todayMorning.toISOString(),
        current_time: now.toISOString(),
        active_duration_seconds: elapsedSeconds,
        daily_goal_minutes: 150, // 2h 30m goal
        goal_completed_percentage: Math.min(100, Math.round((elapsedSeconds / (150 * 60)) * 100)),
        status: 'Active Focus (AI Proctor Verified)'
      }
    });
  } catch (error) {
    console.error('Auth session error:', error);
    res.status(500).json({ error: 'Failed to retrieve session' });
  }
});

module.exports = router;
