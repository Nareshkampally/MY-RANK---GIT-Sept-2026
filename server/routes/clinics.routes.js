// Learnly 11+ / MyRank 11+ — 1-on-1 Tutor Clinic Booking Routes
const express = require('express');
const router = express.Router();
const { queryAll, queryRun } = require('../db/database');

// GET /api/clinics — retrieve upcoming & past bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await queryAll(`
      SELECT * FROM clinic_bookings 
      WHERE user_id = 'student-leo-01' 
      ORDER BY created_at DESC
    `);
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

    await queryRun(`
      INSERT INTO clinic_bookings (id, user_id, tutor_name, tutor_subject, avatar_url, date_time, status, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      bookingId,
      'student-leo-01',
      tutorName || 'Ms. Elena Rostova',
      tutorSubject || '11+ Mathematics Problem Solving',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
      dateTime || 'Saturday, 10:00 AM BST',
      'Confirmed',
      notes || 'Speed enhancement and multi-step ratio word problems.'
    ]);

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
