// Learnly 11+ — Practice Arena (Timed 11+ Test)
LearnlyRouter.register('practice-arena', function() {
  return `
  <div class="relative w-full space-y-space-md">
    <!-- TOP EXAM CONTROLS BAR -->
    <section class="w-full bg-surface-container-lowest rounded-xl shadow-md p-space-md flex flex-wrap items-center justify-between gap-space-md transition-all">
      <div class="flex items-center gap-space-md">
        <div class="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
          <span class="material-symbols-outlined text-2xl">auto_stories</span>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-space-xs">
            <span class="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-md text-label-md">GL Assessment Style</span>
            <span class="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-md text-label-md">Scholar Mock #04</span>
          </div>
          <span class="font-headline-sm text-headline-sm text-on-surface">Verbal Reasoning &amp; Vocabulary Timed Section</span>
        </div>
      </div>
      <!-- Timer, Exam Watch & Progress -->
      <div class="flex items-center flex-wrap gap-space-sm bg-surface-container-low px-space-md py-1.5 rounded-2xl shadow-sm border border-outline-variant/30">
        <!-- Progress -->
        <div class="flex items-center gap-1.5 pr-2">
          <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Progress</span>
          <span class="font-label-timer text-label-timer text-primary font-bold">14 <span class="text-outline text-body-sm font-normal">/ 25</span></span>
        </div>
        <div class="h-5 w-px bg-outline-variant/40 hidden sm:block"></div>
        
        <!-- Live Exam Watch: Started & Elapsed -->
        <div class="flex items-center gap-3 px-2 py-1 bg-surface-container-lowest rounded-xl border border-outline-variant/20 text-xs">
          <div>
            <span class="text-[10px] uppercase font-bold text-on-surface-variant block leading-none">Started</span>
            <span class="font-mono font-bold text-on-surface watch-test-start-time leading-tight">--:--:--</span>
          </div>
          <div class="h-4 w-px bg-outline-variant/30"></div>
          <div>
            <span class="text-[10px] uppercase font-bold text-on-surface-variant block leading-none">Elapsed</span>
            <span class="font-mono font-extrabold text-primary watch-test-elapsed leading-tight">--:--</span>
          </div>
          <div class="h-4 w-px bg-outline-variant/30"></div>
          <div>
            <span class="text-[10px] uppercase font-bold text-on-surface-variant block leading-none">Pacing</span>
            <span class="font-mono font-bold text-tertiary watch-test-pacing-speed leading-tight">48s/q</span>
          </div>
        </div>

        <div class="h-5 w-px bg-outline-variant/40 hidden sm:block"></div>

        <!-- Countdown Timer -->
        <div class="flex items-center gap-2 px-space-sm py-1 bg-error-container/60 text-on-error-container rounded-xl timer-warning">
          <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1;">timer</span>
          <span class="font-label-timer text-label-timer tracking-wider font-bold" id="countdown-timer">14:28</span>
        </div>
        <button class="w-8 h-8 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all flex items-center justify-center shadow-sm" id="pause-btn" type="button" title="Pause Exam">
          <span class="material-symbols-outlined text-base">pause</span>
        </button>
        <button class="flex items-center gap-1 px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim transition-all text-label-md font-label-md font-bold shadow-sm" id="flag-quick-btn" type="button">
          <span class="material-symbols-outlined text-base text-secondary" style="font-variation-settings: 'FILL' 1;">flag</span>
          <span>Flagged</span>
        </button>
      </div>
      <!-- Exam Tools Ribbon -->
      <div class="flex items-center gap-1.5 bg-surface-container-low p-1 rounded-xl flex-wrap">
        <button id="open-hint-btn" class="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm transition-all hover:opacity-90 cursor-pointer" type="button" title="Open AI Socratic Hint (Shortcut: H)">
          <span class="material-symbols-outlined text-base">psychology</span><span>AI Hint (H)</span>
        </button>
        <button id="toggle-ruler-btn" class="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md shadow-sm transition-all hover:bg-surface-container" type="button" title="Toggle Reading Focus Ruler">
          <span class="material-symbols-outlined text-base">horizontal_rule</span><span>Ruler</span>
        </button>
        <button class="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md shadow-sm transition-all" type="button">
          <span class="material-symbols-outlined text-base">strikethrough_s</span><span>Eliminator</span>
        </button>
        <button class="flex items-center gap-1 px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-all" data-navigate="mock-scratchpad" type="button">
          <span class="material-symbols-outlined text-base">draw</span><span>Scratchpad</span>
        </button>
        <div class="flex items-center bg-surface-container-lowest rounded-lg p-0.5 shadow-sm">
          <button id="font-decrease-btn" class="px-2 py-1 text-on-surface-variant hover:text-primary font-label-md text-label-md" type="button">A-</button>
          <span class="text-outline-variant text-xs">|</span>
          <button id="font-increase-btn" class="px-2 py-1 text-on-surface-variant hover:text-primary font-label-md text-label-md" type="button">A+</button>
        </div>
      </div>
    </section>

    <!-- DUAL PANE TEST ARENA -->
    <div class="grid grid-cols-12 gap-space-lg items-start">
      <!-- LEFT: Stimulus Passage -->
      <section class="col-span-12 lg:col-span-5 space-y-space-md">
        <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative overflow-hidden">
          <div class="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
          <div class="flex items-center justify-between pb-space-sm mb-space-sm border-b border-surface-container-high">
            <span class="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">Section B • Logical Antonyms</span>
            <span class="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
              <span class="material-symbols-outlined text-sm text-tertiary">check_circle</span> 1 Mark Available
            </span>
          </div>
          <h1 class="font-headline-md text-headline-md text-on-surface mb-2">Word Relationships &amp; Contrasts</h1>
          <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Find the two words, <strong>one from each group</strong>, that are <strong>most opposite</strong> in meaning. Read the background context and examine the syntactic properties before deciding.
          </p>
        </div>
        <!-- Context Excerpt -->
        <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-primary text-xl">menu_book</span>
              <span class="font-label-lg text-label-lg text-on-surface font-bold">Contextual Excerpt</span>
            </div>
            <div class="flex items-center gap-2">
              <button id="speak-passage-btn" class="flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-fixed text-primary text-xs font-bold hover:bg-primary-fixed-dim transition-colors cursor-pointer" type="button" title="Listen to passage read aloud">
                <span class="material-symbols-outlined text-sm">volume_up</span>
                <span>Listen Aloud</span>
              </button>
              <span class="text-xs px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-md">#VR-902</span>
            </div>
          </div>
          <div id="passage-text" class="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high/40 font-body-lg text-body-lg text-on-surface leading-relaxed">
            <p>The old librarian was known for her <em class="text-primary font-semibold">sagacious</em> advice — her recommendations were never trivial but always insightful, helping students navigate complex literary debates with remarkable clarity.</p>
            <p class="mt-3">In contrast, the young apprentice was often <em class="text-secondary font-semibold">impetuous</em>, making hasty judgments without considering the broader consequences of his literary critiques.</p>
          </div>
          <div class="flex items-center gap-space-sm">
            <span class="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
              <span class="material-symbols-outlined text-sm">visibility</span> Key words highlighted
            </span>
          </div>
        </div>
      </section>

      <!-- RIGHT: Question & Answer Options -->
      <section class="col-span-12 lg:col-span-7 space-y-space-md">
        <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-md relative overflow-hidden">
          <div class="flex items-center justify-between mb-space-md">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-1 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-bold">Question 14</span>
              <span class="text-on-surface-variant font-label-md text-label-md">Pair Matching</span>
            </div>
            <div class="flex items-center gap-2">
              <button id="speak-question-btn" class="flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container-high text-on-surface text-xs font-bold hover:bg-primary-fixed hover:text-primary transition-colors cursor-pointer" type="button" title="Listen to question stem">
                <span class="material-symbols-outlined text-sm">volume_up</span>
                <span>Read Stem</span>
              </button>
              <button id="question-hint-quick-btn" class="flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold hover:bg-secondary-fixed-dim transition-colors cursor-pointer" type="button">
                <span class="material-symbols-outlined text-sm">lightbulb</span>
                <span>Hint</span>
              </button>
            </div>
          </div>
          <h2 id="question-stem-text" class="font-headline-sm text-headline-sm text-on-surface mb-space-md font-bold">
            Select the word from Group 1 and the word from Group 2 that are most opposite in meaning:
          </h2>
          <!-- Word Groups -->
          <div class="grid grid-cols-2 gap-space-md mb-space-lg">
            <div class="p-space-md rounded-xl bg-surface-container-low border border-outline-variant/30">
              <span class="font-label-md text-label-md uppercase font-bold text-primary block mb-2">Group 1</span>
              <div class="space-y-1.5 font-body-md text-body-md text-on-surface">
                <div class="p-2 rounded-lg bg-surface-container-lowest font-medium shadow-sm">1. Sagacious</div>
                <div class="p-2 rounded-lg bg-surface-container-lowest font-medium shadow-sm">2. Benevolent</div>
                <div class="p-2 rounded-lg bg-surface-container-lowest font-medium shadow-sm">3. Reticent</div>
              </div>
            </div>
            <div class="p-space-md rounded-xl bg-surface-container-low border border-outline-variant/30">
              <span class="font-label-md text-label-md uppercase font-bold text-secondary block mb-2">Group 2</span>
              <div class="space-y-1.5 font-body-md text-body-md text-on-surface">
                <div class="p-2 rounded-lg bg-surface-container-lowest font-medium shadow-sm">A. Malicious</div>
                <div class="p-2 rounded-lg bg-surface-container-lowest font-medium shadow-sm">B. Fatuous</div>
                <div class="p-2 rounded-lg bg-surface-container-lowest font-medium shadow-sm">C. Gregarious</div>
              </div>
            </div>
          </div>
          <!-- Multiple Choice Options -->
          <div class="space-y-space-sm mb-space-lg">
            ${[
              { letter: 'A', text: '1 and B (Sagacious & Fatuous)' },
              { letter: 'B', text: '2 and A (Benevolent & Malicious)' },
              { letter: 'C', text: '3 and C (Reticent & Gregarious)' },
              { letter: 'D', text: '1 and A (Sagacious & Malicious)' },
              { letter: 'E', text: 'Both A and B are antonym pairs' },
            ].map((opt, i) => `
              <button class="answer-bubble w-full p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant/40 hover:border-primary flex items-center justify-between transition-all group text-left cursor-pointer ${i===0?'selected border-primary':''}" data-index="${i}" data-key="${opt.letter}" type="button">
                <div class="flex items-center gap-space-md">
                  <div class="w-11 h-11 rounded-lg ${i===0?'bg-primary-container text-on-primary':'bg-surface-container-high text-on-surface'} font-headline-sm font-bold flex items-center justify-center transition-all">
                    ${opt.letter}
                  </div>
                  <span class="font-body-md text-body-md ${i===0?'text-primary font-semibold':'text-on-surface'}">${opt.text}</span>
                </div>
                <kbd class="hidden sm:inline-block px-2 py-0.5 rounded bg-surface-container-high text-outline text-xs font-mono">Key ${opt.letter}</kbd>
              </button>
            `).join('')}
          </div>
        </div>
        <!-- Navigation & Finish Actions -->
        <div class="flex items-center justify-between gap-space-md">
          <button class="flex items-center gap-2 px-space-lg py-2.5 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-lg text-label-lg shadow-sm hover:bg-surface-container-high transition-all cursor-pointer" type="button">
            <span class="material-symbols-outlined text-base">chevron_left</span> Previous (←)
          </button>
          <div class="flex items-center gap-space-sm">
            <button class="px-space-md py-2 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md hover:text-on-surface transition-all cursor-pointer" data-navigate="scorecard" type="button">Review All</button>
            <button id="finish-test-btn" class="flex items-center gap-2 px-space-lg py-2.5 rounded-full bg-tertiary-container text-on-tertiary font-label-lg text-label-lg font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer" type="button">
              <span class="material-symbols-outlined text-base">verified</span>
              <span>Finish Test &amp; Record Timecard</span>
            </button>
            <button class="flex items-center gap-2 px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer" type="button">
              Next (→) <span class="material-symbols-outlined text-base">chevron_right</span>
            </button>
          </div>
        </div>

        <!-- Keyboard Shortcut Helper Pill -->
        <div class="flex items-center justify-center gap-4 text-xs text-on-surface-variant pt-2">
          <span><kbd class="px-1.5 py-0.5 rounded bg-surface-container font-mono">A-E</kbd> Select Answer</span>
          <span>•</span>
          <span><kbd class="px-1.5 py-0.5 rounded bg-surface-container font-mono">H</kbd> Socratic Hint</span>
          <span>•</span>
          <span><kbd class="px-1.5 py-0.5 rounded bg-surface-container font-mono">F</kbd> Flag Question</span>
          <span>•</span>
          <span><kbd class="px-1.5 py-0.5 rounded bg-surface-container font-mono">← / →</kbd> Navigate</span>
        </div>
      </section>
    </div>
  </div>`;
}, function() {
  // Initialize test in ScholarWatch if not already tracked
  if (window.ScholarWatch) {
    if (!window.ScholarWatch.getCurrentTest()) {
      window.ScholarWatch.startTest({
        id: 'mock-04',
        title: 'Scholar Mock #04 — Verbal Reasoning Section',
        subject: 'Verbal Reasoning',
        category: 'GL Assessment Format',
        totalQuestions: 25,
        allottedMinutes: 25
      });
    }
    window.ScholarWatch.updateDOMWatches();
  }

  // Timer countdown
  let timeLeft = 14 * 60 + 28;
  const timerEl = document.getElementById('countdown-timer');
  if (timerEl) {
    const interval = setInterval(() => {
      if (timeLeft <= 0) { clearInterval(interval); return; }
      timeLeft--;
      const m = Math.floor(timeLeft / 60);
      const s = timeLeft % 60;
      timerEl.textContent = `${m}:${s.toString().padStart(2,'0')}`;
    }, 1000);
  }

  // Finish test action
  const finishBtn = document.getElementById('finish-test-btn');
  if (finishBtn) {
    finishBtn.addEventListener('click', async () => {
      const activeWatch = window.ScholarWatch ? window.ScholarWatch.getActiveTest() : null;
      const startTime = activeWatch ? activeWatch.startTime : new Date(Date.now() - 25 * 60000).toISOString();
      const finishTime = new Date().toISOString();

      if (window.LearnlyAPI) {
        try {
          await LearnlyAPI.submitTest('mock-04', {
            startTime: startTime,
            finishTime: finishTime,
            rawScore: 24,
            maxScore: 25,
            answers: { "q14": "4" }
          });
        } catch (err) {
          console.warn('API test submit notice:', err);
        }
      }

      if (window.ScholarWatch) {
        window.ScholarWatch.finishTest('24/25 (96%)', 128);
      }
      window.location.hash = '#scorecard';
    });
  }

  // Select Answer Helper
  function selectOption(index) {
    const bubbles = document.querySelectorAll('.answer-bubble');
    if (!bubbles[index]) return;
    bubbles.forEach(b => {
      b.classList.remove('selected', 'border-primary');
      b.querySelector('.w-11').classList.remove('bg-primary-container','text-on-primary');
      b.querySelector('.w-11').classList.add('bg-surface-container-high','text-on-surface');
      b.querySelector('.font-body-md').classList.remove('text-primary','font-semibold');
      b.querySelector('.font-body-md').classList.add('text-on-surface');
    });
    const selected = bubbles[index];
    selected.classList.add('selected', 'border-primary');
    selected.querySelector('.w-11').classList.remove('bg-surface-container-high','text-on-surface');
    selected.querySelector('.w-11').classList.add('bg-primary-container','text-on-primary');
    selected.querySelector('.font-body-md').classList.remove('text-on-surface');
    selected.querySelector('.font-body-md').classList.add('text-primary','font-semibold');
  }

  // Answer selection via mouse
  document.querySelectorAll('.answer-bubble').forEach((btn, idx) => {
    btn.addEventListener('click', () => selectOption(idx));
  });

  // AI Hint Buttons
  const hintBtn = document.getElementById('open-hint-btn');
  const quickHintBtn = document.getElementById('question-hint-quick-btn');
  if (hintBtn) hintBtn.addEventListener('click', () => window.AIBuddy && window.AIBuddy.openHintModal('VR-L5-0428'));
  if (quickHintBtn) quickHintBtn.addEventListener('click', () => window.AIBuddy && window.AIBuddy.openHintModal('VR-L5-0428'));

  // Reading Ruler Toggle
  const rulerBtn = document.getElementById('toggle-ruler-btn');
  if (rulerBtn) rulerBtn.addEventListener('click', () => window.AIBuddy && window.AIBuddy.toggleReadingRuler());

  // Text to Speech: Passage Read Aloud
  const speakPassageBtn = document.getElementById('speak-passage-btn');
  if (speakPassageBtn) {
    speakPassageBtn.addEventListener('click', () => {
      const passageEl = document.getElementById('passage-text');
      if (passageEl && window.AIBuddy) {
        speakPassageBtn.classList.add('animate-pulse');
        window.AIBuddy.speakText(passageEl.innerText, null, () => {
          speakPassageBtn.classList.remove('animate-pulse');
        });
      }
    });
  }

  // Text to Speech: Question Stem Read Aloud
  const speakQuestionBtn = document.getElementById('speak-question-btn');
  if (speakQuestionBtn) {
    speakQuestionBtn.addEventListener('click', () => {
      const stemEl = document.getElementById('question-stem-text');
      if (stemEl && window.AIBuddy) {
        speakQuestionBtn.classList.add('animate-pulse');
        window.AIBuddy.speakText(stemEl.innerText, null, () => {
          speakQuestionBtn.classList.remove('animate-pulse');
        });
      }
    });
  }

  // Font Scaling Buttons
  let currentZoom = 100;
  const decBtn = document.getElementById('font-decrease-btn');
  const incBtn = document.getElementById('font-increase-btn');
  if (decBtn) {
    decBtn.addEventListener('click', () => {
      currentZoom = Math.max(90, currentZoom - 10);
      document.querySelector('.grid-cols-12').style.fontSize = `${currentZoom}%`;
    });
  }
  if (incBtn) {
    incBtn.addEventListener('click', () => {
      currentZoom = Math.min(130, currentZoom + 10);
      document.querySelector('.grid-cols-12').style.fontSize = `${currentZoom}%`;
    });
  }

  // Global Keyboard Shortcuts
  const keyHandler = (e) => {
    // Only listen if practice arena is active
    if (window.location.hash !== '#practice-arena') return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const key = e.key.toUpperCase();
    if (key === 'A' || key === '1') selectOption(0);
    else if (key === 'B' || key === '2') selectOption(1);
    else if (key === 'C' || key === '3') selectOption(2);
    else if (key === 'D' || key === '4') selectOption(3);
    else if (key === 'E' || key === '5') selectOption(4);
    else if (key === 'H') {
      if (window.AIBuddy) window.AIBuddy.openHintModal('VR-L5-0428');
    } else if (key === 'F') {
      const flagBtn = document.getElementById('flag-quick-btn');
      if (flagBtn) flagBtn.click();
    }
  };

  window.removeEventListener('keydown', window._practiceArenaKeyHandler);
  window._practiceArenaKeyHandler = keyHandler;
  window.addEventListener('keydown', keyHandler);
});

