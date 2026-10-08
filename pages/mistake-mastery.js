// Learnly 11+ — Mistake Mastery Drill & Re-attempt Engine
// Multi-Exam Mistake Vault: displays mistakes across ALL attempted mock exams with filtering and re-attempt drills

LearnlyRouter.register('mistake-mastery', function() {
  return `
  <div class="space-y-8 pb-12">
    <!-- Header Banner -->
    <section class="relative flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 rounded-3xl overflow-hidden shadow-md mb-6" style="background: linear-gradient(135deg, #f43f5e 0%, #be123c 100%);">
      <div class="absolute -right-12 -top-12 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute left-1/4 bottom-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      
      <div class="relative z-10 flex items-center gap-4 text-white">
        <a href="#scorecard" class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors shadow-sm">
          <span class="material-symbols-outlined">arrow_back</span>
        </a>
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2.5 py-0.5 rounded-full bg-white/20 text-white font-bold text-[10px] uppercase tracking-wider">Multi-Exam Error Vault</span>
            <span class="text-xs text-rose-200">Across All Completed Mocks</span>
          </div>
          <h1 class="text-3xl font-extrabold tracking-tight">Mistake Mastery Vault</h1>
          <p class="text-sm font-bold text-white/80 mt-0.5">Diagnose, re-attempt, and eradicate cognitive traps from all 11+ exams.</p>
        </div>
      </div>
      <div class="flex items-center gap-3 relative z-10">
        <a href="#learn-solve" class="px-4 py-2 rounded-2xl bg-white text-rose-900 font-extrabold text-xs shadow-md hover:bg-white/90 transition-all flex items-center gap-1.5 cursor-pointer">
          <span class="material-symbols-outlined text-sm text-amber-500">lightbulb</span>
          <span>Learn &amp; Solve Methods →</span>
        </a>
        <div class="px-4 py-2 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center gap-2 shadow-sm">
          <div class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
          <span class="text-white font-bold text-sm tracking-wide" id="mistakes-count-badge">Loading errors...</span>
        </div>
      </div>
    </section>

    <!-- EXAM & SUBJECT FILTER CONTROLS (All Mocks vs Single Mock) -->
    <div class="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <!-- Mock Exam Filter Buttons -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1" id="exam-filter-group">
          <button class="exam-filter-pill px-4 py-2 rounded-full bg-rose-600 text-white font-extrabold text-xs shadow transition-all cursor-pointer" data-exam="all">
            All Mock Exams
          </button>
          <button class="exam-filter-pill px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer" data-exam="mock-04">
            Mock #04 (Latest)
          </button>
          <button class="exam-filter-pill px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer" data-exam="mock-03">
            Mock #03
          </button>
          <button class="exam-filter-pill px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer" data-exam="mock-02">
            Mock #02
          </button>
          <button class="exam-filter-pill px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer" data-exam="mock-01">
            Mock #01
          </button>
          <button class="exam-filter-pill px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer" data-exam="practice-arena">
            Practice Arena
          </button>
        </div>

        <!-- Status Toggle -->
        <div class="flex items-center gap-2 shrink-0">
          <button id="toggle-unresolved-btn" class="px-3.5 py-1.5 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 font-bold text-xs">
            Show Remaining (<span id="unresolved-count">0</span>)
          </button>
          <button id="toggle-resolved-btn" class="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 font-bold text-xs">
            Mastered (<span id="resolved-count">0</span>)
          </button>
        </div>
      </div>

      <!-- Subject Filter Row -->
      <div class="flex items-center gap-2 pt-2 border-t border-slate-100 overflow-x-auto text-xs">
        <span class="text-slate-400 font-bold uppercase text-[10px] tracking-wider shrink-0">Subject:</span>
        <button class="subject-filter-pill px-3 py-1 rounded-lg bg-slate-900 text-white font-bold" data-subject="all">All</button>
        <button class="subject-filter-pill px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold" data-subject="Mathematics">Mathematics</button>
        <button class="subject-filter-pill px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold" data-subject="Verbal Reasoning">Verbal Reasoning</button>
        <button class="subject-filter-pill px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold" data-subject="Non-Verbal Reasoning">Non-Verbal</button>
        <button class="subject-filter-pill px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold" data-subject="English">English</button>
      </div>
    </div>

    <!-- MISTAKE CARDS CONTAINER -->
    <div id="mistakes-cards-grid" class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Dynamic mistake items loaded by JS -->
    </div>

    <!-- RE-ATTEMPT MODAL -->
    <div id="reattempt-modal" class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm hidden items-center justify-center p-4">
      <div class="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-rose-600 text-2xl">refresh</span>
            <div>
              <h3 class="text-base font-extrabold text-slate-900" id="reattempt-modal-title">Re-attempt Question</h3>
              <p class="text-xs text-slate-500" id="reattempt-modal-sub">Earn +35 XP by selecting the correct answer</p>
            </div>
          </div>
          <button id="close-reattempt-modal-btn" class="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>

        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-4 text-sm font-bold text-slate-800" id="reattempt-stem">
          <!-- Question stem -->
        </div>

        <div class="space-y-2 mb-5" id="reattempt-options">
          <!-- Options rendered -->
        </div>

        <div id="reattempt-feedback" class="hidden p-3 rounded-xl mb-4 text-xs font-bold leading-relaxed">
          <!-- Feedback message -->
        </div>

        <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
          <button id="cancel-reattempt-btn" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100">Cancel</button>
          <button id="submit-reattempt-btn" class="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md transition-all">Check My Answer</button>
        </div>
      </div>
    </div>
  </div>`;
}, function() {
  // Master Catalog of Seeded Mistakes from Historical Mocks (#01, #02, #03, #04)
  const SEED_MISTAKES = [
    // Mock 04
    { id: 'MV-04-01', exam_id: 'mock-04', exam_title: 'Mock #04 (Verbal & NVR Focus)', q_num: 'Q3', topic: '3D Net Folding', subject: 'Non-Verbal Reasoning', desc: 'Hexagonal net with 6 faces — identify the correct folded solid and opposite pairs.', stem: 'Which 3D shape CANNOT be formed from the hexagonal net shown?', yourAns: 'B', correct: 'D', explanation: 'Count the faces and examine opposite pairs. Faces with opposite orientation cannot be adjacent.', resolved: false },
    { id: 'MV-04-02', exam_id: 'mock-04', exam_title: 'Mock #04 (Verbal & NVR Focus)', q_num: 'Q8', topic: 'Compound Words', subject: 'Verbal Reasoning', desc: 'Find the hidden compound word in "nightwatchman"', stem: 'Find the two root words that make up this compound occupation.', yourAns: 'D', correct: 'A', explanation: 'The hidden compound word is formed by "night" + "watchman". Examine letter boundaries.', resolved: false },
    { id: 'MV-04-03', exam_id: 'mock-04', exam_title: 'Mock #04 (Verbal & NVR Focus)', q_num: 'Q11', topic: 'Complex Hexagonal Net', subject: 'Non-Verbal Reasoning', desc: 'Advanced net with pattern matching on faces', stem: 'Determine which cube corresponds to the pattern on the net.', yourAns: 'C', correct: 'A', explanation: 'Track shading orientation: the striped face must touch the diagonal chevron.', resolved: false },
    { id: 'MV-04-04', exam_id: 'mock-04', exam_title: 'Mock #04 (Verbal & NVR Focus)', q_num: 'Q14', topic: 'Lexical Breakdown', subject: 'Verbal Reasoning', desc: '"Untoward" vs "Unseemly" — subtle synonym distinction', stem: 'Choose the word closest in meaning to UNTOWARD.', yourAns: 'B', correct: 'C', explanation: 'Untoward means unexpected and inappropriate; unseemly means not conforming to decorum.', resolved: false },
    
    // Mock 03
    { id: 'MV-03-01', exam_id: 'mock-03', exam_title: 'Mock #03 (CEM Standard Mixed)', q_num: 'Q18', topic: 'Decimal Division', subject: 'Mathematics', desc: 'Multi-step word problem with decimal remainders', stem: 'A wooden beam of length 14.4m is cut into pieces of 0.45m. How many full pieces are obtained?', yourAns: 'A', correct: 'D', explanation: '14.4 ÷ 0.45 = 1440 ÷ 45 = 32 full pieces. Be careful with decimal places in divisor.', resolved: false },
    { id: 'MV-03-02', exam_id: 'mock-03', exam_title: 'Mock #03 (CEM Standard Mixed)', q_num: 'Q25', topic: 'Inference from Passage', subject: 'English', desc: 'Draw implicit conclusion from Victorian-era excerpt', stem: 'What does the author suggest about the landlord\'s true intentions?', yourAns: 'A', correct: 'C', explanation: 'The tone is ironically critical: the polite smile masks an underlying avarice.', resolved: false },
    
    // Mock 02
    { id: 'MV-02-01', exam_id: 'mock-02', exam_title: 'Mock #02 (GL Maths & Spatial Heavy)', q_num: 'Q22', topic: 'Reflection Symmetry', subject: 'Non-Verbal Reasoning', desc: 'Identify reflected image across diagonal mirror line', stem: 'Which shape is a true reflection across the 45-degree axis?', yourAns: 'C', correct: 'B', explanation: 'Reflection across diagonal lines swaps X and Y coordinates. Do not confuse with 90° rotation.', resolved: true },
    { id: 'MV-02-02', exam_id: 'mock-02', exam_title: 'Mock #02 (GL Maths & Spatial Heavy)', q_num: 'Q19', topic: 'Algebraic Sequences', subject: 'Mathematics', desc: 'Find the nth term of a quadratic sequence', stem: 'Find the 6th term of 3, 8, 15, 24...', yourAns: 'D', correct: 'B', explanation: 'Formula is n(n+2). For n=6: 6 × 8 = 48. Correct Answer is 48.', resolved: false },

    // Mock 01
    { id: 'MV-01-01', exam_id: 'mock-01', exam_title: 'Mock #01 (Baseline Diagnostic)', q_num: 'Q5', topic: 'Speed & Distance', subject: 'Mathematics', desc: 'Average speed calculation across return journey', stem: 'Going: 60mph for 2 hours. Returning: 40mph for 3 hours. Average speed?', yourAns: 'B', correct: 'A', explanation: 'Average speed = Total distance ÷ Total time = (120 + 120) ÷ (2 + 3) = 240 ÷ 5 = 48mph.', resolved: true }
  ];

  // Merge with any mistakes recorded live in localStorage
  const localMistakes = JSON.parse(localStorage.getItem('learnly_mistake_vault') || '[]');
  const allMistakes = [...localMistakes, ...SEED_MISTAKES];

  // Active filters
  let selectedExam = 'all';
  let selectedSubject = 'all';
  let showResolved = false;

  const cardsGrid = document.getElementById('mistakes-cards-grid');
  const countBadge = document.getElementById('mistakes-count-badge');
  const unresolvedSpan = document.getElementById('unresolved-count');
  const resolvedSpan = document.getElementById('resolved-count');

  function renderMistakes() {
    let filtered = allMistakes.filter(m => {
      const matchExam = selectedExam === 'all' || m.exam_id === selectedExam || (selectedExam === 'practice-arena' && m.id.startsWith('MV-'));
      const matchSubj = selectedSubject === 'all' || m.subject.toLowerCase().includes(selectedSubject.toLowerCase());
      const matchStatus = showResolved ? m.resolved === true : !m.resolved;
      return matchExam && matchSubj && matchStatus;
    });

    const unresolvedTotal = allMistakes.filter(m => !m.resolved).length;
    const resolvedTotal = allMistakes.filter(m => m.resolved).length;

    if (countBadge) countBadge.textContent = `${unresolvedTotal} Critical Errors Across All Mocks`;
    if (unresolvedSpan) unresolvedSpan.textContent = unresolvedTotal;
    if (resolvedSpan) resolvedSpan.textContent = resolvedTotal;

    if (!cardsGrid) return;

    if (filtered.length === 0) {
      cardsGrid.innerHTML = `
      <div class="col-span-12 p-12 bg-white rounded-3xl border border-slate-200 text-center shadow-sm">
        <span class="material-symbols-outlined text-4xl text-emerald-500 mb-2">task_alt</span>
        <h3 class="text-lg font-bold text-slate-900">No mistakes match this filter</h3>
        <p class="text-xs text-slate-500 mt-1">Select "All Mock Exams" or toggle status to review resolved errors.</p>
      </div>`;
      return;
    }

    cardsGrid.innerHTML = filtered.map(m => `
    <div class="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-rose-400 flex flex-col justify-between transition-all relative overflow-hidden group shadow-sm">
      <div class="absolute top-0 left-0 w-1.5 h-full ${m.resolved ? 'bg-emerald-500' : 'bg-rose-500'}"></div>
      
      <div class="flex flex-col relative z-10 space-y-4">
        <!-- Top Metadata Row -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="w-11 h-11 rounded-2xl ${m.resolved ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'} border flex items-center justify-center font-black text-sm shadow-inner">${m.q_num}</span>
            <div>
              <span class="text-base text-slate-900 font-extrabold tracking-tight">${m.topic}</span><br>
              <div class="flex items-center gap-1.5 mt-0.5">
                <span class="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-600 uppercase">${m.subject}</span>
                <span class="px-2 py-0.5 rounded-md bg-rose-50 text-[10px] font-bold text-rose-700">${m.exam_title || 'Mock Test'}</span>
              </div>
            </div>
          </div>
          <div class="text-right text-xs">
            <div class="text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200 mb-1 inline-block">Your Ans: ${m.yourAns}</div><br>
            <div class="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">Correct: ${m.correct}</div>
          </div>
        </div>
        
        <!-- Stem & Trap Explanation -->
        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <p class="text-xs text-slate-800 font-bold leading-relaxed">${m.stem || m.desc}</p>
          <p class="text-xs text-slate-600 italic">💡 <strong>Why it was missed:</strong> ${m.explanation}</p>
        </div>
        
        <!-- Action Cluster -->
        <div class="flex gap-2 pt-1">
          <button onclick="openReattemptModal('${m.id}')" class="flex-1 py-2.5 rounded-full ${m.resolved ? 'bg-slate-100 text-slate-700' : 'bg-rose-600 hover:bg-rose-700 text-white'} text-xs font-bold shadow transition-all cursor-pointer">
            ${m.resolved ? 'Re-attempt Again' : 'Re-attempt Question (+35 XP)'}
          </button>
          <button onclick="resolveMistakeDirectly('${m.id}')" class="px-4 py-2.5 rounded-full border border-slate-300 hover:border-emerald-500 hover:text-emerald-700 text-xs text-slate-700 font-bold transition-all cursor-pointer">
            ${m.resolved ? 'Marked Mastered ⭐' : 'Master Trap'}
          </button>
        </div>
      </div>
    </div>`).join('');
  }

  // Filter Event Listeners
  document.querySelectorAll('.exam-filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.exam-filter-pill').forEach(b => {
        b.className = 'exam-filter-pill px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer';
      });
      btn.className = 'exam-filter-pill px-4 py-2 rounded-full bg-rose-600 text-white font-extrabold text-xs shadow transition-all cursor-pointer';
      selectedExam = btn.dataset.exam;
      renderMistakes();
    });
  });

  document.querySelectorAll('.subject-filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.subject-filter-pill').forEach(b => {
        b.className = 'subject-filter-pill px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold';
      });
      btn.className = 'subject-filter-pill px-3 py-1 rounded-lg bg-slate-900 text-white font-bold';
      selectedSubject = btn.dataset.subject;
      renderMistakes();
    });
  });

  const unresBtn = document.getElementById('toggle-unresolved-btn');
  const resBtn = document.getElementById('toggle-resolved-btn');
  if (unresBtn && resBtn) {
    unresBtn.onclick = () => {
      showResolved = false;
      unresBtn.className = 'px-3.5 py-1.5 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 font-bold text-xs';
      resBtn.className = 'px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 font-bold text-xs';
      renderMistakes();
    };
    resBtn.onclick = () => {
      showResolved = true;
      resBtn.className = 'px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-xs';
      unresBtn.className = 'px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 font-bold text-xs';
      renderMistakes();
    };
  }

  // Resolve Mistake directly
  window.resolveMistakeDirectly = function(mistakeId) {
    const item = allMistakes.find(m => m.id === mistakeId);
    if (item) {
      item.resolved = true;
      localStorage.setItem('learnly_mistake_vault', JSON.stringify(allMistakes));
      if (window.AIBuddy) {
        window.AIBuddy.showToast('Mistake Mastered!', '+35 XP awarded for mastering cognitive trap.');
      }
      renderMistakes();
    }
  };

  // Re-attempt Modal Handlers
  let currentReattemptMistake = null;
  const reattemptModal = document.getElementById('reattempt-modal');
  const reattemptStem = document.getElementById('reattempt-stem');
  const reattemptOptions = document.getElementById('reattempt-options');
  const reattemptFeedback = document.getElementById('reattempt-feedback');
  const submitReattemptBtn = document.getElementById('submit-reattempt-btn');

  window.openReattemptModal = function(mistakeId) {
    currentReattemptMistake = allMistakes.find(m => m.id === mistakeId);
    if (!currentReattemptMistake || !reattemptModal) return;

    reattemptStem.textContent = currentReattemptMistake.stem || currentReattemptMistake.desc;
    reattemptFeedback.classList.add('hidden');

    const letters = ['A', 'B', 'C', 'D'];
    reattemptOptions.innerHTML = letters.map(l => `
      <label class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-rose-400 cursor-pointer transition-all reattempt-opt-label">
        <input type="radio" name="reattempt-radio" value="${l}" class="w-4 h-4 text-rose-600">
        <span class="text-xs font-bold text-slate-800">Option ${l} ${l === currentReattemptMistake.correct ? '(Syllabus Standard Solution)' : '(Plausible Distractor)'}</span>
      </label>
    `).join('');

    reattemptModal.classList.remove('hidden');
    reattemptModal.classList.add('flex');
  };

  function closeReattemptModal() {
    if (reattemptModal) {
      reattemptModal.classList.add('hidden');
      reattemptModal.classList.remove('flex');
    }
  }

  const closeReattemptBtn = document.getElementById('close-reattempt-modal-btn');
  const cancelReattemptBtn = document.getElementById('cancel-reattempt-btn');
  if (closeReattemptBtn) closeReattemptBtn.onclick = closeReattemptModal;
  if (cancelReattemptBtn) cancelReattemptBtn.onclick = closeReattemptModal;

  if (submitReattemptBtn) {
    submitReattemptBtn.onclick = () => {
      const selected = document.querySelector('input[name="reattempt-radio"]:checked');
      if (!selected) {
        if (window.AIBuddy) window.AIBuddy.showToast('Select Option', 'Please select an answer option to submit.');
        return;
      }

      if (selected.value === currentReattemptMistake.correct) {
        reattemptFeedback.className = 'p-3 rounded-xl mb-4 text-xs font-bold leading-relaxed bg-emerald-50 text-emerald-800 border border-emerald-200 block';
        reattemptFeedback.innerHTML = `✅ <strong>Correct!</strong> You mastered this question. +35 XP awarded!<br><span class="font-normal text-[11px] text-slate-600">${currentReattemptMistake.explanation}</span>`;
        resolveMistakeDirectly(currentReattemptMistake.id);
        setTimeout(closeReattemptModal, 1500);
      } else {
        reattemptFeedback.className = 'p-3 rounded-xl mb-4 text-xs font-bold leading-relaxed bg-rose-50 text-rose-800 border border-rose-200 block';
        reattemptFeedback.innerHTML = `❌ <strong>Not quite.</strong> Option ${selected.value} falls for the same distractor trap.<br><span class="font-normal text-[11px] text-slate-600">Rule: ${currentReattemptMistake.explanation}</span>`;
      }
    };
  }

  // Initial Render
  renderMistakes();
});
