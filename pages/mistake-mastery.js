// Learnly 11+ — Mistake Mastery Drill & Re-attempt
LearnlyRouter.register('mistake-mastery', function() {
  return `
  <div class="space-y-space-xl">
    <section class="flex items-center justify-between">
      <div class="flex items-center gap-space-md">
        <a href="#scorecard" class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">arrow_back</span></a>
        <div><h1 class="font-headline-lg text-headline-lg text-on-surface">Mistake Mastery Drill</h1><p class="font-body-md text-body-md text-on-surface-variant">Re-attempt questions you got wrong in Mock #04</p></div>
      </div>
      <div class="flex items-center gap-space-sm">
        <span class="px-space-md py-1.5 rounded-full bg-error-container text-on-error-container font-label-lg text-label-lg font-bold">8 Mistakes to Master</span>
      </div>
    </section>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
      ${[
        {q:'Q3',topic:'3D Net Folding',subj:'NVR',desc:'Hexagonal net with 6 faces — identify the correct solid',yourAns:'B',correct:'D',type:'spatial'},
        {q:'Q8',topic:'Compound Words',subj:'VR',desc:'Find the hidden compound word in "nightwatchman"',yourAns:'D',correct:'A',type:'lexical'},
        {q:'Q11',topic:'Complex Hexagonal Net',subj:'NVR',desc:'Advanced net with pattern matching on faces',yourAns:'C',correct:'A',type:'spatial'},
        {q:'Q14',topic:'Lexical Breakdown',subj:'VR',desc:'"Untoward" vs "Unseemly" — subtle synonym distinction',yourAns:'B',correct:'C',type:'lexical'},
        {q:'Q18',topic:'Decimal Division',subj:'Maths',desc:'Multi-step word problem with decimal remainders',yourAns:'A',correct:'D',type:'numerical'},
        {q:'Q22',topic:'Reflection Symmetry',subj:'NVR',desc:'Identify the reflected image across a diagonal axis',yourAns:'C',correct:'B',type:'spatial'},
        {q:'Q25',topic:'Inference from Passage',subj:'English',desc:'Draw implicit conclusion from a Victorian-era excerpt',yourAns:'A',correct:'C',type:'comprehension'},
        {q:'Q19',topic:'Algebraic Sequences',subj:'Maths',desc:'Find the nth term of a quadratic sequence',yourAns:'D',correct:'B',type:'numerical'},
      ].map((m,i)=>`
      <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md card-hover relative overflow-hidden">
        <div class="absolute top-0 left-0 w-1.5 h-full bg-error"></div>
        <div class="flex items-center justify-between mb-space-sm">
          <div class="flex items-center gap-space-sm">
            <span class="w-10 h-10 rounded-xl bg-error-container flex items-center justify-center font-label-lg text-label-lg text-on-error-container font-bold">${m.q}</span>
            <div><span class="font-label-lg text-label-lg text-on-surface font-bold">${m.topic}</span><br><span class="px-2 py-0.5 rounded-full bg-surface-container-high font-label-md text-label-md">${m.subj}</span></div>
          </div>
          <div class="text-right font-label-md text-label-md">
            <div class="text-error">Your: ${m.yourAns}</div>
            <div class="text-tertiary-container font-bold">Correct: ${m.correct}</div>
          </div>
        </div>
        <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-md">${m.desc}</p>
        <div class="flex gap-space-sm">
          <button class="flex-1 px-space-md py-2 rounded-full bg-primary text-on-primary font-label-md text-label-md font-bold shadow-sm hover:scale-105 transition-all" data-navigate="${m.type==='spatial'?'mistake-vault-3d':'mistake-vault-lexical'}">Re-attempt</button>
          <button class="px-space-md py-2 rounded-full bg-surface-container-high text-primary font-label-md text-label-md font-bold" data-navigate="${m.type==='spatial'?'mistake-vault-3d':'mistake-vault-lexical'}">View Explanation</button>
        </div>
      </div>`).join('')}
    </div>
  </div>`;
});

// Mistake Vault: 3D Replay
LearnlyRouter.register('mistake-vault-3d', function() {
  return `
  <div class="space-y-space-xl">
    <section class="flex items-center gap-space-md">
      <a href="#mistake-mastery" class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">arrow_back</span></a>
      <div><h1 class="font-headline-lg text-headline-lg text-on-surface">Mistake Vault: 3D Replay</h1><p class="font-body-md text-body-md text-on-surface-variant">Q11 — Complex Hexagonal Net</p></div>
    </section>
    <div class="grid grid-cols-12 gap-space-lg">
      <div class="col-span-12 lg:col-span-7">
        <div class="bg-surface-container-lowest rounded-2xl p-space-xl shadow-md">
          <h2 class="font-headline-md text-headline-md text-on-surface mb-space-md">3D Net Visualization</h2>
          <div class="bg-surface-container-low rounded-xl p-space-xl flex items-center justify-center min-h-[400px] relative">
            <div class="text-center">
              <svg viewBox="0 0 320 280" class="w-full max-w-md">
                <rect x="110" y="10" width="50" height="50" fill="#e2dfff" stroke="#4f46e5" stroke-width="2" rx="3"/>
                <rect x="110" y="60" width="50" height="50" fill="#e2dfff" stroke="#4f46e5" stroke-width="2" rx="3"/>
                <rect x="60" y="60" width="50" height="50" fill="#e2dfff" stroke="#4f46e5" stroke-width="2" rx="3"/>
                <rect x="160" y="60" width="50" height="50" fill="#e2dfff" stroke="#4f46e5" stroke-width="2" rx="3"/>
                <rect x="110" y="110" width="50" height="50" fill="#e2dfff" stroke="#4f46e5" stroke-width="2" rx="3"/>
                <rect x="110" y="160" width="50" height="50" fill="#e2dfff" stroke="#4f46e5" stroke-width="2" rx="3"/>
                <text x="135" y="42" text-anchor="middle" fill="#3525cd" font-size="20" font-weight="800">★</text>
                <text x="135" y="92" text-anchor="middle" fill="#3525cd" font-size="20" font-weight="800">▲</text>
                <text x="85" y="92" text-anchor="middle" fill="#006e4b" font-size="20" font-weight="800">●</text>
                <text x="185" y="92" text-anchor="middle" fill="#855300" font-size="20" font-weight="800">◆</text>
                <text x="135" y="142" text-anchor="middle" fill="#3525cd" font-size="20" font-weight="800">■</text>
                <text x="135" y="192" text-anchor="middle" fill="#3525cd" font-size="20" font-weight="800">○</text>
              </svg>
              <p class="font-label-md text-label-md text-on-surface-variant mt-space-md">Interactive: Drag to rotate the 3D model</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-5 space-y-space-md">
        <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md">
          <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md">Step-by-Step Explanation</h3>
          <div class="space-y-space-md">
            ${[
              {step:1,text:'Identify the base face (▲). This face stays flat when folding.'},
              {step:2,text:'The face marked ★ folds UP to become the top.'},
              {step:3,text:'The ● face folds LEFT and ◆ folds RIGHT — they become opposite faces.'},
              {step:4,text:'The correct 3D shape shows ★ on top with ● on the left side.'},
            ].map(s=>`
            <div class="flex gap-space-sm">
              <span class="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-lg text-label-lg font-bold flex-shrink-0">${s.step}</span>
              <p class="font-body-md text-body-md text-on-surface">${s.text}</p>
            </div>`).join('')}
          </div>
        </div>
        <div class="bg-error-container/20 rounded-xl p-space-md border border-error/20">
          <span class="font-label-lg text-label-lg text-error font-bold flex items-center gap-1 mb-1"><span class="material-symbols-outlined text-sm">cancel</span> Your Answer: C</span>
          <p class="font-body-sm text-body-sm text-on-surface-variant">You selected the shape with ● on top — but ● is a side face, not the top.</p>
        </div>
        <div class="bg-tertiary-fixed/20 rounded-xl p-space-md border border-tertiary/20">
          <span class="font-label-lg text-label-lg text-tertiary font-bold flex items-center gap-1 mb-1"><span class="material-symbols-outlined text-sm">check_circle</span> Correct Answer: A</span>
          <p class="font-body-sm text-body-sm text-on-surface-variant">Shape A correctly shows ★ on top, ● on left, and ◆ on right — matching the fold pattern.</p>
        </div>
        <button class="w-full px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:scale-105 transition-all" data-navigate="mistake-mastery">← Back to Mistake List</button>
      </div>
    </div>
  </div>`;
});

// Mistake Vault: Lexical Breakdown
LearnlyRouter.register('mistake-vault-lexical', function() {
  return `
  <div class="space-y-space-xl">
    <section class="flex items-center gap-space-md">
      <a href="#mistake-mastery" class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">arrow_back</span></a>
      <div><h1 class="font-headline-lg text-headline-lg text-on-surface">Mistake Vault: Lexical Breakdown</h1><p class="font-body-md text-body-md text-on-surface-variant">Q14 — 'Untoward' vs 'Unseemly'</p></div>
    </section>
    <div class="grid grid-cols-12 gap-space-lg">
      <div class="col-span-12 lg:col-span-6">
        <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md">
          <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md flex items-center gap-2"><span class="material-symbols-outlined text-primary">auto_stories</span>Word Analysis</h3>
          <div class="space-y-space-lg">
            <div class="p-space-md rounded-xl bg-primary-fixed/30 border border-primary-fixed">
              <h4 class="font-headline-sm text-headline-sm text-primary font-bold">Untoward</h4>
              <span class="font-label-md text-label-md text-on-surface-variant">/ʌnˈtɔːwəd/ (adj.)</span>
              <p class="font-body-md text-body-md text-on-surface mt-space-xs">Unexpected and inappropriate or inconvenient; unlucky.</p>
              <div class="mt-space-sm p-space-sm rounded-lg bg-surface-container-lowest font-body-sm text-body-sm italic text-on-surface-variant">"Nothing untoward happened during the ceremony."</div>
            </div>
            <div class="p-space-md rounded-xl bg-secondary-fixed/30 border border-secondary-fixed">
              <h4 class="font-headline-sm text-headline-sm text-secondary font-bold">Unseemly</h4>
              <span class="font-label-md text-label-md text-on-surface-variant">/ʌnˈsiːmli/ (adj.)</span>
              <p class="font-body-md text-body-md text-on-surface mt-space-xs">Not proper or appropriate; indecorous. Focuses on social propriety.</p>
              <div class="mt-space-sm p-space-sm rounded-lg bg-surface-container-lowest font-body-sm text-body-sm italic text-on-surface-variant">"His unseemly behaviour at the formal dinner was embarrassing."</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-6 space-y-space-md">
        <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md">
          <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md">Key Distinction</h3>
          <div class="p-space-md rounded-xl bg-surface-container-low">
            <p class="font-body-md text-body-md text-on-surface"><strong class="text-primary">Untoward</strong> = unexpected misfortune (events/situations)</p>
            <p class="font-body-md text-body-md text-on-surface mt-space-sm"><strong class="text-secondary">Unseemly</strong> = socially improper (behaviour/conduct)</p>
            <p class="font-body-md text-body-md text-on-surface-variant mt-space-md">The trap: Both words start with 'un-' and relate to negativity, but they describe different things. In the 11+ context, the question tested whether you could distinguish between event-based and conduct-based descriptors.</p>
          </div>
        </div>
        <div class="bg-error-container/20 rounded-xl p-space-md border border-error/20">
          <span class="font-label-lg text-label-lg text-error font-bold">Your Answer: B — "Untoward" means "rude"</span>
          <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">This confuses "untoward" with "unseemly". Untoward doesn't primarily mean rude.</p>
        </div>
        <div class="bg-tertiary-fixed/20 rounded-xl p-space-md border border-tertiary/20">
          <span class="font-label-lg text-label-lg text-tertiary font-bold">Correct: C — "Untoward" means "unexpected and unfortunate"</span>
          <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">The key is the element of surprise/misfortune, not social impropriety.</p>
        </div>
        <button class="w-full px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md" data-navigate="mistake-mastery">← Back to Mistake List</button>
      </div>
    </div>
  </div>`;
});
