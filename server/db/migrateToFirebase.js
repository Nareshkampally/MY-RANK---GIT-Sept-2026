const { getDb, queryAll } = require('./database');
const { getFirestoreDb } = require('./firebase');

async function migrateData() {
  console.log('🔄 Starting Database Migration from SQLite to Firestore...');
  const firestore = getFirestoreDb();

  const tables = [
    'users',
    'study_sessions',
    'test_papers',
    'questions',
    'test_attempts',
    'vocab_words',
    'mistake_vault',
    'clinic_bookings',
    'parent_cheers',
    'cohort_leaderboard'
  ];

  for (const table of tables) {
    try {
      console.log(`\n📦 Migrating table: ${table}...`);
      const rows = await queryAll(`SELECT * FROM ${table}`);
      
      const batch = firestore.batch();
      let count = 0;
      let totalCount = 0;

      for (const row of rows) {
        // Use the existing ID or generate one if missing
        const docId = row.id || firestore.collection(table).doc().id;
        const docRef = firestore.collection(table).doc(docId);
        
        // Convert any JSON strings back into objects for Firestore
        const data = { ...row };
        if (data.options_json) { data.options = JSON.parse(data.options_json); delete data.options_json; }
        if (data.socratic_hints_json) { data.socratic_hints = JSON.parse(data.socratic_hints_json); delete data.socratic_hints_json; }
        if (data.synonyms_json) { data.synonyms = JSON.parse(data.synonyms_json); delete data.synonyms_json; }
        if (data.antonyms_json) { data.antonyms = JSON.parse(data.antonyms_json); delete data.antonyms_json; }

        batch.set(docRef, data);
        count++;
        totalCount++;

        // Firestore batches can handle max 500 writes
        if (count === 450) {
          await batch.commit();
          console.log(`  Committed ${totalCount} records to ${table}...`);
          count = 0;
        }
      }

      if (count > 0) {
        await batch.commit();
        console.log(`  Committed ${totalCount} records to ${table}...`);
      }

      console.log(`✅ Finished migrating ${totalCount} records to ${table}!`);
    } catch (err) {
      console.error(`❌ Error migrating table ${table}:`, err);
    }
  }

  console.log('\n🎉 MIGRATION COMPLETE! All data is now in Firestore.');
  process.exit(0);
}

migrateData();
