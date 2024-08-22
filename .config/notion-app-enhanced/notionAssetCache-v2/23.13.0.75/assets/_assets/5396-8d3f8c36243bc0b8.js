"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[5396],{61652:(e,t,s)=>{s.d(t,{y1:()=>ne,BO:()=>ie,Qr:()=>re,gJ:()=>ge,PN:()=>de,ZO:()=>K,hN:()=>me,g:()=>pe,Mj:()=>te,$G:()=>J,AW:()=>H,Tp:()=>ue,zh:()=>he,GI:()=>le,q$:()=>Q});s(67294);var n=s(68626),i=s(42875),r=s(59730),o=s(15157),a=s(72126),l=s(29477),d=s(21202),p=s(19889),c=s(9291),u=s(27617),m=s(86628),g=s(24405),h=s(82990),x=s(19306),f=s(61519),v=s(68785),M=s(85893);const y={fontWeight:h.Z.fontWeight.semibold};const b=function(e){let{exportProgressStore:t,disabledExportTeamNames:s}=e;window.__c={n:"ExportProgress"};const{messageStyle:n,spinnerContainerStyle:i}=(0,g.yK)((e=>({messageStyle:{fontSize:14,color:e.mediumTextColor,textAlign:"center"},spinnerContainerStyle:{marginTop:24,marginBottom:24,display:"flex",justifyContent:"center"}})),[]);return(0,M.jsxs)("div",{style:n,children:[(0,M.jsx)("div",{style:i,children:(0,M.jsx)(v.Z,{})}),(0,M.jsx)(C,{exportProgressStore:t}),(0,M.jsx)(T,{exportProgressStore:t}),(0,M.jsx)(S,{disabledExportTeamNames:s})]})};function S(e){let{disabledExportTeamNames:t}=e;return t.length>0?(0,M.jsxs)("span",{children:[(0,M.jsx)(f.Z,{size:10}),(0,M.jsx)("p",{children:(0,M.jsx)(c.FormattedMessage,{id:"exportActions.exportDisabledTeams.message",defaultMessage:"Export is disabled for the following teamspaces: <b>{teamNames}</b>",values:{teamNames:(0,x.W)(t),b:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,M.jsx)("span",{style:y,children:t})}}})})]}):null}function T(e){let{exportProgressStore:t}=e;window.__c={n:"Email"};const{targetEmailAddress:s}=(0,m.VK)((()=>t.state),[t]);return s?(0,M.jsx)("p",{children:(0,M.jsx)(c.FormattedMessage,{id:"exportProgressDialog.emailMessage",defaultMessage:"We'll also send you an email with the download link."})}):null}function C(e){let{exportProgressStore:t}=e;window.__c={n:"Progress"};const s=(0,m.VK)((()=>t.state.pagesExported),[t]);return s>0?(0,M.jsx)("p",{children:(0,M.jsx)(c.FormattedMessage,{id:"exportProgressDialog.exportedPagesMessage",defaultMessage:"{pagesExported, plural, one {{pagesExported} page exported} other {{pagesExported} pages exported}}",values:{pagesExported:s}})}):(0,M.jsx)("p",{children:(0,M.jsx)(c.FormattedMessage,{id:"exportProgressDialog.exportStartedMessage",defaultMessage:"Exporting…"})})}var w=s(19037),_=s(33954),j=s(33929),I=s(37034),k=s(25976),O=s(80444),Z=s(77556),F=s(71071),P=s(49085);class R extends P.default{getInitialState(){return{pagesExported:0}}}const E=R;var B=s(68373),A=s(20454),L=s(88893),D=s(50906),V=s(91536),N=s(54642),z=s(47307),U=s(99813),W=s(92625);const q=(0,c.defineMessages)({exporting:{id:"exportActions.exporting.loadingMessage",defaultMessage:"Exporting"},exportAuditLogEmail:{id:"exportActions.auditLog.exporting.EmailMessage",defaultMessage:"Your CSV export is currently being generated. The generated CSV has a 2-hour delay from the real time audit log. Once it is ready, an email will be sent to you with the download link."},exportCSVEmail:{id:"exportActions.exportingCSV.EmailMessage",defaultMessage:"Your CSV export is currently being generated. Once it is ready, an email will be sent to you with the download link."},exportFailed:{id:"exportActions.exportFailedError.message",defaultMessage:"Export failed."},adminMessage:{defaultMessage:"Admin",id:"export.userPermissionsRole.admin.message"},workspaceOwnerMessage:{defaultMessage:"Workspace owner",id:"export.userPermissionsRole.workspaceOwner.message"},memberMessage:{defaultMessage:"Member",id:"export.userPermissionsRole.member.message"},membershipAdminMessage:{defaultMessage:"Membership admin",id:"export.userPermissionsRole.membershipAdmin.message"},guestMessage:{defaultMessage:"Guest",id:"export.userPermissionsRole.guest.message"},idMessage:{defaultMessage:"ID",id:"export.csvHeader.id"},emailMessage:{defaultMessage:"Email",id:"export.csvHeader.email"},nameMessage:{defaultMessage:"Name",id:"export.csvHeader.name"},roleMessage:{defaultMessage:"Role",id:"export.csvHeader.role"},permissionGroupsMessage:{defaultMessage:"Permission groups",id:"export.csvHeader.permissionGroups"},pagesMessage:{defaultMessage:"Pages",id:"export.csvHeader.pages"},partitionMessage:{defaultMessage:"Export is still in progress due to file size. We will send you an email about its progress.",id:"export.exportPartitioned.message"},privatePageMessage:{defaultMessage:"Private page",id:"export.privatePageTitle.message"},pageTitleAndIdMessage:{defaultMessage:"{pageTitle} ({pageId})",id:"export.pageTitleAndId.message"},pageSeparatorMessage:{defaultMessage:", ",id:"export.pageSeparator.message"}});async function K(e,t){if(!se({environment:e,...t}))return void D.y4(e,{target:"block",format:t.exportOptions.exportType,recursive:t.recursive});const{currentUserStore:s}=O.default.state;if(!s)return void D.y4(e,{target:"block",format:t.exportOptions.exportType,recursive:t.recursive});const n=s.getEmail();if(!n)return void D.y4(e,{target:"block",format:t.exportOptions.exportType,recursive:t.recursive});D.Md(e,{target:"block",format:t.exportOptions.exportType,recursive:t.recursive}),"currentView"===t.exportOptions.collectionViewExportType&&(t.exportOptions.preferredViewMap=G(s.id));const i=N.exportBlock(e,t);await $(e,i,t.recursive,n)}async function H(e,t){if(!se({environment:e,recursive:!0,exportOptions:t.exportOptions}))return void D.y4(e,{target:"space",format:t.exportOptions.exportType,recursive:!0});const{currentUserStore:s}=O.default.state;if(!s)return void D.y4(e,{target:"space",format:t.exportOptions.exportType,recursive:!0});const n=s.getEmail();if(!n)return void D.y4(e,{target:"space",format:t.exportOptions.exportType,recursive:!0});D.Md(e,{target:"space",format:t.exportOptions.exportType,recursive:!0}),"currentView"===t.exportOptions.collectionViewExportType&&(t.exportOptions.preferredViewMap=G(s.id));const i=N.exportSpace(e,t);await $(e,i,!0,n)}async function $(e,t,s,n){const{currentSpaceViewStore:i,currentSpaceStore:r}=O.default.state;if(!i)return;const o=new E;o.setState({pagesExported:0,targetEmailAddress:n});let a,d=!1;const p=i.getTeamsStores().filter((e=>e.getSetting("disable_export"))).flatMap((e=>e.getName()||[]));if(s){const t=p.length>0?6e3:1250;a=(0,l.Vs)(t);const s={exportProgressStore:o,disabledExportTeamNames:p};z.showDialog({message:(0,M.jsx)(b,{...s}),showCancel:!1,keepFocus:!0,disableBackgroundDismiss:!0,items:[{label:(0,M.jsx)(c.FormattedMessage,{id:"exportProgressDialog.closeButton.label",defaultMessage:"Close"}),onAccept:()=>{he({environment:e,spaceId:null==r?void 0:r.id}),d=!0}}]})}else a=Promise.resolve(),W.j({message:q.exporting});for await(const l of t){if(d)return;if(l.error)return W.x(),void z.showErrorMessage(j.default.formatMessage(q.exportFailed));{const{value:t}=l;if("complete"===t.type||"partition"===t.type)return await a,W.x(),void("complete"===t.type?(z.dismissDialog(),!d&&t.exportURL&&U.oi(e,t.exportURL)):z.showMessage({message:j.default.formatMessage(q.partitionMessage)}));o.setState({...o.state,pagesExported:t.pagesExported})}}}function G(e){const t={};return o.Z.scan(((s,n)=>{if(s.includes(Z.Z.PREFERENCE_KEY_PREFIX)&&s.includes(e)){const e=s.split(Z.Z.PREFERENCE_KEY_PREFIX)[1];e&&n&&(t[e]=n)}})),t}function Q(e){const{root:t,environment:s,isCollectionViewExportTypeSupported:n}=e,r=s.currentUser.id,o=ae(r),a=o&&o.exportType||"markdown",l=n?"currentView":void 0,d="pdf"===a?{exportType:"pdf",timeZone:(0,i.r)(),pdfFormat:le(r),locale:"en",collectionViewExportType:l}:{exportType:a,timeZone:(0,i.r)(),locale:"en",collectionViewExportType:l};ie(s,{open:!0,root:t,recursive:"space"===t.table,exportOptions:d,shouldExportComments:!1})}const Y=(e,t)=>{switch(t){case"editor":return e.formatMessage(q.workspaceOwnerMessage);case"membership_admin":return e.formatMessage(q.membershipAdminMessage);case"read_and_write":return e.formatMessage(q.memberMessage);case"none":return e.formatMessage(q.guestMessage);default:return n.log({level:"error",from:"exportActions",type:"roleNotFound",data:{miscDataToConvertToString:{role:t}}}),""}};async function J(e,t){const{spaceStore:s,subscriptionData:n,intl:i}=t,r=s.getPermissionGroups();await N.exportSpaceMembers(e,{spaceId:s.getSpaceId()});const o=a.oA(await Promise.all(n.users.map((async e=>{const t=A.U.createChildStore(s,{table:p.KJ,id:e.userId});await t.load();const n=t.getEmail(),o=t.getFullName(i),l=a.oA(r.filter((t=>(t.user_ids||[]).includes(e.userId))).map((e=>e.name)).sort());if(n||o)return[n||"",o||"",Y(i,e.role),l.join(","),t.id]}))));X(ee([[q.emailMessage,q.nameMessage,q.roleMessage,q.permissionGroupsMessage,q.idMessage].map((e=>i.formatMessage(e))),...o]),"members.csv")}function X(e,t){const s=document.createElement("a");s.setAttribute("href",`data:text/csv;charset=utf-8,${encodeURIComponent(e)}`),s.setAttribute("download",t),s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s)}function ee(e){return e.map((e=>e.map((e=>((e=e.replace(/"/g,'""')).search(/("|,|\n)/g)>=0&&(e=`"${e}"`),e))).join(","))).join("\n")}async function te(e,t){let{guests:s,intl:n,spaceStore:i}=t;await N.exportSpaceGuests(e,{spaceId:i.getSpaceId()});const r=n.formatMessage(q.pageSeparatorMessage),o=a.oA(await Promise.all(s.map((async t=>{const s=A.U.createChildStore(i,{table:p.KJ,id:t.userId});async function o(t){const s=B.G.createChildStore(i.getPagesStore(),{table:d.iU,id:t});return await s.load(),(0,I.V)(s,n,e,!1)??n.formatMessage(q.privatePageMessage)}const[,...a]=await Promise.all([s.load(),...t.guestPageIds.map((e=>async function(e){return n.formatMessage(q.pageTitleAndIdMessage,{pageId:e,pageTitle:await o(e)})}(e)))]),l=s.getEmail(),c=s.getFullName(n);if(l||c)return[l||"",c||"",a.join(r),s.id]})))),l=[[q.emailMessage,q.nameMessage,q.pagesMessage,q.idMessage].map((e=>n.formatMessage(e))),...o];X(ee(l),"guests.csv"),V.LA(e,{line_count:l.length})}function se(e){return!("pdf"===e.exportOptions.exportType&&e.recursive)||ne(e.environment)}function ne(e){return(0,L.qb)(e,"enterprise")||(0,L.qb)(e,"business")||w._T()}function ie(e,t){const s=F.ZP.state,n=e.currentUser.id;let i=t;if(F.Sw(i)&&!ne(e))if("space"===i.root.table){const e=s.open&&!F.Sw(s)?s.exportOptions.exportType:"html";i={...i,exportOptions:{...i.exportOptions,exportType:e}}}else i={...i,recursive:!1};if(!se({environment:e,...i}))throw new r.D3("Invalid export options",{data:i});F.ZP.setState(i),function(e){const t=F.ZP.state;if(t.open){const s={...ae(e),exportType:t.exportOptions.exportType};"pdf"===t.exportOptions.exportType&&(s.pdfFormat=t.exportOptions.pdfFormat),o.Z.set({userId:e,key:oe,value:s})}}(n)}function re(){F.ZP.setState({open:!1,shouldExportComments:!1})}const oe="ExportSettings";function ae(e){return o.Z.get({userId:e,key:oe})}function le(e){const t=ae(e);return t&&t.pdfFormat||F.jR()}async function de(e,t){const{currentUserStore:s}=O.default.state,{spaceId:i}=t;if(!s)return n.log({level:"error",from:"exportActions",type:"exportAuditLogCSV-currentUserStoreNotFound",data:{miscDataToConvertToString:{spaceId:i}}}),z.showMessage({message:j.default.formatMessage(q.exportFailed)}),void D.y4(e,{target:"auditLog",format:"csv",recursive:!1});if(!s.isDefined())return n.log({level:"error",from:"exportActions",type:"exportAuditLogCSV-currentUserValueNotFound",data:{miscDataToConvertToString:{spaceId:i}}}),z.showMessage({message:j.default.formatMessage(q.exportFailed)}),void D.y4(e,{target:"auditLog",format:"csv",recursive:!1});D.Md(e,{target:"auditLog",format:"csv",recursive:!1});const r=N.exportAuditLog(e,t);await ce(r,q.exportAuditLogEmail)}async function pe(e){const{environment:t,data:s}=e;D.Md(t,{target:"domainClaimableSpaces",format:"csv",recursive:!1});const n=N.exportDomainClaimableSpaces(t,s);await ce(n,q.exportCSVEmail)}async function ce(e,t){const s=await e.next();if(s.value.error){const e=(0,_.HV)(j.default.getIntl(),s.value.error);z.showErrorMessage(e)}else z.showMessage({message:j.default.formatMessage(t)})}async function ue(e,t){D.Md(e,{target:"userAnalytics",format:"csv",recursive:!1});const s=N.exportUserAnalytics(e,t);await ce(s,q.exportCSVEmail)}async function me(e,t){D.Md(e,{target:"contentAnalytics",format:"csv",recursive:!1});const s=N.exportContentAnalytics(e,t);await ce(s,q.exportCSVEmail)}async function ge(e,t){D.Md(e,{target:"adminContentSearchAnalytics",format:"csv",recursive:!1});const s=N.exportAdminContentSearch(e,{spaceId:t.spaceId,sort:{field:"relevance",direction:"desc"},query:t.filters.query,audience:t.filters.audience,lastEditedTime:(0,u.Hq)(t.filters.lastEditedTime),createdTime:(0,u.Hq)(t.filters.createdTime),createdBy:t.filters.createdBy,sharedWith:t.filters.sharedWith,teamspaceIds:t.filters.teamIds});await ce(s,q.exportCSVEmail)}async function he(e){let{environment:t,spaceId:s}=e;if(!s)return;const n=await N.getActiveExportTasks(t,{spaceId:s});"success"===n.type&&k.Z.setState({count:n.data.length})}},27617:(e,t,s)=>{s.d(t,{Hq:()=>g,Ij:()=>m,KN:()=>a,PM:()=>d,Qb:()=>c,Zy:()=>p,dd:()=>o,eW:()=>u,mK:()=>h,o0:()=>l});var n=s(7057),i=s(53877),r=s(42875);function o(e,t){return(0,n.ZW)(i.OQ.notionDateTimeToLuxon(e,t.locale),"short")}function a(e,t){return(0,n.ZW)(i.OQ.notionDateTimeToLuxon(e,t.locale),"time")}function l(e,t){return i.OQ.notionDateTimeToLuxon(e,t.locale).toFormat(i._F)}function d(e,t){let s={starting:void 0,ending:void 0};var n,i,o,a;if(t.starting&&t.ending)s={starting:{type:"datetime",start_time:"",start_date:t.starting.start_date,time_zone:""},ending:{type:"datetime",start_time:"",start_date:t.ending.start_date,time_zone:""}},null!==(n=e.starting)&&void 0!==n&&n.start_time&&null!==(i=e.starting)&&void 0!==i&&i.time_zone&&(s.starting={...s.starting,start_time:e.starting.start_time,time_zone:e.starting.time_zone}),null!==(o=e.ending)&&void 0!==o&&o.start_time&&null!==(a=e.ending)&&void 0!==a&&a.time_zone?s.ending={...s.ending,start_time:e.ending.start_time,time_zone:e.ending.time_zone}:s={starting:{...s.starting,start_time:"00:00",time_zone:(0,r.r)()},ending:{...s.ending,start_time:"23:59",time_zone:(0,r.r)()}};else if(t.starting){var l,d;s=null!==(l=e.starting)&&void 0!==l&&l.start_time&&null!==(d=e.starting)&&void 0!==d&&d.time_zone?{starting:{type:"datetime",start_date:t.starting.start_date,start_time:e.starting.start_time,time_zone:e.starting.time_zone},ending:e.ending}:{starting:{type:"datetime",start_date:t.starting.start_date,start_time:"00:00",time_zone:(0,r.r)()},ending:e.ending}}else if(t.ending){var p,c;s=null!==(p=e.ending)&&void 0!==p&&p.start_time&&null!==(c=e.ending)&&void 0!==c&&c.time_zone?{ending:{type:"datetime",start_date:t.ending.start_date,start_time:e.ending.start_time,time_zone:e.ending.time_zone},starting:e.starting}:{ending:{type:"datetime",start_date:t.ending.start_date,start_time:"23:59",time_zone:(0,r.r)()},starting:e.starting}}else s={starting:e.starting,ending:e.ending};return s}function p(e){return e.starting&&e.ending?{starting:{type:"date",start_date:e.starting.start_date},ending:{type:"date",start_date:e.ending.start_date}}:e.starting?{starting:{type:"date",start_date:e.starting.start_date}}:e.ending?{ending:{type:"date",start_date:e.ending.start_date}}:{}}function c(e){if(e)return{type:"date",start_date:e.start_date}}function u(e){return`${e.actorType}:${e.actorId}`}function m(e){const t=e.split(":");if(2===t.length)return"bot"===t[0]?{actorId:t[1],actorType:"bot"}:"notion_user"===t[0]?{actorId:t[1],actorType:"notion_user"}:void 0}function g(e){return{starting:e.starting?{type:"date",start_date:e.starting.start_date}:void 0,ending:e.ending?{type:"date",start_date:e.ending.start_date}:void 0}}function h(e){return void 0===e.starting&&void 0===e.ending}},45257:(e,t,s)=>{s.d(t,{Z:()=>l});s(67294);var n=s(480),i=s(24405),r=s(42853),o=s(64921),a=s(85893);function l(e){window.__c={n:"CollectionViewFilterPill"};const{icon:t,title:s,on:l,hasDiff:p,wrapStyle:c,innerStyle:u,hideChevron:m}=e,g=(0,i.Fg)(),h=(0,n.O7)();return(0,a.jsxs)("div",{style:{borderRadius:14,marginRight:6,display:"inline-flex",...p&&{position:"relative"},...c},children:[(0,a.jsxs)(o.Z,{disabled:e.disabled,style:d(Boolean(l),g,u,h.device.isMobile),hoveredStyle:l?{background:g.outlineBlueButtonHoveredBackground}:void 0,pressedStyle:l?{background:g.outlineBlueButtonPressedBackground}:void 0,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onClick:e.onClick,onDoubleClick:e.onDoubleClick,children:[t,s,!m&&(0,r.i)({width:10,marginLeft:4,marginTop:1,fill:l?g.blueColor:g.lightIconColor})]}),p&&(0,a.jsx)("div",{style:{position:"absolute",top:-2,right:-2,background:"dark"===g.mode?g.accentColors.orange[500]:g.accentColors.orange[300],border:`1px solid ${g.contentBackground}`,width:9,height:9,borderRadius:9}})]})}function d(e,t,s,n){return{fontSize:14,display:"inline-flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap",borderRadius:32,height:n?28:24,lineHeight:n?"28px":"24px",padding:"0 8px",border:`1px solid ${t.outlineButtonBorder}`,color:t.mediumTextColor,...e&&{color:t.blueColor,border:`1px solid ${t.filterPillBorder}`,background:t.filterPillBackground},...s}}},86125:(e,t,s)=>{s.d(t,{Z:()=>o});s(67294);var n=s(9291),i=s(74136),r=s(85893);function o(e){return(0,r.jsx)(i.Z,{...e,children:"membership_admin"===e.role?(0,r.jsx)(n.FormattedMessage,{id:"spacePermissionsSettings.user.membershipAdmin",defaultMessage:"Membership admin"}):(0,r.jsx)(n.FormattedMessage,{id:"spacePermissionsSettings.user.workspaceOwner",defaultMessage:"Workspace owner"})})}},21752:(e,t,s)=>{s.d(t,{K:()=>x,Z:()=>f});s(67294);var n=s(86628),i=s(54368),r=s(77420),o=s(19889),a=s(97880),l=s(9291),d=s(86125),p=s(88198),c=s(70301),u=s(64369),m=s(45653),g=s(85893);function h(e){const{actorStore:t,avatar:s,isLarge:n}=e,l=n?32:28;return t?t.table===r.cZ?(0,g.jsx)(c.Z,{botStore:t,size:l}):t.table===o.KJ?(0,g.jsx)(m.Z,{userStore:t,size:l}):t.table===i.y?(0,g.jsx)(m.Z,{userStore:void 0,size:l}):void(0,a.t1)(t):s?(0,g.jsx)(m.Z,{avatar:s,size:l}):(0,g.jsx)(m.Z,{userStore:void 0,size:l})}function x(e){return"membership_admin"===e?"membership_admin":"editor"===e||"admin"===e?"admin":"none"===e||"guest"===e?"guest":"team_level_guest"===e?"team_level_guest":void("member"!==e&&"read_and_write"!==e&&"no_access"!==e&&"not_in_space"!==e&&e&&(0,a.t1)(e))}const f=function(e){window.__c={n:"CellMemberAvatar"};const t=(0,l.useIntl)(),{actorStore:s,avatar:i,containerStyle:r,id:o,spaceRole:a,avatarBadge:c,caption:m,isLarge:x}=e,f="admin"===a||"membership_admin"===a,v="guest"===a||"team_level_guest"===a,M=(0,n.VK)((()=>s?s.getDisplayName(t):null==i?void 0:i.name),[s,i,t]),y=(0,n.VK)((()=>Boolean(m)?m:s?s.getDetail():null==i?void 0:i.email),[m,s,i]);return(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",maxWidth:x?"unset":300,marginLeft:x?2:0,...r},children:[(0,g.jsxs)("div",{style:{position:"relative",...!x&&{height:28,width:28}},children:[(0,g.jsx)(h,{actorStore:s,avatar:i,isLarge:x}),c]}),(0,g.jsxs)("div",{style:{minWidth:0,marginLeft:x?10:6,marginRight:x?10:6},children:[(0,g.jsxs)("div",{id:o,style:{display:"flex",gap:4},children:[(0,g.jsx)(u.Z,{className:"notranslate",children:M}),f&&(0,g.jsx)(d.Z,{role:a}),v&&(0,g.jsx)(p.b,{labelType:a})]}),(0,g.jsx)(u.Z,{isSmall:!0,style:{display:"flex"},children:(0,g.jsx)(u.Z,{isSmall:!0,children:y})})]})]})}},255:(e,t,s)=>{s.d(t,{Z:()=>a});s(67294);var n=s(480),i=s(53465),r=s(73063),o=s(85893);const a=function(e){window.__c={n:"MenuItemRemoveButton"};const t=(0,n.O7)(),s={removeFilterButton:{height:void 0,width:void 0},removeFilterButtonMobile:{marginRight:-12,marginTop:-12,marginBottom:-12,paddingRight:12,paddingTop:12,paddingBottom:12}},{onClick:a,disabled:l}=e,{device:d}=t,p=d.isMobile?{...s.removeFilterButton,...s.removeFilterButtonMobile}:s.removeFilterButton;return(0,o.jsx)(r.Z,{icon:i.X,onClick:a,disabled:l,disableBackground:!0,style:p})}},27386:(e,t,s)=>{s.d(t,{Um:()=>c,ZP:()=>u,kN:()=>p});s(67294);var n=s(480),i=s(24405),r=s(34859),o=s(91754),a=s(61519),l=s(53336),d=s(85893);function p(e){return e?18:60}function c(){return(0,d.jsx)(a.Z,{size:37})}const u=function(e){let{children:t,controlRow:s,bannerText:a,controlRowPaddingTopBottom:c,removeBoxShadow:u,contentPaddingLeftRight:m,controlRowPaddingLeftRight:g,getPaddingTopBottom:h,disableScroller:x}=e;window.__c={n:"SettingBox"};const f=(0,i.Fg)(),v=(0,n.O7)(),{device:M}=v,y=h?h():M.isMobile?18:36;return x?(0,d.jsxs)("div",{style:{paddingLeft:p(M.isMobile),paddingRight:p(M.isMobile)},children:[(0,d.jsx)("div",{style:{paddingTop:y,paddingBottom:y},children:t}),s&&(0,d.jsx)("div",{style:{paddingTop:c,paddingBottom:c,boxShadow:`0 -1px 0 ${f.regularDividerColor}`},children:s})]}):(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%",backgroundColor:f.cardContentBackground},children:[a&&(0,d.jsx)(o.Z,{styleKey:o.v.Blue,isMobile:!1,children:a}),(0,d.jsx)(l.Z,{type:r.Z.All,style:{flexGrow:1,WebkitOverflowScrolling:"touch",transform:"translateZ(0)",paddingLeft:m??p(M.isMobile),paddingRight:m??p(M.isMobile),paddingTop:a?15:y,paddingBottom:a?22:y},children:t}),s&&(0,d.jsx)("div",{style:{flexGrow:0,flexShrink:0,paddingLeft:g??p(M.isMobile),paddingRight:g??p(M.isMobile),paddingTop:c,paddingBottom:c,boxShadow:u?void 0:`0 -1px 0 ${f.regularDividerColor}`},children:s})]})}},88775:(e,t,s)=>{s.d(t,{ZP:()=>_});var n=s(67294),i=s(480),r=s(86628),o=s(24405),a=s(42853),l=s(9291),d=s(33929),p=s(87279),c=s(55838),u=s(30397),m=s(9867),g=s(74016),h=s(48019),x=s(52275),f=s(31945),v=s(68894),M=s(78140),y=s(89728),b=s(72495),S=s(64369),T=s(85893);const C=(0,l.defineMessages)({filterTeams:{defaultMessage:"Filter teamspaces…",id:"teamsDropdownForMember.filterForTeams.placeholder"}});function w(e){window.__c={n:"MemberTeamContent"};const t=(0,i.O7)(),s=(0,o.yK)((()=>({teamMenuItem:{fontWeight:400,maxWidth:180}})),[]),[a,u]=(0,n.useState)(""),f=(0,n.useCallback)((e=>m.RF({environment:t,teamId:e,tab:c.a.Members,from:"teams_dropdown_for_team_member"})),[t]),y=(0,r.VK)((()=>[{key:"teams for member",render:e=>(0,T.jsx)(b.Z,{...e}),actions:e.teamStores.map((e=>({key:e.id,displayName:e.getName(),analyticsName:e.getName()||"team_unknown",searchName:e.getName(),render:t=>(0,T.jsx)(x.Z,{icon:(0,T.jsx)(g.p,{disabled:!0,store:e}),title:(0,T.jsx)(S.Z,{style:s.teamMenuItem,children:e.getName()}),caption:(0,T.jsx)(l.FormattedMessage,{defaultMessage:"{numMembers} {numMembers, plural, one {member} other {members}}",id:"teamsDropdownForMember.numMembers",values:{numMembers:e.getUserIdsInTeam().length}}),inline:!0,...t}),action:()=>{f(e.id)},closeParentMenu:!1})))}]),[e.teamStores,s.teamMenuItem,f]),w=a,_=(0,T.jsx)(b.Z,{isInput:!0,children:(0,T.jsx)(v.ZP,{value:w,onChange:(0,n.useCallback)((e=>{u(e.target.value)}),[]),focus:!0,focusAfterAnimation:!0,placeholder:d.default.formatMessage(C.filterTeams)})}),j={menuType:p.og.Popup,maxWidth:350,maxHeight:300,header:e.teamStores.length>5?_:void 0};return(0,T.jsx)(M.Z,{...j,children:(0,T.jsx)(h.Z,{filter:w,context:{blocks:[],environment:t,publicEditMode:void 0},initialFocus:0,sections:y})})}const _=function(e){window.__c={n:"TeamsDropdownForMember"};const t=(0,r.VK)((()=>e.teamStores??u.Z.state.teams),[e.teamStores]),s=(0,o.yK)((e=>({button:{marginRight:8},noTeams:{marginRight:8,color:e.lightTextColor},chevron:{width:10,marginLeft:4,fill:e.lightIconColor}})),[]),n=(0,r.VK)((()=>t.filter((t=>t.getMembers().some((t=>"user"===t.entity_type&&t.user_id===e.member.userId))))),[t,e.member]),i=n.length;return(0,T.jsx)(f.ZP,{popupType:f.Z4.Popup,renderOrigin:e=>(0,T.jsx)(y.Z,{disabled:0===i,style:0===i?s.noTeams:s.button,...e,children:0===i?(0,T.jsx)(l.FormattedMessage,{id:"teamsDropdownForMember.teamsCountNone.label",defaultMessage:"No access"}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(l.FormattedMessage,{id:"teamsDropdownForMember.teamsCount.label",defaultMessage:"{numberOfTeams, plural, one {{numberOfTeams} teamspace} other {{numberOfTeams} teamspaces}}",values:{numberOfTeams:i}}),(0,a.i)(s.chevron)]})}),render:()=>(0,T.jsx)(w,{teamStores:n})})}},97680:(e,t,s)=>{s.d(t,{Z:()=>h});var n=s(67294),i=s(480),r=s(66897),o=s(97880),a=s(9291),l=s(98742),d=s(4023),p=s(52275),c=s(26388),u=s(70301),m=s(45653),g=s(85893);const h=n.forwardRef(((e,t)=>{window.__c={n:"UserMenuItem"};const{actor:s,userTitle:n,useEmailAsTooltip:h,tooltip:x,tooltipPlacement:f}=e,v=(0,i.O7)(),M=(0,a.useIntl)(),y=s.asActor&&s.isUser()?s.email:void 0,b=h&&y?y:x,S=v.device.isMobile?24:20;let T;return(0,r.YU)(s)?T=(0,g.jsx)(u.Z,{botValue:null==s?void 0:s.asActor,size:S}):(0,r.$S)(s)?T=(0,g.jsx)(m.Z,{userValue:null==s?void 0:s.asActor,size:S}):(0,r.Iq)(s)?T=(0,g.jsx)(m.Z,{userValue:void 0,size:S}):(0,o.t1)(s),(0,g.jsx)(c.ZP,{ref:t,placement:f??d.u.Bottom,alignment:d.v.Start,textWrap:!0,render:t=>(0,g.jsx)(p.Z,{...(0,l.Z)(t,e),icon:T,title:n??(0,r.$4)(M,s),className:"notranslate"}),disableTooltip:!b,renderTooltip:()=>b})}))},8319:(e,t,s)=>{s.d(t,{z:()=>z,Z:()=>W});var n=s(67294),i=s(83355),r=s(47453),o=s(72126),a=s(97880),l=s(9291),d=s(45257),p=s(75024),c=s(49085);class u extends c.default{getInitialState(){return{isMenuOpen:!1,inputTemporaryValue:"",indexToReplace:void 0,popupOriginRect:void 0}}}const m=u;var g=s(42922),h=s(52275),x=s(89728),f=s(53437),v=s(72495),M=s(75689),y=s(91642),b=s(480),S=s(86628),T=s(68626),C=s(91155),w=s(23586),_=s(87279),j=s(29798),I=s(72087),k=s(78140),O=s(32163),Z=s(43765),F=s(40721),P=s(47082),R=s(85893);const E={input:{marginTop:8,marginLeft:8,marginRight:8,boxSizing:"border-box",width:"auto"},menu:{width:250,maxHeight:"40vh"},inputMenu:{maxHeight:"20vh"}};class B extends i.Z{constructor(){super(...arguments),this.storeTypes={requestStore:I.Z,menuListStore:j.Z},this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_renderRequest=(e,t,s)=>(0,R.jsx)(N,{error:e,data:t,ready:s,labelText:this.props.labelText,value:this.props.value,renderResultMenuItem:this.props.renderResultMenuItem,onConfirm:this.props.onConfirm,menuListStore:this.stores.menuListStore})}renderComponent(){const{value:e,items:t,performRequest:s}=this.props,{requestStore:n}=this.stores,i={query:e,current:t};return(0,R.jsx)(k.Z,{...V(this.environment,this.props.onDismiss,this.props.labelText,this.props.value,this.props.items,this.props.onChange,this.props.renderToken,this.props.onRemove,this.props.onClear,this.props.disabled),children:(0,R.jsx)(w.Z,{debounce:100,requestStore:n,request:i,performRequest:s,render:this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_renderRequest})})}}B.displayName="SearchTokenInputMenu";const A=B;function L(e){const{device:t}=e;return t.isMobile}function D(e){let{labelText:t,value:s,items:n,disabled:i,onChange:r,renderToken:a,onRemove:l,onClear:d}=e;window.__c={n:"TokenInputComponent"};const p=(0,b.O7)(),c=n.map((e=>a(e,{onRemove:()=>l(e)})));return(0,R.jsx)(P.Z,{focus:!L(p)||void 0,focusAfterAnimation:!0,format:P.U.FilterValue,tokens:c,placeholder:t.tokenInputPlaceholder,onRemoveLastToken:()=>function(e,t){const s=o.Z$(e);s&&t(s)}(n,l),onClearButtonClick:d,value:s,onChange:r,showClearButton:!0,disabled:Boolean(i),style:E.inputMenu})}function V(e,t,s,n,i,r,o,a,l,d){if(L(e)){return{menuType:_.og.Modal,title:s.title,right:(0,R.jsx)(F.DoneMenuText,{}),onClickRight:t,header:(0,R.jsx)(D,{labelText:s,value:n,items:i,disabled:d,onChange:r,renderToken:o,onRemove:a,onClear:l})}}return{menuType:_.og.Popup,onClickOutside:t,header:(0,R.jsx)(D,{labelText:s,value:n,items:i,disabled:d,onChange:r,renderToken:o,onRemove:a,onClear:l}),...E.menu}}function N(e){let{error:t,data:s,ready:n,labelText:i,value:r,renderResultMenuItem:o,onConfirm:a,menuListStore:d}=e;window.__c={n:"RequestComponent"};const p=(0,S.qz)(d,j.Z),c=e=>(0,R.jsx)(v.Z,{...e,title:i.resultSectionTitle,loading:!n});if(t)return T.log({level:"error",from:i.componentDebugName,type:"requestFailed",error:(0,C.Ui)(t),data:{miscDataToConvertToString:{query:r}}}),(0,R.jsx)(c,{children:(0,R.jsx)(Z.Z,{title:(0,R.jsx)(l.FormattedMessage,{defaultMessage:"Something went wrong.",id:"search.inputMenu.errorMessage"})})});if(!s)return(0,R.jsx)(c,{children:(0,R.jsx)(Z.Z,{title:(0,R.jsx)(l.FormattedMessage,{defaultMessage:"Loading…",id:"search.inputMenu.loading.message"})})});if(s&&0===s.length)return(0,R.jsx)(c,{children:(0,R.jsx)(Z.Z,{title:(0,R.jsx)(l.FormattedMessage,{defaultMessage:"No results found.",id:"search.inputMenu.noResults.message"})})});const u={key:"results",items:s.map((e=>function(e,t,s){return{key:e,action:()=>s(e),render:s=>t(e,s)}}(e,o,a))),render:c};return(0,R.jsx)(O.Z,{type:O.i.Vertical,store:p,initialFocus:0,sections:[u]})}let z=function(e){return e.Button="Button",e.Section="Section",e.Pill="Pill",e}({});class U extends i.Z{constructor(){super(...arguments),this.animationFrame=void 0,this.origin=n.createRef(),this.storeTypes={componentStore:m},this.renderMobileFilterSummary=e=>{const{title:t,items:s,renderItemForSummary:i}=this.props,{disableFilters:r}=e,o=G(this.environment,this.props.mode),a={...p.mK,...o.summary},l=s.length-1,d=(0,R.jsx)("ul",{style:a,children:s.map(((e,t)=>(0,R.jsx)("li",{style:o.summaryItem,children:(0,R.jsxs)(n.Fragment,{children:[i(e),t!==l&&","," "]})},e)))});return(0,R.jsx)(M.Z,{disabled:r,onClick:this.handleMenuOpenMobile,onClickClear:()=>K(this.props.onChange),label:t,title:d})},this.renderMenu=()=>{const{renderToken:e,renderFooter:t,allowApplyBatchSelection:s}=this.props,{componentStore:{state:n}}=this.stores;return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(A,{...this.props,value:n.inputTemporaryValue,onChange:this.handleMenuInputChange,onDismiss:this.handleMenuClose,onConfirm:this.handleItemConfirm,onClear:()=>{this.handleClearTemporary(),K(this.props.onChange)},onRemove:e=>$(e,this.props.items,this.props.onChange),renderToken:e}),t&&(0,R.jsxs)(v.Z,{topBorder:!0,style:{padding:6,justifyContent:"space-between",display:"flex"},children:[(0,R.jsx)(x.Z,{onClick:()=>{K(this.props.onChange)},children:(0,R.jsx)(l.FormattedMessage,{id:"searchTokenFilter.clearButton",defaultMessage:"Clear"})}),s&&(0,R.jsx)(g.Z,{onClick:()=>{this.handleMenuClose("applyButton")},children:(0,R.jsx)(l.FormattedMessage,{id:"searchTokenFilter.applyButton",defaultMessage:"Apply"})})]})]})},this.handleMenuOpen=e=>{const{onMenuOpen:t}=this.props;t&&t(),this.scheduleMeasurement(void 0,(t=>({...t,isMenuOpen:!0,indexToReplace:e})))},this.handleMenuOpenMobile=()=>{const{componentStore:e}=this.stores;e.setState({...e.state,isMenuOpen:!0})},this.handleMenuClose=e=>{const{onMenuDismiss:t}=this.props,{componentStore:s}=this.stores;this.clearInput(),s.setState({...s.state,isMenuOpen:!1,indexToReplace:void 0}),t&&t(e)},this.handleClearTemporary=()=>{const{componentStore:e}=this.stores;e.setState({...e.state,inputTemporaryValue:""})},this.handleItemConfirm=e=>{const{items:t}=this.props,{componentStore:s}=this.stores,{indexToReplace:n}=s.state;"number"==typeof n&&n<t.length?function(e,t,s,n){const i=s.slice(0,e).concat(t,s.slice(e+1));n(i)}(n,e,this.props.items,this.props.onChange):t.includes(e)&&z.Pill?q(e,this.props.items,this.props.onChange):function(e,t,s){const n=t.concat(e);s(o.jj(n))}(e,this.props.items,this.props.onChange),this.props.keepInputOnItemConfirm||this.clearInput()},this.handleMenuInputChange=e=>{const{componentStore:t}=this.stores,{target:s}=e;t.setState({...t.state,inputTemporaryValue:String(s.value)})},this.scheduleMeasurement=(e,t)=>{this.animationFrame=requestAnimationFrame(this.measureOriginRect(t))},this.measureOriginRect=e=>t=>{const{componentStore:s}=this.stores;if(!this.origin)return;if(!this.origin.current)return;const n=e?e(s.state):s.state;s.setState({...n,popupOriginRect:this.origin.current.getBoundingClientRect()})},this.isMenuOpen=()=>{const{componentStore:{state:e}}=this.stores;return e.isMenuOpen},this.clearInput=()=>{const{componentStore:e}=this.stores;e.setState({...e.state,inputTemporaryValue:"",indexToReplace:void 0})}}didMount(){window.addEventListener("resize",this.scheduleMeasurement)}willUnmount(){window.removeEventListener("resize",this.scheduleMeasurement),this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0)}didUpdate(e){(e.items.length!==this.props.items.length||e.mode!==this.props.mode)&&this.scheduleMeasurement()}renderComponent(){const{device:e}=this.environment,{mode:t}=this.props;return e.isMobile?this.renderMobile(t):this.renderDesktop(t)}renderDesktop(e){const{title:t,disabled:s}=this.props,{componentStore:{state:n}}=this.stores,i=s||n.isMenuOpen;let r;const o=(()=>e===z.Section?(r=t,this.renderSectionOrigin()):e===z.Button?this.renderButtonOrigin():e===z.Pill?this.renderPillOrigin():void(0,a.t1)(e))();return(0,R.jsxs)(y.Z,{title:r,marginAfter:e===z.Section,style:G(this.environment,this.props.mode).sectionMenuItem,children:[e!==z.Pill&&this.renderFilters({disableFilters:i,showLabel:!1}),o,(0,R.jsx)(f.ZP,{popupType:f.ZP.PopupType.Popup,placementToOrigin:f.ZP.Placement.Bottom,alignmentToOrigin:f.ZP.Alignment.Start,open:this.isMenuOpen(),originRect:n.popupOriginRect,render:()=>this.renderMenu(),onDismiss:this.handleMenuClose,keepFocus:!0,preventScaleTransition:!0})]})}renderButtonOrigin(){const{icon:e,title:t,disabled:s,focused:n}=this.props,i=G(this.environment,this.props.mode),r=H(this.theme),o={...i.menuItem,...r.buttonMenuItem};return(0,R.jsx)("div",{ref:this.origin,style:i.menuItemWrapper,children:(0,R.jsx)(h.Z,{disabled:s||this.isMenuOpen(),icon:e(i.icon),title:t,focused:n,onClick:e=>this.handleMenuOpen(),style:o})})}renderPillOrigin(){const{icon:e,title:t,disabled:s,iconStyles:n}=this.props,i=G(this.environment,this.props.mode),r=this.props.mode===z.Pill&&this.props.hasItemsSelected;return(0,R.jsx)("div",{ref:this.origin,style:i.menuItemWrapper,children:(0,R.jsx)(d.Z,{on:r,icon:e({...i.icon,...n}),title:(0,R.jsx)("span",{children:t}),onClick:e=>this.handleMenuOpen(),wrapStyle:{opacity:s?.4:1}})})}renderSectionOrigin(){const{addItemLabel:e,disabled:t}=this.props,s=G(this.environment,this.props.mode),i=H(this.theme);return(0,R.jsxs)(n.Fragment,{children:[(0,R.jsx)("div",{ref:this.origin,style:s.menuItemWrapper}),(0,R.jsx)(h.Z,{disabled:t||this.isMenuOpen(),icon:(0,r.R)(s.iconSmall),title:e,focused:!1,onClick:e=>this.handleMenuOpen(),style:{...s.appendListItemButton,...i.appendListItemButton}})]})}renderMobile(e){const{disabled:t}=this.props,s=t||this.isMenuOpen(),n=e===z.Section?this.renderMobileFilterSummary({disableFilters:s}):this.renderMobileButtonOrigin({disableFilters:s});return(0,R.jsx)(f.ZP,{popupType:f.ZP.PopupType.SlideUp,open:this.isMenuOpen(),origin:n,render:this.renderMenu,onDismiss:this.handleMenuClose,keepFocus:!0})}renderMobileButtonOrigin(e){const{icon:t,title:s}=this.props,n=G(this.environment,this.props.mode);return(0,R.jsx)(h.Z,{disabled:e.disableFilters,focused:!1,icon:t({...n.icon}),title:s,onClick:e=>this.handleMenuOpenMobile()})}renderFilters(e){const{items:t,renderFilter:s}=this.props,{device:n}=this.environment,i=t.map(((t,i)=>(0,R.jsx)("li",{children:s(t,{disabled:e.disableFilters,onRemove:()=>$(t,this.props.items,this.props.onChange),onClick:()=>n.isMobile?this.handleMenuOpenMobile():this.handleMenuOpen(i)})},`${t}_${i}`)));return(0,R.jsx)("ul",{style:p.mK,children:i})}}U.displayName="SearchTokenFilter";const W=U;function q(e,t,s){s(t.filter((t=>t!==e)))}function K(e){e([])}function H(e){return{buttonMenuItem:{color:e.mediumTextColor},appendListItemButton:{color:e.lightTextColor}}}function $(e,t,s){q(e,t,s)}function G(e,t){return{menuItem:{minHeight:void 0,paddingTop:e.device.isMobile?12:4,paddingBottom:e.device.isMobile?12:4},menuItemWrapper:{display:"flex"},sectionMenuItem:{display:"flex"},appendListItemButton:{minHeight:void 0,paddingTop:4,paddingBottom:4,fontSize:p.yv(e,"UIRegular")},icon:{height:16,width:16,marginRight:"Pill"===t?6:-2,fill:"currentColor"},iconSmall:{height:12,width:12},summary:{display:"inline"},summaryItem:{display:"inline"}}}},75689:(e,t,s)=>{s.d(t,{Z:()=>p});s(67294);var n=s(480),i=s(24405),r=s(82990),o=s(52275),a=s(24006),l=s(255),d=s(85893);const p=function(e){window.__c={n:"SearchFilterSummaryMenuItem"};const{disabled:t,label:s,title:r,onClick:a,isToggle:l,isToggleActive:p,onClickClear:m,...g}=e,h=(0,i.Fg)(),x=(0,n.O7)(),f=function(e){return{menuItemLabel:{color:e.lightTextColor}}}(h),v=c(x),M=(0,d.jsx)("span",{style:f.menuItemLabel,children:s});return(0,d.jsx)(o.Z,{focused:!1,...g,inline:l,disabled:t,icon:M,title:r,right:(0,d.jsx)(u,{disabled:!!t,isToggle:!!l,isToggleActive:!!p,onClick:a,onClickClear:m}),onClick:a,dontShrinkIcon:!0,dontShrinkRight:!0,shouldWrapTitle:!0,style:v.menuItem,desktopIconStyle:v.menuItemLabel})};function c(e){return{menuItem:{background:void 0,minHeight:void 0,fontSize:e.device.isMobile?r.Z.fontSize.UISmall.mobile:r.Z.fontSize.UIRegular.desktop,paddingTop:e.device.isMobile?12:4,paddingBottom:e.device.isMobile?12:4},labeledMenuItemTitle:{display:"inline-flex",alignItems:"center"},menuItemLabel:{marginTop:0},rightWrapper:{display:"flex",alignItems:"center",marginTop:"-50%",marginBottom:"-50%",height:44}}}function u(e){let{disabled:t,isToggle:s,isToggleActive:i,onClick:r,onClickClear:o=(()=>{})}=e;window.__c={n:"RightComponent"};const p=c((0,n.O7)()).rightWrapper;return s?(0,d.jsx)("div",{style:p,children:(0,d.jsx)(a.Z,{on:!!i,onClick:r})}):(0,d.jsx)(l.Z,{disabled:t,onClick:o})}},91642:(e,t,s)=>{s.d(t,{Z:()=>r});s(67294);var n=s(72495),i=s(85893);const r=function(e){const t={desktopTitleStyle:{marginBottom:4},marginAfter:{marginBottom:16}},{title:s,marginAfter:r,desktopStyle:o,desktopTitleStyle:a,...l}=e,d=(r||o)&&{...r&&t.marginAfter,...o},p=a?{...t.desktopTitleStyle,...a}:t.desktopTitleStyle;return(0,i.jsx)(n.Z,{isTitleUppercase:!0,disableDesktopPadding:!0,enableActionSheetTitle:!0,desktopStyle:d,desktopTitleStyle:p,shouldShowBottomDivider:!1,title:s,...l})}},25976:(e,t,s)=>{s.d(t,{Z:()=>r});var n=s(49085);class i extends n.default{getInitialState(){return{count:0}}}const r=new i},71071:(e,t,s)=>{s.d(t,{Sw:()=>o,ZP:()=>d,jR:()=>a});var n=s(13991),i=s(49085);const r=["en","en-us","en-ca"];function o(e){return"pdf"===e.exportOptions.exportType}function a(){return r.includes(n.SP.toLowerCase())?"Letter":"A4"}class l extends i.default{getInitialState(){return{open:!1,shouldExportComments:!1}}}const d=new l}}]);