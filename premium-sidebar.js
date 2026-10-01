const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const sidebarStart = html.indexOf('<aside id="main-sidebar"');
const sidebarEnd = html.indexOf('</aside>') + 8;
let sidebar = html.substring(sidebarStart, sidebarEnd);

// 1. Revert the main wrapper classes
sidebar = sidebar.replace(/bg-gradient-to-b from-indigo-950 via-indigo-900 to-purple-950 border-r border-white\/10 flex flex-col flex-shrink-0 z-50 transition-all duration-300 text-white/g, 
  'bg-white border-r border-slate-200 flex flex-col flex-shrink-0 z-50 transition-all duration-300 text-slate-900');
sidebar = sidebar.replace(/style="box-shadow: 4px 0 32px rgba\(0,0,0,0.5\);"/g, 'style="box-shadow: 1px 0 20px rgba(0,0,0,0.03);"');

// 2. Brand Header
sidebar = sidebar.replace(/border-b border-white\/10/g, 'border-b border-slate-100');
sidebar = sidebar.replace(/font-extrabold text-white text-base/g, 'font-extrabold text-slate-900 text-base');
sidebar = sidebar.replace(/text-primary uppercase tracking-widest/g, 'text-indigo-600 uppercase tracking-widest');

// 3. Section Headers (Learn, Practice, Family, Progress)
sidebar = sidebar.replace(/text-indigo-200\/70 uppercase tracking-\[0.12em\]/g, 'text-slate-400 uppercase tracking-[0.12em]');

// 4. Nav Links
sidebar = sidebar.replace(/hover:bg-white\/10/g, 'hover:bg-slate-50');
sidebar = sidebar.replace(/group-\[\.active\]:bg-white\/20/g, 'group-[.active]:bg-indigo-50 group-[.active]:border group-[.active]:border-indigo-100/50');
sidebar = sidebar.replace(/group-\[\.active\]:text-white/g, 'group-[.active]:text-indigo-700');
sidebar = sidebar.replace(/bg-transparent text-slate-400 group-hover:text-slate-600/g, 'bg-white/10 text-white/80'); // wait
sidebar = sidebar.replace(/bg-white\/10 text-white\/80/g, 'bg-transparent text-slate-400 group-hover:text-slate-600');
sidebar = sidebar.replace(/text-indigo-200\/70/g, 'text-slate-600');
sidebar = sidebar.replace(/group-\[\.active\]:font-bold/g, 'group-[.active]:font-bold');

// 5. User Profile Footer
sidebar = sidebar.replace(/border-t border-outline-variant\/20/g, 'border-t border-slate-100');
sidebar = sidebar.replace(/border-t border-white\/10/g, 'border-t border-slate-100');
sidebar = sidebar.replace(/bg-surface-container-high/g, 'bg-slate-100');
sidebar = sidebar.replace(/text-on-surface-variant/g, 'text-slate-500');
sidebar = sidebar.replace(/text-on-surface/g, 'text-slate-900');
sidebar = sidebar.replace(/border-outline-variant\/30/g, 'border-slate-200');
sidebar = sidebar.replace(/text-white\/80/g, 'text-slate-500');

html = html.substring(0, sidebarStart) + sidebar + html.substring(sidebarEnd);
fs.writeFileSync('index.html', html);
console.log("Premium sidebar applied!");
