require('dotenv').config();
const { getFirestoreDb } = require('./firebase');
const { queryAll } = require('./database');

async function seedFirestore() {
  console.log('🔥 Beginning SQLite to Firestore Migration...');
  const db = getFirestoreDb();

  try {
    // 1. Users
    const users = await queryAll('SELECT * FROM users');
    for (const u of users) {
      await db.collection('users').doc(u.id).set(u);
    }
    console.log(`✅ Migrated ${users.length} users.`);

    // 2. Test Papers
    const testPapers = await queryAll('SELECT * FROM test_papers');
    for (const paper of testPapers) {
      await db.collection('test_papers').doc(paper.id).set(paper);
    }
    console.log(`✅ Migrated ${testPapers.length} test papers.`);

    // 3. Questions
    const questions = await queryAll('SELECT * FROM questions');
    let qCount = 0;
    // Batch writes for questions
    for (let i = 0; i < questions.length; i += 500) {
      const batch = db.batch();
      const chunk = questions.slice(i, i + 500);
      for (const q of chunk) {
        if (q.options_json) q.options = JSON.parse(q.options_json);
        if (q.socratic_hints_json) q.socratic_hints = JSON.parse(q.socratic_hints_json);
        delete q.options_json;
        delete q.socratic_hints_json;
        const ref = db.collection('questions').doc(q.id);
        batch.set(ref, q);
      }
      await batch.commit();
      qCount += chunk.length;
    }
    console.log(`✅ Migrated ${qCount} questions.`);

    // 4. Test Attempts
    const attempts = await queryAll('SELECT * FROM test_attempts');
    let aCount = 0;
    for (let i = 0; i < attempts.length; i += 500) {
      const batch = db.batch();
      const chunk = attempts.slice(i, i + 500);
      for (const a of chunk) {
        const ref = db.collection('test_attempts').doc(a.id);
        batch.set(ref, a);
      }
      await batch.commit();
      aCount += chunk.length;
    }
    console.log(`✅ Migrated ${aCount} test attempts.`);

    // 5. Vocab Words
    const vocab = await queryAll('SELECT * FROM vocab_words');
    for (const v of vocab) {
      if (v.synonyms) v.synonyms = JSON.parse(v.synonyms);
      if (v.antonyms) v.antonyms = JSON.parse(v.antonyms);
      await db.collection('vocab_words').doc(v.id).set(v);
    }
    console.log(`✅ Migrated ${vocab.length} vocab words.`);

    console.log('🎉 Firestore Seed Complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Failed to migrate to Firestore:', error);
    process.exit(1);
  }
}

seedFirestore();
