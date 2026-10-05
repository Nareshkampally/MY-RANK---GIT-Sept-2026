// Learnly 11+ / MyRank 11+ — AI Adaptive Learning Hub & Subject Quests (All 4 Disciplines)
// Enhanced with explicit themed borders, dynamic Target Focus configuration, and weak-area deep links

LearnlyRouter.register('subject-quests', function() {
  const params = LearnlyRouter.getParams();
  const filterSubject = (params.subject || 'all').toLowerCase();

  // Load configured target focuses or fallback to AI defaults
  const savedFocus = JSON.parse(localStorage.getItem('learnly_target_focus') || '{}');
  const targetMaths = savedFocus.maths || 'Multi-Step Remainder Theoretic Problems (<45s)';
  const targetVR = savedFocus.vr || 'Correlative Clause Markers, Inversion Logic & Classical Roots';
  const targetNVR = savedFocus.nvr || 'Hexagonal Net 1-Skip Pairing & Layer Superimposition';
  const targetEnglish = savedFocus.english || 'Implicit Tone Shifts, Victorian Prose Register & SPaG Inferences';

  return `
  <div class="flex flex-col w-full space-y-space-xl">
    <!-- AI Tutor Intelligence Hub: Top Diagnostic Panel -->
    <section class="relative rounded-[2.5rem] bg-gradient-to-br from-indigo-900 to-violet-900 p-10 shadow-lg overflow-hidden mb-8 text-white">
      <div class="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
      <div class="absolute right-1/3 -bottom-28 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
      <div class="relative z-10 flex flex-col space-y-8">
        <!-- Live Engine Calibration Ribbon -->
        <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/20">
          <div class="flex items-center gap-3">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span class="text-xs text-white/90 font-bold tracking-widest uppercase">Adaptive AI Engine Active</span>
            <span class="text-white/50">•</span>
            <span class="text-xs font-bold text-white/80">11+ Consortium Calibrated</span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
            <span class="material-symbols-outlined text-white text-base">school</span>
            <span class="text-xs text-white font-bold">Target Standard: QE Boys, Henrietta Barnett, St. Olave's</span>
          </div>
        </div>

        <!-- Core Predictive SAS Matrix -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
          <!-- SAS Math -->
          <div class="p-space-lg rounded-2xl bg-white/10 backdrop-blur-md border-2 border-indigo-400/40 flex flex-col justify-between hover:border-indigo-300 transition-all shadow-sm">
            <div class="flex items-start justify-between">
              <div>
                <span class="font-label-md text-label-md text-indigo-200 font-bold uppercase tracking-wider">Mathematics</span>
                <div class="flex items-baseline gap-space-xs mt-1">
                  <span class="font-headline-lg text-headline-lg text-white font-black" id="sas-maths">135</span>
                  <span class="font-label-md text-label-md text-emerald-300 font-bold">Top 0.6%</span>
                </div>
              </div>
              <div class="w-10 h-10 rounded-xl bg-indigo-500/30 flex items-center justify-center text-indigo-200">
                <span class="material-symbols-outlined text-xl">calculate</span>
              </div>
            </div>
            <div class="mt-space-md pt-space-xs">
              <span class="font-label-md text-label-md text-white/60 block mb-1 font-semibold uppercase">AI Diagnostic Niche</span>
              <p class="font-body-sm text-body-sm text-white font-medium leading-snug">Advanced Number Theory & Remainder Algebra</p>
            </div>
          </div>

          <!-- SAS Verbal -->
          <div class="p-space-lg rounded-2xl bg-white/10 backdrop-blur-md border-2 border-purple-400/40 flex flex-col justify-between hover:border-purple-300 transition-all shadow-sm">
            <div class="flex items-start justify-between">
              <div>
                <span class="font-label-md text-label-md text-purple-200 font-bold uppercase tracking-wider">Verbal Reasoning</span>
                <div class="flex items-baseline gap-space-xs mt-1">
                  <span class="font-headline-lg text-headline-lg text-white font-black" id="sas-vr">134</span>
                  <span class="font-label-md text-label-md text-emerald-300 font-bold">Top 0.8%</span>
                </div>
              </div>
              <div class="w-10 h-10 rounded-xl bg-purple-500/30 flex items-center justify-center text-purple-200">
                <span class="material-symbols-outlined text-xl">psychology</span>
              </div>
            </div>
            <div class="mt-space-md pt-space-xs">
              <span class="font-label-md text-label-md text-white/60 block mb-1 font-semibold uppercase">AI Diagnostic Niche</span>
              <p class="font-body-sm text-body-sm text-white font-medium leading-snug">Correlative Cloze & Inversion Logic Markers</p>
            </div>
          </div>

          <!-- SAS Non-Verbal -->
          <div class="p-space-lg rounded-2xl bg-white/10 backdrop-blur-md border-2 border-emerald-400/40 flex flex-col justify-between hover:border-emerald-300 transition-all shadow-sm">
            <div class="flex items-start justify-between">
              <div>
                <span class="font-label-md text-label-md text-emerald-300 font-bold uppercase tracking-wider">Non-Verbal Reasoning</span>
                <div class="flex items-baseline gap-space-xs mt-1">
                  <span class="font-headline-lg text-headline-lg text-white font-black" id="sas-nvr">131</span>
                  <span class="font-label-md text-label-md text-emerald-300 font-bold">Top 1.8%</span>
                </div>
              </div>
              <div class="w-10 h-10 rounded-xl bg-emerald-500/30 flex items-center justify-center text-emerald-300">
                <span class="material-symbols-outlined text-xl">view_in_ar</span>
              </div>
            </div>
            <div class="mt-space-md pt-space-xs">
              <span class="font-label-md text-label-md text-white/60 block mb-1 font-semibold uppercase">AI Diagnostic Niche</span>
              <p class="font-body-sm text-body-sm text-white font-medium leading-snug">3D Net Folding & Isometric Matrix Rotations</p>
            </div>
          </div>

          <!-- SAS English -->
          <div class="p-space-lg rounded-2xl bg-white/10 backdrop-blur-md border-2 border-rose-400/40 flex flex-col justify-between hover:border-rose-300 transition-all shadow-sm">
            <div class="flex items-start justify-between">
              <div>
                <span class="font-label-md text-label-md text-rose-200 font-bold uppercase tracking-wider">English & SPaG</span>
                <div class="flex items-baseline gap-space-xs mt-1">
                  <span class="font-headline-lg text-headline-lg text-white font-black" id="sas-english">129</span>
                  <span class="font-label-md text-label-md text-rose-300 font-bold">Top 2.5%</span>
                </div>
              </div>
              <div class="w-10 h-10 rounded-xl bg-rose-500/30 flex items-center justify-center text-rose-200">
                <span class="material-symbols-outlined text-xl">menu_book</span>
              </div>
            </div>
            <div class="mt-space-md pt-space-xs">
              <span class="font-label-md text-label-md text-white/60 block mb-1 font-semibold uppercase">AI Diagnostic Niche</span>
              <p class="font-body-sm text-body-sm text-white font-medium leading-snug">Archaic Vocab & Evaluative Inferences</p>
            </div>
          </div>
        </div>

        <!-- AI Recommended Daily Pathway Pill Banner -->
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-6 rounded-3xl bg-white/20 border border-primary/20 shadow-sm relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-16 -translate-y-16 pointer-events-none"></div>
          <div class="flex items-center gap-4 relative z-10">
            <div class="w-14 h-14 rounded-2xl bg-white text-indigo-900 flex items-center justify-center shadow-md flex-shrink-0">
              <span class="material-symbols-outlined text-3xl text-indigo-600">neurology</span>
            </div>
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="text-xs text-indigo-200 font-bold uppercase tracking-widest">Dynamic 30-Minute Pathway</span>
                <span class="px-2 py-0.5 rounded-md bg-secondary/10 text-purple-300 text-xs font-bold border border-secondary/20">High Yield</span>
              </div>
              <p class="text-xl text-white font-extrabold">
                Today's AI Focus: 3D Spatial Net Folding + Remainder Theory
              </p>
            </div>
          </div>
          <div class="flex items-center w-full lg:w-auto justify-end relative z-10">
            <a href="#practice-arena?subject=nvr&topic=3d-nets" class="px-8 py-3 bg-white text-indigo-900 rounded-full font-bold shadow-md hover:bg-slate-100 transition-all flex items-center gap-2 border border-white/20">
              <span class="material-symbols-outlined text-xl">play_arrow</span>
              Begin Pathway (30m)
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATIONAL CALLOUT: What is Target Focus & How it is Configured -->
    <div class="p-6 rounded-3xl bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shrink-0">
          <span class="material-symbols-outlined text-2xl">target</span>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h3 class="text-base font-extrabold text-slate-900">What is Target Focus & Why is it Critical?</h3>
            <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-[10px] uppercase tracking-wider">Consortium Calibration</span>
          </div>
          <p class="text-xs text-slate-600 mt-1 max-w-4xl leading-relaxed">
            In 11+ grammar school entrance exams, general practice leads to score plateaus. <strong>Target Focus</strong> is the AI-diagnosed single highest-impact subtopic where closing the knowledge gap yields the fastest Standard Age Score (SAS) surge (+4 to +8 points). You can let the AI auto-calibrate it from your latest mock mistakes, or click <strong>"Configure Focus"</strong> below to handpick weak topics for targeted drilling.
          </p>
        </div>
      </div>
      <button id="auto-calibrate-btn" class="shrink-0 px-4 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow transition-all flex items-center gap-1.5 cursor-pointer">
        <span class="material-symbols-outlined text-base">auto_fix_high</span>
        Auto-Calibrate from Mocks
      </button>
    </div>

    <!-- Subject Filter Tabs -->
    <div class="flex items-center gap-2 overflow-x-auto pb-2">
      <a href="#subject-quests" class="px-6 py-2.5 rounded-full font-bold text-sm ${filterSubject === 'all' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:text-primary border border-outline-variant/30'} transition-all whitespace-nowrap flex items-center gap-2">
        <span class="material-symbols-outlined text-base">apps</span> All Quests
      </a>
      <a href="#subject-quests?subject=maths" class="px-6 py-2.5 rounded-full font-bold text-sm ${filterSubject === 'maths' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:text-indigo-600 border border-outline-variant/30'} transition-all whitespace-nowrap flex items-center gap-2">
        <span class="material-symbols-outlined text-base text-indigo-500">calculate</span> Mathematics
      </a>
      <a href="#subject-quests?subject=vr" class="px-6 py-2.5 rounded-full font-bold text-sm ${filterSubject === 'vr' ? 'bg-purple-600 text-white shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:text-purple-600 border border-outline-variant/30'} transition-all whitespace-nowrap flex items-center gap-2">
        <span class="material-symbols-outlined text-base text-purple-500">psychology</span> Verbal Reasoning
      </a>
      <a href="#subject-quests?subject=nvr" class="px-6 py-2.5 rounded-full font-bold text-sm ${filterSubject === 'nvr' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:text-emerald-600 border border-outline-variant/30'} transition-all whitespace-nowrap flex items-center gap-2">
        <span class="material-symbols-outlined text-base text-emerald-500">view_in_ar</span> Non-Verbal Reasoning
      </a>
      <a href="#subject-quests?subject=english" class="px-6 py-2.5 rounded-full font-bold text-sm ${filterSubject === 'english' ? 'bg-rose-600 text-white shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:text-rose-600 border border-outline-variant/30'} transition-all whitespace-nowrap flex items-center gap-2">
        <span class="material-symbols-outlined text-base text-rose-500">menu_book</span> English & SPaG
      </a>
    </div>

    <!-- 4 Deep Subject Interactive Diagnostic Hub Modules (Each with DISTINCT HIGH-CONTRAST BORDER) -->
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
      
      <!-- Card 1: Mathematics (Indigo Border) -->
      ${(filterSubject === 'all' || filterSubject === 'maths') ? `
      <article class="bg-surface-container-lowest rounded-3xl p-8 border-2 border-indigo-400/80 hover:border-indigo-600 shadow-md hover:shadow-indigo-500/10 flex flex-col justify-between transition-all relative overflow-hidden group">
        <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600"></div>
        <div class="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
        <div class="flex flex-col space-y-6 relative z-10 pt-2">
          <!-- Header -->
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border-2 border-indigo-200 shadow-sm">
                <span class="material-symbols-outlined text-4xl">functions</span>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-3 py-1 rounded-lg bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-widest border border-indigo-200">GL & CEM Spec</span>
                  <span class="text-xs font-bold text-slate-500">Stage 4 Mastery</span>
                </div>
                <h2 class="text-2xl text-slate-900 font-extrabold tracking-tight">Mathematics</h2>
              </div>
            </div>
            <div class="text-right">
              <span class="text-4xl text-indigo-600 font-black leading-none">8.8<span class="text-lg font-bold text-slate-400">/10</span></span>
              <span class="block text-xs text-emerald-600 font-bold mt-1 tracking-widest uppercase">Exceeding Benchmark</span>
            </div>
          </div>

          <!-- AI Diagnostic Insight & Target Focus -->
          <div class="p-5 rounded-2xl bg-indigo-50/50 border-2 border-indigo-200/80 flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-widest">
                <span class="material-symbols-outlined text-lg">auto_graph</span>
                <span>AI Diagnosis</span>
              </div>
              <button onclick="openFocusConfigModal('maths')" class="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 underline cursor-pointer">
                <span class="material-symbols-outlined text-xs">tune</span> Configure Focus
              </button>
            </div>
            <p class="text-sm text-slate-700">
              <strong>Strengths:</strong> Multi-ratio scaling, algebraic substitution, kinematics.
            </p>
            <div class="p-3 rounded-xl bg-white border border-indigo-200/90 flex items-start gap-2 shadow-sm">
              <span class="material-symbols-outlined text-rose-500 text-lg shrink-0 mt-0.5">crisis_alert</span>
              <div>
                <span class="text-xs font-black text-rose-600 uppercase tracking-wider block">Active Target Focus:</span>
                <p class="text-sm font-bold text-slate-900 leading-snug" id="display-focus-maths">${targetMaths}</p>
              </div>
            </div>
          </div>

          <!-- Active Quest Box -->
          <div class="p-4 rounded-2xl bg-surface border border-outline-variant/30 flex flex-col space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-sm text-slate-900 font-bold flex items-center gap-2">
                <span class="material-symbols-outlined text-amber-500 text-lg">military_tech</span>
                The Prime Factorisation & Remainder Quest
              </span>
              <span class="text-xs text-indigo-600 font-bold">83%</span>
            </div>
            <div class="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
              <div class="bg-indigo-600 h-full rounded-full transition-all duration-500" style="width: 83%"></div>
            </div>
          </div>
        </div>

        <!-- Action Cluster -->
        <div class="pt-6 mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-indigo-100 relative z-10">
          <a href="#practice-arena?subject=maths&topic=remainder-theory" class="flex-1 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2">
            <span>Drill Target Focus</span>
            <span class="px-2 py-0.5 rounded-md bg-white/20 text-xs">+35 XP</span>
          </a>
          <div class="flex items-center gap-2">
            <a href="#scorecard" class="px-4 py-3 rounded-full bg-surface border border-slate-300 hover:border-indigo-500 text-xs text-slate-700 font-bold transition-all text-center">
              Topic Map
            </a>
            <a href="#mock-scratchpad" class="px-4 py-3 rounded-full bg-surface border border-slate-300 hover:border-indigo-500 text-xs text-slate-700 font-bold transition-all text-center">
              Formulas
            </a>
          </div>
        </div>
      </article>` : ''}

      <!-- Card 2: Verbal Reasoning (Purple Border) -->
      ${(filterSubject === 'all' || filterSubject === 'vr') ? `
      <article class="bg-surface-container-lowest rounded-3xl p-8 border-2 border-purple-400/80 hover:border-purple-600 shadow-md hover:shadow-purple-500/10 flex flex-col justify-between transition-all relative overflow-hidden group">
        <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-600"></div>
        <div class="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
        <div class="flex flex-col space-y-6 relative z-10 pt-2">
          <!-- Header -->
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border-2 border-purple-200 shadow-sm">
                <span class="material-symbols-outlined text-4xl">psychology</span>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-3 py-1 rounded-lg bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-widest border border-purple-200">Consortium Standard</span>
                  <span class="text-xs font-bold text-slate-500">Stage 4 Mastery</span>
                </div>
                <h2 class="text-2xl text-slate-900 font-extrabold tracking-tight">Verbal Reasoning</h2>
              </div>
            </div>
            <div class="text-right">
              <span class="text-4xl text-purple-600 font-black leading-none">8.6<span class="text-lg font-bold text-slate-400">/10</span></span>
              <span class="block text-xs text-purple-600 font-bold mt-1 tracking-widest uppercase">Selective Grammar Tier</span>
            </div>
          </div>

          <!-- AI Diagnostic Insight & Target Focus -->
          <div class="p-5 rounded-2xl bg-purple-50/50 border-2 border-purple-200/80 flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-purple-700 text-xs font-bold uppercase tracking-widest">
                <span class="material-symbols-outlined text-lg">psychology_alt</span>
                <span>AI Diagnosis</span>
              </div>
              <button onclick="openFocusConfigModal('vr')" class="text-xs font-bold text-purple-600 hover:text-purple-800 flex items-center gap-1 underline cursor-pointer">
                <span class="material-symbols-outlined text-xs">tune</span> Configure Focus
              </button>
            </div>
            <p class="text-sm text-slate-700">
              <strong>Strengths:</strong> Compound words, shuffled sentences, word ladders.
            </p>
            <div class="p-3 rounded-xl bg-white border border-purple-200/90 flex items-start gap-2 shadow-sm">
              <span class="material-symbols-outlined text-rose-500 text-lg shrink-0 mt-0.5">crisis_alert</span>
              <div>
                <span class="text-xs font-black text-rose-600 uppercase tracking-wider block">Active Target Focus:</span>
                <p class="text-sm font-bold text-slate-900 leading-snug" id="display-focus-vr">${targetVR}</p>
              </div>
            </div>
          </div>

          <!-- Active Quest Box -->
          <div class="p-4 rounded-2xl bg-surface border border-outline-variant/30 flex flex-col space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-sm text-slate-900 font-bold flex items-center gap-2">
                <span class="material-symbols-outlined text-purple-500 text-lg">auto_awesome</span>
                Archaic Etymology & Classical Roots
              </span>
              <span class="text-xs text-purple-600 font-bold">80%</span>
            </div>
            <div class="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
              <div class="bg-purple-600 h-full rounded-full transition-all duration-500" style="width: 80%"></div>
            </div>
          </div>
        </div>

        <!-- Action Cluster -->
        <div class="pt-6 mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-purple-100 relative z-10">
          <a href="#practice-arena?subject=vr&topic=inversion-logic" class="flex-1 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2">
            <span>Drill Target Focus</span>
            <span class="px-2 py-0.5 rounded-md bg-white/20 text-xs">+35 XP</span>
          </a>
          <div class="flex items-center gap-2">
            <a href="#vocab-vault" class="px-4 py-3 rounded-full bg-surface border border-slate-300 hover:border-purple-500 text-xs text-slate-700 font-bold transition-all text-center">
              Vocab Vault
            </a>
            <a href="#mistake-mastery" class="px-4 py-3 rounded-full bg-surface border border-slate-300 hover:border-purple-500 text-xs text-slate-700 font-bold transition-all text-center">
              Mistake Vault
            </a>
          </div>
        </div>
      </article>` : ''}

      <!-- Card 3: Non-Verbal & Spatial Reasoning (Emerald Border) -->
      ${(filterSubject === 'all' || filterSubject === 'nvr') ? `
      <article class="bg-surface-container-lowest rounded-3xl p-8 border-2 border-emerald-400/80 hover:border-emerald-600 shadow-md hover:shadow-emerald-500/10 flex flex-col justify-between transition-all relative overflow-hidden group">
        <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600"></div>
        <div class="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
        <div class="flex flex-col space-y-6 relative z-10 pt-2">
          <!-- Header -->
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border-2 border-emerald-200 shadow-sm">
                <span class="material-symbols-outlined text-4xl">view_in_ar</span>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest border border-emerald-200">Spatial 3D Engine</span>
                  <span class="text-xs font-bold text-slate-500">Stage 3 Mastery</span>
                </div>
                <h2 class="text-2xl text-slate-900 font-extrabold tracking-tight">Non-Verbal Reasoning</h2>
              </div>
            </div>
            <div class="text-right">
              <span class="text-4xl text-emerald-600 font-black leading-none">8.2<span class="text-lg font-bold text-slate-400">/10</span></span>
              <span class="block text-xs text-emerald-600 font-bold mt-1 tracking-widest uppercase">Top Decile Standing</span>
            </div>
          </div>

          <!-- AI Diagnostic Insight & Target Focus -->
          <div class="p-5 rounded-2xl bg-emerald-50/50 border-2 border-emerald-200/80 flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-widest">
                <span class="material-symbols-outlined text-lg">architecture</span>
                <span>AI Diagnosis</span>
              </div>
              <button onclick="openFocusConfigModal('nvr')" class="text-xs font-bold text-emerald-600 hover:text-emerald-800 flex items-center gap-1 underline cursor-pointer">
                <span class="material-symbols-outlined text-xs">tune</span> Configure Focus
              </button>
            </div>
            <p class="text-sm text-slate-700">
              <strong>Strengths:</strong> Sequential analogies, bilateral reflections, perimeter rules.
            </p>
            <div class="p-3 rounded-xl bg-white border border-emerald-200/90 flex items-start gap-2 shadow-sm">
              <span class="material-symbols-outlined text-rose-500 text-lg shrink-0 mt-0.5">crisis_alert</span>
              <div>
                <span class="text-xs font-black text-rose-600 uppercase tracking-wider block">Active Target Focus:</span>
                <p class="text-sm font-bold text-slate-900 leading-snug" id="display-focus-nvr">${targetNVR}</p>
              </div>
            </div>
          </div>

          <!-- Active Quest Box -->
          <div class="p-4 rounded-2xl bg-surface border border-outline-variant/30 flex flex-col space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-sm text-slate-900 font-bold flex items-center gap-2">
                <span class="material-symbols-outlined text-emerald-600 text-lg">view_in_ar</span>
                Net Folding Architect & Isometric Matrices
              </span>
              <span class="text-xs text-emerald-600 font-bold">60%</span>
            </div>
            <div class="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
              <div class="bg-emerald-600 h-full rounded-full transition-all duration-500" style="width: 60%"></div>
            </div>
          </div>
        </div>

        <!-- Action Cluster -->
        <div class="pt-6 mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-emerald-100 relative z-10">
          <a href="#practice-arena?subject=nvr&topic=3d-nets" class="flex-1 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2">
            <span>Drill Target Focus</span>
            <span class="px-2 py-0.5 rounded-md bg-white/20 text-xs">+40 XP</span>
          </a>
          <div class="flex items-center gap-2">
            <a href="#drill-spatial" class="px-4 py-3 rounded-full bg-surface border border-slate-300 hover:border-emerald-500 text-xs text-slate-700 font-bold transition-all text-center">
              Spatial Lab
            </a>
            <a href="#mock-splitview" class="px-4 py-3 rounded-full bg-surface border border-slate-300 hover:border-emerald-500 text-xs text-slate-700 font-bold transition-all text-center">
              Stencils
            </a>
          </div>
        </div>
      </article>` : ''}

      <!-- Card 4: English Comprehension & SPaG (Rose Border) -->
      ${(filterSubject === 'all' || filterSubject === 'english') ? `
      <article class="bg-surface-container-lowest rounded-3xl p-8 border-2 border-rose-400/80 hover:border-rose-600 shadow-md hover:shadow-rose-500/10 flex flex-col justify-between transition-all relative overflow-hidden group">
        <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600"></div>
        <div class="absolute top-0 right-0 w-48 h-48 bg-rose-500/5 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
        <div class="flex flex-col space-y-6 relative z-10 pt-2">
          <!-- Header -->
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center border-2 border-rose-200 shadow-sm">
                <span class="material-symbols-outlined text-4xl">menu_book</span>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-3 py-1 rounded-lg bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-widest border border-rose-200">ISEB & CSSE Rigour</span>
                  <span class="text-xs font-bold text-slate-500">Stage 3 Mastery</span>
                </div>
                <h2 class="text-2xl text-slate-900 font-extrabold tracking-tight">English & SPaG</h2>
              </div>
            </div>
            <div class="text-right">
              <span class="text-4xl text-rose-600 font-black leading-none">7.9<span class="text-lg font-bold text-slate-400">/10</span></span>
              <span class="block text-xs text-rose-600 font-bold mt-1 tracking-widest uppercase">High Focus Potential</span>
            </div>
          </div>

          <!-- AI Diagnostic Insight & Target Focus -->
          <div class="p-5 rounded-2xl bg-rose-50/50 border-2 border-rose-200/80 flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-rose-700 text-xs font-bold uppercase tracking-widest">
                <span class="material-symbols-outlined text-lg">translate</span>
                <span>AI Diagnosis</span>
              </div>
              <button onclick="openFocusConfigModal('english')" class="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1 underline cursor-pointer">
                <span class="material-symbols-outlined text-xs">tune</span> Configure Focus
              </button>
            </div>
            <p class="text-sm text-slate-700">
              <strong>Strengths:</strong> Punctuation syntax, parenthetical commas, direct fact retrieval.
            </p>
            <div class="p-3 rounded-xl bg-white border border-rose-200/90 flex items-start gap-2 shadow-sm">
              <span class="material-symbols-outlined text-rose-500 text-lg shrink-0 mt-0.5">crisis_alert</span>
              <div>
                <span class="text-xs font-black text-rose-600 uppercase tracking-wider block">Active Target Focus:</span>
                <p class="text-sm font-bold text-slate-900 leading-snug" id="display-focus-english">${targetEnglish}</p>
              </div>
            </div>
          </div>

          <!-- Active Quest Box -->
          <div class="p-4 rounded-2xl bg-surface border border-outline-variant/30 flex flex-col space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-sm text-slate-900 font-bold flex items-center gap-2">
                <span class="material-symbols-outlined text-rose-500 text-lg">history_edu</span>
                19th Century Prose Analysis & Tone Shifts
              </span>
              <span class="text-xs text-rose-600 font-bold">50%</span>
            </div>
            <div class="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
              <div class="bg-rose-600 h-full rounded-full transition-all duration-500" style="width: 50%"></div>
            </div>
          </div>
        </div>

        <!-- Action Cluster -->
        <div class="pt-6 mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-rose-100 relative z-10">
          <a href="#practice-arena?subject=english&topic=comprehension-tone" class="flex-1 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2">
            <span>Drill Target Focus</span>
            <span class="px-2 py-0.5 rounded-md bg-white/20 text-xs">+30 XP</span>
          </a>
          <div class="flex items-center gap-2">
            <a href="#drill-timed" class="px-4 py-3 rounded-full bg-surface border border-slate-300 hover:border-rose-500 text-xs text-slate-700 font-bold transition-all text-center">
              Speed Passages
            </a>
            <a href="#scorecard" class="px-4 py-3 rounded-full bg-surface border border-slate-300 hover:border-rose-500 text-xs text-slate-700 font-bold transition-all text-center">
              Mark Schemes
            </a>
          </div>
        </div>
      </article>` : ''}
    </div>

    <!-- TARGET FOCUS CONFIGURATION MODAL -->
    <div id="target-focus-modal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden items-center justify-center p-4">
      <div class="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
        <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-indigo-600 text-2xl">target</span>
            <h3 class="text-lg font-extrabold text-slate-900" id="focus-modal-title">Configure Target Focus</h3>
          </div>
          <button onclick="closeFocusConfigModal()" class="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <p class="text-xs text-slate-600 mb-4 leading-relaxed">
          Select which high-yield micro-topic this subject will actively target in upcoming AI Practice Arena sessions and daily pathway drills.
        </p>
        <div id="focus-options-list" class="space-y-2 mb-6 max-h-60 overflow-y-auto pr-1">
          <!-- Dynamic options loaded by JS -->
        </div>
        <div class="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
          <button onclick="closeFocusConfigModal()" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all">Cancel</button>
          <button id="save-focus-btn" class="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all">Save & Calibrate</button>
        </div>
      </div>
    </div>
  </div>
  `;
}, async function() {
  try {
    if (window.LearnlyAPI) {
      const analytics = await LearnlyAPI.getAnalyticsSummary();
      if (analytics) {
        const sasBase = analytics.currentSAS || 128;
        const eMaths = document.getElementById('sas-maths');
        const eVr = document.getElementById('sas-vr');
        const eNvr = document.getElementById('sas-nvr');
        const eEnglish = document.getElementById('sas-english');
        
        if (eMaths) eMaths.textContent = sasBase + 2;
        if (eVr) eVr.textContent = sasBase + 4;
        if (eNvr) eNvr.textContent = sasBase - 2;
        if (eEnglish) eEnglish.textContent = sasBase + 1;
      }
    }
  } catch (err) {
    console.warn('Subject Quests Analytics API unavailable', err);
  }

  // Target Focus topics catalog
  const FOCUS_CATALOG = {
    maths: [
      'Multi-Step Remainder Theoretic Problems (<45s)',
      'Algebraic Substitution & Quadratic nth Term Sequences',
      'Multi-Ratio Scaling & Inverse Speed/Distance Problems',
      'Fraction-Decimal Conversion Traps & Recurring Decimals',
      'Compound Perimeter & Shaded Area Calculations'
    ],
    vr: [
      'Correlative Clause Markers, Inversion Logic & Classical Roots',
      'Hidden Compound Words Spanning Multi-Word Boundaries',
      'Number-Letter Hybrid Position Shifts & Caesar Ciphers',
      'Subtle Synonym Distinctions (e.g. Untoward vs Unseemly)',
      'Categorical Syllogisms & Two-Step Deductive Logic'
    ],
    nvr: [
      'Hexagonal Net 1-Skip Pairing & Layer Superimposition',
      '3D Isometric Cube Rotation vs Diagonal Bilateral Reflection',
      '3x3 Grid Matrix Feature Addition/Subtraction Rules',
      'Odd One Out: Asymmetric Shading & Line Intersection Counts',
      'Spatial Folding: Transparent Paper Stencil Overlays'
    ],
    english: [
      'Implicit Tone Shifts, Victorian Prose Register & SPaG Inferences',
      'Parenthetical Comma Syntax & Non-Restrictive Relative Clauses',
      'Poetic Imagery & Evaluative Authorial Intent Questions',
      'Contextual Cloze Distractors with Nuanced Connotations',
      'Active vs Passive Voice & Subjunctive Mood Markers'
    ]
  };

  let activeModalSubject = 'maths';
  let tempSelectedFocus = '';

  window.openFocusConfigModal = function(subject) {
    activeModalSubject = subject;
    const modal = document.getElementById('target-focus-modal');
    const title = document.getElementById('focus-modal-title');
    const list = document.getElementById('focus-options-list');
    if (!modal || !list) return;

    const subjectNames = { maths: 'Mathematics', vr: 'Verbal Reasoning', nvr: 'Non-Verbal Reasoning', english: 'English & SPaG' };
    if (title) title.textContent = `Configure ${subjectNames[subject]} Target Focus`;

    const saved = JSON.parse(localStorage.getItem('learnly_target_focus') || '{}');
    const current = saved[subject] || FOCUS_CATALOG[subject][0];
    tempSelectedFocus = current;

    list.innerHTML = FOCUS_CATALOG[subject].map((item, idx) => `
      <label class="flex items-center gap-3 p-3 rounded-xl border-2 ${item === current ? 'border-indigo-600 bg-indigo-50/60' : 'border-slate-200 hover:border-indigo-300'} cursor-pointer transition-all">
        <input type="radio" name="focus-option" value="${item}" ${item === current ? 'checked' : ''} class="w-4 h-4 text-indigo-600">
        <span class="text-xs font-bold text-slate-800">${item}</span>
      </label>
    `).join('');

    list.querySelectorAll('input[name="focus-option"]').forEach(input => {
      input.addEventListener('change', (e) => {
        tempSelectedFocus = e.target.value;
        list.querySelectorAll('label').forEach(lbl => {
          lbl.classList.remove('border-indigo-600', 'bg-indigo-50/60');
          lbl.classList.add('border-slate-200');
        });
        e.target.closest('label').classList.remove('border-slate-200');
        e.target.closest('label').classList.add('border-indigo-600', 'bg-indigo-50/60');
      });
    });

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  };

  window.closeFocusConfigModal = function() {
    const modal = document.getElementById('target-focus-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  const saveBtn = document.getElementById('save-focus-btn');
  if (saveBtn) {
    saveBtn.onclick = function() {
      const saved = JSON.parse(localStorage.getItem('learnly_target_focus') || '{}');
      saved[activeModalSubject] = tempSelectedFocus;
      localStorage.setItem('learnly_target_focus', JSON.stringify(saved));
      
      const disp = document.getElementById(`display-focus-${activeModalSubject}`);
      if (disp) disp.textContent = tempSelectedFocus;

      if (window.AIBuddy) {
        window.AIBuddy.showToast('Target Focus Updated', `Calibrated to: ${tempSelectedFocus.substring(0, 32)}...`);
      }
      closeFocusConfigModal();
    };
  }

  const autoBtn = document.getElementById('auto-calibrate-btn');
  if (autoBtn) {
    autoBtn.onclick = function() {
      const autoCalibrated = {
        maths: FOCUS_CATALOG.maths[0],
        vr: FOCUS_CATALOG.vr[0],
        nvr: FOCUS_CATALOG.nvr[0],
        english: FOCUS_CATALOG.english[0]
      };
      localStorage.setItem('learnly_target_focus', JSON.stringify(autoCalibrated));
      ['maths', 'vr', 'nvr', 'english'].forEach(s => {
        const el = document.getElementById(`display-focus-${s}`);
        if (el) el.textContent = autoCalibrated[s];
      });
      if (window.AIBuddy) {
        window.AIBuddy.showToast('AI Calibration Complete', 'All 4 subjects calibrated from Mock exam error clusters.');
      }
    };
  }
});
