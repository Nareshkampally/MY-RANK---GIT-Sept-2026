require('dotenv').config();
const { getFirestoreDb } = require('./firebase');
const fs = require('fs');
const path = require('path');

async function seedFirestoreBalanced() {
  console.log('🔥 Seeding balanced 100-question bank to Firestore...');
  const db = getFirestoreDb();

  // Read seed.js to get the questions array
  const seedFileContent = fs.readFileSync(path.join(__dirname, 'seed.js'), 'utf8');

  // Extract the questions array from seed.js
  const startMarker = 'const questions = [';
  const endMarker = '  console.log(`✅ ${questions.length} unique questions seeded`);';
  
  const startIndex = seedFileContent.indexOf(startMarker);
  if (startIndex === -1) {
    throw new Error('Could not find start of questions array in seed.js');
  }

  // Find the closing bracket before the loop
  const loopMarker = '  for (const q of questions) {';
  const loopIndex = seedFileContent.indexOf(loopMarker, startIndex);
  if (loopIndex === -1) {
    throw new Error('Could not find loop marker in seed.js');
  }

  const questionsCode = seedFileContent.substring(startIndex, loopIndex).trim();
  
  // Evaluate the questions array safely
  const sandbox = {};
  const fn = new Function('sandbox', `${questionsCode}; sandbox.questions = questions;`);
  fn(sandbox);
  const questions = sandbox.questions;

  console.log(`📦 Loaded ${questions.length} questions from seed.js`);

  // Count by subject
  const subjectCounts = {};
  questions.forEach(q => {
    subjectCounts[q.subject] = (subjectCounts[q.subject] || 0) + 1;
  });
  console.log('📊 Subject breakdown:', subjectCounts);

  // Write in batches of 50 (Firestore limit is 500 per batch)
  const batchSize = 50;
  for (let i = 0; i < questions.length; i += batchSize) {
    const batch = db.batch();
    const chunk = questions.slice(i, i + batchSize);
    
    for (const q of chunk) {
      const docRef = db.collection('questions').doc(q.id);
      
      const docData = {
        id: q.id,
        test_paper_id: q.test_paper_id,
        question_number: q.question_number,
        subject: q.subject,
        stem: q.stem,
        passage_context: q.passage_context || '',
        options: typeof q.options_json === 'string' ? JSON.parse(q.options_json) : (q.options || []),
        correct_answer: q.correct_answer,
        explanation: q.explanation || '',
        socratic_hints: typeof q.socratic_hints_json === 'string' ? JSON.parse(q.socratic_hints_json) : (q.socratic_hints || {})
      };

      batch.set(docRef, docData, { merge: true });
    }

    await batch.commit();
    console.log(`✅ Committed batch ${Math.floor(i / batchSize) + 1} (${chunk.length} questions)`);
  }

  // Also seed/update test_papers
  const testPapers = [
    { id: 'mock-01', title: 'Diagnostic Baseline Assessment', subject: 'Mixed', format: 'CEM Standard', total_questions: 100, duration_mins: 60, difficulty: 'Easy', description: 'Entry-level diagnostic to establish baseline SAS across 4 sections' },
    { id: 'mock-02', title: 'GL Assessment — NVR & Maths Heavy', subject: 'Mixed', format: 'GL Format', total_questions: 100, duration_mins: 60, difficulty: 'Medium', description: 'Focus on spatial reasoning and arithmetic across 4 sections' },
    { id: 'mock-03', title: 'CEM Standard — Mixed Paper', subject: 'Mixed', format: 'CEM Standard', total_questions: 100, duration_mins: 60, difficulty: 'Medium', description: 'Balanced CEM-style mixed paper across 4 sections' },
    { id: 'mock-04', title: 'GL Assessment — Verbal Reasoning Focus', subject: 'Verbal Reasoning', format: 'GL Format', total_questions: 50, duration_mins: 45, difficulty: 'Hard', description: 'Challenging VR deep-dive paper with complex passages' },
    { id: 'mock-05', title: 'Full Consortium Simulation', subject: 'Mixed', format: 'GL + CEM Composite', total_questions: 100, duration_mins: 60, difficulty: 'Hard', description: 'Complete GL + CEM composite format — 100 questions across all 4 subjects' },
    { id: 'drill-vr-01', title: 'Verbal Reasoning Speed Drill', subject: 'Verbal Reasoning', format: 'Drill', total_questions: 25, duration_mins: 15, difficulty: 'Medium', description: 'High-speed VR questions focusing on code breaking and analogies' },
    { id: 'drill-maths-01', title: 'Mental Arithmetic Lightning Round', subject: 'Mathematics', format: 'Drill', total_questions: 25, duration_mins: 15, difficulty: 'Medium', description: 'Fractions, percentages, decimals and algebra under time pressure' },
    { id: 'drill-nvr-01', title: 'Spatial Reasoning Net Folding', subject: 'Non-Verbal Reasoning', format: 'Drill', total_questions: 25, duration_mins: 15, difficulty: 'Hard', description: '3D net folding, cube rotations and mirror reflections' },
    { id: 'drill-eng-01', title: 'Vocabulary & Cloze Rapid Fire', subject: 'English', format: 'Drill', total_questions: 25, duration_mins: 15, difficulty: 'Hard', description: 'Advanced vocabulary in context, antonym pairs and tricky cloze tests' }
  ];

  const paperBatch = db.batch();
  for (const paper of testPapers) {
    const docRef = db.collection('test_papers').doc(paper.id);
    paperBatch.set(docRef, paper, { merge: true });
  }
  await paperBatch.commit();
  console.log(`✅ Seeded ${testPapers.length} test papers to Firestore`);

  console.log('🎉 Firestore successfully populated with 100 balanced questions and updated test papers!');
  process.exit(0);
}

seedFirestoreBalanced().catch(err => {
  console.error('❌ Failed to seed Firestore:', err);
  process.exit(1);
});
