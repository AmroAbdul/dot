function injectStylesheet(e){const t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=chrome.runtime.getURL(e);const o=document.head||document.getElementsByTagName("head")[0];o&&o.appendChild(t)}function removeStylesheet(e){let t=document.querySelector('link[type="text/css"][href*="'+e+'"]');t&&t.remove()}function setDarkMode(e){e?(applyHotfixes(),injectDarkMode(),addMetaTheme()):(removeHotfixes(),removeDarkMode(),removeMetaThemeColor())}function init(){chrome.storage.sync.get("dark_mode",(function(e){setDarkMode(e.dark_mode)})),chrome.storage.sync.get("settings",(function(e){e.settings.system_theme&&setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches),e.settings.accent_theme&&updateColors(e.settings.active_color.hex);for(const[t,o]of Object.entries(e.settings.addons)){const e=t.replace(/_/g,"");o?injectStylesheet(`styles/addon${e}.css`):removeStylesheet(`styles/addon${e}.css`)}}))}function addMetaTheme(){let e=document.createElement("meta");e.name="theme-color",e.content="#303030",document.getElementsByTagName("head")[0].appendChild(e)}function removeMetaThemeColor(){let e=document.querySelector('meta[name="theme-color"]');e&&e.remove()}async function applyHotfixes(){fetch("https://calendardarkmode.me/hotfix.css",{method:"GET",cache:"no-cache",mode:"cors"}).then((e=>e.text())).then((e=>{let t=document.createElement("style");t.id="calendardarkmode-hotfix",t.textContent=e,document.head.append(t)})).catch((e=>console.error(e)))}async function removeHotfixes(){let e=document.getElementById("calendardarkmode-hotfix");e&&e.remove()}async function removeDarkMode(){["betterimages.css","variablecolors.css","darkmode.css","addondarkenweekends.css"].forEach((e=>{let t=document.querySelector('link[type="text/css"][href*="'+e+'"]');t&&t.remove()}));let e=document.querySelector('meta[name="theme-color"]');e&&e.remove()}async function injectDarkMode(){if(!document.querySelector('link[type="text/css"][href*="darkmode.css"]')){["styles/betterimages.css","styles/variablecolors.css","styles/darkmode.css","styles/addondarkenweekends.css"].forEach((e=>{if(e.startsWith("styles/addon"))return;const t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=chrome.runtime.getURL(e);const o=document.head||document.getElementsByTagName("head")[0];o&&o.appendChild(t)}))}}function blendColors(e,t,o){const n=parseInt(e.substring(1,3),16),c=parseInt(e.substring(3,5),16),s=parseInt(e.substring(5,7),16),r=parseInt(t.substring(0,2),16),a=parseInt(t.substring(2,4),16),d=parseInt(t.substring(4,6),16),m=Math.round(n*(1-o)+r*o),l=Math.round(c*(1-o)+a*o),i=Math.round(s*(1-o)+d*o);return`#${m.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}${i.toString(16).padStart(2,"0")}`}function colorMixing(e){let t={color_100:"303030",color_200:"353535",color_300:"575757",color_400:"717171",color_500:"8b8b8b",color_600:"d4d4d4"},o={primary_100:"393939",primary_200:"a1a1a1",primary_300:"EAEAEA"},n={},c=.97,s=.5;"#303030"==e&&(c=1,s=1,o={primary_100:"2B5EA1",primary_200:"2e70c5",primary_300:"c1d9ff"});for(const[o,s]of Object.entries(t))n[o]=blendColors(e,s,c);for(const[t,c]of Object.entries(o))n[t]=blendColors(e,c,s);return n}async function updateStylesheet(e){for(const[t,o]of Object.entries(e)){const o=`--${t.replace(/_/g,"-")}`,n=e[t];document.documentElement.style.setProperty(o,n)}}function updateMetaThemeColor(e){let t=document.querySelector('meta[name="theme-color"]');t&&t.remove();let o=document.createElement("meta");o.name="theme-color",o.content=e.color_100,document.getElementsByTagName("head")[0].appendChild(o)}function updateColors(e){"#"!=e[0]&&(e="#303030");const t=colorMixing(e);updateStylesheet(t),updateMetaThemeColor(t)}window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{chrome.storage.sync.get("settings",(function(t){t.settings.system_theme&&setDarkMode(e.matches)}))})),init();