import{r as c,a as p}from"./client-64cc3330.js";import{a as d}from"./button-5c866ab2.js";function n(){return n=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])}return t},n.apply(this,arguments)}const m=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],$=m.reduce((t,r)=>{const a=c.forwardRef((e,f)=>{const{asChild:o,...s}=e,i=o?d:r;return c.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),c.createElement(i,n({},s,{ref:f}))});return a.displayName=`Primitive.${r}`,{...t,[r]:a}},{});function v(t,r){t&&p.flushSync(()=>t.dispatchEvent(r))}export{$,n as _,v as a};