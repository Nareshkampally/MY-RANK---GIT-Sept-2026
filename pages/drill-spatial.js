// Learnly 11+ — Drill #1: 3D Spatial Net Folding Rapid-Fire Practice & 3D Fold Simulator
LearnlyRouter.register('drill-spatial', function() {
  return `
  <div class="space-y-space-md">
    <section class="bg-surface-container-lowest rounded-2xl p-space-md shadow-md flex flex-wrap items-center justify-between gap-space-md border border-outline-variant/30">
      <div class="flex items-center gap-space-md">
        <a href="#dashboard" class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"><span class="material-symbols-outlined">arrow_back</span></a>
        <div>
          <div class="flex items-center gap-space-xs">
            <span class="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold uppercase">Non-Verbal Spatial</span>
            <span class="px-2.5 py-0.5 rounded-full bg-primary-fixed text-primary font-label-md text-label-md font-bold">Interactive 3D Fold Studio</span>
          </div>
          <h1 class="font-headline-sm text-headline-sm text-on-surface mt-0.5 font-extrabold">Drill #1: 3D Isometric Net Folding Rapid-Fire</h1>
        </div>
      </div>
      <div class="flex items-center gap-space-sm">
        <div class="flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container-low shadow-sm">
          <span class="font-label-md text-label-md text-on-surface-variant">Question</span>
          <span class="font-label-timer text-label-timer text-primary font-bold">3 <span class="text-outline text-body-sm font-normal">/ 10</span></span>
        </div>
        <div class="flex items-center gap-2 px-space-md py-1.5 rounded-full bg-tertiary-fixed/30 shadow-sm">
          <span class="material-symbols-outlined text-tertiary-container text-base">timer</span>
          <span class="font-label-timer text-label-timer text-tertiary-container font-bold">4:32</span>
        </div>
        <div class="flex items-center gap-1 px-space-md py-1.5 rounded-full bg-secondary-fixed/40 shadow-sm">
          <span class="material-symbols-outlined text-secondary text-base">stars</span>
          <span class="font-label-lg text-label-lg text-on-secondary-fixed font-bold">+60 XP</span>
        </div>
      </div>
    </section>

    <!-- 2D NET & 3D FOLD SIMULATOR ROW -->
    <div class="grid grid-cols-12 gap-space-lg items-start">
      <!-- Left 6 Cols: 2D Net & Interactive 3D Fold View -->
      <div class="col-span-12 lg:col-span-6 space-y-space-md">
        <div class="bg-surface-container-lowest rounded-3xl p-space-lg shadow-md border border-outline-variant/30 relative overflow-hidden">
          <div class="flex items-center justify-between mb-4">
            <div>
              <span class="text-xs font-bold uppercase text-primary tracking-wider block">Stem Analysis</span>
              <h2 class="font-headline-sm text-headline-sm text-on-surface font-bold">Which 3D shape does this net fold into?</h2>
            </div>
            <!-- Simulation Mode Toggle -->
            <div class="flex items-center p-1 bg-surface-container rounded-full border border-outline-variant/20">
              <button id="view-net-btn" class="px-3 py-1 rounded-full text-xs font-bold bg-primary text-on-primary shadow-sm transition-all cursor-pointer">2D Net</button>
              <button id="view-3d-btn" class="px-3 py-1 rounded-full text-xs font-bold text-on-surface-variant hover:text-on-surface transition-all cursor-pointer">3D Fold Simulator</button>
            </div>
          </div>

          <!-- 2D Net Canvas -->
          <div id="net-2d-view" class="bg-surface-container-low rounded-2xl p-space-lg flex flex-col items-center justify-center min-h-[320px] relative">
            <svg viewBox="0 0 300 250" class="w-full max-w-sm drop-shadow-sm">
              <!-- Grid Net with clean symbols -->
              <rect x="100" y="50" width="50" height="50" fill="#e2dfff" stroke="#4f46e5" stroke-width="2" rx="4"/>
              <rect x="150" y="50" width="50" height="50" fill="#e2dfff" stroke="#4f46e5" stroke-width="2" rx="4"/>
              <rect x="100" y="100" width="50" height="50" fill="#e2dfff" stroke="#4f46e5" stroke-width="2" rx="4"/>
              <rect x="100" y="150" width="50" height="50" fill="#e2dfff" stroke="#4f46e5" stroke-width="2" rx="4"/>
              <rect x="50" y="100" width="50" height="50" fill="#e2dfff" stroke="#4f46e5" stroke-width="2" rx="4"/>
              <rect x="200" y="50" width="50" height="50" fill="#e2dfff" stroke="#4f46e5" stroke-width="2" rx="4"/>
              <!-- Symbols -->
              <text x="125" y="82" text-anchor="middle" fill="#4f46e5" font-size="20" font-weight="800">★</text>
              <text x="175" y="82" text-anchor="middle" fill="#4f46e5" font-size="20" font-weight="800">●</text>
              <text x="125" y="132" text-anchor="middle" fill="#4f46e5" font-size="20" font-weight="800">▲</text>
              <text x="125" y="182" text-anchor="middle" fill="#4f46e5" font-size="20" font-weight="800">■</text>
              <text x="75" y="132" text-anchor="middle" fill="#4f46e5" font-size="20" font-weight="800">◆</text>
              <text x="225" y="82" text-anchor="middle" fill="#4f46e5" font-size="20" font-weight="800">○</text>
            </svg>
            <span class="text-xs text-on-surface-variant font-medium mt-2">Faces: ★ (Star), ● (Circle), ▲ (Triangle), ■ (Square), ◆ (Diamond), ○ (Ring)</span>
          </div>

          <!-- 3D Interactive Fold Canvas (Hidden by default) -->
          <div id="fold-3d-view" class="hidden bg-surface-container-low rounded-2xl p-space-lg flex flex-col items-center justify-center min-h-[320px] relative overflow-hidden">
            <div class="net-3d-scene flex items-center justify-center h-48 w-full">
              <div id="simulated-cube" class="cube-assembly" style="transform: rotateX(-25deg) rotateY(35deg);">
                <!-- 6 Faces -->
                <div class="cube-face" style="transform: translateZ(70px); background: #e2dfff; color: #4f46e5;">▲</div>
                <div class="cube-face" style="transform: rotateY(180deg) translateZ(70px); background: #ffddb8; color: #855300;">●</div>
                <div class="cube-face" style="transform: rotateY(-90deg) translateZ(70px); background: #e2dfff; color: #4f46e5;">◆</div>
                <div class="cube-face" style="transform: rotateY(90deg) translateZ(70px); background: #ffddb8; color: #855300;">○</div>
                <div class="cube-face" style="transform: rotateX(90deg) translateZ(70px); background: #6ffbbe; color: #005338;">★</div>
                <div class="cube-face" style="transform: rotateX(-90deg) translateZ(70px); background: #6ffbbe; color: #005338;">■</div>
              </div>
            </div>

            <!-- Fold Steps Control Ribbon -->
            <div class="flex items-center gap-2 mt-4 pt-3 border-t border-outline-variant/20 w-full justify-center flex-wrap">
              <button class="fold-step-btn px-3 py-1.5 rounded-xl bg-primary text-on-primary font-bold text-xs cursor-pointer" data-step="flat">Step 1: Flat</button>
              <button class="fold-step-btn px-3 py-1.5 rounded-xl bg-surface-container-high text-on-surface-variant hover:text-on-surface font-bold text-xs cursor-pointer" data-step="fold45">Step 2: 45° Fold</button>
              <button class="fold-step-btn px-3 py-1.5 rounded-xl bg-surface-container-high text-on-surface-variant hover:text-on-surface font-bold text-xs cursor-pointer" data-step="assembled">Step 3: 3D Cube</button>
              <button id="spin-cube-btn" class="px-3 py-1.5 rounded-xl bg-secondary-fixed text-on-secondary-fixed font-bold text-xs flex items-center gap-1 cursor-pointer">
                <span class="material-symbols-outlined text-sm">3d_rotation</span> Spin
              </button>
            </div>
          </div>

          <!-- Socratic Spatial Intuition Tip -->
          <div class="mt-4 p-3 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex items-start gap-2.5 text-xs text-on-surface">
            <span class="material-symbols-outlined text-primary text-lg flex-shrink-0 mt-0.5">psychology</span>
            <div>
              <strong class="text-primary font-bold block">11+ Opposing Face Golden Rule:</strong>
              Faces separated by exactly one square along a straight row can <span class="underline font-bold">never</span> touch.
              Therefore, <strong>★ (Star) is opposite ■ (Square)</strong>, <strong>▲ is opposite ●</strong>, and <strong>◆ is opposite ○</strong>.
            </div>
          </div>
        </div>
      </div>

      <!-- Right 6 Cols: Answer Options & Verification -->
      <div class="col-span-12 lg:col-span-6 space-y-space-md">
        <div class="bg-surface-container-lowest rounded-3xl p-space-lg shadow-md border border-outline-variant/30">
          <div class="flex items-center justify-between mb-space-sm">
            <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Select the matching 3D Cube:</span>
            <span class="text-xs font-mono text-outline">Ref #NVR-3D-88</span>
          </div>
          
          <div class="grid grid-cols-2 gap-space-md mb-space-lg">
            ${[
              { letter: 'A', top: '★', front: '▲', right: '◆', correct: true, desc: '★ top, ▲ front, ◆ right' },
              { letter: 'B', top: '★', front: '■', right: '●', correct: false, desc: 'Impossible: ★ & ■ are opposite!' },
              { letter: 'C', top: '▲', front: '●', right: '◆', correct: false, desc: 'Impossible: ▲ & ● are opposite!' },
              { letter: 'D', top: '◆', front: '○', right: '★', correct: false, desc: 'Impossible: ◆ & ○ are opposite!' }
            ].map((opt, i) => `
              <button class="spatial-option-btn p-space-md rounded-2xl border-2 border-outline-variant/30 hover:border-primary bg-surface-container-lowest flex flex-col items-center gap-2 transition-all cursor-pointer ${i===0?'border-primary selected bg-primary-fixed/20':''}" data-index="${i}">
                <div class="flex items-center justify-between w-full">
                  <span class="w-8 h-8 rounded-lg ${i===0?'bg-primary text-on-primary':'bg-surface-container-high text-on-surface'} font-bold flex items-center justify-center text-sm">${opt.letter}</span>
                  <span class="text-[10px] font-bold ${opt.correct?'text-tertiary':'text-outline'}">${opt.correct?'Verified Match':'Trap'}</span>
                </div>
                <!-- Isometric Miniature Preview -->
                <div class="w-24 h-24 bg-surface-container-low rounded-xl border border-outline-variant/20 flex items-center justify-center relative p-1 text-center">
                  <div class="font-mono text-xs font-bold leading-tight">
                    <div class="text-primary">${opt.top} (Top)</div>
                    <div class="text-secondary">${opt.front} (Front)</div>
                    <div class="text-tertiary">${opt.right} (Right)</div>
                  </div>
                </div>
                <span class="text-[11px] text-on-surface font-medium text-center">${opt.desc}</span>
              </button>
            `).join('')}
          </div>

          <div class="flex items-center justify-between pt-2">
            <a href="#subject-quests" class="px-space-lg py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-lg text-label-lg hover:text-on-surface transition-all">← Back to Quests</a>
            <button id="next-spatial-btn" class="flex items-center gap-2 px-space-lg py-2.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer" type="button">
              Confirm &amp; Next (Q4) <span class="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}, function() {
  // Mode switcher between 2D Net and 3D Fold Simulator
  const btn2D = document.getElementById('view-net-btn');
  const btn3D = document.getElementById('view-3d-btn');
  const view2D = document.getElementById('net-2d-view');
  const view3D = document.getElementById('fold-3d-view');

  if (btn2D && btn3D && view2D && view3D) {
    btn2D.addEventListener('click', () => {
      btn2D.className = 'px-3 py-1 rounded-full text-xs font-bold bg-primary text-on-primary shadow-sm transition-all cursor-pointer';
      btn3D.className = 'px-3 py-1 rounded-full text-xs font-bold text-on-surface-variant hover:text-on-surface transition-all cursor-pointer';
      view2D.classList.remove('hidden');
      view3D.classList.add('hidden');
    });

    btn3D.addEventListener('click', () => {
      btn3D.className = 'px-3 py-1 rounded-full text-xs font-bold bg-primary text-on-primary shadow-sm transition-all cursor-pointer';
      btn2D.className = 'px-3 py-1 rounded-full text-xs font-bold text-on-surface-variant hover:text-on-surface transition-all cursor-pointer';
      view3D.classList.remove('hidden');
      view2D.classList.add('hidden');
    });
  }

  // Fold Step Simulator Buttons
  const cube = document.getElementById('simulated-cube');
  let currentRotation = 35;
  document.querySelectorAll('.fold-step-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fold-step-btn').forEach(b => {
        b.className = 'fold-step-btn px-3 py-1.5 rounded-xl bg-surface-container-high text-on-surface-variant hover:text-on-surface font-bold text-xs cursor-pointer';
      });
      btn.className = 'fold-step-btn px-3 py-1.5 rounded-xl bg-primary text-on-primary font-bold text-xs cursor-pointer';

      const step = btn.dataset.step;
      if (cube) {
        if (step === 'flat') {
          cube.style.transform = 'rotateX(0deg) rotateY(0deg) scale(0.85)';
        } else if (step === 'fold45') {
          cube.style.transform = 'rotateX(-15deg) rotateY(20deg) scale(0.95)';
        } else {
          cube.style.transform = `rotateX(-25deg) rotateY(${currentRotation}deg) scale(1)`;
        }
      }
    });
  });

  // Spin 3D Cube
  const spinBtn = document.getElementById('spin-cube-btn');
  if (spinBtn && cube) {
    spinBtn.addEventListener('click', () => {
      currentRotation += 90;
      cube.style.transform = `rotateX(-25deg) rotateY(${currentRotation}deg) scale(1)`;
    });
  }

  // Option selection
  document.querySelectorAll('.spatial-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.spatial-option-btn').forEach(b => {
        b.classList.remove('border-primary', 'selected', 'bg-primary-fixed/20');
        b.querySelector('.w-8').className = 'w-8 h-8 rounded-lg bg-surface-container-high text-on-surface font-bold flex items-center justify-center text-sm';
      });
      btn.classList.add('border-primary', 'selected', 'bg-primary-fixed/20');
      btn.querySelector('.w-8').className = 'w-8 h-8 rounded-lg bg-primary text-on-primary font-bold flex items-center justify-center text-sm';
    });
  });

  // Next button toast
  const nextBtn = document.getElementById('next-spatial-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (window.AIBuddy) {
        window.AIBuddy.showToast('Question 3 Answer Recorded: Option A', '+60 XP added to NVR Spatial score!');
      }
      setTimeout(() => {
        window.location.hash = '#drill-score';
      }, 500);
    });
  }
});

