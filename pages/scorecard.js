// Learnly 11+ — Diagnostic Scorecard & Mock Review
LearnlyRouter.register('scorecard', function() {
  const history = window.ScholarWatch ? window.ScholarWatch.getTestHistory() : [];
  const latestTest = (history && history.length > 0) ? history[0] : null;
  const startTimeStr = latestTest ? window.ScholarWatch.formatTime(new Date(latestTest.startTime), true) : '10:15:00 AM';
  const finishTimeStr = latestTest ? window.ScholarWatch.formatTime(new Date(latestTest.finishTime), true) : '10:42:30 AM';
  const durationStr = latestTest ? window.ScholarWatch.formatDuration(latestTest.durationSeconds) : '27m 30s';
  const pacingStr = latestTest && latestTest.pacing ? latestTest.pacing : '48s / question (Optimal)';

  return `
  <section class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md mb-space-xl">
    <div>
      <a href="#mock-exams" class="font-label-md text-label-md text-primary flex items-center gap-1 mb-1"><span class="material-symbols-outlined text-sm">arrow_back</span> Back to Mock Exams</a>
      <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Diagnostic Scorecard — Mock #04</h1>
      <p class="font-body-md text-body-md text-on-surface-variant mt-1">GL Assessment — Verbal Reasoning Focus • Verified Proctor Timecard</p>
    </div>
    <div class="flex items-center gap-space-sm">
      <button class="flex items-center gap-2 px-space-lg py-2.5 rounded-full bg-surface-container-high text-primary font-label-lg text-label-lg font-bold hover:bg-primary-fixed transition-all" data-navigate="mistake-mastery" type="button"><span class="material-symbols-outlined text-base">refresh</span> Retry Mistakes</button>
      <button data-open-watch-modal class="flex items-center gap-2 px-space-lg py-2.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:opacity-90 transition-all" type="button"><span class="material-symbols-outlined text-base">schedule</span> View Exam Watchcard</button>
    </div>
  </section>

  <!-- Official Exam Watch & Proctor Verification Card -->
  <div class="bg-surface-container-lowest rounded-3xl p-space-lg shadow-xl border border-outline-variant/30 mb-space-xl relative overflow-hidden">
    <div class="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-outline-variant/20 mb-4">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-2xl bg-tertiary-container text-on-tertiary flex items-center justify-center shadow-md">
          <span class="material-symbols-outlined text-2xl">verified</span>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold uppercase">Official Proctor Timecard</span>
            <span class="text-xs text-on-surface-variant font-medium">Session ID: #EXAM-VR-4921</span>
          </div>
          <h2 class="text-lg font-extrabold text-on-surface tracking-tight mt-0.5">Test Timing &amp; Pacing Verification</h2>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-xs font-bold text-tertiary">
          <span class="w-2 h-2 rounded-full bg-tertiary"></span> Verified Audit Complete
        </span>
      </div>
    </div>

    <!-- Timing Metrics Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-space-md">
      <div class="bg-surface-container-low p-space-md rounded-2xl border border-outline-variant/15">
        <div class="flex items-center gap-1.5 text-on-surface-variant text-xs font-bold uppercase mb-1">
          <span class="material-symbols-outlined text-sm text-primary">play_circle</span> Test Started
        </div>
        <div class="font-mono text-xl sm:text-2xl font-black text-on-surface">${startTimeStr}</div>
        <span class="text-[11px] text-outline">Precise clock capture</span>
      </div>

      <div class="bg-surface-container-low p-space-md rounded-2xl border border-outline-variant/15">
        <div class="flex items-center gap-1.5 text-on-surface-variant text-xs font-bold uppercase mb-1">
          <span class="material-symbols-outlined text-sm text-tertiary">check_circle</span> Test Finished
        </div>
        <div class="font-mono text-xl sm:text-2xl font-black text-tertiary">${finishTimeStr}</div>
        <span class="text-[11px] text-outline">Submission verified</span>
      </div>

      <div class="bg-surface-container-low p-space-md rounded-2xl border border-outline-variant/15">
        <div class="flex items-center gap-1.5 text-on-surface-variant text-xs font-bold uppercase mb-1">
          <span class="material-symbols-outlined text-sm text-primary">hourglass_bottom</span> Total Elapsed
        </div>
        <div class="font-mono text-xl sm:text-2xl font-black text-primary">${durationStr}</div>
        <span class="text-[11px] text-tertiary font-bold">13m under 35m limit</span>
      </div>

      <div class="bg-surface-container-low p-space-md rounded-2xl border border-outline-variant/15">
        <div class="flex items-center gap-1.5 text-on-surface-variant text-xs font-bold uppercase mb-1">
          <span class="material-symbols-outlined text-sm text-secondary">speed</span> Speed &amp; Pacing
        </div>
        <div class="font-mono text-lg sm:text-xl font-black text-on-surface">48s <span class="text-xs font-normal text-outline">/ question</span></div>
        <span class="text-[11px] text-tertiary font-bold">Optimal Exam Cadence</span>
      </div>
    </div>
  </div>


  <!-- Score Overview -->
  <div class="grid grid-cols-1 md:grid-cols-4 gap-space-md mb-space-xl">
    <div class="p-space-lg bg-surface-container-lowest rounded-xl elevation-1 text-center">
      <span class="font-label-md text-label-md text-on-surface-variant uppercase">Total Score</span>
      <div class="font-display-hero text-display-hero text-primary font-extrabold">92<span class="text-outline font-headline-sm">/100</span></div>
      <span class="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold">Excellent</span>
    </div>
    <div class="p-space-lg bg-surface-container-lowest rounded-xl elevation-1 text-center">
      <span class="font-label-md text-label-md text-on-surface-variant uppercase">SAS Score</span>
      <div class="font-display-hero text-display-hero text-primary font-extrabold">128</div>
      <span class="font-label-md text-label-md text-tertiary font-bold">Top 4% Nationally</span>
    </div>
    <div class="p-space-lg bg-surface-container-lowest rounded-xl elevation-1 text-center">
      <span class="font-label-md text-label-md text-on-surface-variant uppercase">Time Used</span>
      <div class="font-display-hero text-display-hero text-on-surface font-extrabold">47<span class="text-outline font-headline-sm">min</span></div>
      <span class="font-label-md text-label-md text-tertiary font-bold">13 min under limit</span>
    </div>
    <div class="p-space-lg bg-surface-container-lowest rounded-xl elevation-1 text-center">
      <span class="font-label-md text-label-md text-on-surface-variant uppercase">Accuracy</span>
      <div class="font-display-hero text-display-hero text-tertiary-container font-extrabold">92%</div>
      <span class="font-label-md text-label-md text-primary font-bold">+5% from Mock #03</span>
    </div>
  </div>

  <!-- Subject Breakdown -->
  <h3 class="font-headline-md text-headline-md text-on-surface mb-space-md">Subject Breakdown</h3>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-space-md mb-space-xl">
    ${[
      {subj:'Verbal Reasoning',score:24,total:25,pct:96,icon:'psychology',color:'primary'},
      {subj:'Mathematics',score:22,total:25,pct:88,icon:'functions',color:'tertiary-container'},
      {subj:'Non-Verbal',score:22,total:25,pct:88,icon:'view_in_ar',color:'secondary'},
      {subj:'English',score:24,total:25,pct:96,icon:'menu_book',color:'primary'},
    ].map(s=>`
    <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-md">
      <div class="flex items-center gap-space-sm mb-space-sm">
        <span class="material-symbols-outlined text-${s.color}">${s.icon}</span>
        <span class="font-label-lg text-label-lg text-on-surface font-bold">${s.subj}</span>
      </div>
      <div class="flex items-baseline gap-1"><span class="font-headline-lg text-headline-lg text-${s.color} font-extrabold">${s.score}</span><span class="text-outline">/ ${s.total}</span></div>
      <div class="w-full bg-surface-container-high rounded-full h-2 mt-space-sm overflow-hidden"><div class="bg-${s.color} h-full rounded-full" style="width:${s.pct}%"></div></div>
    </div>`).join('')}
  </div>

  <!-- Question-by-Question Review -->
  <h3 class="font-headline-md text-headline-md text-on-surface mb-space-md">Question-by-Question Review</h3>
  <div class="bg-surface-container-lowest rounded-2xl shadow-md overflow-hidden mb-space-xl">
    <div class="grid grid-cols-12 gap-0 p-space-md bg-surface-container-low font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
      <div class="col-span-1">#</div><div class="col-span-3">Topic</div><div class="col-span-2">Subject</div><div class="col-span-2">Your Answer</div><div class="col-span-2">Correct</div><div class="col-span-1">Time</div><div class="col-span-1">Status</div>
    </div>
    ${Array.from({length:10},(_, i)=>{
      const correct = i !== 2 && i !== 7;
      const topics = ['Synonyms in Context','Algebraic Sequences','3D Net Folding','Reading Comprehension','Word Codes','Ratio & Proportion','Shape Analogies','Compound Words','Decimal Division','Punctuation Rules'];
      const subjects = ['VR','Maths','NVR','English','VR','Maths','NVR','VR','Maths','English'];
      const answers = ['A','C','B','D','A','B','C','D','A','B'];
      const corrects = ['A','C','D','D','A','B','C','A','A','B'];
      return `
      <div class="grid grid-cols-12 gap-0 p-space-md border-t border-surface-container-high/40 items-center ${!correct?'bg-error-container/10':''}">
        <div class="col-span-1 font-label-lg text-label-lg text-on-surface font-bold">Q${i+1}</div>
        <div class="col-span-3 font-body-sm text-body-sm text-on-surface">${topics[i]}</div>
        <div class="col-span-2"><span class="px-2 py-0.5 rounded-full bg-surface-container-high font-label-md text-label-md">${subjects[i]}</span></div>
        <div class="col-span-2 font-label-lg text-label-lg ${correct?'text-tertiary-container':'text-error'} font-bold">${answers[i]}</div>
        <div class="col-span-2 font-label-lg text-label-lg text-on-surface font-bold">${corrects[i]}</div>
        <div class="col-span-1 font-label-md text-label-md text-on-surface-variant">${20+i*5}s</div>
        <div class="col-span-1"><span class="material-symbols-outlined text-base ${correct?'text-tertiary-container':'text-error'}">${correct?'check_circle':'cancel'}</span></div>
      </div>`;
    }).join('')}
  </div>

  <!-- Improvement Recommendations -->
  <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md">
    <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md flex items-center gap-2"><span class="material-symbols-outlined text-primary">auto_awesome</span> AI Improvement Recommendations</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
      <div class="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high/40">
        <span class="font-label-lg text-label-lg text-error font-bold flex items-center gap-1 mb-1"><span class="material-symbols-outlined text-sm">warning</span> 3D Net Folding</span>
        <p class="font-body-sm text-body-sm text-on-surface-variant">You've missed 3 net-folding questions in a row. Try the dedicated Spatial Drill to build muscle memory.</p>
        <button class="mt-space-sm px-space-md py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md font-bold shadow-sm" data-navigate="drill-spatial">Start Spatial Drill</button>
      </div>
      <div class="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high/40">
        <span class="font-label-lg text-label-lg text-secondary font-bold flex items-center gap-1 mb-1"><span class="material-symbols-outlined text-sm">tips_and_updates</span> Compound Words</span>
        <p class="font-body-sm text-body-sm text-on-surface-variant">Compound word detection is a common VR trap. Review the Cloze Trap Buster drill for targeted practice.</p>
        <button class="mt-space-sm px-space-md py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md font-bold shadow-sm" data-navigate="drill-cloze">Start Cloze Drill</button>
      </div>
    </div>
  </div>`;
});
