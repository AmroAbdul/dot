"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[3343],{98481:(e,t,a)=>{a.d(t,{J:()=>d});var i=a(40506),n=a(97880);var o=a(70060),s=a(88893),r=a(35057),l=a(88280);function d(e){let{environment:t}=e;const a=(0,r.zt)(),d=l.subscriptionDataStoreInstance.state,c=(0,s.XX)(d);return function(e){let{subscriptionTier:t,subscriptionCreatedAtTime:a,useLegacyBehavior:o}=e;return"enterprise"===t||!("plus"!==t||!o)&&(0,n.$K)(a)&&a<i.Xn}({subscriptionTier:a,subscriptionCreatedAtTime:null==c?void 0:c.created,useLegacyBehavior:!(0,o.fX)()})}},73343:(e,t,a)=>{a.r(t),a.d(t,{OutlinerTeamOverflow:()=>ae,TeamOverflowMenu:()=>ie});var i=a(67294),n=a(480),o=a(86628),s=a(24405),r=a(85397),l=a(52867),d=a(9767),c=a(56666),m=a(88437),p=a(13797),u=a(19981),g=a(3577),f=a(47453),b=a(15028),T=a(5108),v=a(47425),h=a(64684),w=a(97880),S=a(9291),y=a(62967),M=a(17224),x=a(37181),j=a(93405),A=a(48019),O=a(64921),I=a(31945),k=a(78140),P=a(72495),B=a(26388),C=a(43250),D=a(87279),_=a(35026),V=a(95697),K=a(77907),L=a(55838),F=a(80444),N=a(61766),Z=a(33052),U=a(73466),W=a(9867);function J(e){let{adminStatus:t,accessLevel:a,isArchivedTeam:i}=e;if("adminThatCanPerformPrivilegedActions"===t)return new Set(["join","joinAsOwner"]);if(i)switch(t){case"none":return new Set;case"admin":return new Set("open"===a?["join"]:[]);default:(0,w.t1)(t)}switch(a){case"open":return new Set(["join"]);case"closed":case"private":return new Set;default:(0,w.t1)(a)}}var R=a(82740),z=a(73365),$=a(30297),E=a(11628),q=a(97082),G=a(64552),X=a(31931),Y=a(85893);const H=["addPages","join","view","add","duplicate","leave","archive","restore"],Q=["addPages","add"],ee=["join","joinAsOwner","upgradeSelfToOwner","leave"],te=(0,S.defineMessages)({add:{defaultMessage:"Add members",id:"sidebar.outlinerTeamToggleButton.addLabel"},leave:{defaultMessage:"Leave teamspace",id:"sidebar.outlinerTeamToggleButton.leaveLabel"},joinAsOwner:{defaultMessage:"Join as owner",id:"sidebar.outlinerTeamToggleButton.joinAsOwnerLabel"},joinAsMember:{defaultMessage:"Join as member",id:"sidebar.outlinerTeamToggleButton.joinAsMemberLabel"},joinTeamspace:{defaultMessage:"Join teamspace",id:"sidebar.outlinerTeamToggleButton.joinLabel"},upgradeSelfToOwner:{defaultMessage:"Become owner",id:"sidebar.outlinerTeamToggleButton.upgradeSelfToOwnerLabel"},archive:{defaultMessage:"Archive teamspace",id:"sidebar.outlinerTeamToggleButton.archiveLabel"},restore:{defaultMessage:"Restore teamspace",id:"outlinerTeamOverflow.teamActions.restoreLabel"},duplicate:{defaultMessage:"Duplicate teamspace",id:"sidebar.outlinerTeamToggleButton.duplicateLabel"},teamspaceSettings:{defaultMessage:"Teamspace settings",id:"sidebar.outlinerTeamToggleButton.ownerViewLabel"},viewMembers:{defaultMessage:"View members",id:"sidebar.outlinerTeamToggleButton.unjoinedMemberViewLabel"},appTemplates:{defaultMessage:"Add pages",id:"sidebar.outlinerTeamToggleButton.addPages"}});function ae(e){let{teamStore:t,style:a,from:i,hideJoin:r,onPopupClick:l,onPopupClose:d}=e;window.__c={n:"OutlinerTeamOverflow"};const m=(0,n.Fy)(),p=(0,S.useIntl)(),u=(0,o.qz)(void 0,Z.Z),g=(0,o.VK)((()=>F.default.state.currentSpaceStore),[]),f=(0,o.qz)(void 0,N.Z),b=(0,s.yK)((e=>({buttonStyle:{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,height:20,width:20,...a},icon:{fill:e.sidebarTextColor,width:14,height:14}})),[a]),T=p.formatMessage({defaultMessage:"Teamspace settings and members...",id:"sidebar.outlinerTeamToggleButton.tooltip"});return g?m.isMobile?null:(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(B.ZP,{textWrap:!1,renderTooltip:()=>T,placement:B.ug.Bottom,render:e=>(0,Y.jsx)(I.ZP,{popupType:I.Z4.Popup,buttonPopupStore:f,alignmentToOrigin:I.vR.Start,originGap:2,renderOrigin:t=>(0,Y.jsx)(O.Z,{ariaLabel:T,className:C.qxR,style:b.buttonStyle,mobileFeedback:!1,...e,...t,children:(0,c.o)(b.icon)}),render:e=>(0,Y.jsx)(ie,{teamStore:t,permissionsInviteStore:u,onDismiss:e.close,from:i,hideJoin:r,buttonPopupStore:f}),onClick:l,onClose:d})}),(0,Y.jsx)(K.LazyTeamPermissionsInviteWithModal,{permissionsInviteStore:u,store:t})]}):null}function ie(e){window.__c={n:"TeamOverflowMenu"};const{teamStore:t,permissionsInviteStore:a,onDismiss:c,from:O,hideJoin:I,buttonPopupStore:K}=e,N=(0,s.Fg)(),Z=(0,n.O7)(),ae=(0,s.yK)((()=>({menuItemButton:{minWidth:200},caption:{minWidth:230}})),[]),ie=(0,o.VK)((()=>F.default.state.currentSpaceStore),[]),ne=(0,G.e)(t),oe=(0,o.VK)((()=>(0,h.m4)({archived_by:t.getArchivedBy()})),[t]),se=Z.currentUser.id,re=(0,o.VK)((()=>se?(0,h.Rk)({userId:se,team:{is_default:t.isDefault(),membership:t.getRawMembership()},space:{permissions:null==ie?void 0:ie.getPermissionItems(),permission_groups:null==ie?void 0:ie.getPermissionGroups()}}):"none"),[ie,se,t]),le=(0,o.VK)((()=>!(!t.isDefined()||!se)&&(0,h.pd)({membership:t.getMembers()},se)),[se,t]),de=(0,q.y)(t.id),ce=(0,R.e)(t),{id:me,name:pe,isDefault:ue}=(0,o.VK)((()=>({id:t.id,name:t.getName(),isDefault:t.isDefault()})),[t]),ge=(0,z.n)(ie),fe=(0,o.VK)((()=>(0,V.Xq)({environment:Z,spaceStore:ie})),[ie,Z]),be=(0,$.r)(O),Te=function(e){const{isDefault:t,accessLevel:a,settings:i}=(0,o.VK)((()=>({isDefault:e.isDefault(),accessLevel:e.getTeamAccessLevel(),settings:e.getSettings()})),[e]),n="private"===a,s=(0,E.P)(),r=n&&!s?"business":void 0,l=(null==i?void 0:i.disable_public_access)||(null==i?void 0:i.disable_export)||(null==i?void 0:i.disable_guests),d=(0,E.z)(),c=l&&!d?"enterprise":void 0,m=(0,v.bo)([c,r]);if(t)return"isDefault";if(m)return m}(t),ve="isDefault"===(he=Te)?(0,Y.jsx)(S.FormattedMessage,{id:"sidebar.outlinerTeamToggleButton.cannotDuplicateDefaultTeamspace",defaultMessage:"Cannot duplicate a default teamspace"}):"business"===he?(0,Y.jsx)(S.FormattedMessage,{id:"sidebar.outlinerTeamToggleButton.cannotDuplicateTeamspaceWithBusinessFeaturesOnDowngradedAccount",defaultMessage:"Cannot duplicate a teamspace with settings only allowed on Business plans or above"}):"enterprise"===he?(0,Y.jsx)(S.FormattedMessage,{id:"sidebar.outlinerTeamToggleButton.cannotDuplicateTeamspaceWithEnterpriseFeaturesOnDowngradedAccount",defaultMessage:"Cannot duplicate a teamspace with settings only allowed on Enterprise plans or above"}):void 0===he?void 0:(0,w.t1)(he);var he;const we=(0,o.VK)((()=>t.getTeamAccessLevel()),[t]),Se=(0,i.useCallback)((e=>{M.z(Z,{store:t,from:O,option:e})}),[Z,t,O]),ye=de&&!ge,Me=(0,o.VK)((()=>Boolean(null==ie?void 0:ie.canAdmin())),[ie]),{joinLeaveOptionsToShow:xe,leaveOptionDisabledState:je}=function(e){let{teamRole:t,adminStatus:a,isDefaultTeam:i,accessLevel:n,isArchivedTeam:o}=e;switch(t){case"owner":case"member":const e=new Set,s=!o;return s&&e.add("leave"),"owner"!==t&&"adminThatCanPerformPrivilegedActions"===a&&e.add("upgradeSelfToOwner"),{joinLeaveOptionsToShow:e,leaveOptionDisabledState:s&&i?{disabled:!0,disabledReasonKey:"defaultTeam"}:void 0};case"team_level_guest":return{joinLeaveOptionsToShow:new Set,leaveOptionDisabledState:void 0};case"none":return{joinLeaveOptionsToShow:J({adminStatus:a,accessLevel:n,isArchivedTeam:o}),leaveOptionDisabledState:void 0};default:(0,w.t1)(t)}}({teamRole:re,adminStatus:be?"adminThatCanPerformPrivilegedActions":Me?"admin":"none",isArchivedTeam:oe,isDefaultTeam:ue,accessLevel:we}),Ae=(0,X.Z)({teamStore:t,from:"sidebar_team_overflow"}),Oe=(0,o.VK)((()=>(0,_.si)({environment:Z,teamStore:t})),[Z,t]),Ie=xe.has("joinAsOwner"),ke=be&&!(1===xe.size&&xe.has("leave")),Pe={add:{type:"action",show:!oe&&ce,handle:()=>{a.update((e=>({...e,modalOpen:!0})))},title:te.add,icon:(0,r.a)({width:17})},leave:{type:"action",...ke&&{colorOverride:N.redBadgeBackground},show:xe.has("leave"),handle:()=>{W.s({environment:Z,teamStore:t,currentSpaceStore:ie,from:O})},title:te.leave,disabled:Boolean(null==je?void 0:je.disabled),icon:(0,u.V)({width:17}),disabledTooltipText:"defaultTeam"===(null==je?void 0:je.disabledReasonKey)&&(0,Y.jsx)(S.FormattedMessage,{id:"sidebar.outlinerTeamToggleButton.cannotLeaveDefaulTeamTooltip",defaultMessage:"Cannot leave a default teamspace"})},join:{type:"action",show:!I&&xe.has("join"),handle:async()=>{if(ie)switch(we){case"open":await W.um({environment:Z,teamStore:t,currentSpaceStore:ie,from:O,andNavigateToTeamHome:!1});break;case"closed":case"private":await W.wT({environment:Z,teamStore:t,currentSpaceStore:ie,from:O,action:"joinClosedOrPrivateTeamAsMember"});break;default:(0,w.t1)(we)}},title:Ie?te.joinAsMember:te.joinTeamspace,icon:(0,f.R)({width:17})},joinAsOwner:{type:"action",show:Ie,handle:()=>W.wT({environment:Z,teamStore:t,currentSpaceStore:ie,from:O,action:"joinTeamAsOwner"}),title:te.joinAsOwner,icon:(0,g.J)({width:17})},upgradeSelfToOwner:{type:"action",show:xe.has("upgradeSelfToOwner"),handle:()=>W.wT({environment:Z,teamStore:t,currentSpaceStore:ie,from:O,action:"upgradeToOwner"}),title:te.upgradeSelfToOwner,icon:(0,g.J)({width:17})},archive:{type:"action",show:!oe&&le,colorOverride:N.redBadgeBackground,handle:()=>{!ye&&W.aQ({teamStore:t,environment:Z,from:O})},title:te.archive,disabled:ye,disabledTooltipText:(0,Y.jsx)("div",{style:{whiteSpace:"normal"},children:(0,Y.jsx)(S.FormattedMessage,{id:"sidebar.outlinerTeamToggleButton.cannotArchiveTooltip.moreThanOneMember",defaultMessage:"There must only be one member in the workspace to archive this teamspace"})}),icon:(0,l.H)({width:17})},restore:{type:"action",show:oe,handle:()=>{le&&W.YH({environment:Z,teamStore:t,teamName:pe,from:O})},title:te.restore,icon:(0,b.a)({width:17}),disabled:!le,disabledTooltipText:(0,Y.jsx)(S.FormattedMessage,{id:"outlinerTeamOverflow.restoreArchivedTeam.disabledTooltipText",defaultMessage:"Only teamspace owners can restore archived teamspaces."})},duplicate:{type:"action",show:!oe&&fe,handle:()=>{U.tW({environment:Z,teamStore:t,from:O,buttonPopupStore:K})},title:te.duplicate,disabled:void 0!==Te,icon:(0,m.a)({width:17}),disabledTooltipText:ve,caption:(0,Y.jsx)(S.FormattedMessage,{id:"sidebar.outlinerTeamToggleButton.duplicateCaption",defaultMessage:"Duplicates permissions and other settings but not pages and members"})},view:{type:"action",show:!oe||"manage_teams_table"===O,handle:()=>W.RF({environment:Z,teamId:me,tab:L.a.Members,from:O}),title:ne?te.teamspaceSettings:te.viewMembers,icon:ne?(0,p.F)({width:15}):(0,T.n)({width:17})},addPages:{type:"extensionAction",show:"teamSidebar"===O&&Oe,title:te.appTemplates,icon:(0,d.s)({width:17}),subActionSections:Ae}},Be=(ke?[{sectionName:"join/leave section",orderedOptions:ee},{sectionName:"other actions",orderedOptions:H.filter((e=>!ee.includes(e)))}]:[{sectionName:"add section",orderedOptions:Q},{sectionName:"other actions section",orderedOptions:H.filter((e=>!Q.includes(e)))}]).map((e=>{const t=e.orderedOptions.filter((e=>Pe[e].show));if(0!==t.length)return{sectionName:e.sectionName,filteredOptions:t}})).filter(w.$K).map((e=>{const t=e.filteredOptions.map((e=>{const t=Pe[e],{type:a}=t;return"action"===a?(0,y.cN)({key:e,displayName:t.title,analyticsName:t.title.defaultMessage,svg:()=>t.icon,validators:[],closeParentMenu:!0,action:()=>{c(),Se(e),t.handle()},render:e=>(0,Y.jsx)(B.ZP,{placement:B.ug.Left,textWrap:!1,disableTooltip:!(t.disabled&&t.disabledTooltipText),renderTooltip:()=>t.disabledTooltipText,render:a=>(0,Y.jsx)(j.Z,{...e,...a,svg:()=>t.icon,title:(0,Y.jsx)(S.FormattedMessage,{...t.title}),buttonStyle:{...ae.menuItemButton,...!t.disabled&&t.colorOverride?{fill:t.colorOverride,color:t.colorOverride}:{fill:N.regularIconColor,color:N.regularTextColor}},disabled:t.disabled,disabledFeedback:t.disabled,caption:t.caption,captionStyle:ae.caption,shouldWrapCaption:!0})})}):"extensionAction"===a?(0,y.MV)({key:e,displayName:t.title,analyticsName:t.title.defaultMessage,svg:()=>t.icon,width:250,validators:[],subActions:()=>t.subActionSections.map((t=>({...t,actions:t.actions.map((t=>({...t,action:a=>{c(),Se(e),t.action(a)}})))})))}):void(0,w.t1)(a)}));return(0,y.$J)({key:e.sectionName,render:e=>(0,Y.jsx)(P.Z,{...e}),actions:t})}));return(0,i.useEffect)((()=>{x.$n({environment:Z,teamId:t.id})}),[Z,t.id]),(0,Y.jsx)(k.Z,{className:C.Mdu,menuType:D.og.Popup,minWidth:"100%",children:(0,Y.jsx)(A.Z,{context:{blocks:[],environment:Z,publicEditMode:void 0},sections:Be,initialFocus:void 0})})}},82740:(e,t,a)=>{a.d(t,{e:()=>l});var i=a(86628),n=a(97880),o=a(35057),s=a(64552),r=a(56187);function l(e){const t=(0,r.q)(e),a=(0,s.e)(e);return(0,i.VK)((()=>{if(!(0,o.Mk)())return!1;const i=e.getSetting("invite_access");switch(i){case void 0:return!1;case"team_members":return a;case"team_owners":return t;default:(0,n.t1)(i)}}),[e,t,a])}},73365:(e,t,a)=>{a.d(t,{n:()=>l});var i=a(480),n=a(86628),o=a(87479),s=a(46654),r=a(30397);function l(e){const t=(0,i.O7)();return(0,n.VK)((()=>{const a=r.Z.state.teams.map((e=>({membership:e.getMembers(),id:e.id,archived_by:e.getArchivedBy(),is_default:e.isDefault()}))),i=t.currentUser.id;if(!i||!e)return!1;const n={permissions:e.getPermissionItems(),permission_groups:e.getPermissionGroups()};return(0,o.wN)({spaceValue:n,spaceMembers:(0,s.aG)(n),teamsInSpace:a,currentUserId:i})}),[t,e])}},11628:(e,t,a)=>{a.d(t,{P:()=>d,z:()=>c});var i=a(480),n=a(86628),o=a(47425),s=a(98481),r=a(80444),l=a(70060);function d(){const{currentSpaceStore:e}=(0,n.Kw)(r.default);return(0,n.VK)((()=>{const t=(null==e?void 0:e.getSubscriptionTier())??"free";return(0,o.$V)(t,"business")}),[e])}function c(){const e=(0,i.O7)(),{currentSpaceStore:t}=(0,n.Kw)(r.default);return(0,n.VK)((()=>{const a=(null==t?void 0:t.getSubscriptionTier())??"free";return!(0,l.fX)()&&(0,o.$V)(a,"business")||(0,s.J)({environment:e})}),[e,t])}},97082:(e,t,a)=>{a.d(t,{y:()=>o});var i=a(86628),n=a(30397);function o(e){const[t]=(0,i.AF)(n.Z);return(0,i.VK)((()=>{if(!e)return!1;const a=t.teams.filter((e=>e.isDefault()&&!e.isArchived()));return 1===a.length&&a[0].id===e}),[t,e])}},56187:(e,t,a)=>{a.d(t,{q:()=>s});var i=a(480),n=a(86628),o=a(64684);function s(e){const t=(0,i.O7)();return(0,n.VK)((()=>{const a=t.currentUser.id;return!!(e&&e.isDefined()&&a)&&(0,o.pd)({membership:e.getMembers()},a)}),[t.currentUser.id,e])}},31931:(e,t,a)=>{a.d(t,{Z:()=>U,l:()=>K});a(57658);var i=a(67294),n=a(480),o=a(86628),s=a(24405),r=a(15145),l=a(92996),d=a(40005),c=a(9767),m=a(90334),p=a(82990),u=a(9291),g=a(62967),f=a(81193),b=a(47307),T=a(89858),v=a(75754),h=a(54814),w=a(34517),S=a(40663),y=a(51592),M=a(93405),x=a(72495),j=a(64369),A=(a(74523),a(35683)),O=(a(18514),a(77907)),I=a(74948),k=a(80444),P=a(35057),B=a(29949),C=a(85893);const D=(0,u.defineMessages)({moreTemplates:{id:"sidebar.addAPageButtonTeamToggle.moreTemplates",defaultMessage:"More templates"},browseTemplates:{id:"sidebar.addAPageButtonTeamToggle.browseTemplates",defaultMessage:"Browse templates"},blankPage:{id:"sidebar.addAPageButtonTeamToggle.addBlankPage",defaultMessage:"Blank page"},suggestedTemplatesSection:{id:"sidebar.addAPageButtonTeamToggle.suggestedTemplatesSection",defaultMessage:"Suggested templates"}});function _(e){let{type:t,icon:a,title:i,action:n}=e;return(0,g.cN)({key:t,displayName:void 0,analyticsName:t,validators:[],closeParentMenu:!0,action:n,render:e=>(0,C.jsx)(M.Z,{...e,svg:()=>a,title:i})})}function V(e){let{preset:t,databaseTypes:a}=e;const i=(0,l.Pi)(t);for(const n of i)if(a.has(n))return!0;return!1}async function K(e){let{environment:t,spaceId:a,presetUri:i,parentStore:n,teamId:o,from:s}=e;const r=await async function(e){let{environment:t,spaceId:a,presetUri:i,parentStore:n,teamId:o}=e;const s=a?await h.nc({environment:t,spaceId:a,databaseTypes:(0,l.Pi)(i),parentStore:n,teamId:o}):[];return 0===s.length?{shouldShowConfirmModal:!1}:{shouldShowConfirmModal:!0,existingDatabaseTypes:s}}({environment:t,spaceId:a,presetUri:i,parentStore:n,teamId:o}),{shouldShowConfirmModal:d}=r;if(!d)return!0;const{existingDatabaseTypes:c}=r;return new Promise((e=>{f.Yn(t,{from:s}),b.showDialog({handleCancel:()=>{f.nn(t,{from:s,option:"no"}),e(!1)},showCancel:!0,keepFocus:!1,message:(0,C.jsx)(L,{presetUri:i,existingDatabaseTypes:c}),description:false,items:[{label:(0,C.jsx)(u.FormattedMessage,{id:"sidebar.appTemplate.confirmAdditionalAppTemplate.confirmAddAnyway.label",defaultMessage:"Add anyway"}),color:"red",onAccept:()=>{f.nn(t,{from:s,option:"yes"}),e(!0)}}]})}))}function L(e){window.__c={n:"DialogMessage"};const{presetUri:t,existingDatabaseTypes:a}=e,i=(0,u.useIntl)(),n=(0,s.yK)((()=>({messageContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:12,marginTop:8,marginBottom:8},titleIcon:{height:38,width:38,color:"#D34F43"},confirmationTitle:{fontWeight:p.Z.fontWeight.medium,fontSize:18,textAlign:"center",marginTop:8,marginBottom:4},confirmationSubtitle:{fontSize:14,textAlign:"center"}})),[]),{title:r,icon:l}=(0,o.VK)((()=>F({presetUri:t,iconStyle:n.titleIcon})),[t,n.titleIcon]);return(0,C.jsxs)("div",{style:n.messageContainer,children:[l,(0,C.jsx)(j.Z,{isMultiline:!0,style:n.confirmationTitle,children:(0,C.jsx)(u.FormattedMessage,{id:"sidebar.appTemplate.confirmAdditionalAppTemplate",defaultMessage:"Are you sure you want to add another {templateName} template?",values:{templateName:r}})}),(0,C.jsx)(j.Z,{isMultiline:!0,style:n.confirmationSubtitle,children:a&&a.length>0?(0,C.jsx)(u.FormattedMessage,{id:"sidebar.appTemplate.confirmAdditionalAppTemplate.existingAppsCaption",defaultMessage:"{existingDatabaseTypes} already exist in this teamspace. This template works best if there is only one per teamspace.",values:{existingDatabaseTypes:i.formatList(a.map((e=>(0,y.Mn)(e))))}}):(0,C.jsx)(u.FormattedMessage,{id:"sidebar.appTemplate.confirmAdditionalAppTemplate.caption",defaultMessage:"{templateName} template works best if there is only one per teamspace.",values:{templateName:r}})})]})}function F(e){let{presetUri:t,iconStyle:a}=e;return{title:N(t),icon:Z({presetUri:t,style:a})}}function N(e){return e===l.rK?(0,C.jsx)(u.FormattedMessage,{id:"sidebar.addTemplateToExistingTeam.wiki",defaultMessage:"Wiki"}):(0,S.YC)((0,w.appConfigs)(),e).name}function Z(e){var t,a;let{presetUri:i,style:n}=e;return l.xm.includes(i)?null===(t=(a=d.y[i]).icon)||void 0===t?void 0:t.call(a,n):null}const U=function(e){const{teamStore:t,from:a}=e,d=(0,n.O7)(),p=(0,n.Fy)(),{spaceStore:b,spaceViewStore:h}=(0,o.VK)((()=>({spaceStore:k.default.state.currentSpaceStore,spaceViewStore:k.default.state.currentSpaceViewStore})),[]),w=(0,i.useCallback)((async e=>{const{appTemplatesSetupActions:i}=await O.deps.AppTemplates.loader();f.ZE(d,{option:e,from:a});if(!(await K({presetUri:e,spaceId:t.getSpaceId(),environment:d,parentStore:t,teamId:t.id,from:a})))return;let n=!1;const o=[];if(b&&h){if((0,l.it)(e))n=await i.createWikiInTeam({environment:d,spaceStore:b,spaceViewStore:h,teamStore:t,appendOrPrepend:"append"}),o.push(n.id);else{const o=i.createTypedDBsInTeam({presetUri:e,spaceViewStore:h,environment:d,teamStore:t,from:a});o.length>0&&(n=o[0])}n&&v._({environment:d,store:n,visitType:A.vu.Link,pageVisitSource:r.tY.Create})}}),[d,t,b,h,a]),S=(0,i.useCallback)((()=>{B.Z.open({analyticsFrom:a,cloneTo:"destination_picker",selectedTeam:t}),f.ZE(d,{option:"more_templates",from:a})}),[d,t,a]),y=(0,i.useCallback)((()=>{b&&h&&(T.mv({environment:d,from:"sidebar_team_section",spaceStore:b,spaceViewStore:h,teamStore:t,andNavigate:!0,appendOrPrepend:"append"}),p.isMobile&&I.close(),f.ZE(d,{option:"blank_page",from:a}))}),[p.isMobile,d,b,h,t,a]),M=(0,s.yK)((e=>({actionItemIcon:{fill:e.regularIconColor,width:16,height:16},actionItemIconGray:{fill:e.mediumIconColor,width:16,height:16},blankPageSection:{paddingTop:6,paddingBottom:0},blankPageWithBrowseTemplatesSection:{paddingTop:6,paddingBottom:6}})),[]),L=(0,o.VK)((()=>{if((0,P.QM)()||(0,P.Aw)())return[];const e=l.wC.existing_team,a=function(e){let{teamStore:t,presets:a}=e;if(!t.getSpaceId())return new Set;const i=new Set;for(const s of t.getTeamPageStores()){var n;const e=null===(n=s.getCollectionStore())||void 0===n?void 0:n.getDatabaseType();e&&i.add(e)}const o=new Set;for(const s of a){V({preset:s,databaseTypes:i})&&o.add(s)}return o}({teamStore:t,presets:e});return e.filter((e=>!a.has(e)))}),[t]),N=(0,o.VK)((()=>L.map((e=>{const{icon:t,title:a}=F({presetUri:e,iconStyle:M.actionItemIcon});return _({type:e,icon:t,title:a,action:()=>w(e)})}))),[w,L,M.actionItemIcon]),Z=(0,g.cN)({key:"blank_page",displayName:D.blankPage,analyticsName:"blank_page",svg:()=>(0,c.s)(M.actionItemIcon),validators:[],closeParentMenu:!0,action:()=>y()}),U=0===L.length,{moreType:W,moreMessage:J}=U?{moreType:"browse_templates",moreMessage:D.browseTemplates}:{moreType:"more_templates",moreMessage:D.moreTemplates},R=!p.isMobile?_({type:W,title:(0,C.jsx)(j.Z,{isSecondaryColor:!0,children:(0,C.jsx)(u.FormattedMessage,{...J})}),icon:(0,m.O)(M.actionItemIconGray),action:S}):void 0;return U?[(0,g.$J)({key:"blank page with browse templates",render:e=>(0,C.jsx)(x.Z,{...e,style:M.blankPageWithBrowseTemplatesSection}),actions:[Z,...R?[R]:[]]})]:[(0,g.$J)({key:"add blank page",render:e=>(0,C.jsx)(x.Z,{...e,style:M.blankPageSection}),actions:[Z]}),(0,g.$J)({key:"add app templates",title:D.suggestedTemplatesSection,overrideSearchTitle:D.suggestedTemplatesSection,render:e=>(0,C.jsx)(x.Z,{...e}),actions:[...N,...R?[R]:[]]})]}}}]);