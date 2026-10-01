// Learnly 11+ — AI Learning Hub
LearnlyRouter.register('ai-learning', function() {
    return `
    <div class="space-y-space-xl pb-12 w-full">
      <!-- Header -->
      <header class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-2">
            <span class="material-symbols-outlined text-[14px]">smart_toy</span>
            Learnly AI Intelligence
          </div>
          <h1 class="text-3xl text-on-surface font-extrabold tracking-tight">
            AI Learning Centre
          </h1>
          <p class="text-sm font-medium text-outline-variant mt-1">
            Personalized AI-driven interactive lessons and feedback.
          </p>
        </div>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- AI Tutor Chat Interface -->
        <div class="lg:col-span-2 bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/30 shadow-sm flex flex-col min-h-[500px]">
          <div class="flex items-center justify-between mb-6 pb-4 border-b border-outline-variant/20">
            <h2 class="text-lg font-bold text-on-surface flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">forum</span>
              Socratic AI Tutor
            </h2>
            <span class="px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-600 text-xs font-bold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Online
            </span>
          </div>
          
          <div class="flex-1 overflow-y-auto space-y-4 mb-4" id="ai-chat-history">
            <!-- AI Message -->
            <div class="flex gap-3 max-w-[85%]">
              <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-white text-sm">smart_toy</span>
              </div>
              <div class="p-3 rounded-[2.5rem] rounded-tl-none bg-surface-container-low text-on-surface text-sm">
                Hello Leo! I noticed you struggled with <strong>3D Spatial Nets</strong> in Mock #04. Would you like me to walk you through a visualization technique?
              </div>
            </div>
            <!-- User Message -->
            <div class="flex gap-3 max-w-[85%] ml-auto justify-end">
              <div class="p-3 rounded-[2.5rem] rounded-tr-none bg-primary text-on-primary text-sm">
                Yes please, I always get confused when folding them.
              </div>
            </div>
            <!-- AI Message -->
            <div class="flex gap-3 max-w-[85%]">
              <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-white text-sm">smart_toy</span>
              </div>
              <div class="p-3 rounded-[2.5rem] rounded-tl-none bg-surface-container-low text-on-surface text-sm space-y-2">
                <p>No problem! The trick is to pick a "base" face first.</p>
                <p>Imagine placing the net flat on a table. Choose the central square as the base. If you fold the top flap up, what position does it take?</p>
                <div class="w-full h-32 bg-white rounded-lg border border-outline-variant/20 mt-2 flex items-center justify-center text-primary font-bold">
                  [ Interactive 3D Model Rendering ]
                </div>
              </div>
            </div>
          </div>

          <!-- Chat Input -->
          <div class="relative flex items-center bg-surface-container-low border border-outline-variant/30 rounded-full p-1 focus-within:border-primary transition-colors">
            <label class="w-10 h-10 rounded-full hover:bg-surface flex items-center justify-center cursor-pointer text-outline-variant hover:text-primary transition-colors shrink-0" title="Upload question image">
              <input type="file" id="ai-image-upload" class="hidden" accept="image/*" />
              <span class="material-symbols-outlined text-[20px]">add_photo_alternate</span>
            </label>
            <input type="text" id="ai-chat-input" class="flex-1 bg-transparent py-2 px-2 text-sm text-on-surface focus:outline-none" placeholder="Ask AI Tutor anything, or upload a picture of a question...">
            <button id="ai-chat-send" class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-105 transition-transform shrink-0 mr-1 shadow-sm">
              <span class="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>

        <!-- AI Recommended Modules -->
        <div class="flex flex-col gap-6">
          
          <div class="bg-gradient-to-br from-[#1e1b4b] to-[#312e81] rounded-3xl p-6 shadow-xl text-white relative overflow-hidden">
            <div class="absolute -right-12 -top-12 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
            <h3 class="text-sm font-bold opacity-80 mb-1 flex items-center gap-2">
              <span class="material-symbols-outlined text-sm">auto_awesome</span>
              AI Suggested Module
            </h3>
            <h2 class="text-xl font-extrabold mb-4">Spatial Mastery</h2>
            <p class="text-sm opacity-90 mb-6">A dynamic 15-minute interactive lesson focusing entirely on 3D Net rotations.</p>
            <button class="w-full py-2.5 rounded-xl bg-white text-indigo-900 font-bold hover:bg-gray-100 transition-colors shadow-lg">Start Lesson</button>
          </div>

          <div class="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/30 shadow-sm">
            <h3 class="font-bold text-on-surface mb-4">Your AI Knowledge Graph</h3>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span class="text-on-surface">Maths Algorithms</span>
                  <span class="text-primary">92%</span>
                </div>
                <div class="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div class="h-full bg-primary rounded-full w-[92%]"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span class="text-on-surface">Lexical Semantics</span>
                  <span class="text-primary">85%</span>
                </div>
                <div class="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div class="h-full bg-primary rounded-full w-[85%]"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span class="text-on-surface">Visual Logic</span>
                  <span class="text-orange-500">68%</span>
                </div>
                <div class="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div class="h-full bg-orange-500 rounded-full w-[68%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}, function() {
    const uploadInput = document.getElementById('ai-image-upload');
    const chatHistory = document.getElementById('ai-chat-history');
    
    function appendUserImage() {
      const msg = document.createElement('div');
      msg.className = 'flex gap-3 max-w-[85%] ml-auto justify-end page-enter';
      msg.innerHTML = `
        <div class="p-3 rounded-[2.5rem] rounded-tr-none bg-primary text-on-primary text-sm flex items-center gap-2">
          <span class="material-symbols-outlined text-xl">image</span>
          <span>Uploaded question image</span>
        </div>
      `;
      chatHistory.appendChild(msg);
      chatHistory.scrollTop = chatHistory.scrollHeight;
      
      // Simulate AI response
      setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'flex gap-3 max-w-[85%] page-enter';
        aiMsg.innerHTML = `
          <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-white text-sm">smart_toy</span>
          </div>
          <div class="p-3 rounded-[2.5rem] rounded-tl-none bg-surface-container-low text-on-surface text-sm space-y-2">
            <p>I see the question you uploaded! It looks like a <strong>Fractions and Percentages</strong> problem.</p>
            <p>Would you like a step-by-step hint, or the final solution?</p>
          </div>
        `;
        chatHistory.appendChild(aiMsg);
        chatHistory.scrollTop = chatHistory.scrollHeight;
      }, 1500);
    }
    
    if (uploadInput) {
      uploadInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          appendUserImage();
          e.target.value = ''; // reset
        }
      });
    }
  }
);
