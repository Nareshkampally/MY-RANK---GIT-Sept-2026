const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Colors palette for different sections
const colors = [
  'indigo', 'blue', 'emerald', 'amber', 'rose', 'purple', 
  'teal', 'orange', 'cyan', 'pink', 'fuchsia', 'lime', 'sky', 'violet'
];
let colorIndex = 0;

// Regex to find all nav links inside the nav menu
const regex = /<a href="([^"]+)" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm"( data-path="[^"]+")?>\s*<span class="material-symbols-outlined text-lg"([^>]*)>([^<]+)<\/span>\s*<span>([^<]+)<\/span>/g;

html = html.replace(regex, (match, href, dataPath, spanAttrs, iconName, label) => {
  const color = colors[colorIndex % colors.length];
  colorIndex++;
  
  // Return the new structure
  return `<a href="${href}" class="nav-link flex items-center gap-3 px-3 py-2 rounded-xl text-sm group transition-all hover:bg-surface-container-low"${dataPath || ''}>
            <div class="w-8 h-8 rounded-lg bg-${color}-50 text-${color}-600 flex items-center justify-center shrink-0 group-[.active]:bg-${color}-500 group-[.active]:text-white group-hover:scale-110 transition-all shadow-sm">
              <span class="material-symbols-outlined text-[1.1rem]"${spanAttrs}>${iconName}</span>
            </div>
            <span class="group-[.active]:font-bold group-[.active]:text-on-surface text-on-surface-variant transition-colors">${label}</span>`;
});

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Sidebar updated with colorful icons!');
