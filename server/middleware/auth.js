const { getAuth } = require('firebase-admin/auth');

// Middleware to verify Firebase ID Token
async function verifyAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  const isProduction = process.env.NODE_ENV === 'production';
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    if (isProduction) {
      return res.status(401).json({ error: 'Unauthorized: Missing or malformed Authorization header' });
    }
    // DEV / LOCAL TESTING BYPASS: If no token provided in development, inject dummy user
    req.user = { uid: 'student-leo-01', name: 'Leo Sharma' };
    return next();
  }

  const idToken = authHeader.split('Bearer ')[1];
  
  try {
    const decodedToken = await getAuth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    if (!isProduction && idToken === 'demo-token') {
      req.user = { uid: 'student-leo-01', name: 'Leo Sharma' };
      return next();
    }
    console.error('Error verifying Firebase ID token:', error.message);
    res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
}

module.exports = { verifyAuth };
