"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[1958],{95209:(e,t,a)=>{a.d(t,{M5:()=>E,Mr:()=>T,PV:()=>U,Vu:()=>M,XC:()=>C,eH:()=>B,jC:()=>x,jL:()=>k,kL:()=>h,qg:()=>_,zK:()=>y});a(21703),a(57658),a(30541);var o=a(33728),s=a(72126),r=a(72141),i=a(29477),n=a(21202),d=a(15047),c=a(97880),f=a(76464),l=a(79817),p=a(45101),v=a(65598),b=a(95697),u=a(77907),I=a(80444),m=a(85834),g=a(29677),w=a(44041),S=a(73466),R=a(91219),P=a(54642);const y=async e=>{const{environment:t,store:a,sudoModeStore:s,permissionsInviteStore:i,onInviteStart:l,contextualInviteStore:b,inviteOrigin:u}=e,{tokenQuery:I}=i.state;if((0,o.oH)(I.trim())&&(i.state.isInviteTargetsEmpty||!(0,g.ow)(i.state))){const e={type:"newUser",value:{email:I.trim()},source:"email"};p.Nd({target:e,permissionsInviteStore:i})||i.setState({...i.state,inviteTargets:[...i.state.inviteTargets,e],isInviteTargetsEmpty:!1,tokenQuery:""})}if(!i.state.isInviteTargetsEmpty&&i.state.inviteTargets.length>0){null==l||l();const e=i.state;if((0,g.ow)(e)){if(e.table===n.iU){if(!(0,v.OY)(a))throw new Error("Table mismatch.");const{inviteTargets:o,flowId:r,emailMessage:n}=e;i.reset();const d=await f.n_({environment:t,store:a,sudoModeStore:s,inviteTargets:o,inviteRole:void 0,isOnboarding:!1,invite:{inviteFlowId:r,inviteMessage:n,inviteOrigin:u}});return{success:d.success,requestedUserCount:d.success?Object.keys(d.requestedUsers).length:0}}if(e.table===d.bx){if(!(0,v.Mm)(a))throw new Error("Table mismatch.");const{inviteTargets:o,inviteRole:r,flowId:n}=e;i.reset();return{success:(await f.n_({environment:t,store:a,sudoModeStore:s,inviteTargets:o,inviteRole:r,isOnboarding:!1,invite:{inviteFlowId:n,inviteOrigin:u}})).success,requestedUserCount:0}}(0,c.t1)(e)}else{const{inviteRole:o,flowId:n,emailMessage:d}=e;i.reset();const c=function(e,t){const a=new Set;var o;(0,v.Y)(e)?null===(o=e.getPermissionItems())||void 0===o||o.forEach((e=>{(0,r.jg)(e)&&a.add(e.user_id)})):e.getPermissionItems().forEach((e=>{(0,r.jg)(e)&&a.add(e.user_id)}));return t.filter((e=>"existingUser"!==e.type||!a.has(e.value.id)))}(a,e.inviteTargets);if((0,r.iC)(o)){const e=await f.n_({environment:t,store:a,sudoModeStore:s,inviteTargets:c,inviteRole:o,isOnboarding:!1,invite:{inviteFlowId:n,inviteMessage:d,inviteOrigin:u}});return e.success&&(null==b||b.setState({...null==b?void 0:b.state,invitedEmailToUserIdMap:e.invitedUsers})),{success:e.success,requestedUserCount:e.success?Object.keys(e.requestedUsers).length:0}}if((0,v.Y)(a)&&(0,g.Db)(e)){return{success:await f.GQ({environment:t,store:a,inviteTargets:e.inviteTargets,inviteRole:o,createNewTeamFlowId:n}),requestedUserCount:0}}}}return{success:!0,requestedUserCount:0}};const T=e=>{e.permissionsInviteStore.setState({...e.permissionsInviteStore.state,modalOpen:!1,flowId:void 0})},B=e=>{const{permissionsInviteStore:t,contextualInviteStore:a}=e;if(!a)return;const o=[];t.state.inviteTargets.forEach((e=>{if("newUser"===e.type)o.push({email:e.value.email,isGuest:!0});else if("existingUser"===e.type){const t={...e.value,email:e.value.email,isGuest:"none"===e.spaceRole||"not_in_space"===e.spaceRole};o.push(t)}})),a.setState({...a.state,invitedUsers:o})},_=async e=>{const{environment:t,store:a,sudoModeStore:o,permissionsInviteStore:s,contextualInviteStore:r,onInviteClick:i,onInviteComplete:n,inviteOrigin:d,intl:c}=e,{currentSpaceStore:f}=I.default.state;if((0,b.$)(t)&&(null==r?void 0:r.state.selection)===m.uq.workspace_member&&f){if(!(await S.HD({environment:t,flowId:s.state.flowId||"",trackCreateTeamComplete:!1})))return;B({permissionsInviteStore:s,contextualInviteStore:r}),await(0,l.j_)({environment:t,spaceStore:f,contextualInviteStore:r,from:"share_menu",intl:c})}else B({permissionsInviteStore:s,contextualInviteStore:r});let p={success:!1,requestedUserCount:0};try{p=await y({environment:t,store:a,sudoModeStore:o,permissionsInviteStore:s,contextualInviteStore:r,onInviteStart:()=>{null==i||i()},inviteOrigin:d})}catch(v){}finally{null==n||n(p.success,p.requestedUserCount)}},h=async e=>{const{environment:t,permissionsInviteStore:a,from:o}=e;await p.Aw({environment:t,permissionsInviteStoreState:a.state,from:o})||a.reset()},U=e=>{const{permissionsInviteStore:t,targetToRemove:a,defaultRoleForNonBot:o}=e;if(!t.state.isInviteTargetsEmpty)if((0,g.ow)(t.state))if((0,g.ow)(t.state)){const e=t.state.inviteTargets.filter((e=>e!==a));0===e.length?t.setState({...t.state,inviteTargets:[],inviteRole:o,isInviteTargetsEmpty:!0}):t.setState({...t.state,inviteTargets:e})}else(0,c.t1)(t.state);else{const e=t.state.inviteTargets.filter((e=>e!==a));0===e.length?t.setState({...t.state,inviteTargets:[],inviteRole:o,isInviteTargetsEmpty:!0}):t.setState({...t.state,inviteTargets:e})}},M=e=>{const{environment:t,onUpgradeButtonClick:a,upgradeButtonName:o}=e;w.y(t,{from:o,for:"plus"}),null==a||a()};async function E(e,t){const a=new Set(t),o=Array.from(a).map((async t=>{const a=await P.findUser(e,{email:t});if("success"===a.type){const e=a.data;if(e.value){return{type:"existingUser",value:e.value.value}}}return{type:"newUser",value:{email:t},source:"email"}}));return await Promise.all(o)}const x=async e=>{const t="invitee",{environment:a,permissionsInviteStore:s,event:r}=e;if(!s.state.isInviteTargetsEmpty&&(0,g.ow)(s.state)){const e=r.target.value;s.setState({...s.state,inputFocus:t,tokenQuery:e})}else{const e=r.target.value,{extractedEmails:i,newInputValue:n}=(0,o.zI)(e),d=(await E(a,i)).filter((e=>!p.Nd({target:e,permissionsInviteStore:s}))),c=[...s.state.inviteTargets,...d];c.length>0?s.setState({...s.state,inviteTargets:c,isInviteTargetsEmpty:!1,inputFocus:t,tokenQuery:n}):s.setState({...s.state,inviteTargets:[],isInviteTargetsEmpty:!0,inputFocus:t,tokenQuery:n})}},C=e=>{const{environment:t,newRole:a,permissionsInviteStore:o}=e,{state:s}=o;R.TC(t,{...p.a_(t,s),invite_updated_role:a}),!s.isInviteTargetsEmpty&&(0,g.ow)(s)||o.setState({...s,inviteRole:a})},k=async e=>{const{query:t,environment:a,sectionLimit:o,intl:r,membersOnly:n}=e,{currentSpaceStore:d}=I.default.state;if(!d)return{inviteUsers:[],inviteBots:[],inviteGroups:[]};const{userLimit:c,botLimit:f,groupLimit:l,importContactLimit:p}=o,v=await u.deps.searchActions.loader(),[b,m,g,{user:w,email:S},R]=await Promise.all([c>0?v.searchVisibleSpaceUsers({environment:a,query:t,membersOnly:n}):[],f>0?v.searchSpaceBots({environment:a,query:t}):[],l>0?v.searchSpaceGroups({query:t,intl:r}):[],v.searchEmailUser(a,t),p>0?Promise.race([P.searchContacts(a,{spaceId:d.id,limit:p,query:t}),(0,i.Xb)(1500,void 0)]):void 0]),y=b.slice(0,c).map((e=>({type:"existingUser",value:e}))),T=m.slice(0,f).map((e=>({type:"bot",value:e}))),B=g.slice(0,l).map((e=>({type:"group",value:e})));w&&y.unshift({type:"existingUser",value:w}),S&&y.unshift({type:"newUser",value:{email:S},source:"email"});let _=[];return R&&"success"===R.type&&(_=R.data.contacts.map((e=>({type:"newUser",value:{email:e.email,name:e.name,avatar_url:e.profile_photo},source:e.type})))),{inviteUsers:s.mN(y,(e=>e.value.email)),inviteBots:T,inviteGroups:B,importedContacts:_}}},69507:(e,t,a)=>{a.d(t,{l:()=>i});a(67294);var o=a(9291),s=a(72495),r=a(85893);function i(e){return(0,r.jsx)(s.Z,{title:(0,r.jsx)(o.FormattedMessage,{id:"inviteUserModal.searchDropdown.selectPersonTitle",defaultMessage:"Select a person"}),...e})}},79817:(e,t,a)=>{a.d(t,{$s:()=>E,Oh:()=>U,Si:()=>M,ch:()=>w,fC:()=>P,fr:()=>m,j_:()=>R,uJ:()=>h,x5:()=>S});a(57658);var o=a(33728),s=a(68626),r=a(24211),i=a(72141),n=a(97880),d=a(54642),c=a(76464),f=a(64964),l=a(33929),p=a(85834),v=a(88893),b=a(35057),u=a(4708),I=a(19306);const m=e=>{const{environment:t,spaceStore:a,contextualInviteStore:o}=e;g({environment:t,spaceStore:a,contextualInviteStore:o})?o.startRequestMembership():w({environment:t,spaceStore:a,contextualInviteStore:o})?o.startWorkspaceInvite():o.setState({...o.state,inviteStage:p.TG.closed})},g=e=>{const{spaceStore:t,contextualInviteStore:a}=e,o=t.getRole();return!(!o||!(0,i.RN)(o))&&(!!a.hasGuests()&&(!t.getDisableMembershipRequests()&&(0,u.p1)()))},w=e=>{const{spaceStore:t,contextualInviteStore:a}=e,o=t.getRole();return!(!o||!(0,i.dy)(o))&&(!!a.hasGuests()&&(0,b.Mk)())},S=e=>{const{success:t,intl:a,contextualInviteStore:o}=e,s=o.state.invitedUsers;0!==s.length&&(t?f.oV({label:a.formatMessage({id:"contextual_invite.permission_invite_success3",defaultMessage:"Successfully sent invites to {users}"},{users:h(s,a)})}):(f.oV({label:a.formatMessage({id:"contextual_invite.permission_invite_failure",defaultMessage:"Failed to send invites to {users}"},{users:h(s,a)})}),o.reset()))},R=async e=>{const{environment:t,spaceStore:a,contextualInviteStore:o,from:r,intl:i}=e,{selection:n,flowId:d}=o.state;if("page_guest"===n||!o.hasGuests())return o.reset(),!1;const{inviteTargets:f,unknownEmails:l}=await y({environment:t,contextualInviteStore:o}),p={...o.state};o.reset();const u=(0,b.zt)(),I=u&&(0,v.o9)(u)?"editor":e.inviteRole??"read_and_write";try{await c.n_({environment:t,store:a,inviteTargets:f,inviteRole:I,isOnboarding:!1,invite:{inviteOrigin:r,inviteFlowId:d,disable_invite_email:!0}})}catch(m){return _(i,p.invitedUsers),s.log({level:"error",from:"contextualInviteHelpers",type:"inviteMembers.inviteTargets",data:{miscDataToConvertToString:{...p,inviteTargets:f}}}),!1}finally{l.length&&s.log({level:"error",from:"contextualInviteHelpers",type:"inviteMembers.unknownUserId",data:{miscDataToConvertToString:{...p,unknownEmails:l}}})}return!0},P=async e=>{const{environment:t,spaceStore:a,originId:o,originType:r,reasonMessage:i,contextualInviteStore:n,intl:c}=e,{selection:f}=n.state;if("page_guest"===f||!n.hasGuests())return n.reset(),!1;const{inviteTargets:l,unknownEmails:p}=await y({environment:t,contextualInviteStore:n}),v={...n.state};n.reset();const b=[];try{const e=l.map((e=>d.requestAccess(t,{type:"actor-to-space",forActorId:e.value.id,spaceId:a.id,message:i,attributes:{origin_id:o,origin_type:r,origin_table:"share_menu"===r?"block":"space",add_permissions_on_approval:!1}}).catch((()=>b.push(e)))));await Promise.all(e)}catch(u){return B(c,v.invitedUsers),s.log({level:"error",from:"contextualInviteHelpers",type:"requestMembers.inviteTargets",data:{miscDataToConvertToString:{...v,inviteTargetsWithErrors:b}}}),!1}finally{p.length&&s.log({level:"error",from:"contextualInviteHelpers",type:"requestMembers.unknownUserId",data:{miscDataToConvertToString:{...v,unknownEmails:p}}})}return!0},y=async e=>{const{environment:t,contextualInviteStore:a}=e,{invitedEmailToUserIdMap:o}=a.state,s=[],r=[];for(const i of a.state.invitedUsers){if(!i.isGuest)continue;const e=await T(t,i,o);e?s.push({type:"existingUser",value:{id:e,email:i.email,version:1}}):r.push(i.email)}return{inviteTargets:s,unknownEmails:r}},T=async(e,t,a)=>{const o=await(async(e,t,a)=>{let o=t.id;if(o||(o=a[t.email]),!o){const a=await d.findUser(e,{email:t.email});if("failed"!==a.type){const e=a.data;e.value&&(o=e.value.value.id)}}return o})(e,t,a);if(o)return o;const s=(0,r.E2)(l.default.getIntl()),i=await d.createEmailUser(e,{email:t.email,preferredLocaleOrigin:"inferred_from_inviter",preferredLocale:s});return"failed"!==i.type?i.data.userId:void 0},B=(e,t)=>{0!==t.length&&f.oV({label:e.formatMessage({id:"contextual_invite.request_members_failure",defaultMessage:"Failed to request {users} to become members"},{users:h(t,e)})})},_=(e,t)=>{0!==t.length&&f.oV({label:e.formatMessage({id:"contextual_invite.contextual_invite_failure",defaultMessage:"Failed to invite to {users} as members"},{users:h(t,e)})})},h=(e,t)=>(0,I.W)(e.flatMap((e=>e.email||[]))),U=(e,t)=>{const{state:a}=t,o=(0,b.zt)(),s=t.getGuestEmails();return{invite_flow_id:a.flowId,user_count:s.length,user_emails:s,invite_space_role_selection:a.selection,is_bot:!1,subscription_tier:o}};function M(e){const{type:t}=e;switch(t){case"newUser":return{email:e.value.email,isGuest:!0};case"existingUser":return{...e.value,email:e.value.email,isGuest:"none"===e.spaceRole||"not_in_space"===e.spaceRole};case"group":return;default:(0,n.t1)(t)}}function E(e){const{contextualInviteUser:t,allowedDomains:a}=e,{email:s,isGuest:r}=t;if(r){const e=(0,o.Gd)(s);if(!e)return!1;if(a.has(e))return!0}return!1}},73466:(e,t,a)=>{a.d(t,{Cm:()=>T,HD:()=>h,Sq:()=>_,VG:()=>B,tW:()=>U});a(21703);var o=a(76837),s=a(68626),r=a(42875),i=a(4615),n=a(29369),d=a(27095),c=a(73314),f=a(70203),l=a(17224),p=a(54642),v=a(11302),b=a(86282),u=a(82530),I=a(33929),m=a(21115),g=a(95697),w=a(55838),S=a(80444),R=a(68373),P=a(66214),y=a(9867);async function T(e){let{environment:t,name:a,description:o,icon:s,accessLevel:r,isDefault:i,flowId:d,createTeamHome:c,teamPermissionRole:f,spacePermissionRole:v,members:b,settings:u}=e;const{currentSpaceStore:I}=S.default.getState();if(!I)throw new Error("currentSpaceStore does not exist");const m=I.id,g=await p.createTeam(t,{spaceId:m,name:a,description:o,icon:s,isDefault:i,accessLevel:r,teamPermissionRole:f,spacePermissionRole:v,members:b,settings:u});if("failed"===g.type)return void(0,y.Xy)(g);const{teamId:w}=g.data,P=R.zX.createChildStore(I,{table:n.e0,id:w,spaceId:m});return await P.load(),c&&await M({environment:t,teamStore:P}),l.o_(t,{store:P,flowId:d}),P}function B(e){var t;let{environment:a,page:o}=e;const s=(0,i.ZP)(),r=(null===(t=o.getParentPointer())||void 0===t?void 0:t.table)!==n.e0?"page_to_team_nested":"page_to_team";l.kr(a,{from:r,flowId:s}),P.Z.setState({open:!0,pageStore:o,flowId:s})}async function _(e){var t;let{environment:a,page:o,flowId:s,intl:i}=e;const{accessLevel:d,spacePermissionRole:c,teamPermissionRole:l,members:p}=(0,g.Pr)(o),b=(o.isDefined()?o.getModel().getRenderTitle({intl:i,userTimeZone:(0,r.r)(),getRecordModel:o.getRecordModel}):void 0)??f.QaF(o.getTitleValue()),I=await T({environment:a,name:b,icon:null===(t=o.getIcon())||void 0===t?void 0:t.icon,accessLevel:d,isDefault:!1,description:"",flowId:s,createTeamHome:!1,teamPermissionRole:l,spacePermissionRole:c,members:p});if(!I)return;const{currentSpaceViewStore:m}=S.default.state;m&&(u.createAndCommit({userAction:"teamActions.movePageToCreatedTeam",environment:a,perform:e=>{v.at({environment:a,currentSpaceViewStore:m,transaction:e,teamStore:I,action:"move",value:{type:n.e0,id:I.id},targets:[o],location:{type:"append"}})}}),(0,y.RF)({environment:a,teamId:I.id,tab:w.a.Members,from:"create_team_from_page"}),await new Promise((e=>setTimeout((()=>(0,y.JX)({teamStore:I,environment:a})),100))))}async function h(e){let{environment:t,name:a,description:o,icon:s,flowId:r,trackCreateTeamComplete:i}=e;const{currentSpaceStore:d}=S.default.getState();if(!d)throw new Error("currentSpaceStore does not exist");const c=d.id;if(!c)return;const f=await p.enableTeams(t,{spaceId:c,defaultTeamName:a,defaultTeamIcon:s,defaultTeamDescription:o});if("failed"===f.type)return void(0,y.Xy)(f);const{teamId:v}=f.data,b=R.zX.createChildStore(d,{table:n.e0,id:v,spaceId:c});return await b.load(),await M({environment:t,teamStore:b}),l.NO(t,{spaceId:c,store:b,flowId:r}),i&&v&&l.o_(t,{store:b,flowId:r}),b}async function U(e){var t;let{environment:a,teamStore:s,from:r,buttonPopupStore:n}=e;if(!a.currentUser.id)return!1;const d=(0,i.ZP)(),c=s.isDefault(),f=s.getTeamAccessLevel();if(c)return!1;const p=s.getName(),v=await T({environment:a,name:(0,o.nM)(p||""),description:"",icon:s.getRawIcon(),accessLevel:f,isDefault:c,createTeamHome:!0,teamPermissionRole:null===(t=s.getTeamPermission())||void 0===t?void 0:t.role,spacePermissionRole:s.getSpacePermissionRole(),members:[],settings:s.getSettings(),flowId:d});return!!v&&(l.$4(a,{store:v,from:r}),(0,y.hI)({environment:a,teamStore:v,shouldScroll:!0}),(0,y.RF)({environment:a,teamId:v.id,tab:w.a.General,from:"duplicate_team",buttonPopupStore:n}),new Promise((e=>setTimeout(e,500))).then((()=>{(0,m.Ke)(p)})),!0)}async function M(e){const{environment:t,teamStore:a}=e,o=S.default.state.currentSpaceStore,r=S.default.state.currentSpaceViewStore;if(!o||!r)return s.log({level:"error",from:"teamActions",type:"createHomepageOnTeamCreation-SpaceOrSpaceViewStoreError"}),!1;const i=(n=I.default.getIntl(),(0,c.G)(d.bZ.teamsHomepage,n));var n;return!!(await b.rC({environment:t,item:i,isPrivate:!1,spaceStore:o,spaceViewStore:r,useMinimalTemplates:!1,type:"inTeam",teamStore:a,from:"homepage_team",appendOrPrepend:"prepend",isOnboarding:!1}))||(s.log({level:"error",from:"teamActions",type:"createHomepageOnTeamCreation-PageNotCreated"}),!1)}},66214:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(49085);class s extends o.default{getInitialState(){return{open:!1}}}const r=new s},27095:(e,t,a)=>{a.d(t,{S$:()=>c,bZ:()=>f});a(72126);var o=a(88779),s=a(98251);const r={sources:{"en-US":{previewRootId:"e950a58c-0d6f-42c3-8225-9e7adc5d4182",rootId:"e950a58c-0d6f-42c3-8225-9e7adc5d4182",spaceId:o.BP}},nameMessage:s.sY.getStartedPage},i={sources:{"en-US":{previewRootId:"89ba9061-3275-4d76-966f-11691fdfd72f",rootId:"89ba9061-3275-4d76-966f-11691fdfd72f",spaceId:o.BP},"ko-KR":{previewRootId:"0eb824c6-f768-47bc-9204-d94dbb912c6e",rootId:"0eb824c6-f768-47bc-9204-d94dbb912c6e",spaceId:o.BP},"ja-JP":{previewRootId:"09f3541c-8edb-4603-9bc3-02bd22cd7836",rootId:"09f3541c-8edb-4603-9bc3-02bd22cd7836",spaceId:o.BP},"fr-FR":{previewRootId:"b13cc3bd-a0a3-4b61-b482-63051d7804b5",rootId:"b13cc3bd-a0a3-4b61-b482-63051d7804b5",spaceId:o.BP},"de-DE":{previewRootId:"b2b10be2-1b2f-4a48-a453-532657bd8e92",rootId:"b2b10be2-1b2f-4a48-a453-532657bd8e92",spaceId:o.BP},"es-ES":{previewRootId:"a00ebb82-58f2-4b40-89ee-a65be3befabf",rootId:"a00ebb82-58f2-4b40-89ee-a65be3befabf",spaceId:o.BP},"es-LA":{previewRootId:"6d1f21ba-36cf-4c90-9ecb-d5e377942f3a",rootId:"6d1f21ba-36cf-4c90-9ecb-d5e377942f3a",spaceId:o.BP},"pt-BR":{previewRootId:"50a76940-a26e-443a-b752-1412855e6ad7",rootId:"50a76940-a26e-443a-b752-1412855e6ad7",spaceId:o.BP},"no-NO":{previewRootId:"4c0f8e8c-3967-43ab-a0a8-a3a8ae837714",rootId:"4c0f8e8c-3967-43ab-a0a8-a3a8ae837714",spaceId:o.BP},"fi-FI":{previewRootId:"555c9896-0c2d-4af7-a951-1d81f051de2e",rootId:"555c9896-0c2d-4af7-a951-1d81f051de2e",spaceId:o.BP},"sv-SE":{previewRootId:"751d20c2-e2be-4e61-921a-adb553651c8c",rootId:"751d20c2-e2be-4e61-921a-adb553651c8c",spaceId:o.BP},"da-DK":{previewRootId:"8e0ffb71-86cb-46bf-abf2-720dcb4378f9",rootId:"8e0ffb71-86cb-46bf-abf2-720dcb4378f9",spaceId:o.BP},"nl-NL":{previewRootId:"53da1632-5152-4b4f-b440-19b82802360b",rootId:"53da1632-5152-4b4f-b440-19b82802360b",spaceId:o.BP}},nameMessage:s.sY.getStartedPage},n={sources:{"en-US":{previewRootId:"30fa18a6-609e-4f5b-af3d-31906c46fe23",rootId:"30fa18a6-609e-4f5b-af3d-31906c46fe23",spaceId:o.BP},"ko-KR":{previewRootId:"3afd60d5-3ce7-431a-b812-2c836b7596a3",rootId:"3afd60d5-3ce7-431a-b812-2c836b7596a3",spaceId:o.BP},"ja-JP":{previewRootId:"dd2f1d05-d4ef-48a0-899c-10fe0346a447",rootId:"dd2f1d05-d4ef-48a0-899c-10fe0346a447",spaceId:o.BP},"fr-FR":{previewRootId:"ac411712-ee48-4589-828d-b4e5827efc17",rootId:"ac411712-ee48-4589-828d-b4e5827efc17",spaceId:o.BP},"de-DE":{previewRootId:"0c5be7d7-cfcf-417b-824a-1a280254a58e",rootId:"0c5be7d7-cfcf-417b-824a-1a280254a58e",spaceId:o.BP},"es-ES":{previewRootId:"35c18cd6-99a8-47f3-91ee-40dbfec922fa",rootId:"35c18cd6-99a8-47f3-91ee-40dbfec922fa",spaceId:o.BP},"es-LA":{previewRootId:"017372b2-9d34-4118-ad13-9b8e15c30ebd",rootId:"017372b2-9d34-4118-ad13-9b8e15c30ebd",spaceId:o.BP},"pt-BR":{previewRootId:"035cfcde-4292-4905-82b2-6517e58a28b9",rootId:"035cfcde-4292-4905-82b2-6517e58a28b9",spaceId:o.BP},"no-NO":{previewRootId:"42a8570d-5be6-4be4-9ca3-0569f54863bf",rootId:"42a8570d-5be6-4be4-9ca3-0569f54863bf",spaceId:o.BP},"fi-FI":{previewRootId:"5f103e1f-2659-4c6a-bb30-705d2dae0774",rootId:"5f103e1f-2659-4c6a-bb30-705d2dae0774",spaceId:o.BP},"sv-SE":{previewRootId:"811aca42-41c0-4f83-9e08-e795d7a5f803",rootId:"811aca42-41c0-4f83-9e08-e795d7a5f803",spaceId:o.BP},"da-DK":{previewRootId:"7643a79b-68c8-46af-ae10-f089cb1ae62b",rootId:"7643a79b-68c8-46af-ae10-f089cb1ae62b",spaceId:o.BP},"nl-NL":{previewRootId:"6e5d9018-2dc0-4dc7-802c-be95d99f1660",rootId:"6e5d9018-2dc0-4dc7-802c-be95d99f1660",spaceId:o.BP}},nameMessage:s.sY.getStartedPage},d={sources:{"en-US":{previewRootId:"bfe1c963-57ad-4ed2-a9f9-65a3e65f61fd",rootId:"bfe1c963-57ad-4ed2-a9f9-65a3e65f61fd",spaceId:o.BP}},nameMessage:s.sY.learnNotionThreeSteps},c={desktopPersonal:i,desktopTeamCreate:n,desktopTeamJoin:{sources:{"en-US":{previewRootId:"bd0b93b9-a0e9-4582-a164-98acdc7a5b45",rootId:"bd0b93b9-a0e9-4582-a164-98acdc7a5b45",spaceId:o.BP},"ko-KR":{previewRootId:"ecdfe65a-28ee-46d2-a82b-99573e3dd63d",rootId:"ecdfe65a-28ee-46d2-a82b-99573e3dd63d",spaceId:o.BP},"ja-JP":{previewRootId:"56dd4a06-5073-46d2-8aca-8e37d90e5610",rootId:"56dd4a06-5073-46d2-8aca-8e37d90e5610",spaceId:o.BP},"fr-FR":{previewRootId:"1f8febec-2e84-4be2-a67d-7b5165845a4b",rootId:"1f8febec-2e84-4be2-a67d-7b5165845a4b",spaceId:o.BP},"de-DE":{previewRootId:"ee67a0e4-8343-4dd6-9636-9504cae6c573",rootId:"ee67a0e4-8343-4dd6-9636-9504cae6c573",spaceId:o.BP},"es-ES":{previewRootId:"eabf4d1f-9a77-441f-88fb-de9e9e0dc26e",rootId:"eabf4d1f-9a77-441f-88fb-de9e9e0dc26e",spaceId:o.BP},"es-LA":{previewRootId:"56ba9c1f-2a28-4d05-910c-e89fb051327d",rootId:"56ba9c1f-2a28-4d05-910c-e89fb051327d",spaceId:o.BP},"pt-BR":{previewRootId:"07ffa801-adfb-41f3-809b-87f69ae9e9cd",rootId:"07ffa801-adfb-41f3-809b-87f69ae9e9cd",spaceId:o.BP},"no-NO":{previewRootId:"62f63581-5683-49a3-8812-32e2de74a6a6",rootId:"62f63581-5683-49a3-8812-32e2de74a6a6",spaceId:o.BP},"fi-FI":{previewRootId:"f01bdcc5-d573-4790-b605-988df0f3a5ea",rootId:"f01bdcc5-d573-4790-b605-988df0f3a5ea",spaceId:o.BP},"sv-SE":{previewRootId:"e404919f-5dda-4fc3-a28f-6550e70cee12",rootId:"e404919f-5dda-4fc3-a28f-6550e70cee12",spaceId:o.BP},"da-DK":{previewRootId:"cee1de64-79f4-45b4-85d5-1ffae9624a8e",rootId:"cee1de64-79f4-45b4-85d5-1ffae9624a8e",spaceId:o.BP},"nl-NL":{previewRootId:"86ecfb21-c0ed-42cb-864c-83890d49cb51",rootId:"86ecfb21-c0ed-42cb-864c-83890d49cb51",spaceId:o.BP}},nameMessage:s.sY.getStartedPage},mobile:{sources:{"en-US":{previewRootId:"27fa9add-6ec7-433a-88c9-58279f5055c3",rootId:"27fa9add-6ec7-433a-88c9-58279f5055c3",spaceId:o.BP},"ko-KR":{previewRootId:"24c31e38-d546-423f-b3cb-a0533e711d02",rootId:"24c31e38-d546-423f-b3cb-a0533e711d02",spaceId:o.BP},"ja-JP":{previewRootId:"6e87073b-2877-44d1-9df7-2dd266bb35e3",rootId:"6e87073b-2877-44d1-9df7-2dd266bb35e3",spaceId:o.BP},"fr-FR":{previewRootId:"d6367cec-2e43-4558-882d-fb9a00545fef",rootId:"d6367cec-2e43-4558-882d-fb9a00545fef",spaceId:o.BP},"de-DE":{previewRootId:"172fd543-704b-489a-8d2e-7d1255f51bef",rootId:"172fd543-704b-489a-8d2e-7d1255f51bef",spaceId:o.BP},"es-ES":{previewRootId:"8f27f9ff-57f2-4c07-ad65-55c7f7f7501f",rootId:"8f27f9ff-57f2-4c07-ad65-55c7f7f7501f",spaceId:o.BP},"es-LA":{previewRootId:"24f220ca-372b-4003-8e74-13291220c778",rootId:"24f220ca-372b-4003-8e74-13291220c778",spaceId:o.BP},"pt-BR":{previewRootId:"e16c2241-0f08-4946-908e-c5e6612b0a8c",rootId:"e16c2241-0f08-4946-908e-c5e6612b0a8c",spaceId:o.BP},"no-NO":{previewRootId:"2021f38b-f367-4f6c-8232-73387a4dcfb6",rootId:"2021f38b-f367-4f6c-8232-73387a4dcfb6",spaceId:o.BP},"fi-FI":{previewRootId:"b40e41dc-6c0f-4d74-b3ad-3df012f49b01",rootId:"b40e41dc-6c0f-4d74-b3ad-3df012f49b01",spaceId:o.BP},"sv-SE":{previewRootId:"5759d5ff-246c-4daf-85f3-7fc9884a4bf7",rootId:"5759d5ff-246c-4daf-85f3-7fc9884a4bf7",spaceId:o.BP},"da-DK":{previewRootId:"b89fffe8-2e2d-4574-84e1-f81b26df5c1e",rootId:"b89fffe8-2e2d-4574-84e1-f81b26df5c1e",spaceId:o.BP},"nl-NL":{previewRootId:"2bfc9604-0e06-4ff2-90cf-c382d6bf341b",rootId:"2bfc9604-0e06-4ff2-90cf-c382d6bf341b",spaceId:o.BP}},nameMessage:s.sY.getStartedPageMobile},evernote:{sources:{"en-US":{previewRootId:"2e568628-70b1-4f35-934e-81ea4263d0e8",rootId:"2e568628-70b1-4f35-934e-81ea4263d0e8",spaceId:o.BP},"ko-KR":{previewRootId:"3d8c8d33-f904-41f7-a3ff-b6272c633079",rootId:"3d8c8d33-f904-41f7-a3ff-b6272c633079",spaceId:o.BP},"ja-JP":{previewRootId:"9aefc3b4-f172-4917-b1c7-495c26ec37f9",rootId:"9aefc3b4-f172-4917-b1c7-495c26ec37f9",spaceId:o.BP},"fr-FR":{previewRootId:"4453c56e-831c-4203-83fc-9736e276b7dc",rootId:"4453c56e-831c-4203-83fc-9736e276b7dc",spaceId:o.BP},"de-DE":{previewRootId:"6239e7bb-e6a6-4cb4-b4fa-236035bad7f7",rootId:"6239e7bb-e6a6-4cb4-b4fa-236035bad7f7",spaceId:o.BP},"es-ES":{previewRootId:"95dafcd5-6243-4838-bea1-8e19b0596f6f",rootId:"95dafcd5-6243-4838-bea1-8e19b0596f6f",spaceId:o.BP},"es-LA":{previewRootId:"34d8ae09-8161-49ec-ae2d-c188c477bb90",rootId:"34d8ae09-8161-49ec-ae2d-c188c477bb90",spaceId:o.BP},"pt-BR":{previewRootId:"cb2a5d30-074f-4c07-97b5-61147e0ea504",rootId:"cb2a5d30-074f-4c07-97b5-61147e0ea504",spaceId:o.BP}},nameMessage:s.sY.getStartedPageEvernote},web:r,learnNotionThreeSteps:d},f={teamsHomepage:{emoji:"🏠",nameMessage:s.sY.teamsHomepage,sources:{"en-US":{previewRootId:"4cd0eced-e273-46c2-84f5-a7efd7fbdd2f",rootId:"4cd0eced-e273-46c2-84f5-a7efd7fbdd2f",spaceId:o.BP},"ko-KR":{previewRootId:"82be252e-5184-44cd-a91b-a7d6ffdefac6",rootId:"82be252e-5184-44cd-a91b-a7d6ffdefac6",spaceId:o.BP},"ja-JP":{previewRootId:"bea8efd0-61d7-495b-a255-5c1f40753cf7",rootId:"bea8efd0-61d7-495b-a255-5c1f40753cf7",spaceId:o.BP},"fr-FR":{previewRootId:"12a6eaa5-30f7-419b-aee7-1be2dbc7278c",rootId:"12a6eaa5-30f7-419b-aee7-1be2dbc7278c",spaceId:o.BP},"de-DE":{previewRootId:"75db54d0-46ad-43b1-8ef0-7556ce0e9069",rootId:"75db54d0-46ad-43b1-8ef0-7556ce0e9069",spaceId:o.BP},"es-ES":{previewRootId:"9ac64262-cad7-44f3-bfae-96dabec9e770",rootId:"9ac64262-cad7-44f3-bfae-96dabec9e770",spaceId:o.BP},"es-LA":{previewRootId:"5b51de44-604b-4a96-b421-9f3e3cf470d2",rootId:"5b51de44-604b-4a96-b421-9f3e3cf470d2",spaceId:o.BP},"pt-BR":{previewRootId:"b9626438-4451-441c-9608-35ab50e3b182",rootId:"b9626438-4451-441c-9608-35ab50e3b182",spaceId:o.BP}}}}}}]);