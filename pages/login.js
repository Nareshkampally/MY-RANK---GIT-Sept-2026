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
                <div class="text-sm font-bold text-white/80 uppercase tracking-[0.2em]">11+ Scholar Edition</div>
              </div>
            </div>
          </div>

          <div class="relative z-10 max-w-lg mt-24">
            <h1 class="text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">Master the 11+ with AI-Powered Intelligence.</h1>
            <p class="text-xl text-white/80 font-medium leading-relaxed">Join thousands of scholars preparing for top UK grammar and independent schools with adaptive learning paths and real-time proctoring.</p>
          </div>

          <div class="relative z-10">
            <div class="flex items-center gap-4 text-white/90">
              <div class="flex -space-x-3">
                <div class="w-10 h-10 rounded-full border-2 border-primary bg-blue-400"></div>
                <div class="w-10 h-10 rounded-full border-2 border-primary bg-emerald-400"></div>
                <div class="w-10 h-10 rounded-full border-2 border-primary bg-purple-400"></div>
              </div>
              <p class="text-sm font-semibold">Trusted by 10,000+ ambitious families</p>
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
              <h2 class="text-xl font-black text-on-surface tracking-tight leading-none">Learnly</h2>
            </div>
          </div>

          <div class="w-full max-w-md">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-black text-on-surface mb-2" id="auth-title">Welcome back</h2>
              <p class="text-on-surface-variant text-base" id="auth-subtitle">Sign in to continue your preparation journey.</p>
            </div>

            <!-- Error Banner -->
            <div id="auth-error" class="hidden mb-6 p-4 rounded-xl bg-error/10 border border-error/20 text-error text-sm font-medium flex items-center gap-2">
              <span class="material-symbols-outlined">error</span>
              <span id="auth-error-text">Invalid credentials.</span>
            </div>

            <form id="auth-form" class="space-y-5">
              <div>
                <label class="block text-sm font-bold text-on-surface mb-1.5 ml-1">Email Address</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span class="material-symbols-outlined text-on-surface-variant/60 text-xl">mail</span>
                  </div>
                  <input type="email" id="auth-email" required class="w-full pl-11 pr-4 py-3.5 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium" placeholder="scholar@example.com">
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between mb-1.5 ml-1">
                  <label class="block text-sm font-bold text-on-surface">Password</label>
                  <a href="#" class="text-xs font-bold text-primary hover:underline">Forgot?</a>
                </div>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span class="material-symbols-outlined text-on-surface-variant/60 text-xl">lock</span>
                  </div>
                  <input type="password" id="auth-password" required class="w-full pl-11 pr-4 py-3.5 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium" placeholder="••••••••">
                </div>
              </div>

              <button type="submit" id="auth-submit-btn" class="w-full py-3.5 bg-primary hover:bg-primary/90 text-on-primary rounded-2xl font-bold text-lg shadow-lg shadow-primary/25 transition-all active:scale-[0.98] mt-2 relative flex items-center justify-center">
                <span id="auth-submit-text">Sign In</span>
                <div id="auth-loading" class="hidden absolute right-4 w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              </button>
            </form>

            <div class="mt-8 text-center">
              <p class="text-on-surface-variant text-sm font-medium">
                <span id="auth-switch-text">Don't have an account?</span> 
                <button id="auth-switch-btn" class="text-primary font-bold hover:underline ml-1">Create one</button>
              </p>
            </div>

          </div>
        </div>
      </div>
    `;
  }

  let isSignUpMode = false;

  function init() {
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
            // Optional: Create user document in firestore here, but for now we just rely on Auth
          } else {
            await firebase.auth().signInWithEmailAndPassword(email, password);
          }
          // The onAuthStateChanged listener in router.js will handle redirecting to dashboard!
        } catch (error) {
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
