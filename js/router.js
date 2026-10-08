// Learnly 11+ Scholar Edition — SPA Hash Router
const LearnlyRouter = {
  pages: {},
  currentPage: null,

  register(name, renderFn, initFn) {
    this.pages[name] = { render: renderFn, init: initFn || null };
  },

  init() {
    window.addEventListener('hashchange', () => this.navigate());
    // Handle link clicks with data-navigate
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-navigate]');
      if (link) {
        e.preventDefault();
        window.location.hash = link.dataset.navigate;
      }
    });

    // Wait for Firebase auth to initialize
    if (window.firebase) {
      window.firebase.auth().onAuthStateChanged((user) => {
        this.currentUser = user;
        
        // Update user profile UI if available
        if (user) {
          const profileName = document.getElementById('user-profile-name');
          if (profileName) profileName.textContent = user.email.split('@')[0];
        }

        // Trigger initial navigation after auth is determined
        this.navigate();
      });
    } else {
      this.navigate();
    }
  },

  navigate() {
    const hash = window.location.hash.slice(1) || 'dashboard';
    const pageName = hash.split('?')[0]; // strip query params
    this.loadPage(pageName);
  },

  loadPage(name) {
    const container = document.getElementById('page-content');
    if (!container) return;

    // Check Auth State
    if (window.firebase) {
      const hasActiveSession = !!this.currentUser || 
        !!localStorage.getItem('learnly_active_role') || 
        !!localStorage.getItem('learnly_active_subscription');

      if (!hasActiveSession && name !== 'login') {
        window.location.hash = 'login';
        return;
      }
      if (hasActiveSession && name === 'login') {
        window.location.hash = 'dashboard';
        return;
      }
    }

    // Toggle app shell visibility
    const sidebar = document.getElementById('main-sidebar');
    const header = document.querySelector('header');
    if (name === 'login') {
      if (sidebar) sidebar.style.display = 'none';
      if (header) header.style.display = 'none';
    } else {
      if (sidebar) sidebar.style.display = '';
      if (header) header.style.display = '';
    }

    // Check if page exists
    const page = this.pages[name];
    if (!page) {
      // Try dashboard as fallback
      if (this.pages['dashboard']) {
        this.loadPage('dashboard');
      }
      return;
    }

    // Update active nav
    this.updateNav(name);

    // Update page title
    const titleEl = document.getElementById('page-title');
    if (titleEl) {
      const titles = {
        'dashboard': 'Dashboard',
        'learn-solve': 'Learn & Solve Studio',
        'practice-arena': 'Practice Arena',
        'mock-exams': 'Mock Exams',
        'analytics': 'Performance Analytics',
        'scorecard': 'Diagnostic Scorecard',
        'trophy-room': 'Trophy Room',
        'parent-portal': 'Parent Portal',
        'mistake-mastery': 'Mistake Mastery',
        'subject-quests': 'Subject Quests',
        'past-papers': 'Past Papers',
        'leaderboard': 'Leaderboard',
        'homework-scanner': 'Homework Scanner',
        'ai-learning': 'AI Learning',
        'study-planner': 'Study Planner',
        'progress-report': 'Progress Report',
        'vocab-vault': 'Vocab Vault',
        'clinic-booking': 'Tutor Clinic',
        'past-papers': 'Past Papers',
        'trophy-room': 'Trophy Room',
        'parent-portal': 'Parent Portal',
      };
      titleEl.textContent = titles[name] || name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }

    // Render page content with basic error boundary
    try {
      container.innerHTML = `<div class="page-enter flex flex-col w-full">${page.render()}</div>`;
      this.currentPage = name;

      // Run page init (attach event handlers, start timers, etc.)
      if (page.init) {
        requestAnimationFrame(() => page.init());
      }
    } catch (err) {
      console.error(`Error rendering page ${name}:`, err);
      container.innerHTML = `
        <div class="flex flex-col items-center justify-center py-20 px-4 text-center">
          <span class="material-symbols-outlined text-5xl text-error mb-4">error</span>
          <h2 class="text-2xl font-bold text-on-surface mb-2">Oops! Something went wrong.</h2>
          <p class="text-on-surface-variant max-w-md mb-6">We encountered an unexpected error while loading this section. Our team has been notified.</p>
          <button onclick="window.location.hash='dashboard'" class="px-6 py-2.5 bg-primary text-white font-bold rounded-full hover:opacity-90">Return to Dashboard</button>
        </div>
      `;
    }

    // Scroll to top
    window.scrollTo(0, 0);
  },

  updateNav(activePage) {
    const navLinks = document.querySelectorAll('#nav-menu .nav-link, #sidebar .nav-link');
    const fullHash = window.location.hash.slice(1) || 'dashboard';

    const pageToNav = {
      'dashboard': 'dashboard',
      'practice-arena': 'practice-arena',
      'mock-exams': 'mock-exams',
      'analytics': 'performance-analytics',
      'analytics-updated': 'performance-analytics',
      'trophy-room': 'trophy-room',
      'trophy-room-updated': 'trophy-room',
      'parent-portal': 'parent-portal',
      'scorecard': 'performance-analytics',
      'drill-spatial': 'practice-arena',
      'drill-cloze': 'practice-arena',
      'drill-timed': 'practice-arena',
      'drill-score': 'performance-analytics',
      'drill-complete': 'practice-arena',
      'mistake-mastery': 'mistake-mastery',
      'mistake-vault-3d': 'practice-arena',
      'mistake-vault-lexical': 'practice-arena',
      'clinic-booking': 'clinic-booking',
      'clinic-confirmation': 'parent-portal',
      'clinic-live': 'parent-portal',
      'clinic-summary': 'parent-portal',
      'subject-quests': 'subject-quests',
      'past-papers': 'past-papers',
      'leaderboard': 'leaderboard',
      'mock-simulation': 'mock-exams',
      'mock-scratchpad': 'mock-exams',
      'mock-scratchpad-full': 'mock-exams',
      'mock-splitview': 'mock-exams',
      'mastery-certificate': 'trophy-room',
      'homework-scanner': 'homework-scanner',
      'ai-learning': 'ai-learning',
      'study-planner': 'study-planner',
      'progress-report': 'progress-report',
      'vocab-vault': 'vocab-vault',
      'battle-arena': 'battle-arena',
      'school-predictor': 'school-predictor',
      'lofi-study': 'lofi-study',
    };

    const navTarget = pageToNav[activePage] || activePage;

    // If an exact link href matches fullHash, only activate that specific one
    let hasExactMatch = false;
    navLinks.forEach(link => {
      const linkHref = (link.getAttribute('href') || '').replace('#', '');
      if (linkHref && linkHref === fullHash) {
        hasExactMatch = true;
      }
    });

    navLinks.forEach(link => {
      const linkPath = link.dataset.path;
      const linkHref = (link.getAttribute('href') || '').replace('#', '');
      
      let isMatch = false;
      if (hasExactMatch) {
        isMatch = (linkHref === fullHash);
      } else {
        isMatch = (linkPath === navTarget);
      }

      if (isMatch) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  },

  // Utility: get query params from hash
  getParams() {
    const hash = window.location.hash.slice(1);
    const qIndex = hash.indexOf('?');
    if (qIndex === -1) return {};
    const params = new URLSearchParams(hash.slice(qIndex));
    const obj = {};
    params.forEach((v, k) => obj[k] = v);
    return obj;
  },

  logout() {
    this.currentUser = null;
    localStorage.removeItem('learnly_active_role');
    localStorage.removeItem('learnly_active_subscription');
    localStorage.removeItem('learnly_active_tutor');
    if (window.firebase && window.firebase.auth) {
      window.firebase.auth().signOut().catch(() => {});
    }
    window.location.hash = 'login';
  }
};
