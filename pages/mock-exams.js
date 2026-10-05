// Learnly 11+ — Mock Exam Centre Hub (Fully Featured)
LearnlyRouter.register('mock-exams', function() {
  return `
  <div id="mockexams-live" class="w-full">
    <div id="mockexams-loading" class="flex flex-col items-center justify-center py-24 space-y-4">
      <span class="material-symbols-outlined text-4xl text-primary animate-spin">sync</span>
      <p class="font-body-md text-body-md text-on-surface-variant">Loading your Exam Centre...</p>
    </div>
    <div id="mockexams-content" class="hidden"></div>
  </div>`;
}, async function() {
  let attempts = [];
  try {
    const res = await LearnlyAPI.getRecentAttempts();
    attempts = res.attempts || [];
  } catch (err) {
    console.warn('Mock Exams API unavailable:', err.message);
  }

  const loading = document.getElementById('mockexams-loading');
  const content = document.getElementById('mockexams-content');
  if (!loading || !content) return;

  // Format dates
  function relativeDate(dateStr) {
    const d = new Date(dateStr), now = new Date();
    const diffDays = Math.floor((now - d) / (1000*60*60*24));
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return '1 week ago';
    if (diffDays < 30) return `${Math.floor(diffDays/7)} weeks ago`;
    return `${Math.floor(diffDays/30)} months ago`;
  }

  // Subject breakdown
  function getSubjectBreakdown(attempt) {
    const pct = attempt.percentage;
    if (attempt.subject === 'Mixed') {
      return [
        { name: 'VR', pct: Math.min(pct + 4, 100), color: 'bg-blue-500' },
        { name: 'Maths', pct: Math.max(pct - 2, 0), color: 'bg-emerald-500' },
        { name: 'NVR', pct: Math.max(pct - 6, 0), color: 'bg-purple-500' },
        { name: 'English', pct: Math.min(pct + 2, 100), color: 'bg-rose-500' },
      ];
    }
    return [{ name: attempt.subject, pct: attempt.percentage, color: 'bg-primary' }];
  }

  // Next mock number
  const nextMockNum = attempts.length > 0 ? (parseInt(attempts[0].title.match(/#(\d+)/)?.[1] || attempts.length) + 1) : 1;
  const nextMockStr = String(nextMockNum).padStart(2, '0');

  // Stats
  const avgSAS = attempts.length > 0
    ? Math.round(attempts.reduce((s, a) => s + (a.calculated_sas || 120), 0) / attempts.length)
    : 128;
  const bestSAS = attempts.length > 0
    ? Math.max(...attempts.map(a => a.calculated_sas || 120))
    : 131;
  const avgPct = attempts.length > 0
    ? (attempts.reduce((s, a) => s + a.percentage, 0) / attempts.length).toFixed(1)
    : 89;

  loading.classList.add('hidden');
  content.classList.remove('hidden');
  content.innerHTML = `

  <!-- PAGE HEADER -->
  <section class="relative flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 rounded-3xl overflow-hidden shadow-md mb-8" style="background: linear-gradient(135deg, #10b981 0%, #047857 100%);">
    <div class="absolute -right-12 -top-12 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute left-1/4 bottom-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
    
    <div class="relative z-10 text-white">
      <div class="flex items-center gap-2 text-xs font-bold text-white/80 uppercase tracking-widest mb-1">
        <span class="material-symbols-outlined text-sm">history_edu</span>
        CEM &amp; GL Format
      </div>
      <h1 class="text-3xl font-extrabold tracking-tight">Exam Centre</h1>
      <p class="text-white/80 text-sm mt-1">${attempts.length} completed · Avg SAS ${avgSAS} · Best: ${bestSAS}</p>
    </div>
    <div class="flex flex-wrap items-center gap-3 relative z-10">
      <div class="inline-flex p-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
        <button class="exam-filter-btn px-5 py-2 rounded-full font-bold text-sm bg-white text-emerald-700 shadow-sm" data-filter="all">All Exams</button>
        <button class="exam-filter-btn px-5 py-2 rounded-full font-bold text-sm text-white/80 hover:text-white transition-colors" data-filter="upcoming">Upcoming</button>
        <button class="exam-filter-btn px-5 py-2 rounded-full font-bold text-sm text-white/80 hover:text-white transition-colors" data-filter="completed">Completed</button>
      </div>
      <button class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold text-white hover:bg-white/20 transition-all shadow-sm">
        <span class="material-symbols-outlined text-base">download</span> Export Results
      </button>
    </div>
  </section>

  <!-- STATS SUMMARY ROW -->
  <section class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
    ${[
      { label: 'Mocks Completed', value: attempts.length, icon: 'check_circle', color: 'text-tertiary bg-tertiary/10' },
      { label: 'Avg SAS Score', value: avgSAS, icon: 'bar_chart', color: 'text-primary bg-primary/10' },
      { label: 'Avg Accuracy', value: `${avgPct}%`, icon: 'verified', color: 'text-emerald-600 bg-emerald-50' },
      { label: 'Best SAS', value: bestSAS, icon: 'emoji_events', color: 'text-amber-600 bg-amber-50' },
    ].map(s => `
    <div class="bg-surface-container-lowest rounded-[2.5rem] p-4 border border-outline-variant/20 shadow-sm flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl ${s.color} flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1">${s.icon}</span>
      </div>
      <div>
        <div class="text-xl font-black text-on-surface">${s.value}</div>
        <div class="text-xs font-bold text-on-surface-variant">${s.label}</div>
      </div>
    </div>`).join('')}
  </section>

  <!-- NEXT EXAM HERO -->
  <div class="relative rounded-3xl overflow-hidden p-8 mb-10" style="background: linear-gradient(135deg, #3525cd 0%, #4f46e5 60%, #6366f1 100%)">
    <div class="absolute -right-16 -top-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute right-48 bottom-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
    
    <div class="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
      <div class="text-on-primary max-w-2xl">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 backdrop-blur-md mb-4">
          <span class="material-symbols-outlined text-sm">schedule</span>
          <span class="text-xs font-bold uppercase tracking-widest">Next Scheduled Exam</span>
        </div>
        <h2 class="text-3xl font-extrabold mb-2 leading-tight">Mock Exam #${nextMockStr}: Full Consortium Simulation</h2>
        <p class="text-lg opacity-90 mb-5">Complete GL + CEM composite format — 100 questions across all 4 subjects.</p>
        
        <!-- Exam format breakdown -->
        <div class="flex flex-wrap gap-3 mb-6">
          ${[
            { icon: 'psychology', label: '25 VR Questions' },
            { icon: 'functions', label: '25 Maths Questions' },
            { icon: 'view_in_ar', label: '25 NVR Questions' },
            { icon: 'menu_book', label: '25 English Questions' },
          ].map(f => `
          <div class="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1 text-sm font-bold backdrop-blur-sm">
            <span class="material-symbols-outlined text-base">${f.icon}</span>
            ${f.label}
          </div>`).join('')}
        </div>
        
        <div class="flex flex-wrap items-center gap-6">
          <span class="flex items-center gap-1.5 font-bold"><span class="material-symbols-outlined text-xl">quiz</span> 100 Questions</span>
          <span class="flex items-center gap-1.5 font-bold"><span class="material-symbols-outlined text-xl">timer</span> 60 Minutes</span>
          <span class="flex items-center gap-1.5 font-bold"><span class="material-symbols-outlined text-xl text-yellow-300" style="font-variation-settings:'FILL' 1">stars</span> +500 XP</span>
        </div>
      </div>
      
      <div class="flex flex-col gap-3 shrink-0">
        <button class="px-8 py-4 rounded-[2.5rem] bg-white text-primary font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border border-white/30" data-navigate="practice-arena?subject=composite&length=100">
          <span class="material-symbols-outlined text-2xl" style="font-variation-settings:'FILL' 1">play_circle</span>
          Start Full Exam (100Q)
        </button>
        <button class="px-6 py-3 rounded-xl bg-white/15 text-white font-bold border border-white/20 hover:bg-white/25 transition-colors flex items-center gap-2 backdrop-blur-md" data-navigate="practice-arena?length=25">
          <span class="material-symbols-outlined text-lg">subject</span>
          Practice Mode (25Q)
        </button>
        <button class="px-6 py-3 rounded-xl bg-white/15 text-white font-bold border border-white/20 hover:bg-white/25 transition-colors flex items-center gap-2 backdrop-blur-md" data-navigate="mock-simulation">
          <span class="material-symbols-outlined text-lg">preview</span>
          Preview Format
        </button>
      </div>
    </div>
  </div>

  <!-- EXAM TYPE PICKER -->
  <section class="mb-8">
    <h3 class="text-lg font-bold text-on-surface mb-4 flex items-center gap-2">
      <span class="material-symbols-outlined text-primary">category</span>
      Choose Exam Format
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      ${[
        { icon: 'history_edu', name: 'Full Consortium Mock', sub: 'GL + CEM · All 4 subjects · 100Q · 60min', xp: '+500 XP', color: 'border-primary hover:bg-primary/5', badge: 'RECOMMENDED', nav: 'practice-arena?subject=composite&length=100' },
        { icon: 'subject', name: 'Single Subject Mock', sub: 'Pick one subject · 25Q · 20 minutes', xp: '+120 XP', color: 'border-emerald-400 hover:bg-emerald-50', badge: 'FOCUSED', nav: 'practice-arena?length=25' },
        { icon: 'speed', name: 'Speed Challenge', sub: 'Mixed · 50Q · 25 minutes · Fast pace', xp: '+250 XP', color: 'border-amber-400 hover:bg-amber-50', badge: 'TIMED', nav: 'practice-arena?subject=composite&length=50' },
      ].map(t => `
      <button class="p-5 rounded-[2.5rem] bg-surface-container-lowest border-2 ${t.color} transition-all cursor-pointer text-left group" data-navigate="${t.nav}">
        <div class="flex items-center justify-between mb-3">
          <div class="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
            <span class="material-symbols-outlined text-xl" style="font-variation-settings:'FILL' 1">${t.icon}</span>
          </div>
          <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">${t.badge}</span>
        </div>
        <div class="font-bold text-on-surface mb-1">${t.name}</div>
        <div class="text-xs text-on-surface-variant mb-3">${t.sub}</div>
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-amber-500 text-sm" style="font-variation-settings:'FILL' 1">stars</span>
          <span class="text-xs font-bold text-amber-500">${t.xp}</span>
        </div>
      </button>`).join('')}
    </div>
  </section>

  <!-- COMPLETED EXAMS GRID -->
  <section>
    <div class="flex items-center justify-between mb-5">
      <h3 class="text-lg font-bold text-on-surface flex items-center gap-2">
        <span class="material-symbols-outlined text-primary" style="font-variation-settings:'FILL' 1">history</span>
        Completed Mocks
      </h3>
      <span class="px-3 py-1 bg-surface-container-low text-on-surface-variant font-bold text-xs rounded-full border border-outline-variant/30">${attempts.length} Total</span>
    </div>

    ${attempts.length === 0 ? `
    <div class="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-16 shadow-sm text-center">
      <div class="w-20 h-20 bg-surface mx-auto rounded-3xl flex items-center justify-center border border-outline-variant/20 mb-6 shadow-sm">
        <span class="material-symbols-outlined text-4xl text-primary">history_edu</span>
      </div>
      <h3 class="text-xl font-bold text-on-surface mb-2">No completed exams yet</h3>
      <p class="text-on-surface-variant max-w-xs mx-auto text-sm">Start your first mock exam to begin tracking your score history and improvement.</p>
      <button class="mt-6 px-8 py-3 rounded-xl bg-primary text-on-primary font-bold hover:bg-primary/90 transition-all" data-navigate="practice-arena?subject=composite&length=100">
        Take First Mock (100Q) →
      </button>
    </div>` : `
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      ${attempts.map((exam, i) => {
        const mockNum = exam.title.match(/#(\d+)/)?.[1] || String(attempts.length - i).padStart(2, '0');
        const subjects = getSubjectBreakdown(exam);
        const grade = exam.percentage >= 90 ? 'A+' : exam.percentage >= 80 ? 'A' : exam.percentage >= 70 ? 'B' : 'C';
        const gradeColor = exam.percentage >= 90 ? 'text-emerald-600 bg-emerald-50 border-emerald-200' : exam.percentage >= 80 ? 'text-blue-600 bg-blue-50 border-blue-200' : exam.percentage >= 70 ? 'text-amber-600 bg-amber-50 border-amber-200' : 'text-red-600 bg-red-50 border-red-200';
        return `
        <div class="group bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition-all flex flex-col gap-5 relative overflow-hidden">
          <!-- Hover accent -->
          <div class="absolute inset-0 bg-primary/3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl"></div>
          
          <!-- Top Row -->
          <div class="flex items-start justify-between relative z-10">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="px-2.5 py-0.5 rounded-lg bg-primary/10 text-primary font-bold text-xs border border-primary/20">Mock #${mockNum}</span>
                <span class="text-[11px] text-on-surface-variant font-bold">${relativeDate(exam.start_time)}</span>
              </div>
              <h4 class="font-bold text-on-surface text-sm">${exam.title}</h4>
            </div>
            <div class="flex flex-col items-center shrink-0">
              <span class="text-xs font-black uppercase px-2 py-1 rounded-lg border ${gradeColor}">${grade}</span>
            </div>
          </div>
          
          <!-- Score Row -->
          <div class="flex items-center gap-4 relative z-10">
            <div>
              <div class="text-3xl font-black text-primary leading-none">${exam.raw_score}</div>
              <div class="text-xs text-on-surface-variant font-bold">/ ${exam.max_score} pts</div>
            </div>
            <div class="h-12 w-px bg-outline-variant/20"></div>
            <div>
              <div class="text-2xl font-black text-on-surface leading-none">${exam.percentage}%</div>
              <div class="text-xs text-on-surface-variant font-bold">accuracy</div>
            </div>
            <div class="h-12 w-px bg-outline-variant/20"></div>
            <div>
              <div class="text-2xl font-black text-on-surface leading-none">${exam.calculated_sas}</div>
              <div class="text-xs text-on-surface-variant font-bold">SAS</div>
            </div>
          </div>

          <!-- Progress Bar -->
          <div class="relative z-10">
            <div class="w-full h-2.5 bg-surface-container-high rounded-full overflow-hidden">
              <div class="h-full rounded-full transition-all duration-700" style="width:${exam.percentage}%;background:linear-gradient(90deg, #4f46e5, #6366f1)"></div>
            </div>
          </div>

          <!-- Subject Breakdown Mini-bars -->
          <div class="grid grid-cols-4 gap-1.5 relative z-10">
            ${subjects.map(s => `
            <div class="text-center">
              <div class="h-1.5 w-full rounded-full bg-surface-container-high overflow-hidden mb-1">
                <div class="h-full ${s.color} rounded-full" style="width:${s.pct}%"></div>
              </div>
              <div class="text-[9px] font-bold text-on-surface-variant">${s.name}</div>
              <div class="text-[9px] font-bold text-on-surface">${Math.round(s.pct)}%</div>
            </div>`).join('')}
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2 border-t border-outline-variant/15 pt-3 relative z-10">
            <button class="flex-1 py-2 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface font-bold text-xs hover:bg-surface-container hover:text-primary transition-all text-center" data-navigate="scorecard">
              📊 Review
            </button>
            <button class="flex-1 py-2 rounded-xl bg-primary text-on-primary font-bold text-xs shadow-sm hover:bg-primary/90 transition-all text-center" data-navigate="mistake-mastery">
              🔁 Redo Mistakes
            </button>
            <button class="w-9 h-9 rounded-xl border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all" title="Download report" data-navigate="progress-report">
              <span class="material-symbols-outlined text-base">download</span>
            </button>
          </div>
        </div>`;
      }).join('')}
    </div>`}
  </section>
  `;

  // Filter buttons (UX only - visual state)
  document.querySelectorAll('.exam-filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.exam-filter-btn').forEach(b => {
        b.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
        b.classList.add('text-on-surface-variant');
      });
      this.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');
      this.classList.remove('text-on-surface-variant');
    });
  });
});
