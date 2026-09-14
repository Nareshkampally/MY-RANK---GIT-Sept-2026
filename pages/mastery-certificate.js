// Learnly 11+ — Mastery Certificate / Achievement Showcase
LearnlyRouter.register('mastery-certificate', function() {
  return `
  <div class="space-y-space-xl max-w-3xl mx-auto">
    <section class="flex items-center justify-between">
      <div class="flex items-center gap-space-md">
        <a href="#trophy-room" class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined">arrow_back</span></a>
        <div><h1 class="font-headline-lg text-headline-lg text-on-surface">Mastery Certificate</h1></div>
      </div>
      <div class="flex items-center gap-space-sm no-print">
        <button class="flex items-center gap-2 px-space-lg py-2 rounded-full bg-surface-container-high text-primary font-label-lg text-label-lg font-bold" type="button"><span class="material-symbols-outlined text-base">share</span> Share</button>
        <button class="flex items-center gap-2 px-space-lg py-2 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-md" type="button" onclick="window.print()"><span class="material-symbols-outlined text-base">download</span> Download PDF</button>
      </div>
    </section>
    <!-- Certificate Card -->
    <div class="bg-surface-container-lowest rounded-3xl p-space-2xl shadow-xl relative overflow-hidden border-2 border-primary-fixed">
      <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary-container to-tertiary-container"></div>
      <div class="absolute -right-16 -top-16 w-48 h-48 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -left-12 -bottom-12 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="text-center relative z-10">
        <div class="flex items-center justify-center gap-space-sm mb-space-md">
          <img alt="Learnly Logo" class="h-8 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7HEuIV8rXxij6TrRi9z77NhdRSarsDFDi15cgUUgmWRWB74IrDneXs8gQEDdEK1dQhX28KkqoVJhox1PRU3xsfKYA2b6AOf2wiPXYpojve4dVZAo-JOyXZbaL1IcsYtLwE4D0thqG9YORfkljYSeEbOnMruvcb3LuLIqBwhrGFcPUjturAKdeYJ-PQ7wxvOyjQfGw1wePrq8yWkNN04lhDqK7IKkSD2-lubdUL0OzXDzMSKd9EH36Ig"/>
          <span class="font-headline-sm text-headline-sm text-primary">Learnly 11+ Scholar Edition</span>
        </div>
        <div class="w-20 h-20 mx-auto rounded-2xl bg-secondary-container flex items-center justify-center mb-space-md gold-glow">
          <span class="material-symbols-outlined text-4xl text-secondary" style="font-variation-settings:'FILL' 1">military_tech</span>
        </div>
        <h2 class="font-display-hero text-display-hero text-on-surface font-extrabold tracking-tight mb-space-xs">Certificate of Mastery</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant">This is to certify that</p>
        <h3 class="font-headline-lg text-headline-lg text-primary font-extrabold mt-space-sm mb-space-sm" style="font-size:36px">Leo Mitchell</h3>
        <p class="font-body-lg text-body-lg text-on-surface-variant">has achieved</p>
        <div class="inline-flex items-center gap-space-sm px-space-lg py-space-sm bg-primary-fixed rounded-full mt-space-sm mb-space-md">
          <span class="material-symbols-outlined text-primary text-xl">verified</span>
          <span class="font-headline-md text-headline-md text-primary font-extrabold">Verbal Reasoning Mastery</span>
        </div>
        <p class="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
          With an outstanding accuracy of <strong class="text-primary">96%</strong> across 380 questions, demonstrating exceptional proficiency in Word Codes, Complex Anagrams, and Contextual Synonyms.
        </p>
        <div class="grid grid-cols-3 gap-space-md mt-space-xl mb-space-xl max-w-md mx-auto">
          <div class="p-space-md rounded-xl bg-surface-container-low"><span class="font-headline-md text-headline-md text-primary font-extrabold">96%</span><br><span class="font-label-md text-label-md text-on-surface-variant">Accuracy</span></div>
          <div class="p-space-md rounded-xl bg-surface-container-low"><span class="font-headline-md text-headline-md text-secondary font-extrabold">380</span><br><span class="font-label-md text-label-md text-on-surface-variant">Questions</span></div>
          <div class="p-space-md rounded-xl bg-surface-container-low"><span class="font-headline-md text-headline-md text-tertiary-container font-extrabold">SAS 128</span><br><span class="font-label-md text-label-md text-on-surface-variant">Score</span></div>
        </div>
        <div class="flex items-center justify-between pt-space-lg border-t border-surface-container-high/40 max-w-md mx-auto">
          <div class="text-left"><span class="font-label-md text-label-md text-on-surface-variant">Issue Date</span><br><span class="font-label-lg text-label-lg text-on-surface font-bold">September 15, 2025</span></div>
          <div class="text-right"><span class="font-label-md text-label-md text-on-surface-variant">Certificate ID</span><br><span class="font-label-lg text-label-lg text-on-surface font-bold">LN-VR-2025-04821</span></div>
        </div>
      </div>
    </div>
  </div>`;
});
