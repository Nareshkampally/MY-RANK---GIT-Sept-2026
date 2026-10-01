// Learnly 11+ — Global Focus Companion (Enhanced)
document.addEventListener('DOMContentLoaded', () => {
  // ── INJECT FOCUS COMPANION HTML ───────────────────────────────────
  const companionHTML = `
    <!-- Floating Action Button -->
    <button id="focus-fab" class="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-on-primary shadow-xl hover:scale-110 transition-all z-[60] flex items-center justify-center border-4 border-surface-container-lowest" title="Focus Companion" style="box-shadow: 0 8px 32px rgba(79,70,229,0.35)">
      <span class="material-symbols-outlined text-2xl" style="font-variation-settings:'FILL' 1">psychology</span>
    </button>

    <!-- Focus Companion Menu (Hidden by default) -->
    <div id="focus-menu" class="fixed bottom-24 right-6 w-84 bg-surface/95 backdrop-blur-2xl border border-outline-variant/30 rounded-3xl shadow-2xl z-[55] transform translate-y-4 opacity-0 pointer-events-none transition-all duration-300 flex flex-col overflow-hidden" style="width: 320px">
      
      <!-- Header -->
      <div class="px-4 py-3.5 border-b border-surface-container-high flex items-center justify-between" style="background: linear-gradient(135deg, rgba(79,70,229,0.08) 0%, transparent 100%)">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
            <span class="material-symbols-outlined text-primary text-base" style="font-variation-settings:'FILL' 1">auto_awesome</span>
          </div>
          <span class="font-bold text-on-surface text-sm">Focus Companion</span>
        </div>
        <button id="close-focus-menu" class="w-7 h-7 rounded-full hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-error transition-colors">
          <span class="material-symbols-outlined text-base">close</span>
        </button>
      </div>

      <!-- Tools Grid -->
      <div class="p-3 grid grid-cols-3 gap-2">
        
        <!-- Pomodoro Timer Tool -->
        <button id="tool-timer" class="flex flex-col items-center justify-center p-3 rounded-2xl bg-surface-container-lowest border border-surface-container-highest hover:border-primary hover:bg-primary/5 transition-all text-center group">
          <span class="material-symbols-outlined text-primary text-2xl mb-1 group-hover:scale-110 transition-transform">timer</span>
          <span class="text-[11px] font-bold text-on-surface">Study Timer</span>
          <span id="timer-display" class="font-mono text-[10px] text-on-surface-variant mt-0.5">25:00</span>
        </button>

        <!-- Scratchpad Tool -->
        <button id="tool-scratchpad" class="flex flex-col items-center justify-center p-3 rounded-2xl bg-surface-container-lowest border border-surface-container-highest hover:border-secondary hover:bg-secondary/5 transition-all text-center group">
          <span class="material-symbols-outlined text-secondary text-2xl mb-1 group-hover:scale-110 transition-transform">draw</span>
          <span class="text-[11px] font-bold text-on-surface">Scratchpad</span>
          <span class="text-[10px] text-on-surface-variant mt-0.5">Workings</span>
        </button>

        <!-- Formula Sheet -->
        <button id="tool-formulas" class="flex flex-col items-center justify-center p-3 rounded-2xl bg-surface-container-lowest border border-surface-container-highest hover:border-tertiary hover:bg-tertiary/5 transition-all text-center group">
          <span class="material-symbols-outlined text-tertiary text-2xl mb-1 group-hover:scale-110 transition-transform">functions</span>
          <span class="text-[11px] font-bold text-on-surface">Formulas</span>
          <span class="text-[10px] text-on-surface-variant mt-0.5">Quick Ref</span>
        </button>

        <!-- Notes -->
        <button id="tool-notes" class="flex flex-col items-center justify-center p-3 rounded-2xl bg-surface-container-lowest border border-surface-container-highest hover:border-amber-500 hover:bg-amber-50 transition-all text-center group">
          <span class="material-symbols-outlined text-amber-500 text-2xl mb-1 group-hover:scale-110 transition-transform">note_alt</span>
          <span class="text-[11px] font-bold text-on-surface">My Notes</span>
          <span class="text-[10px] text-on-surface-variant mt-0.5">Sticky</span>
        </button>

        <!-- Dictionary -->
        <button id="tool-dictionary" class="flex flex-col items-center justify-center p-3 rounded-2xl bg-surface-container-lowest border border-surface-container-highest hover:border-violet-500 hover:bg-violet-50 transition-all text-center group">
          <span class="material-symbols-outlined text-violet-500 text-2xl mb-1 group-hover:scale-110 transition-transform">book</span>
          <span class="text-[11px] font-bold text-on-surface">Dictionary</span>
          <span class="text-[10px] text-on-surface-variant mt-0.5">Word lookup</span>
        </button>

        <!-- Calculator -->
        <button id="tool-calculator" class="flex flex-col items-center justify-center p-3 rounded-2xl bg-surface-container-lowest border border-surface-container-highest hover:border-rose-500 hover:bg-rose-50 transition-all text-center group">
          <span class="material-symbols-outlined text-rose-500 text-2xl mb-1 group-hover:scale-110 transition-transform">calculate</span>
          <span class="text-[11px] font-bold text-on-surface">Calculator</span>
          <span class="text-[10px] text-on-surface-variant mt-0.5">Check work</span>
        </button>

      </div>

      <!-- Quick AI Chat -->
      <div class="px-3 pb-3 border-t border-surface-container-high pt-3">
        <div class="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-2 flex items-center gap-1">
          <span class="material-symbols-outlined text-primary text-sm" style="font-variation-settings:'FILL' 1">smart_toy</span>
          Ask AI Buddy
        </div>
        <div class="flex items-center gap-2 bg-surface-container-low rounded-2xl px-3 py-2 border border-outline-variant/20 focus-within:border-primary transition-colors">
          <input type="text" id="ai-chat-input" placeholder="I'm stuck on..." class="flex-1 bg-transparent text-on-surface text-sm outline-none placeholder:text-on-surface-variant/50">
          <button id="ai-chat-send" class="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 hover:scale-105 transition-transform">
            <span class="material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1">send</span>
          </button>
        </div>
        <div id="ai-chat-response" class="hidden mt-2 p-2.5 rounded-xl bg-primary/5 border border-primary/15 text-xs text-on-surface leading-relaxed"></div>
      </div>
    </div>

    <!-- Formula Sheet Overlay -->
    <div id="formula-overlay" class="fixed inset-0 z-[100] hidden">
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" id="formula-bg"></div>
      <div class="absolute right-6 bottom-24 w-80 bg-surface-container-lowest rounded-3xl shadow-2xl border border-outline-variant/30 overflow-hidden">
        <div class="p-4 border-b border-outline-variant/20 flex items-center justify-between bg-tertiary/5">
          <span class="font-bold text-on-surface flex items-center gap-2 text-sm">
            <span class="material-symbols-outlined text-tertiary text-lg">functions</span>
            Formula Quick Reference
          </span>
          <button id="close-formula" class="text-on-surface-variant hover:text-error transition-colors">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <div class="p-4 space-y-3 max-h-96 overflow-y-auto text-xs">
          ${[
            { cat: 'Sequences', items: ['Nth term = a + (n-1)d', 'Arithmetic sum = n/2(2a + (n-1)d)', 'Geometric: aⁿ⁻¹ × r'] },
            { cat: 'Percentages', items: ['% change = (new−old)/old × 100', 'Reverse %: ÷(1+rate)', 'Compound interest: P(1+r)ⁿ'] },
            { cat: 'Fractions', items: ['a/b ÷ c/d = a/b × d/c', 'Adding: find LCM of denominators', 'Mixed → Improper: multiply & add'] },
            { cat: 'Ratios', items: ['Total parts → divide total by sum', 'Scale factor: new/original', 'Unitary method: find 1 unit first'] },
            { cat: 'Shapes', items: ['Area circle = πr²', 'Circumference = 2πr', 'Volume cuboid = l × w × h'] },
          ].map(s => `
          <div>
            <div class="text-[10px] font-black uppercase tracking-wider text-primary mb-1">${s.cat}</div>
            ${s.items.map(i => `<div class="py-1 px-2 rounded bg-surface-container-low font-mono text-on-surface mb-1">${i}</div>`).join('')}
          </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- Notes Sticky -->
    <div id="notes-overlay" class="fixed z-[100] hidden bottom-24 right-6 w-72">
      <div class="bg-amber-50 border border-amber-200 rounded-3xl shadow-2xl overflow-hidden">
        <div class="px-4 py-3 bg-amber-100 border-b border-amber-200 flex items-center justify-between">
          <span class="font-bold text-amber-800 text-sm flex items-center gap-1.5">
            <span class="material-symbols-outlined text-amber-600 text-base" style="font-variation-settings:'FILL' 1">note_alt</span>
            Quick Notes
          </span>
          <button id="close-notes" class="text-amber-600 hover:text-amber-800">
            <span class="material-symbols-outlined text-base">close</span>
          </button>
        </div>
        <textarea id="sticky-notes" placeholder="Jot down ideas, reminders, or working..." class="w-full h-40 p-4 bg-amber-50 text-amber-900 text-sm outline-none resize-none placeholder:text-amber-400 font-medium" style="font-family: 'Plus Jakarta Sans', sans-serif"></textarea>
        <div class="px-4 pb-3 flex items-center justify-between">
          <span class="text-[10px] text-amber-600 font-bold">Auto-saved locally</span>
          <button id="clear-notes" class="text-[10px] text-amber-600 hover:text-amber-800 font-bold">Clear</button>
        </div>
      </div>
    </div>

    <!-- Calculator Overlay -->
    <div id="calculator-overlay" class="fixed z-[100] hidden bottom-24 right-6 w-64">
      <div class="bg-surface-container-lowest rounded-3xl shadow-2xl border border-outline-variant/30 overflow-hidden">
        <div class="px-4 py-3 bg-rose-50 border-b border-rose-100 flex items-center justify-between">
          <span class="font-bold text-on-surface text-sm flex items-center gap-1.5">
            <span class="material-symbols-outlined text-rose-500 text-base">calculate</span>
            Calculator
          </span>
          <button id="close-calculator" class="text-on-surface-variant hover:text-error">
            <span class="material-symbols-outlined text-base">close</span>
          </button>
        </div>
        <div class="p-3">
          <div id="calc-display" class="w-full h-12 bg-surface-container-low rounded-xl px-4 flex items-center justify-end font-mono text-xl text-on-surface font-bold mb-3 border border-outline-variant/20">0</div>
          <div class="grid grid-cols-4 gap-1.5">
            ${['C','±','%','÷','7','8','9','×','4','5','6','−','1','2','3','+','0','.','⌫','='].map(k => {
              const isOp = ['÷','×','−','+','='].includes(k);
              const isSpecial = ['C','±','%'].includes(k);
              return `<button class="calc-btn h-11 rounded-xl font-bold text-sm ${k === '0' ? '' : ''} ${isOp ? 'bg-primary text-on-primary hover:bg-primary/80' : isSpecial ? 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest' : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high'} transition-all active:scale-95" data-key="${k}">${k}</button>`;
            }).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- Global Scratchpad Overlay -->
    <div id="scratchpad-overlay" class="fixed inset-0 z-[100] hidden bg-surface/60 backdrop-blur-sm">
      <div class="absolute inset-4 md:inset-10 bg-surface-container-lowest rounded-3xl shadow-2xl border border-surface-container-high flex flex-col overflow-hidden">
        <div class="h-14 bg-surface-container-low border-b border-surface-container-high flex items-center justify-between px-6">
          <div class="flex items-center gap-4">
            <span class="font-bold text-on-surface flex items-center gap-2">
              <span class="material-symbols-outlined text-secondary" style="font-variation-settings:'FILL' 1">draw</span>
              Maths Scratchpad
            </span>
            <div class="flex items-center gap-1.5 p-1 bg-surface-container-lowest rounded-full border border-outline-variant/20">
              <button class="w-7 h-7 rounded-full bg-on-surface text-surface flex items-center justify-center shadow-sm hover:scale-105 transition-transform" id="sp-pen" title="Pen">
                <span class="material-symbols-outlined text-sm">edit</span>
              </button>
              <button class="w-7 h-7 rounded-full text-on-surface-variant hover:bg-surface-container flex items-center justify-center transition-colors" id="sp-eraser" title="Eraser">
                <span class="material-symbols-outlined text-sm">ink_eraser</span>
              </button>
              <button class="w-7 h-7 rounded-full text-on-surface-variant hover:bg-surface-container flex items-center justify-center transition-colors" id="sp-clear" title="Clear canvas">
                <span class="material-symbols-outlined text-sm">restart_alt</span>
              </button>
            </div>
            <div class="flex items-center gap-1">
              ${['#1e1b4b','#059669','#dc2626','#d97706','#7c3aed'].map(c => 
                `<button class="sp-color-btn w-5 h-5 rounded-full border-2 border-white/50 hover:scale-110 transition-transform" data-color="${c}" style="background:${c}"></button>`
              ).join('')}
            </div>
          </div>
          <button id="close-scratchpad" class="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface hover:bg-error hover:text-on-error transition-colors font-bold text-sm">
            Close
          </button>
        </div>
        <canvas id="sp-canvas" class="flex-1 w-full cursor-crosshair bg-white" style="touch-action: none;"></canvas>
      </div>
    </div>

    <!-- Notifications Panel -->
    <div id="notif-panel" class="fixed top-16 right-4 w-80 bg-surface-container-lowest rounded-3xl shadow-2xl border border-outline-variant/30 z-[70] transform translate-y-2 opacity-0 pointer-events-none transition-all duration-250 overflow-hidden">
      <div class="px-5 py-4 border-b border-outline-variant/20 flex items-center justify-between">
        <span class="font-bold text-on-surface text-sm">Notifications</span>
        <button class="text-xs font-bold text-primary" id="mark-all-read">Mark all read</button>
      </div>
      <div class="max-h-80 overflow-y-auto">
        ${[
          { icon: 'emoji_events', color: 'text-amber-500', bg: 'bg-amber-50', title: 'Badge Earned!', body: 'You earned the "Speed Demon" badge. Under 40s per question.', time: '2h ago', unread: true },
          { icon: 'history_edu', color: 'text-primary', bg: 'bg-primary/10', title: 'Mock #6 Scheduled', body: 'Your next full mock is in 18 days. Click to add to calendar.', time: '5h ago', unread: true },
          { icon: 'psychology', color: 'text-blue-500', bg: 'bg-blue-50', title: 'AI Insight Ready', body: '3D Spatial Nets drill programme generated. 3 sessions.', time: 'Yesterday', unread: false },
          { icon: 'local_fire_department', color: 'text-orange-500', bg: 'bg-orange-50', title: '14-Day Streak!', body: 'Amazing consistency. You\'re in the top 10% for engagement.', time: 'Yesterday', unread: false },
        ].map(n => `
        <div class="flex items-start gap-3 px-5 py-4 hover:bg-surface-container-low transition-colors border-b border-outline-variant/10 cursor-pointer ${n.unread ? '' : 'opacity-60'}">
          <div class="w-9 h-9 rounded-xl ${n.bg} ${n.color} flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-lg" style="font-variation-settings:'FILL' 1">${n.icon}</span>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-0.5">
              <span class="text-sm font-bold text-on-surface">${n.title}</span>
              ${n.unread ? '<span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>' : ''}
            </div>
            <p class="text-xs text-on-surface-variant leading-relaxed">${n.body}</p>
            <div class="text-[10px] text-on-surface-variant mt-1 font-bold">${n.time}</div>
          </div>
        </div>`).join('')}
      </div>
      <div class="px-5 py-3 text-center border-t border-outline-variant/20">
        <button class="text-xs font-bold text-primary hover:underline">View all activity</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', companionHTML);

  // ── FOCUS MENU LOGIC ────────────────────────────────────────────
  const fab = document.getElementById('focus-fab');
  const menu = document.getElementById('focus-menu');
  const closeMenuBtn = document.getElementById('close-focus-menu');
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      menu.classList.remove('translate-y-4', 'opacity-0', 'pointer-events-none');
      fab.style.transform = 'scale(0.9)';
      fab.style.background = 'var(--surface-container-high)';
      fab.style.color = 'var(--on-surface)';
    } else {
      menu.classList.add('translate-y-4', 'opacity-0', 'pointer-events-none');
      fab.style.transform = '';
      fab.style.background = '';
      fab.style.color = '';
    }
  }

  if (fab) fab.addEventListener('click', toggleMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);

  // ── TIMER LOGIC ─────────────────────────────────────────────────
  let timerSeconds = 25 * 60;
  let timerRunning = false;
  let timerInterval = null;
  const timerDisplay = document.getElementById('timer-display');
  const timerBtn = document.getElementById('tool-timer');

  function formatTime(secs) {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  if (timerBtn) {
    timerBtn.addEventListener('click', () => {
      if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
        timerBtn.classList.remove('bg-primary/10', 'border-primary');
      } else {
        timerRunning = true;
        timerBtn.classList.add('bg-primary/10', 'border-primary');
        timerInterval = setInterval(() => {
          if (timerSeconds > 0) {
            timerSeconds--;
            if (timerDisplay) timerDisplay.textContent = formatTime(timerSeconds);
          } else {
            clearInterval(timerInterval);
            timerRunning = false;
            if (timerDisplay) timerDisplay.textContent = "Time's up!";
          }
        }, 1000);
      }
    });
  }

  // ── SCRATCHPAD LOGIC ─────────────────────────────────────────────
  const scratchpadBtn = document.getElementById('tool-scratchpad');
  const scratchpadOverlay = document.getElementById('scratchpad-overlay');
  const closeScratchpad = document.getElementById('close-scratchpad');
  const spCanvas = document.getElementById('sp-canvas');
  let spCtx, spDrawing = false, spCurrentColor = '#1e1b4b', spCurrentMode = 'pen';

  function initCanvas() {
    if (!spCanvas) return;
    spCanvas.width = spCanvas.offsetWidth;
    spCanvas.height = spCanvas.offsetHeight;
    spCtx = spCanvas.getContext('2d');
    spCtx.fillStyle = '#ffffff';
    spCtx.fillRect(0, 0, spCanvas.width, spCanvas.height);
    spCtx.lineCap = 'round';
    spCtx.lineJoin = 'round';
  }

  if (scratchpadBtn) {
    scratchpadBtn.addEventListener('click', () => {
      toggleMenu();
      if (scratchpadOverlay) {
        scratchpadOverlay.classList.remove('hidden');
        setTimeout(initCanvas, 50);
      }
    });
  }
  if (closeScratchpad) {
    closeScratchpad.addEventListener('click', () => {
      if (scratchpadOverlay) scratchpadOverlay.classList.add('hidden');
    });
  }

  if (spCanvas) {
    const getPos = (e) => {
      const rect = spCanvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    spCanvas.addEventListener('mousedown', (e) => { spDrawing = true; const p = getPos(e); spCtx.beginPath(); spCtx.moveTo(p.x, p.y); });
    spCanvas.addEventListener('mousemove', (e) => {
      if (!spDrawing) return;
      const p = getPos(e);
      if (spCurrentMode === 'eraser') {
        spCtx.clearRect(p.x - 10, p.y - 10, 20, 20);
      } else {
        spCtx.lineWidth = 2.5;
        spCtx.strokeStyle = spCurrentColor;
        spCtx.lineTo(p.x, p.y);
        spCtx.stroke();
      }
    });
    spCanvas.addEventListener('mouseup', () => { spDrawing = false; });
    spCanvas.addEventListener('touchstart', (e) => { e.preventDefault(); spDrawing = true; const p = getPos(e); spCtx.beginPath(); spCtx.moveTo(p.x, p.y); }, { passive: false });
    spCanvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (!spDrawing) return;
      const p = getPos(e);
      spCtx.lineWidth = 2.5;
      spCtx.strokeStyle = spCurrentColor;
      spCtx.lineTo(p.x, p.y);
      spCtx.stroke();
    }, { passive: false });
    spCanvas.addEventListener('touchend', () => { spDrawing = false; });
  }

  // Color buttons
  document.querySelectorAll('.sp-color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      spCurrentColor = btn.dataset.color;
      spCurrentMode = 'pen';
    });
  });
  const spEraser = document.getElementById('sp-eraser');
  if (spEraser) spEraser.addEventListener('click', () => { spCurrentMode = 'eraser'; });
  const spClear = document.getElementById('sp-clear');
  if (spClear) spClear.addEventListener('click', () => { if (spCtx && spCanvas) { spCtx.fillStyle = '#ffffff'; spCtx.fillRect(0, 0, spCanvas.width, spCanvas.height); } });

  // ── FORMULA SHEET ─────────────────────────────────────────────────
  const formulaBtn = document.getElementById('tool-formulas');
  const formulaOverlay = document.getElementById('formula-overlay');
  const closeFormula = document.getElementById('close-formula');
  const formulaBg = document.getElementById('formula-bg');
  if (formulaBtn) formulaBtn.addEventListener('click', () => { toggleMenu(); if (formulaOverlay) formulaOverlay.classList.remove('hidden'); });
  if (closeFormula) closeFormula.addEventListener('click', () => { if (formulaOverlay) formulaOverlay.classList.add('hidden'); });
  if (formulaBg) formulaBg.addEventListener('click', () => { if (formulaOverlay) formulaOverlay.classList.add('hidden'); });

  // ── NOTES ────────────────────────────────────────────────────────
  const notesBtn = document.getElementById('tool-notes');
  const notesOverlay = document.getElementById('notes-overlay');
  const closeNotes = document.getElementById('close-notes');
  const stickyNotes = document.getElementById('sticky-notes');
  const clearNotes = document.getElementById('clear-notes');
  if (notesBtn) notesBtn.addEventListener('click', () => { toggleMenu(); if (notesOverlay) notesOverlay.classList.toggle('hidden'); });
  if (closeNotes) closeNotes.addEventListener('click', () => { if (notesOverlay) notesOverlay.classList.add('hidden'); });
  if (stickyNotes) {
    stickyNotes.value = localStorage.getItem('learnly-notes') || '';
    stickyNotes.addEventListener('input', () => localStorage.setItem('learnly-notes', stickyNotes.value));
  }
  if (clearNotes) clearNotes.addEventListener('click', () => { if (stickyNotes) stickyNotes.value = ''; localStorage.removeItem('learnly-notes'); });

  // ── CALCULATOR ───────────────────────────────────────────────────
  const calcBtn = document.getElementById('tool-calculator');
  const calcOverlay = document.getElementById('calculator-overlay');
  const closeCalc = document.getElementById('close-calculator');
  const calcDisplay = document.getElementById('calc-display');
  let calcExpression = '';

  if (calcBtn) calcBtn.addEventListener('click', () => { toggleMenu(); if (calcOverlay) calcOverlay.classList.toggle('hidden'); });
  if (closeCalc) closeCalc.addEventListener('click', () => { if (calcOverlay) calcOverlay.classList.add('hidden'); });

  document.querySelectorAll('.calc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.key;
      if (key === 'C') { calcExpression = ''; if (calcDisplay) calcDisplay.textContent = '0'; return; }
      if (key === '⌫') { calcExpression = calcExpression.slice(0, -1); if (calcDisplay) calcDisplay.textContent = calcExpression || '0'; return; }
      if (key === '=') {
        try {
          const expr = calcExpression.replace('÷', '/').replace('×', '*').replace('−', '-');
          const result = Function(`"use strict"; return (${expr})`)();
          calcExpression = String(Math.round(result * 1e10) / 1e10);
          if (calcDisplay) calcDisplay.textContent = calcExpression;
        } catch { if (calcDisplay) calcDisplay.textContent = 'Error'; calcExpression = ''; }
        return;
      }
      if (key === '%') { calcExpression = String(parseFloat(calcExpression) / 100); if (calcDisplay) calcDisplay.textContent = calcExpression; return; }
      if (key === '±') { calcExpression = String(-parseFloat(calcExpression)); if (calcDisplay) calcDisplay.textContent = calcExpression; return; }
      calcExpression += key;
      if (calcDisplay) calcDisplay.textContent = calcExpression;
    });
  });

  // ── NOTIFICATIONS PANEL ──────────────────────────────────────────
  const notifBtn = document.getElementById('notif-btn');
  const notifPanel = document.getElementById('notif-panel');
  const markAllRead = document.getElementById('mark-all-read');
  let notifOpen = false;

  if (notifBtn) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifOpen = !notifOpen;
      if (notifOpen) {
        notifPanel.classList.remove('translate-y-2', 'opacity-0', 'pointer-events-none');
      } else {
        notifPanel.classList.add('translate-y-2', 'opacity-0', 'pointer-events-none');
      }
    });
  }
  document.addEventListener('click', (e) => {
    if (notifOpen && notifPanel && !notifPanel.contains(e.target) && e.target !== notifBtn) {
      notifOpen = false;
      notifPanel.classList.add('translate-y-2', 'opacity-0', 'pointer-events-none');
    }
  });
  if (markAllRead) {
    markAllRead.addEventListener('click', () => {
      document.querySelectorAll('#notif-panel .bg-primary').forEach(dot => { if (dot.classList.contains('w-1.5')) dot.remove(); });
      document.querySelectorAll('#notif-panel > div > div').forEach(row => row.classList.add('opacity-60'));
      // Remove red dot from header
      const headerDot = document.querySelector('#notif-btn span.bg-error');
      if (headerDot) headerDot.remove();
    });
  }

  // ── AI BUDDY CHAT ────────────────────────────────────────────────
  const chatInput = document.getElementById('ai-chat-input');
  const chatSend = document.getElementById('ai-chat-send');
  const chatResponse = document.getElementById('ai-chat-response');
  
  const aiResponses = {
    default: [
      "Great question! Break the problem down step by step. What's the first piece of information you're given?",
      "Think about what operation connects the values. Can you spot a pattern in the numbers?",
      "Try visualizing it — draw a diagram if it's spatial. What shapes or sequences do you see?",
      "Remember: read the question twice. What is it actually asking you to find?",
      "Work backwards from the answer choices if you're stuck — which one can you eliminate first?",
    ]
  };

  function sendAIMessage() {
    if (!chatInput || !chatResponse) return;
    const msg = chatInput.value.trim();
    if (!msg) return;
    chatInput.value = '';
    chatResponse.classList.remove('hidden');
    chatResponse.textContent = '⏳ Thinking...';
    setTimeout(() => {
      const responses = aiResponses.default;
      chatResponse.textContent = '🤖 ' + responses[Math.floor(Math.random() * responses.length)];
    }, 800);
  }

  if (chatSend) chatSend.addEventListener('click', sendAIMessage);
  if (chatInput) chatInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendAIMessage(); });
});
