"use strict";(()=>{var e,t,A=window,n=document,i="cookie",o="360-SUITE-XSRF-TOKEN=",r="APISID=";(()=>{var e;return A.top!==A.self&&("object"!=typeof(e=location.ancestorOrigins)||1===e.length&&-1!==e[0].indexOf("extension://"))})()&&(t=n[i],-1===(e=t).indexOf(o)&&(e+="; "+o+"AEQ3iEE2AAAAAAAAAAAAAAAAAARcPq6MgA:"+Date.now()),-1===t.indexOf(" "+r)&&(e+="; "+r+((t.split("-"+r)[1]||"").split(";")[0]||1)),-1===t.indexOf("S"+r)&&(e+="; S"+r+((t.split("-3P"+r)[1]||"").split(";")[0]||1)),t!==e)&&Object.defineProperty(n,i,{get:function(){return e}}),(t=document.currentScript)&&t.remove()})();