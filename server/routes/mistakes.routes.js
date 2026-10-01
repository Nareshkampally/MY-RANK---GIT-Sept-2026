// Learnly 11+ / MyRank 11+ — Mistake Vault Routes
const express = require('express');
const router = express.Router();
const { getFirestoreDb } = require('../db/firebase');
const { FieldValue } = require('firebase-admin/firestore');

// GET /api/mistakes — all recorded errors & traps
router.get('/', async (req, res) => {
  try {
    const db = getFirestoreDb();
    const snapshot = await db.collection('mistake_vault')
      .where('user_id', '==', req.user.uid)
      .orderBy('created_at', 'desc')
      .get();
      
    const mistakes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json({ mistakes });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch mistake vault' });
  }
});

// POST /api/mistakes/:id/resolve — mark error as mastered on retry
router.post('/:id/resolve', async (req, res) => {
  try {
    const db = getFirestoreDb();
    const mistakeRef = db.collection('mistake_vault').doc(req.params.id);
    
    await mistakeRef.update({
      retried_count: FieldValue.increment(1),
      resolved: 1
    });

    const userRef = db.collection('users').doc(req.user.uid);
    await userRef.update({
      xp: FieldValue.increment(35)
    });
    
    res.json({ success: true, message: 'Mistake mastered on retry' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to resolve mistake' });
  }
});

module.exports = router;
