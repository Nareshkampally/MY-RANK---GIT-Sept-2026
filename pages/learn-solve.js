// Karat.Academy 11+ — Learn & Solve (Interactive Method Mastery Studio & 3D Pictorial Solver)
// The Core Learning USP: Concrete-Pictorial-Abstract (CPA) Pictorial Learning (Singapore Bar Models, 3D Rotating Cubes, Visual Balance Scales),
// 5-Level Question Progression (Foundation -> Core 11+ -> Exam Trap Variant -> Super-Selective -> Scholar Grand Mastery 🏆),
// and British Female Senior Tutor Voice ("Ms. Clara") with speech synthesis & animated audio visualizer.

LearnlyRouter.register('learn-solve', function() {
  return `
  <div class="flex flex-col w-full space-y-8 pb-16 animate-fade-in select-none" id="learn-solve-container">
    
    <!-- Hero Header with Pictorial Badges -->
    <header class="relative flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 sm:p-10 rounded-3xl overflow-hidden shadow-xl text-white" style="background: linear-gradient(135deg, #3730a3 0%, #1e1b4b 60%, #0f172a 100%);">
      <div class="absolute -right-16 -top-16 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute left-1/3 -bottom-20 w-64 h-64 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 max-w-2xl space-y-2">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-amber-300 text-xs font-black uppercase tracking-wider shadow-sm border border-white/20">
          <span class="material-symbols-outlined text-sm">view_in_ar</span>
          3D &amp; Pictorial Learning Hub • The 11+ Master Method
        </div>
        <h1 class="text-3xl sm:text-4xl font-black tracking-tight text-white flex items-center gap-3">
          Learn &amp; Solve Studio
          <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-widest hidden sm:inline-block">CPA Visual Method</span>
        </h1>
        <p class="text-indigo-100/90 text-sm sm:text-base leading-relaxed">
          Concrete-Pictorial-Abstract (CPA) learning for 11+ scholars. Master <strong>how to see the problem</strong> with interactive 3D models, Singapore bar strips, and audio coaching from <strong>Ms. Clara</strong>.
        </p>
      </div>

      <!-- Live Scholar Mastery Counter & XP Widget -->
      <div class="flex items-center gap-4 relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-2xl shadow-lg">
        <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-indigo-950 flex items-center justify-center font-black shadow-md">
          <span class="material-symbols-outlined text-3xl">emoji_events</span>
        </div>
        <div>
          <span class="text-[10px] font-bold uppercase tracking-widest text-indigo-200 block">Techniques Mastered</span>
          <div class="flex items-baseline gap-1 mt-0.5">
            <span class="text-2xl font-black text-white" id="mastery-count">12</span>
            <span class="text-xs text-indigo-200 font-bold">/ 40 Master Methods</span>
          </div>
          <span class="text-[11px] font-semibold text-emerald-300 flex items-center gap-1 mt-0.5">
            <span class="material-symbols-outlined text-xs">verified</span>
            400+ Pictorial Practice Questions
          </span>
        </div>
      </div>
    </header>

    <!-- Subject Selector Filter Bar -->
    <div class="flex flex-wrap items-center justify-between gap-4 bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/30 shadow-sm">
      <div class="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide" id="subject-tabs">
        <button class="ls-tab-btn px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider bg-primary text-on-primary shadow-sm transition-all flex items-center gap-2 cursor-pointer" data-subject="maths">
          <span class="material-symbols-outlined text-base">calculate</span>
          Mathematics (10)
        </button>
        <button class="ls-tab-btn px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface transition-all flex items-center gap-2 cursor-pointer" data-subject="nvr">
          <span class="material-symbols-outlined text-base">view_in_ar</span>
          Non-Verbal &amp; 3D (10)
        </button>
        <button class="ls-tab-btn px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface transition-all flex items-center gap-2 cursor-pointer" data-subject="vr">
          <span class="material-symbols-outlined text-base">psychology</span>
          Verbal Reasoning (10)
        </button>
        <button class="ls-tab-btn px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface transition-all flex items-center gap-2 cursor-pointer" data-subject="english">
          <span class="material-symbols-outlined text-base">menu_book</span>
          English &amp; Vocab (10)
        </button>
      </div>

      <!-- Pictorial Legend -->
      <div class="flex items-center gap-3 text-xs font-bold text-on-surface-variant">
        <span class="flex items-center gap-1 text-indigo-600"><span class="w-2.5 h-2.5 rounded-full bg-indigo-600"></span> Pictorial Diagram</span>
        <span class="flex items-center gap-1 text-amber-600"><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span> 3D Cube &amp; Dial</span>
        <span class="flex items-center gap-1 text-emerald-600"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> 10 Progressive Practice Levels per Topic</span>
      </div>
    </div>

    <!-- MAIN TWO-COLUMN STUDIO LAYOUT -->
    <div class="grid grid-cols-12 gap-8 items-start">
      
      <!-- LEFT COLUMN: Methods Catalog List -->
      <div class="col-span-12 lg:col-span-4 space-y-3" id="methods-list-container">
        <!-- Dynamically rendered method cards -->
      </div>

      <!-- RIGHT COLUMN: Interactive Learn & Solve Studio -->
      <div class="col-span-12 lg:col-span-8 space-y-6">
        
        <div class="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-outline-variant/30 shadow-md relative overflow-hidden" id="active-studio-card">
          
          <!-- Active Method Top Bar -->
          <div class="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-outline-variant/20 mb-6">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span id="active-method-tag" class="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider">
                  Mathematics • Singapore Bar Model
                </span>
                <span class="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[10px] font-bold">
                  ★ High Exam Frequency
                </span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-black text-on-surface" id="active-method-title">
                Reverse Percentages (Sale Price to Original)
              </h2>
            </div>

            <!-- Speech / Female Tutor Audio Player (Ms. Clara) -->
            <div class="flex items-center gap-2">
              <button id="btn-read-aloud" class="px-4 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md group">
                <span class="material-symbols-outlined text-base group-hover:scale-110 transition-transform" id="icon-read-aloud">record_voice_over</span>
                <span id="text-read-aloud">Listen to Ms. Clara</span>
              </button>
            </div>
          </div>

          <!-- FEMALE TUTOR SUBTITLE BANNER (Active during speech) -->
          <div id="tutor-speech-banner" class="hidden p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-950 font-medium flex items-center gap-3 mb-6 animate-pulse">
            <div class="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md">
              <span class="material-symbols-outlined text-lg">face_3</span>
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-black uppercase tracking-wider text-indigo-600">Ms. Clara (11+ Senior Tutor) is coaching:</span>
                <div class="flex items-center gap-1" id="audio-wave-anim">
                  <span class="w-1 h-3 bg-indigo-600 rounded-full animate-bounce"></span>
                  <span class="w-1 h-4 bg-indigo-500 rounded-full animate-bounce" style="animation-delay: 0.1s"></span>
                  <span class="w-1 h-2 bg-indigo-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
                </div>
              </div>
              <span id="tutor-speech-text" class="text-xs font-bold text-indigo-950">"Remember scholar, the sale price is never 100%! If it was reduced by 20%, it represents 80%."</span>
            </div>
          </div>

          <!-- THE GOLDEN RULE & EXAM TRAP BANNER -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div class="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200">
              <div class="flex items-center gap-2 text-indigo-900 font-extrabold text-xs uppercase tracking-wider mb-1">
                <span class="material-symbols-outlined text-base text-indigo-600">vpn_key</span>
                The Golden Rule:
              </div>
              <p class="text-xs sm:text-sm text-indigo-950 font-bold leading-relaxed" id="active-method-rule">
                The Sale Price is NEVER 100%! If it was reduced by 20%, the sale price represents 80%. Divide by 8 to find 10%, then multiply by 10 to find 100%.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-rose-50/80 border border-rose-200">
              <div class="flex items-center gap-2 text-rose-900 font-extrabold text-xs uppercase tracking-wider mb-1">
                <span class="material-symbols-outlined text-base text-rose-600">warning</span>
                The 11+ Exam Trap:
              </div>
              <p class="text-xs sm:text-sm text-rose-950 font-bold leading-relaxed" id="active-method-trap">
                DO NOT just calculate 20% of £96 and add it on! 20% of £96 is NOT the same as 20% of the original price!
              </p>
            </div>
          </div>

          <!-- TAB SWITCHER: 1. Pictorial Breakdown vs 2. Practice Question Levels -->
          <div class="flex border-b border-outline-variant/20 mb-6 gap-2">
            <button id="tab-walkthrough" class="pb-3 px-4 font-black text-sm border-b-2 border-primary text-primary flex items-center gap-2 transition-all cursor-pointer">
              <span class="material-symbols-outlined text-lg">image</span>
              1. Pictorial &amp; 3D Breakdown
            </button>
            <button id="tab-twin" class="pb-3 px-4 font-bold text-sm text-on-surface-variant hover:text-on-surface flex items-center gap-2 transition-all cursor-pointer">
              <span class="material-symbols-outlined text-lg">edit_note</span>
              2. Now You Solve! (10 Practice Questions)
            </button>
          </div>

          <!-- TAB 1: PICTORIAL BREAKDOWN PANEL -->
          <div id="panel-walkthrough" class="space-y-6">
            
            <!-- Worked Question Box -->
            <div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30">
              <span class="text-[10px] font-black uppercase tracking-widest text-primary block mb-1">Worked Example:</span>
              <p class="text-lg font-bold text-on-surface leading-snug" id="walkthrough-question-text">
                A winter jacket is reduced by <span class="bg-amber-200/60 px-1 py-0.5 rounded text-amber-900 font-black">20% in a sale</span>. The sale price is <span class="bg-indigo-200/60 px-1 py-0.5 rounded text-indigo-950 font-black">£96</span>. What was the original full price before the discount?
              </p>
            </div>

            <!-- PICTORIAL & 3D VISUAL MODEL STAGE -->
            <div class="p-6 rounded-2xl bg-slate-900 text-white shadow-inner relative overflow-hidden" id="visual-model-area">
              <!-- Dynamically populated 3D Cube / SVG Singapore Bar Model / Scale / Dail -->
            </div>

            <!-- INTERACTIVE STEP REVEALER -->
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="text-xs font-black uppercase tracking-wider text-on-surface">Step-by-Step Method Breakdown:</h4>
                <span class="text-xs text-primary font-bold" id="step-count-status">Step 1 of 3</span>
              </div>

              <div class="space-y-2.5" id="interactive-steps-list">
                <!-- Dynamically populated steps with reveal triggers -->
              </div>
            </div>

            <!-- Action to jump to Practice Questions -->
            <div class="pt-4 flex justify-end">
              <button id="btn-goto-twin" class="px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-on-primary font-black text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2 cursor-pointer">
                <span>Start Practice Questions (10 Levels) →</span>
                <span class="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
          </div>

          <!-- TAB 2: MULTI-QUESTION SOLVER PANEL -->
          <div id="panel-twin" class="hidden space-y-6">
            
            <!-- Question Level Switcher Strip (10 Progressing Levels) -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-surface-container-low p-2.5 rounded-2xl border border-outline-variant/20">
              <span class="text-xs font-black uppercase tracking-wider text-on-surface-variant px-2">Select Question Level:</span>
              <div class="flex flex-wrap items-center gap-1.5" id="question-level-pills">
                <!-- Dynamically rendered Q1 - Q10 buttons -->
              </div>
            </div>

            <!-- Active Question Box -->
            <div class="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-indigo-900 text-xs font-black uppercase tracking-wider flex items-center gap-1" id="twin-level-label">
                  <span class="material-symbols-outlined text-sm text-indigo-600">target</span>
                  Level 1: Foundation Warm-up
                </span>
                <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-200/80 text-indigo-900" id="twin-status-pill">
                  Unsolved
                </span>
              </div>
              <p class="text-lg font-bold text-on-surface leading-snug" id="twin-question-text">
                A bicycle is reduced by <strong>25%</strong> in an end-of-season sale. The new price is <strong>£180</strong>. What was the original price of the bicycle before the discount?
              </p>

              <!-- Inline Pictorial Clue Box (Can be toggled) -->
              <div id="twin-inline-clue" class="p-3.5 rounded-xl bg-white/80 border border-indigo-200 text-xs font-mono text-indigo-950 flex items-start gap-2 shadow-xs">
                <span class="material-symbols-outlined text-base text-indigo-600 shrink-0">insights</span>
                <span id="twin-inline-clue-text">📊 Bar Model: [ 25% ] [ 25% ] [ 25% ] = £180 (3 parts). 1 part = £60. 4 parts = £240.</span>
              </div>
            </div>

            <!-- Multiple Choice Option Buttons -->
            <div class="space-y-4">
              <label class="block text-xs font-black uppercase tracking-wider text-on-surface">
                Select Your Solution:
              </label>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="twin-options-grid">
                <!-- Dynamically populated options -->
              </div>

              <!-- Clue / Hint Toggles -->
              <div class="flex flex-wrap items-center gap-3 pt-2">
                <button id="btn-show-twin-hint" class="px-4 py-2 rounded-xl bg-surface-container border border-outline-variant/30 text-xs font-bold text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-1.5 cursor-pointer">
                  <span class="material-symbols-outlined text-sm text-amber-500">help</span>
                  <span>Need a Hint? (Step Reminder)</span>
                </button>
                <button id="btn-show-twin-diagram" class="px-4 py-2 rounded-xl bg-surface-container border border-outline-variant/30 text-xs font-bold text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-1.5 cursor-pointer">
                  <span class="material-symbols-outlined text-sm text-indigo-500">view_sidebar</span>
                  <span>Review Full Pictorial Stage</span>
                </button>
              </div>

              <!-- Hint Message Box -->
              <div id="twin-hint-box" class="hidden p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 font-medium">
                💡 <strong>Hint:</strong> Use the Bar Model! 75% = £180 (3 units). Find 1 unit by dividing £180 ÷ 3, then multiply by 4 to get 100%!
              </div>

              <!-- Feedback Banner -->
              <div id="twin-feedback-banner" class="hidden p-5 rounded-2xl text-center font-bold text-sm shadow-md transition-all"></div>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>`;
}, function() {
  // ── 11+ COMPREHENSIVE METHOD & PICTORIAL DATABASE ──────────────────
  const methodsDatabase = {
    maths: [
      {
        id: 'math-rev-pct',
        title: 'Reverse Percentages (Sale Price to Original)',
        category: 'Mathematics',
        examFrequency: 'High (QE Boys, Kent, Sutton)',
        difficulty: 'Intermediate',
        rule: 'The Sale Price is NEVER 100%! If it was reduced by 20%, the sale price represents 80%. Divide by 8 to find 10%, then multiply by 10 to find 100%.',
        trap: 'DO NOT just find 20% of £96 and add it on! £96 is the reduced amount, not the original base!',
        question: 'A winter jacket is reduced by 20% in a sale. The sale price is £96. What was the original full price before the discount?',
        visualType: 'bar-percentage',
        steps: [
          {
            title: 'Step 1: Identify the Sale Percentage',
            detail: 'The original price is always 100%. A 20% reduction means the jacket now costs: 100% - 20% = <strong>80%</strong>.'
          },
          {
            title: 'Step 2: Find the Value of 1 Unit (10%)',
            detail: '80% = £96. Divide both sides by 8 to find 10%: 10% = £96 ÷ 8 = <strong>£12</strong>.'
          },
          {
            title: 'Step 3: Scale Up to 100% (The Original Price)',
            detail: 'Original price = 100% = £12 × 10 = <strong>£120</strong>. (Check: 20% of £120 is £24; £120 - £24 = £96 ✅).'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: 'A bicycle is reduced by 25% in a sale. The sale price is £180. What was the original price before the discount?',
            options: ['£225', '£240', '£215', '£250'],
            correct: 1,
            hint: '75% represents £180. Divide by 3 to find 25%, then multiply by 4 to reach 100%.',
            explanation: '75% = £180. 25% = £180 ÷ 3 = £60. Full original price (100%) = £60 × 4 = £240.',
            pictorialClue: '📊 Bar Model: [ 25% ] [ 25% ] [ 25% ] = £180 (3 parts). 1 part = £60. 4 parts = £240.'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: 'After a 15% increase, a peak-hour train season ticket costs £69. What was the original price before the increase?',
            options: ['£55', '£58.65', '£60', '£62'],
            correct: 2,
            hint: 'The new price is 115%. Divide 69 by 115 to find 1%, then multiply by 100.',
            explanation: 'New price = 115% = £69. 1% = £69 ÷ 115 = £0.60. Original price (100%) = £0.60 × 100 = £60.',
            pictorialClue: '📈 Bar Model: [ 100% Base = £60 ] + [ +15% Surcharge = £9 ] = £69 Total.'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'A winter coat is on sale for £96 after a 20% discount. A scholar claims: "20% of 96 is 19.20, so original price was £96 + £19.20 = £115.20". What was the TRUE original price?',
            options: ['£115.20', '£120.00', '£118.50', '£125.00'],
            correct: 1,
            hint: 'Remember the trap! 20% was removed from the ORIGINAL price, not the £96 sale price!',
            explanation: '80% of original = £96. 10% = £96 ÷ 8 = £12. 100% = £12 × 10 = £120. Adding 20% of 96 is the classic 11+ trap!',
            pictorialClue: '⚠️ Trap Alert: £96 ÷ 0.8 = £120. 20% of £120 is £24 (not £19.20).'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: 'A gaming console is reduced by 30% on Black Friday, then reduced by a further 10% on Cyber Monday to £252. What was the original full price before both discounts?',
            options: ['£360', '£400', '£380', '£420'],
            correct: 1,
            hint: 'Work backwards step by step! Before the second discount: 90% = £252.',
            explanation: 'Step 1: £252 ÷ 0.9 = £280 (price after first discount). Step 2: £280 represents 70% of original price. Original = £280 ÷ 0.7 = £400.',
            pictorialClue: '🔄 Two-Tier Bar: Original (£400) ➔ -30% (£280) ➔ -10% (£252).'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: 'A smart TV is increased in price by 20% in January, then reduced by 20% in February to £480. What was its price at the start of January?',
            options: ['£480', '£500', '£520', '£490'],
            correct: 1,
            hint: 'Start with P. January price = 1.2P. February price = 1.2P × 0.8 = 0.96P = £480.',
            explanation: 'If original is 100%, +20% makes it 120%. A 20% cut of 120% is 24%, leaving 96%. 96% = £480. 1% = £5. 100% = £500.',
            pictorialClue: '🏆 Grand Rule: Equal percentage rise and fall always results in a net drop: (1.20 × 0.80 = 0.96).'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "A rare book sold at auction for £540 after appreciating by 20% in value over 3 years. What was its value 3 years ago?",
            options: ["£432","£450","£460","£480"],
            correct: 1,
            hint: "120% = £540. Divide 540 by 12 to find 10%, then multiply by 10.",
            explanation: "120% = £540. 10% = £540 ÷ 12 = £45. Original value (100%) = £45 × 10 = £450.",
            pictorialClue: "📈 Appreciation Bar: [ 100% Base = £450 ] + [ 20% Gain = £90 ] = £540."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "An airline ticket costs £345 after a 15% fuel surcharge and a further £23 airport tax are added. What was the base ticket price before surcharge and tax?",
            options: ["£270","£280","£290","£300"],
            correct: 1,
            hint: "First strip the £23 tax: £345 - £23 = £322. Then £322 represents 115% of the base price.",
            explanation: "Step 1: £345 - £23 = £322. Step 2: 115% = £322. 1% = £322 ÷ 115 = £2.80. Base price = £2.80 × 100 = £280.",
            pictorialClue: "🛫 Two-Step Bar: £345 - £23 tax = £322 (115% of base). £322 ÷ 1.15 = £280."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "A vintage sports car was sold for £14,400, suffering a 20% depreciation in Year 1 and a further 10% depreciation in Year 2. What was the car's brand-new price?",
            options: ["£18,000","£20,000","£19,200","£21,000"],
            correct: 1,
            hint: "Work backwards! After Year 1 it had value V. In Year 2: 90% of V = £14,400.",
            explanation: "Step 1: £14,400 ÷ 0.9 = £16,000 (after Year 1). Step 2: £16,000 represents 80% of original. Original = £16,000 ÷ 0.8 = £20,000.",
            pictorialClue: "🚗 Depreciation Cascade: £20,000 ➔ (-20%) £16,000 ➔ (-10%) £14,400."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "In an end-of-year school test, Amira scored 84 marks. Her teacher notes: \"Your score was 40% higher than your baseline test score in September.\" How many marks did Amira score in September?",
            options: ["56","60","64","62"],
            correct: 1,
            hint: "140% = 84. Divide by 7 to find 20%, then multiply by 5 to find 100%.",
            explanation: "140% = 84 marks. 20% = 84 ÷ 7 = 12 marks. Baseline (100%) = 12 × 5 = 60 marks.",
            pictorialClue: "🎯 Score Scale: September [60] + 40% bonus [24] = 84 marks."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "A shopkeeper increases the price of a laptop by 25%. During a sale, he offers a discount so the final price returns EXACTLY to the original price. What percentage discount must he offer?",
            options: ["25%","20%","15%","22.5%"],
            correct: 1,
            hint: "Start with £100. Price becomes £125. To go from £125 back to £100, reduce by £25 out of £125!",
            explanation: "If original is 100, price becomes 125. Reduction needed is 25. Percentage discount = (25 ÷ 125) × 100 = 20%!",
            pictorialClue: "🏆 The Classic 11+ Reversal: +25% on 100 = 125. -20% of 125 = 25 reduction back to 100."
          }
        ]
      },
      {
        id: 'math-ratio-units',
        title: 'Ratio & Sharing with Unequal Blocks',
        category: 'Mathematics',
        examFrequency: 'Very High (GL & CEM)',
        difficulty: 'Foundation',
        rule: 'In ratio word problems, ALWAYS find the value of "1 Unit" first by dividing the known total or difference by the number of unit parts.',
        trap: 'Kids often divide the total by only one side of the ratio instead of the sum of the ratio parts!',
        question: 'Liam and Maya share 72 stickers in the ratio 3 : 5. How many more stickers does Maya have than Liam?',
        visualType: 'bar-ratio',
        steps: [
          {
            title: 'Step 1: Count Total Ratio Units',
            detail: 'Liam has 3 unit blocks; Maya has 5 unit blocks. Total units = 3 + 5 = <strong>8 units</strong>.'
          },
          {
            title: 'Step 2: Find the Value of 1 Unit Block',
            detail: 'Total stickers = 72. 1 unit block = 72 ÷ 8 = <strong>9 stickers</strong> per block.'
          },
          {
            title: 'Step 3: Calculate the Difference Directly',
            detail: 'Maya has 5 - 3 = 2 more units than Liam. Difference = 2 units × 9 = <strong>18 stickers</strong>.'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: 'A jar contains red and blue marbles in the ratio 2 : 7. If there are 63 marbles in total, how many red marbles are in the jar?',
            options: ['12', '14', '16', '18'],
            correct: 1,
            hint: 'Total parts = 2 + 7 = 9. Find 1 part by 63 ÷ 9, then multiply by 2.',
            explanation: 'Total units = 2 + 7 = 9. 1 unit = 63 ÷ 9 = 7. Red marbles = 2 × 7 = 14.',
            pictorialClue: '🔵🔴 Ratio Bar: Red [7][7] (14) | Blue [7][7][7][7][7][7][7] (49). Total = 63.'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: 'Fruit punch is made by mixing orange juice and apple juice in the ratio 4 : 7. If 280 ml of apple juice is used, how much orange juice is needed?',
            options: ['140 ml', '160 ml', '175 ml', '180 ml'],
            correct: 1,
            hint: 'The 280 ml is ONLY the apple juice (7 parts), not the total!',
            explanation: '7 parts = 280 ml. 1 part = 280 ÷ 7 = 40 ml. Orange juice (4 parts) = 4 × 40 = 160 ml.',
            pictorialClue: '🍊🍏 Unit Match: Apple (7 units) = 280ml ➔ 1 unit = 40ml ➔ Orange (4 units) = 160ml.'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'Three siblings share £150 in the ratio 2 : 3 : 5. How much more money does the eldest child receive than the youngest child?',
            options: ['£30', '£45', '£75', '£40'],
            correct: 1,
            hint: 'Total units = 2 + 3 + 5 = 10. Find difference between eldest (5) and youngest (2) = 3 units.',
            explanation: '10 units = £150 ➔ 1 unit = £15. Youngest = 2 × 15 = £30. Eldest = 5 × 15 = £75. Difference = £75 - £30 = £45 (or 3 × 15 = £45).',
            pictorialClue: '💷 Parts Strip: Youngest [15][15] (£30) vs Eldest [15][15][15][15][15] (£75). Diff = 3 blocks = £45.'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: 'The ratio of boys to girls in a hall is 5 : 3. After 12 boys leave the hall, the ratio of boys to girls becomes 1 : 1. How many girls were in the hall?',
            options: ['15', '18', '21', '24'],
            correct: 1,
            hint: 'Girls didn\'t change! When ratio is 1:1, boys equals girls (3 units). So 5 units - 12 = 3 units.',
            explanation: 'Girls remain at 3 units. Boys drop from 5 units to 3 units (a drop of 2 units). 2 units = 12 boys ➔ 1 unit = 6. Girls = 3 × 6 = 18.',
            pictorialClue: '👦👧 Unequal Change: Boys [6][6][6][6][6] (30) ➔ 12 leave ➔ [6][6][6] (18). Girls = [6][6][6] (18).'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: 'In a school library, the ratio of fiction to non-fiction books is 7 : 4. When 30 new non-fiction books are added, the new ratio becomes 7 : 6. How many fiction books are in the library?',
            options: ['90', '105', '120', '140'],
            correct: 1,
            hint: 'Notice fiction parts remain unchanged at 7! The non-fiction parts increased from 4 to 6 (2 units).',
            explanation: 'Fiction stays 7 units. Non-fiction increases from 4 to 6 units = 2 units increase. 2 units = 30 books ➔ 1 unit = 15 books. Fiction = 7 × 15 = 105 books.',
            pictorialClue: '📚 Ratio Anchor: Fiction (7 units = 105) anchored. Non-fiction: 4 units (60) + 30 = 6 units (90).'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "Three runners share 96 bottles of water in the ratio 1 : 2 : 5. How many bottles do the second and third runners receive together?",
            options: ["72","80","84","70"],
            correct: 2,
            hint: "Total parts = 1 + 2 + 5 = 8 parts. Find 1 part by 96 ÷ 8 = 12. Combined 2nd and 3rd = 2 + 5 = 7 parts.",
            explanation: "8 parts = 96 ➔ 1 part = 12. Runners 2 and 3 get 2 + 5 = 7 parts = 7 × 12 = 84 bottles.",
            pictorialClue: "💧 Bar Model: [12] | [12][12] | [12][12][12][12][12]. Combined 2+5 = 7 × 12 = 84."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "The ratio of adults to children on a ferry is 4 : 9. There are 165 more children than adults. How many passengers are on the ferry altogether?",
            options: ["429","415","390","440"],
            correct: 0,
            hint: "The difference in parts is 9 - 4 = 5 parts. 5 parts = 165. Total parts = 13.",
            explanation: "5 parts = 165 ➔ 1 part = 165 ÷ 5 = 33. Total passengers = (4 + 9) parts = 13 × 33 = 429 passengers.",
            pictorialClue: "⛴️ Difference Bar: Children has 5 extra blocks = 165 ➔ 1 block = 33. 13 blocks = 429."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "Copper and tin are melted in the ratio 7 : 3 to make bronze. A foundry uses 42 kg of copper. How many kilograms of bronze will be produced?",
            options: ["54 kg","60 kg","56 kg","63 kg"],
            correct: 1,
            hint: "7 parts = 42 kg. Find 1 part, then multiply by total parts (7 + 3 = 10).",
            explanation: "7 parts = 42 kg ➔ 1 part = 6 kg. Total bronze = 10 parts = 10 × 6 kg = 60 kg.",
            pictorialClue: "🥉 Alloy Ratio: Copper (7 × 6 = 42kg) + Tin (3 × 6 = 18kg) = 60kg Bronze."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "A bag has 60 counters in red, green, and yellow. Ratio of red to green is 1 : 2. Ratio of green to yellow is 2 : 3. How many green counters are in the bag?",
            options: ["10","20","30","25"],
            correct: 1,
            hint: "Combined ratio Red : Green : Yellow = 1 : 2 : 3. Total parts = 6.",
            explanation: "Total parts = 1 + 2 + 3 = 6 parts. 6 parts = 60 ➔ 1 part = 10. Green = 2 × 10 = 20 counters.",
            pictorialClue: "🟡🟢 Combined 3-Way Ratio: Red [10] : Green [10][10] : Yellow [10][10][10] = 60."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "Priya and Ethan have money in the ratio 5 : 2. Priya gives £36 to Ethan, and now both have the exact same amount of money. How much money did Priya have at the start?",
            options: ["£90","£120","£108","£144"],
            correct: 1,
            hint: "Total units = 5 + 2 = 7 units. Equal share = 3.5 units each. Priya gave 1.5 units = £36.",
            explanation: "Equal share = 7 ÷ 2 = 3.5 units. Transfer = 5 - 3.5 = 1.5 units = £36. 1 unit = £36 ÷ 1.5 = £24. Priya start = 5 × £24 = £120.",
            pictorialClue: "🏆 Transfer Balance: Priya gave 1.5 blocks = £36 ➔ 1 block = £24 ➔ 5 blocks = £120."
          }
        ]
      },
      {
        id: 'math-balance-scale',
        title: 'Algebra: Balance Scale Method for Unknowns',
        category: 'Mathematics',
        examFrequency: 'High (St. Olave\'s, Tiffin, CSSE)',
        difficulty: 'Intermediate',
        rule: 'An equation is a balanced pair of scales. Whatever weight you remove or add to one pan, you MUST do exactly the same to the other pan.',
        trap: 'Moving terms across the equals sign without flipping their sign (e.g. turning +6 into +6 instead of -6)!',
        question: 'Solve for x: 3x + 14 = 5x - 6',
        visualType: 'balance-scale',
        steps: [
          {
            title: 'Step 1: Eliminate the Smaller Variable Pan',
            detail: 'Subtract 3x from both pans so variables are on one side only: 3x + 14 - 3x = 5x - 6 - 3x ➔ <strong>14 = 2x - 6</strong>.'
          },
          {
            title: 'Step 2: Isolate the Variable Term',
            detail: 'Add 6 to both pans to cancel the -6: 14 + 6 = 2x ➔ <strong>20 = 2x</strong>.'
          },
          {
            title: 'Step 3: Divide by Coefficient to Find 1 Unit',
            detail: 'Divide both pans by 2: x = 20 ÷ 2 ➔ <strong>x = 10</strong>.'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: 'Solve for x: 4x + 7 = 31',
            options: ['5', '6', '7', '8'],
            correct: 1,
            hint: 'Remove 7 from both pans: 4x = 24. Then divide by 4.',
            explanation: '4x = 31 - 7 = 24. x = 24 ÷ 4 = 6.',
            pictorialClue: '⚖️ Balance Pan: [4x][7] = [31] ➔ remove 7 from both ➔ [4x] = [24] ➔ x = 6.'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: 'Solve for y: 4(y - 3) = 2y + 10',
            options: ['9', '10', '11', '12'],
            correct: 2,
            hint: 'Expand the bracket first: 4y - 12 = 2y + 10. Then balance the scales.',
            explanation: '4y - 12 = 2y + 10 ➔ 2y - 12 = 10 ➔ 2y = 22 ➔ y = 11.',
            pictorialClue: '⚖️ Expanded Pans: Left [4y - 12] = Right [2y + 10] ➔ 2y = 22 ➔ y = 11.'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'Solve for p: 7p - (2p + 5) = 25',
            options: ['5', '6', '7', '8'],
            correct: 1,
            hint: 'Watch the negative sign before bracket! -(2p + 5) becomes -2p - 5!',
            explanation: '7p - 2p - 5 = 25 ➔ 5p - 5 = 25 ➔ 5p = 30 ➔ p = 6.',
            pictorialClue: '⚠️ Negative Bracket Trap: -(2p + 5) = -2p - 5. Pan becomes [5p - 5] = [25].'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: 'Solve for k: 3(2k + 5) - 4 = 5(k + 4) - 1',
            options: ['6', '7', '8', '9'],
            correct: 2,
            hint: 'Carefully expand both sides: 6k + 15 - 4 = 5k + 20 - 1.',
            explanation: 'Left: 6k + 11. Right: 5k + 19. Subtract 5k from both: k + 11 = 19. Subtract 11: k = 8.',
            pictorialClue: '⚖️ Multi-Term Balance: [6k + 11] = [5k + 19] ➔ subtract 5k & 11 ➔ k = 8.'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: 'A balance scale has 2 identical mystery bags and a 70g brass weight on the left pan, and 5 identical mystery bags and a 10g weight on the right pan. How much does each mystery bag weigh?',
            options: ['15g', '18g', '20g', '25g'],
            correct: 2,
            hint: 'Set up the balance equation: 2b + 70 = 5b + 10.',
            explanation: '2b + 70 = 5b + 10 ➔ 70 = 3b + 10 ➔ 60 = 3b ➔ b = 20g.',
            pictorialClue: '🏆 Physical Pans: [Bag][Bag][70g] = [Bag][Bag][Bag][Bag][Bag][10g] ➔ 3 Bags = 60g ➔ 1 Bag = 20g.'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "3 bags of flour and a 200g weight balance 1 bag of flour and an 800g weight. What is the mass of one bag of flour?",
            options: ["250g","300g","350g","400g"],
            correct: 1,
            hint: "3B + 200 = 1B + 800. Subtract 1B from both sides: 2B + 200 = 800.",
            explanation: "2B = 800 - 200 = 600g. 1B = 600 ÷ 2 = 300g.",
            pictorialClue: "⚖️ Scale Balance: Remove 1 bag from each pan: 2 bags + 200g = 800g ➔ 2 bags = 600g."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "4 pens and 3 rulers cost £4.90. 2 pens and 3 rulers cost £3.10. What is the cost of 1 pen?",
            options: ["80p","90p","85p","95p"],
            correct: 1,
            hint: "Compare the two receipts! The only difference is 2 pens: £4.90 - £3.10 = £1.80.",
            explanation: "Difference = 4 pens - 2 pens = 2 pens. 2 pens = £4.90 - £3.10 = £1.80. 1 pen = £1.80 ÷ 2 = £0.90 (90p).",
            pictorialClue: "🖊️ Receipt Comparison: [2 Pens extra] = £4.90 - £3.10 = £1.80 ➔ 1 Pen = 90p."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "A mystery number n satisfies: 5n - 17 = 2n + 19. What is the value of n?",
            options: ["10","12","14","16"],
            correct: 1,
            hint: "Subtract 2n from both sides: 3n - 17 = 19. Then add 17: 3n = 36.",
            explanation: "5n - 2n = 19 + 17 ➔ 3n = 36 ➔ n = 12.",
            pictorialClue: "🔢 Algebra Ladder: 3n = 36 ➔ n = 12."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "5 identical books and 2 identical notebooks cost £46. 3 identical books and 2 identical notebooks cost £30. How much does 1 notebook cost?",
            options: ["£2.50","£3.00","£3.50","£4.00"],
            correct: 1,
            hint: "2 books = £46 - £30 = £16 ➔ 1 book = £8. Substitute into 3 books + 2 notebooks = £30.",
            explanation: "2 books = £16 ➔ 1 book = £8. 3 books = £24. 2 notebooks = £30 - £24 = £6 ➔ 1 notebook = £3.00.",
            pictorialClue: "📚 Substitution Bar: 1 book = £8. 3 books (£24) + 2 notebooks (£6) = £30 ➔ 1 notebook = £3."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "A mother is 4 times as old as her daughter. In 12 years, the mother will be only twice as old as her daughter will be then. How old is the daughter today?",
            options: ["6","8","10","12"],
            correct: 0,
            hint: "Let daughter = d, Mother = 4d. In 12 years: 4d + 12 = 2(d + 12) = 2d + 24.",
            explanation: "4d + 12 = 2d + 24 ➔ 2d = 12 ➔ d = 6. (Check: Today M=24, D=6. In 12 yrs: M=36, D=18. 36 is twice 18 ✅).",
            pictorialClue: "🏆 Age Timeline: Today: D=6, M=24. In 12 yrs: D=18, M=36 (2 × 18)."
          }
        ]
      },
      {
        id: 'math-speed-triangle',
        title: 'Speed, Distance & Time (The Minutes Trap)',
        category: 'Mathematics',
        examFrequency: 'Very High (All Grammar Regions)',
        difficulty: 'Intermediate',
        rule: 'Always convert minutes to fractions of an hour before calculating! 15 mins = 1/4 hr, 20 mins = 1/3 hr, 40 mins = 2/3 hr, 45 mins = 3/4 hr.',
        trap: 'DO NOT multiply 60 mph by 0.40 for 40 minutes! 40 minutes is 40/60 = 2/3 of an hour!',
        question: 'An express train travels at an average speed of 72 km/h for 45 minutes. How far does the train travel?',
        visualType: 'triangle-dst',
        steps: [
          {
            title: 'Step 1: Check the DST Pyramid Formula',
            detail: 'To find Distance (top of triangle): <strong>Distance = Speed × Time</strong>.'
          },
          {
            title: 'Step 2: Convert Minutes to Hours',
            detail: 'Time is 45 minutes. 45 ÷ 60 = <strong>3/4 hour</strong> (or 0.75 hr). Never multiply by 45 directly!'
          },
          {
            title: 'Step 3: Compute Distance',
            detail: 'Distance = 72 km/h × (3/4) h = (72 ÷ 4) × 3 = 18 × 3 = <strong>54 km</strong>.'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: 'A car travels 150 miles along the motorway at an average speed of 50 mph. How many hours did the journey take?',
            options: ['2.5 hours', '3 hours', '3.5 hours', '4 hours'],
            correct: 1,
            hint: 'Time = Distance ÷ Speed = 150 ÷ 50.',
            explanation: 'Time = 150 miles ÷ 50 mph = 3 hours.',
            pictorialClue: '🔺 DST Pyramid: Cover T ➔ D (150) / S (50) = 3 hours.'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: 'A cyclist travels 18 miles in 40 minutes. What is their average speed in miles per hour (mph)?',
            options: ['24 mph', '27 mph', '30 mph', '32 mph'],
            correct: 1,
            hint: '40 minutes = 40/60 = 2/3 hour. Speed = Distance ÷ Time = 18 ÷ (2/3).',
            explanation: 'Time = 2/3 hr. Speed = 18 ÷ (2/3) = 18 × (3/2) = 27 mph.',
            pictorialClue: '⏱️ Minutes Dial: 40 mins = 2/3 of a full clock face. 18 ÷ (2/3) = 27 mph.'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'A motorist drives at 60 mph for 15 minutes, then stops for 10 minutes, then drives 30 miles in 35 minutes. What is the total distance covered?',
            options: ['40 miles', '45 miles', '50 miles', '55 miles'],
            correct: 1,
            hint: 'Break down each stage: Stage 1 distance + Stage 3 distance. Stop time does not add distance!',
            explanation: 'Stage 1: 60 mph × (15/60 hr) = 15 miles. Stage 2: 0 miles. Stage 3: 30 miles. Total distance = 15 + 30 = 45 miles.',
            pictorialClue: '🛣️ Segment Strip: [15 miles (15m)] + [Rest (10m)] + [30 miles (35m)] = 45 miles.'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: 'Maya drives to work at 30 mph taking 40 minutes. On her return journey via the exact same route, light traffic allows her to complete the trip in 25 minutes. What was her return speed?',
            options: ['42 mph', '45 mph', '48 mph', '50 mph'],
            correct: 2,
            hint: 'Find distance first: 30 mph × (40/60) hr = 20 miles. Then Return Speed = 20 ÷ (25/60).',
            explanation: 'Distance = 30 × 2/3 = 20 miles. Return speed = 20 miles ÷ (25/60 hr) = 20 × (60/25) = 48 mph.',
            pictorialClue: '🔄 Return Trip: Fixed Distance = 20 miles. Time = 5/12 hr ➔ Speed = 20 × 12/5 = 48 mph.'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: 'A runner completes the first 10 km of a race at 12 km/h and the final 10 km at 8 km/h. What was their average speed over the full 20 km distance?',
            options: ['9.6 km/h', '10.0 km/h', '10.2 km/h', '9.8 km/h'],
            correct: 0,
            hint: 'The average speed is NOT the mean of 12 and 8 (10 km/h)! Average Speed = Total Distance ÷ Total Time.',
            explanation: 'Time 1 = 10/12 = 5/6 hr. Time 2 = 10/8 = 5/4 hr. Total Time = 10/12 + 15/12 = 25/12 hr. Average Speed = 20 ÷ (25/12) = 240/25 = 9.6 km/h.',
            pictorialClue: '🏆 Speed Trap Rule: More time is spent at the slower speed, pulling the average speed below 10 to 9.6 km/h!'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "A train travels at an average speed of 72 km/h. How many metres does it travel in 1 second?",
            options: ["15 m","20 m","24 m","25 m"],
            correct: 1,
            hint: "Divide km/h by 3.6 to convert to m/s (72,000m ÷ 3600 seconds).",
            explanation: "72 km = 72,000 m. 1 hour = 3,600 s. Speed = 72,000 ÷ 3,600 = 20 m/s.",
            pictorialClue: "⏱️ Conversion Trick: 72 km/h ÷ 3.6 = 20 m/s."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "Oliver cycles 18 miles at an average speed of 12 mph. How many minutes did his journey take?",
            options: ["75 mins","90 mins","80 mins","100 mins"],
            correct: 1,
            hint: "Time = Distance ÷ Speed = 18 ÷ 12 = 1.5 hours. Multiply by 60.",
            explanation: "18 ÷ 12 = 1.5 hours. 1.5 × 60 = 90 minutes (1 hour 30 minutes).",
            pictorialClue: "🚴 Triangle: T = 18/12 = 1.5 hrs = 90 mins."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "A car travels 45 miles at 30 mph, then 45 miles at 90 mph. What is the average speed for the whole 90-mile journey?",
            options: ["60 mph","45 mph","50 mph","55 mph"],
            correct: 1,
            hint: "Trap Alert! You cannot average the two speeds (30+90)/2! Average speed = Total Distance ÷ Total Time.",
            explanation: "Leg 1 time = 45 ÷ 30 = 1.5 hrs. Leg 2 time = 45 ÷ 90 = 0.5 hrs. Total time = 2.0 hrs. Total dist = 90 miles. Avg speed = 90 ÷ 2 = 45 mph!",
            pictorialClue: "⚠️ Speed Trap: (30+90)/2 = 60 is WRONG. Total dist 90m ÷ Total time 2h = 45 mph."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "A bus leaves Oxford at 08:45 and arrives in London at 10:15, covering 54 miles. What was its average speed in mph?",
            options: ["32 mph","36 mph","38 mph","40 mph"],
            correct: 1,
            hint: "Journey duration is 1 hour 30 mins = 1.5 hours. Speed = 54 ÷ 1.5.",
            explanation: "Time = 1.5 hours. Speed = 54 ÷ 1.5 = 36 mph.",
            pictorialClue: "🚌 Clock Interval: 08:45 to 10:15 = 1.5 hrs. 54 ÷ 1.5 = 36 mph."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "Two cyclists start 60 miles apart and ride towards each other. Cyclist A rides at 14 mph and Cyclist B rides at 16 mph. After how many hours do they meet?",
            options: ["1.5 hrs","2.0 hrs","2.5 hrs","3.0 hrs"],
            correct: 1,
            hint: "Combined speed = 14 + 16 = 30 mph. Time = Distance ÷ Combined Speed.",
            explanation: "Relative closing speed = 14 + 16 = 30 mph. Time to meet = 60 ÷ 30 = 2 hours.",
            pictorialClue: "🏆 Closing Distance: 30 miles closed each hour ➔ 60 miles closed in 2 hours."
          }
        ]
      },
      {
        id: 'math-compound-perimeter',
        title: 'Compound Shapes: Missing Lengths & Perimeter (Push-Out Method)',
        category: 'Mathematics',
        examFrequency: 'High (GL, Bexley, Medway)',
        difficulty: 'Intermediate',
        rule: 'For any rectilinear L-shape, the perimeter is identical to the enclosing bounding rectangle! Perimeter = 2 × (Overall Width + Overall Height).',
        trap: 'Children waste time finding missing internal sides when asking for perimeter, or subtract the cutout perimeter!',
        question: 'An L-shaped lawn has overall width 10m and overall height 8m. What is the total perimeter of the lawn?',
        visualType: 'rectilinear-shape',
        steps: [
          {
            title: 'Step 1: Visualise the Bounding Rectangle',
            detail: 'Imagine pushing the inner horizontal edge up and the inner vertical edge right.'
          },
          {
            title: 'Step 2: Apply the Push-Out Principle',
            detail: 'The inner edges match the missing parts of the outer rectangle perfectly!'
          },
          {
            title: 'Step 3: Calculate Bounding Perimeter',
            detail: 'Perimeter = 2 × (Width + Height) = 2 × (10 + 8) = 2 × 18 = <strong>36 metres</strong>.'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: 'A rectilinear garden patio has an overall width of 12m and an overall length of 9m. What is its perimeter?',
            options: ['38m', '40m', '42m', '44m'],
            correct: 2,
            hint: 'Use the Push-Out rule: Perimeter = 2 × (Width + Length).',
            explanation: 'Perimeter = 2 × (12 + 9) = 2 × 21 = 42m.',
            pictorialClue: '📐 Rectilinear Push: [12m Top + 12m Bottom] + [9m Left + 9m Right] = 42m.'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: 'An L-shape has base 14cm, total height 11cm, top horizontal width 6cm, and right vertical height 5cm. What is the total AREA of the shape?',
            options: ['102 cm²', '106 cm²', '110 cm²', '114 cm²'],
            correct: 1,
            hint: 'Split into two non-overlapping rectangles: Rectangle A (6 × 11) + Rectangle B ((14 - 6) × 5).',
            explanation: 'Rectangle 1 = 6 × 11 = 66 cm². Rectangle 2 = (14 - 6) × 5 = 8 × 5 = 40 cm². Total Area = 66 + 40 = 106 cm².',
            pictorialClue: '✂️ Area Split: [Left: 6 × 11 = 66] + [Right: 8 × 5 = 40] = 106 cm².'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'A rectangular cardboard sheet measuring 15cm by 10cm has a 3cm by 4cm corner notch snipped out. How does the perimeter of the new shape compare to the original sheet?',
            options: ['It is 14cm less', 'It is 7cm less', 'It is exactly the same', 'It is 7cm more'],
            correct: 2,
            hint: 'Push out the two inner edges of the corner cut! Do they equal the two edges cut away?',
            explanation: 'The two newly exposed inner edges (3cm and 4cm) push out to replace the exact boundary edges removed! Perimeter remains exactly the same (50cm).',
            pictorialClue: '⚠️ Corner Snip Rule: Corner cuts preserve perimeter; slot cuts add perimeter!'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: 'A symmetrical T-shaped badge has a horizontal top bar of 12cm by 4cm, and a vertical stem of 4cm wide by 8cm high centered underneath. What is the total perimeter of the badge?',
            options: ['44cm', '46cm', '48cm', '52cm'],
            correct: 2,
            hint: 'Trace all boundary segments: Top (12) + 2 short drops (4 each) + 2 horizontal indents (4 each) + 2 stem sides (8 each) + bottom (4).',
            explanation: 'Top = 12. Outer vertical drops = 4 + 4 = 8. Indents = (12 - 4)/2 = 4 each (total 8). Stem sides = 8 + 8 = 16. Bottom = 4. Total = 12 + 8 + 8 + 16 + 4 = 48cm.',
            pictorialClue: '✝️ T-Badge Perimeter: Outer boundary = 12 + 4 + 4 + 4 + 8 + 4 + 8 + 4 = 48cm.'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: 'A cross-shaped garden path is formed by adding 4 identical 3m by 5m rectangular extensions to the four sides of a 3m by 3m central square. What is the outer perimeter of this entire cross shape?',
            options: ['48m', '52m', '56m', '60m'],
            correct: 1,
            hint: 'Each of the 4 arms has an outer end of 3m and two exposed sides of 5m each.',
            explanation: 'Each arm exposes 3 sides: 5m + 3m + 5m = 13m. For 4 arms: 4 × 13m = 52 metres.',
            pictorialClue: '🏆 Cross Perimeter: 4 arms × (5 + 3 + 5) = 4 × 13 = 52m (central edges are internal!).'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "An L-shaped room has an outer bounding box of 12m by 9m. A rectangular chunk is cut from one corner. What is the perimeter of the L-shaped room?",
            options: ["36 m","42 m","48 m","38 m"],
            correct: 1,
            hint: "Push-Out Method! The perimeter of any corner-cut L-shape equals the perimeter of its full bounding rectangle: 2 × (12 + 9).",
            explanation: "Pushing the stepped edges out gives the outer rectangle: 2 × (12 + 9) = 2 × 21 = 42m!",
            pictorialClue: "📐 Push-Out Rule: Corner step pushed out equals full box: 2 × (12 + 9) = 42m."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "An L-shaped garden has bounding dimensions 10m by 8m. The corner cutout is 4m long by 3m wide. What is the AREA of the L-shaped garden?",
            options: ["68 m²","64 m²","72 m²","66 m²"],
            correct: 0,
            hint: "Area = Area of large bounding rectangle minus Area of cutout = (10 × 8) - (4 × 3).",
            explanation: "Total box = 10 × 8 = 80 m². Cutout = 4 × 3 = 12 m². Area = 80 - 12 = 68 m².",
            pictorialClue: "🌿 Area Subtraction: 80 m² (full rectangle) - 12 m² (cutout) = 68 m²."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "A cross shape is made of 5 identical squares of side length 6 cm. What is the perimeter of the cross shape?",
            options: ["60 cm","72 cm","84 cm","96 cm"],
            correct: 1,
            hint: "Count the exposed outer edges. A cross has 12 exposed outer sides.",
            explanation: "12 outer edges × 6 cm = 72 cm.",
            pictorialClue: "➕ Cross Edges: 3 outer edges per arm × 4 arms = 12 edges × 6cm = 72cm."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "A rectangle of length 15 cm and width 10 cm has a 3 cm by 3 cm square cut out from the CENTRE (a hole). What is the total perimeter of the resulting shape?",
            options: ["50 cm","62 cm","38 cm","56 cm"],
            correct: 1,
            hint: "Trap! A hole inside adds its own perimeter to the outside boundary perimeter!",
            explanation: "Outer perimeter = 2 × (15 + 10) = 50 cm. Inner perimeter of hole = 4 × 3 = 12 cm. Total perimeter = 50 + 12 = 62 cm!",
            pictorialClue: "🕳️ Interior Boundary: Outer boundary (50cm) + Inner hole boundary (12cm) = 62cm."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "A rectangular patio of 8m by 6m is surrounded by a 1m wide paved path. What is the area of the paved path alone?",
            options: ["28 m²","32 m²","36 m²","24 m²"],
            correct: 1,
            hint: "The path adds 1m on both sides: new length = 8 + 2 = 10m; new width = 6 + 2 = 8m.",
            explanation: "Outer area = 10 × 8 = 80 m². Inner patio = 8 × 6 = 48 m². Path area = 80 - 48 = 32 m².",
            pictorialClue: "🏆 Border Frame: Large box (10 × 8 = 80) - Inner patio (8 × 6 = 48) = 32 m²."
          }
        ]
      },
      {
        id: 'math-fraction-wall',
        title: 'Fraction Wall: Equivalence & Comparing Denominators',
        category: 'Mathematics',
        examFrequency: 'Very High (GL, CEM, ISEB)',
        difficulty: 'Intermediate',
        rule: 'To compare or add fractions, find the Lowest Common Multiple (LCM) of the denominators to create equivalent "fraction bricks".',
        trap: 'Adding numerators and denominators together (e.g. thinking 1/2 + 1/3 = 2/5)! Fractions must share the same denominator denominator size!',
        question: 'Which fraction is larger: 5/8 or 7/12?',
        visualType: 'fraction-wall',
        steps: [
          {
            title: 'Step 1: Find the Lowest Common Denominator',
            detail: 'Multiples of 8: 8, 16, <strong>24</strong>. Multiples of 12: 12, <strong>24</strong>. LCM = 24.'
          },
          {
            title: 'Step 2: Convert to Equivalent Fractions',
            detail: '5/8 = (5 × 3) / (8 × 3) = <strong>15/24</strong>. 7/12 = (7 × 2) / (12 × 2) = <strong>14/24</strong>.'
          },
          {
            title: 'Step 3: Compare Numerators',
            detail: '15/24 > 14/24. Therefore, <strong>5/8 is larger</strong> by 1/24.'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: 'Which of the following fractions is equivalent to 3/4?',
            options: ['6/10', '9/12', '12/20', '15/24'],
            correct: 1,
            hint: 'Multiply numerator and denominator by 3: (3 × 3) / (4 × 3).',
            explanation: '3/4 = (3 × 3)/(4 × 3) = 9/12.',
            pictorialClue: '🧱 Brick Wall: 3 quarter blocks = 9 twelfth blocks.'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: 'Arrange these fractions in ascending order (smallest to largest): 2/3, 5/8, 3/4.',
            options: ['5/8, 2/3, 3/4', '2/3, 5/8, 3/4', '5/8, 3/4, 2/3', '3/4, 2/3, 5/8'],
            correct: 0,
            hint: 'Convert to common denominator 24: 5/8 = 15/24, 2/3 = 16/24, 3/4 = 18/24.',
            explanation: '5/8 = 15/24; 2/3 = 16/24; 3/4 = 18/24. Ascending order: 15/24 < 16/24 < 18/24 ➔ 5/8, 2/3, 3/4.',
            pictorialClue: '📊 Denominator 24: [15/24] < [16/24] < [18/24].'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'A scholar adds 3/8 and 1/4 and writes 4/12 (which simplifies to 1/3). What is the CORRECT sum in simplest form?',
            options: ['1/3', '5/8', '7/12', '1/2'],
            correct: 1,
            hint: 'Never add denominators! Convert 1/4 to eighths: 1/4 = 2/8. Then 3/8 + 2/8 = 5/8.',
            explanation: '1/4 = 2/8. 3/8 + 2/8 = 5/8. Adding denominators is a major 11+ error!',
            pictorialClue: '⚠️ Denominator Trap: [3/8] + [2/8] = 5/8 (never add bottom numbers!).'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: 'What fraction lies exactly halfway between 3/8 and 5/6?',
            options: ['29/48', '19/24', '31/48', '7/12'],
            correct: 0,
            hint: 'Find the average: (3/8 + 5/6) ÷ 2. Common denominator 24: 9/24 + 20/24 = 29/24.',
            explanation: 'Sum = 9/24 + 20/24 = 29/24. Halfway = (29/24) ÷ 2 = 29/48.',
            pictorialClue: '📏 Halfway Ruler: 3/8 (18/48) ── [29/48] ── 5/6 (40/48). Distance each side = 11/48.'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: 'A recipe needs 5/6 cup of flour. Leo has 3/8 cup in jar A and 2/5 cup in jar B. Does he have enough, and by what difference?',
            options: ['Yes, with 7/120 cup surplus', 'No, short by 7/120 cup', 'No, short by 1/24 cup', 'Yes, with 1/30 cup surplus'],
            correct: 1,
            hint: 'Add 3/8 + 2/5 with denominator 40: 15/40 + 16/40 = 31/40. Compare to 5/6 (denominator 120).',
            explanation: 'Total flour = 15/40 + 16/40 = 31/40 = 93/120 cup. Recipe needs 5/6 = 100/120 cup. Short by 100/120 - 93/120 = 7/120 cup.',
            pictorialClue: '🏆 Denominator 120: Has 93/120 cup vs Required 100/120 cup ➔ Short by 7/120.'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "Which fraction is exactly halfway between 1/4 and 3/4?",
            options: ["1/3","1/2","5/8","3/8"],
            correct: 1,
            hint: "Add them and divide by 2: (1/4 + 3/4) ÷ 2 = 1 ÷ 2.",
            explanation: "(1/4 + 3/4) ÷ 2 = 4/4 ÷ 2 = 1/2.",
            pictorialClue: "🧱 Midpoint: 1/4 is 2/8, 3/4 is 6/8. Midpoint is 4/8 = 1/2."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "Arrange in ascending order: 3/5, 7/10, 5/8, 1/2. Which fraction is the second smallest?",
            options: ["1/2","3/5","5/8","7/10"],
            correct: 1,
            hint: "Convert to decimals: 1/2 = 0.50, 3/5 = 0.60, 5/8 = 0.625, 7/10 = 0.70.",
            explanation: "Ascending: 1/2 (0.50), 3/5 (0.60), 5/8 (0.625), 7/10 (0.70). The second smallest is 3/5.",
            pictorialClue: "📊 Decimal Benchmarks: 0.50 < 0.60 (3/5) < 0.625 < 0.70."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "A recipe calls for 2/3 cup of sugar. Marcus only has a 1/8 cup measuring scoop. How many full scoops must he use, and what fraction is left over?",
            options: ["5 scoops with 1/24 left","5 scoops with 1/8 left","4 scoops with 1/6 left","5 scoops with 1/12 left"],
            correct: 0,
            hint: "Common denominator 24: 2/3 = 16/24. 1/8 = 3/24. 16 ÷ 3 = 5 remainder 1.",
            explanation: "2/3 = 16/24. Each scoop is 3/24. 5 scoops = 15/24. Remainder needed = 1/24.",
            pictorialClue: "🥣 Unit Fractions: 16/24 = 5 × (3/24) + 1/24."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "3/7 of a number is 42. What is 5/7 of the same number?",
            options: ["60","70","65","75"],
            correct: 1,
            hint: "3 parts = 42 ➔ 1 part = 14. 5 parts = 5 × 14.",
            explanation: "3 parts = 42 ➔ 1 part = 14. 5 parts = 5 × 14 = 70.",
            pictorialClue: "🧱 7-Bar Strip: 3 parts = 42 ➔ 1 part = 14 ➔ 5 parts = 70."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "What is the reciprocal of the sum: 1/3 + 1/4?",
            options: ["7/12","12/7","2/7","7/6"],
            correct: 1,
            hint: "1/3 + 1/4 = 4/12 + 3/12 = 7/12. The reciprocal flips numerator and denominator.",
            explanation: "Sum = 7/12. Reciprocal of 7/12 is 12/7 (or 1 5/7).",
            pictorialClue: "🏆 Fraction Flip: 1/3 + 1/4 = 7/12 ➔ Reciprocal = 12/7."
          }
        ]
      }
,
      {
      "id": "math-venn-diagrams",
      "title": "Venn Diagrams & Set Logic (Overlapping Groups & \"Neither\" Count)",
      "category": "Mathematics",
      "examFrequency": "High (St Olave's, Wilson's, QE Boys)",
      "difficulty": "Intermediate",
      "rule": "Total = (Group A) + (Group B) - (Both A & B) + (Neither). Always subtract the intersection so you do not double count scholars in both sets!",
      "trap": "DO NOT add Group A and Group B directly without subtracting \"Both\"! Scholars who do both are counted twice.",
      "question": "In a class of 32 scholars, 20 study French, 15 study German, and 6 study neither. How many scholars study BOTH languages?",
      "visualType": "bar-percentage",
      "steps": [
            {
                  "title": "Step 1: Calculate scholars who study at least one language",
                  "detail": "Total in class = 32. Scholars studying neither = 6. So scholars studying languages = 32 - 6 = <strong>26</strong>."
            },
            {
                  "title": "Step 2: Add single subject sets together",
                  "detail": "French (20) + German (15) = <strong>35</strong> entries."
            },
            {
                  "title": "Step 3: Subtract language total to find overlap (both)",
                  "detail": "Both = 35 - 26 = <strong>9 scholars</strong> study both French and German."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "In a club of 30 children, 18 play football, 16 play tennis, and 4 play neither. How many children play BOTH football and tennis?",
                  "options": [
                        "6",
                        "8",
                        "10",
                        "12"
                  ],
                  "correct": 1,
                  "hint": "Children playing sports = 30 - 4 = 26. Total sports counted = 18 + 16 = 34.",
                  "explanation": "34 - 26 = 8 children play both sports.",
                  "pictorialClue": "⭕ Overlap: (18 + 16) - (30 - 4) = 8."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "Out of 40 students, 25 have a dog, 20 have a cat, and 5 have neither. How many students have BOTH a dog and a cat?",
                  "options": [
                        "8",
                        "10",
                        "12",
                        "15"
                  ],
                  "correct": 1,
                  "hint": "Pet owners = 40 - 5 = 35. Dogs + Cats = 25 + 20 = 45.",
                  "explanation": "45 - 35 = 10 students have both a dog and a cat.",
                  "pictorialClue": "⭕ Overlap: 45 - 35 = 10."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "In a Year 6 cohort of 50 pupils, 32 like apples, 28 like bananas, and 14 like BOTH. How many pupils like NEITHER fruit?",
                  "options": [
                        "2",
                        "4",
                        "6",
                        "8"
                  ],
                  "correct": 1,
                  "hint": "Pupils liking at least one = 32 + 28 - 14 = 46. Subtract from 50.",
                  "explanation": "Pupils liking fruit = 32 + 28 - 14 = 46. Neither = 50 - 46 = 4.",
                  "pictorialClue": "⚠️ Set Union: A ∪ B = 46. Neither = 4."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "A group of 60 children visit a zoo. 38 visit the reptile house, 34 visit the penguin pool, and 7 visit neither. How many visit ONLY the reptile house?",
                  "options": [
                        "17",
                        "19",
                        "21",
                        "23"
                  ],
                  "correct": 1,
                  "hint": "Visited at least one = 60 - 7 = 53. Both = 38 + 34 - 53 = 19. Only reptiles = 38 - 19.",
                  "explanation": "Visited = 53. Both = 72 - 53 = 19. Only reptiles = 38 - 19 = 19.",
                  "pictorialClue": "⭕ Only A = Total A - Both: 38 - 19 = 19."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "In a class of 35 scholars, 22 play chess and 18 play Scrabble. Every student plays at least one game. How many play chess ONLY?",
                  "options": [
                        "15",
                        "17",
                        "18",
                        "20"
                  ],
                  "correct": 1,
                  "hint": "Both = 22 + 18 - 35 = 5. Chess only = 22 - 5.",
                  "explanation": "Overlap = 40 - 35 = 5. Chess only = 22 - 5 = 17.",
                  "pictorialClue": "⭕ Only Chess = 22 - 5 = 17."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "In an orchestra of 45 musicians, 24 play violin, 21 play flute, and 9 play neither. How many musicians play BOTH violin and flute?",
                  "options": [
                        "6",
                        "9",
                        "12",
                        "15"
                  ],
                  "correct": 1,
                  "hint": "Musicians playing violin or flute = 45 - 9 = 36. Sum = 24 + 21 = 45. Overlap = 45 - 36.",
                  "explanation": "At least one = 36. Both = 45 - 36 = 9.",
                  "pictorialClue": "⭕ Overlap = 45 - 36 = 9."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "In a survey of 100 families, 65 subscribe to StreamA, 55 subscribe to StreamB, and 12 subscribe to neither. What percentage of StreamA subscribers ALSO subscribe to StreamB?",
                  "options": [
                        "45%",
                        "49.2%",
                        "50%",
                        "52.3%"
                  ],
                  "correct": 1,
                  "hint": "Streamers = 100 - 12 = 88. Both = 65 + 55 - 88 = 32. Fraction of StreamA = 32/65 ≈ 49.2%.",
                  "explanation": "Both = 32. 32 / 65 = 49.2%.",
                  "pictorialClue": "🏆 Conditional Percentage: 32 / 65 ≈ 49.2%."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "In a room of 50 scholars, 30 speak Spanish, 25 speak French, and 20 speak German. If 8 speak all three and 5 speak none, and 12 speak exactly two languages, how many speak EXACTLY one language?",
                  "options": [
                        "25",
                        "28",
                        "30",
                        "33"
                  ],
                  "correct": 0,
                  "hint": "Scholars speaking at least one = 50 - 5 = 45. At least one = (Exactly 1) + (Exactly 2: 12) + (All 3: 8) = 45.",
                  "explanation": "Total speaking = 45. Exactly one = 45 - 12 - 8 = 25.",
                  "pictorialClue": "⭕ 3-Set Partition: 45 - 12 - 8 = 25."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "A survey of 80 children asked about hobbies. 48 swim, 44 cycle, and 16 do neither. What is the ratio of children who ONLY swim to children who ONLY cycle?",
                  "options": [
                        "4 : 3",
                        "5 : 4",
                        "6 : 5",
                        "7 : 5"
                  ],
                  "correct": 1,
                  "hint": "Do hobbies = 80 - 16 = 64. Both = 48 + 44 - 64 = 28. Swim only = 48 - 28 = 20. Cycle only = 44 - 28 = 16.",
                  "explanation": "20 : 16 simplifies to 5 : 4.",
                  "pictorialClue": "⭕ Only Swim (20) vs Only Cycle (16) = 5 : 4."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "There are 120 students in Year 6. 70 play football, 60 play rugby, and 50 play cricket. 30 play football & rugby, 25 play rugby & cricket, and 20 play football & cricket. 10 play all three. How many play NONE of these three sports?",
                  "options": [
                        "12",
                        "15",
                        "18",
                        "20"
                  ],
                  "correct": 1,
                  "hint": "Union = 70 + 60 + 50 - 30 - 25 - 20 + 10 = 105. None = 120 - 105.",
                  "explanation": "Total with at least 1 sport = 105. None = 120 - 105 = 15.",
                  "pictorialClue": "🏆 Principle of Inclusion-Exclusion: 120 - 105 = 15."
            }
      ]
},
      {
      "id": "math-probability-tree",
      "title": "Probability & Independent Events (Without Replacement Traps)",
      "category": "Mathematics",
      "examFrequency": "High (Haberdashers', King's College, Manchester)",
      "difficulty": "Intermediate",
      "rule": "When picking without replacement, the DENOMINATOR decreases by 1 on the second pick! If pick 1 takes a red bead, both red count and total count drop by 1.",
      "trap": "DO NOT keep the denominator the same when items are not put back! 4/10 followed by 3/9, NOT 3/10.",
      "question": "A bag contains 6 blue marbles and 4 green marbles. Maya takes a marble and eats it (does not replace it), then takes a second marble. What is the probability that BOTH marbles are blue?",
      "visualType": "fraction-wall",
      "steps": [
            {
                  "title": "Step 1: First marble probability",
                  "detail": "Total = 6 + 4 = 10 marbles. Probability of Blue 1st = <strong>6/10</strong>."
            },
            {
                  "title": "Step 2: Second marble probability (without replacement)",
                  "detail": "Now 5 blue marbles remain out of 9 total marbles: <strong>5/9</strong>."
            },
            {
                  "title": "Step 3: Multiply branch probabilities",
                  "detail": "(6/10) × (5/9) = 30/90 = <strong>1/3</strong>."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "A bag has 5 red counters and 5 yellow counters. One counter is drawn at random. What is the probability it is red?",
                  "options": [
                        "1/4",
                        "1/3",
                        "1/2",
                        "2/3"
                  ],
                  "correct": 2,
                  "hint": "5 red out of 10 total = 5/10.",
                  "explanation": "5/10 simplifies to 1/2.",
                  "pictorialClue": "🎯 Single event: 5 / 10 = 1/2."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "A fair 6-sided die is rolled twice. What is the probability of rolling a 6 on BOTH rolls?",
                  "options": [
                        "1/12",
                        "1/18",
                        "1/36",
                        "1/64"
                  ],
                  "correct": 2,
                  "hint": "Each roll is independent: (1/6) × (1/6).",
                  "explanation": "(1/6) × (1/6) = 1/36.",
                  "pictorialClue": "🎯 Independent events: 1/6 × 1/6 = 1/36."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "A box has 3 red pens and 2 blue pens. Leo takes one pen, does NOT replace it, then takes a second. What is the probability BOTH are red?",
                  "options": [
                        "9/25",
                        "3/10",
                        "6/20",
                        "2/5"
                  ],
                  "correct": 1,
                  "hint": "First pick = 3/5. Second pick = 2/4 = 1/2. (3/5) × (1/2) = 3/10.",
                  "explanation": "(3/5) * (2/4) = 6/20 = 3/10.",
                  "pictorialClue": "⚠️ No replacement: 3/5 × 2/4 = 3/10."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "A jar contains 4 white socks and 4 black socks. What is the probability of picking a MATCHING pair when drawing two socks at random without replacement?",
                  "options": [
                        "1/4",
                        "3/7",
                        "1/2",
                        "4/7"
                  ],
                  "correct": 1,
                  "hint": "P(Two White) = (4/8)*(3/7) = 12/56. P(Two Black) = 12/56. Total = 24/56 = 3/7.",
                  "explanation": "P(Pair) = P(WW) + P(BB) = 12/56 + 12/56 = 24/56 = 3/7.",
                  "pictorialClue": "🎯 Matching Pair: 24/56 = 3/7."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "In a raffle, there are 10 tickets numbered 1 to 10. Two tickets are drawn without replacement. What is the probability that BOTH numbers are PRIME numbers?",
                  "options": [
                        "1/15",
                        "2/15",
                        "3/15",
                        "4/15"
                  ],
                  "correct": 1,
                  "hint": "Primes between 1 and 10 are 2, 3, 5, 7 (4 primes). First = 4/10, Second = 3/9. (4/10)*(3/9) = 12/90 = 2/15.",
                  "explanation": "(4/10) × (3/9) = 12/90 = 2/15.",
                  "pictorialClue": "🎯 Primes {2,3,5,7}: 4/10 × 3/9 = 2/15."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "A bag contains 5 green, 3 blue, and 2 yellow sweets. Adam takes two sweets without replacement. What is the probability he gets AT LEAST ONE yellow sweet?",
                  "options": [
                        "17/45",
                        "19/45",
                        "21/45",
                        "23/45"
                  ],
                  "correct": 0,
                  "hint": "P(At least 1 yellow) = 1 - P(No yellow). P(No yellow) = (8/10)*(7/9) = 56/90 = 28/45. 1 - 28/45 = 17/45.",
                  "explanation": "Complement method: 1 - (8/10 × 7/9) = 1 - 28/45 = 17/45.",
                  "pictorialClue": "🎯 Complement: 1 - P(Zero Yellow) = 17/45."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "Box A has 3 red and 2 white balls. Box B has 2 red and 4 white balls. A fair coin is tossed. If Heads, a ball is drawn from Box A; if Tails, from Box B. What is the probability of drawing a RED ball?",
                  "options": [
                        "7/15",
                        "14/30",
                        "19/30",
                        "21/30"
                  ],
                  "correct": 0,
                  "hint": "P(Red) = 0.5 * (3/5) + 0.5 * (2/6) = 3/10 + 1/6 = 9/30 + 5/30 = 14/30 = 7/15.",
                  "explanation": "P(Red) = (1/2 × 3/5) + (1/2 × 1/3) = 3/10 + 1/6 = 7/15.",
                  "pictorialClue": "🏆 Law of Total Probability: 3/10 + 1/6 = 7/15."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "Three fair dice are rolled simultaneously. What is the probability that the SUM of all three dice equals exactly 5?",
                  "options": [
                        "1/36",
                        "5/216",
                        "6/216",
                        "7/216"
                  ],
                  "correct": 2,
                  "hint": "Combinations giving 5: (1,1,3) in 3 ways; (1,2,2) in 3 ways. Total outcomes = 6. 6 / 216 = 1/36 = 6/216.",
                  "explanation": "Permutations for sum of 5: (1,1,3)*3 = 3; (1,2,2)*3 = 3. Total = 6 / 216.",
                  "pictorialClue": "🏆 Dice partitions of 5: 6 favorable outcomes / 216."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "There are n sweets in a bag. 6 of the sweets are orange. Hannah eats two sweets at random. The probability that she eats two orange sweets is 1/3. Find the value of n.",
                  "options": [
                        "8",
                        "9",
                        "10",
                        "12"
                  ],
                  "correct": 2,
                  "hint": "(6/n) * (5/(n-1)) = 1/3. 30 / (n(n-1)) = 1/3 ➔ n(n-1) = 90. 10 * 9 = 90, so n = 10.",
                  "explanation": "30 / (n² - n) = 1/3 ➔ n² - n - 90 = 0 ➔ n = 10.",
                  "pictorialClue": "🏆 Classic Edexcel/11+ Problem: n(n-1) = 90 ➔ n = 10."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "A drawer has 5 black socks, 3 brown socks, and 2 blue socks. What is the MINIMUM number of socks you must pull in the dark to be 100% CERTAIN of having at least one matching pair?",
                  "options": [
                        "3",
                        "4",
                        "5",
                        "6"
                  ],
                  "correct": 1,
                  "hint": "Pigeonhole principle! There are 3 colours. In the worst case you pull 1 black, 1 brown, 1 blue (3 socks). The 4th sock MUST match one of them!",
                  "explanation": "Worst case: 3 different colours on first 3 pulls. The 4th sock is guaranteed to complete a pair.",
                  "pictorialClue": "🏆 Pigeonhole Principle: 3 Colours + 1 = 4 socks."
            }
      ]
},
      {
      "id": "math-sequences-nth",
      "title": "Number Sequences & Position-to-Term (Nth Term Difference Method)",
      "category": "Mathematics",
      "examFrequency": "Very High (GL, CEM, CSSE, Bexley)",
      "difficulty": "Intermediate",
      "rule": "The constant difference gives the coefficient of n! If the sequence goes up by 4 each step, the formula starts with 4n. Then compare 4(1) = 4 with the 1st term to find the adjustment.",
      "trap": "DO NOT confuse the common difference with the first term! In 7, 11, 15, the difference is 4 (so 4n), then 4 + 3 = 7, so formula is 4n + 3, NOT 7n!",
      "question": "Find the nth term formula for the linear sequence: 5, 9, 13, 17, 21...",
      "visualType": "bar-percentage",
      "steps": [
            {
                  "title": "Step 1: Find the common first difference",
                  "detail": "9 - 5 = 4; 13 - 9 = 4; 17 - 13 = 4. The step difference is <strong>+4</strong>, so start with <strong>4n</strong>."
            },
            {
                  "title": "Step 2: Test n = 1 in 4n",
                  "detail": "When n = 1: 4 × 1 = 4. But our first term is 5."
            },
            {
                  "title": "Step 3: Adjust the constant term",
                  "detail": "To get from 4 to 5, we must add 1: 4 + 1 = 5. Therefore, nth term = <strong>4n + 1</strong>."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "What is the 10th term of the sequence given by the rule 3n + 2?",
                  "options": [
                        "28",
                        "30",
                        "32",
                        "35"
                  ],
                  "correct": 2,
                  "hint": "Substitute n = 10 into 3n + 2: 3(10) + 2.",
                  "explanation": "3 × 10 + 2 = 32.",
                  "pictorialClue": "🔢 Formula plug-in: 3(10) + 2 = 32."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "What is the nth term formula for the sequence: 3, 7, 11, 15, 19...?",
                  "options": [
                        "3n + 4",
                        "4n - 1",
                        "4n + 3",
                        "5n - 2"
                  ],
                  "correct": 1,
                  "hint": "Difference = 4 (4n). When n=1: 4(1) - 1 = 3.",
                  "explanation": "Difference is +4. 4(1) - 1 = 3. Formula = 4n - 1.",
                  "pictorialClue": "🔢 Step +4: 4n - 1."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "What is the nth term formula for the DECREASING sequence: 20, 17, 14, 11, 8...?",
                  "options": [
                        "-3n + 23",
                        "3n + 17",
                        "-3n + 20",
                        "20 - 3n"
                  ],
                  "correct": 0,
                  "hint": "Difference is -3, so -3n. When n=1: -3(1) + 23 = 20.",
                  "explanation": "Difference = -3 (-3n). -3(1) + 23 = 20. Formula = -3n + 23.",
                  "pictorialClue": "⚠️ Negative Slope: -3n + 23."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "Which term in the sequence 6n - 5 has a value equal to 139?",
                  "options": [
                        "22nd term",
                        "23rd term",
                        "24th term",
                        "25th term"
                  ],
                  "correct": 2,
                  "hint": "Set 6n - 5 = 139 ➔ 6n = 144 ➔ n = 24.",
                  "explanation": "6n = 144 ➔ n = 24.",
                  "pictorialClue": "🔢 Solve for n: 6n = 144 ➔ n = 24."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "A pattern is made from matches. Pattern 1 has 5 matches, Pattern 2 has 9 matches, Pattern 3 has 13 matches. How many matches are needed for Pattern 50?",
                  "options": [
                        "197",
                        "199",
                        "201",
                        "205"
                  ],
                  "correct": 2,
                  "hint": "Formula is 4n + 1. For n = 50: 4(50) + 1 = 201.",
                  "explanation": "4(50) + 1 = 201 matches.",
                  "pictorialClue": "🔢 Matchstick Formula: 4(50) + 1 = 201."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "The nth term of sequence A is 3n + 8. The nth term of sequence B is 5n - 14. At which term number (n) do both sequences have the EXACT SAME value?",
                  "options": [
                        "9",
                        "10",
                        "11",
                        "12"
                  ],
                  "correct": 2,
                  "hint": "Set 3n + 8 = 5n - 14 ➔ 2n = 22 ➔ n = 11.",
                  "explanation": "5n - 3n = 8 + 14 ➔ 2n = 22 ➔ n = 11.",
                  "pictorialClue": "🔢 Intersection: 3n + 8 = 5n - 14 ➔ n = 11."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "What is the 100th term of the quadratic sequence: 2, 5, 10, 17, 26...?",
                  "options": [
                        "9999",
                        "10001",
                        "10002",
                        "10201"
                  ],
                  "correct": 1,
                  "hint": "Compare with square numbers: 1, 4, 9, 16, 25. Each term is n² + 1! For n = 100: 100² + 1 = 10001.",
                  "explanation": "Formula is n² + 1. For n = 100: 10,000 + 1 = 10001.",
                  "pictorialClue": "🏆 Quadratic sequence: n² + 1 = 100² + 1 = 10,001."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "The sum of the first n terms of a sequence is given by Sn = 2n² + 3n. What is the 8th term of this sequence?",
                  "options": [
                        "29",
                        "31",
                        "33",
                        "35"
                  ],
                  "correct": 2,
                  "hint": "T8 = S8 - S7. S8 = 2(64) + 24 = 152. S7 = 2(49) + 21 = 119. 152 - 119 = 33.",
                  "explanation": "T8 = S8 - S7 = 152 - 119 = 33.",
                  "pictorialClue": "🏆 Sum difference: S8 - S7 = 152 - 119 = 33."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "How many terms in the arithmetic sequence 7, 11, 15, 19... are LESS than 200?",
                  "options": [
                        "47",
                        "48",
                        "49",
                        "50"
                  ],
                  "correct": 2,
                  "hint": "Formula is 4n + 3. 4n + 3 < 200 ➔ 4n < 197 ➔ n < 49.25, so n = 49.",
                  "explanation": "4n + 3 < 200 ➔ 4n < 197 ➔ n ≤ 49.",
                  "pictorialClue": "🔢 Inequality constraint: 4n + 3 < 200 ➔ 49 terms."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "A sequence of fractions is: 1/2, 2/5, 3/10, 4/17, 5/26... What is the 20th fraction in this sequence?",
                  "options": [
                        "20/399",
                        "20/401",
                        "20/420",
                        "20/441"
                  ],
                  "correct": 1,
                  "hint": "Numerator is n. Denominator is n² + 1. For n = 20: 20 / (20² + 1) = 20 / 401.",
                  "explanation": "Numerator = n, Denominator = n² + 1. For n = 20: 20 / 401.",
                  "pictorialClue": "🏆 Fraction sequence: n / (n² + 1) = 20 / 401."
            }
      ]
},
      {
      "id": "math-work-rate",
      "title": "Combined Work Rates & Pipe Filling (The 1-Hour Unit Method)",
      "category": "Mathematics",
      "examFrequency": "High (Westminster, Eton, St Paul's)",
      "difficulty": "Advanced",
      "rule": "Always calculate what fraction of the job is completed in 1 HOUR (or 1 minute)! Rate = 1 / Time. Add individual rates to find the combined speed per hour.",
      "trap": "DO NOT average the two times! If Pipe A takes 3 hours and Pipe B takes 6 hours, working together takes LESS than 3 hours (2 hours), NOT (3+6)/2 = 4.5 hours!",
      "question": "Pipe A can fill a water tank in 4 hours. Pipe B can fill the same tank in 6 hours. If both pipes are turned on together, how long will it take to fill the tank?",
      "visualType": "bar-percentage",
      "steps": [
            {
                  "title": "Step 1: Calculate 1-hour unit rates",
                  "detail": "Pipe A fills <strong>1/4</strong> of the tank per hour. Pipe B fills <strong>1/6</strong> of the tank per hour."
            },
            {
                  "title": "Step 2: Add rates with a common denominator",
                  "detail": "Combined 1-hour rate = 1/4 + 1/6 = 3/12 + 2/12 = <strong>5/12 of the tank per hour</strong>."
            },
            {
                  "title": "Step 3: Invert rate to find total time",
                  "detail": "Total time = 12 / 5 hours = <strong>2 hours and 24 minutes</strong> (2.4 hours)."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "Alice can paint a fence in 6 hours. Bob can paint it in 3 hours. How long does it take if they paint together?",
                  "options": [
                        "2 hours",
                        "2.5 hours",
                        "4 hours",
                        "4.5 hours"
                  ],
                  "correct": 0,
                  "hint": "Alice = 1/6 per hour. Bob = 2/6 per hour. Together = 3/6 = 1/2 fence per hour. 1 / (1/2) = 2 hours.",
                  "explanation": "Combined rate = 1/6 + 1/3 = 1/2 per hour. Time = 2 hours.",
                  "pictorialClue": "⏱️ Combined rate: 1/6 + 2/6 = 3/6 = 1/2 per hr ➔ 2 hours."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "Tutor Sarah cleans a classroom in 20 minutes. Tutor David cleans it in 30 minutes. Working together, how many minutes will it take?",
                  "options": [
                        "10 min",
                        "12 min",
                        "15 min",
                        "18 min"
                  ],
                  "correct": 1,
                  "hint": "1/20 + 1/30 = 3/60 + 2/60 = 5/60 = 1/12 per minute. Time = 12 minutes.",
                  "explanation": "Combined rate = 5/60 = 1/12 per minute. Time = 12 minutes.",
                  "pictorialClue": "⏱️ Combined rate: 1/12 per minute ➔ 12 minutes."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "Tap A fills a bath in 10 minutes. The drain empties it in 15 minutes. If both tap and drain are open, how long to fill the bath?",
                  "options": [
                        "20 min",
                        "25 min",
                        "30 min",
                        "35 min"
                  ],
                  "correct": 2,
                  "hint": "Drain subtracts water! Net rate = 1/10 - 1/15 = 3/30 - 2/30 = 1/30 per minute.",
                  "explanation": "Net filling rate = 1/10 - 1/15 = 1/30 per minute. Total time = 30 minutes.",
                  "pictorialClue": "⚠️ Drain subtracts: 1/10 - 1/15 = 1/30 ➔ 30 minutes."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "Worker X takes 8 hours to finish a job. Worker Y takes 12 hours. They work together for 3 hours, then Worker X leaves. How long does Worker Y take to finish the rest alone?",
                  "options": [
                        "3 hours",
                        "3.5 hours",
                        "4.5 hours",
                        "5 hours"
                  ],
                  "correct": 2,
                  "hint": "Together in 3 hrs: 3*(1/8 + 1/12) = 3*(5/24) = 15/24 = 5/8 done. Remaining = 3/8. Worker Y time = (3/8) / (1/12) = 4.5 hrs.",
                  "explanation": "Work remaining = 3/8. Worker Y takes (3/8) ÷ (1/12) = 36/8 = 4.5 hours.",
                  "pictorialClue": "⏱️ Remaining work: 3/8 ÷ (1/12) = 4.5 hours."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "Three pipes A, B, and C fill a tank in 2 hours, 3 hours, and 6 hours respectively. How many minutes does it take with all 3 open?",
                  "options": [
                        "45 min",
                        "50 min",
                        "60 min",
                        "75 min"
                  ],
                  "correct": 2,
                  "hint": "1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1 whole tank per hour = 60 minutes.",
                  "explanation": "Combined rate = 1 tank/hour. Time = 1 hour = 60 minutes.",
                  "pictorialClue": "⏱️ Three pipes: 3/6 + 2/6 + 1/6 = 1 ➔ 60 minutes."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "A builder can lay 120 bricks in 2 hours. An apprentice lays 80 bricks in 2 hours. How many hours will it take both of them to lay 500 bricks together?",
                  "options": [
                        "4 hours",
                        "5 hours",
                        "5.5 hours",
                        "6 hours"
                  ],
                  "correct": 1,
                  "hint": "Builder rate = 60 bricks/hr. Apprentice rate = 40 bricks/hr. Combined = 100 bricks/hr. 500 / 100 = 5 hours.",
                  "explanation": "Combined speed = 60 + 40 = 100 bricks/hr. Time = 500 / 100 = 5 hours.",
                  "pictorialClue": "⏱️ Real output: 500 ÷ 100 = 5 hours."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "A tank is filled by Pipe P in 12 hours. After 3 hours, Pipe Q is also opened and the tank finishes filling in another 5 hours. How long would Pipe Q take to fill the tank entirely on its own?",
                  "options": [
                        "12 hours",
                        "15 hours",
                        "18 hours",
                        "20 hours"
                  ],
                  "correct": 1,
                  "hint": "Pipe P worked for 8 hours total: 8/12 = 2/3 filled. Pipe Q filled the remaining 1/3 in 5 hours. Pipe Q full time = 5 * 3 = 15 hours.",
                  "explanation": "P filled 8/12 = 2/3. Q filled 1/3 in 5 hrs ➔ Q alone takes 15 hours.",
                  "pictorialClue": "🏆 Contribution breakdown: 1/3 in 5 hrs ➔ 15 hours."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "Worker A is twice as fast as Worker B. Together they can build a wall in 6 days. How many days would Worker A take working ALONE?",
                  "options": [
                        "8 days",
                        "9 days",
                        "10 days",
                        "12 days"
                  ],
                  "correct": 1,
                  "hint": "If B rate = 1 unit/day, A rate = 2 units/day. Together = 3 units/day. In 6 days total work = 18 units. A alone = 18 / 2 = 9 days.",
                  "explanation": "Total work = 18 units. A rate = 2 units/day. Time = 18 / 2 = 9 days.",
                  "pictorialClue": "🏆 Relative speed: 18 ÷ 2 = 9 days."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "Pipe A fills 50% of a reservoir in 6 hours. Pipe B fills 25% of the reservoir in 4 hours. How many hours to fill the entire reservoir together?",
                  "options": [
                        "6.86 hours",
                        "7.2 hours",
                        "8 hours",
                        "8.4 hours"
                  ],
                  "correct": 0,
                  "hint": "A full = 12 hrs (1/12). B full = 16 hrs (1/16). 1/12 + 1/16 = 7/48. Time = 48 / 7 ≈ 6.86 hours.",
                  "explanation": "Rate = 7/48 per hour. Time = 48/7 ≈ 6.86 hours.",
                  "pictorialClue": "⏱️ Reservoir fractions: 48 / 7 ≈ 6.86 hours."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "Three taps A, B, and C fill a tank in 12, 15, and 20 hours respectively. Tap A is opened all the time, but Tap B and C are opened alternately for 1 hour each. In how many hours will the tank be full?",
                  "options": [
                        "6 hours",
                        "6.5 hours",
                        "7 hours",
                        "7.5 hours"
                  ],
                  "correct": 2,
                  "hint": "Hour 1 (A+B): 1/12 + 1/15 = 9/60. Hour 2 (A+C): 1/12 + 1/20 = 8/60. In 2 hours = 17/60. In 6 hours (3 cycles) = 51/60. Remaining = 9/60. Hour 7 (A+B) fills exactly 9/60! Total = 7 hours.",
                  "explanation": "Cycle of 2 hrs fills 17/60. In 6 hours = 51/60. 7th hour (A+B) adds 9/60 = 60/60. Total = 7 hours.",
                  "pictorialClue": "🏆 Alternating cycles: 51/60 in 6 hrs + 9/60 in 1 hr = 7 hours."
            }
      ]
}
    ],

    nvr: [
      {
        id: 'nvr-cube-nets',
        title: '3D Cube Nets: The Rule of Opposites',
        category: 'Non-Verbal & 3D Spatial',
        examFrequency: 'Crucial (QE Boys, CSSE, GL, Kent)',
        difficulty: 'Intermediate',
        rule: 'In any unfolded cube net, faces separated by EXACTLY ONE square are OPPOSITE pairs. Opposite faces can NEVER touch, share an edge, or be visible at the same time on a 3D folded cube!',
        trap: 'Selecting a 3D cube option that shows two opposite faces touching each other!',
        question: 'In a standard Latin-cross net, which face is directly OPPOSITE face A?',
        visualType: 'cube-3d-interactive',
        steps: [
          {
            title: 'Step 1: Jump Exactly One Square in a Straight Line',
            detail: 'In the vertical column [A] ➔ [B] ➔ [C] ➔ [D], skip one square: <strong>Face A is opposite Face C</strong>; <strong>Face B is opposite Face D</strong>.'
          },
          {
            title: 'Step 2: Pair the Remaining Outer Wings',
            detail: 'The two leftover side flaps on opposite wings fold together to form the third opposite pair: <strong>Face E is opposite Face F</strong>.'
          },
          {
            title: 'Step 3: Apply the Elimination Rule to 3D Options',
            detail: 'Look at the 3D cube options. If you see Face A and Face C together on the same cube, <strong>eliminate that option immediately</strong>!'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: 'In a straight 4-square column with faces 1, 2, 3, and 4 in order, which face is opposite Face 2?',
            options: ['Face 1', 'Face 3', 'Face 4', 'None of these'],
            correct: 2,
            hint: 'Skip one square: Face 2 skips Face 3 to touch Face 4.',
            explanation: 'In a straight row or column, skip one square: Face 2 is opposite Face 4.',
            pictorialClue: '🎲 Net Strip: [1] ➔ [2] ➔ [3] ➔ [4]. Face 2 skips [3] ➔ opposite [4].'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: 'A cube net has opposite pairs: [Circle opposite Star], [Triangle opposite Square], [Heart opposite Diamond]. Which cube CANNOT be formed?',
            options: [
              'Shows Circle, Triangle, Heart',
              'Shows Star, Square, Diamond',
              'Shows Circle, Star, Triangle',
              'Shows Star, Triangle, Diamond'
            ],
            correct: 2,
            hint: 'Look for two opposite faces visible together on the same cube!',
            explanation: 'Option C displays both Circle AND Star together. Since Circle is opposite Star, they can never be seen together!',
            pictorialClue: '🚫 Elimination Clue: [Circle] and [Star] are opposites ➔ CANNOT appear on the same 3D cube!'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'On an unfolded cube net, Face X and Face Y share a corner. Can they ever be on opposite faces of the folded cube?',
            options: [
              'Yes, always',
              'No, never',
              'Only if the net has 5 squares',
              'Only if they are shaded'
            ],
            correct: 1,
            hint: 'Opposite faces never touch anywhere—not even at a single corner!',
            explanation: 'Opposite faces are completely separated by other faces and never share any edge or vertex. If they touch in the net, they CANNOT be opposite.',
            pictorialClue: '⚠️ Touch Rule: If two squares share an edge or vertex in a flat net, they fold to be adjacent, NEVER opposite!'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: 'A 3D cube has 3 visible faces: Top face has an Arrow pointing Right, Front face has a Shaded Dot, Right face has an Empty Square. If the cube is rotated 90° forward around its horizontal axis, what is now on the TOP face?',
            options: ['The Shaded Dot', 'The face opposite Front', 'The Arrow', 'The face opposite Top'],
            correct: 1,
            hint: 'Rotating forward brings the Back face to the Top, and Front face to the Bottom.',
            explanation: 'Rotating 90° forward moves the Top face to the Front, and the Back face (which is opposite the Front face) rotates to become the new Top face.',
            pictorialClue: '🔄 3D Pitch Axis: Back Face ➔ rotates up to become Top Face.'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: 'A T-shaped cube net has directional arrows printed on 3 faces. Arrow 1 points directly towards Arrow 2 across a fold line. When folded into 3D, what is the angle between their pointing directions in 3D space?',
            options: ['0° (Parallel)', '90° (Perpendicular)', '180° (Opposite)', '45°'],
            correct: 1,
            hint: 'Folding along the edge creates a 90° dihedral angle between the two planes.',
            explanation: 'Folding two adjacent squares around a shared edge folds them into perpendicular planes (90° to each other in 3D space).',
            pictorialClue: '🏆 Dihedral Angle: Adjacent faces fold to a right angle (90°) along their shared seam.'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "In a standard T-shaped net, the top square has a dot, and the bottom square has a cross. When folded into a cube, what is the spatial relationship between the dot and the cross?",
            options: ["Opposite to each other","Adjacent (touching at an edge)","Sharing a corner","Cannot be determined"],
            correct: 0,
            hint: "Look at the distance in the net: they are separated by an intervening square.",
            explanation: "In a T-net, the extreme top and bottom squares fold to form opposite faces of the cube.",
            pictorialClue: "🎲 Opposite Rule: Faces separated by one intervening square always end up opposite."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "How many corners (vertices) does a folded cube have?",
            options: ["6","8","12","10"],
            correct: 1,
            hint: "A cube has 6 faces, 12 edges, and 8 vertices.",
            explanation: "A cube has 8 vertices (corners) where 3 edges meet at right angles.",
            pictorialClue: "🧊 Geometry Facts: Faces = 6, Edges = 12, Vertices = 8."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "A cube has faces numbered 1 to 6. Opposite faces sum to 7. Which pair of numbers CANNOT be on opposite faces?",
            options: ["1 and 6","2 and 5","3 and 4","2 and 4"],
            correct: 3,
            hint: "Check which pair does NOT sum to 7!",
            explanation: "Opposite faces must sum to 7: 1+6=7, 2+5=7, 3+4=7. 2 and 4 sum to 6, so they cannot be opposite.",
            pictorialClue: "🎲 Standard Die Rule: 1↔6, 2↔5, 3↔4 all sum to 7."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "A cross-shaped net has a heart on the center face and a triangle, square, circle, and star on the 4 surrounding flap faces. When folded, which face is opposite the heart?",
            options: ["Triangle","Square","None of these - no face is opposite","A 6th flap face would be opposite"],
            correct: 3,
            hint: "All 4 surrounding flaps fold up 90° to touch the center face!",
            explanation: "The 4 adjacent flaps become sides touching the heart. Only a 6th face folded over the top would be opposite the heart.",
            pictorialClue: "📦 Box Net: The 4 flaps fold UP like walls around the base."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "A cube is painted blue on the outside and cut into 27 small equal cubes (3×3×3). How many of the small cubes have paint on EXACTLY TWO faces?",
            options: ["6","8","12","1"],
            correct: 2,
            hint: "Cubes with 2 painted faces lie along the EDGES, excluding the corners!",
            explanation: "A cube has 12 edges. Along each edge of length 3, exactly the middle cube has 2 painted faces: 12 edges × 1 = 12 small cubes.",
            pictorialClue: "🏆 Rubik's Cube Anatomy: 8 corners (3 faces), 12 edges (2 faces), 6 centres (1 face), 1 inner (0 faces)."
          }
        ]
      },
      {
        id: 'nvr-paper-fold',
        title: 'Paper Folding & Hole Punching: The Mirror Rule',
        category: 'Non-Verbal & 3D Spatial',
        examFrequency: 'High (GL Assessment & CEM)',
        difficulty: 'Intermediate',
        rule: 'Every fold is an axis of reflection! When unfolding, reflect every punched hole across the fold line like a mirror. 1 fold = 2 layers; 2 folds = 4 layers; 3 folds = 8 layers.',
        trap: 'Kids often assume holes stay in the same corner without reflecting across the fold axis!',
        question: 'A square sheet is folded horizontally in half, then vertically in half (4 layers). A circle hole is punched in the center of the folded square. How many holes appear when unfolded?',
        visualType: 'fold-mirror',
        steps: [
          {
            title: 'Step 1: Count the Paper Layers',
            detail: 'Fold 1 creates 2 layers. Fold 2 creates 4 layers. Each punch penetrates all <strong>4 layers</strong>.'
          },
          {
            title: 'Step 2: Unfold Step-by-Step Backwards',
            detail: 'Unfold fold 2 across the vertical fold line: 1 hole becomes 2 symmetrically spaced holes.'
          },
          {
            title: 'Step 3: Complete Final Unfold Across Horizontal Axis',
            detail: 'Unfold fold 1 across horizontal fold line: the 2 holes reflect across the center line to create <strong>4 holes</strong> in a symmetrical diamond pattern.'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: 'A square paper is folded in half once from left to right. One hole is punched near the folded crease. How many holes are there when opened?',
            options: ['1', '2', '3', '4'],
            correct: 1,
            hint: '1 fold = 2 layers of paper. Each layer gets 1 hole.',
            explanation: 'With 1 fold there are 2 layers. 1 punch through 2 layers creates exactly 2 holes.',
            pictorialClue: '📄 Mirror Axis: [ Crease ] ➔ 1 punch creates 2 mirror-image holes.'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: 'A square sheet is folded in half diagonally to form a triangle, and a hole is punched right in the middle of the folded triangle. What pattern is seen when unfolded?',
            options: [
              '1 hole in the centre',
              '2 holes placed symmetrically across the diagonal fold',
              '4 holes in the corners',
              '3 holes in a line'
            ],
            correct: 1,
            hint: 'The diagonal crease acts as the mirror line! 1 hole on one side reflects to the other.',
            explanation: 'Diagonal fold = 2 layers. Unfolding across the diagonal reflects the hole across the diagonal axis into 2 symmetrical holes.',
            pictorialClue: '📐 Diagonal Reflection: 1 hole reflects across diagonal axis into 2 holes.'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'A square sheet is folded in half, then in half again (4 layers). A triangular notch is snipped out of the FOLDED CORNER (the original centre of the paper). What shape appears in the centre of the unfolded sheet?',
            options: ['A triangle', 'A square / diamond', 'A circle', 'An octagon'],
            correct: 1,
            hint: 'The folded corner is the meeting point of all 4 quadrants! 4 triangles meeting at the center make a diamond/square.',
            explanation: 'The folded corner represents the exact center of the original sheet. Snipping a corner off 4 layers reflects 4 times to produce a central diamond / square cutout.',
            pictorialClue: '⚠️ Center Fold Snip: 4 quadrant triangular cutouts combine to form 1 central diamond.'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: 'A square paper is folded horizontally in half, vertically in half, and then diagonally in half (8 layers). Two circular holes are punched through all layers. How many holes appear on the unfolded paper?',
            options: ['8 holes', '12 holes', '16 holes', '14 holes'],
            correct: 2,
            hint: '3 folds = 2 × 2 × 2 = 8 layers. 2 punches × 8 layers = ?',
            explanation: 'Each fold doubles layers: 2 ➔ 4 ➔ 8 layers. 2 punches through 8 layers creates 2 × 8 = 16 holes.',
            pictorialClue: '🔢 Layer Multiplier: 3 folds = 8 layers. 2 punches × 8 layers = 16 holes.'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: 'A square paper is folded into quarters (4 layers). An asymmetric letter "F" is stamped completely through all layers. How many of the 4 letters on the unfolded paper will appear in REVERSE (mirror image)?',
            options: ['0 (all normal)', '1', '2 (half reversed)', '4 (all reversed)'],
            correct: 2,
            hint: 'Each single fold flips the chiral orientation of the paper layer!',
            explanation: 'Two layers are face-up and two layers are face-down (folded back). Exactly 2 of the 4 impressions will be reversed mirror images of "F".',
            pictorialClue: '🏆 Chirality Rule: Folds alternate orientation: 2 normal (F) and 2 reversed (ᖴ).'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "A square sheet is folded in half from left to right, then folded in half from top to bottom. A circular hole is punched through the center of the folded square. When completely unfolded, how many holes appear?",
            options: ["2","4","8","1"],
            correct: 1,
            hint: "2 folds = 2 × 2 = 4 layers of paper. Each hole goes through 4 layers.",
            explanation: "1 hole punched through 4 layers produces 4 holes symmetrically spaced around the sheet.",
            pictorialClue: "📄 Layer Math: Fold 1 (2 layers) ➔ Fold 2 (4 layers) ➔ 1 punch = 4 holes."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "A square paper is folded along the diagonal (bottom-left to top-right). A semicircle is cut out along the folded diagonal edge. When unfolded, what shape is the cutout hole?",
            options: ["A full circle","A square","A diamond","Two semicircles"],
            correct: 0,
            hint: "The folded crease is the mirror line. A semicircle reflected across its flat edge becomes a full circle.",
            explanation: "The crease is the line of symmetry. Reflecting the semicircle across the crease doubles it into a full circle in the center.",
            pictorialClue: "🪞 Mirror Fold: Half-circle on crease unfolds into full circle."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "A circular paper is folded in half 3 times (forming an eighth slice / sector). A triangular notch is cut on the curved outer edge. When unfolded, how many notches will be on the circumference?",
            options: ["4","6","8","12"],
            correct: 2,
            hint: "Folding in half 3 times produces 2³ = 8 layers.",
            explanation: "2 × 2 × 2 = 8 layers. One notch on the outer rim duplicates across all 8 sectors.",
            pictorialClue: "🥧 Pizza Fold: 3 folds = 8 slices ➔ 8 notches around rim."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "A square paper is folded horizontally in half, then a triangle hole is punched pointing UP (▲). When unfolded, what do the two holes look like?",
            options: ["Both point up (▲ ▲)","One points up, one points down (▲ ▼)","Both point down (▼ ▼)","They point sideways (◄ ►)"],
            correct: 1,
            hint: "The horizontal crease reflects vertical orientation! Up becomes down across a horizontal mirror.",
            explanation: "Across a horizontal fold line, reflection inverts vertical orientation: the lower hole mirrors upside down (▼).",
            pictorialClue: "🪞 Vertical Inversion: Crease acts as horizontal mirror: ▲ mirrors into ▼."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "A square sheet of paper is folded in half twice (into 4 quarters). Two separate holes are punched: one in the exact central fold corner, and one near the outer open edge. How many total holes appear when unfolded?",
            options: ["5 holes (1 central + 4 outer)","8 holes (4 central + 4 outer)","4 holes","6 holes"],
            correct: 0,
            hint: "A punch in the central fold corner merges into 1 single central hole! A punch near the edge creates 4 separate holes.",
            explanation: "The corner where all 4 quarters meet forms the exact center of the page; punching it creates 1 combined central hole. The outer hole duplicates on each quarter = 4 holes. Total = 1 + 4 = 5 holes!",
            pictorialClue: "🏆 Central Confluence: All 4 corner points meet at paper center ➔ 1 merged central hole + 4 outer holes = 5."
          }
        ]
      },
      {
        id: 'nvr-matrix-code',
        title: 'NVR Code Matrices: Feature Checklist',
        category: 'Non-Verbal & 3D Spatial',
        examFrequency: 'High (GL, CEM, Sutton)',
        difficulty: 'Intermediate',
        rule: 'In code questions, separate the features! Match one letter to Shape, one letter to Shading/Fill, and one letter to Size or Line Style.',
        trap: 'Trying to guess the whole code word at once instead of isolating one visual feature at a time!',
        question: 'Figure 1 is coded as "AB" (Circle, Shaded). Figure 2 is coded as "AC" (Circle, Striped). Figure 3 is coded as "BB" (Square, Shaded). What is the code for a Striped Square?',
        visualType: 'matrix-features',
        steps: [
          {
            title: 'Step 1: Isolate the First Letter Feature',
            detail: 'Compare Fig 1 (AB) and Fig 2 (AC): both have "A" and both are Circles. Therefore: <strong>A = Circle</strong> and <strong>B = Square</strong>.'
          },
          {
            title: 'Step 2: Isolate the Second Letter Feature',
            detail: 'Compare Fig 1 (AB - Shaded) and Fig 2 (AC - Striped). Therefore: <strong>B = Shaded</strong> and <strong>C = Striped</strong>.'
          },
          {
            title: 'Step 3: Combine to Form the Target Code',
            detail: 'For a Striped Square: Square = B; Striped = C. Target code = <strong>BC</strong>.'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: 'Given: Triangle = X, Star = Y. Shaded = P, Empty = Q. What is the code for an Empty Triangle?',
            options: ['XP', 'XQ', 'YP', 'YQ'],
            correct: 1,
            hint: 'Match Triangle (X) and Empty (Q).',
            explanation: 'Triangle is coded as X; Empty is coded as Q. Combined code = XQ.',
            pictorialClue: '📋 Feature Match: Shape (Triangle=X) + Fill (Empty=Q) ➔ XQ.'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: 'Codes: Red Circle = MR, Blue Circle = MB, Red Square = NR. What is the code for a Blue Square?',
            options: ['NB', 'NR', 'MR', 'MB'],
            correct: 0,
            hint: 'First letter = Shape (M=Circle, N=Square). Second letter = Colour (R=Red, B=Blue).',
            explanation: 'M = Circle, N = Square. R = Red, B = Blue. Blue Square = N (Square) + B (Blue) = NB.',
            pictorialClue: '🔤 Grid Code: [N = Square] + [B = Blue] ➔ NB.'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'In a 2-letter NVR code, a student assumes the first letter is always the outer shape. However, Fig 1 (Large Square) is KL, and Fig 2 (Small Square) is ML, while Fig 3 (Large Circle) is KP. Which letter represents SIZE?',
            options: ['L', 'P', 'First letter (K / M)', 'Second letter (L / P)'],
            correct: 2,
            hint: 'Look at what changes between Large Square (KL) and Small Square (ML). The first letter changed!',
            explanation: 'Large Square = KL; Small Square = ML. Since only size changed, the first letter (K=Large, M=Small) represents Size, not shape!',
            pictorialClue: '⚠️ Order Trap: First letter = Size (K=Large, M=Small); Second letter = Shape (L=Square, P=Circle).'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: 'A 3-letter code uses: Letter 1 = Shape sides (3=T, 4=Q, 5=P); Letter 2 = Orientation (Up=U, Down=D); Letter 3 = Central dot (Yes=Y, No=N). What is the code for a downward-pointing pentagon with a central dot?',
            options: ['PDY', 'PUY', 'QDY', 'TDY'],
            correct: 0,
            hint: 'Pentagon = 5 sides (P). Downward = D. Central dot = Y.',
            explanation: '5 sides (Pentagon) = P. Downward = D. Dot = Y. Resulting code = PDY.',
            pictorialClue: '🔷 3-Feature Code: [5 sides = P] + [Down = D] + [Dot = Y] ➔ PDY.'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: 'Four figures have codes: ZK, ZL, YK, YL. If figure ZK has 4 black dots and 1 triangle, and figure YK has 4 black dots and 1 square, what feature is governed by letter "K"?',
            options: ['Shape of the outer polygon', 'Having 4 black dots', 'Orientation of the triangle', 'Shading of the square'],
            correct: 1,
            hint: 'Compare ZK and YK: both have letter K! What feature is shared between ZK and YK?',
            explanation: 'Both ZK and YK share the letter K, and both share 4 black dots. Therefore, K represents having 4 black dots.',
            pictorialClue: '🏆 Common Feature Induction: Shared letter K corresponds to shared feature (4 black dots).'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "Top row shapes are Large, bottom row are Small. First letter represents Size (L = Large, S = Small). Second letter represents Shape (T = Triangle, C = Circle). What is the code for a Small Triangle?",
            options: ["LT","ST","SC","LC"],
            correct: 1,
            hint: "S for Small, T for Triangle ➔ ST.",
            explanation: "Size is Small (S), Shape is Triangle (T) ➔ Code = ST.",
            pictorialClue: "🔤 Feature Grid: Row 1 = L, Row 2 = S; Col 1 = T, Col 2 = C."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "In a 2-letter cipher, the first letter represents number of sides (T=3, F=4, P=5). The second letter represents fill (W=White, B=Black, S=Striped). What shape has the code PS?",
            options: ["Black Pentagon","Striped Pentagon","White Pentagon","Striped Square"],
            correct: 1,
            hint: "P = 5 sides (Pentagon), S = Striped fill.",
            explanation: "P indicates 5 sides (Pentagon) and S indicates Striped shading.",
            pictorialClue: "🔢 Code Decoded: P (5 sides) + S (Striped) = Striped Pentagon."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "Shape codes: Black Star = BX, White Star = WX, Black Circle = BY. What is the code for a White Circle?",
            options: ["WY","WX","BY","BW"],
            correct: 0,
            hint: "First letter = Fill (B=Black, W=White). Second letter = Shape (X=Star, Y=Circle).",
            explanation: "White gives 'W', Circle gives 'Y'. Combined = WY.",
            pictorialClue: "🧩 Variable Isolation: 1st letter = Colour, 2nd letter = Geometry."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "A 3-letter cipher codes: 1st letter = outer shape, 2nd letter = inner shape, 3rd letter = dot position (T=Top, B=Bottom). What code represents a Square inside a Circle with a dot at the Top?",
            options: ["CST","SCT","CSB","SCB"],
            correct: 0,
            hint: "Outer = Circle (C), Inner = Square (S), Dot = Top (T).",
            explanation: "Circle outer = C, Square inner = S, Top dot = T ➔ CST.",
            pictorialClue: "🎯 Layered Code: Outer (C) + Inner (S) + Dot (T) = CST."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "Four shapes have codes: AH, AK, BH, BK. AH is an upright striped triangle, AK is an inverted striped triangle, BH is an upright dotted triangle. What is BK?",
            options: ["Upright shaded triangle","Inverted dotted triangle","Inverted striped triangle","Upright dotted square"],
            correct: 1,
            hint: "A=striped, B=dotted. H=upright, K=inverted.",
            explanation: "B means dotted pattern, K means inverted orientation. Therefore, BK is an inverted dotted triangle.",
            pictorialClue: "🏆 Matrix Completion: B (dotted) + K (inverted) = Inverted Dotted Triangle."
          }
        ]
      },
      {
        id: 'nvr-compass-dial',
        title: 'Rotations vs Reflections: Compass Angle Dial',
        category: 'Non-Verbal & 3D Spatial',
        examFrequency: 'High (Bexley, Kent, St. Olave\'s)',
        difficulty: 'Intermediate',
        rule: 'An 8-point compass divides 360° into 45° steps (N, NE, E, SE, S, SW, W, NW). Rotating clockwise 90° = 2 steps; 135° = 3 steps; 180° = 4 steps. In a reflection, chirality (handedness) flips!',
        trap: 'Confusing a 180° rotation with a reflection! A reflection reverses left/right asymmetry, whereas a rotation preserves clockwise handedness!',
        question: 'An arrow pointing North is rotated 135° clockwise. Which compass point does it now point towards?',
        visualType: 'compass-rotations',
        steps: [
          {
            title: 'Step 1: Convert Degrees to Compass Steps',
            detail: 'Each 45° turn is 1 compass step. 135° ÷ 45° = <strong>3 steps clockwise</strong>.'
          },
          {
            title: 'Step 2: Step Around the Dial from North',
            detail: 'Step 1: North-East (45°); Step 2: East (90°); Step 3: <strong>South-East (135°)</strong>.'
          },
          {
            title: 'Step 3: Check Reflection Handedness',
            detail: 'If the question specifies a reflection, flip the image across the mirror line. If it specifies rotation, keep all internal details in the same relative order.'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: 'A pointer faces East and rotates 90° clockwise. Which direction is it pointing now?',
            options: ['North', 'South', 'West', 'South-East'],
            correct: 1,
            hint: 'From East (3 o\'clock), turn 90° clockwise to 6 o\'clock.',
            explanation: 'East rotated 90° clockwise points directly South.',
            pictorialClue: '🧭 Compass Dial: East (90°) + 90° clockwise = South (180°).'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: 'An asymmetrical flag facing North is rotated 180° clockwise. Which direction does the flagpole now point?',
            options: ['North', 'South', 'East', 'West'],
            correct: 1,
            hint: 'A 180° turn is a complete half-turn, pointing to the exact opposite direction.',
            explanation: '180° rotation inverts the direction completely from North to South.',
            pictorialClue: '🔄 180° Half-Turn: North ➔ South (opposite direction).'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'A clock hand pointing at 12 is reflected in a horizontal mirror line running through 9 and 3. Where does the reflected hand point?',
            options: ['3', '6', '9', '12'],
            correct: 1,
            hint: 'A horizontal mirror line reflects top to bottom!',
            explanation: 'A horizontal mirror reflects vertical directions: top (12) reflects directly across to bottom (6).',
            pictorialClue: '⚠️ Horizontal Mirror: Top (12) reflects down to Bottom (6).'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: 'A shape pointing North-West rotates 225° clockwise. What compass direction does it face after the rotation?',
            options: ['South', 'South-East', 'East', 'North-East'],
            correct: 0,
            hint: '225° = 5 steps of 45°. NW ➔ N (1) ➔ NE (2) ➔ E (3) ➔ SE (4) ➔ S (5).',
            explanation: 'NW + 225° clockwise: NW ➔ N (45°) ➔ NE (90°) ➔ E (135°) ➔ SE (180°) ➔ South (225°).',
            pictorialClue: '🧭 5-Step Dial: NW (315°) + 225° = 540° = 180° (South).'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: 'Figure A is reflected across a vertical mirror line, and then the result is rotated 90° clockwise. Which single transformation accomplishes the same result?',
            options: [
              'Reflection in a diagonal mirror line (45°)',
              'Single 90° anti-clockwise rotation',
              'Single 180° rotation',
              'Translation only'
            ],
            correct: 0,
            hint: 'A reflection combined with a rotation is always equivalent to a single reflection across a tilted axis.',
            explanation: 'Combining an odd number of reflections (1) with a rotation always produces a net reflection across an axis inclined at half the rotation angle (45° diagonal mirror).',
            pictorialClue: '🏆 Transformation Theorem: 1 Reflection + Rotation = Reflection in a diagonal line.'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "An arrow pointing NORTH is rotated 135° clockwise. In which direction is it now pointing?",
            options: ["South-East (SE)","South-West (SW)","North-East (NE)","North-West (NW)"],
            correct: 0,
            hint: "North (0°) + 90° = East. East + 45° = South-East (135°).",
            explanation: "90° clockwise points East; another 45° points South-East (SE).",
            pictorialClue: "🧭 Compass Dial: N (0°) ➔ E (90°) ➔ SE (135°)."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "An arrow pointing WEST is rotated 270° clockwise. Which direction is it pointing now?",
            options: ["North","South","East","North-East"],
            correct: 1,
            hint: "Rotating 270° clockwise is identical to rotating 90° anti-clockwise! West minus 90° = South.",
            explanation: "270° clockwise = 90° anti-clockwise. Starting at West (270°) and turning 90° anti-clockwise gives South (180°).",
            pictorialClue: "🔄 Angle Shortcut: 270° CW = 90° CCW. West ➔ South."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "A letter 'b' is reflected across a vertical mirror line. What letter does it look like?",
            options: ["p","d","q","b"],
            correct: 1,
            hint: "A vertical mirror flips left and right. The right loop of 'b' flips to the left loop of 'd'.",
            explanation: "Reflecting 'b' horizontally across a vertical axis flips the loop to the left side, producing 'd'.",
            pictorialClue: "🪞 Vertical Flip: b | d."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "An asymmetric letter 'F' is rotated 180°. Can you achieve the exact same appearance using only a SINGLE reflection?",
            options: ["Yes, with a horizontal reflection","Yes, with a vertical reflection","No, 180° rotation requires two reflections or an inversion","Yes, with a diagonal reflection"],
            correct: 2,
            hint: "A 180° rotation reverses BOTH vertical and horizontal axes! Single reflection only flips one axis.",
            explanation: "180° rotation inverts both X and Y axes. A single mirror only inverts one axis.",
            pictorialClue: "⚠️ 11+ Geometry Trap: Rotation preserves chirality/handedness; single reflection reverses it."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "A shape points North-West (NW). It is rotated 90° anti-clockwise, and then reflected across a horizontal mirror. Which direction does the main pointer face now?",
            options: ["North-West (NW)","North-East (NE)","South-West (SW)","South-East (SE)"],
            correct: 0,
            hint: "NW (315°) - 90° = SW (225°). Horizontal mirror inverts vertical axis: South becomes North, West stays West = NW.",
            explanation: "Step 1: 90° anti-clockwise turns NW to SW. Step 2: A horizontal mirror reflects South to North while leaving West unchanged, resulting in North-West (NW).",
            pictorialClue: "🏆 Two-Step Transformation: NW ➔ (90° CCW) SW ➔ (Horizontal Mirror) NW."
          }
        ]
      },
      {
        id: 'nvr-shape-analogies',
        title: 'Shape Analogies (Figure A is to B as C is to ?)',
        category: 'Non-Verbal & 3D Spatial',
        examFrequency: 'High (GL, CEM, CSSE)',
        difficulty: 'Foundation',
        rule: 'Break analogies into the 3-Step Swap: 1. Shape change (sides ±1, swap inner/outer), 2. Shading change (invert, alternate), 3. Position change (rotate, reflect).',
        trap: 'Kids look at only one element (like the outer shape) and miss that the inner symbol flipped or changed count!',
        question: 'Figure A (Triangle inside Circle) transforms to Figure B (Circle inside Triangle, shaded). Figure C has a Square inside a Star. What is the analogous figure?',
        visualType: 'analogy-swap',
        steps: [
          {
            title: 'Step 1: Identify the Position Inversion',
            detail: 'In A ➔ B, the inner shape and outer shape swapped places: outer circle became inner circle.'
          },
          {
            title: 'Step 2: Identify the Shading Transformation',
            detail: 'The new outer shape (the former inner shape) becomes shaded dark.'
          },
          {
            title: 'Step 3: Apply Both Rules to Figure C',
            detail: 'Star becomes inner; Square becomes outer and shaded dark ➔ <strong>Star inside a Shaded Square</strong>.'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: 'Figure A is an Empty Circle. Figure B is a Shaded Circle. Figure C is an Empty Triangle. What is the analogous figure?',
            options: ['Empty Square', 'Shaded Triangle', 'Empty Triangle', 'Shaded Circle'],
            correct: 1,
            hint: 'The rule is: Keep the same shape, invert shading from empty to shaded.',
            explanation: 'A ➔ B simply shades the shape. Applying this to C produces a Shaded Triangle.',
            pictorialClue: '🔄 Analogy Rule: [Empty Shape] ➔ [Shaded Shape].'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: 'Figure A (3-sided triangle) becomes Figure B (4-sided square with a dot). Figure C is a 5-sided pentagon. What is the analogous figure?',
            options: [
              'Square with a dot',
              '6-sided hexagon with a dot',
              'Pentagon with two dots',
              'Triangle with a dot'
            ],
            correct: 1,
            hint: 'Number of sides increases by +1, and a central dot is added.',
            explanation: 'Sides: 3 ➔ 4 (+1). Added: central dot. For C (5 sides), new shape has 5 + 1 = 6 sides (Hexagon) with a central dot.',
            pictorialClue: '🔺 Sides +1: 3-gon ➔ 4-gon + dot. Therefore 5-gon ➔ 6-gon + dot.'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'Figure A is a large square containing 2 small circles. Figure B is a large circle containing 2 small squares. Figure C is a large hexagon containing 3 small triangles. What is the analogous figure?',
            options: [
              'Large triangle containing 2 hexagons',
              'Large triangle containing 3 small hexagons',
              'Large hexagon containing 3 circles',
              'Large square containing 3 triangles'
            ],
            correct: 1,
            hint: 'Inner and outer shapes swap types, but the count of inner shapes (3) must be preserved!',
            explanation: 'Outer shape and inner shape swap identities. The count of inner shapes remains 3. Large triangle containing 3 small hexagons.',
            pictorialClue: '⚠️ Count Conservation Trap: Inner count (3) is conserved during the identity swap.'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: 'Figure A has an outer shape with N sides and inner shape with N - 1 sides. Figure B inverts this to outer N - 1 sides and inner N sides. If Figure C has an Octagon (8) enclosing a Heptagon (7), what is the analogous figure?',
            options: [
              'Heptagon (7) enclosing an Octagon (8)',
              'Hexagon (6) enclosing a Heptagon (7)',
              'Octagon (8) enclosing a Hexagon (6)',
              'Nonagon (9) enclosing an Octagon (8)'
            ],
            correct: 0,
            hint: 'Swap inner and outer: outer becomes 7 sides, inner becomes 8 sides.',
            explanation: 'The transformation swaps inner and outer geometries: outer becomes 7-sided (Heptagon) enclosing an 8-sided (Octagon).',
            pictorialClue: '🔄 Vertex Swap: Outer 8, Inner 7 ➔ Outer 7, Inner 8.'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: 'Figure A rotates 90° clockwise and its shading inverts (White ➔ Black). Figure B shows this transformation applied. When applied to Figure C (an asymmetrical "L" shape with hatched shading), what two features change?',
            options: [
              'Only its color',
              'It rotates 90° clockwise and hatching inverts to solid fill',
              'It flips upside down',
              'It scales down by 50%'
            ],
            correct: 1,
            hint: 'Both rotation (+90° CW) and fill inversion must be executed simultaneously.',
            explanation: 'Dual transformation rule: 90° clockwise rotation combined with pattern fill inversion.',
            pictorialClue: '🏆 Compound Transformation: [+90° Rotation] + [Fill Pattern Inversion].'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "Triangle is to 3 as Hexagon is to:",
            options: ["4","5","6","8"],
            correct: 2,
            hint: "Count the number of sides!",
            explanation: "A triangle has 3 sides; a hexagon has 6 sides.",
            pictorialClue: "📐 Side Count Analogy: 3 sides ➔ 6 sides."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "Circle with 1 dot inside is to Circle with 2 dots inside as Square with 2 dots inside is to:",
            options: ["Square with 1 dot","Square with 3 dots","Square with 4 dots","Triangle with 3 dots"],
            correct: 1,
            hint: "The rule is: Add 1 dot inside (+1 dot).",
            explanation: "The number of dots inside increases by 1: 2 + 1 = 3 dots inside the square.",
            pictorialClue: "➕ Dot Rule: Dot count increases by 1."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "Black square inside white circle is to White square inside black circle as Black triangle inside white pentagon is to:",
            options: ["Black pentagon inside white triangle","White triangle inside black pentagon","White triangle inside white pentagon","Black triangle inside black pentagon"],
            correct: 1,
            hint: "Rule: Invert colors (outer becomes black, inner becomes white).",
            explanation: "Both the outer shape and inner shape invert their fill shading.",
            pictorialClue: "🔄 Invert Shading: Black becomes white, white becomes black."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "Upright arrow is to Inverted arrow as Clockwise curved arrow is to:",
            options: ["Anti-clockwise curved arrow","Straight arrow","Double arrow","Clockwise curved arrow"],
            correct: 0,
            hint: "The analogy rule is: Reverse direction of orientation.",
            explanation: "Upright flips to inverted; clockwise flips to anti-clockwise.",
            pictorialClue: "🔁 Direction Inversion: Clockwise ➔ Anti-clockwise."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "A large shape with 4 sides contains 4 small stars. A large shape with 5 sides contains 5 small stars. Therefore, a shape with 6 small stars must be:",
            options: ["Pentagon","Hexagon","Heptagon","Octagon"],
            correct: 1,
            hint: "Number of internal elements equals the number of outer sides!",
            explanation: "6 elements inside corresponds to a 6-sided polygon (Hexagon).",
            pictorialClue: "🏆 Matching Count Rule: Sides = 6, Elements = 6."
          }
        ]
      }
,
      {
      "id": "nvr-top-down-views",
      "title": "3D Spatial Elevations: Top-Down Plan vs Front/Side Elevation",
      "category": "Non-Verbal & 3D",
      "examFrequency": "High (Bexley, Slough, QE Boys)",
      "difficulty": "Advanced",
      "rule": "Look directly from above! A top-down plan view flattens all heights into a 2D floor grid. Count how many columns and rows are occupied.",
      "trap": "DO NOT include vertical stair step heights in the top-down plan! A step and a flat ground look identical from directly above.",
      "question": "A 3D building consists of a 2x2 cube base with a single tall tower on the top-left corner. What does the TOP-DOWN plan view look like?",
      "visualType": "cube-3d-interactive",
      "steps": [
            {
                  "title": "Step 1: Look perpendicularly from above",
                  "detail": "Ignore all differences in heights. Project every cube downward onto the floor plane."
            },
            {
                  "title": "Step 2: Determine footprint dimensions",
                  "detail": "The base occupies 2 rows and 2 columns: a <strong>2x2 square grid</strong>."
            },
            {
                  "title": "Step 3: Confirm tower position",
                  "detail": "The tower sits directly inside the top-left cell, so the entire 2x2 footprint remains a solid 2x2 square."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "A stack of 3 identical cubes is placed in a single vertical column. What is the plan view (view from above)?",
                  "options": [
                        "A rectangle of 3 squares",
                        "A single square",
                        "An L-shape",
                        "A cross shape"
                  ],
                  "correct": 1,
                  "hint": "Looking from above, all 3 cubes align directly beneath one another.",
                  "explanation": "Plan view only shows the single top square face.",
                  "pictorialClue": "🏢 Plan view: 1 square."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "Four cubes form an L-shape on the table (3 in a line, 1 sticking out sideways). What is the top-down view?",
                  "options": [
                        "A straight line of 4 squares",
                        "An L-shape with 4 squares",
                        "A 2x2 square",
                        "A T-shape"
                  ],
                  "correct": 1,
                  "hint": "The top view preserves the exact horizontal arrangement.",
                  "explanation": "The plan view is identical to the horizontal L-shape.",
                  "pictorialClue": "📐 L-shape footprint."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "A cylinder stands upright on its flat circular base. What is its FRONT elevation (view from front)?",
                  "options": [
                        "A circle",
                        "A rectangle",
                        "A triangle",
                        "An oval"
                  ],
                  "correct": 1,
                  "hint": "Viewing a vertical cylinder from the front projects as a 2D rectangle.",
                  "explanation": "Front elevation is a rectangle; top view is a circle.",
                  "pictorialClue": "⚠️ 2D projection: Front is a rectangle."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "A solid right cone stands on its circular base. What is its FRONT elevation?",
                  "options": [
                        "A circle",
                        "A square",
                        "An isosceles triangle",
                        "A semicircle"
                  ],
                  "correct": 2,
                  "hint": "From the side or front, a cone tapers symmetrically from base to apex.",
                  "explanation": "Front elevation is an isosceles triangle.",
                  "pictorialClue": "📐 Cone projection: Triangle."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "A 3D shape has a SQUARE plan view and a TRIANGLE front elevation. What is the shape?",
                  "options": [
                        "Cylinder",
                        "Square-based Pyramid",
                        "Cone",
                        "Triangular Prism"
                  ],
                  "correct": 1,
                  "hint": "Square base from above + triangle from side = Square-based Pyramid.",
                  "explanation": "Plan is square, front is triangle ➔ Square-based Pyramid.",
                  "pictorialClue": "📐 Square-based Pyramid."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "A 3D shape has a CIRCLE plan view and a RECTANGLE front elevation. What is the shape?",
                  "options": [
                        "Sphere",
                        "Cylinder",
                        "Cone",
                        "Cube"
                  ],
                  "correct": 1,
                  "hint": "Top view circle + front view rectangle = Cylinder.",
                  "explanation": "Cylinder has circular top and rectangular front elevation.",
                  "pictorialClue": "🏢 Cylinder."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "A structure made of unit cubes has: Front elevation of 3 columns (heights 1, 3, 2) and Side elevation of 2 columns (heights 3, 1). What is the MAXIMUM number of cubes in the structure?",
                  "options": [
                        "8",
                        "10",
                        "12",
                        "14"
                  ],
                  "correct": 1,
                  "hint": "Max cubes in each cell (r, c) = min(front[c], side[r]). Sum = min(1,3)+min(3,3)+min(2,3) + min(1,1)+min(3,1)+min(2,1) = (1+3+2) + (1+1+1) = 6 + 3 = 9 cubes (or 10 max).",
                  "explanation": "Maximum cubes = 9 (or 10 depending on grid).",
                  "pictorialClue": "🏆 Elevation bound: 10 cubes."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "A triangular prism lies on one of its rectangular faces. What shape is its plan view?",
                  "options": [
                        "Triangle",
                        "Rectangle",
                        "Pentagon",
                        "Trapezium"
                  ],
                  "correct": 1,
                  "hint": "Looking from above, the apex ridge line divides two rectangular slopes, forming a rectangle.",
                  "explanation": "Plan view of a prism on its side is a rectangle.",
                  "pictorialClue": "📐 Plan view: Rectangle."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "A sphere is sliced in half horizontally to make a hemisphere, which rests flat side down. What is the plan view?",
                  "options": [
                        "A solid circle",
                        "A hemisphere dome",
                        "A semicircle",
                        "An ellipse"
                  ],
                  "correct": 0,
                  "hint": "Looking from above, the circular base rim is the widest contour.",
                  "explanation": "Top-down view is a circle.",
                  "pictorialClue": "📐 Circle plan view."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "A solid 3x3x3 wooden cube is painted red on all 6 outside faces, then cut into 27 unit cubes. How many unit cubes have paint on EXACTLY TWO faces?",
                  "options": [
                        "6",
                        "8",
                        "12",
                        "24"
                  ],
                  "correct": 2,
                  "hint": "2-face painted cubes lie along the edges (excluding the 8 corners). A cube has 12 edges. Each edge has 3 - 2 = 1 middle cube. 12 × 1 = 12.",
                  "explanation": "Edge cubes have 2 painted faces: 12 edges × 1 = 12 cubes.",
                  "pictorialClue": "🏆 Edge Cubes Theorem: 12 cubes."
            }
      ]
},
      {
      "id": "nvr-hidden-shapes",
      "title": "Embedded & Hidden Figures (Dissecting Overlapping Contours)",
      "category": "Non-Verbal & 3D",
      "examFrequency": "Very High (GL 11+, Kent, Buckinghamshire)",
      "difficulty": "Intermediate",
      "rule": "Keep target size and orientation FIXED unless explicitly told rotations are permitted! Trace specific vertices, angles, and line segments.",
      "trap": "DO NOT pick shapes where an internal line is missing or where extra intersecting lines break the target polygon boundary!",
      "question": "A target equilateral triangle with an internal horizontal median is hidden inside a complex geometric pattern. How do you isolate it?",
      "visualType": "cube-3d-interactive",
      "steps": [
            {
                  "title": "Step 1: Check side lengths and angles",
                  "detail": "Look for an exact 60° equilateral triangle base."
            },
            {
                  "title": "Step 2: Verify the internal bisector",
                  "detail": "Ensure the horizontal bar connects midpoints of both inclined sides."
            },
            {
                  "title": "Step 3: Eliminate false distractors",
                  "detail": "Discard any shape where lines cross through the apex or where angles are acute 45°."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "A target shape is a small letter 'T'. In which figure is this exact unrotated 'T' completely contained?",
                  "options": [
                        "Figure with only diagonal lines",
                        "Figure with perpendicular horizontal and vertical segments",
                        "A plain circle",
                        "A spiral"
                  ],
                  "correct": 1,
                  "hint": "'T' requires a horizontal top bar intersecting a vertical stem.",
                  "explanation": "Figure with perpendicular segments contains the 'T'.",
                  "pictorialClue": "🔍 Hidden 'T'."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "Which figure contains a hidden regular hexagon without any rotation?",
                  "options": [
                        "Pattern built entirely of triangles and isometric grids",
                        "Pattern made only of concentric circles",
                        "Pattern made of random curves",
                        "A lone square"
                  ],
                  "correct": 0,
                  "hint": "Isometric triangular grids naturally form regular hexagons (6 triangles meeting at a point).",
                  "explanation": "6 equilateral triangles meet to form a hidden hexagon.",
                  "pictorialClue": "🔍 Isometric Grid Hexagon."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "A target shape is an arrowhead pointing RIGHT. A candidate contains the arrowhead pointing UP. Can this candidate be the answer if rotation is NOT permitted?",
                  "options": [
                        "Yes, always",
                        "No, orientation must be strictly preserved",
                        "Only on Sundays",
                        "Depends on size"
                  ],
                  "correct": 1,
                  "hint": "Unless stated, embedded shape problems require EXACT orientation.",
                  "explanation": "No rotation permitted means direction must match.",
                  "pictorialClue": "⚠️ Strict Orientation Rule."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "A target shape is a parallelogram with 60° and 120° angles. Which complex pattern embeds it?",
                  "options": [
                        "A brick wall pattern (rectangles)",
                        "An isometric honeycomb lattice",
                        "A circular radar screen",
                        "A checkerboard of squares"
                  ],
                  "correct": 1,
                  "hint": "Honeycomb lattices contain 60° and 120° angles perfectly.",
                  "explanation": "Honeycomb lattice contains 60°/120° parallelograms.",
                  "pictorialClue": "🔍 60° Lattice."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "How many distinct squares of ANY size can be found in a standard 3x3 grid of unit squares?",
                  "options": [
                        "9",
                        "10",
                        "14",
                        "15"
                  ],
                  "correct": 2,
                  "hint": "1x1 squares = 9; 2x2 squares = 4; 3x3 square = 1. Total = 9 + 4 + 1 = 14.",
                  "explanation": "Formula: 1² + 2² + 3² = 1 + 4 + 9 = 14 squares.",
                  "pictorialClue": "📐 Square counting: 14 squares."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "How many triangles of ANY size are in a large triangle subdivided into 4 smaller identical triangles (1 inverted in middle)?",
                  "options": [
                        "4",
                        "5",
                        "6",
                        "8"
                  ],
                  "correct": 1,
                  "hint": "4 small individual triangles + 1 large overall triangle = 5 triangles.",
                  "explanation": "4 unit triangles + 1 bounding triangle = 5.",
                  "pictorialClue": "📐 Triangle count: 5."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "How many total triangles are in a square with BOTH diagonal lines drawn inside?",
                  "options": [
                        "4",
                        "6",
                        "8",
                        "10"
                  ],
                  "correct": 2,
                  "hint": "4 small triangles formed by quadrants + 4 large triangles formed by halves = 8.",
                  "explanation": "4 small + 4 large = 8 triangles.",
                  "pictorialClue": "📐 Diagonals in square: 8 triangles."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "A target shape is a kite with vertices (0,1), (1,0), (0,-2), (-1,0). Which feature distinguishes it from a rhombus?",
                  "options": [
                        "Opposite sides are parallel",
                        "Only adjacent sides of unequal pairs are equal",
                        "All four sides are equal",
                        "It has 4 right angles"
                  ],
                  "correct": 1,
                  "hint": "A kite has two pairs of equal-length adjacent sides, unlike a rhombus where all 4 sides are equal.",
                  "explanation": "Kite: two distinct pairs of adjacent equal sides.",
                  "pictorialClue": "🔍 Kite vs Rhombus."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "In a regular 5-pointed star (pentagram), how many triangles are there in total?",
                  "options": [
                        "5",
                        "8",
                        "10",
                        "15"
                  ],
                  "correct": 2,
                  "hint": "5 outer point triangles + 5 larger triangles using one internal star line = 10 triangles.",
                  "explanation": "Total triangles in a pentagram = 10.",
                  "pictorialClue": "🏆 Star Triangles: 10."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "In an 8-sided regular octagon with all diagonals from a single vertex drawn, into how many non-overlapping triangles is it divided?",
                  "options": [
                        "5",
                        "6",
                        "7",
                        "8"
                  ],
                  "correct": 1,
                  "hint": "Any n-sided polygon triangulated from 1 vertex yields n - 2 triangles. 8 - 2 = 6 triangles.",
                  "explanation": "Formula: n - 2 = 8 - 2 = 6 triangles.",
                  "pictorialClue": "🏆 Polygon Triangulation: n - 2 = 6."
            }
      ]
},
      {
      "id": "nvr-series-progression",
      "title": "Sequence Progression & Step Rules (Layer Shifting & Feature Count)",
      "category": "Non-Verbal & 3D",
      "examFrequency": "Very High (GL, CEM, CSSE)",
      "difficulty": "Intermediate",
      "rule": "Track EACH element independently! (1) Outer shape, (2) Inner shading, (3) Number of dots, (4) Rotation angle. Never try to solve all elements in a single glance.",
      "trap": "DO NOT pick an option that satisfies only ONE rule while violating another! Both rotation and shading must match simultaneously.",
      "question": "A circle adds 1 side each step: Circle (0) ➔ Triangle (3) ➔ Square (4) ➔ Pentagon (5). The dot rotates 90° clockwise each step. What is the 5th figure?",
      "visualType": "cube-3d-interactive",
      "steps": [
            {
                  "title": "Step 1: Track the outer shape progression",
                  "detail": "3 sides ➔ 4 sides ➔ 5 sides ➔ next is a <strong>Hexagon (6 sides)</strong>."
            },
            {
                  "title": "Step 2: Track the internal dot rotation",
                  "detail": "Top ➔ Right (90°) ➔ Bottom (180°) ➔ Left (270°) ➔ <strong>Top (360°/0°)</strong>."
            },
            {
                  "title": "Step 3: Combine both verified elements",
                  "detail": "A 6-sided hexagon with the dot positioned at the top vertex."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "A dot moves clockwise around four corners of a square: Top-Left ➔ Top-Right ➔ Bottom-Right ➔ ?",
                  "options": [
                        "Top-Left",
                        "Bottom-Left",
                        "Center",
                        "Top-Right"
                  ],
                  "correct": 1,
                  "hint": "Following clockwise order around a square: next corner is Bottom-Left.",
                  "explanation": "Top-Left ➔ Top-Right ➔ Bottom-Right ➔ Bottom-Left.",
                  "pictorialClue": "🔄 Corner clockwise cycle."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "Shading alternates: White ➔ Striped ➔ Black ➔ White ➔ Striped ➔ ?",
                  "options": [
                        "White",
                        "Striped",
                        "Black",
                        "Grey"
                  ],
                  "correct": 2,
                  "hint": "3-step cyclic pattern: White (1), Striped (2), Black (3). Step 6 is Black.",
                  "explanation": "Pattern repeats every 3 steps. Step 6 = Black.",
                  "pictorialClue": "🎨 Shading cycle: Black."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "Number of sides follows: 3, 5, 7, 9... What is the next polygon?",
                  "options": [
                        "10-gon (Decagon)",
                        "11-gon (Hendecagon)",
                        "12-gon (Dodecagon)",
                        "8-gon (Octagon)"
                  ],
                  "correct": 1,
                  "hint": "Odd numbers progression: 3, 5, 7, 9, 11 sides.",
                  "explanation": "Next term in odd sequence is 11.",
                  "pictorialClue": "🔢 +2 side count: 11-gon."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "An arrow rotates 45° clockwise each step: North (0°) ➔ North-East (45°) ➔ East (90°) ➔ ?",
                  "options": [
                        "South",
                        "South-East",
                        "South-West",
                        "North-West"
                  ],
                  "correct": 1,
                  "hint": "East + 45° clockwise = South-East (135°).",
                  "explanation": "90° + 45° = 135° (South-East).",
                  "pictorialClue": "🧭 +45° Clockwise: South-East."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "In a 3-part figure: Shape 1 has 1 black dot. Shape 2 has 2 black dots. Shape 3 has 4 black dots. How many dots in Shape 4?",
                  "options": [
                        "6",
                        "7",
                        "8",
                        "9"
                  ],
                  "correct": 2,
                  "hint": "Geometric progression doubling: 1 ➔ 2 ➔ 4 ➔ 8.",
                  "explanation": "Powers of 2: 2³ = 8 dots.",
                  "pictorialClue": "🔢 Doubling: 8 dots."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "A line segment reflects horizontally every step: Left ➔ Right ➔ Left ➔ Right ➔ ?",
                  "options": [
                        "Left",
                        "Right",
                        "Up",
                        "Down"
                  ],
                  "correct": 0,
                  "hint": "Binary toggle: step 5 is Left.",
                  "explanation": "Odd steps are Left, even steps are Right.",
                  "pictorialClue": "🔄 Binary toggle: Left."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "Inner and outer shapes swap roles: Circle inside Square ➔ Square inside Circle ➔ Triangle inside Hexagon ➔ ?",
                  "options": [
                        "Hexagon inside Triangle",
                        "Circle inside Hexagon",
                        "Triangle inside Square",
                        "Square inside Triangle"
                  ],
                  "correct": 0,
                  "hint": "Inversion rule: outer becomes inner, inner becomes outer.",
                  "explanation": "Hexagon inside Triangle.",
                  "pictorialClue": "🔄 Inner-Outer inversion."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "Rotations alternate direction: +90° CW, then -45° CCW, then +90° CW, then -45° CCW. Starting from North (0°), where does it point after 3 steps?",
                  "options": [
                        "East (90°)",
                        "North-East (45°)",
                        "South-East (135°)",
                        "South (180°)"
                  ],
                  "correct": 2,
                  "hint": "Step 1: 0 + 90 = 90° (East). Step 2: 90 - 45 = 45° (NE). Step 3: 45 + 90 = 135° (South-East).",
                  "explanation": "0° ➔ 90° ➔ 45° ➔ 135° (SE).",
                  "pictorialClue": "🏆 Alternating angles: 135° (SE)."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "A clock hand moves: 1 hour, then 2 hours, then 3 hours, then 4 hours. Starting at 12:00, where does it point after all 4 jumps?",
                  "options": [
                        "8:00",
                        "9:00",
                        "10:00",
                        "11:00"
                  ],
                  "correct": 2,
                  "hint": "Total hours moved = 1 + 2 + 3 + 4 = 10 hours. 12:00 + 10 hours = 10:00.",
                  "explanation": "Sum of jumps = 10. Hand points to 10:00.",
                  "pictorialClue": "🔢 Triangular jumps: 10:00."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "Fibonacci side counts: Triangle (3), Triangle (3), Hexagon (6), Nonagon (9), 15-gon... What is the next polygon?",
                  "options": [
                        "21-gon",
                        "24-gon",
                        "27-gon",
                        "30-gon"
                  ],
                  "correct": 1,
                  "hint": "Fibonacci addition rule: 3 + 3 = 6; 3 + 6 = 9; 6 + 9 = 15; 9 + 15 = 24 sides.",
                  "explanation": "Next count = 9 + 15 = 24 sides.",
                  "pictorialClue": "🏆 Fibonacci progression: 24 sides."
            }
      ]
},
      {
      "id": "nvr-reflection-symmetry",
      "title": "Dual-Axis Symmetry & Diagonal Mirror Planes",
      "category": "Non-Verbal & 3D",
      "examFrequency": "High (GL 11+, QE Boys, Henrietta Barnett)",
      "difficulty": "Intermediate",
      "rule": "A diagonal mirror line swaps the horizontal (X) and vertical (Y) coordinates! Points at (x, y) reflect to (y, x). A vertical line reflects to a horizontal line.",
      "trap": "DO NOT reflect diagonally as if it were a horizontal or vertical mirror! A horizontal arrow reflects across a 45° mirror to become a VERTICAL arrow!",
      "question": "A horizontal arrow pointing RIGHT is reflected across a 45° diagonal mirror running from bottom-left to top-right. Which way does the reflected arrow point?",
      "visualType": "cube-3d-interactive",
      "steps": [
            {
                  "title": "Step 1: Identify mirror orientation",
                  "detail": "The mirror line is y = x (inclined at +45°)."
            },
            {
                  "title": "Step 2: Apply the coordinate exchange rule",
                  "detail": "An arrow along the positive X-axis (+1, 0) maps to the positive Y-axis (0, +1)."
            },
            {
                  "title": "Step 3: Read final orientation",
                  "detail": "An arrow along the positive Y-axis points straight <strong>UP</strong>."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "A vertical arrow pointing UP is reflected across a horizontal mirror line on the ground. Which way does it point?",
                  "options": [
                        "UP",
                        "DOWN",
                        "LEFT",
                        "RIGHT"
                  ],
                  "correct": 1,
                  "hint": "Horizontal mirror flips vertical directions: UP becomes DOWN.",
                  "explanation": "UP reflects to DOWN across horizontal mirror.",
                  "pictorialClue": "🪞 Horizontal reflection: DOWN."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "The letter 'b' is reflected across a vertical mirror line. What letter does it appear as?",
                  "options": [
                        "b",
                        "d",
                        "p",
                        "q"
                  ],
                  "correct": 1,
                  "hint": "Vertical mirror line flips horizontally left-to-right: loop on right flips to left: 'd'.",
                  "explanation": "'b' reflects horizontally to 'd'.",
                  "pictorialClue": "🪞 Vertical flip: 'd'."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "Which capital letter has BOTH horizontal and vertical lines of symmetry?",
                  "options": [
                        "A",
                        "M",
                        "H",
                        "T"
                  ],
                  "correct": 2,
                  "hint": "'H' can be folded in half horizontally and vertically, mapping onto itself both ways.",
                  "explanation": "'H' has dual-axis symmetry (both vertical and horizontal).",
                  "pictorialClue": "🪞 Dual symmetry: 'H'."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "Which capital letter has rotational symmetry of order 2 but NO lines of reflection symmetry?",
                  "options": [
                        "N",
                        "O",
                        "E",
                        "X"
                  ],
                  "correct": 0,
                  "hint": "'N' rotated 180° looks identical (order 2), but has zero mirror lines.",
                  "explanation": "'N' has order 2 rotational symmetry but no reflection symmetry.",
                  "pictorialClue": "⚠️ Rotational vs Reflection: 'N'."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "A flag pointing UP and RIGHT is reflected across a vertical mirror line. Which way does the reflected flag point?",
                  "options": [
                        "UP and LEFT",
                        "DOWN and RIGHT",
                        "DOWN and LEFT",
                        "UP and RIGHT"
                  ],
                  "correct": 0,
                  "hint": "Vertical mirror reverses horizontal (RIGHT becomes LEFT) but preserves vertical (UP stays UP).",
                  "explanation": "UP stays UP; RIGHT becomes LEFT ➔ UP and LEFT.",
                  "pictorialClue": "🪞 Component reflection: UP & LEFT."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "How many lines of symmetry does a regular nonagon (9-sided polygon) have?",
                  "options": [
                        "3",
                        "6",
                        "9",
                        "18"
                  ],
                  "correct": 2,
                  "hint": "Any regular n-sided polygon has exactly n lines of symmetry. 9 sides = 9 lines.",
                  "explanation": "Regular n-gon has n lines of symmetry = 9.",
                  "pictorialClue": "📐 Regular polygon symmetry: 9."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "An arrow pointing NORTH is reflected across a diagonal mirror inclined at 45° (from SW to NE). Which way does it point?",
                  "options": [
                        "EAST",
                        "WEST",
                        "SOUTH",
                        "NORTH-WEST"
                  ],
                  "correct": 0,
                  "hint": "Reflecting across y = x turns the vertical Y-axis (North) into the horizontal X-axis (East).",
                  "explanation": "North maps to East across 45° diagonal mirror.",
                  "pictorialClue": "🏆 Diagonal Reflection: East."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "Two perpendicular mirror lines reflect an asymmetrical object sequentially. What single transformation produces the same result?",
                  "options": [
                        "Single reflection",
                        "180° rotation",
                        "90° rotation",
                        "Translation"
                  ],
                  "correct": 1,
                  "hint": "Two perpendicular reflections are mathematically identical to a 180° rotation about the intersection point.",
                  "explanation": "Reflecting across X then Y = 180° rotation.",
                  "pictorialClue": "🏆 Product of perpendicular reflections: 180° rotation."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "How many lines of symmetry does a non-square rhombus possess?",
                  "options": [
                        "0",
                        "1",
                        "2",
                        "4"
                  ],
                  "correct": 2,
                  "hint": "A rhombus has exactly 2 lines of symmetry, running along its two diagonals.",
                  "explanation": "A rhombus has 2 lines of symmetry (the diagonals).",
                  "pictorialClue": "📐 Rhombus symmetry: 2."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "A point at coordinates (3, -5) is reflected across the line y = -x. What are its new coordinates?",
                  "options": [
                        "(-3, 5)",
                        "(5, -3)",
                        "(-5, 3)",
                        "(5, 3)"
                  ],
                  "correct": 1,
                  "hint": "Reflecting across y = -x maps (x, y) to (-y, -x). Here (-(-5), -(3)) = (5, -3).",
                  "explanation": "Rule: (x, y) ➔ (-y, -x). (3, -5) ➔ (5, -3).",
                  "pictorialClue": "🏆 Line y = -x Reflection: (5, -3)."
            }
      ]
},
      {
      "id": "nvr-3d-block-counting",
      "title": "Isometric 3D Block Counting & Hidden Volume Stacks",
      "category": "Non-Verbal & 3D",
      "examFrequency": "High (St Olave's, Sutton, Kingston)",
      "difficulty": "Intermediate",
      "rule": "Never just count the visible blocks! Every elevated block MUST be supported by hidden blocks beneath it down to the table.",
      "trap": "DO NOT forget the hidden foundation cubes! A cube at height 3 requires 2 cubes underneath it that cannot be seen.",
      "question": "An isometric drawing shows 3 columns: column A has height 3, column B has height 2, column C has height 1. How many total cubes are in the stack?",
      "visualType": "cube-3d-interactive",
      "steps": [
            {
                  "title": "Step 1: Record heights for each vertical column",
                  "detail": "Column A = 3 cubes. Column B = 2 cubes. Column C = 1 cube."
            },
            {
                  "title": "Step 2: Add all column heights together",
                  "detail": "Total cubes = 3 + 2 + 1 = <strong>6 cubes</strong>."
            },
            {
                  "title": "Step 3: Verify no floating cubes",
                  "detail": "All 6 cubes are physically supported from the floor."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "A stack has two columns of 2 cubes each. How many total cubes?",
                  "options": [
                        "2",
                        "3",
                        "4",
                        "6"
                  ],
                  "correct": 2,
                  "hint": "2 + 2 = 4 cubes.",
                  "explanation": "Two columns of height 2 = 4 cubes.",
                  "pictorialClue": "🧱 2 + 2 = 4."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "A staircase of cubes has 3 columns: heights 1, 2, and 3. How many cubes in total?",
                  "options": [
                        "5",
                        "6",
                        "7",
                        "8"
                  ],
                  "correct": 1,
                  "hint": "1 + 2 + 3 = 6 cubes.",
                  "explanation": "Sum = 1 + 2 + 3 = 6 cubes.",
                  "pictorialClue": "🧱 Staircase sum: 6."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "A 3x3 square base of cubes is 1 layer high. A single cube is placed on top in the center. How many total cubes?",
                  "options": [
                        "9",
                        "10",
                        "11",
                        "12"
                  ],
                  "correct": 1,
                  "hint": "Base = 3x3 = 9 cubes. Top = 1 cube. 9 + 1 = 10 cubes.",
                  "explanation": "9 base cubes + 1 top cube = 10 cubes.",
                  "pictorialClue": "🧱 9 + 1 = 10."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "How many unit cubes are needed to build a completely solid 3x3x3 cube?",
                  "options": [
                        "9",
                        "18",
                        "27",
                        "36"
                  ],
                  "correct": 2,
                  "hint": "Volume = 3 × 3 × 3 = 27 cubes.",
                  "explanation": "3³ = 27 unit cubes.",
                  "pictorialClue": "🧱 3x3x3 Volume: 27."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "A solid 4x4x4 cube has a hole drilled right through the center from top to bottom (1x1 square hole). How many cubes REMAIN?",
                  "options": [
                        "48",
                        "56",
                        "60",
                        "64"
                  ],
                  "correct": 2,
                  "hint": "Original = 4³ = 64. A vertical 1x1 column through a height of 4 removes 4 cubes. 64 - 4 = 60 cubes.",
                  "explanation": "64 - 4 = 60 cubes remain.",
                  "pictorialClue": "🧱 Volume removal: 64 - 4 = 60."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "In an isometric stack, the visible top surfaces show 5 columns. The column heights are 4, 3, 2, 2, 1. How many total cubes?",
                  "options": [
                        "10",
                        "11",
                        "12",
                        "14"
                  ],
                  "correct": 2,
                  "hint": "4 + 3 + 2 + 2 + 1 = 12 cubes.",
                  "explanation": "Sum of heights = 12 cubes.",
                  "pictorialClue": "🧱 Height sum: 12."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "A hollow box with outside dimensions 4x4x4 is made of unit cubes with a wall thickness of 1 cube. How many cubes were used to build it?",
                  "options": [
                        "48",
                        "52",
                        "56",
                        "60"
                  ],
                  "correct": 2,
                  "hint": "Outside volume = 4³ = 64. Inside hollow space = (4-2)³ = 2³ = 8 cubes. Cubes used = 64 - 8 = 56 cubes.",
                  "explanation": "Total cubes = 64 - 8 = 56 cubes.",
                  "pictorialClue": "🏆 Hollow shell: 64 - 8 = 56."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "How many unit cubes are completely HIDDEN (cannot be seen from any outside direction) in a solid 4x4x4 cube?",
                  "options": [
                        "4",
                        "8",
                        "12",
                        "16"
                  ],
                  "correct": 1,
                  "hint": "Hidden cubes are the core: (4-2)³ = 2³ = 8 cubes.",
                  "explanation": "Core volume = 2³ = 8 cubes.",
                  "pictorialClue": "🏆 Internal Hidden Cubes: 8."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "You have 50 unit cubes. What is the side length of the LARGEST solid cube you can build, and how many cubes are left over?",
                  "options": [
                        "Side 3, 23 left over",
                        "Side 3, 27 left over",
                        "Side 4, 14 left over",
                        "Side 4, 2 left over"
                  ],
                  "correct": 0,
                  "hint": "3³ = 27 cubes (50 - 27 = 23 left). 4³ = 64 cubes (too many).",
                  "explanation": "Largest is side 3 (27 cubes), leaving 50 - 27 = 23 cubes.",
                  "pictorialClue": "🧱 Largest cube: 3³ = 27 (23 leftover)."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "A pyramid of cubes has a 4x4 base, a 3x3 layer, a 2x2 layer, and a 1x1 top. How many total unit cubes are in the pyramid?",
                  "options": [
                        "26",
                        "28",
                        "30",
                        "32"
                  ],
                  "correct": 2,
                  "hint": "Sum of square numbers: 1² + 2² + 3² + 4² = 1 + 4 + 9 + 16 = 30 cubes.",
                  "explanation": "16 + 9 + 4 + 1 = 30 cubes.",
                  "pictorialClue": "🏆 Square Pyramidal Number: 30 cubes."
            }
      ]
}
    ],

    vr: [
      {
        id: 'vr-hidden-words',
        title: 'Hidden Words Spanning Two Words',
        category: 'Verbal Reasoning',
        examFrequency: 'High (GL Assessment & CEM)',
        difficulty: 'Foundation',
        rule: 'The hidden 3- or 4-letter word MUST span across the boundary of two adjacent words (end of word 1 + beginning of word 2). It cannot be contained entirely inside one word!',
        trap: 'Kids find a word inside a single word (e.g. "TEN" inside "KITTEN") and pick it, which is disqualified by 11+ rules!',
        question: 'Find the 4-letter word hidden across: "They ate sou<strong>p in k</strong>itchen yesterday."',
        visualType: 'hidden-word-span',
        steps: [
          {
            title: 'Step 1: Scan Word Boundaries Across Spaces',
            detail: 'Ignore letters in the middle of words. Focus on the final 1-3 letters of each word joined with the first 1-3 letters of the next word.'
          },
          {
            title: 'Step 2: Test Letter Combinations Across the Gap',
            detail: 'Look at "sou<strong>p</strong>" and "<strong>in</strong>" ➔ P + IN = PIN (3 letters). Look at "sou<strong>p in k</strong>itchen" ➔ P + IN + K = <strong>PINK</strong> (4 letters).'
          },
          {
            title: 'Step 3: Verify the Hidden Word',
            detail: '"PINK" is a valid common 4-letter English word. It spans two word boundaries: "sou[P IN K]itchen".'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: 'Find the 4-letter word hidden across two adjacent words: "The cat drank col<strong>d milk</strong> quickly."',
            options: ['COLD', 'MILK', 'COLD', 'MILD'],
            correct: 3,
            hint: 'Look at the boundary: col[D M I L]k.',
            explanation: 'col[D] + [M I L]k = "D + MIL" = MILD.',
            pictorialClue: '🌉 Bridge Span: col[D] + [M I L]k ➔ MILD (4 letters across space).'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: 'Find the 4-letter word hidden across two adjacent words: "The old trave<strong>l er r</strong>eached his destination."',
            options: ['ROAD', 'ERRS', 'EACH', 'HEAD'],
            correct: 1,
            hint: 'Look at: trave[L E R R]eached.',
            explanation: 'trave[L E] + [R R]eached ? Or trave[L] + [E R R]eached = ERRS.',
            pictorialClue: '🌉 Word Span: [E R] + [R S] or [L E R R] ➔ ERRS.'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'In the sentence "The ferocious ti<strong>ger a te</strong>rrifying roar made", a student picks "ROAR". Why is this answer WRONG in 11+ exams?',
            options: [
              'ROAR is not a real word',
              'ROAR is inside a single word and does NOT cross a word boundary',
              'ROAR has 5 letters',
              'ROAR is a noun'
            ],
            correct: 1,
            hint: 'Remember the golden rule! The hidden word MUST cross the gap between two words.',
            explanation: 'In 11+ hidden word questions, the word MUST span across two words. "ROAR" is just a standalone word in the sentence, which violates the test rule.',
            pictorialClue: '⚠️ Boundary Rule Trap: Words contained entirely in one word are invalid in 11+ exams!'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: 'Find the 4-letter word hidden across two adjacent words: "Cold win<strong>d art</strong>fully whistled through the pines."',
            options: ['WIND', 'DART', 'FULL', 'COLD'],
            correct: 1,
            hint: 'win[D] + [A R T]fully = DART.',
            explanation: 'win[D] + [A R T]fully = D + ART = DART.',
            pictorialClue: '🎯 Bridge: win[D] + [A R T]fully ➔ DART.'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: 'Find the 4-letter word hidden across: "The chef made su<strong>ch e f</strong>resh loaf of sourdough."',
            options: ['CHEF', 'LOAF', 'SOUR', 'FRESH'],
            correct: 0,
            hint: 'Look at: su[C H] + [E F]resh.',
            explanation: 'su[C H] + [E F]resh = C H + E F = CHEF.',
            pictorialClue: '🏆 Cross-Boundary Word: su[C H] + [E F]resh ➔ CHEF.'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "Find the 4-letter hidden colour word: \"She took a sip in kitchen after running.\"",
            options: ["PINK","TOOK","AFTER","SIFT"],
            correct: 0,
            hint: "Look at the join between \"siP\" and \"IN Kitchen\": si[P IN K]itchen.",
            explanation: "\"siP IN Kitchen\" contains the word PINK spanning across words 4 and 5.",
            pictorialClue: "🔍 Word Bridge: si[P IN K]itchen ➔ PINK."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "Find the 4-letter hidden animal word: \"Please put the big oatmeal bowl on the table.\"",
            options: ["GOAT","MEAL","BOWL","PUTT"],
            correct: 0,
            hint: "Look between 'biG' and 'OATmeal': bi[G OAT].",
            explanation: "biG OATmeal contains the 4-letter animal GOAT.",
            pictorialClue: "🐐 Hidden Span: bi[G OAT]meal ➔ GOAT."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "Find the 4-letter hidden furniture word: \"The fierce wind eskimos faced was biting cold.\"",
            options: ["DESK","WIND","COLD","FACE"],
            correct: 0,
            hint: "Look across the boundary of 'winD' and 'ESKimos': win[D ESK]imos.",
            explanation: "win[D ESK]imos contains the 4-letter word DESK.",
            pictorialClue: "🪑 Span: win[D ESK]imos ➔ DESK."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "Find the 4-letter hidden bird word: \"The crowd overheard the loud announcement.\"",
            options: ["DOVE","CROW","LOUD","HEAR"],
            correct: 0,
            hint: "Look across 'crowD' and 'OVERheard': crow[D OVE]rheard.",
            explanation: "crow[D OVE]rheard contains the 4-letter bird DOVE.",
            pictorialClue: "🕊️ Hidden Bird: crow[D OVE]rheard ➔ DOVE."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "Find the 4-letter hidden fruit word: \"The sharp lumber axe was kept in the shed.\"",
            options: ["PLUM","SHARP","AXE","SHED"],
            correct: 0,
            hint: "Look across 'sharP' and 'LUMber': shar[P LUM]ber.",
            explanation: "shar[P LUM]ber contains the 4-letter fruit PLUM.",
            pictorialClue: "🏆 Fruit Span: shar[P LUM]ber ➔ PLUM."
          }
        ]
      },
      {
        id: 'vr-cipher-jump',
        title: 'Letter Sequences & Alphabet Jump Ciphers',
        category: 'Verbal Reasoning',
        examFrequency: 'Very High (GL, CEM, CSSE)',
        difficulty: 'Intermediate',
        rule: 'Write the alphabet with position numbers (A=1, B=2 ... Z=26). Calculate the numerical jump between consecutive letters (+2, +3, alternating, or wrapping past Z to A).',
        trap: 'Kids forget that the alphabet wraps around: Z (+2) goes to B! (26 + 2 = 28 -> 28 - 26 = 2 = B).',
        question: 'What is the next letter in the sequence: B, E, H, K, ?',
        visualType: 'cipher-wheel',
        steps: [
          {
            title: 'Step 1: Convert Letters to Numerical Positions',
            detail: 'B = 2, E = 5, H = 8, K = 11.'
          },
          {
            title: 'Step 2: Determine the Common Difference (Jump)',
            detail: '5 - 2 = +3; 8 - 5 = +3; 11 - 8 = +3. The constant jump is <strong>+3</strong>.'
          },
          {
            title: 'Step 3: Calculate the Next Letter',
            detail: '11 + 3 = 14. The 14th letter of the alphabet is <strong>N</strong>.'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: 'What is the next letter in the sequence: C, F, I, L, ?',
            options: ['M', 'N', 'O', 'P'],
            correct: 2,
            hint: 'Count the jumps: C(3) + 3 = F(6) + 3 = I(9) + 3 = L(12) + 3 = ?',
            explanation: 'Each jump is +3. L (12) + 3 = 15 = O.',
            pictorialClue: '🔢 Number Track: 3 ➔ 6 ➔ 9 ➔ 12 ➔ 15 (O).'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: 'If the word FROG is coded as ITRI (+3 on each letter), what is the code for the word BARK?',
            options: ['EDUN', 'EDVN', 'ECUN', 'DDUM'],
            correct: 0,
            hint: 'Add 3 to each letter: B(+3)=E, A(+3)=D, R(+3)=U, K(+3)=N.',
            explanation: 'B(2)+3=5(E), A(1)+3=4(D), R(18)+3=21(U), K(11)+3=14(N) ➔ EDUN.',
            pictorialClue: '🔤 Caesar Cipher: BARK (+3) ➔ EDUN.'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'What is the next letter in this sequence: X, Z, B, D, ?',
            options: ['E', 'F', 'G', 'H'],
            correct: 1,
            hint: 'Remember the alphabet wraps around! X(24) ➔ Z(26) ➔ B(2) ➔ D(4) ➔ ?',
            explanation: 'Jumps are +2: 24 ➔ 26 ➔ (wrap to 2) ➔ 4 ➔ 4 + 2 = 6 = F.',
            pictorialClue: '⚠️ Alphabet Wrap Trap: Z(26) + 2 wraps past 26 to B(2).'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: 'Find the two missing letters in this dual-interleaved sequence: A, Z, C, X, E, V, ?, ?',
            options: ['G, T', 'F, T', 'G, U', 'F, U'],
            correct: 0,
            hint: 'Split into two alternating sequences: Track 1 (A, C, E, ?) and Track 2 (Z, X, V, ?).',
            explanation: 'Track 1: A, C, E ➔ +2 jump gives G. Track 2: Z, X, V ➔ -2 jump gives T. Missing pair = G, T.',
            pictorialClue: '🛤️ Dual Interleaved Tracks: Track 1 (+2) = G; Track 2 (-2) = T.'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: 'A cipher uses a decreasing jump: Letter 1 is +1, Letter 2 is +2, Letter 3 is +3, Letter 4 is +4. If the encoded word is "C F I M", what was the ORIGINAL word before encoding?',
            options: ['B D F I', 'B D F H', 'A C E G', 'B C D E'],
            correct: 0,
            hint: 'Work backwards! C(-1) = B, F(-2) = D, I(-3) = F, M(-4) = I.',
            explanation: 'C(3)-1=B(2); F(6)-2=D(4); I(9)-3=F(6); M(13)-4=I(9). Original word = BDFI.',
            pictorialClue: '🏆 Reverse Variable Jump: C(-1)=B, F(-2)=D, I(-3)=F, M(-4)=I.'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "Find the next letter in the alphabet sequence: B, E, H, K, N, ?",
            options: ["P","Q","R","S"],
            correct: 1,
            hint: "Count the jump: B(+3) ➔ E(+3) ➔ H(+3) ➔ K(+3) ➔ N(+3). N is 14; 14 + 3 = 17.",
            explanation: "Rule is +3 alphabet letters: N (14) + 3 = Q (17).",
            pictorialClue: "🔤 Alphabet Jump: B (+3) E (+3) H (+3) K (+3) N (+3) Q."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "Find the next letter in the backward sequence: Z, X, V, T, R, ?",
            options: ["O","P","Q","N"],
            correct: 1,
            hint: "Reverse alphabet jump: -2 each time. R is 18; 18 - 2 = 16.",
            explanation: "Rule is -2 backwards: R (18) - 2 = P (16).",
            pictorialClue: "⏪ Countdown: Z (-2) X (-2) V (-2) T (-2) R (-2) P."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "If CAT is coded as FDW (+3), how is DOG coded using the same rule?",
            options: ["GRJ","GPH","HQJ","FPI"],
            correct: 0,
            hint: "Apply +3 to each letter: D(+3)=G, O(+3)=R, G(+3)=J.",
            explanation: "D(4)+3=G(7), O(15)+3=R(18), G(7)+3=J(10) ➔ GRJ.",
            pictorialClue: "🔐 Shift Cipher: D➔G, O➔R, G➔J = GRJ."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "Find the missing term in the sequence: AZ, BY, CX, DW, ?",
            options: ["EV","FU","EU","EW"],
            correct: 0,
            hint: "1st letter goes A, B, C, D (+1). 2nd letter goes Z, Y, X, W (-1).",
            explanation: "1st letter is E; 2nd letter is V (26 - 4 = 22 = V) ➔ EV.",
            pictorialClue: "↔️ Dual Rail: Forward [A,B,C,D,E] + Backward [Z,Y,X,W,V] = EV."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "In a secret code, LIGHT is coded as KHFGS (-1). What original word decodes from the coded word 'ANNJ'?",
            options: ["BOOK","COOK","LOOK","HOOK"],
            correct: 0,
            hint: "Reverse the -1 shift by adding +1: A+1=B, N+1=O, N+1=O, J+1=K.",
            explanation: "Reverse the -1 shift by adding +1: A+1=B, N+1=O, N+1=O, J+1=K ➔ BOOK!",
            pictorialClue: "🏆 Decode Reversal: A➔B, N➔O, N➔O, J➔K = BOOK."
          }
        ]
      },
      {
        id: 'vr-opposite-pairs',
        title: 'Opposite Pairs: Sentiment Polarity Mapping',
        category: 'Verbal Reasoning',
        examFrequency: 'High (All VR Tests)',
        difficulty: 'Foundation',
        rule: 'To find opposites, determine the exact semantic dimension (Temperature, Emotion, Activity, Certainty) and map polar opposites along a scale (-5 to +5).',
        trap: 'Picking words that are merely different rather than direct opposite antonyms (e.g. thinking "sad" is the opposite of "excited" rather than "depressed" vs "ecstatic")!',
        question: 'Which word is the most direct antonym (opposite) of AFFLUENT?',
        visualType: 'polarity-scale',
        steps: [
          {
            title: 'Step 1: Define the Root Meaning',
            detail: 'AFFLUENT means possessing great material wealth, riches, or financial abundance (+5 on Wealth Scale).'
          },
          {
            title: 'Step 2: Search for the Polar Extreme (-5)',
            detail: 'Look for the word meaning having zero money or extreme poverty: <strong>DESTITUTE</strong>.'
          },
          {
            title: 'Step 3: Reject Distractors',
            detail: 'Modest and Frugal relate to spending habits, not total absence of wealth.'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: 'Which word is the exact opposite of GIGANTIC?',
            options: ['Large', 'Minuscule', 'Wide', 'Heavy'],
            correct: 1,
            hint: 'Gigantic means extremely huge; look for the extreme small end of the scale.',
            explanation: 'Gigantic represents immense size; Minuscule represents extremely tiny size.',
            pictorialClue: '📏 Size Scale: Gigantic (+5) ⟷ Minuscule (-5).'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: 'Find the two words that are most OPPOSITE in meaning: [TRANQUIL, BOISTEROUS, SILENT, CAUTIOUS]',
            options: [
              'TRANQUIL and SILENT',
              'TRANQUIL and BOISTEROUS',
              'BOISTEROUS and CAUTIOUS',
              'SILENT and CAUTIOUS'
            ],
            correct: 1,
            hint: 'Tranquil = calm and peaceful (+5). Boisterous = noisy, wild, and rowdy (-5).',
            explanation: 'Tranquil (calm and serene) and Boisterous (wild and noisy) are direct antonyms.',
            pictorialClue: '⚖️ Noise & Energy: Tranquil (serene) ⟷ Boisterous (rowdy).'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'A student chooses "SAD" as the opposite of "ECSTATIC". Why is "DESPONDENT" a much better 11+ match than "SAD"?',
            options: [
              'DESPONDENT is spelled with more letters',
              'ECSTATIC represents extreme jubilation (+5), so its true opposite must be extreme despair (-5)',
              'SAD is a noun',
              'DESPONDENT means angry'
            ],
            correct: 1,
            hint: 'Match the intensity! Ecstatic is extreme; sad is mild.',
            explanation: '11+ tests reward matching semantic intensity: Ecstatic (+5 joy) requires Despondent / Despairing (-5 despair), not merely "sad" (-1).',
            pictorialClue: '⚠️ Intensity Level Trap: Always match the intensity level (+5 needs -5).'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: 'Choose one word from Group 1 and one from Group 2 that are most OPPOSITE: Group 1 [CONCEAL, HASTEN, DIVERGE] Group 2 [EXPOSE, RETREAT, ACCELERATE]',
            options: [
              'CONCEAL and EXPOSE',
              'HASTEN and ACCELERATE',
              'DIVERGE and RETREAT',
              'CONCEAL and RETREAT'
            ],
            correct: 0,
            hint: 'Conceal means to hide; Expose means to reveal or uncover.',
            explanation: 'Conceal (to hide) is the direct antonym of Expose (to uncover/reveal).',
            pictorialClue: '👁️ Visibility Scale: Conceal (hide) ⟷ Expose (reveal).'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: 'Which word is the precise antonym of GREGARIOUS (sociable, thriving in company)?',
            options: ['Friendly', 'Reclusive', 'Generous', 'Talkative'],
            correct: 1,
            hint: 'Gregarious = loves social groups; Reclusive = prefers solitary isolation.',
            explanation: 'Gregarious describes someone highly social; Reclusive describes someone avoiding people and living in solitary isolation.',
            pictorialClue: '🏆 Social Spectrum: Gregarious (+5 social) ⟷ Reclusive (-5 solitary).'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "Select the pair of words that are MOST OPPOSITE in meaning:",
            options: ["arrogant and humble","brave and courageous","swift and rapid","calm and peaceful"],
            correct: 0,
            hint: "Arrogant means proud and boastful; humble means modest and unassuming.",
            explanation: "Arrogant and humble are direct antonyms.",
            pictorialClue: "⚖️ Antonym Scale: Arrogant (proud) ⇄ Humble (modest)."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "Select the antonym of OBSOLETE:",
            options: ["ancient","contemporary","fragile","tattered"],
            correct: 1,
            hint: "Obsolete means outdated or out of use; contemporary means modern and current.",
            explanation: "Obsolete = no longer used; Contemporary = modern / current.",
            pictorialClue: "⏳ Time Polarity: Obsolete (outdated) ⇄ Contemporary (modern)."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "Select the word most opposite in meaning to SPARSE:",
            options: ["scarce","dense","slender","bare"],
            correct: 1,
            hint: "Sparse means thinly scattered; dense means packed tightly together.",
            explanation: "Sparse and dense describe opposite ends of concentration.",
            pictorialClue: "🌳 Density Scale: Sparse (scattered) ⇄ Dense (crowded)."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "Select the pair of words that are antonyms:",
            options: ["thrifty and extravagant","cautious and wary","stern and severe","feeble and frail"],
            correct: 0,
            hint: "Thrifty means careful with money; extravagant means spending excessively.",
            explanation: "Thrifty and extravagant are exact antonyms in financial habit.",
            pictorialClue: "💰 Money Polarity: Thrifty (saving) ⇄ Extravagant (wasteful)."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "Select the word most opposite to LENIENT:",
            options: ["mild","tolerant","strict","gentle"],
            correct: 2,
            hint: "A lenient teacher is forgiving; a strict teacher enforces rules rigidly.",
            explanation: "Lenient means permissive and forgiving; Strict means rigorous and demanding.",
            pictorialClue: "🏆 Discipline Spectrum: Lenient (forgiving) ⇄ Strict (firm)."
          }
        ]
      },
      {
        id: 'vr-word-bridges',
        title: 'Compound Word Bridges (Word 1 + Word 2)',
        category: 'Verbal Reasoning',
        examFrequency: 'High (GL, CEM)',
        difficulty: 'Intermediate',
        rule: 'The bridge word must attach to the end of Word 1 to make a valid compound word AND attach to the beginning of Word 2 to make another valid compound word.',
        trap: 'Picking a word that only works with one of the words, or creates a phrase rather than a recognized compound word!',
        question: 'Find the single word that fits between POST [ ? ] BOARD to make two real words.',
        visualType: 'bridge-blocks',
        steps: [
          {
            title: 'Step 1: Test Candidate Suffixes for Word 1 (POST)',
            detail: 'Words that follow POST: Postman, Postbox, <strong>Postcard</strong>, Postmark.'
          },
          {
            title: 'Step 2: Test if Suffix Works as Prefix for Word 2 (BOARD)',
            detail: 'Test each with BOARD: Manboard (No), Boxboard (Rare), <strong>Cardboard</strong> (Yes!).'
          },
          {
            title: 'Step 3: Confirm the Compound Bridge',
            detail: 'The bridge word is <strong>CARD</strong> (Postcard & Cardboard).'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: 'Find the word that fits between SUN [ ? ] POT to form two compound words.',
            options: ['LIGHT', 'FLOWER', 'SHINE', 'DAY'],
            correct: 1,
            hint: 'Sun + FLOWER = Sunflower. FLOWER + Pot = Flowerpot.',
            explanation: 'Sunflower and Flowerpot are both valid compound words. Bridge = FLOWER.',
            pictorialClue: '🌻 Compound Bridge: SUN + [FLOWER] + POT.'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: 'Find the word that bridges PLAY [ ? ] FLOOR to form two compound words.',
            options: ['TIME', 'GROUND', 'ROOM', 'HOUSE'],
            correct: 1,
            hint: 'Playground & Groundfloor.',
            explanation: 'Playground and Groundfloor are both standard compound words. Bridge = GROUND.',
            pictorialClue: '⚽ Puzzle Train: PLAY + [GROUND] + FLOOR.'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'For WATER [ ? ] DROP, a student suggests "FALL". Does "FALLDROP" form a real compound word?',
            options: [
              'Yes, falldrop is a common word',
              'No, waterfall is valid but falldrop is not an English compound word',
              'Yes, in poetry only',
              'No, because water has two syllables'
            ],
            correct: 1,
            hint: 'Both sides must form genuine single compound words!',
            explanation: 'The bridge must satisfy BOTH sides. "Falldrop" is not an English word, so "FALL" is invalid.',
            pictorialClue: '⚠️ Two-Way Bridge Trap: The candidate MUST form a valid compound word with BOTH ends!'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: 'Find the bridge word for: PASS [ ? ] MASTER.',
            options: ['CODE', 'KEY', 'WORD', 'PORT'],
            correct: 2,
            hint: 'Password & Wordmaster.',
            explanation: 'Password and Wordmaster are established compound nouns. Bridge = WORD.',
            pictorialClue: '🔑 Compound Link: PASS + [WORD] + MASTER.'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: 'Find the bridge word for: LIFE [ ? ] MASTER.',
            options: ['GUARD', 'BOAT', 'TIME', 'LINE'],
            correct: 1,
            hint: 'Lifeboat & Boatmaster.',
            explanation: 'Lifeboat and Boatmaster (certified ship commander) are both compound words. Bridge = BOAT.',
            pictorialClue: '🏆 Nautical Compound: LIFE + [BOAT] + MASTER.'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "Choose ONE word from Set A [butter, water, rain] and ONE word from Set B [melon, cup, coat] to form a single compound word:",
            options: ["watermelon","buttercoat","raincup","watercup"],
            correct: 0,
            hint: "'water' + 'melon' = 'watermelon'.",
            explanation: "Water and melon form the recognized single compound noun watermelon.",
            pictorialClue: "🍉 Compound Lock: Water + Melon = Watermelon."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "Which word from [ear, tooth, finger] combines with a word from [ring, paste, print] to form a daily hygiene item?",
            options: ["toothpaste","earprint","fingerpaste","toothring"],
            correct: 0,
            hint: "Tooth + Paste = Toothpaste.",
            explanation: "Tooth and paste combine into the compound noun toothpaste.",
            pictorialClue: "🪥 Compound: Tooth + Paste = Toothpaste."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "Combine one word from [scare, rain, sand] and one from [crow, bow, castle] to make a bird-scaring garden figure:",
            options: ["scarecrow","scarebow","sandcrow","raincastle"],
            correct: 0,
            hint: "Scare + Crow = Scarecrow.",
            explanation: "Scare + Crow = Scarecrow.",
            pictorialClue: "🌾 Compound: Scare + Crow = Scarecrow."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "Which compound word combines a word from [life, book, pan] and [guard, worm, cake] to name a poolside rescuer?",
            options: ["lifeguard","bookguard","panguard","lifecake"],
            correct: 0,
            hint: "Life + Guard = Lifeguard.",
            explanation: "Life + Guard = Lifeguard.",
            pictorialClue: "🏊 Compound: Life + Guard = Lifeguard."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "Select the compound noun formed by combining [candle, butter, moon] and [stick, fly, light] that holds a flame taper:",
            options: ["candlestick","butterstick","moonstick","candlemelt"],
            correct: 0,
            hint: "Candle + Stick = Candlestick.",
            explanation: "Candle + stick forms candlestick.",
            pictorialClue: "🏆 Compound: Candle + Stick = Candlestick."
          }
        ]
      },
      {
        id: 'vr-shuffled-sentences',
        title: 'Shuffled Sentences: Verb-Subject Anchor',
        category: 'Verbal Reasoning',
        examFrequency: 'High (CEM, Buckinghamshire)',
        difficulty: 'Intermediate',
        rule: 'In shuffled sentences, anchor the main finite VERB first, then identify the SUBJECT. Form a coherent sentence and identify the single rogue word that cannot be used.',
        trap: 'Kids try reading left-to-right without identifying the grammatical spine (Subject + Verb + Object)!',
        question: 'Reorder the words to make a sentence and find the extra unused word: "barked loudly dog the brown over"',
        visualType: 'verb-anchor',
        steps: [
          {
            title: 'Step 1: Anchor the Main Action Verb',
            detail: 'The finite verb in the list is <strong>barked</strong>.'
          },
          {
            title: 'Step 2: Find Who or What Did the Action (Subject)',
            detail: 'Who barked? "the brown dog". Add adverb: "barked loudly".'
          },
          {
            title: 'Step 3: Identify the Rogue Extra Word',
            detail: 'Sentence formed: "The brown dog barked loudly." Unused extra word = <strong>over</strong>.'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: 'Which word is the extra unused word: "shone brightly night the moon at always"?',
            options: ['brightly', 'always', 'night', 'moon'],
            correct: 1,
            hint: 'Sentence: "The moon shone brightly at night." Extra word = always.',
            explanation: '"The moon shone brightly at night." The word "always" is extra.',
            pictorialClue: '🌙 Sentence Rail: [The moon] [shone] [brightly] [at night] + Rogue: [always].'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: 'Which word is the extra unused word: "whistled bitterly icy wind winter the through"?',
            options: ['winter', 'icy', 'bitterly', 'through'],
            correct: 0,
            hint: 'Sentence: "The icy wind whistled bitterly through." Extra word = winter.',
            explanation: '"The icy wind whistled bitterly through." The extra word is "winter".',
            pictorialClue: '🌬️ Grammar Anchor: [The icy wind] [whistled] [bitterly] [through] + Rogue: [winter].'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'In "galloped horse across field the fast green", which word is the extra unused word?',
            options: ['fast', 'green', 'across', 'field'],
            correct: 1,
            hint: '"The horse galloped fast across field" or "The horse galloped across the green field"? Check article "the" count: only one "the"!',
            explanation: 'With only one "the", the sentence is "The horse galloped fast across field" or "The horse galloped across green field". The extra word is "fast" or "green"? "The horse galloped across the green field" needs 2 "the"s. Here "green" is rogue.',
            pictorialClue: '⚠️ Determiner Constraint: Count articles carefully to determine rogue adjective.'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: 'Which word is the extra unused word: "delicate spun spider web a garden its"?',
            options: ['garden', 'delicate', 'its', 'spun'],
            correct: 0,
            hint: 'Sentence: "A spider spun its delicate web." Extra word = garden.',
            explanation: '"A spider spun its delicate web." The extra rogue word is "garden".',
            pictorialClue: '🕸️ Verb-Subject Spindle: [A spider] [spun] [its delicate web] + Rogue: [garden].'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: 'Which word is the extra unused word: "shadows cast towering oak ancient long the"?',
            options: ['towering', 'ancient', 'long', 'shadows'],
            correct: 1,
            hint: 'Sentence: "The towering oak cast long shadows." Extra word = ancient.',
            explanation: '"The towering oak cast long shadows." The rogue word is "ancient".',
            pictorialClue: '🏆 Classical Anchor: [The towering oak] [cast] [long shadows] + Rogue: [ancient].'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "Identify the UNUSED word when these words are arranged into a proper sentence: [green / the / grass / grows / quickly / blue]",
            options: ["blue","green","grass","quickly"],
            correct: 0,
            hint: "Form the 5-word sentence: \"The green grass grows quickly.\" The extra colour word is left over.",
            explanation: "The sentence is \"The green grass grows quickly.\" The word 'blue' is unused.",
            pictorialClue: "🌱 Sentence Skeleton: [The green grass grows quickly] + [blue ❌]."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "Find the odd word out that cannot be used in the sentence: [flew / high / kite / the / sky / in / swam / the]",
            options: ["swam","flew","high","kite"],
            correct: 0,
            hint: "Identify the main subject 'kite' and matching verb 'flew'. 'Swam' has no matching subject.",
            explanation: "Sentence is \"The kite flew high in the sky.\" 'Swam' is unused.",
            pictorialClue: "🪁 Verb Anchor: Kites fly, they do not swim."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "Find the unused word: [bakes / fresh / morning / bread / every / baker / the / sings]",
            options: ["sings","bakes","fresh","baker"],
            correct: 0,
            hint: "Subject: The baker. Verb: bakes. Object: fresh bread. Extra verb: sings.",
            explanation: "\"The baker bakes fresh bread every morning.\" The extraneous verb is 'sings'.",
            pictorialClue: "🍞 Subject-Verb-Object: Baker bakes bread; sings is redundant."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "Find the unused word: [library / quiet / was / the / very / yesterday / noisy]",
            options: ["noisy","quiet","very","library"],
            correct: 0,
            hint: "'Quiet' and 'noisy' are opposite adjectives; only one fits the true sense.",
            explanation: "\"The library was very quiet yesterday.\" 'Noisy' is the leftover antonym.",
            pictorialClue: "🤫 Adjective Clash: Quiet vs Noisy."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "Find the unused word: [ancient / castle / stood / hill / the / steep / upon / river / a]",
            options: ["river","castle","steep","stood"],
            correct: 0,
            hint: "Prepositional phrase: \"upon a steep hill\". 'River' has no preposition or article left.",
            explanation: "\"The ancient castle stood upon a steep hill.\" 'River' is left out.",
            pictorialClue: "🏆 Prepositional Anchor: Castle stood upon hill; river is surplus."
          }
        ]
      }
,
      {
      "id": "vr-anagram-solver",
      "title": "Word Anagrams & Scrambled Synonyms (Prefix/Suffix Isolator)",
      "category": "Verbal Reasoning",
      "examFrequency": "High (GL Assessment, Kent, CSSE)",
      "difficulty": "Intermediate",
      "rule": "Count vowels and consonants first! Identify common prefixes (UN-, RE-, DIS-) or suffixes (-ING, -TION, -ED) to narrow down the scrambled root word.",
      "trap": "DO NOT guess random letter combinations! Separate vowels (A, E, I, O, U) into a separate row to identify syllable structure.",
      "question": "Unscramble the letters to find a word meaning \"VALUABLE OR EXPENSIVE\": C O P E S U I R",
      "visualType": "vr-letter-dial",
      "steps": [
            {
                  "title": "Step 1: Inventory vowels and consonants",
                  "detail": "Vowels: O, E, U, I (4). Consonants: C, P, S, R (4)."
            },
            {
                  "title": "Step 2: Recognize common English suffix",
                  "detail": "The suffix <strong>-IOUS</strong> accounts for I, O, U, S."
            },
            {
                  "title": "Step 3: Form the root from remaining letters",
                  "detail": "P, R, E, C + IOUS = <strong>PRECIOUS</strong>."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "Unscramble these letters to find a farm animal: H R S O E",
                  "options": [
                        "SHORE",
                        "HORSE",
                        "HEROS",
                        "HOSER"
                  ],
                  "correct": 1,
                  "hint": "H, O, R, S, E spells HORSE.",
                  "explanation": "HORSE is a farm animal.",
                  "pictorialClue": "🔤 Farm animal: HORSE."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "Unscramble to find a colour: L E P R P U",
                  "options": [
                        "PULLER",
                        "PURPLE",
                        "PLUMER",
                        "PULPER"
                  ],
                  "correct": 1,
                  "hint": "P, U, R, P, L, E spells PURPLE.",
                  "explanation": "PURPLE is a colour.",
                  "pictorialClue": "🔤 Colour: PURPLE."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "Which word is an exact anagram of \"LISTEN\"?",
                  "options": [
                        "SILENT",
                        "TINSEL",
                        "ENLIST",
                        "ALL OF THESE"
                  ],
                  "correct": 3,
                  "hint": "LISTEN, SILENT, TINSEL, and ENLIST all use L, I, S, T, E, N!",
                  "explanation": "All three options are valid anagrams.",
                  "pictorialClue": "⚠️ Multiple Anagrams: ALL OF THESE."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "Unscramble to find a word meaning \"COURAGEOUS\": T L N A A L V I",
                  "options": [
                        "VALIANT",
                        "VILLAIN",
                        "VIGILANT",
                        "VOLATILE"
                  ],
                  "correct": 0,
                  "hint": "V, A, L, I, A, N, T spells VALIANT.",
                  "explanation": "VALIANT means courageous.",
                  "pictorialClue": "🔤 Courageous: VALIANT."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "Unscramble to find a word meaning \"ENORMOUS\": C G I A N I T",
                  "options": [
                        "GIGANTIC",
                        "GENETIC",
                        "GALACTIC",
                        "DYNAMIC"
                  ],
                  "correct": 0,
                  "hint": "G, I, G, A, N, T, I, C spells GIGANTIC.",
                  "explanation": "GIGANTIC means enormous.",
                  "pictorialClue": "🔤 Enormous: GIGANTIC."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "Rearrange the letters of \"DORMITORY\" to form a two-word phrase:",
                  "options": [
                        "DIRTY ROOM",
                        "DOOR TO RIM",
                        "DIRTY MOOR",
                        "MIRY ODOUR"
                  ],
                  "correct": 0,
                  "hint": "D-O-R-M-I-T-O-R-Y anagrams to DIRTY ROOM.",
                  "explanation": "DORMITORY = DIRTY ROOM.",
                  "pictorialClue": "🔤 Two-word anagram: DIRTY ROOM."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "Unscramble to find a science discipline: S Y P C I H S",
                  "options": [
                        "PSYCHIC",
                        "PHYSICS",
                        "PHONICS",
                        "PHYSICAL"
                  ],
                  "correct": 1,
                  "hint": "P, H, Y, S, I, C, S spells PHYSICS.",
                  "explanation": "PHYSICS is a science discipline.",
                  "pictorialClue": "🔤 Science: PHYSICS."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "Which 7-letter word contains ALL 5 English vowels (A, E, I, O, U)?",
                  "options": [
                        "SEQUOIA",
                        "EULOGIA",
                        "MIAOUED",
                        "ALL OF THESE"
                  ],
                  "correct": 3,
                  "hint": "SEQUOIA, EULOGIA, and MIAOUED all contain all 5 vowels.",
                  "explanation": "All three words contain A, E, I, O, U.",
                  "pictorialClue": "🏆 Vowel pangram: ALL OF THESE."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "Unscramble to find an emotion meaning \"SORROWFUL\": L H N Y C O E A M",
                  "options": [
                        "MELANCHOLY",
                        "MONOPOLY",
                        "MELODIOUS",
                        "HARMONY"
                  ],
                  "correct": 0,
                  "hint": "M-E-L-A-N-C-H-O-L-Y spells MELANCHOLY.",
                  "explanation": "MELANCHOLY means sorrowful.",
                  "pictorialClue": "🔤 Sorrowful: MELANCHOLY."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "An anagram of \"THE EYES\" describes what they do:",
                  "options": [
                        "THEY SEE",
                        "SEE THEY",
                        "EYES THE",
                        "EYE SHOT"
                  ],
                  "correct": 0,
                  "hint": "T-H-E-E-Y-E-S anagrams to THEY SEE.",
                  "explanation": "THE EYES anagrams to THEY SEE.",
                  "pictorialClue": "🏆 Classic Anagram: THEY SEE."
            }
      ]
},
      {
      "id": "vr-number-brackets",
      "title": "Number Codes & Complete the Third Bracket (Pattern Formula)",
      "category": "Verbal Reasoning",
      "examFrequency": "Very High (GL Assessment, Buckinghamshire, Kent)",
      "difficulty": "Intermediate",
      "rule": "The middle number inside the brackets is ALWAYS formed by applying an identical arithmetic formula to the two outside numbers: Middle = f(Left, Right).",
      "trap": "DO NOT settle on a formula until you have tested it on BOTH the 1st AND 2nd example! A rule that works for Bracket 1 must also work for Bracket 2.",
      "question": "Find the missing number in the third bracket: 4 [24] 6 | 7 [35] 5 | 8 [ ? ] 9",
      "visualType": "vr-letter-dial",
      "steps": [
            {
                  "title": "Step 1: Test operations on Bracket 1",
                  "detail": "4 and 6 produce 24: 4 × 6 = <strong>24</strong>."
            },
            {
                  "title": "Step 2: Confirm formula on Bracket 2",
                  "detail": "7 × 5 = <strong>35</strong>. The formula is confirmed: <strong>Left × Right</strong>."
            },
            {
                  "title": "Step 3: Apply rule to Bracket 3",
                  "detail": "8 × 9 = <strong>72</strong>."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "Find the missing number: 3 [12] 4 | 5 [30] 6 | 7 [ ? ] 8",
                  "options": [
                        "48",
                        "54",
                        "56",
                        "64"
                  ],
                  "correct": 2,
                  "hint": "Left × Right: 7 × 8 = 56.",
                  "explanation": "Formula: Left × Right = 56.",
                  "pictorialClue": "🔢 7 × 8 = 56."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "Find the missing number: 8 [14] 6 | 9 [16] 7 | 12 [ ? ] 5",
                  "options": [
                        "15",
                        "17",
                        "18",
                        "20"
                  ],
                  "correct": 1,
                  "hint": "Left + Right: 12 + 5 = 17.",
                  "explanation": "Formula: Left + Right = 17.",
                  "pictorialClue": "🔢 12 + 5 = 17."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "Find the missing number: 10 [4] 2 | 15 [5] 3 | 24 [ ? ] 4",
                  "options": [
                        "4",
                        "6",
                        "8",
                        "10"
                  ],
                  "correct": 1,
                  "hint": "Left ÷ Right: 24 ÷ 4 = 6.",
                  "explanation": "Formula: Left ÷ Right = 6.",
                  "pictorialClue": "🔢 24 ÷ 4 = 6."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "Find the missing number: 4 [14] 3 | 5 [17] 3 | 6 [ ? ] 4",
                  "options": [
                        "22",
                        "24",
                        "26",
                        "28"
                  ],
                  "correct": 0,
                  "hint": "Formula is (Left × 3) + 2: (4*3)+2 = 14; (5*3)+2 = 17. For 6: (6*3)+4 = 22.",
                  "explanation": "Formula: (Left × 3) + Right = (6 × 3) + 4 = 22.",
                  "pictorialClue": "🔢 (Left × 3) + Right = 22."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "Find the missing number: 6 [20] 4 | 8 [28] 6 | 10 [ ? ] 5",
                  "options": [
                        "25",
                        "30",
                        "35",
                        "40"
                  ],
                  "correct": 0,
                  "hint": "Formula is (Left + Right) × 2: (6+4)*2 = 20; (8+6)*2 = 28. (10+5)*2 = 30 (or Left*Right - 4: 10*5-25=25). If (Left+Right)*2 = 30.",
                  "explanation": "Formula: (Left + Right) × 2 = (10 + 5) × 2 = 30 (Option: 30).",
                  "pictorialClue": "🔢 (10 + 5) × 2 = 30."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "Find the missing number: 5 [24] 1 | 7 [48] 1 | 6 [ ? ] 2",
                  "options": [
                        "32",
                        "34",
                        "36",
                        "38"
                  ],
                  "correct": 0,
                  "hint": "Formula is Left² - Right²: 5² - 1² = 24; 7² - 1² = 48. 6² - 2² = 36 - 4 = 32.",
                  "explanation": "Formula: Left² - Right² = 36 - 4 = 32.",
                  "pictorialClue": "🔢 Left² - Right² = 32."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "Find the missing number: 12 [10] 8 | 15 [11] 7 | 20 [ ? ] 6",
                  "options": [
                        "12",
                        "13",
                        "14",
                        "15"
                  ],
                  "correct": 1,
                  "hint": "Formula is (Left + Right) ÷ 2: (12+8)/2 = 10; (15+7)/2 = 11. (20+6)/2 = 13.",
                  "explanation": "Average: (20 + 6) ÷ 2 = 13.",
                  "pictorialClue": "🔢 Average: 13."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "Find the missing number: 3 [19] 2 | 4 [33] 3 | 5 [ ? ] 4",
                  "options": [
                        "45",
                        "49",
                        "51",
                        "53"
                  ],
                  "correct": 2,
                  "hint": "Formula is 2 × Left² + 1: 2(9)+1 = 19; 2(16)+1 = 33. For 5: 2(25)+1 = 51.",
                  "explanation": "Formula: 2(Left²) + 1 = 2(25) + 1 = 51.",
                  "pictorialClue": "🏆 Formula: 2(Left²) + 1 = 51."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "Find the missing number: 7 [40] 3 | 9 [60] 3 | 8 [ ? ] 4",
                  "options": [
                        "44",
                        "48",
                        "52",
                        "56"
                  ],
                  "correct": 1,
                  "hint": "Formula is (Left - Right) × 10: (7-3)*10 = 40; (9-3)*10 = 60. (8-4)*10 = 40 (or (Left × Right) + 19: 8*4+16=48). If (Left + Right) * 4 = 48.",
                  "explanation": "Formula: (8 + 4) × 4 = 48.",
                  "pictorialClue": "🔢 Pattern matching: 48."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "Find the missing number: 2 [9] 5 | 3 [28] 9 | 4 [ ? ] 17",
                  "options": [
                        "65",
                        "67",
                        "69",
                        "71"
                  ],
                  "correct": 0,
                  "hint": "Formula is Left³ + 1: 2³ + 1 = 9; 3³ + 1 = 28. 4³ + 1 = 64 + 1 = 65. (Right is just a distractor or Left² + 1). 65.",
                  "explanation": "Formula: Left³ + 1 = 64 + 1 = 65.",
                  "pictorialClue": "🏆 Cube + 1: 65."
            }
      ]
},
      {
      "id": "vr-letter-analogies",
      "title": "Letter-Code Analogies (Pair Transformation Matrix)",
      "category": "Verbal Reasoning",
      "examFrequency": "High (CEM, GL, CSSE)",
      "difficulty": "Intermediate",
      "rule": "Treat each letter position independently! Calculate the forward (+) or backward (-) jump from Letter 1 to Letter 2 in the alphabet.",
      "trap": "DO NOT forget that the alphabet wraps around! Z + 1 = A, and A - 1 = Z.",
      "question": "AB is to CD as EF is to ?",
      "visualType": "vr-letter-dial",
      "steps": [
            {
                  "title": "Step 1: Calculate shifts for letter 1",
                  "detail": "A (1) ➔ C (3) is <strong>+2</strong>."
            },
            {
                  "title": "Step 2: Calculate shifts for letter 2",
                  "detail": "B (2) ➔ D (4) is <strong>+2</strong>."
            },
            {
                  "title": "Step 3: Apply to target pair EF",
                  "detail": "E (5) + 2 = G (7); F (6) + 2 = H (8) ➔ <strong>GH</strong>."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "AZ is to BY as CX is to ?",
                  "options": [
                        "DW",
                        "DV",
                        "EW",
                        "EV"
                  ],
                  "correct": 0,
                  "hint": "1st letter +1: C ➔ D. 2nd letter -1: X ➔ W ➔ DW.",
                  "explanation": "C+1=D, X-1=W ➔ DW.",
                  "pictorialClue": "🔤 +1, -1: DW."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "CAT is to DBU as DOG is to ?",
                  "options": [
                        "EPH",
                        "EQH",
                        "EOF",
                        "EPI"
                  ],
                  "correct": 0,
                  "hint": "Each letter shifts +1: D➔E, O➔P, G➔H ➔ EPH.",
                  "explanation": "All letters +1 ➔ EPH.",
                  "pictorialClue": "🔤 +1 Shift: EPH."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "KN is to MP as RU is to ?",
                  "options": [
                        "TW",
                        "TX",
                        "UW",
                        "TV"
                  ],
                  "correct": 0,
                  "hint": "K(11)+2=M(13); N(14)+2=P(16). R(18)+2=T(20); U(21)+2=W(23) ➔ TW.",
                  "explanation": "+2 to each letter: R➔T, U➔W ➔ TW.",
                  "pictorialClue": "🔤 +2 Shift: TW."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "COLD is to HOT as FAST is to ?",
                  "options": [
                        "SLOW",
                        "QUICK",
                        "STOP",
                        "RAPID"
                  ],
                  "correct": 0,
                  "hint": "Semantic analogy of opposites: FAST is to SLOW.",
                  "explanation": "Opposite pairs analogy: SLOW.",
                  "pictorialClue": "🔤 Opposites: SLOW."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "BAT is to TAB as NET is to ?",
                  "options": [
                        "TEN",
                        "TIN",
                        "NOT",
                        "TON"
                  ],
                  "correct": 0,
                  "hint": "Reverse the letters: N-E-T becomes T-E-N.",
                  "explanation": "Reversal: NET ➔ TEN.",
                  "pictorialClue": "🔤 Letter reversal: TEN."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "ZA is to YB as XC is to ?",
                  "options": [
                        "WD",
                        "WE",
                        "VD",
                        "VE"
                  ],
                  "correct": 0,
                  "hint": "1st letter -1: X ➔ W. 2nd letter +1: C ➔ D ➔ WD.",
                  "explanation": "X-1=W, C+1=D ➔ WD.",
                  "pictorialClue": "🔤 -1, +1: WD."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "TREE is to LEAF as BIRD is to ?",
                  "options": [
                        "NEST",
                        "FEATHER",
                        "WING",
                        "BEAK"
                  ],
                  "correct": 1,
                  "hint": "Part-to-whole outer covering/component: TREE has LEAF, BIRD has FEATHER.",
                  "explanation": "Analogous component: FEATHER.",
                  "pictorialClue": "🔤 Analogy: FEATHER."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "ACE is to BDF as MOQ is to ?",
                  "options": [
                        "NPR",
                        "NPS",
                        "OPR",
                        "NOR"
                  ],
                  "correct": 0,
                  "hint": "Each letter +1: M➔N, O➔P, Q➔R ➔ NPR.",
                  "explanation": "All letters +1 ➔ NPR.",
                  "pictorialClue": "🔤 +1 Shift: NPR."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "GARDEN is to NEDRAG as WINTER is to ?",
                  "options": [
                        "RETNIW",
                        "RETNWI",
                        "RETIWN",
                        "RETNIU"
                  ],
                  "correct": 0,
                  "hint": "Full string reversal: W-I-N-T-E-R becomes R-E-T-N-I-W.",
                  "explanation": "Exact reverse of WINTER is RETNIW.",
                  "pictorialClue": "🔤 Full reversal: RETNIW."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "Alphabet reflection: A(1) ⟷ Z(26), B(2) ⟷ Y(25). Under this reflection, what does \"HIGH\" become?",
                  "options": [
                        "SRTS",
                        "STRS",
                        "STSR",
                        "SRST"
                  ],
                  "correct": 0,
                  "hint": "H(8)➔S(19), I(9)➔R(18), G(7)➔T(20), H(8)➔S(19) ➔ SRTS.",
                  "explanation": "Reflected positions: H➔S, I➔R, G➔T, H➔S ➔ SRTS.",
                  "pictorialClue": "🏆 Atbash Cipher: SRTS."
            }
      ]
},
      {
      "id": "vr-odd-words-out",
      "title": "Semantic Categorisation & Odd Word Out (Nuanced Sub-Categories)",
      "category": "Verbal Reasoning",
      "examFrequency": "High (GL Assessment, Kent, Bexley)",
      "difficulty": "Intermediate",
      "rule": "Look beyond the superficial category! Four items may all be \"animals\", but three are herbivores while one is a carnivore, or three are mammals while one is an amphibian.",
      "trap": "DO NOT pick the word you find unfamiliar! Check the precise semantic attribute shared by the other four.",
      "question": "Find the odd word out: Sparrow, Eagle, Penguin, Hawk, Falcon",
      "visualType": "vr-letter-dial",
      "steps": [
            {
                  "title": "Step 1: Check general category",
                  "detail": "All 5 words are birds."
            },
            {
                  "title": "Step 2: Check sub-category (diet/flight)",
                  "detail": "Eagle, Hawk, Falcon are birds of prey. Sparrow and Penguin are not."
            },
            {
                  "title": "Step 3: Check locomotion/habitat",
                  "detail": "Sparrow, Eagle, Hawk, and Falcon can all <strong>fly</strong>. Penguin is a <strong>flightless bird</strong>."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "Find the odd word out: Apple, Banana, Carrot, Orange, Grape",
                  "options": [
                        "Apple",
                        "Banana",
                        "Carrot",
                        "Orange"
                  ],
                  "correct": 2,
                  "hint": "Carrot is a root vegetable; the other four are fruits.",
                  "explanation": "Carrot is a vegetable; others are fruits.",
                  "pictorialClue": "🥗 Odd one: Carrot."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "Find the odd word out: Square, Triangle, Cube, Circle, Rectangle",
                  "options": [
                        "Square",
                        "Triangle",
                        "Cube",
                        "Circle"
                  ],
                  "correct": 2,
                  "hint": "Cube is 3D; all the others are 2D flat shapes.",
                  "explanation": "Cube is 3-dimensional; others are 2-dimensional.",
                  "pictorialClue": "📐 3D vs 2D: Cube."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "Find the odd word out: Piano, Guitar, Flute, Violin, Cello",
                  "options": [
                        "Piano",
                        "Guitar",
                        "Flute",
                        "Violin"
                  ],
                  "correct": 2,
                  "hint": "Flute is a woodwind instrument; the other four all produce sound via vibrating strings.",
                  "explanation": "Flute is woodwind; others are string instruments.",
                  "pictorialClue": "🎵 Woodwind: Flute."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "Find the odd word out: London, Paris, Madrid, Sydney, Rome",
                  "options": [
                        "London",
                        "Paris",
                        "Madrid",
                        "Sydney"
                  ],
                  "correct": 3,
                  "hint": "London, Paris, Madrid, and Rome are capital cities; Canberra is Australia's capital, NOT Sydney!",
                  "explanation": "Sydney is not a capital city (Canberra is).",
                  "pictorialClue": "⚠️ Capital cities trap: Sydney."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "Find the odd word out: Gold, Silver, Iron, Bronze, Copper",
                  "options": [
                        "Gold",
                        "Silver",
                        "Bronze",
                        "Copper"
                  ],
                  "correct": 2,
                  "hint": "Bronze is an ALLOY (copper + tin); the other four are pure chemical elements.",
                  "explanation": "Bronze is an alloy; others are elemental metals.",
                  "pictorialClue": "🔬 Alloy: Bronze."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "Find the odd word out: Whale, Dolphin, Shark, Seal, Porpoise",
                  "options": [
                        "Whale",
                        "Dolphin",
                        "Shark",
                        "Seal"
                  ],
                  "correct": 2,
                  "hint": "Shark is a fish (cartilaginous); Whale, Dolphin, Seal, Porpoise are mammals.",
                  "explanation": "Shark is a fish; others are marine mammals.",
                  "pictorialClue": "🐋 Fish vs Mammal: Shark."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "Find the odd word out: Whisper, Murmur, Shout, Mumble, Mutter",
                  "options": [
                        "Whisper",
                        "Murmur",
                        "Shout",
                        "Mumble"
                  ],
                  "correct": 2,
                  "hint": "Shout is loud; the other four are quiet, hushed speech.",
                  "explanation": "Shout is loud; others describe speaking softly.",
                  "pictorialClue": "🗣️ Volume: Shout."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "Find the odd word out: Triangle, Hexagon, Octagon, Cylinder, Pentagon",
                  "options": [
                        "Triangle",
                        "Hexagon",
                        "Cylinder",
                        "Pentagon"
                  ],
                  "correct": 2,
                  "hint": "Cylinder is 3D with curved surface; others are 2D polygons.",
                  "explanation": "Cylinder is 3D; others are 2D polygons.",
                  "pictorialClue": "📐 Cylinder."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "Find the odd word out: Minute, Second, Hour, Yard, Day",
                  "options": [
                        "Minute",
                        "Second",
                        "Hour",
                        "Yard"
                  ],
                  "correct": 3,
                  "hint": "Yard is a unit of length; the others are units of time.",
                  "explanation": "Yard measures distance; others measure time.",
                  "pictorialClue": "⏱️ Yard."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "Find the odd word out: Benevolent, Generous, Magnanimous, Altruistic, Malevolent",
                  "options": [
                        "Benevolent",
                        "Generous",
                        "Magnanimous",
                        "Malevolent"
                  ],
                  "correct": 3,
                  "hint": "Malevolent means wishing evil/harm; the other four all mean kind and generous.",
                  "explanation": "Malevolent means malicious; others mean charitable/kind.",
                  "pictorialClue": "🏆 Malice vs Charity: Malevolent."
            }
      ]
},
      {
      "id": "vr-compound-formation",
      "title": "Compound Word Formation (Dual-Joiner Roots)",
      "category": "Verbal Reasoning",
      "examFrequency": "High (GL Assessment, CSSE, CEM)",
      "difficulty": "Intermediate",
      "rule": "Find a single word that completes the FIRST word and STARTS the SECOND word: [Word 1 + ?] and [? + Word 2]. Both must form valid everyday compound words.",
      "trap": "DO NOT pick words that only work with one side! Check both combinations in a dictionary.",
      "question": "Find the single word that completes both compounds: SUN [ ? ] BOARD",
      "visualType": "vr-letter-dial",
      "steps": [
            {
                  "title": "Step 1: Test candidates that pair with SUN",
                  "detail": "SUNLIGHT, SUNFLOWER, SUNSHINE, SUNSET, SURF."
            },
            {
                  "title": "Step 2: Test candidates that pair with BOARD",
                  "detail": "SKATEBOARD, SURFBOARD, CUPBOARD, SNOWBOARD."
            },
            {
                  "title": "Step 3: Find the overlapping match",
                  "detail": "SURF: SUNSURF (no) -> Wait: SKATE? SUN [ LIGHT ] ... LIGHTBOARD? Or SUN [ DAY ] ? Or WATER [ FALL ]? Look at: SURFBOARD, SNOWBOARD."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "Find the connecting word: POST [ ? ] BOX",
                  "options": [
                        "MAN",
                        "CARD",
                        "OFFICE",
                        "BAG"
                  ],
                  "correct": 1,
                  "hint": "POSTCARD and CARDBOX (or POSTMAN / MANBOX - wait, POSTCARD / CARDBOARD? POSTMAN / MAILBOX? POSTCARD + CARDBOX).",
                  "explanation": "CARD forms POSTCARD and CARDBOX.",
                  "pictorialClue": "🔤 POSTCARD / CARDBOX: CARD."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "Find the connecting word: FOOT [ ? ] ROOM",
                  "options": [
                        "BALL",
                        "STEP",
                        "BATH",
                        "PRINT"
                  ],
                  "correct": 0,
                  "hint": "FOOTBALL and BALLROOM.",
                  "explanation": "BALL forms FOOTBALL and BALLROOM.",
                  "pictorialClue": "🔤 FOOTBALL / BALLROOM: BALL."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "Find the connecting word: SUN [ ? ] BURN",
                  "options": [
                        "LIGHT",
                        "SHINE",
                        "SET",
                        "FLOWER"
                  ],
                  "correct": 0,
                  "hint": "SUNLIGHT and LIGHTBURN (or SUNSET / SUNSHINE).",
                  "explanation": "LIGHT forms SUNLIGHT.",
                  "pictorialClue": "🔤 SUNLIGHT: LIGHT."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "Find the connecting word: BUTTER [ ? ] FISH",
                  "options": [
                        "FLY",
                        "CUP",
                        "MILK",
                        "KNIFE"
                  ],
                  "correct": 0,
                  "hint": "BUTTERFLY and FLYFISH.",
                  "explanation": "FLY forms BUTTERFLY and FLYFISH.",
                  "pictorialClue": "🔤 BUTTERFLY / FLYFISH: FLY."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "Find the connecting word: WATER [ ? ] CLOTH",
                  "options": [
                        "FALL",
                        "PROOF",
                        "TIGHT",
                        "MELON"
                  ],
                  "correct": 1,
                  "hint": "WATERPROOF and PROOFCLOTH.",
                  "explanation": "PROOF forms WATERPROOF.",
                  "pictorialClue": "🔤 WATERPROOF: PROOF."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "Find the connecting word: BOOK [ ? ] WORM",
                  "options": [
                        "SHELF",
                        "CASE",
                        "MARK",
                        "SHOP"
                  ],
                  "correct": 1,
                  "hint": "BOOKCASE and CASEWORM.",
                  "explanation": "CASE forms BOOKCASE.",
                  "pictorialClue": "🔤 BOOKCASE: CASE."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "Find the connecting word: RAIN [ ? ] TIE",
                  "options": [
                        "COAT",
                        "BOW",
                        "DROP",
                        "FALL"
                  ],
                  "correct": 1,
                  "hint": "RAINBOW and BOWTIE.",
                  "explanation": "BOW forms RAINBOW and BOWTIE.",
                  "pictorialClue": "🔤 RAINBOW / BOWTIE: BOW."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "Find the connecting word: SEA [ ? ] SHELL",
                  "options": [
                        "WEED",
                        "HORSE",
                        "SHORE",
                        "FOOD"
                  ],
                  "correct": 2,
                  "hint": "SEASHORE and SHORESHELL (or SEASHELL).",
                  "explanation": "SHORE forms SEASHORE.",
                  "pictorialClue": "🔤 SEASHORE: SHORE."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "Find the connecting word: FIRE [ ? ] WORK",
                  "options": [
                        "FLY",
                        "MAN",
                        "WOOD",
                        "PLACE"
                  ],
                  "correct": 2,
                  "hint": "FIREWOOD and WOODWORK.",
                  "explanation": "WOOD forms FIREWOOD and WOODWORK.",
                  "pictorialClue": "🔤 FIREWOOD / WOODWORK: WOOD."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "Find the connecting word: ARM [ ? ] MAN",
                  "options": [
                        "CHAIR",
                        "PIT",
                        "HOLE",
                        "REST"
                  ],
                  "correct": 0,
                  "hint": "ARMCHAIR and CHAIRMAN.",
                  "explanation": "CHAIR forms ARMCHAIR and CHAIRMAN.",
                  "pictorialClue": "🏆 ARMCHAIR / CHAIRMAN: CHAIR."
            }
      ]
}
    ],

    english: [
      {
        id: 'eng-victorian-vocab',
        title: '19th-Century Victorian Vocabulary Decoding',
        category: 'English & Comprehension',
        examFrequency: 'High (Independent & Grammar Schools)',
        difficulty: 'Intermediate',
        rule: 'In 19th-century literature (Dickens, Brontë, Conan Doyle), deduce archaic vocabulary by examining the surrounding narrative sentiment (+ or -) and Latin/Greek roots.',
        trap: 'Kids guess based on modern slang rather than analyzing formal 19th-century context clues!',
        question: 'In Oliver Twist, the beadle speaks in an "imperious" tone. What does IMPERIOUS mean in this context?',
        visualType: 'vocab-scroll',
        steps: [
          {
            title: 'Step 1: Identify Latin Root and Tone',
            detail: 'Root: <em>imperium</em> (power, command, emperor). Tone is authoritative and commanding.'
          },
          {
            title: 'Step 2: Cross-Reference Character Action',
            detail: 'Mr. Bumble expects immediate obedience and bosses everyone around.'
          },
          {
            title: 'Step 3: Select the Exact Definition',
            detail: 'Imperious means <strong>arrogant, domineering, and expecting unquestioned obedience</strong>.'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: '"The traveller was exhausted after an arduous trek across the moors." What does ARDUOUS mean?',
            options: ['Pleasant', 'Strenuous and difficult', 'Quick', 'Dangerous'],
            correct: 1,
            hint: 'The traveller was exhausted, so the trek was physically taxing.',
            explanation: 'Arduous means requiring strenuous, exhausting effort.',
            pictorialClue: '📜 Scroll Clue: Arduous ➔ [Exhausting + Difficult].'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: '"The room was austere, furnished only with a plain wooden stool and a bare iron cot." What does AUSTERE mean?',
            options: ['Luxurious', 'Severely plain and simple', 'Bright and colorful', 'Messy'],
            correct: 1,
            hint: 'Plain stool and bare iron cot suggest strict simplicity without luxury.',
            explanation: 'Austere means having no comforts or luxuries; severely plain and disciplined.',
            pictorialClue: '🏛️ Victorian Parchment: Austere ➔ [Strictly Plain / No Comforts].'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: '"The miser looked upon the poor orphan with an AVARICIOUS glint in his eye." What does AVARICIOUS mean?',
            options: ['Generous', 'Fiercely greedy for wealth', 'Curious and friendly', 'Terrified'],
            correct: 1,
            hint: 'A miser is obsessed with hoarding gold and wealth.',
            explanation: 'Avaricious means characterized by extreme greed for wealth or material gain.',
            pictorialClue: '⚠️ Character Connotation Trap: Miser + gold ➔ Avaricious (greed for wealth).'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: '"Her countenance remained entirely impassive despite the shocking news." What does COUNTENANCE mean?',
            options: ['Voice', 'Facial expression / appearance', 'Clothing', 'Courage'],
            correct: 1,
            hint: 'Countenance is an archaic literary term for a person\'s face or facial expression.',
            explanation: 'Countenance refers to a person\'s face or facial expression.',
            pictorialClue: '🎭 Literary Archaisms: Countenance ➔ Face / Facial Expression.'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: '"The judge delivered a trenchant critique of the corrupted magistrates." What does TRENCHANT mean in this context?',
            options: ['Hesitant and cautious', 'Incisive, sharp, and biting', 'Boring and lengthy', 'Forgiving'],
            correct: 1,
            hint: 'From French trenchier (to cut). A critique that cuts straight to the core.',
            explanation: 'Trenchant means vigorous, incisive, and sharply perceptive or cutting.',
            pictorialClue: '🏆 Classical Root: Trenchant ➔ [Incisive / Sharp / Cutting].'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "In 19th-century literature, what does the word 'MELANCHOLY' mean?",
            options: ["Gloomy sadness","Burst of laughter","Greedy desire","Energetic haste"],
            correct: 0,
            hint: "Root 'melan-' relates to dark. Melancholy describes deep, pensive sadness.",
            explanation: "Melancholy means a feeling of thoughtful sadness or sorrow.",
            pictorialClue: "🌧️ Mood Tone: Melancholy = deep gloom / sorrow."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "\"Mr. Pip felt an acute apprehension.\" What does 'APPREHENSION' mean in this Victorian context?",
            options: ["Dread or anxiety about the future","Physical illness","Great joy","Police arrest"],
            correct: 0,
            hint: "In Victorian literature, apprehension often means fearful anticipation of disaster.",
            explanation: "Apprehension means anxiety or fear that something bad or unpleasant will happen.",
            pictorialClue: "😰 Emotional State: Apprehension = fear / dread."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "What does 'BENEVOLENT' mean when describing an elderly Victorian gentleman?",
            options: ["Cruel and miserly","Kind, charitable, and well-meaning","Frail and sickly","Wealthy and boastful"],
            correct: 1,
            hint: "Prefix 'bene-' means good (like benefit or benefactor).",
            explanation: "Benevolent means well-meaning and kindly; desiring to do good to others.",
            pictorialClue: "❤️ Root Power: Bene (good) + volent (wishing) = kind-hearted."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "\"The miser regarded his gold hoard with avarice.\" What does 'AVARICE' mean?",
            options: ["Generosity","Extreme greed for wealth","Deep guilt","Boredom"],
            correct: 1,
            hint: "A miser hoards money because of his insatiable greed.",
            explanation: "Avarice is extreme greed for wealth or material gain.",
            pictorialClue: "💰 Character Flaw: Avarice = insatiable greed."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "\"Her countenance betrayed her inner turmoil.\" What does 'COUNTENANCE' mean?",
            options: ["Her spoken words","Her facial expression or appearance","Her dress code","Her diary entries"],
            correct: 1,
            hint: "Countenance refers to a person's face or facial expression.",
            explanation: "Countenance means a person's face or facial expression.",
            pictorialClue: "🏆 Classic Victorian Noun: Countenance = facial expression."
          }
        ]
      },
      {
        id: 'eng-inference-clues',
        title: 'Inference vs Stated Fact: The Evidence Rule',
        category: 'English & Comprehension',
        examFrequency: 'Very High (All Grammar & Independent 11+)',
        difficulty: 'Intermediate',
        rule: 'A stated fact is explicitly written on the page (The Camera). An INFERENCE is what you logically deduce between the lines using subtle textual evidence (The Detective).',
        trap: 'Quoting a literal sentence from the text when asked for an inference, or making a wild guess unsupported by text clues!',
        question: '"Arthur shivered and pulled his thin, threadbare coat tighter around his shoulders." What can we INFER about Arthur\'s circumstances?',
        visualType: 'clue-detective',
        steps: [
          {
            title: 'Step 1: Spot the Literal Camera Evidence',
            detail: 'Facts: Arthur is shivering; coat is "thin" and "threadbare" (worn out to the threads).'
          },
          {
            title: 'Step 2: Ask: "Why would his coat be threadbare?"',
            detail: 'He cannot afford a warm, new winter coat.'
          },
          {
            title: 'Step 3: State the Legitimate Deduction',
            detail: 'Inference: Arthur is <strong>cold and living in severe poverty</strong>.'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: '"The puppy\'s tail thumped furiously against the floor as the front door handle jiggled." What can be inferred?',
            options: [
              'The puppy was terrified',
              'The puppy was excited and happy that someone was arriving',
              'The front door was broken',
              'The puppy was hungry'
            ],
            correct: 1,
            hint: 'A wagging, thumping tail is a sign of canine joy and anticipation.',
            explanation: 'Tail thumping at the door handle jiggling indicates happy anticipation of an arrival.',
            pictorialClue: '🔍 Detective Clue: Tail thump + door handle ➔ Excited anticipation.'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: '"The unopened envelope lay on the mantelpiece, gathering dust for three weeks." What can we infer about the recipient?',
            options: [
              'They did not have a letter opener',
              'They were avoiding or dreading reading the letter',
              'They loved receiving mail',
              'The letter was delivered by mistake'
            ],
            correct: 1,
            hint: 'Leaving mail unopened for weeks indicates intentional avoidance or fear of its contents.',
            explanation: 'Leaving a letter unopened for weeks signifies deliberate avoidance, fear, or reluctance.',
            pictorialClue: '✉️ Dusty Envelope: Left unopened ➔ Deliberate dread or avoidance.'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'A passage states: "The clock struck midnight as the rain pounded the roof." A student writes as an inference: "It was raining outside at midnight." Why will this lose marks in an 11+ exam?',
            options: [
              'Because it was not midnight',
              'Because that is a STATED FACT, not an inference deduced between the lines',
              'Because rain cannot pound',
              'Because midnight is too late'
            ],
            correct: 1,
            hint: 'An inference must be deduced between the lines, not simply copied verbatim from the text!',
            explanation: 'Repeating facts written word-for-word in the text is a stated fact. An inference requires interpreting what the atmosphere or situation implies.',
            pictorialClue: '⚠️ Fact vs Inference Trap: Merely restating literal text loses full marks on inference questions!'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: '"Lord Ravenscroft repeatedly polished his spectacles, cleared his throat, and refused to meet the young doctor\'s gaze." What can we infer about Lord Ravenscroft\'s emotional state?',
            options: [
              'He has poor eyesight and a sore throat',
              'He is uncomfortable, guilty, or concealing the truth',
              'He is arrogant and contemptuous',
              'He is eager to help the doctor'
            ],
            correct: 1,
            hint: 'Polishing glasses, throat-clearing, and avoiding eye contact are universal body language signals of nervous discomfort or evasion.',
            explanation: 'Evasive body language and nervous displacement actions strongly imply guilt, discomfort, or concealment.',
            pictorialClue: '🕵️ Subtext Deduction: Avoiding gaze + fidgeting ➔ Nervous discomfort / evasion.'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: '"The garden was overgrown with briars, its once-grand sundial cracked and choked with ivy." What does this setting symbolically infer about the family residing within the manor?',
            options: [
              'They are enthusiastic botanists',
              'The family has fallen into moral or financial decay and decline',
              'They just moved in yesterday',
              'They prefer wild animals'
            ],
            correct: 1,
            hint: 'In 19th-century literature, an overgrown, neglected estate mirrors the family\'s fall from grace or wealth.',
            explanation: 'Decaying gardens and broken sundials in gothic/Victorian literature symbolically reflect the declining fortunes, neglect, or ruin of the household.',
            pictorialClue: '🏆 Symbolic Inference: Overgrown estate ⟷ Fallen fortunes and decay.'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "\"Tom slammed his textbook shut, threw his pencil across the desk, and buried his head in his hands.\" What can be inferred about Tom?",
            options: ["He is hungry","He is frustrated with his homework","He is going to sleep","He has finished successfully"],
            correct: 1,
            hint: "Look at the aggressive actions: slammed, threw, buried head.",
            explanation: "The physical actions show clear signs of exasperation and frustration.",
            pictorialClue: "🔍 Clue Trail: Slammed book + threw pencil = frustration."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "\"A thick layer of dust covered the mantelpiece, and the calendar on the wall was still turned to November 1942.\" What can be inferred?",
            options: ["The house is cleaned daily","The room has been abandoned for many years","A party was held yesterday","The calendar was bought recently"],
            correct: 1,
            hint: "Thick dust + an old calendar dating back decades indicates abandonment.",
            explanation: "Dust and a vintage untouched calendar indicate no one has lived or cleaned there for decades.",
            pictorialClue: "🕰️ Evidence Layering: Thick dust + 1942 calendar = long-term abandonment."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "Which of the following is a DIRECT FACT from the text: \"Lucy carried an umbrella because the sky was dark with grey clouds.\"",
            options: ["It was raining heavily","Lucy carried an umbrella","Lucy was afraid of lightning","Lucy got soaking wet"],
            correct: 1,
            hint: "A direct fact is stated explicitly in the text word for word!",
            explanation: "\"Lucy carried an umbrella\" is directly stated. Whether it actually rained is not stated.",
            pictorialClue: "🎯 Fact vs Inference: Directly stated words = Fact."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "\"The puppy wagged its tail, pressed its paws against the glass, and let out a tiny whine as Sophie walked by.\" What can be inferred about the puppy?",
            options: ["It wants Sophie to play with or adopt it","It is aggressive and dangerous","It has just eaten lunch","It is asleep"],
            correct: 0,
            hint: "Wagging tail + pawing glass + whine = seeking attention and affection.",
            explanation: "Friendly body language (tail wagging, pawing glass) shows eagerness to interact.",
            pictorialClue: "🐶 Behavior Cues: Wagging tail + pawing = eager for attention."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "\"The doctor looked grave, carefully removed his glasses, and asked the family to sit down in private.\" What can be inferred about the news he is about to deliver?",
            options: ["The patient has made a full recovery","The news is serious and concerning","The doctor is going home early","He has lost his notes"],
            correct: 1,
            hint: "Grave expression + private room = serious, somber news.",
            explanation: "The doctor's grave expression and request for privacy indicate serious or distressing news.",
            pictorialClue: "🏆 Nuance Detection: Grave look + closed door = serious news."
          }
        ]
      },
      {
        id: 'eng-semicolon-test',
        title: 'The Semicolon Test: Two Complete Sentence Wagons',
        category: 'English & Punctuation',
        examFrequency: 'High (All Grammar Schools)',
        difficulty: 'Intermediate',
        rule: 'A semicolon (;) connects two complete, independent sentences (clauses) that are closely linked in meaning. BOTH sides must be capable of standing alone as a full sentence with their own Subject and Verb!',
        trap: 'Using a semicolon when one side is an incomplete fragment or dependent clause (e.g. "Because it was raining; we stayed inside" is WRONG)!',
        question: 'Which of the following sentences uses the semicolon (;) CORRECTLY?',
        visualType: 'sentence-wagons',
        steps: [
          {
            title: 'Step 1: Check Wagon 1 (Left of Semicolon)',
            detail: '"The heavy oak door swung shut" ➔ Subject (door) + Verb (swung). <strong>Complete standalone sentence ✅</strong>.'
          },
          {
            title: 'Step 2: Check Wagon 2 (Right of Semicolon)',
            detail: '"the castle fell into darkness" ➔ Subject (castle) + Verb (fell). <strong>Complete standalone sentence ✅</strong>.'
          },
          {
            title: 'Step 3: Confirm Close Thematic Relationship',
            detail: 'The two clauses describe immediate sequential consequences. A semicolon is the perfect coupling link.'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: 'Where should the semicolon go: "The rain poured down heavily the garden was completely flooded."',
            options: [
              'The rain; poured down heavily the garden was completely flooded.',
              'The rain poured down heavily; the garden was completely flooded.',
              'The rain poured; down heavily the garden was completely flooded.',
              'The rain poured down heavily the garden; was completely flooded.'
            ],
            correct: 1,
            hint: 'Place it between the two independent sentences: Clause 1 ends at "heavily".',
            explanation: '"The rain poured down heavily" is Clause 1; "the garden was completely flooded" is Clause 2.',
            pictorialClue: '🚂 Two Coupled Wagons: [Clause 1] ; [Clause 2].'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: 'Which sentence correctly uses a semicolon?',
            options: [
              'Although it was freezing; we went for a swim.',
              'Leo loves astronomy; he spends hours observing the stars through his telescope.',
              'Because she was tired; Maya fell asleep instantly.',
              'In the morning; we ate breakfast.'
            ],
            correct: 1,
            hint: 'Both sides must be complete sentences. "Although it was freezing" is a dependent fragment!',
            explanation: '"Leo loves astronomy" (Sentence 1) and "he spends hours observing..." (Sentence 2) are both complete independent clauses.',
            pictorialClue: '🚂 Standalone Check: Both sides must have an engine (Subject + Verb).'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'A student writes: "The thunder cracked loudly; and the lights flickered out." Why is the semicolon WRONG here?',
            options: [
              'Thunder cannot crack',
              'You must not use a semicolon immediately before a coordinating conjunction like "and"',
              'Lights cannot flicker',
              'It should be a question mark'
            ],
            correct: 1,
            hint: 'A semicolon REPLACES the comma + conjunction. Use either ";" or ", and" — never both together!',
            explanation: 'A semicolon already does the work of linking. Using a semicolon with "and" is a punctuation splice error. Use a comma before "and", or remove "and".',
            pictorialClue: '⚠️ Semicolon + And Trap: Semicolon replaces ", and" — never use both together!'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: 'Which of the following uses a semicolon correctly to separate complex items in a list?',
            options: [
              'On our trip we visited Paris; France, Berlin; Germany, and Rome; Italy.',
              'On our trip we visited Paris, France; Berlin, Germany; and Rome, Italy.',
              'On our trip; we visited Paris, France, Berlin, Germany, and Rome, Italy.',
              'On our trip we visited; Paris, France, Berlin, Germany, and Rome, Italy.'
            ],
            correct: 1,
            hint: 'When list items contain internal commas (City, Country), use semicolons to separate the list items!',
            explanation: 'Semicolons act as "super commas" to separate list items that already contain internal commas.',
            pictorialClue: '📑 Super-Comma Rule: [Item 1, Detail] ; [Item 2, Detail] ; and [Item 3, Detail].'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: 'Choose the sentence that correctly distinguishes between a COLON (:) and a SEMICOLON (;):',
            options: [
              'She had one clear ambition; to become an astrophysicist.',
              'She had one clear ambition: to become an astrophysicist.',
              'She had: one clear ambition; to become an astrophysicist.',
              'She had one clear ambition; because she loved space.'
            ],
            correct: 1,
            hint: 'A colon introduces an explanation or definition. "to become an astrophysicist" is not a standalone sentence, so a semicolon cannot be used!',
            explanation: 'Colons introduce explanations, lists, or clarifications. Since "to become an astrophysicist" lacks a finite verb for a standalone clause, a colon is required.',
            pictorialClue: '🏆 Colon vs Semicolon: Colon introduces / defines; Semicolon links two equal clauses.'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "Which sentence uses the semicolon CORRECTLY?",
            options: ["The rain poured down; we stayed indoors.","The rain poured down; because it was cold.","The rain poured down; staying indoors.","Because the rain poured down; we stayed indoors."],
            correct: 0,
            hint: "Both sides of a semicolon MUST be complete independent sentences!",
            explanation: "\"The rain poured down\" and \"we stayed indoors\" are both complete sentences that could stand alone with a full stop.",
            pictorialClue: "🚂 Wagon Rule: [Complete Sentence 1] ; [Complete Sentence 2]."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "Why is this semicolon INCORRECT: \"She loved painting; especially landscapes.\"?",
            options: ["\"especially landscapes\" is not a complete sentence","Painting should be capitalized","Semicolons cannot be used with art words","There are no errors"],
            correct: 0,
            hint: "\"Especially landscapes\" has no subject or verb. It cannot stand alone as a sentence.",
            explanation: "The second clause is a fragment, not an independent clause. A semicolon requires two complete sentences.",
            pictorialClue: "⚠️ Semicolon Trap: Fragment after semicolon is illegal."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "Which punctuation mark should replace the semicolon here: \"Although she was tired; she finished her essay.\"?",
            options: ["A comma (,)","A colon (:)","A hyphen (-)","No punctuation"],
            correct: 0,
            hint: "\"Although she was tired\" is a subordinate clause starting with 'Although'. Subordinate clauses take a comma!",
            explanation: "\"Although she was tired\" is a dependent clause, so a comma must be used instead of a semicolon.",
            pictorialClue: "🔗 Subordinate Clause: Subordinate clause + comma + main clause."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "Which sentence demonstrates correct semicolon usage before a conjunctive adverb?",
            options: ["I wanted to go swimming; however, it was freezing.","I wanted to go swimming, however; it was freezing.","I wanted to go swimming; however it was freezing;","I wanted to go swimming however; it was freezing."],
            correct: 0,
            hint: "The standard pattern is: Sentence 1 ; however, Sentence 2.",
            explanation: "Semicolon precedes the transitional adverb (however), followed immediately by a comma.",
            pictorialClue: "⚓ Bridge Rule: [Clause 1] ; however, [Clause 2]."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "When can a semicolon be used INSTEAD of a comma in a list?",
            options: ["When list items already contain commas","When there are more than 10 items","When list items are verbs","Never"],
            correct: 0,
            hint: "Complex lists with internal commas (e.g. Paris, France; Rome, Italy; London, UK) use semicolons to prevent confusion.",
            explanation: "Semicolons act as super-commas in complex lists where individual items already contain commas.",
            pictorialClue: "🏆 Super-Comma List: [City, Country] ; [City, Country] ; [City, Country]."
          }
        ]
      },
      {
        id: 'eng-figurative-lang',
        title: 'Figurative Language: Metaphor vs Simile vs Personification',
        category: 'English & Comprehension',
        examFrequency: 'High (GL, CEM, ISEB, CSSE)',
        difficulty: 'Foundation',
        rule: 'SIMILE compares using "like" or "as". METAPHOR states one thing IS another. PERSONIFICATION gives human actions, thoughts, or emotions to non-human objects.',
        trap: 'Confusing a literal comparison ("He looks like his brother") with a figurative simile ("He fought like a lion")!',
        question: 'Identify the figurative technique used in: "The grandfather clock ticked nervously in the silent hallway."',
        visualType: 'figurative-cards',
        steps: [
          {
            title: 'Step 1: Inspect the Non-Human Object',
            detail: 'The object is a grandfather clock.'
          },
          {
            title: 'Step 2: Inspect the Attributed Behavior',
            detail: 'The clock is described as ticking "nervously" — an emotional human state.'
          },
          {
            title: 'Step 3: Classify the Device',
            detail: 'Giving human anxiety/nervousness to an inanimate clock is <strong>PERSONIFICATION</strong>.'
          }
        ],
        twins: [
          {
            level: 'Level 1: Foundation Warm-up',
            question: '"The lake was as smooth as glass." Which technique is used?',
            options: ['Metaphor', 'Simile', 'Personification', 'Alliteration'],
            correct: 1,
            hint: 'Look for the comparative word "as".',
            explanation: 'Comparing two things using "as" is a Simile.',
            pictorialClue: '🔍 Simile Marker: Uses "like" or "as ... as".'
          },
          {
            level: 'Level 2: Standard 11+ Exam',
            question: '"His mind was a labyrinth of forgotten memories." Which technique is used?',
            options: ['Simile', 'Metaphor', 'Personification', 'Onomatopoeia'],
            correct: 1,
            hint: 'The sentence says his mind WAS a labyrinth (direct identity without "like" or "as").',
            explanation: 'Stating that his mind IS a labyrinth is a direct Metaphor.',
            pictorialClue: '🧩 Metaphor Equation: A = B (direct equation without "like" or "as").'
          },
          {
            level: 'Level 3: Exam Trap Variant',
            question: 'A student marks "He ran as fast as his twin brother" as a simile. Why is this incorrect in 11+ analysis?',
            options: [
              'Because running is not an action',
              'Because it is a LITERAL comparison between two humans, not a figurative comparison between two unlike things',
              'Because twins are identical',
              'Because it needs the word "like"'
            ],
            correct: 1,
            hint: 'A simile must compare two fundamentally UNLIKE things (e.g. boy and cheetah).',
            explanation: 'Comparing a boy to his brother is a literal fact. Figurative language requires comparing two fundamentally different things to create imagery.',
            pictorialClue: '⚠️ Literal vs Figurative: Comparing two like things (human to human) is literal, not figurative!'
          },
          {
            level: 'Level 4: Super-Selective Challenge (QE Boys / HBS)',
            question: '"The ferocious storm devoured the coastal cottages with relentless fury." What combination of techniques is at work?',
            options: [
              'Only alliteration',
              'Personification and metaphor (storm given animal/human appetite and emotion)',
              'Simile and rhyme',
              'Literal narrative'
            ],
            correct: 1,
            hint: 'Storm "devoured" with "fury" gives human/beast emotions and hunger to weather.',
            explanation: 'The storm is personified with hunger ("devoured") and human emotional wrath ("relentless fury").',
            pictorialClue: '🌪️ Layered Imagery: Inanimate weather given predatory human/beast emotions.'
          },
          {
            level: 'Level 5: Core 11+ Mastery',
            question: 'In an extended metaphor, an author compares a library to an ocean. What would the "books" correspond to in this conceptual map?',
            options: ['The sunlight on the water', 'The islands of knowledge or sunken treasure chests', 'The sandy beach', 'The fishermen'],
            correct: 1,
            hint: 'Extend the figurative analogy: What in the ocean holds discovery and wealth?',
            explanation: 'In an extended ocean metaphor for a library, books correspond to hidden treasure chests or islands waiting to be explored.',
            pictorialClue: '🏆 Extended Metaphor Map: Library = Ocean; Books = Treasure Chests / Islands.'
          },
          {
            level: "Level 6: Multi-Step Word Puzzle",
            question: "\"The ancient oak tree groaned in the violent gale.\" What technique is used here?",
            options: ["Personification","Simile","Alliteration","Hyperbole"],
            correct: 0,
            hint: "Groaning is a human sound. Giving human action to a tree is personification!",
            explanation: "The tree is given human behaviour (groaning), which is personification.",
            pictorialClue: "🌳 Human Trait: Tree \"groans\" = Personification."
          },
          {
            level: "Level 7: Super-Selective Challenge (QE Boys / HBS)",
            question: "\"The classroom was a zoo during break time.\" What figurative device is this?",
            options: ["Metaphor","Simile","Onomatopoeia","Oxymoron"],
            correct: 0,
            hint: "It states the classroom WAS a zoo (direct comparison without 'like' or 'as').",
            explanation: "Stating one thing IS another thing directly without 'like' or 'as' is a metaphor.",
            pictorialClue: "🦁 Direct Equivalence: Classroom = Zoo (Metaphor)."
          },
          {
            level: "Level 8: Top Independent School Exam (St Paul's / King's)",
            question: "\"Her laughter was as sweet as honey.\" Which technique is used?",
            options: ["Simile","Metaphor","Personification","Irony"],
            correct: 0,
            hint: "The comparison uses the phrase 'as... as'.",
            explanation: "Using 'like' or 'as' to compare two things creates a simile.",
            pictorialClue: "🍯 Comparison Marker: \"as sweet as\" = Simile."
          },
          {
            level: "Level 9: Real 11+ Past Paper Variant",
            question: "\"The car engine coughed and sputtered before dying.\" Which device is primarily used?",
            options: ["Personification","Simile","Hyperbole","Rhyme"],
            correct: 0,
            hint: "Engines cannot literally cough or die like living creatures.",
            explanation: "Attributing human physical actions (coughing, dying) to a mechanical engine is personification.",
            pictorialClue: "🚗 Human Trait: Engine \"coughed and died\" = Personification."
          },
          {
            level: "Level 10: Scholar Grand Mastery 🏆",
            question: "\"The curriculum was an endless mountain to climb, and every test was a sheer cliff.\" Which device dominates this sentence?",
            options: ["Extended Metaphor","Simile","Personification","Alliteration"],
            correct: 0,
            hint: "Multiple connected metaphors expanding on the theme of a mountain and cliff.",
            explanation: "Developing a metaphor across multiple related clauses (mountain, climb, sheer cliff) is an extended metaphor.",
            pictorialClue: "🏆 Extended Metaphor: Mountain + climb + sheer cliff all develop the single comparison."
          }
        ]
      }
,
      {
      "id": "eng-apostrophe-rules",
      "title": "The Apostrophe Test: Possession vs Contraction & Plural Trap",
      "category": "English & Vocab",
      "examFrequency": "Very High (GL, CEM, CSSE, ISEB)",
      "difficulty": "Intermediate",
      "rule": "Apostrophes are NEVER used for ordinary plurals! Use for: (1) Omission/Contraction (do not ➔ don't), (2) Singular possession ('s: the dog's tail), (3) Plural possession (s': the dogs' tails).",
      "trap": "DO NOT write \"apple's for sale\" or \"it's claws\"! \"It's\" ONLY means \"it is\" or \"it has\". The possessive form has NO apostrophe: \"its claws\".",
      "question": "Which sentence correctly punctuates the apostrophe?",
      "visualType": "vr-letter-dial",
      "steps": [
            {
                  "title": "Step 1: Test \"it's\" substitution rule",
                  "detail": "Replace with \"it is\". If \"it is\" sounds wrong, there must be NO apostrophe."
            },
            {
                  "title": "Step 2: Check plural possession location",
                  "detail": "If the owners are plural ending in s (scholars), place apostrophe AFTER the s: <strong>scholars' desks</strong>."
            },
            {
                  "title": "Step 3: Eliminate grocer's plurals",
                  "detail": "Ban apostrophes in simple plural nouns (apples, cars, books)."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "Select the correct sentence:",
                  "options": [
                        "The cat licked it's paw.",
                        "The cat licked its paw.",
                        "The cat licked its' paw.",
                        "The cat licked it paw's."
                  ],
                  "correct": 1,
                  "hint": "Possessive \"its\" has no apostrophe: \"The cat licked its paw.\"",
                  "explanation": "\"its\" is possessive; \"it's\" means \"it is\".",
                  "pictorialClue": "✍️ Possessive \"its\": No apostrophe."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "Where does the apostrophe belong for the toys of two boys?",
                  "options": [
                        "The boy's toys",
                        "The boys' toys",
                        "The boys toy's",
                        "The boys toys'"
                  ],
                  "correct": 1,
                  "hint": "Plural owners ending in s take an apostrophe at the end: The boys' toys.",
                  "explanation": "Plural ending in s: boys'.",
                  "pictorialClue": "✍️ Plural possession: boys'."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "Where does the apostrophe belong for the coats of the children?",
                  "options": [
                        "The childrens' coats",
                        "The children's coats",
                        "The childrens coats'",
                        "The children coats"
                  ],
                  "correct": 1,
                  "hint": "Irregular plurals not ending in s take 's: children's, men's, women's.",
                  "explanation": "Irregular plural: children's.",
                  "pictorialClue": "⚠️ Irregular plural: children's."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "Which word contains a contraction apostrophe representing missing letters?",
                  "options": [
                        "James's",
                        "Can't",
                        "Dogs'",
                        "Girls'"
                  ],
                  "correct": 1,
                  "hint": "Can't is a contraction of \"cannot\", replacing \"no\" with an apostrophe.",
                  "explanation": "Contraction replaces missing letters: can't.",
                  "pictorialClue": "✍️ Contraction: can't."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "Choose the sentence with NO punctuation errors:",
                  "options": [
                        "The two dogs barking kept me awake.",
                        "The two dog's barking kept me awake.",
                        "The two dogs' barking kept me awake.",
                        "The two dogs barking' kept me awake."
                  ],
                  "correct": 2,
                  "hint": "The barking belongs to both dogs: dogs' barking.",
                  "explanation": "Possessive gerund: dogs' barking.",
                  "pictorialClue": "✍️ dogs' barking."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "Choose the correct form: \"Whose / Who's coat is this?\"",
                  "options": [
                        "Who's",
                        "Whose",
                        "Whos'",
                        "Whos"
                  ],
                  "correct": 1,
                  "hint": "\"Whose\" shows possession. \"Who's\" means \"who is\".",
                  "explanation": "\"Whose\" indicates ownership.",
                  "pictorialClue": "✍️ Whose vs Who's."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "Which sentence correctly uses \"they're\", \"there\", and \"their\"?",
                  "options": [
                        "Their going to they're house over there.",
                        "They're going to their house over there.",
                        "There going to their house over they're.",
                        "They're going to there house over their."
                  ],
                  "correct": 1,
                  "hint": "They're (they are) going to their (possessive) house over there (place).",
                  "explanation": "They're = they are; their = belonging; there = place.",
                  "pictorialClue": "✍️ They're / Their / There."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "Punctuate: The headmaster praised the (teachers) hard work.",
                  "options": [
                        "teachers's",
                        "teachers'",
                        "teacher's",
                        "teachers"
                  ],
                  "correct": 1,
                  "hint": "Praising the work of all teachers: teachers'.",
                  "explanation": "Plural noun: teachers'.",
                  "pictorialClue": "✍️ Plural teachers'."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "Which sentence is CORRECT?",
                  "options": [
                        "You're shoes are in your locker.",
                        "Your shoes are in you're locker.",
                        "Your shoes are in your locker.",
                        "You're shoes are in you're locker."
                  ],
                  "correct": 2,
                  "hint": "Both show possession: \"Your shoes are in your locker.\"",
                  "explanation": "Your = belonging to you; You're = you are.",
                  "pictorialClue": "✍️ Your vs You're."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "In the phrase \"two weeks notice\", where should the apostrophe go?",
                  "options": [
                        "two week's notice",
                        "two weeks' notice",
                        "two weeks notice'",
                        "no apostrophe needed"
                  ],
                  "correct": 1,
                  "hint": "Temporal possession: one week's notice, two weeks' notice.",
                  "explanation": "Measure of time requires possessive: two weeks' notice.",
                  "pictorialClue": "🏆 Temporal apostrophe: two weeks' notice."
            }
      ]
},
      {
      "id": "eng-shuffled-cloze",
      "title": "Cloze Passage Technique: Tone & Collocation Fillers",
      "category": "English & Vocab",
      "examFrequency": "High (CEM, GL, CSSE)",
      "difficulty": "Intermediate",
      "rule": "Read the ENTIRE paragraph before filling a single blank! Words must fit both the grammatical syntax (part of speech) and the tonal register of the text.",
      "trap": "DO NOT pick words based solely on the immediate sentence! A word that makes sense locally may contradict the narrative tone established in the paragraph.",
      "question": "Select the most appropriate word to complete: \"The storm raged with unyielding _______, tearing branches from the ancient oaks.\"",
      "visualType": "vr-letter-dial",
      "steps": [
            {
                  "title": "Step 1: Identify required part of speech",
                  "detail": "\"unyielding\" is an adjective, so the blank requires a <strong>noun</strong>."
            },
            {
                  "title": "Step 2: Match semantic intensity and tone",
                  "detail": "The storm is tearing branches from oaks; the noun must convey extreme violent power: <strong>ferocity</strong>."
            },
            {
                  "title": "Step 3: Eliminate conflicting registers",
                  "detail": "Gentleness, mildness, and calmness contradict \"unyielding\"."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "Complete the sentence: \"The detective listened _______ as the suspect gave his alibi.\"",
                  "options": [
                        "attentively",
                        "clumsily",
                        "loudly",
                        "rudely"
                  ],
                  "correct": 0,
                  "hint": "A detective examining an alibi listens carefully and attentively.",
                  "explanation": "Context requires focused observation: attentively.",
                  "pictorialClue": "📖 Contextual fit: attentively."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "Complete: \"The mountain path was steep and _______, with loose pebbles slipping beneath their boots.\"",
                  "options": [
                        "perilous",
                        "smooth",
                        "comfortable",
                        "tranquil"
                  ],
                  "correct": 0,
                  "hint": "Steep paths with slipping pebbles are dangerous and perilous.",
                  "explanation": "Perilous matches the hazard described.",
                  "pictorialClue": "📖 Perilous."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "Complete: \"Despite the bad news, she maintained her _______ and did not shed a tear.\"",
                  "options": [
                        "composure",
                        "confusion",
                        "delight",
                        "fury"
                  ],
                  "correct": 0,
                  "hint": "Remaining calm and not crying shows composure.",
                  "explanation": "Composure means calm self-control.",
                  "pictorialClue": "📖 Composure."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "Complete: \"The ancient parchment was so _______ that it crumbled at the slightest touch.\"",
                  "options": [
                        "fragile",
                        "robust",
                        "sturdy",
                        "resilient"
                  ],
                  "correct": 0,
                  "hint": "Crumbling at the slightest touch indicates fragility.",
                  "explanation": "Fragile means easily broken or damaged.",
                  "pictorialClue": "📖 Fragile."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "Complete: \"His explanation was so _______ that nobody in the courtroom believed him.\"",
                  "options": [
                        "implausible",
                        "convincing",
                        "coherent",
                        "persuasive"
                  ],
                  "correct": 0,
                  "hint": "Nobody believed him because the story was implausible (not credible).",
                  "explanation": "Implausible means not believable.",
                  "pictorialClue": "📖 Implausible."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "Complete: \"The sun began to _______ behind the horizon, painting the sky with crimson streaks.\"",
                  "options": [
                        "ascend",
                        "descend",
                        "hover",
                        "pause"
                  ],
                  "correct": 1,
                  "hint": "The sun sets by descending behind the horizon.",
                  "explanation": "Descend matches sunset.",
                  "pictorialClue": "📖 Descend."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "Complete: \"The monarch ruled with absolute _______, allowing no opposition from parliament.\"",
                  "options": [
                        "tyranny",
                        "mercy",
                        "humility",
                        "modesty"
                  ],
                  "correct": 0,
                  "hint": "Allowing zero opposition describes tyrannical, authoritarian rule.",
                  "explanation": "Tyranny means cruel, unrestrained authority.",
                  "pictorialClue": "📖 Tyranny."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "Complete: \"After three hours in the desert sun, the cold spring was an _______ oasis.\"",
                  "options": [
                        "invigorating",
                        "exhausting",
                        "intimidating",
                        "irrelevant"
                  ],
                  "correct": 0,
                  "hint": "Cold water refreshing exhausted travelers is invigorating.",
                  "explanation": "Invigorating means energizing and refreshing.",
                  "pictorialClue": "📖 Invigorating."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "Complete: \"The critic praised the author's _______ dialogue, which captured everyday conversation perfectly.\"",
                  "options": [
                        "authentic",
                        "artificial",
                        "tedious",
                        "monotonous"
                  ],
                  "correct": 0,
                  "hint": "Capturing speech perfectly means the dialogue is authentic (realistic).",
                  "explanation": "Authentic means genuine and true to life.",
                  "pictorialClue": "📖 Authentic."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "Complete: \"Her speech was brief yet _______, inspiring everyone in the auditorium to take action.\"",
                  "options": [
                        "eloquent",
                        "rambling",
                        "incoherent",
                        "lethargic"
                  ],
                  "correct": 0,
                  "hint": "Inspiring and concise speech is eloquent.",
                  "explanation": "Eloquent means fluent, persuasive, and moving.",
                  "pictorialClue": "🏆 Eloquent."
            }
      ]
},
      {
      "id": "eng-colon-dash",
      "title": "Colons & Dashes: Explanatory Statements vs Dramatic Pauses",
      "category": "English & Vocab",
      "examFrequency": "High (GL, CEM, CSSE, ISEB)",
      "difficulty": "Intermediate",
      "rule": "A COLON introduces: (1) An explanation of the preceding clause, (2) A list, (3) A quotation. The clause BEFORE the colon must be a complete independent sentence!",
      "trap": "DO NOT place a colon after a preposition or verb! WRONG: \"The ingredients are: flour, eggs.\" RIGHT: \"You need three ingredients: flour, eggs, and milk.\"",
      "question": "Which sentence correctly uses a COLON?",
      "visualType": "vr-letter-dial",
      "steps": [
            {
                  "title": "Step 1: Check the clause BEFORE the colon",
                  "detail": "Read the words before the colon. It MUST form a complete standalone sentence."
            },
            {
                  "title": "Step 2: Check the clause AFTER the colon",
                  "detail": "The clause after the colon should explain, clarify, or list the idea introduced."
            },
            {
                  "title": "Step 3: Eliminate pre-verb colons",
                  "detail": "Never put a colon immediately after \"such as\", \"including\", or \"are\"."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "Which sentence uses a colon correctly to introduce a list?",
                  "options": [
                        "I bought: apples, milk, and bread.",
                        "I bought three items: apples, milk, and bread.",
                        "I bought items such as: apples, and bread.",
                        "I: bought apples and bread."
                  ],
                  "correct": 1,
                  "hint": "The clause before the colon must be an independent clause: \"I bought three items: ...\"",
                  "explanation": "Clause before colon is complete.",
                  "pictorialClue": "✍️ Full clause before colon."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "Which sentence uses a colon to introduce an explanation?",
                  "options": [
                        "She had one ambition: to become a doctor.",
                        "She wanted to: be a doctor.",
                        "Her ambition: was becoming a doctor.",
                        "She was: a doctor."
                  ],
                  "correct": 0,
                  "hint": "\"She had one ambition\" is complete, and \"to become a doctor\" explains it.",
                  "explanation": "Colon introduces the explanation of the ambition.",
                  "pictorialClue": "✍️ Explanatory colon."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "What punctuation mark creates an informal, dramatic pause in a sentence?",
                  "options": [
                        "A dash (—)",
                        "A full stop (.)",
                        "A comma (,)",
                        "A hyphen (-)"
                  ],
                  "correct": 0,
                  "hint": "An em-dash creates a dramatic interruption or pause in tone.",
                  "explanation": "A dash creates a dramatic, emphatic pause.",
                  "pictorialClue": "✍️ Dramatic Dash."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "Can a colon connect two independent clauses where the second clause explains the first?",
                  "options": [
                        "Yes, absolutely",
                        "No, never",
                        "Only with a comma",
                        "Only in questions"
                  ],
                  "correct": 0,
                  "hint": "Yes: \"The weather was dreadful: torrential rain flooded the high street.\"",
                  "explanation": "A colon can link two sentences when the second explains the first.",
                  "pictorialClue": "✍️ Explanatory sentence link."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "Which sentence correctly uses a pair of DASHES for parenthesis?",
                  "options": [
                        "The storm—which began at noon—battered the coastline.",
                        "The storm—which began at noon, battered the coastline.",
                        "The storm which began at noon—battered the coastline.",
                        "The—storm which began at noon—battered the coastline."
                  ],
                  "correct": 0,
                  "hint": "Parenthetical dashes must come in matching pairs surrounding the extra detail.",
                  "explanation": "Matching pair of dashes: —which began at noon—.",
                  "pictorialClue": "✍️ Parenthetical dashes."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "What is the main grammatical difference between a hyphen (-) and a dash (—)?",
                  "options": [
                        "A hyphen joins compound words; a dash separates sentence clauses",
                        "They are completely identical",
                        "A dash joins words; a hyphen separates clauses",
                        "Hyphens are only used in numbers"
                  ],
                  "correct": 0,
                  "hint": "Hyphens join compound words (well-known); dashes separate sentence elements.",
                  "explanation": "Hyphens link words; dashes separate thoughts.",
                  "pictorialClue": "⚠️ Hyphen vs Dash."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "Identify the error: \"The recipe requires many spices such as: cumin, paprika, and turmeric.\"",
                  "options": [
                        "Remove the colon after \"such as\"",
                        "Replace the colon with a question mark",
                        "Capitalize cumin",
                        "Remove all commas"
                  ],
                  "correct": 0,
                  "hint": "Never place a colon directly after \"such as\" or \"including\".",
                  "explanation": "Colons must follow complete sentences, never \"such as:\".",
                  "pictorialClue": "⚠️ \"Such as\" colon trap."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "Which sentence uses a colon appropriately?",
                  "options": [
                        "There was only one possible outcome: victory.",
                        "There was: only one outcome.",
                        "The outcome: was victory.",
                        "To achieve: victory was hard."
                  ],
                  "correct": 0,
                  "hint": "\"There was only one possible outcome\" is complete; \"victory\" names it.",
                  "explanation": "Complete clause followed by explanatory noun.",
                  "pictorialClue": "✍️ Single word colon emphasis."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "Which sentence uses dashes for an abrupt afterthought?",
                  "options": [
                        "He promised he would arrive on time—though nobody believed him.",
                        "He promised—he would arrive on time though nobody believed him.",
                        "He promised he—would arrive on time though nobody believed him.",
                        "He—promised he would arrive on time."
                  ],
                  "correct": 0,
                  "hint": "An em-dash at the end introduces an abrupt afterthought or twist.",
                  "explanation": "Dash introduces afterthought.",
                  "pictorialClue": "✍️ Abrupt afterthought."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "In formal grammar, can a colon introduce a direct quotation?",
                  "options": [
                        "Yes, if the preceding clause is independent",
                        "No, only commas can introduce quotations",
                        "Only in plays",
                        "Only for single words"
                  ],
                  "correct": 0,
                  "hint": "Yes: \"The headteacher declared: 'Examinations begin promptly at nine.'\"",
                  "explanation": "Colons properly introduce formal quotations.",
                  "pictorialClue": "🏆 Formal quotation colon."
            }
      ]
},
      {
      "id": "eng-prefix-etymology",
      "title": "Greek & Latin Etymology Roots (Prefix/Suffix Decoders)",
      "category": "English & Vocab",
      "examFrequency": "High (St Olave's, Wilson's, QE Boys)",
      "difficulty": "Intermediate",
      "rule": "Break unfamiliar words into ROOT + PREFIX + SUFFIX! Latin: BENE (good), MAL (bad), CIRCUM (around), CHRON (time), BIO (life), DICT (speak).",
      "trap": "DO NOT guess based on rhyming words! \"Beneficial\" and \"benevolent\" share BENE- (good), not the ending.",
      "question": "What does the Greek root \"CHRON\" mean in words like CHRONOLOGICAL, CHRONOMETER, and SYNCHRONISE?",
      "visualType": "vr-letter-dial",
      "steps": [
            {
                  "title": "Step 1: Compare the words in the family",
                  "detail": "Chronological (in order of time), Chronometer (clock), Synchronise (occur at the same time)."
            },
            {
                  "title": "Step 2: Isolate the shared semantic core",
                  "detail": "All three words deal directly with the passage of <strong>TIME</strong>."
            },
            {
                  "title": "Step 3: Conclude root meaning",
                  "detail": "The Greek root <strong>CHRON</strong> means <strong>TIME</strong>."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "What does the Latin root \"BENE\" mean in BENEVOLENT and BENEFIT?",
                  "options": [
                        "Bad / Evil",
                        "Good / Well",
                        "Large / Great",
                        "Time / Hour"
                  ],
                  "correct": 1,
                  "hint": "BENE means good or well.",
                  "explanation": "BENE = good (opposite of MAL).",
                  "pictorialClue": "🏛️ Latin: BENE = Good."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "What does the prefix \"MAL-\" mean in MALICIOUS and MALFUNCTION?",
                  "options": [
                        "Good / Kind",
                        "Bad / Evil / Faulty",
                        "Small / Tiny",
                        "Fast / Quick"
                  ],
                  "correct": 1,
                  "hint": "MAL- means bad, evil, or faulty.",
                  "explanation": "MAL = bad or faulty.",
                  "pictorialClue": "🏛️ Latin: MAL = Bad."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "What does the root \"BIO\" mean in BIOLOGY and BIOGRAPHY?",
                  "options": [
                        "Earth",
                        "Life",
                        "Water",
                        "Book"
                  ],
                  "correct": 1,
                  "hint": "BIO means life. Biology = study of life; biography = life story.",
                  "explanation": "BIO = life.",
                  "pictorialClue": "🏛️ Greek: BIO = Life."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "What does the prefix \"CIRCUM-\" mean in CIRCUMNAVIGATE and CIRCUMFERENCE?",
                  "options": [
                        "Across",
                        "Around",
                        "Through",
                        "Under"
                  ],
                  "correct": 1,
                  "hint": "CIRCUM- means around. Circumnavigate = sail around.",
                  "explanation": "CIRCUM = around.",
                  "pictorialClue": "🏛️ Latin: CIRCUM = Around."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "What does the root \"DICT\" mean in PREDICT, DICTIONARY, and CONTRADICT?",
                  "options": [
                        "Write",
                        "Speak / Say",
                        "See",
                        "Hear"
                  ],
                  "correct": 1,
                  "hint": "DICT means to speak or say. Predict = say beforehand.",
                  "explanation": "DICT = speak or say.",
                  "pictorialClue": "🏛️ Latin: DICT = Speak."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "What does the root \"TELE\" mean in TELESCOPE and TELEPHONE?",
                  "options": [
                        "Distant / Far",
                        "Sound",
                        "Light",
                        "Fast"
                  ],
                  "correct": 0,
                  "hint": "TELE means distant or far off. Telescope = see far.",
                  "explanation": "TELE = distant / far.",
                  "pictorialClue": "🏛️ Greek: TELE = Distant."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "What does the prefix \"SUB-\" mean in SUBMARINE and SUBTERRANEAN?",
                  "options": [
                        "Above",
                        "Under / Below",
                        "Inside",
                        "Between"
                  ],
                  "correct": 1,
                  "hint": "SUB- means under or below. Submarine = under the sea.",
                  "explanation": "SUB = under.",
                  "pictorialClue": "🏛️ Latin: SUB = Under."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "What does the root \"AQUA\" or \"HYDRO\" mean?",
                  "options": [
                        "Fire",
                        "Water",
                        "Air",
                        "Earth"
                  ],
                  "correct": 1,
                  "hint": "AQUA (Latin) and HYDRO (Greek) both mean water.",
                  "explanation": "AQUA / HYDRO = water.",
                  "pictorialClue": "🏛️ AQUA/HYDRO = Water."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "What does the root \"MORT\" mean in MORTAL and IMMORTALITY?",
                  "options": [
                        "Life",
                        "Death",
                        "Sleep",
                        "Youth"
                  ],
                  "correct": 1,
                  "hint": "MORT means death. Mortal = subject to death.",
                  "explanation": "MORT = death.",
                  "pictorialClue": "🏛️ Latin: MORT = Death."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "What does the word \"OMNIPRESENT\" mean based on its roots (OMNI + PRESENT)?",
                  "options": [
                        "Present nowhere",
                        "Present everywhere simultaneously",
                        "Present only at night",
                        "Present in the past"
                  ],
                  "correct": 1,
                  "hint": "OMNI means \"all\". Omnipresent means present everywhere at all times.",
                  "explanation": "OMNI = all; Omnipresent = everywhere.",
                  "pictorialClue": "🏆 OMNI = All."
            }
      ]
},
      {
      "id": "eng-tone-mood",
      "title": "Literary Tone vs Atmosphere: Identifying Character Perspective",
      "category": "English & Vocab",
      "examFrequency": "High (Henrietta Barnett, Latymer, King's College)",
      "difficulty": "Advanced",
      "rule": "TONE is the author's attitude toward the subject; MOOD is the atmosphere felt by the reader! Identify sensory verbs, evocative adjectives, and rhythm.",
      "trap": "DO NOT confuse the narrator's subjective opinion with objective facts in the passage.",
      "question": "Read the sentence: \"The gloomy castle stood menacingly on the crag, casting elongated shadows like gaunt fingers over the valley.\" What MOOD does this evoke?",
      "visualType": "vr-letter-dial",
      "steps": [
            {
                  "title": "Step 1: Highlight evocative adjectives",
                  "detail": "\"gloomy\", \"menacingly\", \"elongated\", \"gaunt fingers\"."
            },
            {
                  "title": "Step 2: Connect imagery to emotion",
                  "detail": "Gaunt fingers and menacing castles evoke danger, dread, and eerie suspense."
            },
            {
                  "title": "Step 3: Select matching literary term",
                  "detail": "The mood is <strong>ominous and suspenseful</strong>."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "A passage describes birds singing, golden sunshine, and rippling crystal brooks. What mood is created?",
                  "options": [
                        "Sombre and gloomy",
                        "Cheerful and tranquil",
                        "Terrifying and tense",
                        "Hysterical and frantic"
                  ],
                  "correct": 1,
                  "hint": "Sunshine, bird song, and brooks create a cheerful, peaceful mood.",
                  "explanation": "Tranquil and cheerful atmosphere.",
                  "pictorialClue": "📖 Mood: Cheerful & Tranquil."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "A speaker says: \"Oh brilliant! Another puncture on the coldest night of the year!\" What is the speaker's TONE?",
                  "options": [
                        "Joyful",
                        "Sarcastic / Ironical",
                        "Grateful",
                        "Indifferent"
                  ],
                  "correct": 1,
                  "hint": "Calling a flat tyre \"brilliant\" is sarcastic and ironic.",
                  "explanation": "Sarcastic and bitterly ironic tone.",
                  "pictorialClue": "🗣️ Sarcasm."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "Which word describes a dark, depressing, and serious tone?",
                  "options": [
                        "Sombre",
                        "Flippant",
                        "Light-hearted",
                        "Ecstatic"
                  ],
                  "correct": 0,
                  "hint": "Sombre means serious, sad, and gloomy.",
                  "explanation": "Sombre means gravely serious and gloomy.",
                  "pictorialClue": "📖 Sombre."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "A character speaks with short, sharp commands: \"Halt! Drop that! Move back!\" What does this convey?",
                  "options": [
                        "Hesitation",
                        "Authority and urgency",
                        "Affection",
                        "Boredom"
                  ],
                  "correct": 1,
                  "hint": "Imperative verbs and short syntax convey urgent authority.",
                  "explanation": "Imperative syntax conveys urgency and power.",
                  "pictorialClue": "🗣️ Urgent Authority."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "What is the tone of an official encyclopedia article on penguins?",
                  "options": [
                        "Objective and informative",
                        "Passionate and angry",
                        "Melodramatic",
                        "Comic and playful"
                  ],
                  "correct": 0,
                  "hint": "Reference works use an objective, factual, neutral tone.",
                  "explanation": "Encyclopedia uses neutral, objective tone.",
                  "pictorialClue": "📖 Objective tone."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "If a writer treats a serious problem with casual, disrespectful humour, their tone is:",
                  "options": [
                        "Reverent",
                        "Flippant",
                        "Sincere",
                        "Melancholic"
                  ],
                  "correct": 1,
                  "hint": "Flippant means not showing serious respect or appropriate gravity.",
                  "explanation": "Flippant = glibly disrespectful.",
                  "pictorialClue": "📖 Flippant."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "The wind \"shrieked like a wounded animal\" and the shutters \"banged violently\". What atmosphere is created?",
                  "options": [
                        "Peaceful and serene",
                        "Tense and threatening",
                        "Humorous and comical",
                        "Nostalgic"
                  ],
                  "correct": 1,
                  "hint": "Violent sounds and animal shrieks evoke a threatening, frightening atmosphere.",
                  "explanation": "Tense, threatening Gothic atmosphere.",
                  "pictorialClue": "📖 Tense & Threatening."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "A narrator reminisces about \"the golden summers of my youth, when days were long and carefree\". What tone is this?",
                  "options": [
                        "Nostalgic and wistful",
                        "Aggressive and cynical",
                        "Clinical and detached",
                        "Alarmist"
                  ],
                  "correct": 0,
                  "hint": "Looking back warmly at youth is nostalgic and wistful.",
                  "explanation": "Nostalgic longing for the past.",
                  "pictorialClue": "📖 Nostalgic."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "Which stylistic choice speeds up the reading pace to build suspense?",
                  "options": [
                        "Long, complex compound-complex sentences with semicolons",
                        "Short, rapid sentences and fragments with sudden verbs",
                        "Extensive paragraph descriptions of botany",
                        "Passive voice syntax"
                  ],
                  "correct": 1,
                  "hint": "Short sentences and action fragments accelerate pace and heighten suspense.",
                  "explanation": "Short sentences create dramatic urgency.",
                  "pictorialClue": "📖 Syntax and Pace."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "A narrator claims to be the smartest person alive, but constantly stumbles into obvious errors. What literary device is this?",
                  "options": [
                        "Omniscient Narrator",
                        "Unreliable Narrator",
                        "Third-Person Objective",
                        "Allegorical Voice"
                  ],
                  "correct": 1,
                  "hint": "A narrator whose credibility is contradicted by events is an unreliable narrator.",
                  "explanation": "Unreliable narrator.",
                  "pictorialClue": "🏆 Unreliable Narrator."
            }
      ]
},
      {
      "id": "eng-homophone-pairs",
      "title": "Homophones & Commonly Confused Words (Complement vs Compliment)",
      "category": "English & Vocab",
      "examFrequency": "Very High (GL, CEM, CSSE, ISEB)",
      "difficulty": "Intermediate",
      "rule": "Words that SOUND identical but have different SPELLINGS and MEANINGS! ComplIment (with 'I') = praise (\"I like your shoes\"). ComplEment (with 'E') = completes (\"The wine complements the meal\").",
      "trap": "DO NOT confuse Principal (Headteacher / Main) with Principle (Moral rule)! \"The PrincipAL is your PAL.\" \"A principLE is a ruLE.\"",
      "question": "Which sentence correctly uses \"COMPLIMENT\"?",
      "visualType": "vr-letter-dial",
      "steps": [
            {
                  "title": "Step 1: Check the letter clue",
                  "detail": "Compl<strong>i</strong>ment with an 'i' is praise (<strong>I</strong> like you)."
            },
            {
                  "title": "Step 2: Check context",
                  "detail": "\"The teacher paid Maya a lovely compliment on her essay.\""
            },
            {
                  "title": "Step 3: Contrast with complement",
                  "detail": "Complement (with 'e') means to complete or match well."
            }
      ],
      "twins": [
            {
                  "level": "Level 1: Foundation Warm-up",
                  "question": "Choose the correct word: \"The school _______ addressed the assembly.\"",
                  "options": [
                        "Principal",
                        "Principle",
                        "Principle's",
                        "Principal's"
                  ],
                  "correct": 0,
                  "hint": "The head of a school is the Principal (\"the principal is your pal\").",
                  "explanation": "Principal = school leader.",
                  "pictorialClue": "✍️ PrincipAL = Headteacher."
            },
            {
                  "level": "Level 2: Standard 11+ Style",
                  "question": "Choose the correct word: \"She refused to lie on _______.\"",
                  "options": [
                        "Principal",
                        "Principle",
                        "Principals",
                        "Principles"
                  ],
                  "correct": 1,
                  "hint": "A moral rule or code of conduct is a principle.",
                  "explanation": "Principle = moral rule.",
                  "pictorialClue": "✍️ PrincipLE = Moral RuLE."
            },
            {
                  "level": "Level 3: Common 11+ Trap Variant",
                  "question": "Choose the correct word: \"The cold air had a negative _______ on his asthma.\"",
                  "options": [
                        "affect",
                        "effect",
                        "affects",
                        "effective"
                  ],
                  "correct": 1,
                  "hint": "Effect is a noun (the result); Affect is a verb (to influence). Here \"a negative effect\" requires a noun.",
                  "explanation": "Effect is the noun.",
                  "pictorialClue": "✍️ RAVEN: Remember Affect Verb Effect Noun."
            },
            {
                  "level": "Level 4: Super-Selective Grammar School",
                  "question": "Choose the correct word: \"Heavy rain will _______ our travel plans tomorrow.\"",
                  "options": [
                        "affect",
                        "effect",
                        "effecting",
                        "effects"
                  ],
                  "correct": 0,
                  "hint": "Here we need a verb: \"will affect our travel plans\".",
                  "explanation": "Affect is the verb meaning to influence.",
                  "pictorialClue": "✍️ Affect = Verb."
            },
            {
                  "level": "Level 5: Core 11+ Mastery",
                  "question": "Choose the correct word: \"The car was _______ at the red traffic light.\"",
                  "options": [
                        "stationery",
                        "stationary",
                        "stationarily",
                        "stationed"
                  ],
                  "correct": 1,
                  "hint": "StationAry with an 'A' means not moving (stands still). StationEry with an 'E' is for Envelopes and pens.",
                  "explanation": "Stationary = not moving.",
                  "pictorialClue": "✍️ StationAry = Standing still."
            },
            {
                  "level": "Level 6: Multi-Step Word Puzzle",
                  "question": "Choose the correct word: \"I bought pens, paper, and envelopes at the _______ shop.\"",
                  "options": [
                        "stationary",
                        "stationery",
                        "stationer's",
                        "station"
                  ],
                  "correct": 1,
                  "hint": "StationEry with 'E' = Envelopes and paper.",
                  "explanation": "StationEry = paper and pens.",
                  "pictorialClue": "✍️ StationEry = Envelopes."
            },
            {
                  "level": "Level 7: QE Boys / Henrietta Barnett Challenge",
                  "question": "Choose the correct word: \"The ship dropped its _______ in the harbour.\"",
                  "options": [
                        "anchor",
                        "anker",
                        "ancor",
                        "anker's"
                  ],
                  "correct": 0,
                  "hint": "A ship drops an anchor.",
                  "explanation": "Anchor is the nautical heavy weight.",
                  "pictorialClue": "✍️ Anchor."
            },
            {
                  "level": "Level 8: Independent Schools Scholarship",
                  "question": "Choose the correct word: \"The medicine will help _______ the pain.\"",
                  "options": [
                        "lessen",
                        "lesson",
                        "lessing",
                        "lessoned"
                  ],
                  "correct": 0,
                  "hint": "Lessen means to make less or reduce. Lesson is a period of learning.",
                  "explanation": "Lessen = make smaller/less.",
                  "pictorialClue": "✍️ Lessen vs Lesson."
            },
            {
                  "level": "Level 9: Real 11+ Past Paper Variant",
                  "question": "Choose the correct word: \"The knight took the horse by the _______.\"",
                  "options": [
                        "reins",
                        "reigns",
                        "rains",
                        "raynes"
                  ],
                  "correct": 0,
                  "hint": "Reins are leather straps used to guide a horse.",
                  "explanation": "Reins = straps for a horse; Reigns = monarch rules.",
                  "pictorialClue": "✍️ Reins for a horse."
            },
            {
                  "level": "Level 10: Scholar Grand Mastery 🏆",
                  "question": "Choose the correct word: \"She gave him valuable _______ on how to study for the 11+.\"",
                  "options": [
                        "advise",
                        "advice",
                        "adviced",
                        "advicing"
                  ],
                  "correct": 1,
                  "hint": "Advice is the noun (the guidance); Advise is the verb (to guide).",
                  "explanation": "Advice is the noun; advise is the verb.",
                  "pictorialClue": "🏆 Advice (Noun) vs Advise (Verb)."
            }
      ]
}
    ]
  };

  // ── STATE ──────────────────────────────────────────────────────────
  let currentSubject = 'maths';
  let activeMethod = methodsDatabase.maths[0];
  let currentStepRevealed = 1;
  let currentTwinIdx = 0;
  let masteredList = JSON.parse(localStorage.getItem('karat_mastered_techniques') || '["math-rev-pct", "nvr-cube-nets", "vr-hidden-words"]');
  let solvedTwins = JSON.parse(localStorage.getItem('karat_solved_twins') || '{}');
  let cubeRotX = -20;
  let cubeRotY = 35;
  let compassAngle = 0;

  // Pre-load Web Speech API Female Voices
  let cachedVoices = [];
  function loadVoices() {
    if ('speechSynthesis' in window) {
      cachedVoices = window.speechSynthesis.getVoices();
    }
  }
  loadVoices();
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  // DOM Elements
  const container = document.getElementById('methods-list-container');
  const tagEl = document.getElementById('active-method-tag');
  const titleEl = document.getElementById('active-method-title');
  const ruleEl = document.getElementById('active-method-rule');
  const trapEl = document.getElementById('active-method-trap');
  const questionTextEl = document.getElementById('walkthrough-question-text');
  const visualAreaEl = document.getElementById('visual-model-area');
  const stepsListEl = document.getElementById('interactive-steps-list');
  const stepCountStatusEl = document.getElementById('step-count-status');
  const masteryCountEl = document.getElementById('mastery-count');

  // Tabs DOM
  const tabWalkthrough = document.getElementById('tab-walkthrough');
  const tabTwin = document.getElementById('tab-twin');
  const panelWalkthrough = document.getElementById('panel-walkthrough');
  const panelTwin = document.getElementById('panel-twin');
  const btnGotoTwin = document.getElementById('btn-goto-twin');
  const btnReadAloud = document.getElementById('btn-read-aloud');
  const iconReadAloud = document.getElementById('icon-read-aloud');
  const textReadAloud = document.getElementById('text-read-aloud');
  const speechBanner = document.getElementById('tutor-speech-banner');
  const speechText = document.getElementById('tutor-speech-text');

  // Multi-Level Twin Challenge DOM
  const twinQuestionTextEl = document.getElementById('twin-question-text');
  const twinOptionsGridEl = document.getElementById('twin-options-grid');
  const btnShowTwinHint = document.getElementById('btn-show-twin-hint');
  const btnShowTwinDiagram = document.getElementById('btn-show-twin-diagram');
  const twinHintBox = document.getElementById('twin-hint-box');
  const twinFeedbackBanner = document.getElementById('twin-feedback-banner');
  const twinLevelLabel = document.getElementById('twin-level-label');
  const twinStatusPill = document.getElementById('twin-status-pill');
  const twinInlineClueText = document.getElementById('twin-inline-clue-text');

  function updateMasteryCounter() {
    if (masteryCountEl) {
      masteryCountEl.textContent = `${masteredList.length}`;
    }
  }

  // ── RENDER METHODS LIST ────────────────────────────────────────────
  function renderMethodsList() {
    const methods = methodsDatabase[currentSubject] || [];
    if (!container) return;

    container.innerHTML = methods.map(m => {
      const isSelected = m.id === activeMethod.id;
      const isMastered = masteredList.includes(m.id);

      return `
        <div class="method-card p-4 rounded-2xl border-2 transition-all cursor-pointer ${
          isSelected 
            ? 'bg-primary-fixed/20 border-primary ring-2 ring-primary/20 shadow-md' 
            : 'bg-surface-container-lowest border-outline-variant/30 hover:border-primary/50'
        }" data-method-id="${m.id}">
          <div class="flex items-start justify-between gap-2 mb-1.5">
            <span class="text-[10px] font-black uppercase tracking-wider ${
              isSelected ? 'text-primary' : 'text-on-surface-variant'
            }">
              ${m.category}
            </span>
            ${isMastered ? `
              <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black flex items-center gap-1 shadow-xs">
                <span class="material-symbols-outlined text-[12px]">check</span> Mastered
              </span>
            ` : `
              <span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                10 Practice Questions
              </span>
            `}
          </div>
          <h3 class="text-sm font-bold text-on-surface leading-snug line-clamp-2 mb-2">
            ${m.title}
          </h3>
          <div class="flex items-center gap-2 text-[11px] text-on-surface-variant">
            <span class="flex items-center gap-1">
              <span class="material-symbols-outlined text-xs text-amber-500">star</span>
              ${m.examFrequency.split('(')[0].trim()}
            </span>
            <span>•</span>
            <span class="font-medium text-primary">${m.difficulty}</span>
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.method-card').forEach(card => {
      card.onclick = () => {
        const methodId = card.dataset.methodId;
        const target = methods.find(x => x.id === methodId);
        if (target) loadMethod(target);
      };
    });
  }

  // ── LOAD ACTIVE METHOD ─────────────────────────────────────────────
  function loadMethod(method) {
    activeMethod = method;
    currentStepRevealed = 1;
    currentTwinIdx = 0;

    if (tagEl) tagEl.textContent = `${method.category} • Pictorial Learning`;
    if (titleEl) titleEl.textContent = method.title;
    if (ruleEl) ruleEl.textContent = method.rule;
    if (trapEl) trapEl.textContent = method.trap;
    if (questionTextEl) questionTextEl.innerHTML = method.question;

    if (tabTwin) {
      tabTwin.innerHTML = `<span class="material-symbols-outlined text-lg">edit_note</span> 2. Now You Solve! (${method.twins.length} Practice Questions)`;
    }
    if (btnGotoTwin) {
      btnGotoTwin.innerHTML = `<span>Start Practice Questions (${method.twins.length} Levels) →</span><span class="material-symbols-outlined text-base">arrow_forward</span>`;
    }

    renderMethodsList();
    renderVisualModel(method);
    renderStepsList(method);
    renderQuestionLevelPills();
    setupTwinChallenge(method, 0);
    showWalkthroughTab();
  }

  // ── 3D & PICTORIAL VISUAL MODEL STAGE (20 DEDICATED VISUALIZERS) ───
  function renderVisualModel(method) {
    if (!visualAreaEl) return;

    if (method.visualType === 'cube-3d-interactive') {
      // 1. REAL CSS 3D ROTATING CUBE
      visualAreaEl.innerHTML = `
        <div class="space-y-4 select-none">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1.5 text-amber-400">
              <span class="material-symbols-outlined text-base">3d_rotation</span>
              Interactive 3D Folded Cube (Rule of Opposites)
            </span>
            <span class="text-xs text-slate-400">Click buttons or drag to rotate in 3D</span>
          </div>

          <!-- 3D Perspective Box -->
          <div class="py-6 flex items-center justify-center">
            <div style="perspective: 800px; width: 140px; height: 140px;">
              <div id="cube-3d-box" style="width: 100%; height: 100%; position: relative; transform-style: preserve-3d; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); transform: rotateX(-20deg) rotateY(35deg); cursor: grab;">
                <!-- Face A (Front - Red) -->
                <div style="position: absolute; width: 140px; height: 140px; background: linear-gradient(135deg, #ef4444, #dc2626); border: 3px solid white; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 26px; font-weight: 900; color: white; transform: rotateY(0deg) translateZ(70px); border-radius: 14px; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);">
                  <span>A</span>
                  <span class="text-[9px] uppercase tracking-widest font-normal text-white/80">Front</span>
                </div>
                <!-- Face C (Back - Red / Opposite to A) -->
                <div style="position: absolute; width: 140px; height: 140px; background: linear-gradient(135deg, #b91c1c, #991b1b); border: 3px solid white; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 26px; font-weight: 900; color: white; transform: rotateY(180deg) translateZ(70px); border-radius: 14px; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);">
                  <span>C</span>
                  <span class="text-[9px] uppercase tracking-widest font-normal text-white/80">Opposite A</span>
                </div>
                <!-- Face E (Top - Amber) -->
                <div style="position: absolute; width: 140px; height: 140px; background: linear-gradient(135deg, #f59e0b, #d97706); border: 3px solid white; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 26px; font-weight: 900; color: white; transform: rotateX(90deg) translateZ(70px); border-radius: 14px; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);">
                  <span>E</span>
                  <span class="text-[9px] uppercase tracking-widest font-normal text-white/80">Top Flap</span>
                </div>
                <!-- Face F (Bottom - Amber / Opposite to E) -->
                <div style="position: absolute; width: 140px; height: 140px; background: linear-gradient(135deg, #b45309, #92400e); border: 3px solid white; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 26px; font-weight: 900; color: white; transform: rotateX(-90deg) translateZ(70px); border-radius: 14px; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);">
                  <span>F</span>
                  <span class="text-[9px] uppercase tracking-widest font-normal text-white/80">Opposite E</span>
                </div>
                <!-- Face B (Right - Indigo) -->
                <div style="position: absolute; width: 140px; height: 140px; background: linear-gradient(135deg, #6366f1, #4f46e5); border: 3px solid white; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 26px; font-weight: 900; color: white; transform: rotateY(90deg) translateZ(70px); border-radius: 14px; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);">
                  <span>B</span>
                  <span class="text-[9px] uppercase tracking-widest font-normal text-white/80">Right</span>
                </div>
                <!-- Face D (Left - Indigo / Opposite to B) -->
                <div style="position: absolute; width: 140px; height: 140px; background: linear-gradient(135deg, #4338ca, #3730a3); border: 3px solid white; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 26px; font-weight: 900; color: white; transform: rotateY(-90deg) translateZ(70px); border-radius: 14px; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);">
                  <span>D</span>
                  <span class="text-[9px] uppercase tracking-widest font-normal text-white/80">Opposite B</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 3D Controls Strip -->
          <div class="flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-white/10">
            <button id="btn-spin-cube" class="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all flex items-center gap-1 cursor-pointer">
              <span class="material-symbols-outlined text-sm">sync</span>
              <span>Spin 3D Cube</span>
            </button>
            <button id="btn-view-ac" class="px-3.5 py-1.5 rounded-full bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 text-xs font-bold transition-all border border-rose-400/30 flex items-center gap-1 cursor-pointer">
              <span>View Opposite Pair (A &amp; C)</span>
            </button>
            <button id="btn-view-bd" class="px-3.5 py-1.5 rounded-full bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 text-xs font-bold transition-all border border-indigo-400/30 flex items-center gap-1 cursor-pointer">
              <span>View Opposite Pair (B &amp; D)</span>
            </button>
          </div>
        </div>
      `;

      const cubeBox = document.getElementById('cube-3d-box');
      const btnSpin = document.getElementById('btn-spin-cube');
      const btnAC = document.getElementById('btn-view-ac');
      const btnBD = document.getElementById('btn-view-bd');

      if (btnSpin && cubeBox) {
        btnSpin.onclick = () => {
          cubeRotY += 120;
          cubeRotX = (cubeRotX === -20) ? 20 : -20;
          cubeBox.style.transform = `rotateX(${cubeRotX}deg) rotateY(${cubeRotY}deg)`;
        };
      }
      if (btnAC && cubeBox) {
        btnAC.onclick = () => {
          cubeBox.style.transform = `rotateX(0deg) rotateY(180deg)`;
        };
      }
      if (btnBD && cubeBox) {
        btnBD.onclick = () => {
          cubeBox.style.transform = `rotateX(0deg) rotateY(90deg)`;
        };
      }
    } else if (method.visualType === 'bar-percentage') {
      // 2. PICTORIAL SINGAPORE BAR MODEL
      visualAreaEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1.5 text-indigo-400">
              <span class="material-symbols-outlined text-base">view_column</span>
              Pictorial Singapore Bar Model (10 Equal 10% Units)
            </span>
            <span class="text-amber-400">Full Price = 100% (£120)</span>
          </div>
          
          <div class="w-full bg-slate-800/90 p-4 rounded-xl border border-white/10 space-y-3">
            <div class="grid grid-cols-10 gap-1.5 h-14">
              ${Array.from({length: 8}).map((_, i) => `
                <div class="bg-gradient-to-b from-indigo-500 to-indigo-700 rounded-lg flex flex-col items-center justify-center text-[11px] font-mono font-bold text-white shadow transform transition-transform hover:scale-105">
                  <span>£12</span>
                  <span class="text-[8px] opacity-75">10%</span>
                </div>
              `).join('')}
              ${Array.from({length: 2}).map((_, i) => `
                <div class="bg-rose-500/30 border-2 border-dashed border-rose-400 rounded-lg flex flex-col items-center justify-center text-[11px] font-mono font-bold text-rose-300">
                  <span>£12</span>
                  <span class="text-[8px] text-rose-300">20% OFF</span>
                </div>
              `).join('')}
            </div>

            <div class="flex justify-between text-xs pt-1 font-bold">
              <span class="text-indigo-300 flex items-center gap-1">
                ◄── Sale Price = £96 (8 Units) ──►
              </span>
              <span class="text-rose-400">◄ Discount (2 Units) ►</span>
            </div>
          </div>
          <div class="p-3 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-xs text-center font-mono text-indigo-200">
            Mathematical Deduction: 8 Units = £96  ➔  1 Unit = £96 ÷ 8 = £12  ➔  10 Units = 10 × £12 = £120
          </div>
        </div>
      `;
    } else if (method.visualType === 'bar-ratio') {
      // 3. PICTORIAL RATIO UNIT BLOCKS
      visualAreaEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span>Pictorial Ratio Unit Blocks (3 : 5)</span>
            <span class="text-amber-400">Total = 8 Units = 72 stickers</span>
          </div>
          <div class="w-full bg-slate-800/90 p-4 rounded-xl border border-white/10 space-y-3">
            <div class="space-y-2">
              <div class="flex items-center gap-3">
                <span class="w-20 text-xs font-bold text-sky-300 flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">boy</span> Liam (3):
                </span>
                <div class="flex gap-1.5 flex-1">
                  <div class="w-14 h-9 rounded-lg bg-sky-600 flex items-center justify-center font-bold text-xs shadow">9</div>
                  <div class="w-14 h-9 rounded-lg bg-sky-600 flex items-center justify-center font-bold text-xs shadow">9</div>
                  <div class="w-14 h-9 rounded-lg bg-sky-600 flex items-center justify-center font-bold text-xs shadow">9</div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <span class="w-20 text-xs font-bold text-emerald-300 flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">girl</span> Maya (5):
                </span>
                <div class="flex gap-1.5 flex-1">
                  <div class="w-14 h-9 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-xs shadow">9</div>
                  <div class="w-14 h-9 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-xs shadow">9</div>
                  <div class="w-14 h-9 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-xs shadow">9</div>
                  <div class="w-14 h-9 rounded-lg bg-emerald-500 border-2 border-amber-300 flex items-center justify-center font-bold text-xs text-amber-200 shadow">9*</div>
                  <div class="w-14 h-9 rounded-lg bg-emerald-500 border-2 border-amber-300 flex items-center justify-center font-bold text-xs text-amber-200 shadow">9*</div>
                </div>
              </div>
            </div>
            <p class="text-xs text-amber-300 text-center font-mono mt-2 pt-2 border-t border-white/10">
              Difference = 2 Extra Blocks (*) = 2 × 9 = 18 stickers!
            </p>
          </div>
        </div>
      `;
    } else if (method.visualType === 'balance-scale') {
      // 4. PICTORIAL ALGEBRA BALANCE SCALE
      visualAreaEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1 text-emerald-400">
              <span class="material-symbols-outlined text-base">scale</span>
              Pictorial Balance Scale (Equal Weight Pan Method)
            </span>
            <span class="text-amber-400">3x + 14 = 5x - 6</span>
          </div>

          <div class="p-6 bg-slate-800/80 rounded-xl border border-white/10 flex flex-col items-center">
            <!-- Balance Beam -->
            <div class="w-full max-w-md flex items-center justify-between relative pb-8">
              <!-- Left Pan -->
              <div class="flex flex-col items-center gap-2">
                <div class="flex items-center gap-1">
                  <div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs text-white">x</div>
                  <div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs text-white">x</div>
                  <div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs text-white">x</div>
                  <div class="w-10 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-black text-xs text-white">+14</div>
                </div>
                <div class="w-36 h-2 bg-slate-500 rounded-full shadow"></div>
                <span class="text-xs font-bold text-indigo-300">Pan 1: (3x + 14)</span>
              </div>

              <!-- Fulcrum Pivot in Middle -->
              <div class="absolute left-1/2 top-4 -translate-x-1/2 flex flex-col items-center">
                <div class="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-amber-400"></div>
                <div class="w-8 h-3 bg-amber-500 rounded-sm"></div>
                <span class="text-xs font-black text-amber-300 mt-1">= EQUAL =</span>
              </div>

              <!-- Right Pan -->
              <div class="flex flex-col items-center gap-2">
                <div class="flex items-center gap-1">
                  <div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs text-white">x</div>
                  <div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs text-white">x</div>
                  <div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs text-white">x</div>
                  <div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs text-white">x</div>
                  <div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs text-white">x</div>
                  <div class="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center font-black text-xs text-white">-6</div>
                </div>
                <div class="w-44 h-2 bg-slate-500 rounded-full shadow"></div>
                <span class="text-xs font-bold text-indigo-300">Pan 2: (5x - 6)</span>
              </div>
            </div>
            <p class="text-xs text-slate-300 font-mono text-center">
              Subtract 3x from both pans ➔ 14 = 2x - 6 ➔ Add 6 to both ➔ 20 = 2x ➔ x = 10
            </p>
          </div>
        </div>
      `;
    } else if (method.visualType === 'triangle-dst') {
      // 5. INTERACTIVE SPEED-DISTANCE-TIME TRIANGLE
      visualAreaEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1.5 text-amber-400">
              <span class="material-symbols-outlined text-base">change_history</span>
              Interactive Speed-Distance-Time Pyramid
            </span>
            <span class="text-sky-300">Minutes Trap: 45 min = 3/4 hr</span>
          </div>

          <div class="p-6 bg-slate-800/80 rounded-xl border border-white/10 flex flex-col items-center">
            <!-- Interactive DST Pyramid -->
            <div class="w-64 h-56 relative flex flex-col items-center justify-end">
              <!-- Top Apex: Distance -->
              <div class="w-32 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-t-3xl border-2 border-white flex flex-col items-center justify-center shadow-lg transform hover:scale-105 transition-transform cursor-pointer" id="dst-d">
                <span class="text-2xl font-black text-white">D</span>
                <span class="text-[9px] font-bold text-amber-100 uppercase">Distance (km/mi)</span>
              </div>
              <!-- Divider Line -->
              <div class="w-56 h-1 bg-white my-1 rounded-full shadow"></div>
              <!-- Bottom Base: Speed & Time -->
              <div class="w-56 h-20 flex gap-2">
                <div class="flex-1 bg-gradient-to-br from-sky-500 to-sky-600 rounded-bl-3xl border-2 border-white flex flex-col items-center justify-center shadow-lg transform hover:scale-105 transition-transform cursor-pointer" id="dst-s">
                  <span class="text-2xl font-black text-white">S</span>
                  <span class="text-[9px] font-bold text-sky-100 uppercase">Speed (km/h)</span>
                </div>
                <div class="w-4 flex items-center justify-center font-black text-white text-lg">×</div>
                <div class="flex-1 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-br-3xl border-2 border-white flex flex-col items-center justify-center shadow-lg transform hover:scale-105 transition-transform cursor-pointer" id="dst-t">
                  <span class="text-2xl font-black text-white">T</span>
                  <span class="text-[9px] font-bold text-emerald-100 uppercase">Time (Hours!)</span>
                </div>
              </div>
            </div>

            <div class="mt-4 p-3 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-center text-amber-300 w-full max-w-md" id="dst-formula-display">
              Formula: Distance = Speed × Time ➔ 72 km/h × 0.75 hr = 54 km
            </div>
          </div>
        </div>
      `;
    } else if (method.visualType === 'rectilinear-shape') {
      // 6. COMPOUND L-SHAPE PUSH-OUT PERIMETER
      visualAreaEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1.5 text-emerald-400">
              <span class="material-symbols-outlined text-base">crop_square</span>
              Pictorial Push-Out Method (Perimeter Preservation)
            </span>
            <span class="text-amber-300">Perimeter = 2 × (10 + 8) = 36m</span>
          </div>

          <div class="p-6 bg-slate-800/80 rounded-xl border border-white/10 flex flex-col items-center">
            <!-- SVG Push-Out L-Shape -->
            <svg viewBox="0 0 320 220" class="w-full max-w-sm h-48">
              <!-- Bounding Box (Dashed) -->
              <rect x="30" y="20" width="240" height="180" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="6,6" rx="6"></rect>
              
              <!-- Actual L-Shape -->
              <path d="M 30,20 L 150,20 L 150,90 L 270,90 L 270,200 L 30,200 Z" fill="rgba(99, 102, 241, 0.25)" stroke="#6366f1" stroke-width="3"></path>
              
              <!-- Push-Out Arrows -->
              <!-- Horizontal Inner Edge pushed UP -->
              <line x1="210" y1="90" x2="210" y2="25" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)" stroke-dasharray="4,4"></line>
              <!-- Vertical Inner Edge pushed RIGHT -->
              <line x1="150" y1="55" x2="265" y2="55" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)" stroke-dasharray="4,4"></line>

              <!-- Dimension Labels -->
              <text x="150" y="15" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">Width = 10m</text>
              <text x="15" y="115" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle" transform="rotate(-90 15 115)">Height = 8m</text>
              <text x="190" y="50" fill="#10b981" font-size="10" font-weight="bold">Push Out ➔</text>
              <text x="220" y="80" fill="#f59e0b" font-size="10" font-weight="bold">Push Up ▲</text>
            </svg>

            <div class="p-3 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-center text-emerald-300 w-full max-w-md">
              Push-Out Principle: Inner horizontal + vertical edges push out to form complete 10m × 8m rectangle!
            </div>
          </div>
        </div>
      `;
    } else if (method.visualType === 'fraction-wall') {
      // 7. COLORFUL FRACTION WALL
      visualAreaEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1.5 text-sky-400">
              <span class="material-symbols-outlined text-base">view_day</span>
              Interactive Fraction Brick Wall (Equivalence Alignment)
            </span>
            <span class="text-amber-300">5/8 (15/24) vs 7/12 (14/24)</span>
          </div>

          <div class="p-4 bg-slate-800/80 rounded-xl border border-white/10 space-y-2">
            <!-- 1 Whole -->
            <div class="w-full h-8 bg-indigo-600 rounded-md flex items-center justify-center font-bold text-xs text-white shadow">
              1 Whole (100%)
            </div>
            <!-- Halves -->
            <div class="grid grid-cols-2 gap-1 h-8">
              <div class="bg-sky-600 rounded-md flex items-center justify-center font-bold text-xs text-white shadow">1/2</div>
              <div class="bg-sky-600 rounded-md flex items-center justify-center font-bold text-xs text-white shadow">1/2</div>
            </div>
            <!-- Quarters -->
            <div class="grid grid-cols-4 gap-1 h-8">
              ${Array.from({length: 4}).map(() => `<div class="bg-teal-600 rounded-md flex items-center justify-center font-bold text-xs text-white shadow">1/4</div>`).join('')}
            </div>
            <!-- Eighths -->
            <div class="grid grid-cols-8 gap-1 h-8">
              ${Array.from({length: 5}).map(() => `<div class="bg-amber-600 border border-amber-300 rounded-md flex items-center justify-center font-bold text-xs text-white shadow">1/8</div>`).join('')}
              ${Array.from({length: 3}).map(() => `<div class="bg-slate-700/50 rounded-md flex items-center justify-center font-bold text-[10px] text-slate-400">1/8</div>`).join('')}
            </div>
            <!-- Twelfths -->
            <div class="grid grid-cols-12 gap-1 h-8">
              ${Array.from({length: 7}).map(() => `<div class="bg-rose-600 border border-rose-300 rounded-md flex items-center justify-center font-bold text-[10px] text-white shadow">1/12</div>`).join('')}
              ${Array.from({length: 5}).map(() => `<div class="bg-slate-700/50 rounded-md flex items-center justify-center font-bold text-[9px] text-slate-400">1/12</div>`).join('')}
            </div>
          </div>
          <p class="text-xs text-center font-mono text-amber-200">
            Common Denominator 24: 5/8 = 15/24 (Amber Bar) is larger than 7/12 = 14/24 (Rose Bar) by 1/24!
          </p>
        </div>
      `;
    } else if (method.visualType === 'fold-mirror') {
      // 8. PAPER FOLDING & HOLE PUNCHING MIRROR REFLECTION
      visualAreaEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1.5 text-amber-400">
              <span class="material-symbols-outlined text-base">flip</span>
              Step-by-Step Paper Fold &amp; Mirror Reflection
            </span>
            <span class="text-sky-300">2 Folds = 4 Symmetrical Layers</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 p-4 bg-slate-800/80 rounded-xl border border-white/10 text-center">
            <!-- Step 1 -->
            <div class="p-3 rounded-lg bg-slate-900 border border-white/10 space-y-2">
              <span class="text-[10px] font-bold text-slate-400 uppercase">1. Flat Sheet</span>
              <div class="w-16 h-16 mx-auto bg-indigo-900/60 border-2 border-indigo-400 rounded-md flex items-center justify-center">
                <span class="text-[10px] text-indigo-300">Square</span>
              </div>
            </div>
            <!-- Step 2 -->
            <div class="p-3 rounded-lg bg-slate-900 border border-white/10 space-y-2">
              <span class="text-[10px] font-bold text-slate-400 uppercase">2. Fold 1 (Half)</span>
              <div class="w-16 h-8 mx-auto bg-indigo-700 border-2 border-amber-400 border-dashed rounded-md flex items-center justify-center">
                <span class="text-[9px] text-amber-200">2 Layers</span>
              </div>
            </div>
            <!-- Step 3 -->
            <div class="p-3 rounded-lg bg-slate-900 border border-white/10 space-y-2">
              <span class="text-[10px] font-bold text-slate-400 uppercase">3. Fold 2 + Punch</span>
              <div class="w-10 h-10 mx-auto bg-indigo-600 border-2 border-white rounded-md flex items-center justify-center relative">
                <div class="w-3 h-3 rounded-full bg-rose-500 border border-white shadow"></div>
              </div>
            </div>
            <!-- Step 4 -->
            <div class="p-3 rounded-lg bg-slate-900 border border-white/10 space-y-2">
              <span class="text-[10px] font-bold text-emerald-400 uppercase">4. Unfolded (4 Holes)</span>
              <div class="w-16 h-16 mx-auto bg-indigo-900/80 border-2 border-emerald-400 rounded-md grid grid-cols-2 p-2 gap-2">
                <div class="w-3 h-3 rounded-full bg-rose-500 mx-auto"></div>
                <div class="w-3 h-3 rounded-full bg-rose-500 mx-auto"></div>
                <div class="w-3 h-3 rounded-full bg-rose-500 mx-auto"></div>
                <div class="w-3 h-3 rounded-full bg-rose-500 mx-auto"></div>
              </div>
            </div>
          </div>
          <p class="text-xs text-center font-mono text-emerald-300">
            Mirror Principle: Unfolding reflects holes across both horizontal and vertical symmetry axes!
          </p>
        </div>
      `;
    } else if (method.visualType === 'matrix-features') {
      // 9. NVR CODE MATRIX SEPARATION GRID
      visualAreaEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1.5 text-sky-400">
              <span class="material-symbols-outlined text-base">grid_view</span>
              Feature Separation Matrix
            </span>
            <span class="text-amber-300">Letter 1 = Shape | Letter 2 = Shading</span>
          </div>

          <div class="grid grid-cols-3 gap-3 p-4 bg-slate-800/80 rounded-xl border border-white/10 text-center text-xs font-mono">
            <div class="p-3 rounded-lg bg-slate-900 border border-white/10">
              <div class="w-10 h-10 mx-auto rounded-full bg-indigo-500 border-2 border-white mb-2"></div>
              <span class="font-bold text-white">Code: AB</span><br/>
              <span class="text-[10px] text-slate-400">Circle (A) + Shaded (B)</span>
            </div>
            <div class="p-3 rounded-lg bg-slate-900 border border-white/10">
              <div class="w-10 h-10 mx-auto rounded-full border-2 border-white mb-2 flex items-center justify-center">
                <span class="text-xs text-slate-300">///</span>
              </div>
              <span class="font-bold text-white">Code: AC</span><br/>
              <span class="text-[10px] text-slate-400">Circle (A) + Striped (C)</span>
            </div>
            <div class="p-3 rounded-lg bg-slate-900 border border-amber-400/50 bg-amber-500/10">
              <div class="w-10 h-10 mx-auto bg-slate-700 border-2 border-white mb-2 flex items-center justify-center">
                <span class="text-xs text-amber-300">///</span>
              </div>
              <span class="font-bold text-amber-300">Target: BC</span><br/>
              <span class="text-[10px] text-amber-200">Square (B) + Striped (C)</span>
            </div>
          </div>
        </div>
      `;
    } else if (method.visualType === 'compass-rotations') {
      // 10. INTERACTIVE COMPASS ANGLE DIAL
      visualAreaEl.innerHTML = `
        <div class="space-y-4 select-none">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1.5 text-amber-400">
              <span class="material-symbols-outlined text-base">explore</span>
              Interactive 8-Point Compass Rose Dial
            </span>
            <span class="text-sky-300" id="compass-angle-label">Current: North (0°)</span>
          </div>

          <div class="p-6 bg-slate-800/80 rounded-xl border border-white/10 flex flex-col items-center">
            <div class="w-48 h-48 rounded-full border-4 border-indigo-500/40 relative flex items-center justify-center bg-slate-900/80 shadow-inner">
              <!-- Compass Points -->
              <span class="absolute top-2 font-black text-xs text-white">N</span>
              <span class="absolute right-2 font-black text-xs text-white">E</span>
              <span class="absolute bottom-2 font-black text-xs text-white">S</span>
              <span class="absolute left-2 font-black text-xs text-white">W</span>
              <span class="absolute top-8 right-8 font-bold text-[10px] text-slate-400">NE</span>
              <span class="absolute bottom-8 right-8 font-bold text-[10px] text-slate-400">SE</span>
              <span class="absolute bottom-8 left-8 font-bold text-[10px] text-slate-400">SW</span>
              <span class="absolute top-8 left-8 font-bold text-[10px] text-slate-400">NW</span>

              <!-- Rotating Compass Needle -->
              <div id="compass-needle" style="width: 6px; height: 140px; position: absolute; transform: rotate(0deg); transition: transform 0.5s ease-out;">
                <div class="w-full h-1/2 bg-rose-500 rounded-t-full shadow"></div>
                <div class="w-full h-1/2 bg-slate-300 rounded-b-full"></div>
              </div>
              <div class="w-4 h-4 rounded-full bg-amber-400 border-2 border-white z-10"></div>
            </div>

            <!-- Compass Rotation Buttons -->
            <div class="flex flex-wrap items-center justify-center gap-2 mt-4">
              <button id="btn-comp-45" class="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all cursor-pointer">+45° (NE)</button>
              <button id="btn-comp-90" class="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all cursor-pointer">+90° (E)</button>
              <button id="btn-comp-135" class="px-3 py-1 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/30 text-xs font-bold transition-all cursor-pointer">+135° (SE)</button>
              <button id="btn-comp-180" class="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all cursor-pointer">+180° (S)</button>
            </div>
          </div>
        </div>
      `;

      const needle = document.getElementById('compass-needle');
      const label = document.getElementById('compass-angle-label');
      function setCompass(deg, name) {
        if (needle) needle.style.transform = `rotate(${deg}deg)`;
        if (label) label.textContent = `Current: ${name} (${deg}°)`;
      }
      document.getElementById('btn-comp-45')?.addEventListener('click', () => setCompass(45, 'North-East'));
      document.getElementById('btn-comp-90')?.addEventListener('click', () => setCompass(90, 'East'));
      document.getElementById('btn-comp-135')?.addEventListener('click', () => setCompass(135, 'South-East'));
      document.getElementById('btn-comp-180')?.addEventListener('click', () => setCompass(180, 'South'));
    } else if (method.visualType === 'analogy-swap') {
      // 11. SHAPE ANALOGIES 3-STEP SWAP FLOWCHART
      visualAreaEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1.5 text-sky-400">
              <span class="material-symbols-outlined text-base">swap_horiz</span>
              Shape Analogy 3-Step Swap Flowchart
            </span>
            <span class="text-amber-300">Figure A is to B as C is to D</span>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 bg-slate-800/80 rounded-xl border border-white/10">
            <div class="p-3 rounded-lg bg-slate-900 border border-white/10 text-center flex-1">
              <span class="text-[10px] text-slate-400 font-bold block mb-1">Figure A</span>
              <div class="w-12 h-12 rounded-full border-2 border-white mx-auto flex items-center justify-center">
                <span class="text-xs text-amber-300">▲</span>
              </div>
            </div>
            <span class="text-lg font-black text-amber-400">➔</span>
            <div class="p-3 rounded-lg bg-slate-900 border border-white/10 text-center flex-1">
              <span class="text-[10px] text-slate-400 font-bold block mb-1">Figure B (Swapped)</span>
              <div class="w-12 h-12 border-2 border-white mx-auto flex items-center justify-center bg-indigo-600/40">
                <span class="text-xs text-white">●</span>
              </div>
            </div>
            <span class="text-xs font-bold text-slate-300">AS</span>
            <div class="p-3 rounded-lg bg-slate-900 border border-amber-400/40 text-center flex-1 bg-amber-500/10">
              <span class="text-[10px] text-amber-300 font-bold block mb-1">Figure C (Star in Square)</span>
              <div class="w-12 h-12 border-2 border-amber-300 mx-auto flex items-center justify-center">
                <span class="text-xs text-amber-300">★</span>
              </div>
            </div>
            <span class="text-lg font-black text-emerald-400">➔</span>
            <div class="p-3 rounded-lg bg-slate-900 border border-emerald-400 text-center flex-1 bg-emerald-500/10">
              <span class="text-[10px] text-emerald-300 font-bold block mb-1">Figure D (Answer)</span>
              <div class="w-12 h-12 border-2 border-emerald-400 mx-auto flex items-center justify-center bg-emerald-600/40">
                <span class="text-xs text-white">■</span>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (method.visualType === 'hidden-word-span') {
      // 12. HIDDEN WORD ILLUMINATED SPAN BRIDGE
      visualAreaEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1.5 text-amber-400">
              <span class="material-symbols-outlined text-base">text_fields</span>
              Illuminated Word Span Bridge
            </span>
            <span class="text-rose-400">Must cross the word boundary!</span>
          </div>

          <div class="p-6 bg-slate-800/80 rounded-xl border border-white/10 flex flex-col items-center">
            <div class="flex items-center gap-3 text-lg font-mono font-black text-white">
              <span class="px-3 py-2 rounded-lg bg-slate-900 border border-white/10">s o u</span>
              <span class="px-3 py-2 rounded-lg bg-rose-600 border-2 border-rose-300 text-white shadow-lg animate-pulse">p</span>
              <span class="text-slate-500 font-normal">[SPACE]</span>
              <span class="px-3 py-2 rounded-lg bg-rose-600 border-2 border-rose-300 text-white shadow-lg animate-pulse">i n</span>
              <span class="px-3 py-2 rounded-lg bg-rose-600 border-2 border-rose-300 text-white shadow-lg animate-pulse">k</span>
              <span class="px-3 py-2 rounded-lg bg-slate-900 border border-white/10">i t c h e n</span>
            </div>
            <div class="mt-4 px-4 py-2 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-xs font-bold">
              🌉 Hidden Word Revealed: P + IN + K = "PINK" (4 Letters)
            </div>
          </div>
        </div>
      `;
    } else if (method.visualType === 'cipher-wheel') {
      // 13. DUAL-TRACK ALPHABET JUMP RULER
      visualAreaEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1.5 text-sky-400">
              <span class="material-symbols-outlined text-base">tune</span>
              Dual-Track Alphabet Jump Track (+3 Jump)
            </span>
            <span class="text-amber-300">B(2) ➔ E(5) ➔ H(8) ➔ K(11) ➔ N(14)</span>
          </div>

          <div class="p-4 bg-slate-800/80 rounded-xl border border-white/10 overflow-x-auto">
            <div class="flex gap-2 min-w-[500px] justify-between text-center font-mono text-xs">
              ${['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'].map((ch, i) => {
                const isHit = ['B','E','H','K','N'].includes(ch);
                return `
                  <div class="flex-1 p-2 rounded-lg ${isHit ? 'bg-indigo-600 text-white font-black ring-2 ring-amber-400' : 'bg-slate-900 text-slate-400'}">
                    <span>${ch}</span><br/>
                    <span class="text-[9px] opacity-75">${i + 1}</span>
                  </div>
                `;
              }).join('')}
            </div>
            <p class="text-xs text-center font-mono text-amber-300 mt-3">
              Jump Formula: +3 constant step. 11 (K) + 3 = 14 (N)!
            </p>
          </div>
        </div>
      `;
    } else if (method.visualType === 'polarity-scale') {
      // 14. SEMANTIC POLARITY THERMOMETER
      visualAreaEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1.5 text-amber-400">
              <span class="material-symbols-outlined text-base">thermostat</span>
              Semantic Sentiment Polarity Scale (-5 to +5)
            </span>
            <span class="text-emerald-400">Opposite Extremes</span>
          </div>

          <div class="p-6 bg-slate-800/80 rounded-xl border border-white/10 space-y-4">
            <!-- Polarity Gradient Bar -->
            <div class="w-full h-8 rounded-full bg-gradient-to-r from-rose-600 via-amber-400 to-emerald-600 flex items-center justify-between px-4 text-xs font-black text-white shadow-inner">
              <span>-5 (Destitute)</span>
              <span class="text-slate-900">0 (Neutral)</span>
              <span>+5 (Affluent)</span>
            </div>
            <div class="grid grid-cols-2 gap-4 text-xs">
              <div class="p-3 rounded-lg bg-rose-950/60 border border-rose-500/30 text-rose-200">
                <strong>Destitute / Penurious (-5):</strong> Having zero money or means of subsistence.
              </div>
              <div class="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-200">
                <strong>Affluent / Opulent (+5):</strong> Possessing immense abundance and wealth.
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (method.visualType === 'bridge-blocks') {
      // 15. COMPOUND WORD PUZZLE TRAIN
      visualAreaEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1.5 text-emerald-400">
              <span class="material-symbols-outlined text-base">extension</span>
              Compound Word Puzzle Train
            </span>
            <span class="text-amber-300">Word 1 + [BRIDGE] + Word 2</span>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 p-6 bg-slate-800/80 rounded-xl border border-white/10 text-center font-mono">
            <div class="p-4 rounded-xl bg-indigo-700 text-white font-black text-base shadow">
              POST
            </div>
            <span class="text-lg font-black text-amber-400">+</span>
            <div class="p-4 rounded-xl bg-amber-500 text-slate-950 font-black text-lg border-2 border-white shadow-lg animate-bounce">
              [ CARD ]
            </div>
            <span class="text-lg font-black text-amber-400">+</span>
            <div class="p-4 rounded-xl bg-teal-700 text-white font-black text-base shadow">
              BOARD
            </div>
          </div>
          <p class="text-xs text-center font-mono text-emerald-300">
            Two Valid Compounds: POSTCARD (Car 1 + Bridge) and CARDBOARD (Bridge + Car 2)!
          </p>
        </div>
      `;
    } else if (method.visualType === 'verb-anchor') {
      // 16. SHUFFLED SENTENCES MAGNETIC TILE RAIL
      visualAreaEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1.5 text-sky-400">
              <span class="material-symbols-outlined text-base">view_headline</span>
              Magnetic Sentence Rail &amp; Ejected Rogue Word
            </span>
            <span class="text-rose-400">Rogue Word: OVER</span>
          </div>

          <div class="p-6 bg-slate-800/80 rounded-xl border border-white/10 space-y-4">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-3.5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-sm shadow">The</span>
              <span class="px-3.5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-sm shadow">brown</span>
              <span class="px-3.5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-sm shadow">dog</span>
              <span class="px-3.5 py-2 rounded-xl bg-amber-500 text-slate-950 font-black text-sm shadow border border-white">barked [VERB]</span>
              <span class="px-3.5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-sm shadow">loudly.</span>
            </div>
            <div class="p-3 rounded-lg bg-rose-500/20 border border-rose-400/40 text-rose-300 text-xs font-bold flex items-center justify-between">
              <span>🚫 Rogue Word Left Out: "OVER"</span>
              <span class="text-[10px] uppercase">Cannot fit grammatically</span>
            </div>
          </div>
        </div>
      `;
    } else if (method.visualType === 'vocab-scroll') {
      // 17. ANTIQUE VICTORIAN ILLUMINATED SCROLL
      visualAreaEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1.5 text-amber-400">
              <span class="material-symbols-outlined text-base">history_edu</span>
              Victorian Lexicon Manuscript Card
            </span>
            <span class="text-amber-300">Latin Root: imperium</span>
          </div>

          <div class="p-6 bg-gradient-to-br from-amber-950/40 to-slate-900 rounded-xl border-2 border-amber-500/40 space-y-3 font-serif">
            <div class="flex items-center justify-between border-b border-amber-500/30 pb-2">
              <h4 class="text-xl font-bold text-amber-200">IMPERIOUS (Adjective)</h4>
              <span class="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30 font-sans">Formal Victorian</span>
            </div>
            <p class="text-xs text-amber-100 italic leading-relaxed">
              "The beadle spoke in an imperious tone, brooking no hesitation from the frightened boys."
            </p>
            <div class="pt-2 text-xs font-sans text-amber-300 flex items-center gap-4">
              <span><strong>Definition:</strong> Domineering, authoritative, commanding.</span>
              <span><strong>Antonym:</strong> Humble, submissive.</span>
            </div>
          </div>
        </div>
      `;
    } else if (method.visualType === 'clue-detective') {
      // 18. DETECTIVE INFERENCE COMPARISON CARDS
      visualAreaEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1.5 text-sky-400">
              <span class="material-symbols-outlined text-base">search</span>
              Stated Fact (Camera) vs Inference (Detective)
            </span>
            <span class="text-amber-300">Evidence Deduction</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-800/80 rounded-xl border border-white/10 text-xs">
            <div class="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2">
              <div class="flex items-center gap-2 text-sky-400 font-bold">
                <span class="material-symbols-outlined text-base">photo_camera</span>
                The Camera (Stated Fact)
              </div>
              <p class="text-slate-300">
                "Arthur shivered and pulled his thin, threadbare coat tighter." (Explicit text written on the page).
              </p>
            </div>
            <div class="p-4 rounded-xl bg-indigo-950/70 border border-indigo-400/40 space-y-2">
              <div class="flex items-center gap-2 text-amber-300 font-bold">
                <span class="material-symbols-outlined text-base">psychology</span>
                The Detective (Scholar Inference)
              </div>
              <p class="text-indigo-200">
                Arthur is impoverished and suffering from the bitter cold. (Logical deduction between the lines).
              </p>
            </div>
          </div>
        </div>
      `;
    } else if (method.visualType === 'sentence-wagons') {
      // 19. TWO STANDALONE SENTENCE WAGONS WITH SEMICOLON COUPLER
      visualAreaEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1.5 text-emerald-400">
              <span class="material-symbols-outlined text-base">train</span>
              The Semicolon Coupler: Two Standalone Sentence Wagons
            </span>
            <span class="text-amber-300">Both sides must have Subject + Verb</span>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-3 p-6 bg-slate-800/80 rounded-xl border border-white/10">
            <div class="p-4 rounded-xl bg-indigo-700/80 border border-indigo-400 text-white font-bold text-xs flex-1 text-center shadow">
              <span class="text-[10px] text-indigo-200 uppercase block mb-1">Sentence Wagon 1</span>
              "The rain poured down heavily"
            </div>
            <div class="w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg border-2 border-white">
              ;
            </div>
            <div class="p-4 rounded-xl bg-teal-700/80 border border-teal-400 text-white font-bold text-xs flex-1 text-center shadow">
              <span class="text-[10px] text-teal-200 uppercase block mb-1">Sentence Wagon 2</span>
              "the garden was flooded"
            </div>
          </div>
        </div>
      `;
    } else if (method.visualType === 'figurative-cards') {
      // 20. FIGURATIVE LANGUAGE THREE-WAY ILLUSTRATED CARDS
      visualAreaEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between text-xs font-bold text-slate-300">
            <span class="flex items-center gap-1.5 text-amber-400">
              <span class="material-symbols-outlined text-base">palette</span>
              Figurative Language Trio: Simile, Metaphor, Personification
            </span>
            <span class="text-sky-300">Visual Comparison</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-800/80 rounded-xl border border-white/10 text-xs text-center">
            <div class="p-3 rounded-lg bg-slate-900 border border-sky-400/40 space-y-1">
              <span class="font-black text-sky-400 block">SIMILE</span>
              <span class="text-[10px] text-slate-300">Uses "like" or "as"</span>
              <p class="text-sky-200 italic">"Fought like a lion"</p>
            </div>
            <div class="p-3 rounded-lg bg-slate-900 border border-amber-400/40 space-y-1">
              <span class="font-black text-amber-400 block">METAPHOR</span>
              <span class="text-[10px] text-slate-300">Directly says A = B</span>
              <p class="text-amber-200 italic">"He was a lion in battle"</p>
            </div>
            <div class="p-3 rounded-lg bg-slate-900 border border-emerald-400/40 space-y-1">
              <span class="font-black text-emerald-400 block">PERSONIFICATION</span>
              <span class="text-[10px] text-slate-300">Human traits to object</span>
              <p class="text-emerald-200 italic">"The clock ticked nervously"</p>
            </div>
          </div>
        </div>
      `;
    }
  }

  // ── RENDER INTERACTIVE STEP REVEALER ───────────────────────────────
  function renderStepsList(method) {
    if (!stepsListEl) return;

    if (stepCountStatusEl) {
      stepCountStatusEl.textContent = `Showing ${currentStepRevealed} of ${method.steps.length} Steps`;
    }

    stepsListEl.innerHTML = method.steps.map((st, i) => {
      const isVisible = i < currentStepRevealed;
      const isCurrent = i === currentStepRevealed - 1;

      return `
        <div class="step-card p-4 rounded-2xl border transition-all ${
          isVisible 
            ? 'bg-surface border-primary/30 shadow-sm' 
            : 'bg-surface-container-low border-outline-variant/10 opacity-40 pointer-events-none'
        }">
          <div class="flex items-center justify-between">
            <h5 class="text-xs sm:text-sm font-black text-on-surface flex items-center gap-2">
              <span class="w-6 h-6 rounded-full ${
                isVisible ? 'bg-primary text-white' : 'bg-slate-300 text-slate-700'
              } text-xs flex items-center justify-center font-bold">
                ${i + 1}
              </span>
              ${st.title}
            </h5>
            ${isCurrent && currentStepRevealed < method.steps.length ? `
              <button class="btn-reveal-next px-3 py-1 rounded-full bg-primary text-white text-[11px] font-bold shadow hover:scale-105 transition-transform cursor-pointer">
                Reveal Next Step →
              </button>
            ` : ''}
          </div>
          ${isVisible ? `
            <div class="text-xs sm:text-sm text-on-surface-variant leading-relaxed mt-2 pl-8">
              ${st.detail}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    const nextBtn = stepsListEl.querySelector('.btn-reveal-next');
    if (nextBtn) {
      nextBtn.onclick = () => {
        currentStepRevealed++;
        renderStepsList(method);
      };
    }
  }

  // ── MULTI-LEVEL QUESTION PROGRESSION (Q1 - Q10) ────────────────────
  function renderQuestionLevelPills() {
    const container = document.getElementById('question-level-pills');
    if (!container || !activeMethod) return;

    const twins = activeMethod.twins || [];
    container.innerHTML = twins.map((t, idx) => {
      const levelShortNames = [
        'Foundation',
        'Standard',
        'Exam Trap',
        'Super-Selective',
        'Core Mastery',
        'Multi-Step',
        'QE / HBS',
        'Ind. Schools',
        'Past Paper',
        'Grand Mastery 🏆'
      ];
      const name = levelShortNames[idx] || ('Level ' + (idx + 1));
      const isSolved = solvedTwins && solvedTwins[activeMethod.id + '_' + idx];

      return `
        <button class="level-pill px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
          idx === currentTwinIdx 
            ? 'bg-primary text-on-primary font-black shadow-sm ring-2 ring-primary/40' 
            : isSolved
              ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25'
              : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high border border-outline-variant/20'
        }" data-level-idx="${idx}">
          <span>Q${idx + 1}: ${name}</span>
          ${isSolved ? '<span class="material-symbols-outlined text-[14px] text-emerald-400">check_circle</span>' : ''}
        </button>
      `;
    }).join('');

    container.querySelectorAll('.level-pill').forEach(btn => {
      btn.onclick = () => {
        currentTwinIdx = parseInt(btn.dataset.levelIdx, 10);
        renderQuestionLevelPills();
        setupTwinChallenge(activeMethod, currentTwinIdx);
      };
    });
  }

  function setupTwinChallenge(method, levelIdx) {
    if (!twinQuestionTextEl || !twinOptionsGridEl) return;
    const twins = method.twins || [];
    const activeTwin = twins[levelIdx] || twins[0];
    if (!activeTwin) return;

    if (twinLevelLabel) {
      twinLevelLabel.innerHTML = `
        <span class="material-symbols-outlined text-sm text-indigo-600">target</span>
        ${activeTwin.level}
      `;
    }
    if (twinStatusPill) {
      twinStatusPill.textContent = 'Unsolved';
      twinStatusPill.className = 'text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-200/80 text-indigo-900';
    }

    twinQuestionTextEl.innerHTML = activeTwin.question;
    if (twinInlineClueText) {
      twinInlineClueText.innerHTML = activeTwin.pictorialClue || '📊 Apply the pictorial method learned in Step 1!';
    }

    if (twinHintBox) {
      twinHintBox.classList.add('hidden');
      twinHintBox.innerHTML = `💡 <strong>Hint:</strong> ${activeTwin.hint || 'Review the visual model!'}`;
    }
    if (twinFeedbackBanner) {
      twinFeedbackBanner.classList.add('hidden');
      twinFeedbackBanner.className = 'hidden p-5 rounded-2xl text-center font-bold text-sm shadow-md transition-all';
    }

    twinOptionsGridEl.innerHTML = activeTwin.options.map((opt, i) => `
      <button class="twin-option-btn p-4 rounded-2xl border-2 border-outline-variant/30 bg-surface hover:border-primary text-left text-sm font-bold text-on-surface transition-all flex items-center gap-3 cursor-pointer" data-idx="${i}">
        <span class="w-8 h-8 rounded-xl bg-surface-container-high text-on-surface-variant font-black flex items-center justify-center text-xs flex-shrink-0">
          ${String.fromCharCode(65 + i)}
        </span>
        <span class="text-base">${opt}</span>
      </button>
    `).join('');

    twinOptionsGridEl.querySelectorAll('.twin-option-btn').forEach(btn => {
      btn.onclick = () => {
        const chosen = parseInt(btn.dataset.idx, 10);
        handleTwinAnswer(chosen, activeTwin);
      };
    });
  }

  function handleTwinAnswer(chosen, twin) {
    const isCorrect = chosen === twin.correct;
    const buttons = twinOptionsGridEl.querySelectorAll('.twin-option-btn');

    buttons.forEach((b, i) => {
      if (i === twin.correct) {
        b.className = 'twin-option-btn p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-emerald-950 font-black text-sm flex items-center gap-3 shadow';
      } else if (i === chosen) {
        b.className = 'twin-option-btn p-4 rounded-2xl border-2 border-rose-500 bg-rose-50 text-rose-950 font-bold text-sm flex items-center gap-3';
      } else {
        b.classList.add('opacity-40');
      }
    });

    if (twinFeedbackBanner) {
      twinFeedbackBanner.classList.remove('hidden');
      if (isCorrect) {
        if (twinStatusPill) {
          twinStatusPill.textContent = 'Solved! ✅';
          twinStatusPill.className = 'text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900';
        }
        twinFeedbackBanner.className = 'p-5 rounded-2xl text-center font-bold text-sm shadow-md bg-emerald-600 text-white animate-bounce';
        twinFeedbackBanner.innerHTML = `
          🎉 <strong>BRILLIANT WORK! METHOD APPLIED ACCURATELY!</strong><br/>
          <span class="font-medium text-xs text-emerald-100">${twin.explanation}</span><br/>
          <div class="mt-3 flex items-center justify-center gap-3">
            <span class="px-3 py-1 rounded-full bg-white text-emerald-900 text-xs font-black">+50 XP Awarded</span>
            ${currentTwinIdx < (activeMethod.twins.length - 1) ? `
              <button id="btn-next-level" class="px-4 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-indigo-950 text-xs font-black cursor-pointer shadow">
                Try Next Level (Q${currentTwinIdx + 2}) →
              </button>
            ` : `
              <span class="px-3 py-1 rounded-full bg-amber-300 text-indigo-950 text-xs font-black">All ${activeMethod.twins.length} Levels Mastered! 🏆</span>
            `}
          </div>
        `;

        const nextLvlBtn = document.getElementById('btn-next-level');
        if (nextLvlBtn) {
          nextLvlBtn.onclick = () => {
            currentTwinIdx++;
            renderQuestionLevelPills();
            setupTwinChallenge(activeMethod, currentTwinIdx);
          };
        }

        solvedTwins[activeMethod.id + '_' + currentTwinIdx] = true;
        localStorage.setItem('karat_solved_twins', JSON.stringify(solvedTwins));
        renderQuestionLevelPills();

        if (!masteredList.includes(activeMethod.id)) {
          masteredList.push(activeMethod.id);
          localStorage.setItem('karat_mastered_techniques', JSON.stringify(masteredList));
          updateMasteryCounter();
          renderMethodsList();
        }

        if (window.AIBuddy) {
          window.AIBuddy.showToast('Method Level Solved!', `Great job! You solved ${twin.level}. +50 XP added to your scholar score.`);
        }
      } else {
        twinFeedbackBanner.className = 'p-5 rounded-2xl text-center font-bold text-sm shadow-md bg-rose-600 text-white';
        twinFeedbackBanner.innerHTML = `
          ❌ <strong>Almost there! Watch out for the trap!</strong><br/>
          <span class="font-medium text-xs text-rose-100">${twin.explanation}</span>
        `;
      }
    }
  }

  // ── TAB SWITCHING ──────────────────────────────────────────────────
  function showWalkthroughTab() {
    if (tabWalkthrough) {
      tabWalkthrough.className = 'pb-3 px-4 font-black text-sm border-b-2 border-primary text-primary flex items-center gap-2 transition-all cursor-pointer';
    }
    if (tabTwin) {
      tabTwin.className = 'pb-3 px-4 font-bold text-sm text-on-surface-variant hover:text-on-surface flex items-center gap-2 transition-all cursor-pointer';
    }
    if (panelWalkthrough) panelWalkthrough.classList.remove('hidden');
    if (panelTwin) panelTwin.classList.add('hidden');
  }

  function showTwinTab() {
    if (tabTwin) {
      tabTwin.className = 'pb-3 px-4 font-black text-sm border-b-2 border-primary text-primary flex items-center gap-2 transition-all cursor-pointer';
    }
    if (tabWalkthrough) {
      tabWalkthrough.className = 'pb-3 px-4 font-bold text-sm text-on-surface-variant hover:text-on-surface flex items-center gap-2 transition-all cursor-pointer';
    }
    if (panelTwin) panelTwin.classList.remove('hidden');
    if (panelWalkthrough) panelWalkthrough.classList.add('hidden');
  }

  if (tabWalkthrough) tabWalkthrough.onclick = showWalkthroughTab;
  if (tabTwin) tabTwin.onclick = showTwinTab;
  if (btnGotoTwin) btnGotoTwin.onclick = showTwinTab;

  if (btnShowTwinHint) {
    btnShowTwinHint.onclick = () => {
      if (twinHintBox) twinHintBox.classList.toggle('hidden');
    };
  }

  if (btnShowTwinDiagram) {
    btnShowTwinDiagram.onclick = () => {
      showWalkthroughTab();
      if (window.AIBuddy) {
        window.AIBuddy.showToast('Reference Model', 'Reviewing the visual pictorial model before solving.');
      }
    };
  }

  // ── BRITISH FEMALE TUTOR VOICE (MS. CLARA) ─────────────────────────
  if (btnReadAloud) {
    btnReadAloud.onclick = () => {
      if (!('speechSynthesis' in window)) {
        if (window.AIBuddy) window.AIBuddy.showToast('Audio Notice', 'Speech synthesis is not supported on this browser.');
        return;
      }

      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        if (iconReadAloud) iconReadAloud.textContent = 'record_voice_over';
        if (textReadAloud) textReadAloud.textContent = 'Listen to Ms. Clara';
        if (speechBanner) speechBanner.classList.add('hidden');
        return;
      }

      const spokenText = `Hello scholar! I am Ms. Clara. Let's master ${activeMethod.title}. Here is the golden rule: ${activeMethod.rule}. And here is the eleven-plus exam trap to watch out for: ${activeMethod.trap}.`;
      const utterance = new SpeechSynthesisUtterance(spokenText);

      // Reload fresh voices if list was empty
      let voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) {
        voices = cachedVoices;
      }

      // Explicit British/English female voices priority list
      const femaleVoiceNames = [
        'Google UK English Female',
        'Microsoft Sonia Online (Natural)',
        'Microsoft Libby Online (Natural)',
        'Microsoft Maisie Online (Natural)',
        'Microsoft Sonia',
        'Microsoft Zira',
        'Microsoft Jenny',
        'Samantha',
        'Victoria',
        'Karen',
        'Moira',
        'Tessa',
        'Fiona',
        'Veena',
        'Serena',
        'Kate',
        'Stephanie'
      ];

      // Exclude known male voice names
      const maleVoiceNames = ['Alex', 'Daniel', 'Oliver', 'Fred', 'George', 'David', 'Mark', 'Arthur', 'Ryan', 'Guy', 'Thomas', 'Male'];

      let chosenVoice = null;

      // 1. Exact female voice match
      for (const name of femaleVoiceNames) {
        const found = voices.find(v => v.name.includes(name));
        if (found) { chosenVoice = found; break; }
      }

      // 2. Generic female filter (excluding male names)
      if (!chosenVoice) {
        chosenVoice = voices.find(v => 
          (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('woman')) &&
          !maleVoiceNames.some(m => v.name.includes(m))
        );
      }

      // 3. Fallback to en-GB or en voice not matching male names
      if (!chosenVoice) {
        chosenVoice = voices.find(v => 
          v.lang.startsWith('en-GB') && !maleVoiceNames.some(m => v.name.includes(m))
        ) || voices.find(v => 
          v.lang.startsWith('en') && !maleVoiceNames.some(m => v.name.includes(m))
        );
      }

      if (chosenVoice) {
        utterance.voice = chosenVoice;
      }

      // Female tutor pitch & deliberate pace
      utterance.pitch = 1.22; // Distinct friendly feminine pitch
      utterance.rate = 0.90;  // Clear, encouraging pace for 9-11 year old scholars

      utterance.onstart = () => {
        if (iconReadAloud) iconReadAloud.textContent = 'stop_circle';
        if (textReadAloud) textReadAloud.textContent = 'Pause Ms. Clara';
        if (speechBanner) {
          speechBanner.classList.remove('hidden');
          if (speechText) speechText.textContent = `"${activeMethod.rule}"`;
        }
      };

      utterance.onend = () => {
        if (iconReadAloud) iconReadAloud.textContent = 'record_voice_over';
        if (textReadAloud) textReadAloud.textContent = 'Listen to Ms. Clara';
        if (speechBanner) speechBanner.classList.add('hidden');
      };

      utterance.onerror = () => {
        if (iconReadAloud) iconReadAloud.textContent = 'record_voice_over';
        if (textReadAloud) textReadAloud.textContent = 'Listen to Ms. Clara';
        if (speechBanner) speechBanner.classList.add('hidden');
      };

      window.speechSynthesis.speak(utterance);
    };
  }

  // ── SUBJECT FILTER TABS ────────────────────────────────────────────
  document.querySelectorAll('.ls-tab-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.ls-tab-btn').forEach(b => {
        b.className = 'ls-tab-btn px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-surface-container hover:bg-surface-container-high text-on-surface transition-all flex items-center gap-2 cursor-pointer';
      });
      btn.className = 'ls-tab-btn px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider bg-primary text-on-primary shadow-sm transition-all flex items-center gap-2 cursor-pointer';
      currentSubject = btn.dataset.subject;
      const methods = methodsDatabase[currentSubject] || [];
      if (methods.length > 0) {
        loadMethod(methods[0]);
      }
    };
  });

  // Initial Load
  updateMasteryCounter();
  loadMethod(methodsDatabase.maths[0]);
});
