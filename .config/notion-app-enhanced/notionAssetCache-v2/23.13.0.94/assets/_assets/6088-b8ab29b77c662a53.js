"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6088],{11327:(e,t,o)=>{o.r(t),o.d(t,{AutomationButtonActionList:()=>Pe});var n=o(67294),i=o(480),r=o(86628),a=o(24405),s=o(47453),l=o(98963),c=o(9291),d=o(82530),u=o(52275),p=o(31945),g=o(79131),m=o(61766),x=o(45452),S=o(47043),f=o(35294),h=o(19454),y=o(82990),b=o(28751),C=o(70203),v=o(9953),j=o(78140),A=o(32163),w=o(72495),M=o(72865),P=o(21273),_=o(95193),T=o(48312),O=o(40190),V=o(85893);const k=(0,c.defineMessages)({codeLabel:{defaultMessage:"Code",id:"automations.AssistantAction.codeLabel"},promptLabel:{defaultMessage:"Prompt",id:"automations.AssistantAction.promptLabel"},humanLabel:{defaultMessage:"User",id:"automations.AssistantAction.humanLabel"},descriptionLabel:{defaultMessage:"Description",id:"automations.AssistantAction.descriptionLabel"}});function K(e){window.__c={n:"AssistantTypeDropdownButton"};const{currentOption:t,disabled:o,onChange:i}=e,a=(0,c.useIntl)(),s=(0,f.d)(),l=(0,r.qz)(void 0,m.Z),d=(0,n.useCallback)((e=>{i&&e!==t&&i(e),l.setState({open:!1})}),[l,t,i]);return(0,V.jsx)(p.ZP,{alignmentToOrigin:p.vR.Start,buttonPopupStore:l,disabled:o,originGap:0,placementToOrigin:p.pO.Bottom,popupType:s,render:()=>(0,V.jsx)(F,{currentOption:t,onChange:d}),renderOrigin:e=>(0,V.jsx)(O.S,{...e,disabled:o,variant:"gray",children:a.formatMessage(Z(t))})})}function F(e){window.__c={n:"AssistantTypeDropdownMenu"};const{currentOption:t,onChange:o}=e,n=(0,c.useIntl)(),i=(0,_.F)({maxWidth:360}),r=["prompt","code","human"].map((e=>({key:e,render:o=>(0,V.jsx)(u.Z,{...o,checkState:t===e,title:n.formatMessage(Z(e))}),action:()=>null==o?void 0:o(e)})));return(0,V.jsx)(j.Z,{...i,children:(0,V.jsx)(A.Z,{initialFocus:0,sections:[{key:0,render:e=>(0,V.jsx)(w.Z,{enableActionSheetTitle:!0,...e}),items:r}],type:A.i.Vertical})})}function Z(e){switch(e){case"code":return k.codeLabel;case"prompt":return k.promptLabel;case"human":return k.humanLabel}}var L=o(41301),I=o(64737),B=o(32984),D=o(73239),R=o(29180);var Q=o(60781),W=o(19471);const U=(0,c.defineMessages)({confirmationInputPlaceholder:{defaultMessage:"Write a message to show users…",id:"automations.BaseModalAction.confirmationPlaceholder"},continueButtonHint:{defaultMessage:"Completes button action",id:"automations.BaseModalAction.continueButtonHint"},cancelButtonHint:{defaultMessage:"Stops button action",id:"automations.BaseModalAction.cancelButtonHint"}});function E(e){window.__c={n:"WithRightOverlay"};const{children:t,overlayContent:o}=e,n=(0,a.yK)((e=>({wrap:{position:"relative"},overlay:{position:"absolute",height:"100%",display:"flex",alignItems:"center",top:0,right:10,color:e.lightTextColor}})),[]);return(0,V.jsxs)("div",{style:n.wrap,children:[t,(0,V.jsx)("div",{style:n.overlay,children:o})]})}var z=o(72126),G=o(33732);function q(e){window.__c={n:"AutomationKeyValueRow"};const{keyComp:t,valueComp:o,style:n}=e,i=(0,a.yK)((()=>({container:{display:"flex",alignItems:"center",justifyContent:"space-between",...n}})),[n]);return(0,V.jsxs)("div",{style:i.container,children:[t,o]})}function N(e){return(0,V.jsx)("div",{style:{marginRight:4,flexShrink:0},children:e.text})}var H=o(48309);function X(e){window.__c={n:"OpenPageInDropdownButton"};const{actionStore:t,disabled:o}=e,n=(0,a.Fg)(),i=(0,r.VK)((()=>t.getOpenPageIn()),[t]),s=(0,f.d)(),l=(0,G.v)({currentViewType:void 0,theme:n}).find((e=>e.key===i));return l?(0,V.jsx)(p.ZP,{popupType:s,alignmentToOrigin:p.vR.End,placementToOrigin:p.pO.Bottom,originGap:0,disabled:o,renderOrigin:e=>(0,V.jsx)(O.S,{disabled:o,variant:"gray",...e,children:l.title}),render:t=>(0,V.jsx)($,{currentOpenPageIn:i,parent:t,...e})}):null}function $(e){window.__c={n:"OpenPageInDropdownMenu"};const{currentOpenPageIn:t,actionStore:o,parent:r}=e,s=(0,i.O7)(),l=(0,a.Fg)(),c=(0,a.yK)((()=>({menuItem:{paddingTop:8,paddingBottom:8}})),[]),p=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"OpenPageAction.setTarget",environment:s,perform:t=>{v.sW({store:o.getConfigStore(),data:{open_in:e},transaction:t})}})}),[s,o]),g=(0,_.F)({width:280,maxWidth:360}),m=(0,G.v)({currentViewType:void 0,theme:l}),x=z.oA(m.map(((e,o)=>{const n={key:o,render:o=>(0,V.jsx)(u.Z,{...o,disabled:!1,title:e.title,icon:e.icon,caption:e.caption,body:e.body,style:c.menuItem,checkState:t===e.key,...o}),action:()=>{p(e.key),r.close()}};return n})));return(0,V.jsx)(j.Z,{...g,children:(0,V.jsx)(A.Z,{type:A.i.Vertical,sections:[{key:0,render:e=>(0,V.jsx)(w.Z,{enableActionSheetTitle:!0,...e}),items:x}],initialFocus:0})})}o(57658);var J=o(40745),Y=o(22109),ee=o(97880),te=o(57410),oe=o(12076),ne=o(53437),ie=o(87279),re=o(52105);const ae=(0,c.defineMessages)({addSortLimit:{id:"automations.QueryCollectionAction.addSortLimitButton.addSortLimit",defaultMessage:"Add sort, limit"},addLimit:{id:"automations.QueryCollectionAction.addSortLimitButton.addLimit",defaultMessage:"Add limit"},addSort:{id:"automations.QueryCollectionAction.addSortLimitButton.addSort",defaultMessage:"Add sort"},limitDescription:{id:"automations.QueryCollectionAction.limitPopup.limitDescription",defaultMessage:"{numberOfPages, plural, one {{numberOfPages} page} other {{numberOfPages} pages}}"},unlimitedDescription:{id:"automations.QueryCollectionAction.limitPopup.unlimitedDescription",defaultMessage:"Unlimited"}}),se=5;function le(e){window.__c={n:"AddSortLimitButton"};const{actionStore:t,collectionStore:o,disabled:a,onSortAdded:s,onLimitAdded:l}=e,u=(0,i.Fy)(),g=(0,i.O7)(),[m,x]=(0,n.useState)(!1);let S;S=u.isMobile?{menuType:ie.og.ActionSheet}:{menuType:ie.og.Popup,width:250};const f=(0,n.useRef)(null),[h,y]=n.useState(void 0),b=(0,r.VK)((()=>o.getSchema()??{}),[o]),C=(0,r.VK)((()=>o.getFormat()??{}),[o]),A=(0,n.useCallback)((()=>Object.keys(o.getSchema())),[o]),w=(0,r.VK)((()=>t.hasSort()),[t]),M=(0,r.VK)((()=>t.hasLimit()),[t]),P=(0,n.useCallback)((e=>{e&&d.createAndCommit({userAction:"QueryCollectionAction.setInitialSort",environment:g,perform:o=>{v.sW({store:t.getConfigStore(),data:{sort:[{property:e,direction:"ascending"}]},transaction:o})}}),x(!1),s()}),[t,g,s]),_=(0,n.useCallback)((()=>{d.createAndCommit({userAction:"QueryCollectionAction.setInitialLimit",environment:g,perform:e=>{v.sW({store:t.getConfigStore(),data:{limit:1},transaction:e})}}),l()}),[t,g,l]);if(w&&M)return null;let T;return T=w?ae.addLimit:M?ae.addSort:ae.addSortLimit,(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(p.ZP,{popupType:u.isMobile?ne.kQ.SlideUp:ne.kQ.Popup,alignmentToOrigin:p.vR.Start,placementToOrigin:p.pO.Bottom,originGap:0,disabled:a,renderOrigin:e=>(0,V.jsx)(O.S,{disabled:a,variant:"gray",ref:f,...e,children:(0,V.jsx)(c.FormattedMessage,{...T})}),render:e=>(0,V.jsx)(ce,{showSortOption:!w,showLimitOption:!M,onSortSelected:()=>{var t;x(!0),y(null===(t=f.current)||void 0===t?void 0:t.getBoundingClientRect()),e.close()},onLimitSelected:()=>{_(),e.close()}})}),(0,V.jsx)(ne.ZP,{popupType:u.isMobile?ne.kQ.SlideUp:ne.kQ.Popup,open:m,placementToOrigin:ne.ZP.Placement.Bottom,alignmentToOrigin:ne.ZP.Alignment.Start,originRect:h,render:()=>(0,V.jsx)(j.Z,{...S,children:(0,V.jsx)(te.Z,{schema:b,format:C,currentProperty:void 0,getProperties:A,onAccept:P})}),onDismiss:()=>x(!1)})]})}function ce(e){window.__c={n:"AddSortLimitMenu"};const{showSortOption:t,showLimitOption:o,onSortSelected:n,onLimitSelected:r}=e;let a;a=(0,i.Fy)().isMobile?{menuType:ie.og.ActionSheet}:{menuType:ie.og.Popup,width:250};const s=[];return t&&s.push({key:"sort",action:n,render:e=>(0,V.jsx)(u.Z,{...e,title:"Sort",icon:(0,Y.T)({width:16})})}),o&&s.push({key:"limit",action:r,render:e=>(0,V.jsx)(u.Z,{...e,title:"Limit",icon:(0,J.M)({width:16})})}),(0,V.jsx)(j.Z,{...a,children:(0,V.jsx)(A.Z,{type:A.i.Vertical,sections:[{key:0,render:e=>(0,V.jsx)(w.Z,{enableActionSheetTitle:!0,...e}),items:s}],initialFocus:0})})}function de(e){window.__c={n:"SortPopup"};const{contextStore:t,actionStore:o,collectionStore:n,disabled:a,buttonPopupStore:s}=e,l=(0,i.O7)(),{device:d}=l,u=(0,r.VK)((()=>{var e;return(null===(e=o.getConfig())||void 0===e||null===(e=e.sort)||void 0===e?void 0:e.length)??0}),[o]);return(0,V.jsx)(p.ZP,{popupType:d.isMobile?ne.kQ.SlideUp:ne.kQ.Popup,alignmentToOrigin:p.vR.End,placementToOrigin:p.pO.Bottom,originGap:0,disabled:a,buttonPopupStore:s,renderOrigin:e=>(0,V.jsx)(O.S,{disabled:a,variant:"gray",...e,children:u>0?(0,V.jsx)(c.FormattedMessage,{defaultMessage:"{numberOfSorts, plural, one {{numberOfSorts} sort} other {{numberOfSorts} sorts}}",values:{numberOfSorts:u},id:"automations.QueryCollectionAction.oneOrMoreSorts.title"}):(0,V.jsx)(c.FormattedMessage,{defaultMessage:"None",id:"automations.QueryCollectionAction.noSorts.title"})}),render:e=>(0,V.jsx)(ue,{contextStore:t,collectionStore:n,actionStore:o,disabled:a})})}function ue(e){window.__c={n:"SortMenu"};const{contextStore:t,actionStore:o,collectionStore:a,disabled:s}=e,l=(0,i.O7)(),{device:c}=l;let u;u=c.isMobile?{menuType:ie.og.ActionSheet}:{menuType:ie.og.Popup,minWidth:300};const p=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"QueryCollectionAction.setSort",environment:l,perform:t=>{v.sW({store:o.getConfigStore(),data:{sort:e},transaction:t})}})}),[l,o]),g=(0,r.VK)((()=>o.getConfigStore().getKeyStore("sort").getValue()??[]),[o]),m=(0,r.VK)((()=>a.getSchema()),[a]),x=(0,r.VK)((()=>a.getFormat()),[a]);return(0,V.jsx)(j.Z,{...u,children:(0,V.jsx)(oe.Z,{schema:m,format:x,collectionViewStore:void 0,collectionContextStore:void 0,sorts:g,disabled:s,parentStore:t.context.parentRecordStore,onChange:p})})}function pe(e){window.__c={n:"LimitPopup"};const{actionStore:t,disabled:o,buttonPopupStore:n}=e,a=(0,i.O7)(),{device:s}=a,l=(0,r.VK)((()=>t.getConfigStore().getKeyStore("limit").getValue()),[t]);return(0,V.jsx)(p.ZP,{popupType:s.isMobile?ne.kQ.SlideUp:ne.kQ.Popup,alignmentToOrigin:p.vR.End,placementToOrigin:p.pO.Bottom,originGap:0,disabled:o,buttonPopupStore:n,renderOrigin:e=>(0,V.jsx)(O.S,{disabled:o,variant:"gray",...e,children:(0,ee.$K)(l)&&(0,V.jsx)(c.FormattedMessage,{...ae.limitDescription,values:{numberOfPages:l}})}),render:e=>(0,V.jsx)(ge,{onLimitChanged:o=>{(e=>{d.createAndCommit({userAction:"QueryCollectionAction.setLimit",environment:a,perform:o=>{v.sW({store:t.getConfigStore(),data:{limit:e},transaction:o})}})})(o),e.close()}})})}function ge(e){window.__c={n:"LimitMenu"};const{onLimitChanged:t}=e;let o;o=(0,i.Fy)().isMobile?{menuType:ie.og.ActionSheet}:{menuType:ie.og.Popup,minWidth:250};const n=[];for(let i=1;i<=se;i++)n.push({key:`limit-${i}`,action:()=>{t(i)},render:e=>(0,V.jsx)(u.Z,{...e,title:(0,V.jsx)(c.FormattedMessage,{...ae.limitDescription,values:{numberOfPages:i}})})});return n.push({key:"unlimited",action:()=>{t(void 0)},render:e=>(0,V.jsx)(u.Z,{...e,title:(0,V.jsx)(c.FormattedMessage,{...ae.unlimitedDescription})})}),(0,V.jsx)(j.Z,{...o,children:(0,V.jsx)(A.Z,{type:A.i.Vertical,sections:[{key:0,render:e=>(0,V.jsx)(w.Z,{enableActionSheetTitle:!0,...e}),items:n}],initialFocus:0})})}o(21703);var me=o(43690),xe=o(84619),Se=o(35102),fe=o(149),he=o(76798),ye=o(21396),be=o(54802),Ce=o(37034),ve=o(79797),je=o(8808);function Ae(e){window.__c={n:"TargetPicker"};const{contextStore:t,actionStore:o,disabled:a,errorMessage:s}=e,l=(0,i.O7)(),u=(0,r.VK)((()=>{const e=o.getVariableTargetStore();if(e)return e.getValue();const t=o.getCollectionTargetStore();if(t){const e=t.getKeyStore("collection").getValue();if(e)return{collection:e,type:"collection"}}}),[o]),g=(0,r.VK)((()=>{if(u&&"variable"===u.type)return t.getContextValueForActionById(o.id,u.id)}),[t,o,u]),x=(0,O.d)({errorMessage:s,hasValue:Boolean(u||g)}),S=(0,r.qz)(void 0,m.Z),h=(0,f.d)(),y=(0,n.useCallback)((e=>{let t;if("collection"===e.type)t="UpdatePageAction.updateCollection";else if("variable"===e.type)t="UpdatePageAction.updateVariable";else{if("page"===e.type)throw new Error("Not implemented yet.");(0,ee.t1)(e)}d.createAndCommit({userAction:t,environment:l,perform:t=>{v.sW({store:o.getConfigStore(),transaction:t,data:{target:e,properties:null,values:null}})}}),S.reset()}),[l,o,S]),b=(0,n.useCallback)((()=>S.reset()),[S]);return(0,V.jsx)(p.ZP,{buttonPopupStore:S,popupType:h,alignmentToOrigin:p.vR.End,placementToOrigin:p.pO.Bottom,originGap:0,disabled:a,renderOrigin:e=>(0,V.jsx)(O.S,{disabled:a,...x,...e,children:u&&"collection"===u.type?(0,V.jsx)(he.Z,{store:ve.NW.createChildStore(t.context.parentRecordStore,u.collection)}):g?(0,V.jsx)(ye.F,{value:g,format:xe.lo.Medium,isSingle:!0}):(0,V.jsx)(c.FormattedMessage,{id:"automations.UpdatePagesAction.pagesDropdown.label",defaultMessage:"Select database"})}),render:e=>(0,V.jsx)(je.L,{actionId:o.id,automationContextStore:t,onChange:y,onClose:b,selectedTarget:u,skipPages:!0})})}const we={create_page:function(e){window.__c={n:"CreatePageAction"};const{contextStore:t,actionStore:o,disabled:a,showErrorIfPresent:s}=e,l=(0,i.O7)(),u=(0,r.VK)((()=>o.getCollectionStore()),[o]),p=(0,r.VK)((()=>{const e=o.getCollectionStore();if(e)return{collection:e.getSpaceShardedPointer(),type:"collection"}}),[o]),g=(0,r.VK)((()=>{var e;return null===(e=o.getConfig())||void 0===e?void 0:e.template_page_id}),[o]),m=(0,r.VK)((()=>(0,I.q)(u).length>0),[u]),x=(0,n.useCallback)((e=>{"collection"===e.type&&d.createAndCommit({userAction:"CreatePageAction.setCollection",environment:l,perform:t=>{v.sW({store:o.getConfigStore(),data:{collection:e.collection,properties:["title"],values:null,template_page_id:null},transaction:t})}})}),[l,o]),S=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"CreatePageAction.setTemplate",environment:l,perform:t=>{const n=o.getConfig();if(!n)return;const{properties:i,values:r}=n;let a=!1;if(e&&i&&1===i.length&&i.includes("title")){var s;const e=null==r?void 0:r.title;e&&null!==(s=e.value)&&void 0!==s&&s.value||(a=!0)}v.sW({store:o.getConfigStore(),data:{template_page_id:e??null,...a&&{properties:[]}},transaction:t})}})}),[l,o]),f=(0,L.TU)({contextStore:t,actionId:o.id,shouldShow:s,errorKey:"collection"}),h=(0,L.TU)({contextStore:t,actionId:o.id,shouldShow:s,errorKey:"template"});return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(T.Xd,{...e,title:(0,V.jsx)(c.FormattedMessage,{id:"automations.CreatePageAction.header",defaultMessage:"Add page to"}),picker:(0,V.jsxs)("div",{style:{display:"flex",alignItems:"center",whiteSpace:"normal"},children:[(0,V.jsx)(D.a,{actionStore:o,currentValue:p,contextStore:t,onChange:x,disabled:a,errorMessage:f,skipVariables:!0}),u&&m&&(0,V.jsx)(c.FormattedMessage,{id:"automations.CreatePageAction.asTemplate",defaultMessage:"as {templateName}",values:{templateName:(0,V.jsx)(R.f,{collectionStore:u,currentTemplateId:g,onChange:S,disabled:a,errorMessage:h})}})]})}),u&&(0,V.jsx)(B.QF,{contextStore:t,collectionStore:u,actionStore:o,disabled:a,showSetPropertyActions:!1})]})},update_pages:function(e){window.__c={n:"UpdatePagesAction"};const{contextStore:t,actionStore:o,disabled:a,showErrorIfPresent:s}=e,l=(0,i.O7)(),u=(0,c.useIntl)(),p=(0,r.VK)((()=>o.getTargetStore()),[o]),g=(0,r.VK)((()=>"collection"===p.getKeyStore("type").getValue()),[p]),m=(0,r.VK)((()=>{var e;const t=o.getCollectionTargetStore();return null==t||null===(e=t.getKeyStore("filter"))||void 0===e?void 0:e.getValue()}),[o]),x=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"QueryCollectionAction.setFilter",environment:l,perform:t=>{v.sW({store:p,transaction:t,data:{filter:e}})}})}),[l,p]),S=(0,r.VK)((()=>{const e=p.getValue();if(e){if("collection"===e.type)return ve.NW.createChildStore(t.context.parentRecordStore,e.collection);if("variable"===e.type){const o=t.compilationResultStore.state;if(fe.x.isFail(o))return;const n=(0,Se.vx)(o.value.valueTypes,e.id);if(n)return(0,be.wB)(n,t.context.parentRecordStore)}else{if("page"===e.type)return;(0,ee.t1)(e)}}}),[p,t.context.parentRecordStore,t.compilationResultStore]),f=(0,r.VK)((()=>S?(0,Ce.vU)({environment:l,intl:u,store:S}):void 0),[S,u,l]),h=(0,r.VK)((()=>m?(0,me.Ih)(m,(null==S?void 0:S.getSchema())||{}):void 0),[m,S]),y=(0,L.TU)({contextStore:t,actionId:o.id,shouldShow:s}),b=(0,r.VK)((()=>{var e;const n=null===(e=o.getVariableTargetStore())||void 0===e?void 0:e.getValue();if(!n)return!1;const i=t.getContextValueForActionById(o.id,n.id);return!!i&&"block"===i.type.type}),[o,t]);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(T.Xd,{...e,title:b?(0,V.jsx)(c.FormattedMessage,{id:"automations.UpdatePagesAction.singularHeader",defaultMessage:"Edit"}):(0,V.jsx)(c.FormattedMessage,{id:"automations.UpdatePagesAction.header",defaultMessage:"Edit pages in"}),picker:(0,V.jsx)(Ae,{contextStore:t,actionStore:o,disabled:a,errorMessage:y})}),g&&S&&(0,V.jsx)("div",{style:{margin:"0 0 -4px 8px"},children:(0,V.jsx)(q,{keyComp:(0,V.jsx)(N,{text:(0,V.jsx)(c.FormattedMessage,{id:"automations.UpdatePagesAction.filter.label",defaultMessage:"Pages to edit"})}),valueComp:(0,V.jsx)(re.W,{filter:h,collectionStore:S,onChange:x,disabled:a,noFiltersMessage:(0,ee.$K)(f)?(0,V.jsx)(c.FormattedMessage,{defaultMessage:"All pages in {collectionName}",id:"automations.UpdatePagesAction.filterRuleCount.noFilters.label",values:{collectionName:f}}):(0,V.jsx)(c.FormattedMessage,{defaultMessage:"All pages in database",id:"automations.UpdatePagesAction.filterRuleCount.noFilters.fallbackLabel",values:{collectionName:f}})})})}),S&&(0,V.jsx)(B.QF,{contextStore:t,collectionStore:S,actionStore:o,disabled:a,showSetPropertyActions:!0})]})},query_collection:function(e){window.__c={n:"QueryCollectionAction"};const{contextStore:t,actionStore:o,disabled:a}=e,s=(0,i.O7)(),l=(0,r.VK)((()=>o.getCollectionStore()),[o]),u=(0,r.VK)((()=>{const e=o.getCollectionStore();if(e)return{collection:e.getSpaceShardedPointer(),type:"collection"}}),[o]),p=(0,r.VK)((()=>o.getConfigStore().getKeyStore("filter").getValue()),[o]),g=(0,r.VK)((()=>o.hasSort()),[o]),x=(0,r.VK)((()=>o.hasLimit()),[o]),S=(0,r.qz)(void 0,m.Z),f=(0,r.qz)(void 0,m.Z),h=(0,n.useCallback)((e=>{"collection"===e.type&&d.createAndCommit({userAction:"QueryCollectionAction.setCollection",environment:s,perform:t=>{v.sW({store:o.getConfigStore(),data:{collection:e.collection,filter:void 0,sort:void 0},transaction:t})}})}),[s,o]),y=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"QueryCollectionAction.setFilter",environment:s,perform:t=>{v.sW({store:o.getConfigStore(),data:{filter:e},transaction:t})}})}),[s,o]),b=(0,n.useCallback)((()=>{S.setState({open:!0})}),[S]),C=(0,n.useCallback)((()=>{f.setState({open:!0})}),[f]);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(T.Xd,{...e,title:(0,V.jsx)(c.FormattedMessage,{id:"automations.QueryCollectionAction.title",defaultMessage:"Get pages from"}),picker:(0,V.jsx)(D.a,{currentValue:u,contextStore:t,onChange:h,disabled:a})}),l&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)("div",{style:{margin:"0 8px"},children:[(0,V.jsx)(q,{keyComp:(0,V.jsx)(N,{text:(0,V.jsx)(c.FormattedMessage,{id:"automations.QueryCollectionAction.filter.label",defaultMessage:"Filter"})}),valueComp:(0,V.jsx)(re.W,{collectionStore:l,filter:p,onChange:y,disabled:a,noFiltersMessage:(0,V.jsx)(c.FormattedMessage,{defaultMessage:"Return all pages",id:"automations.QueryCollectionAction.filterRuleCount.noFilters.label"})})}),g&&(0,V.jsx)(q,{keyComp:(0,V.jsx)(N,{text:(0,V.jsx)(c.FormattedMessage,{id:"automations.QueryCollectionAction.sort.label",defaultMessage:"Sort"})}),valueComp:(0,V.jsx)(de,{contextStore:t,collectionStore:l,actionStore:o,disabled:a,buttonPopupStore:S})}),x&&(0,V.jsx)(q,{keyComp:(0,V.jsx)(N,{text:(0,V.jsx)(c.FormattedMessage,{id:"automations.QueryCollectionAction.limit.label",defaultMessage:"Limit"})}),valueComp:(0,V.jsx)(pe,{actionStore:o,disabled:a,buttonPopupStore:f})})]}),(0,V.jsx)(le,{collectionStore:l,actionStore:o,disabled:a,onSortAdded:b,onLimitAdded:C})]})]})},open_page:function(e){window.__c={n:"OpenPageAction"};const{contextStore:t,actionStore:o,disabled:a,showErrorIfPresent:s}=e,l=(0,i.O7)(),u=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"OpenPageAction.setTarget",environment:l,perform:t=>{v.sW({store:o.getConfigStore(),data:{target:e},transaction:t})}})}),[l,o]),p=(0,r.VK)((()=>{var e;return null===(e=o.getConfig())||void 0===e?void 0:e.target}),[o]),g=(0,L.TU)({contextStore:t,actionId:o.id,shouldShow:s});return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(T.Xd,{...e,title:(0,V.jsx)(c.FormattedMessage,{id:"automations.OpenPageAction.header",defaultMessage:"Open"}),picker:(0,V.jsx)(H.s,{actionStore:o,target:p,onChange:u,contextStore:t,disabled:a,errorMessage:g})}),(0,V.jsx)("div",{style:{margin:"0 8px"},children:(0,V.jsx)(q,{keyComp:(0,V.jsx)(N,{text:(0,V.jsx)(c.FormattedMessage,{id:"automations.OpenPageAction.openPageIn.label",defaultMessage:"Open page in"})}),valueComp:(0,V.jsx)(X,{...e})})})]})},duplicate_blocks:Q.JM,modal_confirmation:function(e){window.__c={n:"ModalConfirmationAction"};const{actionStore:t,disabled:o}=e,s=(0,i.O7)(),u=(0,c.useIntl)(),p=(0,a.yK)((e=>({wrap:{display:"flex",flexDirection:"column",gap:10},plainTextInput:{backgroundColor:e.contentBackground,paddingTop:6,paddingBottom:6}})),[]),g=(0,r.VK)((()=>t.getType()),[t]),m=(0,r.VK)((()=>t.getConfigStore().getKeyStore("text")),[t]),x=(0,r.VK)((()=>m.getValue()),[m]),S=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"BaseModalAction.handleTextChange",environment:s,perform:t=>{v.sO({store:m,value:e,transaction:t})}})}),[s,m]),f=t.getConfigStore().getKeyStore("continue_button").getKeyStore("text"),h=(0,r.VK)((()=>t.getConfigStore().getKeyStore("cancel_button").getKeyStore("text")),[t]);if(!g)return null;const y=(0,b.z)(g);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(T.Xd,{...e,title:(0,V.jsx)(c.FormattedMessage,{...y.display.name})}),(0,V.jsxs)("div",{style:p.wrap,children:[(0,V.jsx)(M.D,{disabled:o,value:x,onChange:S,multiline:!0,placeholder:u.formatMessage(U.confirmationInputPlaceholder),disableFormattingAndMentions:!0,disableMobileActionBar:!0}),(0,V.jsx)(E,{overlayContent:(0,V.jsx)(c.FormattedMessage,{...U.continueButtonHint}),children:(0,V.jsx)(W.Yn,{disabled:o,maxlength:l.OO,style:p.plainTextInput,store:f})}),(0,V.jsx)(E,{overlayContent:(0,V.jsx)(c.FormattedMessage,{...U.cancelButtonHint}),children:(0,V.jsx)(W.Yn,{disabled:o,maxlength:l.OO,style:p.plainTextInput,store:h})})]})]})},assistant:function(e){window.__c={n:"AssistantAction"};const{actionStore:t,disabled:o}=e,s=(0,i.O7)(),l=(0,c.useIntl)(),u=(0,r.VK)((()=>P.Z.isJSAssistantEnabled()),[]),p=(0,a.yK)((e=>({wrap:{display:"flex",flexDirection:"column",gap:10},plainTextInput:{backgroundColor:e.contentBackground,paddingTop:6,paddingBottom:6},sectionMenuItemTitle:{paddingLeft:0}})),[]),g=(0,r.VK)((()=>t.getType()),[t]),m=(0,r.VK)((()=>{var e;return(null===(e=t.getConfig())||void 0===e?void 0:e.type)||"prompt"}),[t]),x=(0,r.VK)((()=>t.getConfigStore().getKeyStore("description")),[t]),S=(0,r.VK)((()=>({type:"simple",value:(0,C.TPx)(x.getValue())})),[x],{useDeepEqual:!0}),f=(0,r.VK)((()=>t.getConfigStore().getKeyStore("value")),[t]),h=(0,r.VK)((()=>({type:"simple",value:(0,C.TPx)(f.getValue())})),[f],{useDeepEqual:!0}),y=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"AssistantAction.handleDescriptionChange",environment:s,perform:t=>{v.sO({store:x,value:(0,C.QaF)(null==e?void 0:e.value),transaction:t})}})}),[s,x]),j=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"AssistantAction.handleValueChange",environment:s,perform:t=>{v.sO({store:f,value:(0,C.QaF)(null==e?void 0:e.value),transaction:t})}})}),[s,f]),A=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"AssistantAction.handleAssistantTypeChange",environment:s,perform:o=>{v.sO({store:t.getConfigStore().getKeyStore("type"),value:e,transaction:o})}})}),[s,t]);if(!u)return null;if(!g)return null;const w=(0,b.z)(g);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(T.Xd,{...e,title:(0,V.jsx)(c.FormattedMessage,{...w.display.name}),picker:(0,V.jsx)(K,{currentOption:m,disabled:o,onChange:A})}),(0,V.jsxs)("div",{style:p.wrap,children:[(0,V.jsx)(M.D,{disabled:o,value:S,onChange:y,placeholder:l.formatMessage(k.descriptionLabel),disableFormattingAndMentions:!0,disableMobileActionBar:!0}),("prompt"===m||"code"===m)&&(0,V.jsx)(M.D,{disabled:o,value:h,onChange:j,placeholder:l.formatMessage(Z(m)),multiline:!0,disableFormattingAndMentions:!0,disableMobileActionBar:!0,code:"code"===m})]})]})},slack_notification:()=>null};function Me(e){window.__c={n:"AutomationAction"};const{contextStore:t,buttonPlacement:o,actionStore:n,disabled:i,dragging:s,showErrorIfPresent:l,onActionAdded:c}=e,d=(0,a.yK)((e=>({container:{background:e.contentBackground,borderRadius:5,display:"flex",flexDirection:"column",gap:8,padding:8,marginLeft:12,marginRight:12,marginBottom:8,fontSize:14,boxShadow:s?e.mediumBoxShadow:e.lightBoxShadow,width:"calc(100% - 24px)"},nameRow:{display:"flex",alignItems:"center",marginBottom:4},name:{flexGrow:1,fontWeight:y.Z.fontWeight.medium,marginLeft:8},iconWrap:{width:24,height:24,display:"flex",alignItems:"center",borderRadius:4,background:"rgba(35, 131, 226, 0.14)"},icon:{width:14,height:14,fill:e.blueColor,margin:"0 auto"}})),[s]),[u,p]=(0,r.VK)((()=>n.hasConcern("display")?[n,n.getType()]:[void 0,void 0]),[n]);if(!n||!p)return null;const g=we[p];return(0,V.jsx)("div",{style:d.container,children:(0,V.jsx)(g,{contextStore:t,actionStore:u,buttonPlacement:o,disabled:i,dragging:s,showErrorIfPresent:l,onActionAdded:c})})}function Pe(e){window.__c={n:"AutomationButtonActionList"};const{contextStore:t,buttonPlacement:o,disabled:n,suppressErrors:s,onActionAdded:c}=e,u=(0,i.O7)(),p=(0,r.VK)((()=>t.context.automationStore.getActionStores()),[t.context.automationStore]),m=(0,r.VK)((()=>p.map((e=>e.id))),[p]),f=(0,r.qz)(void 0,x.Z),h=(0,r.VK)((()=>f.state.isDragging),[f]),y=(0,r.VK)((()=>f.state.isDragging&&f.state.draggingKey),[f]),b=!n&&p.length<l.FT,C=(0,a.yK)((e=>({actionsLineWrap:{cursor:h?"grabbing":void 0,position:"relative"},actionLine:{position:"absolute",top:0,bottom:8,left:28,width:4,background:e.accentColors.gray[100],zIndex:1},actionsWrap:{position:"relative",zIndex:2}})),[h]);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)("div",{style:C.actionsLineWrap,children:[(0,V.jsx)("div",{style:C.actionLine}),(0,V.jsx)("div",{style:C.actionsWrap,children:(0,V.jsx)(g.ZP,{direction:"vertical",disabled:n,keys:m,onDrop:e=>{d.createAndCommit({userAction:"AutomationButtonAction.moveAction",environment:u,perform:o=>{S.kM({clientContext:t.context,transaction:o,newActionIds:e})}})},renderKey:e=>{const i=p.find((t=>t.id===e));return i?(0,V.jsx)(Me,{actionStore:i,contextStore:t,buttonPlacement:o,disabled:n,dragging:y===e,onActionAdded:c,showErrorIfPresent:Array.isArray(s)?!s.includes(i.id):!s},i.id):null},store:f})})]}),b&&(0,V.jsx)(_e,{contextStore:t,disabled:n,onActionAdded:c})]})}function _e(e){window.__c={n:"AddActionButton"};const{contextStore:t,disabled:o,onActionAdded:l}=e,d=(0,i.O7)(),{device:g}=d,[x,S]=(0,n.useState)(!0),y=(0,a.yK)((e=>({buttonWrap:{boxShadow:"initial",background:"transparent"},button:{color:e.mediumTextColor,fill:e.mediumIconColor},buttonIcon:{width:24,height:g.isMobile?18:16,marginRight:-2}})),[g.isMobile]),b=(0,r.qz)(void 0,m.Z),C=(0,f.d)(),v=(0,r.VK)((()=>t.context.automationStore.hasAnyActions()),[t.context.automationStore]);return(0,n.useEffect)((()=>{!v&&x&&(b.setState({open:!0}),S(!1))}),[b,v,x]),(0,V.jsx)(p.ZP,{popupType:C,alignmentToOrigin:p.vR.Start,placementToOrigin:p.pO.Bottom,originGap:0,buttonPopupStore:b,disabled:o,renderOrigin:e=>(0,V.jsx)(u.Z,{focused:!1,style:y.buttonWrap,buttonStyle:y.button,icon:(0,s.R)(y.buttonIcon),title:v?(0,V.jsx)(c.FormattedMessage,{id:"automations.addActionButton.nonEmpty.label",defaultMessage:"Add another step"}):(0,V.jsx)(c.FormattedMessage,{id:"automations.addActionButton.empty.label",defaultMessage:"Add a step"}),...e}),render:e=>(0,V.jsx)(h.v,{contextStore:t,onActionAdded:t=>{l(t),e.close()}})})}},12076:(e,t,o)=>{o.d(t,{Z:()=>Q});var n=o(67294),i=o(480),r=o(86628),a=o(80951),s=o(8848),l=o(45238),c=o(85893);const d=(0,l.I)("collectionDeleteRule",{viewBox:"0 0 14 14",svg:(0,c.jsx)("path",{d:"M12 3.27273L10.7273 2L7 5.72727L3.27273 2L2 3.27273L5.72727 7L2 10.7273L3.27273 12L7 8.27273L10.7273 12L12 10.7273L8.27273 7L12 3.27273Z"})});var u=o(47453),p=o(37612),g=o(72126),m=o(9291),x=o(36610),S=o(8406),f=o(94166),h=o(57410),y=o(12534),b=o(33929),C=o(87279),v=o(31339),j=o(60246),A=o(52275),w=o(31945),M=o(14871),P=o(77498),_=o(62045),T=o(50542);const O=function(e){let{schema:t,sort:o,disabled:i,onChange:r,index:a,collectionViewType:s,collectionContextStore:l}=e;const d=t[o.property];return d?(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)(k,{disabled:i,schema:t,sort:o,onChange:r,index:a,collectionViewType:s,collectionContextStore:l,propertySchema:d}),(0,c.jsx)(V,{sort:o,index:a,onChange:r,collectionViewType:s,collectionContextStore:l,disabled:i})]}):null};function V(e){let{sort:t,index:o,onChange:n,collectionViewType:r,collectionContextStore:a,disabled:s}=e;window.__c={n:"SortDirection"};const l=(0,i.O7)(),d=(0,m.useIntl)(),u=t.direction,p={ascending:(0,c.jsx)(m.FormattedMessage,{defaultMessage:"Ascending",id:"collectionSortMenuRow.sortDirectionSelectMenu.ascending"}),descending:(0,c.jsx)(m.FormattedMessage,{defaultMessage:"Descending",id:"collectionSortMenuRow.sortDirectionSelectMenu.descending"})},g={menuTitle:d.formatMessage({id:"collectionSortMenuRow.sortDirectionSelectMenu.title",defaultMessage:"Sort"}),items:[...j.C6],getKey:e=>e,selectedItem:u,disabled:s,onSelect:e=>{const i={...t,direction:e};n(o,i),a?S.wd({environment:l,action:"set_sort_direction",collectionContextStore:a}):r&&x.wd(l,{view_type:r,action:"set_sort_direction"})},renderItem:e=>(0,c.jsx)(A.Z,{title:p[e.value],...e}),renderOrigin:e=>(0,c.jsx)(_.Z,{...e,placeholder:d.formatMessage({id:"collectionSortMenuRow.sortDirectionSelectMenu.placeholder",defaultMessage:"Empty"}),title:u&&p[u],disabled:s,desktopStyle:{opacity:1}})};return(0,c.jsx)(M.Z,{...g,mobileActionSheet:!0},"direction")}function k(e){let{propertySchema:t,disabled:o,schema:n,sort:r,onChange:s,index:l,collectionViewType:d,collectionContextStore:u}=e;window.__c={n:"PropertyDropdownComponent"};const p=(0,i.O7)(),{device:g}=p;return(0,c.jsx)(w.ZP,{popupType:g.isMobile?w.Z4.SlideUp:w.Z4.Popup,renderOrigin:e=>(0,c.jsx)(T.Z,{...e,propertySchema:t,disabled:o,textWrapperStyle:{opacity:1}}),render:e=>(0,c.jsx)(P.Z,{isRelationProperty:!1,schema:n,onAccept:e=>function(e,t,o,n,i,r,a){n(i,{...o,property:e}),a?S.wd({environment:t,action:"set_sort_property",collectionContextStore:a}):r&&x.wd(t,{view_type:r,action:"set_sort_property"})}(e,p,r,s,l,d,u),onClose:e.close,allowProperty:a.bA}),disabled:o})}var K=o(79131),F=o(73063),Z=o(78140),L=o(28992),I=o(53437),B=o(72495),D=o(26388);const R=(0,m.defineMessages)({inputPlaceholder:{defaultMessage:"Search for a property…",id:"database.viewSettings.collectionSortMenu.inputPlaceholder"},deleteButtonTooltip:{defaultMessage:"Remove sort rule",id:"database.sortMenu.deleteButtonTooltip"}});const Q=function(e){let{schema:t,format:o,sorts:n,showDeleteAll:r,disabled:s,parentStore:l,collectionViewStore:d,collectionContextStore:g,onChange:y,onDeleteAll:v}=e;window.__c={n:"CollectionSortMenu"};const j=(0,i.O7)(),{device:A}=j,M=!!Object.keys(t).some((e=>!n.find((t=>t.property===e)))),P=r&&n.length>0;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(N,{sorts:n,schema:t,disabled:s,parentStore:l,collectionViewStore:d,collectionContextStore:g,onChange:y}),(M||P)&&(0,c.jsxs)(B.Z,{children:[M&&(0,c.jsx)(w.ZP,{popupType:A.isMobile?I.kQ.SlideUp:I.kQ.Popup,renderOrigin:e=>(0,c.jsx)(f.Z,{icon:u.R,isGray:!0,title:(0,c.jsx)(m.FormattedMessage,{id:"database.viewSettings.sortTab.newSort",defaultMessage:"Add sort"}),...e}),render:e=>{let i;return i=A.isMobile?{menuType:C.og.ActionSheet}:{menuType:C.og.Popup,width:280,height:287},(0,c.jsx)(Z.Z,{...i,children:(0,c.jsx)(h.Z,{schema:t,format:o,getProperties:()=>Object.entries(t).filter((e=>{let[t,o]=e;return!n.find((e=>e.property===t))&&(0,a.bA)(o)})).map((e=>{let[t]=e;return t})),onAccept:o=>{!function(e,t,o,n,i,r,a){var s;if(!e)return;const l=null===(s=o[e])||void 0===s?void 0:s.type,c=[...n,{property:e,direction:"ascending"}];i(c),a&&S.wd({environment:t,action:"create_sort_accept",collectionContextStore:a,property_type:l});const d=W(r);d&&x.wd(t,{action:"create_sort_accept",view_type:d,property_type:l})}(o,j,t,n,y,d,g),e.close()},inputPlaceholder:b.default.formatMessage(R.inputPlaceholder)})})}}),P&&(0,c.jsx)(f.Z,{icon:p.y,isRed:!0,isGray:!0,title:(0,c.jsx)(m.FormattedMessage,{id:"database.viewSettings.sortTab.deleteAllSorts",defaultMessage:"Delete sort"}),onClick:()=>function(e,t,o,n,i){if(t([]),null==i||i(),n)return void S.wd({environment:e,action:"delete_all_sorts",collectionContextStore:n});const r=W(o);r&&x.wd(e,{action:"delete_all_sorts",view_type:r})}(j,y,d,g,v)})]})]})};function W(e){return null==e?void 0:e.getType()}function U(e,t,o,n,i,r,a){if(n(i.map(((o,n)=>n===e?t:o))),a)return void S.wd({environment:o,collectionContextStore:a,action:"update_sort"});const s=W(r);s&&x.wd(o,{action:"update_sort",view_type:s})}function E(e,t,o,n,i,r){if(o(n.filter(((t,o)=>o!==e))),r)return void S.wd({environment:t,action:"delete_sort",collectionContextStore:r});const a=W(i);a&&x.wd(t,{action:"delete_sort",view_type:a})}function z(e){let{index:t,onChange:o,sorts:n,collectionViewStore:r,collectionContextStore:a}=e;window.__c={n:"MobileDeleteButtonMenuItemComponent"};const l=(0,i.O7)();return(0,c.jsx)(A.Z,{title:(0,c.jsx)("div",{style:{color:s.ZP.red},children:(0,c.jsx)(m.FormattedMessage,{defaultMessage:"Delete",id:"database.viewSettings.sortTab.mobileDeleteButtonTitle"})}),icon:(0,c.jsx)(v.Z,{icon:p.y,styles:{color:s.ZP.red}}),onClick:()=>E(t,l,o,n,r,a),focused:!1})}function G(e){let{index:t,onChange:o,sorts:n,collectionViewStore:r,collectionContextStore:a}=e;window.__c={n:"DesktopDeleteButtonComponent"};const s=(0,m.useIntl)(),l=(0,i.O7)();return(0,c.jsx)(D.ZP,{render:e=>(0,c.jsx)(F.Z,{ariaLabel:s.formatMessage(R.deleteButtonTooltip),icon:d,onClick:()=>E(t,l,o,n,r,a),style:{marginRight:-6},...e}),renderTooltip:()=>s.formatMessage(R.deleteButtonTooltip)})}function q(e){let{sort:t,index:o,schema:n,disabled:a,parentStore:s,collectionViewStore:l,collectionContextStore:d,onChange:u,sorts:p}=e;window.__c={n:"SortComponent"};const g=(0,i.O7)(),{device:m}=g,x=(0,r.VK)((()=>W(l)),[l]);return m.isMobile?(0,c.jsxs)(B.Z,{children:[(0,c.jsx)(O,{index:o,sort:t,schema:n,parentStore:s,collectionViewType:x,collectionContextStore:d,onChange:(e,t)=>U(e,t,g,u,p,l,d)}),!a&&(0,c.jsx)(z,{onChange:u,sorts:p,collectionViewStore:l,collectionContextStore:d,index:o})]}):(0,c.jsx)(B.Z,{extraTopPadding:!0,desktopStyle:{padding:"8px 0 0 8px",width:"100%"},children:(0,c.jsx)(L.Z,{showDragHandle:!m.isMobile&&!a,title:(0,c.jsx)("div",{style:{display:"flex",alignItems:"center",flexGrow:1,whiteSpace:"nowrap"},onMouseDown:y.$0,children:(0,c.jsx)(O,{index:o,sort:t,schema:n,parentStore:s,collectionViewType:x,collectionContextStore:d,onChange:(e,t)=>U(e,t,g,u,p,l,d)})}),right:!a&&(0,c.jsx)(G,{onChange:u,sorts:p,collectionViewStore:l,collectionContextStore:d,index:o})})})}function N(e){let{sorts:t,schema:o,disabled:n,parentStore:r,collectionViewStore:a,collectionContextStore:s,onChange:l}=e;window.__c={n:"SortsComponent"};const d=(0,i.O7)(),{device:u}=d;if(u.isMobile)return(0,c.jsx)(c.Fragment,{children:t.map(((e,i)=>(0,c.jsx)(q,{schema:o,disabled:n,parentStore:r,collectionViewStore:a,collectionContextStore:s,onChange:l,sorts:t,sort:e,index:i},i)))});{const e=t.map(((e,t)=>t.toString()));return e.length>0?(0,c.jsx)("div",{style:{marginBottom:2},children:(0,c.jsx)(K.ZP,{direction:"vertical",keys:e,renderKey:e=>(0,c.jsx)(q,{schema:o,disabled:n,parentStore:r,collectionViewStore:a,collectionContextStore:s,onChange:l,sorts:t,sort:t[parseInt(e)],index:parseInt(e)}),onDrop:e=>function(e,t,o,n,i,r){if(o(g.oA(e.map((e=>n[parseInt(e)])))),r)return void S.wd({environment:t,action:"reorder_sorts",collectionContextStore:r});const a=W(i);a&&x.wd(t,{action:"reorder_sorts",view_type:a})}(e,d,l,t,a,s)})}):null}}},65955:(e,t,o)=>{o.d(t,{o:()=>r});o(67294);var n=o(45238),i=o(85893);const r=(0,n.I)("addPage",{viewBox:"0 0 14 14",svg:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 0c3.861 0 7 3.139 7 7s-3.139 7-7 7-7-3.139-7-7 3.139-7 7-7zM3.561 5.295a1.027 1.027 0 1 0 2.054 0 1.027 1.027 0 0 0-2.054 0zm5.557 1.027a1.027 1.027 0 1 1 0-2.054 1.027 1.027 0 0 1 0 2.054zm1.211 2.816a.77.77 0 0 0-.124-1.087.786.786 0 0 0-1.098.107c-.273.407-1.16.958-2.254.958-1.093 0-1.981-.55-2.244-.945a.788.788 0 0 0-1.107-.135.786.786 0 0 0-.126 1.101c.55.734 1.81 1.542 3.477 1.542 1.668 0 2.848-.755 3.476-1.541z"})})}}]);