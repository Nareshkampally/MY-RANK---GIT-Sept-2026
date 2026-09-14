// Learnly 11+ — Drill #2: Qualifier & Negation Cloze Trap Buster
LearnlyRouter.register('drill-cloze', function() {
  return `
  <div class="space-y-space-md">
    <section class="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex items-center justify-between">
      <div class="flex items-center gap-space-md">
        <a href="#dashboard" class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">arrow_back</span></a>
        <div><div class="flex items-center gap-space-xs"><span class="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-md text-label-md font-bold">Verbal Reasoning</span><span class="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-md text-label-md">Trap Buster</span></div>
        <h1 class="font-headline-sm text-headline-sm text-on-surface mt-0.5">Drill #2: Qualifier &amp; Negation Cloze</h1></div>
      </div>
      <div class="flex items-center gap-space-sm">
        <div class="flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container-low shadow-sm"><span class="font-label-timer text-label-timer text-primary">5 / 12</span></div>
        <div class="flex items-center gap-2 px-space-md py-1.5 rounded-full bg-tertiary-fixed/30"><span class="material-symbols-outlined text-tertiary-container text-base">timer</span><span class="font-label-timer text-label-timer text-tertiary-container">7:15</span></div>
      </div>
    </section>
    <div class="grid grid-cols-12 gap-space-lg">
      <div class="col-span-12 lg:col-span-6">
        <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-md">
          <div class="flex items-center gap-2 mb-space-md"><span class="material-symbols-outlined text-primary">menu_book</span><span class="font-label-lg text-label-lg text-on-surface font-bold">Passage Context</span></div>
          <div class="p-space-md rounded-xl bg-surface-container-low font-body-lg text-body-lg text-on-surface leading-relaxed">
            <p>The expedition was <em class="text-primary font-semibold">hardly</em> a failure, despite the harsh conditions encountered in the Arctic. The researchers <em class="text-secondary font-semibold">___________</em> to collect enough samples to support their hypothesis about glacial erosion patterns.</p>
            <p class="mt-3">However, the <em class="text-primary font-semibold">lack</em> of proper equipment meant that some of their findings were <em class="text-secondary font-semibold">___________</em> conclusive.</p>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-6 space-y-space-md">
        <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-md">
          <h2 class="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Fill in the blanks with the most appropriate word pair:</h2>
          <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Consider the negation qualifiers 'hardly' and 'lack' — they reverse the expected meaning.</p>
          <div class="space-y-space-sm">
            ${[
              'managed / not entirely',
              'failed / completely',
              'struggled / barely',
              'refused / entirely',
              'attempted / somewhat',
            ].map((opt,i)=>`
            <button class="answer-bubble w-full flex items-center gap-space-md p-space-md rounded-xl border-2 border-surface-container-high bg-surface-container-lowest" type="button">
              <span class="w-10 h-10 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center font-label-lg text-label-lg font-bold flex-shrink-0">${String.fromCharCode(65+i)}</span>
              <span class="font-body-md text-body-md text-on-surface">${opt}</span>
            </button>`).join('')}
          </div>
        </div>
        <div class="flex justify-between">
          <button class="px-space-lg py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-lg text-label-lg">← Previous</button>
          <button class="px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md">Next →</button>
        </div>
      </div>
    </div>
  </div>`;
});

// Drill #3: Section B Timed Re-run
LearnlyRouter.register('drill-timed', function() {
  return `
  <div class="space-y-space-md">
    <section class="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex items-center justify-between">
      <div class="flex items-center gap-space-md">
        <a href="#mock-exams" class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">arrow_back</span></a>
        <div><span class="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-md text-label-md font-bold">Section B Re-run</span>
        <h1 class="font-headline-sm text-headline-sm text-on-surface mt-0.5">Drill #3: Section B Timed Re-run</h1></div>
      </div>
      <div class="flex items-center gap-space-sm">
        <div class="px-space-md py-1.5 rounded-full bg-error-container/60 text-on-error-container timer-warning flex items-center gap-2">
          <span class="material-symbols-outlined text-base" style="font-variation-settings:'FILL' 1">timer</span>
          <span class="font-label-timer text-label-timer font-bold">12:00</span>
        </div>
      </div>
    </section>
    <div class="bg-surface-container-lowest rounded-xl p-space-xl shadow-md text-center">
      <div class="max-w-lg mx-auto">
        <span class="material-symbols-outlined text-6xl text-primary mb-space-md">rocket_launch</span>
        <h2 class="font-headline-lg text-headline-lg text-on-surface mb-space-sm">Ready to Re-run Section B?</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant mb-space-xl">You'll retry the 10 questions from Section B (Logical Antonyms) under timed conditions. Focus on the 2 you missed last time.</p>
        <div class="flex items-center justify-center gap-space-md mb-space-xl">
          <div class="p-space-md rounded-xl bg-surface-container-low text-center"><span class="font-headline-md text-headline-md text-primary font-bold">10</span><br><span class="font-label-md text-label-md text-on-surface-variant">Questions</span></div>
          <div class="p-space-md rounded-xl bg-surface-container-low text-center"><span class="font-headline-md text-headline-md text-error font-bold">12:00</span><br><span class="font-label-md text-label-md text-on-surface-variant">Time Limit</span></div>
          <div class="p-space-md rounded-xl bg-surface-container-low text-center"><span class="font-headline-md text-headline-md text-secondary font-bold">+80</span><br><span class="font-label-md text-label-md text-on-surface-variant">XP Reward</span></div>
        </div>
        <button class="px-space-xl py-3 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-lg hover:scale-105 transition-all text-lg" data-navigate="practice-arena" type="button">Start Timed Re-run</button>
      </div>
    </div>
  </div>`;
});

// Drill Score Analysis
LearnlyRouter.register('drill-score', function() {
  return `
  <div class="space-y-space-xl">
    <a href="#analytics" class="font-label-md text-label-md text-primary flex items-center gap-1"><span class="material-symbols-outlined text-sm">arrow_back</span> Back to Analytics</a>
    <div class="bg-surface-container-lowest rounded-2xl p-space-xl shadow-md text-center">
      <span class="material-symbols-outlined text-6xl text-tertiary-container mb-space-md">emoji_events</span>
      <h1 class="font-headline-lg text-headline-lg text-on-surface">Drill #2 Score Analysis</h1>
      <p class="font-body-md text-body-md text-on-surface-variant mt-1">Qualifier & Negation Cloze Trap Buster</p>
      <div class="flex items-center justify-center gap-space-xl mt-space-lg">
        <div><span class="font-display-hero text-display-hero text-primary font-extrabold">10</span><span class="text-outline font-headline-sm"> / 12</span><p class="font-label-md text-label-md text-on-surface-variant">Correct</p></div>
        <div><span class="font-display-hero text-display-hero text-tertiary-container font-extrabold">83%</span><p class="font-label-md text-label-md text-on-surface-variant">Accuracy</p></div>
        <div><span class="font-display-hero text-display-hero text-secondary font-extrabold">7:42</span><p class="font-label-md text-label-md text-on-surface-variant">Total Time</p></div>
      </div>
    </div>
    <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md">
      <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md">Cloze Mastery Breakdown</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
        ${[{cat:'Negation Qualifiers',score:'4/4',pct:100,color:'tertiary-container'},{cat:'Double Negatives',score:'3/4',pct:75,color:'secondary'},{cat:'Context Inference',score:'3/4',pct:75,color:'secondary'}].map(c=>`
        <div class="p-space-md rounded-xl bg-surface-container-low"><span class="font-label-lg text-label-lg text-on-surface font-bold">${c.cat}</span><div class="font-headline-md text-headline-md text-${c.color} font-extrabold mt-1">${c.score}</div>
        <div class="w-full bg-surface-container-high rounded-full h-2 mt-space-sm overflow-hidden"><div class="bg-${c.color} h-full rounded-full" style="width:${c.pct}%"></div></div></div>`).join('')}
      </div>
    </div>
    <div class="flex justify-center gap-space-md">
      <button class="px-space-lg py-2.5 rounded-full bg-surface-container-high text-primary font-label-lg text-label-lg font-bold" data-navigate="mistake-mastery">Retry Mistakes</button>
      <button class="px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md" data-navigate="dashboard">Back to Dashboard</button>
    </div>
  </div>`;
});

// Drill Completion
LearnlyRouter.register('drill-complete', function() {
  return `
  <div class="flex items-center justify-center min-h-[70vh]">
    <div class="bg-surface-container-lowest rounded-3xl p-space-2xl shadow-xl text-center max-w-xl w-full relative overflow-hidden">
      <div class="absolute -right-16 -top-16 w-48 h-48 bg-secondary-container/20 rounded-full blur-3xl"></div>
      <div class="absolute -left-12 -bottom-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <span class="material-symbols-outlined text-7xl text-secondary-container mb-space-md" style="font-variation-settings:'FILL' 1">celebration</span>
      <h1 class="font-headline-lg text-headline-lg text-on-surface font-extrabold">Drill Complete!</h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant mt-space-sm">You've completed the 3D Spatial Net Folding Rapid-Fire drill</p>
      <div class="flex items-center justify-center gap-space-xl mt-space-xl">
        <div class="p-space-md rounded-2xl bg-surface-container-low"><span class="font-display-hero text-display-hero text-primary font-extrabold">8</span><span class="text-outline font-headline-sm">/10</span><p class="font-label-md text-label-md text-on-surface-variant mt-1">Correct</p></div>
        <div class="p-space-md rounded-2xl bg-surface-container-low"><span class="font-display-hero text-display-hero text-tertiary-container font-extrabold">80%</span><p class="font-label-md text-label-md text-on-surface-variant mt-1">Accuracy</p></div>
        <div class="p-space-md rounded-2xl bg-secondary-fixed/40"><span class="font-display-hero text-display-hero text-secondary font-extrabold">+60</span><p class="font-label-md text-label-md text-on-surface-variant mt-1">XP Earned</p></div>
      </div>
      <div class="flex items-center justify-center gap-space-md mt-space-xl">
        <button class="px-space-lg py-2.5 rounded-full bg-surface-container-high text-primary font-label-lg text-label-lg font-bold" data-navigate="mistake-mastery">Review Mistakes</button>
        <button class="px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md" data-navigate="dashboard">Continue to Dashboard</button>
      </div>
    </div>
  </div>`;
});
