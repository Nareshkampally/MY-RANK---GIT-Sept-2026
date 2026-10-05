// Learnly 11+ / MyRank 11+ — LexiVault 11+ Spaced Repetition Vocabulary Studio
// Fully functional Antonym Pairs, Synonym Clusters, and Tricky Cloze Words with interactive drills

LearnlyRouter.register('vocab-vault', function() {
  const VOCAB_DATA = [
    // ==========================================
    // CATEGORY: ANTONYM PAIRS (Opposites)
    // ==========================================
    {
      id: 'v-ant-1',
      word: 'Sagacious',
      phonetic: '/səˈɡeɪ.ʃəs/',
      type: 'Adjective',
      difficulty: 'GL High Yield',
      category: 'Antonyms',
      stem: 'The old librarian was known for her ______ advice during complex debates.',
      definition: 'Having or showing keen mental discernment, sound judgment, and farsighted wisdom.',
      etymology: 'From Latin "sagax" (quick-scented, acute of mind).',
      mnemonic: '🧠 Think of a wise old SAGE who gives sound, sagacious guidance.',
      synonyms: ['Astute', 'Prudent', 'Discerning', 'Perspicacious'],
      antonyms: ['Fatuous', 'Foolish', 'Imprudent', 'Naive'],
      antonym_focus: 'FATUOUS (silly, pointless & foolish)',
      status: 'Mastered'
    },
    {
      id: 'v-ant-2',
      word: 'Ephemeral',
      phonetic: '/ɪˈfem.ər.əl/',
      type: 'Adjective',
      difficulty: 'Consortium Classic',
      category: 'Antonyms',
      stem: 'Fame in the modern world is often ______ and forgotten within weeks.',
      definition: 'Lasting for a very short time; transitory and fleeting.',
      etymology: 'From Greek "ephemeros" (lasting only a day).',
      mnemonic: '🌸 An ephemeral Mayfly lives for only 24 hours — brief and temporary!',
      synonyms: ['Transient', 'Fleeting', 'Momentary', 'Transitory'],
      antonyms: ['Perpetual', 'Enduring', 'Eternal', 'Permanent'],
      antonym_focus: 'PERPETUAL (everlasting & unending)',
      status: 'Getting There'
    },
    {
      id: 'v-ant-3',
      word: 'Benevolent',
      phonetic: '/bəˈnev.əl.ənt/',
      type: 'Adjective',
      difficulty: 'Foundation',
      category: 'Antonyms',
      stem: 'The ______ benefactor donated funds to build the new children\'s library.',
      definition: 'Well meaning and kindly; serving a charitable rather than profit-making purpose.',
      etymology: 'From Latin "bene" (well) + "volent" (wishing).',
      mnemonic: '❤️ "BENE" = GOOD (benefit, beneficial). Wishing goodwill to all!',
      synonyms: ['Kindhearted', 'Magnanimous', 'Altruistic', 'Generous'],
      antonyms: ['Malevolent', 'Malicious', 'Spiteful', 'Hostile'],
      antonym_focus: 'MALEVOLENT (wishing evil or harm upon others)',
      status: 'Mastered'
    },
    {
      id: 'v-ant-4',
      word: 'Reticent',
      phonetic: '/ˈret.ɪ.sənt/',
      type: 'Adjective',
      difficulty: 'GL High Yield',
      category: 'Antonyms',
      stem: 'He was notoriously ______ about his achievements, rarely speaking of his awards.',
      definition: 'Not revealing one\'s thoughts or feelings readily; reserved and taciturn.',
      etymology: 'From Latin "reticere" (to keep silent, re- + tacere).',
      mnemonic: '🤐 RELUCTANT to speak = RETICENT! Holds words back like a net.',
      synonyms: ['Reserved', 'Taciturn', 'Withdrawn', 'Incommunicative'],
      antonyms: ['Loquacious', 'Garrulous', 'Voluble', 'Talkative'],
      antonym_focus: 'LOQUACIOUS (tending to talk a great deal; talkative)',
      status: 'Needs Practice'
    },
    {
      id: 'v-ant-5',
      word: 'Tenacious',
      phonetic: '/tɪˈneɪ.ʃəs/',
      type: 'Adjective',
      difficulty: 'CEM Select',
      category: 'Antonyms',
      stem: 'Her ______ determination to solve the proof impressed the mathematics tutor.',
      definition: 'Tending to keep a firm hold of something; clinging or adhering closely; persistent.',
      etymology: 'From Latin "tenax" from "tenere" (to hold).',
      mnemonic: '✊ TEN fingers TENACIOUSLY holding onto the cliff edge!',
      synonyms: ['Persistent', 'Resolute', 'Dogged', 'Unyielding'],
      antonyms: ['Vacillating', 'Yielding', 'Irresolute', 'Weak'],
      antonym_focus: 'VACILLATING (wavering, indecisive & easily yielding)',
      status: 'Getting There'
    },
    {
      id: 'v-ant-6',
      word: 'Precarious',
      phonetic: '/prɪˈkeə.ri.əs/',
      type: 'Adjective',
      difficulty: 'CSSE Essex',
      category: 'Antonyms',
      stem: 'The vase was balanced in a ______ position on the narrow edge of the bookshelf.',
      definition: 'Not securely held or in position; dangerously likely to fall or collapse.',
      etymology: 'From Latin "precarius" (dependent on the favour of another, uncertain).',
      mnemonic: '⚠️ Be CAREFUL with PRECARIOUS things — they can crash in a second!',
      synonyms: ['Hazardous', 'Perilous', 'Treacherous', 'Unstable'],
      antonyms: ['Secure', 'Stable', 'Fortified', 'Immovable'],
      antonym_focus: 'SECURE (firmly fixed, safe & dependable)',
      status: 'Mastered'
    },

    // ==========================================
    // CATEGORY: SYNONYM CLUSTERS (Shades of Meaning)
    // ==========================================
    {
      id: 'v-syn-1',
      word: 'Astute',
      phonetic: '/əˈstjuːt/',
      type: 'Adjective',
      difficulty: 'Consortium Classic',
      category: 'Synonyms',
      stem: 'Through an ______ assessment of the market, the merchant avoided bankruptcy.',
      definition: 'Having or showing an ability to accurately assess situations and turn this to one\'s advantage.',
      etymology: 'From Latin "astutus" from "astus" (craft, cunning).',
      mnemonic: '💡 An ASTUTE student ACES tests with acute sharpness!',
      synonyms: ['Shrewd', 'Perspicacious', 'Discerning', 'Perceptive', 'Insightful'],
      antonyms: ['Naive', 'Gullible', 'Obtuse', 'Vacuous'],
      cluster_theme: 'Mental Acuity & Sharp Judgment',
      status: 'Mastered'
    },
    {
      id: 'v-syn-2',
      word: 'Voracious',
      phonetic: '/vəˈreɪ.ʃəs/',
      type: 'Adjective',
      difficulty: 'GL High Yield',
      category: 'Synonyms',
      stem: 'From an early age, she was a ______ reader who devoured whole anthologies in a day.',
      definition: 'Wanting or devouring great quantities of food or reading material; exceedingly eager.',
      etymology: 'From Latin "vorare" (to devour, swallow up).',
      mnemonic: '📚 Like a CARNIVORE for books! Devouring pages voraciously.',
      synonyms: ['Insatiable', 'Ravenous', 'Avid', 'Rapacious', 'Unquenchable'],
      antonyms: ['Satiated', 'Indifferent', 'Apathetic', 'Quenched'],
      cluster_theme: 'Intense Appetite & Hunger for Knowledge',
      status: 'Getting There'
    },
    {
      id: 'v-syn-3',
      word: 'Magnanimous',
      phonetic: '/mæɡˈnæn.ɪ.məs/',
      type: 'Adjective',
      difficulty: 'CEM Select',
      category: 'Synonyms',
      stem: 'In a ______ gesture, the champion congratulated her rival on a brilliant match.',
      definition: 'Generous or forgiving, especially towards a rival or less powerful person.',
      etymology: 'From Latin "magnus" (great) + "animus" (soul, mind).',
      mnemonic: '👑 MAGNA (Great) + ANIMUS (Soul) = Great-Souled and noble!',
      synonyms: ['Altruistic', 'Munificent', 'Generous', 'Philanthropic', 'Bountiful'],
      antonyms: ['Petty', 'Vindictive', 'Spiteful', 'Miserly'],
      cluster_theme: 'Noble Generosity & Moral Breadth',
      status: 'Needs Practice'
    },
    {
      id: 'v-syn-4',
      word: 'Lucid',
      phonetic: '/ˈluː.sɪd/',
      type: 'Adjective',
      difficulty: 'Foundation',
      category: 'Synonyms',
      stem: 'The lecturer provided a ______ explanation that made the complex theorem crystal clear.',
      definition: 'Expressed clearly; easy to understand; bright and luminous.',
      etymology: 'From Latin "lucidus" from "lux" (light).',
      mnemonic: '✨ LUX = Light! A lucid explanation brings light into darkness.',
      synonyms: ['Coherent', 'Intelligible', 'Articulate', 'Transparent', 'Luminous'],
      antonyms: ['Obscure', 'Equivocal', 'Convoluted', 'Murky'],
      cluster_theme: 'Clarity of Expression & Illumination',
      status: 'Mastered'
    },
    {
      id: 'v-syn-5',
      word: 'Candid',
      phonetic: '/ˈkæn.dɪd/',
      type: 'Adjective',
      difficulty: 'GL High Yield',
      category: 'Synonyms',
      stem: 'Her ______ remarks during the council debate surprised those expecting diplomatic evasions.',
      definition: 'Truthful and straightforward; frank and unreserved.',
      etymology: 'From Latin "candidus" (pure white, honest).',
      mnemonic: '📸 A CANDID camera catches pure, unvarnished honesty!',
      synonyms: ['Forthright', 'Frank', 'Ingenuous', 'Blunt', 'Direct'],
      antonyms: ['Evasive', 'Guarded', 'Disingenuous', 'Deceitful'],
      cluster_theme: 'Honesty, Directness & Sincerity',
      status: 'Getting There'
    },
    {
      id: 'v-syn-6',
      word: 'Meticulous',
      phonetic: '/məˈtɪk.jə.ləs/',
      type: 'Adjective',
      difficulty: 'Consortium Classic',
      category: 'Synonyms',
      stem: 'The archeologist conducted a ______ cataloguing of every single artifact.',
      definition: 'Showing great attention to detail; very careful and precise.',
      etymology: 'From Latin "meticulosus" (fearful, painstaking).',
      mnemonic: '🔬 Examining every MICRON with painstaking care!',
      synonyms: ['Scrupulous', 'Fastidious', 'Painstaking', 'Punctilious', 'Exacting'],
      antonyms: ['Careless', 'Slipshod', 'Cursory', 'Perfunctory'],
      cluster_theme: 'Rigorous Precision & Attention to Detail',
      status: 'Mastered'
    },

    // ==========================================
    // CATEGORY: TRICKY CLOZE WORDS (Contextual Traps)
    // ==========================================
    {
      id: 'v-clz-1',
      word: 'Ambiguous',
      phonetic: '/æmˈbɪɡ.ju.əs/',
      type: 'Adjective',
      difficulty: 'High Yield Trap',
      category: 'Tricky Cloze',
      stem: 'The detective cautioned that the treaty\'s wording was dangerously ______ and permitted contradictory interpretations.',
      definition: 'Open to more than one interpretation; having a double meaning; inexact.',
      etymology: 'From Latin "ambiguus" (driving both ways, ambi- meaning both).',
      mnemonic: '🔀 "AMBI" = BOTH (like ambidextrous). It could mean two opposite things!',
      synonyms: ['Equivocal', 'Enigmatic', 'Obscure', 'Vague'],
      antonyms: ['Unambiguous', 'Definitive', 'Explicit', 'Lucid'],
      cloze_distractors: ['Ambidextrous', 'Ambivalent', 'Amicable'],
      cloze_tip: 'Do not confuse with AMBIVALENT (having mixed personal feelings) — AMBIGUOUS refers to ambiguous wording or texts.',
      status: 'Needs Practice'
    },
    {
      id: 'v-clz-2',
      word: 'Vacillate',
      phonetic: '/ˈvæs.ɪ.leɪt/',
      type: 'Verb',
      difficulty: 'High Yield Trap',
      category: 'Tricky Cloze',
      stem: 'The prime minister could not afford to ______ when rapid decisive military action was demanded.',
      definition: 'Waver between different opinions or actions; be indecisive.',
      etymology: 'From Latin "vacillare" (to sway to and fro).',
      mnemonic: '⚖️ Oscillating like a pendulum, swaying back and forth without choosing!',
      synonyms: ['Waver', 'Fluctuate', 'Hesitate', 'Dither'],
      antonyms: ['Decide', 'Resolve', 'Persevere', 'Determine'],
      cloze_distractors: ['Vaccinate', 'Oscillate', 'Venerate'],
      cloze_tip: 'In 11+ cloze passages, VACILLATE is often chosen over OSCILLATE when describing human mental indecision rather than physical movement.',
      status: 'Getting There'
    },
    {
      id: 'v-clz-3',
      word: 'Plausible',
      phonetic: '/ˈplɔː.zɪ.bəl/',
      type: 'Adjective',
      difficulty: 'GL High Yield',
      category: 'Tricky Cloze',
      stem: 'Although his alibi sounded superficially ______, forensic evidence soon dismantled his story.',
      definition: 'Seeming reasonable or probable; believable on the surface.',
      etymology: 'From Latin "plausibilis" (worthy of applause, acceptable).',
      mnemonic: '👏 Sounds good enough to receive APPLAUSE, but may conceal deceit!',
      synonyms: ['Credible', 'Feasible', 'Probable', 'Conceivable'],
      antonyms: ['Implausible', 'Preposterous', 'Incredible', 'Far-fetched'],
      cloze_distractors: ['Pliable', 'Plausive', 'Permissible'],
      cloze_tip: 'Often paired with "superficially" or "barely" in 11+ inference passages.',
      status: 'Mastered'
    },
    {
      id: 'v-clz-4',
      word: 'Vehement',
      phonetic: '/ˈviː.ə.mənt/',
      type: 'Adjective',
      difficulty: 'ISEB & CSSE',
      category: 'Tricky Cloze',
      stem: 'The accused governor issued a ______ denial against the corruption allegations.',
      definition: 'Showing strong feeling; forceful, passionate, or intense.',
      etymology: 'From Latin "vehemens" (carrying violent passion).',
      mnemonic: '🔥 VEHEMENT = Very Heavy Emotion!',
      synonyms: ['Fervent', 'Passionate', 'Emphatic', 'Impassioned'],
      antonyms: ['Apathetic', 'Lukewarm', 'Mild', 'Indifferent'],
      cloze_distractors: ['Vehicle', 'Virulent', 'Vigilant'],
      cloze_tip: 'Frequently tested in SPaG cloze when modifying "denial", "protest", or "opposition".',
      status: 'Getting There'
    },
    {
      id: 'v-clz-5',
      word: 'Ostentatious',
      phonetic: '/ˌɒs.tenˈteɪ.ʃəs/',
      type: 'Adjective',
      difficulty: 'Consortium Classic',
      category: 'Tricky Cloze',
      stem: 'The banquet featured an ______ display of golden goblets and peacock feathers designed purely to flaunt wealth.',
      definition: 'Characterised by pretentious display; designed to impress or attract notice.',
      etymology: 'From Latin "ostentare" (to display, show off).',
      mnemonic: '🦚 OFTEN SHOWING OFF = OSTENTATIOUS!',
      synonyms: ['Flamboyant', 'Pretentious', 'Gaudy', 'Showy'],
      antonyms: ['Modest', 'Unassuming', 'Restrained', 'Austere'],
      cloze_distractors: ['Ominous', 'Onerous', 'Oblivious'],
      cloze_tip: 'Tested when describing vulgar extravagance or deliberate attempts to impress observers.',
      status: 'Needs Practice'
    },
    {
      id: 'v-clz-6',
      word: 'Intricate',
      phonetic: '/ˈɪn.trɪ.kət/',
      type: 'Adjective',
      difficulty: 'Foundation Trap',
      category: 'Tricky Cloze',
      stem: 'The Swiss watchmaker assembled the ______ gear train with microscopic tweezers.',
      definition: 'Very complicated or detailed; having many interconnected parts.',
      etymology: 'From Latin "intricare" (to entangle).',
      mnemonic: '🕸️ IN-A-TRICK: like an intricate web of fine tangled threads!',
      synonyms: ['Elaborate', 'Convoluted', 'Complex', 'Detailed'],
      antonyms: ['Elementary', 'Rudimentary', 'Simple', 'Plain'],
      cloze_distractors: ['Intriguing', 'Intrinsic', 'Intrepid'],
      cloze_tip: 'Look for context words like "gears", "patterns", "knots", or "carvings".',
      status: 'Mastered'
    }
  ];

  return `
  <!-- LexiVault Header -->
  <section class="relative flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 rounded-3xl overflow-hidden shadow-md mb-8" style="background: linear-gradient(135deg, #a855f7 0%, #7e22ce 100%);">
    <div class="absolute -right-12 -top-12 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute left-1/4 bottom-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
    
    <div class="relative z-10 text-white">
      <div class="flex items-center gap-2 text-xs font-bold text-white/80 uppercase tracking-widest mb-1">
        <span class="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white font-label-md text-[10px] font-bold uppercase tracking-wider">GL &amp; CEM Spaced Repetition</span>
        <span class="text-xs font-semibold text-yellow-300 flex items-center gap-1">
          <span class="material-symbols-outlined text-sm">bolt</span> Streak Active (14 Days)
        </span>
      </div>
      <h1 class="text-3xl font-extrabold tracking-tight mt-1">LexiVault 11+ — Vocabulary Power Studio</h1>
      <p class="text-white/80 text-sm mt-1 max-w-2xl leading-relaxed">
        Master high-frequency 11+ vocabulary across the three core exam testing modes: <strong>Antonym Pairs</strong>, <strong>Synonym Clusters</strong>, and <strong>Tricky Cloze Sentences</strong>.
      </p>
    </div>

    <!-- Quick Stats Bar -->
    <div class="flex flex-row flex-nowrap items-center gap-3 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-sm relative z-10 shrink-0 w-max overflow-x-auto">
      <div class="px-3 py-1.5 rounded-xl bg-white text-center">
        <span class="text-[10px] uppercase font-bold text-purple-700 block">Mastered</span>
        <strong class="text-lg font-black text-purple-700 font-mono" id="mastered-count">8</strong>
      </div>
      <div class="px-3 py-1.5 rounded-xl bg-purple-200 text-center">
        <span class="text-[10px] uppercase font-bold text-purple-900 block">Learning</span>
        <strong class="text-lg font-black text-purple-950 font-mono" id="learning-count">6</strong>
      </div>
      <div class="px-3 py-1.5 rounded-xl bg-rose-100 text-center">
        <span class="text-[10px] uppercase font-bold text-rose-700 block">To Drill</span>
        <strong class="text-lg font-black text-rose-900 font-mono" id="practice-count">4</strong>
      </div>
    </div>
  </section>

  <!-- Category Filter Bar (Antonym Pairs, Synonym Clusters, Tricky Cloze Words) -->
  <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
    <div class="flex items-center gap-2 overflow-x-auto pb-1" id="category-tab-container">
      <button class="vocab-filter-btn px-5 py-2.5 rounded-full bg-purple-700 text-white font-extrabold text-sm shadow transition-all cursor-pointer flex items-center gap-2" data-category="all">
        <span class="material-symbols-outlined text-base">apps</span>
        All 11+ Words (${VOCAB_DATA.length})
      </button>
      <button class="vocab-filter-btn px-5 py-2.5 rounded-full bg-white text-slate-700 hover:text-purple-700 border border-slate-300 font-extrabold text-sm transition-all cursor-pointer flex items-center gap-2 shadow-sm" data-category="Antonyms">
        <span class="material-symbols-outlined text-base text-rose-500">compare_arrows</span>
        Antonym Pairs (${VOCAB_DATA.filter(w => w.category === 'Antonyms').length})
      </button>
      <button class="vocab-filter-btn px-5 py-2.5 rounded-full bg-white text-slate-700 hover:text-purple-700 border border-slate-300 font-extrabold text-sm transition-all cursor-pointer flex items-center gap-2 shadow-sm" data-category="Synonyms">
        <span class="material-symbols-outlined text-base text-indigo-500">bubble_chart</span>
        Synonym Clusters (${VOCAB_DATA.filter(w => w.category === 'Synonyms').length})
      </button>
      <button class="vocab-filter-btn px-5 py-2.5 rounded-full bg-white text-slate-700 hover:text-purple-700 border border-slate-300 font-extrabold text-sm transition-all cursor-pointer flex items-center gap-2 shadow-sm" data-category="Tricky Cloze">
        <span class="material-symbols-outlined text-base text-amber-500">edit_note</span>
        Tricky Cloze Words (${VOCAB_DATA.filter(w => w.category === 'Tricky Cloze').length})
      </button>
    </div>

    <!-- Quick Mode Info Pill -->
    <div id="active-mode-banner" class="text-xs font-bold text-slate-600 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 flex items-center gap-1.5">
      <span class="material-symbols-outlined text-sm text-purple-600">info</span>
      <span>Click any card to flip and inspect definition, roots &amp; traps.</span>
    </div>
  </div>

  <!-- Interactive 3D Card Grid -->
  <div id="vocab-cards-grid" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
    <!-- Rendered via JS -->
  </div>
  `;
}, async function() {
  const VOCAB_DATA = [
    // Same 18 rich words with category tags: Antonyms, Synonyms, Tricky Cloze
    {
      id: 'v-ant-1',
      word: 'Sagacious',
      phonetic: '/səˈɡeɪ.ʃəs/',
      type: 'Adjective',
      difficulty: 'GL High Yield',
      category: 'Antonyms',
      stem: 'The old librarian was known for her ______ advice during complex debates.',
      definition: 'Having or showing keen mental discernment, sound judgment, and farsighted wisdom.',
      etymology: 'From Latin "sagax" (quick-scented, acute of mind).',
      mnemonic: '🧠 Think of a wise old SAGE who gives sound, sagacious guidance.',
      synonyms: ['Astute', 'Prudent', 'Discerning', 'Perspicacious'],
      antonyms: ['Fatuous', 'Foolish', 'Imprudent', 'Naive'],
      antonym_focus: 'FATUOUS (silly, pointless & foolish)',
      status: 'Mastered'
    },
    {
      id: 'v-ant-2',
      word: 'Ephemeral',
      phonetic: '/ɪˈfem.ər.əl/',
      type: 'Adjective',
      difficulty: 'Consortium Classic',
      category: 'Antonyms',
      stem: 'Fame in the modern world is often ______ and forgotten within weeks.',
      definition: 'Lasting for a very short time; transitory and fleeting.',
      etymology: 'From Greek "ephemeros" (lasting only a day).',
      mnemonic: '🌸 An ephemeral Mayfly lives for only 24 hours — brief and temporary!',
      synonyms: ['Transient', 'Fleeting', 'Momentary', 'Transitory'],
      antonyms: ['Perpetual', 'Enduring', 'Eternal', 'Permanent'],
      antonym_focus: 'PERPETUAL (everlasting & unending)',
      status: 'Getting There'
    },
    {
      id: 'v-ant-3',
      word: 'Benevolent',
      phonetic: '/bəˈnev.əl.ənt/',
      type: 'Adjective',
      difficulty: 'Foundation',
      category: 'Antonyms',
      stem: 'The ______ benefactor donated funds to build the new children\'s library.',
      definition: 'Well meaning and kindly; serving a charitable rather than profit-making purpose.',
      etymology: 'From Latin "bene" (well) + "volent" (wishing).',
      mnemonic: '❤️ "BENE" = GOOD (benefit, beneficial). Wishing goodwill to all!',
      synonyms: ['Kindhearted', 'Magnanimous', 'Altruistic', 'Generous'],
      antonyms: ['Malevolent', 'Malicious', 'Spiteful', 'Hostile'],
      antonym_focus: 'MALEVOLENT (wishing evil or harm upon others)',
      status: 'Mastered'
    },
    {
      id: 'v-ant-4',
      word: 'Reticent',
      phonetic: '/ˈret.ɪ.sənt/',
      type: 'Adjective',
      difficulty: 'GL High Yield',
      category: 'Antonyms',
      stem: 'He was notoriously ______ about his achievements, rarely speaking of his awards.',
      definition: 'Not revealing one\'s thoughts or feelings readily; reserved and taciturn.',
      etymology: 'From Latin "reticere" (to keep silent, re- + tacere).',
      mnemonic: '🤐 RELUCTANT to speak = RETICENT! Holds words back like a net.',
      synonyms: ['Reserved', 'Taciturn', 'Withdrawn', 'Incommunicative'],
      antonyms: ['Loquacious', 'Garrulous', 'Voluble', 'Talkative'],
      antonym_focus: 'LOQUACIOUS (tending to talk a great deal; talkative)',
      status: 'Needs Practice'
    },
    {
      id: 'v-ant-5',
      word: 'Tenacious',
      phonetic: '/tɪˈneɪ.ʃəs/',
      type: 'Adjective',
      difficulty: 'CEM Select',
      category: 'Antonyms',
      stem: 'Her ______ determination to solve the proof impressed the mathematics tutor.',
      definition: 'Tending to keep a firm hold of something; clinging or adhering closely; persistent.',
      etymology: 'From Latin "tenax" from "tenere" (to hold).',
      mnemonic: '✊ TEN fingers TENACIOUSLY holding onto the cliff edge!',
      synonyms: ['Persistent', 'Resolute', 'Dogged', 'Unyielding'],
      antonyms: ['Vacillating', 'Yielding', 'Irresolute', 'Weak'],
      antonym_focus: 'VACILLATING (wavering, indecisive & easily yielding)',
      status: 'Getting There'
    },
    {
      id: 'v-ant-6',
      word: 'Precarious',
      phonetic: '/prɪˈkeə.ri.əs/',
      type: 'Adjective',
      difficulty: 'CSSE Essex',
      category: 'Antonyms',
      stem: 'The vase was balanced in a ______ position on the narrow edge of the bookshelf.',
      definition: 'Not securely held or in position; dangerously likely to fall or collapse.',
      etymology: 'From Latin "precarius" (dependent on the favour of another, uncertain).',
      mnemonic: '⚠️ Be CAREFUL with PRECARIOUS things — they can crash in a second!',
      synonyms: ['Hazardous', 'Perilous', 'Treacherous', 'Unstable'],
      antonyms: ['Secure', 'Stable', 'Fortified', 'Immovable'],
      antonym_focus: 'SECURE (firmly fixed, safe & dependable)',
      status: 'Mastered'
    },

    // ==========================================
    // SYNONYMS
    // ==========================================
    {
      id: 'v-syn-1',
      word: 'Astute',
      phonetic: '/əˈstjuːt/',
      type: 'Adjective',
      difficulty: 'Consortium Classic',
      category: 'Synonyms',
      stem: 'Through an ______ assessment of the market, the merchant avoided bankruptcy.',
      definition: 'Having or showing an ability to accurately assess situations and turn this to one\'s advantage.',
      etymology: 'From Latin "astutus" from "astus" (craft, cunning).',
      mnemonic: '💡 An ASTUTE student ACES tests with acute sharpness!',
      synonyms: ['Shrewd', 'Perspicacious', 'Discerning', 'Perceptive', 'Insightful'],
      antonyms: ['Naive', 'Gullible', 'Obtuse', 'Vacuous'],
      cluster_theme: 'Mental Acuity & Sharp Judgment',
      status: 'Mastered'
    },
    {
      id: 'v-syn-2',
      word: 'Voracious',
      phonetic: '/vəˈreɪ.ʃəs/',
      type: 'Adjective',
      difficulty: 'GL High Yield',
      category: 'Synonyms',
      stem: 'From an early age, she was a ______ reader who devoured whole anthologies in a day.',
      definition: 'Wanting or devouring great quantities of food or reading material; exceedingly eager.',
      etymology: 'From Latin "vorare" (to devour, swallow up).',
      mnemonic: '📚 Like a CARNIVORE for books! Devouring pages voraciously.',
      synonyms: ['Insatiable', 'Ravenous', 'Avid', 'Rapacious', 'Unquenchable'],
      antonyms: ['Satiated', 'Indifferent', 'Apathetic', 'Quenched'],
      cluster_theme: 'Intense Appetite & Hunger for Knowledge',
      status: 'Getting There'
    },
    {
      id: 'v-syn-3',
      word: 'Magnanimous',
      phonetic: '/mæɡˈnæn.ɪ.məs/',
      type: 'Adjective',
      difficulty: 'CEM Select',
      category: 'Synonyms',
      stem: 'In a ______ gesture, the champion congratulated her rival on a brilliant match.',
      definition: 'Generous or forgiving, especially towards a rival or less powerful person.',
      etymology: 'From Latin "magnus" (great) + "animus" (soul, mind).',
      mnemonic: '👑 MAGNA (Great) + ANIMUS (Soul) = Great-Souled and noble!',
      synonyms: ['Altruistic', 'Munificent', 'Generous', 'Philanthropic', 'Bountiful'],
      antonyms: ['Petty', 'Vindictive', 'Spiteful', 'Miserly'],
      cluster_theme: 'Noble Generosity & Moral Breadth',
      status: 'Needs Practice'
    },
    {
      id: 'v-syn-4',
      word: 'Lucid',
      phonetic: '/ˈluː.sɪd/',
      type: 'Adjective',
      difficulty: 'Foundation',
      category: 'Synonyms',
      stem: 'The lecturer provided a ______ explanation that made the complex theorem crystal clear.',
      definition: 'Expressed clearly; easy to understand; bright and luminous.',
      etymology: 'From Latin "lucidus" from "lux" (light).',
      mnemonic: '✨ LUX = Light! A lucid explanation brings light into darkness.',
      synonyms: ['Coherent', 'Intelligible', 'Articulate', 'Transparent', 'Luminous'],
      antonyms: ['Obscure', 'Equivocal', 'Convoluted', 'Murky'],
      cluster_theme: 'Clarity of Expression & Illumination',
      status: 'Mastered'
    },
    {
      id: 'v-syn-5',
      word: 'Candid',
      phonetic: '/ˈkæn.dɪd/',
      type: 'Adjective',
      difficulty: 'GL High Yield',
      category: 'Synonyms',
      stem: 'Her ______ remarks during the council debate surprised those expecting diplomatic evasions.',
      definition: 'Truthful and straightforward; frank and unreserved.',
      etymology: 'From Latin "candidus" (pure white, honest).',
      mnemonic: '📸 A CANDID camera catches pure, unvarnished honesty!',
      synonyms: ['Forthright', 'Frank', 'Ingenuous', 'Blunt', 'Direct'],
      antonyms: ['Evasive', 'Guarded', 'Disingenuous', 'Deceitful'],
      cluster_theme: 'Honesty, Directness & Sincerity',
      status: 'Getting There'
    },
    {
      id: 'v-syn-6',
      word: 'Meticulous',
      phonetic: '/məˈtɪk.jə.ləs/',
      type: 'Adjective',
      difficulty: 'Consortium Classic',
      category: 'Synonyms',
      stem: 'The archeologist conducted a ______ cataloguing of every single artifact.',
      definition: 'Showing great attention to detail; very careful and precise.',
      etymology: 'From Latin "meticulosus" (fearful, painstaking).',
      mnemonic: '🔬 Examining every MICRON with painstaking care!',
      synonyms: ['Scrupulous', 'Fastidious', 'Painstaking', 'Punctilious', 'Exacting'],
      antonyms: ['Careless', 'Slipshod', 'Cursory', 'Perfunctory'],
      cluster_theme: 'Rigorous Precision & Attention to Detail',
      status: 'Mastered'
    },

    // ==========================================
    // TRICKY CLOZE WORDS
    // ==========================================
    {
      id: 'v-clz-1',
      word: 'Ambiguous',
      phonetic: '/æmˈbɪɡ.ju.əs/',
      type: 'Adjective',
      difficulty: 'High Yield Trap',
      category: 'Tricky Cloze',
      stem: 'The detective cautioned that the treaty\'s wording was dangerously ______ and permitted contradictory interpretations.',
      definition: 'Open to more than one interpretation; having a double meaning; inexact.',
      etymology: 'From Latin "ambiguus" (driving both ways, ambi- meaning both).',
      mnemonic: '🔀 "AMBI" = BOTH (like ambidextrous). It could mean two opposite things!',
      synonyms: ['Equivocal', 'Enigmatic', 'Obscure', 'Vague'],
      antonyms: ['Unambiguous', 'Definitive', 'Explicit', 'Lucid'],
      cloze_distractors: ['Ambidextrous', 'Ambivalent', 'Amicable'],
      cloze_tip: 'Do not confuse with AMBIVALENT (having mixed personal feelings) — AMBIGUOUS refers to ambiguous wording or texts.',
      status: 'Needs Practice'
    },
    {
      id: 'v-clz-2',
      word: 'Vacillate',
      phonetic: '/ˈvæs.ɪ.leɪt/',
      type: 'Verb',
      difficulty: 'High Yield Trap',
      category: 'Tricky Cloze',
      stem: 'The prime minister could not afford to ______ when rapid decisive military action was demanded.',
      definition: 'Waver between different opinions or actions; be indecisive.',
      etymology: 'From Latin "vacillare" (to sway to and fro).',
      mnemonic: '⚖️ Oscillating like a pendulum, swaying back and forth without choosing!',
      synonyms: ['Waver', 'Fluctuate', 'Hesitate', 'Dither'],
      antonyms: ['Decide', 'Resolve', 'Persevere', 'Determine'],
      cloze_distractors: ['Vaccinate', 'Oscillate', 'Venerate'],
      cloze_tip: 'In 11+ cloze passages, VACILLATE is often chosen over OSCILLATE when describing human mental indecision rather than physical movement.',
      status: 'Getting There'
    },
    {
      id: 'v-clz-3',
      word: 'Plausible',
      phonetic: '/ˈplɔː.zɪ.bəl/',
      type: 'Adjective',
      difficulty: 'GL High Yield',
      category: 'Tricky Cloze',
      stem: 'Although his alibi sounded superficially ______, forensic evidence soon dismantled his story.',
      definition: 'Seeming reasonable or probable; believable on the surface.',
      etymology: 'From Latin "plausibilis" (worthy of applause, acceptable).',
      mnemonic: '👏 Sounds good enough to receive APPLAUSE, but may conceal deceit!',
      synonyms: ['Credible', 'Feasible', 'Probable', 'Conceivable'],
      antonyms: ['Implausible', 'Preposterous', 'Incredible', 'Far-fetched'],
      cloze_distractors: ['Pliable', 'Plausive', 'Permissible'],
      cloze_tip: 'Often paired with "superficially" or "barely" in 11+ inference passages.',
      status: 'Mastered'
    },
    {
      id: 'v-clz-4',
      word: 'Vehement',
      phonetic: '/ˈviː.ə.mənt/',
      type: 'Adjective',
      difficulty: 'ISEB & CSSE',
      category: 'Tricky Cloze',
      stem: 'The accused governor issued a ______ denial against the corruption allegations.',
      definition: 'Showing strong feeling; forceful, passionate, or intense.',
      etymology: 'From Latin "vehemens" (carrying violent passion).',
      mnemonic: '🔥 VEHEMENT = Very Heavy Emotion!',
      synonyms: ['Fervent', 'Passionate', 'Emphatic', 'Impassioned'],
      antonyms: ['Apathetic', 'Lukewarm', 'Mild', 'Indifferent'],
      cloze_distractors: ['Vehicle', 'Virulent', 'Vigilant'],
      cloze_tip: 'Frequently tested in SPaG cloze when modifying "denial", "protest", or "opposition".',
      status: 'Getting There'
    },
    {
      id: 'v-clz-5',
      word: 'Ostentatious',
      phonetic: '/ˌɒs.tenˈteɪ.ʃəs/',
      type: 'Adjective',
      difficulty: 'Consortium Classic',
      category: 'Tricky Cloze',
      stem: 'The banquet featured an ______ display of golden goblets and peacock feathers designed purely to flaunt wealth.',
      definition: 'Characterised by pretentious display; designed to impress or attract notice.',
      etymology: 'From Latin "ostentare" (to display, show off).',
      mnemonic: '🦚 OFTEN SHOWING OFF = OSTENTATIOUS!',
      synonyms: ['Flamboyant', 'Pretentious', 'Gaudy', 'Showy'],
      antonyms: ['Modest', 'Unassuming', 'Restrained', 'Austere'],
      cloze_distractors: ['Ominous', 'Onerous', 'Oblivious'],
      cloze_tip: 'Tested when describing vulgar extravagance or deliberate attempts to impress observers.',
      status: 'Needs Practice'
    },
    {
      id: 'v-clz-6',
      word: 'Intricate',
      phonetic: '/ˈɪn.trɪ.kət/',
      type: 'Adjective',
      difficulty: 'Foundation Trap',
      category: 'Tricky Cloze',
      stem: 'The Swiss watchmaker assembled the ______ gear train with microscopic tweezers.',
      definition: 'Very complicated or detailed; having many interconnected parts.',
      etymology: 'From Latin "intricare" (to entangle).',
      mnemonic: '🕸️ IN-A-TRICK: like an intricate web of fine tangled threads!',
      synonyms: ['Elaborate', 'Convoluted', 'Complex', 'Detailed'],
      antonyms: ['Elementary', 'Rudimentary', 'Simple', 'Plain'],
      cloze_distractors: ['Intriguing', 'Intrinsic', 'Intrepid'],
      cloze_tip: 'Look for context words like "gears", "patterns", "knots", or "carvings".',
      status: 'Mastered'
    }
  ];

  const grid = document.getElementById('vocab-cards-grid');
  if (!grid) return;

  function renderCards(words) {
    grid.innerHTML = words.map(v => {
      const isAnt = v.category === 'Antonyms';
      const isSyn = v.category === 'Synonyms';
      const isClz = v.category === 'Tricky Cloze';

      const categoryBadge = isAnt 
        ? `<span class="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold border border-rose-200">Antonym Pairs</span>`
        : isSyn 
        ? `<span class="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200">Synonym Cluster</span>`
        : `<span class="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200">Tricky Cloze</span>`;

      return `
      <div class="vocab-card-wrapper group cursor-pointer" data-id="${v.id}" data-category="${v.category}">
        <div class="vocab-card relative w-full h-[430px] rounded-3xl transition-transform duration-500 [transform-style:preserve-3d]">
          
          <!-- FRONT OF CARD -->
          <div class="card-front absolute inset-0 bg-white rounded-3xl p-6 border-2 ${isAnt ? 'border-rose-200 hover:border-rose-400' : isSyn ? 'border-indigo-200 hover:border-indigo-400' : 'border-amber-200 hover:border-amber-400'} shadow-sm hover:shadow-md flex flex-col justify-between [backface-visibility:hidden]">
            <div>
              <div class="flex items-center justify-between mb-3">
                ${categoryBadge}
                <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${v.status==='Mastered'?'bg-emerald-100 text-emerald-800 border border-emerald-200':v.status==='Getting There'?'bg-purple-100 text-purple-800 border border-purple-200':'bg-rose-100 text-rose-800 border border-rose-200'}">${v.status}</span>
              </div>

              <!-- Main Word & Speech -->
              <div class="flex items-center justify-between mt-2 mb-1">
                <h3 class="text-2xl font-black text-slate-900 tracking-tight">${v.word}</h3>
                <button class="speak-vocab-btn w-9 h-9 rounded-full bg-purple-50 text-purple-700 hover:bg-purple-100 flex items-center justify-center transition-transform hover:scale-110" data-word="${v.word}" type="button" title="Listen to UK Pronunciation">
                  <span class="material-symbols-outlined text-lg">volume_up</span>
                </button>
              </div>
              <div class="flex items-center gap-2 text-xs text-slate-500 font-mono mb-4">
                <span>${v.phonetic}</span>
                <span>•</span>
                <span class="italic text-purple-700 font-semibold">${v.type}</span>
              </div>

              <!-- Category Specialized Context Box -->
              ${isAnt ? `
              <div class="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200 mb-3">
                <div class="flex items-center justify-between text-xs font-extrabold text-rose-700 mb-1">
                  <span>⚡ 11+ OPPOSITE CHALLENGE</span>
                  <span class="text-[10px] uppercase font-bold text-rose-500">Key Pair</span>
                </div>
                <p class="text-xs text-slate-700 font-medium">Antonym Target: <strong class="text-rose-900">${v.antonym_focus || v.antonyms[0]}</strong></p>
              </div>
              ` : isSyn ? `
              <div class="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200 mb-3">
                <div class="flex items-center justify-between text-xs font-extrabold text-indigo-700 mb-1">
                  <span>🌿 SYNONYM CLUSTER THEME</span>
                  <span class="text-[10px] uppercase font-bold text-indigo-500">GL Spec</span>
                </div>
                <p class="text-xs text-slate-700 font-medium">${v.cluster_theme || 'Shared Nuance'}</p>
                <div class="flex flex-wrap gap-1 mt-2">
                  ${v.synonyms.slice(0, 3).map(s => `<span class="px-2 py-0.5 rounded-md bg-white border border-indigo-200 text-indigo-900 text-[10px] font-bold">${s}</span>`).join('')}
                </div>
              </div>
              ` : `
              <div class="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 mb-3">
                <div class="flex items-center justify-between text-xs font-extrabold text-amber-800 mb-1">
                  <span>📝 11+ CLOZE CONTEXT TRAP</span>
                  <span class="text-[10px] uppercase font-bold text-amber-600">CEM Select</span>
                </div>
                <p class="text-xs text-slate-800 italic leading-snug">"${v.stem}"</p>
              </div>
              `}

              <!-- Definition excerpt -->
              <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                ${v.definition}
              </p>
            </div>

            <!-- Card Bottom Flip Hint -->
            <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-purple-700 font-bold">
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">touch_app</span> Click card to flip
              </span>
              <span class="text-slate-400 font-normal">Mnemonics &amp; Drills →</span>
            </div>
          </div>

          <!-- BACK OF CARD -->
          <div class="card-back absolute inset-0 bg-slate-900 text-white rounded-3xl p-6 border-2 border-purple-500/50 shadow-xl flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold uppercase tracking-wider text-purple-300">${v.category} Drill Mode</span>
                <span class="text-xs text-slate-400">Click anywhere to flip back</span>
              </div>

              <!-- Etymology & Mnemonic -->
              <div class="p-3 rounded-xl bg-white/10 border border-white/15 mb-3 text-xs">
                <span class="font-extrabold text-purple-300 block mb-0.5">🧠 Memory Mnemonic</span>
                <p class="text-slate-200 leading-snug">${v.mnemonic}</p>
              </div>

              <!-- Full Synonyms & Antonyms Grid -->
              <div class="grid grid-cols-2 gap-2 text-xs mb-3">
                <div class="p-2 rounded-xl bg-white/5 border border-white/10">
                  <span class="text-emerald-300 block font-bold mb-1">Synonyms:</span>
                  <span class="text-slate-300 text-[11px] leading-tight block">${v.synonyms.join(', ')}</span>
                </div>
                <div class="p-2 rounded-xl bg-white/5 border border-white/10">
                  <span class="text-rose-300 block font-bold mb-1">Antonyms:</span>
                  <span class="text-slate-300 text-[11px] leading-tight block">${v.antonyms.join(', ')}</span>
                </div>
              </div>

              ${v.cloze_tip ? `
              <div class="p-2 rounded-xl bg-amber-500/15 border border-amber-400/30 text-[11px] text-amber-200 leading-snug">
                <strong>Exam Tip:</strong> ${v.cloze_tip}
              </div>
              ` : `
              <div class="p-2 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300 leading-snug">
                <strong>Etymology:</strong> ${v.etymology}
              </div>
              `}
            </div>

            <!-- SRS Rating Action Bar -->
            <div class="pt-3 border-t border-white/15">
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block text-center mb-1.5">How well do you know this word?</span>
              <div class="grid grid-cols-3 gap-1.5 text-xs font-bold">
                <button class="srs-btn py-1.5 px-1 rounded-xl bg-rose-500/30 hover:bg-rose-500/50 text-rose-200 border border-rose-500/40 transition-colors" data-id="${v.id}" data-rating="Needs Practice" type="button">To Drill 🔄</button>
                <button class="srs-btn py-1.5 px-1 rounded-xl bg-purple-500/30 hover:bg-purple-500/50 text-purple-200 border border-purple-500/40 transition-colors" data-id="${v.id}" data-rating="Getting There" type="button">Almost 💡</button>
                <button class="srs-btn py-1.5 px-1 rounded-xl bg-emerald-500/30 hover:bg-emerald-500/50 text-emerald-200 border border-emerald-500/40 transition-colors" data-id="${v.id}" data-rating="Mastered" type="button">Mastered ⭐</button>
              </div>
            </div>
          </div>

        </div>
      </div>`;
    }).join('');

    attachEventListeners();
  }

  function attachEventListeners() {
    // 3D Flip Handler
    document.querySelectorAll('.vocab-card-wrapper').forEach(wrapper => {
      const card = wrapper.querySelector('.vocab-card');
      wrapper.addEventListener('click', (e) => {
        if (e.target.closest('.speak-vocab-btn') || e.target.closest('.srs-btn')) return;
        card.classList.toggle('[transform:rotateY(180deg)]');
      });
    });

    // Pronunciation Handler
    document.querySelectorAll('.speak-vocab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const word = btn.dataset.word;
        if (window.AIBuddy) {
          btn.classList.add('animate-pulse');
          window.AIBuddy.speakText(word, null, () => btn.classList.remove('animate-pulse'));
        } else if (window.speechSynthesis) {
          const utt = new SpeechSynthesisUtterance(word);
          utt.lang = 'en-GB';
          speechSynthesis.speak(utt);
        }
      });
    });

    // SRS Rating buttons
    document.querySelectorAll('.srs-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const rating = btn.dataset.rating;
        const wrapper = btn.closest('.vocab-card-wrapper');
        const card = btn.closest('.vocab-card');
        const wordId = btn.dataset.id;

        // Update badge
        const badge = wrapper.querySelector('.card-front .rounded-full.text-xs:not([class*="bg-rose-100"]):not([class*="bg-indigo-100"]):not([class*="bg-amber-100"])');
        if (badge) {
          badge.textContent = rating;
          badge.className = `px-2.5 py-0.5 rounded-full text-xs font-bold ${rating==='Mastered'?'bg-emerald-100 text-emerald-800 border border-emerald-200':rating==='Getting There'?'bg-purple-100 text-purple-800 border border-purple-200':'bg-rose-100 text-rose-800 border border-rose-200'}`;
        }

        if (window.AIBuddy) {
          window.AIBuddy.showToast(`Word Marked: ${rating}`, '+15 XP earned towards LexiVault mastery!');
        }

        setTimeout(() => {
          if (card) card.classList.remove('[transform:rotateY(180deg)]');
        }, 400);
      });
    });
  }

  // Initial Render
  renderCards(VOCAB_DATA);

  // Category Filter Logic (Antonym Pairs, Synonym Clusters, Tricky Cloze Words)
  document.querySelectorAll('.vocab-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.vocab-filter-btn').forEach(b => {
        b.className = 'vocab-filter-btn px-5 py-2.5 rounded-full bg-white text-slate-700 hover:text-purple-700 border border-slate-300 font-extrabold text-sm transition-all cursor-pointer flex items-center gap-2 shadow-sm';
      });
      btn.className = 'vocab-filter-btn px-5 py-2.5 rounded-full bg-purple-700 text-white font-extrabold text-sm shadow transition-all cursor-pointer flex items-center gap-2';

      const cat = btn.dataset.category;
      const banner = document.getElementById('active-mode-banner');

      if (cat === 'Antonyms') {
        if (banner) banner.innerHTML = `<span class="material-symbols-outlined text-sm text-rose-600">compare_arrows</span> <span><strong>Antonym Pairs Mode:</strong> Study sharp opposites commonly tested in GL Assessment VR paper Section B.</span>`;
      } else if (cat === 'Synonyms') {
        if (banner) banner.innerHTML = `<span class="material-symbols-outlined text-sm text-indigo-600">bubble_chart</span> <span><strong>Synonym Clusters Mode:</strong> Learn fine shades of meaning to distinguish near-synonyms without falling for subtle distractor traps.</span>`;
      } else if (cat === 'Tricky Cloze') {
        if (banner) banner.innerHTML = `<span class="material-symbols-outlined text-sm text-amber-600">edit_note</span> <span><strong>Tricky Cloze Mode:</strong> Practice choosing the exact word that fits syntactically and tonally within 11+ sentence excerpts.</span>`;
      } else {
        if (banner) banner.innerHTML = `<span class="material-symbols-outlined text-sm text-purple-600">info</span> <span>Click any card to flip and inspect definition, roots &amp; traps.</span>`;
      }

      const filtered = cat === 'all' ? VOCAB_DATA : VOCAB_DATA.filter(w => w.category === cat);
      renderCards(filtered);
    });
  });
});
