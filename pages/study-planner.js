// Learnly 11+ — AI-Powered Study Planner with Weekly Calendar & Goal Tracking
LearnlyRouter.register('study-planner', function() {
    const today = new Date();
    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    return `
    <div class="flex flex-col w-full gap-6">

      <!-- PAGE HEADER -->
      <section class="relative flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 rounded-3xl overflow-hidden shadow-md" style="background: linear-gradient(135deg, #4f46e5 0%, #3525cd 100%);">
        <div class="absolute -right-12 -top-12 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute left-1/4 bottom-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        
        <div class="relative z-10 text-white">
          <div class="flex items-center gap-2 text-xs font-bold text-white/80 uppercase tracking-widest mb-1">
            <span class="material-symbols-outlined text-sm">calendar_month</span>
            AI Study Planner
          </div>
          <h1 class="text-3xl font-extrabold tracking-tight">Study Schedule</h1>
          <p class="text-white/80 text-sm mt-1" id="calendar-header-subtitle">${monthNames[today.getMonth()]} ${today.getFullYear()} • Exam Countdown: <span class="font-bold text-yellow-300" id="exam-countdown">--</span> days</p>
        </div>
        <div class="flex items-center gap-2 flex-wrap relative z-10">
          <button class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-bold text-white hover:bg-white/20 transition-all shadow-sm backdrop-blur-md">
            <span class="material-symbols-outlined text-base">psychology</span> AI Reschedule
          </button>
          <button class="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary text-sm font-bold shadow-md hover:scale-105 transition-all border border-white/30">
            <span class="material-symbols-outlined text-base">add</span> Add Session
          </button>
        </div>
      </section>

      <!-- STATS ROW -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-surface-container-lowest rounded-[2.5rem] p-5 border border-outline-variant/20 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-[2.5rem] bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-xl" style="font-variation-settings:'FILL' 1">timer</span>
          </div>
          <div>
            <div class="text-2xl font-extrabold text-on-surface">4.5h</div>
            <div class="text-xs font-bold text-on-surface-variant">This week</div>
          </div>
        </div>
        <div class="bg-surface-container-lowest rounded-[2.5rem] p-5 border border-outline-variant/20 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-[2.5rem] bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-xl" style="font-variation-settings:'FILL' 1">check_circle</span>
          </div>
          <div>
            <div class="text-2xl font-extrabold text-on-surface">2/9</div>
            <div class="text-xs font-bold text-on-surface-variant">Sessions done</div>
          </div>
        </div>
        <div class="bg-surface-container-lowest rounded-[2.5rem] p-5 border border-outline-variant/20 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-[2.5rem] bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-xl" style="font-variation-settings:'FILL' 1">local_fire_department</span>
          </div>
          <div>
            <div class="text-2xl font-extrabold text-on-surface">14</div>
            <div class="text-xs font-bold text-on-surface-variant">Day streak</div>
          </div>
        </div>
        <div class="bg-surface-container-lowest rounded-[2.5rem] p-5 border border-outline-variant/20 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-[2.5rem] bg-error/10 text-error flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-xl" style="font-variation-settings:'FILL' 1">target</span>
          </div>
          <div>
            <div class="text-2xl font-extrabold text-on-surface">83%</div>
            <div class="text-xs font-bold text-on-surface-variant">Goal progress</div>
          </div>
        </div>
      </div>

      <!-- WEEKLY/MONTHLY CALENDAR + SIDEBAR -->
      <div class="flex flex-col xl:flex-row gap-6">

        <!-- Calendar Grid Area -->
        <div class="flex-1 min-w-0 flex flex-col">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <button id="cal-prev" class="w-8 h-8 rounded-full hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant transition-colors">
                <span class="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              <h2 id="calendar-title" class="text-xl font-extrabold text-on-surface">${monthNames[today.getMonth()]} ${today.getFullYear()}</h2>
              <button id="cal-next" class="w-8 h-8 rounded-full hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant transition-colors">
                <span class="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
            <div class="flex bg-surface-container-low rounded-full p-1 border border-outline-variant/30">
              <button data-view="week" class="cal-view-btn px-4 py-1 text-xs font-bold rounded-full text-on-surface-variant hover:text-primary transition-colors">Week</button>
              <button data-view="month" class="cal-view-btn active px-4 py-1 text-xs font-bold rounded-full bg-primary text-on-primary shadow-sm">Month</button>
              <button data-view="year" class="cal-view-btn px-4 py-1 text-xs font-bold rounded-full text-on-surface-variant hover:text-primary transition-colors">Year</button>
            </div>
          </div>
          
          <div id="calendar-grid-container" class="flex-1 bg-surface-container-lowest rounded-[2.5rem] border border-outline-variant/20 shadow-sm p-4 xl:p-6 overflow-hidden flex flex-col">
            <!-- Dynamically rendered by JS -->
          </div>
        </div>

        <!-- Right Sidebar -->
        <div class="xl:w-72 flex flex-col gap-4 shrink-0">

          <!-- TODAY'S PLAN -->
          <div class="bg-gradient-to-br from-primary to-primary/80 rounded-[2.5rem] p-6 text-on-primary shadow-lg shadow-primary/20">
            <div class="flex items-center gap-2 mb-3">
              <span class="material-symbols-outlined text-lg text-on-primary/70" style="font-variation-settings:'FILL' 1">today</span>
              <span class="font-bold text-sm text-on-primary/80">Today's Focus</span>
            </div>
            <h3 class="text-2xl font-extrabold mb-1">Mathematics</h3>
            <p class="text-sm text-on-primary/80 mb-5">Ratio, Proportion & Percentages</p>
            <div class="flex items-center gap-4 mb-5">
              <div class="flex items-center gap-1.5 text-sm font-bold"><span class="material-symbols-outlined text-lg">timer</span> 50m</div>
              <div class="flex items-center gap-1.5 text-sm font-bold"><span class="material-symbols-outlined text-lg">quiz</span> 30 Qs</div>
            </div>
            <button class="w-full py-3 rounded-xl bg-white text-primary font-bold text-sm hover:bg-gray-50 transition-colors shadow-md" onclick="window.location.hash='practice-arena'">
              Start Session →
            </button>
          </div>

          <!-- SUBJECT TIME ALLOCATION -->
          <div class="bg-surface-container-lowest rounded-[2.5rem] p-6 border border-outline-variant/20 shadow-sm">
            <h3 class="font-bold text-base text-on-surface mb-4">Subject Allocation</h3>
            <div class="space-y-4">
              ${[
                { name: 'Mathematics', pct: 35, color: 'bg-emerald-500', icon: 'functions' },
                { name: 'Verbal Reasoning', pct: 25, color: 'bg-blue-500', icon: 'psychology' },
                { name: 'English & SPaG', pct: 25, color: 'bg-rose-500', icon: 'menu_book' },
                { name: 'Non-Verbal', pct: 15, color: 'bg-purple-500', icon: 'view_in_ar' },
              ].map(s => `
              <div>
                <div class="flex items-center justify-between text-xs font-bold text-on-surface-variant mb-1.5">
                  <span class="flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-sm">${s.icon}</span>
                    ${s.name}
                  </span>
                  <span class="text-on-surface">${s.pct}%</span>
                </div>
                <div class="w-full h-2.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div class="h-full ${s.color} rounded-full transition-all duration-700" style="width:${s.pct}%"></div>
                </div>
              </div>`).join('')}
            </div>
            <button class="mt-5 w-full py-2.5 rounded-xl border border-outline-variant/30 text-xs font-bold text-on-surface-variant hover:text-primary hover:border-primary transition-colors">
              Rebalance with AI
            </button>
          </div>

          <!-- UPCOMING MILESTONES -->
          <div class="bg-surface-container-lowest rounded-[2.5rem] p-6 border border-outline-variant/20 shadow-sm">
            <h3 class="font-bold text-base text-on-surface mb-4">Upcoming Milestones</h3>
            <div class="space-y-4">
              ${[
                { icon: 'history_edu', text: 'Mock Exam #6', sub: 'In 3 days', color: 'text-primary' },
                { icon: 'medical_services', text: 'Tutor Clinic', sub: 'Friday 4:00 PM', color: 'text-secondary' },
                { icon: 'military_tech', text: '500 Questions Badge', sub: '23 away', color: 'text-amber-500' },
              ].map(m => `
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                  <span class="material-symbols-outlined ${m.color} text-lg" style="font-variation-settings:'FILL' 1">${m.icon}</span>
                </div>
                <div>
                  <div class="text-sm font-bold text-on-surface">${m.text}</div>
                  <div class="text-xs text-on-surface-variant">${m.sub}</div>
                </div>
              </div>`).join('')}
            </div>
          </div>

        </div>
      </div>

      <!-- DAILY PROGRESS HEATMAP -->
      <div class="bg-surface-container-lowest rounded-[2.5rem] p-6 border border-outline-variant/20 shadow-sm">
        <div class="flex items-center justify-between mb-5">
          <h3 class="font-bold text-on-surface">Study Heatmap — Last 12 Weeks</h3>
          <div class="flex items-center gap-2 text-xs text-on-surface-variant">
            <span>Less</span>
            <div class="flex gap-1">
              ${['bg-surface-container-high','bg-primary/20','bg-primary/40','bg-primary/70','bg-primary'].map(c => `<div class="w-3 h-3 rounded-sm ${c}"></div>`).join('')}
            </div>
            <span>More</span>
          </div>
        </div>
        <div class="flex gap-1 overflow-x-auto pb-2" id="heatmap-container">
          <!-- JS renders 12 weeks of squares -->
        </div>
        <div class="flex gap-1 mt-2 text-[10px] text-on-surface-variant relative h-4" id="heatmap-labels">
        </div>
      </div>

    </div>`;
}, function() {
    // ---- Exam countdown ----
    const examDate = new Date('2027-01-15');
    const now = new Date();
    const diff = Math.ceil((examDate - now) / (1000 * 60 * 60 * 24));
    const cdEl = document.getElementById('exam-countdown');
    if (cdEl) cdEl.textContent = diff;

    // ---- Heatmap ----
    const container = document.getElementById('heatmap-container');
    const labelsEl = document.getElementById('heatmap-labels');
    if (container) {
      const intensityClasses = ['','bg-primary/15','bg-primary/30','bg-primary/55','bg-primary'];
      const weeks = 12;
      const today = new Date();
      const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      let lastMonth = -1;
      const labels = [];

      for (let w = weeks - 1; w >= 0; w--) {
        const col = document.createElement('div');
        col.className = 'flex flex-col gap-1 shrink-0';
        
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - w * 7);
        if (weekStart.getMonth() !== lastMonth) {
          lastMonth = weekStart.getMonth();
          labels.push({ idx: weeks - 1 - w, month: monthNames[lastMonth] });
        }

        for (let d = 0; d < 7; d++) {
          const dayEl = document.createElement('div');
          const intensity = Math.random() < 0.3 ? 0 : Math.floor(Math.random() * 4) + 1;
          dayEl.className = `w-3 h-3 rounded-sm ${intensityClasses[intensity] || 'bg-surface-container-high'} hover:ring-1 hover:ring-primary/40 transition-all cursor-pointer`;
          col.appendChild(dayEl);
        }
        container.appendChild(col);
      }

      if (labelsEl) {
        labels.forEach(l => {
          const span = document.createElement('span');
          span.textContent = l.month;
          span.style.left = `${l.idx * 16}px`;
          span.className = 'absolute text-[10px] text-on-surface-variant font-bold';
          labelsEl.appendChild(span);
        });
      }
    }

    // ---- Interactive Calendar logic ----
    let currentView = 'month'; // 'week', 'month', 'year'
    let cursorDate = new Date();
    
    const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const fullMonthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
    const plan = {
      Mon: [
        { time: '4:00 PM', subject: 'Mathematics', topic: 'Algebraic Sequences', type: 'practice', icon: 'functions', color: 'emerald', done: true },
        { time: '5:00 PM', subject: 'Verbal Reasoning', topic: 'Synonyms Drill', type: 'drill', icon: 'psychology', color: 'blue', done: true },
      ],
      Tue: [
        { time: '4:30 PM', subject: 'English', topic: 'Comprehension', type: 'practice', icon: 'menu_book', color: 'rose', done: true },
        { time: '5:30 PM', subject: 'Non-Verbal', topic: '3D Spatial Nets', type: 'drill', icon: 'view_in_ar', color: 'purple', done: false },
      ],
      Wed: [
        { time: '4:00 PM', subject: 'Mathematics', topic: 'Percentages', type: 'mock', icon: 'functions', color: 'emerald', done: false },
      ],
      Thu: [
        { time: '4:30 PM', subject: 'Verbal Reasoning', topic: 'Word Codes', type: 'practice', icon: 'psychology', color: 'blue', done: false },
        { time: '5:30 PM', subject: 'Vocab Vault', topic: 'Set 7', type: 'cards', icon: 'auto_stories', color: 'amber', done: false },
      ],
      Fri: [
        { time: '4:00 PM', subject: 'Full Mock', topic: 'GL Format', type: 'exam', icon: 'history_edu', color: 'indigo', done: false },
      ],
      Sat: [
        { time: '10:00 AM', subject: 'Mistake Mastery', topic: 'Review errors', type: 'review', icon: 'psychology_alt', color: 'orange', done: false },
        { time: '11:00 AM', subject: 'Past Papers', topic: 'CEM Paper', type: 'exam', icon: 'folder_open', color: 'teal', done: false },
      ],
      Sun: [
        { time: '11:00 AM', subject: 'Light Review', topic: 'Cards + Drill', type: 'cards', icon: 'auto_stories', color: 'violet', done: false },
      ],
    };

    const typeConfig = {
      practice: { bg: 'bg-blue-50', text: 'text-blue-700' },
      drill: { bg: 'bg-purple-50', text: 'text-purple-700' },
      mock: { bg: 'bg-red-50', text: 'text-red-700' },
      exam: { bg: 'bg-indigo-50', text: 'text-indigo-700' },
      review: { bg: 'bg-orange-50', text: 'text-orange-700' },
      cards: { bg: 'bg-amber-50', text: 'text-amber-700' },
    };

    const colorMap = {
      emerald: 'bg-emerald-100 text-emerald-700',
      blue: 'bg-blue-100 text-blue-700',
      rose: 'bg-rose-100 text-rose-700',
      purple: 'bg-purple-100 text-purple-700',
      amber: 'bg-amber-100 text-amber-700',
      indigo: 'bg-indigo-100 text-indigo-700',
      orange: 'bg-orange-100 text-orange-700',
      teal: 'bg-teal-100 text-teal-700',
      violet: 'bg-violet-100 text-violet-700',
    };

    function renderDayCell(dateObj, viewType) {
      const date = dateObj.date;
      const isCurrentMonth = dateObj.isCurrentMonth;
      const isToday = date.toDateString() === new Date().toDateString();
      const dayKey = dayNames[date.getDay()];
      const sessions = isCurrentMonth ? (plan[dayKey] || []) : []; // Only show sessions for current month/week

      const minHeight = viewType === 'month' ? 'min-h-[100px] xl:min-h-[120px]' : 'min-h-[300px]';
      
      return `
      <div class="flex flex-col ${minHeight} rounded-xl border ${isToday ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : (isCurrentMonth ? 'border-outline-variant/30 bg-surface-container-lowest' : 'border-outline-variant/10 bg-surface-container/30 opacity-50')} overflow-hidden transition-all hover:shadow-md page-enter">
        <div class="px-2 xl:px-3 py-1.5 flex flex-col xl:flex-row items-center justify-between ${isToday ? 'bg-primary text-on-primary' : (isCurrentMonth ? 'bg-surface-container-low text-on-surface' : 'bg-transparent text-on-surface-variant/50')} border-b ${isCurrentMonth ? 'border-outline-variant/20' : 'border-transparent'}">
          ${viewType === 'week' ? `<span class="text-xs font-bold uppercase tracking-widest">${dayKey}</span>` : ''}
          <span class="text-sm font-extrabold leading-tight ${isToday ? 'text-on-primary' : ''}">${date.getDate()}</span>
          ${isToday && viewType !== 'week' ? `<span class="hidden xl:inline-block px-1.5 py-0.5 rounded-full bg-white/20 text-[9px] font-bold uppercase tracking-wider ml-auto">Today</span>` : ''}
        </div>
        <div class="p-1.5 flex flex-col gap-1.5 flex-grow overflow-y-auto custom-scrollbar">
          ${sessions.map(s => {
            const cc = colorMap[s.color] || 'bg-gray-100 text-gray-700';
            return `
            <div class="rounded-lg p-1.5 ${s.done ? 'bg-surface-container-high/50 opacity-60' : 'bg-surface-container-low hover:bg-surface-container-high'} border border-outline-variant/20 transition-all cursor-pointer group flex flex-col gap-1 relative" title="${s.topic}">
              <div class="flex items-center gap-1">
                <div class="w-4 h-4 xl:w-5 xl:h-5 rounded-md ${cc} flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-[10px]">${s.icon}</span>
                </div>
                <span class="text-[9px] font-bold text-on-surface-variant truncate">${s.time}</span>
                ${s.done ? `<span class="material-symbols-outlined text-[12px] text-tertiary ml-auto" style="font-variation-settings:'FILL' 1">check_circle</span>` : ''}
              </div>
              <div class="${viewType === 'week' ? 'block' : 'hidden xl:block'} text-[10px] font-bold text-on-surface leading-tight truncate">${s.topic}</div>
            </div>`;
          }).join('')}
        </div>
      </div>`;
    }

    function renderCalendar() {
      const container = document.getElementById('calendar-grid-container');
      const title = document.getElementById('calendar-title');
      
      let html = '';
      if (currentView === 'month') {
        title.textContent = `${fullMonthNames[cursorDate.getMonth()]} ${cursorDate.getFullYear()}`;
        const firstDay = new Date(cursorDate.getFullYear(), cursorDate.getMonth(), 1);
        const lastDay = new Date(cursorDate.getFullYear(), cursorDate.getMonth() + 1, 0);
        
        let days = [];
        const startPad = firstDay.getDay();
        for(let i=0; i<startPad; i++) days.push({ date: new Date(firstDay.getFullYear(), firstDay.getMonth(), i - startPad + 1), isCurrentMonth: false });
        for(let i=1; i<=lastDay.getDate(); i++) days.push({ date: new Date(cursorDate.getFullYear(), cursorDate.getMonth(), i), isCurrentMonth: true });
        const endPad = (7 - (days.length % 7)) % 7;
        for(let i=1; i<=endPad; i++) days.push({ date: new Date(lastDay.getFullYear(), lastDay.getMonth(), lastDay.getDate() + i), isCurrentMonth: false });

        const headerHTML = dayNames.map(day => `<div class="text-center font-bold text-[11px] uppercase tracking-widest text-on-surface-variant pb-2">${day}</div>`).join('');
        const gridHTML = days.map(d => renderDayCell(d, 'month')).join('');
        
        html = `
          <div class="grid grid-cols-7 gap-1 xl:gap-2 flex-grow">
            ${headerHTML}
            ${gridHTML}
          </div>
        `;
      } else if (currentView === 'week') {
        const startOfWeek = new Date(cursorDate);
        startOfWeek.setDate(cursorDate.getDate() - cursorDate.getDay()); // Sunday
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        
        title.textContent = `${fullMonthNames[startOfWeek.getMonth()]} ${startOfWeek.getDate()} - ${endOfWeek.getDate()}, ${startOfWeek.getFullYear()}`;
        
        let days = [];
        for(let i=0; i<7; i++) {
          days.push({ date: new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate() + i), isCurrentMonth: true });
        }
        
        const gridHTML = days.map(d => renderDayCell(d, 'week')).join('');
        html = `
          <div class="grid grid-cols-7 gap-1 xl:gap-2 flex-grow h-full items-stretch">
            ${gridHTML}
          </div>
        `;
      } else if (currentView === 'year') {
        title.textContent = `${cursorDate.getFullYear()}`;
        let monthsHtml = '';
        for(let m=0; m<12; m++) {
          monthsHtml += `
            <div class="bg-surface-container-low rounded-xl p-3 border border-outline-variant/30 flex flex-col items-center justify-center hover:bg-surface-container-high transition-colors cursor-pointer page-enter">
              <span class="font-extrabold text-on-surface mb-1">${fullMonthNames[m]}</span>
              <span class="text-xs text-on-surface-variant font-bold">${Math.floor(Math.random() * 20 + 5)} sessions</span>
            </div>
          `;
        }
        html = `<div class="grid grid-cols-3 md:grid-cols-4 gap-4 flex-grow content-start">${monthsHtml}</div>`;
      }

      container.innerHTML = html;
    }

    // Attach events to view buttons
    document.querySelectorAll('.cal-view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.cal-view-btn').forEach(b => {
          b.className = "cal-view-btn px-4 py-1 text-xs font-bold rounded-full text-on-surface-variant hover:text-primary transition-colors";
        });
        e.target.className = "cal-view-btn active px-4 py-1 text-xs font-bold rounded-full bg-primary text-on-primary shadow-sm";
        currentView = e.target.dataset.view;
        renderCalendar();
      });
    });

    document.getElementById('cal-prev').addEventListener('click', () => {
      if(currentView === 'month') cursorDate.setMonth(cursorDate.getMonth() - 1);
      if(currentView === 'week') cursorDate.setDate(cursorDate.getDate() - 7);
      if(currentView === 'year') cursorDate.setFullYear(cursorDate.getFullYear() - 1);
      renderCalendar();
    });

    document.getElementById('cal-next').addEventListener('click', () => {
      if(currentView === 'month') cursorDate.setMonth(cursorDate.getMonth() + 1);
      if(currentView === 'week') cursorDate.setDate(cursorDate.getDate() + 7);
      if(currentView === 'year') cursorDate.setFullYear(cursorDate.getFullYear() + 1);
      renderCalendar();
    });

    // Initial render
    renderCalendar();
  }
);
