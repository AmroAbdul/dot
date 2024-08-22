"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[7465],{68973:(e,t,i)=>{i.d(t,{TA:()=>F,Zg:()=>g,eT:()=>w,mk:()=>v});i(21703),i(57658),i(67294);var s=i(29477),r=i(45953),o=i(70921),a=i(21202),n=i(9291),d=i(54642),l=i(47307),c=i(4708),u=i(57345),p=i(28578),m=i(68373),f=i(54801),h=i(67181),b=i(85893);function g(e){h.Z.resetSitesForSpace(e.id)}async function v(e,t){const{spaceStore:i,currentUserId:o,limit:n}=t;if(!i.id)return;const[l]=await Promise.all([d.getPublishedPagesForUser(e,{spaceId:i.id,limit:n||50}),(0,s.Vs)(1500)]);if("failed"===l.type)throw new Error("Failed to fetch published pages.");if(l.data.recordMap){const t=(0,c.Hk)(),s=[],n=r.PF.create(l.data.recordMap);for(const{model:r}of n)if(r&&r.table===a.iU){const o=m.G.createChildStore(i,{table:a.iU,id:r.id});let n;if(t){const t=await d.getActivityLog(e,{spaceId:i.id,navigableBlock:r.id?{id:r.id,spaceId:i.id}:void 0,activityTypes:[],limit:100});if("failed"===t.type)throw t.error;n=S(o,t.data)}else n=o.getCreatedByPointer();s.push({store:o,publishedMetadata:{publishedTime:y(o),publishedOrCreatedBy:n}})}let u=s;return o&&(u=f.S(s,o)),h.Z.initializeSiteResultsForSpace(i.id,u),u}}function S(e,t){const{recordMap:i}=t,s=r.PF.create(i);let a,n;for(const{model:r}of s)if(r&&r.table===o.TY){const t=m.WJ.createChildStore(e,{table:o.TY,id:r.id,spaceId:r.getSpaceId()}),i=null==t?void 0:t.getEdits();if(i)for(const e of i)"permission-created"===e.type&&"public_permission"===e.permission_data.type&&"none"!==e.permission_data.role&&(!n||e.permission_data.added_timestamp&&n<e.permission_data.added_timestamp)&&(a=e,n=e.permission_data.added_timestamp)}return a&&a.authors?a.authors[0]:void 0}function y(e){const t=e.getPermissionItems().find((e=>"public_permission"===e.type));return"public_permission"===(null==t?void 0:t.type)?t.added_timestamp:void 0}function F(e){u.lG(e),p.ZP.setState({...p.ZP.state,display:p.wV.Publish,tab:p.XF.Publish})}async function w(e){return new Promise(((t,i)=>{l.showDialog({message:(0,b.jsx)("div",{style:{textAlign:"center"},children:(0,b.jsx)(n.FormattedMessage,{id:"sites.confirmUnpublish.title",defaultMessage:"Unpublish this site?"})}),description:(0,b.jsx)("div",{style:{textAlign:"center"},children:(0,b.jsx)(n.FormattedMessage,{id:"sites.confirmUnpublish.caption",defaultMessage:"{pageTitle} will no longer be live on the web.",values:{pageTitle:e}})}),keepFocus:!0,items:[{label:(0,b.jsx)(n.FormattedMessage,{id:"sites.confirmUnpublish.confirm",defaultMessage:"Unpublish"}),color:"red",onAccept:()=>t(!0)}],showCancel:!0})}))}},54801:(e,t,i)=>{i.d(t,{N:()=>a,S:()=>o});var s=i(72141),r=i(46654);function o(e,t){return e.sort(((e,i)=>{const s=e.store.canAdmin();if(s===i.store.canAdmin()){if(t){var r,o;if((null===(r=e.store.getCreatedByStore())||void 0===r?void 0:r.id)===t)return-1;if((null===(o=i.store.getCreatedByStore())||void 0===o?void 0:o.id)===t)return 1}return 0}return s?-1:1}))}function a(e){const{environment:t,store:i}=e;if(!i.pathIsAccessibleAndAlive())return!1;return!!r.YO(i).find((e=>(0,s.$D)(e.permissionItem)&&"none"!==e.permissionItem.role))&&!r.IJ(t,i)}},67181:(e,t,i)=>{i.d(t,{Z:()=>d});var s=i(49085),r=i(72126),o=i(70203),a=i(68373);class n extends s.default{getInitialState(){return{sites:{},sortAscending:!0,sortColumn:void 0}}initializeSiteResultsForSpace(e,t){this.state.sites[e]=t,this.emit()}getSortedSitesForSpace(e,t){const{sortAscending:i,sortColumn:s}=this.state,n=this.state.sites[e];if(n)switch(s){case"page":return r.Xo(n,(e=>o.QaF(e.store.getTitleValue()).toLowerCase()),i?"asc":"desc");case"published-or-created-by":return r.Xo(n,(e=>{const i=e.publishedMetadata.publishedOrCreatedBy,s=i?a.t1.createChildStore(e.store,i):void 0;return null==s?void 0:s.getDisplayName(t).toLowerCase()}),i?"asc":"desc");case"published-date":return r.Xo(n,(e=>e.publishedMetadata.publishedTime),i?"asc":"desc");default:return n}}removeSiteFromSpace(e,t){const i=this.state.sites[e];i&&(this.state.sites[e]=i.filter((e=>e.store.id!==t)),this.emit())}resetSitesForSpace(e){this.state.sites[e]=void 0}}const d=new n},36060:(e,t,i)=>{i.d(t,{lA:()=>d});i(40902),i(92996),i(41432),i(99036),i(80951);var s=i(59753),r=(i(87479),i(97880));i(42613),i(4615),i(71644),i(6287),i(15047),i(70475),i(68955),i(46227),i(89789),i(72126);var o=i(74446);i(21202),i(19889),i(70203),i(21703),i(18844),i(70279),i(91644),i(29369);var a=i(45953);i(58129),i(70921),i(30842),i(39050),i(54368),i(51650),i(88179),i(80926),i(8542),i(10188),i(98963),i(7470),i(77420),i(60014),i(13493),i(75908),i(6359),i(7678),i(60897),i(69549),i(33709),i(44312),i(4986),i(52719),i(58912),i(19639),i(36077),i(97715),i(32161),i(82447),i(9713),i(57398),i(49953),i(14710),i(9508),i(62643),i(57883),i(66726),i(30754),i(6946),i(9844),i(25753),i(84683),i(38429),i(89488),i(65311),i(16427),i(61220),i(96683),i(70017),i(89470),i(49126),i(94578),i(4137),i(80396),i(24836),i(86135),i(78929),i(84323),i(1311),i(83200),i(67627),i(65963),i(14130),i(34406),i(42314),i(16663),i(19221),i(93646),i(63787),i(38952),i(40837),i(65635),i(96740),i(63921),i(75990),i(57829),i(63188),i(56877),i(76413),i(47969),i(47238),i(35623),i(77858),i(37202),i(26195),i(60113),i(14718),i(14327),i(71495),i(53412),i(65836),i(5505),i(24494),i(66295),i(10354),i(19716),i(76244),i(98897),i(46769),i(66079),i(58161),i(28182),i(35794),i(11045);i(2607);(0,r.AO)((e=>"title"===e||"text"===e||"url"===e||"email"===e||"phone_number"===e||"checkbox"===e||"person"===e||"file"===e||"select"===e||"multi_select"===e||"status"===e||"number"===e||"date"===e||"relation"===e||"button"===e||"auto_increment_id"===e||"verification"===e?{true:e}:{false:e}));i(38297),i(606);const n=a.Ak.create();a.PF.create();Date.now();o.mF.fromRecordMap(n),o.zF.fromRecordMap(n);const d=s.om.fromRecordMap(n);s.s8.fromRecordMap(n)}}]);