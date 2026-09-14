// Learnly 11+ — Trophy Room & Badges Gallery
LearnlyRouter.register('trophy-room', function() {
  const badges = [
    { name:'VR Virtuoso', desc:'95%+ in Verbal Reasoning 3 times', icon:'psychology', earned:true, tier:'gold', xp:100 },
    { name:'Maths Maestro', desc:'Complete 500 Maths questions', icon:'calculate', earned:true, tier:'gold', xp:150 },
    { name:'Streak Master', desc:'14-day study streak', icon:'local_fire_department', earned:true, tier:'gold', xp:200 },
    { name:'Speed Demon', desc:'Under 30s average on 20+ VR questions', icon:'bolt', earned:true, tier:'silver', xp:75 },
    { name:'Perfect Score', desc:'100% on any timed drill', icon:'military_tech', earned:true, tier:'silver', xp:100 },
    { name:'Bookworm', desc:'Read 50 comprehension passages', icon:'auto_stories', earned:true, tier:'silver', xp:80 },
    { name:'Night Owl', desc:'Complete 5 sessions after 7pm', icon:'dark_mode', earned:true, tier:'bronze', xp:50 },
    { name:'First Steps', desc:'Complete your first mock exam', icon:'flag', earned:true, tier:'bronze', xp:25 },
    { name:'NVR Navigator', desc:'90%+ in Non-Verbal Reasoning', icon:'view_in_ar', earned:false, tier:'locked', xp:100, progress:84 },
    { name:'Grand Scholar', desc:'Reach SAS 130+', icon:'school', earned:false, tier:'locked', xp:300, progress:98 },
    { name:'Perfectionist', desc:'Score 95%+ on 5 consecutive mocks', icon:'stars', earned:false, tier:'locked', xp:250, progress:60 },
    { name:'Marathon Runner', desc:'Complete 2000 total questions', icon:'directions_run', earned:false, tier:'locked', xp:200, progress:70 },
  ];
  const tierColors = { gold:'secondary-container', silver:'surface-container-highest', bronze:'secondary-fixed', locked:'surface-container-high' };
  return `
  <section class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md mb-space-xl">
    <div>
      <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Trophy Room &amp; Badges Gallery</h1>
      <p class="font-body-md text-body-md text-on-surface-variant mt-1">Your collection of academic achievements and milestones</p>
    </div>
    <div class="flex items-center gap-space-md">
      <div class="flex items-center gap-space-xs px-space-md py-2 bg-primary-fixed rounded-full">
        <span class="material-symbols-outlined text-primary text-base">diamond</span>
        <span class="font-label-lg text-label-lg text-primary font-bold">1,450 XP Total</span>
      </div>
      <div class="flex items-center gap-space-xs px-space-md py-2 bg-secondary-fixed/50 rounded-full">
        <span class="material-symbols-outlined text-secondary text-base">emoji_events</span>
        <span class="font-label-lg text-label-lg text-on-secondary-fixed font-bold">8 / 12 Badges</span>
      </div>
    </div>
  </section>

  <!-- XP Level Progress -->
  <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md mb-space-xl">
    <div class="flex items-center justify-between mb-space-sm">
      <div class="flex items-center gap-space-sm">
        <div class="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center">
          <span class="material-symbols-outlined text-on-primary text-2xl">military_tech</span>
        </div>
        <div>
          <span class="font-headline-sm text-headline-sm text-on-surface">Level 6 — Scholar</span>
          <span class="font-label-md text-label-md text-on-surface-variant block">1,450 / 2,000 XP to Level 7 (Master)</span>
        </div>
      </div>
      <span class="font-headline-md text-headline-md text-primary font-extrabold">72.5%</span>
    </div>
    <div class="w-full bg-surface-container-high rounded-full h-3 overflow-hidden">
      <div class="bg-gradient-to-r from-primary to-primary-container h-full rounded-full transition-all duration-1000" style="width:72.5%"></div>
    </div>
    <div class="flex justify-between mt-space-xs font-label-md text-label-md text-on-surface-variant">
      <span>Level 6</span><span>Level 7</span>
    </div>
  </div>

  <!-- Badge Collection -->
  <h3 class="font-headline-md text-headline-md text-on-surface mb-space-md">Badge Collection</h3>

  <!-- Earned -->
  <h4 class="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider mb-space-sm flex items-center gap-2">
    <span class="material-symbols-outlined text-tertiary-container text-base">check_circle</span> Earned (${badges.filter(b=>b.earned).length})
  </h4>
  <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-space-md mb-space-xl">
    ${badges.filter(b=>b.earned).map(b => `
    <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md card-hover text-center relative overflow-hidden ${b.tier==='gold'?'gold-glow':''}">
      <div class="absolute top-0 right-0 px-2 py-0.5 rounded-bl-lg bg-${tierColors[b.tier]} font-label-md text-label-md font-bold capitalize">${b.tier}</div>
      <div class="w-16 h-16 mx-auto rounded-2xl bg-${tierColors[b.tier]} flex items-center justify-center mb-space-sm">
        <span class="material-symbols-outlined text-3xl ${b.tier==='gold'?'text-secondary':'text-on-surface'}" style="font-variation-settings: 'FILL' 1;">${b.icon}</span>
      </div>
      <h4 class="font-headline-sm text-headline-sm text-on-surface">${b.name}</h4>
      <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">${b.desc}</p>
      <span class="inline-block mt-space-sm px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-md text-label-md font-bold">+${b.xp} XP</span>
    </div>`).join('')}
  </div>

  <!-- Locked -->
  <h4 class="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider mb-space-sm flex items-center gap-2">
    <span class="material-symbols-outlined text-outline text-base">lock</span> Locked (${badges.filter(b=>!b.earned).length})
  </h4>
  <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-space-md">
    ${badges.filter(b=>!b.earned).map(b => `
    <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm text-center opacity-70 relative overflow-hidden">
      <div class="w-16 h-16 mx-auto rounded-2xl bg-surface-container-high flex items-center justify-center mb-space-sm">
        <span class="material-symbols-outlined text-3xl text-outline">${b.icon}</span>
      </div>
      <h4 class="font-headline-sm text-headline-sm text-on-surface">${b.name}</h4>
      <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">${b.desc}</p>
      <div class="mt-space-sm">
        <div class="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
          <div class="bg-primary h-full rounded-full" style="width:${b.progress}%"></div>
        </div>
        <span class="font-label-md text-label-md text-on-surface-variant mt-1">${b.progress}% Complete</span>
      </div>
    </div>`).join('')}
  </div>`;
});
