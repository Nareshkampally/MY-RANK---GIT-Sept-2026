// Learnly 11+ — Mastery Certificate / Achievement Showcase
LearnlyRouter.register('mastery-certificate', function() {
  return `
  <div class="space-y-12 max-w-3xl mx-auto pb-12">
    <section class="flex items-center justify-between">
      <div class="flex items-center gap-6">
        <a href="#trophy-room" class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">arrow_back</span></a>
        <div><h1 class="text-3xl text-on-surface font-extrabold tracking-tight">Mastery Certificate</h1></div>
      </div>
      <div class="flex items-center gap-4 no-print">
        <button class="flex items-center gap-2 px-6 py-2.5 rounded-full bg-surface-container-high text-primary font-bold shadow-sm" type="button"><span class="material-symbols-outlined text-base">share</span> Share</button>
        <button class="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-on-primary font-bold shadow-md hover:bg-primary/90 transition-colors" type="button" onclick="window.print()"><span class="material-symbols-outlined text-base">download</span> Download PDF</button>
      </div>
    </section>
    <!-- Certificate Card -->
    <div class="bg-surface-container-lowest rounded-[2.5rem] p-12 md:p-16 shadow-xl relative overflow-hidden border border-outline-variant/30 group">
      <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary-container to-tertiary-container"></div>
      <div class="absolute -right-16 -top-16 w-48 h-48 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
      <div class="absolute -left-12 -bottom-12 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
      <div class="text-center relative z-10">
        <div class="flex items-center justify-center gap-3 mb-8">
          <img alt="Karat.Academy Logo" class="h-8 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7HEuIV8rXxij6TrRi9z77NhdRSarsDFDi15cgUUgmWRWB74IrDneXs8gQEDdEK1dQhX28KkqoVJhox1PRU3xsfKYA2b6AOf2wiPXYpojve4dVZAo-JOyXZbaL1IcsYtLwE4D0thqG9YORfkljYSeEbOnMruvcb3LuLIqBwhrGFcPUjturAKdeYJ-PQ7wxvOyjQfGw1wePrq8yWkNN04lhDqK7IKkSD2-lubdUL0OzXDzMSKd9EH36Ig"/>
          <span class="text-xl font-extrabold text-primary tracking-tight">Karat.Academy 11+ Scholar</span>
        </div>
        <div class="w-20 h-20 mx-auto rounded-3xl bg-secondary/10 flex items-center justify-center mb-6 shadow-inner border border-secondary/20">
          <span class="material-symbols-outlined text-4xl text-secondary" style="font-variation-settings:'FILL' 1">military_tech</span>
        </div>
        <h2 class="text-4xl md:text-5xl text-on-surface font-black tracking-tight mb-2">Certificate of Mastery</h2>
        <p class="text-lg text-on-surface-variant font-medium">This is to certify that</p>
        <h3 class="text-4xl text-primary font-black mt-4 mb-4">Leo Mitchell</h3>
        <p class="text-lg text-on-surface-variant font-medium">has achieved</p>
        <div class="inline-flex items-center gap-3 px-8 py-3 bg-primary/10 border border-primary/20 rounded-full mt-4 mb-8 shadow-sm">
          <span class="material-symbols-outlined text-primary text-xl">verified</span>
          <span class="text-xl text-primary font-extrabold tracking-tight">Verbal Reasoning Mastery</span>
        </div>
        <p class="text-base text-on-surface-variant font-medium max-w-md mx-auto leading-relaxed">
          With an outstanding accuracy of <strong class="text-primary font-black">96%</strong> across 380 questions, demonstrating exceptional proficiency in Word Codes, Complex Anagrams, and Contextual Synonyms.
        </p>
        <div class="grid grid-cols-3 gap-6 mt-12 mb-12 max-w-md mx-auto">
          <div class="p-4 rounded-[2.5rem] bg-surface border border-outline-variant/10 shadow-inner"><span class="text-2xl text-primary font-black tracking-tight">96%</span><br><span class="text-[10px] font-bold text-outline-variant uppercase tracking-widest mt-1 block">Accuracy</span></div>
          <div class="p-4 rounded-[2.5rem] bg-surface border border-outline-variant/10 shadow-inner"><span class="text-2xl text-secondary font-black tracking-tight">380</span><br><span class="text-[10px] font-bold text-outline-variant uppercase tracking-widest mt-1 block">Questions</span></div>
          <div class="p-4 rounded-[2.5rem] bg-surface border border-outline-variant/10 shadow-inner"><span class="text-2xl text-tertiary font-black tracking-tight">128</span><br><span class="text-[10px] font-bold text-outline-variant uppercase tracking-widest mt-1 block">SAS Score</span></div>
        </div>
        <div class="flex items-center justify-between pt-8 border-t border-outline-variant/20 max-w-md mx-auto">
          <div class="text-left"><span class="text-[10px] font-bold text-outline-variant uppercase tracking-widest block mb-1">Issue Date</span><span class="text-sm text-on-surface font-extrabold">September 15, 2025</span></div>
          <div class="text-right"><span class="text-[10px] font-bold text-outline-variant uppercase tracking-widest block mb-1">Certificate ID</span><span class="text-sm text-on-surface font-extrabold">LN-VR-2025-04821</span></div>
        </div>
      </div>
    </div>
  </div>`;
});
