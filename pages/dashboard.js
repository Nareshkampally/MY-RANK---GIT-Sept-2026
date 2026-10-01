// Learnly 11+ — Premium AI Dashboard with XP System, Adaptive Recommendations, and Live Stats
LearnlyRouter.register('dashboard', function() {
  return `
  <div class="flex flex-col xl:flex-row gap-6 w-full">
    
    <!-- ══ LEFT MAIN CONTENT ══ -->
    <div class="flex-1 flex flex-col gap-6 min-w-0">

      <!-- HERO WELCOME BANNER -->
      <section class="relative rounded-3xl overflow-hidden p-8" style="background: linear-gradient(135deg, #3525cd 0%, #4f46e5 50%, #6366f1 100%);">
        <!-- Decorative elements -->
        <div class="absolute -right-12 -top-12 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute right-32 bottom-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
        
        <!-- Live Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 backdrop-blur-md mb-4">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          <span class="text-white/90 text-xs font-bold uppercase tracking-wider">Exam Countdown Active</span>
        </div>

        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div class="max-w-xl">
            <h2 class="text-3xl font-extrabold text-white mb-2 leading-tight">Welcome back, Leo! 🚀</h2>
            <p class="text-white/80 text-base leading-relaxed mb-5">
              You're in the <strong class="text-white">Top 4%</strong> nationally. Today's AI recommendation: target 
              <strong class="text-yellow-300">3D Spatial Nets</strong> — your weakest topic at 68%.
            </p>
            <div class="flex flex-wrap gap-3">
              <button class="px-6 py-3 rounded-xl bg-white text-primary font-bold hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-2 text-sm" data-navigate="practice-arena">
                <span class="material-symbols-outlined text-lg" style="font-variation-settings:'FILL' 1">sports_esports</span>
                Continue Studying
              </button>
              <button class="px-6 py-3 rounded-xl bg-white/15 text-white font-bold border border-white/20 hover:bg-white/25 transition-colors flex items-center gap-2 text-sm backdrop-blur-md" data-navigate="study-planner">
                <span class="material-symbols-outlined text-lg">calendar_month</span>
                View Plan
              </button>
            </div>
          </div>
          <!-- Countdown Widget -->
          <div class="shrink-0 text-center bg-white/10 backdrop-blur-md rounded-[2.5rem] p-5 border border-white/20">
            <div class="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Days to Exam</div>
            <div class="text-5xl font-black text-white leading-none mb-1" id="dash-countdown">--</div>
            <div class="text-white/60 text-xs">Jan 15, 2027</div>
            <div class="mt-3 w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div class="h-full bg-yellow-300 rounded-full" id="dash-countdown-bar" style="width:0%"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- STATS ROW -->
      <section class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        ${[
          { label: 'SAS Score', value: '131', sub: '↑ +13 from start', icon: 'emoji_events', color: 'from-primary to-indigo-500', textColor: 'text-on-primary' },
          { label: 'National Rank', value: 'Top 4%', sub: '96th percentile', icon: 'leaderboard', color: 'from-emerald-500 to-teal-500', textColor: 'text-white' },
          { label: 'Accuracy', value: '89%', sub: '+4.2% this month', icon: 'verified', color: 'from-amber-500 to-orange-400', textColor: 'text-white' },
          { label: 'Study Streak', value: '14 🔥', sub: 'Personal best!', icon: 'local_fire_department', color: 'from-rose-500 to-pink-500', textColor: 'text-white' },
        ].map(s => `
        <div class="relative rounded-[2.5rem] p-5 bg-gradient-to-br ${s.color} shadow-lg overflow-hidden group hover:scale-[1.02] transition-transform cursor-pointer">
          <div class="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full"></div>
          <span class="material-symbols-outlined ${s.textColor} text-2xl mb-2 block opacity-80" style="font-variation-settings:'FILL' 1">${s.icon}</span>
          <div class="text-2xl font-extrabold ${s.textColor} leading-tight">${s.value}</div>
          <div class="text-xs ${s.textColor} font-bold opacity-80 mt-0.5">${s.label}</div>
          <div class="text-[10px] ${s.textColor} opacity-60 mt-0.5">${s.sub}</div>
        </div>`).join('')}
      </section>

      <!-- TWO-COLUMN: Today's Quests + Subject Mastery -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <!-- TODAY'S QUESTS -->
        <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/20 shadow-sm flex flex-col">
          <div class="flex items-center justify-between mb-5">
            <h3 class="font-bold text-on-surface text-base flex items-center gap-2">
              <span class="material-symbols-outlined text-primary text-lg" style="font-variation-settings:'FILL' 1">task_alt</span>
              Today's Quests
            </h3>
            <span class="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">2/4 done</span>
          </div>
          <div class="flex flex-col gap-3 flex-grow">
            ${[
              { icon: 'psychology', color: 'bg-blue-100 text-blue-600', subject: 'Verbal Reasoning', task: 'Synonyms & Antonyms Drill', duration: '10m', xp: '+30 XP', done: true },
              { icon: 'functions', color: 'bg-emerald-100 text-emerald-600', subject: 'Mathematics', task: 'Algebraic Sequences', duration: '15m', xp: '+50 XP', done: true },
              { icon: 'view_in_ar', color: 'bg-purple-100 text-purple-600', subject: 'NVR', task: '3D Spatial Nets — Focus Drill', duration: '12m', xp: '+45 XP', done: false },
              { icon: 'menu_book', color: 'bg-rose-100 text-rose-600', subject: 'English', task: 'Comprehension: Fiction Passage', duration: '20m', xp: '+60 XP', done: false },
            ].map(q => `
            <div class="flex items-center gap-3 p-3 rounded-xl ${q.done ? 'bg-surface-container-low opacity-70' : 'bg-surface-container-low hover:bg-surface-container-high hover:border-primary'} border border-outline-variant/20 transition-all cursor-pointer group">
              <div class="w-9 h-9 rounded-xl ${q.color} flex items-center justify-center shrink-0 ${q.done ? 'grayscale' : ''}">
                <span class="material-symbols-outlined text-base">${q.done ? 'check' : q.icon}</span>
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-xs font-bold text-on-surface-variant">${q.subject}</div>
                <div class="text-sm font-bold text-on-surface truncate ${q.done ? 'line-through' : ''}">${q.task}</div>
              </div>
              <div class="text-right shrink-0">
                <div class="text-[10px] font-bold text-on-surface-variant">${q.duration}</div>
                <div class="text-[10px] font-bold text-primary">${q.xp}</div>
              </div>
            </div>`).join('')}
          </div>
          <button class="mt-4 w-full py-2.5 rounded-xl border border-primary/30 text-primary font-bold text-sm hover:bg-primary/5 transition-colors flex items-center justify-center gap-2" data-navigate="subject-quests">
            <span class="material-symbols-outlined text-base">expand_more</span> View All Quests
          </button>
        </div>

        <!-- SUBJECT MASTERY RADARS -->
        <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/20 shadow-sm">
          <div class="flex items-center justify-between mb-5">
            <h3 class="font-bold text-on-surface text-base flex items-center gap-2">
              <span class="material-symbols-outlined text-primary text-lg" style="font-variation-settings:'FILL' 1">donut_small</span>
              Subject Mastery
            </h3>
            <button class="text-xs font-bold text-primary hover:underline" data-navigate="analytics">Full Report →</button>
          </div>
          <div class="grid grid-cols-2 gap-4">
            ${[
              { name: 'Maths', pct: 82, color: '#10B981', track: '#D1FAE5' },
              { name: 'English', pct: 94, color: '#EC4899', track: '#FCE7F3' },
              { name: 'VR', pct: 76, color: '#6366F1', track: '#E0E7FF' },
              { name: 'NVR', pct: 68, color: '#F59E0B', track: '#FEF3C7' },
            ].map(s => {
              const r = 30, circ = 2 * Math.PI * r;
              const offset = circ - (s.pct / 100) * circ;
              const label = s.pct >= 90 ? '🏆' : s.pct >= 80 ? '⭐' : s.pct >= 70 ? '📈' : '⚠️';
              return `
              <div class="flex flex-col items-center p-4 rounded-[2.5rem] bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer border border-outline-variant/20">
                <div class="relative w-20 h-20 mb-2">
                  <svg class="w-full h-full -rotate-90" viewBox="0 0 72 72">
                    <circle cx="36" cy="36" r="${r}" fill="none" stroke="${s.track}" stroke-width="6"/>
                    <circle cx="36" cy="36" r="${r}" fill="none" stroke="${s.color}" stroke-width="6" 
                            stroke-dasharray="${circ}" stroke-dashoffset="${offset}" stroke-linecap="round"
                            class="transition-all duration-1000"/>
                  </svg>
                  <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <span class="text-base font-black text-on-surface leading-none">${s.pct}%</span>
                    <span class="text-base leading-none">${label}</span>
                  </div>
                </div>
                <span class="text-xs font-bold text-on-surface">${s.name}</span>
                <span class="text-[10px] text-on-surface-variant">${s.pct >= 90 ? 'Mastered' : s.pct >= 80 ? 'Strong' : s.pct >= 70 ? 'Growing' : 'Needs Work'}</span>
              </div>`;
            }).join('')}
          </div>
        </div>
      </section>

      <!-- RECENT ACTIVITY FEED -->
      <section class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/20 shadow-sm">
        <div class="flex items-center justify-between mb-5">
          <h3 class="font-bold text-on-surface text-base flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-lg">history</span>
            Recent Activity
          </h3>
          <button class="text-xs font-bold text-primary hover:underline" data-navigate="analytics">View All</button>
        </div>
        <div class="space-y-3">
          ${[
            { icon: 'check_circle', color: 'text-tertiary', title: 'Completed Mock #05', sub: 'SAS 131 · 89% accuracy', time: '2h ago', xp: '+500 XP' },
            { icon: 'military_tech', color: 'text-amber-500', title: 'Badge Earned: Speed Demon', sub: 'Average < 40s per question', time: 'Yesterday', xp: '+100 XP' },
            { icon: 'psychology', color: 'text-blue-500', title: 'Verbal Reasoning Drill', sub: '28/30 correct · New high score', time: 'Yesterday', xp: '+80 XP' },
            { icon: 'auto_stories', color: 'text-violet-500', title: 'Vocab Vault Set 6 Mastered', sub: '20 words mastered via SRS', time: '2 days ago', xp: '+60 XP' },
          ].map(a => `
          <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer group">
            <span class="material-symbols-outlined ${a.color} text-xl shrink-0" style="font-variation-settings:'FILL' 1">${a.icon}</span>
            <div class="flex-1 min-w-0">
              <div class="text-sm font-bold text-on-surface">${a.title}</div>
              <div class="text-xs text-on-surface-variant">${a.sub}</div>
            </div>
            <div class="text-right shrink-0">
              <div class="text-[10px] text-on-surface-variant">${a.time}</div>
              <div class="text-[10px] font-bold text-primary">${a.xp}</div>
            </div>
          </div>`).join('')}
        </div>
      </section>

    </div>

    <!-- ══ RIGHT SIDEBAR ══ -->
    <div class="xl:w-80 flex flex-col gap-5 shrink-0">

      <!-- AI TUTOR CARD -->
      <div class="rounded-3xl p-6 text-white shadow-xl relative overflow-hidden" style="background: linear-gradient(160deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%);">
        <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl pointer-events-none"></div>
        <div class="relative z-10">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
              <span class="material-symbols-outlined text-indigo-300 text-xl" style="font-variation-settings:'FILL' 1">smart_toy</span>
            </div>
            <div>
              <div class="font-bold text-sm">AI Tutor Insight</div>
              <div class="text-xs text-white/50">Personalized for you</div>
            </div>
          </div>
          <div class="bg-white/5 rounded-[2.5rem] p-4 border border-white/10 mb-4">
            <p class="text-white/90 text-sm leading-relaxed">
              📊 <strong class="text-yellow-300">3D Spatial Nets</strong> is costing you ~6 SAS points. A focused 3-session drill programme this week could push your score past <strong class="text-green-300">135</strong>.
            </p>
          </div>
          <button class="w-full py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2" data-navigate="drill-spatial">
            <span class="material-symbols-outlined text-lg">play_arrow</span> Start NVR Drill
          </button>
        </div>
      </div>

      <!-- QUICK STUDY TIMER -->
      <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/20 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-bold text-on-surface flex items-center gap-2 text-sm">
            <span class="material-symbols-outlined text-primary text-lg">timer</span>
            Study Timer
          </h3>
          <span class="text-xs text-on-surface-variant font-bold">Pomodoro 25min</span>
        </div>
        <div class="text-center mb-4">
          <div class="relative inline-block">
            <svg class="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="var(--surface-container-high)" stroke-width="8"/>
              <circle cx="50" cy="50" r="42" fill="none" stroke="var(--primary)" stroke-width="8" stroke-linecap="round"
                      stroke-dasharray="264" stroke-dashoffset="66" id="timer-ring" class="transition-all duration-1000"/>
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <div class="text-2xl font-black text-on-surface font-mono" id="dash-timer">25:00</div>
              <div class="text-[10px] text-on-surface-variant font-bold uppercase">remaining</div>
            </div>
          </div>
        </div>
        <div class="flex gap-2">
          <button id="dash-timer-start" class="flex-1 py-2 rounded-xl bg-primary text-on-primary font-bold text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-1">
            <span class="material-symbols-outlined text-base" id="dash-timer-icon">play_arrow</span>
            <span id="dash-timer-label">Start</span>
          </button>
          <button id="dash-timer-reset" class="w-10 h-10 rounded-xl border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary transition-colors flex items-center justify-center">
            <span class="material-symbols-outlined text-base">restart_alt</span>
          </button>
        </div>
      </div>

      <!-- UPCOMING EVENTS -->
      <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/20 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-bold text-on-surface flex items-center gap-2 text-sm">
            <span class="material-symbols-outlined text-primary text-lg" style="font-variation-settings:'FILL' 1">event</span>
            Upcoming
          </h3>
          <button class="text-xs font-bold text-primary hover:underline" data-navigate="study-planner">Calendar →</button>
        </div>
        <div class="space-y-4">
          ${[
            { dot: 'bg-primary', dateLabel: 'Tomorrow 9:00 AM', title: 'Mock Exam #6', sub: 'GL + CEM Format · 100Q · 60min', urgent: true },
            { dot: 'bg-secondary', dateLabel: 'Friday 4:00 PM', title: '1-on-1 Tutor Clinic', sub: 'Review spatial reasoning with Mr. T', urgent: false },
            { dot: 'bg-tertiary', dateLabel: 'This Weekend', title: 'Past Paper Session', sub: 'CEM 2024 full paper', urgent: false },
          ].map(e => `
          <div class="flex gap-3 ${e.urgent ? 'p-2.5 rounded-xl bg-primary/5 border border-primary/20' : ''}">
            <div class="mt-1.5 w-2.5 h-2.5 rounded-full ${e.dot} shrink-0 ${e.urgent ? 'ring-2 ring-primary/30' : ''}"></div>
            <div>
              <div class="text-xs font-bold ${e.urgent ? 'text-primary' : 'text-on-surface-variant'}">${e.dateLabel}</div>
              <div class="text-sm font-bold text-on-surface">${e.title}</div>
              <div class="text-xs text-on-surface-variant">${e.sub}</div>
            </div>
          </div>`).join('')}
        </div>
      </div>

      <!-- QUICK LINKS -->
      <div class="bg-surface-container-lowest rounded-3xl p-5 border border-outline-variant/20 shadow-sm">
        <h3 class="font-bold text-on-surface text-sm mb-3">Quick Access</h3>
        <div class="grid grid-cols-3 gap-2">
          ${[
            { icon: 'auto_stories', label: 'Vocab', nav: 'vocab-vault', color: 'text-violet-600 bg-violet-50' },
            { icon: 'document_scanner', label: 'Scanner', nav: 'homework-scanner', color: 'text-blue-600 bg-blue-50' },
            { icon: 'folder_open', label: 'Papers', nav: 'past-papers', color: 'text-teal-600 bg-teal-50' },
            { icon: 'emoji_events', label: 'Rankings', nav: 'leaderboard', color: 'text-orange-600 bg-orange-50' },
            { icon: 'military_tech', label: 'Trophies', nav: 'trophy-room', color: 'text-amber-600 bg-amber-50' },
            { icon: 'summarize', label: 'Report', nav: 'progress-report', color: 'text-rose-600 bg-rose-50' },
          ].map(l => `
          <button class="flex flex-col items-center gap-1 p-3 rounded-xl ${l.color} hover:opacity-80 transition-opacity cursor-pointer" data-navigate="${l.nav}">
            <span class="material-symbols-outlined text-xl">${l.icon}</span>
            <span class="text-[10px] font-bold">${l.label}</span>
          </button>`).join('')}
        </div>
      </div>

    </div>
  </div>`;
}, function() {
  // Exam countdown
  const examDate = new Date('2027-01-15');
  const startDate = new Date('2026-07-01');
  const now = new Date();
  const daysLeft = Math.ceil((examDate - now) / (1000 * 60 * 60 * 24));
  const totalDays = Math.ceil((examDate - startDate) / (1000 * 60 * 60 * 24));
  const pctElapsed = Math.max(0, Math.min(100, ((now - startDate) / (examDate - startDate)) * 100));

  const cdEl = document.getElementById('dash-countdown');
  const barEl = document.getElementById('dash-countdown-bar');
  if (cdEl) cdEl.textContent = daysLeft;
  if (barEl) barEl.style.width = `${pctElapsed}%`;

  // Pomodoro Timer
  let timerSeconds = 25 * 60;
  let timerRunning = false;
  let timerInterval = null;
  const timerEl = document.getElementById('dash-timer');
  const timerIcon = document.getElementById('dash-timer-icon');
  const timerLabel = document.getElementById('dash-timer-label');
  const timerRing = document.getElementById('timer-ring');
  const startBtn = document.getElementById('dash-timer-start');
  const resetBtn = document.getElementById('dash-timer-reset');
  const totalSeconds = 25 * 60;
  const circumference = 2 * Math.PI * 42;

  function updateTimerDisplay() {
    const m = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
    const s = (timerSeconds % 60).toString().padStart(2, '0');
    if (timerEl) timerEl.textContent = `${m}:${s}`;
    if (timerRing) {
      const offset = circumference - (timerSeconds / totalSeconds) * circumference;
      timerRing.style.strokeDashoffset = offset;
    }
  }

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
        if (timerIcon) timerIcon.textContent = 'play_arrow';
        if (timerLabel) timerLabel.textContent = 'Resume';
      } else {
        timerRunning = true;
        if (timerIcon) timerIcon.textContent = 'pause';
        if (timerLabel) timerLabel.textContent = 'Pause';
        timerInterval = setInterval(() => {
          if (timerSeconds > 0) {
            timerSeconds--;
            updateTimerDisplay();
          } else {
            clearInterval(timerInterval);
            timerRunning = false;
            if (timerIcon) timerIcon.textContent = 'play_arrow';
            if (timerLabel) timerLabel.textContent = 'Start';
            if (timerEl) timerEl.textContent = 'Time\'s up!';
          }
        }, 1000);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      clearInterval(timerInterval);
      timerRunning = false;
      timerSeconds = 25 * 60;
      if (timerIcon) timerIcon.textContent = 'play_arrow';
      if (timerLabel) timerLabel.textContent = 'Start';
      updateTimerDisplay();
    });
  }

  updateTimerDisplay();
});
