// Learnly 11+ / MyRank 11+ — Production Express Server
require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const { getFirestoreDb } = require('./db/firebase');

const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 8080;
const ROOT_DIR = path.join(__dirname, '..');

// Production Middlewares
app.use(helmet({
  contentSecurityPolicy: false, // Disabled for now to not break inline scripts/styles during migration
}));
app.use(compression()); // Gzip compression
// CORS Origin Restrictions
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',').map(s => s.trim()) 
  : ['http://localhost:8080', 'http://127.0.0.1:8080'];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, same-origin)
    if (!origin) return callback(null, true);
    if (process.env.NODE_ENV !== 'production' || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('CORS blocked: Domain not authorized'));
  },
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate Limiting (Basic Protection against brute force / DDoS)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 1000 requests per windowMs
  message: { error: 'Too many requests, please try again later.' }
});
app.use('/api', limiter);

// Security Middleware: Block direct access to sensitive files, credentials, rules, and server internals
app.use((req, res, next) => {
  const normalizedPath = path.normalize(req.path).replace(/^(\.\.[\/\\])+/, '');
  const sensitivePatterns = [
    /^\/\.env/i,
    /^\/serviceAccountKey\.json/i,
    /^\/server(\/|$)/i,
    /\.sqlite/i,
    /^\/\.git(\/|$)/i,
    /^\/package(-lock)?\.json/i,
    /^\/firebase\.json/i,
    /^\/\.firebaserc/i,
    /^\/firestore(\.rules|\.indexes\.json)/i,
    /^\/\.docker/i,
    /^\/scratch(\/|$)/i
  ];
  
  if (sensitivePatterns.some(pattern => pattern.test(normalizedPath))) {
    return res.status(403).json({ error: 'Forbidden: Access to sensitive file is denied' });
  }
  next();
});

// Serve static frontend files directly (no caching in dev/local)
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

app.use(express.static(ROOT_DIR, {
  maxAge: 0,
  etag: false,
  lastModified: false,
  setHeaders: (res, path) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
  },
  dotfiles: 'deny' // Strictly deny dotfiles
}));

const { verifyAuth } = require('./middleware/auth');

// Mount REST API routes
app.use('/api/auth', verifyAuth, require('./routes/auth.routes'));
app.use('/api/tests', verifyAuth, require('./routes/tests.routes'));
app.use('/api/questions', verifyAuth, require('./routes/questions.routes'));
app.use('/api/vocab', verifyAuth, require('./routes/vocab.routes'));
app.use('/api/mistakes', verifyAuth, require('./routes/mistakes.routes'));
app.use('/api/analytics', verifyAuth, require('./routes/analytics.routes'));
app.use('/api/clinics', verifyAuth, require('./routes/clinics.routes'));
app.use('/api/leaderboard', verifyAuth, require('./routes/leaderboard.routes'));
app.use('/api/parent', verifyAuth, require('./routes/parent.routes'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    server: 'Learnly 11+ Production Express Server',
    database: 'Firebase Cloud Firestore',
    uptime: Math.round(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

// Landing Page route
app.get(['/landing', '/landing.html'], (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'landing.html'));
});

// Single Page Application (SPA) Fallback — serves index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'index.html'));
});

// Global Error Handler for Production
app.use((err, req, res, next) => {
  console.error('[Global Error Handler]:', err.stack || err.message);
  res.status(err.status || 500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'production' ? 'Something went wrong' : err.message
  });
});

// Server Initialization
async function startServer() {
  try {
    getFirestoreDb(); // Initialize connection
    app.listen(PORT, () => {
      console.log(`=================================================`);
      console.log(`  Learnly 11+ & MyRank 11+ Production Server    `);
      console.log(`  Running live at: http://localhost:${PORT}      `);
      console.log(`  API Health: http://localhost:${PORT}/api/health`);
      console.log(`=================================================`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  startServer();
}

module.exports = { app, startServer };
