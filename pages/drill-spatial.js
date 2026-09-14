// Learnly 11+ — Drill #1: 3D Spatial Net Folding Rapid-Fire
LearnlyRouter.register('drill-spatial', function() {
  return `
  <div class="space-y-space-md">
    <section class="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex items-center justify-between">
      <div class="flex items-center gap-space-md">
        <a href="#dashboard" class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined">arrow_back</span></a>
        <div>
          <div class="flex items-center gap-space-xs"><span class="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold">NVR Spatial</span><span class="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-md text-label-md">Rapid-Fire Mode</span></div>
          <h1 class="font-headline-sm text-headline-sm text-on-surface mt-0.5">Drill #1: 3D Spatial Net Folding</h1>
        </div>
      </div>
      <div class="flex items-center gap-space-sm">
        <div class="flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container-low shadow-sm">
          <span class="font-label-md text-label-md text-on-surface-variant">Question</span>
          <span class="font-label-timer text-label-timer text-primary">3 <span class="text-outline text-body-sm font-normal">/ 10</span></span>
        </div>
        <div class="flex items-center gap-2 px-space-md py-1.5 rounded-full bg-tertiary-fixed/30 shadow-sm">
          <span class="material-symbols-outlined text-tertiary-container text-base">timer</span>
          <span class="font-label-timer text-label-timer text-tertiary-container">4:32</span>
        </div>
        <div class="flex items-center gap-1 px-space-md py-1.5 rounded-full bg-secondary-fixed/40 shadow-sm">
          <span class="material-symbols-outlined text-secondary text-base">stars</span>
          <span class="font-label-lg text-label-lg text-on-secondary-fixed font-bold">+60 XP</span>
        </div>
      </div>
    </section>
    <div class="grid grid-cols-12 gap-space-lg">
      <div class="col-span-12 lg:col-span-6">
        <div class="bg-surface-container-lowest rounded-xl p-space-xl shadow-md">
          <h2 class="font-headline-md text-headline-md text-on-surface mb-space-md">Which 3D shape does this net fold into?</h2>
          <div class="bg-surface-container-low rounded-xl p-space-xl flex items-center justify-center min-h-[300px] relative">
            <svg viewBox="0 0 300 250" class="w-full max-w-md">
              <rect x="100" y="50" width="50" height="50" fill="#e2dfff" stroke="#4f46e5" stroke-width="2" rx="2"/>
              <rect x="150" y="50" width="50" height="50" fill="#e2dfff" stroke="#4f46e5" stroke-width="2" rx="2"/>
              <rect x="100" y="100" width="50" height="50" fill="#e2dfff" stroke="#4f46e5" stroke-width="2" rx="2"/>
              <rect x="100" y="150" width="50" height="50" fill="#e2dfff" stroke="#4f46e5" stroke-width="2" rx="2"/>
              <rect x="50" y="100" width="50" height="50" fill="#e2dfff" stroke="#4f46e5" stroke-width="2" rx="2"/>
              <rect x="200" y="50" width="50" height="50" fill="#e2dfff" stroke="#4f46e5" stroke-width="2" rx="2"/>
              <text x="125" y="82" text-anchor="middle" fill="#4f46e5" font-size="18" font-weight="700">★</text>
              <text x="175" y="82" text-anchor="middle" fill="#4f46e5" font-size="18" font-weight="700">●</text>
              <text x="125" y="132" text-anchor="middle" fill="#4f46e5" font-size="18" font-weight="700">▲</text>
              <text x="125" y="182" text-anchor="middle" fill="#4f46e5" font-size="18" font-weight="700">■</text>
              <text x="75" y="132" text-anchor="middle" fill="#4f46e5" font-size="18" font-weight="700">◆</text>
              <text x="225" y="82" text-anchor="middle" fill="#4f46e5" font-size="18" font-weight="700">○</text>
            </svg>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-6 space-y-space-md">
        <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-md">
          <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-space-sm block">Select the correct 3D shape:</span>
          <div class="grid grid-cols-2 gap-space-sm">
            ${['A','B','C','D'].map((l,i)=>`
            <button class="answer-bubble flex flex-col items-center gap-space-sm p-space-md rounded-xl border-2 border-surface-container-high bg-surface-container-lowest" type="button">
              <span class="w-10 h-10 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center font-label-lg text-label-lg font-bold">${l}</span>
              <div class="w-full h-24 bg-surface-container-low rounded-lg flex items-center justify-center">
                <span class="material-symbols-outlined text-4xl text-on-surface-variant">view_in_ar</span>
              </div>
            </button>`).join('')}
          </div>
        </div>
        <div class="flex justify-between">
          <button class="px-space-lg py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-lg text-label-lg" type="button">← Previous</button>
          <button class="px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:scale-105 transition-all" type="button">Next →</button>
        </div>
      </div>
    </div>
  </div>`;
});
