// Karat.Academy 11+ — Target School Cut-off Predictor (Connected to Live SAS Engine)
LearnlyRouter.register('school-predictor', function() {
  return `
  <div class="flex flex-col w-full space-y-8 pb-12 animate-fade-in">
    <!-- Header -->
    <header class="relative flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 rounded-3xl overflow-hidden shadow-md mb-8" style="background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);">
      <div class="absolute -right-12 -top-12 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute left-1/4 bottom-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      
      <div class="relative z-10 text-white">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase mb-2">
          <span class="material-symbols-outlined text-[14px]">account_balance</span>
          Admissions Intelligence
        </div>
        <h1 class="text-3xl text-white font-extrabold tracking-tight">
          Target School Predictor
        </h1>
        <p class="text-sm font-medium text-white/80 mt-1">
          Dynamic admission probability calculated against historical UK grammar cut-offs.
        </p>
      </div>
      <div class="flex items-center gap-3 relative z-10">
        <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-2 shadow-sm text-center">
          <div class="text-[10px] font-bold text-white/80 uppercase tracking-widest">Live SAS</div>
          <div class="text-2xl font-black text-white" id="predictor-user-sas">128</div>
        </div>
        <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-2 shadow-sm text-center">
          <div class="text-[10px] font-bold text-white/80 uppercase tracking-widest">Est. Standardised</div>
          <div class="text-2xl font-black text-amber-300" id="predictor-user-scaled">256</div>
        </div>
      </div>
    </header>

    <!-- Top Match Analysis Banner -->
    <section class="bg-gradient-to-br from-[#1e1b4b] to-[#312e81] rounded-3xl p-8 md:p-10 shadow-xl text-white relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
      <div class="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      
      <div class="flex-1 relative z-10">
        <h2 class="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-2 flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">radar</span> Top Match Assessment
        </h2>
        <h3 class="text-3xl sm:text-4xl font-black mb-3" id="top-school-name">Queen Elizabeth's School (QE Boys)</h3>
        <p class="text-indigo-100/90 text-sm leading-relaxed max-w-xl mb-6" id="top-school-desc">
          Based on your latest mock sessions and current learning velocity, your standardised score places your application well within the top decile for historical admission.
        </p>
        <div class="flex flex-wrap items-center gap-3">
          <a href="#clinic-booking" class="px-5 py-2.5 rounded-full bg-white text-indigo-900 font-bold hover:bg-gray-100 transition-colors shadow-lg text-xs flex items-center gap-2">
            <span class="material-symbols-outlined text-sm">calendar_month</span>
            Book Strategy Clinic
          </a>
          <a href="#study-planner" class="px-5 py-2.5 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 transition-colors border border-white/20 text-xs backdrop-blur-md flex items-center gap-2">
            <span class="material-symbols-outlined text-sm">event_note</span>
            Align Study Plan
          </a>
        </div>
      </div>

      <div class="w-full md:w-72 shrink-0 relative z-10">
        <!-- Probability Gauge -->
        <div class="bg-black/30 rounded-3xl p-6 border border-white/10 backdrop-blur-md text-center shadow-2xl">
          <div class="relative inline-block mb-2">
            <svg class="w-32 h-32 -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="8"/>
              <circle id="predictor-gauge-circle" cx="50" cy="50" r="42" fill="none" stroke="#4ade80" stroke-width="8" stroke-linecap="round" stroke-dasharray="264" stroke-dashoffset="26" class="transition-all duration-1000"/>
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="text-3xl font-black text-white" id="predictor-prob-pct">90%</span>
            </div>
          </div>
          <div class="text-sm font-bold text-white" id="predictor-prob-status">Highly Likely</div>
          <div class="text-[10px] text-indigo-200 mt-1" id="predictor-prob-margin">Safety margin: +21 pts</div>
        </div>
      </div>
    </section>

    <!-- School List Grid -->
    <div>
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-xl font-bold text-on-surface">Target Grammar Schools</h3>
        <span class="text-xs text-on-surface-variant font-medium">Click any school card to calculate predictive readiness</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="schools-grid">
        <!-- Dynamically rendered school cards -->
      </div>
    </div>

    <!-- AI Advice Box -->
    <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/30 shadow-sm flex items-start gap-4">
      <div class="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-xl">smart_toy</span>
      </div>
      <div>
        <h3 class="text-sm font-bold text-on-surface mb-1">Karat AI Admissions Recommendation</h3>
        <p class="text-sm text-on-surface-variant leading-relaxed">
          While your mathematics and spatial reasoning are tracking in the top 5% nationally, English comprehension and 19th-century vocabulary are the primary differentiators for Super-Selective Grammars like Henrietta Barnett and St. Olave's. We recommend setting a <strong>15-minute daily Cloze &amp; Vocabulary sprint</strong>.
        </p>
        <a href="#study-planner" class="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-primary hover:underline">
          <span class="material-symbols-outlined text-sm">schedule</span>
          Apply recommendation to Study Planner →
        </a>
      </div>
    </div>
  </div>`;
}, async function() {
  // ── SCHOOLS DATABASE ────────────────────────────────────────────────
  const grammarSchools = [
    {
      id: 'qe-boys',
      name: "Queen Elizabeth's School (QE Boys)",
      location: 'Barnet, North London',
      format: 'GL Assessment (Maths, English)',
      cutoffSAS: 122,
      targetLevel: 'Target 1'
    },
    {
      id: 'st-olaves',
      name: "St. Olave's Grammar School",
      location: 'Orpington, Kent',
      format: 'Stage 1 (SET) + Stage 2 Comprehension',
      cutoffSAS: 124,
      targetLevel: 'Target 2'
    },
    {
      id: 'wilsons',
      name: "Wilson's School",
      location: 'Wallington, Surrey',
      format: 'Sutton SET + English/Maths Stage 2',
      cutoffSAS: 121,
      targetLevel: 'Target 3'
    },
    {
      id: 'henrietta-barnett',
      name: 'The Henrietta Barnett School',
      location: 'Hampstead Garden Suburb',
      format: 'Round 1 VR/NVR/Eng + Round 2 Creative',
      cutoffSAS: 126,
      targetLevel: 'Target 4'
    },
    {
      id: 'tiffin-boys',
      name: 'Tiffin School',
      location: 'Kingston upon Thames',
      format: 'Stage 1 GL Style + Stage 2 Written',
      cutoffSAS: 119,
      targetLevel: 'Target 5'
    },
    {
      id: 'colchester-royal',
      name: 'Colchester Royal Grammar',
      location: 'Colchester, Essex',
      format: 'CSSE 11+ (Maths, English, VR)',
      cutoffSAS: 118,
      targetLevel: 'Target 6'
    }
  ];

  // Fetch live student analytics
  let userSAS = 128;
  try {
    const analytics = await LearnlyAPI.getAnalyticsSummary();
    if (analytics && analytics.currentSAS) {
      userSAS = analytics.currentSAS;
    }
  } catch(e) {
    console.warn('Analytics unavailable for school predictor:', e.message);
  }

  const userScaled = userSAS * 2;
  const sasEl = document.getElementById('predictor-user-sas');
  const scaledEl = document.getElementById('predictor-user-scaled');
  if (sasEl) sasEl.textContent = `${userSAS}`;
  if (scaledEl) scaledEl.textContent = `${userScaled}`;

  function calculateProbability(cutoff) {
    const gap = userSAS - cutoff;
    if (gap >= 8) return { pct: 95, label: 'Highly Likely', color: 'emerald', margin: `+${gap} SAS pts` };
    if (gap >= 3) return { pct: 85, label: 'Comfortable', color: 'emerald', margin: `+${gap} SAS pts` };
    if (gap >= 0) return { pct: 72, label: 'Competitive', color: 'amber', margin: `+${gap} SAS pts` };
    if (gap >= -3) return { pct: 54, label: 'Borderline', color: 'amber', margin: `${gap} SAS pts` };
    return { pct: 35, label: 'Challenging', color: 'rose', margin: `${gap} SAS pts` };
  }

  function renderSchools(selectedSchoolId) {
    const grid = document.getElementById('schools-grid');
    if (!grid) return;

    grid.innerHTML = grammarSchools.map(school => {
      const isSelected = school.id === selectedSchoolId;
      const prob = calculateProbability(school.cutoffSAS);
      const isGreen = prob.color === 'emerald';
      const isAmber = prob.color === 'amber';

      return `
        <div class="school-card p-6 rounded-3xl bg-surface-container-lowest border-2 ${isSelected ? 'border-primary ring-2 ring-primary/20 shadow-lg' : 'border-outline-variant/30 hover:border-primary/50'} transition-all cursor-pointer flex flex-col justify-between" data-school-id="${school.id}">
          <div>
            <div class="flex items-start justify-between mb-3">
              <div class="w-10 h-10 rounded-2xl ${isSelected ? 'bg-primary text-white' : 'bg-primary/10 text-primary'} flex items-center justify-center font-bold">
                <span class="material-symbols-outlined text-xl">school</span>
              </div>
              <span class="px-2.5 py-1 rounded-full ${isGreen ? 'bg-emerald-500/10 text-emerald-700' : isAmber ? 'bg-amber-500/10 text-amber-700' : 'bg-rose-500/10 text-rose-700'} text-xs font-bold">
                ${prob.label} (${prob.pct}%)
              </span>
            </div>
            <h4 class="font-extrabold text-base text-on-surface mb-0.5">${school.name}</h4>
            <p class="text-xs text-on-surface-variant mb-4">${school.location} • ${school.format}</p>
          </div>

          <div class="space-y-3 pt-2 border-t border-outline-variant/20">
            <div class="flex justify-between items-center text-xs">
              <span class="text-on-surface-variant font-medium">Historical Cut-off:</span>
              <span class="font-bold text-on-surface">${school.cutoffSAS} SAS</span>
            </div>
            <div class="flex justify-between items-center text-xs">
              <span class="text-on-surface-variant font-medium">Your Trajectory:</span>
              <span class="font-bold text-primary">${userSAS} SAS (${prob.margin})</span>
            </div>
            
            <div class="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
              <div class="h-full ${isGreen ? 'bg-emerald-500' : isAmber ? 'bg-amber-500' : 'bg-rose-500'} rounded-full transition-all duration-500" style="width: ${prob.pct}%"></div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click listeners to update top banner
    document.querySelectorAll('.school-card').forEach(card => {
      card.onclick = () => {
        const id = card.dataset.schoolId;
        const school = grammarSchools.find(s => s.id === id);
        if (school) updateBanner(school);
        renderSchools(id);
      };
    });
  }

  function updateBanner(school) {
    const nameEl = document.getElementById('top-school-name');
    const descEl = document.getElementById('top-school-desc');
    const pctEl = document.getElementById('predictor-prob-pct');
    const statusEl = document.getElementById('predictor-prob-status');
    const marginEl = document.getElementById('predictor-prob-margin');
    const circleEl = document.getElementById('predictor-gauge-circle');

    const prob = calculateProbability(school.cutoffSAS);

    if (nameEl) nameEl.textContent = school.name;
    if (descEl) {
      descEl.textContent = `Historical entry cut-off is approximately ${school.cutoffSAS} SAS. With your current performance score of ${userSAS} SAS, you hold a ${prob.margin} cushion for admission.`;
    }
    if (pctEl) pctEl.textContent = `${prob.pct}%`;
    if (statusEl) statusEl.textContent = prob.label;
    if (marginEl) marginEl.textContent = `Safety margin: ${prob.margin}`;

    if (circleEl) {
      // 264 is full circumference
      const offset = 264 - (264 * (prob.pct / 100));
      circleEl.style.strokeDashoffset = `${offset}`;
      circleEl.style.stroke = (prob.color === 'emerald') ? '#4ade80' : (prob.color === 'amber') ? '#fbbf24' : '#f87171';
    }
  }

  // Initial render
  const defaultSchool = grammarSchools[0];
  updateBanner(defaultSchool);
  renderSchools(defaultSchool.id);
});
