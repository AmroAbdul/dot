"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6329],{37834:(e,t,i)=>{i.d(t,{FF:()=>h,U4:()=>m,gs:()=>b,jN:()=>p,xx:()=>y,zb:()=>v});i(67294);var o=i(23867),n=i(82990),a=i(9291),r=i(77080),s=i(46096),l=i(50906),d=i(54642),c=i(47307),u=i(92625),g=i(85893);const f=(0,a.defineMessages)({restoringPreviousVersion:{id:"historyModalActions.restoringPreviousVersion.loadingMessage",defaultMessage:"Restoring…"}});function p(e){const{environment:t,from:i,...o}=e;l.y(t,i),s.Z.setState({...o,open:!0,size:50})}const h=()=>{const e=s.Z.state;e.open&&s.Z.setState({...e,size:e.size+20})},m=function(){s.Z.setState({open:!1})};function b(e){const{environment:t,snapshot:i,nextFutureSnapshot:o}=e;l.qD(t,i);const n=s.Z.state;n.open&&s.Z.setState({...n,snapshot:i,nextFutureSnapshot:o,openSnapshotNearTimestamp:void 0})}function v(){const e=s.Z.state;e.open&&s.Z.setState({...e,snapshot:void 0,nextFutureSnapshot:void 0})}async function y(e){if(!s.Z.state.open)return;if(!s.Z.state.snapshot)return;const t="restore_collection",i=s.Z.state.pageHasCollection,p=r.default.checkGate("snapshot_optional_collection_rollback_enabled")&&i?[{key:t,text:(0,g.jsx)(a.FormattedMessage,{defaultMessage:"Also restore databases on this page",id:"historyModal.confirmDialog.selectOption.collection"}),description:(0,g.jsx)(a.FormattedMessage,{defaultMessage:"All database pages will be restored to the previous version, which may impact other users or database views.",id:"historyModal.confirmDialog.selectOption.collection.description"})}]:void 0,{accept:h,selectionResult:b}=await c.confirmUserActionV2({message:(0,g.jsx)("div",{style:{fontWeight:n.Z.fontWeight.semibold,fontSize:"medium"},children:(0,g.jsx)(a.FormattedMessage,{defaultMessage:"Restore to this version?",id:"historyModal.confirmDialog.description"})}),acceptLabel:(0,g.jsx)(a.FormattedMessage,{defaultMessage:"Restore",id:"historyModal.confirmDialog.restoreButton.label"}),selectionItems:p});if(!h)return;l.R9(e,s.Z.state.snapshot),u.j({message:f.restoringPreviousVersion});const v=await d.restoreSnapshot(e,{block:{id:s.Z.state.blockStore.id,spaceId:(0,o.C)(s.Z.state.blockStore.pointer.spaceId)},timestamp:s.Z.state.snapshot.timestamp,shouldRestoreCollection:(null==b?void 0:b.restore_collection)??!1}).next();v.value.error&&c.showErrorMessage(v.value.error.message),u.x(),m()}},67706:(e,t,i)=>{i.d(t,{Z:()=>l});i(67294);var o=i(24405),n=i(82990),a=i(53437),r=i(26388),s=i(85893);function l(e){let{text:t,tooltipText:i,icon:l}=e;window.__c={n:"InlineTextWithIconTooltip"};const d=(0,o.yK)((e=>({icon:{height:"1em",width:"1em",marginRight:"0.25em",fill:e.mediumIconColor,marginBottom:"0.1em"},tooltip:{background:e.contentBackground,boxShadow:e.lightBoxShadow},container:{display:"flex",alignItems:"center",fontWeight:n.Z.fontWeight.regular,color:e.mediumTextColor,fontSize:n.Z.fontSize.UISmall.desktop,textAlign:"center"},text:{display:"inline"}})),[]);return(0,s.jsx)(r.ZP,{style:d.tooltip,render:e=>(0,s.jsx)("div",{style:d.text,...e,children:t}),renderTooltip:()=>(0,s.jsxs)("div",{style:d.container,children:[l(d.icon),(0,s.jsx)("div",{children:i})]}),alignment:a.ZP.Alignment.Start,placement:a.ZP.Placement.Bottom})}},50908:(e,t,i)=>{i.r(t),i.d(t,{default:()=>W});var o=i(67294),n=i(480),a=i(86628),r=i(24405),s=i(21202),l=i(19719),d=i(77907),c=i(68373),u=i(37444),g=i(15145),f=i(17693),p=i(91),h=i(15047),m=i(29369),b=i(82990),v=i(9291),y=i(64921),x=i(31278),M=i(76798),k=i(52867),w=i(70753),R=i(61248),S=i(54642),C=i(17659),I=i(12534),A=i(41549),j=i(73063),Z=i(26388),T=i(85893);function B(e){window.__c={n:"NotificationGroupActionsMenu"};const{notificationActivityPairs:t}=e,i=t.map((e=>{let{notification:t}=e;return t})),s=(0,n.O7)(),d=(0,n.Fy)(),c=(0,v.useIntl)(),u=i?i[0]:void 0,g=(0,a.VK)((()=>i.every((e=>e.read))),[i]),f=(0,a.VK)((()=>A.Fz()),[]),[p,h]=(0,o.useState)(!1),m=(0,o.useCallback)((e=>{i&&u&&(0,I.ZP)({event:e,context:I.Af.NotificationClick,callback:()=>{h(!0);const e=i.map((e=>{let{id:t}=e;return t}));(async()=>{try{await S.setNotificationsStatus(s,{spaceId:u.space_id,notificationIds:e,archived:!0})}finally{h(!1)}})();const o=i.filter((e=>!e.read));C.Jl("mentions",u.space_id,(e=>Math.max(e-o.length,0))),l.Ee(s,{target:"archive",affectedNotificationIds:e,notificationActivityPairs:t})}})}),[s,i,u,t]),y=(0,o.useCallback)((e=>{i&&u&&(0,I.ZP)({event:e,context:I.Af.NotificationClick,callback:()=>{let e;if(h(!0),g){const o=i.map((e=>{let{id:t}=e;return t}));e=async()=>{try{await S.setNotificationsStatus(s,{spaceId:u.space_id,notificationIds:o,read:!1})}finally{h(!1)}},C.Jl("mentions",u.space_id,(e=>e+o.length)),l.Ee(s,{target:"mark_as_unread",affectedNotificationIds:o,notificationActivityPairs:t})}else{const o=i.filter((e=>!e.read)).map((e=>{let{id:t}=e;return t}));e=async()=>{try{await S.setNotificationsStatus(s,{spaceId:u.space_id,notificationIds:o,read:!0})}finally{h(!1)}},C.Jl("mentions",u.space_id,(e=>Math.max(e-o.length,0))),l.Ee(s,{target:"mark_as_read",affectedNotificationIds:o,notificationActivityPairs:t})}e()}})}),[s,i,u,g,t]),x=(0,r.yK)((e=>({container:{display:"flex",height:"min-content",padding:d.isMobile?0:2,borderWidth:d.isMobile?0:1,borderStyle:"solid",borderColor:d.isMobile?"transparent":e.stroke.regular,background:d.isMobile?"transparent":e.surface.elevated,borderRadius:6},button:{height:d.isMobile?30:26,width:d.isMobile?30:26},inboxIconBase:{fill:e.icon.secondary,stroke:e.icon.secondary,strokeOpacity:1,strokeWidth:.25},iconStyle:{fill:e.mediumIconColor,padding:2},readIcon:{width:d.isMobile?21:19,height:d.isMobile?22:20},archiveIcon:{width:d.isMobile?24:23,height:d.isMobile?24:23},ellipsisIcon:{width:d.isMobile?24:23,height:d.isMobile?24:23},headerLabel:{paddingLeft:16,paddingRight:16,paddingTop:10,fontWeight:b.Z.fontWeight.semibold}})),[d]);return u?"archived_only"===f?null:(0,T.jsxs)("div",{style:x.container,children:[(0,T.jsx)(Z.ZP,{renderTooltip:()=>(0,T.jsx)(v.FormattedMessage,{...N.archiveNotificationGroup}),render:e=>(0,T.jsx)(j.Z,{ariaLabel:c.formatMessage(N.archiveNotificationGroup),style:x.button,icon:k.H,iconStyle:{...x.iconStyle,...x.archiveIcon,height:18,width:18,...x.inboxIconBase},onClick:m,disabled:p,...e})}),(0,T.jsx)(Z.ZP,{renderTooltip:()=>g?(0,T.jsx)(v.FormattedMessage,{...N.markNotificationGroupAsUnread}):(0,T.jsx)(v.FormattedMessage,{...N.markNotificationGroupAsRead}),render:e=>(0,T.jsx)(j.Z,{ariaLabel:g?c.formatMessage(N.markNotificationGroupAsUnread):c.formatMessage(N.markNotificationGroupAsRead),style:x.button,icon:g?R.F:w.F,iconStyle:{...x.iconStyle,...x.readIcon,...g?{height:17,width:17}:{height:16,width:16},...x.inboxIconBase},onClick:y,disabled:p,...e})})]}):null}const N=(0,v.defineMessages)({markNotificationGroupAsRead:{defaultMessage:"Mark notifications in this page as read",id:"NotificationGroupActionsMenu.markNotificationAsRead.tooltipMessage"},markNotificationGroupAsUnread:{defaultMessage:"Mark notifications in this page as unread",id:"NotificationGroupActionsMenu.markNotificationAsUnread.tooltipMessage"},archiveNotificationGroup:{defaultMessage:"Archive notifications in this page",id:"NotificationGroupActionsMenu.handleArchive.tooltipMessage"},changePageNotificationSettings:{defaultMessage:"Change page notification settings",id:"NotificationGroupActionsMenu.notificationSettings.tooltipMessage"}}),_=o.memo(B);var L=i(22649);const G=(0,v.defineMessages)({open:{defaultMessage:"Open",id:"toggleButton.open"},close:{defaultMessage:"Close",id:"toggleButton.close"}});function z(e){window.__c={n:"ToggleButton"};const t=(0,n.Fy)(),i=(0,v.useIntl)(),a=t.isMobile?30:22,s=(0,r.yK)((()=>{const i=e.color||"inherit",o="chevron"===e.icon?`rotateZ(${e.open?-180:0}deg)`:`rotateZ(${e.open?180:90}deg)`,n="chevron"===e.icon,r=n&&t.isMobile;return{button:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:a,height:a,borderRadius:"100%",...e.style},arrow:{width:r?14:n?12:"0.6875em",height:r?14:n?12:"0.6875em",transition:"transform 200ms ease-out",transform:o,fill:i,opacity:e.fill?1:.5}}}),[t.isMobile,e.color,e.fill,e.icon,e.open,e.style,a]),l=(0,o.useMemo)((()=>{switch(e.icon){case"chevron":return(0,f.A)(s.arrow);case"triangle":default:return(0,p.L)(s.arrow)}}),[e.icon,s.arrow]);return(0,T.jsxs)(y.Z,{ariaLabel:e.open?i.formatMessage(G.close):i.formatMessage(G.open),"aria-describedby":e["aria-describedby"],"aria-expanded":e.open,"aria-controls":e.open?e["aria-controls"]:void 0,style:s.button,onClick:e.onClick,onMouseDown:e.onMouseDown,disabled:e.disabled,allowShiftClick:!0,children:[e.tapArea&&(0,T.jsx)("div",{style:{position:"absolute",opacity:0,width:e.tapArea.size,height:e.tapArea.size,top:-(e.tapArea.size-a)/2,left:-(e.tapArea.size-a)/2}}),l]})}const F=function(e){window.__c={n:"NotificationGroupTitle"};const{titledRecordStore:t,getRecordModel:i,notifications:s,isNotificationGroupExpanded:d,toggleNotificationGroup:f,isNotificationGroupTitleHovered:p,setIsNotificationGroupTitleHovered:v}=e,k=(0,n.Fy)(),[w,R]=(0,o.useState)(!1),S=(0,a.VK)((()=>t.getModel()),[t]),C=(0,a.VK)((()=>null==S?void 0:S.getRenderIcon({getRecordModel:i})),[S,i]),I=(0,a.VK)((()=>t instanceof c.G&&t.isEmptyPage()),[t]),A=(0,a.VK)((()=>{if(S&&S.table!==h.bx&&S.table!==m.e0)return S.getRenderUrl({getRecordModel:t.getRecordModel,pageVisitSource:g.tY.Notification})}),[S,t]),j=(0,a.VK)((()=>s.filter((e=>{let{notification:t}=e;return!t.read})).length),[s]),Z=(0,n.O7)(),B=(0,o.useCallback)((e=>{e.stopPropagation(),l.Ee(Z,{target:"title",notificationActivityPairs:s})}),[Z,s]),N=s&&(p||k.isMobile),G=(0,o.useRef)(null),[F,P]=(0,o.useState)(!1);(0,o.useEffect)((()=>{if(!G)return;const{current:e}=G;if(!e)return;const t="IntersectionObserver"in window?new IntersectionObserver((e=>{let[t]=e;return P(t.intersectionRatio<1)}),{threshold:[1]}):void 0;return null==t||t.observe(e),()=>null==t?void 0:t.unobserve(e)}),[G]);const D=(0,r.yK)((e=>({container:{position:"sticky",top:-.01,zIndex:10,background:e.buttonBackground,boxShadow:F?"0px 1px 1px rgba(0, 0, 0, 0.03)":"0 0 0 transparent",transition:"box-shadow 300ms"},button:{display:"flex",gap:10,justifyContent:"space-between",alignItems:"center",height:40,paddingLeft:3,background:p?void 0:e.buttonBackground,paddingRight:u.zF,borderTopLeftRadius:4,borderTopRightRadius:4,...!d&&{borderBottomLeftRadius:4,borderBottomRightRadius:4}},hoveredButton:{background:e.whiteButtonHoveredBackground,borderTopLeftRadius:4,borderTopRightRadius:4,...!d&&{borderBottomLeftRadius:4,borderBottomRightRadius:4}},pressedButton:{background:e.whiteButtonPressedBackground,borderTopLeftRadius:4,borderTopRightRadius:4,...!d&&{borderBottomLeftRadius:4,borderBottomRightRadius:4}},icon:{...L.e9,verticalAlign:"unset",marginRight:4},pageIcon:{...L.e9,verticalAlign:"unset",marginLeft:-1,marginRight:3},nonActionsArea:{display:"flex",flexShrink:2,minWidth:0},pageTitleButton:{display:"flex",alignItems:"center",height:24,minWidth:0,borderRadius:4,paddingLeft:2,paddingRight:6},recordTitle:{fontSize:14,fontWeight:j>0?b.Z.fontWeight.medium:b.Z.fontWeight.regular,color:w?e.mediumTextColor:e.regularTextColor,display:"inline",width:"100%",...b.Z.textOverflowStyle},updateCount:{color:e.mediumTextColor,fontSize:12},toggleContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:24,width:24,flexShrink:0},toggleChevron:{color:e.lightIconColor},notificationGroupActionsMenu:{display:"flex",justifyContent:"center",alignItems:"center",flexShrink:0},noBackground:{background:void 0}})),[d,p,w,j,F]);return S?(0,T.jsx)("div",{ref:G,style:D.container,children:(0,T.jsxs)(y.Z,{onClick:f,onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),style:D.button,hoveredStyle:D.hoveredButton,pressedStyle:D.pressedButton,mobileFeedback:!1,children:[(0,T.jsxs)("div",{style:D.nonActionsArea,children:[(0,T.jsx)("div",{style:D.toggleContainer,children:(0,T.jsx)(z,{fill:!0,isSidebar:!0,icon:"chevron",open:d,onClick:f,color:D.toggleChevron.color})}),(0,T.jsxs)(y.Z,{style:D.pageTitleButton,href:A,external:!1,disabled:!Boolean(A),onMouseEnter:()=>R(!0),onMouseLeave:()=>R(!1),hoveredStyle:D.noBackground,pressedStyle:D.noBackground,onClick:B,children:[(0,T.jsx)(x.Z,{disabled:!0,icon:C,isEmptyPage:I,size:Boolean(C)?12:14,style:C?D.icon:D.pageIcon}),(0,T.jsx)(M.Z,{store:t,style:D.recordTitle,shouldWrap:!0})]})]}),(0,T.jsx)("div",{style:D.notificationGroupActionsMenu,children:N&&(0,T.jsx)(_,{notificationActivityPairs:s})})]})}):null};function P(e){window.__c={n:"NotificationGroup"};const{notifications:t,rootStore:i,source:g,tab:f,isFirst:p}=e,[h,m]=(0,o.useState)(!1),[b,v]=(0,o.useState)(!0),y=(0,n.O7)(),x=(0,o.useCallback)((()=>{v(!b),l.Ee(y,{target:b?"collapse":"expand",notificationActivityPairs:t})}),[y,b,t]),M=(0,a.VK)((()=>{const e=t[0].notification.navigable_block_id;if(e)return c.G.createChildStore(i,{table:s.iU,id:e})}),[i,t]),k=(0,r.yK)((e=>({toggle:{color:e.lightIconColor},flatIndentFooter:{height:10,backgroundColor:e.sidebarBackground},groupContainer:{backgroundColor:h?e.buttonHoveredBackground:e.buttonBackground,borderRadius:4,marginTop:p?0:u.MY,marginBottom:u.MY,marginLeft:u.MY,marginRight:u.MY},divider:{height:8,backgroundColor:e.sidebarBackground}})),[h,p]);if(!M){const{notification:i,activity:o}=t[0],n={source:"notifications_tab",tab:e.tab,notification:i};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{style:k.groupContainer,children:(0,T.jsx)(d.LazyActivityNotification,{activity:o,rootStore:e.rootStore,tabArgs:n,isFirst:!0,isLast:!0,useInboxRedesign:!0},o.id)}),(0,T.jsx)("div",{style:k.divider})]})}const w=t.map(((i,o)=>{let{notification:n,activity:a}=i;const r={source:"notifications_tab",tab:e.tab,notification:n};return(0,T.jsx)(d.LazyActivityNotification,{activity:a,rootStore:e.rootStore,isFirst:0===o,isLast:o===t.length-1,tabArgs:r,useInboxRedesign:!0},a.id)}));return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)("div",{style:k.groupContainer,children:[(0,T.jsx)(F,{titledRecordStore:M,getRecordModel:i.getRecordModel,activity:t[0].activity,tabArgs:{source:g,tab:f,notification:t[0].notification},notifications:t,isNotificationGroupTitleHovered:h,setIsNotificationGroupTitleHovered:m,isNotificationGroupExpanded:b,toggleNotificationGroup:x}),(0,T.jsx)("div",{children:b&&w})]}),(0,T.jsx)("div",{style:k.divider})]})}function D(e){window.__c={n:"NotificationGroups"};const{notifications:t,rootStore:i,source:o,tab:n}=e,a=(0,r.yK)((e=>({container:{display:"flex",flexDirection:"column",backgroundColor:e.contentBackground}})),[]);return(0,T.jsx)("div",{style:a.container,children:Array.from(t).map(((e,t,a)=>{let[r,s]=e;return(0,T.jsx)(P,{notifications:s,rootStore:i,source:o,tab:n,isFirst:0===t,isLast:t===a.length-1},`group-${r}`)}))})}D.displayName="NotificationGroups";const W=D},93963:(e,t,i)=>{i.d(t,{z:()=>r});i(67294);var o=i(24405),n=i(9291),a=i(85893);function r(e){let{color:t,size:i,style:r}=e;window.__c={n:"StatusDot"};const s=(0,n.useIntl)(),l=(0,o.yK)((e=>({dot:{height:i||8,width:i||8,background:t||e.blueColor,flexShrink:0,borderRadius:"100%",pointerEvents:"none",...r}})),[i,t,r]);return(0,a.jsx)("div",{role:"img","aria-label":s.formatMessage({id:"statusDot.ariaLabel",defaultMessage:"New"}),style:l.dot})}},22649:(e,t,i)=>{i.d(t,{OD:()=>l,TL:()=>u,_W:()=>c,b9:()=>g,c3:()=>d,e9:()=>r,lS:()=>a,nP:()=>s});var o=i(82990);const n={userSelect:"text",WebkitUserSelect:"text"},a={padding:1,...n},r={display:"inline-flex",marginRight:2,verticalAlign:"text-top"},s={fontWeight:o.Z.fontWeight.semibold};function l(e){return{padding:0,paddingLeft:d(e),paddingRight:16,paddingBottom:3,...n}}function d(e){const{source:t,isMobile:i}=e;return"notifications_tab"===t?52+(i?3:2):52}function c(e){return{height:26,paddingLeft:8,paddingRight:8,color:e.mediumTextColor}}function u(e){return{display:"inline",whiteSpace:"normal",marginRight:e?3:0,wordBreak:"break-word",...s}}function g(e){return{boxShadow:e.plainButtonBoxShadow,height:26,paddingLeft:8,paddingRight:8,fontWeight:500,color:e.regularTextColor}}},46096:(e,t,i)=>{i.d(t,{Z:()=>a});var o=i(49085);class n extends o.default{getInitialState(){return{open:!1}}}const a=new n},8504:(e,t,i)=>{i.d(t,{J:()=>a});i(67294);var o=i(45238),n=i(85893);const a=(0,o.I)("versionHistoryThick",{viewBox:"0 0 14 14",svg:(0,n.jsx)("path",{d:"M0 7C0 3.136 3.129 0 6.993 0C10.864 0 14 3.136 14 7C14 10.864 10.864 14 6.993 14C3.129 14 0 10.864 0 7ZM1.4 7C1.4 10.094 3.906 12.6 7 12.6C10.094 12.6 12.6 10.094 12.6 7C12.6 3.906 10.094 1.4 7 1.4C3.906 1.4 1.4 3.906 1.4 7ZM6.3 3.5H7.35V7.175L10.5 9.044L9.975 9.905L6.3 7.7V3.5Z"})})},70693:(e,t,i)=>{i.d(t,{mb:()=>s,nK:()=>l,pe:()=>d});var o=i(40506),n=i(7057),a=i(53877),r=i(42875);function s(e){const{dateTime:t,intl:i,shortenDateAndRange:o}=e,r=a.OQ.toPersistedDate(t.valueOf());return n.ZV({value:r,allowRelativeDates:!0,intl:i,shortenDateAndRange:o,displayInUserTimezone:!0})}function l(e){const{dateTime:t,intl:i,userTimeZone:o,displayInUserTimezone:r,alwaysIncludeTimezone:s}=e,l=a.OQ.toPersistedDateTime(t.valueOf(),t.zoneName);return n.ZV({value:l,allowRelativeDates:!0,intl:i,userTimeZone:o,displayInUserTimezone:r,alwaysIncludeTimezone:s})}function d(e){const{luxonRange:t,intl:i}=e,s=a.OQ.toPersistedDateRange(t),l=n.ZV({value:s,allowRelativeDates:!1,shortenDateAndRange:!0,intl:i,displayInUserTimezone:!0}),d=t.end.setZone((0,r.r)()),c=n.mr({start_time:d.toFormat(o.jK),humanReadable:!1,intl:i});return i.formatMessage({id:"verification.timeRange",defaultMessage:"{formattedDateRange} at {formattedEndTime}"},{formattedDateRange:l,formattedEndTime:c})}}}]);