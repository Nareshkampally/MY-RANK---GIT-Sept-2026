// Learnly 11+ / MyRank 11+ — AI Adaptive Learning Hub & Subject Quests (All 4 Disciplines)
// Stitch Screen: projects/12843600554840635782/screens/454f23ef522c4d498003d5084cb26a0e

LearnlyRouter.register('subject-quests', function() {
  const params = LearnlyRouter.getParams();
  const filterSubject = (params.subject || 'all').toLowerCase();

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
            <span class="text-xs text-white font-bold">Target Standard: QE Boys, St. Olave's</span>
          </div>
        </div>

        <!-- Core Predictive SAS Matrix -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
          <!-- SAS Math -->
          <div class="p-space-lg rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col justify-between hover:elevation-2 transition-all">
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
          <div class="p-space-lg rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col justify-between hover:elevation-2 transition-all">
            <div class="flex items-start justify-between">
              <div>
                <span class="font-label-md text-label-md text-indigo-200 font-bold uppercase tracking-wider">Verbal Reasoning</span>
                <div class="flex items-baseline gap-space-xs mt-1">
                  <span class="font-headline-lg text-headline-lg text-white font-black" id="sas-vr">134</span>
                  <span class="font-label-md text-label-md text-emerald-300 font-bold">Top 0.8%</span>
                </div>
              </div>
              <div class="w-10 h-10 rounded-xl bg-indigo-500/30 flex items-center justify-center text-indigo-200">
                <span class="material-symbols-outlined text-xl">psychology</span>
              </div>
            </div>
            <div class="mt-space-md pt-space-xs">
              <span class="font-label-md text-label-md text-white/60 block mb-1 font-semibold uppercase">AI Diagnostic Niche</span>
              <p class="font-body-sm text-body-sm text-white font-medium leading-snug">Correlative Cloze & Inversion Logic Markers</p>
            </div>
          </div>

          <!-- SAS Non-Verbal -->
          <div class="p-space-lg rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col justify-between hover:elevation-2 transition-all">
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
          <div class="p-space-lg rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col justify-between hover:elevation-2 transition-all">
            <div class="flex items-start justify-between">
              <div>
                <span class="font-label-md text-label-md text-purple-300 font-bold uppercase tracking-wider">English & SPaG</span>
                <div class="flex items-baseline gap-space-xs mt-1">
                  <span class="font-headline-lg text-headline-lg text-white font-black" id="sas-english">129</span>
                  <span class="font-label-md text-label-md text-purple-300 font-bold">Top 2.5%</span>
                </div>
              </div>
              <div class="w-10 h-10 rounded-xl bg-purple-500/30 flex items-center justify-center text-purple-300">
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
            <div class="w-14 h-14 rounded-[2.5rem] bg-primary text-on-primary flex items-center justify-center shadow-md flex-shrink-0">
              <span class="material-symbols-outlined text-3xl">neurology</span>
            </div>
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="text-xs text-indigo-200 font-bold uppercase tracking-widest">Dynamic 30-Minute Pathway</span>
                <span class="px-2 py-0.5 rounded-md bg-secondary/10 text-purple-300 text-xs font-bold border border-secondary/20">High Yield</span>
              </div>
              <p class="text-xl text-white font-extrabold">
                Today's AI Focus: 3D Spatial + Archaic Register
              </p>
            </div>
          </div>
          <div class="flex items-center w-full lg:w-auto justify-end relative z-10">
            <a href="#drill-spatial" class="px-8 py-3 bg-primary text-on-primary rounded-full font-bold shadow-md hover:bg-primary/90 transition-all flex items-center gap-2 border border-primary/20">
              <span class="material-symbols-outlined text-xl">play_arrow</span>
              Begin Pathway (30m)
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Subject Filter Tabs -->
    <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-4">
      <a href="#subject-quests" class="px-6 py-2.5 rounded-full font-bold text-sm ${filterSubject === 'all' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:text-primary border border-outline-variant/30'} transition-all whitespace-nowrap flex items-center gap-2">
        <span class="material-symbols-outlined text-base">apps</span> All Quests
      </a>
      <a href="#subject-quests?subject=maths" class="px-6 py-2.5 rounded-full font-bold text-sm ${filterSubject === 'maths' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:text-primary border border-outline-variant/30'} transition-all whitespace-nowrap flex items-center gap-2">
        <span class="material-symbols-outlined text-base">calculate</span> Mathematics
      </a>
      <a href="#subject-quests?subject=vr" class="px-6 py-2.5 rounded-full font-bold text-sm ${filterSubject === 'vr' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:text-primary border border-outline-variant/30'} transition-all whitespace-nowrap flex items-center gap-2">
        <span class="material-symbols-outlined text-base">psychology</span> Verbal Reasoning
      </a>
      <a href="#subject-quests?subject=nvr" class="px-6 py-2.5 rounded-full font-bold text-sm ${filterSubject === 'nvr' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:text-primary border border-outline-variant/30'} transition-all whitespace-nowrap flex items-center gap-2">
        <span class="material-symbols-outlined text-base">view_in_ar</span> Non-Verbal Reasoning
      </a>
      <a href="#subject-quests?subject=english" class="px-6 py-2.5 rounded-full font-bold text-sm ${filterSubject === 'english' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:text-primary border border-outline-variant/30'} transition-all whitespace-nowrap flex items-center gap-2">
        <span class="material-symbols-outlined text-base">menu_book</span> English
      </a>
    </div>

    <!-- 4 Deep Subject Interactive Diagnostic Hub Modules -->
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
      <!-- Card 1: Mathematics -->
      ${(filterSubject === 'all' || filterSubject === 'maths') ? `
      <article class="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 flex flex-col justify-between hover:border-primary/50 transition-colors relative overflow-hidden group shadow-sm">
        <div class="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
        <div class="flex flex-col space-y-6 relative z-10">
          <!-- Header -->
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-[2.5rem] bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                <span class="material-symbols-outlined text-4xl">functions</span>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">GL & CEM Spec</span>
                  <span class="text-xs font-bold text-on-surface-variant">Stage 4 Mastery</span>
                </div>
                <h2 class="text-2xl text-on-surface font-extrabold tracking-tight">Mathematics</h2>
              </div>
            </div>
            <div class="text-right">
              <span class="text-4xl text-primary font-black leading-none">8.8<span class="text-lg font-bold text-on-surface-variant">/10</span></span>
              <span class="block text-xs text-tertiary font-bold mt-1 tracking-widest uppercase">Exceeding Benchmark</span>
            </div>
          </div>

          <!-- AI Diagnostic Insight -->
          <div class="p-4 rounded-[2.5rem] bg-surface border border-outline-variant/20 flex flex-col gap-2">
            <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
              <span class="material-symbols-outlined text-lg">auto_graph</span>
              <span>AI Diagnosis</span>
            </div>
            <p class="text-sm text-on-surface">
              <strong>Strengths:</strong> Multi-ratio scaling, algebraic substitution, kinematics.
            </p>
            <p class="text-sm text-error font-bold">
              <strong>Target Focus:</strong> Multi-Step Remainder Theoretic Problems (&lt;45s).
            </p>
          </div>

          <!-- Active Quest Box -->
          <div class="p-4 rounded-[2.5rem] bg-surface border border-outline-variant/20 flex flex-col space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-sm text-on-surface font-bold flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary text-lg">military_tech</span>
                The Prime Factorisation Quest
              </span>
              <span class="text-xs text-primary font-bold">83%</span>
            </div>
            <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
              <div class="bg-primary h-full rounded-full transition-all duration-500" style="width: 83%"></div>
            </div>
          </div>
        </div>

        <!-- Action Cluster -->
        <div class="pt-6 mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-outline-variant/20 relative z-10">
          <a href="#practice-arena" class="flex-1 py-3 rounded-full bg-primary text-on-primary text-sm font-bold shadow-md hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
            <span>Launch AI Session</span>
            <span class="px-2 py-0.5 rounded-md bg-white/20 text-xs">+35 XP</span>
          </a>
          <div class="flex items-center gap-2">
            <a href="#scorecard" class="px-4 py-3 rounded-full bg-surface border border-outline-variant/30 hover:border-primary/50 text-xs text-on-surface font-bold transition-all text-center">
              Topic Map
            </a>
            <a href="#mock-scratchpad" class="px-4 py-3 rounded-full bg-surface border border-outline-variant/30 hover:border-primary/50 text-xs text-on-surface font-bold transition-all text-center">
              Formulas
            </a>
          </div>
        </div>
      </article>` : ''}

      <!-- Card 2: Verbal Reasoning -->
      ${(filterSubject === 'all' || filterSubject === 'vr') ? `
      <article class="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 flex flex-col justify-between hover:border-primary/50 transition-colors relative overflow-hidden group shadow-sm">
        <div class="absolute top-0 right-0 w-48 h-48 bg-primary-container/5 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
        <div class="flex flex-col space-y-6 relative z-10">
          <!-- Header -->
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-[2.5rem] bg-primary-container/10 text-primary-container flex items-center justify-center border border-primary-container/20">
                <span class="material-symbols-outlined text-4xl">psychology</span>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">Consortium Standard</span>
                  <span class="text-xs font-bold text-on-surface-variant">Stage 4 Mastery</span>
                </div>
                <h2 class="text-2xl text-on-surface font-extrabold tracking-tight">Verbal Reasoning</h2>
              </div>
            </div>
            <div class="text-right">
              <span class="text-4xl text-primary font-black leading-none">8.6<span class="text-lg font-bold text-on-surface-variant">/10</span></span>
              <span class="block text-xs text-tertiary font-bold mt-1 tracking-widest uppercase">Selective Grammar Tier</span>
            </div>
          </div>

          <!-- AI Diagnostic Insight -->
          <div class="p-4 rounded-[2.5rem] bg-surface border border-outline-variant/20 flex flex-col gap-2">
            <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
              <span class="material-symbols-outlined text-lg">psychology_alt</span>
              <span>AI Diagnosis</span>
            </div>
            <p class="text-sm text-on-surface">
              <strong>Strengths:</strong> Compound words, shuffled sentences, word ladders.
            </p>
            <p class="text-sm text-secondary font-bold">
              <strong>Target Focus:</strong> Correlative Clause Markers, Inversion Logic & Classical Latin Morphemes.
            </p>
          </div>

          <!-- Active Quest Box -->
          <div class="p-4 rounded-[2.5rem] bg-surface border border-outline-variant/20 flex flex-col space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-sm text-on-surface font-bold flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-lg">auto_awesome</span>
                Archaic Etymology
              </span>
              <span class="text-xs text-primary font-bold">80%</span>
            </div>
            <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
              <div class="bg-primary h-full rounded-full transition-all duration-500" style="width: 80%"></div>
            </div>
          </div>
        </div>

        <!-- Action Cluster -->
        <div class="pt-6 mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-outline-variant/20 relative z-10">
          <a href="#drill-cloze" class="flex-1 py-3 rounded-full bg-primary text-on-primary text-sm font-bold shadow-md hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
            <span>Launch AI Session</span>
            <span class="px-2 py-0.5 rounded-md bg-white/20 text-xs">+35 XP</span>
          </a>
          <div class="flex items-center gap-2">
            <a href="#mistake-vault-lexical" class="px-4 py-3 rounded-full bg-surface border border-outline-variant/30 hover:border-primary/50 text-xs text-on-surface font-bold transition-all text-center">
              Vocab Builder
            </a>
            <a href="#mistake-mastery" class="px-4 py-3 rounded-full bg-surface border border-outline-variant/30 hover:border-primary/50 text-xs text-on-surface font-bold transition-all text-center">
              Mistake Vault
            </a>
          </div>
        </div>
      </article>` : ''}

      <!-- Card 3: Non-Verbal & Spatial Reasoning -->
      ${(filterSubject === 'all' || filterSubject === 'nvr') ? `
      <article class="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 flex flex-col justify-between hover:border-primary/50 transition-colors relative overflow-hidden group shadow-sm">
        <div class="absolute top-0 right-0 w-48 h-48 bg-tertiary/5 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
        <div class="flex flex-col space-y-6 relative z-10">
          <!-- Header -->
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-[2.5rem] bg-tertiary/10 text-tertiary flex items-center justify-center border border-tertiary/20">
                <span class="material-symbols-outlined text-4xl">view_in_ar</span>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-3 py-1 rounded-lg bg-tertiary/10 text-tertiary text-xs font-bold uppercase tracking-widest border border-tertiary/20">Spatial 3D Engine</span>
                  <span class="text-xs font-bold text-on-surface-variant">Stage 3 Mastery</span>
                </div>
                <h2 class="text-2xl text-on-surface font-extrabold tracking-tight">Non-Verbal Reasoning</h2>
              </div>
            </div>
            <div class="text-right">
              <span class="text-4xl text-tertiary font-black leading-none">8.2<span class="text-lg font-bold text-on-surface-variant">/10</span></span>
              <span class="block text-xs text-tertiary font-bold mt-1 tracking-widest uppercase">Top Decile Standing</span>
            </div>
          </div>

          <!-- AI Diagnostic Insight -->
          <div class="p-4 rounded-[2.5rem] bg-surface border border-outline-variant/20 flex flex-col gap-2">
            <div class="flex items-center gap-2 text-tertiary text-xs font-bold uppercase tracking-widest">
              <span class="material-symbols-outlined text-lg">architecture</span>
              <span>AI Diagnosis</span>
            </div>
            <p class="text-sm text-on-surface">
              <strong>Strengths:</strong> Sequential analogies, bilateral reflections, perimeter rules.
            </p>
            <p class="text-sm text-primary font-bold">
              <strong>Target Focus:</strong> Hexagonal Net 1-Skip Pairing & Multi-Plane Layer Superimposition.
            </p>
          </div>

          <!-- 3D Unfolded Cube Net Diagnostic Preview & Quest -->
          <div class="flex items-center justify-between p-4 rounded-[2.5rem] bg-surface border border-outline-variant/20 gap-4">
            <div class="flex flex-col space-y-2 w-full">
              <span class="text-sm text-on-surface font-bold flex items-center gap-2">
                <span class="material-symbols-outlined text-tertiary text-lg">view_in_ar</span>
                Net Folding Architect
              </span>
              <div class="flex items-center justify-between">
                 <span class="text-xs font-bold text-on-surface-variant">Stage 6 of 10</span>
                 <span class="text-xs text-tertiary font-bold">60%</span>
              </div>
              <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden mt-1">
                <div class="bg-tertiary h-full rounded-full transition-all duration-500" style="width: 60%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Cluster -->
        <div class="pt-6 mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-outline-variant/20 relative z-10">
          <a href="#drill-spatial" class="flex-1 py-3 rounded-full bg-tertiary text-on-primary text-sm font-bold shadow-md hover:bg-tertiary/90 transition-all flex items-center justify-center gap-2">
            <span>Launch Spatial Lab</span>
            <span class="px-2 py-0.5 rounded-md bg-white/20 text-xs">+40 XP</span>
          </a>
          <div class="flex items-center gap-2">
            <a href="#mistake-vault-3d" class="px-4 py-3 rounded-full bg-surface border border-outline-variant/30 hover:border-primary/50 text-xs text-on-surface font-bold transition-all text-center">
              3D Sandbox
            </a>
            <a href="#mock-splitview" class="px-4 py-3 rounded-full bg-surface border border-outline-variant/30 hover:border-primary/50 text-xs text-on-surface font-bold transition-all text-center">
              Stencils
            </a>
          </div>
        </div>
      </article>` : ''}

      <!-- Card 4: English Comprehension & SPaG -->
      ${(filterSubject === 'all' || filterSubject === 'english') ? `
      <article class="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 flex flex-col justify-between hover:border-primary/50 transition-colors relative overflow-hidden group shadow-sm">
        <div class="absolute top-0 right-0 w-48 h-48 bg-secondary/5 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
        <div class="flex flex-col space-y-6 relative z-10">
          <!-- Header -->
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-[2.5rem] bg-secondary/15 text-secondary flex items-center justify-center border border-secondary/20">
                <span class="material-symbols-outlined text-4xl">menu_book</span>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-3 py-1 rounded-lg bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest border border-secondary/30">ISEB & CSSE Rigour</span>
                  <span class="text-xs font-bold text-on-surface-variant">Stage 3 Mastery</span>
                </div>
                <h2 class="text-2xl text-on-surface font-extrabold tracking-tight">English & SPaG</h2>
              </div>
            </div>
            <div class="text-right">
              <span class="text-4xl text-secondary font-black leading-none">7.9<span class="text-lg font-bold text-on-surface-variant">/10</span></span>
              <span class="block text-xs text-secondary font-bold mt-1 tracking-widest uppercase">High Focus Potential</span>
            </div>
          </div>

          <!-- AI Diagnostic Insight -->
          <div class="p-4 rounded-[2.5rem] bg-surface border border-outline-variant/20 flex flex-col gap-2">
            <div class="flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-widest">
              <span class="material-symbols-outlined text-lg">translate</span>
              <span>AI Diagnosis</span>
            </div>
            <p class="text-sm text-on-surface">
              <strong>Strengths:</strong> Punctuation syntax, parenthetical commas, direct fact retrieval.
            </p>
            <p class="text-sm text-error font-bold">
              <strong>Target Focus:</strong> Implicit Tone Shifts, Victorian Prose Register & Poetic Devices.
            </p>
          </div>

          <!-- Active Quest Box -->
          <div class="p-4 rounded-[2.5rem] bg-surface border border-outline-variant/20 flex flex-col space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-sm text-on-surface font-bold flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary text-lg">history_edu</span>
                19th Century Prose Analysis
              </span>
              <span class="text-xs text-secondary font-bold">50%</span>
            </div>
            <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
              <div class="bg-secondary h-full rounded-full transition-all duration-500" style="width: 50%"></div>
            </div>
          </div>
        </div>

        <!-- Action Cluster -->
        <div class="pt-6 mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-outline-variant/20 relative z-10">
          <a href="#drill-timed" class="flex-1 py-3 rounded-full bg-secondary text-on-primary text-sm font-bold shadow-md hover:bg-secondary/90 transition-all flex items-center justify-center gap-2">
            <span>Launch AI Session</span>
            <span class="px-2 py-0.5 rounded-md bg-white/20 text-xs">+30 XP</span>
          </a>
          <div class="flex items-center gap-2">
            <a href="#practice-arena" class="px-4 py-3 rounded-full bg-surface border border-outline-variant/30 hover:border-primary/50 text-xs text-on-surface font-bold transition-all text-center">
              Passages
            </a>
            <a href="#scorecard" class="px-4 py-3 rounded-full bg-surface border border-outline-variant/30 hover:border-primary/50 text-xs text-on-surface font-bold transition-all text-center">
              Mark Schemes
            </a>
          </div>
        </div>
      </article>` : ''}
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
});
