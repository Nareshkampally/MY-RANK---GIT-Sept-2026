// Learnly 11+ — Clinic Booking Modal with Live Tutor Availability Sync
LearnlyRouter.register('clinic-booking', function() {
  return `
  <div class="space-y-space-xl">
    <section class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-space-md">
        <a href="#parent-portal" class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">arrow_back</span></a>
        <div>
          <h1 class="font-headline-lg text-headline-lg text-on-surface font-black">Book a 1-on-1 Strategy Clinic</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">Live calendar synced directly with verified 11+ specialist tutors</p>
        </div>
      </div>
      <!-- Switch to Tutor Portal Link -->
      <a href="#tutor-portal" class="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all">
        <span class="material-symbols-outlined text-sm text-indigo-600">badge</span>
        <span>Are you a tutor? Open Tutor Portal</span>
      </a>
    </section>

    <div class="grid grid-cols-12 gap-space-lg">
      <div class="col-span-12 lg:col-span-7">
        <div class="bg-surface-container-lowest rounded-[2.5rem] p-space-lg shadow-md space-y-space-lg">
          
          <!-- Subject Selector -->
          <div>
            <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md">Select Subject Focus</h3>
            <div class="grid grid-cols-2 gap-space-sm" id="subject-selector">
              ${[
                {subj:'NVR Spatial Strategy',icon:'view_in_ar',color:'secondary',defaultTutor:'Mr. Thompson'},
                {subj:'Verbal Reasoning',icon:'psychology',color:'primary',defaultTutor:'Ms. Patel'},
                {subj:'Mathematics',icon:'functions',color:'tertiary-container',defaultTutor:'Dr. Khan'},
                {subj:'English & Comprehension',icon:'menu_book',color:'primary',defaultTutor:'Ms. Patel'}
              ].map((s,i)=>`
              <button class="clinic-subject-btn p-space-md rounded-xl border-2 ${i===0?'border-primary bg-primary-fixed/30':'border-surface-container-high bg-surface-container-lowest'} text-left transition-all hover:border-primary" type="button" data-subject="${s.subj}" data-tutor="${s.defaultTutor}">
                <span class="material-symbols-outlined text-${s.color} text-2xl">${s.icon}</span>
                <span class="font-label-lg text-label-lg text-on-surface font-bold block mt-space-xs">${s.subj}</span>
              </button>`).join('')}
            </div>
          </div>

          <!-- Tutor Selector -->
          <div>
            <div class="flex items-center justify-between mb-space-md">
              <h3 class="font-headline-sm text-headline-sm text-on-surface">Choose a Specialist Tutor</h3>
              <span class="text-xs text-emerald-600 font-bold flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Availability Live Synced
              </span>
            </div>
            <div class="space-y-space-sm" id="tutor-selector">
              ${[
                {name:'Mr. Thompson',spec:'NVR & Spatial Reasoning Specialist',rating:'4.9',sessions:120,avatar:'person'},
                {name:'Ms. Patel',spec:'English & VR Expert',rating:'4.8',sessions:95,avatar:'face'},
                {name:'Dr. Khan',spec:'Mathematics & Sequences',rating:'4.9',sessions:78,avatar:'psychology'}
              ].map((t,i)=>`
              <div class="clinic-tutor-btn p-space-md rounded-xl border-2 ${i===0?'border-primary bg-primary-fixed/10':'border-surface-container-high'} flex items-center justify-between cursor-pointer hover:border-primary transition-all" data-tutor="${t.name}">
                <div class="flex items-center gap-space-md">
                  <div class="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary"><span class="material-symbols-outlined text-xl">${t.avatar}</span></div>
                  <div>
                    <span class="font-label-lg text-label-lg text-on-surface font-bold">${t.name}</span>
                    <span class="block text-xs text-slate-500">${t.spec}</span>
                  </div>
                </div>
                <div class="text-right">
                  <span class="font-label-lg text-label-lg text-amber-500 font-bold">★ ${t.rating}</span>
                  <span class="block text-xs text-on-surface-variant font-bold">${t.sessions} clinics</span>
                </div>
              </div>`).join('')}
            </div>
          </div>

          <!-- Dynamic Synced Date & Time -->
          <div>
            <div class="flex items-center justify-between mb-space-md">
              <h3 class="font-headline-sm text-headline-sm text-on-surface">Select Date &amp; Time (Tutor Synced)</h3>
              <span class="text-xs text-indigo-600 font-bold" id="tutor-synced-status">Synced with Mr. Thompson</span>
            </div>
            
            <div class="grid grid-cols-3 sm:grid-cols-6 gap-space-sm mb-space-md" id="date-selector">
              <!-- Dynamically populated from tutor availability -->
            </div>
            
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-space-sm" id="time-selector">
              <!-- Dynamically populated from tutor availability -->
            </div>
          </div>
        </div>
      </div>

      <!-- Booking Summary Column -->
      <div class="col-span-12 lg:col-span-5">
        <div class="bg-surface-container-lowest rounded-[2.5rem] p-space-lg shadow-md sticky top-24 space-y-4">
          <h3 class="font-headline-sm text-headline-sm text-on-surface">Booking Summary</h3>
          <div class="space-y-space-sm p-space-md rounded-xl bg-surface-container-low">
            <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Subject</span><span id="summary-subject" class="font-label-lg text-label-lg text-on-surface font-bold">NVR Spatial Strategy</span></div>
            <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Tutor</span><span id="summary-tutor" class="font-label-lg text-label-lg text-on-surface font-bold">Mr. Thompson</span></div>
            <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Date &amp; Time</span><span id="summary-datetime" class="font-label-lg text-label-lg text-indigo-700 font-bold">Mon 15 Sep, 4:00 PM</span></div>
            <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Session Format</span><span class="font-label-lg text-label-lg text-on-surface font-bold">45m Video Strategy Room</span></div>
          </div>
          <button id="confirm-booking-btn" class="w-full px-space-lg py-3 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-lg hover:scale-105 transition-all text-lg cursor-pointer" type="button">
            Confirm &amp; Sync Calendar
          </button>
          <p class="text-center font-label-md text-label-md text-on-surface-variant">Free cancellation up to 2 hours before session</p>
        </div>
      </div>
    </div>
  </div>`;
}, function() {
  let selectedSubject = 'NVR Spatial Strategy';
  let selectedTutor = 'Mr. Thompson';
  let selectedDate = 'Mon 15 Sep';
  let selectedTime = '4:00 PM';

  const dateContainer = document.getElementById('date-selector');
  const timeContainer = document.getElementById('time-selector');
  const syncStatus = document.getElementById('tutor-synced-status');

  function getTutorAvailability(tutorName) {
    const key = tutorName.toLowerCase().replace(/[^a-z]/g, '');
    const saved = localStorage.getItem(`learnly_tutor_availability_${key}`);
    if (saved) {
      try { return JSON.parse(saved); } catch(e){}
    }
    // Default fallback schedule
    return {
      days: ['Mon 15', 'Tue 16', 'Wed 17', 'Thu 18', 'Fri 19', 'Sat 20'],
      slots: ['3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM']
    };
  }

  function renderTutorSchedule(tutorName) {
    const avail = getTutorAvailability(tutorName);
    if (syncStatus) syncStatus.textContent = `Synced with ${tutorName}'s Live Calendar`;

    // Render dates
    if (dateContainer) {
      dateContainer.innerHTML = avail.days.map((d, i) => `
        <button class="clinic-date-btn p-space-sm rounded-lg ${i===0 ? 'bg-primary-container text-on-primary font-black' : 'bg-surface-container-low text-on-surface font-bold'} text-xs text-center transition-all cursor-pointer" type="button" data-date="${d} Sep">
          ${d}
        </button>
      `).join('');

      selectedDate = `${avail.days[0] || 'Mon 15'} Sep`;

      dateContainer.querySelectorAll('.clinic-date-btn').forEach(btn => {
        btn.onclick = () => {
          dateContainer.querySelectorAll('.clinic-date-btn').forEach(b => {
            b.className = 'clinic-date-btn p-space-sm rounded-lg bg-surface-container-low text-on-surface font-bold text-xs text-center transition-all cursor-pointer';
          });
          btn.className = 'clinic-date-btn p-space-sm rounded-lg bg-primary-container text-on-primary font-black text-xs text-center transition-all cursor-pointer';
          selectedDate = btn.dataset.date;
          updateSummary();
        };
      });
    }

    // Render time slots
    if (timeContainer) {
      timeContainer.innerHTML = avail.slots.map((t, i) => `
        <button class="clinic-time-btn p-space-sm rounded-lg ${i===1 ? 'bg-primary-container text-on-primary font-black' : 'bg-surface-container-low text-on-surface font-bold'} text-xs text-center transition-all cursor-pointer" type="button" data-time="${t}">
          ${t}
        </button>
      `).join('');

      selectedTime = avail.slots[1] || avail.slots[0] || '4:00 PM';

      timeContainer.querySelectorAll('.clinic-time-btn').forEach(btn => {
        btn.onclick = () => {
          timeContainer.querySelectorAll('.clinic-time-btn').forEach(b => {
            b.className = 'clinic-time-btn p-space-sm rounded-lg bg-surface-container-low text-on-surface font-bold text-xs text-center transition-all cursor-pointer';
          });
          btn.className = 'clinic-time-btn p-space-sm rounded-lg bg-primary-container text-on-primary font-black text-xs text-center transition-all cursor-pointer';
          selectedTime = btn.dataset.time;
          updateSummary();
        };
      });
    }

    updateSummary();
  }

  function updateSummary() {
    const subEl = document.getElementById('summary-subject');
    const tutEl = document.getElementById('summary-tutor');
    const dtEl = document.getElementById('summary-datetime');
    if (subEl) subEl.textContent = selectedSubject;
    if (tutEl) tutEl.textContent = selectedTutor;
    if (dtEl) dtEl.textContent = `${selectedDate}, ${selectedTime}`;
  }

  // Subject selector handlers
  document.querySelectorAll('.clinic-subject-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.clinic-subject-btn').forEach(b => {
        b.className = 'clinic-subject-btn p-space-md rounded-xl border-2 border-surface-container-high bg-surface-container-lowest text-left transition-all hover:border-primary';
      });
      btn.className = 'clinic-subject-btn p-space-md rounded-xl border-2 border-primary bg-primary-fixed/30 text-left transition-all hover:border-primary';
      selectedSubject = btn.dataset.subject;
      if (btn.dataset.tutor) {
        selectedTutor = btn.dataset.tutor;
        document.querySelectorAll('.clinic-tutor-btn').forEach(tb => {
          if (tb.dataset.tutor === selectedTutor) {
            tb.className = 'clinic-tutor-btn p-space-md rounded-xl border-2 border-primary bg-primary-fixed/10 flex items-center justify-between cursor-pointer hover:border-primary transition-all';
          } else {
            tb.className = 'clinic-tutor-btn p-space-md rounded-xl border-2 border-surface-container-high flex items-center justify-between cursor-pointer hover:border-primary transition-all';
          }
        });
      }
      renderTutorSchedule(selectedTutor);
    };
  });

  // Tutor selector handlers
  document.querySelectorAll('.clinic-tutor-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.clinic-tutor-btn').forEach(b => {
        b.className = 'clinic-tutor-btn p-space-md rounded-xl border-2 border-surface-container-high flex items-center justify-between cursor-pointer hover:border-primary transition-all';
      });
      btn.className = 'clinic-tutor-btn p-space-md rounded-xl border-2 border-primary bg-primary-fixed/10 flex items-center justify-between cursor-pointer hover:border-primary transition-all';
      selectedTutor = btn.dataset.tutor;
      renderTutorSchedule(selectedTutor);
    };
  });

  // Initial schedule render
  renderTutorSchedule(selectedTutor);

  // Confirm booking
  const confirmBtn = document.getElementById('confirm-booking-btn');
  if (confirmBtn) {
    confirmBtn.onclick = () => {
      const newBooking = {
        id: 'clinic-' + Date.now(),
        student: 'Leo Mitchell',
        tutor: selectedTutor,
        subject: selectedSubject,
        date: selectedDate,
        time: selectedTime,
        status: 'Confirmed'
      };

      const existing = JSON.parse(localStorage.getItem('learnly_clinic_bookings') || '[]');
      existing.unshift(newBooking);
      localStorage.setItem('learnly_clinic_bookings', JSON.stringify(existing));

      if (window.AIBuddy) {
        window.AIBuddy.showToast('1-on-1 Clinic Confirmed!', `Booked with ${selectedTutor} for ${selectedDate}, ${selectedTime}. Calendar invite synced.`);
      }

      window.location.hash = '#clinic-confirmation';
    };
  }
});
