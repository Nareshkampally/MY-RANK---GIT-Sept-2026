// Learnly 11+ — Mock Exams & Test Management
LearnlyRouter.register('mock-exams', function() {
  return `
  <section class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md mb-space-xl">
    <div>
      <div class="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md mb-1">
        <span>EXAM CENTRE</span><span class="text-outline-variant">•</span>
        <span class="text-primary font-bold">CEM &amp; GL FORMAT</span>
      </div>
      <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Mock Exams &amp; Test Management</h1>
    </div>
    <div class="flex items-center gap-space-sm">
      <div class="inline-flex p-1 bg-surface-container-high rounded-full shadow-sm">
        <button class="px-space-md py-1.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-primary font-bold shadow-sm">All Exams</button>
        <button class="px-space-md py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface">Upcoming</button>
        <button class="px-space-md py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface">Completed</button>
      </div>
    </div>
  </section>

  <!-- Upcoming Mock -->
  <div class="bg-gradient-to-br from-primary-container to-primary rounded-2xl p-space-xl shadow-xl mb-space-xl relative overflow-hidden">
    <div class="absolute -right-16 -top-16 w-64 h-64 bg-on-primary/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-lg">
      <div class="text-on-primary">
        <div class="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-on-primary/15 mb-space-sm backdrop-blur-sm">
          <span class="material-symbols-outlined text-sm">schedule</span>
          <span class="font-label-md text-label-md uppercase tracking-wider">Next Exam — In 18 Days</span>
        </div>
        <h2 class="font-headline-lg text-headline-lg font-extrabold">Mock Exam #05: Full Consortium Simulation</h2>
        <p class="font-body-md text-body-md opacity-90 mt-space-xs">Complete GL + CEM composite format — 100 questions across all 4 subjects. Timed at 60 minutes.</p>
        <div class="flex items-center gap-space-md mt-space-md">
          <span class="flex items-center gap-1 font-label-lg text-label-lg"><span class="material-symbols-outlined text-base">quiz</span> 100 Questions</span>
          <span class="flex items-center gap-1 font-label-lg text-label-lg"><span class="material-symbols-outlined text-base">timer</span> 60 Minutes</span>
          <span class="flex items-center gap-1 font-label-lg text-label-lg"><span class="material-symbols-outlined text-base">stars</span> +500 XP</span>
        </div>
      </div>
      <button class="px-space-xl py-3 rounded-full bg-on-primary text-primary font-label-lg text-label-lg font-bold shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 flex-shrink-0" data-navigate="mock-simulation" type="button">
        <span class="material-symbols-outlined text-xl">play_arrow</span> Start Full Exam
      </button>
    </div>
  </div>

  <!-- Completed Exams Grid -->
  <h3 class="font-headline-md text-headline-md text-on-surface mb-space-md">Completed Mock Exams</h3>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-md">
    ${[
      { num:'04', title:'GL Assessment — Verbal Reasoning Focus', score:92, total:100, sas:128, date:'2 days ago', subjects:['VR 96%','Maths 90%','NVR 88%','Eng 94%'] },
      { num:'03', title:'CEM Standard — Mixed Paper', score:87, total:100, sas:124, date:'1 week ago', subjects:['VR 92%','Maths 84%','NVR 82%','Eng 90%'] },
      { num:'02', title:'GL Assessment — NVR & Maths Heavy', score:84, total:100, sas:120, date:'2 weeks ago', subjects:['VR 88%','Maths 86%','NVR 78%','Eng 84%'] },
      { num:'01', title:'Diagnostic Baseline Assessment', score:76, total:100, sas:112, date:'1 month ago', subjects:['VR 80%','Maths 74%','NVR 72%','Eng 78%'] },
    ].map(exam => `
    <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md card-hover flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-space-sm">
          <span class="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold">Mock #${exam.num}</span>
          <span class="font-label-md text-label-md text-on-surface-variant">${exam.date}</span>
        </div>
        <h4 class="font-headline-sm text-headline-sm text-on-surface mb-space-xs">${exam.title}</h4>
        <div class="flex items-baseline gap-2 mb-space-sm">
          <span class="font-headline-lg text-headline-lg text-primary font-extrabold">${exam.score}</span>
          <span class="font-body-md text-body-md text-outline">/ ${exam.total}</span>
          <span class="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-bold ml-auto">SAS ${exam.sas}</span>
        </div>
        <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden mb-space-md">
          <div class="bg-primary h-full rounded-full" style="width:${exam.score}%"></div>
        </div>
        <div class="grid grid-cols-2 gap-space-xs">
          ${exam.subjects.map(s => `<span class="font-label-md text-label-md text-on-surface-variant">${s}</span>`).join('')}
        </div>
      </div>
      <div class="flex items-center gap-space-sm mt-space-lg pt-space-sm border-t border-surface-container-high/40">
        <button class="flex-1 px-space-md py-2 rounded-full bg-surface-container-high text-primary font-label-lg text-label-lg font-bold hover:bg-primary-fixed transition-all text-center" data-navigate="scorecard">Review</button>
        <button class="flex-1 px-space-md py-2 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-sm hover:scale-105 transition-all text-center" data-navigate="mistake-mastery">Retry Mistakes</button>
      </div>
    </div>`).join('')}
  </div>`;
});
