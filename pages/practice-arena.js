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
          <button id="open-hint-btn" class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 text-white font-bold text-xs shadow-sm transition-all hover:bg-white/25 border border-white/20 backdrop-blur-md cursor-pointer" type="button" title="Open AI Socratic Hint (Shortcut: H)">
            <span class="material-symbols-outlined text-base">psychology</span><span>Hint (H)</span>
          </button>
          <div class="flex items-center bg-white/10 rounded-full px-1 py-0.5 shadow-sm border border-white/15 backdrop-blur-md text-white text-xs">
            <button id="font-decrease-btn" class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/15 font-bold transition-colors" type="button">A-</button>
            <button id="font-increase-btn" class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/15 font-bold transition-colors" type="button">A+</button>
          </div>
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

        <!-- Weak Topics List for selected subject -->
        <div class="mb-5">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-extrabold uppercase text-slate-600 tracking-wider">Select Topic Focus (Weak Area Practice):</span>
            <span class="text-[11px] text-indigo-600 font-bold cursor-pointer hover:underline" id="select-all-topics-btn">Or Practice Full Subject Mock</span>
          </div>
          <div id="modal-topic-options" class="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
            <!-- Dynamic topics rendered by JS -->
          </div>
        </div>

        <div class="flex items-center justify-between pt-3 border-t border-slate-100">
          <button id="modal-composite-btn" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all">
            Full 4-Subject Mock
          </button>
          <div class="flex items-center gap-2">
            <button id="cancel-topic-modal-btn" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100">Cancel</button>
            <button id="launch-topic-test-btn" class="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all">
              Launch Targeted Test
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}, function() {
  // Comprehensive 4-Subject Question Bank organized by Subject and Weak Topics
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
      questions: [
        { id: 'MATH-Q1', topic: 'speed-distance', topicName: 'Speed, Distance & Time', subject: 'Mathematics', stem: 'A train travels 360 km in 4 hours. If it increases its speed by 25%, how long will it take to travel 450 km?', passage_context: '<p>Formula reminder: <strong>Speed = Distance ÷ Time</strong>. Calculate initial speed, apply +25%, then calculate the new duration: <em>Time = Distance ÷ New Speed</em>.</p>', options: [{ letter: 'A', text: '3 hours' }, { letter: 'B', text: '3 hours 20 minutes' }, { letter: 'C', text: '4 hours' }, { letter: 'D', text: '3 hours 45 minutes' }, { letter: 'E', text: '2 hours 30 minutes' }], correct_answer: 'C', explanation: 'Initial speed = 360 ÷ 4 = 90 km/h. +25% speed = 90 × 1.25 = 112.5 km/h. New time = 450 ÷ 112.5 = 4 hours. Correct Answer: C.' },
        { id: 'MATH-Q2', topic: 'remainder-theory', topicName: 'Remainder Theory', subject: 'Mathematics', stem: 'When a number N is divided by 7, the remainder is 5. What is the remainder when (3N + 4) is divided by 7?', passage_context: '<p>Remainder arithmetic rule: substitute N = 5 directly into (3N + 4) or test with small integers like N = 12.</p>', options: [{ letter: 'A', text: '1' }, { letter: 'B', text: '3' }, { letter: 'C', text: '5' }, { letter: 'D', text: '6' }, { letter: 'E', text: '2' }], correct_answer: '3', options: [{ letter: 'A', text: '1' }, { letter: 'B', text: '3' }, { letter: 'C', text: '5' }, { letter: 'D', text: '6' }, { letter: 'E', text: '4' }], correct_answer: 'C', explanation: 'N ≡ 5 (mod 7). 3N + 4 ≡ 3(5) + 4 = 15 + 4 = 19. 19 ÷ 7 = 2 remainder 5. Correct Answer: C.' },
        { id: 'MATH-Q3', topic: 'algebra-sequences', topicName: 'Algebra & Sequences', subject: 'Mathematics', stem: 'What is the 8th term of the quadratic sequence: 3, 8, 15, 24, 35...?', passage_context: '<p>First differences: 5, 7, 9, 11... Second differences are constant at 2. The formula is n² + 2n.</p>', options: [{ letter: 'A', text: '72' }, { letter: 'B', text: '80' }, { letter: 'C', text: '63' }, { letter: 'D', text: '84' }, { letter: 'E', text: '99' }], correct_answer: 'B', explanation: 'Formula is n(n + 2). For n = 8: 8 × (8 + 2) = 8 × 10 = 80. Correct Answer: B.' },
        { id: 'MATH-Q4', topic: 'fractions-decimals', topicName: 'Fractions & Percentages', subject: 'Mathematics', stem: 'What percentage of 80 is 60?', passage_context: '<p>Percentage calculation: <strong>(Part ÷ Whole) × 100</strong>.</p>', options: [{ letter: 'A', text: '70%' }, { letter: 'B', text: '80%' }, { letter: 'C', text: '75%' }, { letter: 'D', text: '65%' }, { letter: 'E', text: '60%' }], correct_answer: 'C', explanation: '60/80 = 3/4 = 0.75 = 75%. Correct Answer: C.' },
        { id: 'MATH-Q5', topic: 'ratio-scaling', topicName: 'Ratio & Proportions', subject: 'Mathematics', stem: 'In a school of 420 students, the ratio of boys to girls is 4:3. If 20 more girls join, what is the new ratio?', passage_context: '<p>Total parts = 4 + 3 = 7 parts. Find the value of 1 part, calculate initial numbers, add 20 girls, then simplify.</p>', options: [{ letter: 'A', text: '6:5' }, { letter: 'B', text: '1:1' }, { letter: 'C', text: '5:4' }, { letter: 'D', text: '7:6' }, { letter: 'E', text: '4:3' }], correct_answer: 'A', explanation: '1 part = 420 ÷ 7 = 60. Boys = 240, Girls = 180. Add 20 girls = 200 girls. New ratio = 240:200 = 6:5. Correct Answer: A.' }
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
      questions: [
        { id: 'VR-Q1', topic: 'antonyms-synonyms', topicName: 'Antonyms & Synonyms', subject: 'Verbal Reasoning', stem: 'Select the word that is most OPPOSITE in meaning to SAGACIOUS:', passage_context: '<p>Context: <em>"The elder councillor was admired for her sagacious guidance during the tribunal."</em></p>', options: [{ letter: 'A', text: 'Prudent' }, { letter: 'B', text: 'Fatuous' }, { letter: 'C', text: 'Astute' }, { letter: 'D', text: 'Meticulous' }, { letter: 'E', text: 'Lucid' }], correct_answer: 'B', explanation: 'Sagacious means having sound judgment and wisdom. Its direct antonym is FATUOUS (silly, foolish, lacking thought). Correct Answer: B.' },
        { id: 'VR-Q2', topic: 'hidden-words', topicName: 'Hidden Words', subject: 'Verbal Reasoning', stem: 'Find the hidden 4-letter word spanning two words: "The boat anchored near the cliff."', passage_context: '<p>Hidden words span the boundary between two adjacent words without changing letter order.</p>', options: [{ letter: 'A', text: 'RANCH' }, { letter: 'B', text: 'TORE' }, { letter: 'C', text: 'NOTE' }, { letter: 'D', text: 'ARCH' }, { letter: 'E', text: 'ROAR' }], correct_answer: 'D', explanation: '"anchORED Near" -> The letters span "anchORED Near" or "anchORed Near" -> A-R-C-H in anchORed. Or "anchORED Near" -> R-E-A-D? Look at "anchORED Near": E-D-N-E? Look at "boAT ANchored" -> A-T-A-N? Look at "anchORED Near" -> "clifF"? In "anchORed": A-R-C-H is inside anchored. Correct Answer: D.' },
        { id: 'VR-Q3', topic: 'codes-ciphers', topicName: 'Letter Codes', subject: 'Verbal Reasoning', stem: 'If MAPLE is coded as 14-1-17-12-5, how would APPLE be coded?', passage_context: '<p>Examine the alphabetical positions: M is usually letter 13, but coded as 14 (+1 shift for the first letter).</p>', options: [{ letter: 'A', text: '1-17-17-13-6' }, { letter: 'B', text: '2-17-17-13-6' }, { letter: 'C', text: '1-16-16-12-5' }, { letter: 'D', text: '2-16-16-12-5' }, { letter: 'E', text: '2-17-17-12-5' }], correct_answer: 'B', explanation: 'Every letter position is shifted +1: A(1+1=2), P(16+1=17), P(16+1=17), L(12+1=13), E(5+1=6). Correct Answer: B.' },
        { id: 'VR-Q4', topic: 'analogies-logic', topicName: 'Analogies & Logic', subject: 'Verbal Reasoning', stem: 'Find the word that means the SAME as BENEVOLENT:', passage_context: '<p>Root word: Latin "bene" meaning good. "Volent" meaning wishing.</p>', options: [{ letter: 'A', text: 'Malicious' }, { letter: 'B', text: 'Magnanimous' }, { letter: 'C', text: 'Belligerent' }, { letter: 'D', text: 'Mendacious' }, { letter: 'E', text: 'Tenacious' }], correct_answer: 'B', explanation: 'Benevolent and Magnanimous both describe noble generosity and goodwill. Correct Answer: B.' },
        { id: 'VR-Q5', topic: 'inversion-logic', topicName: 'Inversion Logic', subject: 'Verbal Reasoning', stem: 'Which pair of words best completes: EXUBERANT is to DEJECTED as TRANQUIL is to ______?', passage_context: '<p>Determine the relationship between the first pair: Exuberant (very high spirits) and Dejected (sad/downcast) are antonyms.</p>', options: [{ letter: 'A', text: 'PLACID' }, { letter: 'B', text: 'AGITATED' }, { letter: 'C', text: 'SERENE' }, { letter: 'D', text: 'PEACEFUL' }, { letter: 'E', text: 'CONTENT' }], correct_answer: 'B', explanation: 'Exuberant is the opposite of Dejected. The opposite of Tranquil (calm) is AGITATED (disturbed, restless). Correct Answer: B.' }
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
      questions: [
        { id: 'NVR-Q1', topic: '3d-nets', topicName: '3D Net Folding', subject: 'Non-Verbal Reasoning', stem: 'Which 3D solid CANNOT be formed by folding a 6-square T-shaped net?', passage_context: '<p>A standard 6-square net always folds into a 6-faced regular hexahedron (Cube).</p>', options: [{ letter: 'A', text: 'Standard Cube' }, { letter: 'B', text: 'Solid Cuboid with identical sides' }, { letter: 'C', text: 'Square-based pyramid' }, { letter: 'D', text: 'Regular Hexahedron' }, { letter: 'E', text: 'Dice cube' }], correct_answer: 'C', explanation: 'A 6-square net contains only quadrilateral faces and cannot fold into a pyramid (which requires triangular faces). Correct Answer: C.' },
        { id: 'NVR-Q2', topic: 'rotations-reflections', topicName: 'Rotations vs Reflections', subject: 'Non-Verbal Reasoning', stem: 'Which transformation preserves chirality (handedness) of an asymmetric polygon?', passage_context: '<p>Rule: <strong>Rotations preserve handedness</strong>, while <strong>reflections invert handedness</strong>.</p>', options: [{ letter: 'A', text: '90° Clockwise Rotation' }, { letter: 'B', text: 'Horizontal Reflection across Y-axis' }, { letter: 'C', text: 'Vertical Reflection across X-axis' }, { letter: 'D', text: 'Diagonal Mirror Reflection' }, { letter: 'E', text: 'Reflection followed by identity' }], correct_answer: 'A', explanation: 'Pure rotations turn the object without flipping its mirror chirality. Reflections always reverse chirality. Correct Answer: A.' },
        { id: 'NVR-Q3', topic: 'matrices-sequences', topicName: '3x3 Matrices', subject: 'Non-Verbal Reasoning', stem: 'In a 3x3 matrix, row 1 adds lines, row 2 rotates 45°, row 3 subtracts overlapping lines. What is this operator called?', passage_context: '<p>GL Assessment 3x3 grid logic: elements in cell 3 are derived by applying the logical XOR/union rule to cells 1 and 2.</p>', options: [{ letter: 'A', text: 'Feature Overlap Rule' }, { letter: 'B', text: 'Chirality Inversion' }, { letter: 'C', text: 'Isometric Scale' }, { letter: 'D', text: 'Tessellation Code' }, { letter: 'E', text: 'Bilateral Vector' }], correct_answer: 'A', explanation: 'Combining features from column 1 and column 2 to produce column 3 is the Feature Overlap Rule. Correct Answer: A.' },
        { id: 'NVR-Q4', topic: '3d-nets', topicName: '3D Net Folding', subject: 'Non-Verbal Reasoning', stem: 'On a standard 6-faced dice net, the opposite faces must sum to 7. If face 2 is at the base, which face is on top?', passage_context: '<p>Opposite face rule on standard dice: 1 pairs with 6, 2 pairs with 5, 3 pairs with 4.</p>', options: [{ letter: 'A', text: 'Face 3' }, { letter: 'B', text: 'Face 4' }, { letter: 'C', text: 'Face 5' }, { letter: 'D', text: 'Face 6' }, { letter: 'E', text: 'Face 1' }], correct_answer: 'C', explanation: 'Opposite faces on a standard die always sum to 7. 7 - 2 = 5. Correct Answer: C.' }
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
      questions: [
        { id: 'ENG-Q1', topic: 'punctuation-clauses', topicName: 'Punctuation & Clauses', subject: 'English', stem: 'Which sentence correctly uses parenthetical commas for a non-restrictive relative clause?', passage_context: '<p>Non-restrictive relative clauses provide non-essential information and must be bracketed by matching commas.</p>', options: [{ letter: 'A', text: 'The architect, who designed the cathedral, received the royal medal.' }, { letter: 'B', text: 'The architect who designed, the cathedral received the royal medal.' }, { letter: 'C', text: 'The architect, who designed the cathedral received the royal medal.' }, { letter: 'D', text: 'The architect who designed the cathedral, received the royal medal.' }, { letter: 'E', text: 'The, architect who designed the cathedral received the royal medal.' }], correct_answer: 'A', explanation: 'The clause "who designed the cathedral" is non-essential and must be enclosed on both sides with commas. Correct Answer: A.' },
        { id: 'ENG-Q2', topic: 'subordinate-clauses', topicName: 'Subordinate Clauses', subject: 'English', stem: 'Which sentence contains a SUBORDINATE CLAUSE?', passage_context: '<p>A subordinate clause begins with a subordinating conjunction (although, because, while, since) and cannot stand alone.</p>', options: [{ letter: 'A', text: 'The tempest raged throughout the night.' }, { letter: 'B', text: 'She struck the chord and the choir began.' }, { letter: 'C', text: 'Although the weather worsened, the vessel maintained course.' }, { letter: 'D', text: 'Halt!' }, { letter: 'E', text: 'The heavy iron gates swung open slowly.' }], correct_answer: 'C', explanation: '"Although the weather worsened" begins with the subordinating conjunction "Although" and cannot stand as an independent sentence. Correct Answer: C.' },
        { id: 'ENG-Q3', topic: 'archaic-vocab', topicName: 'Archaic Vocab in Context', subject: 'English', stem: 'Which word best fits the sentence: "The scholar\'s ______ examination left not a single manuscript unverified."', passage_context: '<p>Look for the adjective that conveys rigorous, painstaking, exhaustive thoroughness.</p>', options: [{ letter: 'A', text: 'perfunctory' }, { letter: 'B', text: 'meticulous' }, { letter: 'C', text: 'arbitrary' }, { letter: 'D', text: 'cursory' }, { letter: 'E', text: 'precarious' }], correct_answer: 'B', explanation: 'METICULOUS means showing extreme care and attention to detail. Perfunctory and cursory both mean superficial/rushed. Correct Answer: B.' },
        { id: 'ENG-Q4', topic: 'comprehension-tone', topicName: 'Authorial Tone', subject: 'English', stem: 'In 19th-century prose, what tone is conveyed by: "His lordship condescended to acknowledge our presence with a nod so stiff it appeared painful"?', passage_context: '<p>Notice words like "condescended", "stiff", and "painful" which create a critical, sardonic image.</p>', options: [{ letter: 'A', text: 'Affectionate and warm' }, { letter: 'B', text: 'Ironic and haughtily critical' }, { letter: 'C', text: 'Terror and dread' }, { letter: 'D', text: 'Apathetic and indifferent' }, { letter: 'E', text: 'Overjoyed and festive' }], correct_answer: 'B', explanation: 'The author uses words like "condescended" and "stiff" to satirise haughty aristocratic arrogance. Correct Answer: B.' }
      ]
    }
  };

  // State
  let currentSubject = 'maths';
  let currentTopicId = 'all';
  let currentTest = null;
  let currentIndex = 0;
  let answers = {};
  let timeLeft = 0;
  let timerInterval = null;
  let elapsedSeconds = 0;
  let startTimeIso = new Date().toISOString();

  // Read URL params (e.g. #practice-arena?subject=vr&topic=inversion-logic)
  const params = LearnlyRouter.getParams();
  if (params.subject && QUESTION_BANK[params.subject.toLowerCase()]) {
    currentSubject = params.subject.toLowerCase();
  }
  if (params.topic) {
    currentTopicId = params.topic;
  }

  // DOM Elements
  const loadingEl = document.getElementById('arena-loading');
  const contentEl = document.getElementById('arena-content');
  const headerBar = document.getElementById('arena-header-bar');
  const titleEl = document.getElementById('exam-title');
  const subjBadge = document.getElementById('exam-subject-badge');
  const badgeEl = document.getElementById('exam-badge');
  const iconEl = document.getElementById('exam-icon');
  
  const progCurrEl = document.getElementById('progress-current');
  const progTotalEl = document.getElementById('progress-total');
  const timerEl = document.getElementById('countdown-timer');
  const elapsedEl = document.getElementById('watch-elapsed');
  
  const qSubjEl = document.getElementById('q-subject');
  const qTopicTag = document.getElementById('q-topic-tag');
  const qTitleEl = document.getElementById('q-title');
  const passEl = document.getElementById('passage-text');
  const qNumEl = document.getElementById('q-number-badge');
  const stemEl = document.getElementById('question-stem-text');
  const optsContainer = document.getElementById('options-container');
  
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const finishBtn = document.getElementById('finish-test-btn');
  const hintBtn = document.getElementById('open-hint-btn');
  const switchTopicBtn = document.getElementById('switch-topic-btn');
  const topicModal = document.getElementById('topic-selector-modal');

  function buildTestQuestions(subjectKey, topicId) {
    let pool = [];
    if (subjectKey === 'composite') {
      // 4-subject consortium composite mock
      pool = [
        ...QUESTION_BANK.maths.questions.slice(0, 3),
        ...QUESTION_BANK.vr.questions.slice(0, 3),
        ...QUESTION_BANK.nvr.questions.slice(0, 2),
        ...QUESTION_BANK.english.questions.slice(0, 2)
      ];
      return {
        id: 'mock-composite-11plus',
        title: 'Full 4-Subject Consortium Mock Exam',
        subjectName: 'All 4 Subjects',
        topicName: 'GL & CEM Composite Spec',
        type: 'Full Mock',
        duration_mins: 30,
        gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)',
        questions: pool
      };
    }

    const subjData = QUESTION_BANK[subjectKey] || QUESTION_BANK.maths;
    if (!topicId || topicId === 'all') {
      pool = [...subjData.questions];
      return {
        id: `mock-${subjectKey}-full`,
        title: `${subjData.name} — Full Subject Standard Mock`,
        subjectName: subjData.name,
        topicName: 'Comprehensive Syllabus',
        type: 'Subject Mock',
        duration_mins: 20,
        gradient: subjData.gradient,
        questions: pool
      };
    } else {
      const topicObj = subjData.topics.find(t => t.id === topicId) || { name: topicId };
      const matched = subjData.questions.filter(q => q.topic === topicId);
      pool = matched.length > 0 ? matched : subjData.questions;
      return {
        id: `drill-${subjectKey}-${topicId}`,
        title: `${subjData.name} — ${topicObj.name}`,
        subjectName: subjData.name,
        topicName: `Weak Area: ${topicObj.name}`,
        type: 'Target Focus Drill',
        duration_mins: 15,
        gradient: subjData.gradient,
        questions: pool
      };
    }
  }

  function renderQuestion(index) {
    if (!currentTest || !currentTest.questions[index]) return;
    currentIndex = index;
    const q = currentTest.questions[index];

    progCurrEl.textContent = index + 1;
    qNumEl.textContent = `Question ${index + 1} of ${currentTest.questions.length}`;
    qSubjEl.textContent = q.subject || currentTest.subjectName;
    qTopicTag.textContent = q.topicName || currentTest.topicName;
    qTitleEl.textContent = `${q.subject || '11+ Focus'}: ${q.topicName || 'Core Problem'}`;
    passEl.innerHTML = q.passage_context || '<p>Analyze the problem and calculate carefully.</p>';
    stemEl.textContent = q.stem;

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

  function initTest(subjectKey, topicId) {
    answers = {};
    currentTest = buildTestQuestions(subjectKey, topicId);

    // Update Header
    titleEl.textContent = currentTest.title;
    subjBadge.textContent = currentTest.subjectName;
    badgeEl.textContent = currentTest.type;
    progTotalEl.textContent = currentTest.questions.length;
    headerBar.style.background = currentTest.gradient;

    timeLeft = currentTest.duration_mins * 60;
    startTimeIso = new Date().toISOString();

    startTimer();
    renderQuestion(0);

    loadingEl.classList.add('hidden');
    contentEl.classList.remove('hidden');
  }

  // Navigation handlers
  prevBtn.onclick = () => { if (currentIndex > 0) renderQuestion(currentIndex - 1); };
  nextBtn.onclick = () => { if (currentIndex < currentTest.questions.length - 1) renderQuestion(currentIndex + 1); };

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

  finishBtn.onclick = submitTest;

  // Topic Switcher Modal Logic
  function populateModalTopics(subjectKey) {
    const optsList = document.getElementById('modal-topic-options');
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
      initTest(currentSubject, currentTopicId);
    };
  }

  const fullSubjBtn = document.getElementById('select-all-topics-btn');
  if (fullSubjBtn) {
    fullSubjBtn.onclick = () => {
      currentSubject = modalSelectedSubject;
      currentTopicId = 'all';
      topicModal.classList.add('hidden');
      topicModal.classList.remove('flex');
      initTest(currentSubject, 'all');
    };
  }

  const compositeBtn = document.getElementById('modal-composite-btn');
  if (compositeBtn) {
    compositeBtn.onclick = () => {
      topicModal.classList.add('hidden');
      topicModal.classList.remove('flex');
      initTest('composite', 'all');
    };
  }

  // Socratic Hint Logic
  if (hintBtn) {
    hintBtn.onclick = () => {
      if (window.AIBuddy) {
        const q = currentTest.questions[currentIndex];
        window.AIBuddy.openHintModal(q.id, answers[q.id] || null);
      }
    };
  }

  // Font sizing tools
  let zoom = 100;
  document.getElementById('font-decrease-btn').onclick = () => {
    zoom = Math.max(90, zoom - 10);
    document.getElementById('arena-grid').style.fontSize = `${zoom}%`;
  };
  document.getElementById('font-increase-btn').onclick = () => {
    zoom = Math.min(130, zoom + 10);
    document.getElementById('arena-grid').style.fontSize = `${zoom}%`;
  };

  // Launch initial test
  initTest(currentSubject, currentTopicId);
});
