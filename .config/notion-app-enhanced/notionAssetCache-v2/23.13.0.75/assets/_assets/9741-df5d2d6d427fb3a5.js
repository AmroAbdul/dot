"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[9741],{44975:(e,t,i)=>{i.d(t,{EK:()=>c,IM:()=>a,QZ:()=>l,YY:()=>r,_g:()=>s,dy:()=>o,x9:()=>d,yb:()=>u});var n=i(97978);function o(e,t){n.j(e,"download_desktop_app",t)}function r(e,t){n.j(e,"download_mobile_app",t)}function s(e,t){const{name:i,...o}=t;n.j(e,"click_link",{...o,click_name:i})}function l(e,t){n.j(e,"scroll",t)}function a(e,t){n.j(e,"customer_io_in_app_callout_show",t)}function c(e,t){n.j(e,"customer_io_in_app_callout_suppress",t)}function d(e,t){n.j(e,"customer_io_in_app_callout_dismiss",t)}function u(e,t){n.j(e,"customer_io_in_app_callout_error",t)}},1101:(e,t,i)=>{i.d(t,{Z:()=>f});i(67294);var n=i(480),o=i(86628),r=i(24405),s=i(56666),l=i(82990),a=i(87279),c=i(61766),d=i(48019),u=i(64921),p=i(31945),g=i(78140),h=i(72495),m=i(85893);const f=function(e){let{emailAddress:t,disabled:i,accountActions:l}=e;window.__c={n:"SidebarAccountHeader"};const f=(0,r.Fg)(),M=(0,n.O7)(),y=(0,o.qz)(void 0,c.Z),{device:v}=M;let j;return j=v.isMobile?{menuType:a.og.ActionSheet}:{menuType:a.og.Popup},(0,m.jsxs)("div",{style:w(M,f),children:[(0,m.jsx)("div",{style:S(M),children:t}),(0,m.jsx)(p.ZP,{popupType:v.isMobile?p.Z4.SlideUp:p.Z4.Popup,buttonPopupStore:y,renderOrigin:e=>{if(!i)return(0,m.jsx)(u.Z,{...e,style:x(M),children:(0,s.o)(b(M))})},render:()=>(0,m.jsx)(g.Z,{...j,children:(0,m.jsx)(d.Z,{sections:[{key:"option section",render:e=>(0,m.jsx)(h.Z,{...e}),actions:l}],context:{environment:M,blocks:[],publicEditMode:void 0}})})})]})};function x(e){const{device:t}=e;return{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:t.isMobile?24:20,height:t.isMobile?24:20,borderRadius:4}}function b(e){const{device:t}=e;return{width:t.isMobile?18:12,height:t.isMobile?18:12}}function S(e){return{fontSize:e.device.isMobile?14:11,lineHeight:l.Z.lineHeight.UISmall.desktop,fontWeight:l.Z.fontWeight.medium}}function w(e,t){return{marginTop:e.device.isMobile?20:8,marginLeft:12,marginRight:12,display:"flex",alignItems:"center",justifyContent:"space-between",color:t.mediumTextColor}}},14694:(e,t,i)=>{i.d(t,{Z:()=>d});i(67294);var n=i(480),o=i(86628),r=i(24405),s=i(39567),l=i(50659),a=i(85893);function c(){window.__c={n:"AliasIcon"};const e=(0,r.yK)((e=>({icon:{position:"absolute",width:"50%",height:"50%",right:0,bottom:0,fill:"dark"===e.mode?e.regularTextColor:"#3E3C38",stroke:"dark"===e.mode?e.sidebarBackground:"white",strokeWidth:"dark"===e.mode?"1.85px":"1.5px"}})),[]);return(0,a.jsx)("div",{children:(0,s.Y)(e.icon)})}function d(e){var t;window.__c={n:"SidebarItem"};const i=(0,n.O7)(),s=i.device.isMobile,d=(0,o.VK)((()=>{var t,n;if(s)return i.WindowSizeStore.getSafePaddingLeftCSS("number"==typeof(null===(t=e.style)||void 0===t?void 0:t.paddingLeft)?null===(n=e.style)||void 0===n?void 0:n.paddingLeft:10)}),[i.WindowSizeStore,s,null===(t=e.style)||void 0===t?void 0:t.paddingLeft]),u=(0,r.yK)((t=>({wrapper:{...s?{display:"flex",alignItems:"center",width:"100%",minHeight:26,fontSize:16,paddingTop:8,paddingBottom:8,paddingLeft:d,paddingRight:10,userSelect:"none",WebkitUserSelect:"none",boxShadow:e.disableMobileBorder?void 0:`0 1px 0 ${t.regularDividerColor}`,marginBottom:e.shouldShowMobileMarginBottom?12:1}:{display:"flex",alignItems:"center",width:"100%",fontSize:14,minHeight:27,paddingTop:2,paddingBottom:2,marginTop:1,marginBottom:1,...(0,l.MF)()},...e.style},icon:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,width:s?28:22,height:s?24:18,marginLeft:-3,marginRight:4,position:"relative"},right:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,height:"100%",...e.rightStyle},left:{flexShrink:0,flexGrow:0,borderRadius:4,color:t.mediumTextColor,width:s?26:22,height:s?24:22,display:"flex",alignItems:"center",justifyContent:"center",marginRight:e.icon?0:8},children:{flexGrow:1,flexShrink:1,flexBasis:"auto",whiteSpace:"nowrap",minWidth:0,overflow:"hidden",textOverflow:e.right&&!s?"clip":"ellipsis",...e.childrenStyle}})),[s,d,e.disableMobileBorder,e.shouldShowMobileMarginBottom,e.style,e.rightStyle,e.icon,e.right,e.childrenStyle]);return(0,a.jsxs)("div",{role:e.role,"aria-current":e["aria-current"],"aria-expanded":e["aria-expanded"],"aria-owns":e["aria-owns"],"aria-labelledby":e["aria-labelledby"],style:u.wrapper,onFocus:e.onFocus,onBlur:e.onBlur,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,className:e.className,children:[e.left&&(0,a.jsx)("div",{style:u.left,children:e.left}),e.icon&&(0,a.jsxs)("div",{style:u.icon,children:[e.icon,e.isAlias&&(0,a.jsx)(c,{})]}),(0,a.jsx)("div",{style:u.children,children:e.children}),e.right&&(0,a.jsx)("div",{style:u.right,children:e.right})]})}},50659:(e,t,i)=>{i.d(t,{G$:()=>o,MF:()=>r,Z3:()=>n});function n(e){let{isMobile:t}=e;return{...!t&&{borderRadius:3}}}function o(e){let{isMobile:t}=e;return t?{}:{...n({isMobile:t}),marginLeft:4,marginRight:4,width:"calc(100% - 8px)"}}function r(){return{paddingLeft:10,paddingRight:10}}},27177:(e,t,i)=>{i.d(t,{Z:()=>y});i(21703),i(67294);var n=i(83355),o=i(480),r=i(86628),s=i(24405),l=i(9291),a=i(32441),c=i(1357),d=i(52275),u=i(31945),p=i(46457),g=i(43250),h=i(88632),m=i(96071),f=i(30278),x=i(85974),b=i(91190),S=i(78861),w=i(85893);class M extends n.Z{constructor(){super(...arguments),this.storeTypes={loginStore:x.Z,loginPermissionsStore:f.Z,loginModalStore:m.Z}}UNSAFE_willMount(e){super.UNSAFE_willMount(e);const{loginStore:t}=this.stores;"email"===t.state.loginType&&this.environment.device.isMobile&&t.setState({...t.state,loginType:"google"})}renderComponent(){const{online:e}=h.Z.state,{device:t}=this.environment,{createType:i}=this.props,n=v(this.environment);return t.isMobile?(0,w.jsx)(u.ZP,{popupType:u.Z4.SlideUp,hidesMobileNativeBottomBar:n,preventSlideUpTransition:n,buttonPopupStore:"add-account"===i?b.C:b.E,alignmentToOrigin:u.vR.Start,placementToOrigin:u.pO.Top,originGap:0,isFullWidthOnMobile:!0,render:e=>(this.stores.loginModalStore.setState({open:!0}),(0,w.jsx)(Z,{intl:this.props.intl,disableLoginLink:this.props.disableLoginLink,redirectURL:this.props.redirectURL,loginStore:this.stores.loginStore,loginModalStore:this.stores.loginModalStore,createType:i,onDismiss:()=>{v(this.environment)?c.d(this.environment,e.close):e.close()}})),preventScaleTransition:!0,renderOrigin:t=>(0,w.jsx)(d.Z,{focused:!1,disabled:!e,title:(0,w.jsx)(k,{createType:i}),icon:this.props.icon,...t})}):(0,w.jsxs)("div",{onClick:()=>{e&&(a.D6(this.environment,{createType:i}),S.Z.setState({...S.Z.getState(),createType:i}),this.stores.loginModalStore.setState({open:!0}))},children:[(0,w.jsx)(d.Z,{focused:!1,disabled:!e,title:(0,w.jsx)(k,{createType:i}),icon:this.props.icon}),(0,w.jsx)(Z,{intl:this.props.intl,disableLoginLink:this.props.disableLoginLink,redirectURL:this.props.redirectURL,loginStore:this.stores.loginStore,loginModalStore:this.stores.loginModalStore,createType:i})]})}}M.displayName="SidebarSwitcherLoginModal";const y=(0,l.injectIntl)(M);function v(e){const{mobileNative:t}=e;return(null==t?void 0:t.supportsNativeHomeOnPhone())||!1}function j(e,t){const{device:i}=e;return{display:"flex",color:t.mediumTextColor,whiteSpace:"nowrap",fontSize:i.isMobile?16:12}}function k(e){let{createType:t}=e;window.__c={n:"MenuButtonLoginTitleComponent"};const i=(0,s.Fg)(),n=(0,o.O7)();switch(t){case"create-work":return(0,w.jsx)("div",{style:j(n,i),children:(0,w.jsx)(l.FormattedMessage,{defaultMessage:"Create work account",id:"sidebarSwitcherMultiAccount.menuItem.createWorkAccountButton.label"})});case"add-account":return(0,w.jsx)("div",{style:j(n,i),children:(0,w.jsx)(l.FormattedMessage,{defaultMessage:"Add another account",id:"sidebarSwitcherMultiAccount.addAccountButton.label"})})}return null}function Z(e){let{createType:t,onDismiss:i,intl:n,disableLoginLink:o,redirectURL:s,loginStore:a,loginModalStore:c}=e;window.__c={n:"AccountActionModalComponent"};const d=(0,r.qz)(c,m.Z),u=(0,r.qz)(a,x.Z);let h,f;switch(t){case"add-account":h=(0,w.jsx)(l.FormattedMessage,{id:"sidebarSwitcherMultiAccount.addAccount.title",defaultMessage:"Add an account"}),f=(0,w.jsx)(l.FormattedMessage,{id:"sidebarSwitcherMultiAccount.addAccount.description",defaultMessage:"Use an existing account, or sign up with a new email. Your current account will remain logged in."});break;case"create-work":h=(0,w.jsx)(l.FormattedMessage,{id:"sidebarSwitcherMultiAccount.createWork.title",defaultMessage:"Create a work account"}),f=(0,w.jsx)(l.FormattedMessage,{id:"sidebarSwitcherMultiAccount.createWork.description",defaultMessage:"We’ll check if your teammates are already on Notion. If not, we’ll create a new home for you and your team."});break;default:throw new Error(n.formatMessage({defaultMessage:"Unexpected createType in SidebarSwitcherMultiAccount",id:"sidebarSwitcherMultiAccount.errorMessage"}))}return(0,w.jsx)(p._,{loginModalStore:d,loginStore:u,title:h,description:f,disableLoginLink:o,className:g.zYS,redirectURL:s,onDismiss:i})}},77062:(e,t,i)=>{i.d(t,{Z:()=>m});i(67294);var n=i(480),o=i(24405),r=i(47453),s=i(98519),l=i(64921),a=i(5145),c=i(31278),d=i(26388),u=i(64369),p=i(39849),g=i(4023),h=i(85893);const m=function(e){let{id:t,onClick:i,focused:r,isAddButton:c,title:p,caption:m,shortcut:b,tooltipMessage:S,disableTooltip:y,disabled:v,showDragHandle:j,isCheck:k,removeDefaultMargin:Z,icon:L,spaceName:C,unreadMentions:_,right:I}=e;window.__c={n:"SidebarSwitcherMenuItem"};const A=(0,o.Fg)(),T=(0,n.O7)(),{device:R}=T,U=T.device.isMobile;return(0,h.jsx)(d.ZP,{renderTooltip:()=>S,disableTooltip:y,placement:g.u.Bottom,render:e=>(0,h.jsxs)(l.Z,{...e,mobileFeedback:T.device.isMobile,onClick:i,hovered:r,disabled:v,style:x(T,A,v,Z,c),children:[j&&(0,h.jsx)(a.ZP,{iconSize:12,style:{marginLeft:-6,marginRight:4,visibility:c?"hidden":"visible"}}),c?(0,h.jsx)(M,{}):(0,h.jsx)(f,{id:t,icon:L,spaceName:C,unreadMentions:_}),(0,h.jsxs)("div",{style:{marginLeft:12,marginRight:b||k?12:0,minWidth:0},children:[(0,h.jsx)(u.Z,{className:"notranslate",isMobile:R.isMobile,children:p}),m&&(0,h.jsx)(u.Z,{isSmall:!0,isMobile:R.isMobile,children:m})]}),k&&(0,s.k)({width:14,height:14,marginLeft:"auto"}),I,b&&!U&&!k&&(0,h.jsx)("div",{style:w(A),children:b})]})},`sidebarswitchermenuitem-tooltip-${t}`)};function f(e){let{id:t,icon:i,spaceName:o,unreadMentions:r}=e;window.__c={n:"Icon"};const s=(0,n.O7)().device.isMobile;return(0,h.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,h.jsxs)("div",{style:{position:"relative"},children:[t&&(0,h.jsx)(c.Z,{disabled:!0,icon:i,isEmptyPage:!1,title:o,size:s?36:32,isLarge:!0}),(0,h.jsx)(p.Z,{color:p.N.Red,count:r,style:{position:"absolute",top:-5,right:-5}})]})})}function x(e,t,i,n,o){const r=e.device.isMobile,{WindowSizeStore:s}=e,l=n?0:4;return{display:"flex",alignItems:"center",lineHeight:"120%",width:0===l?"100%":`$calc(100% - ${2*l}px)`,marginLeft:l,marginRight:l,borderRadius:4,paddingTop:r?8:4,paddingBottom:r?8:4,paddingLeft:r?s.getSafePaddingLeftCSS(16):14,paddingRight:r?s.getSafePaddingRightCSS(16):14,...r&&{boxShadow:`0 1px 0 ${t.regularDividerColor}`},marginBottom:n?0:1,fontSize:r?16:14,...r&&{background:t.popoverBackground},height:r?54:44,...o&&!r&&{boxShadow:"none",marginBottom:0},...i&&{opacity:.4}}}function b(e){return(0,r.R)({flexGrow:0,flexShrink:0,width:16,height:16,fill:e.popoverBackground})}function S(e){return{width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",background:e.lightIconColor,borderRadius:4,flexShrink:0}}function w(e){return{color:e.lightTextColor,fontSize:12,whiteSpace:"nowrap",marginLeft:"auto",flexShrink:0}}function M(){window.__c={n:"AddIconComponent"};const e=(0,o.Fg)(),t=(0,n.O7)().device.isMobile?36:32;return(0,h.jsx)("div",{style:{...S(e),width:t,height:t},children:b(e)})}},29741:(e,t,i)=>{i.d(t,{LP:()=>le,ZP:()=>re,rR:()=>xe,bM:()=>fe});i(57658);var n=i(67294),o=i(480),r=i(86628),s=i(24405),l=i(16691),a=i(47453),c=i(72126),d=i(606),u=i(89101),p=i(23867),g=i(77858),h=i(66079),m=i(9291),f=i(87586),x=i(86488),b=i(66324),S=i(97977),w=i(70782),M=i(55081),y=i(97852),v=i(88632),j=i(62967);const k=(0,m.defineMessages)({joinOrCreateWorkspace:{id:"sidebarSwitcherMultiAccount.singleAccountMenu.joinOrCreateWorkspace.label",defaultMessage:"Join or create workspace"},logOut:{id:"sidebarSwitcherMultiAccount.singleAccountMenu.logOut.label",defaultMessage:"Log out"}});function Z(e){return(0,j.cN)({key:"join or create a workspace",displayName:k.joinOrCreateWorkspace,analyticsName:k.joinOrCreateWorkspace.defaultMessage,svg:x.p,validators:[],closeParentMenu:!0,action:t=>{let{environment:i}=t;y.Z.reset(),i.currentUser.id!==e?w.x({environment:i,newCurrentUserId:e}).then((e=>{M.xN(e)})):M.xN(i)}})}function L(e){return(0,j.cN)({key:"log out of a single account",displayName:k.logOut,analyticsName:k.logOut.defaultMessage,svg:f.B,validators:[],closeParentMenu:!0,action:t=>{let{environment:i}=t;const{online:n}=v.Z.state;n&&(S.logoutSingleAccount({environment:i,userId:e}),b.HY(i))}})}var C=i(50906),_=i(44975),I=i(32441),A=i(29974),T=i(82530),R=i(64921),U=i(52275),O=i(79131),B=i(88198),F=i(16354),N=i(78140),P=i(32163),W=i(40721),E=i(72495),V=i(1101),K=i(14694),D=i(28125),z=i(87279),G=i(38755),H=i(5162),$=i(80444),Y=i(24042),q=i(81236),J=i(68373),Q=i(32856),X=i(24646),ee=i(19034),te=i(78861),ie=i(27177),ne=i(77062),oe=i(85893);function re(e){window.__c={n:"SidebarSwitcherMultiAccountPopup"};const{parent:t,redirectURL:i,disableLoginLink:n,onSpaceClick:r,loginStore:s,loginPermissionsStore:l}=e;let a;const c=(0,o.O7)(),d=(0,o.Fy)(),u=c.currentUser.loggedInUserIds,p=(0,oe.jsx)(ce,{redirectURL:i,disableLoginLink:n,loginStore:s,loginPermissionsStore:l});return a=d.isMobile?{menuType:z.og.Modal,title:(0,oe.jsx)(m.FormattedMessage,{defaultMessage:"Accounts & Workspaces",id:"sidebarSwitcherMultiAccount.mobileMenu.title"}),right:(0,oe.jsx)(W.DoneMenuText,{}),onClickRight:t.close}:{menuType:z.og.Popup,minWidth:270,maxWidth:360,footer:p},(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)(Q.D,{experimentId:"quick_workspace_creation",groups:{on:(0,oe.jsx)(se,{})}}),(0,oe.jsxs)(N.Z,{...a,children:[u.map(((e,t)=>(0,oe.jsx)(le,{userId:e,isLastUser:t===u.length-1,onSpaceClick:r},e))),d.isMobile&&p]})]})}function se(){window.__c={n:"CreateOrJoinButton"};const e=(0,o.O7)(),t=(0,s.yK)((e=>({button:{boxShadow:`0 -1px 0 ${e.regularDividerColor}`},sidebarItem:{color:e.mediumTextColor,height:45},plusIconContainer:{display:"flex",alignItems:"center",justifyContent:"center"},plusIcon:{fill:e.mediumIconColor,width:16,height:16}})),[]);return(0,oe.jsx)(R.Z,{onClick:()=>function(e){y.Z.reset(),M.xN(e),C.iS(e)}(e),style:t.button,children:(0,oe.jsx)(K.Z,{style:t.sidebarItem,left:(0,oe.jsx)("div",{style:t.plusIconContainer,children:(0,a.R)(t.plusIcon)}),children:(0,oe.jsx)(m.FormattedMessage,{id:"sidebarSwitcherMultiAccount.singleAccountMenu.joinOrCreateWorkspace.label",defaultMessage:"Join or create workspace"})})})}function le(e){window.__c={n:"UserSpaceViewList"};const{userId:t,isLastUser:i,onSpaceClick:a,disableAccountActions:d,hideShortcuts:u}=e,g=(0,o.O7)(),h=(0,o.Fy)(),f=(0,s.yK)((e=>({menuListMobile:{paddingTop:10},menuListNotLast:{borderBottom:`1px solid ${e.lightDividerColor}`}})),[]),x=(0,r.VK)((()=>[...te.Z.getSpaceViewStores(g,t).map((e=>e.pointer)).map((e=>({id:e.id,spaceId:(0,p.C)(e.spaceId)}))).map(l.vY),"create-workspace-row"]),[g,t]),{currentUserRootStore:S,currentSpaceStore:w}=(0,r.VK)((()=>$.default.state),[]),{isElectronUsingCommandNumber:M}=(0,r.VK)((()=>Y.Z.state),[]),y=(0,r.VK)((()=>te.Z.getSpaceViewStores(g,t)),[g,t]),j=(0,r.VK)((()=>te.Z.getAllSpaceViewStores(g)),[g]),k=(0,m.useIntl)(),Z=(0,r.VK)((()=>{if(!S||!w)return[];const e=[];for(const[i,n]of y.entries()){const i=n.getSpaceStore();if(i){const o=t===S.id&&i.id===w.id,{results:r}=ee.Z.state,s=r.find((e=>e.spaceId===i.id)),l=c.cx(j,(e=>e.id===n.id))+1,d=(0,G.rn)(g,i),p=fe(g,k,i),m=xe(g,k,i);e.push({key:n.id,render:e=>{const{online:n}=v.Z.state,r=!ue({userId:t,environment:g})&&!h.isMobile;return(0,oe.jsx)(ne.Z,{...e,id:i.id,icon:(0,G.Wd)(g,i),spaceName:d,title:p,caption:m,isCheck:o,unreadMentions:t===g.currentUser.id&&s&&s.spaceId!==w.id&&s.unread.mentions>0?s.unread.mentions:void 0,showDragHandle:r,shortcut:u?void 0:be({isElectronMac:h.isElectronMac,isElectronUsingCommandNumber:M,shortcutIndex:h.isElectron?l:void 0}),disabled:!n&&g.currentUser.id!==t,disableTooltip:!0})},action:async e=>{let{event:t}=e;he(),o||await a({event:t,spaceViewStore:n}),b.so(g)}})}}return e}),[j,w,S,h.isElectron,h.isElectronMac,h.isMobile,g,u,k,M,a,y,t]),L=0===Z.length?[]:[{key:"spaces",render:e=>(0,oe.jsx)(E.Z,{...e,disableMobilePadding:!0,topBorder:h.isMobile,children:h.isMobile?e.children:(0,oe.jsx)(n.Fragment,{children:(0,oe.jsx)(O.ZP,{direction:"vertical",keys:x,renderKey:t=>e.children[x.indexOf(t)],onDrop:me({userId:t,environment:g}),style:{marginBottom:1}})})}),items:Z}];return L.length>0?(0,oe.jsxs)(n.Fragment,{children:[(0,oe.jsx)(de,{userId:t,disableAccountActions:d}),(0,oe.jsx)("div",{style:h.isMobile?f.menuListMobile:i?{}:f.menuListNotLast,children:(0,oe.jsx)(P.Z,{type:P.i.Vertical,sections:L,initialFocus:void 0})})]},t):null}function ae(e){const{isMobile:t,theme:i}=e;return t?{}:{backgroundColor:i.sidebarSwitcherFooterBackground}}function ce(e){window.__c={n:"Footer"};const{redirectURL:t,disableLoginLink:i,loginStore:n,loginPermissionsStore:l}=e,a=(0,o.Fy)().isMobile,c=(0,s.yK)((e=>({footer:ae({isMobile:a,theme:e})})),[a]),d=(0,o.O7)(),u=(0,r.VK)((()=>te.Z.hasAtLeastOneTeamPlan(d)),[d]),p=(0,oe.jsxs)(oe.Fragment,{children:[!u&&(0,oe.jsx)(ie.Z,{createType:"create-work",redirectURL:t,disableLoginLink:i,loginStore:n,loginPermissionsStore:l}),!(0,H.Y)("supportsNativeHome")&&(0,oe.jsx)(ie.Z,{createType:"add-account",redirectURL:t,disableLoginLink:i,loginStore:n,loginPermissionsStore:l})]});return(0,oe.jsxs)("div",{style:c.footer,children:[(0,oe.jsxs)(E.Z,{topBorder:!0,children:[D.k(d)&&p,(0,oe.jsx)(pe,{})]}),!a&&(0,oe.jsx)(E.Z,{topBorder:!0,children:(0,oe.jsx)(ge,{})})]})}function de(e){window.__c={n:"AccountHeader"};const{userId:t,disableAccountActions:i=!1}=e,{online:n}=(0,r.VK)((()=>v.Z.state),[]),s=(0,o.O7)(),l=(0,r.VK)((()=>te.Z.getUserEmailAddress(s,t)),[s,t]);if(!l)return null;const a=i?[]:[Z(t),L(t)];return(0,oe.jsx)(V.Z,{emailAddress:l,userId:t,disabled:!n||i,accountActions:a})}function ue(e){const{userId:t,environment:i}=e;return 1===(t?te.Z.getSpaceViewStores(i,t):te.Z.getAllSpaceViewStores(i)).length}function pe(){window.__c={n:"LogoutAll"};const e=(0,r.VK)((()=>v.Z.state.online),[]),t=(0,o.O7)(),i=t.device.isMobile,l=t.currentUser.loggedInUserIds.length>1,a=(0,s.yK)((e=>({accountAction:{display:"flex",color:e.mediumTextColor,whiteSpace:"nowrap",fontSize:i?16:12,paddingLeft:0}})),[i]),c=(0,n.useCallback)((()=>{const{online:e}=v.Z.state;e&&(y.Z.setState({...y.Z.state,open:!1}),b.HY(t),S.logout(t))}),[t]);return(0,oe.jsx)(U.Z,{onClick:c,focused:!1,disabled:!e,title:(0,oe.jsx)("div",{style:a.accountAction,children:(0,oe.jsx)(m.FormattedMessage,{defaultMessage:"{isLoggedIntoMultipleAccounts, select, true {Log out all accounts} other {Log out}}",id:"sidebarSwitcherMultiAccount.menuItem.logoutAllButton.label",values:{isLoggedIntoMultipleAccounts:l}})})})}function ge(){window.__c={n:"DownloadApps"};const e=(0,o.O7)(),t=(0,o.Fy)(),i=t.isElectron,r=(0,s.yK)((e=>({title:{color:e.mediumTextColor,fontSize:12}})),[]),l=(0,n.useCallback)((()=>{he(),t.isWindows?_.dy(e,{from:"sidebar",app_platform:"windows"}):_.dy(e,{from:"sidebar",app_platform:"mac"})}),[t.isWindows,e]),a=(0,n.useCallback)((()=>{he(),_.YY(e,{from:"sidebar"})}),[e]);return i?(0,oe.jsx)(F.Z,{external:!0,href:u.AR.mobile,onClick:a,children:(0,oe.jsx)(U.Z,{focused:!1,title:(0,oe.jsx)("div",{style:r.title,children:(0,oe.jsx)(m.FormattedMessage,{defaultMessage:"Get iOS & Android app",id:"sidebarMultiSwitcher.desktopAppGetMobileApp.prompt"})})})}):(0,oe.jsx)(F.Z,{external:!0,href:u.AR.desktop,onClick:l,children:(0,oe.jsx)(U.Z,{focused:!1,title:(0,oe.jsx)("div",{style:r.title,children:t.isWindows?(0,oe.jsx)(m.FormattedMessage,{defaultMessage:"Get Windows app",id:"sidebarMultiSwitcher.windowsAppButton.text"}):(0,oe.jsx)(m.FormattedMessage,{defaultMessage:"Get Mac app",id:"sidebarMultiSwitcher.macAppButton.text"})})})})}function he(){y.Z.setState({...y.Z.state,open:!1})}function me(e){const{userId:t,environment:i}=e;return function(e){const n=e.filter((e=>"create-workspace-row"!==e)).map(l.Vg).map((e=>d.dr.fromSpaceShardRecordId(e,g.zU))),o=new J.r9(i,{table:h.dx,id:t},{userId:t});T.createAndCommit({userAction:"SidebarSwitcherMultiAccount.handleDraggableListDrop",environment:i,perform:e=>{A._Q({userRootStore:o,transaction:e,spaceViewIds:n.map((e=>e.id)),spaceViewPointers:n})},userId:t}),I.Q4(i,{workspace_count:e.length})}}function fe(e,t,i){const n=(0,G.rn)(e,i),o=q.Z.getPublicSpaceData(e,i.id);return o&&"none"===o.role?(0,oe.jsxs)("div",{style:{display:"flex"},children:[(0,oe.jsx)("span",{style:{flexShrink:1,textOverflow:"ellipsis",overflow:"hidden"},children:n}),(0,oe.jsx)("div",{style:{marginLeft:"8px",alignSelf:"center"},children:(0,oe.jsx)(B.b,{})})]}):n}function xe(e,t,i){const n=q.Z.getPublicSpaceData(e,i.id);if(!n||"none"===n.role)return;const o=(0,X.em)(n.subscriptionTier),r=t.formatNumber(n.memberCount),s=t.formatMessage(o);return t.formatMessage(X.js.workspaceSubtitleWithMembers,{numberOfWorkspaceMembers:r,planType:s})}function be(e){if(e.shortcutIndex&&!(e.shortcutIndex>9))return e.isElectronMac?e.isElectronUsingCommandNumber?`⌃⇧${e.shortcutIndex}`:`⌘${e.shortcutIndex}`:e.isElectronUsingCommandNumber?`alt+shift+${e.shortcutIndex}`:`ctrl+${e.shortcutIndex}`}},91190:(e,t,i)=>{i.d(t,{C:()=>r,E:()=>o});var n=i(61766);const o=new n.Z,r=new n.Z},30278:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(49085);class o extends n.default{getInitialState(){return{contacts:!1}}}const r=o},32856:(e,t,i)=>{i.d(t,{D:()=>r});var n=i(86628),o=i(77080);function r(e){window.__c={n:"ExperimentSwitch"};const{experimentId:t,groups:i,disableExposureLogging:r}=e;return i[function(e){const{experimentId:t,disableExposureLogging:i,defaultGroup:r}=e;return(0,n.VK)((()=>o.default.getEligibleGroup({experimentId:t,defaultGroup:r??"control",disableExposureLogging:i})),[t,i,r])}({experimentId:t,disableExposureLogging:r})]}}}]);