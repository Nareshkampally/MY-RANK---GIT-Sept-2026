// Learnly 11+ — Target School Cut-off Predictor
LearnlyRouter.register('school-predictor', function() {
  return `
  <div class="flex flex-col w-full space-y-8 pb-12">
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
          Compare your current SAS trajectory against historical grammar school cut-offs.
        </p>
      </div>
      <div class="flex items-center gap-3 relative z-10">
        <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] px-5 py-2 shadow-sm text-center">
          <div class="text-[10px] font-bold text-white/80 uppercase tracking-widest">Your Current SAS</div>
          <div class="text-2xl font-black text-white">131</div>
        </div>
        <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] px-5 py-2 shadow-sm text-center">
          <div class="text-[10px] font-bold text-white/80 uppercase tracking-widest">Est. Total Score</div>
          <div class="text-2xl font-black text-secondary">262</div>
        </div>
      </div>
    </header>

    <!-- Top Match Analysis -->
    <section class="bg-gradient-to-br from-[#1e1b4b] to-[#312e81] rounded-[2.5rem] p-8 md:p-10 shadow-xl text-white relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
      <div class="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      
      <div class="flex-1 relative z-10">
        <h2 class="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-2 flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">radar</span> Top Match Probability
        </h2>
        <h3 class="text-4xl font-black mb-3">Queen Elizabeth's School</h3>
        <p class="text-indigo-100/80 text-sm leading-relaxed max-w-lg mb-6">
          Based on your last 5 full mock exams and current learning velocity, your estimated total score of 262 places you well within the safe zone for QE Boys (historical cut-off: ~235).
        </p>
        <div class="flex items-center gap-4">
          <button class="px-6 py-3 rounded-full bg-white text-indigo-900 font-bold hover:bg-gray-100 transition-colors shadow-lg text-sm">
            View Entry Requirements
          </button>
          <button class="px-6 py-3 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 transition-colors border border-white/20 text-sm backdrop-blur-md">
            Edit Target Schools
          </button>
        </div>
      </div>

      <div class="w-full md:w-72 shrink-0 relative z-10">
        <!-- Probability Gauge -->
        <div class="bg-black/20 rounded-3xl p-6 border border-white/10 backdrop-blur-md text-center">
          <div class="relative inline-block mb-2">
            <svg class="w-32 h-32 -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="8"/>
              <circle cx="50" cy="50" r="42" fill="none" stroke="#4ade80" stroke-width="8" stroke-linecap="round" stroke-dasharray="264" stroke-dashoffset="21" class="transition-all duration-1000"/>
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="text-3xl font-black text-white">92%</span>
            </div>
          </div>
          <div class="text-sm font-bold text-white">Highly Likely</div>
          <div class="text-[10px] text-indigo-200 mt-1">Safe zone margin: +27 pts</div>
        </div>
      </div>
    </section>

    <!-- School List Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <!-- School Card 1 -->
      <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/30 shadow-sm hover:border-primary/50 transition-colors group">
        <div class="flex items-start justify-between mb-4">
          <div class="w-12 h-12 rounded-[2.5rem] bg-primary/10 text-primary flex items-center justify-center">
            <span class="material-symbols-outlined text-2xl">school</span>
          </div>
          <span class="px-3 py-1 rounded-full bg-green-500/10 text-green-700 text-xs font-bold border border-green-500/20">Target 1</span>
        </div>
        <h3 class="text-lg font-extrabold text-on-surface mb-1">St. Olave's Grammar</h3>
        <p class="text-xs text-on-surface-variant mb-4">Orpington, Kent (CEM + Standard)</p>
        
        <div class="space-y-3 mb-5">
          <div class="flex justify-between items-center text-sm">
            <span class="text-outline-variant font-medium">Hist. Cut-off:</span>
            <span class="font-bold text-on-surface">~232</span>
          </div>
          <div class="flex justify-between items-center text-sm">
            <span class="text-outline-variant font-medium">Your Est Score:</span>
            <span class="font-bold text-primary">262</span>
          </div>
        </div>

        <div class="w-full h-2 bg-surface-container-high rounded-full overflow-hidden mb-2 relative">
          <div class="absolute top-0 bottom-0 left-[88%] w-0.5 bg-on-surface z-10" title="Cut-off Line"></div>
          <div class="h-full bg-green-500 rounded-full" style="width: 100%;"></div>
        </div>
        <div class="flex justify-between text-[10px] font-bold text-outline-variant uppercase">
          <span>Gap: +30 pts</span>
          <span class="text-green-600">Safe</span>
        </div>
      </div>

      <!-- School Card 2 -->
      <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/30 shadow-sm hover:border-primary/50 transition-colors group">
        <div class="flex items-start justify-between mb-4">
          <div class="w-12 h-12 rounded-[2.5rem] bg-tertiary/10 text-tertiary flex items-center justify-center">
            <span class="material-symbols-outlined text-2xl">school</span>
          </div>
          <span class="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-bold border border-outline-variant/30">Target 2</span>
        </div>
        <h3 class="text-lg font-extrabold text-on-surface mb-1">Henrietta Barnett</h3>
        <p class="text-xs text-on-surface-variant mb-4">Barnet, London (GL Assessment)</p>
        
        <div class="space-y-3 mb-5">
          <div class="flex justify-between items-center text-sm">
            <span class="text-outline-variant font-medium">Hist. Round 1:</span>
            <span class="font-bold text-on-surface">Top 300</span>
          </div>
          <div class="flex justify-between items-center text-sm">
            <span class="text-outline-variant font-medium">Your Rank:</span>
            <span class="font-bold text-tertiary">Top 4%</span>
          </div>
        </div>

        <div class="w-full h-2 bg-surface-container-high rounded-full overflow-hidden mb-2 relative">
          <div class="absolute top-0 bottom-0 left-[95%] w-0.5 bg-on-surface z-10" title="Cut-off Line"></div>
          <div class="h-full bg-amber-500 rounded-full" style="width: 85%;"></div>
        </div>
        <div class="flex justify-between text-[10px] font-bold text-outline-variant uppercase">
          <span>Gap: Borderline</span>
          <span class="text-amber-600">Possible</span>
        </div>
      </div>

      <!-- School Card 3 -->
      <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/30 shadow-sm hover:border-primary/50 transition-colors group border-dashed">
        <div class="h-full flex flex-col items-center justify-center text-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
          <div class="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
            <span class="material-symbols-outlined text-2xl">add</span>
          </div>
          <div>
            <h3 class="text-sm font-bold text-on-surface">Add Target School</h3>
            <p class="text-xs text-on-surface-variant mt-1">Select from 164 UK grammar schools</p>
          </div>
        </div>
      </div>

    </div>

    <!-- AI Advice Box -->
    <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/30 shadow-sm flex items-start gap-4">
      <div class="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-xl">smart_toy</span>
      </div>
      <div>
        <h3 class="text-sm font-bold text-on-surface mb-1">AI Admissions Strategy</h3>
        <p class="text-sm text-on-surface-variant leading-relaxed">
          While you are tracking safely for QE Boys, Henrietta Barnett's English comprehension section is historically tougher. I recommend adding a <strong>20-minute daily English drill</strong> focusing on archaic vocabulary (19th-century texts) to bridge the gap over the next 3 weeks.
        </p>
        <button class="mt-3 text-xs font-bold text-primary hover:underline" data-navigate="study-planner">Update Study Planner automatically</button>
      </div>
    </div>
  </div>
  `;
});
