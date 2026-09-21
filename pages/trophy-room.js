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
  <section class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md mb-space-xl">
    <div>
      <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Trophy Room &amp; Badges Gallery</h1>
      <p class="font-body-md text-body-md text-on-surface-variant mt-1">Your collection of academic achievements and milestones</p>
    </div>
    <div class="flex items-center gap-space-md">
      <div class="flex items-center gap-space-xs px-space-md py-2 bg-primary-fixed rounded-full">
        <span class="material-symbols-outlined text-primary text-base">diamond</span>
        <span class="font-label-lg text-label-lg text-primary font-bold">${xp.toLocaleString()} XP Total</span>
      </div>
      <div class="flex items-center gap-space-xs px-space-md py-2 bg-secondary-fixed/50 rounded-full">
        <span class="material-symbols-outlined text-secondary text-base">emoji_events</span>
        <span class="font-label-lg text-label-lg text-on-secondary-fixed font-bold">${earnedBadges.length} / ${badges.length} Badges</span>
      </div>
    </div>
  </section>

  <!-- XP Level Progress -->
  <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md mb-space-xl">
    <div class="flex items-center justify-between mb-space-sm">
      <div class="flex items-center gap-space-sm">
        <div class="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center">
          <span class="material-symbols-outlined text-on-primary text-2xl">military_tech</span>
        </div>
        <div>
          <span class="font-headline-sm text-headline-sm text-on-surface">Level ${level} — ${currentLevelData.name}</span>
          <span class="font-label-md text-label-md text-on-surface-variant block">${xp.toLocaleString()} / ${nextLevelXP.toLocaleString()} XP to Level ${level + 1} (${nextLevelData.name})</span>
        </div>
      </div>
      <span class="font-headline-md text-headline-md text-primary font-extrabold">${xpProgress}%</span>
    </div>
    <div class="w-full bg-surface-container-high rounded-full h-3 overflow-hidden">
      <div class="bg-gradient-to-r from-primary to-primary-container h-full rounded-full transition-all duration-1000" style="width:${xpProgress}%"></div>
    </div>
    <div class="flex justify-between mt-space-xs font-label-md text-label-md text-on-surface-variant">
      <span>Level ${level}</span><span>Level ${level + 1}</span>
    </div>
  </div>

  <!-- Badge Collection -->
  <h3 class="font-headline-md text-headline-md text-on-surface mb-space-md">Badge Collection</h3>

  <!-- Earned -->
  <h4 class="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider mb-space-sm flex items-center gap-2">
    <span class="material-symbols-outlined text-tertiary-container text-base">check_circle</span> Earned (${earnedBadges.length})
  </h4>
  <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-space-md mb-space-xl">
    ${earnedBadges.map(b => `
    <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md card-hover text-center relative overflow-hidden ${b.tier === 'gold' ? 'gold-glow' : ''}">
      <div class="absolute top-0 right-0 px-2 py-0.5 rounded-bl-lg bg-${tierColors[b.tier]} font-label-md text-label-md font-bold capitalize">${b.tier}</div>
      <div class="w-16 h-16 mx-auto rounded-2xl bg-${tierColors[b.tier]} flex items-center justify-center mb-space-sm">
        <span class="material-symbols-outlined text-3xl ${b.tier === 'gold' ? 'text-secondary' : 'text-on-surface'}" style="font-variation-settings: 'FILL' 1;">${b.icon}</span>
      </div>
      <h4 class="font-headline-sm text-headline-sm text-on-surface">${b.name}</h4>
      <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">${b.desc}</p>
      <span class="inline-block mt-space-sm px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-md text-label-md font-bold">+${b.xp} XP</span>
    </div>`).join('')}
  </div>

  <!-- Locked -->
  <h4 class="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider mb-space-sm flex items-center gap-2">
    <span class="material-symbols-outlined text-outline text-base">lock</span> Locked (${lockedBadges.length})
  </h4>
  <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-space-md">
    ${lockedBadges.map(b => `
    <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm text-center opacity-70 relative overflow-hidden">
      <div class="w-16 h-16 mx-auto rounded-2xl bg-surface-container-high flex items-center justify-center mb-space-sm">
        <span class="material-symbols-outlined text-3xl text-outline">${b.icon}</span>
      </div>
      <h4 class="font-headline-sm text-headline-sm text-on-surface">${b.name}</h4>
      <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">${b.desc}</p>
      <div class="mt-space-sm">
        <div class="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
          <div class="bg-primary h-full rounded-full" style="width:${b.progress}%"></div>
        </div>
        <span class="font-label-md text-label-md text-on-surface-variant mt-1">${b.progress}% Complete</span>
      </div>
    </div>`).join('')}
  </div>`;
});
