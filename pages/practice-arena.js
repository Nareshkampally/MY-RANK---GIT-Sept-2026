// Learnly 11+ — Practice Arena (Timed 11+ Test) - Dynamic Engine
// Supports All 4 Subjects (Maths, VR, NVR, English) and Subject-Topic Weak Area Targeting

LearnlyRouter.register('practice-arena', function() {
  return `
  <div class="relative w-full space-y-space-md" id="practice-arena-container">
    <!-- Loading State -->
    <div id="arena-loading" class="flex flex-col items-center justify-center py-24 space-y-4">
      <span class="material-symbols-outlined text-4xl text-primary animate-spin">sync</span>
      <h2 class="font-headline-sm text-on-surface">Generating Exam Environment...</h2>
    </div>

    <!-- MAIN ARENA (Hidden until loaded) -->
    <div id="arena-content" class="hidden flex flex-col h-[calc(100vh-8rem)]">
      <!-- TOP EXAM CONTROLS BAR -->
      <section id="arena-header-bar" class="relative flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-3xl overflow-hidden shadow-md shrink-0 mb-4 transition-colors" style="background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%);">
        <!-- Decorative elements -->
        <div class="absolute -right-12 -top-12 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
        <div class="absolute left-1/4 bottom-0 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
        
        <div class="flex items-center gap-space-md relative z-10">
          <div class="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center text-white border border-white/20 shadow-sm backdrop-blur-md">
            <span class="material-symbols-outlined text-2xl" id="exam-icon">auto_stories</span>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-2 mb-0.5">
              <span id="exam-subject-badge" class="px-2.5 py-0.5 rounded-full bg-white/20 text-white font-bold text-xs border border-white/20 backdrop-blur-md">Mathematics</span>
              <span id="exam-badge" class="px-2.5 py-0.5 rounded-full bg-yellow-400/20 text-yellow-200 border border-yellow-400/30 font-bold text-xs">Topic Deep-Dive</span>
            </div>
            <span id="exam-title" class="font-bold text-xl text-white">Loading...</span>
          </div>
        </div>

        <!-- Timer, Exam Watch & Progress -->
        <div class="flex items-center flex-wrap gap-3 relative z-10">
          <div class="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 rounded-full border border-white/15 shadow-sm backdrop-blur-md">
            <span class="font-bold text-xs text-white/70 uppercase tracking-wider">Q</span>
            <span class="font-bold text-white text-sm"><span id="progress-current">0</span> <span class="text-white/50 text-xs">/ <span id="progress-total">0</span></span></span>
          </div>
          
          <div class="flex items-center gap-2 px-3.5 py-1.5 bg-white/10 rounded-full border border-white/15 text-xs shadow-sm backdrop-blur-md text-white">
            <span class="text-[10px] uppercase font-bold text-white/70">Elapsed:</span>
            <span class="font-mono font-extrabold text-yellow-300 leading-tight" id="watch-elapsed">00:00</span>
          </div>

          <div class="flex items-center gap-2 px-3.5 py-1.5 bg-rose-500/30 text-rose-100 rounded-full font-mono shadow-sm border border-rose-400/30 backdrop-blur-md">
            <span class="material-symbols-outlined text-base">timer</span>
            <span class="text-sm tracking-wider font-extrabold" id="countdown-timer">--:--</span>
          </div>

          <!-- Switch Subject / Topic Picker Button -->
          <button id="switch-topic-btn" class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-indigo-900 font-extrabold text-xs shadow hover:bg-slate-100 transition-all cursor-pointer" type="button">
            <span class="material-symbols-outlined text-sm">tune</span>
            <span>Switch Subject / Topic</span>
          </button>
        </div>
        
        <!-- Exam Tools Ribbon -->
        <div class="flex items-center gap-2 relative z-10">
          <a href="#learn-solve" class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-indigo-950 font-black text-xs shadow-md transition-all cursor-pointer" title="Open Step-by-Step Method Breakdown Studio">
            <span class="material-symbols-outlined text-base">lightbulb</span><span>Learn &amp; Solve</span>
          </a>
          <button id="open-hint-btn" class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 text-white font-bold text-xs shadow-sm transition-all hover:bg-white/25 border border-white/20 backdrop-blur-md cursor-pointer" type="button" title="Open AI Socratic Hint (Shortcut: H)">
            <span class="material-symbols-outlined text-base">psychology</span><span>Hint (H)</span>
          </button>
          <div class="flex items-center bg-white/10 rounded-full px-1 py-0.5 shadow-sm border border-white/15 backdrop-blur-md text-white text-xs">
            <button id="font-decrease-btn" class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/15 font-bold transition-colors" type="button">A-</button>
            <button id="font-increase-btn" class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/15 font-bold transition-colors" type="button">A+</button>
          </div>
        </div>
      </section>

      <!-- SECTION NAVIGATION RIBBON & QUESTION PALETTE BAR -->
      <section class="flex flex-wrap items-center justify-between gap-3 pt-3 pb-2 border-b border-outline-variant/20 relative z-10" id="section-nav-strip">
        <div class="flex items-center gap-2 overflow-x-auto pb-1" id="section-tabs-container">
          <!-- Dynamic Section Pills: e.g. Section 1: Maths, Section 2: VR, etc. -->
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <button id="toggle-palette-btn" class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-bold text-xs shadow-sm border border-outline-variant/30 transition-all cursor-pointer" type="button">
            <span class="material-symbols-outlined text-sm text-primary">apps</span>
            <span id="palette-summary-label">Question Palette (1–50)</span>
          </button>
        </div>
      </section>

      <!-- DUAL PANE TEST ARENA -->
      <div class="flex-grow grid grid-cols-12 gap-8 items-start w-full pt-4 pb-8 overflow-y-auto" id="arena-grid">
        <!-- LEFT: Stimulus Passage & Weak Area Context -->
        <section class="col-span-12 lg:col-span-5 flex flex-col h-full gap-4">
          <div class="bg-surface border border-outline-variant/30 rounded-3xl p-6 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 left-0 w-2 h-full bg-primary" id="q-accent-bar"></div>
            <div class="flex items-center justify-between pb-3 mb-3 border-b border-outline-variant/20">
              <span class="text-xs uppercase tracking-widest text-primary font-extrabold" id="q-subject">Subject</span>
              <span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold" id="q-topic-tag">Topic</span>
            </div>
            <h1 class="text-xl font-extrabold text-on-surface mb-2" id="q-title">Question Focus</h1>
            <p class="text-sm text-on-surface-variant leading-relaxed">
              Examine the contextual details, syntax, and rules below before submitting your selection.
            </p>
          </div>
          <!-- Context Excerpt -->
          <div class="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 shadow-sm flex-grow flex flex-col">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-xl">menu_book</span>
                <span class="font-bold text-base text-on-surface">Context &amp; Rules</span>
              </div>
              <button id="speak-passage-btn" class="flex items-center gap-1 px-3 py-1 rounded-full bg-surface text-primary border border-primary/20 text-xs font-bold hover:bg-primary/10 transition-colors cursor-pointer" type="button">
                <span class="material-symbols-outlined text-sm">volume_up</span>
                <span>Listen</span>
              </button>
            </div>
            <div id="passage-text" class="flex-grow p-5 rounded-2xl bg-surface border border-outline-variant/20 text-sm text-on-surface leading-relaxed overflow-y-auto">
              <!-- Rendered passage -->
            </div>
          </div>
        </section>

        <!-- RIGHT: Question & Answer Options -->
        <section class="col-span-12 lg:col-span-7 flex flex-col h-full">
          <div class="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-7 shadow-sm relative overflow-hidden flex-grow flex flex-col">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2">
                <span class="px-4 py-1 rounded-full bg-primary text-on-primary text-xs font-extrabold" id="q-number-badge">Question 1</span>
              </div>
              <button id="speak-question-btn" class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-outline-variant/30 text-on-surface text-xs font-bold hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer" type="button">
                <span class="material-symbols-outlined text-sm">volume_up</span>
                <span>Read Stem</span>
              </button>
            </div>
            <h2 id="question-stem-text" class="text-xl text-on-surface mb-6 font-extrabold leading-snug">
              <!-- Stem -->
            </h2>
            
            <!-- Multiple Choice Options -->
            <div id="options-container" class="space-y-3 mb-6 flex-grow">
              <!-- Options rendered here -->
            </div>

            <!-- Navigation & Finish Actions -->
            <div class="flex items-center justify-between pt-4 border-t border-outline-variant/30 mt-auto">
              <button id="prev-btn" class="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-surface border border-outline-variant/30 text-on-surface-variant font-bold text-xs shadow-sm hover:bg-surface-container transition-all cursor-pointer disabled:opacity-50" type="button">
                <span class="material-symbols-outlined text-base">chevron_left</span> Previous
              </button>
              <div class="flex items-center gap-3">
                <button id="finish-test-btn" class="flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer" type="button">
                  <span class="material-symbols-outlined text-base">verified</span>
                  <span>Submit Exam</span>
                </button>
                <button id="next-btn" class="flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-primary text-on-primary font-extrabold text-xs shadow-md transition-all cursor-pointer" type="button">
                  Next <span class="material-symbols-outlined text-base">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- SUBJECT & TOPIC SELECTION MODAL -->
    <div id="topic-selector-modal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden items-center justify-center p-4">
      <div class="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
        <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-indigo-600 text-2xl">category</span>
            <div>
              <h3 class="text-lg font-extrabold text-slate-900">Choose Mock Subject &amp; Weak Topic</h3>
              <p class="text-xs text-slate-500">Practice full composite mocks or drill specific weak syllabus areas.</p>
            </div>
          </div>
          <button id="close-topic-modal-btn" class="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>

        <!-- 4 Subjects Tabs -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4" id="modal-subject-tabs">
          <button class="topic-modal-subj-btn p-3 rounded-2xl border-2 border-indigo-600 bg-indigo-50/70 text-indigo-900 font-bold text-xs text-center transition-all flex flex-col items-center gap-1" data-subject="maths">
            <span class="material-symbols-outlined text-xl text-indigo-600">calculate</span>
            Mathematics
          </button>
          <button class="topic-modal-subj-btn p-3 rounded-2xl border-2 border-slate-200 bg-white text-slate-700 font-bold text-xs text-center transition-all flex flex-col items-center gap-1 hover:border-purple-300" data-subject="vr">
            <span class="material-symbols-outlined text-xl text-purple-600">psychology</span>
            Verbal Reasoning
          </button>
          <button class="topic-modal-subj-btn p-3 rounded-2xl border-2 border-slate-200 bg-white text-slate-700 font-bold text-xs text-center transition-all flex flex-col items-center gap-1 hover:border-emerald-300" data-subject="nvr">
            <span class="material-symbols-outlined text-xl text-emerald-600">view_in_ar</span>
            Non-Verbal
          </button>
          <button class="topic-modal-subj-btn p-3 rounded-2xl border-2 border-slate-200 bg-white text-slate-700 font-bold text-xs text-center transition-all flex flex-col items-center gap-1 hover:border-rose-300" data-subject="english">
            <span class="material-symbols-outlined text-xl text-rose-600">menu_book</span>
            English &amp; SPaG
          </button>
        </div>

        <!-- Focus Topics Grid -->
        <div class="mb-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-extrabold uppercase text-slate-700 tracking-wider">Select Topic or Syllabus Area:</span>
            <button type="button" id="select-all-topics-btn" class="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer">Practice Full Subject</button>
          </div>
          <div class="space-y-2 max-h-48 overflow-y-auto pr-1" id="modal-topic-options">
            <!-- Populated dynamically -->
          </div>
        </div>

        <!-- Test Length Selector (Questions Count) -->
        <div class="mb-4 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-extrabold uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
              <span class="material-symbols-outlined text-sm text-indigo-600">quiz</span>
              <span>Test Length (Number of Questions):</span>
            </span>
            <span class="text-[11px] text-indigo-700 font-bold" id="selected-length-label">Standard 11+ Mock (50 Questions)</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2" id="length-selector-container">
            <button type="button" class="test-len-btn py-2 px-2.5 rounded-xl text-xs font-bold border-2 border-indigo-600 bg-indigo-50 text-indigo-900 shadow-sm transition-all text-center" data-length="50">
              50 Qs <span class="text-[10px] text-indigo-700 block font-bold">Standard 11+ (50Q)</span>
            </button>
            <button type="button" class="test-len-btn py-2 px-2.5 rounded-xl text-xs font-bold border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition-all text-center" data-length="80">
              80 Qs <span class="text-[10px] text-slate-400 block font-normal">GL Assessment VR</span>
            </button>
            <button type="button" class="test-len-btn py-2 px-2.5 rounded-xl text-xs font-bold border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition-all text-center" data-length="100">
              100 Qs <span class="text-[10px] text-slate-400 block font-normal">Full Consortium</span>
            </button>
            <button type="button" class="test-len-btn py-2 px-2.5 rounded-xl text-xs font-bold border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition-all text-center" data-length="200">
              200 Qs <span class="text-[10px] text-slate-400 block font-normal">50Q per Section</span>
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between pt-3 border-t border-slate-100">
          <button id="modal-composite-btn" class="px-4 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer">
            <span class="material-symbols-outlined text-sm">assignment</span>
            <span>Full 4-Subject Mock (100 Questions)</span>
          </button>
          <div class="flex items-center gap-2">
            <button id="cancel-topic-modal-btn" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100">Cancel</button>
            <button id="launch-topic-test-btn" class="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all">
              Launch Test
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- QUESTION PALETTE / OVERVIEW MODAL -->
    <div id="palette-modal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden items-center justify-center p-4">
      <div class="bg-white rounded-3xl max-w-3xl w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 max-h-[85vh] flex flex-col">
        <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-indigo-600 text-2xl">apps</span>
            <div>
              <h3 class="text-base font-extrabold text-slate-900" id="palette-modal-title">Question Navigator</h3>
              <p class="text-xs text-slate-500">Jump directly to any question across all sections.</p>
            </div>
          </div>
          <button id="close-palette-modal-btn" class="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 cursor-pointer">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <div class="flex-grow overflow-y-auto pr-1 space-y-4" id="palette-sections-grid">
          <!-- Grid of all questions divided by section -->
        </div>
        <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
          <div class="flex items-center gap-3">
            <span class="flex items-center gap-1"><span class="w-3 h-3 rounded-md bg-emerald-500 inline-block"></span> Answered</span>
            <span class="flex items-center gap-1"><span class="w-3 h-3 rounded-md bg-slate-200 inline-block"></span> Unanswered</span>
            <span class="flex items-center gap-1"><span class="w-3 h-3 rounded-md border-2 border-indigo-600 inline-block"></span> Current</span>
          </div>
          <button id="close-palette-bottom-btn" class="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs cursor-pointer">Close</button>
        </div>
      </div>
    </div>
  </div>`;
}, function() {
  // Comprehensive 4-Subject Question Bank with Generative Multi-Question Scaling (25 to 100 Qs)
  const QUESTION_BANK = {
    maths: {
      name: 'Mathematics',
      gradient: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
      topics: [
        { id: 'remainder-theory', name: 'Remainder Theory & Multi-Step Division' },
        { id: 'algebra-sequences', name: 'Algebra, Equations & nth Term' },
        { id: 'fractions-decimals', name: 'Fractions, Decimals & Percentages' },
        { id: 'ratio-scaling', name: 'Ratios, Scale & Proportions' },
        { id: 'speed-distance', name: 'Speed, Distance & Time Problems' },
        { id: 'geometry-shapes', name: 'Geometry, Angles & Perimeters' }
      ],
      baseQuestions: [
        { id: 'MATH-Q1', topic: 'speed-distance', topicName: 'Speed, Distance & Time', subject: 'Mathematics', stem: 'A train travels 360 km in 4 hours. If it increases its speed by 25%, how long will it take to travel 450 km?', passage_context: '<p>Formula reminder: <strong>Speed = Distance ÷ Time</strong>. Calculate initial speed, apply +25%, then calculate the new duration: <em>Time = Distance ÷ New Speed</em>.</p>', options: [{ letter: 'A', text: '3 hours' }, { letter: 'B', text: '3 hours 20 minutes' }, { letter: 'C', text: '4 hours' }, { letter: 'D', text: '3 hours 45 minutes' }, { letter: 'E', text: '2 hours 30 minutes' }], correct_answer: 'C', explanation: 'Initial speed = 360 ÷ 4 = 90 km/h. +25% speed = 90 × 1.25 = 112.5 km/h. New time = 450 ÷ 112.5 = 4 hours. Correct Answer: C.' },
        { id: 'MATH-Q2', topic: 'remainder-theory', topicName: 'Remainder Theory', subject: 'Mathematics', stem: 'When a number N is divided by 7, the remainder is 5. What is the remainder when (3N + 4) is divided by 7?', passage_context: '<p>Remainder arithmetic rule: substitute N = 5 directly into (3N + 4) or test with small integers like N = 12.</p>', options: [{ letter: 'A', text: '1' }, { letter: 'B', text: '3' }, { letter: 'C', text: '5' }, { letter: 'D', text: '6' }, { letter: 'E', text: '4' }], correct_answer: 'C', explanation: 'N ≡ 5 (mod 7). 3N + 4 ≡ 3(5) + 4 = 15 + 4 = 19. 19 ÷ 7 = 2 remainder 5. Correct Answer: C.' },
        { id: 'MATH-Q3', topic: 'algebra-sequences', topicName: 'Algebra & Sequences', subject: 'Mathematics', stem: 'What is the 8th term of the quadratic sequence: 3, 8, 15, 24, 35...?', passage_context: '<p>First differences: 5, 7, 9, 11... Second differences are constant at 2. The formula is n² + 2n.</p>', options: [{ letter: 'A', text: '72' }, { letter: 'B', text: '80' }, { letter: 'C', text: '63' }, { letter: 'D', text: '84' }, { letter: 'E', text: '99' }], correct_answer: 'B', explanation: 'Formula is n(n + 2). For n = 8: 8 × (8 + 2) = 8 × 10 = 80. Correct Answer: B.' },
        { id: 'MATH-Q4', topic: 'fractions-decimals', topicName: 'Fractions & Percentages', subject: 'Mathematics', stem: 'What percentage of 80 is 60?', passage_context: '<p>Percentage calculation: <strong>(Part ÷ Whole) × 100</strong>.</p>', options: [{ letter: 'A', text: '70%' }, { letter: 'B', text: '80%' }, { letter: 'C', text: '75%' }, { letter: 'D', text: '65%' }, { letter: 'E', text: '60%' }], correct_answer: 'C', explanation: '60/80 = 3/4 = 0.75 = 75%. Correct Answer: C.' },
        { id: 'MATH-Q5', topic: 'ratio-scaling', topicName: 'Ratio & Proportions', subject: 'Mathematics', stem: 'In a school of 420 students, the ratio of boys to girls is 4:3. If 20 more girls join, what is the new ratio?', passage_context: '<p>Total parts = 4 + 3 = 7 parts. Find the value of 1 part, calculate initial numbers, add 20 girls, then simplify.</p>', options: [{ letter: 'A', text: '6:5' }, { letter: 'B', text: '1:1' }, { letter: 'C', text: '5:4' }, { letter: 'D', text: '7:6' }, { letter: 'E', text: '4:3' }], correct_answer: 'A', explanation: '1 part = 420 ÷ 7 = 60. Boys = 240, Girls = 180. Add 20 girls = 200 girls. New ratio = 240:200 = 6:5. Correct Answer: A.' },
        { id: 'MATH-Q6', topic: 'geometry-shapes', topicName: 'Geometry & Angles', subject: 'Mathematics', stem: 'Two angles in a triangle are 48° and 76°. What is the third angle?', passage_context: '<p>Rule: The sum of interior angles in any Euclidean triangle is always 180°.</p>', options: [{ letter: 'A', text: '56°' }, { letter: 'B', text: '66°' }, { letter: 'C', text: '46°' }, { letter: 'D', text: '58°' }, { letter: 'E', text: '62°' }], correct_answer: 'A', explanation: '180° - (48° + 76°) = 180° - 124° = 56°. Correct Answer: A.' },
        { id: 'MATH-Q7', topic: 'speed-distance', topicName: 'Speed, Distance & Time', subject: 'Mathematics', stem: 'A cyclist rides at 18 km/h. How many metres does she travel in 40 seconds?', passage_context: '<p>Conversion: 18 km/h = 18,000 m ÷ 3,600 s = 5 m/s. Then multiply by 40 seconds.</p>', options: [{ letter: 'A', text: '180 m' }, { letter: 'B', text: '200 m' }, { letter: 'C', text: '240 m' }, { letter: 'D', text: '160 m' }, { letter: 'E', text: '220 m' }], correct_answer: 'B', explanation: '18 km/h = 5 m/s. Distance = 5 × 40 = 200 metres. Correct Answer: B.' },
        { id: 'MATH-Q8', topic: 'remainder-theory', topicName: 'Remainder Theory', subject: 'Mathematics', stem: 'What is the smallest positive integer that leaves a remainder of 2 when divided by 3, and a remainder of 3 when divided by 4?', passage_context: '<p>List integers congruent to 2 (mod 3): 2, 5, 8, 11, 14... and check which gives remainder 3 when divided by 4.</p>', options: [{ letter: 'A', text: '7' }, { letter: 'B', text: '8' }, { letter: 'C', text: '11' }, { letter: 'D', text: '14' }, { letter: 'E', text: '17' }], correct_answer: 'C', explanation: '11 ÷ 3 = 3 rem 2. 11 ÷ 4 = 2 rem 3. Correct Answer: C.' },
        { id: 'MATH-Q9', topic: 'algebra-sequences', topicName: 'Algebra & Sequences', subject: 'Mathematics', stem: 'Solve for x: 5(2x - 3) = 3(x + 9) - 7', passage_context: '<p>Expand brackets first: 10x - 15 = 3x + 27 - 7. Simplify both sides, then collect like terms.</p>', options: [{ letter: 'A', text: 'x = 4' }, { letter: 'B', text: 'x = 5' }, { letter: 'C', text: 'x = 6' }, { letter: 'D', text: 'x = 3' }, { letter: 'E', text: 'x = 7' }], correct_answer: 'B', explanation: '10x - 15 = 3x + 20 -> 7x = 35 -> x = 5. Correct Answer: B.' },
        { id: 'MATH-Q10', topic: 'fractions-decimals', topicName: 'Fractions & Percentages', subject: 'Mathematics', stem: 'Calculate: (3/5 ÷ 9/20) + 1/3', passage_context: '<p>Division rule for fractions: multiply by the reciprocal (3/5 × 20/9). Simplify before adding 1/3.</p>', options: [{ letter: 'A', text: '5/3' }, { letter: 'B', text: '4/3' }, { letter: 'C', text: '2/3' }, { letter: 'D', text: '7/3' }, { letter: 'E', text: '1' }], correct_answer: 'A', explanation: '3/5 × 20/9 = 60/45 = 4/3. 4/3 + 1/3 = 5/3 (or 1 2/3). Correct Answer: A.' }
      ]
    },
    vr: {
      name: 'Verbal Reasoning',
      gradient: 'linear-gradient(135deg, #7e22ce 0%, #581c87 100%)',
      topics: [
        { id: 'antonyms-synonyms', name: 'Antonyms & Synonyms' },
        { id: 'hidden-words', name: 'Hidden & Compound Words' },
        { id: 'codes-ciphers', name: 'Letter Codes & Number Series' },
        { id: 'analogies-logic', name: 'Analogies & Deductive Logic' },
        { id: 'inversion-logic', name: 'Inversion Logic & Clause Markers' }
      ],
      baseQuestions: [
        { id: 'VR-Q1', topic: 'antonyms-synonyms', topicName: 'Antonyms & Synonyms', subject: 'Verbal Reasoning', stem: 'Select the word that is most OPPOSITE in meaning to SAGACIOUS:', passage_context: '<p>Context: <em>"The elder councillor was admired for her sagacious guidance during the tribunal."</em></p>', options: [{ letter: 'A', text: 'Prudent' }, { letter: 'B', text: 'Fatuous' }, { letter: 'C', text: 'Astute' }, { letter: 'D', text: 'Meticulous' }, { letter: 'E', text: 'Lucid' }], correct_answer: 'B', explanation: 'Sagacious means having sound judgment and wisdom. Its direct antonym is FATUOUS (silly, foolish, lacking thought). Correct Answer: B.' },
        { id: 'VR-Q2', topic: 'hidden-words', topicName: 'Hidden Words', subject: 'Verbal Reasoning', stem: 'Find the hidden 4-letter word spanning two words: "The boat anchored near the cliff."', passage_context: '<p>Hidden words span the boundary between two adjacent words without changing letter order.</p>', options: [{ letter: 'A', text: 'RANCH' }, { letter: 'B', text: 'TORE' }, { letter: 'C', text: 'NOTE' }, { letter: 'D', text: 'ARCH' }, { letter: 'E', text: 'ROAR' }], correct_answer: 'D', explanation: 'The letters inside "anchored" span A-R-C-H. Correct Answer: D.' },
        { id: 'VR-Q3', topic: 'codes-ciphers', topicName: 'Letter Codes', subject: 'Verbal Reasoning', stem: 'If MAPLE is coded as 14-1-17-12-5, how would APPLE be coded?', passage_context: '<p>Examine the alphabetical positions: M is usually letter 13, but coded as 14 (+1 shift for the first letter).</p>', options: [{ letter: 'A', text: '1-17-17-13-6' }, { letter: 'B', text: '2-17-17-13-6' }, { letter: 'C', text: '1-16-16-12-5' }, { letter: 'D', text: '2-16-16-12-5' }, { letter: 'E', text: '2-17-17-12-5' }], correct_answer: 'B', explanation: 'Every letter position is shifted +1: A(1+1=2), P(16+1=17), P(16+1=17), L(12+1=13), E(5+1=6). Correct Answer: B.' },
        { id: 'VR-Q4', topic: 'analogies-logic', topicName: 'Analogies & Logic', subject: 'Verbal Reasoning', stem: 'Find the word that means the SAME as BENEVOLENT:', passage_context: '<p>Root word: Latin "bene" meaning good. "Volent" meaning wishing.</p>', options: [{ letter: 'A', text: 'Malicious' }, { letter: 'B', text: 'Magnanimous' }, { letter: 'C', text: 'Belligerent' }, { letter: 'D', text: 'Mendacious' }, { letter: 'E', text: 'Tenacious' }], correct_answer: 'B', explanation: 'Benevolent and Magnanimous both describe noble generosity and goodwill. Correct Answer: B.' },
        { id: 'VR-Q5', topic: 'inversion-logic', topicName: 'Inversion Logic', subject: 'Verbal Reasoning', stem: 'Which pair of words best completes: EXUBERANT is to DEJECTED as TRANQUIL is to ______?', passage_context: '<p>Determine the relationship between the first pair: Exuberant (very high spirits) and Dejected (sad/downcast) are antonyms.</p>', options: [{ letter: 'A', text: 'PLACID' }, { letter: 'B', text: 'AGITATED' }, { letter: 'C', text: 'SERENE' }, { letter: 'D', text: 'PEACEFUL' }, { letter: 'E', text: 'CONTENT' }], correct_answer: 'B', explanation: 'Exuberant is the opposite of Dejected. The opposite of Tranquil (calm) is AGITATED (disturbed, restless). Correct Answer: B.' },
        { id: 'VR-Q6', topic: 'antonyms-synonyms', topicName: 'Antonyms & Synonyms', subject: 'Verbal Reasoning', stem: 'Select the word that is an ANTONYM for PRODIGAL:', passage_context: '<p>\"The prodigal heir squandered his inheritance on lavish banquets.\"</p>', options: [{ letter: 'A', text: 'Extravagant' }, { letter: 'B', text: 'Frugal' }, { letter: 'C', text: 'Reckless' }, { letter: 'D', text: 'Impetuous' }, { letter: 'E', text: 'Generous' }], correct_answer: 'B', explanation: 'Prodigal means wastefully extravagant. Frugal means sparing or economical with money. Correct Answer: B.' },
        { id: 'VR-Q7', topic: 'codes-ciphers', topicName: 'Letter Codes', subject: 'Verbal Reasoning', stem: 'If CHAIR is coded as FKDLU, what does WUDLQ decode to?', passage_context: '<p>Find the shift rule: C(+3)->F, H(+3)->K, A(+3)->D... To decode, reverse the shift: subtract 3 from each letter.</p>', options: [{ letter: 'A', text: 'TRAIN' }, { letter: 'B', text: 'TRACK' }, { letter: 'C', text: 'STAIR' }, { letter: 'D', text: 'PLANT' }, { letter: 'E', text: 'WATER' }], correct_answer: 'A', explanation: 'Shift is -3: W-3=T, U-3=R, D-3=A, L-3=I, Q-3=N -> TRAIN. Correct Answer: A.' },
        { id: 'VR-Q8', topic: 'hidden-words', topicName: 'Hidden Words', subject: 'Verbal Reasoning', stem: 'Find the 4-letter hidden word spanning: \"Warm milk will help soothe the child.\"', passage_context: '<p>Check across word junctions: \"Warm milk\", \"milk will\", \"will help\"...</p>', options: [{ letter: 'A', text: 'MILK' }, { letter: 'B', text: 'HILL' }, { letter: 'C', text: 'SOOT' }, { letter: 'D', text: 'HELP' }, { letter: 'E', text: 'COOL' }], correct_answer: 'B', explanation: 'Inside \"milK WILL\" -> K-W-I-L? Look at \"wilL Help\" -> L-H-E-L? Look at \"helP SOothe\"? Look at \"milK WILL\": look at \"chilD\"? In \"milK WILL\", K-W-I-L... look at \"hilL\" inside \"warm milK WILL\" -> H-I-L-L! Correct Answer: B.' }
      ]
    },
    nvr: {
      name: 'Non-Verbal Reasoning',
      gradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
      topics: [
        { id: '3d-nets', name: '3D Net Folding & Spatial Nets' },
        { id: 'rotations-reflections', name: 'Rotations vs Reflections' },
        { id: 'matrices-sequences', name: '3x3 Matrices & Feature Sequences' },
        { id: 'odd-one-out', name: 'Odd One Out & Topological Rules' }
      ],
      baseQuestions: [
        { id: 'NVR-Q1', topic: '3d-nets', topicName: '3D Net Folding', subject: 'Non-Verbal Reasoning', stem: 'Which 3D solid CANNOT be formed by folding a 6-square T-shaped net?', passage_context: '<p>A standard 6-square net always folds into a 6-faced regular hexahedron (Cube).</p>', options: [{ letter: 'A', text: 'Standard Cube' }, { letter: 'B', text: 'Solid Cuboid with identical sides' }, { letter: 'C', text: 'Square-based pyramid' }, { letter: 'D', text: 'Regular Hexahedron' }, { letter: 'E', text: 'Dice cube' }], correct_answer: 'C', explanation: 'A 6-square net contains only quadrilateral faces and cannot fold into a pyramid (which requires triangular faces). Correct Answer: C.' },
        { id: 'NVR-Q2', topic: 'rotations-reflections', topicName: 'Rotations vs Reflections', subject: 'Non-Verbal Reasoning', stem: 'Which transformation preserves chirality (handedness) of an asymmetric polygon?', passage_context: '<p>Rule: <strong>Rotations preserve handedness</strong>, while <strong>reflections invert handedness</strong>.</p>', options: [{ letter: 'A', text: '90° Clockwise Rotation' }, { letter: 'B', text: 'Horizontal Reflection across Y-axis' }, { letter: 'C', text: 'Vertical Reflection across X-axis' }, { letter: 'D', text: 'Diagonal Mirror Reflection' }, { letter: 'E', text: 'Reflection followed by identity' }], correct_answer: 'A', explanation: 'Pure rotations turn the object without flipping its mirror chirality. Reflections always reverse chirality. Correct Answer: A.' },
        { id: 'NVR-Q3', topic: 'matrices-sequences', topicName: '3x3 Matrices', subject: 'Non-Verbal Reasoning', stem: 'In a 3x3 matrix, row 1 adds lines, row 2 rotates 45°, row 3 subtracts overlapping lines. What is this operator called?', passage_context: '<p>GL Assessment 3x3 grid logic: elements in cell 3 are derived by applying the logical XOR/union rule to cells 1 and 2.</p>', options: [{ letter: 'A', text: 'Feature Overlap Rule' }, { letter: 'B', text: 'Chirality Inversion' }, { letter: 'C', text: 'Isometric Scale' }, { letter: 'D', text: 'Tessellation Code' }, { letter: 'E', text: 'Bilateral Vector' }], correct_answer: 'A', explanation: 'Combining features from column 1 and column 2 to produce column 3 is the Feature Overlap Rule. Correct Answer: A.' },
        { id: 'NVR-Q4', topic: '3d-nets', topicName: '3D Net Folding', subject: 'Non-Verbal Reasoning', stem: 'On a standard 6-faced dice net, the opposite faces must sum to 7. If face 2 is at the base, which face is on top?', passage_context: '<p>Opposite face rule on standard dice: 1 pairs with 6, 2 pairs with 5, 3 pairs with 4.</p>', options: [{ letter: 'A', text: 'Face 3' }, { letter: 'B', text: 'Face 4' }, { letter: 'C', text: 'Face 5' }, { letter: 'D', text: 'Face 6' }, { letter: 'E', text: 'Face 1' }], correct_answer: 'C', explanation: 'Opposite faces on a standard die always sum to 7. 7 - 2 = 5. Correct Answer: C.' },
        { id: 'NVR-Q5', topic: 'odd-one-out', topicName: 'Odd One Out', subject: 'Non-Verbal Reasoning', stem: 'Which shape is the odd one out: Circle, Regular Hexagon, Ellipse, Equilateral Triangle, Square?', passage_context: '<p>Count line segments vs curved perimeters, or analyze rotational symmetry orders.</p>', options: [{ letter: 'A', text: 'Circle' }, { letter: 'B', text: 'Ellipse' }, { letter: 'C', text: 'Regular Hexagon' }, { letter: 'D', text: 'Square' }, { letter: 'E', text: 'Equilateral Triangle' }], correct_answer: 'B', explanation: 'The circle, hexagon, square, and equilateral triangle all possess regular rotational symmetry orders. The ellipse has order 2 and unequal axes. Correct Answer: B.' },
        { id: 'NVR-Q6', topic: 'rotations-reflections', topicName: 'Rotations vs Reflections', subject: 'Non-Verbal Reasoning', stem: 'An arrow pointing North-East (45°) is rotated 135° clockwise, then reflected across the vertical axis. Where does it point?', passage_context: '<p>45° + 135° = 180° (South). Reflecting South across a vertical axis leaves it pointing South.</p>', options: [{ letter: 'A', text: 'North' }, { letter: 'B', text: 'South' }, { letter: 'C', text: 'West' }, { letter: 'D', text: 'South-West' }, { letter: 'E', text: 'North-West' }], correct_answer: 'B', explanation: '45° clockwise + 135° = 180° (pointing directly South). Vertical reflection of a vertical downward arrow remains South. Correct Answer: B.' }
      ]
    },
    english: {
      name: 'English & SPaG',
      gradient: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)',
      topics: [
        { id: 'comprehension-tone', name: 'Comprehension & Authorial Tone' },
        { id: 'punctuation-clauses', name: 'Punctuation & Relative Clauses' },
        { id: 'archaic-vocab', name: 'Archaic Vocabulary in Context' },
        { id: 'subordinate-clauses', name: 'Subordinate & Embedded Clauses' }
      ],
      baseQuestions: [
        { id: 'ENG-Q1', topic: 'punctuation-clauses', topicName: 'Punctuation & Clauses', subject: 'English', stem: 'Which sentence correctly uses parenthetical commas for a non-restrictive relative clause?', passage_context: '<p>Non-restrictive relative clauses provide non-essential information and must be bracketed by matching commas.</p>', options: [{ letter: 'A', text: 'The architect, who designed the cathedral, received the royal medal.' }, { letter: 'B', text: 'The architect who designed, the cathedral received the royal medal.' }, { letter: 'C', text: 'The architect, who designed the cathedral received the royal medal.' }, { letter: 'D', text: 'The architect who designed the cathedral, received the royal medal.' }, { letter: 'E', text: 'The, architect who designed the cathedral received the royal medal.' }], correct_answer: 'A', explanation: 'The clause "who designed the cathedral" is non-essential and must be enclosed on both sides with commas. Correct Answer: A.' },
        { id: 'ENG-Q2', topic: 'subordinate-clauses', topicName: 'Subordinate Clauses', subject: 'English', stem: 'Which sentence contains a SUBORDINATE CLAUSE?', passage_context: '<p>A subordinate clause begins with a subordinating conjunction (although, because, while, since) and cannot stand alone.</p>', options: [{ letter: 'A', text: 'The tempest raged throughout the night.' }, { letter: 'B', text: 'She struck the chord and the choir began.' }, { letter: 'C', text: 'Although the weather worsened, the vessel maintained course.' }, { letter: 'D', text: 'Halt!' }, { letter: 'E', text: 'The heavy iron gates swung open slowly.' }], correct_answer: 'C', explanation: '"Although the weather worsened" begins with the subordinating conjunction "Although" and cannot stand as an independent sentence. Correct Answer: C.' },
        { id: 'ENG-Q3', topic: 'archaic-vocab', topicName: 'Archaic Vocab in Context', subject: 'English', stem: 'Which word best fits the sentence: "The scholar\'s ______ examination left not a single manuscript unverified."', passage_context: '<p>Look for the adjective that conveys rigorous, painstaking, exhaustive thoroughness.</p>', options: [{ letter: 'A', text: 'perfunctory' }, { letter: 'B', text: 'meticulous' }, { letter: 'C', text: 'arbitrary' }, { letter: 'D', text: 'cursory' }, { letter: 'E', text: 'precarious' }], correct_answer: 'B', explanation: 'METICULOUS means showing extreme care and attention to detail. Perfunctory and cursory both mean superficial/rushed. Correct Answer: B.' },
        { id: 'ENG-Q4', topic: 'comprehension-tone', topicName: 'Authorial Tone', subject: 'English', stem: 'In 19th-century prose, what tone is conveyed by: "His lordship condescended to acknowledge our presence with a nod so stiff it appeared painful"?', passage_context: '<p>Notice words like "condescended", "stiff", and "painful" which create a critical, sardonic image.</p>', options: [{ letter: 'A', text: 'Affectionate and warm' }, { letter: 'B', text: 'Ironic and haughtily critical' }, { letter: 'C', text: 'Terror and dread' }, { letter: 'D', text: 'Apathetic and indifferent' }, { letter: 'E', text: 'Overjoyed and festive' }], correct_answer: 'B', explanation: 'The author uses words like "condescended" and "stiff" to satirise haughty aristocratic arrogance. Correct Answer: B.' },
        { id: 'ENG-Q5', topic: 'punctuation-clauses', topicName: 'Punctuation & Clauses', subject: 'English', stem: 'Identify the sentence with the correct placement of the possessive apostrophe:', passage_context: '<p>Rule: For irregular plurals like \"children\" or \"women\", add \'s (children\'s). For regular plurals ending in s, add an apostrophe after s (boys\').</p>', options: [{ letter: 'A', text: 'The childrens\' books were neatly organized.' }, { letter: 'B', text: 'The children\'s books were neatly organized.' }, { letter: 'C', text: 'The childrens books\' were neatly organized.' }, { letter: 'D', text: 'The childrens\'s books were neatly organized.' }, { letter: 'E', text: 'The children book\'s were neatly organized.' }], correct_answer: 'B', explanation: 'Children is an irregular plural; its possessive form is children\'s. Correct Answer: B.' },
        { id: 'ENG-Q6', topic: 'subordinate-clauses', topicName: 'Subordinate Clauses', subject: 'English', stem: 'Which connective best completes the sentence to show cause: "The captain reduced sail, ______ the storm was intensifying rapidly."', passage_context: '<p>Look for a causal subordinating conjunction connecting the action to its reason.</p>', options: [{ letter: 'A', text: 'nevertheless' }, { letter: 'B', text: 'inasmuch as' }, { letter: 'C', text: 'contrarily' }, { letter: 'D', text: 'whereas' }, { letter: 'E', text: 'consequently' }], correct_answer: 'B', explanation: '\"Inasmuch as\" expresses \"since\" or \"because\" in formal prose. Correct Answer: B.' }
      ]
    }
  };

  // State
  let currentSubject = 'maths';
  let currentTopicId = 'all';
  let currentTestLength = 50; // Default 50 questions standard 11+ mock
  let currentTest = null;
  let currentIndex = 0;
  let answers = {};
  let timeLeft = 0;
  let timerInterval = null;
  let elapsedSeconds = 0;
  let startTimeIso = new Date().toISOString();

  // DOM Elements
  const loadingEl = document.getElementById('arena-loading');
  const contentEl = document.getElementById('arena-content');
  const headerBar = document.getElementById('arena-header-bar');
  const titleEl = document.getElementById('exam-title');
  const badgeEl = document.getElementById('exam-badge');
  const subjBadge = document.getElementById('exam-subject-badge');
  const progCurrEl = document.getElementById('progress-current');
  const progTotalEl = document.getElementById('progress-total');
  const elapsedEl = document.getElementById('watch-elapsed');
  const timerEl = document.getElementById('countdown-timer');
  const qTitleEl = document.getElementById('q-title');
  const qTopicTag = document.getElementById('q-topic-tag');
  const qSubjEl = document.getElementById('q-subject-pill');
  const passEl = document.getElementById('passage-box');
  const qNumEl = document.getElementById('q-number-badge');
  const stemEl = document.getElementById('question-stem-text');
  const optsContainer = document.getElementById('options-container');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const finishBtn = document.getElementById('finish-test-btn');
  const hintBtn = document.getElementById('open-hint-btn');
  const switchTopicBtn = document.getElementById('switch-topic-btn');
  const topicModal = document.getElementById('topic-selector-modal');

  // Read URL params (e.g. #practice-arena?subject=vr&topic=inversion-logic)
  const params = LearnlyRouter.getParams();
  if (params.subject && (QUESTION_BANK[params.subject.toLowerCase()] || params.subject.toLowerCase() === 'composite')) {
    currentSubject = params.subject.toLowerCase();
  }
  if (params.topic) {
    currentTopicId = params.topic;
  }
  if (params.length) {
    const pLen = parseInt(params.length);
    if ([25, 50, 80, 100, 200].includes(pLen)) currentTestLength = pLen;
  }

  // Helper to dynamically expand question pool to desired count (guarantees 50, 80, 100, or 200 questions)
  function generateQuestionSet(baseList, targetCount, subjectTitle, topicTitle) {
    const list = [...baseList];
    let counter = 1;
    while (list.length < targetCount) {
      const template = baseList[(list.length) % baseList.length];
      const clone = {
        ...template,
        id: `${template.id}-v${counter}`,
        stem: template.stem,
        options: template.options.map(opt => ({ ...opt })),
        explanation: template.explanation
      };
      list.push(clone);
      counter++;
    }
    return list.slice(0, targetCount);
  }

  function buildTestQuestions(subjectKey, topicId, desiredCount = currentTestLength) {
    let pool = [];
    if (subjectKey === 'composite') {
      const totalCount = (desiredCount && desiredCount >= 50) ? (desiredCount === 50 ? 100 : desiredCount) : 100;
      const perSubj = Math.ceil(totalCount / 4);
      const mQ = generateQuestionSet(QUESTION_BANK.maths.baseQuestions, perSubj, 'Mathematics', 'Maths').map((q, i) => ({
        ...q,
        sectionIndex: 0,
        sectionName: 'Section 1: Mathematics',
        sectionQNum: i + 1
      }));
      const vQ = generateQuestionSet(QUESTION_BANK.vr.baseQuestions, perSubj, 'Verbal Reasoning', 'VR').map((q, i) => ({
        ...q,
        sectionIndex: 1,
        sectionName: 'Section 2: Verbal Reasoning',
        sectionQNum: i + 1
      }));
      const nQ = generateQuestionSet(QUESTION_BANK.nvr.baseQuestions, perSubj, 'Non-Verbal Reasoning', 'NVR').map((q, i) => ({
        ...q,
        sectionIndex: 2,
        sectionName: 'Section 3: Non-Verbal Reasoning',
        sectionQNum: i + 1
      }));
      const eQ = generateQuestionSet(QUESTION_BANK.english.baseQuestions, perSubj, 'English & SPaG', 'English').map((q, i) => ({
        ...q,
        sectionIndex: 3,
        sectionName: 'Section 4: English & SPaG',
        sectionQNum: i + 1
      }));
      
      pool = [...mQ, ...vQ, ...nQ, ...eQ].slice(0, totalCount);
      return {
        id: `mock-composite-${totalCount}q`,
        title: `Full 4-Subject Consortium Mock Exam (${totalCount} Questions)`,
        subjectName: 'All 4 Subjects',
        topicName: 'GL & CEM Composite Spec',
        type: `${totalCount} Questions • Full 4-Section Mock`,
        duration_mins: Math.round(totalCount * 0.75),
        gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)',
        sections: [
          { name: 'Section 1: Maths', startIdx: 0, count: perSubj, icon: 'calculate' },
          { name: 'Section 2: Verbal', startIdx: perSubj, count: perSubj, icon: 'psychology' },
          { name: 'Section 3: Non-Verbal', startIdx: perSubj * 2, count: perSubj, icon: 'view_in_ar' },
          { name: 'Section 4: English', startIdx: perSubj * 3, count: totalCount - (perSubj * 3), icon: 'menu_book' }
        ],
        questions: pool
      };
    }

    const subjData = QUESTION_BANK[subjectKey] || QUESTION_BANK.maths;
    const finalCount = desiredCount || 50;
    const halfCount = Math.floor(finalCount / 2);

    if (!topicId || topicId === 'all') {
      pool = generateQuestionSet(subjData.baseQuestions, finalCount, subjData.name, 'Full Syllabus').map((q, i) => ({
        ...q,
        sectionIndex: i < halfCount ? 0 : 1,
        sectionName: i < halfCount ? 'Section 1: Core Fundamentals' : 'Section 2: Advanced Reasoning',
        sectionQNum: i < halfCount ? (i + 1) : (i - halfCount + 1)
      }));
      return {
        id: `mock-${subjectKey}-${finalCount}q`,
        title: `${subjData.name} — Standard 11+ Mock (${finalCount} Questions)`,
        subjectName: subjData.name,
        topicName: 'Comprehensive Syllabus',
        type: `${finalCount} Questions • Standard Mock`,
        duration_mins: Math.round(finalCount * 0.8),
        gradient: subjData.gradient,
        sections: [
          { name: 'Section 1: Core', startIdx: 0, count: halfCount, icon: 'menu_book' },
          { name: 'Section 2: Advanced', startIdx: halfCount, count: finalCount - halfCount, icon: 'military_tech' }
        ],
        questions: pool
      };
    } else {
      const topicObj = subjData.topics.find(t => t.id === topicId) || { name: topicId };
      const matched = subjData.baseQuestions.filter(q => q.topic === topicId);
      const source = matched.length > 0 ? matched : subjData.baseQuestions;
      pool = generateQuestionSet(source, finalCount, subjData.name, topicObj.name).map((q, i) => ({
        ...q,
        sectionIndex: i < halfCount ? 0 : 1,
        sectionName: i < halfCount ? `Section 1: ${topicObj.name} Basics` : `Section 2: ${topicObj.name} Mastery`,
        sectionQNum: i < halfCount ? (i + 1) : (i - halfCount + 1)
      }));
      return {
        id: `drill-${subjectKey}-${topicId}-${finalCount}q`,
        title: `${subjData.name} — ${topicObj.name} (${finalCount} Questions)`,
        subjectName: subjData.name,
        topicName: `Weak Area: ${topicObj.name}`,
        type: `${finalCount} Questions • Focus Drill`,
        duration_mins: Math.round(finalCount * 0.8),
        gradient: subjData.gradient,
        sections: [
          { name: 'Section 1: Foundations', startIdx: 0, count: halfCount, icon: 'menu_book' },
          { name: 'Section 2: Mastery', startIdx: halfCount, count: finalCount - halfCount, icon: 'military_tech' }
        ],
        questions: pool
      };
    }
  }

  function renderQuestion(index) {
    if (!currentTest || !currentTest.questions[index]) return;
    currentIndex = index;
    const q = currentTest.questions[index];

    if (progCurrEl) progCurrEl.textContent = index + 1;
    if (qNumEl) qNumEl.textContent = `Question ${index + 1} of ${currentTest.questions.length}`;
    if (qSubjEl) qSubjEl.textContent = q.sectionName || q.subject || currentTest.subjectName;
    if (qTopicTag) qTopicTag.textContent = q.topicName || currentTest.topicName;
    if (qTitleEl) qTitleEl.textContent = `${q.sectionName || q.subject || '11+ Focus'}: ${q.topicName || 'Problem ' + (index + 1)}`;
    if (passEl) {
      passEl.innerHTML = `
        ${q.passage_context || '<p>Analyze the problem and calculate carefully.</p>'}
        <div class="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between">
          <span class="text-[11px] font-bold text-slate-500 flex items-center gap-1">
            <span class="material-symbols-outlined text-xs text-amber-500">lightbulb</span>
            Need step-by-step method?
          </span>
          <a href="#learn-solve" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 hover:bg-amber-300 text-indigo-950 text-xs font-black transition-all shadow-xs">
            <span>Learn &amp; Solve (3D &amp; Pictorial)</span>
            <span class="material-symbols-outlined text-xs">arrow_forward</span>
          </a>
        </div>
      `;
    }
    if (stemEl) stemEl.textContent = q.stem;

    const qNumBadge = document.getElementById('q-number-badge');
    if (qNumBadge) {
      qNumBadge.textContent = `Question ${index + 1} of ${currentTest.questions.length}`;
    }

    // Render Section Tabs
    const secContainer = document.getElementById('section-tabs-container');
    if (secContainer && currentTest.sections) {
      secContainer.innerHTML = currentTest.sections.map((sec, sIdx) => {
        const isCurrentSec = (q.sectionIndex === sIdx);
        const endIdx = sec.startIdx + sec.count;
        let ansCount = 0;
        for (let i = sec.startIdx; i < endIdx && i < currentTest.questions.length; i++) {
          if (answers[currentTest.questions[i].id]) ansCount++;
        }
        return `
          <button type="button" class="section-tab-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${isCurrentSec ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-300' : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'}" data-start="${sec.startIdx}">
            <span class="material-symbols-outlined text-sm">${sec.icon || 'quiz'}</span>
            <span>${sec.name}</span>
            <span class="px-1.5 py-0.5 rounded-md ${isCurrentSec ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'} text-[10px] font-mono">${ansCount}/${sec.count}</span>
          </button>
        `;
      }).join('');

      secContainer.querySelectorAll('.section-tab-btn').forEach(btn => {
        btn.onclick = () => {
          const sIdx = parseInt(btn.dataset.start);
          renderQuestion(sIdx);
        };
      });
    }

    // Update Palette Summary Label
    const palLabel = document.getElementById('palette-summary-label');
    if (palLabel) {
      const answeredTotal = Object.keys(answers).length;
      palLabel.textContent = `Question Palette (${answeredTotal}/${currentTest.questions.length})`;
    }

    // Render options
    optsContainer.innerHTML = q.options.map(opt => {
      const isSelected = answers[q.id] === opt.letter;
      return `
      <div class="option-row p-4 rounded-2xl border-2 ${isSelected ? 'border-primary bg-primary/10 shadow-sm' : 'border-outline-variant/30 hover:border-primary/50 bg-surface'} flex items-center justify-between cursor-pointer transition-all" data-letter="${opt.letter}">
        <div class="flex items-center gap-3">
          <span class="w-8 h-8 rounded-xl ${isSelected ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface'} flex items-center justify-center font-bold text-sm">${opt.letter}</span>
          <span class="text-sm font-bold text-on-surface">${opt.text}</span>
        </div>
        <div class="w-5 h-5 rounded-full border-2 ${isSelected ? 'border-primary bg-primary' : 'border-outline-variant/40'} flex items-center justify-center">
          ${isSelected ? '<span class="material-symbols-outlined text-white text-xs">check</span>' : ''}
        </div>
      </div>`;
    }).join('');

    // Option clicks
    optsContainer.querySelectorAll('.option-row').forEach(row => {
      row.addEventListener('click', () => {
        const letter = row.dataset.letter;
        answers[q.id] = letter;
        renderQuestion(currentIndex);
      });
    });

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === currentTest.questions.length - 1;
  }

  function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    elapsedSeconds = 0;
    timerInterval = setInterval(() => {
      elapsedSeconds++;
      timeLeft--;

      const eM = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
      const eS = String(elapsedSeconds % 60).padStart(2, '0');
      elapsedEl.textContent = `${eM}:${eS}`;

      const tM = String(Math.floor(Math.max(0, timeLeft) / 60)).padStart(2, '0');
      const tS = String(Math.max(0, timeLeft) % 60).padStart(2, '0');
      timerEl.textContent = `${tM}:${tS}`;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        submitTest();
      }
    }, 1000);
  }

  function formatTestFromApi(apiQuestions, subjectKey, topicId, targetCount) {
    if (subjectKey === 'composite') {
      const maths = apiQuestions.filter(q => q.subject === 'Mathematics');
      const vr = apiQuestions.filter(q => q.subject === 'Verbal Reasoning');
      const nvr = apiQuestions.filter(q => q.subject === 'Non-Verbal Reasoning');
      const eng = apiQuestions.filter(q => q.subject === 'English');

      const perSubj = Math.ceil(targetCount / 4);
      const mQ = generateQuestionSet(maths.length ? maths : QUESTION_BANK.maths.baseQuestions, perSubj).map((q, i) => ({
        ...q,
        sectionIndex: 0,
        sectionName: 'Section 1: Mathematics',
        sectionQNum: i + 1,
        topicName: q.topicName || 'Arithmetic & Logic'
      }));
      const vQ = generateQuestionSet(vr.length ? vr : QUESTION_BANK.vr.baseQuestions, perSubj).map((q, i) => ({
        ...q,
        sectionIndex: 1,
        sectionName: 'Section 2: Verbal Reasoning',
        sectionQNum: i + 1,
        topicName: q.topicName || 'Verbal Reasoning'
      }));
      const nQ = generateQuestionSet(nvr.length ? nvr : QUESTION_BANK.nvr.baseQuestions, perSubj).map((q, i) => ({
        ...q,
        sectionIndex: 2,
        sectionName: 'Section 3: Non-Verbal Reasoning',
        sectionQNum: i + 1,
        topicName: q.topicName || 'Spatial & Patterns'
      }));
      const eQ = generateQuestionSet(eng.length ? eng : QUESTION_BANK.english.baseQuestions, perSubj).map((q, i) => ({
        ...q,
        sectionIndex: 3,
        sectionName: 'Section 4: English & SPaG',
        sectionQNum: i + 1,
        topicName: q.topicName || 'Comprehension & Grammar'
      }));

      const pool = [...mQ, ...vQ, ...nQ, ...eQ].slice(0, targetCount);
      return {
        id: `mock-composite-${targetCount}q`,
        title: `Full 4-Subject Consortium Mock Exam (${targetCount} Questions)`,
        subjectName: 'All 4 Subjects',
        topicName: 'GL & CEM Composite Spec',
        type: `${targetCount} Questions • Full 4-Section Mock`,
        duration_mins: Math.round(targetCount * 0.75),
        gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)',
        sections: [
          { name: 'Section 1: Maths', startIdx: 0, count: perSubj, icon: 'calculate' },
          { name: 'Section 2: Verbal', startIdx: perSubj, count: perSubj, icon: 'psychology' },
          { name: 'Section 3: Non-Verbal', startIdx: perSubj * 2, count: perSubj, icon: 'view_in_ar' },
          { name: 'Section 4: English', startIdx: perSubj * 3, count: targetCount - (perSubj * 3), icon: 'menu_book' }
        ],
        questions: pool
      };
    }

    const subjData = QUESTION_BANK[subjectKey] || QUESTION_BANK.maths;
    const finalCount = targetCount || 50;
    const halfCount = Math.floor(finalCount / 2);
    const pool = generateQuestionSet(apiQuestions.length ? apiQuestions : subjData.baseQuestions, finalCount).map((q, i) => ({
      ...q,
      sectionIndex: i < halfCount ? 0 : 1,
      sectionName: i < halfCount ? 'Section 1: Core Fundamentals' : 'Section 2: Advanced Reasoning',
      sectionQNum: i < halfCount ? (i + 1) : (i - halfCount + 1),
      topicName: q.topicName || (topicId && topicId !== 'all' ? topicId : 'Comprehensive Syllabus')
    }));

    return {
      id: `mock-${subjectKey}-${finalCount}q`,
      title: `${subjData.name} — Standard 11+ Mock (${finalCount} Questions)`,
      subjectName: subjData.name,
      topicName: topicId && topicId !== 'all' ? `Weak Area: ${topicId}` : 'Comprehensive Syllabus',
      type: `${finalCount} Questions • Standard Mock`,
      duration_mins: Math.round(finalCount * 0.8),
      gradient: subjData.gradient,
      sections: [
        { name: 'Section 1: Core', startIdx: 0, count: halfCount, icon: 'menu_book' },
        { name: 'Section 2: Advanced', startIdx: halfCount, count: finalCount - halfCount, icon: 'military_tech' }
      ],
      questions: pool
    };
  }

  async function initTest(subjectKey, topicId, count = currentTestLength) {
    answers = {};
    if (loadingEl) loadingEl.classList.remove('hidden');
    if (contentEl) contentEl.classList.add('hidden');

    try {
      let url = `/api/questions?limit=${count}`;
      if (subjectKey && subjectKey !== 'composite') {
        url += `&subject=${encodeURIComponent(subjectKey)}`;
      }
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (data.questions && data.questions.length > 0) {
          currentTest = formatTestFromApi(data.questions, subjectKey, topicId, count);
        }
      }
    } catch (e) {
      console.warn('Falling back to local question bank:', e);
    }

    if (!currentTest || !currentTest.questions || currentTest.questions.length === 0) {
      currentTest = buildTestQuestions(subjectKey, topicId, count);
    }

    // Update Header
    if (titleEl) titleEl.textContent = currentTest.title;
    if (subjBadge) subjBadge.textContent = currentTest.subjectName;
    if (badgeEl) badgeEl.textContent = currentTest.type;
    if (progTotalEl) progTotalEl.textContent = currentTest.questions.length;
    if (headerBar) headerBar.style.background = currentTest.gradient;

    timeLeft = currentTest.duration_mins * 60;
    startTimeIso = new Date().toISOString();

    startTimer();
    renderQuestion(0);

    if (loadingEl) loadingEl.classList.add('hidden');
    if (contentEl) contentEl.classList.remove('hidden');
  }

  // Navigation handlers
  if (prevBtn) prevBtn.onclick = () => { if (currentIndex > 0) renderQuestion(currentIndex - 1); };
  if (nextBtn) nextBtn.onclick = () => { if (currentIndex < currentTest.questions.length - 1) renderQuestion(currentIndex + 1); };

  // Submit test & Record Mistakes into Mistake Vault!
  async function submitTest() {
    if (timerInterval) clearInterval(timerInterval);

    let rawScore = 0;
    const recordedMistakes = [];

    currentTest.questions.forEach((q, idx) => {
      const studentAns = answers[q.id];
      if (studentAns === q.correct_answer) {
        rawScore++;
      } else {
        // Record mistake into Mistake Vault
        recordedMistakes.push({
          id: `MV-${Date.now()}-${idx}`,
          exam_title: currentTest.title,
          exam_id: currentTest.id,
          question_id: q.id,
          q_num: `Q${idx + 1}`,
          subject: q.subject || currentTest.subjectName,
          topic: q.topicName || currentTest.topicName,
          stem: q.stem,
          desc: q.stem,
          yourAns: studentAns || 'Unanswered',
          correct: q.correct_answer,
          explanation: q.explanation || 'Review the core syllabus rules for this topic.',
          created_at: new Date().toISOString(),
          resolved: false
        });
      }
    });

    // Save mistakes to global Mistake Vault in localStorage
    const existingVault = JSON.parse(localStorage.getItem('learnly_mistake_vault') || '[]');
    const updatedVault = [...recordedMistakes, ...existingVault];
    localStorage.setItem('learnly_mistake_vault', JSON.stringify(updatedVault));

    // Save test result
    const recentAttempts = JSON.parse(localStorage.getItem('learnly_recent_attempts') || '[]');
    recentAttempts.unshift({
      id: 'attempt-' + Date.now(),
      title: currentTest.title,
      subject: currentTest.subjectName,
      raw_score: rawScore,
      max_score: currentTest.questions.length,
      percentage: Math.round((rawScore / currentTest.questions.length) * 100),
      calculated_sas: Math.round(115 + (rawScore / currentTest.questions.length) * 26),
      duration_seconds: elapsedSeconds,
      start_time: startTimeIso
    });
    localStorage.setItem('learnly_recent_attempts', JSON.stringify(recentAttempts));

    if (window.AIBuddy) {
      window.AIBuddy.showToast('Exam Completed & Evaluated!', `Scored ${rawScore}/${currentTest.questions.length}. ${recordedMistakes.length} mistakes saved to Mistake Mastery.`);
    }

    // Route to scorecard
    window.location.hash = '#scorecard';
  }

  if (finishBtn) finishBtn.onclick = submitTest;

  // Topic Switcher Modal Logic
  function populateModalTopics(subjectKey) {
    const optsList = document.getElementById('modal-topic-options');
    if (!optsList) return;
    const subjData = QUESTION_BANK[subjectKey] || QUESTION_BANK.maths;
    optsList.innerHTML = subjData.topics.map(t => `
      <label class="p-3 rounded-xl border-2 border-slate-200 hover:border-indigo-400 bg-slate-50/50 flex items-center justify-between cursor-pointer transition-all topic-radio-label">
        <div class="flex items-center gap-2">
          <input type="radio" name="target-topic-radio" value="${t.id}" class="w-4 h-4 text-indigo-600">
          <span class="text-xs font-bold text-slate-800">${t.name}</span>
        </div>
        <span class="px-2 py-0.5 rounded bg-white text-[10px] font-bold text-slate-500 border border-slate-200">Weak Area</span>
      </label>
    `).join('');

    optsList.querySelectorAll('input[name="target-topic-radio"]').forEach(r => {
      r.addEventListener('change', () => {
        optsList.querySelectorAll('.topic-radio-label').forEach(lbl => {
          lbl.classList.remove('border-indigo-600', 'bg-indigo-50/80');
          lbl.classList.add('border-slate-200');
        });
        r.closest('label').classList.remove('border-slate-200');
        r.closest('label').classList.add('border-indigo-600', 'bg-indigo-50/80');
      });
    });
  }

  let modalSelectedSubject = currentSubject;
  populateModalTopics(modalSelectedSubject);

  document.querySelectorAll('.topic-modal-subj-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.topic-modal-subj-btn').forEach(b => {
        b.className = 'topic-modal-subj-btn p-3 rounded-2xl border-2 border-slate-200 bg-white text-slate-700 font-bold text-xs text-center transition-all flex flex-col items-center gap-1 hover:border-indigo-300';
      });
      btn.className = 'topic-modal-subj-btn p-3 rounded-2xl border-2 border-indigo-600 bg-indigo-50/70 text-indigo-900 font-bold text-xs text-center transition-all flex flex-col items-center gap-1';
      modalSelectedSubject = btn.dataset.subject;
      populateModalTopics(modalSelectedSubject);
    });
  });

  if (switchTopicBtn && topicModal) {
    switchTopicBtn.onclick = () => {
      topicModal.classList.remove('hidden');
      topicModal.classList.add('flex');
    };
  }

  // Length Selector buttons
  document.querySelectorAll('.test-len-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.test-len-btn').forEach(b => {
        b.className = 'test-len-btn py-2 px-2.5 rounded-xl text-xs font-bold border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition-all text-center';
      });
      btn.className = 'test-len-btn py-2 px-2.5 rounded-xl text-xs font-bold border-2 border-indigo-600 bg-indigo-50 text-indigo-900 shadow-sm transition-all text-center';
      currentTestLength = parseInt(btn.dataset.length) || 50;
      const lbl = document.getElementById('selected-length-label');
      if (lbl) {
        const names = { 50: 'Standard 11+ Mock (50 Questions)', 80: 'GL Assessment VR (80 Questions)', 100: 'Full Consortium Mock (100 Questions)', 200: 'Complete Mega Mock (200 Questions — 50Q per Section)' };
        lbl.textContent = names[currentTestLength] || `${currentTestLength} Questions`;
      }
    });
  });

  const closeBtn = document.getElementById('close-topic-modal-btn');
  const cancelBtn = document.getElementById('cancel-topic-modal-btn');
  if (closeBtn) closeBtn.onclick = () => { topicModal.classList.add('hidden'); topicModal.classList.remove('flex'); };
  if (cancelBtn) cancelBtn.onclick = () => { topicModal.classList.add('hidden'); topicModal.classList.remove('flex'); };

  const launchBtn = document.getElementById('launch-topic-test-btn');
  if (launchBtn) {
    launchBtn.onclick = () => {
      const selectedRadio = document.querySelector('input[name="target-topic-radio"]:checked');
      const topicId = selectedRadio ? selectedRadio.value : 'all';
      currentSubject = modalSelectedSubject;
      currentTopicId = topicId;
      topicModal.classList.add('hidden');
      topicModal.classList.remove('flex');
      initTest(currentSubject, currentTopicId, currentTestLength);
    };
  }

  const fullSubjBtn = document.getElementById('select-all-topics-btn');
  if (fullSubjBtn) {
    fullSubjBtn.onclick = () => {
      currentSubject = modalSelectedSubject;
      currentTopicId = 'all';
      topicModal.classList.add('hidden');
      topicModal.classList.remove('flex');
      initTest(currentSubject, 'all', currentTestLength);
    };
  }

  const compositeBtn = document.getElementById('modal-composite-btn');
  if (compositeBtn) {
    compositeBtn.onclick = () => {
      topicModal.classList.add('hidden');
      topicModal.classList.remove('flex');
      initTest('composite', 'all', 100);
    };
  }

  // Question Palette Modal Logic
  const paletteModal = document.getElementById('palette-modal');
  const togglePaletteBtn = document.getElementById('toggle-palette-btn');
  const closePaletteBtn = document.getElementById('close-palette-modal-btn');
  const closePaletteBottomBtn = document.getElementById('close-palette-bottom-btn');
  const paletteGrid = document.getElementById('palette-sections-grid');

  function openPaletteModal() {
    if (!currentTest || !paletteModal || !paletteGrid) return;
    const sections = currentTest.sections || [
      { name: currentTest.subjectName, startIdx: 0, count: currentTest.questions.length, icon: 'quiz' }
    ];

    paletteGrid.innerHTML = sections.map((sec) => {
      const start = sec.startIdx;
      const end = Math.min(start + sec.count, currentTest.questions.length);
      const qButtons = [];
      let secAnswered = 0;

      for (let i = start; i < end; i++) {
        const q = currentTest.questions[i];
        const isCurrent = (i === currentIndex);
        const isAnswered = !!answers[q.id];
        if (isAnswered) secAnswered++;

        let btnClass = 'w-9 h-9 rounded-xl text-xs font-bold transition-all flex items-center justify-center cursor-pointer ';
        if (isCurrent) {
          btnClass += 'border-2 border-indigo-600 bg-indigo-50 text-indigo-900 shadow-sm ring-2 ring-indigo-300';
        } else if (isAnswered) {
          btnClass += 'bg-emerald-500 text-white font-extrabold shadow-sm hover:bg-emerald-600';
        } else {
          btnClass += 'bg-slate-100 hover:bg-slate-200 text-slate-700';
        }

        qButtons.push(`
          <button type="button" class="palette-q-btn ${btnClass}" data-index="${i}">
            ${i + 1}
          </button>
        `);
      }

      return `
        <div class="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-indigo-600">${sec.icon || 'quiz'}</span>
              <span class="text-xs font-extrabold text-slate-800">${sec.name}</span>
            </div>
            <span class="text-[11px] font-bold text-slate-500 font-mono">${secAnswered}/${sec.count} Answered</span>
          </div>
          <div class="grid grid-cols-5 sm:grid-cols-10 gap-2">
            ${qButtons.join('')}
          </div>
        </div>
      `;
    }).join('');

    paletteGrid.querySelectorAll('.palette-q-btn').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.dataset.index);
        paletteModal.classList.add('hidden');
        paletteModal.classList.remove('flex');
        renderQuestion(idx);
      };
    });

    paletteModal.classList.remove('hidden');
    paletteModal.classList.add('flex');
  }

  if (togglePaletteBtn) togglePaletteBtn.onclick = openPaletteModal;
  if (closePaletteBtn) closePaletteBtn.onclick = () => { paletteModal.classList.add('hidden'); paletteModal.classList.remove('flex'); };
  if (closePaletteBottomBtn) closePaletteBottomBtn.onclick = () => { paletteModal.classList.add('hidden'); paletteModal.classList.remove('flex'); };

  // Socratic Hint Logic
  if (hintBtn) {
    hintBtn.onclick = () => {
      if (window.AIBuddy) {
        const q = currentTest.questions[currentIndex];
        window.AIBuddy.openHintModal(q.id, answers[q.id] || null);
      }
    };
  }

  // Listen / Audio Tutor (Ms. Clara) in Practice Arena
  const speakPassageBtn = document.getElementById('speak-passage-btn');
  if (speakPassageBtn) {
    speakPassageBtn.onclick = () => {
      if (!('speechSynthesis' in window)) return;
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        speakPassageBtn.innerHTML = '<span class="material-symbols-outlined text-sm">volume_up</span><span>Listen</span>';
        return;
      }
      const q = currentTest.questions[currentIndex];
      const textToSpeak = `Scholar, here is the question: ${q.stem}. Relevant context: ${q.passage_context ? q.passage_context.replace(/<[^>]*>/g, '') : ''}`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find(v => 
        (v.name.includes('Female') || v.name.includes('Samantha') || v.name.includes('Victoria') || 
         v.name.includes('Karen') || v.name.includes('Zira') || v.name.includes('Sonia') ||
         v.name.includes('Google UK English Female') || v.name.includes('Moira') || v.name.includes('Jenny')) &&
        (v.lang.startsWith('en'))
      ) || voices.find(v => v.lang.startsWith('en-GB')) || voices.find(v => v.lang.startsWith('en'));
      if (femaleVoice) utterance.voice = femaleVoice;
      utterance.pitch = 1.22;
      utterance.rate = 0.90;
      utterance.onstart = () => {
        speakPassageBtn.innerHTML = '<span class="material-symbols-outlined text-sm">stop_circle</span><span>Pause Ms. Clara</span>';
      };
      utterance.onend = () => {
        speakPassageBtn.innerHTML = '<span class="material-symbols-outlined text-sm">volume_up</span><span>Listen</span>';
      };
      utterance.onerror = () => {
        speakPassageBtn.innerHTML = '<span class="material-symbols-outlined text-sm">volume_up</span><span>Listen</span>';
      };
      window.speechSynthesis.speak(utterance);
    };
  }

  // Font sizing tools
  let zoom = 100;
  const fDec = document.getElementById('font-decrease-btn');
  const fInc = document.getElementById('font-increase-btn');
  const aGrid = document.getElementById('arena-grid');
  if (fDec && aGrid) {
    fDec.onclick = () => {
      zoom = Math.max(90, zoom - 10);
      aGrid.style.fontSize = `${zoom}%`;
    };
  }
  if (fInc && aGrid) {
    fInc.onclick = () => {
      zoom = Math.min(130, zoom + 10);
      aGrid.style.fontSize = `${zoom}%`;
    };
  }

  // Launch initial test with standard length
  initTest(currentSubject, currentTopicId, currentTestLength);
});
