"use strict";(()=>{var t,r,e,a,n,o,i=window,c=i.location,s=document,l=("undefined"!=typeof chrome&&chrome||{}).runtime.getURL("PATH/").replace("/PATH/",""),d=l.startsWith("safari-web-extension://"),m=!d&&l.startsWith("moz-extension://");e=function(e,t){return"podcasts"===t&&"https://workspace.google.com"===e&&-1!==c.pathname.indexOf("/marketplace")},a=function(){var a,e;a=function(e){"marketplaceToggleDrawer"===e?t.click():"marketplaceGoBack"===e?s.querySelector('path[d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"]').parentNode.parentNode.click():"marketplaceClearResults"===e&&s.querySelector('a[href="./marketplace/appfinder"]').click()},i.addEventListener("message",function(e){var t;if(d){if(!e.origin.toLowerCase().startsWith("safari-web-extension://"))return}else if(!(e.origin===l))return;(e.isTrusted||m)&&e.source===i.parent&&(t=(e=e.data||{}).bm_method)&&a(t,e.bm_value,e.bm_request)}),e=function(){t=s.querySelector('path[d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"]').parentNode.parentNode,r=t.parentNode.parentNode.parentNode,new MutationObserver(function(){var e,t,a="none"===r.style.display;e="marketplaceBackState",i.parent.postMessage({bm_method:e,bm_request:t,bm_value:a},l)}).observe(r,{attributeFilter:["style"],attributeOldValue:!1,attributes:!0,characterData:!1,characterDataOldValue:!1})},"complete"===s.readyState||"loaded"===s.readyState?e():i.addEventListener("load",e)},(e=>{var t,a;return!(i.top===i.self||s.documentElement instanceof SVGSVGElement)&&("object"!=typeof(t=c.ancestorOrigins)?1:(a=d?l.toLowerCase():l,1===t.length?t[0]===a:e&&2===t.length&&t[1]===a&&!t[0].endsWith(".google.com")))})(n)&&(o=(o=(n=c.search).match(/[&?]bm_cid=([\da-z-]{2,25})(?:&|$)/))&&o[1],e(origin,o,n))&&(o&&(s.documentElement.dataset.bmCid=o),a())})();