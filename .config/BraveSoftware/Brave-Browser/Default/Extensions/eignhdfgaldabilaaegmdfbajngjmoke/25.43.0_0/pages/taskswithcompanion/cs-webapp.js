"use strict";(()=>{var t,e,n,a,i=window,r=i.location,o=document,s=("undefined"!=typeof chrome&&chrome||{}).runtime.getURL("PATH/").replace("/PATH/",""),l=s.startsWith("safari-web-extension://");function x(t,e){t=e.lastIndexOf(t);return e.slice(0,Math.max(0,t))}function c(){for(var h,t,u=r.pathname,f=-1!==u.indexOf("/room/"),p=[],v="",g=o.body.textContent.split("AF_initDataCallback("),e=function(){try{var t=[],e=(e=g[b]).split(");<\/script>")[0];c=" data:",m=(d=e).indexOf(c),e=x("sideChannel:",e=d.slice(Math.max(0,m+c.length))),e=x("]",e)+"]";for(var n=JSON.parse(e)[1],a=n[1][1],o=(h=a[0],a[2]),i=2;i<n.length;i++)try{var r=n[i][3],s=r[0],l=r[1][0];t.push({id:"list/"+s,label:l})}catch(t){}if(0===t.length)return 0;p=t.sort(function(t,e){var n=t.id,a=e.id,i=o.indexOf(n),r=o.indexOf(a);return-1!==i&&-1!==r?i<r?-1:1:(i=t.label,r=e.label,(t=i.toLowerCase())!==(e=r.toLowerCase())?t<e?-1:1:i!==r?i<r?-1:1:n<a?-1:1)})}catch(t){return 0}var c,d,m;return h&&(v="list/"+h),f?v="room/"+u.split("/room/")[1].split("/")[0]:-1!==u.indexOf("/list/")&&(a=u.split("/list/")[1].split("/")[0])&&(v="list/"+a),{v:{tasklists:f?[]:p,activeView:v}}},b=0;b<g.length;b++)if(0!==(t=e())&&t)return t.v;return{tasklists:f?[]:p,activeView:v}}l||s.startsWith("moz-extension://"),t=function(t,e){return"taskswithcompanion"===e&&"https://tasks.google.com"===t},e=function(){var t;t=function(){var t,e,n=c();t="taskswithcompanionData",i.parent.postMessage({bm_method:t,bm_request:e,bm_value:n},s)},"complete"===o.readyState||"loaded"===o.readyState||"interactive"===o.readyState?t():o.addEventListener("DOMContentLoaded",t)},(t=>{var e,n;return!(i.top===i.self||o.documentElement instanceof SVGSVGElement)&&("object"!=typeof(e=r.ancestorOrigins)?1:(n=l?s.toLowerCase():s,1===e.length?e[0]===n:t&&2===e.length&&e[1]===n&&!e[0].endsWith(".google.com")))})(n)&&(a=(a=(n=r.search).match(/[&?]bm_cid=([\da-z-]{2,25})(?:&|$)/))&&a[1],t(origin,a,n))&&(a&&(o.documentElement.dataset.bmCid=a),e())})();