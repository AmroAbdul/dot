"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[2005],{97372:(e,t,o)=>{o.d(t,{ZP:()=>y,j9:()=>H,nJ:()=>b});var n=o(67294),i=o(480),l=o(86628),r=o(24405),C=o(80721),c=o(64275),s=o(12392),a=o(82990),d=o(5149),h=o(64921),u=o(73063),L=o(36488),p=o(3386),x=o(78140),g=o(40721),w=o(12534),v=o(87279),k=o(13273),S=o(25130),f=o(58421),j=o(85893);const b=290,H=400;function m(e){let{children:t,title:o,settingsStackLength:n,handleClose:i,handleBackArrowClick:l,hideDesktopHeader:s}=e;window.__c={n:"CollectionSettingsMenuHeader"};const d=(0,r.yK)((e=>({hiddenDesktopHeaderDiv:{height:6},nonHiddenDesktopHeaderDiv:{display:"flex",alignItems:"center",padding:"14px 16px 6px 16px",height:42},arrowButon:{marginRight:8,marginLeft:-2,height:22},arrowIcon:{width:16,height:16},title:{flexGrow:1,fontWeight:a.Z.fontWeight.semibold,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},closeButton:{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"100%",background:e.buttonHoveredBackground,width:18,height:18,flexShrink:0},closeButtonHover:{background:e.buttonPressedBackground},closeIcon:{width:14,fill:e.mediumTextColor}})),[]);return(0,j.jsxs)(j.Fragment,{children:[s&&(0,j.jsx)("div",{style:d.hiddenDesktopHeaderDiv}),!s&&(0,j.jsxs)("div",{style:d.nonHiddenDesktopHeaderDiv,children:[n>1&&(0,j.jsx)(u.Z,{icon:C.W,style:d.arrowButon,iconStyle:d.arrowIcon,onClick:l}),(0,j.jsx)("span",{style:d.title,children:o}),(0,j.jsx)(h.Z,{onClick:i,style:d.closeButton,hoveredStyle:d.closeButtonHover,children:(0,c.D)(d.closeIcon)})]}),t]})}const y=function(e){let{children:t,footer:o,header:r,unconstrainedWidth:C,desktopWidth:c,title:a,collectionSettingsStore:h,fullHeight:H,hideDesktopHeader:y,menuScrollerStyle:B,handleBackArrowClick:Z,handleClose:M}=e;window.__c={n:"CollectionSettingsMenu"};const D=(0,i.Fy)(),{currentTab:I,settingsStackLength:T}=(0,l.VK)((()=>{const e=h.state;return{currentTab:(0,f.n)(h),settingsStackLength:e.stack.length}}),[h]),V=(0,n.useCallback)((()=>{Z?Z():d.z$({collectionSettingsStore:h})}),[Z,h]),P=(0,n.useCallback)((e=>{M?M(e):(0,w.ZP)({event:e,context:w.Af.CollectionSettingsClick,callback:()=>{d.E3({collectionSettingsStore:h})}})}),[M,h]),_=(0,n.useCallback)((e=>{(0,k.jM)(e.target)||(0,k.al)(e.target)||P(e)}),[P]),{MenuArrowKeysProvider:A,context:W}=(0,S.ZP)();if(!I)return null;let F;if(D.isMobile)F={menuType:v.og.Modal,title:a,left:T>1&&(0,j.jsx)(u.Z,{icon:s.S,onClick:V}),right:(0,j.jsx)(g.DoneMenuText,{}),onClickRight:P,scrollerStyle:{...B}};else{const e=C||c?void 0:b;F={menuType:v.og.Popup,minWidth:b,width:c,maxHeight:H?"calc(100% - 16px)":"50vh",...e&&{maxWidth:e},onClickOutside:_,scrollerStyle:{flexGrow:0,...B},header:(0,j.jsx)(m,{settingsStackLength:T,handleClose:P,handleBackArrowClick:V,hideDesktopHeader:y,title:a,children:r}),footer:o}}const K=(0,j.jsxs)(j.Fragment,{children:[D.isMobile&&r,t,D.isMobile&&o]});return H?(0,j.jsx)(A,{value:W,children:(0,j.jsx)(p.Z,{capture:!0,onUp:W.onKeyDown,onDown:W.onKeyDown,children:(0,j.jsx)(x.Z,{...F,children:K})})}):(0,j.jsx)(L.Z,{capture:!0,allowMobileAutoScroll:!0,allowEsc:!0,allowMenuList:!0,render:e=>(0,j.jsx)(A,{value:W,children:(0,j.jsx)(p.Z,{capture:!0,onUp:W.onKeyDown,onDown:W.onKeyDown,children:(0,j.jsx)(x.Z,{...F,...e,children:K})})})})}},68641:(e,t,o)=>{o.d(t,{HV:()=>i,WY:()=>r,jI:()=>l,vw:()=>C});o(21703);var n=o(6695);let i=function(e){return e[e.ViewSettings=0]="ViewSettings",e[e.FilterBar=1]="FilterBar",e[e.TopbarFilterPopup=2]="TopbarFilterPopup",e[e.TopbarSortPopup=3]="TopbarSortPopup",e[e.ViewBlock=4]="ViewBlock",e}({});function l(e){const{timelineViewTab:t,collectionContextStore:o}=e,i=r({collectionContextStore:o}),l=C({collectionContextStore:o});return"timeline"===i?"timeline"===t?"timeline_properties":l?"timeline_table_properties":void 0:(0,n.oz)(r({collectionContextStore:o}))}function r(e){var t;const{collectionContextStore:o}=e,n=null===(t=o.collectionViewStore())||void 0===t?void 0:t.getType();if(!n)throw new Error("View type was not defined.");return n}function C(e){const{collectionContextStore:t}=e,o=t.normalizedFormatStore.state;return Boolean(o.timeline_show_table)}},80721:(e,t,o)=>{o.d(t,{W:()=>l});o(67294);var n=o(45238),i=o(85893);const l=(0,n.I)("arrowLeftThick",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M1.54004 8.05762C1.54004 8.2627 1.62891 8.46094 1.78613 8.61133L6.29102 13.1162C6.45508 13.2734 6.63965 13.3486 6.82422 13.3486C7.25488 13.3486 7.5625 13.041 7.5625 12.6309C7.5625 12.4189 7.48047 12.2344 7.34375 12.1045L5.8125 10.5527L3.78906 8.70703L5.38867 8.80273H13.7012C14.1455 8.80273 14.46 8.49512 14.46 8.05762C14.46 7.61328 14.1455 7.3125 13.7012 7.3125H5.38867L3.7959 7.4082L5.8125 5.5625L7.34375 4.01074C7.48047 3.87402 7.5625 3.68945 7.5625 3.47754C7.5625 3.06738 7.25488 2.7666 6.82422 2.7666C6.63965 2.7666 6.45508 2.83496 6.27734 3.00586L1.78613 7.50391C1.62891 7.64746 1.54004 7.85254 1.54004 8.05762Z"})})},89767:(e,t,o)=>{o.d(t,{R:()=>l});o(67294);var n=o(45238),i=o(85893);const l=(0,n.I)("collectionInbox",{viewBox:"0 0 14 14",svg:(0,i.jsx)("path",{d:"M11.0918,0 C11.5383,0 11.9307,0.295898 12.0533,0.725586 L13.9615,7.40332 C13.9871,7.49316 14,7.58594 14,7.67871 L14,13 C14,13.5527 13.5522,14 13,14 L1,14 C0.447754,14 0,13.5527 0,13 L0,7.67871 C0,7.58594 0.0129395,7.49316 0.0384521,7.40332 L1.94666,0.725586 C2.06934,0.295898 2.46167,0 2.9082,0 L11.0918,0 Z M4.27271,1.5 C3.83728,1.5 3.45178,1.78223 3.31982,2.19727 L1.91455,6.61328 C1.70947,7.25879 2.1908,7.91699 2.86755,7.91699 L4.70837,7.91699 C4.70837,8.93652 5.16663,10.168 7,10.168 C8.83337,10.168 9.29163,8.93652 9.29163,7.91699 L11.1478,7.89355 C11.8201,7.88477 12.2927,7.22852 12.0876,6.58887 L10.681,2.19531 C10.5485,1.78125 10.1635,1.5 9.72864,1.5 L4.27271,1.5 Z"})})},12392:(e,t,o)=>{o.d(t,{S:()=>l});o(67294);var n=o(45238),i=o(85893);const l=(0,n.I)("historyBack",{viewBox:"0 0 14 14",svg:(0,i.jsx)("polygon",{points:"2.85893 7.74676 8.05608 12.9439 7 14 0.528042 7.52804 0 7 0.528042 6.47196 7 0 8.05608 1.05608 2.85893 6.25324 14 6.25324 14 7.74676"})})},58810:(e,t,o)=>{o.d(t,{Z:()=>l});o(67294);var n=o(45238),i=o(85893);const l=(0,n.I)("openAsPageThick",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M2.16895 7.19629C2.59277 7.19629 2.90723 6.88867 2.90723 6.45801V5.96582L2.75684 3.81934L4.35645 5.50098L6.3252 7.4834C6.46875 7.63379 6.65332 7.70215 6.85156 7.70215C7.30957 7.70215 7.6377 7.39453 7.6377 6.93652C7.6377 6.72461 7.55566 6.54004 7.41211 6.39648L5.43652 4.4209L3.74805 2.82129L5.91504 2.96484H6.44141C6.86523 2.96484 7.18652 2.65723 7.18652 2.22656C7.18652 1.7959 6.87207 1.48145 6.44141 1.48145L2.64746 1.48145C1.86816 1.48145 1.41699 1.93262 1.41699 2.71875L1.41699 6.45801C1.41699 6.88184 1.73828 7.19629 2.16895 7.19629ZM9.55176 14.6543H13.3389C14.125 14.6543 14.5762 14.2031 14.5762 13.417V9.67773C14.5762 9.25391 14.2549 8.93945 13.8242 8.93945C13.4004 8.93945 13.0859 9.24707 13.0859 9.67773V10.1699L13.2295 12.3164L11.6299 10.6348L9.66113 8.65234C9.52441 8.50195 9.33984 8.43359 9.1416 8.43359C8.68359 8.43359 8.35547 8.74121 8.35547 9.19922C8.35547 9.41113 8.43066 9.5957 8.57422 9.73926L10.5566 11.7148L12.2383 13.3145L10.0781 13.1709H9.55176C9.12793 13.1709 8.80664 13.4785 8.80664 13.9092C8.80664 14.3398 9.12109 14.6543 9.55176 14.6543Z"})})},84242:(e,t,o)=>{o.d(t,{v:()=>l});o(67294);var n=o(45238),i=o(85893);const l=(0,n.I)("parentItem",{viewBox:"0 0 10 12",svg:(0,i.jsx)("path",{d:"M8.33984 11.3359C7.01562 11.3359 6.02539 11.041 5.36914 10.4512C4.7168 9.86523 4.39062 8.90625 4.39062 7.57422V3.72461L4.4375 2.19531L3.38281 3.36133L1.56641 5.18359C1.50781 5.24219 1.43945 5.28906 1.36133 5.32422C1.2832 5.35547 1.19922 5.37109 1.10938 5.37109C0.933594 5.37109 0.787109 5.3125 0.669922 5.19531C0.552734 5.07812 0.494141 4.92773 0.494141 4.74414C0.494141 4.57227 0.560547 4.41797 0.693359 4.28125L4.55469 0.414062C4.6875 0.277344 4.84766 0.208984 5.03516 0.208984C5.21875 0.208984 5.37695 0.277344 5.50977 0.414062L9.37109 4.28125C9.50391 4.41797 9.57031 4.57227 9.57031 4.74414C9.57031 4.92773 9.51172 5.07812 9.39453 5.19531C9.27734 5.3125 9.13086 5.37109 8.95508 5.37109C8.86523 5.37109 8.78125 5.35547 8.70312 5.32422C8.625 5.28906 8.55664 5.24219 8.49805 5.18359L6.68164 3.36133L5.62109 2.18945L5.67383 3.72461L5.66797 7.49219C5.66797 8.13281 5.76172 8.64062 5.94922 9.01562C6.14062 9.39062 6.43555 9.66016 6.83398 9.82422C7.23633 9.98438 7.75195 10.0645 8.38086 10.0645C8.54102 10.0645 8.68164 10.0605 8.80273 10.0527C8.92383 10.0488 9.04102 10.0469 9.1543 10.0469C9.33789 10.0469 9.48828 10.1016 9.60547 10.2109C9.72656 10.3203 9.78711 10.4688 9.78711 10.6562C9.78711 10.7891 9.75781 10.8984 9.69922 10.9844C9.64453 11.0703 9.57227 11.1367 9.48242 11.1836C9.39258 11.2344 9.30273 11.2676 9.21289 11.2832C9.0957 11.3066 8.96289 11.3203 8.81445 11.3242C8.66602 11.332 8.50781 11.3359 8.33984 11.3359Z",fill:"currentColor"})})},70663:(e,t,o)=>{o.d(t,{h:()=>l});o(67294);var n=o(45238),i=o(85893);const l=(0,n.I)("replace",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M3.26465 3.96094C2.95996 4.26562 2.979 4.66553 3.23291 4.8877C3.49316 5.12256 3.86133 5.12256 4.16602 4.83057C5.11182 3.80225 6.48291 3.15479 8 3.15479C10.6851 3.15479 12.856 5.12891 13.2051 7.66162H12.2466C11.7642 7.66162 11.6309 8.01709 11.9102 8.41064L13.4209 10.5435C13.6494 10.8608 13.9985 10.8608 14.2334 10.5435L15.7441 8.41699C16.0298 8.02344 15.8965 7.66162 15.4077 7.66162H14.519C14.1445 4.44336 11.3516 1.85986 8 1.85986C6.13379 1.85986 4.43262 2.68506 3.26465 3.96094ZM0.249512 8.42334C-0.0297852 8.81689 0.097168 9.17871 0.585938 9.17871H1.4873C1.85547 12.397 4.64844 14.9805 8 14.9805C9.87256 14.9805 11.5737 14.1553 12.748 12.873C13.0464 12.5684 13.0273 12.1685 12.7734 11.9399C12.5132 11.7051 12.1514 11.7114 11.8403 12.0034C10.9009 13.0381 9.52979 13.6855 8 13.6855C5.32129 13.6855 3.14404 11.7178 2.79492 9.17871H3.74707C4.22949 9.17871 4.36279 8.82324 4.0835 8.42969L2.57275 6.29688C2.34424 5.97949 1.99512 5.97949 1.7666 6.29688L0.249512 8.42334Z"})})},35840:(e,t,o)=>{o.d(t,{R:()=>l,T:()=>i});o(67294);var n=o(45238);const i=(0,o(85893).jsx)("path",{d:"M.281 6.438c0-.875.164-1.696.492-2.461a6.484 6.484 0 011.375-2.032A6.237 6.237 0 016.64.078 6.2 6.2 0 019.11.57c.77.328 1.447.787 2.03 1.375a6.374 6.374 0 011.368 2.032c.333.765.5 1.586.5 2.46 0 .688-.107 1.342-.32 1.961a6.28 6.28 0 01-.868 1.696l3.563 3.578c.11.104.19.226.242.367.057.14.086.29.086.445 0 .22-.05.417-.149.594a1.122 1.122 0 01-1 .57c-.156 0-.307-.028-.453-.086a1.058 1.058 0 01-.382-.25l-3.586-3.585c-.5.333-1.047.596-1.641.789a6.089 6.089 0 01-1.86.28 6.237 6.237 0 01-2.468-.491 6.4 6.4 0 01-2.024-1.367A6.509 6.509 0 01.773 8.913a6.256 6.256 0 01-.492-2.476zm1.664 0c0 .65.12 1.26.36 1.828a4.775 4.775 0 001.015 1.5c.433.427.933.763 1.5 1.007a4.548 4.548 0 001.82.368c.652 0 1.261-.123 1.829-.368a4.747 4.747 0 002.508-2.507 4.567 4.567 0 00.367-1.829c0-.645-.123-1.252-.367-1.82a4.776 4.776 0 00-1.016-1.5A4.578 4.578 0 008.469 2.11a4.567 4.567 0 00-1.828-.367c-.646 0-1.253.123-1.82.367a4.667 4.667 0 00-1.5 1.008c-.433.432-.772.932-1.016 1.5a4.633 4.633 0 00-.36 1.82z"}),l=(0,n.I)("search",{viewBox:"0 0 16 16",svg:i})},8505:(e,t,o)=>{o.d(t,{S:()=>l});o(67294);var n=o(45238),i=o(85893);const l=(0,n.I)("subItem",{viewBox:"0 0 12 12",svg:(0,i.jsx)("path",{d:"M1.17969 0.830078C1.36719 0.830078 1.51953 0.888672 1.63672 1.00586C1.75391 1.12305 1.8125 1.27539 1.8125 1.46289C1.8125 1.57617 1.80859 1.69336 1.80078 1.81445C1.79688 1.93555 1.79492 2.07812 1.79492 2.24219C1.79492 2.89453 1.87891 3.42383 2.04688 3.83008C2.21484 4.23633 2.49023 4.5332 2.87305 4.7207C3.25977 4.9082 3.7793 5.00195 4.43164 5.00195H8.22852L9.62891 5.08984L7.88281 3.50195L6.58203 2.17773C6.52344 2.12305 6.47656 2.05664 6.44141 1.97852C6.41016 1.90039 6.39453 1.81641 6.39453 1.72656C6.39453 1.55078 6.45312 1.4043 6.57031 1.28711C6.69141 1.16992 6.84375 1.11133 7.02734 1.11133C7.19531 1.11133 7.34766 1.17578 7.48438 1.30469L11.3516 5.16602C11.4922 5.29883 11.5625 5.45898 11.5625 5.64648C11.5625 5.83008 11.4922 5.99219 11.3516 6.13281L7.49609 9.97656C7.35156 10.1172 7.19531 10.1875 7.02734 10.1875C6.84375 10.1875 6.69141 10.1289 6.57031 10.0117C6.45312 9.89453 6.39453 9.74805 6.39453 9.57227C6.39453 9.48242 6.41016 9.39844 6.44141 9.32031C6.47656 9.24219 6.52344 9.17383 6.58203 9.11523L7.88281 7.79102L9.62891 6.21484L8.22852 6.29102H4.34961C2.99414 6.29102 2.01172 5.96875 1.40234 5.32422C0.796875 4.67578 0.494141 3.66211 0.494141 2.2832C0.494141 2.11133 0.498047 1.95117 0.505859 1.80273C0.513672 1.6543 0.529297 1.52148 0.552734 1.4043C0.568359 1.31055 0.599609 1.21875 0.646484 1.12891C0.697266 1.03906 0.765625 0.966797 0.851562 0.912109C0.9375 0.857422 1.04688 0.830078 1.17969 0.830078Z",fill:"currentColor"})})},50063:(e,t,o)=>{o.d(t,{X:()=>l});o(67294);var n=o(45238),i=o(85893);const l=(0,n.I)("verificationCheck",{viewBox:"0 0 6 7",svg:(0,i.jsx)("path",{d:"M2.84245 6.11619C2.71116 6.30644 2.53392 6.40156 2.31072 6.40156C2.20131 6.40156 2.10066 6.37881 2.00875 6.33332C1.92123 6.28782 1.83589 6.21545 1.75274 6.11619L0.150985 4.25515C0.0503282 4.12694 0 3.99874 0 3.87053C0 3.73406 0.04814 3.61826 0.14442 3.52314C0.245077 3.42388 0.365427 3.37425 0.50547 3.37425C0.597374 3.37425 0.680525 3.39286 0.754923 3.43008C0.833698 3.46317 0.912473 3.52934 0.991247 3.6286L2.28446 5.21049L5.00875 1.07896C5.13129 0.892857 5.28446 0.799805 5.46827 0.799805C5.60394 0.799805 5.72648 0.841161 5.83589 0.923874C5.9453 1.00659 6 1.11618 6 1.25266C6 1.32297 5.98249 1.39327 5.94748 1.46358C5.91685 1.52975 5.88184 1.59178 5.84245 1.64968L2.84245 6.11619Z"})})}}]);