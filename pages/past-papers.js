// Learnly 11+ / MyRank 11+ — Past Exam Papers Archive (Grammar & Independent Schools)
// Stitch Screen: projects/12843600554840635782/screens/b151e6f25986406f9fb16ee60c8bd421

LearnlyRouter.register('past-papers', function() {
  return `
  <div class="flex flex-col w-full space-y-12 pb-12">
    <!-- Header & KPI Overview Panel -->
    <header class="relative flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 rounded-3xl overflow-hidden shadow-md mb-8" style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);">
      <div class="absolute -right-12 -top-12 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute left-1/4 bottom-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      
      <div class="relative z-10 text-white space-y-3 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase">
          <span class="material-symbols-outlined text-[14px]" style="font-variation-settings: 'FILL' 1;">verified</span>
          Authentic Standardised Archive • Calibrated 2018–2024
        </div>
        <h1 class="text-4xl text-white tracking-tight font-black">
          Past Papers & Consortium Archive
        </h1>
        <p class="text-base font-medium text-white/80 leading-relaxed max-w-2xl">
          Authentic historical examination papers calibrated with official mark schemes, candidate SAS benchmarks, and proctored live digital simulations.
        </p>
      </div>
      <div class="flex items-center gap-3 relative z-10 self-start md:self-auto">
        <button class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold shadow-sm hover:bg-white/20 transition-colors" type="button" onclick="alert('Preparing batch download pack (12 PDF papers + OMR sheets)...')">
          <span class="material-symbols-outlined text-lg">print</span>
          Batch Print Pack
        </button>
        <a href="#mock-simulation" class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-sky-700 text-sm font-bold shadow-md hover:bg-white/90 transition-all">
          <span class="material-symbols-outlined text-lg">play_arrow</span>
          Start Adaptive Test Run
        </a>
        </div>
      </div>

      <!-- KPI Metric Strip -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/20 shadow-sm flex items-center gap-4 hover:border-primary/30 transition-colors group">
          <div class="w-14 h-14 rounded-[2.5rem] bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform shadow-inner">
            <span class="material-symbols-outlined text-2xl">auto_stories</span>
          </div>
          <div class="min-w-0">
            <span class="block text-[10px] font-bold text-outline-variant uppercase tracking-widest">Historical Vault</span>
            <span class="text-2xl text-on-surface font-black tracking-tight block mt-0.5">480+ Papers</span>
            <span class="block text-xs font-medium text-tertiary truncate mt-1">GL, CEM & Independent</span>
          </div>
        </div>

        <div class="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/20 shadow-sm flex items-center gap-4 hover:border-secondary/30 transition-colors group">
          <div class="w-14 h-14 rounded-[2.5rem] bg-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover:scale-110 transition-transform shadow-inner">
            <span class="material-symbols-outlined text-2xl">account_balance</span>
          </div>
          <div class="min-w-0">
            <span class="block text-[10px] font-bold text-outline-variant uppercase tracking-widest">Grammar Consortia</span>
            <span class="text-2xl text-on-surface font-black tracking-tight block mt-0.5">14 Regions</span>
            <span class="block text-xs font-medium text-outline-variant truncate mt-1">Sutton SET, CSSE, Kent & QE</span>
          </div>
        </div>

        <div class="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/20 shadow-sm flex items-center gap-4 hover:border-tertiary/30 transition-colors group">
          <div class="w-14 h-14 rounded-[2.5rem] bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0 group-hover:scale-110 transition-transform shadow-inner">
            <span class="material-symbols-outlined text-2xl">military_tech</span>
          </div>
          <div class="min-w-0">
            <span class="block text-[10px] font-bold text-outline-variant uppercase tracking-widest">Independent</span>
            <span class="text-2xl text-on-surface font-black tracking-tight block mt-0.5">28 Elite Trusts</span>
            <span class="block text-xs font-medium text-outline-variant truncate mt-1">Westminster, St. Paul's, KCS</span>
          </div>
        </div>

        <div class="bg-primary text-on-primary p-6 rounded-3xl shadow-md flex items-center justify-between relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-12 -translate-y-12 group-hover:scale-125 transition-transform duration-700 pointer-events-none z-0"></div>
          <div class="min-w-0 relative z-10">
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-bold uppercase tracking-widest text-white/80">Leo's Record</span>
              <span class="inline-block w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]"></span>
            </div>
            <div class="flex items-baseline gap-2 mt-2">
              <span class="text-3xl font-black tracking-tight leading-none">133.4</span>
              <span class="text-sm font-bold text-white/80">Avg SAS</span>
            </div>
            <span class="block text-xs font-medium text-white/70 mt-2">34 Complete • Top 0.8% Cohort</span>
          </div>
          <div class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-inner relative z-10">
            <span class="material-symbols-outlined text-2xl">trending_up</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Search, Filter & Consortium Selector -->
    <section class="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30 shadow-sm space-y-6">
      <div class="relative w-full">
        <span class="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-outline-variant text-xl">search</span>
        <input class="w-full pl-14 pr-6 py-4 rounded-full bg-surface-container border border-outline-variant/20 text-sm font-medium text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-inner transition-all" id="archiveSearchInput" placeholder="Search by school (e.g. QE Boys, Westminster, HBS), paper code, or topic..." type="text"/>
      </div>

      <!-- Category Tabs -->
      <div class="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
        <button class="px-5 py-2.5 rounded-full text-xs font-bold bg-primary text-on-primary whitespace-nowrap shadow-sm">
          All Papers (480)
        </button>
        <button class="px-5 py-2.5 rounded-full text-xs font-bold border border-outline-variant/20 bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors whitespace-nowrap">
          Top Grammar Consortia (264)
        </button>
        <button class="px-5 py-2.5 rounded-full text-xs font-bold border border-outline-variant/20 bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors whitespace-nowrap">
          Independent & Private Schools (216)
        </button>
        <button class="px-5 py-2.5 rounded-full text-xs font-bold border border-outline-variant/20 bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors whitespace-nowrap">
          Stage 1 (Elimination Mocks)
        </button>
        <button class="px-5 py-2.5 rounded-full text-xs font-bold border border-outline-variant/20 bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors whitespace-nowrap">
          Stage 2 (Advanced Written)
        </button>
      </div>

      <!-- Dropdown Filters Multi-Row -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
        <div class="flex flex-col gap-1.5">
          <label class="text-[10px] font-bold text-outline-variant uppercase tracking-widest px-1">Exam Year</label>
          <select class="px-4 py-2.5 rounded-xl border border-outline-variant/20 bg-surface-container-low text-on-surface text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary shadow-sm appearance-none">
            <option>All Vintage Years (2018–2024)</option>
            <option>2024 Series (Latest Spec)</option>
            <option>2023 Series</option>
            <option>2022 Series</option>
          </select>
        </div>
        <div class="flex flex-col gap-1.5">
          <label class="text-[10px] font-bold text-outline-variant uppercase tracking-widest px-1">Subject Discipline</label>
          <select class="px-4 py-2.5 rounded-xl border border-outline-variant/20 bg-surface-container-low text-on-surface text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary shadow-sm appearance-none">
            <option>All Subjects</option>
            <option>Mathematics</option>
            <option>English</option>
            <option>Verbal Reasoning</option>
            <option>Non-Verbal Reasoning</option>
          </select>
        </div>
        <div class="flex flex-col gap-1.5">
          <label class="text-[10px] font-bold text-outline-variant uppercase tracking-widest px-1">Difficulty</label>
          <select class="px-4 py-2.5 rounded-xl border border-outline-variant/20 bg-surface-container-low text-on-surface text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary shadow-sm appearance-none">
            <option>All Tiers</option>
            <option>Selective Benchmark (SAS 110–120)</option>
            <option>Highly Selective (SAS 121–130)</option>
            <option>Super-Selective 99th% (SAS 131–141)</option>
          </select>
        </div>
        <div class="flex flex-col gap-1.5">
          <label class="text-[10px] font-bold text-outline-variant uppercase tracking-widest px-1">Format</label>
          <select class="px-4 py-2.5 rounded-xl border border-outline-variant/20 bg-surface-container-low text-on-surface text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary shadow-sm appearance-none">
            <option>All Formats</option>
            <option>Digital Adaptive Simulation</option>
            <option>Printable PDF with OMR</option>
          </select>
        </div>
      </div>
    </section>

    <!-- Super-Selective Spotlight Benchmarks -->
    <section class="space-y-6">
      <div class="flex items-center justify-between px-2">
        <div class="flex items-center gap-3">
          <span class="w-2.5 h-8 bg-secondary rounded-full"></span>
          <h2 class="text-2xl font-extrabold text-on-surface tracking-tight">
            Super-Selective Spotlight Benchmarks
          </h2>
        </div>
        <span class="text-xs font-bold text-outline-variant uppercase tracking-widest">Recommended targets</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Spotlight 1: QE Boys -->
        <div class="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-sm flex flex-col justify-between hover:border-primary/50 transition-colors group overflow-hidden relative">
          <div class="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full translate-x-24 -translate-y-24 group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>
          <div class="space-y-6 relative z-10">
            <div class="flex items-start justify-between gap-4">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-[2.5rem] bg-primary/10 flex items-center justify-center text-primary font-black text-xl shadow-inner border border-primary/20">
                  QE
                </div>
                <div>
                  <span class="text-[10px] font-bold text-secondary uppercase tracking-widest block mb-0.5">Grammar #1 UK</span>
                  <h3 class="text-base font-extrabold text-on-surface leading-snug">Queen Elizabeth's (QE)</h3>
                </div>
              </div>
              <span class="px-2.5 py-1 rounded-md bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-widest whitespace-nowrap shadow-sm">2024 Stage 2</span>
            </div>
            <p class="text-xs font-medium text-on-surface-variant leading-relaxed">
              Official 2024 Simulation: Advanced Multi-Step Numerical Reasoning, Algebraics & Geometric Cryptic Sequences.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 rounded-full border border-outline-variant/20 text-[10px] font-bold uppercase tracking-widest text-on-surface bg-surface shadow-sm">50 Qs</span>
              <span class="px-3 py-1 rounded-full border border-outline-variant/20 text-[10px] font-bold uppercase tracking-widest text-on-surface bg-surface shadow-sm">60 Mins</span>
              <span class="px-3 py-1 rounded-full border border-error/20 text-[10px] font-black uppercase tracking-widest text-error bg-error/10 shadow-sm">Diff 9.4</span>
            </div>
            <div class="p-4 rounded-[2.5rem] bg-surface border border-outline-variant/10 space-y-2 shadow-inner">
              <div class="flex justify-between items-center text-xs">
                <span class="font-bold text-tertiary flex items-center gap-1.5 uppercase tracking-widest text-[10px]">
                  <span class="material-symbols-outlined text-sm">check_circle</span> Completed • 94% Mark
                </span>
                <span class="font-black text-primary">SAS 136</span>
              </div>
              <div class="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden shadow-inner border border-outline-variant/10">
                <div class="bg-primary h-full rounded-full" style="width: 94%"></div>
              </div>
              <span class="text-[10px] font-medium text-outline-variant block text-right tracking-wide">Rank #4 among 1,480 cohort takers</span>
            </div>
          </div>
          <div class="pt-6 mt-4 space-y-3 relative z-10 border-t border-outline-variant/20">
            <a href="#scorecard" class="w-full py-3 rounded-xl bg-primary text-on-primary text-xs font-bold shadow-sm hover:bg-primary/90 transition-opacity flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-lg">analytics</span>
              Review Analysis & Mark Scheme
            </a>
            <div class="flex gap-3">
              <a href="#mock-simulation" class="flex-1 py-2 text-center rounded-xl border border-outline-variant/20 bg-surface text-on-surface text-xs font-bold hover:bg-surface-container-lowest transition-colors shadow-sm">
                Re-run
              </a>
              <button onclick="alert('Downloading QE Boys 2024 Past Paper PDF...')" class="flex-1 py-2 rounded-xl border border-outline-variant/20 bg-surface text-on-surface text-xs font-bold hover:bg-surface-container-lowest transition-colors flex items-center justify-center gap-1.5 shadow-sm">
                <span class="material-symbols-outlined text-base">download</span> PDF
              </button>
            </div>
          </div>
        </div>

        <!-- Spotlight 2: HBS -->
        <div class="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-sm flex flex-col justify-between hover:border-tertiary/50 transition-colors group overflow-hidden relative">
          <div class="absolute top-0 right-0 w-48 h-48 bg-tertiary/5 rounded-full translate-x-24 -translate-y-24 group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>
          <div class="space-y-6 relative z-10">
            <div class="flex items-start justify-between gap-4">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-[2.5rem] bg-tertiary/10 flex items-center justify-center text-tertiary font-black text-xl shadow-inner border border-tertiary/20">
                  HB
                </div>
                <div>
                  <span class="text-[10px] font-bold text-tertiary uppercase tracking-widest block mb-0.5">Girls Super-Selective</span>
                  <h3 class="text-base font-extrabold text-on-surface leading-snug">Henrietta Barnett (HBS)</h3>
                </div>
              </div>
              <span class="px-2.5 py-1 rounded-md bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-widest whitespace-nowrap shadow-sm">2024 Stage 1</span>
            </div>
            <p class="text-xs font-medium text-on-surface-variant leading-relaxed">
              Round 1 First-Filter Test: High-velocity VR (80 question types) + NVR Spatial Pattern Recognition.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 rounded-full border border-outline-variant/20 text-[10px] font-bold uppercase tracking-widest text-on-surface bg-surface shadow-sm">65 Qs</span>
              <span class="px-3 py-1 rounded-full border border-outline-variant/20 text-[10px] font-bold uppercase tracking-widest text-on-surface bg-surface shadow-sm">45 Mins</span>
              <span class="px-3 py-1 rounded-full border border-error/20 text-[10px] font-black uppercase tracking-widest text-error bg-error/10 shadow-sm">Diff 9.2</span>
            </div>
            <div class="p-4 rounded-[2.5rem] bg-surface border border-outline-variant/10 space-y-2 shadow-inner">
              <div class="flex justify-between items-center text-xs">
                <span class="font-bold text-outline-variant flex items-center gap-1.5 uppercase tracking-widest text-[10px]">
                  <span class="material-symbols-outlined text-sm">hourglass_top</span> Not Attempted
                </span>
                <span class="font-black text-on-surface-variant">—</span>
              </div>
              <div class="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden shadow-inner border border-outline-variant/10">
                <div class="bg-surface-container-high h-full rounded-full" style="width: 0%"></div>
              </div>
              <span class="text-[10px] font-medium text-outline-variant block text-right tracking-wide">Predicted SAS: 132</span>
            </div>
          </div>
          <div class="pt-6 mt-4 space-y-3 relative z-10 border-t border-outline-variant/20">
            <a href="#mock-simulation" class="w-full py-3 rounded-xl bg-primary text-on-primary text-xs font-bold shadow-sm hover:bg-primary/90 transition-opacity flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-lg">play_arrow</span>
              Launch Timed Exam
            </a>
            <div class="flex gap-3">
              <button onclick="alert('Downloading HBS 2024 Past Paper PDF...')" class="w-full py-2 rounded-xl border border-outline-variant/20 bg-surface text-on-surface text-xs font-bold hover:bg-surface-container-lowest transition-colors flex items-center justify-center gap-1.5 shadow-sm">
                <span class="material-symbols-outlined text-base">download</span> Download PDF
              </button>
            </div>
          </div>
        </div>

        <!-- Spotlight 3: Westminster -->
        <div class="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-sm flex flex-col justify-between hover:border-primary/50 transition-colors group overflow-hidden relative">
          <div class="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full translate-x-24 -translate-y-24 group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>
          <div class="space-y-6 relative z-10">
            <div class="flex items-start justify-between gap-4">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-[2.5rem] bg-primary/10 flex items-center justify-center text-primary font-black text-xl shadow-inner border border-primary/20">
                  WS
                </div>
                <div>
                  <span class="text-[10px] font-bold text-primary uppercase tracking-widest block mb-0.5">Independent Elite</span>
                  <h3 class="text-base font-extrabold text-on-surface leading-snug">Westminster Under (11+)</h3>
                </div>
              </div>
              <span class="px-2.5 py-1 rounded-md bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-widest whitespace-nowrap shadow-sm">2023 Challenge</span>
            </div>
            <p class="text-xs font-medium text-on-surface-variant leading-relaxed">
              Maths Paper 2 (Unseen Problem Solving) & Advanced Creative Writing / Classical Passage Analysis.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 rounded-full border border-outline-variant/20 text-[10px] font-bold uppercase tracking-widest text-on-surface bg-surface shadow-sm">40 Qs</span>
              <span class="px-3 py-1 rounded-full border border-outline-variant/20 text-[10px] font-bold uppercase tracking-widest text-on-surface bg-surface shadow-sm">75 Mins</span>
              <span class="px-3 py-1 rounded-full border border-error/20 text-[10px] font-black uppercase tracking-widest text-error bg-error/10 shadow-sm">Diff 9.8</span>
            </div>
            <div class="p-4 rounded-[2.5rem] bg-surface border border-outline-variant/10 space-y-2 shadow-inner">
              <div class="flex justify-between items-center text-xs">
                <span class="font-bold text-tertiary flex items-center gap-1.5 uppercase tracking-widest text-[10px]">
                  <span class="material-symbols-outlined text-sm">check_circle</span> Completed • 89% Mark
                </span>
                <span class="font-black text-primary">SAS 131</span>
              </div>
              <div class="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden shadow-inner border border-outline-variant/10">
                <div class="bg-primary h-full rounded-full" style="width: 89%"></div>
              </div>
              <span class="text-[10px] font-medium text-outline-variant block text-right tracking-wide">Westminster Interview Shortlist</span>
            </div>
          </div>
          <div class="pt-6 mt-4 space-y-3 relative z-10 border-t border-outline-variant/20">
            <a href="#scorecard" class="w-full py-3 rounded-xl bg-primary text-on-primary text-xs font-bold shadow-sm hover:bg-primary/90 transition-opacity flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-lg">analytics</span>
              Review Mark Scheme
            </a>
            <div class="flex gap-3">
              <a href="#mock-simulation" class="flex-1 py-2 text-center rounded-xl border border-outline-variant/20 bg-surface text-on-surface text-xs font-bold hover:bg-surface-container-lowest transition-colors shadow-sm">
                Re-run
              </a>
              <button onclick="alert('Downloading Westminster 2023 Paper PDF...')" class="flex-1 py-2 rounded-xl border border-outline-variant/20 bg-surface text-on-surface text-xs font-bold hover:bg-surface-container-lowest transition-colors flex items-center justify-center gap-1.5 shadow-sm">
                <span class="material-symbols-outlined text-base">download</span> PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comprehensive Consortium Archive Table -->
    <section class="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-sm space-y-6">
      <div class="flex items-center justify-between border-b border-outline-variant/20 pb-4">
        <h3 class="text-xl font-extrabold text-on-surface tracking-tight">
          Regional Consortium Archive & School Index
        </h3>
        <span class="text-xs font-bold text-outline-variant uppercase tracking-widest">Showing 6 of 480 calibrated papers</span>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left font-body-sm text-body-sm">
          <thead>
            <tr class="border-b border-outline-variant/20 text-outline-variant font-bold text-[10px] uppercase tracking-widest">
              <th class="py-4 px-4 font-bold">School / Consortium</th>
              <th class="py-4 px-4 font-bold">Subject</th>
              <th class="py-4 px-4 font-bold">Series Year</th>
              <th class="py-4 px-4 font-bold">Duration</th>
              <th class="py-4 px-4 font-bold">Leo's Status</th>
              <th class="py-4 px-4 text-right font-bold">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-outline-variant/10">
            <tr class="hover:bg-surface-container-lowest transition-colors">
              <td class="py-4 px-4">
                <span class="font-extrabold text-sm text-on-surface block tracking-tight">Sutton SET (Selective Eligibility Test)</span>
                <span class="block text-xs font-medium text-outline-variant mt-0.5">Wilson's, Wallington Boys, Sutton Grammar</span>
              </td>
              <td class="py-4 px-4"><span class="px-2.5 py-1 rounded-md bg-surface border border-outline-variant/20 text-on-surface text-[10px] font-bold uppercase tracking-widest shadow-sm">Maths & English</span></td>
              <td class="py-4 px-4 text-xs font-bold text-on-surface">2024 Stage 1</td>
              <td class="py-4 px-4 text-xs font-bold text-on-surface">2x 45 Mins</td>
              <td class="py-4 px-4"><span class="px-2.5 py-1 rounded-md bg-tertiary/10 border border-tertiary/20 text-tertiary text-[10px] font-black uppercase tracking-widest shadow-sm">96% • SAS 138</span></td>
              <td class="py-4 px-4 text-right space-x-2">
                <a href="#mock-simulation" class="px-4 py-2 rounded-xl bg-primary text-on-primary text-[10px] font-black uppercase tracking-widest hover:bg-primary/90 shadow-sm inline-block">Simulate</a>
                <a href="#scorecard" class="px-4 py-2 rounded-xl bg-surface border border-outline-variant/20 text-on-surface text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container-lowest shadow-sm inline-block">Review</a>
              </td>
            </tr>
            <tr class="hover:bg-surface-container-lowest transition-colors">
              <td class="py-4 px-4">
                <span class="font-extrabold text-sm text-on-surface block tracking-tight">CSSE Essex Consortium</span>
                <span class="block text-xs font-medium text-outline-variant mt-0.5">King Edward VI, Colchester Royal, Westcliff</span>
              </td>
              <td class="py-4 px-4"><span class="px-2.5 py-1 rounded-md bg-surface border border-outline-variant/20 text-on-surface text-[10px] font-bold uppercase tracking-widest shadow-sm">English SPaG</span></td>
              <td class="py-4 px-4 text-xs font-bold text-on-surface">2023 Official</td>
              <td class="py-4 px-4 text-xs font-bold text-on-surface">60 Mins</td>
              <td class="py-4 px-4"><span class="px-2.5 py-1 rounded-md bg-tertiary/10 border border-tertiary/20 text-tertiary text-[10px] font-black uppercase tracking-widest shadow-sm">91% • SAS 132</span></td>
              <td class="py-4 px-4 text-right space-x-2">
                <a href="#mock-simulation" class="px-4 py-2 rounded-xl bg-primary text-on-primary text-[10px] font-black uppercase tracking-widest hover:bg-primary/90 shadow-sm inline-block">Simulate</a>
                <a href="#scorecard" class="px-4 py-2 rounded-xl bg-surface border border-outline-variant/20 text-on-surface text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container-lowest shadow-sm inline-block">Review</a>
              </td>
            </tr>
            <tr class="hover:bg-surface-container-lowest transition-colors">
              <td class="py-4 px-4">
                <span class="font-extrabold text-sm text-on-surface block tracking-tight">Kent PESE Test (GL Assessment)</span>
                <span class="block text-xs font-medium text-outline-variant mt-0.5">Judd School, Skinners', Tonbridge Grammar</span>
              </td>
              <td class="py-4 px-4"><span class="px-2.5 py-1 rounded-md bg-surface border border-outline-variant/20 text-on-surface text-[10px] font-bold uppercase tracking-widest shadow-sm">Verbal & Non-Verbal</span></td>
              <td class="py-4 px-4 text-xs font-bold text-on-surface">2024 GL Spec</td>
              <td class="py-4 px-4 text-xs font-bold text-on-surface">50 Mins</td>
              <td class="py-4 px-4"><span class="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest shadow-sm">Ready • Untaken</span></td>
              <td class="py-4 px-4 text-right space-x-2">
                <a href="#mock-simulation" class="px-4 py-2 rounded-xl bg-primary text-on-primary text-[10px] font-black uppercase tracking-widest hover:bg-primary/90 shadow-sm inline-block">Launch</a>
              </td>
            </tr>
            <tr class="hover:bg-surface-container-lowest transition-colors">
              <td class="py-4 px-4">
                <span class="font-extrabold text-sm text-on-surface block tracking-tight">St. Olave's Grammar School</span>
                <span class="block text-xs font-medium text-outline-variant mt-0.5">Stage 2 Bespoke Examination</span>
              </td>
              <td class="py-4 px-4"><span class="px-2.5 py-1 rounded-md bg-surface border border-outline-variant/20 text-on-surface text-[10px] font-bold uppercase tracking-widest shadow-sm">Advanced Maths</span></td>
              <td class="py-4 px-4 text-xs font-bold text-on-surface">2023 Stage 2</td>
              <td class="py-4 px-4 text-xs font-bold text-on-surface">60 Mins</td>
              <td class="py-4 px-4"><span class="px-2.5 py-1 rounded-md bg-tertiary/10 border border-tertiary/20 text-tertiary text-[10px] font-black uppercase tracking-widest shadow-sm">92% • SAS 134</span></td>
              <td class="py-4 px-4 text-right space-x-2">
                <a href="#mock-simulation" class="px-4 py-2 rounded-xl bg-primary text-on-primary text-[10px] font-black uppercase tracking-widest hover:bg-primary/90 shadow-sm inline-block">Simulate</a>
                <a href="#scorecard" class="px-4 py-2 rounded-xl bg-surface border border-outline-variant/20 text-on-surface text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container-lowest shadow-sm inline-block">Review</a>
              </td>
            </tr>
            <tr class="hover:bg-surface-container-lowest transition-colors">
              <td class="py-4 px-4">
                <span class="font-extrabold text-sm text-on-surface block tracking-tight">King's College School (KCS Wimbledon)</span>
                <span class="block text-xs font-medium text-outline-variant mt-0.5">Independent 11+ Pre-Test</span>
              </td>
              <td class="py-4 px-4"><span class="px-2.5 py-1 rounded-md bg-surface border border-outline-variant/20 text-on-surface text-[10px] font-bold uppercase tracking-widest shadow-sm">VR & Reasoning</span></td>
              <td class="py-4 px-4 text-xs font-bold text-on-surface">2024 ISEB Spec</td>
              <td class="py-4 px-4 text-xs font-bold text-on-surface">45 Mins</td>
              <td class="py-4 px-4"><span class="px-2.5 py-1 rounded-md bg-tertiary/10 border border-tertiary/20 text-tertiary text-[10px] font-black uppercase tracking-widest shadow-sm">95% • SAS 137</span></td>
              <td class="py-4 px-4 text-right space-x-2">
                <a href="#mock-simulation" class="px-4 py-2 rounded-xl bg-primary text-on-primary text-[10px] font-black uppercase tracking-widest hover:bg-primary/90 shadow-sm inline-block">Simulate</a>
                <a href="#scorecard" class="px-4 py-2 rounded-xl bg-surface border border-outline-variant/20 text-on-surface text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container-lowest shadow-sm inline-block">Review</a>
              </td>
            </tr>
            <tr class="hover:bg-surface-container-lowest transition-colors">
              <td class="py-4 px-4">
                <span class="font-extrabold text-sm text-on-surface block tracking-tight">Birmingham King Edward VI Consortium</span>
                <span class="block text-xs font-medium text-outline-variant mt-0.5">Camp Hill Boys & Girls, Five Ways</span>
              </td>
              <td class="py-4 px-4"><span class="px-2.5 py-1 rounded-md bg-surface border border-outline-variant/20 text-on-surface text-[10px] font-bold uppercase tracking-widest shadow-sm">CEM All Disciplines</span></td>
              <td class="py-4 px-4 text-xs font-bold text-on-surface">2024 CEM Spec</td>
              <td class="py-4 px-4 text-xs font-bold text-on-surface">2x 50 Mins</td>
              <td class="py-4 px-4"><span class="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest shadow-sm">Untaken</span></td>
              <td class="py-4 px-4 text-right space-x-2">
                <a href="#mock-simulation" class="px-4 py-2 rounded-xl bg-primary text-on-primary text-[10px] font-black uppercase tracking-widest hover:bg-primary/90 shadow-sm inline-block">Launch</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
  `;
});
