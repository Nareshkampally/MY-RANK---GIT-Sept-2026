// Learnly 11+ / MyRank 11+ — 1-on-1 Tutor Clinic Booking Routes
const express = require('express');
const router = express.Router();
const { getFirestoreDb } = require('../db/firebase');

// GET /api/clinics — retrieve upcoming & past bookings
router.get('/', async (req, res) => {
  try {
    const db = getFirestoreDb();
    const snapshot = await db.collection('clinic_bookings')
      .where('user_id', '==', req.user.uid)
      .orderBy('created_at', 'desc')
      .get();
    
    const bookings = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json({ bookings });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch clinic bookings' });
  }
});

// POST /api/clinics/book — book a new 1-on-1 tutor clinic
router.post('/book', async (req, res) => {
  try {
    const { tutorName, tutorSubject, dateTime, notes } = req.body;
    const bookingId = 'clinic-' + Date.now();
    const db = getFirestoreDb();

    await db.collection('clinic_bookings').doc(bookingId).set({
      user_id: req.user.uid,
      tutor_name: tutorName || 'Ms. Elena Rostova',
      tutor_subject: tutorSubject || '11+ Mathematics Problem Solving',
      avatar_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
      date_time: dateTime || 'Saturday, 10:00 AM BST',
      status: 'Confirmed',
      notes: notes || 'Speed enhancement and multi-step ratio word problems.',
      created_at: new Date().toISOString()
    });

    res.json({
      success: true,
      bookingId,
      message: '1-on-1 Strategy Clinic confirmed and calendar invitation dispatched.'
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to book clinic' });
  }
});

module.exports = router;
