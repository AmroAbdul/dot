import{a as n,d as l}from"./debounce-c70d88e0.js";var g="Expected a function";function f(a,t,r){var e=!0,i=!0;if(typeof a!="function")throw new TypeError(g);return n(r)&&(e="leading"in r?!!r.leading:e,i="trailing"in r?!!r.trailing:i),l(a,t,{leading:e,maxWait:t,trailing:i})}export{f as t};