// Learnly 11+ / MyRank 11+ — Parent Portal & Live Cheer Routes
const express = require('express');
const router = express.Router();
const { getFirestoreDb } = require('../db/firebase');

// GET /api/parent/overview — consolidated overview for parent portal
router.get('/overview', async (req, res) => {
  try {
    const db = getFirestoreDb();
    const userId = req.user.uid;

    const [userDoc, cheersSnapshot, clinicsSnapshot] = await Promise.all([
      db.collection('users').doc(userId).get(),
      db.collection('parent_cheers').where('user_id', '==', userId).limit(20).get(),
      db.collection('clinic_bookings').where('user_id', '==', userId).limit(20).get()
    ]);

    const student = userDoc.exists ? userDoc.data() : { name: req.user.name || 'Student', level: 1, xp: 0 };
    const cheers = cheersSnapshot.docs
      .map(d => ({ id: d.id, ...d.data() }))
      .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''))
      .slice(0, 5);
      
    const clinics = clinicsSnapshot.docs
      .map(d => ({ id: d.id, ...d.data() }))
      .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''))
      .slice(0, 5);

    res.json({
      success: true,
      student,
      cheers,
      clinics
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch parent overview', details: err.message });
  }
});

// GET /api/parent/cheers — retrieve delivered cheer messages
router.get('/cheers', async (req, res) => {
  try {
    const db = getFirestoreDb();
    const snapshot = await db.collection('parent_cheers')
      .where('user_id', '==', req.user.uid)
      .limit(20)
      .get();
      
    const cheers = snapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''))
      .slice(0, 10);
      
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
