// Learnly 11+ / MyRank 11+ — Theme & Edition Manager
// Modern Dual-Theme Design:
// 1. "Learnly 11+ Modern Prep" (Light Mode, Clean Indigo #4F46E5)
// 2. "MyRank 11+ Obsidian Scholar" (Dark Mode, Deep Obsidian Slate & Royal Indigo #6366F1)

const LearnlyTheme = {
  CURRENT: 'learnly', // 'learnly' | 'myrank'

  init() {
    const saved = localStorage.getItem('learnly_edition_theme') || localStorage.getItem('learnly-theme');
    if (saved === 'myrank' || saved === 'learnly') {
      this.CURRENT = saved;
    } else {
      this.CURRENT = 'learnly';
    }
    this.applyTheme(this.CURRENT, false);
    this.setupListeners();
  },

  setTheme(theme) {
    if (theme !== 'learnly' && theme !== 'myrank') return;
    this.CURRENT = theme;
    localStorage.setItem('learnly_edition_theme', theme);
    localStorage.setItem('learnly-theme', theme);
    this.applyTheme(theme, true);
  },

  toggle() {
    const next = this.CURRENT === 'learnly' ? 'myrank' : 'learnly';
    this.setTheme(next);
  },

  applyTheme(theme, animate = true) {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
    if (theme === 'myrank') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    // Update branding text & badge in sidebar and header
    this.updateBrandUI(theme);

    // Update toggle switch button states
    this.updateToggleButtons(theme);

    // Update theme-toggle-btn icon
    const themeToggle = document.getElementById('theme-toggle-btn');
    if (themeToggle) {
      const icon = themeToggle.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = theme === 'myrank' ? 'light_mode' : 'dark_mode';
      }
    }

    // Broadcast event for charts and page components to re-render colors
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  },

  updateBrandUI(theme) {
    const titleEl = document.getElementById('brand-title');
    const subtitleEl = document.getElementById('brand-subtitle');
    const brandIconEl = document.getElementById('brand-icon');

    if (theme === 'myrank') {
      if (titleEl) {
        titleEl.textContent = 'Karat.Academy';
        titleEl.style.color = '#f8fafc';
      }
      if (subtitleEl) {
        subtitleEl.textContent = '11+ Scholar';
      }
      if (brandIconEl) {
        brandIconEl.innerHTML = `<div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-[0_0_12px_rgba(99,102,241,0.35)]">11+</div>`;
      }
    } else {
      if (titleEl) {
        titleEl.textContent = 'Karat.Academy';
        titleEl.style.color = '';
      }
      if (subtitleEl) {
        subtitleEl.textContent = '11+ Scholar';
      }
      if (brandIconEl) {
        brandIconEl.innerHTML = `<div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md">11+</div>`;
      }
    }
  },

  updateToggleButtons(theme) {
    const learnlyBtn = document.getElementById('theme-btn-learnly');
    const myrankBtn = document.getElementById('theme-btn-myrank');
    if (!learnlyBtn || !myrankBtn) return;

    if (theme === 'learnly') {
      learnlyBtn.className = 'flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full bg-primary text-on-primary shadow-sm transition-all duration-200 cursor-pointer';
      myrankBtn.className = 'flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full text-on-surface-variant hover:text-on-surface transition-all duration-200 cursor-pointer';
    } else {
      learnlyBtn.className = 'flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full text-on-surface-variant hover:text-on-surface transition-all duration-200 cursor-pointer';
      myrankBtn.className = 'flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full bg-primary text-on-primary shadow-sm transition-all duration-200 cursor-pointer';
    }
  },

  setupListeners() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-switch-theme]');
      if (btn) {
        e.preventDefault();
        const targetTheme = btn.dataset.switchTheme;
        this.setTheme(targetTheme);
      }
    });
  }
};
