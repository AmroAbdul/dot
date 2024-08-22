"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[3068],{26907:(e,t,s)=>{s.d(t,{B:()=>a,H:()=>i});const i=e=>{const{target:t,inviteTargetsStore:s}=e;return s.state.inviteTargets.some((e=>"newUser"===t.type?e.type===t.type&&t.value.email===e.value.email:"invalidUser"===t.type?e.type===t.type&&t.value.text===e.value.text:e.type===t.type&&e.value.id===t.value.id))};function n(e){return"invalidUser"!==e.type}const a=e=>{const{inviteTargetsStore:t}=e,{inviteTargets:s}=t.state;return s.filter(n)}},57345:(e,t,s)=>{s.d(t,{Cv:()=>x,a6:()=>w,lG:()=>Z,qg:()=>U,zd:()=>F});s(67294);var i=s(33728),n=s(68626),a=s(91155),r=s(72141),o=s(4615),l=s(9291),d=s(36610),u=s(47307),c=s(76464),g=s(64964),v=s(19306),m=s(26907),p=s(46654),f=s(18245),h=s(88923),b=s(99332),M=s(29677),C=s(66708),S=s(28578),y=s(85893);function Z(e){h.default.state.open?b.Z.setState({...b.Z.state,open:!0}):C.Z.setState({...C.Z.state,open:!0}),d.DB(e,{share_menu_session_id:S.ZP.state.sessionId})}function w(e){h.default.state.open?b.Z.setState({...b.Z.state,open:!1}):C.Z.setState({...C.Z.state,open:!1}),d.Rb(e,{share_menu_session_id:S.ZP.state.sessionId}),S.ZP.reset()}function x(e){const{success:t,inviteTargets:s,requestedUserEmails:i}=e;if(0!==s.length){if(!t||0!==(null==i?void 0:i.length))return t&&i.length>0?i.length===s.length?void g.oV({label:(0,y.jsx)(l.FormattedMessage,{id:"shareMenu.inviteSuccess.snackbarMessage.requestedUsersOnly",defaultMessage:"Sent request to invite {users} to this page",values:{users:k(s)}})}):void g.oV({label:(0,y.jsx)(l.FormattedMessage,{id:"shareMenu.inviteSuccess.snackbarMessage.requestedAndInvitedUsers",defaultMessage:"Invited {users} and requested inviting {numberOfRequestedUsers, plural, one {{numberOfRequestedUsers} guest} other {{numberOfRequestedUsers} guests}}",values:{users:k(s.filter((e=>!(0,M.fZ)(e)&&!(0,M.cl)(e)||!i.includes(e.value.email)))),numberOfRequestedUsers:i.length}})}):void g.oV({label:(0,y.jsx)(l.FormattedMessage,{id:"shareMenu.inviteFailure.snackbarMessage",defaultMessage:"Failed to invite {users}",values:{users:k(s)}})});g.oV({label:(0,y.jsx)(l.FormattedMessage,{id:"shareMenu.inviteSuccess.snackbarMessage",defaultMessage:"Successfully invited {users}",values:{users:k(s)}})})}}function k(e){return(0,v.W)(e.map((e=>"group"===e.type?e.value.name??"group":"invalidUser"===e.type?e.value.text:e.value.email)))}async function F(e){const{inviteTargetsStore:t}=e,s=(0,y.jsx)(l.FormattedMessage,{id:"shareMenu.closeInviteDialog.confirmationMessage",defaultMessage:"Your changes have not been saved. Discard changes?"}),i=(0,y.jsx)(l.FormattedMessage,{id:"shareMenu.closeInviteDialog.confirmationButton.label",defaultMessage:"Yes"}),n=(0,y.jsx)(l.FormattedMessage,{id:"shareMenu.closeInviteDialog.cancelButton.label",defaultMessage:"Cancel"});if(t.state.inviteTargets.length>0){return(await u.confirmUserActionV2({message:s,acceptLabel:i,cancelLabel:n})).accept}return!1}async function U(e){const t=f.default.mark("share_menu.invite_user_lag"),{environment:s,blockStore:l,inviteTargetsStore:d,sudoModeStore:u,onInviteClick:g,onInviteComplete:v,inviteOrigin:h,role:b,emailMessage:M,flowId:C}=e;let S={success:!1,requestedUserEmails:[]};try{S=await async function(e){const{environment:t,blockStore:s,sudoModeStore:n,inviteTargetsStore:a,role:l,inviteOrigin:d,emailMessage:u,onInviteStart:g}=e,v=e.flowId||(0,o.ZP)();if(!(0,r.iC)(l))return{success:!1,requestedUserEmails:[]};const{tokenQuery:f,inviteTargets:h}=a.state;if((0,i.oH)(f.trim())&&0===h.length){const e={type:"newUser",value:{email:f.trim()},source:"email"};m.H({target:e,inviteTargetsStore:a})||a.setState({inviteTargets:[...a.state.inviteTargets,e],tokenQuery:""})}const b=p.mU(s,m.B({inviteTargetsStore:a}));null==g||g();const M=await c.n_({environment:t,store:s,sudoModeStore:n,inviteTargets:b,inviteRole:l,isOnboarding:!1,invite:{inviteFlowId:v,inviteMessage:u,inviteOrigin:d}});return{success:M.success,requestedUserEmails:M.success?Object.keys(M.requestedUsers):[]}}({environment:s,blockStore:l,sudoModeStore:u,inviteTargetsStore:d,role:b,emailMessage:M,inviteOrigin:h,onInviteStart:g,flowId:C})}catch(y){n.log({level:"error",from:"shareMenuActions",type:"handleInviteClick",error:(0,a.Ui)(y)})}finally{null==v||v(S.success,S.requestedUserEmails)}f.default.measure(t,{environment:s})}},68973:(e,t,s)=>{s.d(t,{TA:()=>C,Zg:()=>h,eT:()=>S,mk:()=>b});s(21703),s(57658),s(67294);var i=s(29477),n=s(45953),a=s(21202),r=s(9291),o=s(54642),l=s(47307),d=s(4708),u=s(57345),c=s(28578),g=s(79797),v=s(54801),m=s(67181),p=s(85893);const f=50;function h(e){m.Z.resetSitesForSpace(e.id)}async function b(e,t){const{spaceStore:s,currentUserId:r,limit:l}=t;if(!s.id)return;const u=(0,d.Hk)(),[c]=await Promise.all([o.getPublishedPagesForUser(e,{spaceId:s.id,limit:l||f,fetchPublishedMetadata:u}),(0,i.Vs)(1500)]);if("failed"===c.type)throw new Error("Failed to fetch published pages.");if(c.data.recordMap){const e=[],t=n.PF.create(c.data.recordMap),i=c.data.publishedEdits;for(const{model:n}of t)if(n&&n.table===a.iU){const t=g.G.createChildStore(s,{table:a.iU,id:n.id});let r;if(u){const e=i[t.id],s=e&&e.authors?e.authors[0]:void 0;r={publishedTime:e.timestamp,publishedOrCreatedBy:s}}else r={publishedTime:M(t),publishedOrCreatedBy:t.getCreatedByPointer()};e.push({store:t,publishedMetadata:r})}let o=e;return r&&(o=v.S(e,r)),m.Z.initializeSiteResultsForSpace(s.id,o),o}}function M(e){const t=e.getPermissionItems().find((e=>"public_permission"===e.type));return"public_permission"===(null==t?void 0:t.type)?t.added_timestamp:void 0}function C(e){u.lG(e),c.ZP.setState({...c.ZP.state,display:c.wV.Publish,tab:c.XF.Publish})}async function S(e){return new Promise(((t,s)=>{l.showDialog({message:(0,p.jsx)("div",{style:{textAlign:"center"},children:(0,p.jsx)(r.FormattedMessage,{id:"sites.confirmUnpublish.title",defaultMessage:"Unpublish this site?"})}),description:(0,p.jsx)("div",{style:{textAlign:"center"},children:(0,p.jsx)(r.FormattedMessage,{id:"sites.confirmUnpublish.caption",defaultMessage:"{pageTitle} will no longer be live on the web.",values:{pageTitle:e}})}),keepFocus:!0,items:[{label:(0,p.jsx)(r.FormattedMessage,{id:"sites.confirmUnpublish.confirm",defaultMessage:"Unpublish"}),color:"red",onAccept:()=>t(!0)}],showCancel:!0})}))}},50389:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});s(67294);var i=s(480),n=s(86628),a=s(91754),r=s(54801),o=s(43124),l=s(85893);function d(e){window.__c={n:"ScrollableSitesBannerContainer"};const{blockStore:t}=e,s=(0,i.O7)();return(0,n.VK)((()=>(0,r.N)({environment:s,store:t})),[s,t])?(0,l.jsx)("div",{style:{position:"sticky",left:0,right:"100%",width:"100%"},children:(0,l.jsx)(a.Z,{styleKey:a.v.LightBlue,shouldUseDivider:!1,isMobile:!1,children:(0,l.jsx)(o.Z,{blockStore:t})})}):(0,l.jsx)(l.Fragment,{})}},43124:(e,t,s)=>{s.d(t,{Z:()=>C});var i=s(67294),n=s(480),a=s(86628),r=s(24405),o=s(15145),l=s(40462),d=s(18442),u=s(9291),c=s(99553),g=s(12714),v=s(64921),m=s(95477),p=s(84210),f=s(88923),h=s(81236),b=s(68973),M=s(85893);function C(e){window.__c={n:"SitesBanner"};const{blockStore:t}=e,s=(0,n.O7)(),C=s.device.isMobile,S=(0,a.VK)((()=>{const e=t.getSpaceStore(),s=null==e?void 0:e.getPublicContentDomain();if(s)return`${s}.${m.default.publicDomainName}`}),[t]),y=(0,a.VK)((()=>(0,p.ZP)({store:t,preferPublicLink:!0,getSpaceDomain:()=>{var e;return null===(e=h.Z.getPublicSpaceData(s,t.getSpaceId()))||void 0===e?void 0:e.domain},pageVisitSource:o.tY.SiteBanner})),[t,s]),Z=(0,i.useCallback)((()=>{g.D({environment:s,url:y})}),[s,y]),w=(0,i.useCallback)((()=>{var e;f.default.isSidePeekOpen()&&(null===(e=f.default.peekTarget.state)||void 0===e?void 0:e.id)!==t.id&&c.ME(),b.TA(s)}),[s,t]),x=(0,r.yK)((()=>({container:{display:"flex",alignItems:"center",justifyContent:"center"},viewSiteButton:{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:32,padding:4,borderRadius:4},icon:{height:16,width:16,marginRight:4},settingsButton:{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:16,padding:4,borderRadius:4}})),[]);return S?C?(0,M.jsx)(u.FormattedMessage,{defaultMessage:"This page is live on the web.",id:"pageViewBlock.sitesBannerMobile.message"}):(0,M.jsxs)("div",{style:x.container,children:[(0,M.jsx)(u.FormattedMessage,{defaultMessage:"This page is live on {domain}.",id:"pageViewBlock.sitesBanner.message",values:{domain:S}}),(0,M.jsxs)(v.Z,{onClick:Z,style:x.viewSiteButton,children:[(0,l.o)(x.icon),(0,M.jsx)(u.FormattedMessage,{defaultMessage:"View site",id:"pageViewBlock.sitesBanner.viewSite"})]}),(0,M.jsxs)(v.Z,{onClick:w,style:x.settingsButton,children:[(0,d.H)(x.icon),(0,M.jsx)(u.FormattedMessage,{defaultMessage:"Site settings",id:"pageViewBlock.sitesBanner.settings"})]})]}):null}},54801:(e,t,s)=>{s.d(t,{N:()=>r,S:()=>a});var i=s(72141),n=s(46654);function a(e,t){return e.sort(((e,s)=>{const i=e.store.canAdmin();if(i===s.store.canAdmin()){if(t){var n,a;if((null===(n=e.publishedMetadata.publishedOrCreatedBy)||void 0===n?void 0:n.id)===t)return-1;if((null===(a=s.publishedMetadata.publishedOrCreatedBy)||void 0===a?void 0:a.id)===t)return 1}return 0}return i?-1:1}))}function r(e){const{environment:t,store:s}=e;if(!s.pathIsAccessibleAndAlive())return!1;return!!n.YO(s).find((e=>(0,i.$D)(e.permissionItem)&&"none"!==e.permissionItem.role))&&!n.IJ(t,s)}},67181:(e,t,s)=>{s.d(t,{Z:()=>l});var i=s(49085),n=s(72126),a=s(70203),r=s(79797);class o extends i.default{getInitialState(){return{sites:{},sortAscending:!0,sortColumn:void 0}}initializeSiteResultsForSpace(e,t){this.state.sites[e]=t,this.emit()}getSortedSitesForSpace(e,t){const{sortAscending:s,sortColumn:i}=this.state,o=this.state.sites[e];if(o)switch(i){case"page":return n.Xo(o,(e=>a.QaF(e.store.getTitleValue()).toLowerCase()),s?"asc":"desc");case"published-or-created-by":return n.Xo(o,(e=>{const s=e.publishedMetadata.publishedOrCreatedBy,i=s?r.t1.createChildStore(e.store,s):void 0;return null==i?void 0:i.getDisplayName(t).toLowerCase()}),s?"asc":"desc");case"published-date":return n.Xo(o,(e=>e.publishedMetadata.publishedTime),s?"asc":"desc");default:return o}}removeSiteFromSpace(e,t){const s=this.state.sites[e];s&&(this.state.sites[e]=s.filter((e=>e.store.id!==t)),this.emit())}resetSitesForSpace(e){this.state.sites[e]=void 0}}const l=new o},40462:(e,t,s)=>{s.d(t,{o:()=>a});s(67294);var i=s(45238),n=s(85893);const a=(0,i.I)("globe2",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM3.88477 3.76465C4.56836 3.11523 5.39551 2.61621 6.31836 2.34277C5.83301 2.82812 5.42285 3.51172 5.11523 4.3457C4.63672 4.19531 4.22656 3.99707 3.88477 3.76465ZM9.68848 2.34961C10.6045 2.62305 11.4316 3.11523 12.1084 3.76465C11.7734 4.00391 11.3633 4.19531 10.8848 4.35254C10.5771 3.51172 10.167 2.82812 9.68848 2.34961ZM8.47852 2.56836C9.0459 2.8418 9.56543 3.58008 9.93457 4.58496C9.4834 4.66699 8.99805 4.71484 8.47852 4.73535V2.56836ZM6.06543 4.58496C6.44141 3.58008 6.9541 2.8418 7.52148 2.56836V4.73535C7.00195 4.71484 6.5166 4.66699 6.06543 4.58496ZM2.05273 7.58594C2.14844 6.42383 2.58594 5.35059 3.25586 4.46875C3.67285 4.77637 4.21289 5.04297 4.8418 5.24121C4.66406 5.95215 4.54785 6.74512 4.51367 7.58594H2.05273ZM11.4863 7.58594C11.4521 6.74512 11.3359 5.95215 11.1582 5.24121C11.7871 5.04297 12.3271 4.7832 12.7373 4.46875C13.4141 5.35059 13.8516 6.42383 13.9473 7.58594H11.4863ZM5.49121 7.58594C5.52539 6.84082 5.62793 6.12988 5.78516 5.4873C6.33203 5.59668 6.91309 5.66504 7.52148 5.69238V7.58594H5.49121ZM8.47852 7.58594V5.69238C9.08691 5.66504 9.66797 5.59668 10.2148 5.4873C10.3721 6.12988 10.4746 6.84082 10.5088 7.58594H8.47852ZM2.05273 8.54297H4.51367C4.54785 9.39746 4.66406 10.1973 4.8418 10.915C4.21973 11.1133 3.68652 11.373 3.27637 11.6807C2.59277 10.792 2.14844 9.71191 2.05273 8.54297ZM5.49121 8.54297H7.52148V10.4707C6.91992 10.498 6.33203 10.5664 5.79199 10.6689C5.62793 10.0195 5.51855 9.29492 5.49121 8.54297ZM8.47852 10.4707V8.54297H10.5088C10.4814 9.29492 10.3721 10.0195 10.208 10.6689C9.66797 10.5664 9.08691 10.498 8.47852 10.4707ZM11.1582 10.915C11.3428 10.1973 11.4521 9.39746 11.4863 8.54297H13.9473C13.8516 9.71191 13.4072 10.792 12.7236 11.6807C12.3135 11.373 11.7803 11.1133 11.1582 10.915ZM8.47852 11.4277C8.99121 11.4482 9.47656 11.4961 9.9209 11.5781C9.55176 12.5625 9.03906 13.2939 8.47852 13.5605V11.4277ZM6.0791 11.5781C6.52344 11.4961 7.00879 11.4482 7.52148 11.4277V13.5605C6.96094 13.2939 6.44824 12.5625 6.0791 11.5781ZM3.90527 12.3848C4.24023 12.1523 4.65039 11.9609 5.12207 11.8105C5.42969 12.6309 5.83301 13.3008 6.30469 13.7793C5.40234 13.5059 4.58203 13.0205 3.90527 12.3848ZM10.8779 11.8105C11.3496 11.9609 11.7598 12.1523 12.0947 12.3848C11.418 13.0205 10.5977 13.5059 9.69531 13.7793C10.167 13.3008 10.5703 12.6309 10.8779 11.8105Z"})})}}]);