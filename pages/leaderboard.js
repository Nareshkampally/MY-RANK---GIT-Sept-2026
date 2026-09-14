// Learnly 11+ / MyRank 11+ — Cohort Leaderboard & Weekly Ranks
// Stitch Screen: projects/18041835696998305413/screens/e027de155bf243ea8e29b0bb94cc90a4

LearnlyRouter.register('leaderboard', function() {
  const scholars = [
    { rank: 1, name: "Zara K.", avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&h=100&fit=crop&crop=faces", xp: "2,450 XP", sas: 139, streak: "24 Days", school: "Henrietta Barnett Target", badge: "🥇 Diamond" },
    { rank: 2, name: "Arjun P.", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces", xp: "2,180 XP", sas: 137, streak: "19 Days", school: "QE Boys Target", badge: "🥈 Platinum" },
    { rank: 3, name: "Leo M. (You)", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1Qc3G-0J8L9rm3gGyiGaPyqDHos_pYWjGOp9OUrxYQBOKEFee0wgAEVlh16TfmQNiWxt-NqWOA9qqDRvl1k4fL5wg1wUsStC9xvru1w7bUYvb8xBvFL3_5_N7dxiPrOLddmAE88mzYlHc_u2zguBI01dtegvKb9IikVtYlF2Qgf5MYRiedEBTFiJvBQrG2IgC7oZDgySOe_JrXyvQgSm1X0DHDgM09DGe70xqKgqN2-8FOuRaWwWZ8A", xp: "1,600 XP", sas: 136, streak: "17 Days", school: "QE Boys Target", badge: "🥉 Gold Scholar", isUser: true },
    { rank: 4, name: "Sophia T.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces", xp: "1,520 XP", sas: 134, streak: "15 Days", school: "St. Olave's Target", badge: "Gold" },
    { rank: 5, name: "Marcus W.", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=faces", xp: "1,440 XP", sas: 133, streak: "14 Days", school: "Wilson's Target", badge: "Silver" },
    { rank: 6, name: "Elena R.", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces", xp: "1,390 XP", sas: 131, streak: "12 Days", school: "Tiffin Girls Target", badge: "Silver" },
    { rank: 7, name: "David L.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces", xp: "1,310 XP", sas: 130, streak: "10 Days", school: "King Edward VI Target", badge: "Bronze" },
  ];

  return `
  <div class="flex flex-col w-full space-y-space-xl">
    <!-- Header -->
    <header class="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
      <div>
        <div class="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary/15 text-secondary font-label-md text-label-md mb-2">
          <span class="material-symbols-outlined text-sm">trophy</span>
          National 11+ Cohort Rankings • Calibrated SAS
        </div>
        <h1 class="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
          Cohort Leaderboard & Weekly Standings
        </h1>
        <p class="font-body-md text-body-md text-on-surface-variant">
          Live competitive rankings across 1,480 grammar school applicants based on SAS scores, mock completions, and daily streaks.
        </p>
      </div>

      <!-- Quick filters -->
      <div class="flex items-center gap-2 bg-surface-container-lowest p-1 rounded-full border border-outline-variant/30 elevation-1">
        <button class="px-4 py-1.5 rounded-full bg-primary text-on-primary text-xs font-bold shadow-sm">This Week</button>
        <button class="px-4 py-1.5 rounded-full text-on-surface-variant hover:text-on-surface text-xs font-semibold">All Time</button>
        <button class="px-4 py-1.5 rounded-full text-on-surface-variant hover:text-on-surface text-xs font-semibold">QE Cohort</button>
      </div>
    </header>

    <!-- Podium Top 3 -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-space-md items-end pt-8">
      <!-- 2nd Place -->
      <div class="bg-surface-container-lowest rounded-2xl p-space-lg elevation-1 flex flex-col items-center text-center border-t-4 border-slate-300 relative">
        <div class="w-8 h-8 rounded-full bg-slate-200 text-slate-700 font-black text-sm flex items-center justify-center absolute -top-4 shadow">2</div>
        <img src="${scholars[1].avatar}" alt="${scholars[1].name}" class="w-20 h-20 rounded-full object-cover border-4 border-slate-200 shadow-md mb-3"/>
        <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">${scholars[1].name}</h3>
        <span class="text-xs text-on-surface-variant font-medium">${scholars[1].school}</span>
        <div class="mt-3 py-1 px-3 rounded-full bg-surface-container-low text-primary text-xs font-extrabold">
          SAS ${scholars[1].sas} • ${scholars[1].xp}
        </div>
      </div>

      <!-- 1st Place (Elevated) -->
      <div class="bg-surface-container-lowest rounded-2xl p-space-xl elevation-2 flex flex-col items-center text-center border-t-4 border-amber-400 relative md:-translate-y-4 shadow-lg">
        <div class="w-10 h-10 rounded-full bg-amber-400 text-amber-950 font-black text-base flex items-center justify-center absolute -top-5 shadow-md">👑</div>
        <img src="${scholars[0].avatar}" alt="${scholars[0].name}" class="w-24 h-24 rounded-full object-cover border-4 border-amber-300 shadow-lg mb-3"/>
        <h3 class="font-headline-md text-headline-md text-on-surface font-black">${scholars[0].name}</h3>
        <span class="text-xs text-secondary font-bold">${scholars[0].school}</span>
        <div class="mt-3 py-1.5 px-4 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-black">
          SAS ${scholars[0].sas} • ${scholars[0].xp}
        </div>
        <span class="text-[11px] text-tertiary font-bold mt-1.5 flex items-center gap-1">
          <span class="material-symbols-outlined text-sm">local_fire_department</span> ${scholars[0].streak} Streak
        </span>
      </div>

      <!-- 3rd Place (Leo - User) -->
      <div class="bg-surface-container-lowest rounded-2xl p-space-lg elevation-1 flex flex-col items-center text-center border-t-4 border-amber-700 relative ring-2 ring-primary/40">
        <div class="w-8 h-8 rounded-full bg-amber-700 text-white font-black text-sm flex items-center justify-center absolute -top-4 shadow">3</div>
        <img src="${scholars[2].avatar}" alt="${scholars[2].name}" class="w-20 h-20 rounded-full object-cover border-4 border-amber-600/40 shadow-md mb-3"/>
        <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold text-primary">${scholars[2].name}</h3>
        <span class="text-xs text-on-surface-variant font-medium">${scholars[2].school}</span>
        <div class="mt-3 py-1 px-3 rounded-full bg-primary text-on-primary text-xs font-extrabold">
          SAS ${scholars[2].sas} • ${scholars[2].xp}
        </div>
      </div>
    </section>

    <!-- Complete Leaderboard Table -->
    <section class="bg-surface-container-lowest rounded-2xl p-space-lg elevation-1 space-y-space-md">
      <div class="flex items-center justify-between border-b border-outline-variant/30 pb-space-sm">
        <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Full Cohort Roster</h3>
        <span class="text-xs text-on-surface-variant font-medium">Top 7 Scholars</span>
      </div>

      <div class="space-y-2">
        ${scholars.map(s => `
        <div class="flex items-center justify-between p-3.5 rounded-xl transition-all ${s.isUser ? 'bg-primary/10 border border-primary/30' : 'bg-surface-container-low hover:bg-surface-container'}">
          <div class="flex items-center gap-4">
            <span class="w-6 text-center font-black text-sm ${s.rank <= 3 ? 'text-secondary' : 'text-on-surface-variant'}">#${s.rank}</span>
            <img src="${s.avatar}" alt="${s.name}" class="w-10 h-10 rounded-full object-cover"/>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-sm text-on-surface">${s.name}</span>
                ${s.isUser ? '<span class="px-2 py-0.5 rounded-full bg-primary text-on-primary text-[10px] font-black">YOU</span>' : ''}
              </div>
              <span class="text-xs text-on-surface-variant">${s.school}</span>
            </div>
          </div>
          <div class="flex items-center gap-6">
            <div class="text-right">
              <span class="font-black text-sm text-on-surface block">SAS ${s.sas}</span>
              <span class="text-xs text-on-surface-variant font-medium">${s.xp}</span>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-surface-container-highest text-on-surface hidden sm:inline-block">
              ${s.streak}
            </span>
          </div>
        </div>
        `).join('')}
      </div>
    </section>
  </div>
  `;
});
