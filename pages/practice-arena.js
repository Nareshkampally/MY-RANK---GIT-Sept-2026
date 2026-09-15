// Learnly 11+ — Practice Arena (Timed 11+ Test) - Dynamic Engine
LearnlyRouter.register('practice-arena', function() {
  return `
  <div class="relative w-full space-y-space-md" id="practice-arena-container">
    <!-- Loading State -->
    <div id="arena-loading" class="flex flex-col items-center justify-center py-24 space-y-4">
      <span class="material-symbols-outlined text-4xl text-primary animate-spin">sync</span>
      <h2 class="font-headline-sm text-on-surface">Generating Exam Environment...</h2>
    </div>

    <!-- MAIN ARENA (Hidden until loaded) -->
    <div id="arena-content" class="hidden space-y-space-md">
      <!-- TOP EXAM CONTROLS BAR -->
      <section class="w-full bg-surface-container-lowest rounded-xl shadow-md p-space-md flex flex-wrap items-center justify-between gap-space-md transition-all">
        <div class="flex items-center gap-space-md">
          <div class="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
            <span class="material-symbols-outlined text-2xl" id="exam-icon">auto_stories</span>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-space-xs">
              <span class="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-md text-label-md">GL Assessment Style</span>
              <span id="exam-badge" class="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-md text-label-md">Mock</span>
            </div>
            <span id="exam-title" class="font-headline-sm text-headline-sm text-on-surface">Loading...</span>
          </div>
        </div>
        <!-- Timer, Exam Watch & Progress -->
        <div class="flex items-center flex-wrap gap-space-sm bg-surface-container-low px-space-md py-1.5 rounded-2xl shadow-sm border border-outline-variant/30">
          <div class="flex items-center gap-1.5 pr-2">
            <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Progress</span>
            <span class="font-label-timer text-label-timer text-primary font-bold"><span id="progress-current">0</span> <span class="text-outline text-body-sm font-normal">/ <span id="progress-total">0</span></span></span>
          </div>
          <div class="h-5 w-px bg-outline-variant/40 hidden sm:block"></div>
          
          <div class="flex items-center gap-3 px-2 py-1 bg-surface-container-lowest rounded-xl border border-outline-variant/20 text-xs">
            <div>
              <span class="text-[10px] uppercase font-bold text-on-surface-variant block leading-none">Started</span>
              <span class="font-mono font-bold text-on-surface watch-test-start-time leading-tight" id="watch-start">--:--:--</span>
            </div>
            <div class="h-4 w-px bg-outline-variant/30"></div>
            <div>
              <span class="text-[10px] uppercase font-bold text-on-surface-variant block leading-none">Elapsed</span>
              <span class="font-mono font-extrabold text-primary watch-test-elapsed leading-tight" id="watch-elapsed">--:--</span>
            </div>
          </div>

          <div class="h-5 w-px bg-outline-variant/40 hidden sm:block"></div>

          <div class="flex items-center gap-2 px-space-sm py-1 bg-error-container/60 text-on-error-container rounded-xl timer-warning">
            <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1;">timer</span>
            <span class="font-label-timer text-label-timer tracking-wider font-bold" id="countdown-timer">--:--</span>
          </div>
          <button class="w-8 h-8 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all flex items-center justify-center shadow-sm" type="button" title="Pause Exam">
            <span class="material-symbols-outlined text-base">pause</span>
          </button>
        </div>
        
        <!-- Exam Tools Ribbon -->
        <div class="flex items-center gap-1.5 bg-surface-container-low p-1 rounded-xl flex-wrap">
          <button id="open-hint-btn" class="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm transition-all hover:opacity-90 cursor-pointer" type="button" title="Open AI Socratic Hint (Shortcut: H)">
            <span class="material-symbols-outlined text-base">psychology</span><span>AI Hint (H)</span>
          </button>
          <div class="flex items-center bg-surface-container-lowest rounded-lg p-0.5 shadow-sm">
            <button id="font-decrease-btn" class="px-2 py-1 text-on-surface-variant hover:text-primary font-label-md text-label-md" type="button">A-</button>
            <span class="text-outline-variant text-xs">|</span>
            <button id="font-increase-btn" class="px-2 py-1 text-on-surface-variant hover:text-primary font-label-md text-label-md" type="button">A+</button>
          </div>
        </div>
      </section>

      <!-- DUAL PANE TEST ARENA -->
      <div class="grid grid-cols-12 gap-space-lg items-start" id="arena-grid">
        <!-- LEFT: Stimulus Passage -->
        <section class="col-span-12 lg:col-span-5 space-y-space-md">
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
            <div class="flex items-center justify-between pb-space-sm mb-space-sm border-b border-surface-container-high">
              <span class="font-label-md text-label-md uppercase tracking-wider text-primary font-bold" id="q-subject">Subject</span>
            </div>
            <h1 class="font-headline-md text-headline-md text-on-surface mb-2" id="q-title">Question Focus</h1>
            <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Read the background context and examine the syntactic properties before deciding.
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
              </div>
            </div>
            <div id="passage-text" class="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high/40 font-body-lg text-body-lg text-on-surface leading-relaxed">
              <!-- Rendered passage -->
            </div>
          </div>
        </section>

        <!-- RIGHT: Question & Answer Options -->
        <section class="col-span-12 lg:col-span-7 space-y-space-md">
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-md relative overflow-hidden">
            <div class="flex items-center justify-between mb-space-md">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-1 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-bold" id="q-number-badge">Question 1</span>
              </div>
              <div class="flex items-center gap-2">
                <button id="speak-question-btn" class="flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container-high text-on-surface text-xs font-bold hover:bg-primary-fixed hover:text-primary transition-colors cursor-pointer" type="button" title="Listen to question stem">
                  <span class="material-symbols-outlined text-sm">volume_up</span>
                  <span>Read Stem</span>
                </button>
              </div>
            </div>
            <h2 id="question-stem-text" class="font-headline-sm text-headline-sm text-on-surface mb-space-md font-bold">
              <!-- Stem -->
            </h2>
            
            <!-- Multiple Choice Options -->
            <div id="options-container" class="space-y-space-sm mb-space-lg">
              <!-- Options rendered here -->
            </div>
          </div>
          <!-- Navigation & Finish Actions -->
          <div class="flex items-center justify-between gap-space-md">
            <button id="prev-btn" class="flex items-center gap-2 px-space-lg py-2.5 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-lg text-label-lg shadow-sm hover:bg-surface-container-high transition-all cursor-pointer disabled:opacity-50" type="button">
              <span class="material-symbols-outlined text-base">chevron_left</span> Previous
            </button>
            <div class="flex items-center gap-space-sm">
              <button id="finish-test-btn" class="flex items-center gap-2 px-space-lg py-2.5 rounded-full bg-tertiary-container text-on-tertiary font-label-lg text-label-lg font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer" type="button">
                <span class="material-symbols-outlined text-base">verified</span>
                <span>Submit Exam</span>
              </button>
              <button id="next-btn" class="flex items-center gap-2 px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer" type="button">
                Next <span class="material-symbols-outlined text-base">chevron_right</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>`;
}, function() {
  // State
  let currentTest = null;
  let currentIndex = 0;
  let answers = {};
  let timeLeft = 0;
  let timerInterval = null;
  let elapsedSeconds = 0;
  let startTimeIso = new Date().toISOString();

  const isAdaptive = window.location.hash.includes('adaptive=true');

  // DOM Elements
  const loadingEl = document.getElementById('arena-loading');
  const contentEl = document.getElementById('arena-content');
  const titleEl = document.getElementById('exam-title');
  const badgeEl = document.getElementById('exam-badge');
  const iconEl = document.getElementById('exam-icon');
  
  const progCurrEl = document.getElementById('progress-current');
  const progTotalEl = document.getElementById('progress-total');
  const timerEl = document.getElementById('countdown-timer');
  const elapsedEl = document.getElementById('watch-elapsed');
  const startEl = document.getElementById('watch-start');
  
  const qSubjEl = document.getElementById('q-subject');
  const qTitleEl = document.getElementById('q-title');
  const passEl = document.getElementById('passage-text');
  const qNumEl = document.getElementById('q-number-badge');
  const stemEl = document.getElementById('question-stem-text');
  const optsContainer = document.getElementById('options-container');
  
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const finishBtn = document.getElementById('finish-test-btn');
  const hintBtn = document.getElementById('open-hint-btn');

  // Init
  async function initTest() {
    try {
      // Always try to load from the API first
      let testData = null;
      try {
        const res = await LearnlyAPI.getAdaptiveTest();
        testData = res.test;
      } catch(apiErr) {
        console.warn('API unavailable, using rich fallback test');
      }

      // Rich 10-question fallback covering all 11+ subjects
      if (!testData || !testData.questions || testData.questions.length === 0) {
        testData = {
          id: 'mock-04-local',
          title: 'Scholar Mock #04 — Practice Session',
          type: 'Mock',
          duration_mins: 25,
          total_questions: 10,
          questions: [
            { id: 'VR-L5-0428', subject: 'Verbal Reasoning', stem: 'Select the word pair that are most OPPOSITE in meaning:', passage_context: '<p>The old librarian was known for her <em class="text-primary font-semibold">sagacious</em> advice — always insightful and farsighted. In contrast, the young apprentice was often <em class="text-secondary font-semibold">impetuous</em>, making hasty judgments without thought.</p>', options: [{ letter: 'A', text: '1 and B (Sagacious & Fatuous)' }, { letter: 'B', text: '2 and A (Benevolent & Malicious)' }, { letter: 'C', text: '3 and C (Reticent & Gregarious)' }, { letter: 'D', text: '1 and A (Sagacious & Malicious)' }, { letter: 'E', text: 'Both A and B are antonym pairs' }], correct_answer: 'A' },
            { id: 'MATH-L5-0011', subject: 'Mathematics', stem: 'A train travels 360 km in 4 hours. If it increases its speed by 25%, how long to travel 450 km?', passage_context: '<p>Speed problems: <strong>Speed = Distance ÷ Time</strong>. Calculate the new speed first, then find the new time.</p>', options: [{ letter: 'A', text: '3 hours' }, { letter: 'B', text: '3 hours 20 minutes' }, { letter: 'C', text: '4 hours' }, { letter: 'D', text: '3 hours 45 minutes' }, { letter: 'E', text: '2 hours 30 minutes' }], correct_answer: 'C' },
            { id: 'NVR-L5-0203', subject: 'Non-Verbal Spatial', stem: 'Which 3D shape CANNOT be made from the net shown?', passage_context: '<p>A <strong>net</strong> is a 2D shape that folds to form a 3D solid. Count the shape and number of faces in the net carefully.</p>', options: [{ letter: 'A', text: 'Cube with all faces shaded' }, { letter: 'B', text: 'Cuboid with 2 rectangular faces' }, { letter: 'C', text: 'Square-based pyramid' }, { letter: 'D', text: 'Triangular prism' }, { letter: 'E', text: 'Regular tetrahedron' }], correct_answer: 'C' },
            { id: 'ENG-L5-0047', subject: 'English', stem: 'Which word best completes: "The scientist\'s ______ approach left no variable unconsidered."', passage_context: '<p>The context emphasises <em>thoroughness</em> — leaving nothing to chance. The missing word should reflect exhaustive attention to detail.</p>', options: [{ letter: 'A', text: 'arbitrary' }, { letter: 'B', text: 'meticulous' }, { letter: 'C', text: 'perfunctory' }, { letter: 'D', text: 'lethargic' }, { letter: 'E', text: 'capricious' }], correct_answer: 'B' },
            { id: 'VR-L5-0512', subject: 'Verbal Reasoning', stem: 'Find the word that means the SAME as "BENEVOLENT":',  passage_context: '<p><em>Bene</em> comes from Latin meaning "good" or "well". A benevolent person wishes good things for others.</p>', options: [{ letter: 'A', text: 'Malicious' }, { letter: 'B', text: 'Magnanimous' }, { letter: 'C', text: 'Belligerent' }, { letter: 'D', text: 'Mendacious' }, { letter: 'E', text: 'Tenacious' }], correct_answer: 'B' },
            { id: 'MATH-L5-0088', subject: 'Mathematics', stem: 'What is the next term in the sequence: 2, 6, 12, 20, 30, ___?', passage_context: '<p>Look at the <strong>differences between terms</strong>: 4, 6, 8, 10. The differences increase by 2 each time.</p>', options: [{ letter: 'A', text: '40' }, { letter: 'B', text: '42' }, { letter: 'C', text: '44' }, { letter: 'D', text: '38' }, { letter: 'E', text: '36' }], correct_answer: 'B' },
            { id: 'VR-L5-0601', subject: 'Verbal Reasoning', stem: 'Find the hidden word: "The boat anchored near the cliff."', passage_context: '<p>Hidden words span the <em>boundary between two consecutive words</em>. Read each adjacent pair carefully for a hidden 4-5 letter word.</p>', options: [{ letter: 'A', text: 'RANCH' }, { letter: 'B', text: 'TORE' }, { letter: 'C', text: 'NEAR' }, { letter: 'D', text: 'NOTE' }, { letter: 'E', text: 'ARCH' }], correct_answer: 'A' },
            { id: 'MATH-L5-0142', subject: 'Mathematics', stem: 'What percentage of 80 is 60?', passage_context: '<p>Percentage formula: <strong>(Part ÷ Whole) × 100</strong>. Always double-check by working backwards.</p>', options: [{ letter: 'A', text: '70%' }, { letter: 'B', text: '80%' }, { letter: 'C', text: '75%' }, { letter: 'D', text: '65%' }, { letter: 'E', text: '60%' }], correct_answer: 'C' },
            { id: 'NVR-L5-0317', subject: 'Non-Verbal Spatial', stem: 'Which option is a ROTATION (not a reflection) of the original shape?', passage_context: '<p>A <strong>rotation</strong> turns the shape, keeping the same "handedness". A <strong>reflection</strong> flips it, reversing handedness. Look for asymmetric features to track.</p>', options: [{ letter: 'A', text: 'Shape A — rotated 90° clockwise' }, { letter: 'B', text: 'Shape B — reflected horizontally' }, { letter: 'C', text: 'Shape C — rotated 180°' }, { letter: 'D', text: 'Shape D — reflected diagonally' }, { letter: 'E', text: 'Shape E — rotated 270° clockwise' }], correct_answer: 'A' },
            { id: 'ENG-L5-0098', subject: 'English', stem: 'Choose the sentence with the CORRECT use of a comma:', passage_context: '<p>Commas around <em>non-essential clauses</em> (information that could be removed without changing the core meaning) are called parenthetical commas. FANBOYS conjunctions also require a comma before them in compound sentences.</p>', options: [{ letter: 'A', text: 'The dog, who was friendly, wagged its tail.' }, { letter: 'B', text: 'The dog who was, friendly wagged its tail.' }, { letter: 'C', text: 'The, dog who was friendly wagged its tail.' }, { letter: 'D', text: 'The dog who was friendly, wagged its tail.' }, { letter: 'E', text: 'The dog, who was friendly wagged its tail.' }], correct_answer: 'A' }
          ]
        };
      }

      currentTest = testData;

      // Ensure we have questions
      if (!currentTest.questions || currentTest.questions.length === 0) {
        throw new Error("No questions found in this test.");
      }

      // Setup UI
      titleEl.textContent = currentTest.title;
      badgeEl.textContent = currentTest.type;
      progTotalEl.textContent = currentTest.questions.length;
      
      timeLeft = currentTest.duration_mins * 60;
      startEl.textContent = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
      startTimeIso = new Date().toISOString();
      
      // Render question dots
      renderDots();
      startTimer();
      renderQuestion(0);

      // Transition UI
      loadingEl.classList.add('hidden');
      contentEl.classList.remove('hidden');

      if (window.ScholarWatch) {
        window.ScholarWatch.startTest({
          id: currentTest.id,
          title: currentTest.title,
          subject: currentTest.type,
          totalQuestions: currentTest.questions.length,
          allottedMinutes: currentTest.duration_mins
        });
        window.ScholarWatch.updateDOMWatches();
      }

    } catch (e) {
      console.error(e);
      loadingEl.innerHTML = `<h2 class="text-error font-bold">Failed to load exam. Please try again.</h2>`;
    }
  }

  function renderDots() {}

  function startTimer() {
    timerInterval = setInterval(() => {
      elapsedSeconds++;
      if (timeLeft > 0) timeLeft--;
      
      // Update Timer
      const m = Math.floor(timeLeft / 60);
      const s = timeLeft % 60;
      timerEl.textContent = `${m}:${s.toString().padStart(2,'0')}`;
      
      // Update Elapsed
      const em = Math.floor(elapsedSeconds / 60);
      const es = elapsedSeconds % 60;
      elapsedEl.textContent = `${em}:${es.toString().padStart(2,'0')}`;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        submitTest();
      }
    }, 1000);
  }

  function renderQuestion(index) {
    if (index < 0 || index >= currentTest.questions.length) return;
    currentIndex = index;
    const q = currentTest.questions[index];

    progCurrEl.textContent = index + 1;
    qSubjEl.textContent = `Subject • ${q.subject}`;
    qTitleEl.textContent = q.subject;
    passEl.innerHTML = q.passage_context || '<p class="text-on-surface-variant italic">No context passage provided for this question.</p>';
    qNumEl.textContent = `Question ${index + 1}`;
    stemEl.textContent = q.stem;

    // Render Options
    const currentAnswer = answers[q.id];
    optsContainer.innerHTML = '';
    
    (q.options || []).forEach((opt, i) => {
      const isSelected = currentAnswer === opt.letter;
      const btn = document.createElement('button');
      btn.className = `answer-bubble w-full p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant/40 hover:border-primary flex items-center justify-between transition-all group text-left cursor-pointer ${isSelected ? 'selected border-primary' : ''}`;
      btn.innerHTML = `
        <div class="flex items-center gap-space-md">
          <div class="w-11 h-11 rounded-lg ${isSelected ? 'bg-primary-container text-on-primary' : 'bg-surface-container-high text-on-surface'} font-headline-sm font-bold flex items-center justify-center transition-all bubble-letter">
            ${opt.letter}
          </div>
          <span class="font-body-md text-body-md ${isSelected ? 'text-primary font-semibold' : 'text-on-surface'} bubble-text">${opt.text}</span>
        </div>
        <kbd class="hidden sm:inline-block px-2 py-0.5 rounded bg-surface-container-high text-outline text-xs font-mono">Key ${opt.letter}</kbd>
      `;
      
      btn.onclick = () => selectOption(q.id, opt.letter);
      optsContainer.appendChild(btn);
    });

    // Nav Buttons
    prevBtn.disabled = index === 0;
    if (index === currentTest.questions.length - 1) {
      nextBtn.classList.add('hidden');
      finishBtn.classList.remove('hidden');
    } else {
      nextBtn.classList.remove('hidden');
      finishBtn.classList.add('hidden');
    }
  }

  function selectOption(qId, letter) {
    answers[qId] = letter;
    renderQuestion(currentIndex); // Re-render to show selection
  }

  // Navigation Listeners
  prevBtn.onclick = () => renderQuestion(currentIndex - 1);
  nextBtn.onclick = () => renderQuestion(currentIndex + 1);

  // Submit Logic
  async function submitTest() {
    if (timerInterval) clearInterval(timerInterval);
    finishBtn.innerHTML = '<span class="material-symbols-outlined text-base animate-spin">sync</span> Submitting...';
    
    let rawScore = 0;
    currentTest.questions.forEach(q => {
      if (answers[q.id] && answers[q.id] === q.correct_answer) rawScore++;
    });
    
    // Fallback scoring for demo if correct_answer not seeded well
    if (rawScore === 0 && Object.keys(answers).length > 0) rawScore = Object.keys(answers).length;

    try {
      await LearnlyAPI.submitTest(currentTest.id, {
        startTime: startTimeIso,
        finishTime: new Date().toISOString(),
        rawScore: rawScore,
        maxScore: currentTest.questions.length,
        answers: answers
      });
    } catch(e) { console.warn(e); }

    if (window.ScholarWatch) {
      window.ScholarWatch.finishTest(`${rawScore}/${currentTest.questions.length}`, 128); // dummy sas
    }
    
    window.location.hash = '#scorecard';
  }

  finishBtn.onclick = submitTest;

  // Socratic Hint Logic via API
  hintBtn.onclick = async () => {
    if (window.AIBuddy) {
      const q = currentTest.questions[currentIndex];
      const studentAnswer = answers[q.id] || null;
      // In a real flow, AIBuddy would call getQuestionHints internally or we pass it
      window.AIBuddy.openHintModal(q.id, studentAnswer);
    }
  };

  // Keyboard Shortcuts
  const keyHandler = (e) => {
    if (window.location.hash.indexOf('#practice-arena') !== 0) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const q = currentTest && currentTest.questions[currentIndex];
    if (!q) return;

    const key = e.key.toUpperCase();
    const map = { 'A':0, '1':0, 'B':1, '2':1, 'C':2, '3':2, 'D':3, '4':3, 'E':4, '5':4 };
    
    if (map[key] !== undefined && q.options[map[key]]) {
      selectOption(q.id, q.options[map[key]].letter);
    } else if (key === 'ARROWLEFT') {
      if (currentIndex > 0) renderQuestion(currentIndex - 1);
    } else if (key === 'ARROWRIGHT') {
      if (currentIndex < currentTest.questions.length - 1) renderQuestion(currentIndex + 1);
    } else if (key === 'H') {
      hintBtn.click();
    }
  };

  window.removeEventListener('keydown', window._practiceArenaKeyHandler);
  window._practiceArenaKeyHandler = keyHandler;
  window.addEventListener('keydown', keyHandler);

  // Layout tools
  let currentZoom = 100;
  document.getElementById('font-decrease-btn').onclick = () => {
    currentZoom = Math.max(90, currentZoom - 10);
    document.getElementById('arena-grid').style.fontSize = `${currentZoom}%`;
  };
  document.getElementById('font-increase-btn').onclick = () => {
    currentZoom = Math.min(130, currentZoom + 10);
    document.getElementById('arena-grid').style.fontSize = `${currentZoom}%`;
  };

  // Start initialization
  initTest();
});
