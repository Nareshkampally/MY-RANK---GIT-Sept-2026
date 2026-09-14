// Learnly 11+ — Analytics Updated (Variant with additional graphs)
LearnlyRouter.register('analytics-updated', function() {
  return `
  <section class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md mb-space-xl">
    <div>
      <div class="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md mb-1">
        <span>ENHANCED ANALYTICS</span><span class="text-outline-variant">•</span>
        <span class="text-primary font-bold">AI-POWERED INSIGHTS</span>
      </div>
      <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Advanced Performance Diagnostics</h1>
    </div>
    <button class="flex items-center gap-2 px-space-lg py-2.5 bg-primary text-on-primary rounded-full font-label-lg text-label-lg font-bold shadow-md" type="button"><span class="material-symbols-outlined text-base">download</span> Export Full Report</button>
  </section>

  <!-- Exam Readiness Gauge -->
  <div class="bg-surface-container-lowest rounded-2xl p-space-xl shadow-md mb-space-xl">
    <div class="flex items-center justify-between mb-space-md">
      <h3 class="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2"><span class="material-symbols-outlined text-primary">speed</span>Exam Readiness Score</h3>
      <span class="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-lg text-label-lg font-bold">Grammar School Offer Band</span>
    </div>
    <div class="flex items-center justify-center gap-space-2xl">
      <div class="relative w-48 h-48">
        <svg class="w-full h-full" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="85" fill="none" stroke="#eff4ff" stroke-width="14"/>
          <circle cx="100" cy="100" r="85" fill="none" stroke="#4f46e5" stroke-width="14" stroke-linecap="round" stroke-dasharray="534" stroke-dashoffset="85" transform="rotate(-90 100 100)"/>
        </svg>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <span class="font-display-hero text-display-hero text-primary font-extrabold">84%</span>
          <span class="font-label-md text-label-md text-on-surface-variant">Ready</span>
        </div>
      </div>
      <div class="space-y-space-md max-w-sm">
        ${[
          {label:'Knowledge Mastery',pct:88,color:'primary'},
          {label:'Speed & Accuracy',pct:82,color:'tertiary-container'},
          {label:'Exam Stamina',pct:78,color:'secondary'},
          {label:'Weakness Resolution',pct:72,color:'error'},
        ].map(m=>`
        <div>
          <div class="flex justify-between mb-1"><span class="font-label-lg text-label-lg text-on-surface font-bold">${m.label}</span><span class="font-label-lg text-label-lg text-${m.color} font-bold">${m.pct}%</span></div>
          <div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden"><div class="bg-${m.color} h-full rounded-full" style="width:${m.pct}%"></div></div>
        </div>`).join('')}
      </div>
    </div>
  </div>

  <!-- Weekly Heatmap -->
  <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md mb-space-xl">
    <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md">Study Heatmap (Last 12 Weeks)</h3>
    <div class="grid grid-cols-12 gap-1">
      ${Array.from({length:84}).map((_,i)=>{
        const intensity = Math.random();
        const opacity = intensity < 0.2 ? '10' : intensity < 0.4 ? '20' : intensity < 0.6 ? '40' : intensity < 0.8 ? '60' : '90';
        return `<div class="w-full aspect-square rounded-sm bg-primary/${opacity}" title="Day ${i+1}"></div>`;
      }).join('')}
    </div>
    <div class="flex items-center justify-end gap-2 mt-space-sm">
      <span class="font-label-md text-label-md text-on-surface-variant">Less</span>
      ${['10','30','50','70','90'].map(o=>`<div class="w-4 h-4 rounded-sm bg-primary/${o}"></div>`).join('')}
      <span class="font-label-md text-label-md text-on-surface-variant">More</span>
    </div>
  </div>

  <!-- Predicted Score Range -->
  <div class="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md">
    <h3 class="font-headline-sm text-headline-sm text-on-surface mb-space-md flex items-center gap-2"><span class="material-symbols-outlined text-primary">auto_awesome</span>AI Predicted Score Range</h3>
    <div class="grid grid-cols-3 gap-space-md">
      <div class="p-space-lg rounded-xl bg-surface-container-low text-center">
        <span class="font-label-md text-label-md text-on-surface-variant uppercase">Conservative</span>
        <div class="font-display-hero text-display-hero text-secondary font-extrabold mt-1">120</div>
        <span class="font-label-md text-label-md text-on-surface-variant">SAS Score</span>
      </div>
      <div class="p-space-lg rounded-xl bg-primary-fixed/30 text-center border-2 border-primary">
        <span class="font-label-md text-label-md text-primary uppercase font-bold">Most Likely</span>
        <div class="font-display-hero text-display-hero text-primary font-extrabold mt-1">128</div>
        <span class="font-label-md text-label-md text-on-surface-variant">SAS Score</span>
      </div>
      <div class="p-space-lg rounded-xl bg-surface-container-low text-center">
        <span class="font-label-md text-label-md text-on-surface-variant uppercase">Optimistic</span>
        <div class="font-display-hero text-display-hero text-tertiary-container font-extrabold mt-1">134</div>
        <span class="font-label-md text-label-md text-on-surface-variant">SAS Score</span>
      </div>
    </div>
  </div>`;
});
