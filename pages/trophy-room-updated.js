// Learnly 11+ — Trophy Room Updated (Variant with leaderboard)
LearnlyRouter.register('trophy-room-updated', function() {
  return `
  <section class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md mb-space-xl">
    <div>
      <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Leaderboard &amp; Achievements</h1>
      <p class="font-body-md text-body-md text-on-surface-variant mt-1">Compare your progress with top scholars</p>
    </div>
    <div class="inline-flex p-1 bg-surface-container-high rounded-full shadow-sm">
      <button class="px-space-md py-1.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-primary font-bold shadow-sm" data-navigate="trophy-room-updated">Leaderboard</button>
      <button class="px-space-md py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant" data-navigate="trophy-room">Badges</button>
    </div>
  </section>

  <!-- Podium -->
  <div class="bg-surface-container-lowest rounded-2xl p-space-xl shadow-md mb-space-xl">
    <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-lg text-center">Weekly Top Scholars</h3>
    <div class="flex items-end justify-center gap-space-lg">
      <!-- 2nd Place -->
      <div class="text-center">
        <div class="w-16 h-16 rounded-full bg-surface-container-highest mx-auto mb-space-sm flex items-center justify-center"><span class="material-symbols-outlined text-2xl text-on-surface-variant">person</span></div>
        <span class="font-label-lg text-label-lg text-on-surface font-bold">Emma S.</span>
        <div class="font-label-md text-label-md text-on-surface-variant">1,380 XP</div>
        <div class="mt-space-sm w-20 h-24 bg-surface-container-highest rounded-t-xl mx-auto flex items-center justify-center">
          <span class="font-headline-lg text-headline-lg text-on-surface-variant font-extrabold">2</span>
        </div>
      </div>
      <!-- 1st Place -->
      <div class="text-center">
        <div class="w-20 h-20 rounded-full bg-secondary-container mx-auto mb-space-sm flex items-center justify-center gold-glow">
          <img alt="Leo" class="w-18 h-18 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1Qc3G-0J8L9rm3gGyiGaPyqDHos_pYWjGOp9OUrxYQBOKEFee0wgAEVlh16TfmQNiWxt-NqWOA9qqDRvl1k4fL5wg1wUsStC9xvru1w7bUYvb8xBvFL3_5_N7dxiPrOLddmAE88mzYlHc_u2zguBI01dtegvKb9IikVtYlF2Qgf5MYRiedEBTFiJvBQrG2IgC7oZDgySOe_JrXyvQgSm1X0DHDgM09DGe70xqKgqN2-8FOuRaWwWZ8A"/>
        </div>
        <span class="font-headline-sm text-headline-sm text-on-surface font-bold">Leo M. (You)</span>
        <div class="font-label-lg text-label-lg text-primary font-bold">1,450 XP</div>
        <div class="mt-space-sm w-24 h-32 bg-secondary-container rounded-t-xl mx-auto flex items-center justify-center">
          <span class="font-headline-lg text-headline-lg text-secondary font-extrabold" style="font-variation-settings:'FILL' 1">👑 1</span>
        </div>
      </div>
      <!-- 3rd Place -->
      <div class="text-center">
        <div class="w-16 h-16 rounded-full bg-surface-container-highest mx-auto mb-space-sm flex items-center justify-center"><span class="material-symbols-outlined text-2xl text-on-surface-variant">person</span></div>
        <span class="font-label-lg text-label-lg text-on-surface font-bold">Oliver T.</span>
        <div class="font-label-md text-label-md text-on-surface-variant">1,290 XP</div>
        <div class="mt-space-sm w-20 h-20 bg-secondary-fixed rounded-t-xl mx-auto flex items-center justify-center">
          <span class="font-headline-lg text-headline-lg text-on-secondary-fixed font-extrabold">3</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Full Leaderboard Table -->
  <div class="bg-surface-container-lowest rounded-2xl shadow-md overflow-hidden">
    <div class="p-space-md bg-surface-container-low flex items-center justify-between">
      <h3 class="font-headline-sm text-headline-sm text-on-surface">Full Rankings</h3>
      <span class="font-label-md text-label-md text-on-surface-variant">Updated weekly</span>
    </div>
    ${[
      {rank:1,name:'Leo M.',xp:1450,level:'Level 6',sas:128,isYou:true},
      {rank:2,name:'Emma S.',xp:1380,level:'Level 6',sas:126},
      {rank:3,name:'Oliver T.',xp:1290,level:'Level 5',sas:124},
      {rank:4,name:'Sophia K.',xp:1220,level:'Level 5',sas:122},
      {rank:5,name:'James W.',xp:1150,level:'Level 5',sas:120},
      {rank:6,name:'Amelia R.',xp:1080,level:'Level 4',sas:118},
      {rank:7,name:'Noah P.',xp:1010,level:'Level 4',sas:116},
      {rank:8,name:'Isla B.',xp:960,level:'Level 4',sas:114},
    ].map(r=>`
    <div class="p-space-md border-t border-surface-container-high/40 flex items-center gap-space-md ${r.isYou?'bg-primary-fixed/20':''}">
      <span class="w-8 h-8 rounded-full ${r.rank<=3?'bg-secondary-container text-secondary':'bg-surface-container-high text-on-surface'} flex items-center justify-center font-label-lg text-label-lg font-bold">${r.rank}</span>
      <div class="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center"><span class="material-symbols-outlined text-base text-on-surface-variant">person</span></div>
      <div class="flex-1"><span class="font-label-lg text-label-lg text-on-surface font-bold">${r.name}${r.isYou?' ⭐':''}</span><br><span class="font-label-md text-label-md text-on-surface-variant">${r.level}</span></div>
      <span class="font-label-lg text-label-lg text-primary font-bold">${r.xp.toLocaleString()} XP</span>
      <span class="px-2 py-0.5 rounded-full bg-surface-container-high font-label-md text-label-md">SAS ${r.sas}</span>
    </div>`).join('')}
  </div>`;
});
