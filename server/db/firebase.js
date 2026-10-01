const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../../serviceAccountKey.json');

let db;

function getFirestoreDb() {
  if (!db) {
    initializeApp({
      credential: cert(serviceAccount)
    });
    db = getFirestore();
    console.log('✅ Connected to Firebase Cloud Firestore');
  }
  return db;
}

module.exports = {
  getFirestoreDb
};
