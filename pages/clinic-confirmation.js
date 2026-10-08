// Karat.Academy 11+ — 1-on-1 Strategy Clinic Confirmation & Live Room
LearnlyRouter.register('clinic-confirmation', function() {
  const bookings = JSON.parse(localStorage.getItem('learnly_clinic_bookings') || '[]');
  const latest = bookings[0] || {
    id: 'clinic-demo',
    student: 'Leo Sharma',
    tutor: 'Mr. Thompson',
    subject: 'NVR Spatial Strategy',
    date: 'Mon 15 Sep',
    time: '4:00 PM',
    status: 'Confirmed'
  };

  return `
  <div class="max-w-4xl mx-auto space-y-8 animate-fade-in py-4">
    <!-- Success Banner -->
    <div class="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
      <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      <div class="relative z-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
        <div class="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner flex-shrink-0">
          <span class="material-symbols-outlined text-5xl text-white">check_circle</span>
        </div>
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-2">
            <span class="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
            Booking Confirmed &amp; Calendar Synced
          </div>
          <h1 class="text-3xl sm:text-4xl font-black tracking-tight">You're All Set for Your Clinic!</h1>
          <p class="text-white/90 text-sm sm:text-base mt-1 max-w-xl">
            A confirmation email and calendar invitation have been dispatched. Your 11+ specialist tutor is preparing custom diagnostic materials for this session.
          </p>
        </div>
      </div>
    </div>

    <!-- Booking Details Card -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="md:col-span-2 bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-md border border-outline-variant/30 space-y-6">
        <div class="flex items-center justify-between border-b border-outline-variant/20 pb-4">
          <h2 class="text-xl font-bold text-on-surface">Clinic Session Details</h2>
          <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wide">
            ● ${latest.status || 'Confirmed'}
          </span>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-surface-container-low">
            <span class="text-xs text-on-surface-variant font-medium block">Specialist Tutor</span>
            <div class="flex items-center gap-2 mt-1">
              <span class="material-symbols-outlined text-primary text-xl">person</span>
              <span class="font-bold text-on-surface text-base">${latest.tutor}</span>
            </div>
          </div>
          <div class="p-4 rounded-2xl bg-surface-container-low">
            <span class="text-xs text-on-surface-variant font-medium block">Subject &amp; Focus</span>
            <div class="flex items-center gap-2 mt-1">
              <span class="material-symbols-outlined text-secondary text-xl">school</span>
              <span class="font-bold text-on-surface text-base">${latest.subject}</span>
            </div>
          </div>
          <div class="p-4 rounded-2xl bg-surface-container-low">
            <span class="text-xs text-on-surface-variant font-medium block">Scheduled Date</span>
            <div class="flex items-center gap-2 mt-1">
              <span class="material-symbols-outlined text-indigo-600 text-xl">event</span>
              <span class="font-bold text-on-surface text-base">${latest.date}</span>
            </div>
          </div>
          <div class="p-4 rounded-2xl bg-surface-container-low">
            <span class="text-xs text-on-surface-variant font-medium block">Time Slot</span>
            <div class="flex items-center gap-2 mt-1">
              <span class="material-symbols-outlined text-amber-600 text-xl">schedule</span>
              <span class="font-bold text-on-surface text-base">${latest.time}</span>
            </div>
          </div>
        </div>

        <!-- Student Preparation Check -->
        <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
          <div class="flex items-start gap-3">
            <span class="material-symbols-outlined text-amber-600 text-xl mt-0.5">tips_and_updates</span>
            <div>
              <h4 class="font-bold text-sm text-on-surface">Before the Session:</h4>
              <ul class="text-xs text-on-surface-variant space-y-1 mt-1 list-disc list-inside">
                <li>Ensure microphone and webcam are functional in your browser.</li>
                <li>Have a pen and blank scrap paper ready for working out spatial sequences.</li>
                <li>The tutor will review your recent Mistake Vault questions live during the session.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex flex-wrap items-center gap-3 pt-2">
          <a href="#parent-portal" class="px-6 py-3 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-bold text-sm transition-all flex items-center gap-2">
            <span class="material-symbols-outlined text-base">arrow_back</span>
            Parent Portal
          </a>
          <a href="#clinic-live" class="px-6 py-3 rounded-full bg-primary-container text-on-primary font-bold text-sm shadow-md hover:scale-105 transition-all flex items-center gap-2">
            <span class="material-symbols-outlined text-base">video_call</span>
            Enter Interactive Room
          </a>
          <a href="#dashboard" class="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all flex items-center gap-2">
            <span class="material-symbols-outlined text-base">dashboard</span>
            Return to Dashboard
          </a>
        </div>
      </div>

      <!-- Quick Sync Card -->
      <div class="space-y-6">
        <div class="bg-surface-container-lowest rounded-3xl p-6 shadow-md border border-outline-variant/30 space-y-4">
          <h3 class="font-bold text-base text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-lg">calendar_add_on</span>
            Calendar Sync
          </h3>
          <p class="text-xs text-on-surface-variant">Sync this session to your calendar so neither parent nor scholar misses the call.</p>
          
          <button id="btn-sync-gcal" class="w-full py-2.5 px-4 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all">
            <span class="material-symbols-outlined text-sm text-red-500">calendar_today</span>
            Add to Google Calendar
          </button>

          <button id="btn-sync-ical" class="w-full py-2.5 px-4 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all">
            <span class="material-symbols-outlined text-sm text-blue-500">download</span>
            Download .iCal File
          </button>
        </div>

        <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-6 shadow-sm border border-indigo-100 space-y-3">
          <div class="flex items-center gap-2 text-indigo-700 font-bold text-sm">
            <span class="material-symbols-outlined text-lg">support_agent</span>
            Need to reschedule?
          </div>
          <p class="text-xs text-slate-600">
            You can reschedule or cancel this session at no charge up to 2 hours before the scheduled time directly from the parent portal.
          </p>
          <a href="#clinic-booking" class="inline-block text-xs text-indigo-600 hover:text-indigo-800 font-bold underline">
            Change appointment time →
          </a>
        </div>
      </div>
    </div>
  </div>`;
}, function() {
  const gcalBtn = document.getElementById('btn-sync-gcal');
  const icalBtn = document.getElementById('btn-sync-ical');

  if (gcalBtn) {
    gcalBtn.onclick = () => {
      const title = encodeURIComponent('Karat.Academy 11+ Strategy Clinic');
      const details = encodeURIComponent('1-on-1 Strategy session with specialist 11+ tutor on Karat.Academy.');
      const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=Karat.Academy+Virtual+Room`;
      window.open(gcalUrl, '_blank');
    };
  }

  if (icalBtn) {
    icalBtn.onclick = () => {
      const icsData = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Karat Academy//11+ Clinic//EN',
        'BEGIN:VEVENT',
        'SUMMARY:Karat.Academy 11+ Strategy Clinic',
        'DESCRIPTION:1-on-1 Strategy session with specialist 11+ tutor.',
        'STATUS:CONFIRMED',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');
      const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'karat-clinic-session.ics');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    };
  }
});
