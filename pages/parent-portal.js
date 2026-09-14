// Learnly 11+ — Parent & Tutor Portal
LearnlyRouter.register('parent-portal', function() {
  return `
  <section class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md mb-space-xl">
    <div>
      <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Parent &amp; Tutor Portal</h1>
      <p class="font-body-md text-body-md text-on-surface-variant mt-1">Monitor Leo's progress, book clinics, and manage study plans</p>
    </div>
    <div class="flex items-center gap-space-sm">
      <button class="flex items-center gap-2 px-space-lg py-2.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:scale-105 transition-all" data-navigate="clinic-booking" type="button">
        <span class="material-symbols-outlined text-base">calendar_month</span> Book 1-on-1 Clinic
      </button>
    </div>
  </section>

  <!-- Child Overview Cards -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-xl">
    <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md elevation-1">
      <div class="flex items-center gap-space-sm mb-space-md">
        <img alt="Leo" class="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1Qc3G-0J8L9rm3gGyiGaPyqDHos_pYWjGOp9OUrxYQBOKEFee0wgAEVlh16TfmQNiWxt-NqWOA9qqDRvl1k4fL5wg1wUsStC9xvru1w7bUYvb8xBvFL3_5_N7dxiPrOLddmAE88mzYlHc_u2zguBI01dtegvKb9IikVtYlF2Qgf5MYRiedEBTFiJvBQrG2IgC7oZDgySOe_JrXyvQgSm1X0DHDgM09DGe70xqKgqN2-8FOuRaWwWZ8A"/>
        <div>
          <h3 class="font-headline-sm text-headline-sm text-on-surface">Leo Mitchell</h3>
          <span class="font-label-md text-label-md text-tertiary-container font-bold">Level 6 Scholar • 1,450 XP</span>
        </div>
      </div>
      <div class="space-y-space-sm">
        <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Current SAS</span><span class="font-label-lg text-label-lg text-primary font-bold">128 / 141</span></div>
        <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Overall Accuracy</span><span class="font-label-lg text-label-lg text-tertiary-container font-bold">89.4%</span></div>
        <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Study Streak</span><span class="font-label-lg text-label-lg text-secondary font-bold">14 days</span></div>
      </div>
    </div>
    <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md elevation-1">
      <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md flex items-center gap-2"><span class="material-symbols-outlined text-primary">schedule</span>Study Activity</h3>
      <div class="space-y-space-sm">
        <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">This Week</span><span class="font-label-lg text-label-lg text-on-surface font-bold">8.5 hours</span></div>
        <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Questions Done</span><span class="font-label-lg text-label-lg text-on-surface font-bold">142</span></div>
        <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Drills Completed</span><span class="font-label-lg text-label-lg text-on-surface font-bold">12</span></div>
        <div class="flex justify-between"><span class="font-label-md text-label-md text-on-surface-variant">Mock Exams</span><span class="font-label-lg text-label-lg text-on-surface font-bold">1</span></div>
      </div>
    </div>
    <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md elevation-1">
      <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md flex items-center gap-2"><span class="material-symbols-outlined text-secondary">priority_high</span>Areas of Focus</h3>
      <div class="space-y-space-sm">
        ${[
          {topic:'3D Spatial Nets (NVR)',pct:68,color:'error'},
          {topic:'Compound Words (VR)',pct:72,color:'secondary'},
          {topic:'Decimal Division (Maths)',pct:75,color:'secondary-container'},
        ].map(t=>`
        <div>
          <div class="flex justify-between mb-1"><span class="font-label-md text-label-md text-on-surface">${t.topic}</span><span class="font-label-md text-label-md text-${t.color} font-bold">${t.pct}%</span></div>
          <div class="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden"><div class="bg-${t.color} h-full rounded-full" style="width:${t.pct}%"></div></div>
        </div>`).join('')}
      </div>
    </div>
  </div>

  <!-- Parent Live Cheer & Encouragement Dispatcher -->
  <div class="bg-surface-container-lowest rounded-3xl p-space-lg shadow-xl border-2 border-secondary/30 mb-space-xl relative overflow-hidden">
    <div class="absolute -right-8 -top-8 w-36 h-36 bg-secondary/10 rounded-full blur-2xl pointer-events-none"></div>
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-2xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center text-2xl shadow-md">
          ⭐
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold uppercase">Real-Time Parent Cheer</span>
            <span class="text-xs text-tertiary font-bold flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span> Leo is currently studying</span>
          </div>
          <h2 class="text-lg font-extrabold text-on-surface tracking-tight mt-0.5">Send Instant Motivational Encouragement</h2>
        </div>
      </div>
      <span class="text-xs text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-full">Appears immediately on student screen</span>
    </div>

    <!-- Quick Cheer Presets -->
    <div class="flex flex-wrap gap-2 mb-4">
      <button class="parent-cheer-btn px-3 py-2 rounded-xl bg-surface-container-low hover:bg-secondary-fixed/50 text-xs font-bold text-on-surface transition-all flex items-center gap-1.5 cursor-pointer" data-msg="Proud of your focus, Leo! Keep shining ⭐" data-type="star">
        <span>⭐</span> <span>Proud of your focus, keep shining!</span>
      </button>
      <button class="parent-cheer-btn px-3 py-2 rounded-xl bg-surface-container-low hover:bg-secondary-fixed/50 text-xs font-bold text-on-surface transition-all flex items-center gap-1.5 cursor-pointer" data-msg="You crushed that Verbal Reasoning drill! 🚀" data-type="rocket">
        <span>🚀</span> <span>You crushed that VR drill!</span>
      </button>
      <button class="parent-cheer-btn px-3 py-2 rounded-xl bg-surface-container-low hover:bg-secondary-fixed/50 text-xs font-bold text-on-surface transition-all flex items-center gap-1.5 cursor-pointer" data-msg="Take a 5-min cognitive stretch break! 🍎" data-type="heart">
        <span>🍎</span> <span>Take a 5-min water &amp; stretch break!</span>
      </button>
      <button class="parent-cheer-btn px-3 py-2 rounded-xl bg-surface-container-low hover:bg-secondary-fixed/50 text-xs font-bold text-on-surface transition-all flex items-center gap-1.5 cursor-pointer" data-msg="Master of 3D Spatial Nets today! 🏆" data-type="trophy">
        <span>🏆</span> <span>Master of 3D Spatial Nets!</span>
      </button>
    </div>

    <!-- Custom Message Input -->
    <div class="flex items-center gap-2">
      <input id="custom-cheer-input" type="text" placeholder="Or type a personal encouraging message to Leo..." class="flex-1 px-4 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/40"/>
      <button id="send-custom-cheer-btn" class="px-5 py-2.5 rounded-xl bg-secondary text-on-secondary font-bold text-sm shadow-md hover:opacity-90 transition-all flex items-center gap-1.5 cursor-pointer">
        <span class="material-symbols-outlined text-base">send</span>
        <span>Send Cheer</span>
      </button>
    </div>
  </div>

  <!-- Upcoming Bookings -->
  <h3 class="font-headline-md text-headline-md text-on-surface mb-space-md">Upcoming Bookings</h3>
  <div class="space-y-space-md mb-space-xl">
    ${[
      {tutor:'Mr. Thompson',subject:'NVR 3D Spatial Strategy',date:'Tomorrow, 4:00 PM',duration:'45 min',status:'Confirmed'},
      {tutor:'Ms. Patel',subject:'English Comprehension — Inference',date:'Friday, 5:00 PM',duration:'45 min',status:'Confirmed'},
    ].map(b=>`
    <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex items-center justify-between">
      <div class="flex items-center gap-space-md">
        <div class="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center"><span class="material-symbols-outlined text-on-primary text-xl">person</span></div>
        <div>
          <h4 class="font-headline-sm text-headline-sm text-on-surface">${b.subject}</h4>
          <span class="font-label-md text-label-md text-on-surface-variant">with ${b.tutor} • ${b.duration}</span>
        </div>
      </div>
      <div class="flex items-center gap-space-md">
        <span class="font-label-lg text-label-lg text-on-surface font-bold">${b.date}</span>
        <span class="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold">${b.status}</span>
      </div>
    </div>`).join('')}
  </div>

  <!-- Settings -->
  <h3 class="font-headline-md text-headline-md text-on-surface mb-space-md">Settings &amp; Preferences</h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
    ${[
      {title:'Study Goal',desc:'Set daily time and question targets',icon:'flag'},
      {title:'Notifications',desc:'Configure alerts for streaks, scores & clinics',icon:'notifications'},
      {title:'Target Schools',desc:'Manage school preferences and exam formats',icon:'school'},
      {title:'Account',desc:'Profile, subscription, and billing',icon:'settings'},
    ].map(s=>`
    <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm card-hover flex items-center gap-space-md cursor-pointer">
      <div class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center"><span class="material-symbols-outlined text-primary text-xl">${s.icon}</span></div>
      <div class="flex-1"><h4 class="font-label-lg text-label-lg text-on-surface font-bold">${s.title}</h4><p class="font-body-sm text-body-sm text-on-surface-variant">${s.desc}</p></div>
      <span class="material-symbols-outlined text-outline">chevron_right</span>
    </div>`).join('')}
  </div>`;
}, function() {
  document.querySelectorAll('.parent-cheer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const msg = btn.dataset.msg;
      const type = btn.dataset.type || 'star';
      if (window.AIBuddy) {
        window.AIBuddy.sendParentCheer(msg, type);
        window.AIBuddy.showToast('Cheer Sent! ⭐', 'Delivered live to Leo\'s study session screen.');
      }
    });
  });

  const customBtn = document.getElementById('send-custom-cheer-btn');
  const customInput = document.getElementById('custom-cheer-input');
  if (customBtn && customInput) {
    customBtn.addEventListener('click', () => {
      const val = customInput.value.trim();
      if (!val) return;
      if (window.AIBuddy) {
        window.AIBuddy.sendParentCheer(val, 'heart');
        window.AIBuddy.showToast('Cheer Sent! 💖', 'Delivered live to Leo\'s study session screen.');
        customInput.value = '';
      }
    });
  }
});

