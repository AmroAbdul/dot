import{c as L,j as y,R as v}from"./client-64cc3330.js";import{D as M,g as k,S as h,P as w,U as E}from"./index-1a12ff06.js";import{L as j}from"./hook-90290a85.js";import{g as F,i as T}from"./index-6400eb41.js";import{C as U}from"./index-8e3fd625.js";import{F as W}from"./index-2469c0ce.js";import{A as _}from"./index-5fbb8478.js";import{T as A}from"./themeContext-73b6440c.js";import{q as N,a as K}from"./backend-8962bc7f.js";import{c as V}from"./index-75aa899c.js";import{P as D}from"./PersistQueryClientProvider-dcb1f9d7.js";import"./index-a295f481.js";import"./purify.es-8e338605.js";import"./index-876a044c.js";import"./button-5c866ab2.js";import"./utils-01642ffa.js";import"./useTranslation-b0b08d2e.js";import"./index-82863451.js";import"./motion-064cf623.js";import"./createLucideIcon-cc1e4b70.js";import"./index-eb167f60.js";import"./analytics-4a9d4e40.js";import"./useAsyncWithPromise-a02bc426.js";import"./useSSE-a5deda20.js";import"./languageLogoMap-4245085e.js";import"./createReactComponent-3abc0bad.js";import"./index-5f29b16d.js";import"./foyerLogo-c0f0d78f.js";import"./index-958f621a.js";import"./useSharedUserSettings-15caf5a1.js";import"./useOnClickOutside-6cd227e1.js";import"./useUserSettings-eb91a32a.js";import"./fuzzysort-6a5075ee.js";import"./IconX-f6f2534f.js";import"./IconCheck-c9ab9461.js";import"./v4-4a60fe23.js";import"./IconSend-7465868f.js";import"./IconReload-76a665f0.js";import"./IconExclamationCircle-954ba15b.js";import"./IconChevronRight-3a7ad62a.js";import"./IconLanguage-d550ce4a.js";import"./IconSettings-b145c3ad.js";import"./IconBulb-01a33b5a.js";import"./IconHeadset-4d4a643f.js";import"./useMedia-691d1918.js";function I(e){const o=[],a=[];if(!e)return{blockquotes:o,emails:[]};const t=e.parentElement.children;for(let r=0;r<t.length;r++){const i=t[r];i.classList.contains("aVla3")&&a.push(i)}const m=a.map(r=>{var S,u,q,x,O,p;let i=r.querySelector(".allowTextSelection .OZZZK"),l=r.querySelector('[data-testid="RecipientWell"]'),c=r.querySelector('.allowTextSelection [data-testid="SentReceivedSavedTime"]'),s=r.querySelector(".allowTextSelection ._nzWz");const n=r.querySelector(".wide-content-host");if(n){i=n.querySelector(".allowTextSelection span"),i||(i=n.querySelector(".allowTextSelection")),l=n.querySelector('[data-testid="RecipientWell"] span'),l||(l=n.querySelector('[data-testid="RecipientWell"]')),c=n.querySelector('[data-testid="SentReceivedSavedTime"]'),s=n.querySelector('[aria-label="Message body"]');const f=n.querySelector("blockquote");if(f){let d=f.closest('div[dir="ltr"]');d||(d=f.closest('[visibility="visible"]]')),d||(d=f.closest('[aria-label="Message body"]')),o.push((S=d==null?void 0:d.textContent)==null?void 0:S.trim())}}return{content:(u=s==null?void 0:s.textContent)==null?void 0:u.trim(),receiver:(q=l==null?void 0:l.textContent)==null?void 0:q.trim(),replyingToIt:(x=r==null?void 0:r.classList)==null?void 0:x.contains("gXGox"),sender:(O=i==null?void 0:i.textContent)==null?void 0:O.trim(),timestamp:(p=c==null?void 0:c.textContent)==null?void 0:p.trim()}});return{blockquotes:o,emails:m}}function z(e){var c,s,n,b;const{contextData:o,editor:a,mountOn:t,promptsFor:m}=e,[r,i]=v.useState(""),[l=E]=j({instance:new k({area:"local"}),key:"UserSettings"});return(s=(c=l.merlinOnSocialMedia)==null?void 0:c.outlook)==null||s.visible,(b=(n=l.merlinOnSocialMedia)==null?void 0:n.outlook)!=null&&b.visible?y.jsx(U,{children:y.jsx(_,{children:y.jsx(D,{client:N,persistOptions:{persister:K},children:y.jsx(A,{websiteOverride:!0,children:y.jsx(W,{editor:a,host:"outlook",contextData:o,promptsFor:m,dotMenuPosition:"bottom",mountOn:t,setTextareaValue:i,textareaValue:r})})})})}):null}const P={textboxOne:'[role="textbox"][contenteditable="true"].dFCbN,[role="textbox"][contenteditable="true"].gdBtD'},{textboxOne:R}=P;function B(){return new Promise(e=>{const o=new MutationObserver(T(()=>{const a=Object.values(P).join(", "),t=document.querySelector(a);t&&(e(t),o.disconnect())},50));o.observe(document.body,{childList:!0,subtree:!0})})}const g=async(e,o,a)=>{var x,O;const t=document.createElement("merlin-component");t.className="merlin fab-writer";const m=t.attachShadow({mode:"open"}),r=document.createElement("style");r.textContent=`${V}
    :host(.merlin.fab-writer) {
      all: initial; /* 1st rule so subsequent properties are reset. */
      width: 100%;
      display: block;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      z-index: 1000;
    }

    .fabStrip {
      all: initial; /* 1st rule so subsequent properties are reset. */
      position: relative;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .fabStrip ::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    `;const i=document.createElement("div");i.id="reactAppRoot",i.className="reactAppRoot fabStrip",M.forEach(p=>{i.addEventListener(p,f=>{f.stopPropagation()})}),m.appendChild(r),m.appendChild(i),o==="pre"&&e.prepend(t),o==="push"&&e.appendChild(t),o==="before"&&e.insertBefore(t,a);let l,c;const s={blockquotes:[],emails:[],recName:null,type:null,userName:null};l=h.OUTLOOK.OUTLOOK_REPLY,c=w.OUTLOOK_REPLY,s.type="reply";const{blockquotes:n,emails:b}=I((x=t==null?void 0:t.parentElement)==null?void 0:x.querySelector(".aVla3.gXGox")),S=document.querySelector("#ReadingPaneContainerId"),u=S==null?void 0:S.querySelector(R);if(u){const p=(O=u==null?void 0:u.textContent)==null?void 0:O.trim();p&&n.push(p)}s.emails=b,s.blockquotes=n,b.length===0&&n.length===0&&(l=h.OUTLOOK.OUTLOOK_COMPOSE,c=w.OUTLOOK_COMPOSE,s.type="compose"),s.userName=document.querySelector("title").textContent.match(/- (.*?) -/)[1],L(i).render(y.jsx(z,{editor:t,contextData:s,promptsFor:c,mountOn:l}))};function C(){let e;const o="#ReadingPaneContainerId";try{document.querySelector(o)&&(e=document.querySelector(o).parentElement,e.querySelector(R)?(e.querySelector(".MtujV.WWy1F")&&!e.querySelector(".merlin.fab-writer")?g(e.querySelector(".MtujV.WWy1F"),"push"):e.querySelector(".merlin.fab-writer")||g(e,"push"),document.querySelector(".nuum5")&&!e.querySelector(".merlin.fab-writer")&&g(e,"before",document.querySelector(".nuum5"))):e.querySelector(".merlin.fab-writer")&&e.querySelector(".merlin.fab-writer").remove())}catch{}}const Z=async()=>{var t,m;const e=await F();if(e&&!((m=(t=e.fabStrip)==null?void 0:t.outlook)!=null&&m.visible))return;await B(),C();const o=new MutationObserver(T(()=>{C()},300)),a={childList:!0,subtree:!0};o.observe(document.body,a)};Z();