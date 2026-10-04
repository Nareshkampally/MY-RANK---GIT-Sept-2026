const { getAuth } = require('firebase-admin/auth');

// Middleware to verify Firebase ID Token
async function verifyAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    // DEV BYPASS: If no token provided, inject dummy user for MVP testing
    req.user = { uid: 'student-leo-01', name: 'Leo Sharma' };
    return next();
  }

  const idToken = authHeader.split('Bearer ')[1];
  
  try {
    const decodedToken = await getAuth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying Firebase ID token:', error);
    res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
}

module.exports = { verifyAuth };
