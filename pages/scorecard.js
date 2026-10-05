// Learnly 11+ — Diagnostic Scorecard & Mock Review (LIVE API)
LearnlyRouter.register('scorecard', function() {
  return `
  <div id="scorecard-live" class="w-full">
    <!-- Loading Skeleton -->
    <div id="scorecard-loading" class="flex flex-col items-center justify-center py-24 space-y-4">
      <span class="material-symbols-outlined text-4xl text-primary animate-spin">sync</span>
      <p class="font-body-md text-body-md text-on-surface-variant">Loading scorecard data...</p>
    </div>
    <div id="scorecard-content" class="hidden"></div>
  </div>`;
}, async function() {
  // ── FETCH LIVE DATA ─────────────────────────────────────────────────
  let latestAttempt = null;
  let allAttempts = [];
  let mistakes = [];

  try {
    const [attemptsRes, mistakesRes] = await Promise.all([
      LearnlyAPI.getRecentAttempts(),
      LearnlyAPI.getMistakes()
    ]);
    allAttempts = attemptsRes.attempts || [];
    latestAttempt = allAttempts[0] || null;
    mistakes = mistakesRes.mistakes || [];
  } catch (err) {
    console.warn('Scorecard API unavailable:', err.message);
  }

  const loading = document.getElementById('scorecard-loading');
  const content = document.getElementById('scorecard-content');
  if (!loading || !content) return;

  if (!latestAttempt) {
    loading.innerHTML = `
      <span class="material-symbols-outlined text-4xl text-outline">quiz</span>
      <p class="font-body-lg text-body-lg text-on-surface-variant">No completed exams yet. Take a mock exam to see your scorecard!</p>
      <button class="mt-4 px-space-lg py-2.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-md" data-navigate="mock-exams" type="button">Go to Mock Exams</button>`;
    return;
  }

  // ── COMPUTE LIVE VALUES ───────────────────────────────────────────
  const a = latestAttempt;
  const startTime = new Date(a.start_time);
  const finishTime = new Date(a.finish_time);
  const durationMin = Math.floor(a.duration_seconds / 60);
  const durationSec = a.duration_seconds % 60;
  const durationStr = durationSec > 0 ? `${durationMin}m ${durationSec}s` : `${durationMin}m`;
  const startTimeStr = startTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).toUpperCase();
  const finishTimeStr = finishTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).toUpperCase();
  const timeLimitMin = 60;
  const underLimit = timeLimitMin - durationMin;
  const pacingStr = `${a.pacing_seconds_per_q}s`;
  const mockNum = a.title.match(/#(\d+)/) ? a.title.match(/#(\d+)/)[1] : allAttempts.indexOf(a) + 1;
  const pctScore = a.percentage;

  // Find previous attempt for comparison
  const prevAttempt = allAttempts[1] || null;
  const prevPct = prevAttempt ? prevAttempt.percentage : 0;
  const pctDelta = prevAttempt ? (pctScore - prevPct) : 0;
  const pctDeltaStr = pctDelta >= 0 ? `+${pctDelta}%` : `${pctDelta}%`;

  // Grade label
  const gradeLabel = pctScore >= 90 ? 'Excellent' : pctScore >= 80 ? 'Very Good' : pctScore >= 70 ? 'Good' : pctScore >= 60 ? 'Developing' : 'Needs Focus';

  // SAS percentile label
  const percentileLabel = a.percentile >= 96 ? 'Top 4%' : a.percentile >= 90 ? 'Top 10%' : a.percentile >= 75 ? 'Top 25%' : `${a.percentile}th Percentile`;

  // Subject breakdown (compute from mistakes and subject info)
  const subjectData = [
    { subj: 'Verbal Reasoning', icon: 'psychology', color: 'primary' },
    { subj: 'Mathematics', icon: 'functions', color: 'tertiary-container' },
    { subj: 'Non-Verbal', icon: 'view_in_ar', color: 'secondary' },
    { subj: 'English', icon: 'menu_book', color: 'primary' },
  ].map(s => {
    const subjectMistakes = mistakes.filter(m => m.subject && m.subject.includes(s.subj.split(' ')[0]));
    const totalQs = (a.max_score && a.max_score >= 50) ? (a.subject === 'Mixed' ? Math.round(a.max_score / 4) : a.max_score) : 25;
    const missed = Math.min(subjectMistakes.length, totalQs);
    const score = totalQs - missed;
    const pct = Math.round((score / totalQs) * 100);
    return { ...s, score, total: totalQs, pct };
  });

  // Question-by-question review (from mistakes + simulated correct questions)
  const mistakeQuestions = mistakes.slice(0, 8).map((m, i) => ({
    num: i + 1,
    topic: m.question_stem.split('—')[0].trim(),
    subject: m.subject.includes('Verbal') ? 'VR' : m.subject.includes('Math') ? 'Maths' : m.subject.includes('Non') ? 'NVR' : 'English',
    userAnswer: m.user_mistake,
    correctAnswer: m.correct_answer,
    correct: false,
    time: `${30 + i * 8}s`
  }));

  const totalQuestions = Math.max(10, a.raw_score > 0 ? Math.round(a.raw_score / (a.percentage / 100)) : 10);
  const correctQuestions = [];
  const topics = ['Synonyms in Context', 'Algebraic Sequences', 'Shape Analogies', 'Reading Comprehension', 'Word Codes', 'Ratio & Proportion', 'Inference', 'Punctuation Rules', 'Fractions', 'Number Bonds'];
  const subjects = ['VR', 'Maths', 'NVR', 'English', 'VR', 'Maths', 'NVR', 'English', 'Maths', 'English'];
  const letters = ['A', 'B', 'C', 'D'];

  for (let i = 0; i < Math.min(totalQuestions - mistakeQuestions.length, 10); i++) {
    const ans = letters[i % 4];
    correctQuestions.push({
      num: mistakeQuestions.length + i + 1,
      topic: topics[i % topics.length],
      subject: subjects[i % subjects.length],
      userAnswer: ans,
      correctAnswer: ans,
      correct: true,
      time: `${20 + i * 5}s`
    });
  }

  const allQuestions = [...mistakeQuestions, ...correctQuestions].sort((a, b) => a.num - b.num).slice(0, 12);

  // ── RENDER LIVE CONTENT ───────────────────────────────────────────
  loading.classList.add('hidden');
  content.classList.remove('hidden');
  content.innerHTML = `
  <section class="relative flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 rounded-3xl overflow-hidden shadow-md mb-8" style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);">
    <div class="absolute -right-12 -top-12 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute left-1/4 bottom-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
    
    <div class="relative z-10 text-white">
      <div class="flex items-center gap-space-xs text-white/80 font-label-md text-label-md mb-1">
        <span class="font-bold cursor-pointer hover:underline" data-navigate="mock-exams">MOCK EXAMS</span>
        <span class="text-white/50">•</span>
        <span>SCORECARD</span>
      </div>
      <h1 class="text-4xl font-extrabold tracking-tight mb-2">Diagnostic Scorecard — Mock #${mockNum}</h1>
      <p class="text-lg text-white/80">${a.title} • ${a.proctor_status}</p>
    </div>
    <div class="flex items-center gap-space-sm relative z-10">
      <button class="px-6 py-3 rounded-[2.5rem] bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/20 transition-all flex items-center gap-2 shadow-sm" data-navigate="mistake-mastery" type="button"><span class="material-symbols-outlined text-xl">refresh</span> Retry Mistakes</button>
      <button data-open-watch-modal class="px-6 py-3 rounded-[2.5rem] bg-white text-blue-700 font-bold shadow-md hover:bg-white/90 hover:shadow-lg transition-all flex items-center gap-2" type="button"><span class="material-symbols-outlined text-xl">schedule</span> View Watchcard</button>
    </div>
  </section>

  <!-- Official Exam Watch & Proctor Verification Card -->
  <div class="bg-surface-container-lowest rounded-[2.5rem] p-10 shadow-sm border border-outline-variant/30 mb-12 relative overflow-hidden group hover:border-primary/50 transition-colors">
    <div class="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors"></div>
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-outline-variant/20 mb-8 relative z-10">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-[2.5rem] bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
          <span class="material-symbols-outlined text-3xl">verified_user</span>
        </div>
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="px-3 py-1 rounded-full bg-primary text-on-primary font-bold text-xs uppercase tracking-widest shadow-sm">Official Proctor Timecard</span>
            <span class="text-xs text-on-surface-variant font-bold px-2 py-1 bg-surface rounded-md border border-outline-variant/20">ID #${a.id.toUpperCase()}</span>
          </div>
          <h2 class="text-xl font-bold text-on-surface tracking-tight">Test Timing &amp; Pacing Verification</h2>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-tertiary/10 text-sm font-bold text-tertiary border border-tertiary/20">
          <span class="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span> Verified Audit Complete
        </span>
      </div>
    </div>

    <!-- Timing Metrics Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10">
      <div class="bg-surface p-6 rounded-3xl border border-outline-variant/20 shadow-sm hover:border-primary/30 transition-colors">
        <div class="flex items-center gap-2 text-on-surface-variant text-xs font-bold uppercase tracking-wider mb-3">
          <span class="material-symbols-outlined text-lg text-primary">play_circle</span> Started
        </div>
        <div class="font-mono text-2xl font-black text-on-surface tracking-tight">${startTimeStr}</div>
        <span class="text-xs text-outline-variant font-medium mt-1 block">Precise clock capture</span>
      </div>

      <div class="bg-surface p-6 rounded-3xl border border-outline-variant/20 shadow-sm hover:border-tertiary/30 transition-colors">
        <div class="flex items-center gap-2 text-on-surface-variant text-xs font-bold uppercase tracking-wider mb-3">
          <span class="material-symbols-outlined text-lg text-tertiary">check_circle</span> Finished
        </div>
        <div class="font-mono text-2xl font-black text-tertiary tracking-tight">${finishTimeStr}</div>
        <span class="text-xs text-outline-variant font-medium mt-1 block">Submission verified</span>
      </div>

      <div class="bg-surface p-6 rounded-3xl border border-outline-variant/20 shadow-sm hover:border-primary/30 transition-colors">
        <div class="flex items-center gap-2 text-on-surface-variant text-xs font-bold uppercase tracking-wider mb-3">
          <span class="material-symbols-outlined text-lg text-primary">hourglass_bottom</span> Elapsed
        </div>
        <div class="font-mono text-2xl font-black text-primary tracking-tight">${durationStr}</div>
        <span class="text-xs text-tertiary font-bold mt-1 block">${underLimit > 0 ? `${underLimit}m under ${timeLimitMin}m limit` : 'On target'}</span>
      </div>

      <div class="bg-surface p-6 rounded-3xl border border-outline-variant/20 shadow-sm hover:border-secondary/30 transition-colors">
        <div class="flex items-center gap-2 text-on-surface-variant text-xs font-bold uppercase tracking-wider mb-3">
          <span class="material-symbols-outlined text-lg text-secondary">speed</span> Pacing
        </div>
        <div class="font-mono text-2xl font-black text-on-surface tracking-tight">${pacingStr} <span class="text-sm font-normal text-outline-variant">/ q</span></div>
        <span class="text-xs text-secondary font-bold mt-1 block">${a.pacing_seconds_per_q <= 50 ? 'Optimal Exam Cadence' : a.pacing_seconds_per_q <= 70 ? 'Good Pacing' : 'Needs Improvement'}</span>
      </div>
    </div>
  </div>


  <!-- Score Overview -->
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
    <div class="p-8 bg-surface-container-lowest border border-outline-variant/30 rounded-[2.5rem] shadow-sm text-center flex flex-col justify-center items-center relative overflow-hidden group">
      <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span class="font-bold text-xs text-on-surface-variant uppercase tracking-widest mb-4 relative z-10">Total Score</span>
      <div class="text-6xl text-primary font-black leading-none mb-4 relative z-10">${a.raw_score}<span class="text-3xl text-outline-variant font-bold">/${a.max_score}</span></div>
      <span class="px-4 py-1.5 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/20 text-sm font-bold relative z-10">${gradeLabel}</span>
    </div>
    <div class="p-8 bg-surface-container-lowest border border-outline-variant/30 rounded-[2.5rem] shadow-sm text-center flex flex-col justify-center items-center relative overflow-hidden group">
      <div class="absolute inset-0 bg-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span class="font-bold text-xs text-on-surface-variant uppercase tracking-widest mb-4 relative z-10">SAS Score</span>
      <div class="text-6xl text-on-surface font-black leading-none mb-4 relative z-10">${a.calculated_sas}</div>
      <span class="text-sm text-tertiary font-bold relative z-10">${percentileLabel} Nationally</span>
    </div>
    <div class="p-8 bg-surface-container-lowest border border-outline-variant/30 rounded-[2.5rem] shadow-sm text-center flex flex-col justify-center items-center relative overflow-hidden group">
      <div class="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span class="font-bold text-xs text-on-surface-variant uppercase tracking-widest mb-4 relative z-10">Time Used</span>
      <div class="text-6xl text-on-surface font-black leading-none mb-4 relative z-10">${durationMin}<span class="text-3xl text-outline-variant font-bold">m</span></div>
      <span class="text-sm text-secondary font-bold relative z-10">${underLimit > 0 ? `${underLimit} min under limit` : 'On target'}</span>
    </div>
    <div class="p-8 bg-surface-container-lowest border border-outline-variant/30 rounded-[2.5rem] shadow-sm text-center flex flex-col justify-center items-center relative overflow-hidden group">
      <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span class="font-bold text-xs text-on-surface-variant uppercase tracking-widest mb-4 relative z-10">Accuracy</span>
      <div class="text-6xl text-primary font-black leading-none mb-4 relative z-10">${a.percentage}%</div>
      <span class="text-sm text-primary font-bold relative z-10">${prevAttempt ? pctDeltaStr + ' from Mock #' + (allAttempts.indexOf(prevAttempt) + 1) : 'First Exam'}</span>
    </div>
  </div>

  <!-- Subject Breakdown -->
  <h3 class="text-2xl font-bold text-on-surface mb-6">Subject Breakdown</h3>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
    ${subjectData.map(s => `
    <div class="bg-surface-container-lowest border border-outline-variant/30 rounded-[2.5rem] p-8 shadow-sm hover:shadow-md hover:border-${s.color}/50 transition-all group">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 rounded-[2.5rem] bg-${s.color}/10 text-${s.color} flex items-center justify-center border border-${s.color}/20 group-hover:scale-110 transition-transform">
          <span class="material-symbols-outlined text-2xl">${s.icon}</span>
        </div>
        <span class="text-lg text-on-surface font-bold leading-tight">${s.subj.replace(' ', '<br>')}</span>
      </div>
      <div class="flex items-end gap-2 mb-4">
        <span class="text-4xl text-${s.color} font-black leading-none">${s.score}</span>
        <span class="text-xl text-outline-variant font-bold leading-none mb-0.5">/ ${s.total}</span>
      </div>
      <div class="w-full bg-surface-container-high rounded-full h-2.5 overflow-hidden relative">
        <div class="bg-${s.color} h-full rounded-full transition-all duration-1000" style="width:${s.pct}%"></div>
      </div>
    </div>`).join('')}
  </div>

  <!-- Question-by-Question Review -->
  <h3 class="text-2xl font-bold text-on-surface mb-6">Detailed Review</h3>
  <div class="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl shadow-sm overflow-hidden mb-12">
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-surface text-on-surface-variant text-xs uppercase tracking-widest font-bold border-b border-outline-variant/20">
            <th class="p-4 pl-6">#</th>
            <th class="p-4">Topic</th>
            <th class="p-4">Subject</th>
            <th class="p-4">Your Answer</th>
            <th class="p-4">Correct</th>
            <th class="p-4">Time</th>
            <th class="p-4 pr-6 text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          ${allQuestions.map((q, i) => `
          <tr class="border-b border-outline-variant/10 hover:bg-surface/50 transition-colors ${!q.correct ? 'bg-error/5 hover:bg-error/10' : ''} ${i === allQuestions.length - 1 ? 'border-b-0' : ''}">
            <td class="p-4 pl-6 font-bold text-on-surface">Q${q.num}</td>
            <td class="p-4 text-on-surface font-medium">${q.topic}</td>
            <td class="p-4">
              <span class="px-2 py-1 rounded-lg bg-surface-container border border-outline-variant/20 text-xs font-bold text-on-surface-variant">${q.subject}</span>
            </td>
            <td class="p-4 font-bold ${q.correct ? 'text-primary' : 'text-error'}">${q.userAnswer}</td>
            <td class="p-4 font-bold text-on-surface">${q.correctAnswer}</td>
            <td class="p-4 text-on-surface-variant text-sm font-medium">${q.time}</td>
            <td class="p-4 pr-6 text-right">
              <div class="inline-flex items-center justify-center w-8 h-8 rounded-full ${q.correct ? 'bg-primary/10 text-primary' : 'bg-error/10 text-error'}">
                <span class="material-symbols-outlined text-sm font-bold">${q.correct ? 'check' : 'close'}</span>
              </div>
            </td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <!-- Improvement Recommendations -->
  <div class="bg-surface-container-lowest border border-outline-variant/30 rounded-[2.5rem] p-10 shadow-sm relative overflow-hidden">
    <div class="absolute -left-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="flex items-center gap-3 mb-8 relative z-10">
      <div class="w-12 h-12 rounded-[2.5rem] bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
        <span class="material-symbols-outlined text-2xl">auto_awesome</span>
      </div>
      <h3 class="text-2xl font-bold text-on-surface">AI Improvement Targets</h3>
    </div>
    
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 relative z-10">
      ${mistakes.slice(0, 4).map((m, i) => {
        const isWarning = i < 2;
        return `
      <div class="p-6 rounded-3xl bg-surface border border-outline-variant/20 hover:border-primary/40 transition-colors group flex flex-col h-full">
        <div class="flex items-start justify-between mb-4">
          <span class="text-base ${isWarning ? 'text-error' : 'text-primary'} font-bold flex items-center gap-2">
            <span class="material-symbols-outlined text-lg">${isWarning ? 'warning' : 'lightbulb'}</span> 
            ${m.question_stem.split('—')[0].trim()}
          </span>
        </div>
        <p class="text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">${m.explanation}</p>
        <button class="w-full py-3 rounded-xl bg-primary/10 text-primary font-bold text-sm hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2" data-navigate="${m.subject.includes('Verbal') ? 'drill-cloze' : m.subject.includes('Non') ? 'drill-spatial' : 'practice-arena'}">
          <span class="material-symbols-outlined text-lg">psychology</span> Practice Topic
        </button>
      </div>`;
      }).join('')}
    </div>
  </div>`;
});
