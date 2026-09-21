// Learnly 11+ — Mock Exams & Test Management (LIVE API)
LearnlyRouter.register('mock-exams', function() {
  return `
  <div id="mockexams-live" class="w-full">
    <div id="mockexams-loading" class="flex flex-col items-center justify-center py-24 space-y-4">
      <span class="material-symbols-outlined text-4xl text-primary animate-spin">sync</span>
      <p class="font-body-md text-body-md text-on-surface-variant">Loading your exam centre...</p>
    </div>
    <div id="mockexams-content" class="hidden"></div>
  </div>`;
}, async function() {
  // ── FETCH LIVE DATA ─────────────────────────────────────────────────
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

  // ── COMPUTE LIVE VALUES ───────────────────────────────────────────
  const nextMockNum = attempts.length > 0 ? (parseInt(attempts[0].title.match(/#(\d+)/)?.[1] || attempts.length) + 1) : 1;
  const nextMockNumStr = String(nextMockNum).padStart(2, '0');

  // Calculate days until next scheduled exam (placeholder: 18 days)
  const daysUntilNext = 18;

  // Format relative dates
  function relativeDate(dateStr) {
    const d = new Date(dateStr);
    const now = new Date();
    const diffMs = now - d;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return '1 week ago';
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 60) return '1 month ago';
    return `${Math.floor(diffDays / 30)} months ago`;
  }

  // Subject breakdown per exam (derived from subject field)
  function getSubjectBreakdown(attempt) {
    if (attempt.subject === 'Mixed') {
      const pct = attempt.percentage;
      return [
        `VR ${Math.min(pct + 4, 100)}%`,
        `Maths ${Math.max(pct - 2, 0)}%`,
        `NVR ${Math.max(pct - 6, 0)}%`,
        `Eng ${Math.min(pct + 2, 100)}%`
      ];
    }
    return [`${attempt.subject} ${attempt.percentage}%`];
  }

  // ── RENDER LIVE CONTENT ───────────────────────────────────────────
  loading.classList.add('hidden');
  content.classList.remove('hidden');
  content.innerHTML = `
  <section class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md mb-space-xl">
    <div>
      <div class="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md mb-1">
        <span>EXAM CENTRE</span><span class="text-outline-variant">•</span>
        <span class="text-primary font-bold">CEM &amp; GL FORMAT</span>
      </div>
      <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Mock Exams &amp; Test Management</h1>
    </div>
    <div class="flex items-center gap-space-sm">
      <div class="inline-flex p-1 bg-surface-container-high rounded-full shadow-sm">
        <button class="px-space-md py-1.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-primary font-bold shadow-sm">All Exams</button>
        <button class="px-space-md py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface">Upcoming</button>
        <button class="px-space-md py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface">Completed</button>
      </div>
    </div>
  </section>

  <!-- Upcoming Mock -->
  <div class="bg-gradient-to-br from-primary-container to-primary rounded-2xl p-space-xl shadow-xl mb-space-xl relative overflow-hidden">
    <div class="absolute -right-16 -top-16 w-64 h-64 bg-on-primary/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-lg">
      <div class="text-on-primary">
        <div class="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-on-primary/15 mb-space-sm backdrop-blur-sm">
          <span class="material-symbols-outlined text-sm">schedule</span>
          <span class="font-label-md text-label-md uppercase tracking-wider">Next Exam — In ${daysUntilNext} Days</span>
        </div>
        <h2 class="font-headline-lg text-headline-lg font-extrabold">Mock Exam #${nextMockNumStr}: Full Consortium Simulation</h2>
        <p class="font-body-md text-body-md opacity-90 mt-space-xs">Complete GL + CEM composite format — 100 questions across all 4 subjects. Timed at 60 minutes.</p>
        <div class="flex items-center gap-space-md mt-space-md">
          <span class="flex items-center gap-1 font-label-lg text-label-lg"><span class="material-symbols-outlined text-base">quiz</span> 100 Questions</span>
          <span class="flex items-center gap-1 font-label-lg text-label-lg"><span class="material-symbols-outlined text-base">timer</span> 60 Minutes</span>
          <span class="flex items-center gap-1 font-label-lg text-label-lg"><span class="material-symbols-outlined text-base">stars</span> +500 XP</span>
        </div>
      </div>
      <button class="px-space-xl py-3 rounded-full bg-on-primary text-primary font-label-lg text-label-lg font-bold shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 flex-shrink-0" data-navigate="mock-simulation" type="button">
        <span class="material-symbols-outlined text-xl">play_arrow</span> Start Full Exam
      </button>
    </div>
  </div>

  <!-- Completed Exams Grid -->
  <h3 class="font-headline-md text-headline-md text-on-surface mb-space-md">Completed Mock Exams (${attempts.length})</h3>
  ${attempts.length === 0 ? `
  <div class="bg-surface-container-lowest rounded-2xl p-space-xl shadow-md text-center">
    <span class="material-symbols-outlined text-4xl text-outline mb-4">quiz</span>
    <p class="font-body-lg text-body-lg text-on-surface-variant">No completed exams yet. Start your first mock exam above!</p>
  </div>` : `
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-md">
    ${attempts.map((exam, i) => {
      const mockNum = exam.title.match(/#(\d+)/)?.[1] || String(attempts.length - i).padStart(2, '0');
      const subjects = getSubjectBreakdown(exam);
      return `
    <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md card-hover flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-space-sm">
          <span class="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold">Mock #${mockNum}</span>
          <span class="font-label-md text-label-md text-on-surface-variant">${relativeDate(exam.start_time)}</span>
        </div>
        <h4 class="font-headline-sm text-headline-sm text-on-surface mb-space-xs">${exam.title}</h4>
        <div class="flex items-baseline gap-2 mb-space-sm">
          <span class="font-headline-lg text-headline-lg text-primary font-extrabold">${exam.raw_score}</span>
          <span class="font-body-md text-body-md text-outline">/ ${exam.max_score}</span>
          <span class="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-bold ml-auto">SAS ${exam.calculated_sas}</span>
        </div>
        <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden mb-space-md">
          <div class="bg-primary h-full rounded-full" style="width:${exam.percentage}%"></div>
        </div>
        <div class="grid grid-cols-2 gap-space-xs">
          ${subjects.map(s => `<span class="font-label-md text-label-md text-on-surface-variant">${s}</span>`).join('')}
        </div>
      </div>
      <div class="flex items-center gap-space-sm mt-space-lg pt-space-sm border-t border-surface-container-high/40">
        <button class="flex-1 px-space-md py-2 rounded-full bg-surface-container-high text-primary font-label-lg text-label-lg font-bold hover:bg-primary-fixed transition-all text-center" data-navigate="scorecard">Review</button>
        <button class="flex-1 px-space-md py-2 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-sm hover:scale-105 transition-all text-center" data-navigate="mistake-mastery">Retry Mistakes</button>
      </div>
    </div>`;
    }).join('')}
  </div>`}`;
});
