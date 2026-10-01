// Learnly 11+ / MyRank 11+ — Central Asynchronous API Client
// Connects UI pages reactively to the Express backend with response caching

const LearnlyAPI = (function() {
  const BASE_URL = window.location.origin;
  const _cache = new Map();
  const CACHE_TTL_MS = 30000; // 30 seconds cache

  async function request(endpoint, options = {}) {
    const url = `${BASE_URL}${endpoint}`;
    const defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    // Inject Firebase Auth Token if available
    if (window.firebase && window.firebase.auth().currentUser) {
      try {
        const token = await window.firebase.auth().currentUser.getIdToken();
        defaultHeaders['Authorization'] = `Bearer ${token}`;
      } catch (err) {
        console.warn('Failed to get Firebase Auth token:', err);
      }
    }

    // Cache GET requests only
    const method = (options.method || 'GET').toUpperCase();
    if (method === 'GET') {
      const cached = _cache.get(endpoint);
      if (cached && (Date.now() - cached.timestamp) < CACHE_TTL_MS) {
        return cached.data;
      }
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...defaultHeaders,
          ...options.headers
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      // Cache GET responses
      if (method === 'GET') {
        _cache.set(endpoint, { data, timestamp: Date.now() });
      } else {
        // Invalidate related caches on mutation
        _cache.clear();
      }

      return data;
    } catch (error) {
      console.warn(`API request to ${endpoint} failed:`, error.message);
      throw error;
    }
  }

  return {
    // Health & System
    checkHealth: () => request('/api/health'),

    // Auth & Session
    getSession: () => request('/api/auth/session'),

    // Tests & Attempts
    getTests: () => request('/api/tests'),
    getAdaptiveTest: () => request('/api/tests/adaptive'),
    getRecentAttempts: () => request('/api/tests/recent'),
    getAttemptDetails: (attemptId) => request(`/api/tests/attempts/${attemptId}`),
    submitTest: (testId, payload) => request(`/api/tests/${testId}/submit`, {
      method: 'POST',
      body: JSON.stringify(payload)
    }),

    // Questions & Socratic Hints
    getQuestion: (questionId) => request(`/api/questions/${questionId}`),
    getQuestionHints: (questionId, payload = {}) => request(`/api/questions/${questionId}/hints`, {
      method: 'POST',
      body: JSON.stringify(payload)
    }),

    // Vocabulary & Spaced Repetition (SRS)
    getVocab: (category = 'all') => request(`/api/vocab${category !== 'all' ? `?category=${encodeURIComponent(category)}` : ''}`),
    reviewWord: (wordId, rating) => request(`/api/vocab/${wordId}/review`, {
      method: 'POST',
      body: JSON.stringify({ rating })
    }),

    // Mistake Vault
    getMistakes: () => request('/api/mistakes'),
    resolveMistake: (mistakeId) => request(`/api/mistakes/${mistakeId}/resolve`, { method: 'POST' }),

    // Analytics
    getAnalyticsSummary: () => request('/api/analytics/summary'),

    // Clinics
    getClinics: () => request('/api/clinics'),
    bookClinic: (clinicData) => request('/api/clinics/book', {
      method: 'POST',
      body: JSON.stringify(clinicData)
    }),

    // Leaderboard
    getLeaderboard: () => request('/api/leaderboard'),

    // Parent Live Cheer
    sendParentCheer: (message, cheerType = 'star') => request('/api/parent/cheer', {
      method: 'POST',
      body: JSON.stringify({ message, cheerType })
    }),

    // Cache management
    clearCache: () => _cache.clear(),
    invalidateCache: (endpoint) => _cache.delete(endpoint),
  };
})();

window.LearnlyAPI = LearnlyAPI;
