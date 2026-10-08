// Karat.Academy 11+ — Lofi Focus Room & Interactive Pomodoro Engine
LearnlyRouter.register('lofi-study', function() {
  return `
  <div class="fixed inset-0 z-[100] bg-[#0a0a0a] text-white overflow-hidden flex flex-col font-sans selection:bg-primary/30 animate-fade-in">
    
    <!-- Immersive Background -->
    <div class="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80" alt="Lofi Background" class="w-full h-full object-cover opacity-25 grayscale saturate-50 contrast-125 mix-blend-luminosity" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/40"></div>
      <div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: radial-gradient(circle at center, transparent 0%, #000 100%);"></div>
    </div>

    <!-- Top Navigation -->
    <header class="relative z-10 flex items-center justify-between p-6 md:px-10">
      <div class="flex items-center gap-3">
        <span class="material-symbols-outlined text-primary text-2xl animate-pulse">headphones</span>
        <div>
          <h1 class="text-xl font-bold tracking-widest uppercase opacity-90">Karat Focus Room</h1>
          <span class="text-[10px] tracking-wider uppercase text-white/50 block font-mono">11+ Deep Work State</span>
        </div>
      </div>
      <a href="#dashboard" class="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-all text-xs font-bold uppercase tracking-widest backdrop-blur-md flex items-center gap-2 text-white">
        <span class="material-symbols-outlined text-sm">close</span>
        Exit Focus Room
      </a>
    </header>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col md:flex-row items-center justify-center p-6 gap-10 lg:gap-20 relative z-10 w-full max-w-6xl mx-auto h-full">
      
      <!-- Left: Pomodoro Timer -->
      <div class="flex-1 flex flex-col items-center">
        <!-- Mode Switcher -->
        <div class="flex bg-white/5 rounded-full p-1.5 border border-white/10 backdrop-blur-md mb-8 sm:mb-12 shadow-2xl">
          <button id="pomo-mode-work" class="px-5 sm:px-6 py-2 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest transition-all">Pomodoro (25m)</button>
          <button id="pomo-mode-short" class="px-5 sm:px-6 py-2 rounded-full text-white/60 hover:text-white transition-all font-bold text-xs uppercase tracking-widest">Short Break (5m)</button>
          <button id="pomo-mode-long" class="px-5 sm:px-6 py-2 rounded-full text-white/60 hover:text-white transition-all font-bold text-xs uppercase tracking-widest">Long Break (15m)</button>
        </div>

        <!-- Huge Timer -->
        <div id="pomo-display" class="text-[7rem] sm:text-[9rem] md:text-[11rem] font-black leading-none tracking-tighter tabular-nums drop-shadow-2xl font-mono text-white/95 select-none">
          25:00
        </div>
        
        <!-- Timer Status Text -->
        <div id="pomo-status-label" class="mt-4 text-xs font-mono uppercase tracking-widest text-primary font-bold">
          Focus Session • Keep Distractions Away
        </div>

        <!-- Timer Controls -->
        <div class="flex items-center gap-6 mt-8">
          <button id="pomo-btn-reset" title="Reset Session" class="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all backdrop-blur-md hover:scale-105 active:scale-95">
            <span class="material-symbols-outlined text-2xl text-white">replay</span>
          </button>
          <button id="pomo-btn-play" title="Start / Pause" class="w-20 h-20 rounded-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center transition-all shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:scale-110 active:scale-95">
            <span id="pomo-icon-play" class="material-symbols-outlined text-4xl">play_arrow</span>
          </button>
          <button id="pomo-btn-skip" title="Complete &amp; Next" class="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all backdrop-blur-md hover:scale-105 active:scale-95">
            <span class="material-symbols-outlined text-2xl text-white">skip_next</span>
          </button>
        </div>
      </div>

      <!-- Right: Ambient Sound & Session Tasks -->
      <div class="w-full md:w-80 flex flex-col gap-6">
        
        <!-- Lofi Ambient Audio Player -->
        <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 relative overflow-hidden group shadow-2xl">
          <div class="flex items-center justify-between mb-4 relative z-10">
            <div class="flex items-center gap-2">
              <div id="audio-bars" class="flex gap-1 items-end h-4 opacity-40">
                <div class="w-1 bg-primary rounded-t-sm h-full animate-[bounce_1s_infinite]"></div>
                <div class="w-1 bg-primary rounded-t-sm h-2/3 animate-[bounce_1.2s_infinite]"></div>
                <div class="w-1 bg-primary rounded-t-sm h-1/2 animate-[bounce_0.8s_infinite]"></div>
                <div class="w-1 bg-primary rounded-t-sm h-4/5 animate-[bounce_1.5s_infinite]"></div>
              </div>
              <span id="audio-state-text" class="text-[11px] font-bold uppercase tracking-widest text-white/60">Ambient Audio</span>
            </div>
            <button id="ambient-mute-btn" class="text-white/60 hover:text-white transition-colors" title="Toggle audio sound">
              <span id="ambient-vol-icon" class="material-symbols-outlined text-lg">volume_up</span>
            </button>
          </div>
          
          <div class="relative z-10">
            <h3 class="font-bold text-base leading-tight mb-0.5">Atmospheric Binaural Chill</h3>
            <p class="text-xs text-white/50 mb-4">Synthesised 432Hz Alpha Waves</p>
            
            <div class="flex items-center gap-3">
              <button id="ambient-play-btn" class="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-md">
                <span id="ambient-play-icon" class="material-symbols-outlined text-xl">play_arrow</span>
              </button>
              <span id="ambient-desc-text" class="text-xs text-white/70 font-medium">Click to play ambient focus sound</span>
            </div>
          </div>
        </div>

        <!-- Focus Tasks -->
        <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex-1 shadow-2xl space-y-4">
          <div class="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 class="font-bold text-xs uppercase tracking-widest opacity-80 flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-primary">check_circle</span>
              Focus Checklist
            </h3>
            <span class="text-[10px] text-white/50" id="task-tally">1 / 3 Done</span>
          </div>
          
          <div class="space-y-2.5" id="pomo-task-list">
            <label class="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
              <input type="checkbox" class="mt-1 w-4 h-4 rounded border-white/20 bg-transparent text-primary focus:ring-primary focus:ring-offset-0 pomo-checkbox" />
              <div>
                <div class="text-xs font-bold opacity-90">11+ Non-Verbal Mock #04 (First 25)</div>
                <div class="text-[10px] opacity-50 mt-0.5">Target: 20 mins</div>
              </div>
            </label>
            
            <label class="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
              <input type="checkbox" class="mt-1 w-4 h-4 rounded border-white/20 bg-transparent text-primary focus:ring-primary focus:ring-offset-0 pomo-checkbox" />
              <div>
                <div class="text-xs font-bold opacity-90">Review Fractions &amp; Cube Nets in Vault</div>
                <div class="text-[10px] opacity-50 mt-0.5">Target: 10 mins</div>
              </div>
            </label>

            <label class="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors opacity-60">
              <input type="checkbox" checked class="mt-1 w-4 h-4 rounded border-white/20 bg-transparent text-primary focus:ring-primary focus:ring-offset-0 pomo-checkbox" />
              <div class="line-through">
                <div class="text-xs font-bold">15 Vocab Flashcards</div>
                <div class="text-[10px] mt-0.5">Completed (+50 XP)</div>
              </div>
            </label>
          </div>
        </div>
        
      </div>
    </div>
  </div>`;
}, function() {
  // ── STATE ──────────────────────────────────────────────────────────
  let mode = 'work'; // 'work' | 'short' | 'long'
  let durations = { work: 25 * 60, short: 5 * 60, long: 15 * 60 };
  let timeLeft = durations.work;
  let isRunning = false;
  let timerId = null;

  const displayEl = document.getElementById('pomo-display');
  const statusLabel = document.getElementById('pomo-status-label');
  const playBtn = document.getElementById('pomo-btn-play');
  const playIcon = document.getElementById('pomo-icon-play');
  const resetBtn = document.getElementById('pomo-btn-reset');
  const skipBtn = document.getElementById('pomo-btn-skip');

  const btnWork = document.getElementById('pomo-mode-work');
  const btnShort = document.getElementById('pomo-mode-short');
  const btnLong = document.getElementById('pomo-mode-long');

  function renderTimer() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    if (displayEl) {
      displayEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
  }

  function setMode(newMode) {
    mode = newMode;
    pauseTimer();
    timeLeft = durations[mode];
    renderTimer();

    const activeClass = 'px-5 sm:px-6 py-2 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest transition-all';
    const inactiveClass = 'px-5 sm:px-6 py-2 rounded-full text-white/60 hover:text-white transition-all font-bold text-xs uppercase tracking-widest';

    if (btnWork) btnWork.className = (mode === 'work') ? activeClass : inactiveClass;
    if (btnShort) btnShort.className = (mode === 'short') ? activeClass : inactiveClass;
    if (btnLong) btnLong.className = (mode === 'long') ? activeClass : inactiveClass;

    if (statusLabel) {
      statusLabel.textContent = (mode === 'work') 
        ? 'Focus Session • Keep Distractions Away' 
        : (mode === 'short') ? 'Short Break • Rest Your Eyes' : 'Long Break • Stretch & Hydrate';
    }
  }

  function startTimer() {
    if (isRunning) return;
    isRunning = true;
    if (playIcon) playIcon.textContent = 'pause';
    timerId = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        renderTimer();
      } else {
        pauseTimer();
        if (window.AIBuddy) {
          window.AIBuddy.showToast('Session Interval Complete!', mode === 'work' ? 'Great focus! Time for a short break.' : 'Break finished. Ready for the next sprint?');
        }
        if (mode === 'work') setMode('short');
        else setMode('work');
      }
    }, 1000);
  }

  function pauseTimer() {
    isRunning = false;
    if (playIcon) playIcon.textContent = 'play_arrow';
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  if (playBtn) {
    playBtn.onclick = () => {
      if (isRunning) pauseTimer();
      else startTimer();
    };
  }

  if (resetBtn) {
    resetBtn.onclick = () => {
      pauseTimer();
      timeLeft = durations[mode];
      renderTimer();
    };
  }

  if (skipBtn) {
    skipBtn.onclick = () => {
      pauseTimer();
      if (mode === 'work') setMode('short');
      else setMode('work');
    };
  }

  if (btnWork) btnWork.onclick = () => setMode('work');
  if (btnShort) btnShort.onclick = () => setMode('short');
  if (btnLong) btnLong.onclick = () => setMode('long');

  // ── AMBIENT AUDIO (Web Audio API Synthesizer) ────────────────────────
  let audioCtx = null;
  let noiseNode = null;
  let gainNode = null;
  let isAudioPlaying = false;

  const ambBtn = document.getElementById('ambient-play-btn');
  const ambIcon = document.getElementById('ambient-play-icon');
  const ambBars = document.getElementById('audio-bars');
  const ambState = document.getElementById('audio-state-text');
  const ambDesc = document.getElementById('ambient-desc-text');

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
  }

  function startAmbientSound() {
    initAudio();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    // Generate soothing low-pass filtered pink/brown noise
    const bufferSize = audioCtx.sampleRate * 2;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + (0.02 * white)) / 1.02; // Brown noise filter
      lastOut = output[i];
      output[i] *= 0.15; // Safe gentle amplitude
    }

    noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = noiseBuffer;
    noiseNode.loop = true;

    // Filter to warm frequencies
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(380, audioCtx.currentTime);

    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);

    noiseNode.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    noiseNode.start();
    isAudioPlaying = true;

    if (ambIcon) ambIcon.textContent = 'pause';
    if (ambBars) ambBars.classList.remove('opacity-40');
    if (ambState) ambState.textContent = 'Playing Now';
    if (ambDesc) ambDesc.textContent = 'Alpha Wave Noise Active (432Hz)';
  }

  function stopAmbientSound() {
    if (noiseNode) {
      try { noiseNode.stop(); } catch(e){}
      noiseNode = null;
    }
    isAudioPlaying = false;
    if (ambIcon) ambIcon.textContent = 'play_arrow';
    if (ambBars) ambBars.classList.add('opacity-40');
    if (ambState) ambState.textContent = 'Ambient Audio';
    if (ambDesc) ambDesc.textContent = 'Click to play ambient focus sound';
  }

  if (ambBtn) {
    ambBtn.onclick = () => {
      if (isAudioPlaying) stopAmbientSound();
      else startAmbientSound();
    };
  }

  // ── TASK CHECKLIST UPDATE ──────────────────────────────────────────
  const checkBoxes = document.querySelectorAll('.pomo-checkbox');
  const tallyEl = document.getElementById('task-tally');

  function updateTally() {
    const total = checkBoxes.length;
    let done = 0;
    checkBoxes.forEach(cb => {
      if (cb.checked) done++;
      const textDiv = cb.nextElementSibling;
      if (textDiv) {
        if (cb.checked) textDiv.classList.add('line-through', 'opacity-60');
        else textDiv.classList.remove('line-through', 'opacity-60');
      }
    });
    if (tallyEl) tallyEl.textContent = `${done} / ${total} Done`;
  }

  checkBoxes.forEach(cb => cb.addEventListener('change', updateTally));
  updateTally();
  renderTimer();
});
