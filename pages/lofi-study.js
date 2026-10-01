// Learnly 11+ — Lofi Focus Mode / Study Room
LearnlyRouter.register('lofi-study', function() {
  return `
  <div class="fixed inset-0 z-[100] bg-[#0a0a0a] text-white overflow-hidden flex flex-col font-sans selection:bg-primary/30">
    
    <!-- Immersive Background / Video placeholder -->
    <div class="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="Lofi Background" class="w-full h-full object-cover opacity-30 grayscale saturate-50 contrast-125 mix-blend-luminosity" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/30"></div>
      
      <!-- Subtle particle/dust effect overlay -->
      <div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: radial-gradient(circle at center, transparent 0%, #000 100%);"></div>
    </div>

    <!-- Top Navigation -->
    <header class="relative z-10 flex items-center justify-between p-6 md:px-10">
      <div class="flex items-center gap-3">
        <span class="material-symbols-outlined text-primary text-2xl">headphones</span>
        <h1 class="text-xl font-bold tracking-widest uppercase opacity-80">Focus Room</h1>
      </div>
      <button class="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-xs font-bold uppercase tracking-widest backdrop-blur-md" data-navigate="dashboard">
        Exit Session
      </button>
    </header>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col md:flex-row items-center justify-center p-6 gap-12 lg:gap-24 relative z-10 w-full max-w-6xl mx-auto h-full">
      
      <!-- Left: Pomodoro Timer -->
      <div class="flex-1 flex flex-col items-center">
        <!-- Mode Switcher -->
        <div class="flex bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-sm mb-12">
          <button class="px-6 py-2 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest">Pomodoro</button>
          <button class="px-6 py-2 rounded-full text-white/50 hover:text-white transition-colors font-bold text-xs uppercase tracking-widest">Short Break</button>
          <button class="px-6 py-2 rounded-full text-white/50 hover:text-white transition-colors font-bold text-xs uppercase tracking-widest">Long Break</button>
        </div>

        <!-- Huge Timer -->
        <div class="text-[8rem] md:text-[12rem] font-black leading-none tracking-tighter tabular-nums drop-shadow-2xl font-mono text-white/90">
          25:00
        </div>
        
        <!-- Timer Controls -->
        <div class="flex items-center gap-6 mt-8">
          <button class="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all backdrop-blur-md">
            <span class="material-symbols-outlined text-2xl">replay</span>
          </button>
          <button class="w-20 h-20 rounded-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center transition-all shadow-[0_0_40px_rgba(var(--primary-rgb),0.5)] scale-110">
            <span class="material-symbols-outlined text-4xl">play_arrow</span>
          </button>
          <button class="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all backdrop-blur-md">
            <span class="material-symbols-outlined text-2xl">skip_next</span>
          </button>
        </div>
      </div>

      <!-- Right: Tasks & Lofi Player -->
      <div class="w-full md:w-80 flex flex-col gap-6">
        
        <!-- Lofi Player Box -->
        <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div class="flex items-center justify-between mb-4 relative z-10">
            <div class="flex items-center gap-2">
              <div class="flex gap-0.5 items-end h-4">
                <div class="w-1 bg-primary rounded-t-sm h-full animate-[bounce_1s_infinite]"></div>
                <div class="w-1 bg-primary rounded-t-sm h-2/3 animate-[bounce_1.2s_infinite]"></div>
                <div class="w-1 bg-primary rounded-t-sm h-1/2 animate-[bounce_0.8s_infinite]"></div>
                <div class="w-1 bg-primary rounded-t-sm h-4/5 animate-[bounce_1.5s_infinite]"></div>
              </div>
              <span class="text-xs font-bold uppercase tracking-widest text-primary">Now Playing</span>
            </div>
            <button class="text-white/50 hover:text-white">
              <span class="material-symbols-outlined text-lg">volume_up</span>
            </button>
          </div>
          
          <div class="relative z-10">
            <h3 class="font-bold text-lg leading-tight mb-1">Midnight Study Session</h3>
            <p class="text-xs text-white/50 mb-4">Lofi Girl Radio • Chill Beats</p>
            
            <div class="flex items-center gap-4">
              <button class="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
                <span class="material-symbols-outlined">pause</span>
              </button>
              <button class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors">
                <span class="material-symbols-outlined">skip_next</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Focus Tasks -->
        <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex-1">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-sm uppercase tracking-widest opacity-80">Session Goals</h3>
            <button class="text-primary hover:text-primary/80">
              <span class="material-symbols-outlined text-lg">add_task</span>
            </button>
          </div>
          
          <div class="space-y-3">
            <label class="flex items-start gap-3 p-3 rounded-[2.5rem] bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
              <input type="checkbox" class="mt-1 w-4 h-4 rounded border-white/20 bg-transparent text-primary focus:ring-primary focus:ring-offset-0" />
              <div>
                <div class="text-sm font-bold opacity-90">Maths Paper 4 (First Half)</div>
                <div class="text-[10px] opacity-50 mt-0.5">Est. 2 Pomodoros</div>
              </div>
            </label>
            
            <label class="flex items-start gap-3 p-3 rounded-[2.5rem] bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors opacity-50">
              <input type="checkbox" checked class="mt-1 w-4 h-4 rounded border-white/20 bg-transparent text-primary focus:ring-primary focus:ring-offset-0" />
              <div class="line-through">
                <div class="text-sm font-bold">Review Mistake Vault</div>
                <div class="text-[10px] mt-0.5">Completed</div>
              </div>
            </label>
          </div>
        </div>
        
      </div>
    </div>
    
  </div>
  `;
});
