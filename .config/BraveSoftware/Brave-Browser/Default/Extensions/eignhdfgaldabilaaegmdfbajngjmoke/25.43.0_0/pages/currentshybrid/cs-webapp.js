"use strict";(()=>{var t,r,e,n,i,a,o=window,c=o.location,d=document,s=("undefined"!=typeof chrome&&chrome||{}).runtime.getURL("PATH/").replace("/PATH/",""),u=s.startsWith("safari-web-extension://");function h(e,t,r){o.parent.postMessage({bm_method:e,bm_request:r,bm_value:t},s)}function l(){var e=c.pathname;t!==e&&h("currentshybridUpdateView",(t=e).replace(r,"")),setTimeout(l,100)}function m(){var e=new UIEvent("resize");o.dispatchEvent(e)}function b(){m(),setTimeout(b,1e3)}function g(){m();var e=d.querySelector("head > title"),e=(new MutationObserver(function(){h("currentshybridPageTitle",d.title.split(" - ")[0])}).observe(e,{childList:!0}),d.querySelector('c-wiz > div[data-checked-veid][data-unchecked-veid][jslog][role="checkbox"][title][aria-checked][aria-label]'));e&&h("currentshybridWorkspaceLimit","true"===e.getAttribute("aria-checked"))}u||s.startsWith("moz-extension://"),e=function(e,t){return"currentshybrid"===t&&("https://plus.google.com"===e||"https://currents.google.com"===e)},n=function(){var e;r=c.pathname.match(/\/((?:u\/\d\/)?(?:b\/\d{18,22}\/)?).*/)[1],h("currentshybridWebsiteOrigin",c.origin),l(),b(),e=g,"complete"===d.readyState||"loaded"===d.readyState||"interactive"===d.readyState?e():d.addEventListener("DOMContentLoaded",e)},(e=>{var t,r;return!(o.top===o.self||d.documentElement instanceof SVGSVGElement)&&("object"!=typeof(t=c.ancestorOrigins)?1:(r=u?s.toLowerCase():s,1===t.length?t[0]===r:e&&2===t.length&&t[1]===r&&!t[0].endsWith(".google.com")))})(i)&&(a=(a=(i=c.search).match(/[&?]bm_cid=([\da-z-]{2,25})(?:&|$)/))&&a[1],e(origin,a,i))&&(a&&(d.documentElement.dataset.bmCid=a),n())})();