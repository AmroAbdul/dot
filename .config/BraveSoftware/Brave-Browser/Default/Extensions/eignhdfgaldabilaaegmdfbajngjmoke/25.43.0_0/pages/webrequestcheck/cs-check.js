"use strict";(()=>{var e,t,o,n,s=window,a=s.location,r=document,i=("undefined"!=typeof chrome&&chrome||{}).runtime.getURL("PATH/").replace("/PATH/",""),c=i.startsWith("safari-web-extension://");c||i.startsWith("moz-extension://"),e=function(e){return"https://pay.google.com"===e&&a.pathname.startsWith("/webrequestcheck_")},t=function(){s.parent.postMessage({bm_method:"webrequestcheck",bm_request:void 0,bm_value:void 0},i)},(e=>{var t,o;return!(s.top===s.self||r.documentElement instanceof SVGSVGElement)&&("object"!=typeof(t=a.ancestorOrigins)?1:(o=c?i.toLowerCase():i,1===t.length?t[0]===o:e&&2===t.length&&t[1]===o&&!t[0].endsWith(".google.com")))})(o)&&(n=(n=(o=a.search).match(/[&?]bm_cid=([\da-z-]{2,25})(?:&|$)/))&&n[1],e(origin,n,o))&&(n&&(r.documentElement.dataset.bmCid=n),t())})();