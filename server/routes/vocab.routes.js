// Learnly 11+ / MyRank 11+ — LexiVault Spaced Repetition Routes
const express = require('express');
const router = express.Router();
const { getFirestoreDb } = require('../db/firebase');
const { FieldValue } = require('firebase-admin/firestore');
const { processWordReview } = require('../services/srsEngine');

// GET /api/vocab — retrieve vocabulary words
router.get('/', async (req, res) => {
  try {
    const category = req.query.category;
    const db = getFirestoreDb();
    let query = db.collection('vocab_words');

    if (category && category !== 'all') {
      query = query.where('category', '==', category);
    }
    
    // Note: Firestore requires a composite index for where() and orderBy() on different fields.
    // If not created, it will throw an error with a URL to create it.
    // So we just sort client side or omit orderBy here if we hit index errors.
    // For now we will just use get() and sort locally to avoid forcing the user to build indexes.
    const snapshot = await query.get();
    
    let words = snapshot.docs.map(doc => {
      const r = doc.data();
      return {
        id: doc.id,
        word: r.word,
        phonetic: r.phonetic,
        part_of_speech: r.part_of_speech,
        category: r.category,
        stem: r.stem,
        definition: r.definition,
        etymology: r.etymology,
        mnemonic: r.mnemonic,
        synonyms: r.synonyms || [],
        antonyms: r.antonyms || [],
        srs_box: r.srs_box,
        status: r.status
      };
    });

    // Local sort to avoid index requirements
    words.sort((a, b) => {
      if (a.srs_box === b.srs_box) return a.word.localeCompare(b.word);
      return a.srs_box - b.srs_box;
    });

    // Calculate box summary
    const masteredCount = words.filter(w => w.status === 'Mastered').length;
    const learningCount = words.filter(w => w.status === 'Getting There').length;
    const practiceCount = words.filter(w => w.status === 'Needs Practice').length;

    res.json({
      words,
      stats: {
        total: words.length,
        mastered: masteredCount,
        learning: learningCount,
        needsPractice: practiceCount
      }
    });
  } catch (err) {
    console.error('Vocab fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch vocabulary' });
  }
});

// POST /api/vocab/:id/review — update Leitner status
router.post('/:id/review', async (req, res) => {
  try {
    const wordId = req.params.id;
    const { rating = 'Mastered' } = req.body;
    const db = getFirestoreDb();

    const wordDoc = await db.collection('vocab_words').doc(wordId).get();
    if (!wordDoc.exists) {
      return res.status(404).json({ error: 'Word not found' });
    }
    const word = wordDoc.data();

    const srsResult = processWordReview(word.srs_box, rating);

    await db.collection('vocab_words').doc(wordId).update({
      srs_box: srsResult.newBox,
      status: srsResult.status,
      review_count: FieldValue.increment(1),
      last_reviewed: new Date().toISOString()
    });

    // Award XP to user
    await db.collection('users').doc(req.user.uid).update({
      xp: FieldValue.increment(srsResult.xpEarned)
    });

    res.json({
      success: true,
      wordId,
      srs: srsResult
    });
  } catch (err) {
    console.error('Vocab review error:', err);
    res.status(500).json({ error: 'Failed to update vocabulary review' });
  }
});

module.exports = router;
