// Learnly 11+ — Drill #2: Qualifier & Negation Cloze Trap Buster
LearnlyRouter.register('drill-cloze', function() {
  return `
  <div class="space-y-8">
    <section class="bg-surface-container-lowest rounded-[2.5rem] p-8 border border-outline-variant/30 shadow-sm flex items-center justify-between">
      <div class="flex items-center gap-6">
        <a href="#dashboard" class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">arrow_back</span></a>
        <div><div class="flex items-center gap-2"><span class="px-2.5 py-1 rounded-full bg-surface-container-high text-primary text-xs font-bold uppercase tracking-widest shadow-sm">Verbal Reasoning</span><span class="px-2.5 py-1 rounded-full bg-error-container text-on-error-container text-xs font-bold uppercase tracking-widest shadow-sm ml-2">Trap Buster</span></div>
        <h1 class="text-3xl text-on-surface font-extrabold tracking-tight mt-1">Drill #2: Qualifier &amp; Negation Cloze</h1></div>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2 px-6 py-2 rounded-full bg-surface-container-low shadow-sm border border-outline-variant/20"><span class="font-bold text-primary">Question 1 / 10</span></div>
        <div class="flex items-center gap-2 px-6 py-2 rounded-full bg-tertiary/10 border border-tertiary/20 shadow-sm"><span class="material-symbols-outlined text-tertiary text-base">timer</span><span class="font-bold text-tertiary">7:15</span></div>
      </div>
    </section>
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-12 lg:col-span-6">
        <div class="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/30">
          <div class="flex items-center gap-2 mb-6"><span class="material-symbols-outlined text-primary">menu_book</span><span class="text-lg text-on-surface font-extrabold">Passage Context</span></div>
          <div class="p-6 rounded-[2.5rem] bg-surface-container-low border border-outline-variant/20 text-lg text-on-surface leading-relaxed shadow-inner">
            <p>The expedition was <em class="text-primary font-semibold">hardly</em> a failure, despite the harsh conditions encountered in the Arctic. The researchers <em class="text-secondary font-semibold">___________</em> to collect enough samples to support their hypothesis about glacial erosion patterns.</p>
            <p class="mt-3">However, the <em class="text-primary font-semibold">lack</em> of proper equipment meant that some of their findings were <em class="text-secondary font-semibold">___________</em> conclusive.</p>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-6 space-y-6">
        <div class="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/30">
          <h2 class="text-2xl text-on-surface font-extrabold mb-2 tracking-tight">Fill in the blanks with the most appropriate word pair:</h2>
          <p class="text-sm text-on-surface-variant font-medium mb-6">Consider the negation qualifiers 'hardly' and 'lack' — they reverse the expected meaning.</p>
          <div class="space-y-3">
            ${[
              'managed / not entirely',
              'failed / completely',
              'struggled / barely',
              'refused / entirely',
              'attempted / somewhat',
            ].map((opt,i)=>`
            <button class="answer-bubble w-full flex items-center gap-4 p-4 rounded-[2.5rem] border-2 border-outline-variant/30 bg-surface hover:border-primary/50 transition-colors shadow-sm" type="button">
              <span class="w-12 h-12 rounded-xl bg-surface-container-high text-on-surface-variant flex items-center justify-center text-lg font-extrabold flex-shrink-0 shadow-inner">${String.fromCharCode(65+i)}</span>
              <span class="text-base font-bold text-on-surface">${opt}</span>
            </button>`).join('')}
          </div>
        </div>
        <div class="flex justify-between">
          <button class="px-8 py-3 rounded-full bg-surface border border-outline-variant/30 text-on-surface-variant font-bold shadow-sm hover:bg-surface-container transition-all">← Previous</button>
          <button class="px-8 py-3 rounded-full bg-primary text-on-primary font-extrabold shadow-md hover:scale-105 transition-all">Next →</button>
        </div>
      </div>
    </div>
  </div>`;
});

// Drill #3: Section B Timed Re-run
LearnlyRouter.register('drill-timed', function() {
  return `
  <div class="space-y-8">
    <section class="bg-surface-container-lowest rounded-[2.5rem] p-8 shadow-sm border border-outline-variant/30 flex items-center justify-between">
      <div class="flex items-center gap-6">
        <a href="#mock-exams" class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">arrow_back</span></a>
        <div><span class="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest shadow-sm">Section B Re-run</span>
        <h1 class="text-3xl text-on-surface font-extrabold tracking-tight mt-1">Drill #3: Section B Timed Re-run</h1></div>
      </div>
      <div class="flex items-center gap-4">
        <div class="px-6 py-2 rounded-full bg-error-container/60 text-on-error-container timer-warning flex items-center gap-2 shadow-sm border border-error-container">
          <span class="material-symbols-outlined text-base" style="font-variation-settings:'FILL' 1">timer</span>
          <span class="text-lg font-bold">12:00</span>
        </div>
      </div>
    </section>
    <div class="bg-surface-container-lowest rounded-[2.5rem] p-12 shadow-sm border border-outline-variant/30 text-center">
      <div class="max-w-lg mx-auto">
        <span class="material-symbols-outlined text-6xl text-primary mb-6">rocket_launch</span>
        <h2 class="text-4xl text-on-surface font-extrabold tracking-tight mb-4">Ready to Re-run Section B?</h2>
        <p class="text-lg text-on-surface-variant mb-8 leading-relaxed">You'll retry the 10 questions from Section B (Logical Antonyms) under timed conditions. Focus on the 2 you missed last time.</p>
        <div class="flex items-center justify-center gap-6 mb-8">
          <div class="p-6 rounded-[2.5rem] bg-surface-container-low shadow-inner border border-outline-variant/10 text-center"><span class="text-3xl text-primary font-black">10</span><br><span class="text-xs font-bold text-outline-variant uppercase tracking-widest mt-1 block">Questions</span></div>
          <div class="p-6 rounded-[2.5rem] bg-surface-container-low shadow-inner border border-outline-variant/10 text-center"><span class="text-3xl text-error font-black">12:00</span><br><span class="text-xs font-bold text-outline-variant uppercase tracking-widest mt-1 block">Time Limit</span></div>
          <div class="p-6 rounded-[2.5rem] bg-surface-container-low shadow-inner border border-outline-variant/10 text-center"><span class="text-3xl text-secondary font-black">+80</span><br><span class="text-xs font-bold text-outline-variant uppercase tracking-widest mt-1 block">XP Reward</span></div>
        </div>
        <button class="px-10 py-4 rounded-full bg-primary text-on-primary font-extrabold shadow-md hover:scale-105 transition-all text-lg" data-navigate="practice-arena" type="button">Start Timed Re-run</button>
      </div>
    </div>
  </div>`;
});

// Drill Score Analysis
LearnlyRouter.register('drill-score', function() {
  return `
  <div class="space-y-12">
    <a href="#analytics" class="font-bold text-sm text-primary flex items-center gap-2"><span class="material-symbols-outlined text-sm">arrow_back</span> Back to Analytics</a>
    <div class="bg-surface-container-lowest rounded-[2.5rem] p-10 shadow-sm border border-outline-variant/30 text-center">
      <span class="material-symbols-outlined text-6xl text-tertiary mb-4">emoji_events</span>
      <h1 class="text-4xl text-on-surface font-black tracking-tight">Drill #2 Score Analysis</h1>
      <p class="text-lg text-on-surface-variant font-medium mt-2">Qualifier & Negation Cloze Trap Buster</p>
      <div class="flex items-center justify-center gap-12 mt-8">
        <div><span class="text-6xl text-primary font-black">10</span><span class="text-outline text-3xl font-bold"> / 12</span><p class="text-xs font-bold text-outline-variant uppercase tracking-widest mt-2">Correct</p></div>
        <div><span class="text-6xl text-tertiary font-black">83%</span><p class="text-xs font-bold text-outline-variant uppercase tracking-widest mt-2">Accuracy</p></div>
        <div><span class="text-6xl text-secondary font-black">7:42</span><p class="text-xs font-bold text-outline-variant uppercase tracking-widest mt-2">Total Time</p></div>
      </div>
    </div>
    <div class="bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/30">
      <h3 class="text-2xl text-on-surface font-extrabold tracking-tight mb-6">Cloze Mastery Breakdown</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${[{cat:'Negation Qualifiers',score:'4/4',pct:100,color:'tertiary'},{cat:'Double Negatives',score:'3/4',pct:75,color:'secondary'},{cat:'Context Inference',score:'3/4',pct:75,color:'secondary'}].map(c=>`
        <div class="p-6 rounded-[2.5rem] bg-surface border border-outline-variant/10 shadow-inner"><span class="text-sm text-on-surface font-bold">${c.cat}</span><div class="text-3xl text-${c.color} font-black mt-2">${c.score}</div>
        <div class="w-full bg-surface-container-high rounded-full h-2 mt-4 overflow-hidden"><div class="bg-${c.color} h-full rounded-full" style="width:${c.pct}%"></div></div></div>`).join('')}
      </div>
    </div>
    <div class="flex justify-center gap-6">
      <button class="px-8 py-3 rounded-full bg-surface-container-low border border-outline-variant/30 text-on-surface font-extrabold shadow-sm hover:border-primary/50 transition-colors" data-navigate="mistake-mastery">Retry Mistakes</button>
      <button class="px-8 py-3 rounded-full bg-primary text-on-primary font-extrabold shadow-md hover:scale-105 transition-all" data-navigate="dashboard">Back to Dashboard</button>
    </div>
  </div>`;
});

// Drill Completion
LearnlyRouter.register('drill-complete', function() {
  return `
  <div class="flex items-center justify-center min-h-[70vh]">
    <div class="bg-surface-container-lowest rounded-[2.5rem] p-12 shadow-xl border border-outline-variant/30 text-center max-w-xl w-full relative overflow-hidden group">
      <div class="absolute -right-16 -top-16 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
      <div class="absolute -left-12 -bottom-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
      <div class="relative z-10">
        <span class="material-symbols-outlined text-[80px] text-secondary mb-6" style="font-variation-settings:'FILL' 1">celebration</span>
        <h1 class="text-4xl md:text-5xl text-on-surface font-black tracking-tight">Drill Complete!</h1>
        <p class="text-lg text-on-surface-variant font-medium mt-3">You've completed the 3D Spatial Net Folding Rapid-Fire drill</p>
        <div class="flex items-center justify-center gap-8 mt-10">
          <div class="p-6 rounded-[2.5rem] bg-surface border border-outline-variant/10 shadow-inner"><span class="text-4xl text-primary font-black">8</span><span class="text-outline text-xl font-bold">/10</span><p class="text-[10px] font-bold text-outline-variant uppercase tracking-widest mt-2">Correct</p></div>
          <div class="p-6 rounded-[2.5rem] bg-surface border border-outline-variant/10 shadow-inner"><span class="text-4xl text-tertiary font-black">80%</span><p class="text-[10px] font-bold text-outline-variant uppercase tracking-widest mt-2">Accuracy</p></div>
          <div class="p-6 rounded-[2.5rem] bg-secondary/10 border border-secondary/20 shadow-inner"><span class="text-4xl text-secondary font-black">+60</span><p class="text-[10px] font-bold text-outline-variant uppercase tracking-widest mt-2">XP Earned</p></div>
        </div>
        <div class="flex items-center justify-center gap-4 mt-10">
          <button class="px-8 py-3 rounded-full bg-surface-container-low border border-outline-variant/30 text-on-surface font-extrabold shadow-sm hover:border-primary/50 transition-colors" data-navigate="mistake-mastery">Review Mistakes</button>
          <button class="px-8 py-3 rounded-full bg-primary text-on-primary font-extrabold shadow-md hover:scale-105 transition-all" data-navigate="dashboard">Continue to Dashboard</button>
        </div>
      </div>
    </div>
  </div>`;
});
