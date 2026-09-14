// Learnly 11+ / MyRank 11+ — Past Exam Papers Archive (Grammar & Independent Schools)
// Stitch Screen: projects/12843600554840635782/screens/b151e6f25986406f9fb16ee60c8bd421

LearnlyRouter.register('past-papers', function() {
  return `
  <div class="flex flex-col w-full space-y-space-xl">
    <!-- Header & KPI Overview Panel -->
    <header class="flex flex-col gap-space-lg">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div class="space-y-space-xs max-w-3xl">
          <div class="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary-container/15 text-primary font-label-md text-label-md">
            <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">verified</span>
            Authentic Standardised Archive • Calibrated 2018–2024
          </div>
          <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight font-extrabold">
            Past Papers & Consortium Archive — Grammar & Independent Schools
          </h1>
          <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Authentic historical examination papers calibrated with official mark schemes, candidate SAS (Standardised Age Score) benchmarks, and proctored live digital simulations.
          </p>
        </div>
        <div class="flex items-center gap-space-sm self-start md:self-auto">
          <button class="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-full bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface-container-high transition-colors" type="button" onclick="alert('Preparing batch download pack (12 PDF papers + OMR sheets)...')">
            <span class="material-symbols-outlined text-base">print</span>
            Batch Print Pack
          </button>
          <a href="#mock-simulation" class="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:opacity-95 transition-all">
            <span class="material-symbols-outlined text-base">play_arrow</span>
            Start Adaptive Test Run
          </a>
        </div>
      </div>

      <!-- KPI Metric Strip -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        <div class="bg-surface-container-lowest p-space-md rounded-xl elevation-1 flex items-center gap-space-md">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <span class="material-symbols-outlined text-2xl">auto_stories</span>
          </div>
          <div class="min-w-0">
            <span class="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Historical Vault</span>
            <span class="font-headline-md text-headline-md text-on-surface leading-none font-bold">480+ Papers</span>
            <span class="block font-body-sm text-body-sm text-tertiary font-medium mt-0.5">GL, CEM & Direct Independent</span>
          </div>
        </div>

        <div class="bg-surface-container-lowest p-space-md rounded-xl elevation-1 flex items-center gap-space-md">
          <div class="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
            <span class="material-symbols-outlined text-2xl">account_balance</span>
          </div>
          <div class="min-w-0">
            <span class="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Grammar Consortiums</span>
            <span class="font-headline-md text-headline-md text-on-surface leading-none font-bold">14 Regions</span>
            <span class="block font-body-sm text-body-sm text-on-surface-variant truncate mt-0.5">Sutton SET, CSSE, Kent & QE Boys</span>
          </div>
        </div>

        <div class="bg-surface-container-lowest p-space-md rounded-xl elevation-1 flex items-center gap-space-md">
          <div class="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
            <span class="material-symbols-outlined text-2xl">military_tech</span>
          </div>
          <div class="min-w-0">
            <span class="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Independent Schools</span>
            <span class="font-headline-md text-headline-md text-on-surface leading-none font-bold">28 Elite Trusts</span>
            <span class="block font-body-sm text-body-sm text-on-surface-variant truncate mt-0.5">Westminster, St. Paul's, KCS</span>
          </div>
        </div>

        <div class="bg-primary text-on-primary p-space-md rounded-xl elevation-2 flex items-center justify-between relative overflow-hidden">
          <div class="min-w-0 relative z-10">
            <div class="flex items-center gap-1.5 opacity-80">
              <span class="font-label-md text-label-md uppercase tracking-wider">Leo's Track Record</span>
              <span class="inline-block w-2 h-2 rounded-full bg-[#10b981]"></span>
            </div>
            <div class="flex items-baseline gap-2 mt-1">
              <span class="font-headline-md text-headline-md font-bold leading-none">133.4</span>
              <span class="font-label-lg text-label-lg opacity-85">Avg SAS</span>
            </div>
            <span class="block font-body-sm text-body-sm opacity-80 mt-1">34 Complete • Top 0.8% Cohort</span>
          </div>
          <div class="w-11 h-11 rounded-full bg-on-primary/15 backdrop-blur-md flex items-center justify-center text-on-primary shrink-0">
            <span class="material-symbols-outlined text-2xl">trending_up</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Search, Filter & Consortium Selector -->
    <section class="bg-surface-container-lowest p-space-lg rounded-xl elevation-1 space-y-space-md">
      <div class="relative w-full">
        <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">search</span>
        <input class="w-full pl-12 pr-space-xl py-3 rounded-full bg-surface-container-low font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" id="archiveSearchInput" placeholder="Search by school (e.g. QE Boys, Westminster, Henrietta Barnett, St. Olave's), paper code, or topic..." type="text"/>
      </div>

      <!-- Category Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-1">
        <button class="px-space-md py-2 rounded-full font-label-lg text-label-lg bg-primary text-on-primary whitespace-nowrap shadow-sm">
          All Papers (480)
        </button>
        <button class="px-space-md py-2 rounded-full font-label-lg text-label-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors whitespace-nowrap">
          Top Grammar Consortiums (264)
        </button>
        <button class="px-space-md py-2 rounded-full font-label-lg text-label-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors whitespace-nowrap">
          Independent & Private Schools (216)
        </button>
        <button class="px-space-md py-2 rounded-full font-label-lg text-label-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors whitespace-nowrap">
          Stage 1 (Elimination Mocks)
        </button>
        <button class="px-space-md py-2 rounded-full font-label-lg text-label-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors whitespace-nowrap">
          Stage 2 (Advanced Written)
        </button>
      </div>

      <!-- Dropdown Filters Multi-Row -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs">
        <div class="flex flex-col gap-1">
          <label class="font-label-md text-label-md text-on-surface-variant font-medium">Exam Year</label>
          <select class="px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>All Vintage Years (2018–2024)</option>
            <option>2024 Series (Latest Spec)</option>
            <option>2023 Series</option>
            <option>2022 Series</option>
          </select>
        </div>
        <div class="flex flex-col gap-1">
          <label class="font-label-md text-label-md text-on-surface-variant font-medium">Subject Discipline</label>
          <select class="px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>All Subjects</option>
            <option>Mathematics & Numerical Reasoning</option>
            <option>English Comprehension & SPaG</option>
            <option>Verbal Reasoning (80 Types)</option>
            <option>Non-Verbal & Spatial Reasoning</option>
          </select>
        </div>
        <div class="flex flex-col gap-1">
          <label class="font-label-md text-label-md text-on-surface-variant font-medium">Standardised Difficulty</label>
          <select class="px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>All Tiers</option>
            <option>Selective Benchmark (SAS 110–120)</option>
            <option>Highly Selective (SAS 121–130)</option>
            <option>Super-Selective 99th% (SAS 131–141)</option>
          </select>
        </div>
        <div class="flex flex-col gap-1">
          <label class="font-label-md text-label-md text-on-surface-variant font-medium">Simulation Format</label>
          <select class="px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>All Delivery Formats</option>
            <option>Digital Adaptive Simulation (Live Timer)</option>
            <option>Printable PDF with OMR Bubble Sheet</option>
          </select>
        </div>
      </div>
    </section>

    <!-- Super-Selective Spotlight Benchmarks -->
    <section class="space-y-space-md">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-space-sm">
          <span class="w-2.5 h-6 bg-secondary-container rounded-full"></span>
          <h2 class="font-headline-md text-headline-md text-on-surface font-bold">
            Super-Selective Spotlight Benchmarks
          </h2>
        </div>
        <span class="font-label-md text-label-md text-on-surface-variant">Recommended target: Queen Elizabeth's & Westminster</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
        <!-- Spotlight 1: QE Boys -->
        <div class="bg-surface-container-lowest rounded-xl p-space-lg elevation-1 flex flex-col justify-between hover:elevation-2 transition-all">
          <div class="space-y-space-md">
            <div class="flex items-start justify-between gap-space-sm">
              <div class="flex items-center gap-space-sm">
                <div class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary font-bold font-headline-sm">
                  QE
                </div>
                <div>
                  <span class="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">Grammar #1 UK</span>
                  <h3 class="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug">Queen Elizabeth's School (QE Boys)</h3>
                </div>
              </div>
              <span class="px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold">2024 Stage 2</span>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant">
              Official 2024 Simulation: Advanced Multi-Step Numerical Reasoning, Algebraics & Geometric Cryptic Sequences.
            </p>
            <div class="flex flex-wrap gap-1.5 font-label-md text-label-md">
              <span class="px-2 py-1 rounded bg-surface-container-low text-on-surface font-medium">50 Questions</span>
              <span class="px-2 py-1 rounded bg-surface-container-low text-on-surface font-medium">60 Mins</span>
              <span class="px-2 py-1 rounded bg-error-container text-on-error-container font-semibold">Diff: 9.4 / 10</span>
              <span class="px-2 py-1 rounded bg-surface-container-highest text-primary font-semibold">Cut-off: 235+</span>
            </div>
            <div class="p-space-sm rounded-lg bg-surface-container-low space-y-1">
              <div class="flex justify-between items-center text-body-sm">
                <span class="font-label-md text-label-md text-tertiary font-semibold flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">check_circle</span> Completed • 94% Mark
                </span>
                <span class="font-label-timer text-label-timer text-primary font-bold">SAS 136</span>
              </div>
              <div class="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                <div class="bg-primary h-full rounded-full" style="width: 94%"></div>
              </div>
              <span class="font-label-md text-label-md text-on-surface-variant block text-right">Rank #4 among 1,480 cohort takers</span>
            </div>
          </div>
          <div class="pt-space-md mt-space-sm space-y-2">
            <a href="#scorecard" class="w-full py-2.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:opacity-95 transition-opacity flex items-center justify-center gap-1.5">
              <span class="material-symbols-outlined text-base">analytics</span>
              Review Analysis & Mark Scheme
            </a>
            <div class="flex gap-2">
              <a href="#mock-simulation" class="flex-1 py-2 text-center rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors">
                Re-run Timed
              </a>
              <button onclick="alert('Downloading QE Boys 2024 Past Paper PDF...')" class="flex-1 py-2 rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center justify-center gap-1">
                <span class="material-symbols-outlined text-sm">download</span> PDF
              </button>
            </div>
          </div>
        </div>

        <!-- Spotlight 2: HBS -->
        <div class="bg-surface-container-lowest rounded-xl p-space-lg elevation-1 flex flex-col justify-between hover:elevation-2 transition-all">
          <div class="space-y-space-md">
            <div class="flex items-start justify-between gap-space-sm">
              <div class="flex items-center gap-space-sm">
                <div class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary font-bold font-headline-sm">
                  HB
                </div>
                <div>
                  <span class="font-label-md text-label-md text-tertiary font-bold uppercase tracking-wider">Girls Super-Selective</span>
                  <h3 class="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug">Henrietta Barnett School (HBS)</h3>
                </div>
              </div>
              <span class="px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold">2024 Stage 1</span>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant">
              Round 1 First-Filter Test: High-velocity VR (80 question types) + NVR Spatial Pattern Recognition.
            </p>
            <div class="flex flex-wrap gap-1.5 font-label-md text-label-md">
              <span class="px-2 py-1 rounded bg-surface-container-low text-on-surface font-medium">65 Questions</span>
              <span class="px-2 py-1 rounded bg-surface-container-low text-on-surface font-medium">45 Mins</span>
              <span class="px-2 py-1 rounded bg-error-container text-on-error-container font-semibold">Diff: 9.2 / 10</span>
              <span class="px-2 py-1 rounded bg-surface-container-highest text-primary font-semibold">Top 300 proceed</span>
            </div>
            <div class="p-space-sm rounded-lg bg-surface-container-low space-y-1">
              <div class="flex justify-between items-center text-body-sm">
                <span class="font-label-md text-label-md text-primary font-semibold flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">hourglass_top</span> Not Attempted
                </span>
                <span class="font-label-timer text-label-timer text-on-surface-variant font-bold">—</span>
              </div>
              <div class="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                <div class="bg-surface-container-high h-full rounded-full" style="width: 0%"></div>
              </div>
              <span class="font-label-md text-label-md text-on-surface-variant block text-right">Predicted SAS: 132</span>
            </div>
          </div>
          <div class="pt-space-md mt-space-sm space-y-2">
            <a href="#mock-simulation" class="w-full py-2.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:opacity-95 transition-opacity flex items-center justify-center gap-1.5">
              <span class="material-symbols-outlined text-base">play_arrow</span>
              Launch Timed Exam
            </a>
            <div class="flex gap-2">
              <button onclick="alert('Downloading HBS 2024 Past Paper PDF...')" class="w-full py-2 rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center justify-center gap-1">
                <span class="material-symbols-outlined text-sm">download</span> Download PDF & Solutions
              </button>
            </div>
          </div>
        </div>

        <!-- Spotlight 3: Westminster -->
        <div class="bg-surface-container-lowest rounded-xl p-space-lg elevation-1 flex flex-col justify-between hover:elevation-2 transition-all">
          <div class="space-y-space-md">
            <div class="flex items-start justify-between gap-space-sm">
              <div class="flex items-center gap-space-sm">
                <div class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary font-bold font-headline-sm">
                  WS
                </div>
                <div>
                  <span class="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Independent Elite</span>
                  <h3 class="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug">Westminster Under School (11+)</h3>
                </div>
              </div>
              <span class="px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold">2023 Challenge</span>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant">
              Maths Paper 2 (Unseen Problem Solving) & Advanced Creative Writing / Classical Passage Analysis.
            </p>
            <div class="flex flex-wrap gap-1.5 font-label-md text-label-md">
              <span class="px-2 py-1 rounded bg-surface-container-low text-on-surface font-medium">40 Questions</span>
              <span class="px-2 py-1 rounded bg-surface-container-low text-on-surface font-medium">75 Mins</span>
              <span class="px-2 py-1 rounded bg-error-container text-on-error-container font-semibold">Diff: 9.8 / 10</span>
              <span class="px-2 py-1 rounded bg-surface-container-highest text-primary font-semibold">Scholarship Tier</span>
            </div>
            <div class="p-space-sm rounded-lg bg-surface-container-low space-y-1">
              <div class="flex justify-between items-center text-body-sm">
                <span class="font-label-md text-label-md text-tertiary font-semibold flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">check_circle</span> Completed • 89% Mark
                </span>
                <span class="font-label-timer text-label-timer text-primary font-bold">SAS 131</span>
              </div>
              <div class="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                <div class="bg-primary h-full rounded-full" style="width: 89%"></div>
              </div>
              <span class="font-label-md text-label-md text-on-surface-variant block text-right">Westminster Interview Shortlist</span>
            </div>
          </div>
          <div class="pt-space-md mt-space-sm space-y-2">
            <a href="#scorecard" class="w-full py-2.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:opacity-95 transition-opacity flex items-center justify-center gap-1.5">
              <span class="material-symbols-outlined text-base">analytics</span>
              Review Mark Scheme
            </a>
            <div class="flex gap-2">
              <a href="#mock-simulation" class="flex-1 py-2 text-center rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors">
                Re-run Timed
              </a>
              <button onclick="alert('Downloading Westminster 2023 Paper PDF...')" class="flex-1 py-2 rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center justify-center gap-1">
                <span class="material-symbols-outlined text-sm">download</span> PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comprehensive Consortium Archive Table -->
    <section class="bg-surface-container-lowest rounded-xl p-space-lg elevation-1 space-y-space-md">
      <div class="flex items-center justify-between border-b border-outline-variant/30 pb-space-sm">
        <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
          Regional Consortium Archive & School Index
        </h3>
        <span class="font-label-md text-label-md text-on-surface-variant">Showing 6 of 480 calibrated papers</span>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left font-body-sm text-body-sm">
          <thead>
            <tr class="border-b border-outline-variant/30 text-on-surface-variant font-label-md uppercase tracking-wider">
              <th class="py-3 px-4">School / Consortium</th>
              <th class="py-3 px-4">Subject</th>
              <th class="py-3 px-4">Series Year</th>
              <th class="py-3 px-4">Duration</th>
              <th class="py-3 px-4">Leo's Status</th>
              <th class="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-outline-variant/20">
            <tr class="hover:bg-surface-container-low/50 transition-colors">
              <td class="py-3 px-4 font-semibold text-on-surface">
                Sutton SET (Selective Eligibility Test)
                <span class="block text-xs font-normal text-on-surface-variant">Wilson's, Wallington Boys, Sutton Grammar</span>
              </td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-xs font-medium">Maths & English</span></td>
              <td class="py-3 px-4">2024 Stage 1</td>
              <td class="py-3 px-4">2x 45 Mins</td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-tertiary-container/15 text-tertiary text-xs font-bold">96% • SAS 138</span></td>
              <td class="py-3 px-4 text-right space-x-2">
                <a href="#mock-simulation" class="px-3 py-1 rounded-full bg-primary text-on-primary text-xs font-bold hover:opacity-90 inline-block">Simulate</a>
                <a href="#scorecard" class="px-3 py-1 rounded-full bg-surface-container-low text-on-surface text-xs font-medium hover:bg-surface-container inline-block">Review</a>
              </td>
            </tr>
            <tr class="hover:bg-surface-container-low/50 transition-colors">
              <td class="py-3 px-4 font-semibold text-on-surface">
                CSSE Essex Consortium
                <span class="block text-xs font-normal text-on-surface-variant">King Edward VI, Colchester Royal, Westcliff</span>
              </td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-xs font-medium">English SPaG</span></td>
              <td class="py-3 px-4">2023 Official</td>
              <td class="py-3 px-4">60 Mins</td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-tertiary-container/15 text-tertiary text-xs font-bold">91% • SAS 132</span></td>
              <td class="py-3 px-4 text-right space-x-2">
                <a href="#mock-simulation" class="px-3 py-1 rounded-full bg-primary text-on-primary text-xs font-bold hover:opacity-90 inline-block">Simulate</a>
                <a href="#scorecard" class="px-3 py-1 rounded-full bg-surface-container-low text-on-surface text-xs font-medium hover:bg-surface-container inline-block">Review</a>
              </td>
            </tr>
            <tr class="hover:bg-surface-container-low/50 transition-colors">
              <td class="py-3 px-4 font-semibold text-on-surface">
                Kent PESE Test (GL Assessment)
                <span class="block text-xs font-normal text-on-surface-variant">Judd School, Skinners', Tonbridge Grammar</span>
              </td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-xs font-medium">Verbal & Non-Verbal</span></td>
              <td class="py-3 px-4">2024 GL Spec</td>
              <td class="py-3 px-4">50 Mins</td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-primary-container/15 text-primary text-xs font-bold">Ready • Untaken</span></td>
              <td class="py-3 px-4 text-right space-x-2">
                <a href="#mock-simulation" class="px-3 py-1 rounded-full bg-primary text-on-primary text-xs font-bold hover:opacity-90 inline-block">Launch</a>
              </td>
            </tr>
            <tr class="hover:bg-surface-container-low/50 transition-colors">
              <td class="py-3 px-4 font-semibold text-on-surface">
                St. Olave's Grammar School
                <span class="block text-xs font-normal text-on-surface-variant">Stage 2 Bespoke Examination</span>
              </td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-xs font-medium">Advanced Maths</span></td>
              <td class="py-3 px-4">2023 Stage 2</td>
              <td class="py-3 px-4">60 Mins</td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-tertiary-container/15 text-tertiary text-xs font-bold">92% • SAS 134</span></td>
              <td class="py-3 px-4 text-right space-x-2">
                <a href="#mock-simulation" class="px-3 py-1 rounded-full bg-primary text-on-primary text-xs font-bold hover:opacity-90 inline-block">Simulate</a>
                <a href="#scorecard" class="px-3 py-1 rounded-full bg-surface-container-low text-on-surface text-xs font-medium hover:bg-surface-container inline-block">Review</a>
              </td>
            </tr>
            <tr class="hover:bg-surface-container-low/50 transition-colors">
              <td class="py-3 px-4 font-semibold text-on-surface">
                King's College School (KCS Wimbledon)
                <span class="block text-xs font-normal text-on-surface-variant">Independent 11+ Pre-Test</span>
              </td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-xs font-medium">VR & Reasoning</span></td>
              <td class="py-3 px-4">2024 ISEB Spec</td>
              <td class="py-3 px-4">45 Mins</td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-tertiary-container/15 text-tertiary text-xs font-bold">95% • SAS 137</span></td>
              <td class="py-3 px-4 text-right space-x-2">
                <a href="#mock-simulation" class="px-3 py-1 rounded-full bg-primary text-on-primary text-xs font-bold hover:opacity-90 inline-block">Simulate</a>
                <a href="#scorecard" class="px-3 py-1 rounded-full bg-surface-container-low text-on-surface text-xs font-medium hover:bg-surface-container inline-block">Review</a>
              </td>
            </tr>
            <tr class="hover:bg-surface-container-low/50 transition-colors">
              <td class="py-3 px-4 font-semibold text-on-surface">
                Birmingham King Edward VI Consortium
                <span class="block text-xs font-normal text-on-surface-variant">Camp Hill Boys & Girls, Five Ways</span>
              </td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-xs font-medium">CEM All Disciplines</span></td>
              <td class="py-3 px-4">2024 CEM Spec</td>
              <td class="py-3 px-4">2x 50 Mins</td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-primary-container/15 text-primary text-xs font-bold">Untaken</span></td>
              <td class="py-3 px-4 text-right space-x-2">
                <a href="#mock-simulation" class="px-3 py-1 rounded-full bg-primary text-on-primary text-xs font-bold hover:opacity-90 inline-block">Launch</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
  `;
});
