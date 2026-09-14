// Learnly 11+ — Global Focus Companion
document.addEventListener('DOMContentLoaded', () => {
  // Inject the HTML for the Focus Companion
  const companionHTML = `
    <!-- Floating Action Button -->
    <button id="focus-fab" class="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-primary text-on-primary shadow-xl hover:scale-110 transition-transform z-50 flex items-center justify-center border-4 border-surface-container-lowest" title="Focus Companion">
      <span class="material-symbols-outlined text-3xl">psychology</span>
    </button>

    <!-- Focus Companion Menu (Hidden by default) -->
    <div id="focus-menu" class="fixed bottom-24 right-6 w-80 bg-surface/90 backdrop-blur-xl border border-outline-variant/30 rounded-3xl shadow-2xl z-40 transform translate-y-10 opacity-0 pointer-events-none transition-all duration-300 flex flex-col overflow-hidden">
      
      <!-- Header -->
      <div class="p-space-md border-b border-surface-container-high flex items-center justify-between bg-primary/5">
        <h3 class="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
          <span class="material-symbols-outlined text-primary">auto_awesome</span>
          Focus Companion
        </h3>
        <button id="close-focus-menu" class="text-on-surface-variant hover:text-error transition-colors">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <!-- Tools Grid -->
      <div class="p-space-md grid grid-cols-2 gap-space-sm">
        
        <!-- Pomodoro Timer Tool -->
        <button id="tool-timer" class="flex flex-col items-center justify-center p-space-md rounded-2xl bg-surface-container-lowest border border-surface-container-highest hover:border-primary hover:bg-primary/5 transition-all text-center">
          <span class="material-symbols-outlined text-primary text-3xl mb-2">timer</span>
          <span class="font-label-md font-bold text-on-surface">Study Timer</span>
          <span id="timer-display" class="font-mono text-sm text-on-surface-variant mt-1">25:00</span>
        </button>

        <!-- Scratchpad Tool -->
        <button id="tool-scratchpad" class="flex flex-col items-center justify-center p-space-md rounded-2xl bg-surface-container-lowest border border-surface-container-highest hover:border-secondary hover:bg-secondary/5 transition-all text-center">
          <span class="material-symbols-outlined text-secondary text-3xl mb-2">draw</span>
          <span class="font-label-md font-bold text-on-surface">Scratchpad</span>
          <span class="font-mono text-sm text-on-surface-variant mt-1">Workings</span>
        </button>

      </div>

      <!-- Quick AI Chat -->
      <div class="p-space-md border-t border-surface-container-high bg-surface-container-lowest">
        <div class="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Ask AI Buddy</div>
        <div class="flex items-center gap-2">
          <input type="text" placeholder="I'm stuck on..." class="flex-1 bg-surface-container-low border border-surface-container-highest rounded-full px-3 py-1.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">
          <button class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 hover:scale-105 transition-transform">
            <span class="material-symbols-outlined text-sm">send</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Global Scratchpad Overlay (Hidden by default) -->
    <div id="scratchpad-overlay" class="fixed inset-0 z-[100] hidden bg-surface/50 backdrop-blur-sm">
      <div class="absolute inset-4 md:inset-10 bg-surface-container-lowest rounded-3xl shadow-2xl border border-surface-container-high flex flex-col overflow-hidden">
        
        <!-- Toolbar -->
        <div class="h-14 bg-surface-container-low border-b border-surface-container-high flex items-center justify-between px-space-lg">
          <div class="flex items-center gap-4">
            <span class="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
              <span class="material-symbols-outlined text-secondary">draw</span>
              Maths Scratchpad
            </span>
            <div class="h-6 w-px bg-outline-variant/30"></div>
            <!-- Drawing tools mock -->
            <button class="w-8 h-8 rounded-full bg-on-surface text-surface flex items-center justify-center shadow-sm"><span class="material-symbols-outlined text-sm">edit</span></button>
            <button class="w-8 h-8 rounded-full text-on-surface-variant hover:bg-surface-container flex items-center justify-center"><span class="material-symbols-outlined text-sm">format_color_fill</span></button>
            <button class="w-8 h-8 rounded-full text-on-surface-variant hover:bg-surface-container flex items-center justify-center"><span class="material-symbols-outlined text-sm">ink_eraser</span></button>
          </div>
          <button id="close-scratchpad" class="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface hover:bg-error hover:text-on-error transition-colors font-label-md font-bold">
            Close
          </button>
        </div>
        
        <!-- Canvas Area -->
        <div class="flex-1 relative bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] bg-repeat opacity-80 cursor-crosshair">
          <!-- Mock drawing -->
          <svg class="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
             <path d="M 200 150 Q 250 100 300 200 T 400 150" fill="transparent" stroke="#4f46e5" stroke-width="4" opacity="0.3"/>
          </svg>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-on-surface-variant/50 pointer-events-none">
            <span class="material-symbols-outlined text-6xl mb-2">gesture</span>
            <p class="font-body-lg">Draw your working out here</p>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', companionHTML);

  // Logic
  const fab = document.getElementById('focus-fab');
  const menu = document.getElementById('focus-menu');
  const closeMenu = document.getElementById('close-focus-menu');
  const timerBtn = document.getElementById('tool-timer');
  const timerDisplay = document.getElementById('timer-display');
  const scratchpadBtn = document.getElementById('tool-scratchpad');
  const scratchpadOverlay = document.getElementById('scratchpad-overlay');
  const closeScratchpad = document.getElementById('close-scratchpad');

  let isMenuOpen = false;
  let timerInterval = null;
  let timerSeconds = 25 * 60;
  let isTimerRunning = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      menu.classList.remove('translate-y-10', 'opacity-0', 'pointer-events-none');
      fab.classList.add('scale-90', 'bg-surface-container-highest', 'text-on-surface');
      fab.classList.remove('bg-primary', 'text-on-primary');
    } else {
      menu.classList.add('translate-y-10', 'opacity-0', 'pointer-events-none');
      fab.classList.remove('scale-90', 'bg-surface-container-highest', 'text-on-surface');
      fab.classList.add('bg-primary', 'text-on-primary');
    }
  };

  fab.addEventListener('click', toggleMenu);
  closeMenu.addEventListener('click', toggleMenu);

  // Timer Logic
  const formatTime = (totalSeconds) => {
    const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    return \`\${m}:\${s}\`;
  };

  timerBtn.addEventListener('click', () => {
    if (isTimerRunning) {
      clearInterval(timerInterval);
      isTimerRunning = false;
      timerBtn.classList.remove('bg-primary/10', 'border-primary');
    } else {
      isTimerRunning = true;
      timerBtn.classList.add('bg-primary/10', 'border-primary');
      timerInterval = setInterval(() => {
        if (timerSeconds > 0) {
          timerSeconds--;
          timerDisplay.textContent = formatTime(timerSeconds);
        } else {
          clearInterval(timerInterval);
          isTimerRunning = false;
          // Play a sound or show a notification
          timerDisplay.textContent = "Time's up!";
        }
      }, 1000);
    }
  });

  // Scratchpad Logic
  scratchpadBtn.addEventListener('click', () => {
    toggleMenu(); // close menu when opening scratchpad
    scratchpadOverlay.classList.remove('hidden');
  });

  closeScratchpad.addEventListener('click', () => {
    scratchpadOverlay.classList.add('hidden');
  });

});
