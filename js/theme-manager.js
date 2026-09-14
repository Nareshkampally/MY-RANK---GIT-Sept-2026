// Learnly 11+ / MyRank 11+ — Theme & Edition Manager
// Extracted from Google Stitch Projects:
// 1. "Learnly 11+ Modern Prep" (Light Mode, Indigo #4F46E5)
// 2. "MyRank 11+ Learning / Luminous Scholar" (Dark Mode, Electric Lime #C7FF24)

const LearnlyTheme = {
  CURRENT: 'learnly', // 'learnly' | 'myrank'

  init() {
    const saved = localStorage.getItem('learnly_edition_theme');
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

    // Broadcast event for charts and page components to re-render colors
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  },

  updateBrandUI(theme) {
    const titleEl = document.getElementById('brand-title');
    const subtitleEl = document.getElementById('brand-subtitle');
    const brandIconEl = document.getElementById('brand-icon');

    if (theme === 'myrank') {
      if (titleEl) {
        titleEl.textContent = 'MyRank 11+';
        titleEl.style.color = '#c7ff24';
      }
      if (subtitleEl) {
        subtitleEl.textContent = 'Luminous Scholar';
      }
      if (brandIconEl) {
        brandIconEl.innerHTML = `<div class="w-8 h-8 rounded-lg bg-[#c7ff24] flex items-center justify-center text-[#111509] font-black text-sm shadow-[0_0_12px_rgba(199,255,36,0.4)]">MR</div>`;
      }
    } else {
      if (titleEl) {
        titleEl.textContent = 'Learnly 11+';
        titleEl.style.color = '';
      }
      if (subtitleEl) {
        subtitleEl.textContent = 'Scholar Edition';
      }
      if (brandIconEl) {
        brandIconEl.innerHTML = `<img alt="Learnly 11+ Brand Logo" class="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7HEuIV8rXxij6TrRi9z77NhdRSarsDFDi15cgUUgmWRWB74IrDneXs8gQEDdEK1dQhX28KkqoVJhox1PRU3xsfKYA2b6AOf2wiPXYpojve4dVZAo-JOyXZbaL1IcsYtLwE4D0thqG9YORfkljYSeEbOnMruvcb3LuLIqBwhrGFcPUjturAKdeYJ-PQ7wxvOyjQfGw1wePrq8yWkNN04lhDqK7IKkSD2-lubdUL0OzXDzMSKd9EH36Ig"/>`;
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
      myrankBtn.className = 'flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full bg-primary text-on-primary shadow-[0_0_12px_rgba(199,255,36,0.3)] transition-all duration-200 cursor-pointer';
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
