// Learnly 11+ — Performance Analytics & Diagnostics
LearnlyRouter.register('analytics', function() {
  return `
  <section class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md mb-space-xl">
    <div>
      <div class="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md mb-1">
        <span>SCHOLAR REVISION TRACKER</span><span class="text-outline-variant">•</span>
        <span class="text-primary font-bold">CEM &amp; GL SYLLABUS ALIGNED</span>
      </div>
      <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Performance Analytics &amp; Diagnostics</h1>
    </div>
    <div class="flex flex-wrap items-center gap-space-sm">
      <div class="inline-flex p-1 bg-surface-container-high rounded-full shadow-sm">
        <button class="px-space-md py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant">Last 7 Days</button>
        <button class="px-space-md py-1.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-primary font-bold shadow-sm">Last 30 Days</button>
        <button class="px-space-md py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant">Mock Series</button>
      </div>
      <button class="flex items-center gap-space-xs px-space-lg py-2 bg-primary text-on-primary rounded-full font-label-lg text-label-lg shadow-[0_4px_14px_0_rgba(79,70,229,0.3)] hover:opacity-95 active:scale-95 transition-all" type="button">
        <span class="material-symbols-outlined text-base">download</span> Export Tutor Report (PDF)
      </button>
    </div>
  </section>

  <!-- Key Metrics Banner -->
  <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-xl">
    <!-- SAS Card -->
    <div class="p-space-lg bg-surface-container-lowest rounded-xl elevation-1 flex flex-col justify-between relative overflow-hidden">
      <div class="absolute -right-6 -bottom-6 w-28 h-28 bg-primary/5 rounded-full pointer-events-none"></div>
      <div>
        <div class="flex items-center justify-between mb-space-xs">
          <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Standardized Age Score</span>
          <span class="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-md text-label-md font-bold">Top 4%</span>
        </div>
        <div class="flex items-baseline gap-space-xs">
          <span class="font-display-hero text-display-hero text-primary font-extrabold leading-none">128</span>
          <span class="font-headline-sm text-headline-sm text-outline">/ 141</span>
        </div>
        <p class="font-label-md text-label-md text-tertiary font-semibold mt-1 flex items-center gap-1">
          <span class="material-symbols-outlined text-sm">verified</span> Grammar School Offer Band
        </p>
      </div>
      <div class="mt-space-md pt-space-sm border-t border-surface-container-high/60">
        <svg class="w-full h-8 overflow-visible" viewBox="0 0 200 36">
          <defs><linearGradient id="bellGrad" x1="0%" x2="100%"><stop offset="0%" stop-color="#d3e4fe" stop-opacity="0.4"/><stop offset="70%" stop-color="#4f46e5" stop-opacity="0.5"/><stop offset="100%" stop-color="#3525cd" stop-opacity="0.9"/></linearGradient></defs>
          <path d="M 0,34 Q 60,34 85,20 Q 100,5 115,20 Q 140,34 200,34" fill="none" stroke="#d3e4fe" stroke-width="2"/>
          <path d="M 120,34 Q 135,34 165,16 Q 180,8 190,4 L 190,34 Z" fill="url(#bellGrad)" opacity="0.3"/>
          <line stroke="#4f46e5" stroke-linecap="round" stroke-width="2.5" x1="168" x2="168" y1="2" y2="34"/>
          <circle cx="168" cy="8" fill="#4f46e5" r="3.5"/>
        </svg>
      </div>
    </div>
    <!-- Accuracy -->
    <div class="p-space-lg bg-surface-container-lowest rounded-xl elevation-1 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-space-xs">
          <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Overall Accuracy</span>
          <span class="flex items-center gap-0.5 text-tertiary font-label-md text-label-md font-bold"><span class="material-symbols-outlined text-sm">trending_up</span> +3.2%</span>
        </div>
        <div class="font-display-hero text-display-hero text-on-surface font-extrabold leading-none">89.4%</div>
        <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">Across CEM &amp; GL Standard Mocks</p>
      </div>
      <div class="mt-space-md">
        <div class="w-full bg-surface-container-high rounded-full h-2.5 overflow-hidden">
          <div class="bg-tertiary-container h-full rounded-full" style="width:89.4%"></div>
        </div>
      </div>
    </div>
    <!-- Questions Completed -->
    <div class="p-space-lg bg-surface-container-lowest rounded-xl elevation-1 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-space-xs">
          <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Questions Completed</span>
          <span class="material-symbols-outlined text-primary text-base">quiz</span>
        </div>
        <div class="font-display-hero text-display-hero text-on-surface font-extrabold leading-none">1,405</div>
        <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">+182 this month</p>
      </div>
      <div class="mt-space-md flex items-center gap-space-sm">
        <div class="flex-1 h-1.5 bg-primary rounded-full"></div>
        <span class="font-label-md text-label-md text-on-surface-variant">Target: 2,000</span>
      </div>
    </div>
    <!-- Study Time -->
    <div class="p-space-lg bg-surface-container-lowest rounded-xl elevation-1 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-space-xs">
          <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Study Time</span>
          <span class="flex items-center gap-0.5 text-primary font-label-md text-label-md font-bold"><span class="material-symbols-outlined text-sm">trending_up</span> +18%</span>
        </div>
        <div class="font-display-hero text-display-hero text-on-surface font-extrabold leading-none">42h</div>
        <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">This month • Avg 1.4h/day</p>
      </div>
      <div class="mt-space-md grid grid-cols-7 gap-1">
        ${[70,85,60,90,45,80,95].map(h => `<div class="h-8 rounded bg-primary/20 relative overflow-hidden"><div class="absolute bottom-0 w-full bg-primary rounded" style="height:${h}%"></div></div>`).join('')}
      </div>
    </div>
  </section>

  <!-- Charts Section -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-space-xl mb-space-xl">
    <!-- SAS Trend Chart -->
    <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md">
      <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md">SAS Score Trend</h3>
      <div class="chart-container" style="height:240px">
        <canvas id="sas-trend-chart"></canvas>
      </div>
    </div>
    <!-- Subject Accuracy Radar -->
    <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md">
      <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md">Subject Accuracy Breakdown</h3>
      <div class="chart-container" style="height:240px">
        <canvas id="subject-radar-chart"></canvas>
      </div>
    </div>
  </div>

  <!-- Weakness Heatmap -->
  <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md mb-space-xl">
    <div class="flex items-center justify-between mb-space-md">
      <h3 class="font-headline-sm text-headline-sm text-on-surface">Topic Weakness Heatmap</h3>
      <span class="font-label-md text-label-md text-on-surface-variant">Lower = More Mistakes</span>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-space-sm">
      ${[
        { topic:'3D Spatial Nets', pct:68, color:'error' },
        { topic:'Compound Words', pct:72, color:'secondary' },
        { topic:'Decimal Division', pct:75, color:'secondary' },
        { topic:'Reflection', pct:78, color:'secondary-container' },
        { topic:'Cloze Synonyms', pct:82, color:'outline' },
        { topic:'Ratio & Prop.', pct:88, color:'tertiary-container' },
        { topic:'Word Codes', pct:92, color:'tertiary-container' },
        { topic:'Fractions', pct:94, color:'tertiary' },
        { topic:'Inference', pct:90, color:'tertiary-container' },
        { topic:'Analogies', pct:86, color:'tertiary-container' },
        { topic:'Punctuation', pct:91, color:'tertiary-container' },
        { topic:'Sequences', pct:85, color:'tertiary-container' },
      ].map(t => `
      <div class="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high/40 text-center card-hover cursor-pointer" data-navigate="drill-spatial">
        <div class="font-headline-md text-headline-md text-${t.color} font-extrabold">${t.pct}%</div>
        <span class="font-label-md text-label-md text-on-surface-variant">${t.topic}</span>
      </div>`).join('')}
    </div>
  </div>

  <!-- Speed Analysis -->
  <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md">
    <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md">Speed Analysis by Subject</h3>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-space-md">
      ${[
        { subj:'Mathematics', avg:'48s', target:'45s', trend:'-3s', icon:'functions', color:'tertiary-container' },
        { subj:'Verbal Reasoning', avg:'34s', target:'40s', trend:'-6s', icon:'psychology', color:'primary' },
        { subj:'Non-Verbal', avg:'52s', target:'45s', trend:'+7s', icon:'view_in_ar', color:'secondary' },
        { subj:'English', avg:'42s', target:'45s', trend:'-3s', icon:'menu_book', color:'primary' },
      ].map(s => `
      <div class="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high/40">
        <div class="flex items-center gap-space-sm mb-space-sm">
          <span class="material-symbols-outlined text-${s.color}">${s.icon}</span>
          <span class="font-label-lg text-label-lg text-on-surface font-bold">${s.subj}</span>
        </div>
        <div class="flex items-baseline gap-1">
          <span class="font-headline-md text-headline-md text-on-surface font-extrabold">${s.avg}</span>
          <span class="font-label-md text-label-md text-on-surface-variant">/ question</span>
        </div>
        <div class="flex items-center justify-between mt-space-xs">
          <span class="font-label-md text-label-md text-on-surface-variant">Target: ${s.target}</span>
          <span class="font-label-md text-label-md ${s.trend.startsWith('+')?'text-error':'text-tertiary'} font-bold">${s.trend}</span>
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}, function() {
  function renderCharts() {
    const isMyRank = document.documentElement.getAttribute('data-theme') === 'myrank';
    const primaryColor = isMyRank ? '#c7ff24' : '#4f46e5';
    const primaryBg = isMyRank ? 'rgba(199,255,36,0.18)' : 'rgba(79,70,229,0.1)';
    const textColor = isMyRank ? '#e1e4d0' : '#0b1c30';
    const gridColor = isMyRank ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)';

    const sasCtx = document.getElementById('sas-trend-chart');
    if (sasCtx) {
      if (window._sasChartInstance) {
        window._sasChartInstance.destroy();
      }
      window._sasChartInstance = new Chart(sasCtx, {
        type: 'line',
        data: {
          labels: ['Mock #1','Mock #2','Mock #3','Mock #4'],
          datasets: [{
            label: 'SAS Score',
            data: [112, 120, 124, 128],
            borderColor: primaryColor,
            backgroundColor: primaryBg,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: primaryColor,
            pointRadius: 6,
            pointHoverRadius: 8,
            borderWidth: 3,
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
      if (window._radarChartInstance) {
        window._radarChartInstance.destroy();
      }
      window._radarChartInstance = new Chart(radarCtx, {
        type: 'radar',
        data: {
          labels: ['Mathematics','Verbal Reasoning','Non-Verbal','English','Speed','Consistency'],
          datasets: [{
            label: 'Current',
            data: [88, 91, 84, 86, 78, 85],
            borderColor: primaryColor,
            backgroundColor: primaryBg,
            borderWidth: 2,
            pointBackgroundColor: primaryColor,
          },{
            label: 'Target',
            data: [92, 92, 90, 90, 85, 90],
            borderColor: isMyRank ? '#38bdf8' : '#006e4b',
            backgroundColor: isMyRank ? 'rgba(56,189,248,0.1)' : 'rgba(0,110,75,0.08)',
            borderWidth: 2,
            borderDash: [5, 5],
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

  // Initialize charts
  setTimeout(renderCharts, 100);

  // Re-render when theme switches
  window.removeEventListener('themechange', renderCharts);
  window.addEventListener('themechange', renderCharts);
});
