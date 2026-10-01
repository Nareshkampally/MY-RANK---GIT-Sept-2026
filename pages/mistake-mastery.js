// Learnly 11+ — Mistake Mastery Drill & Re-attempt
LearnlyRouter.register('mistake-mastery', function() {
  return `
  <div class="space-y-8 pb-12">
    <section class="relative flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 rounded-3xl overflow-hidden shadow-md mb-8" style="background: linear-gradient(135deg, #f43f5e 0%, #be123c 100%);">
      <div class="absolute -right-12 -top-12 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute left-1/4 bottom-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      
      <div class="relative z-10 flex items-center gap-4 text-white">
        <a href="#scorecard" class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-sm">
          <span class="material-symbols-outlined">arrow_back</span>
        </a>
        <div>
          <h1 class="text-3xl font-extrabold tracking-tight">Mistake Mastery Vault</h1>
          <p class="text-sm font-bold text-white/80 mt-1">Re-attempt and conquer your Mock #04 errors.</p>
        </div>
      </div>
      <div class="flex items-center gap-2 relative z-10">
        <div class="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center gap-2 shadow-sm">
          <div class="w-2 h-2 rounded-full bg-white animate-pulse"></div>
          <span class="text-white font-bold text-sm tracking-wide">8 Critical Mistakes Remaining</span>
        </div>
      </div>
    </section>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/30 flex flex-col justify-between hover:border-error/50 transition-colors relative overflow-hidden group shadow-sm">
        <div class="absolute top-0 right-0 w-32 h-32 bg-error/5 rounded-full translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
        <div class="absolute top-0 left-0 w-1.5 h-full bg-error opacity-70 group-hover:opacity-100 transition-opacity"></div>
        
        <div class="flex flex-col relative z-10 space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <span class="w-12 h-12 rounded-[2.5rem] bg-error/10 border border-error/20 flex items-center justify-center text-error font-black text-lg shadow-inner">${m.q}</span>
              <div>
                <span class="text-base text-on-surface font-extrabold tracking-tight">${m.topic}</span><br>
                <span class="px-2.5 py-0.5 rounded-md bg-surface-container-high border border-outline-variant/30 text-[10px] font-bold text-outline-variant uppercase tracking-widest mt-1 inline-block">${m.subj}</span>
              </div>
            </div>
            <div class="text-right text-xs">
              <div class="text-error font-bold bg-error/10 px-2 py-0.5 rounded border border-error/20 mb-1 inline-block">Your Ans: ${m.yourAns}</div><br>
              <div class="text-tertiary font-bold bg-tertiary/10 px-2 py-0.5 rounded border border-tertiary/20 inline-block">Correct: ${m.correct}</div>
            </div>
          </div>
          
          <div class="p-4 rounded-[2.5rem] bg-surface border border-outline-variant/20">
             <p class="text-sm text-on-surface font-medium">${m.desc}</p>
          </div>
          
          <div class="flex gap-3 pt-2">
            <button class="flex-1 py-3 rounded-full bg-primary text-on-primary text-sm font-bold shadow-md hover:bg-primary/90 transition-all" data-navigate="${m.type==='spatial'?'mistake-vault-3d':'mistake-vault-lexical'}">Re-attempt Question</button>
            <button class="px-5 py-3 rounded-full bg-surface border border-outline-variant/30 hover:border-primary/50 text-sm text-on-surface font-bold transition-all text-center" data-navigate="${m.type==='spatial'?'mistake-vault-3d':'mistake-vault-lexical'}">Explanation</button>
          </div>
        </div>
      </div>`).join('')}
    </div>
  </div>`;
});

// Mistake Vault: 3D Replay
LearnlyRouter.register('mistake-vault-3d', function() {
  return `
  <div class="space-y-8 pb-12">
    <section class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <a href="#mistake-mastery" class="w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 transition-colors shadow-sm">
          <span class="material-symbols-outlined">arrow_back</span>
        </a>
        <div>
          <h1 class="text-3xl font-extrabold text-on-surface tracking-tight">Mistake Vault: 3D Replay</h1>
          <p class="text-sm font-bold text-outline-variant mt-1">Q11 — Complex Hexagonal Net</p>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-12 lg:col-span-7">
        <div class="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-sm relative overflow-hidden h-full">
          <div class="absolute top-0 right-0 w-64 h-64 bg-tertiary/5 rounded-full translate-x-32 -translate-y-32 pointer-events-none"></div>
          
          <div class="flex items-center gap-3 mb-6 relative z-10">
             <div class="w-10 h-10 rounded-xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center text-tertiary">
                <span class="material-symbols-outlined">view_in_ar</span>
             </div>
             <h2 class="text-xl font-extrabold text-on-surface tracking-tight">3D Net Visualization</h2>
          </div>
          
          <div class="bg-surface rounded-[2.5rem] border border-outline-variant/20 p-8 flex flex-col items-center justify-center min-h-[400px] relative z-10 shadow-inner">
            <div class="text-center w-full max-w-sm">
              <svg viewBox="0 0 320 280" class="w-full drop-shadow-lg">
                <rect x="110" y="10" width="50" height="50" fill="#f8fafc" stroke="#64748b" stroke-width="2" rx="4"/>
                <rect x="110" y="60" width="50" height="50" fill="#f8fafc" stroke="#64748b" stroke-width="2" rx="4"/>
                <rect x="60" y="60" width="50" height="50" fill="#f8fafc" stroke="#64748b" stroke-width="2" rx="4"/>
                <rect x="160" y="60" width="50" height="50" fill="#f8fafc" stroke="#64748b" stroke-width="2" rx="4"/>
                <rect x="110" y="110" width="50" height="50" fill="#f8fafc" stroke="#64748b" stroke-width="2" rx="4"/>
                <rect x="110" y="160" width="50" height="50" fill="#f8fafc" stroke="#64748b" stroke-width="2" rx="4"/>
                <text x="135" y="42" text-anchor="middle" fill="#0f172a" font-size="20" font-weight="800">★</text>
                <text x="135" y="92" text-anchor="middle" fill="#0f172a" font-size="20" font-weight="800">▲</text>
                <text x="85" y="92" text-anchor="middle" fill="#0ea5e9" font-size="20" font-weight="800">●</text>
                <text x="185" y="92" text-anchor="middle" fill="#eab308" font-size="20" font-weight="800">◆</text>
                <text x="135" y="142" text-anchor="middle" fill="#0f172a" font-size="20" font-weight="800">■</text>
                <text x="135" y="192" text-anchor="middle" fill="#0f172a" font-size="20" font-weight="800">○</text>
              </svg>
              <div class="mt-8 flex items-center justify-center gap-2 text-xs font-bold text-outline-variant bg-surface-container-highest/50 py-2 px-4 rounded-full inline-flex">
                 <span class="material-symbols-outlined text-sm">360</span>
                 Interactive: Drag to rotate the 3D model
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-span-12 lg:col-span-5 flex flex-col space-y-6">
        <div class="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-sm relative overflow-hidden">
          <div class="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full translate-x-24 -translate-y-24 pointer-events-none"></div>
          <h3 class="text-xl font-extrabold text-on-surface mb-6 relative z-10">Step-by-Step Logic</h3>
          <div class="space-y-4 relative z-10">
            ${[
              {step:1,text:'Identify the base face (▲). This face stays flat when folding.'},
              {step:2,text:'The face marked ★ folds UP to become the top.'},
              {step:3,text:'The ● face folds LEFT and ◆ folds RIGHT — they become opposite faces.'},
              {step:4,text:'The correct 3D shape shows ★ on top with ● on the left side.'},
            ].map(s=>`
            <div class="flex gap-4 p-4 rounded-[2.5rem] bg-surface border border-outline-variant/20 hover:border-primary/30 transition-colors">
              <span class="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-black flex-shrink-0 shadow-sm">${s.step}</span>
              <p class="text-sm font-medium text-on-surface">${s.text}</p>
            </div>`).join('')}
          </div>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4">
            <div class="flex-1 bg-error/5 rounded-3xl p-6 border border-error/20 relative overflow-hidden">
                <div class="absolute -right-4 -bottom-4 opacity-10">
                    <span class="material-symbols-outlined text-9xl text-error">cancel</span>
                </div>
              <span class="text-sm font-bold text-error flex items-center gap-2 mb-2 relative z-10"><span class="material-symbols-outlined text-lg">cancel</span> Your Answer: C</span>
              <p class="text-sm font-medium text-on-surface relative z-10">You selected the shape with ● on top — but ● is a side face, not the top.</p>
            </div>
            <div class="flex-1 bg-tertiary/5 rounded-3xl p-6 border border-tertiary/20 relative overflow-hidden">
                <div class="absolute -right-4 -bottom-4 opacity-10">
                    <span class="material-symbols-outlined text-9xl text-tertiary">check_circle</span>
                </div>
              <span class="text-sm font-bold text-tertiary flex items-center gap-2 mb-2 relative z-10"><span class="material-symbols-outlined text-lg">check_circle</span> Correct Answer: A</span>
              <p class="text-sm font-medium text-on-surface relative z-10">Shape A correctly shows ★ on top, ● on left, and ◆ on right — matching the fold pattern.</p>
            </div>
        </div>
        
        <button class="w-full py-4 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface font-bold shadow-sm hover:bg-surface-container hover:border-primary/50 transition-all flex items-center justify-center gap-2 mt-auto" data-navigate="mistake-mastery">
            <span class="material-symbols-outlined">arrow_back</span>
            Back to Mistake List
        </button>
      </div>
    </div>
  </div>`;
});

// Mistake Vault: Lexical Breakdown
LearnlyRouter.register('mistake-vault-lexical', function() {
  return `
  <div class="space-y-8 pb-12">
    <section class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <a href="#mistake-mastery" class="w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 transition-colors shadow-sm">
          <span class="material-symbols-outlined">arrow_back</span>
        </a>
        <div>
          <h1 class="text-3xl font-extrabold text-on-surface tracking-tight">Mistake Vault: Lexical Breakdown</h1>
          <p class="text-sm font-bold text-outline-variant mt-1">Q14 — 'Untoward' vs 'Unseemly'</p>
        </div>
      </div>
    </section>
    
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-12 lg:col-span-6 h-full">
        <div class="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-sm relative overflow-hidden h-full flex flex-col">
          <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-32 -translate-y-32 pointer-events-none"></div>
          
          <div class="flex items-center gap-3 mb-6 relative z-10">
             <div class="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <span class="material-symbols-outlined">auto_stories</span>
             </div>
             <h3 class="text-xl font-extrabold text-on-surface tracking-tight">Word Analysis</h3>
          </div>
          
          <div class="space-y-4 relative z-10 flex-1">
            <div class="p-6 rounded-[2.5rem] bg-surface border border-outline-variant/20 shadow-sm relative overflow-hidden group hover:border-primary/30 transition-colors">
              <div class="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none"></div>
              <div class="flex items-end gap-3 mb-2">
                 <h4 class="text-2xl font-black text-primary tracking-tight">Untoward</h4>
                 <span class="text-xs font-bold text-outline-variant pb-1">/ʌnˈtɔːwəd/ (adj.)</span>
              </div>
              <p class="text-sm font-medium text-on-surface leading-relaxed">Unexpected and inappropriate or inconvenient; unlucky.</p>
              <div class="mt-4 p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/10 text-sm italic text-on-surface-variant">"Nothing untoward happened during the ceremony."</div>
            </div>
            
            <div class="p-6 rounded-[2.5rem] bg-surface border border-outline-variant/20 shadow-sm relative overflow-hidden group hover:border-secondary/30 transition-colors">
              <div class="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full pointer-events-none"></div>
              <div class="flex items-end gap-3 mb-2">
                 <h4 class="text-2xl font-black text-secondary tracking-tight">Unseemly</h4>
                 <span class="text-xs font-bold text-outline-variant pb-1">/ʌnˈsiːmli/ (adj.)</span>
              </div>
              <p class="text-sm font-medium text-on-surface leading-relaxed">Not proper or appropriate; indecorous. Focuses on social propriety.</p>
              <div class="mt-4 p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/10 text-sm italic text-on-surface-variant">"His unseemly behaviour at the formal dinner was embarrassing."</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-span-12 lg:col-span-6 flex flex-col space-y-6">
        <div class="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/30 shadow-sm relative overflow-hidden">
          <div class="absolute top-0 right-0 w-48 h-48 bg-secondary/5 rounded-full translate-x-24 -translate-y-24 pointer-events-none"></div>
          <h3 class="text-xl font-extrabold text-on-surface mb-6 relative z-10">Key Distinction</h3>
          <div class="p-6 rounded-[2.5rem] bg-surface border border-outline-variant/20 relative z-10">
            <div class="flex items-start gap-4 mb-4 pb-4 border-b border-outline-variant/20">
               <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1"><span class="material-symbols-outlined text-sm">bolt</span></div>
               <div>
                 <strong class="text-primary text-base font-black">Untoward</strong>
                 <p class="text-sm font-medium text-on-surface mt-1">unexpected misfortune (events/situations)</p>
               </div>
            </div>
            <div class="flex items-start gap-4 mb-4">
               <div class="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0 mt-1"><span class="material-symbols-outlined text-sm">groups</span></div>
               <div>
                 <strong class="text-secondary text-base font-black">Unseemly</strong>
                 <p class="text-sm font-medium text-on-surface mt-1">socially improper (behaviour/conduct)</p>
               </div>
            </div>
            <div class="mt-4 p-4 rounded-xl bg-warning/10 border border-warning/20">
              <span class="text-xs font-bold text-warning uppercase tracking-widest mb-1 block">The Trap</span>
              <p class="text-sm font-medium text-on-surface">Both words start with 'un-' and relate to negativity, but they describe different things. In the 11+ context, the question tested whether you could distinguish between event-based and conduct-based descriptors.</p>
            </div>
          </div>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4">
            <div class="flex-1 bg-error/5 rounded-3xl p-6 border border-error/20 relative overflow-hidden">
                <div class="absolute -right-4 -bottom-4 opacity-10">
                    <span class="material-symbols-outlined text-9xl text-error">cancel</span>
                </div>
              <span class="text-sm font-bold text-error flex items-center gap-2 mb-2 relative z-10"><span class="material-symbols-outlined text-lg">cancel</span> Your Answer: B</span>
              <p class="text-sm font-medium text-on-surface relative z-10">"Untoward" means "rude". This confuses "untoward" with "unseemly". Untoward doesn't primarily mean rude.</p>
            </div>
            <div class="flex-1 bg-tertiary/5 rounded-3xl p-6 border border-tertiary/20 relative overflow-hidden">
                <div class="absolute -right-4 -bottom-4 opacity-10">
                    <span class="material-symbols-outlined text-9xl text-tertiary">check_circle</span>
                </div>
              <span class="text-sm font-bold text-tertiary flex items-center gap-2 mb-2 relative z-10"><span class="material-symbols-outlined text-lg">check_circle</span> Correct Answer: C</span>
              <p class="text-sm font-medium text-on-surface relative z-10">"Untoward" means "unexpected and unfortunate". The key is the element of surprise/misfortune, not social impropriety.</p>
            </div>
        </div>
        
        <button class="w-full py-4 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface font-bold shadow-sm hover:bg-surface-container hover:border-primary/50 transition-all flex items-center justify-center gap-2 mt-auto" data-navigate="mistake-mastery">
            <span class="material-symbols-outlined">arrow_back</span>
            Back to Mistake List
        </button>
      </div>
    </div>
  </div>`;
});
