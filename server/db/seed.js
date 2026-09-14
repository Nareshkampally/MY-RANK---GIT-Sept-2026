// Learnly 11+ / MyRank 11+ — Database Seed Data Script
const { initSchema, queryRun, queryGet } = require('./database');

async function seedDatabase() {
  await initSchema();

  // 1. Seed Student User
  await queryRun(`
    INSERT OR REPLACE INTO users (id, name, avatar_url, role, level, xp, streak_days, target_exam_date)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `, [
    'student-leo-01',
    'Leo Mitchell',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC1Qc3G-0J8L9rm3gGyiGaPyqDHos_pYWjGOp9OUrxYQBOKEFee0wgAEVlh16TfmQNiWxt-NqWOA9qqDRvl1k4fL5wg1wUsStC9xvru1w7bUYvb8xBvFL3_5_N7dxiPrOLddmAE88mzYlHc_u2zguBI01dtegvKb9IikVtYlF2Qgf5MYRiedEBTFiJvBQrG2IgC7oZDgySOe_JrXyvQgSm1X0DHDgM09DGe70xqKgqN2-8FOuRaWwWZ8A',
    'student',
    6,
    1450,
    14,
    'Sep 2025'
  ]);

  // 2. Seed Test Papers
  const papers = [
    {
      id: 'mock-04',
      title: 'Scholar Mock #04 — Verbal Reasoning & Vocabulary Timed Section',
      subject: 'Verbal Reasoning',
      format: 'GL Assessment Format',
      total_questions: 25,
      allotted_minutes: 25,
      difficulty: 'Hard',
      description: 'Comprehensive 11+ Verbal Reasoning paper covering lexical cloze, antonyms, and deductive logic.'
    },
    {
      id: 'mock-05',
      title: 'Mock #05 — Full-Length Consortium Simulation',
      subject: 'Composite (Maths, VR, NVR, English)',
      format: 'GL & CEM Composite',
      total_questions: 80,
      allotted_minutes: 60,
      difficulty: 'Exam Standard',
      description: 'Authentic exam simulation mirroring Queen Elizabeth School & Henrietta Barnett entrance format.'
    },
    {
      id: 'drill-vr-02',
      title: 'Rapid Drill #02 — Qualifier & Negation Cloze Trap Buster',
      subject: 'Verbal Reasoning',
      format: 'CEM Fast-Paced Cloze',
      total_questions: 15,
      allotted_minutes: 15,
      difficulty: 'Medium',
      description: 'Specialized cloze exercises tackling qualifier traps and double negatives.'
    },
    {
      id: 'drill-nvr-01',
      title: 'Drill #01 — 3D Spatial Net Folding Rapid Practice',
      subject: 'Non-Verbal Spatial',
      format: 'GL Spatial Net',
      total_questions: 10,
      allotted_minutes: 10,
      difficulty: 'Hard',
      description: '3D cube unfolding, rotations, and reflection matrices.'
    }
  ];

  for (const p of papers) {
    await queryRun(`
      INSERT OR REPLACE INTO test_papers (id, title, subject, format, total_questions, allotted_minutes, difficulty, description)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [p.id, p.title, p.subject, p.format, p.total_questions, p.allotted_minutes, p.difficulty, p.description]);
  }

  // 3. Seed Question Bank (including Q14 with Socratic Hints)
  const q14Options = [
    { letter: 'A', text: '1 and B (Sagacious & Fatuous)' },
    { letter: 'B', text: '2 and A (Benevolent & Malicious)' },
    { letter: 'C', text: '3 and C (Reticent & Gregarious)' },
    { letter: 'D', text: '1 and A (Sagacious & Malicious)' },
    { letter: 'E', text: 'Both A and B are antonym pairs' }
  ];

  const q14Hints = {
    tier1: 'Notice the contrast phrase: the librarian gives insightful advice, while the apprentice is hasty and thoughtless.',
    tier2: 'Root analysis: Sagacious comes from Latin sagax (wise). Fatuous means silly or foolish.',
    tier3: 'Correct pair is 1 and B (Sagacious & Fatuous). Select Option A.'
  };

  await queryRun(`
    INSERT OR REPLACE INTO questions (id, test_paper_id, question_number, subject, stem, passage_context, options_json, correct_answer, explanation, socratic_hints_json)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [
    'VR-L5-0428',
    'mock-04',
    14,
    'Verbal Reasoning',
    'Select the word from Group 1 and the word from Group 2 that are most opposite in meaning:',
    'The old librarian was known for her sagacious advice — her recommendations were never trivial but always insightful, helping students navigate complex literary debates with remarkable clarity. In contrast, the young apprentice was often impetuous, making hasty judgments without considering the broader consequences of his literary critiques.',
    JSON.stringify(q14Options),
    'A',
    'Sagacious means wise and discerning. Fatuous means silly and foolish. They are antonyms.',
    JSON.stringify(q14Hints)
  ]);

  // 4. Seed Test Attempts (Today's Timecard History)
  const now = new Date();
  const d1Start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 15, 0);
  const d1Finish = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 42, 30);

  const d2Start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 30, 0);
  const d2Finish = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 43, 15);

  const d3Start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 20, 0);
  const d3Finish = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 35, 10);

  const attempts = [
    {
      id: 'attempt-01',
      user_id: 'student-leo-01',
      test_paper_id: 'mock-04',
      title: 'Mock #04 — Verbal Reasoning Section',
      subject: 'Verbal Reasoning',
      start_time: d1Start.toISOString(),
      finish_time: d1Finish.toISOString(),
      duration_seconds: 27 * 60 + 30,
      raw_score: 24,
      max_score: 25,
      percentage: 96.0,
      calculated_sas: 134,
      percentile: 98,
      pacing_seconds_per_q: 48,
      proctor_status: 'Verified by AI Proctor Engine'
    },
    {
      id: 'attempt-02',
      user_id: 'student-leo-01',
      test_paper_id: 'drill-vr-02',
      title: 'Rapid Cloze Drill #02',
      subject: 'Verbal Reasoning',
      start_time: d2Start.toISOString(),
      finish_time: d2Finish.toISOString(),
      duration_seconds: 13 * 60 + 15,
      raw_score: 15,
      max_score: 15,
      percentage: 100.0,
      calculated_sas: 138,
      percentile: 99,
      pacing_seconds_per_q: 36,
      proctor_status: 'Verified by AI Proctor Engine'
    },
    {
      id: 'attempt-03',
      user_id: 'student-leo-01',
      test_paper_id: 'drill-nvr-01',
      title: '3D Spatial Net Rapid Practice',
      subject: 'Non-Verbal Spatial',
      start_time: d3Start.toISOString(),
      finish_time: d3Finish.toISOString(),
      duration_seconds: 15 * 60 + 10,
      raw_score: 18,
      max_score: 20,
      percentage: 90.0,
      calculated_sas: 131,
      percentile: 96,
      pacing_seconds_per_q: 45,
      proctor_status: 'Verified by AI Proctor Engine'
    }
  ];

  for (const a of attempts) {
    await queryRun(`
      INSERT OR REPLACE INTO test_attempts (
        id, user_id, test_paper_id, title, subject, start_time, finish_time,
        duration_seconds, raw_score, max_score, percentage, calculated_sas,
        percentile, pacing_seconds_per_q, proctor_status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      a.id, a.user_id, a.test_paper_id, a.title, a.subject, a.start_time, a.finish_time,
      a.duration_seconds, a.raw_score, a.max_score, a.percentage, a.calculated_sas,
      a.percentile, a.pacing_seconds_per_q, a.proctor_status
    ]);
  }

  // 5. Seed Vocabulary Words
  const vocabWords = [
    {
      id: 'v1',
      word: 'Sagacious',
      phonetic: '/səˈɡeɪ.ʃəs/',
      part_of_speech: 'Adjective',
      category: 'Antonyms',
      stem: 'The old librarian was known for her ______ advice during complex debates.',
      definition: 'Having or showing keen mental discernment, sound judgment, and farsighted wisdom.',
      etymology: 'From Latin "sagax" (quick-scented, acute of mind).',
      mnemonic: '🧠 Think of a wise old SAGE who gives sound, sagacious guidance.',
      synonyms: ['Astute', 'Prudent', 'Discerning'],
      antonyms: ['Fatuous', 'Foolish', 'Imprudent'],
      srs_box: 3,
      status: 'Mastered'
    },
    {
      id: 'v2',
      word: 'Impetuous',
      phonetic: '/ɪmˈpetʃ.u.əs/',
      part_of_speech: 'Adjective',
      category: 'Antonyms',
      stem: 'His ______ decision to charge without a plan cost the team the lead.',
      definition: 'Acting or done quickly and without thought or care; impulsive and rash.',
      etymology: 'From Late Latin "impetuosus" (violent rush).',
      mnemonic: '⚡ Sounds like "IMPULSIVE" — acting on sudden rash impulse!',
      synonyms: ['Impulsive', 'Rash', 'Headlong'],
      antonyms: ['Cautious', 'Deliberate', 'Wary'],
      srs_box: 2,
      status: 'Getting There'
    },
    {
      id: 'v3',
      word: 'Benevolent',
      phonetic: '/bəˈnev.əl.ənt/',
      part_of_speech: 'Adjective',
      category: 'Synonyms',
      stem: 'The ______ benefactor donated funds to build the new school library.',
      definition: 'Well meaning and kindly; serving a charitable purpose.',
      etymology: 'From Latin "bene" (well) + "volent" (wishing).',
      mnemonic: '❤️ "BENE" means GOOD. Wishing goodwill to all people!',
      synonyms: ['Kindhearted', 'Magnanimous', 'Altruistic'],
      antonyms: ['Malicious', 'Malevolent', 'Spiteful'],
      srs_box: 3,
      status: 'Mastered'
    },
    {
      id: 'v4',
      word: 'Reticent',
      phonetic: '/ˈret.ɪ.sənt/',
      part_of_speech: 'Adjective',
      category: 'Antonyms',
      stem: 'He was extremely ______ about his past achievements, rarely speaking about his awards.',
      definition: 'Not revealing one\'s thoughts or feelings readily; reserved in speech.',
      etymology: 'From Latin "reticere" (to keep silent).',
      mnemonic: '🤐 Sounds like "RELUCTANT to speak". Quiet and measured.',
      synonyms: ['Reserved', 'Taciturn', 'Withdrawn'],
      antonyms: ['Gregarious', 'Loquacious', 'Garrulous'],
      srs_box: 1,
      status: 'Needs Practice'
    },
    {
      id: 'v5',
      word: 'Ambiguous',
      phonetic: '/æmˈbɪɡ.ju.əs/',
      part_of_speech: 'Adjective',
      category: 'Tricky Cloze',
      stem: 'The detective noted that the witness statement was dangerously ______ and open to double meaning.',
      definition: 'Open to more than one interpretation; having a double meaning.',
      etymology: 'From Latin "ambiguus" (doubtful, ambi- meaning both).',
      mnemonic: '🔀 "AMBI" means BOTH (like ambidextrous). It could mean two things!',
      synonyms: ['Equivocal', 'Obscure', 'Enigmatic'],
      antonyms: ['Lucid', 'Unambiguous', 'Explicit'],
      srs_box: 2,
      status: 'Getting There'
    },
    {
      id: 'v6',
      word: 'Voracious',
      phonetic: '/vəˈreɪ.ʃəs/',
      part_of_speech: 'Adjective',
      category: 'Synonyms',
      stem: 'From an early age, Maya was a ______ reader who devoured two novels every weekend.',
      definition: 'Wanting or devouring great quantities of books or food eagerly.',
      etymology: 'From Latin "vorare" (to devour).',
      mnemonic: '📚 Like a CARNIVORE for books! Devouring knowledge hungrily.',
      synonyms: ['Insatiable', 'Ravenous', 'Avid'],
      antonyms: ['Apathetic', 'Quenched', 'Satiated'],
      srs_box: 1,
      status: 'Needs Practice'
    }
  ];

  for (const v of vocabWords) {
    await queryRun(`
      INSERT OR REPLACE INTO vocab_words (
        id, word, phonetic, part_of_speech, category, stem, definition,
        etymology, mnemonic, synonyms_json, antonyms_json, srs_box, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      v.id, v.word, v.phonetic, v.part_of_speech, v.category, v.stem, v.definition,
      v.etymology, v.mnemonic, JSON.stringify(v.synonyms), JSON.stringify(v.antonyms),
      v.srs_box, v.status
    ]);
  }

  // 6. Seed Mistake Vault
  await queryRun(`
    INSERT OR REPLACE INTO mistake_vault (id, user_id, question_id, question_stem, subject, error_type, user_mistake, correct_answer, explanation)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [
    'm-01',
    'student-leo-01',
    'VR-L5-0428',
    'Q14 Lexical Breakdown: Untoward vs Unseemly',
    'Verbal Reasoning',
    'Qualifier Overlook',
    'Selected Option D (Sagacious & Malicious)',
    'Option A (Sagacious & Fatuous)',
    'Malicious is an opposite of Benevolent, not Sagacious. Sagacious means wise; its opposite is Fatuous (foolish).'
  ]);

  // 7. Seed Clinic Bookings
  await queryRun(`
    INSERT OR REPLACE INTO clinic_bookings (id, user_id, tutor_name, tutor_subject, avatar_url, date_time, status, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `, [
    'clinic-01',
    'student-leo-01',
    'Mr. David Thompson',
    'NVR 3D Spatial Strategy',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    'Tomorrow, 4:00 PM BST',
    'Confirmed',
    'Focus on hexagonal 3D isometric net rotations and reflection matrices.'
  ]);

  // 8. Seed Cohort Leaderboard
  const cohort = [
    { id: 'c1', rank: 1, name: 'Aarav S.', school: 'Queen Elizabeth\'s School', sas: 139, xp: 2450, accuracy: 98.2, tests: 48, badge: 'Gold Crown' },
    { id: 'c2', rank: 2, name: 'Maya P.', school: 'Henrietta Barnett', sas: 136, xp: 2180, accuracy: 96.8, tests: 42, badge: 'Silver Medal' },
    { id: 'c3', rank: 3, name: 'Oliver K.', school: 'Wilson\'s School', sas: 134, xp: 1950, accuracy: 95.4, tests: 39, badge: 'Bronze Medal' },
    { id: 'c4', rank: 4, name: 'Leo Mitchell (You)', school: 'Consortium Target', sas: 128, xp: 1450, accuracy: 94.2, tests: 34, badge: 'Top 4% Scholar' },
    { id: 'c5', rank: 5, name: 'Sophia H.', school: 'St Olave\'s Grammar', sas: 127, xp: 1390, accuracy: 93.6, tests: 31, badge: 'Top 5% Scholar' }
  ];

  for (const c of cohort) {
    await queryRun(`
      INSERT OR REPLACE INTO cohort_leaderboard (id, rank, name, school_preference, sas, xp, accuracy, tests_completed, badge)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [c.id, c.rank, c.name, c.school, c.sas, c.xp, c.accuracy, c.tests, c.badge]);
  }

  console.log('Database seeded successfully with authentic 11+ educational data.');
}

if (require.main === module) {
  seedDatabase().catch(console.error);
}

module.exports = { seedDatabase };
