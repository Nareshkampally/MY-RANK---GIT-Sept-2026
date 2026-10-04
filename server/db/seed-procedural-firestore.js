require('dotenv').config();
const { getFirestoreDb } = require('./firebase');

async function seedFirestoreProcedurally() {
  console.log('🔥 Beginning Procedural Question Generation for Firestore...');
  const db = getFirestoreDb();

  try {
    const papersSnapshot = await db.collection('test_papers').get();
    const papers = papersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    let qCount = 0;

    for (const paper of papers) {
      // Update paper to have 50 questions
      paper.total_questions = 50;
      await db.collection('test_papers').doc(paper.id).update({ total_questions: 50 });

      console.log(`Generating 50 questions for ${paper.title} (${paper.id})...`);
      
      const batch = db.batch();
      for (let i = 1; i <= 50; i++) {
        const qId = `${paper.id}-Q${i}`;
        const question = {
          id: qId,
          test_paper_id: paper.id,
          question_number: i,
          subject: paper.subject,
          stem: `[Generated] Question ${i} for ${paper.title}. What is the correct answer?`,
          passage_context: `This is a generated passage for question ${i}. Read carefully.`,
          options: [
            { letter: 'A', text: `Option A for Q${i}` },
            { letter: 'B', text: `Option B for Q${i}` },
            { letter: 'C', text: `Option C for Q${i}` },
            { letter: 'D', text: `Option D for Q${i}` },
            { letter: 'E', text: `Option E for Q${i}` }
          ],
          correct_answer: ['A', 'B', 'C', 'D', 'E'][i % 5],
          explanation: `The correct answer is Option ${['A', 'B', 'C', 'D', 'E'][i % 5]} because this is a generated explanation for Q${i}.`,
          socratic_hints: {
            tier1: `Hint 1 for Q${i}`,
            tier2: `Hint 2 for Q${i}`,
            tier3: `Hint 3 for Q${i}`
          }
        };

        const ref = db.collection('questions').doc(qId);
        batch.set(ref, question);
        qCount++;
      }
      await batch.commit();
      console.log(`✅ Pushed 50 questions for ${paper.id}`);
    }

    console.log(`🎉 Total generated and pushed to Firestore: ${qCount} questions!`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Failed to procedurally seed Firestore:', error);
    process.exit(1);
  }
}

seedFirestoreProcedurally();
