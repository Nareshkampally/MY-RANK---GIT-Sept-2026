// Learnly 11+ / MyRank 11+ — LexiVault Spaced Repetition Routes
const express = require('express');
const router = express.Router();
const { queryAll, queryGet, queryRun } = require('../db/database');
const { processWordReview } = require('../services/srsEngine');

// GET /api/vocab — retrieve vocabulary words
router.get('/', async (req, res) => {
  try {
    const category = req.query.category;
    let sql = 'SELECT * FROM vocab_words';
    let params = [];

    if (category && category !== 'all') {
      sql += ' WHERE category = ?';
      params.push(category);
    }
    sql += ' ORDER BY srs_box ASC, word ASC';

    const rows = await queryAll(sql, params);

    const words = rows.map(r => ({
      id: r.id,
      word: r.word,
      phonetic: r.phonetic,
      part_of_speech: r.part_of_speech,
      category: r.category,
      stem: r.stem,
      definition: r.definition,
      etymology: r.etymology,
      mnemonic: r.mnemonic,
      synonyms: JSON.parse(r.synonyms_json || '[]'),
      antonyms: JSON.parse(r.antonyms_json || '[]'),
      srs_box: r.srs_box,
      status: r.status
    }));

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

    const word = await queryGet('SELECT * FROM vocab_words WHERE id = ?', [wordId]);
    if (!word) {
      return res.status(404).json({ error: 'Word not found' });
    }

    const srsResult = processWordReview(word.srs_box, rating);

    await queryRun(`
      UPDATE vocab_words 
      SET srs_box = ?, status = ?, review_count = review_count + 1, last_reviewed = CURRENT_TIMESTAMP
      WHERE id = ?
    `, [srsResult.newBox, srsResult.status, wordId]);

    // Award XP to user
    await queryRun('UPDATE users SET xp = xp + ? WHERE id = ?', [srsResult.xpEarned, 'student-leo-01']);

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
