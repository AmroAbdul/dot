"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[3207],{18509:(n,e,t)=>{t.r(e),t.d(e,{OrganizationSettingsConsole:()=>S,OrganizationSettingsConsoleImpl:()=>I});var o=t(67294),r=t(480),a=t(86628),i=t(80444),s=t(79921),c=t(68117),u=t(84880),l=t(61149),m=t(12066),d=t(8055),g=t(82909),z=t(86631),b=t(85893);function p(n){let{organizationId:e,currentUserStore:t,selectedTabName:a}=n;window.__c={n:"OrganizationSidebar"};const i=(0,r.O7)(),s=(0,o.useMemo)((()=>m.cZ.filter((n=>(0,g.eT[n.name])({environment:i,currentUserStore:t,organizationId:e})))),[t,i,e]),c=(0,o.useMemo)((()=>s.map((n=>({id:n.name,name:g.ow[n.name].tab.name,icon:g.ow[n.name].tab.icon,isSelected:a===n.name,onClick:()=>{d.c4({environment:i,url:(0,l.a5)({organizationId:e,tabRoute:n})})}})))),[i,s,a,e]);return(0,b.jsx)(z.Z,{items:c})}function I(n){let{organizationId:e,tabRoute:t,properties:o,params:l}=n;window.__c={n:"OrganizationSettingsConsoleImpl"};const m=(0,r.O7)(),d=(0,a.VK)((()=>i.default.state.currentUserStore),[]);if(!e)return null;if(!t)return null;const z=g.ow[t.name];return(0,g.eT[t.name])({environment:m,currentUserStore:d,organizationId:e})?(0,b.jsx)(c.L,{children:(0,b.jsx)(u.n,{organizationId:e,children:(0,b.jsx)(s.v,{left:(0,b.jsx)(p,{organizationId:e,currentUserStore:d,selectedTabName:t.name}),right:z.scene({properties:o,queryParams:l,organizationId:e,tabRoute:t})})})}):null}const S=(0,t(73150).b)(I)}}]);