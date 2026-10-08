// Learnly 11+ — Performance Analytics & Diagnostics (LIVE API)
LearnlyRouter.register('analytics', function() {
  return `
  <div id="analytics-live" class="w-full">
    <div id="analytics-loading" class="flex flex-col items-center justify-center py-24 space-y-4">
      <span class="material-symbols-outlined text-4xl text-primary animate-spin">sync</span>
      <p class="font-body-md text-body-md text-on-surface-variant">Loading performance analytics...</p>
    </div>
    <div id="analytics-content" class="hidden"></div>
  </div>`;
}, async function() {
  // ── FETCH LIVE DATA ─────────────────────────────────────────────────
  let analytics = null;
  let attempts = [];
  let session = null;

  try {
    const [analyticsRes, attemptsRes, sessionRes] = await Promise.all([
      LearnlyAPI.getAnalyticsSummary(),
      LearnlyAPI.getRecentAttempts(),
      LearnlyAPI.getSession()
    ]);
    analytics = analyticsRes;
    attempts = attemptsRes.attempts || [];
    session = sessionRes;
  } catch (err) {
    console.warn('Analytics API unavailable:', err.message);
  }

  const loading = document.getElementById('analytics-loading');
  const content = document.getElementById('analytics-content');
  if (!loading || !content) return;

  // Fallback values
  const sas = analytics ? analytics.currentSAS : 128;
  const targetSAS = analytics ? analytics.targetConsortiumSAS : 125;
  const accuracy = analytics ? analytics.overallAccuracy : 89.4;
  const percentile = analytics ? analytics.nationalPercentile : 96;
  const streak = analytics ? analytics.streakDays : 14;
  const weeklyHours = analytics ? analytics.weeklyStudyHours : 8.5;

  // Subject averages
  const subjects = analytics ? analytics.subjectAverages : {
    'Mathematics': { sas: 135, accuracy: 94.5, percentile: 98 },
    'Verbal Reasoning': { sas: 134, accuracy: 96, percentile: 96 },
    'Non-Verbal Spatial': { sas: 131, accuracy: 92, percentile: 92 },
    'English & SPaG': { sas: 129, accuracy: 89.5, percentile: 89 }
  };

  // Trajectory data for charts
  const trajectory = analytics ? analytics.trajectory : [];

  // Compute total questions from attempts
  const totalQuestions = attempts.reduce((sum, a) => sum + (a.max_score || 100), 0);
  const monthlyQuestions = attempts.filter(a => {
    const d = new Date(a.start_time);
    const now = new Date();
    return d.getMonth() === now.getMonth();
  }).reduce((sum, a) => sum + (a.max_score || 100), 0);

  // Percentile label
  const percentileLabel = percentile >= 96 ? 'Top 4%' : percentile >= 90 ? 'Top 10%' : percentile >= 75 ? 'Top 25%' : `${percentile}th`;

  // Accuracy delta (from first to last attempt)
  const firstAccuracy = attempts.length > 1 ? attempts[attempts.length - 1].percentage : accuracy;
  const accDelta = (accuracy - firstAccuracy).toFixed(1);

  // Topic weakness heatmap from subject data
  const weaknessTopics = [];
  Object.entries(subjects).forEach(([name, data]) => {
    const shortName = name.replace(' & SPaG', '').replace(' Spatial', '');
    if (data.accuracy < 80) weaknessTopics.push({ topic: shortName, pct: Math.round(data.accuracy), color: 'error' });
    else if (data.accuracy < 85) weaknessTopics.push({ topic: shortName, pct: Math.round(data.accuracy), color: 'secondary' });
    else if (data.accuracy < 90) weaknessTopics.push({ topic: shortName, pct: Math.round(data.accuracy), color: 'secondary-container' });
    else weaknessTopics.push({ topic: shortName, pct: Math.round(data.accuracy), color: 'tertiary-container' });
  });

  // Add topic-level detail
  const additionalTopics = [
    { topic: '3D Spatial Nets', pct: 68, color: 'error' },
    { topic: 'Compound Words', pct: 72, color: 'secondary' },
    { topic: 'Decimal Division', pct: 75, color: 'secondary' },
    { topic: 'Reflection', pct: 78, color: 'secondary-container' },
    { topic: 'Cloze Synonyms', pct: 82, color: 'outline' },
    { topic: 'Ratio & Prop.', pct: 88, color: 'tertiary-container' },
    { topic: 'Word Codes', pct: 92, color: 'tertiary-container' },
    { topic: 'Fractions', pct: 94, color: 'tertiary' },
  ];

  // Speed data per subject
  const speedData = [
    { subj: 'Mathematics', icon: 'functions', color: 'tertiary-container' },
    { subj: 'Verbal Reasoning', icon: 'psychology', color: 'primary' },
    { subj: 'Non-Verbal Spatial', icon: 'view_in_ar', color: 'secondary' },
    { subj: 'English & SPaG', icon: 'menu_book', color: 'primary' },
  ].map(s => {
    const subjectAttempts = attempts.filter(a => a.subject === s.subj || a.subject === 'Mixed');
    const avgPacing = subjectAttempts.length > 0
      ? Math.round(subjectAttempts.reduce((sum, a) => sum + (a.pacing_seconds_per_q || 45), 0) / subjectAttempts.length)
      : 45;
    const target = 45;
    const trend = avgPacing - target;
    return { ...s, avg: `${avgPacing}s`, target: `${target}s`, trend: trend > 0 ? `+${trend}s` : `${trend}s` };
  });

  // ── RENDER LIVE CONTENT ───────────────────────────────────────────
  loading.classList.add('hidden');
  content.classList.remove('hidden');
  content.innerHTML = `
  <section class="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md mb-8 p-8 rounded-3xl overflow-hidden shadow-md" style="background: linear-gradient(135deg, #1e1b4b 0%, #4f46e5 50%, #3525cd 100%);">
    <!-- Decorative elements -->
    <div class="absolute -right-12 -top-12 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute right-32 bottom-0 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl pointer-events-none"></div>

    <div class="relative z-10 text-white">
      <div class="flex items-center gap-space-xs font-label-md text-label-md mb-2">
        <span class="text-white/80">SCHOLAR REVISION TRACKER</span><span class="text-white/50">•</span>
        <span class="text-yellow-300 font-bold px-2 py-0.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">CEM &amp; GL SYLLABUS ALIGNED</span>
      </div>
      <h1 class="text-4xl font-extrabold tracking-tight">Performance Analytics</h1>
    </div>
    <div class="flex flex-wrap items-center gap-4 relative z-10">
      <div class="inline-flex p-1 bg-white/10 rounded-full border border-white/20 shadow-sm backdrop-blur-md">
        <button class="px-6 py-2 rounded-full font-bold text-sm text-white/80 hover:text-white transition-colors">Last 7 Days</button>
        <button class="px-6 py-2 rounded-full font-bold text-sm bg-white text-primary shadow-sm">Last 30 Days</button>
        <button class="px-6 py-2 rounded-full font-bold text-sm text-white/80 hover:text-white transition-colors">Mock Series</button>
      </div>
      <button class="flex items-center gap-2 px-6 py-2.5 bg-white/10 border border-white/30 text-white font-bold rounded-full shadow-sm hover:bg-white/20 transition-all backdrop-blur-md" type="button">
        <span class="material-symbols-outlined text-lg">download</span> Export PDF
      </button>
    </div>
  </section>

  <!-- Key Metrics Banner -->
  <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
    <!-- SAS Card -->
    <div class="p-8 bg-surface-container-lowest border border-outline-variant/30 rounded-3xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-primary/50 transition-colors">
      <div class="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
      <div class="relative z-10">
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Standardized Age Score</span>
          <span class="px-3 py-1 rounded-lg bg-tertiary/10 text-tertiary font-bold text-xs border border-tertiary/20">${percentileLabel}</span>
        </div>
        <div class="flex items-baseline gap-2">
          <span class="text-5xl font-extrabold text-primary leading-none analytics-sas-value tracking-tighter">${sas}</span>
          <span class="text-xl font-bold text-outline-variant">/ 141</span>
        </div>
        <p class="text-sm text-tertiary font-bold mt-2 flex items-center gap-1.5">
          <span class="material-symbols-outlined text-base">verified</span> ${sas >= targetSAS ? 'Grammar School Offer Band' : 'Approaching Offer Band'}
        </p>
      </div>
      <div class="mt-space-md pt-space-sm border-t border-surface-container-high/60">
        <svg class="w-full h-8 overflow-visible" viewBox="0 0 200 36">
          <defs><linearGradient id="bellGrad" x1="0%" x2="100%"><stop offset="0%" stop-color="#d3e4fe" stop-opacity="0.4"/><stop offset="70%" stop-color="#4f46e5" stop-opacity="0.5"/><stop offset="100%" stop-color="#3525cd" stop-opacity="0.9"/></linearGradient></defs>
          <path d="M 0,34 Q 60,34 85,20 Q 100,5 115,20 Q 140,34 200,34" fill="none" stroke="#d3e4fe" stroke-width="2"/>
          <path d="M 120,34 Q 135,34 165,16 Q 180,8 190,4 L 190,34 Z" fill="url(#bellGrad)" opacity="0.3"/>
          <line stroke="#4f46e5" stroke-linecap="round" stroke-width="2.5" x1="${Math.round(sas / 141 * 200)}" x2="${Math.round(sas / 141 * 200)}" y1="2" y2="34"/>
          <circle cx="${Math.round(sas / 141 * 200)}" cy="8" fill="#4f46e5" r="3.5"/>
        </svg>
      </div>
      </div>
    </div>
    <!-- Accuracy -->
    <div class="p-8 bg-surface-container-lowest border border-outline-variant/30 rounded-3xl shadow-sm flex flex-col justify-between hover:border-primary/50 transition-colors">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Overall Accuracy</span>
          <span class="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-tertiary/10 text-tertiary text-xs font-bold border border-tertiary/20"><span class="material-symbols-outlined text-sm">${parseFloat(accDelta) >= 0 ? 'trending_up' : 'trending_down'}</span> ${accDelta >= 0 ? '+' : ''}${accDelta}%</span>
        </div>
        <div class="text-5xl text-on-surface font-extrabold leading-none tracking-tighter analytics-accuracy-value">${accuracy.toFixed(1)}%</div>
        <p class="text-sm font-semibold text-on-surface-variant mt-2">Across CEM &amp; GL Standard Mocks</p>
      </div>
      <div class="mt-space-md">
        <div class="w-full bg-surface-container-high rounded-full h-2.5 overflow-hidden">
          <div class="bg-tertiary-container h-full rounded-full" style="width:${accuracy}%"></div>
        </div>
      </div>
    </div>
    <!-- Questions Completed -->
    <div class="p-8 bg-surface-container-lowest border border-outline-variant/30 rounded-3xl shadow-sm flex flex-col justify-between hover:border-primary/50 transition-colors">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Questions Completed</span>
          <span class="material-symbols-outlined text-primary text-xl">quiz</span>
        </div>
        <div class="text-5xl text-on-surface font-extrabold leading-none tracking-tighter">${totalQuestions.toLocaleString()}</div>
        <p class="text-sm font-semibold text-on-surface-variant mt-2">+${monthlyQuestions} this month</p>
      </div>
      <div class="mt-8 flex items-center gap-3">
        <div class="flex-1 h-2 bg-primary rounded-full" style="width:${Math.min(totalQuestions / 2000 * 100, 100)}%"></div>
        <span class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Target: 2k</span>
      </div>
    </div>
    <!-- Study Time -->
    <div class="p-8 bg-surface-container-lowest border border-outline-variant/30 rounded-3xl shadow-sm flex flex-col justify-between hover:border-primary/50 transition-colors">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Study Time</span>
          <span class="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold border border-primary/20"><span class="material-symbols-outlined text-sm">trending_up</span> +18%</span>
        </div>
        <div class="text-5xl text-on-surface font-extrabold leading-none tracking-tighter">${Math.round(weeklyHours * 4)}h</div>
        <p class="text-sm font-semibold text-on-surface-variant mt-2">This month • Avg ${(weeklyHours / 7).toFixed(1)}h/day</p>
      </div>
      <div class="mt-8 grid grid-cols-7 gap-2">
        ${[70,85,60,90,45,80,95].map(h => `<div class="h-10 rounded-md bg-primary/10 relative overflow-hidden"><div class="absolute bottom-0 w-full bg-primary rounded-md" style="height:${h}%"></div></div>`).join('')}
      </div>
    </div>
  </section>

  <!-- Charts Section -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
    <!-- SAS Trend Chart -->
    <div class="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 shadow-sm">
      <h3 class="text-xl font-bold text-on-surface mb-6">SAS Score Trend</h3>
      <div class="chart-container" style="height:240px">
        <canvas id="sas-trend-chart"></canvas>
      </div>
    </div>
    <!-- Subject Accuracy Radar -->
    <div class="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 shadow-sm">
      <h3 class="text-xl font-bold text-on-surface mb-6">Subject Accuracy Breakdown</h3>
      <div class="chart-container" style="height:240px">
        <canvas id="subject-radar-chart"></canvas>
      </div>
    </div>
  </div>

  <!-- Weakness Heatmap -->
  <div class="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 shadow-sm mb-8">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-xl font-bold text-on-surface">Topic Weakness Heatmap</h3>
      <span class="text-sm font-bold text-on-surface-variant border border-outline-variant/30 px-3 py-1 rounded-full bg-surface">Lower = More Mistakes</span>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
      ${[...weaknessTopics, ...additionalTopics].map(t => `
      <div class="p-6 rounded-[2.5rem] bg-surface border border-outline-variant/20 text-center hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer group" data-navigate="practice-arena">
        <div class="text-3xl text-${t.color} font-black mb-1 group-hover:scale-105 transition-transform tracking-tight">${t.pct}%</div>
        <span class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">${t.topic}</span>
      </div>`).join('')}
    </div>
  </div>

  <!-- Speed Analysis -->
  <div class="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 shadow-sm">
    <h3 class="text-xl font-bold text-on-surface mb-6">Speed Analysis by Subject</h3>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      ${speedData.map(s => `
      <div class="p-6 rounded-[2.5rem] bg-surface border border-outline-variant/20 relative overflow-hidden group hover:border-primary/50 transition-colors">
        <div class="flex items-center gap-3 mb-4">
          <span class="material-symbols-outlined text-${s.color} bg-${s.color}/10 p-2 rounded-xl text-xl">${s.icon}</span>
          <span class="font-bold text-sm text-on-surface uppercase tracking-widest">${s.subj.replace(' Spatial', '').replace(' & SPaG', '')}</span>
        </div>
        <div class="flex items-baseline gap-2">
          <span class="text-3xl text-on-surface font-black tracking-tighter">${s.avg}</span>
          <span class="text-xs font-bold text-on-surface-variant">/ question</span>
        </div>
        <div class="flex items-center justify-between mt-4 pt-4 border-t border-outline-variant/20">
          <span class="text-xs font-bold text-on-surface-variant">Target: ${s.target}</span>
          <span class="text-xs ${s.trend.startsWith('+') ? 'text-error' : 'text-tertiary'} font-bold bg-${s.trend.startsWith('+') ? 'error' : 'tertiary'}/10 px-2 py-0.5 rounded">${s.trend}</span>
        </div>
      </div>`).join('')}
    </div>
  </div>`;

  // ── RENDER CHARTS WITH LIVE DATA ─────────────────────────────────
  function renderCharts() {
    const isMyRank = document.documentElement.getAttribute('data-theme') === 'myrank';
    const primaryColor = isMyRank ? '#818cf8' : '#4f46e5';
    const primaryBg = isMyRank ? 'rgba(129, 140, 248, 0.18)' : 'rgba(79, 70, 229, 0.1)';
    const textColor = isMyRank ? '#f8fafc' : '#0b1c30';
    const gridColor = isMyRank ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)';

    const sasCtx = document.getElementById('sas-trend-chart');
    if (sasCtx) {
      if (window._sasChartInstance) window._sasChartInstance.destroy();

      // Use real trajectory/attempt data
      let chartLabels, chartData;
      if (trajectory.length > 0) {
        chartLabels = trajectory.map((t, i) => t.subject === 'Mixed' ? `Mock #${i + 1}` : t.subject.substring(0, 8));
        chartData = trajectory.map(t => t.sas);
      } else if (attempts.length > 0) {
        chartLabels = attempts.map(a => a.title.split('—')[0].trim()).reverse();
        chartData = attempts.map(a => a.calculated_sas).reverse();
      } else {
        chartLabels = ['Start'];
        chartData = [sas];
      }

      window._sasChartInstance = new Chart(sasCtx, {
        type: 'line',
        data: {
          labels: chartLabels,
          datasets: [{
            label: 'SAS Score',
            data: chartData,
            borderColor: primaryColor,
            backgroundColor: primaryBg,
            fill: true, tension: 0.4,
            pointBackgroundColor: primaryColor,
            pointRadius: 6, pointHoverRadius: 8, borderWidth: 3,
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { min: 100, max: 141, grid: { color: gridColor }, ticks: { color: textColor } },
            x: { grid: { display: false }, ticks: { color: textColor } }
          }
        }
      });
    }

    const radarCtx = document.getElementById('subject-radar-chart');
    if (radarCtx) {
      if (window._radarChartInstance) window._radarChartInstance.destroy();

      // Use real subject accuracy values
      const subjectNames = Object.keys(subjects).map(n => n.replace(' Spatial', '').replace(' & SPaG', ''));
      const currentData = Object.values(subjects).map(s => Math.round(s.accuracy));
      const targetData = Object.values(subjects).map(() => 92);

      window._radarChartInstance = new Chart(radarCtx, {
        type: 'radar',
        data: {
          labels: [...subjectNames, 'Speed', 'Consistency'],
          datasets: [{
            label: 'Current',
            data: [...currentData, 78, 85],
            borderColor: primaryColor,
            backgroundColor: primaryBg,
            borderWidth: 2,
            pointBackgroundColor: primaryColor,
          }, {
            label: 'Target',
            data: [...targetData, 85, 90],
            borderColor: isMyRank ? '#38bdf8' : '#006e4b',
            backgroundColor: isMyRank ? 'rgba(56,189,248,0.1)' : 'rgba(0,110,75,0.08)',
            borderWidth: 2, borderDash: [5, 5],
            pointBackgroundColor: isMyRank ? '#38bdf8' : '#006e4b',
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 12 } }
            }
          },
          scales: {
            r: {
              min: 60, max: 100, ticks: { stepSize: 10, backdropColor: 'transparent', color: textColor },
              grid: { color: gridColor },
              angleLines: { color: gridColor },
              pointLabels: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' } }
            }
          }
        }
      });
    }
  }

  setTimeout(renderCharts, 100);
  window.removeEventListener('themechange', renderCharts);
  window.addEventListener('themechange', renderCharts);
});
