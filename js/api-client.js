// Learnly 11+ / MyRank 11+ — Central Asynchronous API Client
// Connects UI pages reactively to the Express backend with fallback cache

const LearnlyAPI = (function() {
  const BASE_URL = window.location.origin;

  async function request(endpoint, options = {}) {
    const url = `${BASE_URL}${endpoint}`;
    const defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

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

      return await response.json();
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
    getRecentAttempts: () => request('/api/tests/recent'),
    getAttemptDetails: (attemptId) => request(`/api/tests/attempts/${attemptId}`),
    submitTest: (testId, payload) => request(`/api/tests/${testId}/submit`, {
      method: 'POST',
      body: JSON.stringify(payload)
    }),

    // Questions & Socratic Hints
    getQuestion: (questionId) => request(`/api/questions/${questionId}`),
    getQuestionHints: (questionId) => request(`/api/questions/${questionId}/hints`),

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
    })
  };
})();

window.LearnlyAPI = LearnlyAPI;
