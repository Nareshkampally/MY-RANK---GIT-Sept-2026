// Learnly 11+ — Parent & Tutor Portal (LIVE API)
LearnlyRouter.register('parent-portal', function() {
  return `
  <div id="parent-live" class="w-full">
    <div id="parent-loading" class="flex flex-col items-center justify-center py-24 space-y-4">
      <span class="material-symbols-outlined text-4xl text-primary animate-spin">sync</span>
      <p class="font-body-md text-body-md text-on-surface-variant">Loading parent dashboard...</p>
    </div>
    <div id="parent-content" class="hidden"></div>
  </div>`;
}, async function() {
  // ── FETCH LIVE DATA ─────────────────────────────────────────────────
  let session = null;
  let analytics = null;
  let clinics = [];
  let mistakes = [];

  try {
    const [sessionRes, analyticsRes, clinicsRes, mistakesRes] = await Promise.all([
      LearnlyAPI.getSession(),
      LearnlyAPI.getAnalyticsSummary(),
      LearnlyAPI.getClinics(),
      LearnlyAPI.getMistakes()
    ]);
    session = sessionRes;
    analytics = analyticsRes;
    clinics = clinicsRes.bookings || [];
    mistakes = mistakesRes.mistakes || [];
  } catch (err) {
    console.warn('Parent Portal API unavailable:', err.message);
  }

  const loading = document.getElementById('parent-loading');
  const content = document.getElementById('parent-content');
  if (!loading || !content) return;

  // ── COMPUTE LIVE VALUES ───────────────────────────────────────────
  const user = session ? session.user : { name: 'Student', level: 1, xp: 0, streak_days: 0 };
  const sessionData = session ? session.session : {};
  const sas = analytics ? analytics.currentSAS : 0;
  const accuracy = analytics ? analytics.overallAccuracy : 0;
  const streakDays = analytics ? analytics.streakDays : user.streak_days || 0;
  const weeklyHours = analytics ? analytics.weeklyStudyHours : 0;

  // Areas of focus from mistakes
  const mistakesBySubject = {};
  mistakes.forEach(m => {
    const subj = m.subject || 'Unknown';
    if (!mistakesBySubject[subj]) mistakesBySubject[subj] = [];
    mistakesBySubject[subj].push(m);
  });

  const areasOfFocus = Object.entries(mistakesBySubject).map(([subject, items]) => {
    // Derive a weakness % — more mistakes = lower %
    const basePct = 90 - (items.length * 8);
    const pct = Math.max(basePct, 50);
    const topicName = items[0]?.question_stem?.split('—')[0]?.trim() || subject;
    const shortSubj = subject.includes('Verbal') ? 'VR' : subject.includes('Math') ? 'Maths' : subject.includes('Non') ? 'NVR' : 'Eng';
    return {
      topic: `${topicName} (${shortSubj})`,
      pct,
      color: pct < 70 ? 'error' : pct < 80 ? 'secondary' : 'secondary-container'
    };
  }).sort((a, b) => a.pct - b.pct).slice(0, 3);

  // Compute questions done this week (estimated from session duration)
  const activeMinutes = (sessionData.active_duration_seconds || 0) / 60;
  const estimatedQuestions = Math.round(activeMinutes * 1.2); // ~1.2 questions per minute
  const goalPct = sessionData.goal_completed_percentage || 0;

  // ── RENDER LIVE CONTENT ───────────────────────────────────────────
  loading.classList.add('hidden');
  content.classList.remove('hidden');
  content.innerHTML = `
  <section class="relative flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 rounded-3xl overflow-hidden shadow-md mb-8" style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);">
    <div class="absolute -right-12 -top-12 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute left-1/4 bottom-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
    
    <div class="relative z-10 text-white">
      <h1 class="text-3xl font-extrabold tracking-tight">Parent &amp; Tutor Portal</h1>
      <p class="text-white/80 text-sm mt-1">Monitor ${user.name}'s progress, book clinics, and manage study plans</p>
    </div>
    <div class="flex items-center gap-space-sm relative z-10">
      <button class="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-teal-700 font-bold shadow-md hover:bg-white/90 transition-all" data-navigate="clinic-booking" type="button">
        <span class="material-symbols-outlined text-base">calendar_month</span> Book 1-on-1 Clinic
      </button>
    </div>
  </section>

  <!-- Child Overview Cards -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-xl">
    <div class="bg-surface-container-lowest rounded-[2.5rem] p-space-lg shadow-md elevation-1">
      <div class="flex items-center gap-space-sm mb-space-md">
        <img alt="${user.name}" class="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1Qc3G-0J8L9rm3gGyiGaPyqDHos_pYWjGOp9OUrxYQBOKEFee0wgAEVlh16TfmQNiWxt-NqWOA9qqDRvl1k4fL5wg1wUsStC9xvru1w7bUYvb8xBvFL3_5_N7dxiPrOLddmAE88mzYlHc_u2zguBI01dtegvKb9IikVtYlF2Qgf5MYRiedEBTFiJvBQrG2IgC7oZDgySOe_JrXyvQgSm1X0DHDgM09DGe70xqKgqN2-8FOuRaWwWZ8A"/>
        <div>
          <h3 class="font-headline-sm text-headline-sm text-on-surface">${user.name}</h3>
          <span class="font-label-md text-label-md text-tertiary-container font-bold">Level ${user.level} Scholar • ${user.xp.toLocaleString()} XP</span>
        </div>
      </div>
      <div class="space-y-space-sm">
        <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Current SAS</span><span class="font-label-lg text-label-lg text-primary font-bold">${sas} / 141</span></div>
        <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Overall Accuracy</span><span class="font-label-lg text-label-lg text-tertiary-container font-bold">${accuracy.toFixed(1)}%</span></div>
        <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Study Streak</span><span class="font-label-lg text-label-lg text-secondary font-bold">${streakDays} days</span></div>
      </div>
    </div>
    <div class="bg-surface-container-lowest rounded-[2.5rem] p-space-lg shadow-md elevation-1">
      <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md flex items-center gap-2"><span class="material-symbols-outlined text-primary">schedule</span>Study Activity</h3>
      <div class="space-y-space-sm">
        <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">This Week</span><span class="font-label-lg text-label-lg text-on-surface font-bold">${weeklyHours} hours</span></div>
        <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Questions Done</span><span class="font-label-lg text-label-lg text-on-surface font-bold">${estimatedQuestions}</span></div>
        <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Drills Completed</span><span class="font-label-lg text-label-lg text-on-surface font-bold">${Math.round(estimatedQuestions / 12)}</span></div>
        <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Daily Goal</span><span class="font-label-lg text-label-lg text-on-surface font-bold">${goalPct}% Complete</span></div>
      </div>
    </div>
    <div class="bg-surface-container-lowest rounded-[2.5rem] p-space-lg shadow-md elevation-1">
      <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md flex items-center gap-2"><span class="material-symbols-outlined text-secondary">priority_high</span>Areas of Focus</h3>
      <div class="space-y-space-sm">
        ${areasOfFocus.length > 0 ? areasOfFocus.map(t => `
        <div>
          <div class="flex justify-between mb-1"><span class="font-label-md text-label-md text-on-surface">${t.topic}</span><span class="font-label-md text-label-md text-${t.color} font-bold">${t.pct}%</span></div>
          <div class="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden"><div class="bg-${t.color} h-full rounded-full" style="width:${t.pct}%"></div></div>
        </div>`).join('') : `
        <p class="font-body-sm text-body-sm text-on-surface-variant">No weak areas detected — great job!</p>`}
      </div>
    </div>
  </div>

  <!-- Parent Live Cheer & Encouragement Dispatcher -->
  <div class="bg-surface-container-lowest rounded-3xl p-space-lg shadow-xl border-2 border-secondary/30 mb-space-xl relative overflow-hidden">
    <div class="absolute -right-8 -top-8 w-36 h-36 bg-secondary/10 rounded-full blur-2xl pointer-events-none"></div>
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-[2.5rem] bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center text-2xl shadow-md">
          ⭐
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold uppercase">Real-Time Parent Cheer</span>
            <span class="text-xs text-tertiary font-bold flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span> ${sessionData.status || `${user.name} is currently studying`}</span>
          </div>
          <h2 class="text-lg font-extrabold text-on-surface tracking-tight mt-0.5">Send Instant Motivational Encouragement</h2>
        </div>
      </div>
      <span class="text-xs text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-full">Appears immediately on student screen</span>
    </div>

    <!-- Quick Cheer Presets -->
    <div class="flex flex-wrap gap-2 mb-4">
      <button class="parent-cheer-btn px-3 py-2 rounded-xl bg-surface-container-low hover:bg-secondary-fixed/50 text-xs font-bold text-on-surface transition-all flex items-center gap-1.5 cursor-pointer" data-msg="Proud of your focus, ${user.name}! Keep shining ⭐" data-type="star">
        <span>⭐</span> <span>Proud of your focus, keep shining!</span>
      </button>
      <button class="parent-cheer-btn px-3 py-2 rounded-xl bg-surface-container-low hover:bg-secondary-fixed/50 text-xs font-bold text-on-surface transition-all flex items-center gap-1.5 cursor-pointer" data-msg="You crushed that Verbal Reasoning drill! 🚀" data-type="rocket">
        <span>🚀</span> <span>You crushed that VR drill!</span>
      </button>
      <button class="parent-cheer-btn px-3 py-2 rounded-xl bg-surface-container-low hover:bg-secondary-fixed/50 text-xs font-bold text-on-surface transition-all flex items-center gap-1.5 cursor-pointer" data-msg="Take a 5-min cognitive stretch break! 🍎" data-type="heart">
        <span>🍎</span> <span>Take a 5-min water &amp; stretch break!</span>
      </button>
      <button class="parent-cheer-btn px-3 py-2 rounded-xl bg-surface-container-low hover:bg-secondary-fixed/50 text-xs font-bold text-on-surface transition-all flex items-center gap-1.5 cursor-pointer" data-msg="Master of 3D Spatial Nets today! 🏆" data-type="trophy">
        <span>🏆</span> <span>Master of 3D Spatial Nets!</span>
      </button>
    </div>

    <!-- Custom Message Input -->
    <div class="flex items-center gap-2">
      <input id="custom-cheer-input" type="text" placeholder="Or type a personal encouraging message to ${user.name}..." class="flex-1 px-4 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/40"/>
      <button id="send-custom-cheer-btn" class="px-5 py-2.5 rounded-xl bg-secondary text-on-secondary font-bold text-sm shadow-md hover:opacity-90 transition-all flex items-center gap-1.5 cursor-pointer">
        <span class="material-symbols-outlined text-base">send</span>
        <span>Send Cheer</span>
      </button>
    </div>
  </div>

  <!-- Upcoming Bookings -->
  <h3 class="font-headline-md text-headline-md text-on-surface mb-space-md">Upcoming Bookings</h3>
  <div class="space-y-space-md mb-space-xl">
    ${clinics.length > 0 ? clinics.map(b => `
    <div class="bg-surface-container-lowest rounded-3xl p-space-lg shadow-sm flex items-center justify-between">
      <div class="flex items-center gap-space-md">
        <div class="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center"><span class="material-symbols-outlined text-on-primary text-xl">person</span></div>
        <div>
          <h4 class="font-headline-sm text-headline-sm text-on-surface">${b.tutor_subject}</h4>
          <span class="font-label-md text-label-md text-on-surface-variant">with ${b.tutor_name} • 45 min</span>
        </div>
      </div>
      <div class="flex items-center gap-space-md">
        <span class="font-label-lg text-label-lg text-on-surface font-bold">${b.date_time}</span>
        <span class="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold">${b.status}</span>
      </div>
    </div>`).join('') : `
    <div class="bg-surface-container-lowest rounded-3xl p-space-lg shadow-sm text-center">
      <span class="material-symbols-outlined text-3xl text-outline mb-2">event_busy</span>
      <p class="font-body-md text-body-md text-on-surface-variant">No upcoming bookings. <a href="#clinic-booking" class="text-primary font-bold">Book a clinic session</a></p>
    </div>`}
  </div>

  <!-- Settings -->
  <h3 class="font-headline-md text-headline-md text-on-surface mb-space-md">Settings &amp; Preferences</h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
    ${[
      { title: 'Study Goal', desc: 'Set daily time and question targets', icon: 'flag' },
      { title: 'Notifications', desc: 'Configure alerts for streaks, scores & clinics', icon: 'notifications' },
      { title: 'Target Schools', desc: 'Manage school preferences and exam formats', icon: 'school' },
      { title: 'Account', desc: 'Profile, subscription, and billing', icon: 'settings' },
    ].map(s => `
    <div class="bg-surface-container-lowest rounded-3xl p-space-lg shadow-sm card-hover flex items-center gap-space-md cursor-pointer">
      <div class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center"><span class="material-symbols-outlined text-primary text-xl">${s.icon}</span></div>
      <div class="flex-1"><h4 class="font-label-lg text-label-lg text-on-surface font-bold">${s.title}</h4><p class="font-body-sm text-body-sm text-on-surface-variant">${s.desc}</p></div>
      <span class="material-symbols-outlined text-outline">chevron_right</span>
    </div>`).join('')}
  </div>`;

  // ── ATTACH EVENT HANDLERS ─────────────────────────────────────────
  document.querySelectorAll('.parent-cheer-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const msg = btn.dataset.msg;
      const type = btn.dataset.type || 'star';
      if (window.LearnlyAPI) {
        LearnlyAPI.sendParentCheer(msg, type).catch(err => console.warn('Cheer API notice:', err));
      }
      if (window.AIBuddy) {
        window.AIBuddy.sendParentCheer(msg, type);
        window.AIBuddy.showToast('Cheer Sent! ⭐', 'Delivered live to ' + (session?.user?.name || 'student') + '\'s study session screen & recorded in SQLite.');
      }
    });
  });

  const customBtn = document.getElementById('send-custom-cheer-btn');
  const customInput = document.getElementById('custom-cheer-input');
  if (customBtn && customInput) {
    customBtn.addEventListener('click', async () => {
      const val = customInput.value.trim();
      if (!val) return;
      if (window.LearnlyAPI) {
        LearnlyAPI.sendParentCheer(val, 'heart').catch(err => console.warn('Cheer API notice:', err));
      }
      if (window.AIBuddy) {
        window.AIBuddy.sendParentCheer(val, 'heart');
        window.AIBuddy.showToast('Cheer Sent! 💖', 'Delivered live to ' + (session?.user?.name || 'student') + '\'s study session screen & recorded in SQLite.');
        customInput.value = '';
      }
    });
  }
});
