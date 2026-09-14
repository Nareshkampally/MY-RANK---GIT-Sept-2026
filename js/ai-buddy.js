// Learnly 11+ / MyRank 11+ — AI Socratic Hint Buddy & Accessibility Engine
// Powers 3-tier cognitive hints, text-to-speech audio read-aloud, reading ruler, and parent cheer notifications

const AIBuddy = (function() {
  let isSpeaking = false;
  let isReadingRulerActive = false;
  let isDyslexiaFontActive = false;

  // 3-Tier Socratic hints database for practice questions
  const QUESTION_HINTS = {
    'VR-L5-0428': {
      title: 'Question 14: Word Relationships & Logical Antonyms',
      stem: 'Sagacious, Benevolent, Reticent vs Malicious, Fatuous, Gregarious',
      tier1: {
        badge: 'Tier 1 • Guiding Clue',
        icon: 'lightbulb',
        color: 'primary',
        text: 'Look closely at the excerpt: the librarian gives <em class="font-bold">sagacious</em> advice (insightful, never trivial), while the apprentice makes <em class="font-bold">impetuous, hasty</em> judgments without thinking. What root meaning does "sagacious" carry?'
      },
      tier2: {
        badge: 'Tier 2 • Technique & Elimination',
        icon: 'rule',
        color: 'secondary',
        text: 'Break down the word: "Sagacious" comes from Latin <em>sagax</em> (wise, shrewd). We need its direct opposite: someone foolish or lacking good judgment. Look at Group 2: Which word sounds like "infatuated" or "foolish"?'
      },
      tier3: {
        badge: 'Tier 3 • Step-by-Step Solution Breakdown',
        icon: 'visibility',
        color: 'tertiary-container',
        text: '<strong>Fatuous</strong> means completely silly or foolish (Group 2, Option B). Since <strong>Sagacious</strong> means possessing keen mental discernment and wisdom (Group 1, Option 1), the exact opposite pair is <strong>1 and B (Sagacious & Fatuous)</strong>. Select Option A.'
      }
    }
  };

  // Web Speech API: Read aloud text
  function speakText(textToSpeak, onStartCallback, onEndCallback) {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-Speech is not supported in this browser.');
      return;
    }

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      isSpeaking = false;
      if (onEndCallback) onEndCallback();
      return;
    }

    // Clean HTML tags from text
    const cleanText = textToSpeak.replace(/<[^>]*>?/gm, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-GB';
    utterance.rate = 0.95; // Slightly slower, child-friendly cadence
    utterance.pitch = 1.05; // Friendly warm tone

    utterance.onstart = () => {
      isSpeaking = true;
      if (onStartCallback) onStartCallback();
    };

    utterance.onend = () => {
      isSpeaking = false;
      if (onEndCallback) onEndCallback();
    };

    utterance.onerror = () => {
      isSpeaking = false;
      if (onEndCallback) onEndCallback();
    };

    window.speechSynthesis.speak(utterance);
  }

  function stopSpeech() {
    if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      isSpeaking = false;
    }
  }

  // Open Socratic AI Hint Drawer
  // Open Socratic AI Hint Drawer
  async function openHintModal(questionId = 'VR-L5-0428', studentAnswer = null) {
    let modal = document.getElementById('ai-hint-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'ai-hint-modal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity duration-200';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="relative w-full max-w-xl bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-2xl border border-outline-variant/30 text-on-surface animate-in fade-in zoom-in-95 duration-200">
        <div class="flex flex-col items-center justify-center py-12">
          <span class="material-symbols-outlined text-4xl text-primary animate-spin mb-4">sync</span>
          <h2 class="text-xl font-extrabold text-on-surface tracking-tight mt-0.5">AI Tutor is analyzing your context...</h2>
        </div>
      </div>
    `;
    modal.classList.remove('hidden');

    try {
      const res = await LearnlyAPI.getQuestionHints(questionId, { studentSAS: 100, studentAnswer });
      const hintData = {
        tier1: { icon: 'lightbulb', badge: 'Context Clue', text: res.hints.tier1 },
        tier2: { icon: 'psychology', badge: 'Elimination', text: res.hints.tier2 },
        tier3: { icon: 'target', badge: 'Final Push', text: res.hints.tier3 }
      };

      modal.innerHTML = `
        <div class="relative w-full max-w-xl bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-2xl border border-outline-variant/30 text-on-surface animate-in fade-in zoom-in-95 duration-200">
          <!-- Close Button -->
          <button id="close-hint-modal" class="absolute top-6 right-6 w-9 h-9 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant flex items-center justify-center transition-colors">
            <span class="material-symbols-outlined text-lg">close</span>
          </button>

          <!-- Header -->
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-primary-container text-on-primary flex items-center justify-center shadow-lg">
              <span class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1;">neurology</span>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold uppercase tracking-wider">AI Socratic Tutor</span>
                <span class="text-xs font-semibold text-tertiary flex items-center gap-1">
                  <span class="w-2 h-2 rounded-full bg-tertiary"></span> Active Scaffolding
                </span>
              </div>
              <h2 class="text-xl font-extrabold text-on-surface tracking-tight mt-0.5">Need a hint? Let's solve it together!</h2>
            </div>
          </div>

          <p class="text-xs font-medium text-on-surface-variant mb-4 bg-surface-container-low p-2.5 rounded-xl border border-outline-variant/20">
            💡 <strong>Learnly Socratic Rule:</strong> We don't just give the answer. Use progressive hint levels to train your cognitive intuition for the real exam.
          </p>

          <!-- Progressive Hint Tiers Accordion -->
          <div class="space-y-3 mb-6">
            <!-- Tier 1 -->
            <div class="p-4 rounded-2xl bg-surface-container-low border border-primary/20 transition-all">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <span class="material-symbols-outlined text-base">${hintData.tier1.icon}</span>
                  </span>
                  <span class="text-xs font-bold uppercase tracking-wider text-primary">${hintData.tier1.badge}</span>
                </div>
                <span class="text-xs text-outline font-semibold">Step 1</span>
              </div>
              <p class="text-sm text-on-surface mt-2.5 leading-relaxed">${hintData.tier1.text}</p>
            </div>

          <!-- Tier 2 (Unlockable) -->
          <div id="hint-tier-2-box" class="p-4 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30 transition-all">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                  <span class="material-symbols-outlined text-base">${hintData.tier2.icon}</span>
                </span>
                <span class="text-xs font-bold uppercase tracking-wider text-secondary">${hintData.tier2.badge}</span>
              </div>
              <button id="unlock-tier-2-btn" class="text-xs font-bold px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim transition-colors flex items-center gap-1">
                <span class="material-symbols-outlined text-xs">lock_open</span> Reveal Tier 2
              </button>
            </div>
            <div id="tier-2-content" class="hidden text-sm text-on-surface mt-2.5 leading-relaxed border-t border-outline-variant/20 pt-2.5">
              ${hintData.tier2.text}
            </div>
          </div>

          <!-- Tier 3 (Full Breakdown) -->
          <div id="hint-tier-3-box" class="p-4 rounded-2xl bg-surface-container-low/40 border border-outline-variant/20 transition-all">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center">
                  <span class="material-symbols-outlined text-base">${hintData.tier3.icon}</span>
                </span>
                <span class="text-xs font-bold uppercase tracking-wider text-tertiary">${hintData.tier3.badge}</span>
              </div>
              <button id="unlock-tier-3-btn" class="text-xs font-bold px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1">
                <span class="material-symbols-outlined text-xs">lock</span> Reveal Full Solution
              </button>
            </div>
            <div id="tier-3-content" class="hidden text-sm text-on-surface mt-2.5 leading-relaxed border-t border-outline-variant/20 pt-2.5 bg-surface-container-lowest p-3 rounded-xl">
              ${hintData.tier3.text}
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-outline-variant/20">
          <span class="text-xs text-on-surface-variant flex items-center gap-1">
            <span class="material-symbols-outlined text-sm text-primary">psychology</span>
            Tip: Press <kbd class="px-1.5 py-0.5 rounded bg-surface-container font-mono text-[10px]">H</kbd> anytime for hints
          </span>
          <button id="got-it-btn" class="px-5 py-2 rounded-full bg-primary text-on-primary font-bold text-sm shadow-md hover:opacity-90 transition-all">
            Got it, Let me Try!
          </button>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');

    document.getElementById('close-hint-modal').addEventListener('click', () => modal.classList.add('hidden'));
    document.getElementById('got-it-btn').addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });

    // Tier 2 unlock
    const unlockT2 = document.getElementById('unlock-tier-2-btn');
    if (unlockT2) {
      unlockT2.addEventListener('click', () => {
        document.getElementById('tier-2-content').classList.remove('hidden');
        unlockT2.classList.add('hidden');
        document.getElementById('hint-tier-2-box').classList.add('border-secondary/40', 'bg-surface-container-low');
      });
    }

    // Tier 3 unlock
    const unlockT3 = document.getElementById('unlock-tier-3-btn');
    if (unlockT3) {
      unlockT3.addEventListener('click', () => {
        document.getElementById('tier-3-content').classList.remove('hidden');
        unlockT3.classList.add('hidden');
        document.getElementById('hint-tier-3-box').classList.add('border-tertiary/40', 'bg-surface-container-low');
      });
    }

    } catch (e) {
      console.error(e);
      modal.innerHTML = `
        <div class="relative w-full max-w-xl bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-2xl border border-outline-variant/30 text-on-surface animate-in fade-in zoom-in-95 duration-200">
          <button id="close-error-modal" class="absolute top-6 right-6 w-9 h-9 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant flex items-center justify-center transition-colors">
            <span class="material-symbols-outlined text-lg">close</span>
          </button>
          <div class="flex flex-col items-center justify-center py-12">
            <span class="material-symbols-outlined text-4xl text-error mb-4">error</span>
            <h2 class="text-xl font-extrabold text-on-surface tracking-tight mt-0.5">Failed to load AI Hint.</h2>
            <p class="text-on-surface-variant mt-2 text-center text-sm">Please try again later.</p>
          </div>
        </div>
      `;
      document.getElementById('close-error-modal')?.addEventListener('click', () => modal.classList.add('hidden'));
    }
  }

  // Reading Focus Ruler (for dyslexia and reading fatigue)
  function toggleReadingRuler() {
    isReadingRulerActive = !isReadingRulerActive;
    let ruler = document.getElementById('reading-focus-ruler');
    
    if (isReadingRulerActive) {
      if (!ruler) {
        ruler = document.createElement('div');
        ruler.id = 'reading-focus-ruler';
        ruler.className = 'fixed left-0 right-0 pointer-events-none z-50 h-10 bg-primary/10 border-y border-primary/30 transition-all duration-75 shadow-[0_0_20px_rgba(79,70,229,0.15)]';
        document.body.appendChild(ruler);
      }
      ruler.classList.remove('hidden');

      const moveHandler = (e) => {
        if (!isReadingRulerActive) return;
        ruler.style.top = `${e.clientY - 20}px`;
      };
      window.addEventListener('mousemove', moveHandler);
      showToast('Reading Focus Ruler: Active', 'Move your mouse to guide your reading eyes.');
    } else {
      if (ruler) ruler.classList.add('hidden');
      showToast('Reading Focus Ruler: Disabled');
    }
  }

  // Dyslexia-Friendly High-Readability Font Mode
  function toggleDyslexiaMode() {
    isDyslexiaFontActive = !isDyslexiaFontActive;
    if (isDyslexiaFontActive) {
      document.documentElement.classList.add('dyslexia-mode');
      showToast('High-Readability Mode: Active', 'Wider letter-spacing and clear font rendering enabled.');
    } else {
      document.documentElement.classList.remove('dyslexia-mode');
      showToast('Standard Typography Restored');
    }
  }

  // Parent Encouragement & Live Motivational Cheer
  function sendParentCheer(message, cheerType = 'star') {
    let cheerBox = document.getElementById('live-cheer-toast');
    if (!cheerBox) {
      cheerBox = document.createElement('div');
      cheerBox.id = 'live-cheer-toast';
      cheerBox.className = 'fixed top-24 right-8 z-50 max-w-sm p-4 rounded-2xl bg-surface-container-lowest border-2 border-secondary shadow-2xl text-on-surface transform transition-all duration-300 animate-in slide-in-from-top-4';
      document.body.appendChild(cheerBox);
    }

    const icons = {
      star: '⭐',
      rocket: '🚀',
      brain: '🧠',
      heart: '💖',
      trophy: '🏆'
    };

    cheerBox.innerHTML = `
      <div class="flex items-start gap-3">
        <div class="text-3xl flex-shrink-0 animate-bounce">${icons[cheerType] || '⭐'}</div>
        <div>
          <div class="flex items-center gap-1.5">
            <span class="text-xs font-extrabold uppercase tracking-wider text-secondary">Parent Live Cheer</span>
            <span class="text-[10px] text-outline">• Just Now</span>
          </div>
          <p class="text-sm font-bold text-on-surface mt-1 leading-snug">"${message}"</p>
          <span class="text-xs font-semibold text-primary block mt-1">Keep up the brilliant momentum, Leo!</span>
        </div>
        <button onclick="document.getElementById('live-cheer-toast').remove()" class="text-outline hover:text-on-surface transition-colors ml-auto text-lg leading-none">&times;</button>
      </div>
    `;

    setTimeout(() => {
      if (cheerBox && cheerBox.parentNode) {
        cheerBox.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => cheerBox.remove(), 300);
      }
    }, 5000);
  }

  // Toast Notification Helper
  function showToast(title, desc = '') {
    let toast = document.getElementById('learnly-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'learnly-toast';
      toast.className = 'fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-surface-container-highest/95 backdrop-blur-md border border-outline-variant/30 text-on-surface shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <span class="material-symbols-outlined text-primary text-xl">info</span>
      <div>
        <div class="text-sm font-bold text-on-surface leading-tight">${title}</div>
        ${desc ? `<div class="text-xs text-on-surface-variant mt-0.5">${desc}</div>` : ''}
      </div>
    `;
    toast.classList.remove('hidden', 'opacity-0');
    setTimeout(() => {
      if (toast) toast.classList.add('opacity-0');
    }, 3000);
  }

  return {
    speakText,
    stopSpeech,
    openHintModal,
    toggleReadingRuler,
    toggleDyslexiaMode,
    sendParentCheer,
    showToast
  };
})();

window.AIBuddy = AIBuddy;
