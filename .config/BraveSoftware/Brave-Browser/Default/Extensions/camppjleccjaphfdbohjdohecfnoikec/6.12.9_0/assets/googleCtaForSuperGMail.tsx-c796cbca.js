import{c as f,j as e,R as l,r as c,a as g}from"./client-64cc3330.js";import{g as x,L as s,a as b,c as h}from"./index-6400eb41.js";import{c as w}from"./index-75aa899c.js";/* empty css             */import{u as v}from"./usePopper-5581625c.js";import{B as m}from"./button-5c866ab2.js";import{f as p}from"./analytics-4a9d4e40.js";import"./index-1a12ff06.js";import"./utils-01642ffa.js";const y="/assets/MerlinLogo-7068b8fe.webp",S=()=>new Promise(t=>{const o=new MutationObserver(()=>{const r=document.getElementById("gb");r&&(t(r),o.disconnect())});o.observe(document.body,{childList:!0,subtree:!0})});function E(){const[t,o]=l.useState(null),[r,a]=l.useState(null),{attributes:n,styles:d}=v(t,r,{placement:"bottom"}),[u,i]=c.useState(!1);return c.useEffect(()=>{(async()=>await s.get("hasSeenGoogleCtaForSuperGmail")!=="seenOnce"&&i(!0))()},[]),e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-md relative right-1 text-indigo-400",ref:o,children:"Merlin for"}),u&&g.createPortal(e.jsx("div",{ref:a,style:d.popper,...n.popper,className:"w-[400px]",children:e.jsxs("div",{className:"from-cornblue-100 to-cornblue-400 via-cornblue-200 relative mr-10 mt-6  flex flex-col rounded-3xl bg-gradient-to-r ",children:[e.jsxs("div",{className:"flex flex-row",children:[e.jsx("h1",{className:"font-Hanken m-6 mb-0  text-2xl font-semibold text-indigo-700",children:"Write Flawless mails with Merlin AI!"}),e.jsx("img",{src:b(y),alt:"",className:"h-28 w-28"})]}),e.jsxs("div",{className:"flex flex-row items-center justify-around",children:[e.jsx(m,{variant:"link",className:"font-Hanken  text-md mb-2 rounded-xl p-7 text-zinc-500",onClick:()=>{p({eventName:"remindMeLater",eventType:"Button",feature:"googleCtaForSuperGmail",firedFromFile:"contents/googleCtaForSuperGmail"}),s.set("hasSeenGoogleCtaForSuperGmail","seenOnce"),i(!1)},children:"Remind me later"}),e.jsx(m,{variant:"secondary",className:"font-Hanken text-md mb-2 mr-2 rounded-xl bg-indigo-600 p-7 text-white hover:bg-indigo-800",onClick:()=>{p({eventName:"ExploreNow",eventType:"Button",feature:"googleCtaForSuperGmail",firedFromFile:"contents/googleCtaForSuperGmail"}),h("https://mail.google.com/mail"),s.set("hasSeenGoogleCtaForSuperGmail","seenOnce")},children:"Explore now"})]}),e.jsx("div",{className:"bg-cornblue-200 absolute -top-4 right-1/2 h-5 w-5 origin-bottom-left  rotate-45 transform border-current"})]})}),document.querySelector("#merlin-uicomponentportal").shadowRoot.getElementById("reactAppRoot"))]})}const F=async()=>{const t=document.createElement("merlin-component");t.className="merlin superGmail-cta";const o=t.attachShadow({mode:"open"}),r=document.createElement("style");r.textContent=`${w}
      .superGmail-cta{
        all: initial; /* 1st rule so subsequent properties are reset. */
        position: relative;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      `;const a=document.createElement("div");a.id="reactAppRootBtn",a.className="reactAppRootBtn",o.appendChild(r),o.appendChild(a);const n=document.querySelector("[href^='https://mail.google.com/']");n&&window.location.pathname==="/"&&(n.prepend(t),n.style.display="flex",n.style.alignItems="center",f(a).render(e.jsx(E,{})))},N=async()=>{const t=await x();t&&!t.fabStrip.gmail.visible||document.querySelector("[data-popper-placement]")||Math.random()*100>10||(await S(),F())};N();
