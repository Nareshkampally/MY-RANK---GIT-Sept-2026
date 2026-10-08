// Karat.Academy 11+ — 1v1 Peer Battle Arena with Live Question Loop & Dynamic AI Opponent
LearnlyRouter.register('battle-arena', function() {
  return `
  <div class="flex flex-col w-full min-h-[600px] md:h-[85vh] max-h-[850px] bg-[#0f172a] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 relative text-white animate-fade-in select-none">
    
    <!-- Background Decor & Glows -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-rose-500/20 rounded-full blur-[100px]"></div>
      <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>

    <!-- Floating Emotes Container -->
    <div id="battle-emotes-container" class="absolute inset-0 pointer-events-none z-50 overflow-hidden"></div>

    <!-- Header -->
    <header class="relative z-10 flex items-center justify-between p-6 sm:p-8 border-b border-white/10">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center shadow-lg">
          <span class="material-symbols-outlined text-white text-xl">swords</span>
        </div>
        <div>
          <h1 class="text-lg sm:text-xl font-black tracking-widest uppercase">Karat 1v1 Arena</h1>
          <p class="text-[10px] text-white/60 font-bold tracking-widest uppercase">Round <span id="arena-round-num" class="text-amber-400">1</span> of 5 • Speed Sprint</p>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Cohort Matchmaking Active</span>
        </div>
        <a href="#dashboard" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-white border border-white/10" title="Exit Arena">
          <span class="material-symbols-outlined text-sm">close</span>
        </a>
      </div>
    </header>

    <!-- Main Battle Area -->
    <div class="flex-1 flex flex-col md:flex-row relative z-10 p-4 sm:p-6 gap-6 items-center justify-between">
      
      <!-- Left Side (Player 1 - Leo) -->
      <div class="w-full md:w-64 flex flex-col items-center justify-center p-4 rounded-3xl bg-white/5 border border-white/10 shadow-lg">
        <div class="relative mb-3">
          <div class="w-20 h-20 rounded-full bg-rose-500/20 border-4 border-rose-500 flex items-center justify-center shadow-[0_0_25px_rgba(244,63,94,0.4)] overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Leo" alt="Leo" class="w-18 h-18 rounded-full" />
          </div>
          <span class="absolute bottom-0 right-0 px-2 py-0.5 rounded-full bg-rose-600 text-[10px] font-black uppercase tracking-wider text-white">YOU</span>
        </div>
        <h2 class="text-xl font-black">Leo</h2>
        <div class="text-rose-400 text-xs font-bold tracking-widest uppercase mt-1">
          Score: <span class="text-2xl text-white font-mono ml-1" id="arena-p1-score">0</span>
        </div>
        
        <div class="w-full mt-4 space-y-1">
          <div class="flex justify-between text-[10px] font-bold text-white/60">
            <span>STREAK</span>
            <span id="arena-p1-streak" class="text-rose-400">x0</span>
          </div>
          <div class="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div id="arena-p1-progress" class="h-full bg-rose-500 rounded-full transition-all duration-300" style="width: 0%"></div>
          </div>
        </div>
      </div>

      <!-- Center Question Arena -->
      <div class="flex-1 max-w-xl w-full flex flex-col items-center">
        
        <!-- Timer Dial -->
        <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-900 border-4 border-slate-800 flex flex-col items-center justify-center mb-4 sm:mb-6 shadow-2xl relative">
          <span class="text-2xl sm:text-3xl font-black text-amber-400 font-mono" id="arena-timer">15</span>
          <span class="text-[8px] font-bold text-white/50 uppercase tracking-widest">Sec</span>
        </div>

        <!-- Question Card -->
        <div id="arena-card" class="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-center">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest mb-3" id="arena-q-topic">
            <span class="material-symbols-outlined text-xs text-amber-400">bolt</span>
            Mental Maths Sprint
          </div>
          <p class="text-xl sm:text-2xl font-extrabold mb-6 min-h-[60px] flex items-center justify-center" id="arena-q-text">
            What is 15% of 340?
          </p>
          
          <div class="grid grid-cols-2 gap-3 sm:gap-4" id="arena-answers-grid">
            <!-- Dynamically populated buttons -->
          </div>
        </div>

        <!-- Live Battle Status Feedback -->
        <div id="arena-feedback" class="mt-4 text-xs font-bold tracking-wide uppercase text-white/70 min-h-[20px] text-center">
          First scholar to answer correctly claims 250 PTS!
        </div>

      </div>

      <!-- Right Side (Opponent - Alex) -->
      <div class="w-full md:w-64 flex flex-col items-center justify-center p-4 rounded-3xl bg-white/5 border border-white/10 shadow-lg">
        <div class="relative mb-3">
          <div class="w-20 h-20 rounded-full bg-blue-500/20 border-4 border-blue-500 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.4)] overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Alex" class="w-18 h-18 rounded-full" />
          </div>
          <span class="absolute bottom-0 right-0 px-2 py-0.5 rounded-full bg-blue-600 text-[10px] font-black uppercase tracking-wider text-white">OPPONENT</span>
        </div>
        <h2 class="text-xl font-black">Alex M.</h2>
        <div class="text-blue-400 text-xs font-bold tracking-widest uppercase mt-1">
          Score: <span class="text-2xl text-white font-mono ml-1" id="arena-p2-score">0</span>
        </div>
        
        <div class="w-full mt-4 space-y-1">
          <div class="flex justify-between text-[10px] font-bold text-white/60">
            <span>STREAK</span>
            <span id="arena-p2-streak" class="text-blue-400">x0</span>
          </div>
          <div class="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div id="arena-p2-progress" class="h-full bg-blue-500 rounded-full transition-all duration-300" style="width: 0%"></div>
          </div>
        </div>
      </div>

    </div>

    <!-- Bottom Action Bar (Emotes & Controls) -->
    <div class="relative z-10 p-4 sm:p-5 flex items-center justify-between border-t border-white/10 bg-black/30 backdrop-blur-md">
      <div class="flex items-center gap-2">
        <span class="text-[10px] text-white/50 uppercase tracking-widest hidden sm:inline">Send Reaction:</span>
        <button class="battle-emote-btn px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-sm border border-white/10 transition-transform active:scale-90" data-emote="👏">👏</button>
        <button class="battle-emote-btn px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-sm border border-white/10 transition-transform active:scale-90" data-emote="🔥">🔥</button>
        <button class="battle-emote-btn px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-sm border border-white/10 transition-transform active:scale-90" data-emote="⚡">⚡</button>
        <button class="battle-emote-btn px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-sm border border-white/10 transition-transform active:scale-90" data-emote="🎯">🎯</button>
      </div>

      <a href="#dashboard" class="px-4 py-1.5 rounded-full bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 text-xs font-bold uppercase tracking-widest border border-rose-500/30 transition-all flex items-center gap-1.5">
        <span class="material-symbols-outlined text-sm">flag</span>
        Surrender &amp; Exit
      </a>
    </div>

    <!-- Game Over Modal Overlay -->
    <div id="battle-gameover-modal" class="hidden absolute inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
      <div class="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/20 rounded-3xl p-8 max-w-md w-full text-center space-y-6 shadow-2xl">
        <div id="gameover-trophy" class="w-20 h-20 rounded-full bg-amber-400/20 border-2 border-amber-400 text-amber-300 mx-auto flex items-center justify-center">
          <span class="material-symbols-outlined text-5xl">emoji_events</span>
        </div>
        <div>
          <h2 id="gameover-title" class="text-3xl font-black text-white">Victory!</h2>
          <p id="gameover-subtitle" class="text-sm text-slate-300 mt-1">You outpaced your rival across all 5 rounds.</p>
        </div>

        <div class="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
          <div>
            <span class="text-[10px] text-white/50 uppercase font-bold block">Your Score</span>
            <span id="gameover-final-p1" class="text-2xl font-black text-rose-400 font-mono">1,000</span>
          </div>
          <div>
            <span class="text-[10px] text-white/50 uppercase font-bold block">Alex's Score</span>
            <span id="gameover-final-p2" class="text-2xl font-black text-blue-400 font-mono">750</span>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <button id="arena-btn-rematch" class="flex-1 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-lg transition-transform hover:scale-105 active:scale-95">
            Rematch Rival
          </button>
          <a href="#dashboard" class="flex-1 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/10 transition-all flex items-center justify-center">
            Dashboard
          </a>
        </div>
      </div>
    </div>
  </div>`;
}, function() {
  // ── 11+ BATTLE QUESTIONS DATA ──────────────────────────────────────
  const battleQuestions = [
    {
      topic: 'Mental Maths Sprint',
      question: 'What is 15% of 340?',
      options: ['51', '34', '68', '45'],
      correct: 0 // 51
    },
    {
      topic: 'Verbal Reasoning (Synonyms)',
      question: 'Which word is closest in meaning to METICULOUS?',
      options: ['Hasty', 'Punctual', 'Thorough', 'Generous'],
      correct: 2 // Thorough
    },
    {
      topic: 'Non-Verbal Spatial Logic',
      question: 'A cube is rotated 90° clockwise then 180° vertically. How many faces have inverted?',
      options: ['2 Faces', '4 Faces', '6 Faces', 'None'],
      correct: 1 // 4 Faces
    },
    {
      topic: 'Numerical Sequences',
      question: 'Find the next number in the sequence: 4, 9, 19, 39, ...',
      options: ['79', '69', '89', '59'],
      correct: 0 // 79 (x2 + 1)
    },
    {
      topic: 'Vocabulary & Antonyms',
      question: 'Which word is the antonym of SCARCITY?',
      options: ['Abundance', 'Famine', 'Rarity', 'Paucity'],
      correct: 0 // Abundance
    }
  ];

  let currentRound = 0;
  let p1Score = 0;
  let p2Score = 0;
  let p1Streak = 0;
  let p2Streak = 0;
  let timerSeconds = 15;
  let timerInterval = null;
  let opponentTimeout = null;
  let isAnswered = false;

  const timerEl = document.getElementById('arena-timer');
  const roundNumEl = document.getElementById('arena-round-num');
  const topicEl = document.getElementById('arena-q-topic');
  const textEl = document.getElementById('arena-q-text');
  const gridEl = document.getElementById('arena-answers-grid');
  const feedbackEl = document.getElementById('arena-feedback');

  const p1ScoreEl = document.getElementById('arena-p1-score');
  const p2ScoreEl = document.getElementById('arena-p2-score');
  const p1StreakEl = document.getElementById('arena-p1-streak');
  const p2StreakEl = document.getElementById('arena-p2-streak');
  const p1ProgEl = document.getElementById('arena-p1-progress');
  const p2ProgEl = document.getElementById('arena-p2-progress');

  const modalEl = document.getElementById('battle-gameover-modal');
  const rematchBtn = document.getElementById('arena-btn-rematch');

  function startQuestion() {
    isAnswered = false;
    timerSeconds = 15;
    if (timerEl) timerEl.textContent = '15';
    if (roundNumEl) roundNumEl.textContent = `${currentRound + 1}`;

    const q = battleQuestions[currentRound];
    if (!q) {
      endGame();
      return;
    }

    if (topicEl) topicEl.innerHTML = `<span class="material-symbols-outlined text-xs text-amber-400">bolt</span> ${q.topic}`;
    if (textEl) textEl.textContent = q.question;
    if (feedbackEl) {
      feedbackEl.textContent = 'First scholar to answer correctly claims 250 PTS!';
      feedbackEl.className = 'mt-4 text-xs font-bold tracking-wide uppercase text-white/70 min-h-[20px] text-center';
    }

    if (gridEl) {
      gridEl.innerHTML = q.options.map((opt, idx) => `
        <button class="arena-opt-btn py-3.5 sm:py-4 px-4 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 font-bold text-base sm:text-lg transition-all active:scale-95 cursor-pointer text-white" data-index="${idx}">
          ${opt}
        </button>
      `).join('');

      document.querySelectorAll('.arena-opt-btn').forEach(btn => {
        btn.onclick = () => handleUserAnswer(parseInt(btn.dataset.index, 10));
      });
    }

    // Start 15s timer
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timerSeconds--;
      if (timerEl) timerEl.textContent = `${timerSeconds}`;
      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        handleTimeout();
      }
    }, 1000);

    // Simulate Opponent thinking (takes 3 to 7 seconds)
    clearTimeout(opponentTimeout);
    const opponentDelay = 3000 + Math.random() * 4000;
    opponentTimeout = setTimeout(() => {
      if (!isAnswered) {
        handleOpponentAnswer(q.correct);
      }
    }, opponentDelay);
  }

  function handleUserAnswer(chosenIdx) {
    if (isAnswered) return;
    isAnswered = true;
    clearInterval(timerInterval);
    clearTimeout(opponentTimeout);

    const q = battleQuestions[currentRound];
    const isCorrect = chosenIdx === q.correct;
    const buttons = document.querySelectorAll('.arena-opt-btn');

    buttons.forEach((btn, idx) => {
      if (idx === q.correct) {
        btn.className = 'arena-opt-btn py-3.5 sm:py-4 px-4 rounded-2xl bg-emerald-600 border border-emerald-400 font-bold text-base sm:text-lg text-white shadow-lg animate-pulse';
      } else if (idx === chosenIdx) {
        btn.className = 'arena-opt-btn py-3.5 sm:py-4 px-4 rounded-2xl bg-rose-600 border border-rose-400 font-bold text-base sm:text-lg text-white shadow-lg';
      } else {
        btn.classList.add('opacity-40');
      }
    });

    if (isCorrect) {
      p1Score += 250;
      p1Streak++;
      if (feedbackEl) {
        feedbackEl.textContent = '⚡ FAST & ACCURATE! +250 PTS CLAIMED!';
        feedbackEl.className = 'mt-4 text-xs font-bold tracking-wide uppercase text-emerald-400 min-h-[20px] text-center';
      }
      spawnEmote('⚡');
    } else {
      p1Streak = 0;
      if (feedbackEl) {
        feedbackEl.textContent = 'INCORRECT! OPPONENT HAD THE ADVANTAGE!';
        feedbackEl.className = 'mt-4 text-xs font-bold tracking-wide uppercase text-rose-400 min-h-[20px] text-center';
      }
      // Opponent gets partial points for surviving
      p2Score += 100;
    }

    updateScores();
    advanceToNextRound();
  }

  function handleOpponentAnswer(correctIdx) {
    if (isAnswered) return;
    isAnswered = true;
    clearInterval(timerInterval);

    // Opponent has 80% accuracy
    const opponentCorrect = Math.random() < 0.8;
    const buttons = document.querySelectorAll('.arena-opt-btn');

    buttons.forEach((btn, idx) => {
      if (idx === correctIdx) {
        btn.className = 'arena-opt-btn py-3.5 sm:py-4 px-4 rounded-2xl bg-blue-600 border border-blue-400 font-bold text-base sm:text-lg text-white shadow-lg';
      } else {
        btn.classList.add('opacity-40');
      }
    });

    if (opponentCorrect) {
      p2Score += 250;
      p2Streak++;
      p1Streak = 0;
      if (feedbackEl) {
        feedbackEl.textContent = 'ALEX BUZZED IN FIRST & GOT IT RIGHT! (+250 PTS)';
        feedbackEl.className = 'mt-4 text-xs font-bold tracking-wide uppercase text-blue-400 min-h-[20px] text-center';
      }
      spawnEmote('🔥');
    } else {
      p2Streak = 0;
      if (feedbackEl) {
        feedbackEl.textContent = 'ALEX GUESSED WRONG! ROUND DRAW.';
        feedbackEl.className = 'mt-4 text-xs font-bold tracking-wide uppercase text-amber-400 min-h-[20px] text-center';
      }
    }

    updateScores();
    advanceToNextRound();
  }

  function handleTimeout() {
    if (isAnswered) return;
    isAnswered = true;
    p1Streak = 0;
    p2Streak = 0;
    if (feedbackEl) {
      feedbackEl.textContent = 'TIME EXPIRED! NO POINTS AWARDED.';
      feedbackEl.className = 'mt-4 text-xs font-bold tracking-wide uppercase text-amber-400 min-h-[20px] text-center';
    }
    updateScores();
    advanceToNextRound();
  }

  function updateScores() {
    if (p1ScoreEl) p1ScoreEl.textContent = `${p1Score.toLocaleString()}`;
    if (p2ScoreEl) p2ScoreEl.textContent = `${p2Score.toLocaleString()}`;
    if (p1StreakEl) p1StreakEl.textContent = `x${p1Streak}`;
    if (p2StreakEl) p2StreakEl.textContent = `x${p2Streak}`;

    const maxPoints = 1250;
    if (p1ProgEl) p1ProgEl.style.width = `${Math.min(100, (p1Score / maxPoints) * 100)}%`;
    if (p2ProgEl) p2ProgEl.style.width = `${Math.min(100, (p2Score / maxPoints) * 100)}%`;
  }

  function advanceToNextRound() {
    setTimeout(() => {
      currentRound++;
      if (currentRound < battleQuestions.length) {
        startQuestion();
      } else {
        endGame();
      }
    }, 2000);
  }

  function endGame() {
    clearInterval(timerInterval);
    clearTimeout(opponentTimeout);

    const titleEl = document.getElementById('gameover-title');
    const subEl = document.getElementById('gameover-subtitle');
    const f1 = document.getElementById('gameover-final-p1');
    const f2 = document.getElementById('gameover-final-p2');

    if (f1) f1.textContent = `${p1Score.toLocaleString()}`;
    if (f2) f2.textContent = `${p2Score.toLocaleString()}`;

    if (p1Score > p2Score) {
      if (titleEl) titleEl.textContent = 'Glorious Victory!';
      if (subEl) subEl.textContent = 'Outstanding speed and precision! You earned +150 Karat XP.';
      if (window.AIBuddy) {
        window.AIBuddy.showToast('Arena Victory!', `You defeated Alex ${p1Score} to ${p2Score} PTS! +150 XP awarded.`);
      }
    } else if (p1Score === p2Score) {
      if (titleEl) titleEl.textContent = 'Tied Battle!';
      if (subEl) subEl.textContent = 'Evenly matched scholars! Excellent fight.';
    } else {
      if (titleEl) titleEl.textContent = 'Runner-Up';
      if (subEl) subEl.textContent = 'Alex took the round. Practice your speed in the Focus Room and rematch!';
    }

    if (modalEl) modalEl.classList.remove('hidden');
  }

  function spawnEmote(emoji) {
    const cont = document.getElementById('battle-emotes-container');
    if (!cont) return;
    const el = document.createElement('div');
    el.className = 'absolute text-4xl animate-bounce';
    el.style.left = `${20 + Math.random() * 60}%`;
    el.style.bottom = '20%';
    el.style.transition = 'all 1.5s ease-out';
    el.textContent = emoji;
    cont.appendChild(el);

    setTimeout(() => {
      el.style.bottom = '80%';
      el.style.opacity = '0';
      el.style.transform = 'scale(1.5)';
    }, 50);

    setTimeout(() => el.remove(), 1600);
  }

  // Emote buttons
  document.querySelectorAll('.battle-emote-btn').forEach(btn => {
    btn.onclick = () => spawnEmote(btn.dataset.emote);
  });

  if (rematchBtn) {
    rematchBtn.onclick = () => {
      if (modalEl) modalEl.classList.add('hidden');
      currentRound = 0;
      p1Score = 0;
      p2Score = 0;
      p1Streak = 0;
      p2Streak = 0;
      updateScores();
      startQuestion();
    };
  }

  // Start round 1
  startQuestion();
});
