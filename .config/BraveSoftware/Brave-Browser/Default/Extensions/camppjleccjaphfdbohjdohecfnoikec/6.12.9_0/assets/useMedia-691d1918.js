import{r as a}from"./client-64cc3330.js";function u(o,c,s){const i=a.useCallback(e=>window.matchMedia(e),[]),t=a.useMemo(()=>o.map(i),[o,i]),r=a.useCallback(()=>{const e=t.findIndex(n=>n.matches);return(c==null?void 0:c[e])||s},[c,s,t]),[d,m]=a.useState(r);return a.useEffect(()=>{const e=()=>m(r);return t.forEach(n=>n.addEventListener("change",e)),()=>t.forEach(n=>n.removeEventListener("change",e))},[r,t]),d}export{u};