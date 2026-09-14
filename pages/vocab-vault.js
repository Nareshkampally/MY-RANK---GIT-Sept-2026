// Learnly 11+ / MyRank 11+ — LexiVault 11+ Spaced Repetition Vocabulary Studio
LearnlyRouter.register('vocab-vault', function() {
  const VOCAB_DATA = [
    {
      id: 'v1',
      word: 'Sagacious',
      phonetic: '/səˈɡeɪ.ʃəs/',
      type: 'Adjective',
      difficulty: 'High Yield',
      category: 'Antonyms',
      stem: 'The old librarian was known for her ______ advice during complex debates.',
      definition: 'Having or showing keen mental discernment, sound judgment, and farsighted wisdom.',
      etymology: 'From Latin "sagax" (quick-scented, acute of mind).',
      mnemonic: '🧠 Think of a wise old SAGE who gives sound, sagacious guidance.',
      synonyms: ['Astute', 'Prudent', 'Discerning', 'Perspicacious'],
      antonyms: ['Fatuous', 'Foolish', 'Imprudent', 'Naive'],
      status: 'Mastered'
    },
    {
      id: 'v2',
      word: 'Impetuous',
      phonetic: '/ɪmˈpetʃ.u.əs/',
      type: 'Adjective',
      difficulty: 'High Yield',
      category: 'Antonyms',
      stem: 'His ______ decision to charge without a plan cost the team the lead.',
      definition: 'Acting or done quickly and without thought or care; impulsive and rash.',
      etymology: 'From Late Latin "impetuosus" (violent, forceful, moving with sudden rush).',
      mnemonic: '⚡ Sounds like "PETULANT" or "IMPULSIVE" — doing things on sudden impulse!',
      synonyms: ['Impulsive', 'Rash', 'Headlong', 'Hasty'],
      antonyms: ['Cautious', 'Deliberate', 'Wary', 'Circumspect'],
      status: 'Getting There'
    },
    {
      id: 'v3',
      word: 'Benevolent',
      phonetic: '/bəˈnev.əl.ənt/',
      type: 'Adjective',
      difficulty: 'Foundation',
      category: 'Synonyms',
      stem: 'The ______ benefactor donated funds to build the new school library.',
      definition: 'Well meaning and kindly; serving a charitable rather than profit-making purpose.',
      etymology: 'From Latin "bene" (well) + "volent" (wishing).',
      mnemonic: '❤️ "BENE" always means GOOD (like beneficial, benefit). Wishing good to all!',
      synonyms: ['Kindhearted', 'Magnanimous', 'Altruistic', 'Generous'],
      antonyms: ['Malicious', 'Malevolent', 'Spiteful', 'Hostile'],
      status: 'Mastered'
    },
    {
      id: 'v4',
      word: 'Reticent',
      phonetic: '/ˈret.ɪ.sənt/',
      type: 'Adjective',
      difficulty: 'Consortium Classic',
      category: 'Antonyms',
      stem: 'He was extremely ______ about his past achievements, rarely speaking about his awards.',
      definition: 'Not revealing one\'s thoughts or feelings readily; reserved and restrained in speech.',
      etymology: 'From Latin "reticere" (to keep silent, from re- + tacere to be silent).',
      mnemonic: '🤐 Sounds like "RELUCTANT to speak" or "TACIT". Quiet and measured.',
      synonyms: ['Reserved', 'Taciturn', 'Withdrawn', 'Incommunicative'],
      antonyms: ['Gregarious', 'Loquacious', 'Garrulous', 'Voluble'],
      status: 'Needs Practice'
    },
    {
      id: 'v5',
      word: 'Ambiguous',
      phonetic: '/æmˈbɪɡ.ju.əs/',
      type: 'Adjective',
      difficulty: 'High Yield',
      category: 'Tricky Cloze',
      stem: 'The detective noted that the witness statement was dangerously ______ and open to double meaning.',
      definition: 'Open to more than one interpretation; having a double meaning; unclear or inexact.',
      etymology: 'From Latin "ambiguus" (doubtful, going both ways: ambi- meaning both).',
      mnemonic: '🔀 "AMBI" means BOTH (like ambidextrous). It could mean two different things!',
      synonyms: ['Equivocal', 'Obscure', 'Enigmatic', 'Vague'],
      antonyms: ['Lucid', 'Unambiguous', 'Explicit', 'Definitive'],
      status: 'Getting There'
    },
    {
      id: 'v6',
      word: 'Voracious',
      phonetic: '/vəˈreɪ.ʃəs/',
      type: 'Adjective',
      difficulty: 'Consortium Classic',
      category: 'Synonyms',
      stem: 'From an early age, Maya was a ______ reader who devoured two novels every weekend.',
      definition: 'Wanting or devouring great quantities of food or reading material; exceedingly eager.',
      etymology: 'From Latin "vorare" (to devour, like carnivore or herbivore).',
      mnemonic: '📚 Like a CARNIVORE for books! Devouring knowledge hungrily.',
      synonyms: ['Insatiable', 'Ravenous', 'Avid', 'Rapacious'],
      antonyms: ['Apathetic', 'Quenched', 'Indifferent', 'Satiated'],
      status: 'Needs Practice'
    }
  ];

  return `
  <!-- LexiVault Header -->
  <section class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md mb-space-xl">
    <div>
      <div class="flex items-center gap-space-xs">
        <span class="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold uppercase tracking-wider">Spaced Repetition Engine</span>
        <span class="text-xs font-semibold text-secondary flex items-center gap-1">
          <span class="material-symbols-outlined text-sm">bolt</span> Streak Active (14 Days)
        </span>
      </div>
      <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">LexiVault 11+ — Vocabulary Power Trainer</h1>
      <p class="font-body-md text-body-md text-on-surface-variant mt-1">
        Master high-frequency GL &amp; CEM vocabulary with interactive 3D flipcards, native UK voice pronunciation, and memory mnemonics.
      </p>
    </div>
    <!-- Quick Stats Bar -->
    <div class="flex items-center gap-3 bg-surface-container-lowest p-2 rounded-2xl border border-outline-variant/30 shadow-sm">
      <div class="px-3 py-1.5 rounded-xl bg-tertiary-fixed text-center">
        <span class="text-[10px] uppercase font-bold text-on-tertiary-fixed block">Mastered</span>
        <strong class="text-lg font-black text-on-tertiary-fixed font-mono" id="mastered-count">2</strong>
      </div>
      <div class="px-3 py-1.5 rounded-xl bg-secondary-fixed text-center">
        <span class="text-[10px] uppercase font-bold text-on-secondary-fixed block">Learning</span>
        <strong class="text-lg font-black text-on-secondary-fixed font-mono" id="learning-count">2</strong>
      </div>
      <div class="px-3 py-1.5 rounded-xl bg-error-container text-center">
        <span class="text-[10px] uppercase font-bold text-on-error-container block">To Drill</span>
        <strong class="text-lg font-black text-on-error-container font-mono" id="practice-count">2</strong>
      </div>
    </div>
  </section>

  <!-- Category Filter Bar -->
  <div class="flex items-center gap-2 overflow-x-auto pb-space-sm mb-space-lg scrollbar-none">
    <button class="vocab-filter-btn px-4 py-2 rounded-full bg-primary text-on-primary font-bold text-sm shadow-sm transition-all cursor-pointer" data-category="all">
      All 11+ Words (6)
    </button>
    <button class="vocab-filter-btn px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface font-bold text-sm transition-all cursor-pointer" data-category="Antonyms">
      Antonym Pairs
    </button>
    <button class="vocab-filter-btn px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface font-bold text-sm transition-all cursor-pointer" data-category="Synonyms">
      Synonym Clusters
    </button>
    <button class="vocab-filter-btn px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface font-bold text-sm transition-all cursor-pointer" data-category="Tricky Cloze">
      Tricky Cloze Words
    </button>
  </div>

  <!-- Interactive 3D Card Grid -->
  <div id="vocab-cards-grid" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-lg mb-space-2xl">
    ${VOCAB_DATA.map(v => `
      <div class="vocab-card-wrapper group perspective-1000" data-id="${v.id}" data-category="${v.category}">
        <div class="vocab-card relative w-full h-[400px] rounded-3xl transition-transform duration-500 transform-style-3d cursor-pointer shadow-lg hover:shadow-2xl">
          
          <!-- FRONT OF CARD -->
          <div class="card-face card-front absolute inset-0 w-full h-full rounded-3xl p-6 bg-surface-container-lowest border-2 border-outline-variant/30 flex flex-col justify-between backface-hidden">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-md text-label-md font-bold uppercase tracking-wider">${v.category}</span>
                <span class="px-2 py-0.5 rounded-full text-xs font-bold ${v.status==='Mastered'?'bg-tertiary-fixed text-on-tertiary-fixed':v.status==='Getting There'?'bg-secondary-fixed text-on-secondary-fixed':'bg-error-container text-on-error-container'}">
                  ${v.status}
                </span>
              </div>
              
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="text-3xl font-black text-on-surface tracking-tight">${v.word}</h2>
                  <span class="text-xs font-mono text-outline">${v.phonetic} • <em class="text-on-surface-variant">${v.type}</em></span>
                </div>
                <button class="speak-vocab-btn w-10 h-10 rounded-full bg-primary-fixed hover:bg-primary-fixed-dim text-primary flex items-center justify-center transition-colors shadow-sm" data-word="${v.word}" type="button" title="Listen with British pronunciation">
                  <span class="material-symbols-outlined text-xl">volume_up</span>
                </button>
              </div>

              <!-- Exam Stem with Context -->
              <div class="mt-6 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20">
                <span class="text-[10px] font-bold uppercase tracking-wider text-primary block mb-1">11+ Consortium Exam Stem</span>
                <p class="text-sm font-medium text-on-surface italic leading-relaxed">"${v.stem}"</p>
              </div>
            </div>

            <div class="pt-4 border-t border-outline-variant/20 flex items-center justify-between text-xs text-on-surface-variant">
              <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm text-primary">touch_app</span> Click card to flip</span>
              <span class="font-bold text-secondary">+15 XP upon flip</span>
            </div>
          </div>

          <!-- BACK OF CARD -->
          <div class="card-face card-back absolute inset-0 w-full h-full rounded-3xl p-6 bg-surface-container-low border-2 border-primary/30 flex flex-col justify-between backface-hidden rotate-y-180 overflow-y-auto">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-extrabold uppercase text-primary">${v.word} — Breakdown</span>
                <span class="text-[11px] text-outline">${v.etymology}</span>
              </div>

              <!-- Definition -->
              <p class="text-sm font-semibold text-on-surface mb-3 leading-snug">
                ${v.definition}
              </p>

              <!-- Mnemonic / Memory Hook -->
              <div class="p-3 rounded-xl bg-secondary-fixed/30 border border-secondary/30 mb-3 text-xs text-on-surface font-medium leading-relaxed">
                <strong class="text-secondary block font-bold mb-0.5">🧠 11+ Memory Hook:</strong>
                ${v.mnemonic}
              </div>

              <!-- Synonyms & Antonyms -->
              <div class="grid grid-cols-2 gap-2 text-xs mb-3">
                <div class="p-2 rounded-lg bg-surface-container-lowest border border-outline-variant/20">
                  <strong class="text-tertiary block font-bold mb-1">Synonyms:</strong>
                  <span class="text-on-surface-variant">${v.synonyms.join(', ')}</span>
                </div>
                <div class="p-2 rounded-lg bg-surface-container-lowest border border-outline-variant/20">
                  <strong class="text-error block font-bold mb-1">Antonyms:</strong>
                  <span class="text-on-surface-variant">${v.antonyms.join(', ')}</span>
                </div>
              </div>
            </div>

            <!-- SRS Rating Action Bar -->
            <div class="pt-3 border-t border-outline-variant/20">
              <span class="text-[10px] font-bold uppercase text-on-surface-variant block text-center mb-2">How well do you know this word?</span>
              <div class="grid grid-cols-3 gap-1.5 text-xs font-bold">
                <button class="srs-btn py-1.5 px-1 rounded-xl bg-error-container text-on-error-container hover:scale-105 transition-transform" data-id="${v.id}" data-rating="Needs Practice" type="button">
                  To Drill 🔄
                </button>
                <button class="srs-btn py-1.5 px-1 rounded-xl bg-secondary-fixed text-on-secondary-fixed hover:scale-105 transition-transform" data-id="${v.id}" data-rating="Getting There" type="button">
                  Almost 💡
                </button>
                <button class="srs-btn py-1.5 px-1 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed hover:scale-105 transition-transform" data-id="${v.id}" data-rating="Mastered" type="button">
                  Mastered ⭐
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    `).join('')}
  </div>
  `;
}, function() {
  // Flip card handler
  document.querySelectorAll('.vocab-card-wrapper').forEach(wrapper => {
    const card = wrapper.querySelector('.vocab-card');
    wrapper.addEventListener('click', (e) => {
      // Don't flip if clicking the speech or SRS button
      if (e.target.closest('.speak-vocab-btn') || e.target.closest('.srs-btn')) return;
      card.classList.toggle('flipped');
    });
  });

  // Speech pronunciation handler
  document.querySelectorAll('.speak-vocab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const word = btn.dataset.word;
      if (window.AIBuddy) {
        btn.classList.add('animate-pulse');
        window.AIBuddy.speakText(word, null, () => {
          btn.classList.remove('animate-pulse');
        });
      }
    });
  });

  // SRS Rating buttons
  document.querySelectorAll('.srs-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const rating = btn.dataset.rating;
      const card = btn.closest('.vocab-card');
      const wrapper = btn.closest('.vocab-card-wrapper');
      
      if (window.AIBuddy) {
        window.AIBuddy.showToast(`Word Marked: ${rating}`, '+15 XP added to Scholar Profile!');
      }

      // Update badge on front
      const badge = wrapper.querySelector('.card-front .rounded-full.text-xs');
      if (badge) {
        badge.textContent = rating;
        badge.className = `px-2 py-0.5 rounded-full text-xs font-bold ${rating==='Mastered'?'bg-tertiary-fixed text-on-tertiary-fixed':rating==='Getting There'?'bg-secondary-fixed text-on-secondary-fixed':'bg-error-container text-on-error-container'}`;
      }

      // Flip back to front with smooth delay
      setTimeout(() => {
        card.classList.remove('flipped');
      }, 400);
    });
  });

  // Category filter
  document.querySelectorAll('.vocab-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.vocab-filter-btn').forEach(b => {
        b.classList.remove('bg-primary', 'text-on-primary');
        b.classList.add('bg-surface-container-high', 'text-on-surface-variant');
      });
      btn.classList.remove('bg-surface-container-high', 'text-on-surface-variant');
      btn.classList.add('bg-primary', 'text-on-primary');

      const cat = btn.dataset.category;
      document.querySelectorAll('.vocab-card-wrapper').forEach(card => {
        if (cat === 'all' || card.dataset.category === cat) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
