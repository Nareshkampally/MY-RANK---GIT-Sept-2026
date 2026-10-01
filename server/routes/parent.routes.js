// Learnly 11+ / MyRank 11+ — Parent Portal & Live Cheer Routes
const express = require('express');
const router = express.Router();
const { getFirestoreDb } = require('../db/firebase');

// GET /api/parent/cheers — retrieve delivered cheer messages
router.get('/cheers', async (req, res) => {
  try {
    const db = getFirestoreDb();
    const snapshot = await db.collection('parent_cheers')
      .where('user_id', '==', req.user.uid)
      .orderBy('created_at', 'desc')
      .limit(10)
      .get();
      
    const cheers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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
    const db = getFirestoreDb();
    
    await db.collection('parent_cheers').doc(cheerId).set({
      user_id: req.user.uid,
      message: message,
      cheer_type: cheerType,
      delivered: 1,
      created_at: new Date().toISOString()
    });

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
