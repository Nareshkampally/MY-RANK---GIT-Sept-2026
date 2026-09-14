// Learnly 11+ — Smart Homework Scanner
LearnlyRouter.register('homework-scanner', function() {
  return `
  <div class="space-y-space-xl min-h-screen relative" id="scanner-container">
    
    <!-- HEADER -->
    <section class="flex items-center justify-between">
      <div>
        <h1 class="font-headline-lg text-headline-lg text-on-surface flex items-center gap-2">
          <span class="material-symbols-outlined text-primary text-4xl">document_scanner</span>
          Smart Homework Scanner
        </h1>
        <p class="font-body-md text-body-md text-on-surface-variant">Upload worksheets or snap a photo. Our AI will digitize it instantly.</p>
      </div>
    </section>

    <!-- STAGE 1: UPLOAD / CAMERA UI -->
    <div id="scanner-stage-1" class="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
      
      <!-- Upload Dropzone -->
      <button id="upload-btn" class="group relative bg-surface-container-lowest rounded-3xl p-space-2xl shadow-sm border-2 border-dashed border-outline-variant hover:border-primary transition-all flex flex-col items-center justify-center text-center cursor-pointer min-h-[400px] overflow-hidden" type="button">
        <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="w-20 h-20 rounded-full bg-primary-container text-on-primary flex items-center justify-center mb-space-md group-hover:scale-110 transition-transform">
          <span class="material-symbols-outlined text-4xl">upload_file</span>
        </div>
        <h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Upload Worksheet</h3>
        <p class="font-body-md text-body-md text-on-surface-variant max-w-xs">Drag and drop a PDF, PNG, or JPG file here, or click to browse.</p>
      </button>

      <!-- Camera Capture -->
      <button id="camera-btn" class="group relative bg-surface-container-lowest rounded-3xl p-space-2xl shadow-sm border-2 border-surface-container-highest hover:border-secondary transition-all flex flex-col items-center justify-center text-center cursor-pointer min-h-[400px] overflow-hidden" type="button">
        <div class="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="w-20 h-20 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-space-md group-hover:scale-110 transition-transform">
          <span class="material-symbols-outlined text-4xl">photo_camera</span>
        </div>
        <h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Use Camera</h3>
        <p class="font-body-md text-body-md text-on-surface-variant max-w-xs">Snap a quick photo of your physical worksheet using your device's camera.</p>
      </button>

    </div>

    <!-- STAGE 2: SCANNING ANIMATION (Hidden initially) -->
    <div id="scanner-stage-2" class="hidden absolute inset-0 z-10 flex flex-col items-center justify-center bg-surface-container-lowest rounded-3xl shadow-2xl overflow-hidden border border-surface-container-high min-h-[500px]">
      
      <!-- Faux Worksheet Background -->
      <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/notebook-dark.png')] bg-repeat"></div>
      
      <!-- Scanning Laser -->
      <div class="absolute top-0 left-0 w-full h-1 bg-primary shadow-[0_0_20px_#4f46e5,0_0_40px_#4f46e5] animate-[scan_2s_ease-in-out_infinite_alternate] z-20"></div>

      <!-- AI Analysis UI -->
      <div class="relative z-30 flex flex-col items-center justify-center backdrop-blur-md bg-surface/80 p-space-xl rounded-2xl border border-outline-variant/30 shadow-xl">
        <span class="material-symbols-outlined text-primary text-6xl animate-pulse mb-space-md">view_in_ar</span>
        <h2 class="font-headline-md text-headline-md text-on-surface mb-2">Learnly AI Vision Active</h2>
        <p id="scan-status-text" class="font-mono text-sm text-primary font-bold">Extracting text & geometry...</p>
        
        <div class="w-64 h-2 bg-surface-container-highest rounded-full mt-space-lg overflow-hidden">
          <div id="scan-progress-bar" class="h-full bg-primary rounded-full w-0 transition-all duration-300"></div>
        </div>
      </div>
      
    </div>

    <!-- STAGE 3: INTERACTIVE WORKSHEET (Hidden initially) -->
    <div id="scanner-stage-3" class="hidden grid grid-cols-12 gap-space-lg h-[calc(100vh-200px)]">
      
      <!-- Left: Source Image (Faux) -->
      <div class="col-span-12 lg:col-span-5 bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-container-high overflow-hidden flex flex-col relative group">
        <div class="p-3 bg-surface-container-low border-b border-surface-container-high flex justify-between items-center z-10">
          <span class="font-label-md text-label-md text-on-surface-variant flex items-center gap-2"><span class="material-symbols-outlined text-sm">image</span> Original Upload</span>
          <button class="text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined text-sm">zoom_in</span></button>
        </div>
        <div class="flex-1 bg-[#e0e0e0] relative overflow-hidden flex items-center justify-center p-4">
          <!-- Mock Math Worksheet Image -->
          <div class="w-full h-full bg-white shadow-md flex flex-col p-6 font-serif relative">
            <h2 class="text-xl font-bold border-b-2 border-black pb-2 mb-4">Maths Practice Paper 3</h2>
            <div class="space-y-8">
              <div class="relative group/q1">
                <p>1. If x + 3 = 10, find the value of x.</p>
                <!-- AI Highlight Box -->
                <div class="absolute -inset-2 border-2 border-primary/50 bg-primary/5 rounded-lg opacity-0 group-hover/q1:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
              <div class="relative group/q2">
                <p>2. Calculate 15% of 80.</p>
                <div class="absolute -inset-2 border-2 border-primary/50 bg-primary/5 rounded-lg opacity-0 group-hover/q2:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
              <div class="relative group/q3">
                <p>3. A train departs at 14:30 and travels for 1h 45m. When does it arrive?</p>
                <div class="absolute -inset-2 border-2 border-primary/50 bg-primary/5 rounded-lg opacity-0 group-hover/q3:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </div>
            
            <!-- Overall Document Highlight Grid Overlay -->
            <div class="absolute inset-0 bg-[linear-gradient(to_right,#4f46e51a_1px,transparent_1px),linear-gradient(to_bottom,#4f46e51a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      <!-- Right: Interactive Fields -->
      <div class="col-span-12 lg:col-span-7 bg-surface-container-lowest rounded-2xl shadow-sm flex flex-col h-full">
        <!-- Action Bar -->
        <div class="p-space-md border-b border-surface-container-high flex items-center justify-between shrink-0">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-bold">3 Questions Extracted</span>
            <span class="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold text-xs"><span class="material-symbols-outlined text-[12px] align-middle">auto_awesome</span> AI Verified</span>
          </div>
          <div class="flex items-center gap-2">
            <button class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all font-label-md font-bold" type="button">
              <span class="material-symbols-outlined text-sm">download</span> Download Digital PDF
            </button>
            <button id="submit-worksheet-btn" class="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-primary text-on-primary shadow-sm hover:scale-105 transition-all font-label-md font-bold" type="button">
              Submit & Analyze
            </button>
          </div>
        </div>
        
        <!-- Questions List -->
        <div class="flex-1 overflow-y-auto p-space-lg space-y-space-md">
          
          <div class="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high focus-within:border-primary transition-all">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-on-surface shrink-0">1</div>
              <div class="flex-1">
                <p class="font-body-lg text-body-lg text-on-surface mb-3 font-medium">If x + 3 = 10, find the value of x.</p>
                <input type="text" class="w-full max-w-xs px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none font-mono" placeholder="Type your answer...">
              </div>
            </div>
          </div>

          <div class="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high focus-within:border-primary transition-all">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-on-surface shrink-0">2</div>
              <div class="flex-1">
                <p class="font-body-lg text-body-lg text-on-surface mb-3 font-medium">Calculate 15% of 80.</p>
                <div class="flex items-center gap-2">
                  <input type="text" class="w-full max-w-xs px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none font-mono" placeholder="Type your answer...">
                  <button class="w-10 h-10 rounded-lg bg-surface-container-lowest border border-outline-variant/50 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" title="Open AI Buddy Scratchpad"><span class="material-symbols-outlined text-lg">draw</span></button>
                </div>
              </div>
            </div>
          </div>

          <div class="p-space-md rounded-xl bg-surface-container-low border border-surface-container-high focus-within:border-primary transition-all">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-on-surface shrink-0">3</div>
              <div class="flex-1">
                <p class="font-body-lg text-body-lg text-on-surface mb-3 font-medium">A train departs at 14:30 and travels for 1h 45m. When does it arrive?</p>
                <div class="flex items-center gap-2">
                  <input type="text" class="w-full max-w-xs px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none font-mono" placeholder="HH:MM (24-hour format)">
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <!-- STAGE 4: ANALYSIS RESULTS (Hidden initially) -->
    <div id="scanner-stage-4" class="hidden bg-surface-container-lowest rounded-3xl p-space-2xl shadow-xl text-center max-w-2xl mx-auto relative overflow-hidden mt-space-xl">
       <div class="absolute -right-16 -top-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
       <span class="material-symbols-outlined text-6xl text-primary mb-space-md" style="font-variation-settings: 'FILL' 1;">assignment_turned_in</span>
       <h2 class="font-headline-lg text-headline-lg text-on-surface font-extrabold mb-2">Worksheet Graded!</h2>
       <p class="font-body-lg text-body-lg text-on-surface-variant mb-space-lg">Our AI has marked your answers against the extracted criteria.</p>
       
       <div class="flex items-center justify-center gap-space-lg mb-space-xl">
         <div class="text-center">
           <span class="font-headline-xl text-headline-xl text-primary font-black block leading-none mb-1">3/3</span>
           <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest font-bold">Score</span>
         </div>
         <div class="h-12 w-px bg-outline-variant/30"></div>
         <div class="text-center flex flex-col items-center">
           <span class="flex items-center justify-center w-12 h-12 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold text-lg mb-1">+45</span>
           <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest font-bold">XP Earned</span>
         </div>
       </div>

       <div class="flex justify-center gap-space-md">
         <button id="scan-another-btn" class="px-space-lg py-2.5 rounded-full bg-surface-container-high text-primary font-label-lg text-label-lg font-bold hover:bg-surface-container transition-all">Scan Another</button>
         <button class="px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md hover:scale-105 transition-transform" data-navigate="dashboard">Back to Dashboard</button>
       </div>
    </div>

  </div>
  
  <style>
    @keyframes scan {
      0% { top: 0%; opacity: 1; }
      100% { top: 100%; opacity: 0.8; }
    }
  </style>
  \`;
}, function() {
  
  // DOM Elements
  const stage1 = document.getElementById('scanner-stage-1');
  const stage2 = document.getElementById('scanner-stage-2');
  const stage3 = document.getElementById('scanner-stage-3');
  const stage4 = document.getElementById('scanner-stage-4');
  
  const uploadBtn = document.getElementById('upload-btn');
  const cameraBtn = document.getElementById('camera-btn');
  const submitBtn = document.getElementById('submit-worksheet-btn');
  const scanAnotherBtn = document.getElementById('scan-another-btn');
  
  const statusText = document.getElementById('scan-status-text');
  const progressBar = document.getElementById('scan-progress-bar');

  // Scanning sequence simulation
  function startScanning() {
    stage1.classList.add('hidden');
    stage2.classList.remove('hidden');

    const statuses = [
      "Detecting document edges...",
      "Normalizing perspective & lighting...",
      "Extracting handwritten/typed text (OCR)...",
      "Identifying math formulas...",
      "Parsing question bounds & stems...",
      "Generating interactive layout..."
    ];

    let progress = 0;
    let statusIndex = 0;
    
    // Animate progress and status text
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress > 100) progress = 100;
      
      progressBar.style.width = \`\${progress}%\`;
      
      if (progress > (statusIndex * 16) && statusIndex < statuses.length) {
        statusText.textContent = statuses[statusIndex];
        statusIndex++;
      }

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          stage2.classList.add('hidden');
          stage3.classList.remove('hidden');
        }, 500);
      }
    }, 400);
  }

  // Event Listeners
  uploadBtn.onclick = () => {
    // Faux file picker trigger
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,application/pdf';
    input.onchange = (e) => {
      if (e.target.files.length > 0) startScanning();
    };
    input.click();
    
    // In case user cancels picker, we just start scanning anyway for the demo
    setTimeout(() => { if(stage1.classList.contains('hidden') === false) startScanning(); }, 1500);
  };

  cameraBtn.onclick = () => {
    // Simulated camera launch
    startScanning();
  };

  submitBtn.onclick = () => {
    // Show confetti if available
    if (typeof confetti === 'function') {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
    
    stage3.classList.add('hidden');
    stage4.classList.remove('hidden');
  };

  scanAnotherBtn.onclick = () => {
    stage4.classList.add('hidden');
    stage1.classList.remove('hidden');
    
    // Reset progress
    progressBar.style.width = '0%';
    statusText.textContent = 'Extracting text & geometry...';
  };

});
