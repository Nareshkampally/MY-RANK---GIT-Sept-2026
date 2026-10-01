// Learnly 11+ — AI-Generated Progress Report (Printable & Shareable)
LearnlyRouter.register('progress-report', function() {
  return `
  <div class="flex flex-col w-full gap-6 max-w-4xl mx-auto">

    <!-- Header -->
    <section class="relative flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 rounded-3xl overflow-hidden shadow-md mb-8" style="background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);">
      <div class="absolute -right-12 -top-12 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute left-1/4 bottom-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      
      <div class="relative z-10 text-white">
        <div class="flex items-center gap-2 text-white/80 font-bold text-xs uppercase tracking-widest mb-2">
          <span class="material-symbols-outlined text-sm">summarize</span>
          AI-Generated
        </div>
        <h1 class="text-3xl font-extrabold tracking-tight">Progress Report</h1>
        <p class="text-white/80 text-sm mt-1">September 2026 • Leo Sharma</p>
      </div>
      <div class="flex items-center gap-2 relative z-10">
        <button class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-bold text-white shadow-sm hover:bg-white/20 transition-all backdrop-blur-md no-print">
          <span class="material-symbols-outlined text-base">share</span> Share
        </button>
        <button onclick="window.print()" class="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-pink-700 text-sm font-bold shadow-md hover:scale-105 transition-transform no-print">
          <span class="material-symbols-outlined text-base">print</span> Print / PDF
        </button>
      </div>
    </section>

    <!-- Student Summary Card -->
    <div class="bg-gradient-to-br from-primary to-indigo-900 rounded-3xl p-8 text-on-primary shadow-xl relative overflow-hidden">
      <div class="absolute -right-16 -top-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div class="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1Qc3G-0J8L9rm3gGyiGaPyqDHos_pYWjGOp9OUrxYQBOKEFee0wgAEVlh16TfmQNiWxt-NqWOA9qqDRvl1k4fL5wg1wUsStC9xvru1w7bUYvb8xBvFL3_5_N7dxiPrOLddmAE88mzYlHc_u2zguBI01dtegvKb9IikVtYlF2Qgf5MYRiedEBTFiJvBQrG2IgC7oZDgySOe_JrXyvQgSm1X0DHDgM09DGe70xqKgqN2-8FOuRaWwWZ8A" class="w-20 h-20 rounded-[2.5rem] border-4 border-white/20 object-cover" alt="Leo">
        <div class="flex-1">
          <h2 class="text-2xl font-extrabold">Leo Sharma</h2>
          <p class="text-on-primary/80 text-sm mb-3">Year 5 • Target: Warwick Grammar School · King Edward's</p>
          <div class="flex flex-wrap gap-3">
            <div class="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 text-center border border-white/10">
              <div class="text-2xl font-black">131</div>
              <div class="text-xs text-on-primary/70 font-bold">SAS Score</div>
            </div>
            <div class="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 text-center border border-white/10">
              <div class="text-2xl font-black">96th</div>
              <div class="text-xs text-on-primary/70 font-bold">Percentile</div>
            </div>
            <div class="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 text-center border border-white/10">
              <div class="text-2xl font-black">89%</div>
              <div class="text-xs text-on-primary/70 font-bold">Accuracy</div>
            </div>
            <div class="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 text-center border border-white/10">
              <div class="text-2xl font-black">14</div>
              <div class="text-xs text-on-primary/70 font-bold">Day Streak</div>
            </div>
          </div>
        </div>
        <div class="md:text-right">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-400/20 border border-green-400/30 text-green-300 font-bold text-sm mb-2">
            <span class="material-symbols-outlined text-base" style="font-variation-settings:'FILL' 1">verified</span>
            Grammar School Ready
          </div>
          <p class="text-xs text-on-primary/60">Based on 5 full mock exams</p>
        </div>
      </div>
    </div>

    <!-- Subject Breakdown -->
    <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/20 shadow-sm">
      <h3 class="font-bold text-on-surface mb-5 flex items-center gap-2">
        <span class="material-symbols-outlined text-primary">analytics</span>
        Subject Performance
      </h3>
      <div class="space-y-4">
        ${[
          { name: 'Mathematics', icon: 'functions', sas: 135, acc: 94, pct: 98, trend: '+4', color: 'emerald', comment: 'Exceptional. Speed on word problems is the only area to continue refining.' },
          { name: 'English & SPaG', icon: 'menu_book', sas: 129, acc: 90, pct: 89, trend: '+2', color: 'rose', comment: 'Strong comprehension. Work on subordinate clause placement in writing tasks.' },
          { name: 'Verbal Reasoning', icon: 'psychology', sas: 134, acc: 96, pct: 96, trend: '+3', color: 'blue', comment: 'Word codes and letter sequences are a clear strength. Keep reviewing analogies.' },
          { name: 'Non-Verbal Reasoning', icon: 'view_in_ar', sas: 127, acc: 84, pct: 82, trend: '+1', color: 'purple', comment: '3D spatial nets need focused practice. Recommend 3 extra drills this week.' },
        ].map(s => `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-[2.5rem] bg-surface-container-low border border-outline-variant/20">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-${s.color}-100 text-${s.color}-600 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined">${s.icon}</span>
            </div>
            <div>
              <div class="font-bold text-on-surface text-sm">${s.name}</div>
              <div class="text-xs text-on-surface-variant">SAS ${s.sas} • ${s.pct}th percentile</div>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between text-xs font-bold text-on-surface-variant mb-1">
              <span>Accuracy</span>
              <span class="text-on-surface">${s.acc}% <span class="text-tertiary">${s.trend}%</span></span>
            </div>
            <div class="w-full h-2.5 bg-surface-container-high rounded-full overflow-hidden">
              <div class="h-full bg-${s.color}-500 rounded-full" style="width:${s.acc}%"></div>
            </div>
          </div>
          <div>
            <p class="text-xs text-on-surface-variant leading-relaxed">${s.comment}</p>
          </div>
        </div>`).join('')}
      </div>
    </div>

    <!-- AI Recommendations -->
    <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/20 shadow-sm">
      <h3 class="font-bold text-on-surface mb-5 flex items-center gap-2">
        <span class="material-symbols-outlined text-primary" style="font-variation-settings:'FILL' 1">smart_toy</span>
        AI Tutor Recommendations
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        ${[
          { priority: 'HIGH', icon: 'priority_high', color: 'red', title: 'Focus: 3D Spatial Nets', body: 'Complete at least 3 targeted drill sessions before the next mock. Use the visual rotation tool in Practice Arena.' },
          { priority: 'MEDIUM', icon: 'trending_up', color: 'amber', title: 'Speed: Maths Word Problems', body: 'Average time is 58s. Target is 45s. Practice timed 10-question rounds daily to build fluency.' },
          { priority: 'KEEP', icon: 'star', color: 'emerald', title: 'Maintain: VR Strength', body: 'Verbal Reasoning is a top asset. Keep 2 drill sessions per week to maintain 96%+ accuracy.' },
        ].map(r => `
        <div class="p-4 rounded-[2.5rem] bg-${r.color}-50 border border-${r.color}-200">
          <div class="flex items-center gap-2 mb-2">
            <span class="material-symbols-outlined text-${r.color}-600 text-base" style="font-variation-settings:'FILL' 1">${r.icon}</span>
            <span class="text-[10px] font-black uppercase tracking-wider text-${r.color}-700">${r.priority}</span>
          </div>
          <h4 class="font-bold text-sm text-gray-800 mb-1">${r.title}</h4>
          <p class="text-xs text-gray-600 leading-relaxed">${r.body}</p>
        </div>`).join('')}
      </div>
    </div>

    <!-- Mock Progress Timeline -->
    <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/20 shadow-sm">
      <h3 class="font-bold text-on-surface mb-5 flex items-center gap-2">
        <span class="material-symbols-outlined text-primary">timeline</span>
        Mock Exam Trajectory
      </h3>
      <div class="relative">
        <div class="relative pl-8">
          ${[
            { num: '01', date: 'Aug 5', sas: 118, icon: 'start' },
            { num: '02', date: 'Aug 19', sas: 122, icon: 'trending_up' },
            { num: '03', date: 'Sep 2', sas: 126, icon: 'trending_up' },
            { num: '04', date: 'Sep 16', sas: 129, icon: 'trending_up' },
            { num: '05', date: 'Sep 29', sas: 131, icon: 'emoji_events' },
          ].map((m, i, arr) => `
          <div class="relative mb-6 ${i < arr.length-1 ? 'pb-6 border-l-2 border-primary/20' : ''}">
            <div class="absolute -left-8 top-0 w-8 h-8 rounded-full ${i === arr.length-1 ? 'bg-primary' : 'bg-surface-container-high border-2 border-primary/30'} flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-sm ${i === arr.length-1 ? 'text-on-primary' : 'text-primary'}" style="font-variation-settings:'FILL' 1">${m.icon}</span>
            </div>
            <div class="flex items-center gap-4 ml-4">
              <div class="flex-1">
                <div class="text-xs font-bold text-on-surface-variant">${m.date}</div>
                <div class="text-sm font-bold text-on-surface">Mock #${m.num}</div>
              </div>
              <div class="text-right">
                <div class="text-2xl font-black text-primary">${m.sas}</div>
                <div class="text-xs text-on-surface-variant">SAS</div>
              </div>
              ${i > 0 ? `<div class="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary font-bold text-xs border border-tertiary/20">+${m.sas - arr[i-1].sas} pts</div>` : '<div class="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-bold text-xs">Baseline</div>'}
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- Sharing Footer -->
    <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/20 shadow-sm text-center">
      <p class="text-sm text-on-surface-variant mb-4">Share this report with parents or tutors</p>
      <div class="flex items-center justify-center gap-3 flex-wrap">
        <button class="flex items-center gap-2 px-5 py-2.5 rounded-full border border-outline-variant/30 text-sm font-bold text-on-surface hover:border-primary hover:text-primary transition-all">
          <span class="material-symbols-outlined text-base">link</span> Copy Link
        </button>
        <button class="flex items-center gap-2 px-5 py-2.5 rounded-full border border-outline-variant/30 text-sm font-bold text-on-surface hover:border-primary hover:text-primary transition-all">
          <span class="material-symbols-outlined text-base">mail</span> Email to Parent
        </button>
        <button onclick="window.print()" class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-on-primary text-sm font-bold shadow-md">
          <span class="material-symbols-outlined text-base">download</span> Download PDF
        </button>
      </div>
    </div>

  </div>`;
});
