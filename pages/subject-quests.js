// Learnly 11+ / MyRank 11+ — AI Adaptive Learning Hub & Subject Quests (All 4 Disciplines)
// Stitch Screen: projects/12843600554840635782/screens/454f23ef522c4d498003d5084cb26a0e

LearnlyRouter.register('subject-quests', function() {
  const params = LearnlyRouter.getParams();
  const filterSubject = params.subject || 'all';

  return `
  <div class="flex flex-col w-full space-y-space-xl">
    <!-- AI Tutor Intelligence Hub: Top Diagnostic Panel -->
    <section class="relative rounded-2xl bg-surface-container-lowest p-space-xl elevation-1 overflow-hidden">
      <div class="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
      <div class="absolute right-1/3 -bottom-28 w-80 h-80 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
      <div class="relative z-10 flex flex-col space-y-space-lg">
        <!-- Live Engine Calibration Ribbon -->
        <div class="flex flex-wrap items-center justify-between gap-space-md pb-space-md border-b border-outline-variant/30">
          <div class="flex items-center gap-space-sm">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed-dim opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-[#10b981]"></span>
            </span>
            <span class="font-label-lg text-label-lg text-primary font-bold tracking-wide uppercase">Adaptive AI Engine Active</span>
            <span class="text-outline-variant">•</span>
            <span class="font-label-md text-label-md text-on-surface-variant">11+ Consortium Calibrated (GL Assessment, CEM, ISEB, CSSE)</span>
          </div>
          <div class="flex items-center gap-space-sm bg-surface-container-low px-space-md py-1.5 rounded-full">
            <span class="material-symbols-outlined text-primary text-base">school</span>
            <span class="font-label-md text-label-md text-on-surface font-semibold">Target Standard: QE Boys, Henrietta Barnett, St. Olave's, Wilson's</span>
          </div>
        </div>

        <!-- Core Predictive SAS Matrix -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
          <!-- SAS Math -->
          <div class="p-space-lg rounded-xl bg-surface-container-low/80 flex flex-col justify-between hover:elevation-2 transition-all">
            <div class="flex items-start justify-between">
              <div>
                <span class="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Mathematics</span>
                <div class="flex items-baseline gap-space-xs mt-1">
                  <span class="font-headline-lg text-headline-lg text-on-surface font-black" id="sas-maths">135</span>
                  <span class="font-label-md text-label-md text-tertiary font-bold">Top 0.6%</span>
                </div>
              </div>
              <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span class="material-symbols-outlined text-xl">calculate</span>
              </div>
            </div>
            <div class="mt-space-md pt-space-xs">
              <span class="font-label-md text-label-md text-outline block mb-1 font-semibold uppercase">AI Diagnostic Niche</span>
              <p class="font-body-sm text-body-sm text-on-surface font-medium leading-snug">Advanced Number Theory & Remainder Algebra</p>
            </div>
          </div>

          <!-- SAS Verbal -->
          <div class="p-space-lg rounded-xl bg-surface-container-low/80 flex flex-col justify-between hover:elevation-2 transition-all">
            <div class="flex items-start justify-between">
              <div>
                <span class="font-label-md text-label-md text-primary-container font-bold uppercase tracking-wider">Verbal Reasoning</span>
                <div class="flex items-baseline gap-space-xs mt-1">
                  <span class="font-headline-lg text-headline-lg text-on-surface font-black" id="sas-vr">134</span>
                  <span class="font-label-md text-label-md text-tertiary font-bold">Top 0.8%</span>
                </div>
              </div>
              <div class="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container">
                <span class="material-symbols-outlined text-xl">psychology</span>
              </div>
            </div>
            <div class="mt-space-md pt-space-xs">
              <span class="font-label-md text-label-md text-outline block mb-1 font-semibold uppercase">AI Diagnostic Niche</span>
              <p class="font-body-sm text-body-sm text-on-surface font-medium leading-snug">Correlative Cloze & Inversion Logic Markers</p>
            </div>
          </div>

          <!-- SAS Non-Verbal -->
          <div class="p-space-lg rounded-xl bg-surface-container-low/80 flex flex-col justify-between hover:elevation-2 transition-all">
            <div class="flex items-start justify-between">
              <div>
                <span class="font-label-md text-label-md text-tertiary font-bold uppercase tracking-wider">Non-Verbal Spatial</span>
                <div class="flex items-baseline gap-space-xs mt-1">
                  <span class="font-headline-lg text-headline-lg text-on-surface font-black" id="sas-nvr">131</span>
                  <span class="font-label-md text-label-md text-tertiary font-bold">Top 1.8%</span>
                </div>
              </div>
              <div class="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                <span class="material-symbols-outlined text-xl">view_in_ar</span>
              </div>
            </div>
            <div class="mt-space-md pt-space-xs">
              <span class="font-label-md text-label-md text-outline block mb-1 font-semibold uppercase">AI Diagnostic Niche</span>
              <p class="font-body-sm text-body-sm text-on-surface font-medium leading-snug">3D Net Folding & Isometric Matrix Rotations</p>
            </div>
          </div>

          <!-- SAS English -->
          <div class="p-space-lg rounded-xl bg-surface-container-low/80 flex flex-col justify-between hover:elevation-2 transition-all">
            <div class="flex items-start justify-between">
              <div>
                <span class="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">English & SPaG</span>
                <div class="flex items-baseline gap-space-xs mt-1">
                  <span class="font-headline-lg text-headline-lg text-on-surface font-black" id="sas-english">129</span>
                  <span class="font-label-md text-label-md text-secondary font-bold">Top 2.5%</span>
                </div>
              </div>
              <div class="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary">
                <span class="material-symbols-outlined text-xl">menu_book</span>
              </div>
            </div>
            <div class="mt-space-md pt-space-xs">
              <span class="font-label-md text-label-md text-outline block mb-1 font-semibold uppercase">AI Diagnostic Niche</span>
              <p class="font-body-sm text-body-sm text-on-surface font-medium leading-snug">Archaic Vocab & Evaluative Inferences</p>
            </div>
          </div>
        </div>

        <!-- AI Recommended Daily Pathway Pill Banner -->
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md p-space-lg rounded-2xl bg-gradient-to-r from-primary-fixed/60 via-surface-container to-secondary-fixed/40 border border-primary/20 shadow-sm">
          <div class="flex items-center gap-space-md">
            <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm flex-shrink-0">
              <span class="material-symbols-outlined text-2xl">neurology</span>
            </div>
            <div>
              <div class="flex items-center gap-space-xs">
                <span class="font-label-md text-label-md text-primary font-bold uppercase">Dynamic 30-Minute Pathway</span>
                <span class="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold">High Yield</span>
              </div>
              <p class="font-headline-sm text-headline-sm text-on-surface mt-0.5 font-bold">
                Today's AI Hyper-Focus: 3D Spatial Hexagonal Rotations + Archaic Register Contrast
              </p>
            </div>
          </div>
          <div class="flex items-center gap-space-sm w-full lg:w-auto justify-end">
            <a href="#drill-spatial" class="px-space-lg py-2.5 bg-primary text-on-primary rounded-full font-label-lg text-label-lg font-bold shadow-md hover:opacity-95 transition-all flex items-center gap-space-xs">
              <span class="material-symbols-outlined text-base">play_arrow</span>
              <span>Begin Pathway (30m)</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Subject Filter Tabs -->
    <div class="flex items-center gap-2 overflow-x-auto pb-1">
      <a href="#subject-quests" class="px-space-md py-2 rounded-full font-label-lg text-label-lg ${filterSubject === 'all' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container'} transition-all whitespace-nowrap">
        All 4 Subjects (16 Quests)
      </a>
      <a href="#subject-quests?subject=maths" class="px-space-md py-2 rounded-full font-label-lg text-label-lg ${filterSubject === 'maths' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container'} transition-all whitespace-nowrap flex items-center gap-1.5">
        <span class="material-symbols-outlined text-sm">calculate</span> Mathematics
      </a>
      <a href="#subject-quests?subject=vr" class="px-space-md py-2 rounded-full font-label-lg text-label-lg ${filterSubject === 'vr' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container'} transition-all whitespace-nowrap flex items-center gap-1.5">
        <span class="material-symbols-outlined text-sm">psychology</span> Verbal Reasoning
      </a>
      <a href="#subject-quests?subject=nvr" class="px-space-md py-2 rounded-full font-label-lg text-label-lg ${filterSubject === 'nvr' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container'} transition-all whitespace-nowrap flex items-center gap-1.5">
        <span class="material-symbols-outlined text-sm">view_in_ar</span> Non-Verbal Spatial
      </a>
      <a href="#subject-quests?subject=english" class="px-space-md py-2 rounded-full font-label-lg text-label-lg ${filterSubject === 'english' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container'} transition-all whitespace-nowrap flex items-center gap-1.5">
        <span class="material-symbols-outlined text-sm">menu_book</span> English Comprehension & SPaG
      </a>
    </div>

    <!-- 4 Deep Subject Interactive Diagnostic Hub Modules (Stitch Screen 454f23ef522c4d498003d5084cb26a0e) -->
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-space-xl">
      <!-- Card 1: Mathematics -->
      ${(filterSubject === 'all' || filterSubject === 'maths') ? `
      <article class="bg-surface-container-lowest rounded-2xl p-space-xl elevation-1 flex flex-col justify-between hover:elevation-2 transition-shadow relative overflow-hidden group border border-outline-variant/30">
        <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
        <div class="flex flex-col space-y-space-lg">
          <!-- Header -->
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-space-md">
              <div class="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl">functions</span>
              </div>
              <div>
                <div class="flex items-center gap-space-xs">
                  <span class="px-2.5 py-0.5 rounded-full bg-primary/15 text-primary font-label-md text-label-md font-bold">GL & CEM Spec</span>
                  <span class="font-label-md text-label-md text-outline font-semibold">Stage 4 Mastery</span>
                </div>
                <h2 class="font-headline-md text-headline-md text-on-surface font-bold mt-1">Mathematics & Numerical Logic</h2>
              </div>
            </div>
            <div class="text-right">
              <span class="font-headline-md text-headline-md text-primary font-black leading-none">8.8<span class="text-body-sm font-normal text-outline">/10</span></span>
              <span class="block font-label-md text-label-md text-tertiary font-bold mt-0.5">Exceeding Benchmark</span>
            </div>
          </div>

          <!-- AI Diagnostic Insight -->
          <div class="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
            <div class="flex items-center gap-1.5 text-primary font-label-md text-label-md font-bold uppercase">
              <span class="material-symbols-outlined text-base">auto_graph</span>
              <span>AI Real-time Diagnosis</span>
            </div>
            <p class="font-body-md text-body-md text-on-surface">
              <strong>Strengths:</strong> Multi-ratio scaling, algebraic substitution, kinematics.
            </p>
            <p class="font-body-sm text-body-sm text-error font-medium">
              <strong>AI Target Focus:</strong> Multi-Step Remainder Theoretic Problems under timed exam conditions (&lt;45s).
            </p>
          </div>

          <!-- Active Quest Box -->
          <div class="p-space-md rounded-xl bg-surface-container-low/70 border border-outline-variant/30 flex flex-col space-y-space-sm">
            <div class="flex items-center justify-between">
              <span class="font-label-lg text-label-lg text-on-surface font-bold flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-secondary text-base">military_tech</span>
                The Prime Factorisation & Cryptic Arithmetic Quest
              </span>
              <span class="font-label-md text-label-md text-primary font-bold">10 / 12 Complete (83%)</span>
            </div>
            <div class="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
              <div class="bg-primary h-full rounded-full transition-all duration-500" style="width: 83%"></div>
            </div>
          </div>

          <!-- Daily AI Challenge Micro-Card -->
          <div class="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between border border-outline-variant/20">
            <div class="flex items-center gap-space-md">
              <div class="w-10 h-10 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary">
                <span class="material-symbols-outlined text-xl">timer</span>
              </div>
              <div>
                <span class="font-label-md text-label-md text-secondary font-bold uppercase">Daily Micro-Sprint</span>
                <p class="font-body-md text-body-md text-on-surface font-semibold">3-Step Kinematics with Variable Headwind</p>
              </div>
            </div>
            <span class="px-space-md py-1 rounded-full bg-surface-container-high font-label-md text-label-md text-on-surface font-bold">40s Target</span>
          </div>
        </div>

        <!-- Action Cluster -->
        <div class="pt-space-lg mt-space-md flex flex-wrap items-center justify-between gap-space-sm border-t border-outline-variant/20">
          <a href="#practice-arena" class="px-space-lg py-2.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-sm hover:opacity-95 transition-all flex items-center gap-space-xs">
            <span>Launch AI Adaptive Session</span>
            <span class="px-1.5 py-0.5 rounded-full bg-on-primary/20 text-on-primary font-label-md text-label-md">+35 XP</span>
          </a>
          <div class="flex items-center gap-space-xs">
            <a href="#scorecard" class="px-space-md py-2 rounded-full bg-surface-container-low hover:bg-surface-container font-label-md text-label-md text-on-surface font-semibold transition-all">
              Topic Mastery Map
            </a>
            <a href="#mock-scratchpad" class="px-space-md py-2 rounded-full bg-surface-container-low hover:bg-surface-container font-label-md text-label-md text-on-surface font-semibold transition-all">
              Formula Vault
            </a>
          </div>
        </div>
      </article>` : ''}

      <!-- Card 2: Verbal Reasoning -->
      ${(filterSubject === 'all' || filterSubject === 'vr') ? `
      <article class="bg-surface-container-lowest rounded-2xl p-space-xl elevation-1 flex flex-col justify-between hover:elevation-2 transition-shadow relative overflow-hidden group border border-outline-variant/30">
        <div class="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
        <div class="flex flex-col space-y-space-lg">
          <!-- Header -->
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-space-md">
              <div class="w-14 h-14 rounded-2xl bg-primary-container/10 text-primary-container flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <div>
                <div class="flex items-center gap-space-xs">
                  <span class="px-2.5 py-0.5 rounded-full bg-primary/15 text-primary font-label-md text-label-md font-bold">Consortium Standard</span>
                  <span class="font-label-md text-label-md text-outline font-semibold">Stage 4 Mastery</span>
                </div>
                <h2 class="font-headline-md text-headline-md text-on-surface font-bold mt-1">Verbal Reasoning & Semantics</h2>
              </div>
            </div>
            <div class="text-right">
              <span class="font-headline-md text-headline-md text-primary font-black leading-none">8.6<span class="text-body-sm font-normal text-outline">/10</span></span>
              <span class="block font-label-md text-label-md text-tertiary font-bold mt-0.5">Selective Grammar Tier</span>
            </div>
          </div>

          <!-- AI Diagnostic Insight -->
          <div class="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
            <div class="flex items-center gap-1.5 text-primary font-label-md text-label-md font-bold uppercase">
              <span class="material-symbols-outlined text-base">psychology_alt</span>
              <span>AI Real-time Diagnosis</span>
            </div>
            <p class="font-body-md text-body-md text-on-surface">
              <strong>Strengths:</strong> Compound words, shuffled sentences, word ladders.
            </p>
            <p class="font-body-sm text-body-sm text-secondary font-medium">
              <strong>AI Target Focus:</strong> Correlative Clause Markers, Inversion Logic & Classical Latin Morphemes.
            </p>
          </div>

          <!-- Active Quest Box -->
          <div class="p-space-md rounded-xl bg-surface-container-low/70 border border-outline-variant/30 flex flex-col space-y-space-sm">
            <div class="flex items-center justify-between">
              <span class="font-label-lg text-label-lg text-on-surface font-bold flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-primary text-base">auto_awesome</span>
                Archaic Etymology & Contextual Cloze Decryption
              </span>
              <span class="font-label-md text-label-md text-primary font-bold">8 / 10 Complete (80%)</span>
            </div>
            <div class="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
              <div class="bg-primary h-full rounded-full transition-all duration-500" style="width: 80%"></div>
            </div>
          </div>

          <!-- Daily AI Challenge Micro-Card -->
          <div class="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between border border-outline-variant/20">
            <div class="flex items-center gap-space-md">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span class="material-symbols-outlined text-xl">bolt</span>
              </div>
              <div>
                <span class="font-label-md text-label-md text-primary font-bold uppercase">Daily Trap Buster</span>
                <p class="font-body-md text-body-md text-on-surface font-semibold">Qualifier & Double Negation (Untoward vs Unseemly)</p>
              </div>
            </div>
            <span class="px-space-md py-1 rounded-full bg-surface-container-high font-label-md text-label-md text-on-surface font-bold">1 Mark / 35s</span>
          </div>
        </div>

        <!-- Action Cluster -->
        <div class="pt-space-lg mt-space-md flex flex-wrap items-center justify-between gap-space-sm border-t border-outline-variant/20">
          <a href="#drill-cloze" class="px-space-lg py-2.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-sm hover:opacity-95 transition-all flex items-center gap-space-xs">
            <span>Launch AI Adaptive Session</span>
            <span class="px-1.5 py-0.5 rounded-full bg-on-primary/20 text-on-primary font-label-md text-label-md">+35 XP</span>
          </a>
          <div class="flex items-center gap-space-xs">
            <a href="#mistake-vault-lexical" class="px-space-md py-2 rounded-full bg-surface-container-low hover:bg-surface-container font-label-md text-label-md text-on-surface font-semibold transition-all">
              Vocabulary Builder
            </a>
            <a href="#mistake-mastery" class="px-space-md py-2 rounded-full bg-surface-container-low hover:bg-surface-container font-label-md text-label-md text-on-surface font-semibold transition-all">
              Mistake Vault
            </a>
          </div>
        </div>
      </article>` : ''}

      <!-- Card 3: Non-Verbal & Spatial Reasoning -->
      ${(filterSubject === 'all' || filterSubject === 'nvr') ? `
      <article class="bg-surface-container-lowest rounded-2xl p-space-xl elevation-1 flex flex-col justify-between hover:elevation-2 transition-shadow relative overflow-hidden group border border-outline-variant/30">
        <div class="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
        <div class="flex flex-col space-y-space-lg">
          <!-- Header -->
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-space-md">
              <div class="w-14 h-14 rounded-2xl bg-tertiary/10 text-tertiary flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl">view_in_ar</span>
              </div>
              <div>
                <div class="flex items-center gap-space-xs">
                  <span class="px-2.5 py-0.5 rounded-full bg-tertiary/15 text-tertiary font-label-md text-label-md font-bold">Spatial 3D Engine</span>
                  <span class="font-label-md text-label-md text-outline font-semibold">Stage 3 Mastery</span>
                </div>
                <h2 class="font-headline-md text-headline-md text-on-surface font-bold mt-1">Non-Verbal & Spatial Reasoning</h2>
              </div>
            </div>
            <div class="text-right">
              <span class="font-headline-md text-headline-md text-tertiary font-black leading-none">8.2<span class="text-body-sm font-normal text-outline">/10</span></span>
              <span class="block font-label-md text-label-md text-tertiary font-bold mt-0.5">Top Decile Standing</span>
            </div>
          </div>

          <!-- AI Diagnostic Insight -->
          <div class="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
            <div class="flex items-center gap-1.5 text-tertiary font-label-md text-label-md font-bold uppercase">
              <span class="material-symbols-outlined text-base">architecture</span>
              <span>AI Real-time Diagnosis</span>
            </div>
            <p class="font-body-md text-body-md text-on-surface">
              <strong>Strengths:</strong> Sequential analogies, bilateral reflections, perimeter rules.
            </p>
            <p class="font-body-sm text-body-sm text-primary font-medium">
              <strong>AI Target Focus:</strong> Hexagonal Net 1-Skip Pairing & Multi-Plane Layer Superimposition.
            </p>
          </div>

          <!-- 3D Unfolded Cube Net Diagnostic Preview & Quest -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-space-sm p-space-md rounded-xl bg-surface-container-low/70 border border-outline-variant/30 items-center">
            <div class="sm:col-span-2 flex flex-col space-y-space-xs">
              <span class="font-label-lg text-label-lg text-on-surface font-bold flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-tertiary text-base">view_in_ar</span>
                3D Spatial Architect: Net Folding
              </span>
              <p class="font-body-sm text-body-sm text-outline">Stage 6 of 10 Mastered (60%)</p>
              <div class="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden mt-1">
                <div class="bg-tertiary h-full rounded-full transition-all duration-500" style="width: 60%"></div>
              </div>
            </div>
            <!-- 3D Vector Net Preview Thumbnail from Stitch -->
            <div class="h-20 bg-surface-container-lowest rounded-xl flex items-center justify-center p-2 shadow-inner border border-outline-variant/20">
              <svg class="w-24 h-16 text-tertiary" fill="none" viewbox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
                <rect class="fill-surface-container stroke-tertiary" height="24" rx="2" stroke-width="1.5" width="24" x="10" y="28"></rect>
                <rect class="fill-tertiary/20 stroke-tertiary" height="24" rx="2" stroke-width="1.5" width="24" x="34" y="28"></rect>
                <rect class="fill-surface-container stroke-tertiary" height="24" rx="2" stroke-width="1.5" width="24" x="58" y="28"></rect>
                <rect class="fill-surface-container stroke-tertiary" height="24" rx="2" stroke-width="1.5" width="24" x="82" y="28"></rect>
                <rect class="fill-surface-container stroke-tertiary" height="24" rx="2" stroke-width="1.5" width="24" x="34" y="4"></rect>
                <rect class="fill-surface-container stroke-tertiary" height="24" rx="2" stroke-width="1.5" width="24" x="34" y="52"></rect>
                <circle class="fill-tertiary" cx="46" cy="40" r="4"></circle>
                <line stroke="currentColor" stroke-width="1.5" x1="16" x2="28" y1="34" y2="46"></line>
              </svg>
            </div>
          </div>

          <!-- Daily AI Challenge Micro-Card -->
          <div class="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between border border-outline-variant/20">
            <div class="flex items-center gap-space-md">
              <div class="w-10 h-10 rounded-full bg-tertiary/15 flex items-center justify-center text-tertiary">
                <span class="material-symbols-outlined text-xl">grid_4x4</span>
              </div>
              <div>
                <span class="font-label-md text-label-md text-tertiary font-bold uppercase">Daily Spatial Challenge</span>
                <p class="font-body-md text-body-md text-on-surface font-semibold">Compound Spatial Matrices & Dot Code Logic</p>
              </div>
            </div>
            <span class="px-space-md py-1 rounded-full bg-surface-container-high font-label-md text-label-md text-on-surface font-bold">1 Mark / 30s</span>
          </div>
        </div>

        <!-- Action Cluster -->
        <div class="pt-space-lg mt-space-md flex flex-wrap items-center justify-between gap-space-sm border-t border-outline-variant/20">
          <a href="#drill-spatial" class="px-space-lg py-2.5 rounded-full bg-tertiary text-on-tertiary font-label-lg text-label-lg font-bold shadow-sm hover:opacity-95 transition-all flex items-center gap-space-xs">
            <span>Launch AI Spatial Lab</span>
            <span class="px-1.5 py-0.5 rounded-full bg-on-tertiary/20 text-on-tertiary font-label-md text-label-md">+40 XP</span>
          </a>
          <div class="flex items-center gap-space-xs">
            <a href="#mistake-vault-3d" class="px-space-md py-2 rounded-full bg-surface-container-low hover:bg-surface-container font-label-md text-label-md text-on-surface font-semibold transition-all">
              3D Sandbox
            </a>
            <a href="#mock-splitview" class="px-space-md py-2 rounded-full bg-surface-container-low hover:bg-surface-container font-label-md text-label-md text-on-surface font-semibold transition-all">
              Visual Net Stencils
            </a>
          </div>
        </div>
      </article>` : ''}

      <!-- Card 4: English Comprehension & SPaG -->
      ${(filterSubject === 'all' || filterSubject === 'english') ? `
      <article class="bg-surface-container-lowest rounded-2xl p-space-xl elevation-1 flex flex-col justify-between hover:elevation-2 transition-shadow relative overflow-hidden group border border-outline-variant/30">
        <div class="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
        <div class="flex flex-col space-y-space-lg">
          <!-- Header -->
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-space-md">
              <div class="w-14 h-14 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl">menu_book</span>
              </div>
              <div>
                <div class="flex items-center gap-space-xs">
                  <span class="px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary font-label-md text-label-md font-bold">ISEB & CSSE Rigour</span>
                  <span class="font-label-md text-label-md text-outline font-semibold">Stage 3 Mastery</span>
                </div>
                <h2 class="font-headline-md text-headline-md text-on-surface font-bold mt-1">English Comprehension & SPaG</h2>
              </div>
            </div>
            <div class="text-right">
              <span class="font-headline-md text-headline-md text-secondary font-black leading-none">7.9<span class="text-body-sm font-normal text-outline">/10</span></span>
              <span class="block font-label-md text-label-md text-secondary font-bold mt-0.5">High Focus Potential</span>
            </div>
          </div>

          <!-- AI Diagnostic Insight -->
          <div class="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
            <div class="flex items-center gap-1.5 text-secondary font-label-md text-label-md font-bold uppercase">
              <span class="material-symbols-outlined text-base">translate</span>
              <span>AI Real-time Diagnosis</span>
            </div>
            <p class="font-body-md text-body-md text-on-surface">
              <strong>Strengths:</strong> Punctuation syntax, parenthetical commas, direct fact retrieval.
            </p>
            <p class="font-body-sm text-body-sm text-error font-medium">
              <strong>AI Target Focus:</strong> Implicit Tone Shifts, Victorian Prose Register & Poetic Devices.
            </p>
          </div>

          <!-- Active Quest Box -->
          <div class="p-space-md rounded-xl bg-surface-container-low/70 border border-outline-variant/30 flex flex-col space-y-space-sm">
            <div class="flex items-center justify-between">
              <span class="font-label-lg text-label-lg text-on-surface font-bold flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-secondary text-base">history_edu</span>
                19th Century Expedition Prose & Evaluative Analysis
              </span>
              <span class="font-label-md text-label-md text-secondary font-bold">5 / 10 Complete (50%)</span>
            </div>
            <div class="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
              <div class="bg-secondary-container h-full rounded-full transition-all duration-500" style="width: 50%"></div>
            </div>
          </div>

          <!-- Daily AI Challenge Micro-Card -->
          <div class="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between border border-outline-variant/20">
            <div class="flex items-center gap-space-md">
              <div class="w-10 h-10 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary">
                <span class="material-symbols-outlined text-xl">draw</span>
              </div>
              <div>
                <span class="font-label-md text-label-md text-secondary font-bold uppercase">Daily Syntax Challenge</span>
                <p class="font-body-md text-body-md text-on-surface font-semibold">Subordinate Inversion & Archaic Idiom Nuance</p>
              </div>
            </div>
            <span class="px-space-md py-1 rounded-full bg-surface-container-high font-label-md text-label-md text-on-surface font-bold">2 Marks / 60s</span>
          </div>
        </div>

        <!-- Action Cluster -->
        <div class="pt-space-lg mt-space-md flex flex-wrap items-center justify-between gap-space-sm border-t border-outline-variant/20">
          <a href="#drill-timed" class="px-space-lg py-2.5 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-sm hover:opacity-95 transition-all flex items-center gap-space-xs">
            <span>Launch AI Adaptive Session</span>
            <span class="px-1.5 py-0.5 rounded-full bg-on-secondary/20 text-on-secondary font-label-md text-label-md">+30 XP</span>
          </a>
          <div class="flex items-center gap-space-xs">
            <a href="#practice-arena" class="px-space-md py-2 rounded-full bg-surface-container-low hover:bg-surface-container font-label-md text-label-md text-on-surface font-semibold transition-all">
              Passage Archive
            </a>
            <a href="#scorecard" class="px-space-md py-2 rounded-full bg-surface-container-low hover:bg-surface-container font-label-md text-label-md text-on-surface font-semibold transition-all">
              Mark Scheme Guide
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
