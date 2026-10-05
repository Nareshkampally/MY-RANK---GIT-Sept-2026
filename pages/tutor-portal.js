// Learnly 11+ — Tutor Clinic & Availability Management Hub
// Allows verified tutors to manage upcoming student sessions and sync live availability into Tutor Clinic

LearnlyRouter.register('tutor-portal', function() {
  const activeTutor = JSON.parse(localStorage.getItem('learnly_active_tutor') || JSON.stringify({
    name: 'Mr. Thompson',
    email: 'mr.thompson@learnly11plus.co.uk',
    spec: 'NVR & Spatial Reasoning Specialist',
    rating: '4.9',
    sessions: 120,
    avatar: 'person'
  }));

  return `
  <div class="space-y-8 pb-12">
    <!-- Header Banner -->
    <section class="relative flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 rounded-3xl overflow-hidden shadow-md" style="background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%);">
      <div class="absolute -right-12 -top-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute left-1/3 bottom-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>

      <div class="relative z-10 flex items-center gap-5 text-white">
        <div class="w-16 h-16 rounded-2xl bg-indigo-600 border-2 border-indigo-400/40 flex items-center justify-center text-white shadow-xl">
          <span class="material-symbols-outlined text-3xl">school</span>
        </div>
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px] uppercase tracking-wider border border-emerald-500/30 flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Verified 11+ Specialist
            </span>
            <span class="text-xs text-indigo-200">★ ${activeTutor.rating} Rating (${activeTutor.sessions} sessions taught)</span>
          </div>
          <h1 class="text-3xl font-extrabold tracking-tight">${activeTutor.name}</h1>
          <p class="text-sm font-semibold text-indigo-200/90 mt-0.5">${activeTutor.spec} · <span class="text-indigo-400">${activeTutor.email}</span></p>
        </div>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex flex-wrap items-center gap-3 relative z-10">
        <a href="#clinic-booking" class="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 backdrop-blur-md transition-all flex items-center gap-1.5">
          <span class="material-symbols-outlined text-sm">visibility</span>
          <span>View Student Booking Page</span>
        </a>
        <button id="logout-tutor-btn" class="px-4 py-2.5 rounded-full bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 font-bold text-xs border border-rose-500/30 transition-all flex items-center gap-1.5">
          <span class="material-symbols-outlined text-sm">logout</span>
          <span>Switch Account</span>
        </button>
      </div>
    </section>

    <!-- TWO-COLUMN DASHBOARD GRID -->
    <div class="grid grid-cols-12 gap-8 items-start">
      
      <!-- LEFT: Live Availability Sync Panel -->
      <div class="col-span-12 lg:col-span-7 space-y-6">
        <div class="bg-white rounded-3xl p-7 border-2 border-slate-200 shadow-sm space-y-6">
          <div class="flex items-center justify-between pb-4 border-b border-slate-100">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <span class="material-symbols-outlined text-2xl">event_available</span>
              </div>
              <div>
                <h2 class="text-lg font-extrabold text-slate-900">Clinic Availability Calendar</h2>
                <p class="text-xs text-slate-500">Configure the days and times when students can book 1-on-1 strategy clinics with you.</p>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-extrabold uppercase tracking-wider">Sync Active</span>
          </div>

          <!-- Active Days Selector -->
          <div>
            <label class="block text-xs font-extrabold uppercase text-slate-700 tracking-wider mb-2">1. Select Available Days</label>
            <div class="grid grid-cols-7 gap-2" id="tutor-days-container">
              <!-- Rendered via JS -->
            </div>
          </div>

          <!-- Active Time Slots Selector -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <label class="block text-xs font-extrabold uppercase text-slate-700 tracking-wider">2. Available 45-Minute Session Slots</label>
              <button id="add-slot-btn" class="text-xs text-indigo-600 hover:text-indigo-800 font-bold flex items-center gap-0.5 cursor-pointer">
                <span class="material-symbols-outlined text-sm">add</span> Add Slot
              </button>
            </div>
            <div class="grid grid-cols-3 sm:grid-cols-4 gap-2" id="tutor-slots-container">
              <!-- Rendered via JS -->
            </div>
          </div>

          <!-- Sync Confirmation Banner & Button -->
          <div class="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center gap-2 text-xs text-indigo-900 font-medium">
              <span class="material-symbols-outlined text-indigo-600 text-lg">sync</span>
              <span>Changes reflect instantly on student &amp; parent booking screens.</span>
            </div>
            <button id="sync-availability-btn" class="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0">
              <span class="material-symbols-outlined text-base">cloud_sync</span>
              <span>Sync Availability Now</span>
            </button>
          </div>
        </div>
      </div>

      <!-- RIGHT: Booked Clinics with Students -->
      <div class="col-span-12 lg:col-span-5 space-y-6">
        <div class="bg-white rounded-3xl p-7 border-2 border-slate-200 shadow-sm space-y-5">
          <div class="flex items-center justify-between pb-3 border-b border-slate-100">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-emerald-600 text-xl">calendar_month</span>
              <h2 class="text-base font-extrabold text-slate-900">Upcoming Booked Clinics</h2>
            </div>
            <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold" id="upcoming-clinics-count">2 Booked</span>
          </div>

          <div class="space-y-3" id="booked-clinics-list">
            <!-- Booked clinics rendered by JS -->
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1 leading-relaxed">
            <div class="font-bold text-slate-800 flex items-center gap-1.5">
              <span class="material-symbols-outlined text-sm text-indigo-600">videocam</span>
              Virtual Strategy Room Active
            </div>
            <p>Each session generates a secure proctored video link with real-time scratchpad sharing and automated mistake analysis.</p>
          </div>
        </div>
      </div>

    </div>
  </div>`;
}, function() {
  const activeTutor = JSON.parse(localStorage.getItem('learnly_active_tutor') || JSON.stringify({
    name: 'Mr. Thompson',
    email: 'mr.thompson@learnly11plus.co.uk'
  }));

  const tutorKey = activeTutor.name.toLowerCase().replace(/[^a-z]/g, '');

  // Default availability
  const DEFAULT_AVAILABILITY = {
    days: ['Mon 15', 'Tue 16', 'Wed 17', 'Thu 18', 'Fri 19', 'Sat 20'],
    allDays: ['Mon 15', 'Tue 16', 'Wed 17', 'Thu 18', 'Fri 19', 'Sat 20', 'Sun 21'],
    slots: ['3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM']
  };

  const savedAvail = JSON.parse(localStorage.getItem(`learnly_tutor_availability_${tutorKey}`) || JSON.stringify(DEFAULT_AVAILABILITY));

  const daysContainer = document.getElementById('tutor-days-container');
  const slotsContainer = document.getElementById('tutor-slots-container');
  const syncBtn = document.getElementById('sync-availability-btn');
  const addSlotBtn = document.getElementById('add-slot-btn');
  const bookedList = document.getElementById('booked-clinics-list');
  const logoutBtn = document.getElementById('logout-tutor-btn');

  function renderDays() {
    if (!daysContainer) return;
    daysContainer.innerHTML = savedAvail.allDays.map(day => {
      const isSelected = savedAvail.days.includes(day);
      return `
      <button type="button" class="tutor-day-pill py-3 px-1 rounded-xl text-center border-2 font-bold text-xs transition-all cursor-pointer ${isSelected ? 'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-sm' : 'border-slate-200 bg-white text-slate-500 hover:border-indigo-300'}" data-day="${day}">
        <span class="block text-[10px] uppercase font-bold text-slate-400">${day.split(' ')[0]}</span>
        <span class="text-sm font-black">${day.split(' ')[1]}</span>
      </button>`;
    }).join('');

    daysContainer.querySelectorAll('.tutor-day-pill').forEach(btn => {
      btn.onclick = () => {
        const d = btn.dataset.day;
        if (savedAvail.days.includes(d)) {
          savedAvail.days = savedAvail.days.filter(x => x !== d);
        } else {
          savedAvail.days.push(d);
        }
        renderDays();
      };
    });
  }

  function renderSlots() {
    if (!slotsContainer) return;
    slotsContainer.innerHTML = savedAvail.slots.map(slot => `
      <div class="flex items-center justify-between p-2.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-xs font-bold text-slate-800">
        <span>${slot}</span>
        <button type="button" class="remove-slot-btn text-slate-400 hover:text-rose-600" data-slot="${slot}">
          <span class="material-symbols-outlined text-sm">close</span>
        </button>
      </div>
    `).join('');

    slotsContainer.querySelectorAll('.remove-slot-btn').forEach(btn => {
      btn.onclick = () => {
        const s = btn.dataset.slot;
        savedAvail.slots = savedAvail.slots.filter(x => x !== s);
        renderSlots();
      };
    });
  }

  // Load booked sessions
  function renderBookedClinics() {
    if (!bookedList) return;
    const globalBookings = JSON.parse(localStorage.getItem('learnly_clinic_bookings') || '[]');
    const myBookings = globalBookings.filter(b => b.tutor === activeTutor.name || !b.tutor);

    const defaultSessions = [
      { student: 'Leo Mitchell', subject: 'NVR Spatial Net Folding', date: 'Mon 15 Sep', time: '4:00 PM', target: 'QE Boys' },
      { student: 'Maya Patel', subject: 'Complex Hexagonal Net Folding', date: 'Wed 17 Sep', time: '5:30 PM', target: 'Henrietta Barnett' }
    ];

    const displayList = myBookings.length > 0 ? myBookings : defaultSessions;
    const badge = document.getElementById('upcoming-clinics-count');
    if (badge) badge.textContent = `${displayList.length} Booked`;

    bookedList.innerHTML = displayList.map(b => `
    <div class="p-4 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 transition-all shadow-sm space-y-2.5">
      <div class="flex items-start justify-between">
        <div>
          <span class="text-sm font-extrabold text-slate-900">${b.student || 'Student Scholar'}</span>
          <p class="text-xs text-indigo-600 font-bold">${b.subject}</p>
        </div>
        <span class="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">Confirmed</span>
      </div>
      <div class="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
        <span class="flex items-center gap-1">
          <span class="material-symbols-outlined text-sm text-slate-400">schedule</span>
          ${b.date}, ${b.time}
        </span>
        <button onclick="alert('Launching Live Tutor Video Clinic room...')" class="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[11px] shadow transition-all cursor-pointer flex items-center gap-1">
          <span class="material-symbols-outlined text-xs">videocam</span>
          Join Clinic
        </button>
      </div>
    </div>`).join('');
  }

  // Initial renders
  renderDays();
  renderSlots();
  renderBookedClinics();

  // Sync button logic
  if (syncBtn) {
    syncBtn.onclick = () => {
      localStorage.setItem(`learnly_tutor_availability_${tutorKey}`, JSON.stringify(savedAvail));
      if (window.AIBuddy) {
        window.AIBuddy.showToast('Availability Synced!', `Synced ${savedAvail.days.length} active days and ${savedAvail.slots.length} time slots into Tutor Clinic.`);
      }
    };
  }

  if (addSlotBtn) {
    addSlotBtn.onclick = () => {
      const newSlot = prompt('Enter new session time slot (e.g., 7:00 PM):');
      if (newSlot && newSlot.trim()) {
        savedAvail.slots.push(newSlot.trim());
        renderSlots();
      }
    };
  }

  if (logoutBtn) {
    logoutBtn.onclick = () => {
      localStorage.removeItem('learnly_active_tutor');
      localStorage.setItem('learnly_user_role', 'student');
      window.location.hash = '#login';
    };
  }
});
