"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[1890],{48298:(e,s,t)=>{t.d(s,{Vy:()=>k,YN:()=>C,kj:()=>q,kn:()=>w,mY:()=>R,yW:()=>j});t(57658);var a=t(59753),o=t(72141),i=t(58129),r=t(21202),n=t(15047),l=t(19889),d=t(97880),c=t(91219),u=t(81918),m=t(54642),p=t(76464),g=t(9953),b=t(82530),f=t(15010),_=t(33954),v=t(33929),M=t(79797),x=t(98905),y=t(34583),h=t(47307);const w=async e=>{const{environment:s,store:t,accessRequestStore:a,forActor:o,status:i,from:r,onResolveComplete:n}=e,d=s.currentUser.id;if(u.VM(s,{status:i,user_count:1,from:r,request_type:"member"}),"approved"===i){const e={type:"existingUser",value:o,spaceRole:"read_and_write"};if(!(await p.n_({environment:s,store:t,inviteTargets:[e],inviteRole:"read_and_write",isOnboarding:!1,invite:{inviteOrigin:"membership_request"}})).success)return void(null==n||n(!1))}b.createAndCommit({userAction:"GrantAccessActivityAction.handleGrantAccess",environment:s,perform:e=>{g.sW({store:a,transaction:e,data:{granted_time:Date.now(),granted_by_table:l.KJ,granted_by_id:d,resolved_time:Date.now(),resolved_by_table:l.KJ,resolved_by_id:d,status:i}})}}),u.O8(s,{status:i,request_id:a.id,from:r,for_actor_id:o.id,space_role:t.getRole()}),null==n||n(!0)},C=async e=>{const{environment:s,store:t,status:a,requests:o,onResolveComplete:i}=e,r=s.currentUser.id;if(u.VM(s,{status:a,user_count:o.length,from:e.from,request_type:"member"}),"approved"===a){const e=o.map((e=>({type:"existingUser",value:e.forActor,spaceRole:"read_and_write"})));if(!(await p.n_({environment:s,store:t,inviteTargets:e,inviteRole:"read_and_write",isOnboarding:!1,invite:{inviteOrigin:"membership_request"}})).success)return void(null==i||i(!1))}b.createAndCommit({userAction:"accessRequestActions.resolveMembershipRequests",environment:s,perform:e=>{o.map((s=>{const t=s.accessRequestStore;g.sW({store:t,transaction:e,data:{granted_time:Date.now(),granted_by_table:l.KJ,granted_by_id:r,resolved_time:Date.now(),resolved_by_table:l.KJ,resolved_by_id:r,status:a}})}))}}),null==i||i(!0)};async function j(e){const{environment:s,status:t,accessRequest:a,onResolveComplete:o,from:i,forActor:r}=e;if(!a.isGuestInviteRequest())return;const n=await m.resolveAccessRequest(s,{accessRequestId:a.id,status:t,spaceId:a.getParentId()});if("failed"===n.type)return null==o||o(!1),void h.showErrorMessage((0,_.wf)(v.default.getIntl(),n));null==o||o(!0),await y.bi(s);const l=a.getAttributes().permission_records_and_roles[0].role,d=a.getAttributes().permission_records_and_roles[0].id;var p;"approved"===t&&c.jB(s,{role:l,is_space:!1,invite_targets:[{type:"existingUser",value:{id:r.id,version:0,email:r.getEmail()},spaceRole:"none"}],is_onboarding:!1,invite_origin:"guest_invite_request",permission_items:[{type:"user_permission",role:l,user_id:r.id}],invite_message_length:(null===(p=a.getAttributes().invite_message)||void 0===p?void 0:p.length)??0,domainType:(0,f.JF)()});u.Cg(s,{status:t,request_id:a.id,for_actor_id:a.getForActorId(),created_by_id:a.getCreatedById(),requested_page_id:d,requested_role:l,from:i})}async function R(e){const{environment:s,status:t,requests:o,onResolveComplete:i,from:r}=e;u.VM(s,{status:t,user_count:o.length,from:r,request_type:"guest"});const n=[],l=[];await Promise.all(o.map((e=>{const{accessRequest:o,forActor:i}=e,d=a.kk.fromAccessRequest(o),c=a.kk.fromUser(i);return j({environment:s,status:t,accessRequest:d,onResolveComplete:e=>{e?n.push(c):l.push(c)},forActor:c,from:r})}))),null==i||i(n,l)}async function q(e){if(x.Z.reset(),!e.canAdmin)return;const{environment:s,spaceId:t}=e,a=await m.getUnreadAccessRequestCount(s,{parentTable:n.bx,parentId:t,size:1});"success"===a.type&&x.Z.setState({spaceId:t,count:a.data.count})}async function k(e,s){var t;const n=new Set(null===(t=e.getModel())||void 0===t?void 0:t.getMemberIds()),c=new Map,u=function(e){const s=new Map;for(const o of e){var t;const e=a.kk.fromAccessRequest(o.accessRequest),i=A(e);if(!(0,d.$K)(i))continue;const r=null===(t=s.get(i))||void 0===t?void 0:t.accessRequest;r&&r.created_time>e.getCreatedTime()||s.set(i,o)}return Array.from(s.values())}(s.map((s=>{const t=(0,M.Kv)(e,{table:i.J8,id:s}),a=t.getValue();if(a)return{accessRequest:a,accessRequestStore:t}})).filter(d.$K));return await Promise.all(u.map((async s=>{let{accessRequest:t,accessRequestStore:i}=s;if(t.for_actor_table!==l.KJ||t.created_by_table!==l.KJ)return;const u=(0,M.Kv)(e,{table:t.for_actor_table,id:t.for_actor_id});await u.load();const m=u.getValue();if(!m)return;const p=(0,M.Kv)(e,{table:t.created_by_table,id:t.created_by_id});await p.load();const g=p.getValue();if(!g)return;const b=a.kk.fromAccessRequest(t);b.isGuestInviteRequest()&&!function(e){let{spaceStore:s,accessRequest:t,spaceMemberIds:a}=e;if(a.has(t.for_actor_id))return!1;const i=t.getAttributes().permission_records_and_roles[0].id,n=t.getForActorId(),l=M.G.createChildStore(s,{id:i,spaceId:s.id,table:r.iU});if(!l||l.getPermissionItems().some((e=>(0,o.jg)(e)&&e.user_id===n&&(0,o.YX)(e.role))))return!1;return!0}({accessRequest:b,spaceMemberIds:n,spaceStore:e})||function(e){const{accessRequest:s,requests:t,createdByValue:o,forActorValue:i,accessRequestStore:r}=e,n=a.kk.fromAccessRequest(s),l=function(e){if(e.isGuestInviteRequest()){const s=e.getAttributes().permission_records_and_roles[0];return`guest_invite_${e.getForActorId()}:${s.id}:${s.role}`}if(e.isSpaceMembershipRequest())return`space_membership_${e.getForActorId()}`;if(e.isTeamMembershipRequest())return;if(e.isPageAccessRequest())return;(0,d.t1)(e)}(n);if(!(0,d.$K)(l))return;if(t.has(l)){const e=t.get(l);if(!e)return;s.created_time>e.latestRequestTime?t.set(l,{...e,createdByActorsWithReason:[{actor:o,reason:s.message},...e.createdByActorsWithReason],accessRequest:s,accessRequestStore:r,latestRequestTime:s.created_time}):t.set(l,{...e,createdByActorsWithReason:[...e.createdByActorsWithReason,{actor:o,reason:s.message}]})}else t.set(l,{forActor:i,createdByActorsWithReason:[{actor:o,reason:s.message}],accessRequest:s,accessRequestStore:r,latestRequestTime:s.created_time,requestType:n.isGuestInviteRequest()?"guest":"member"})}({requests:c,accessRequest:t,createdByValue:g,forActorValue:m,accessRequestStore:i})}))),Array.from(c.values())}function A(e){if(e.isGuestInviteRequest()){const s=e.getAttributes().permission_records_and_roles[0];return`guest_invite_${e.getForActorId()}:${s.id}:${e.getCreatedById()}`}if(e.isSpaceMembershipRequest())return`space_membership_${e.getForActorId()}:${e.getCreatedById()}}`;e.isTeamMembershipRequest()||e.isPageAccessRequest()||(0,d.t1)(e)}},15025:(e,s,t)=>{t.d(s,{VR:()=>u,ac:()=>c,zq:()=>d});t(67294);var a=t(24405),o=t(13148),i=t(98519),r=t(9291),n=t(85893);function l(e){window.__c={n:"CapabilityItem"};const{enabled:s,labelIfEnabled:t,labelIfDisabled:o}=e,i=(0,a.yK)((e=>({container:{color:s?e.mediumTextColor:e.lightTextColor}})),[s]);return(0,n.jsxs)("div",{style:i.container,children:[m(s)," ",s?t:o]})}function d(e){const s="none"!==e;return[(0,n.jsx)(l,{enabled:s&&e.read_content,labelIfEnabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.mixedAccess.readContent.enabled",defaultMessage:"Can read content."}),labelIfDisabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.mixedaccess.readContent.disabled",defaultMessage:"Cannot read content."})},"read_content"),(0,n.jsx)(l,{enabled:s&&e.insert_content,labelIfEnabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.mixedaccess.insertContent.enabled",defaultMessage:"Can insert content."}),labelIfDisabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.mixedaccess.insertContent.disabled",defaultMessage:"Cannot insert content."})},"insert_content"),(0,n.jsx)(l,{enabled:s&&e.update_content,labelIfEnabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.mixedaccess.updateContent.enabled",defaultMessage:"Can update content."}),labelIfDisabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.mixedaccess.updateContent.disabled",defaultMessage:"Cannot update content."})},"update_content"),(0,n.jsx)(l,{enabled:s&&e.insert_comment,labelIfEnabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.insertComment.enabled",defaultMessage:"Can comment."}),labelIfDisabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.insertComment.disabled",defaultMessage:"Cannot comment."})},"insert_comment"),(0,n.jsx)(l,{enabled:s&&e.read_comment,labelIfEnabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.readComment.enabled",defaultMessage:"Can read comments."}),labelIfDisabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.readComment.disabled",defaultMessage:"Cannot read comments."})},"read_comment")]}function c(e){return[(0,n.jsx)(l,{enabled:e.read_user_without_email,labelIfEnabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.userAccess.readUsers.enabled",defaultMessage:"Can view users."}),labelIfDisabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.userAccess.readUsers.disabled",defaultMessage:"Cannot view users."})},"read_user_without_email"),(0,n.jsx)(l,{enabled:e.read_user_with_email,labelIfEnabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.userAccess.readUserEmailAddresses.enabled",defaultMessage:"Can view user email addresses."}),labelIfDisabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.userAccess.readUserEmailAddresses.disabled",defaultMessage:"Cannot view user email addresses."})},"read_user_with_email")]}function u(e){return[(0,n.jsx)(l,{enabled:e.link_preview,labelIfEnabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.linkPreview.enabled",defaultMessage:"Can preview links."}),labelIfDisabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.linkPreview.disabled",defaultMessage:"Cannot preview links."})},"link_preview"),(0,n.jsx)(l,{enabled:e.synced_database,labelIfEnabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.syncedDatabase.enabled",defaultMessage:"Can sync databases."}),labelIfDisabled:(0,n.jsx)(r.FormattedMessage,{id:"capabilitiesTooltip.syncedDatabase.disabled",defaultMessage:"Cannot sync databases."})},"synced_database")]}function m(e){const s={width:12,display:"inline",verticalAlign:"middle"};return e?(0,i.k)(s):(0,o.U)(s)}},84015:(e,s,t)=>{t.d(s,{_:()=>d});t(67294);var a=t(480),o=t(87479),i=t(9291),r=t(15025),n=t(28992),l=t(85893);function d(e){window.__c={n:"CumulativeBotBlockRoleTooltip"};const{role:s}=e,t=(0,i.useIntl)(),{device:d}=(0,a.O7)(),c=(0,r.zq)(s);return(0,l.jsx)(n.Z,{...e,title:t.formatMessage((0,o.Gx)(s,void 0).label),shouldWrapCaption:!0,style:d.isMobile?{padding:"12px 4px"}:{padding:4,marginTop:2,marginBottom:2},captionStyle:{marginTop:4},caption:(0,l.jsx)("div",{children:c})})}},33241:(e,s,t)=>{t.d(s,{M:()=>p,d:()=>m});t(67294);var a=t(24405),o=t(8848),i=t(82855),r=t(87479),n=t(15047),l=t(97880),d=t(9291),c=t(89728),u=t(85893);function m(e){let{role:s,events:t,disabled:o,buttonStyle:r,buttonContents:n,icon:l,table:m,isRemovable:g,isCurrentUser:b}=e;window.__c={n:"PermissionRoleButton"};const f=(0,a.yK)((e=>({button:{marginRight:8,...r},icon:{width:10,marginLeft:4,fill:e.lightIconColor},label:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}})),[r]),_=l||!o&&i.E;return(0,u.jsxs)(c.Z,{...t,disabled:o,style:f.button,children:[n||(0,u.jsx)("span",{className:"notranslate",style:f.label,children:(0,u.jsx)(d.FormattedMessage,{...p(s,m,g,b).label})}),_&&_(f.icon)]})}function p(e,s,t,a){if("access"===e)return{label:r.mq.canAccessLabel};if("limited"===e)return{label:r.mq.limitedAccessLabel};if((0,r.oF)(e))return(0,r.Gx)(e,s);switch(e){case"editor":return s===n.bx?{label:r.mq.workspaceOwnerLabel,caption:r.mq.workspaceOwnerCaption}:{label:r.mq.fullAccessLabel,caption:r.mq.fullAccessCaption};case"membership_admin":return s===n.bx?{label:r.mq.membershipAdminLabel,caption:r.mq.membershipAdminCaption}:{label:r.mq.canEditLabel,caption:r.mq.canEditCaption};case"read_and_write":return s===n.bx?{label:r.mq.memberLabel,caption:r.mq.memberCaption}:{label:r.mq.canEditLabel,caption:r.mq.canEditCaption};case"content_only_editor":return{label:r.mq.canEditContentLabel,caption:r.mq.canEditContentCaption};case"reader":return{label:r.mq.canReadLabel,caption:r.mq.canReadCaption};case"comment_only":return{label:r.mq.canCommentLabel,caption:r.mq.canCommentCaption};case"none":return t?s===n.bx?a?{label:r.mq.leaveWorkspaceLabel,style:{color:o.ZP.red}}:{label:r.mq.removeFromWorkspaceLabel,style:{color:o.ZP.red}}:{label:r.mq.removeWorkspaceLabel,style:{color:o.ZP.red}}:{label:r.mq.noAccessLabel,style:{color:o.ZP.red}};default:(0,l.t1)(e)}}},7567:(e,s,t)=>{t.d(s,{ZP:()=>N});t(57658),t(67294);var a=t(480),o=t(86628),i=t(24405),r=t(41892),n=t(36591),l=t(87479),d=t(72141),c=t(15047),u=t(47425),m=t(97880),p=t(9291),g=t(91536),b=t(47307),f=t(95477),_=t(43250),v=t(33929),M=t(87279),x=t(98742),y=t(46654),h=t(18514),w=t(4023),C=t(61766),j=t(60709),R=t(44041),q=t(54669),k=t(70060),A=t(88893),F=t(35057),I=t(52275),T=t(31945),P=t(78140),S=t(28992),B=t(32163),U=t(74136),Z=t(72495),W=t(26388),D=t(64369),E=t(84015),L=t(42402),O=t(33241),K=t(60442),V=t(85893);const G=(0,p.defineMessages)({fullAccessTeamGuestsDisabledMessage:{id:"permissionRoleSelect.teamGuestPermissionItem.disabledPermissionitem.tooltip",defaultMessage:"Teamspace guests can't have full access."}});const N=function(e){let{isUserPermission:s,type:t,table:i,role:r,isInvite:n,availableRoleItems:d,blockType:u,onClick:m,origin:g,isMenuItem:b,isRemovableOverride:f,disabled:x,buttonContents:h,buttonPopupStore:w,buttonStyle:R,placementToOrigin:q,alignmentToOrigin:k,upgradeButtonName:A,onUpgradeButtonClick:F,onChange:U,onRemoveMemberClick:W,header:D,footer:L,showPermissionOverrideWarning:K}=e;window.__c={n:"PermissionRoleSelect"};const N=(0,a.O7)(),$=(0,o.qz)(w,C.Z),{device:Q}=N,X=!!s,ee=(0,o.VK)((()=>function(e,s,t,a,o,i){if(o&&o.length>0)return o;const r=[];"explicit_team_guest_permission"===e?r.push({role:"editor",disabledInfo:{isDisabled:!0,disabledMessage:v.default.formatMessage(G.fullAccessTeamGuestsDisabledMessage)}}):"bot_permission"!==e&&r.push({role:"editor"});"space"===s&&(0,y.U7)()&&r.push({role:"membership_admin"});r.push({role:"read_and_write"}),"collection_view"!==i&&"collection_view_page"!==i||"bot_permission"===e&&"content_only_editor"!==t||r.push({role:"content_only_editor"});s!==c.bx&&("bot_permission"!==e&&r.push({role:"comment_only"}),"bot_permission"===e&&"reader"!==t||r.push({role:"reader"}));a||r.push({role:"none"});return r}(t,i,r,n,d,u)),[t,i,r,n,d,u]);return(0,V.jsx)(T.ZP,{onClick:e=>{e.stopPropagation(),m&&m()},popupType:Q.isMobile?T.Z4.SlideUp:T.Z4.Popup,buttonPopupStore:$,renderOrigin:e=>g||(b?(0,V.jsx)(I.Z,{...e,title:(0,V.jsx)(p.FormattedMessage,{...(0,O.M)(r,i,z(t,f),X).label}),focused:!1,showExtensionArrow:!0}):(0,V.jsx)(O.d,{role:r,events:e,disabled:x,buttonContents:h,buttonStyle:R,table:i,isRemovable:z(t,f),isCurrentUser:X})),placementToOrigin:q||j.Iw.Bottom,alignmentToOrigin:k,render:e=>{let a,o;return a=(0,l.oF)(r)?[{key:"mixed_role_section",render:e=>(0,V.jsx)(Z.Z,{...e,topBorder:!1}),items:[{key:"mixed_role_description",render:()=>(0,V.jsx)(E._,{role:r}),action:()=>{}}]},{key:"bot_capabilities_warning",render:e=>(0,V.jsx)(Z.Z,{...e,topBorder:!0}),items:[{key:"warning_details",render:e=>(0,V.jsx)(S.Z,{...e,shouldWrapCaption:!0,caption:"Integration permissions cannot be changed on a page. You can manage integrations in settings."}),action:()=>{}}]},{key:"remove_bot",render:e=>(0,V.jsx)(Z.Z,{...e,topBorder:!0}),items:[{key:"none",render:e=>(0,V.jsx)(Y,{role:r,upgradeButtonName:A,onUpgradeButtonClick:F,focused:e.focused,props:e,availableRole:{role:"none"},isCurrentUser:!!s,isRemovableOverride:f,table:i,type:t}),action:()=>{J("none",i,r,t,A,N,ee,U,F,s,W),e.close()}}]}]:[{key:"roles",render:e=>(0,V.jsx)(Z.Z,{...e,topBorder:0!==e.index}),items:ee.map((a=>({key:a.role,render:e=>(0,V.jsx)(Y,{role:r,upgradeButtonName:A,onUpgradeButtonClick:F,focused:e.focused,props:e,availableRole:a,isCurrentUser:!!s,isRemovableOverride:f,table:i,type:t}),action:()=>{J(a.role,i,r,t,A,N,ee,U,F,s,W),e.close()}})))}],o=Q.isMobile?{menuType:M.og.Modal,title:(0,V.jsx)(p.FormattedMessage,{id:"userPermissionsMenu.mobile.title",defaultMessage:"Select role"}),right:(0,V.jsx)(p.FormattedMessage,{id:"userPermissionsMenu.mobile.doneButton.label",defaultMessage:"Done"}),onClickRight:e.close}:{menuType:M.og.Popup,width:264},(0,V.jsxs)(P.Z,{className:_.a6i,header:D,footer:L,...o,children:[(0,V.jsx)(B.Z,{type:B.i.Vertical,initialFocus:void 0,sections:a}),K&&(0,V.jsx)(H,{})]})}})};function $(e,s,t){const a=(0,F.zt)();if((0,u.QM)(a)){if((s===c.bx?d.RN(e):d.J5(e)&&!d.zz(e))&&"public_permission"!==t&&"bot_permission"!==t)return s===c.bx?(0,V.jsx)(K.Z,{imageURL:r.Z.images.tooltips.upsells.spaceReadAndWritePng,imageWidth:240,imageHeight:100,caption:(0,V.jsx)(p.FormattedMessage,{defaultMessage:"Members cannot change workspace settings or invite new members.",id:"permissionRoleSelect.spaceReadAndWriteUpgradeTooltip.caption"}),title:(0,V.jsx)(p.FormattedMessage,{defaultMessage:"Upgrade to add non-admin members",id:"permissionRoleSelect.spaceReadAndWriteUpgradeTooltip.title"})}):(0,V.jsx)(K.Z,{imageURL:r.Z.images.tooltips.upsells.userReadAndWritePng,imageWidth:240,imageHeight:100,caption:(0,V.jsx)(p.FormattedMessage,{defaultMessage:"Users with edit access can edit a page but not share it with others.",id:"permissionRoleSelect.userReadAndWriteUpgradeTooltip.caption"}),title:(0,V.jsx)(p.FormattedMessage,{defaultMessage:"Upgrade to add editors",id:"permissionRoleSelect.userReadAndWriteUpgradeTooltip.title"})})}return!1}function z(e,s){if(void 0!==s)return s;switch(e){case"user_permission":case"bot_permission":case"group_permission":return!0;case"space_permission":case"explicit_team_permission":case"team_permission":case"team_owner_permission":case"explicit_team_owner_permission":case"explicit_team_guest_permission":case"public_permission":case"exclusive_user_permission":return!1;default:(0,m.t1)(e)}}async function J(e,s,t,a,o,i,r,n,d,u,m){if(t===e)return;const _=()=>{n&&n(e)};if(g.Mv({newRole:e,availableRoles:r}),$(e,s,a)&&!f.default.isAdminMode)R.y(i,{from:o,for:A.M9(i)||"plus"}),d&&d();else if(function(e,s,t){return t&&(0,l.nl)(s,e)===s&&"none"===e}(e,t,u))b.showDialog({showCancel:!0,keepFocus:!1,message:s===c.bx?(0,V.jsx)(p.FormattedMessage,{id:"userPermissionsMenu.removePermissionsModal.removeSelfFromWorkspace.confirmationMessage",defaultMessage:"Are you sure you want to remove your own access? You will lose access to the workspace, and any private pages will be lost."}):(0,V.jsx)(p.FormattedMessage,{id:"userPermissionsMenu.removePermissionsModal.removeSelfFromPage.confirmationMessage",defaultMessage:"Are you sure you want to remove your own access?"}),items:[{label:(0,V.jsx)(p.FormattedMessage,{id:"userPermissionsMenu.removePermissionsModal.removeSelfButton.label",defaultMessage:"Remove"}),color:"red",onAccept:_}]});else if(function(e,s,t){return t&&(0,l.nl)(s,e)===s}(e,t,u))b.showDialog({showCancel:!0,keepFocus:!1,message:(0,V.jsx)(p.FormattedMessage,{id:"userPermissionsMenu.downgradePermissionsModal.downgradeSelfFromWorkspaceOrPage.confirmationMessage",defaultMessage:"Are you sure you want to downgrade your own access?"}),items:[{label:(0,V.jsx)(p.FormattedMessage,{id:"userPermissionsMenu.downgradePermissionsModal.downgradeSelfButton.label",defaultMessage:"Downgrade"}),color:"red",onAccept:_}]});else if(function(e,s){return s===c.bx&&"none"===e}(e,s))if(m)m();else{await async function(e){const{message:s}=e;return new Promise((e=>{b.showDialog({showCancel:!0,keepFocus:!1,handleCancel:()=>e(!1),message:s,items:[{label:(0,V.jsx)(p.FormattedMessage,{id:"userPermissionsMenu.removePermissionsModal.removeUserButton.label",defaultMessage:"Remove"}),color:"red",onAccept:()=>e(!0)}]})}))}({message:(v=!0,v&&(0,F.wP)()?(0,V.jsx)(p.FormattedMessage,{id:"userPermissionsMenu.removePermissionsModal.removeUserFromWorkspace.enterprise.confirmationMessage",defaultMessage:"If you remove this member, they will lose workspace access. After their removal, you may transfer their private pages to another member. <transferpagelink>Learn more</transferpagelink>.",values:{transferpagelink:e=>(0,V.jsx)(L.Z,{href:(0,h.UY)("guides.transferContent"),external:!0,children:e})}}):v?(0,V.jsx)(p.FormattedMessage,{id:"userPermissionsMenu.removePermissionsModal.removeUserFromWorkspace.confirmationMessage",defaultMessage:"Are you sure you want to remove this person? They will lose access to the workspace, and any private pages will be lost."}):(0,V.jsx)(p.FormattedMessage,{id:"userPermissionsMenu.removePermissionsModal.removeUserFromPage.confirmationMessage",defaultMessage:"Are you sure you want to remove this person?"}))})&&_()}else _();var v}function Y(e){window.__c={n:"ItemComponent"};const{availableRole:s,isCurrentUser:t,role:r,table:l,type:d,isRemovableOverride:c,upgradeButtonName:u,onUpgradeButtonClick:m}=e,{label:g,caption:b}=(0,O.M)(s.role,l,z(d,c),t),f=(0,i.Fg)(),_=(0,a.O7)(),{device:v}=_,{onClick:M,key:y,...h}=e.props,C=s.disabledInfo,j=(0,o.VK)((()=>$(s.role,l,d)),[s,l,d]),R=(0,o.VK)((()=>_.device.isMobile&&k.bQ()),[_]),F=Boolean(j),T=(0,o.VK)((()=>F&&A.M9(_)),[_,F]),P=F&&!R;return C&&C.isDisabled?(0,V.jsx)(W.ZP,{delayThreshold:0,renderTooltip:e=>(0,V.jsx)("div",{...e,children:C.disabledMessage}),placement:w.u.Right,textWrap:!0,render:t=>(0,V.jsx)(I.Z,{...t,focused:e.focused,disabled:!0,disabledFeedback:!0,right:r===s.role?(0,V.jsx)("div",{style:{width:v.isMobile?16:14},children:(0,n.e)()}):void 0,title:(0,V.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,V.jsx)("div",{style:{...e.style,marginRight:j?6:0},children:(0,V.jsx)(p.FormattedMessage,{...g})})}),caption:b&&(0,V.jsx)("span",{style:{color:f.mediumTextColor},children:(0,V.jsx)(p.FormattedMessage,{...b})}),shouldWrapCaption:!0})}):(0,V.jsx)(q.Z,{requireUpgradeToTier:T,analyticsName:u,renderUpgradeTooltip:()=>j,tooltipPlacement:w.u.Left,onClick:M,onUpgradeClick:m,render:(t,a)=>{const{focused:o,...i}=(0,x.Z)(h,t);return(0,V.jsx)(I.Z,{...i,focused:o||e.focused,right:r===s.role?(0,V.jsx)("div",{style:{width:v.isMobile?16:14},children:(0,n.e)()}):void 0,title:(0,V.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,V.jsx)("div",{style:{...e.style,marginRight:j?6:0},children:(0,V.jsx)(p.FormattedMessage,{...g})}),a,e.availableRole.tag&&(0,V.jsx)(U.Z,{desktopStyle:{marginLeft:7},children:e.availableRole.tag})]}),caption:b&&(0,V.jsx)("span",{style:{color:f.mediumTextColor},children:(0,V.jsx)(p.FormattedMessage,{...b})}),shouldWrapCaption:!0,disabled:P})}})}function H(){window.__c={n:"PermissionOverrideLabelComponent"};const e=(0,i.Fg)(),s=(0,a.O7)(),{device:t}=s;return(0,V.jsx)(D.Z,{style:{padding:12,backgroundColor:e.sidebarSecondaryBackground,boxShadow:`0 -1px 0 ${e.regularDividerColor}`,marginTop:t.isMobile?28:1},isMultiline:!0,isSmall:!0,children:(0,V.jsx)(p.FormattedMessage,{id:"permissionRoleSelect.overrideMessage.caption",defaultMessage:"You’ll override permissions from the parent page if you change this role."})})}},93963:(e,s,t)=>{t.d(s,{z:()=>n});t(67294);var a=t(24405),o=t(9291),i=t(85893);const r=8;function n(e){let{color:s,size:t,style:n}=e;window.__c={n:"StatusDot"};const l=(0,o.useIntl)(),d=(0,a.yK)((e=>({dot:{height:t||r,width:t||r,background:s||e.blueColor,flexShrink:0,borderRadius:"100%",pointerEvents:"none",...n}})),[t,s,n]);return(0,i.jsx)("div",{role:"img","aria-label":l.formatMessage({id:"statusDot.ariaLabel",defaultMessage:"New"}),style:d.dot})}},98905:(e,s,t)=>{t.d(s,{Z:()=>i});var a=t(49085);class o extends a.default{getInitialState(){return{count:0}}}const i=new o},91694:(e,s,t)=>{t.d(s,{Z:()=>_});t(67294);var a=t(480),o=t(86628),i=t(24405),r=t(8848),n=t(47425),l=t(97880),d=t(82990),c=t(9291),u=t(74136),m=t(26388),p=t(44041),g=t(70060),b=t(32856),f=t(85893);const _=function(e){let{subscriptionTier:s,mobileStyle:t,desktopStyle:_,analyticsName:v,onClick:M}=e;window.__c={n:"UpsellButton"};const x=(0,i.Fg)(),y=(0,a.O7)(),{device:h}=y,w=h.isIOS&&h.isNative,C=(0,o.VK)((()=>function(e,s){if(!(0,g.R$)())return{};switch(e){case"plus":case"business":case"enterprise":return{color:s.blueColor,background:"light"===s.mode?r.ZP.diffBackground:"rgba(35, 131, 226, 0.2)",fontWeight:d.Z.fontWeight.medium};default:return{}}}(s,x)),[s,x]);if(w)return null;let j;return"personal"===s?j=(0,f.jsx)(c.FormattedMessage,{defaultMessage:"Personal Pro",id:"upgradeButton.personal.text"}):(0,n.eR)(s)?j=(0,f.jsx)(b.D,{experimentId:"upsell_colors",groups:{control:(0,f.jsx)(c.FormattedMessage,{defaultMessage:"Plus",id:"upgradeButton.plus.text"}),on:(0,f.jsx)(c.FormattedMessage,{defaultMessage:"Plus ↗",id:"upgradeButton.plus.textWithArrow"})}}):(0,n.NG)(s)?j=(0,f.jsx)(b.D,{experimentId:"upsell_colors",groups:{control:(0,f.jsx)(c.FormattedMessage,{defaultMessage:"Business",id:"upgradeButton.business.text"}),on:(0,f.jsx)(c.FormattedMessage,{defaultMessage:"Business ↗",id:"upgradeButton.business.textWithArrow"})}}):(0,n.wP)(s)?j=(0,f.jsx)(b.D,{experimentId:"upsell_colors",groups:{control:(0,f.jsx)(c.FormattedMessage,{defaultMessage:"Enterprise",id:"upgradeButton.enterprise.text"}),on:(0,f.jsx)(c.FormattedMessage,{defaultMessage:"Enterprise ↗",id:"upgradeButton.enterprise.textWithArrow"})}}):(0,l.t1)(s),h.isMobile?(0,f.jsx)(u.Z,{mobileStyle:t,children:j}):(0,f.jsx)(m.ZP,{delayThreshold:120,placement:m.ug.Bottom,renderTooltip:()=>(0,f.jsxs)("div",{style:{maxWidth:500},children:[(0,f.jsx)(c.FormattedMessage,{defaultMessage:"Upgrade to use this feature.",id:"upgradeButton.upgrade.tooltip"}),(0,f.jsx)("br",{}),(0,f.jsx)(c.FormattedMessage,{defaultMessage:"Click to learn more.",id:"upgradeButton.learnMore.tooltip"})]}),originGap:6,render:e=>(0,f.jsx)(u.Z,{desktopStyle:_,innerStyle:C,onClick:e=>function(e,s,t,a,o){p.y(a,{from:s,for:t}),o&&o(e)}(e,v,s,y,M),...e,children:j})})}},54669:(e,s,t)=>{t.d(s,{Z:()=>d});t(67294);var a=t(480),o=t(26388),i=t(98742),r=t(44041),n=t(91694),l=t(85893);const d=function(e){window.__c={n:"UpsellGate"};const s=(0,a.O7)(),{render:t,requireUpgradeToTier:d,analyticsName:c,renderUpgradeTooltip:u,onUpgradeClick:m,alwaysAllowClick:p,tooltipPlacement:g,upgradeButtonDesktopStyle:b,upgradeButtonMobileStyle:f}=e;let _,{onClick:v,renderTooltip:M}=e;return d&&(_=(0,l.jsx)(n.Z,{subscriptionTier:d,analyticsName:c,desktopStyle:{display:"inline-block",pointerEvents:"none",...b},mobileStyle:{display:"inline-block",pointerEvents:"none",...f}}),p||(v=e=>{r.y(s,{from:c,for:d}),m&&m(e)},M=u)),(0,l.jsx)(o.ZP,{renderTooltip:M||(()=>null),render:e=>t((0,i.Z)(e,{onClick:v}),_),disableTooltip:!M,placement:g})}},82855:(e,s,t)=>{t.d(s,{E:()=>i});t(67294);var a=t(45238),o=t(85893);const i=(0,a.I)("chevronDownRounded",{viewBox:"0 0 15 9",svg:(0,o.jsx)("path",{d:"M7.92188 8.65625C8.19531 8.64844 8.44531 8.54688 8.64844 8.32812L14.5859 2.25C14.7578 2.07812 14.8516 1.85938 14.8516 1.60156C14.8516 1.08594 14.4453 0.671875 13.9297 0.671875C13.6797 0.671875 13.4375 0.773438 13.2578 0.953125L7.92969 6.42969L2.58594 0.953125C2.40625 0.78125 2.17188 0.671875 1.91406 0.671875C1.39844 0.671875 0.992188 1.08594 0.992188 1.60156C0.992188 1.85938 1.08594 2.07812 1.25781 2.25L7.20312 8.32812C7.41406 8.54688 7.64844 8.65625 7.92188 8.65625Z"})})}}]);