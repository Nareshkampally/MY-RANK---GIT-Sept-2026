// Learnly 11+ — Full Mock Exam Simulation
LearnlyRouter.register('mock-simulation', function() {
  return `
  <div class="space-y-space-md">
    <section class="bg-gradient-to-r from-primary-container to-primary rounded-xl p-space-lg shadow-md text-on-primary">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-space-md">
          <span class="material-symbols-outlined text-3xl">assignment</span>
          <div><h1 class="font-headline-md text-headline-md font-bold">Mock Exam #05: Full Consortium Simulation</h1><span class="font-label-md text-label-md opacity-90">GL + CEM Composite • 100 Questions • 60 Minutes</span></div>
        </div>
        <div class="flex items-center gap-space-md">
          <div class="px-space-md py-2 rounded-full bg-on-primary/15 backdrop-blur-sm"><span class="font-label-timer text-label-timer font-bold">59:45</span></div>
          <button class="px-space-md py-2 rounded-full bg-on-primary/20 font-label-lg text-label-lg font-bold hover:bg-on-primary/30 transition-all" type="button">Pause</button>
        </div>
      </div>
      <div class="mt-space-md">
        <div class="flex justify-between font-label-md text-label-md opacity-80 mb-1"><span>Progress: 0/100</span><span>0% complete</span></div>
        <div class="w-full bg-on-primary/20 rounded-full h-2 overflow-hidden"><div class="bg-on-primary h-full rounded-full" style="width:0%"></div></div>
      </div>
    </section>
    <div class="bg-surface-container-lowest rounded-2xl p-space-2xl shadow-xl text-center">
      <div class="max-w-2xl mx-auto">
        <span class="material-symbols-outlined text-8xl text-primary mb-space-lg">assignment</span>
        <h2 class="font-headline-lg text-headline-lg text-on-surface mb-space-sm">Mock Exam Ready to Begin</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant mb-space-xl">This is a full-length simulation with all 4 subjects. Once started, the timer cannot be paused. Answer every question — unanswered questions count as incorrect.</p>
        <div class="grid grid-cols-4 gap-space-md mb-space-xl">
          ${[{subj:'Verbal Reasoning',qs:25,icon:'psychology'},{subj:'Mathematics',qs:25,icon:'functions'},{subj:'Non-Verbal',qs:25,icon:'view_in_ar'},{subj:'English',qs:25,icon:'menu_book'}].map(s=>`
          <div class="p-space-md rounded-xl bg-surface-container-low"><span class="material-symbols-outlined text-primary text-2xl mb-2">${s.icon}</span><br><span class="font-label-lg text-label-lg text-on-surface font-bold">${s.subj}</span><br><span class="font-label-md text-label-md text-on-surface-variant">${s.qs} questions</span></div>`).join('')}
        </div>
        <div class="bg-surface-container-low rounded-xl p-space-md mb-space-xl">
          <div class="flex items-center justify-center gap-space-xl">
            <div><span class="font-headline-md text-headline-md text-primary font-bold">60:00</span><br><span class="font-label-md text-label-md text-on-surface-variant">Time Limit</span></div>
            <div class="h-8 w-px bg-outline-variant/40"></div>
            <div><span class="font-headline-md text-headline-md text-secondary font-bold">+500</span><br><span class="font-label-md text-label-md text-on-surface-variant">XP Reward</span></div>
            <div class="h-8 w-px bg-outline-variant/40"></div>
            <div><span class="font-headline-md text-headline-md text-on-surface font-bold">SAS</span><br><span class="font-label-md text-label-md text-on-surface-variant">Scored</span></div>
          </div>
        </div>
        <button class="px-space-2xl py-3.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-xl hover:scale-105 transition-all text-lg" data-navigate="practice-arena" type="button">
          <span class="material-symbols-outlined text-xl mr-2 align-middle">play_arrow</span> Begin Full Mock Exam
        </button>
      </div>
    </div>
  </div>`;
});

// Scratchpad Mini Drawer
LearnlyRouter.register('mock-scratchpad', function() {
  return `
  <div class="space-y-space-md">
    <section class="flex items-center justify-between">
      <div class="flex items-center gap-space-md">
        <a href="#practice-arena" class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">arrow_back</span></a>
        <div><h1 class="font-headline-lg text-headline-lg text-on-surface">Scratchpad</h1><p class="font-body-md text-body-md text-on-surface-variant">Work out your calculations here</p></div>
      </div>
      <div class="flex items-center gap-space-sm">
        <button class="px-space-md py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md" type="button">Clear All</button>
        <button class="px-space-md py-1.5 rounded-full bg-primary text-on-primary font-label-md text-label-md font-bold" data-navigate="mock-scratchpad-full" type="button">Expand Full</button>
      </div>
    </section>
    <div class="bg-surface-container-lowest rounded-2xl shadow-md overflow-hidden" style="height:calc(100vh - 200px)">
      <div class="h-full bg-surface-container-low flex items-center justify-center relative">
        <div class="absolute top-4 left-4 flex gap-2 whiteboard-toolbar">
          ${['edit','straighten','circle','text_fields','undo','redo'].map(t=>`<button class="w-9 h-9 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all flex items-center justify-center" type="button"><span class="material-symbols-outlined text-base">${t}</span></button>`).join('')}
        </div>
        <div class="absolute top-4 right-4 flex gap-2">
          ${['#0b1c30','#4f46e5','#ba1a1a','#006e4b'].map(c=>`<button class="w-7 h-7 rounded-full border-2 border-surface-container-highest" style="background:${c}" type="button"></button>`).join('')}
        </div>
        <div class="text-center opacity-30"><span class="material-symbols-outlined text-7xl text-on-surface-variant">draw</span><p class="font-body-md text-body-md text-on-surface-variant mt-2">Draw here to work out your answer</p></div>
      </div>
    </div>
  </div>`;
});

// Full Scratchpad
LearnlyRouter.register('mock-scratchpad-full', function() {
  return `
  <div class="fixed inset-0 z-50 bg-surface-container-lowest flex flex-col">
    <div class="flex items-center justify-between px-space-lg py-space-sm border-b border-surface-container-high">
      <div class="flex items-center gap-space-md">
        <button class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary" data-navigate="practice-arena" type="button"><span class="material-symbols-outlined">close</span></button>
        <span class="font-headline-sm text-headline-sm text-on-surface">Full Scratchpad</span>
      </div>
      <div class="flex items-center gap-space-sm">
        <div class="flex gap-1 whiteboard-toolbar">
          ${['edit','straighten','circle','text_fields','undo','redo','delete'].map(t=>`<button class="w-9 h-9 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all flex items-center justify-center" type="button"><span class="material-symbols-outlined text-base">${t}</span></button>`).join('')}
        </div>
        <div class="h-6 w-px bg-outline-variant/40 mx-1"></div>
        ${['#0b1c30','#4f46e5','#ba1a1a','#006e4b','#855300'].map(c=>`<button class="w-7 h-7 rounded-full border-2 border-surface-container-highest" style="background:${c}" type="button"></button>`).join('')}
        <div class="h-6 w-px bg-outline-variant/40 mx-1"></div>
        <button class="px-space-md py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md" type="button">Clear All</button>
      </div>
    </div>
    <div class="flex-1 bg-surface-container-low flex items-center justify-center"><div class="text-center opacity-20"><span class="material-symbols-outlined text-9xl text-on-surface-variant">draw</span><p class="font-headline-sm text-headline-sm text-on-surface-variant mt-space-md">Full-screen scratchpad — draw freely</p></div></div>
  </div>`;
});

// Split View (Question + Scratchpad)
LearnlyRouter.register('mock-splitview', function() {
  return `
  <div class="space-y-space-md">
    <section class="flex items-center justify-between">
      <div class="flex items-center gap-space-md">
        <a href="#practice-arena" class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">arrow_back</span></a>
        <div><h1 class="font-headline-sm text-headline-sm text-on-surface">Split View: Question + Scratchpad</h1></div>
      </div>
      <div class="flex items-center gap-space-sm">
        <div class="px-space-md py-1.5 rounded-full bg-error-container/60 text-on-error-container timer-warning flex items-center gap-2"><span class="material-symbols-outlined text-base" style="font-variation-settings:'FILL' 1">timer</span><span class="font-label-timer text-label-timer font-bold">14:28</span></div>
      </div>
    </section>
    <div class="grid grid-cols-2 gap-space-md" style="height:calc(100vh - 180px)">
      <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md overflow-y-auto">
        <span class="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg font-bold mb-space-sm">Q14</span>
        <h2 class="font-headline-sm text-headline-sm text-on-surface mb-space-md">Select the pair of words that are most opposite in meaning:</h2>
        <div class="space-y-space-sm">
          ${['Sagacious & Impetuous','Prudent & Reckless','Astute & Foolish','Sagacious & Foolish'].map((opt,i)=>`
          <button class="answer-bubble w-full flex items-center gap-space-md p-space-md rounded-xl border-2 border-surface-container-high bg-surface-container-lowest" type="button">
            <span class="w-10 h-10 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center font-label-lg text-label-lg font-bold flex-shrink-0">${String.fromCharCode(65+i)}</span>
            <span class="font-body-md text-body-md text-on-surface">${opt}</span>
          </button>`).join('')}
        </div>
      </div>
      <div class="bg-surface-container-lowest rounded-2xl shadow-md overflow-hidden flex flex-col">
        <div class="px-space-md py-space-sm flex items-center justify-between border-b border-surface-container-high bg-surface-container-low">
          <span class="font-label-lg text-label-lg text-on-surface font-bold">Scratchpad</span>
          <div class="flex gap-1">
            ${['edit','undo','delete'].map(t=>`<button class="w-8 h-8 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-primary transition-all flex items-center justify-center" type="button"><span class="material-symbols-outlined text-sm">${t}</span></button>`).join('')}
          </div>
        </div>
        <div class="flex-1 bg-surface-container-low flex items-center justify-center"><div class="text-center opacity-20"><span class="material-symbols-outlined text-6xl text-on-surface-variant">draw</span></div></div>
      </div>
    </div>
  </div>`;
});
