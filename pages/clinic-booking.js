// Learnly 11+ — Clinic Booking Modal
LearnlyRouter.register('clinic-booking', function() {
  return `
  <div class="space-y-space-xl">
    <section class="flex items-center gap-space-md">
      <a href="#parent-portal" class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">arrow_back</span></a>
      <div><h1 class="font-headline-lg text-headline-lg text-on-surface">Book a 1-on-1 Strategy Clinic</h1><p class="font-body-md text-body-md text-on-surface-variant">Personalised sessions with expert 11+ tutors</p></div>
    </section>
    <div class="grid grid-cols-12 gap-space-lg">
      <div class="col-span-12 lg:col-span-7">
        <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md space-y-space-lg">
          <div>
            <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md">Select Subject Focus</h3>
            <div class="grid grid-cols-2 gap-space-sm" id="subject-selector">
              ${[{subj:'NVR Spatial Strategy',icon:'view_in_ar',color:'secondary'},{subj:'Verbal Reasoning',icon:'psychology',color:'primary'},{subj:'Mathematics',icon:'functions',color:'tertiary-container'},{subj:'English & Comprehension',icon:'menu_book',color:'primary'}].map((s,i)=>`
              <button class="clinic-subject-btn p-space-md rounded-xl border-2 ${i===0?'border-primary bg-primary-fixed/30':'border-surface-container-high bg-surface-container-lowest'} text-left transition-all hover:border-primary" type="button" data-subject="${s.subj}">
                <span class="material-symbols-outlined text-${s.color} text-2xl">${s.icon}</span>
                <span class="font-label-lg text-label-lg text-on-surface font-bold block mt-space-xs">${s.subj}</span>
              </button>`).join('')}
            </div>
          </div>
          <div>
            <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md">Choose a Tutor</h3>
            <div class="space-y-space-sm" id="tutor-selector">
              ${[{name:'Mr. Thompson',spec:'NVR & Spatial Reasoning Specialist',rating:'4.9',sessions:120},{name:'Ms. Patel',spec:'English & VR Expert',rating:'4.8',sessions:95},{name:'Dr. Khan',spec:'Mathematics & Sequences',rating:'4.9',sessions:78}].map((t,i)=>`
              <div class="clinic-tutor-btn p-space-md rounded-xl border-2 ${i===0?'border-primary bg-primary-fixed/10':'border-surface-container-high'} flex items-center justify-between cursor-pointer hover:border-primary transition-all" data-tutor="${t.name}">
                <div class="flex items-center gap-space-md">
                  <div class="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center"><span class="material-symbols-outlined text-on-primary text-xl">person</span></div>
                  <div><span class="font-label-lg text-label-lg text-on-surface font-bold">${t.name}</span><br><span class="font-body-sm text-body-sm text-on-surface-variant">${t.spec}</span></div>
                </div>
                <div class="text-right"><span class="font-label-lg text-label-lg text-secondary font-bold">★ ${t.rating}</span><br><span class="font-label-md text-label-md text-on-surface-variant">${t.sessions} sessions</span></div>
              </div>`).join('')}
            </div>
          </div>
          <div>
            <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md">Select Date & Time</h3>
            <div class="grid grid-cols-3 gap-space-sm mb-space-md" id="date-selector">
              ${['Mon 15','Tue 16','Wed 17','Thu 18','Fri 19','Sat 20'].map((d,i)=>`
              <button class="clinic-date-btn p-space-sm rounded-lg ${i===0?'bg-primary-container text-on-primary':'bg-surface-container-low text-on-surface'} font-label-lg text-label-lg font-bold text-center" type="button" data-date="${d} Sep">${d}</button>`).join('')}
            </div>
            <div class="grid grid-cols-4 gap-space-sm" id="time-selector">
              ${['3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM','6:00 PM','6:30 PM'].map((t,i)=>`
              <button class="clinic-time-btn p-space-sm rounded-lg ${i===2?'bg-primary-container text-on-primary':'bg-surface-container-low text-on-surface'} font-label-md text-label-md font-bold text-center" type="button" data-time="${t}">${t}</button>`).join('')}
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-5">
        <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md sticky top-24">
          <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md">Booking Summary</h3>
          <div class="space-y-space-sm p-space-md rounded-xl bg-surface-container-low mb-space-lg">
            <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Subject</span><span id="summary-subject" class="font-label-lg text-label-lg text-on-surface font-bold">NVR Spatial Strategy</span></div>
            <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Tutor</span><span id="summary-tutor" class="font-label-lg text-label-lg text-on-surface font-bold">Mr. Thompson</span></div>
            <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Date & Time</span><span id="summary-datetime" class="font-label-lg text-label-lg text-on-surface font-bold">Mon 15 Sep, 4:00 PM</span></div>
            <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Duration</span><span class="font-label-lg text-label-lg text-on-surface font-bold">45 minutes</span></div>
          </div>
          <button id="confirm-booking-btn" class="w-full px-space-lg py-3 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-lg hover:scale-105 transition-all text-lg" data-navigate="clinic-confirmation" type="button">Confirm Booking</button>
          <p class="text-center font-label-md text-label-md text-on-surface-variant mt-space-sm">Free cancellation up to 2 hours before</p>
        </div>
      </div>
    </div>
  </div>`;
}, function() {
  // Clinic Booking Interactivity
  let selectedSubject = 'NVR Spatial Strategy';
  let selectedTutor = 'Mr. Thompson';
  let selectedDate = 'Mon 15 Sep';
  let selectedTime = '4:00 PM';

  function updateSummary() {
    const subEl = document.getElementById('summary-subject');
    const tutEl = document.getElementById('summary-tutor');
    const dtEl = document.getElementById('summary-datetime');
    if (subEl) subEl.textContent = selectedSubject;
    if (tutEl) tutEl.textContent = selectedTutor;
    if (dtEl) dtEl.textContent = `${selectedDate}, ${selectedTime}`;
  }

  // Subject selector
  document.querySelectorAll('.clinic-subject-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.clinic-subject-btn').forEach(b => {
        b.classList.remove('border-primary', 'bg-primary-fixed/30');
        b.classList.add('border-surface-container-high', 'bg-surface-container-lowest');
      });
      btn.classList.add('border-primary', 'bg-primary-fixed/30');
      btn.classList.remove('border-surface-container-high', 'bg-surface-container-lowest');
      selectedSubject = btn.dataset.subject;
      updateSummary();
    });
  });

  // Tutor selector
  document.querySelectorAll('.clinic-tutor-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.clinic-tutor-btn').forEach(b => {
        b.classList.remove('border-primary', 'bg-primary-fixed/10');
        b.classList.add('border-surface-container-high');
      });
      btn.classList.add('border-primary', 'bg-primary-fixed/10');
      btn.classList.remove('border-surface-container-high');
      selectedTutor = btn.dataset.tutor;
      updateSummary();
    });
  });

  // Date selector
  document.querySelectorAll('.clinic-date-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.clinic-date-btn').forEach(b => {
        b.classList.remove('bg-primary-container', 'text-on-primary');
        b.classList.add('bg-surface-container-low', 'text-on-surface');
      });
      btn.classList.add('bg-primary-container', 'text-on-primary');
      btn.classList.remove('bg-surface-container-low', 'text-on-surface');
      selectedDate = btn.dataset.date;
      updateSummary();
    });
  });

  // Time selector
  document.querySelectorAll('.clinic-time-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.clinic-time-btn').forEach(b => {
        b.classList.remove('bg-primary-container', 'text-on-primary');
        b.classList.add('bg-surface-container-low', 'text-on-surface');
      });
      btn.classList.add('bg-primary-container', 'text-on-primary');
      btn.classList.remove('bg-surface-container-low', 'text-on-surface');
      selectedTime = btn.dataset.time;
      updateSummary();
    });
  });
});

// Booking Confirmation

LearnlyRouter.register('clinic-confirmation', function() {
  return `
  <div class="flex items-center justify-center min-h-[70vh]">
    <div class="bg-surface-container-lowest rounded-3xl p-space-2xl shadow-xl text-center max-w-lg w-full relative overflow-hidden">
      <div class="absolute -right-16 -top-16 w-48 h-48 bg-tertiary/5 rounded-full blur-3xl"></div>
      <span class="material-symbols-outlined text-7xl text-tertiary-container mb-space-md" style="font-variation-settings:'FILL' 1">event_available</span>
      <h1 class="font-headline-lg text-headline-lg text-on-surface font-extrabold">Booking Confirmed!</h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant mt-space-sm">Your 1-on-1 Strategy Clinic has been booked</p>
      <div class="p-space-lg rounded-xl bg-surface-container-low mt-space-xl text-left space-y-space-sm">
        <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Subject</span><span class="font-label-lg text-label-lg text-on-surface font-bold">NVR Spatial Strategy</span></div>
        <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Tutor</span><span class="font-label-lg text-label-lg text-on-surface font-bold">Mr. Thompson</span></div>
        <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Date & Time</span><span class="font-label-lg text-label-lg text-on-surface font-bold">Mon 15 Sep, 4:00 PM</span></div>
        <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Duration</span><span class="font-label-lg text-label-lg text-on-surface font-bold">45 minutes</span></div>
      </div>
      <div class="flex items-center justify-center gap-space-sm mt-space-xl">
        <button class="px-space-lg py-2.5 rounded-full bg-surface-container-high text-primary font-label-lg text-label-lg font-bold flex items-center gap-2"><span class="material-symbols-outlined text-base">calendar_add_on</span> Add to Calendar</button>
        <button class="px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md" data-navigate="dashboard">Back to Dashboard</button>
      </div>
    </div>
  </div>`;
});

// Live 1-on-1 Studio & Whiteboard
LearnlyRouter.register('clinic-live', function() {
  return `
  <div class="space-y-space-md">
    <section class="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex items-center justify-between">
      <div class="flex items-center gap-space-md">
        <div class="w-10 h-10 rounded-xl bg-tertiary-container flex items-center justify-center"><span class="material-symbols-outlined text-on-tertiary text-xl">videocam</span></div>
        <div><h1 class="font-headline-sm text-headline-sm text-on-surface">Live 1-on-1: NVR Spatial Strategy</h1><span class="font-label-md text-label-md text-on-surface-variant">with Mr. Thompson • 45 min session</span></div>
      </div>
      <div class="flex items-center gap-space-sm">
        <span class="px-space-md py-1.5 rounded-full bg-error text-on-error font-label-lg text-label-lg font-bold flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-on-error animate-pulse"></span> LIVE</span>
        <span class="font-label-timer text-label-timer text-on-surface">32:15</span>
        <button class="px-space-md py-1.5 rounded-full bg-error text-on-error font-label-lg text-label-lg font-bold" type="button">End Session</button>
      </div>
    </section>
    <div class="grid grid-cols-12 gap-space-md" style="height:calc(100vh - 200px)">
      <div class="col-span-9 bg-surface-container-lowest rounded-2xl shadow-md flex flex-col overflow-hidden">
        <div class="flex-1 bg-surface-container-low flex items-center justify-center"><div class="text-center"><span class="material-symbols-outlined text-8xl text-outline/30">draw</span><p class="font-body-md text-body-md text-on-surface-variant mt-space-md">Shared Whiteboard — Draw, annotate, and collaborate</p></div></div>
        <div class="p-space-sm flex items-center justify-center gap-space-sm bg-surface-container-lowest border-t border-surface-container-high">
          ${['edit','straighten','circle','text_fields','undo','redo','delete'].map(t=>`<button class="w-10 h-10 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all flex items-center justify-center" type="button"><span class="material-symbols-outlined text-lg">${t}</span></button>`).join('')}
          <div class="h-6 w-px bg-outline-variant/40 mx-2"></div>
          ${['#4f46e5','#ba1a1a','#006e4b','#855300'].map(c=>`<button class="w-8 h-8 rounded-full border-2 border-surface-container-highest" style="background:${c}" type="button"></button>`).join('')}
        </div>
      </div>
      <div class="col-span-3 flex flex-col gap-space-md">
        <div class="bg-surface-container-lowest rounded-2xl p-space-md shadow-md flex-1 flex flex-col">
          <div class="flex items-center gap-space-sm mb-space-md"><div class="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center"><span class="material-symbols-outlined text-on-primary text-lg">person</span></div><div><span class="font-label-lg text-label-lg text-on-surface font-bold">Mr. Thompson</span><br><span class="font-label-md text-label-md text-tertiary-container">Tutor</span></div></div>
          <div class="flex-1 bg-surface-container-low rounded-xl p-space-md overflow-hidden flex items-center justify-center"><span class="material-symbols-outlined text-5xl text-outline/30">videocam</span></div>
        </div>
        <div class="bg-surface-container-lowest rounded-2xl p-space-md shadow-md flex-1 flex flex-col">
          <span class="font-label-lg text-label-lg text-on-surface font-bold mb-space-sm">Chat</span>
          <div class="flex-1 bg-surface-container-low rounded-xl p-space-sm overflow-y-auto space-y-space-sm">
            <div class="p-2 rounded-lg bg-primary-fixed/30 text-sm"><strong>Mr. T:</strong> Let's start with the hexagonal net from Q11.</div>
            <div class="p-2 rounded-lg bg-surface-container-lowest text-sm"><strong>Leo:</strong> I always get confused with opposite faces!</div>
          </div>
          <div class="flex gap-space-xs mt-space-sm"><input class="flex-1 px-3 py-1.5 rounded-full bg-surface-container-low font-body-sm text-body-sm placeholder:text-outline" placeholder="Type a message..." type="text"><button class="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center"><span class="material-symbols-outlined text-sm">send</span></button></div>
        </div>
      </div>
    </div>
  </div>`;
});

// Post-Clinic Summary
LearnlyRouter.register('clinic-summary', function() {
  return `
  <div class="space-y-space-xl max-w-4xl mx-auto">
    <section class="flex items-center gap-space-md">
      <a href="#parent-portal" class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">arrow_back</span></a>
      <div><h1 class="font-headline-lg text-headline-lg text-on-surface">Post-Clinic Summary</h1><p class="font-body-md text-body-md text-on-surface-variant">NVR Spatial Strategy Session with Mr. Thompson • Sep 15</p></div>
    </section>
    <div class="bg-surface-container-lowest rounded-2xl p-space-xl shadow-md">
      <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md flex items-center gap-2"><span class="material-symbols-outlined text-tertiary-container">summarize</span>Session Summary</h3>
      <div class="space-y-space-md font-body-md text-body-md text-on-surface">
        <p>Today's session focused on <strong>3D Net Folding</strong> — Leo's primary weakness area in NVR. We covered:</p>
        <ul class="list-disc pl-6 space-y-1">
          <li>Identifying base faces and folding direction</li>
          <li>Opposite face deduction technique using the "cross pattern" method</li>
          <li>Time management strategies for spatial questions (target: under 45s)</li>
          <li>Practice with 8 hexagonal net variants</li>
        </ul>
        <p>Leo showed significant improvement during the session, correctly solving 7/8 practice problems compared to his baseline of 4/8.</p>
      </div>
    </div>
    <div class="bg-surface-container-lowest rounded-2xl p-space-xl shadow-md">
      <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md flex items-center gap-2"><span class="material-symbols-outlined text-primary">assignment</span>Homework Protocol</h3>
      <div class="space-y-space-sm">
        ${[
          {task:'Complete 10 hexagonal net drills',deadline:'By Wed 17 Sep',status:'Not Started',xp:60},
          {task:'Practice opposite face identification (cross method)',deadline:'Daily for 5 days',status:'Not Started',xp:40},
          {task:'Re-attempt Mock #04 Q3 and Q11',deadline:'By Fri 19 Sep',status:'Not Started',xp:30},
        ].map(h=>`
        <div class="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high/40 flex items-center justify-between">
          <div><span class="font-label-lg text-label-lg text-on-surface font-bold">${h.task}</span><br><span class="font-label-md text-label-md text-on-surface-variant">${h.deadline}</span></div>
          <div class="flex items-center gap-space-sm"><span class="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold">+${h.xp} XP</span><span class="px-2 py-0.5 rounded-full bg-surface-container-high font-label-md text-label-md">${h.status}</span></div>
        </div>`).join('')}
      </div>
    </div>
    <div class="flex justify-center gap-space-md">
      <button class="px-space-lg py-2.5 rounded-full bg-surface-container-high text-primary font-label-lg text-label-lg font-bold" data-navigate="drill-spatial">Start Homework Drill</button>
      <button class="px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md" data-navigate="dashboard">Back to Dashboard</button>
    </div>
  </div>`;
});
