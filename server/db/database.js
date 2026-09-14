// Learnly 11+ / MyRank 11+ — SQLite Database Manager
const path = require('path');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, 'learnly.sqlite');

let dbInstance = null;

function getDb() {
  if (!dbInstance) {
    dbInstance = new sqlite3.Database(DB_PATH, (err) => {
      if (err) {
        console.error('Failed to connect to SQLite database:', err.message);
      } else {
        console.log('Connected to SQLite database at:', DB_PATH);
      }
    });
    // Enable WAL mode & foreign keys for high concurrent performance
    dbInstance.run('PRAGMA foreign_keys = ON');
    dbInstance.run('PRAGMA journal_mode = WAL');
  }
  return dbInstance;
}

// Promise-based query helpers
function queryAll(sql, params = []) {
  return new Promise((resolve, reject) => {
    getDb().all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

function queryGet(sql, params = []) {
  return new Promise((resolve, reject) => {
    getDb().get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

function queryRun(sql, params = []) {
  return new Promise((resolve, reject) => {
    getDb().run(sql, params, function(err) {
      if (err) reject(err);
      else resolve({ lastID: this.lastID, changes: this.changes });
    });
  });
}

function queryExec(sql) {
  return new Promise((resolve, reject) => {
    getDb().exec(sql, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

// Database Schema DDL
async function initSchema() {
  const schemaSql = `
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      avatar_url TEXT,
      role TEXT DEFAULT 'student',
      level INTEGER DEFAULT 6,
      xp INTEGER DEFAULT 1450,
      streak_days INTEGER DEFAULT 14,
      target_exam_date TEXT DEFAULT 'Sep 2025',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS study_sessions (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      login_time DATETIME DEFAULT CURRENT_TIMESTAMP,
      logout_time DATETIME,
      active_duration_seconds INTEGER DEFAULT 0,
      status TEXT DEFAULT 'active',
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS test_papers (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      subject TEXT NOT NULL,
      format TEXT NOT NULL,
      total_questions INTEGER DEFAULT 25,
      allotted_minutes INTEGER DEFAULT 25,
      difficulty TEXT DEFAULT 'Medium',
      description TEXT
    );

    CREATE TABLE IF NOT EXISTS questions (
      id TEXT PRIMARY KEY,
      test_paper_id TEXT,
      question_number INTEGER NOT NULL,
      subject TEXT NOT NULL,
      stem TEXT NOT NULL,
      passage_context TEXT,
      options_json TEXT NOT NULL,
      correct_answer TEXT NOT NULL,
      explanation TEXT,
      socratic_hints_json TEXT,
      FOREIGN KEY (test_paper_id) REFERENCES test_papers(id)
    );

    CREATE TABLE IF NOT EXISTS test_attempts (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      test_paper_id TEXT NOT NULL,
      title TEXT NOT NULL,
      subject TEXT NOT NULL,
      start_time DATETIME NOT NULL,
      finish_time DATETIME NOT NULL,
      duration_seconds INTEGER NOT NULL,
      raw_score INTEGER NOT NULL,
      max_score INTEGER NOT NULL,
      percentage REAL NOT NULL,
      calculated_sas INTEGER NOT NULL,
      percentile INTEGER NOT NULL,
      pacing_seconds_per_q INTEGER NOT NULL,
      proctor_status TEXT DEFAULT 'Verified & Recorded',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (test_paper_id) REFERENCES test_papers(id)
    );

    CREATE TABLE IF NOT EXISTS vocab_words (
      id TEXT PRIMARY KEY,
      user_id TEXT DEFAULT 'student-leo-01',
      word TEXT NOT NULL UNIQUE,
      phonetic TEXT,
      part_of_speech TEXT,
      category TEXT,
      stem TEXT,
      definition TEXT NOT NULL,
      etymology TEXT,
      mnemonic TEXT,
      synonyms_json TEXT,
      antonyms_json TEXT,
      srs_box INTEGER DEFAULT 1,
      review_count INTEGER DEFAULT 0,
      status TEXT DEFAULT 'Needs Practice',
      last_reviewed DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS mistake_vault (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      question_id TEXT,
      question_stem TEXT NOT NULL,
      subject TEXT NOT NULL,
      error_type TEXT,
      user_mistake TEXT,
      correct_answer TEXT,
      explanation TEXT,
      retried_count INTEGER DEFAULT 0,
      resolved INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS clinic_bookings (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      tutor_name TEXT NOT NULL,
      tutor_subject TEXT NOT NULL,
      avatar_url TEXT,
      date_time TEXT NOT NULL,
      status TEXT DEFAULT 'Confirmed',
      notes TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS parent_cheers (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      parent_name TEXT DEFAULT 'Sarah Mitchell',
      message TEXT NOT NULL,
      cheer_type TEXT DEFAULT 'star',
      delivered INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS cohort_leaderboard (
      id TEXT PRIMARY KEY,
      rank INTEGER NOT NULL,
      name TEXT NOT NULL,
      avatar_url TEXT,
      school_preference TEXT,
      sas INTEGER NOT NULL,
      xp INTEGER NOT NULL,
      accuracy REAL NOT NULL,
      tests_completed INTEGER NOT NULL,
      badge TEXT
    );
  `;
  await queryExec(schemaSql);
  console.log('SQLite schema initialized successfully.');
}

module.exports = {
  getDb,
  queryAll,
  queryGet,
  queryRun,
  queryExec,
  initSchema
};
