"use strict";(()=>{var o=window,r=o.location,a=document,i=("undefined"!=typeof chrome&&chrome||{}).runtime.getURL("PATH/").replace("/PATH/",""),s=i.startsWith("safari-web-extension://");s||i.startsWith("moz-extension://");var e,t,n,c,d=!1;function l(){var e,t,n=Boolean(a.querySelector('body > div:nth-child(2) > div:first-child > div:first-child > div[role="button"]:not([aria-disabled]):nth-child(2)'));d!==n&&(e="artsandcultureBackState",n=d=n,o.parent.postMessage({bm_method:e,bm_request:t,bm_value:n},i)),setTimeout(l,100)}l(),e=function(e,t){return"artsandculture"===t&&"https://artsandculture.google.com"===e},t=l,(e=>{var t,n;return!(o.top===o.self||a.documentElement instanceof SVGSVGElement)&&("object"!=typeof(t=r.ancestorOrigins)?1:(n=s?i.toLowerCase():i,1===t.length?t[0]===n:e&&2===t.length&&t[1]===n&&!t[0].endsWith(".google.com")))})(n)&&(c=(c=(n=r.search).match(/[&?]bm_cid=([\da-z-]{2,25})(?:&|$)/))&&c[1],e(origin,c,n))&&(c&&(a.documentElement.dataset.bmCid=c),t())})();