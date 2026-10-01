// Learnly 11+ — 1v1 Peer Battle Arena
LearnlyRouter.register('battle-arena', function() {
  return `
  <div class="flex flex-col w-full h-[85vh] max-h-[800px] bg-[#0f172a] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 relative text-white">
    
    <!-- Background Decor -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-rose-500/20 rounded-full blur-[100px]"></div>
      <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>

    <!-- Header -->
    <header class="relative z-10 flex items-center justify-between p-8">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
          <span class="material-symbols-outlined text-white">swords</span>
        </div>
        <div>
          <h1 class="text-xl font-black tracking-widest uppercase">Live Arena</h1>
          <p class="text-[10px] text-white/50 font-bold tracking-widest">Rank: Silver II</p>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span class="text-xs font-bold text-white/80">3,492 online</span>
        </div>
        <button class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center text-white border border-white/10" data-navigate="dashboard">
          <span class="material-symbols-outlined text-sm">close</span>
        </button>
      </div>
    </header>

    <!-- Main Battle Area -->
    <div class="flex-1 flex relative z-10">
      
      <!-- Left Side (Player) -->
      <div class="flex-1 flex flex-col items-center justify-center border-r border-white/5 p-8 relative">
        <div class="w-24 h-24 rounded-full bg-rose-500/20 border-4 border-rose-500 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(244,63,94,0.3)]">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Leo" alt="Leo" class="w-20 h-20 rounded-full" />
        </div>
        <h2 class="text-2xl font-black mb-1">Leo (You)</h2>
        <p class="text-rose-400 text-sm font-bold tracking-widest uppercase mb-8">Score: <span class="text-3xl text-white ml-2" id="arena-p1-score">1,240</span></p>
        
        <div class="w-full max-w-xs space-y-2">
          <div class="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div class="h-full bg-rose-500 rounded-full transition-all" style="width: 75%"></div>
          </div>
          <div class="text-right text-[10px] font-bold text-white/50 uppercase">Streak x3</div>
        </div>
      </div>

      <!-- Center Timer & Question overlay -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full max-w-lg z-20">
        
        <!-- Timer VS -->
        <div class="w-20 h-20 rounded-full bg-slate-900 border-4 border-slate-800 flex flex-col items-center justify-center mb-6 shadow-2xl relative">
          <svg class="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="4"/>
            <circle cx="50" cy="50" r="46" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="289" stroke-dashoffset="144" class="transition-all duration-1000"/>
          </svg>
          <span class="text-2xl font-black text-white font-mono" id="arena-timer">30</span>
          <span class="text-[8px] font-bold text-white/50 uppercase tracking-widest">Sec</span>
        </div>

        <!-- Active Question Card -->
        <div class="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl text-center transform transition-all hover:scale-105">
          <div class="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest mb-4">
            Mental Maths Sprint
          </div>
          <p class="text-3xl font-extrabold mb-8">What is 15% of 340?</p>
          <div class="grid grid-cols-2 gap-4">
            <button class="py-4 rounded-[2.5rem] bg-white/5 hover:bg-white/15 border border-white/10 font-bold text-xl transition-all">51</button>
            <button class="py-4 rounded-[2.5rem] bg-white/5 hover:bg-white/15 border border-white/10 font-bold text-xl transition-all">34</button>
            <button class="py-4 rounded-[2.5rem] bg-white/5 hover:bg-white/15 border border-white/10 font-bold text-xl transition-all">68</button>
            <button class="py-4 rounded-[2.5rem] bg-white/5 hover:bg-white/15 border border-white/10 font-bold text-xl transition-all">45</button>
          </div>
        </div>

      </div>

      <!-- Right Side (Opponent) -->
      <div class="flex-1 flex flex-col items-center justify-center border-l border-white/5 p-8 relative">
        <div class="w-24 h-24 rounded-full bg-blue-500/20 border-4 border-blue-500 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Opponent" class="w-20 h-20 rounded-full" />
        </div>
        <h2 class="text-2xl font-black mb-1">Alex (Opponent)</h2>
        <p class="text-blue-400 text-sm font-bold tracking-widest uppercase mb-8">Score: <span class="text-3xl text-white ml-2" id="arena-p2-score">1,080</span></p>
        
        <div class="w-full max-w-xs space-y-2">
          <div class="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div class="h-full bg-blue-500 rounded-full transition-all" style="width: 50%"></div>
          </div>
          <div class="text-left text-[10px] font-bold text-white/50 uppercase">Streak x1</div>
        </div>
      </div>

    </div>

    <!-- Bottom Action Bar -->
    <div class="relative z-10 p-6 flex justify-center border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div class="flex gap-2">
        <button class="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[10px] font-bold uppercase tracking-widest border border-white/10 transition-colors">Emote 👏</button>
        <button class="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[10px] font-bold uppercase tracking-widest border border-white/10 transition-colors">Emote 🔥</button>
        <button class="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[10px] font-bold uppercase tracking-widest border border-white/10 transition-colors text-rose-300">Surrender</button>
      </div>
    </div>
  </div>
  `;
});
