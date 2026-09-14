// Learnly 11+ / MyRank 11+ — Production Express Server
const path = require('path');
const express = require('express');
const cors = require('cors');
const { initSchema } = require('./db/database');

const app = express();
const PORT = process.env.PORT || 8080;
const ROOT_DIR = path.join(__dirname, '..');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files directly
app.use(express.static(ROOT_DIR));

// Mount REST API routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/tests', require('./routes/tests.routes'));
app.use('/api/questions', require('./routes/questions.routes'));
app.use('/api/vocab', require('./routes/vocab.routes'));
app.use('/api/mistakes', require('./routes/mistakes.routes'));
app.use('/api/analytics', require('./routes/analytics.routes'));
app.use('/api/clinics', require('./routes/clinics.routes'));
app.use('/api/leaderboard', require('./routes/leaderboard.routes'));
app.use('/api/parent', require('./routes/parent.routes'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    server: 'Learnly 11+ Production Express Server',
    database: 'SQLite 3 (WAL Mode)',
    uptime: Math.round(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

// Single Page Application (SPA) Fallback — serves index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'index.html'));
});

// Server Initialization
async function startServer() {
  try {
    await initSchema();
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
