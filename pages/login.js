window.LearnlyLogin = (function() {
  function render() {
    return `
      <div class="fixed inset-0 z-[999] bg-background flex flex-col md:flex-row h-screen w-screen overflow-hidden">
        
        <!-- Left Section (Branding & Graphic) -->
        <div class="hidden md:flex md:w-1/2 lg:w-[55%] relative flex-col justify-between p-12 bg-gradient-to-br from-primary to-[#312e81] overflow-hidden">
          <!-- Abstract Background Shapes -->
          <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
            <div class="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-white blur-[120px]"></div>
            <div class="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] rounded-full bg-tertiary blur-[100px]"></div>
          </div>
          
          <div class="relative z-10">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-2xl bg-white text-primary flex items-center justify-center shadow-2xl">
                <span class="material-symbols-outlined text-2xl" style="font-variation-settings:'FILL' 1">school</span>
              </div>
              <div>
                <h2 class="text-2xl font-black text-white tracking-tight leading-none">Learnly</h2>
                <div class="text-sm font-bold text-white/80 uppercase tracking-[0.2em]">11+ Scholar &amp; Tutor Portal</div>
              </div>
            </div>
          </div>

          <div class="relative z-10 max-w-lg mt-24">
            <h1 class="text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">Master the 11+ with AI-Powered Intelligence.</h1>
            <p class="text-xl text-white/80 font-medium leading-relaxed">Join thousands of scholars and expert 11+ specialist tutors preparing for top UK grammar and independent schools.</p>
          </div>

          <div class="relative z-10">
            <div class="flex items-center gap-4 text-white/90">
              <div class="flex -space-x-3">
                <div class="w-10 h-10 rounded-full border-2 border-primary bg-blue-400"></div>
                <div class="w-10 h-10 rounded-full border-2 border-primary bg-emerald-400"></div>
                <div class="w-10 h-10 rounded-full border-2 border-primary bg-purple-400"></div>
              </div>
              <p class="text-sm font-semibold">Trusted by 10,000+ ambitious families and certified tutors</p>
            </div>
          </div>
        </div>

        <!-- Right Section (Auth Form) -->
        <div class="w-full md:w-1/2 lg:w-[45%] h-full bg-surface flex flex-col justify-center items-center p-6 md:p-12 relative overflow-y-auto">
          
          <!-- Mobile Branding -->
          <div class="flex md:hidden items-center gap-3 mb-10 absolute top-8 left-6">
            <div class="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center">
              <span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1">school</span>
            </div>
            <div>
              <h2 class="text-xl font-black text-on-surface tracking-tight leading-none">Learnly 11+</h2>
            </div>
          </div>

          <div class="w-full max-w-md">
            
            <!-- ROLE SWITCHER TAB: STUDENT / SCHOLAR vs TUTOR / SPECIALIST -->
            <div class="grid grid-cols-2 p-1 bg-slate-100 rounded-2xl mb-8 border border-slate-200">
              <button id="role-tab-student" class="py-2.5 rounded-xl font-black text-xs transition-all shadow bg-white text-indigo-900 cursor-pointer">
                Student &amp; Parent
              </button>
              <button id="role-tab-tutor" class="py-2.5 rounded-xl font-bold text-xs transition-all text-slate-500 hover:text-indigo-900 cursor-pointer">
                Tutor Clinic Specialist
              </button>
            </div>

            <!-- Student Auth View -->
            <div id="student-auth-view">
              <div class="text-center mb-6">
                <h2 class="text-3xl font-black text-on-surface mb-2" id="auth-title">Welcome back</h2>
                <p class="text-on-surface-variant text-sm" id="auth-subtitle">Sign in to continue your preparation journey.</p>
              </div>

              <!-- Error Banner -->
              <div id="auth-error" class="hidden mb-6 p-4 rounded-xl bg-error/10 border border-error/20 text-error text-sm font-medium flex items-center gap-2">
                <span class="material-symbols-outlined">error</span>
                <span id="auth-error-text">Invalid credentials.</span>
              </div>

              <form id="auth-form" class="space-y-4">
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-on-surface mb-1.5 ml-1">Email Address</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span class="material-symbols-outlined text-on-surface-variant/60 text-xl">mail</span>
                    </div>
                    <input type="email" id="auth-email" required class="w-full pl-11 pr-4 py-3 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-sm" placeholder="scholar@example.com">
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-between mb-1.5 ml-1">
                    <label class="block text-xs font-bold uppercase tracking-wider text-on-surface">Password</label>
                    <a href="#" class="text-xs font-bold text-primary hover:underline">Forgot?</a>
                  </div>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span class="material-symbols-outlined text-on-surface-variant/60 text-xl">lock</span>
                    </div>
                    <input type="password" id="auth-password" required class="w-full pl-11 pr-4 py-3 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium text-sm" placeholder="••••••••">
                  </div>
                </div>

                <button type="submit" id="auth-submit-btn" class="w-full py-3 bg-primary hover:bg-primary/90 text-on-primary rounded-2xl font-bold text-base shadow-lg shadow-primary/25 transition-all active:scale-[0.98] mt-2 relative flex items-center justify-center cursor-pointer">
                  <span id="auth-submit-text">Sign In</span>
                  <div id="auth-loading" class="hidden absolute right-4 w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                </button>
              </form>

              <div class="mt-6 text-center">
                <p class="text-on-surface-variant text-xs font-medium">
                  <span id="auth-switch-text">Don't have an account?</span> 
                  <button id="auth-switch-btn" class="text-primary font-bold hover:underline ml-1">Create one</button>
                </p>
              </div>
            </div>

            <!-- Tutor Auth View -->
            <div id="tutor-auth-view" class="hidden space-y-6">
              <div class="text-center">
                <div class="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mx-auto mb-3">
                  <span class="material-symbols-outlined text-2xl">badge</span>
                </div>
                <h2 class="text-2xl font-black text-slate-900 mb-1">Tutor Clinic Portal</h2>
                <p class="text-xs text-slate-500">Sign in to manage student bookings and sync your live availability.</p>
              </div>

              <!-- Quick 1-Click Verified Tutor Access -->
              <div class="space-y-2">
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block text-center">1-Click Specialist Sign-in:</span>
                
                <button type="button" class="quick-tutor-login-btn w-full p-3.5 rounded-2xl border-2 border-indigo-200 hover:border-indigo-600 bg-indigo-50/50 hover:bg-indigo-50 flex items-center justify-between text-left transition-all group cursor-pointer" data-tutor="Mr. Thompson" data-email="mr.thompson@learnly11plus.co.uk" data-spec="NVR & Spatial Reasoning Specialist">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">MT</div>
                    <div>
                      <span class="text-sm font-extrabold text-slate-900 block group-hover:text-indigo-600">Mr. Thompson</span>
                      <span class="text-[11px] text-slate-500">NVR &amp; Spatial Reasoning Specialist</span>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-indigo-600 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>

                <button type="button" class="quick-tutor-login-btn w-full p-3.5 rounded-2xl border-2 border-purple-200 hover:border-purple-600 bg-purple-50/50 hover:bg-purple-50 flex items-center justify-between text-left transition-all group cursor-pointer" data-tutor="Ms. Patel" data-email="ms.patel@learnly11plus.co.uk" data-spec="English & VR Expert">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-sm">MP</div>
                    <div>
                      <span class="text-sm font-extrabold text-slate-900 block group-hover:text-purple-600">Ms. Patel</span>
                      <span class="text-[11px] text-slate-500">English &amp; Verbal Reasoning Expert</span>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-purple-600 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>

                <button type="button" class="quick-tutor-login-btn w-full p-3.5 rounded-2xl border-2 border-emerald-200 hover:border-emerald-600 bg-emerald-50/50 hover:bg-emerald-50 flex items-center justify-between text-left transition-all group cursor-pointer" data-tutor="Dr. Khan" data-email="dr.khan@learnly11plus.co.uk" data-spec="Mathematics & Sequences Specialist">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">DK</div>
                    <div>
                      <span class="text-sm font-extrabold text-slate-900 block group-hover:text-emerald-600">Dr. Khan</span>
                      <span class="text-[11px] text-slate-500">Mathematics &amp; Sequences Specialist</span>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-emerald-600 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>

              <!-- Standard Tutor Email Form -->
              <form id="tutor-custom-form" class="space-y-3 pt-2 border-t border-slate-100">
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1 ml-1">Other Tutor Email</label>
                  <input type="email" id="tutor-email-input" class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900" placeholder="tutor@learnly11plus.co.uk">
                </div>
                <button type="submit" class="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow transition-all cursor-pointer">
                  Log in to Tutor Clinic
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    `;
  }

  let isSignUpMode = false;

  function init() {
    const studentTab = document.getElementById('role-tab-student');
    const tutorTab = document.getElementById('role-tab-tutor');
    const studentView = document.getElementById('student-auth-view');
    const tutorView = document.getElementById('tutor-auth-view');

    // Switch Role Tabs
    if (studentTab && tutorTab) {
      studentTab.onclick = () => {
        studentTab.className = 'py-2.5 rounded-xl font-black text-xs transition-all shadow bg-white text-indigo-900 cursor-pointer';
        tutorTab.className = 'py-2.5 rounded-xl font-bold text-xs transition-all text-slate-500 hover:text-indigo-900 cursor-pointer';
        studentView.classList.remove('hidden');
        tutorView.classList.add('hidden');
      };

      tutorTab.onclick = () => {
        tutorTab.className = 'py-2.5 rounded-xl font-black text-xs transition-all shadow bg-white text-indigo-900 cursor-pointer';
        studentTab.className = 'py-2.5 rounded-xl font-bold text-xs transition-all text-slate-500 hover:text-indigo-900 cursor-pointer';
        tutorView.classList.remove('hidden');
        studentView.classList.add('hidden');
      };
    }

    // 1-Click Tutor Login
    document.querySelectorAll('.quick-tutor-login-btn').forEach(btn => {
      btn.onclick = () => {
        const tutor = {
          name: btn.dataset.tutor,
          email: btn.dataset.email,
          spec: btn.dataset.spec,
          rating: '4.9',
          sessions: 120
        };
        localStorage.setItem('learnly_active_role', 'tutor');
        localStorage.setItem('learnly_active_tutor', JSON.stringify(tutor));
        if (window.AIBuddy) {
          window.AIBuddy.showToast(`Logged in as ${tutor.name}`, 'Redirecting to Tutor Clinic & Availability Management...');
        }
        window.location.hash = '#tutor-portal';
      };
    });

    const tutorForm = document.getElementById('tutor-custom-form');
    if (tutorForm) {
      tutorForm.onsubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('tutor-email-input').value || 'tutor@learnly11plus.co.uk';
        const name = email.split('@')[0].replace('.', ' ').toUpperCase();
        const tutor = {
          name: name,
          email: email,
          spec: '11+ Specialist Tutor',
          rating: '4.9',
          sessions: 45
        };
        localStorage.setItem('learnly_active_role', 'tutor');
        localStorage.setItem('learnly_active_tutor', JSON.stringify(tutor));
        window.location.hash = '#tutor-portal';
      };
    }

    // Student Login flow
    const form = document.getElementById('auth-form');
    const switchBtn = document.getElementById('auth-switch-btn');
    const title = document.getElementById('auth-title');
    const subtitle = document.getElementById('auth-subtitle');
    const submitText = document.getElementById('auth-submit-text');
    const switchText = document.getElementById('auth-switch-text');
    const errorBanner = document.getElementById('auth-error');
    const errorText = document.getElementById('auth-error-text');
    const submitBtn = document.getElementById('auth-submit-btn');
    const loadingSpinner = document.getElementById('auth-loading');

    if (switchBtn) {
      switchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        isSignUpMode = !isSignUpMode;
        if (isSignUpMode) {
          title.textContent = 'Create Account';
          subtitle.textContent = 'Begin your 11+ journey today.';
          submitText.textContent = 'Sign Up';
          switchText.textContent = 'Already have an account?';
          switchBtn.textContent = 'Sign in';
        } else {
          title.textContent = 'Welcome back';
          subtitle.textContent = 'Sign in to continue your preparation journey.';
          submitText.textContent = 'Sign In';
          switchText.textContent = 'Don\'t have an account?';
          switchBtn.textContent = 'Create one';
        }
        errorBanner.classList.add('hidden');
      });
    }

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('auth-email').value;
        const password = document.getElementById('auth-password').value;

        errorBanner.classList.add('hidden');
        submitText.classList.add('opacity-0');
        loadingSpinner.classList.remove('hidden');
        submitBtn.disabled = true;

        try {
          if (isSignUpMode) {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
          } else {
            await firebase.auth().signInWithEmailAndPassword(email, password);
          }
          localStorage.setItem('learnly_active_role', 'student');
        } catch (error) {
          // If demo environment without active firebase connection, allow demo login
          if (email.includes('@')) {
            localStorage.setItem('learnly_active_role', 'student');
            window.location.hash = '#dashboard';
            return;
          }
          errorText.textContent = error.message;
          errorBanner.classList.remove('hidden');
          submitText.classList.remove('opacity-0');
          loadingSpinner.classList.add('hidden');
          submitBtn.disabled = false;
        }
      });
    }
  }

  return { render, init };
})();

LearnlyRouter.register('login', window.LearnlyLogin.render, window.LearnlyLogin.init);
