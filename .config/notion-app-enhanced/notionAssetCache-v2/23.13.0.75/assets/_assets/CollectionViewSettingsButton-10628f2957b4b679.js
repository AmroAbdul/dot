"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[7345],{46084:(e,t,o)=>{o.r(t),o.d(t,{default:()=>h});var n=o(67294),i=o(480),l=o(86628),s=o(24405),c=o(3865),a=o(56666),r=o(9291),u=o(8406),d=o(5149),S=o(91851),p=o(40663),g=o(43250),f=o(12534),C=o(33929),w=o(80444),m=o(58421),v=o(73063),V=o(26388),x=o(85893);const b=(0,r.defineMessages)({tooltipLabel:{defaultMessage:"Edit view layout, grouping and more...",id:"database.collectionViewSettingsButton.openViewSettingsButton.tooltip"}});function h(e){window.__c={n:"CollectionViewSettingsButton"};const{collectionContextStore:t,hideTooltip:o}=e,r=(0,i.O7)(),h=(0,l.VK)((()=>t.collectionViewStore()),[t]),k=(0,l.VK)((()=>null==h?void 0:h.getType()),[h]),y=(0,l.VK)((()=>t.settingsStore),[t]),K=(0,l.VK)((()=>y.state.open),[y]),_=(0,l.VK)((()=>t.permissionScopes.state),[t]),T=(0,l.VK)((()=>(0,m.n)(y)),[y]),j=!(0,c.Cf)({tab:T}),L=(0,l.VK)((()=>t.contextType),[t]),M=(0,n.useCallback)((()=>{const e=w.default.state.currentUserSettingsStore,t=w.default.state.currentSpaceStore;if(e&&t){"click_view_settings"===(0,p.jH)(e,t)&&(0,S.uR)({environment:r,requiredCurrPhase:void 0,nextPhase:"complete",currentUserSettingsStore:e,currentSpaceStore:t})}}),[r]),P=(0,n.useCallback)((e=>{(0,f.ZP)({event:e,context:f.Af.CollectionSettingsClick,callback:()=>{const e=t.settingsStore,o=e.state.open,n=(0,m.n)(e);o&&"main"===(null==n?void 0:n.type)?d.E3({collectionSettingsStore:e}):d.r$({collectionContextStore:t,collectionSettingsStore:e})}}),u.wd({environment:r,collectionContextStore:t,action:"click_topbar_view_settings"}),M()}),[t,r,M]),B=(0,l.VK)((()=>t.isCompactView.state),[t]),E=(0,s.yK)((e=>({iconStyle:{width:void 0,height:3,fill:B?e.mediumIconColor:e.mediumTextColor}})),[B]);if("page"===k||!_.canEditContent&&"collectionTypedView"!==L)return null;const U=(0,x.jsx)(v.Z,{ariaLabel:C.default.formatMessage(b.tooltipLabel),className:g.xvU,icon:a.o,style:e.style,iconStyle:E.iconStyle,hovered:K&&j,onClick:P});return o?U:(0,x.jsx)(V.ZP,{renderTooltip:()=>C.default.formatMessage(b.tooltipLabel),render:e=>(0,x.jsx)("div",{...e,children:U})})}}}]);