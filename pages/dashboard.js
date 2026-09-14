// Learnly 11+ — Student Dashboard Page
LearnlyRouter.register('dashboard', function() {
  return `
  <!-- Dynamic Atmospheric Glow Hero -->
  <div class="relative w-full mb-space-xl overflow-hidden rounded-3xl bg-surface-container-lowest p-space-xl shadow-xl">
    <div class="absolute -right-16 -top-16 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute right-1/3 -bottom-20 w-64 h-64 bg-secondary-container/10 rounded-full blur-2xl pointer-events-none"></div>
    <div class="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-space-lg">
      <div class="max-w-2xl">
        <div class="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed mb-space-sm shadow-sm">
          <span class="material-symbols-outlined text-sm font-bold" style="font-variation-settings: 'FILL' 1;">bolt</span>
          <span class="font-label-md text-label-md uppercase tracking-wider">Exam Sprint Mode</span>
        </div>
        <h1 class="font-display-hero text-display-hero text-on-surface tracking-tight">
          Welcome back, Leo! Ready for today's quest?
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant mt-space-xs flex items-center gap-2 flex-wrap">
          <span class="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary font-bold">
            <span class="material-symbols-outlined text-base">event</span> Next Mock Exam in 18 days
          </span>
          <span class="text-outline">•</span>
          <span>Target: <strong class="text-on-surface">11+ Grammar Consortium</strong> (GL &amp; CEM format)</span>
        </p>
      </div>
      <!-- Quick Summary Stats Mosaic -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-space-sm w-full xl:w-auto">
        <div class="bg-surface-container-low rounded-2xl p-space-md flex flex-col justify-between shadow-sm hover:scale-[1.02] transition-transform">
          <div class="flex items-center justify-between">
            <span class="font-label-md text-label-md uppercase text-on-surface-variant tracking-wider">Daily Goal</span>
            <span class="material-symbols-outlined text-primary text-base">checklist</span>
          </div>
          <div class="mt-2">
            <div class="flex items-baseline gap-1">
              <span class="font-headline-md text-headline-md text-on-surface font-extrabold">3</span>
              <span class="font-label-lg text-label-lg text-on-surface-variant">/ 4 done</span>
            </div>
            <div class="w-full bg-surface-container-highest rounded-full h-1.5 mt-2 overflow-hidden">
              <div class="bg-primary h-full rounded-full" style="width: 75%;"></div>
            </div>
          </div>
        </div>
        <div class="bg-secondary-fixed/40 rounded-2xl p-space-md flex flex-col justify-between shadow-sm hover:scale-[1.02] transition-transform streak-pulse">
          <div class="flex items-center justify-between">
            <span class="font-label-md text-label-md uppercase text-secondary font-bold tracking-wider">Streak</span>
            <span class="material-symbols-outlined text-secondary text-base" style="font-variation-settings: 'FILL' 1;">local_fire_department</span>
          </div>
          <div class="mt-2">
            <div class="font-headline-md text-headline-md text-on-secondary-fixed font-extrabold">14 Days</div>
            <span class="font-label-md text-label-md text-secondary font-semibold">On Absolute Fire!</span>
          </div>
        </div>
        <div class="bg-surface-container-low rounded-2xl p-space-md flex flex-col justify-between shadow-sm hover:scale-[1.02] transition-transform">
          <div class="flex items-center justify-between">
            <span class="font-label-md text-label-md uppercase text-on-surface-variant tracking-wider">Accuracy</span>
            <span class="material-symbols-outlined text-tertiary-container text-base">verified</span>
          </div>
          <div class="mt-2">
            <div class="font-headline-md text-headline-md text-tertiary-container font-extrabold">94.2%</div>
            <span class="font-label-md text-label-md text-tertiary font-semibold">+2.8% this week</span>
          </div>
        </div>
        <div class="bg-surface-container-high rounded-2xl p-space-md flex flex-col justify-between shadow-sm hover:scale-[1.02] transition-transform">
          <div class="flex items-center justify-between">
            <span class="font-label-md text-label-md uppercase text-on-surface-variant tracking-wider">SAS Index</span>
            <span class="material-symbols-outlined text-primary text-base">auto_graph</span>
          </div>
          <div class="mt-2">
            <div class="flex items-baseline gap-1">
              <span class="font-headline-md text-headline-md text-primary font-extrabold">128</span>
              <span class="font-label-md text-label-md text-on-surface-variant">/ 141</span>
            </div>
            <span class="inline-block px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-md text-label-md font-bold mt-1">High Readiness</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- AI Recommended Daily Pathway Banner (Stitch Engine) -->
  <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md p-space-lg rounded-2xl bg-gradient-to-r from-primary-fixed/60 via-surface-container to-secondary-fixed/40 border border-primary/20 shadow-sm mb-space-xl">
    <div class="flex items-center gap-space-md">
      <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm flex-shrink-0">
        <span class="material-symbols-outlined text-2xl">neurology</span>
      </div>
      <div>
        <div class="flex items-center gap-space-xs">
          <span class="font-label-md text-label-md text-primary font-bold uppercase">Dynamic AI Pathway Active</span>
          <span class="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold">High Yield</span>
        </div>
        <p class="font-headline-sm text-headline-sm text-on-surface mt-0.5 font-bold">
          Today's AI Hyper-Focus: 3D Spatial Hexagonal Rotations + Archaic Register Contrast
        </p>
      </div>
    </div>
    <div class="flex items-center gap-space-sm w-full lg:w-auto justify-end">
      <a href="#subject-quests" class="px-space-lg py-2.5 bg-primary text-on-primary rounded-full font-label-lg text-label-lg font-bold shadow-md hover:opacity-95 transition-all flex items-center gap-space-xs">
        <span class="material-symbols-outlined text-base">play_arrow</span>
        <span>Explore AI Quests Hub</span>
      </a>
    </div>
  </div>

  <!-- Primary Dynamic Content Split -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
    <!-- Left 8 Columns -->
    <div class="lg:col-span-8 flex flex-col gap-space-xl">

      <!-- Daily Quest Board -->
      <section class="flex flex-col gap-space-md">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-space-sm">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-primary-fixed text-primary">
              <span class="material-symbols-outlined text-lg">flag</span>
            </span>
            <h2 class="font-headline-md text-headline-md text-on-surface font-bold">Daily Quest Board</h2>
            <span class="font-label-md text-label-md text-on-surface-variant bg-surface-container-high px-2.5 py-0.5 rounded-full">Resets in 6h 40m</span>
          </div>
          <a href="#subject-quests" class="text-primary font-label-lg text-label-lg hover:underline transition-colors flex items-center gap-1 font-bold">
            View All AI Quests <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          <!-- Card 1: VR Timed Drill -->
          <div class="relative bg-surface-container-lowest rounded-2xl p-space-lg shadow-md card-hover flex flex-col justify-between group overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
            <div>
              <div class="flex items-center justify-between mb-space-sm">
                <span class="px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-md text-label-md font-bold flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">psychology</span> Verbal Reasoning
                </span>
                <span class="text-secondary font-label-lg text-label-lg font-bold flex items-center gap-1">
                  <span class="material-symbols-outlined text-base">stars</span> +50 XP
                </span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Synonyms &amp; Antonyms in Context</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">GL Exam pattern drill: 15 timed lexical comparison queries with distractor analysis.</p>
            </div>
            <div class="flex items-center justify-between mt-space-lg pt-space-sm">
              <div class="flex items-center gap-1 text-on-surface-variant font-label-md text-label-md">
                <span class="material-symbols-outlined text-sm">schedule</span> 10 mins
              </div>
              <button class="px-space-md py-2 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5" data-navigate="practice-arena" type="button">
                <span class="material-symbols-outlined text-base">play_arrow</span> In Progress
              </button>
            </div>
          </div>
          <!-- Card 2: Math Mastery -->
          <div class="relative bg-surface-container-lowest rounded-2xl p-space-lg shadow-md card-hover flex flex-col justify-between group overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-tertiary-container/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
            <div>
              <div class="flex items-center justify-between mb-space-sm">
                <span class="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">calculate</span> Mathematics
                </span>
                <span class="text-secondary font-label-lg text-label-lg font-bold flex items-center gap-1">
                  <span class="material-symbols-outlined text-base">stars</span> +80 XP
                </span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Algebraic Sequences &amp; Multi-step</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">Linear progressions, nth term calculations, and multi-tier word challenges.</p>
            </div>
            <div class="flex items-center justify-between mt-space-lg pt-space-sm">
              <div class="flex items-center gap-1 text-on-surface-variant font-label-md text-label-md">
                <span class="material-symbols-outlined text-sm">schedule</span> 15 mins
              </div>
              <button class="px-space-md py-2 rounded-full bg-surface-container-high text-primary font-label-lg text-label-lg font-bold hover:bg-primary-container hover:text-on-primary transition-all flex items-center gap-1.5" data-navigate="drill-spatial" type="button">Start Challenge</button>
            </div>
          </div>
          <!-- Card 3: NVR -->
          <div class="relative bg-surface-container-lowest rounded-2xl p-space-lg shadow-md card-hover flex flex-col justify-between group overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-secondary-container/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
            <div>
              <div class="flex items-center justify-between mb-space-sm">
                <span class="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">view_in_ar</span> NVR Spatial
                </span>
                <span class="text-secondary font-label-lg text-label-lg font-bold flex items-center gap-1">
                  <span class="material-symbols-outlined text-base">stars</span> +60 XP
                </span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">3D Cube Nets &amp; Spatial Rotations</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">Visualizing folded surfaces, isometric turns, and opposite face deduction.</p>
            </div>
            <div class="flex items-center justify-between mt-space-lg pt-space-sm">
              <div class="flex items-center gap-1 text-on-surface-variant font-label-md text-label-md">
                <span class="material-symbols-outlined text-sm">schedule</span> 12 mins
              </div>
              <button class="px-space-md py-2 rounded-full bg-surface-container-high text-primary font-label-lg text-label-lg font-bold hover:bg-primary-container hover:text-on-primary transition-all flex items-center gap-1.5" data-navigate="drill-spatial" type="button">Start Challenge</button>
            </div>
          </div>
          <!-- Card 4: Vocab -->
          <div class="relative bg-gradient-to-br from-primary-container to-primary text-on-primary rounded-2xl p-space-lg shadow-md flex flex-col justify-between overflow-hidden cursor-pointer select-none group" id="vocab-card">
            <div class="flex items-center justify-between mb-space-sm">
              <span class="px-2.5 py-1 rounded-full bg-primary-fixed/20 text-on-primary font-label-md text-label-md font-bold flex items-center gap-1 backdrop-blur-md">
                <span class="material-symbols-outlined text-sm">auto_stories</span> 11+ Daily Lexicon
              </span>
              <button class="w-8 h-8 rounded-full bg-on-primary/10 hover:bg-on-primary/20 flex items-center justify-center transition-colors" id="pronounce-btn" type="button">
                <span class="material-symbols-outlined text-sm text-on-primary">volume_up</span>
              </button>
            </div>
            <div class="my-auto transition-all duration-300" id="vocab-front">
              <div class="flex items-baseline gap-2">
                <span class="font-headline-lg text-headline-lg font-extrabold tracking-tight">Sagacious</span>
                <span class="font-label-md text-label-md opacity-80 italic">/səˈɡeɪ.ʃəs/ (adj.)</span>
              </div>
              <p class="font-body-md text-body-md mt-2 opacity-95 line-clamp-2">
                Having or showing keen mental discernment and good judgment; wise or shrewd.
              </p>
              <div class="mt-space-sm px-space-md py-2 rounded-xl bg-on-primary/10 font-body-sm text-body-sm italic border-none">
                "The sagacious scholar deduced the missing sequence before time elapsed."
              </div>
            </div>
            <div class="flex items-center justify-between mt-space-md pt-space-xs text-on-primary/80 font-label-md text-label-md">
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">swap_horiz</span> Tap card to view Antonym
              </span>
              <span class="font-bold text-secondary-fixed">Mastered ✓</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Subject Readiness & Mastery Grid -->
      <section class="flex flex-col gap-space-md">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-space-sm">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-tertiary-fixed text-tertiary-container">
              <span class="material-symbols-outlined text-lg">track_changes</span>
            </span>
            <h2 class="font-headline-md text-headline-md text-on-surface">Subject Readiness &amp; Mastery</h2>
          </div>
          <span class="font-label-md text-label-md text-on-surface-variant">CEM &amp; GL Target Benchmarks</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          ${['Mathematics','Verbal Reasoning','Non-Verbal Reasoning','English & Comprehension'].map((subj, i) => {
            const data = [
              { icon:'functions', pct:88, solved:420, level:'Grandmaster', color:'tertiary-container', fixedBg:'tertiary-fixed/50', str:'Fractions, Ratio & Proportion', focus:'Decimals & Algebraic Word Problems', speed:'48s' },
              { icon:'psychology', pct:91, solved:380, level:'Elite Scholar', color:'primary', fixedBg:'primary-fixed', str:'Word Codes, Complex Anagrams', focus:'Hidden Compound Words', speed:'34s' },
              { icon:'view_in_ar', pct:84, solved:295, level:'Proficient', color:'secondary', fixedBg:'secondary-fixed/60', str:'Shape Analogies & Matrices', focus:'Reflection & 3D Rotations', speed:'52s' },
              { icon:'menu_book', pct:86, solved:310, level:'Master', color:'primary', fixedBg:'surface-container-highest', str:'Subtle Inference & Punctuation', focus:'Creative Writing Under Timed Pressure', speed:'42s' },
            ][i];
            return `
            <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md card-hover flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-space-sm">
                    <div class="w-10 h-10 rounded-xl bg-${data.fixedBg} flex items-center justify-center text-${data.color}">
                      <span class="material-symbols-outlined text-xl">${data.icon}</span>
                    </div>
                    <div>
                      <h3 class="font-headline-sm text-headline-sm text-on-surface">${subj}</h3>
                      <span class="font-label-md text-label-md text-on-surface-variant">${data.solved} Questions solved</span>
                    </div>
                  </div>
                  <div class="text-right">
                    <span class="font-headline-md text-headline-md text-${data.color} font-extrabold">${data.pct}%</span>
                    <div class="px-2 py-0.5 rounded-md bg-${data.fixedBg} text-${data.color} font-label-md text-label-md font-bold mt-0.5">${data.level}</div>
                  </div>
                </div>
                <div class="w-full bg-surface-container-high rounded-full h-2 mt-space-md overflow-hidden">
                  <div class="bg-${data.color} h-full rounded-full" style="width:${data.pct}%"></div>
                </div>
                <div class="mt-space-md flex flex-col gap-space-xs font-body-sm text-body-sm">
                  <div class="flex items-center justify-between">
                    <span class="text-on-surface-variant flex items-center gap-1"><span class="material-symbols-outlined text-sm text-${data.color}">check_circle</span> Strengths:</span>
                    <span class="font-label-md text-label-md text-on-surface font-semibold">${data.str}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-on-surface-variant flex items-center gap-1"><span class="material-symbols-outlined text-sm text-secondary">adjust</span> Focus Target:</span>
                    <span class="font-label-md text-label-md text-secondary font-semibold">${data.focus}</span>
                  </div>
                </div>
              </div>
              <div class="mt-space-md pt-space-sm flex items-center justify-between">
                <span class="font-label-md text-label-md text-on-surface-variant">Avg Speed: ${data.speed} / question</span>
                <a class="font-label-lg text-label-lg text-primary font-bold hover:underline flex items-center gap-0.5" href="#subject-quests?subject=${['maths','vr','nvr','english'][i]}">Open AI Quest <span class="material-symbols-outlined text-sm">chevron_right</span></a>
              </div>
            </div>`;
          }).join('')}
        </div>
      </section>
    </div>

    <!-- Right 4 Columns: Sidebar widgets -->
    <div class="lg:col-span-4 flex flex-col gap-space-xl">
      <!-- Scholar Focus Watch & Daily Timecard Widget -->
      <div class="bg-surface-container-lowest rounded-3xl p-space-lg shadow-xl border border-outline-variant/30 overflow-hidden relative">
        <div class="absolute -right-8 -top-8 w-36 h-36 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
        <div class="flex items-center justify-between mb-space-md">
          <div class="flex items-center gap-space-sm">
            <div class="w-10 h-10 rounded-2xl bg-primary text-on-primary flex items-center justify-center shadow-md">
              <span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">schedule</span>
            </div>
            <div>
              <h3 class="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-tight">Scholar Focus Watch</h3>
              <span class="font-label-md text-label-md text-primary font-bold">Real-time Test &amp; Login Audit</span>
            </div>
          </div>
          <button data-open-watch-modal type="button" class="w-8 h-8 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant flex items-center justify-center transition-colors shadow-sm" title="Expand Full Timecard Modal">
            <span class="material-symbols-outlined text-base">open_in_full</span>
          </button>
        </div>

        <!-- Real-Time Digital Watchface -->
        <div class="p-space-md rounded-2xl bg-surface-container-low border border-outline-variant/20 shadow-inner mb-space-md text-center relative overflow-hidden">
          <div class="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">
            <span>UK Time (BST)</span>
            <span class="inline-flex items-center gap-1 text-tertiary font-bold"><span class="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span> Proctor Active</span>
          </div>
          <div class="font-mono text-3xl font-black text-primary tracking-tight watch-live-time py-1">
            --:--:--
          </div>
          <div class="grid grid-cols-2 gap-2 pt-space-xs border-t border-outline-variant/20 mt-space-xs text-left text-xs">
            <div class="bg-surface-container-lowest/80 p-2 rounded-xl">
              <span class="text-on-surface-variant block text-[10px] font-bold uppercase">Logged In At</span>
              <strong class="text-on-surface font-bold watch-login-time">08:30 AM</strong>
            </div>
            <div class="bg-surface-container-lowest/80 p-2 rounded-xl">
              <span class="text-on-surface-variant block text-[10px] font-bold uppercase">Active Focus</span>
              <strong class="text-primary font-extrabold watch-session-duration">--m</strong>
            </div>
          </div>
          <!-- Daily Goal Progress -->
          <div class="mt-3 text-left">
            <div class="flex items-center justify-between text-xs mb-1">
              <span class="font-semibold text-on-surface-variant">Daily Focus Target (2h 30m)</span>
              <span class="font-bold text-tertiary">96%</span>
            </div>
            <div class="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
              <div class="bg-tertiary h-full rounded-full" style="width: 96%"></div>
            </div>
          </div>
        </div>

        <!-- Today's Test Start & Finish Timecard Feed -->
        <div class="mb-space-md">
          <div class="flex items-center justify-between mb-2">
            <span class="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-bold">Today's Tests Timecard</span>
            <span class="text-[11px] font-bold text-primary bg-primary-fixed px-2 py-0.5 rounded-full">3 Verified</span>
          </div>
          <div class="space-y-2">
            <!-- Test 1 -->
            <div class="p-2.5 rounded-xl bg-surface-container-low/70 border border-outline-variant/15 hover:border-primary/30 transition-colors text-xs">
              <div class="flex items-center justify-between font-bold text-on-surface">
                <span class="truncate max-w-[180px]">Mock #04 — Verbal Reasoning</span>
                <span class="text-tertiary font-extrabold">24/25 (96%)</span>
              </div>
              <div class="flex items-center justify-between text-[11px] text-on-surface-variant mt-1">
                <span class="font-mono text-outline">Start: <strong>09:15 AM</strong> ➔ Finish: <strong class="text-primary">09:42 AM</strong></span>
                <span class="bg-surface-container px-1.5 py-0.5 rounded font-medium">27m 30s</span>
              </div>
            </div>
            <!-- Test 2 -->
            <div class="p-2.5 rounded-xl bg-surface-container-low/70 border border-outline-variant/15 hover:border-primary/30 transition-colors text-xs">
              <div class="flex items-center justify-between font-bold text-on-surface">
                <span class="truncate max-w-[180px]">Rapid Cloze Drill #02</span>
                <span class="text-tertiary font-extrabold">15/15 (100%)</span>
              </div>
              <div class="flex items-center justify-between text-[11px] text-on-surface-variant mt-1">
                <span class="font-mono text-outline">Start: <strong>10:30 AM</strong> ➔ Finish: <strong class="text-primary">10:43 AM</strong></span>
                <span class="bg-surface-container px-1.5 py-0.5 rounded font-medium">13m 15s</span>
              </div>
            </div>
            <!-- Test 3 -->
            <div class="p-2.5 rounded-xl bg-surface-container-low/70 border border-outline-variant/15 hover:border-primary/30 transition-colors text-xs">
              <div class="flex items-center justify-between font-bold text-on-surface">
                <span class="truncate max-w-[180px]">3D Spatial Net Rapid Practice</span>
                <span class="text-tertiary font-extrabold">18/20 (90%)</span>
              </div>
              <div class="flex items-center justify-between text-[11px] text-on-surface-variant mt-1">
                <span class="font-mono text-outline">Start: <strong>11:20 AM</strong> ➔ Finish: <strong class="text-primary">11:35 AM</strong></span>
                <span class="bg-surface-container px-1.5 py-0.5 rounded font-medium">15m 10s</span>
              </div>
            </div>
          </div>
        </div>

        <button data-open-watch-modal type="button" class="w-full py-2.5 rounded-xl bg-surface-container-high hover:bg-primary-fixed text-primary font-label-md text-label-md font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm">
          <span class="material-symbols-outlined text-base">receipt_long</span>
          <span>View Detailed Pacing Ledger</span>
        </button>
      </div>

      <!-- AI Smart Revision Suggestion -->
      <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md overflow-hidden relative">
        <div class="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
        <div class="flex items-center gap-space-sm mb-space-md">
          <div class="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center">
            <span class="material-symbols-outlined text-on-primary text-xl">auto_awesome</span>
          </div>
          <div>
            <h3 class="font-headline-sm text-headline-sm text-on-surface">AI Revision Coach</h3>
            <span class="font-label-md text-label-md text-primary font-bold">Powered by LearnlyAI</span>
          </div>
        </div>
        <div class="space-y-space-sm">
          <div class="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high/60">
            <div class="flex items-center gap-2 mb-1">
              <span class="material-symbols-outlined text-sm text-secondary">priority_high</span>
              <span class="font-label-lg text-label-lg text-on-surface font-bold">Weakness Detected</span>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant">Your NVR reflection accuracy dropped 12% in the last 3 sessions. Try the targeted micro-drill below.</p>
            <button class="mt-space-sm px-space-md py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md font-bold shadow-sm hover:opacity-90 transition-opacity" data-navigate="drill-spatial" type="button">Start Micro-Drill (5 min)</button>
          </div>
          <div class="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high/60">
            <div class="flex items-center gap-2 mb-1">
              <span class="material-symbols-outlined text-sm text-tertiary-container">trending_up</span>
              <span class="font-label-lg text-label-lg text-on-surface font-bold">Momentum Insight</span>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant">VR Word Codes: 96% accuracy across 40 questions. You're exam-ready for this category!</p>
          </div>
        </div>
      </div>

      <!-- Recent Activity Timeline -->
      <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md">
        <div class="flex items-center justify-between mb-space-md">
          <h3 class="font-headline-sm text-headline-sm text-on-surface">Recent Activity</h3>
          <span class="font-label-md text-label-md text-on-surface-variant">Today</span>
        </div>
        <div class="space-y-space-md">
          ${[
            { icon:'check_circle', color:'tertiary-container', title:'Completed VR Drill', desc:'Synonyms & Antonyms — 14/15 correct', time:'2h ago', xp:'+50 XP' },
            { icon:'emoji_events', color:'secondary-container', title:'Badge Earned: VR Virtuoso', desc:'Achieved 95%+ in Verbal Reasoning 3 times', time:'3h ago', xp:'+100 XP' },
            { icon:'assignment_turned_in', color:'primary', title:'Mock Exam Submitted', desc:'GL Full Paper #4 — Score: 92/100', time:'Yesterday', xp:'+200 XP' },
            { icon:'school', color:'tertiary-container', title:'1-on-1 Clinic Completed', desc:'NVR Strategy Session with Ms. Patel', time:'2 days ago', xp:'+75 XP' },
          ].map(a => `
          <div class="flex gap-space-sm">
            <div class="flex flex-col items-center">
              <div class="w-8 h-8 rounded-full bg-${a.color}/10 flex items-center justify-center flex-shrink-0">
                <span class="material-symbols-outlined text-${a.color} text-base">${a.icon}</span>
              </div>
              <div class="w-px h-full bg-surface-container-high mt-1"></div>
            </div>
            <div class="pb-space-md">
              <div class="flex items-center justify-between">
                <span class="font-label-lg text-label-lg text-on-surface font-bold">${a.title}</span>
                <span class="font-label-md text-label-md text-secondary font-bold">${a.xp}</span>
              </div>
              <p class="font-body-sm text-body-sm text-on-surface-variant">${a.desc}</p>
              <span class="font-label-md text-label-md text-outline mt-0.5">${a.time}</span>
            </div>
          </div>`).join('')}
        </div>
      </div>

      <!-- Upcoming Schedule -->
      <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md">
        <div class="flex items-center justify-between mb-space-md">
          <h3 class="font-headline-sm text-headline-sm text-on-surface">Upcoming Schedule</h3>
          <button class="font-label-lg text-label-lg text-primary font-bold" data-navigate="clinic-booking">+ Book</button>
        </div>
        <div class="space-y-space-sm">
          <div class="p-space-md rounded-xl bg-primary-fixed/30 border border-primary-fixed">
            <div class="flex items-center justify-between mb-1">
              <span class="font-label-lg text-label-lg text-primary font-bold">Mock Exam #5</span>
              <span class="font-label-md text-label-md text-on-surface-variant">In 18 days</span>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant">Full Consortium Simulation — GL + CEM composite format</p>
          </div>
          <div class="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high/60">
            <div class="flex items-center justify-between mb-1">
              <span class="font-label-lg text-label-lg text-on-surface font-bold">1-on-1 Clinic</span>
              <span class="font-label-md text-label-md text-on-surface-variant">Tomorrow 4pm</span>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant">NVR 3D Spatial Strategy — with Mr. Thompson</p>
          </div>
          <div class="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high/60">
            <div class="flex items-center justify-between mb-1">
              <span class="font-label-lg text-label-lg text-on-surface font-bold">Revision Sprint</span>
              <span class="font-label-md text-label-md text-on-surface-variant">Fri 5pm</span>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant">English Comprehension — Inference & Deduction focus</p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}, function() {
  if (window.ScholarWatch) {
    window.ScholarWatch.updateDOMWatches();
  }
});

