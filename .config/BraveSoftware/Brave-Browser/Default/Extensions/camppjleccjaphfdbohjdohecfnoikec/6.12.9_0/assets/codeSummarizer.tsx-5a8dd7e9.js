import{c as u,j as a}from"./client-64cc3330.js";import{g as l,i as b}from"./index-6400eb41.js";import{C as f}from"./index-748a3c3d.js";import{u as h}from"./index-756b2c38.js";import{C as g}from"./index-8e3fd625.js";import{c as v}from"./index-75aa899c.js";import"./index-1a12ff06.js";import"./index-a295f481.js";import"./foyerLogo-c0f0d78f.js";import"./analytics-4a9d4e40.js";import"./useTranslation-b0b08d2e.js";import"./index-82863451.js";import"./motion-064cf623.js";import"./IconPower-deb9d0d4.js";import"./createReactComponent-3abc0bad.js";import"./hook-90290a85.js";const d=o=>{let t="";const r=new MutationObserver(()=>{location.href!==t&&(t=location.href,o())}),e={childList:!0,subtree:!0};r.observe(document.body,e)};function w({code:o}){const{blackList:t,codeSummarizer:r}=h();if(r&&!t.includes(window.location.hostname))return a.jsx(g,{children:a.jsx(f,{code:o})})}const x=async()=>{const o=await l();if(o&&(!o.misc.codeSummarizer.visible||o.misc.codeSummarizer.blackListedDomains.includes(window.location.hostname)))return;const t=()=>{document.body&&new MutationObserver(b(()=>{var s,i,m,c;const e=document.querySelectorAll("code");if(e.length>0)for(let n=0;n<e.length;n++)(!((i=(s=e[n])==null?void 0:s.previousElementSibling)!=null&&i.id)||((c=(m=e[n])==null?void 0:m.previousElementSibling)==null?void 0:c.id)!=="merlin-code-summarizer")&&e[n].offsetHeight>100&&z(p=>{e[n].insertAdjacentElement("beforebegin",p)},e[n].outerText)},50)).observe(document.body,{attributes:!0,childList:!0,subtree:!0})};t(),d(()=>{t()})},z=async(o,t)=>{const r=document.createElement("merlin-component");r.id="merlin-code-summarizer",r.className="merlin-code-summarizer";const e=r.attachShadow({mode:"open"}),s=document.createElement("style");s.textContent=`${v}
:host(#merlin-code-summarizer) {
    all: initial; /* 1st rule so subsequent properties are reset. */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.reactAppRoot{
    z-index: 1 !important;
}
`;const i=document.createElement("div");i.id="reactAppRoot",i.className="reactAppRoot",e.appendChild(s),e.appendChild(i),o(r);const m=u(i);d(()=>{m.render(a.jsx(w,{code:t}))})};x();
