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
    this.navigate();
  },

  navigate() {
    const hash = window.location.hash.slice(1) || 'dashboard';
    const pageName = hash.split('?')[0]; // strip query params
    this.loadPage(pageName);
  },

  loadPage(name) {
    const container = document.getElementById('page-content');
    if (!container) return;

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

    // Render page content
    container.innerHTML = `<div class="page-enter flex flex-col w-full">${page.render()}</div>`;
    this.currentPage = name;

    // Run page init (attach event handlers, start timers, etc.)
    if (page.init) {
      requestAnimationFrame(() => page.init());
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
  }
};
