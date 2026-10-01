// Learnly 11+ — Trophy Room & Badges Gallery (LIVE API)
LearnlyRouter.register('trophy-room', function() {
  return `
  <div id="trophy-live" class="w-full">
    <div id="trophy-loading" class="flex flex-col items-center justify-center py-24 space-y-4">
      <span class="material-symbols-outlined text-4xl text-primary animate-spin">sync</span>
      <p class="font-body-md text-body-md text-on-surface-variant">Loading your trophy collection...</p>
    </div>
    <div id="trophy-content" class="hidden"></div>
  </div>`;
}, async function() {
  // ── FETCH LIVE DATA ─────────────────────────────────────────────────
  let session = null;
  let analytics = null;
  let attempts = [];

  try {
    const [sessionRes, analyticsRes, attemptsRes] = await Promise.all([
      LearnlyAPI.getSession(),
      LearnlyAPI.getAnalyticsSummary(),
      LearnlyAPI.getRecentAttempts()
    ]);
    session = sessionRes;
    analytics = analyticsRes;
    attempts = attemptsRes.attempts || [];
  } catch (err) {
    console.warn('Trophy Room API unavailable:', err.message);
  }

  const loading = document.getElementById('trophy-loading');
  const content = document.getElementById('trophy-content');
  if (!loading || !content) return;

  // ── COMPUTE LIVE VALUES ───────────────────────────────────────────
  const user = session ? session.user : { name: 'Scholar', level: 1, xp: 0, streak_days: 0 };
  const xp = user.xp || 0;
  const level = user.level || 1;
  const streakDays = user.streak_days || analytics?.streakDays || 0;
  const sas = analytics ? analytics.currentSAS : 0;
  const accuracy = analytics ? analytics.overallAccuracy : 0;
  const totalTests = attempts.length;
  const totalQuestions = attempts.reduce((sum, a) => sum + (a.max_score || 100), 0);

  // Level names and XP thresholds
  const levels = [
    { name: 'Novice', xpRequired: 0 },
    { name: 'Learner', xpRequired: 100 },
    { name: 'Student', xpRequired: 300 },
    { name: 'Apprentice', xpRequired: 600 },
    { name: 'Scholar', xpRequired: 1000 },
    { name: 'Scholar', xpRequired: 1500 },
    { name: 'Master', xpRequired: 2000 },
    { name: 'Grand Master', xpRequired: 3000 },
    { name: 'Legend', xpRequired: 5000 },
  ];
  const currentLevelData = levels[Math.min(level, levels.length - 1)] || levels[0];
  const nextLevelData = levels[Math.min(level + 1, levels.length - 1)] || levels[levels.length - 1];
  const currentLevelXP = levels[Math.min(level - 1, levels.length - 1)]?.xpRequired || 0;
  const nextLevelXP = nextLevelData.xpRequired;
  const xpProgress = nextLevelXP > currentLevelXP ? ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP) * 100).toFixed(1) : 100;

  // ── DYNAMIC BADGE COMPUTATION ─────────────────────────────────────
  const vrAccuracy = analytics?.subjectAverages?.['Verbal Reasoning']?.accuracy || 0;
  const nvrAccuracy = analytics?.subjectAverages?.['Non-Verbal Spatial']?.accuracy || 0;
  const mathsAccuracy = analytics?.subjectAverages?.['Mathematics']?.accuracy || 0;

  // Count high VR scores (95%+ attempts)
  const vrHighScores = attempts.filter(a => a.subject === 'Verbal Reasoning' && a.percentage >= 95).length;

  const badges = [
    {
      name: 'VR Virtuoso', desc: '95%+ in Verbal Reasoning 3 times', icon: 'psychology',
      earned: vrHighScores >= 3 || vrAccuracy >= 95,
      tier: vrHighScores >= 3 ? 'gold' : 'locked', xp: 100,
      progress: Math.min(Math.round(vrHighScores / 3 * 100), 100)
    },
    {
      name: 'Maths Maestro', desc: 'Complete 500 Maths questions', icon: 'calculate',
      earned: totalQuestions >= 500 || mathsAccuracy >= 90,
      tier: totalQuestions >= 500 ? 'gold' : totalQuestions >= 250 ? 'silver' : 'locked', xp: 150,
      progress: Math.min(Math.round(totalQuestions / 500 * 100), 100)
    },
    {
      name: 'Streak Master', desc: '14-day study streak', icon: 'local_fire_department',
      earned: streakDays >= 14,
      tier: streakDays >= 14 ? 'gold' : 'locked', xp: 200,
      progress: Math.min(Math.round(streakDays / 14 * 100), 100)
    },
    {
      name: 'Speed Demon', desc: 'Under 30s average on 20+ questions', icon: 'bolt',
      earned: attempts.some(a => a.pacing_seconds_per_q <= 30),
      tier: attempts.some(a => a.pacing_seconds_per_q <= 30) ? 'silver' : 'locked', xp: 75,
      progress: attempts.length > 0 ? Math.min(Math.round((30 / Math.min(...attempts.map(a => a.pacing_seconds_per_q || 99))) * 100), 100) : 0
    },
    {
      name: 'Perfect Score', desc: '100% on any timed drill', icon: 'military_tech',
      earned: attempts.some(a => a.percentage === 100),
      tier: attempts.some(a => a.percentage === 100) ? 'silver' : 'locked', xp: 100,
      progress: attempts.length > 0 ? Math.max(...attempts.map(a => a.percentage)) : 0
    },
    {
      name: 'Bookworm', desc: 'Read 50 comprehension passages', icon: 'auto_stories',
      earned: totalQuestions >= 200,
      tier: totalQuestions >= 200 ? 'silver' : 'locked', xp: 80,
      progress: Math.min(Math.round(totalQuestions / 200 * 100), 100)
    },
    {
      name: 'Night Owl', desc: 'Complete 5 sessions after 7pm', icon: 'dark_mode',
      earned: true, tier: 'bronze', xp: 50, progress: 100
    },
    {
      name: 'First Steps', desc: 'Complete your first mock exam', icon: 'flag',
      earned: totalTests >= 1,
      tier: totalTests >= 1 ? 'bronze' : 'locked', xp: 25,
      progress: totalTests >= 1 ? 100 : 0
    },
    {
      name: 'NVR Navigator', desc: '90%+ in Non-Verbal Reasoning', icon: 'view_in_ar',
      earned: nvrAccuracy >= 90,
      tier: nvrAccuracy >= 90 ? 'gold' : 'locked', xp: 100,
      progress: Math.min(Math.round(nvrAccuracy / 90 * 100), 100)
    },
    {
      name: 'Grand Scholar', desc: 'Reach SAS 130+', icon: 'school',
      earned: sas >= 130,
      tier: sas >= 130 ? 'gold' : 'locked', xp: 300,
      progress: Math.min(Math.round(sas / 130 * 100), 100)
    },
    {
      name: 'Perfectionist', desc: 'Score 95%+ on 5 consecutive mocks', icon: 'stars',
      earned: false, tier: 'locked', xp: 250,
      progress: Math.min(Math.round(attempts.filter(a => a.percentage >= 95).length / 5 * 100), 100)
    },
    {
      name: 'Marathon Runner', desc: 'Complete 2000 total questions', icon: 'directions_run',
      earned: totalQuestions >= 2000,
      tier: totalQuestions >= 2000 ? 'gold' : 'locked', xp: 200,
      progress: Math.min(Math.round(totalQuestions / 2000 * 100), 100)
    },
  ];

  const earnedBadges = badges.filter(b => b.earned);
  const lockedBadges = badges.filter(b => !b.earned);
  const totalXPFromBadges = earnedBadges.reduce((sum, b) => sum + b.xp, 0);
  const tierColors = { gold: 'secondary-container', silver: 'surface-container-highest', bronze: 'secondary-fixed', locked: 'surface-container-high' };

  // ── RENDER LIVE CONTENT ───────────────────────────────────────────
  loading.classList.add('hidden');
  content.classList.remove('hidden');
  content.innerHTML = `
  <div class="space-y-8 pb-12">
  <section class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
    <div>
      <h1 class="text-3xl font-extrabold text-on-surface tracking-tight">Trophy Room & Badges Gallery</h1>
      <p class="text-sm font-bold text-outline-variant mt-1">Your collection of academic achievements and milestones</p>
    </div>
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full shadow-sm">
        <span class="material-symbols-outlined text-primary text-lg">diamond</span>
        <span class="text-primary font-black tracking-tight">${xp.toLocaleString()} XP Total</span>
      </div>
      <div class="flex items-center gap-2 px-6 py-3 bg-secondary/10 border border-secondary/20 rounded-full shadow-sm">
        <span class="material-symbols-outlined text-secondary text-lg">emoji_events</span>
        <span class="text-secondary font-black tracking-tight">${earnedBadges.length} / ${badges.length} Badges</span>
      </div>
    </div>
  </section>

  <!-- XP Level Progress -->
  <div class="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-sm relative overflow-hidden mb-8 group">
    <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-32 -translate-y-32 group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>
    <div class="flex flex-col relative z-10 space-y-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-6">
          <div class="w-16 h-16 rounded-[2.5rem] bg-primary/10 border border-primary/20 flex items-center justify-center shadow-inner">
            <span class="material-symbols-outlined text-primary text-4xl">military_tech</span>
          </div>
          <div>
            <span class="text-2xl font-extrabold text-on-surface tracking-tight">Level ${level} — ${currentLevelData.name}</span>
            <span class="text-sm font-bold text-outline-variant block mt-1">${xp.toLocaleString()} / ${nextLevelXP.toLocaleString()} XP to Level ${level + 1} (${nextLevelData.name})</span>
          </div>
        </div>
        <span class="text-5xl font-black text-primary tracking-tighter">${xpProgress}%</span>
      </div>
      
      <div class="w-full bg-surface-container-high rounded-full h-4 overflow-hidden border border-outline-variant/20 shadow-inner">
        <div class="bg-gradient-to-r from-primary to-primary-container h-full rounded-full transition-all duration-1000" style="width:${xpProgress}%"></div>
      </div>
      <div class="flex justify-between mt-2 text-xs font-bold text-outline-variant uppercase tracking-widest">
        <span>Level ${level}</span><span>Level ${level + 1}</span>
      </div>
    </div>
  </div>

  <!-- Badge Collection -->
  <h3 class="text-2xl font-extrabold text-on-surface mb-6 tracking-tight">Badge Collection</h3>

  <!-- Earned -->
  <h4 class="text-xs font-bold text-outline-variant uppercase tracking-widest mb-4 flex items-center gap-2">
    <span class="material-symbols-outlined text-tertiary text-lg">check_circle</span> Earned (${earnedBadges.length})
  </h4>
  <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
    ${earnedBadges.map(b => `
    <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/30 shadow-sm text-center relative overflow-hidden group hover:border-${b.tier === 'gold' ? 'secondary' : 'primary'}/50 transition-colors">
      ${b.tier === 'gold' ? `<div class="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>` : ''}
      <div class="absolute top-0 right-0 px-3 py-1 rounded-bl-xl bg-${tierColors[b.tier]} text-[10px] font-bold text-on-surface uppercase tracking-widest z-10">${b.tier}</div>
      <div class="w-16 h-16 mx-auto rounded-[2.5rem] bg-${tierColors[b.tier]} flex items-center justify-center mb-4 relative z-10 shadow-inner">
        <span class="material-symbols-outlined text-3xl ${b.tier === 'gold' ? 'text-secondary font-black' : 'text-on-surface font-bold'}" style="font-variation-settings: 'FILL' 1;">${b.icon}</span>
      </div>
      <h4 class="text-base font-extrabold text-on-surface tracking-tight relative z-10">${b.name}</h4>
      <p class="text-xs font-medium text-on-surface-variant mt-2 relative z-10">${b.desc}</p>
      <div class="mt-4 inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black relative z-10 shadow-sm">+${b.xp} XP</div>
    </div>`).join('')}
  </div>

  <!-- Locked -->
  <h4 class="text-xs font-bold text-outline-variant uppercase tracking-widest mb-4 flex items-center gap-2">
    <span class="material-symbols-outlined text-outline text-lg">lock</span> Locked (${lockedBadges.length})
  </h4>
  <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
    ${lockedBadges.map(b => `
    <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/20 shadow-sm text-center opacity-60 relative overflow-hidden transition-opacity hover:opacity-80">
      <div class="w-16 h-16 mx-auto rounded-[2.5rem] bg-surface-container-high flex items-center justify-center mb-4 shadow-inner">
        <span class="material-symbols-outlined text-3xl text-outline-variant">${b.icon}</span>
      </div>
      <h4 class="text-base font-extrabold text-on-surface tracking-tight">${b.name}</h4>
      <p class="text-xs font-medium text-on-surface-variant mt-2">${b.desc}</p>
      <div class="mt-4">
        <div class="flex justify-between items-center mb-1 text-[10px] font-bold text-outline-variant uppercase tracking-widest">
            <span>Progress</span>
            <span>${b.progress}%</span>
        </div>
        <div class="w-full bg-surface-container-high border border-outline-variant/10 rounded-full h-2 overflow-hidden shadow-inner">
          <div class="bg-outline-variant h-full rounded-full" style="width:${b.progress}%"></div>
        </div>
      </div>
    </div>`).join('')}
  </div>
  </div>`;
});
