const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
let db;

function getFirestoreDb() {
  if (!db) {
    let credentialOptions;
    
    // For Railway / Production: Load from environment variable
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
      credentialOptions = cert(serviceAccount);
      console.log('🔒 Using Firebase credentials from Environment Variable (Railway)');
    } else {
      // For Local Development: Load from file
      try {
        const serviceAccount = require('../../serviceAccountKey.json');
        credentialOptions = cert(serviceAccount);
        console.log('📁 Using Firebase credentials from local serviceAccountKey.json');
      } catch (err) {
        console.error('❌ Failed to load Firebase credentials. Please set FIREBASE_SERVICE_ACCOUNT env var or provide serviceAccountKey.json');
        throw err;
      }
    }

    initializeApp({
      credential: credentialOptions
    });
    db = getFirestore();
    console.log('✅ Connected to Firebase Cloud Firestore');
  }
  return db;
}

module.exports = {
  getFirestoreDb
};
