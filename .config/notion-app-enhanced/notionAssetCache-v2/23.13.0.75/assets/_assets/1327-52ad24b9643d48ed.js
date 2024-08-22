"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[1327],{11327:(e,t,o)=>{o.r(t),o.d(t,{AutomationButtonActionList:()=>Me});var n=o(67294),i=o(480),r=o(86628),a=o(24405),s=o(47453),l=o(98963),c=o(9291),d=o(82530),u=o(52275),p=o(31945),g=o(79131),m=o(61766),x=o(45452),S=o(47043),h=o(35294),f=o(19454),y=o(82990),b=o(28751),C=o(70203),j=o(9953),v=o(78140),A=o(32163),w=o(72495),M=o(72865),P=o(21273),O=o(95193),T=o(48312),_=o(40190),V=o(85893);const k=(0,c.defineMessages)({codeLabel:{defaultMessage:"Code",id:"automations.AssistantAction.codeLabel"},promptLabel:{defaultMessage:"Prompt",id:"automations.AssistantAction.promptLabel"},humanLabel:{defaultMessage:"User",id:"automations.AssistantAction.humanLabel"},descriptionLabel:{defaultMessage:"Description",id:"automations.AssistantAction.descriptionLabel"}});function F(e){window.__c={n:"AssistantTypeDropdownButton"};const{currentOption:t,disabled:o,onChange:i}=e,a=(0,c.useIntl)(),s=(0,h.d)(),l=(0,r.qz)(void 0,m.Z),d=(0,n.useCallback)((e=>{i&&e!==t&&i(e),l.setState({open:!1})}),[l,t,i]);return(0,V.jsx)(p.ZP,{alignmentToOrigin:p.vR.Start,buttonPopupStore:l,disabled:o,originGap:0,placementToOrigin:p.pO.Bottom,popupType:s,render:()=>(0,V.jsx)(K,{currentOption:t,onChange:d}),renderOrigin:e=>(0,V.jsx)(_.S,{...e,disabled:o,variant:"gray",children:a.formatMessage(Z(t))})})}function K(e){window.__c={n:"AssistantTypeDropdownMenu"};const{currentOption:t,onChange:o}=e,n=(0,c.useIntl)(),i=(0,O.F)({maxWidth:360}),r=["prompt","code","human"].map((e=>({key:e,render:o=>(0,V.jsx)(u.Z,{...o,checkState:t===e,title:n.formatMessage(Z(e))}),action:()=>null==o?void 0:o(e)})));return(0,V.jsx)(v.Z,{...i,children:(0,V.jsx)(A.Z,{initialFocus:0,sections:[{key:0,render:e=>(0,V.jsx)(w.Z,{enableActionSheetTitle:!0,...e}),items:r}],type:A.i.Vertical})})}function Z(e){switch(e){case"code":return k.codeLabel;case"prompt":return k.promptLabel;case"human":return k.humanLabel}}var I=o(41301),B=o(64737),L=o(32984),D=o(73239),R=o(29180);var Q=o(60781),W=o(19471);const U=(0,c.defineMessages)({confirmationInputPlaceholder:{defaultMessage:"Write a message to show users…",id:"automations.BaseModalAction.confirmationPlaceholder"},continueButtonHint:{defaultMessage:"Completes button action",id:"automations.BaseModalAction.continueButtonHint"},cancelButtonHint:{defaultMessage:"Stops button action",id:"automations.BaseModalAction.cancelButtonHint"}});function E(e){window.__c={n:"WithRightOverlay"};const{children:t,overlayContent:o}=e,n=(0,a.yK)((e=>({wrap:{position:"relative"},overlay:{position:"absolute",height:"100%",display:"flex",alignItems:"center",top:0,right:10,color:e.lightTextColor}})),[]);return(0,V.jsxs)("div",{style:n.wrap,children:[t,(0,V.jsx)("div",{style:n.overlay,children:o})]})}var G=o(72126),z=o(33732);function q(e){window.__c={n:"AutomationKeyValueRow"};const{keyComp:t,valueComp:o,style:n}=e,i=(0,a.yK)((()=>({container:{display:"flex",alignItems:"center",justifyContent:"space-between",...n}})),[n]);return(0,V.jsxs)("div",{style:i.container,children:[t,o]})}function N(e){return(0,V.jsx)("div",{style:{marginRight:4,flexShrink:0},children:e.text})}var H=o(48309);function X(e){window.__c={n:"OpenPageInDropdownButton"};const{actionStore:t,disabled:o}=e,n=(0,a.Fg)(),i=(0,r.VK)((()=>t.getOpenPageIn()),[t]),s=(0,h.d)(),l=(0,z.v)({currentViewType:void 0,theme:n}).find((e=>e.key===i));return l?(0,V.jsx)(p.ZP,{popupType:s,alignmentToOrigin:p.vR.End,placementToOrigin:p.pO.Bottom,originGap:0,disabled:o,renderOrigin:e=>(0,V.jsx)(_.S,{disabled:o,variant:"gray",...e,children:l.title}),render:t=>(0,V.jsx)($,{currentOpenPageIn:i,parent:t,...e})}):null}function $(e){window.__c={n:"OpenPageInDropdownMenu"};const{currentOpenPageIn:t,actionStore:o,parent:r}=e,s=(0,i.O7)(),l=(0,a.Fg)(),c=(0,a.yK)((()=>({menuItem:{paddingTop:8,paddingBottom:8}})),[]),p=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"OpenPageAction.setTarget",environment:s,perform:t=>{j.sW({store:o.getConfigStore(),data:{open_in:e},transaction:t})}})}),[s,o]),g=(0,O.F)({width:280,maxWidth:360}),m=(0,z.v)({currentViewType:void 0,theme:l}),x=G.oA(m.map(((e,o)=>({key:o,render:o=>(0,V.jsx)(u.Z,{...o,disabled:!1,title:e.title,icon:e.icon,caption:e.caption,body:e.body,style:c.menuItem,checkState:t===e.key,...o}),action:()=>{p(e.key),r.close()}}))));return(0,V.jsx)(v.Z,{...g,children:(0,V.jsx)(A.Z,{type:A.i.Vertical,sections:[{key:0,render:e=>(0,V.jsx)(w.Z,{enableActionSheetTitle:!0,...e}),items:x}],initialFocus:0})})}o(57658);var J=o(40745),Y=o(22109),ee=o(97880),te=o(57410),oe=o(75117),ne=o(53437),ie=o(87279),re=o(52105);const ae=(0,c.defineMessages)({addSortLimit:{id:"automations.QueryCollectionAction.addSortLimitButton.addSortLimit",defaultMessage:"Add sort, limit"},addLimit:{id:"automations.QueryCollectionAction.addSortLimitButton.addLimit",defaultMessage:"Add limit"},addSort:{id:"automations.QueryCollectionAction.addSortLimitButton.addSort",defaultMessage:"Add sort"},limitDescription:{id:"automations.QueryCollectionAction.limitPopup.limitDescription",defaultMessage:"{numberOfPages, plural, one {{numberOfPages} page} other {{numberOfPages} pages}}"},unlimitedDescription:{id:"automations.QueryCollectionAction.limitPopup.unlimitedDescription",defaultMessage:"Unlimited"}});function se(e){window.__c={n:"AddSortLimitButton"};const{actionStore:t,collectionStore:o,disabled:a,onSortAdded:s,onLimitAdded:l}=e,u=(0,i.Fy)(),g=(0,i.O7)(),[m,x]=(0,n.useState)(!1);let S;S=u.isMobile?{menuType:ie.og.ActionSheet}:{menuType:ie.og.Popup,width:250};const h=(0,n.useRef)(null),[f,y]=n.useState(void 0),b=(0,r.VK)((()=>o.getSchema()??{}),[o]),C=(0,r.VK)((()=>o.getFormat()??{}),[o]),A=(0,n.useCallback)((()=>Object.keys(o.getSchema())),[o]),w=(0,r.VK)((()=>t.hasSort()),[t]),M=(0,r.VK)((()=>t.hasLimit()),[t]),P=(0,n.useCallback)((e=>{e&&d.createAndCommit({userAction:"QueryCollectionAction.setInitialSort",environment:g,perform:o=>{j.sW({store:t.getConfigStore(),data:{sort:[{property:e,direction:"ascending"}]},transaction:o})}}),x(!1),s()}),[t,g,s]),O=(0,n.useCallback)((()=>{d.createAndCommit({userAction:"QueryCollectionAction.setInitialLimit",environment:g,perform:e=>{j.sW({store:t.getConfigStore(),data:{limit:1},transaction:e})}}),l()}),[t,g,l]);if(w&&M)return null;let T;return T=w?ae.addLimit:M?ae.addSort:ae.addSortLimit,(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(p.ZP,{popupType:u.isMobile?ne.kQ.SlideUp:ne.kQ.Popup,alignmentToOrigin:p.vR.Start,placementToOrigin:p.pO.Bottom,originGap:0,disabled:a,renderOrigin:e=>(0,V.jsx)(_.S,{disabled:a,variant:"gray",ref:h,...e,children:(0,V.jsx)(c.FormattedMessage,{...T})}),render:e=>(0,V.jsx)(le,{showSortOption:!w,showLimitOption:!M,onSortSelected:()=>{var t;x(!0),y(null===(t=h.current)||void 0===t?void 0:t.getBoundingClientRect()),e.close()},onLimitSelected:()=>{O(),e.close()}})}),(0,V.jsx)(ne.ZP,{popupType:u.isMobile?ne.kQ.SlideUp:ne.kQ.Popup,open:m,placementToOrigin:ne.ZP.Placement.Bottom,alignmentToOrigin:ne.ZP.Alignment.Start,originRect:f,render:()=>(0,V.jsx)(v.Z,{...S,children:(0,V.jsx)(te.Z,{schema:b,format:C,currentProperty:void 0,getProperties:A,onAccept:P})}),onDismiss:()=>x(!1)})]})}function le(e){window.__c={n:"AddSortLimitMenu"};const{showSortOption:t,showLimitOption:o,onSortSelected:n,onLimitSelected:r}=e;let a;a=(0,i.Fy)().isMobile?{menuType:ie.og.ActionSheet}:{menuType:ie.og.Popup,width:250};const s=[];return t&&s.push({key:"sort",action:n,render:e=>(0,V.jsx)(u.Z,{...e,title:"Sort",icon:(0,Y.T)({width:16})})}),o&&s.push({key:"limit",action:r,render:e=>(0,V.jsx)(u.Z,{...e,title:"Limit",icon:(0,J.M)({width:16})})}),(0,V.jsx)(v.Z,{...a,children:(0,V.jsx)(A.Z,{type:A.i.Vertical,sections:[{key:0,render:e=>(0,V.jsx)(w.Z,{enableActionSheetTitle:!0,...e}),items:s}],initialFocus:0})})}function ce(e){window.__c={n:"SortPopup"};const{contextStore:t,actionStore:o,collectionStore:n,disabled:a,buttonPopupStore:s}=e,l=(0,i.O7)(),{device:d}=l,u=(0,r.VK)((()=>{var e;return(null===(e=o.getConfig())||void 0===e||null===(e=e.sort)||void 0===e?void 0:e.length)??0}),[o]);return(0,V.jsx)(p.ZP,{popupType:d.isMobile?ne.kQ.SlideUp:ne.kQ.Popup,alignmentToOrigin:p.vR.End,placementToOrigin:p.pO.Bottom,originGap:0,disabled:a,buttonPopupStore:s,renderOrigin:e=>(0,V.jsx)(_.S,{disabled:a,variant:"gray",...e,children:u>0?(0,V.jsx)(c.FormattedMessage,{defaultMessage:"{numberOfSorts, plural, one {{numberOfSorts} sort} other {{numberOfSorts} sorts}}",values:{numberOfSorts:u},id:"automations.QueryCollectionAction.oneOrMoreSorts.title"}):(0,V.jsx)(c.FormattedMessage,{defaultMessage:"None",id:"automations.QueryCollectionAction.noSorts.title"})}),render:e=>(0,V.jsx)(de,{contextStore:t,collectionStore:n,actionStore:o,disabled:a})})}function de(e){window.__c={n:"SortMenu"};const{contextStore:t,actionStore:o,collectionStore:a,disabled:s}=e,l=(0,i.O7)(),{device:c}=l;let u;u=c.isMobile?{menuType:ie.og.ActionSheet}:{menuType:ie.og.Popup,minWidth:300};const p=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"QueryCollectionAction.setSort",environment:l,perform:t=>{j.sW({store:o.getConfigStore(),data:{sort:e},transaction:t})}})}),[l,o]),g=(0,r.VK)((()=>o.getConfigStore().getKeyStore("sort").getValue()??[]),[o]),m=(0,r.VK)((()=>a.getSchema()),[a]),x=(0,r.VK)((()=>a.getFormat()),[a]);return(0,V.jsx)(v.Z,{...u,children:(0,V.jsx)(oe.Z,{schema:m,format:x,collectionViewStore:void 0,sorts:g,disabled:s,parentStore:t.context.parentRecordStore,onChange:p})})}function ue(e){window.__c={n:"LimitPopup"};const{actionStore:t,disabled:o,buttonPopupStore:n}=e,a=(0,i.O7)(),{device:s}=a,l=(0,r.VK)((()=>t.getConfigStore().getKeyStore("limit").getValue()),[t]);return(0,V.jsx)(p.ZP,{popupType:s.isMobile?ne.kQ.SlideUp:ne.kQ.Popup,alignmentToOrigin:p.vR.End,placementToOrigin:p.pO.Bottom,originGap:0,disabled:o,buttonPopupStore:n,renderOrigin:e=>(0,V.jsx)(_.S,{disabled:o,variant:"gray",...e,children:(0,ee.$K)(l)&&(0,V.jsx)(c.FormattedMessage,{...ae.limitDescription,values:{numberOfPages:l}})}),render:e=>(0,V.jsx)(pe,{onLimitChanged:o=>{(e=>{d.createAndCommit({userAction:"QueryCollectionAction.setLimit",environment:a,perform:o=>{j.sW({store:t.getConfigStore(),data:{limit:e},transaction:o})}})})(o),e.close()}})})}function pe(e){window.__c={n:"LimitMenu"};const{onLimitChanged:t}=e;let o;o=(0,i.Fy)().isMobile?{menuType:ie.og.ActionSheet}:{menuType:ie.og.Popup,minWidth:250};const n=[];for(let i=1;i<=5;i++)n.push({key:`limit-${i}`,action:()=>{t(i)},render:e=>(0,V.jsx)(u.Z,{...e,title:(0,V.jsx)(c.FormattedMessage,{...ae.limitDescription,values:{numberOfPages:i}})})});return n.push({key:"unlimited",action:()=>{t(void 0)},render:e=>(0,V.jsx)(u.Z,{...e,title:(0,V.jsx)(c.FormattedMessage,{...ae.unlimitedDescription})})}),(0,V.jsx)(v.Z,{...o,children:(0,V.jsx)(A.Z,{type:A.i.Vertical,sections:[{key:0,render:e=>(0,V.jsx)(w.Z,{enableActionSheetTitle:!0,...e}),items:n}],initialFocus:0})})}o(21703);var ge=o(43690),me=o(84619),xe=o(35102),Se=o(149),he=o(76798),fe=o(21396),ye=o(54802),be=o(37034),Ce=o(68373),je=o(8808);function ve(e){window.__c={n:"TargetPicker"};const{contextStore:t,actionStore:o,disabled:a,errorMessage:s}=e,l=(0,i.O7)(),u=(0,r.VK)((()=>{const e=o.getVariableTargetStore();if(e)return e.getValue();const t=o.getCollectionTargetStore();if(t){const e=t.getKeyStore("collection").getValue();if(e)return{collection:e,type:"collection"}}}),[o]),g=(0,r.VK)((()=>{if(u&&"variable"===u.type)return t.getContextValueForActionById(o.id,u.id)}),[t,o,u]),x=(0,_.d)({errorMessage:s,hasValue:Boolean(u||g)}),S=(0,r.qz)(void 0,m.Z),f=(0,h.d)(),y=(0,n.useCallback)((e=>{let t;if("collection"===e.type)t="UpdatePageAction.updateCollection";else if("variable"===e.type)t="UpdatePageAction.updateVariable";else{if("page"===e.type)throw new Error("Not implemented yet.");(0,ee.t1)(e)}d.createAndCommit({userAction:t,environment:l,perform:t=>{j.sW({store:o.getConfigStore(),transaction:t,data:{target:e,properties:null,values:null}})}}),S.reset()}),[l,o,S]),b=(0,n.useCallback)((()=>S.reset()),[S]);return(0,V.jsx)(p.ZP,{buttonPopupStore:S,popupType:f,alignmentToOrigin:p.vR.End,placementToOrigin:p.pO.Bottom,originGap:0,disabled:a,renderOrigin:e=>(0,V.jsx)(_.S,{disabled:a,...x,...e,children:u&&"collection"===u.type?(0,V.jsx)(he.Z,{store:Ce.NW.createChildStore(t.context.parentRecordStore,u.collection)}):g?(0,V.jsx)(fe.F,{value:g,format:me.lo.Medium,isSingle:!0}):(0,V.jsx)(c.FormattedMessage,{id:"automations.UpdatePagesAction.pagesDropdown.label",defaultMessage:"Select database"})}),render:e=>(0,V.jsx)(je.L,{actionId:o.id,automationContextStore:t,onChange:y,onClose:b,selectedTarget:u,skipPages:!0})})}const Ae={create_page:function(e){window.__c={n:"CreatePageAction"};const{contextStore:t,actionStore:o,disabled:a,showErrorIfPresent:s}=e,l=(0,i.O7)(),u=(0,r.VK)((()=>o.getCollectionStore()),[o]),p=(0,r.VK)((()=>{const e=o.getCollectionStore();if(e)return{collection:e.getSpaceShardedPointer(),type:"collection"}}),[o]),g=(0,r.VK)((()=>{var e;return null===(e=o.getConfig())||void 0===e?void 0:e.template_page_id}),[o]),m=(0,r.VK)((()=>(0,B.q)(u).length>0),[u]),x=(0,n.useCallback)((e=>{"collection"===e.type&&d.createAndCommit({userAction:"CreatePageAction.setCollection",environment:l,perform:t=>{j.sW({store:o.getConfigStore(),data:{collection:e.collection,properties:["title"],values:null,template_page_id:null},transaction:t})}})}),[l,o]),S=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"CreatePageAction.setTemplate",environment:l,perform:t=>{const n=o.getConfig();if(!n)return;const{properties:i,values:r}=n;let a=!1;if(e&&i&&1===i.length&&i.includes("title")){var s;const e=null==r?void 0:r.title;e&&null!==(s=e.value)&&void 0!==s&&s.value||(a=!0)}j.sW({store:o.getConfigStore(),data:{template_page_id:e??null,...a&&{properties:[]}},transaction:t})}})}),[l,o]),h=(0,I.TU)({contextStore:t,actionId:o.id,shouldShow:s,errorKey:"collection"}),f=(0,I.TU)({contextStore:t,actionId:o.id,shouldShow:s,errorKey:"template"});return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(T.Xd,{...e,title:(0,V.jsx)(c.FormattedMessage,{id:"automations.CreatePageAction.header",defaultMessage:"Add page to"}),picker:(0,V.jsxs)("div",{style:{display:"flex",alignItems:"center",whiteSpace:"normal"},children:[(0,V.jsx)(D.a,{actionStore:o,currentValue:p,contextStore:t,onChange:x,disabled:a,errorMessage:h,skipVariables:!0}),u&&m&&(0,V.jsx)(c.FormattedMessage,{id:"automations.CreatePageAction.asTemplate",defaultMessage:"as {templateName}",values:{templateName:(0,V.jsx)(R.f,{collectionStore:u,currentTemplateId:g,onChange:S,disabled:a,errorMessage:f})}})]})}),u&&(0,V.jsx)(L.QF,{contextStore:t,collectionStore:u,actionStore:o,disabled:a,showSetPropertyActions:!1})]})},update_pages:function(e){window.__c={n:"UpdatePagesAction"};const{contextStore:t,actionStore:o,disabled:a,showErrorIfPresent:s}=e,l=(0,i.O7)(),u=(0,c.useIntl)(),p=(0,r.VK)((()=>o.getTargetStore()),[o]),g=(0,r.VK)((()=>"collection"===p.getKeyStore("type").getValue()),[p]),m=(0,r.VK)((()=>{var e;const t=o.getCollectionTargetStore();return null==t||null===(e=t.getKeyStore("filter"))||void 0===e?void 0:e.getValue()}),[o]),x=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"QueryCollectionAction.setFilter",environment:l,perform:t=>{j.sW({store:p,transaction:t,data:{filter:e}})}})}),[l,p]),S=(0,r.VK)((()=>{const e=p.getValue();if(e){if("collection"===e.type)return Ce.NW.createChildStore(t.context.parentRecordStore,e.collection);if("variable"===e.type){const o=t.compilationResultStore.state;if(Se.x.isFail(o))return;const n=(0,xe.vx)(o.value.valueTypes,e.id);if(n)return(0,ye.wB)(n,t.context.parentRecordStore)}else{if("page"===e.type)return;(0,ee.t1)(e)}}}),[p,t.context.parentRecordStore,t.compilationResultStore]),h=(0,r.VK)((()=>S?(0,be.vU)({environment:l,intl:u,store:S}):void 0),[S,u,l]),f=(0,r.VK)((()=>m?(0,ge.Ih)(m,(null==S?void 0:S.getSchema())||{}):void 0),[m,S]),y=(0,I.TU)({contextStore:t,actionId:o.id,shouldShow:s}),b=(0,r.VK)((()=>{var e;const n=null===(e=o.getVariableTargetStore())||void 0===e?void 0:e.getValue();if(!n)return!1;const i=t.getContextValueForActionById(o.id,n.id);return!!i&&"block"===i.type.type}),[o,t]);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(T.Xd,{...e,title:b?(0,V.jsx)(c.FormattedMessage,{id:"automations.UpdatePagesAction.singularHeader",defaultMessage:"Edit"}):(0,V.jsx)(c.FormattedMessage,{id:"automations.UpdatePagesAction.header",defaultMessage:"Edit pages in"}),picker:(0,V.jsx)(ve,{contextStore:t,actionStore:o,disabled:a,errorMessage:y})}),g&&S&&(0,V.jsx)("div",{style:{margin:"0 0 -4px 8px"},children:(0,V.jsx)(q,{keyComp:(0,V.jsx)(N,{text:(0,V.jsx)(c.FormattedMessage,{id:"automations.UpdatePagesAction.filter.label",defaultMessage:"Pages to edit"})}),valueComp:(0,V.jsx)(re.W,{filter:f,collectionStore:S,onChange:x,disabled:a,noFiltersMessage:(0,ee.$K)(h)?(0,V.jsx)(c.FormattedMessage,{defaultMessage:"All pages in {collectionName}",id:"automations.UpdatePagesAction.filterRuleCount.noFilters.label",values:{collectionName:h}}):(0,V.jsx)(c.FormattedMessage,{defaultMessage:"All pages in database",id:"automations.UpdatePagesAction.filterRuleCount.noFilters.fallbackLabel",values:{collectionName:h}})})})}),S&&(0,V.jsx)(L.QF,{contextStore:t,collectionStore:S,actionStore:o,disabled:a,showSetPropertyActions:!0})]})},query_collection:function(e){window.__c={n:"QueryCollectionAction"};const{contextStore:t,actionStore:o,disabled:a}=e,s=(0,i.O7)(),l=(0,r.VK)((()=>o.getCollectionStore()),[o]),u=(0,r.VK)((()=>{const e=o.getCollectionStore();if(e)return{collection:e.getSpaceShardedPointer(),type:"collection"}}),[o]),p=(0,r.VK)((()=>o.getConfigStore().getKeyStore("filter").getValue()),[o]),g=(0,r.VK)((()=>o.hasSort()),[o]),x=(0,r.VK)((()=>o.hasLimit()),[o]),S=(0,r.qz)(void 0,m.Z),h=(0,r.qz)(void 0,m.Z),f=(0,n.useCallback)((e=>{"collection"===e.type&&d.createAndCommit({userAction:"QueryCollectionAction.setCollection",environment:s,perform:t=>{j.sW({store:o.getConfigStore(),data:{collection:e.collection,filter:void 0,sort:void 0},transaction:t})}})}),[s,o]),y=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"QueryCollectionAction.setFilter",environment:s,perform:t=>{j.sW({store:o.getConfigStore(),data:{filter:e},transaction:t})}})}),[s,o]),b=(0,n.useCallback)((()=>{S.setState({open:!0})}),[S]),C=(0,n.useCallback)((()=>{h.setState({open:!0})}),[h]);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(T.Xd,{...e,title:(0,V.jsx)(c.FormattedMessage,{id:"automations.QueryCollectionAction.title",defaultMessage:"Get pages from"}),picker:(0,V.jsx)(D.a,{currentValue:u,contextStore:t,onChange:f,disabled:a})}),l&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)("div",{style:{margin:"0 8px"},children:[(0,V.jsx)(q,{keyComp:(0,V.jsx)(N,{text:(0,V.jsx)(c.FormattedMessage,{id:"automations.QueryCollectionAction.filter.label",defaultMessage:"Filter"})}),valueComp:(0,V.jsx)(re.W,{collectionStore:l,filter:p,onChange:y,disabled:a,noFiltersMessage:(0,V.jsx)(c.FormattedMessage,{defaultMessage:"Return all pages",id:"automations.QueryCollectionAction.filterRuleCount.noFilters.label"})})}),g&&(0,V.jsx)(q,{keyComp:(0,V.jsx)(N,{text:(0,V.jsx)(c.FormattedMessage,{id:"automations.QueryCollectionAction.sort.label",defaultMessage:"Sort"})}),valueComp:(0,V.jsx)(ce,{contextStore:t,collectionStore:l,actionStore:o,disabled:a,buttonPopupStore:S})}),x&&(0,V.jsx)(q,{keyComp:(0,V.jsx)(N,{text:(0,V.jsx)(c.FormattedMessage,{id:"automations.QueryCollectionAction.limit.label",defaultMessage:"Limit"})}),valueComp:(0,V.jsx)(ue,{actionStore:o,disabled:a,buttonPopupStore:h})})]}),(0,V.jsx)(se,{collectionStore:l,actionStore:o,disabled:a,onSortAdded:b,onLimitAdded:C})]})]})},open_page:function(e){window.__c={n:"OpenPageAction"};const{contextStore:t,actionStore:o,disabled:a,showErrorIfPresent:s}=e,l=(0,i.O7)(),u=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"OpenPageAction.setTarget",environment:l,perform:t=>{j.sW({store:o.getConfigStore(),data:{target:e},transaction:t})}})}),[l,o]),p=(0,r.VK)((()=>{var e;return null===(e=o.getConfig())||void 0===e?void 0:e.target}),[o]),g=(0,I.TU)({contextStore:t,actionId:o.id,shouldShow:s});return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(T.Xd,{...e,title:(0,V.jsx)(c.FormattedMessage,{id:"automations.OpenPageAction.header",defaultMessage:"Open"}),picker:(0,V.jsx)(H.s,{actionStore:o,target:p,onChange:u,contextStore:t,disabled:a,errorMessage:g})}),(0,V.jsx)("div",{style:{margin:"0 8px"},children:(0,V.jsx)(q,{keyComp:(0,V.jsx)(N,{text:(0,V.jsx)(c.FormattedMessage,{id:"automations.OpenPageAction.openPageIn.label",defaultMessage:"Open page in"})}),valueComp:(0,V.jsx)(X,{...e})})})]})},duplicate_blocks:Q.JM,modal_confirmation:function(e){window.__c={n:"ModalConfirmationAction"};const{actionStore:t,disabled:o}=e,s=(0,i.O7)(),u=(0,c.useIntl)(),p=(0,a.yK)((e=>({wrap:{display:"flex",flexDirection:"column",gap:10},plainTextInput:{backgroundColor:e.contentBackground,paddingTop:6,paddingBottom:6}})),[]),g=(0,r.VK)((()=>t.getType()),[t]),m=(0,r.VK)((()=>t.getConfigStore().getKeyStore("text")),[t]),x=(0,r.VK)((()=>m.getValue()),[m]),S=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"BaseModalAction.handleTextChange",environment:s,perform:t=>{j.sO({store:m,value:e,transaction:t})}})}),[s,m]),h=t.getConfigStore().getKeyStore("continue_button").getKeyStore("text"),f=(0,r.VK)((()=>t.getConfigStore().getKeyStore("cancel_button").getKeyStore("text")),[t]);if(!g)return null;const y=(0,b.z)(g);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(T.Xd,{...e,title:(0,V.jsx)(c.FormattedMessage,{...y.display.name})}),(0,V.jsxs)("div",{style:p.wrap,children:[(0,V.jsx)(M.D,{disabled:o,value:x,onChange:S,multiline:!0,placeholder:u.formatMessage(U.confirmationInputPlaceholder),disableFormattingAndMentions:!0,disableMobileActionBar:!0}),(0,V.jsx)(E,{overlayContent:(0,V.jsx)(c.FormattedMessage,{...U.continueButtonHint}),children:(0,V.jsx)(W.Yn,{disabled:o,maxlength:l.OO,style:p.plainTextInput,store:h})}),(0,V.jsx)(E,{overlayContent:(0,V.jsx)(c.FormattedMessage,{...U.cancelButtonHint}),children:(0,V.jsx)(W.Yn,{disabled:o,maxlength:l.OO,style:p.plainTextInput,store:f})})]})]})},assistant:function(e){window.__c={n:"AssistantAction"};const{actionStore:t,disabled:o}=e,s=(0,i.O7)(),l=(0,c.useIntl)(),u=(0,r.VK)((()=>P.Z.isJSAssistantEnabled()),[]),p=(0,a.yK)((e=>({wrap:{display:"flex",flexDirection:"column",gap:10},plainTextInput:{backgroundColor:e.contentBackground,paddingTop:6,paddingBottom:6},sectionMenuItemTitle:{paddingLeft:0}})),[]),g=(0,r.VK)((()=>t.getType()),[t]),m=(0,r.VK)((()=>{var e;return(null===(e=t.getConfig())||void 0===e?void 0:e.type)||"prompt"}),[t]),x=(0,r.VK)((()=>t.getConfigStore().getKeyStore("description")),[t]),S=(0,r.VK)((()=>({type:"simple",value:(0,C.TPx)(x.getValue())})),[x],{useDeepEqual:!0}),h=(0,r.VK)((()=>t.getConfigStore().getKeyStore("value")),[t]),f=(0,r.VK)((()=>({type:"simple",value:(0,C.TPx)(h.getValue())})),[h],{useDeepEqual:!0}),y=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"AssistantAction.handleDescriptionChange",environment:s,perform:t=>{j.sO({store:x,value:(0,C.QaF)(null==e?void 0:e.value),transaction:t})}})}),[s,x]),v=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"AssistantAction.handleValueChange",environment:s,perform:t=>{j.sO({store:h,value:(0,C.QaF)(null==e?void 0:e.value),transaction:t})}})}),[s,h]),A=(0,n.useCallback)((e=>{d.createAndCommit({userAction:"AssistantAction.handleAssistantTypeChange",environment:s,perform:o=>{j.sO({store:t.getConfigStore().getKeyStore("type"),value:e,transaction:o})}})}),[s,t]);if(!u)return null;if(!g)return null;const w=(0,b.z)(g);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(T.Xd,{...e,title:(0,V.jsx)(c.FormattedMessage,{...w.display.name}),picker:(0,V.jsx)(F,{currentOption:m,disabled:o,onChange:A})}),(0,V.jsxs)("div",{style:p.wrap,children:[(0,V.jsx)(M.D,{disabled:o,value:S,onChange:y,placeholder:l.formatMessage(k.descriptionLabel),disableFormattingAndMentions:!0,disableMobileActionBar:!0}),("prompt"===m||"code"===m)&&(0,V.jsx)(M.D,{disabled:o,value:f,onChange:v,placeholder:l.formatMessage(Z(m)),multiline:!0,disableFormattingAndMentions:!0,disableMobileActionBar:!0,code:"code"===m})]})]})},slack_notification:()=>null};function we(e){window.__c={n:"AutomationAction"};const{contextStore:t,buttonPlacement:o,actionStore:n,disabled:i,dragging:s,showErrorIfPresent:l,onActionAdded:c}=e,d=(0,a.yK)((e=>({container:{background:e.contentBackground,borderRadius:5,display:"flex",flexDirection:"column",gap:8,padding:8,marginLeft:12,marginRight:12,marginBottom:8,fontSize:14,boxShadow:s?e.mediumBoxShadow:e.lightBoxShadow,width:"calc(100% - 24px)"},nameRow:{display:"flex",alignItems:"center",marginBottom:4},name:{flexGrow:1,fontWeight:y.Z.fontWeight.medium,marginLeft:8},iconWrap:{width:24,height:24,display:"flex",alignItems:"center",borderRadius:4,background:"rgba(35, 131, 226, 0.14)"},icon:{width:14,height:14,fill:e.blueColor,margin:"0 auto"}})),[s]),[u,p]=(0,r.VK)((()=>n.hasConcern("display")?[n,n.getType()]:[void 0,void 0]),[n]);if(!n||!p)return null;const g=Ae[p];return(0,V.jsx)("div",{style:d.container,children:(0,V.jsx)(g,{contextStore:t,actionStore:u,buttonPlacement:o,disabled:i,dragging:s,showErrorIfPresent:l,onActionAdded:c})})}function Me(e){window.__c={n:"AutomationButtonActionList"};const{contextStore:t,buttonPlacement:o,disabled:n,suppressErrors:s,onActionAdded:c}=e,u=(0,i.O7)(),p=(0,r.VK)((()=>t.context.automationStore.getActionStores()),[t.context.automationStore]),m=(0,r.VK)((()=>p.map((e=>e.id))),[p]),h=(0,r.qz)(void 0,x.Z),f=(0,r.VK)((()=>h.state.isDragging),[h]),y=(0,r.VK)((()=>h.state.isDragging&&h.state.draggingKey),[h]),b=!n&&p.length<l.FT,C=(0,a.yK)((e=>({actionsLineWrap:{cursor:f?"grabbing":void 0,position:"relative"},actionLine:{position:"absolute",top:0,bottom:8,left:28,width:4,background:e.accentColors.gray[100],zIndex:1},actionsWrap:{position:"relative",zIndex:2}})),[f]);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)("div",{style:C.actionsLineWrap,children:[(0,V.jsx)("div",{style:C.actionLine}),(0,V.jsx)("div",{style:C.actionsWrap,children:(0,V.jsx)(g.ZP,{direction:"vertical",disabled:n,keys:m,onDrop:e=>{d.createAndCommit({userAction:"AutomationButtonAction.moveAction",environment:u,perform:o=>{S.kM({clientContext:t.context,transaction:o,newActionIds:e})}})},renderKey:e=>{const i=p.find((t=>t.id===e));return i?(0,V.jsx)(we,{actionStore:i,contextStore:t,buttonPlacement:o,disabled:n,dragging:y===e,onActionAdded:c,showErrorIfPresent:Array.isArray(s)?!s.includes(i.id):!s},i.id):null},store:h})})]}),b&&(0,V.jsx)(Pe,{contextStore:t,disabled:n,onActionAdded:c})]})}function Pe(e){window.__c={n:"AddActionButton"};const{contextStore:t,disabled:o,onActionAdded:l}=e,d=(0,i.O7)(),{device:g}=d,[x,S]=(0,n.useState)(!0),y=(0,a.yK)((e=>({buttonWrap:{boxShadow:"initial",background:"transparent"},button:{color:e.mediumTextColor,fill:e.mediumIconColor},buttonIcon:{width:24,height:g.isMobile?18:16,marginRight:-2}})),[g.isMobile]),b=(0,r.qz)(void 0,m.Z),C=(0,h.d)(),j=(0,r.VK)((()=>t.context.automationStore.hasAnyActions()),[t.context.automationStore]);return(0,n.useEffect)((()=>{!j&&x&&(b.setState({open:!0}),S(!1))}),[b,j,x]),(0,V.jsx)(p.ZP,{popupType:C,alignmentToOrigin:p.vR.Start,placementToOrigin:p.pO.Bottom,originGap:0,buttonPopupStore:b,disabled:o,renderOrigin:e=>(0,V.jsx)(u.Z,{focused:!1,style:y.buttonWrap,buttonStyle:y.button,icon:(0,s.R)(y.buttonIcon),title:j?(0,V.jsx)(c.FormattedMessage,{id:"automations.addActionButton.nonEmpty.label",defaultMessage:"Add another step"}):(0,V.jsx)(c.FormattedMessage,{id:"automations.addActionButton.empty.label",defaultMessage:"Add a step"}),...e}),render:e=>(0,V.jsx)(f.v,{contextStore:t,onActionAdded:t=>{l(t),e.close()}})})}},75117:(e,t,o)=>{o.d(t,{Z:()=>D});var n=o(67294),i=o(480),r=o(86628),a=o(80951),s=o(8848),l=o(63014),c=o(47453),d=o(37612),u=o(72126),p=o(9291),g=o(50906),m=o(94166),x=o(57410),S=o(12534),h=o(33929),f=o(87279),y=o(31339),b=o(60246),C=o(52275),j=o(31945),v=o(14871),A=o(77498),w=o(62045),M=o(50542),P=o(85893);const O=function(e){let{schema:t,sort:o,disabled:i,onChange:r,index:a,collectionViewType:s}=e;const l=t[o.property];return l?(0,P.jsxs)(n.Fragment,{children:[(0,P.jsx)(_,{disabled:i,schema:t,sort:o,onChange:r,index:a,collectionViewType:s,propertySchema:l}),(0,P.jsx)(T,{sort:o,index:a,onChange:r,collectionViewType:s,disabled:i})]}):null};function T(e){let{sort:t,index:o,onChange:n,collectionViewType:r,disabled:a}=e;window.__c={n:"SortDirection"};const s=(0,i.O7)(),l=(0,p.useIntl)(),c=t.direction,d={ascending:(0,P.jsx)(p.FormattedMessage,{defaultMessage:"Ascending",id:"collectionSortMenuRow.sortDirectionSelectMenu.ascending"}),descending:(0,P.jsx)(p.FormattedMessage,{defaultMessage:"Descending",id:"collectionSortMenuRow.sortDirectionSelectMenu.descending"})},u={menuTitle:l.formatMessage({id:"collectionSortMenuRow.sortDirectionSelectMenu.title",defaultMessage:"Sort"}),items:[...b.C6],getKey:e=>e,selectedItem:c,disabled:a,onSelect:e=>{const i={...t,direction:e};n(o,i),r&&g.wd(s,{view_type:r,action:"set_sort_direction"})},renderItem:e=>(0,P.jsx)(C.Z,{title:d[e.value],...e}),renderOrigin:e=>(0,P.jsx)(w.Z,{...e,placeholder:l.formatMessage({id:"collectionSortMenuRow.sortDirectionSelectMenu.placeholder",defaultMessage:"Empty"}),title:c&&d[c],disabled:a,desktopStyle:{opacity:1}})};return(0,P.jsx)(v.Z,{...u,mobileActionSheet:!0},"direction")}function _(e){let{propertySchema:t,disabled:o,schema:n,sort:r,onChange:s,index:l,collectionViewType:c}=e;window.__c={n:"PropertyDropdownComponent"};const d=(0,i.O7)(),{device:u}=d;return(0,P.jsx)(j.ZP,{popupType:u.isMobile?j.Z4.SlideUp:j.Z4.Popup,renderOrigin:e=>(0,P.jsx)(M.Z,{...e,propertySchema:t,disabled:o,textWrapperStyle:{opacity:1}}),render:e=>(0,P.jsx)(A.Z,{isRelationProperty:!1,schema:n,onAccept:e=>function(e,t,o,n,i,r){n(i,{...o,property:e}),r&&g.wd(t,{view_type:r,action:"set_sort_property"})}(e,d,r,s,l,c),onClose:e.close,allowProperty:a.bA}),disabled:o})}var V=o(79131),k=o(73063),F=o(78140),K=o(28992),Z=o(53437),I=o(72495),B=o(26388);const L=(0,p.defineMessages)({inputPlaceholder:{defaultMessage:"Search for a property…",id:"database.viewSettings.collectionSortMenu.inputPlaceholder"}});const D=function(e){let{schema:t,format:o,sorts:n,showDeleteAll:r,disabled:s,parentStore:l,collectionViewStore:u,onChange:S,onDeleteAll:y}=e;window.__c={n:"CollectionSortMenu"};const b=(0,i.O7)(),{device:C}=b,v=!!Object.keys(t).some((e=>!n.find((t=>t.property===e)))),A=r&&n.length>0;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(z,{sorts:n,schema:t,disabled:s,parentStore:l,collectionViewStore:u,onChange:S}),(v||A)&&(0,P.jsxs)(I.Z,{children:[v&&(0,P.jsx)(j.ZP,{popupType:C.isMobile?Z.kQ.SlideUp:Z.kQ.Popup,renderOrigin:e=>(0,P.jsx)(m.Z,{icon:c.R,isGray:!0,title:(0,P.jsx)(p.FormattedMessage,{id:"database.viewSettings.sortTab.newSort",defaultMessage:"Add sort"}),...e}),render:e=>{let i;return i=C.isMobile?{menuType:f.og.ActionSheet}:{menuType:f.og.Popup,width:280,height:287},(0,P.jsx)(F.Z,{...i,children:(0,P.jsx)(x.Z,{schema:t,format:o,getProperties:()=>Object.entries(t).filter((e=>{let[t,o]=e;return!n.find((e=>e.property===t))&&(0,a.bA)(o)})).map((e=>{let[t]=e;return t})),onAccept:o=>{!function(e,t,o,n,i,r){var a;if(!e)return;const s=null===(a=o[e])||void 0===a?void 0:a.type,l=[...n,{property:e,direction:"ascending"}];i(l);const c=R(r);c&&g.wd(t,{action:"create_sort_accept",view_type:c,property_type:s})}(o,b,t,n,S,u),e.close()},inputPlaceholder:h.default.formatMessage(L.inputPlaceholder)})})}}),A&&(0,P.jsx)(m.Z,{icon:d.y,isRed:!0,isGray:!0,title:(0,P.jsx)(p.FormattedMessage,{id:"database.viewSettings.sortTab.deleteAllSorts",defaultMessage:"Delete sort"}),onClick:()=>function(e,t,o,n){t([]),null==n||n();const i=R(o);i&&g.wd(e,{action:"delete_all_sorts",view_type:i})}(b,S,u,y)})]})]})};function R(e){return null==e?void 0:e.getType()}function Q(e,t,o,n,i,r){n(i.map(((o,n)=>n===e?t:o)));const a=R(r);a&&g.wd(o,{action:"update_sort",view_type:a})}function W(e,t,o,n,i){o(n.filter(((t,o)=>o!==e)));const r=R(i);r&&g.wd(t,{action:"delete_sort",view_type:r})}function U(e){let{index:t,onChange:o,sorts:n,collectionViewStore:r}=e;window.__c={n:"MobileDeleteButtonMenuItemComponent"};const a=(0,i.O7)();return(0,P.jsx)(C.Z,{title:(0,P.jsx)("div",{style:{color:s.ZP.red},children:(0,P.jsx)(p.FormattedMessage,{defaultMessage:"Delete",id:"database.viewSettings.sortTab.mobileDeleteButtonTitle"})}),icon:(0,P.jsx)(y.Z,{icon:d.y,styles:{color:s.ZP.red}}),onClick:()=>W(t,a,o,n,r),focused:!1})}function E(e){let{index:t,onChange:o,sorts:n,collectionViewStore:r}=e;window.__c={n:"DesktopDeleteButtonComponent"};const a=(0,i.O7)();return(0,P.jsx)(B.ZP,{render:e=>(0,P.jsx)(k.Z,{icon:l.b,onClick:()=>W(t,a,o,n,r),style:{marginRight:-6},...e}),renderTooltip:()=>(0,P.jsx)(p.FormattedMessage,{defaultMessage:"Remove sort rule",id:"database.sortMenu.deleteButtonTooltip"})})}function G(e){let{sort:t,index:o,schema:n,disabled:a,parentStore:s,collectionViewStore:l,onChange:c,sorts:d}=e;window.__c={n:"SortComponent"};const u=(0,i.O7)(),{device:p}=u,g=(0,r.VK)((()=>R(l)),[l]);return p.isMobile?(0,P.jsxs)(I.Z,{children:[(0,P.jsx)(O,{index:o,sort:t,schema:n,parentStore:s,collectionViewType:g,onChange:(e,t)=>Q(e,t,u,c,d,l)}),!a&&(0,P.jsx)(U,{onChange:c,sorts:d,collectionViewStore:l,index:o})]}):(0,P.jsx)(I.Z,{extraTopPadding:!0,desktopStyle:{padding:"8px 0 0 8px",width:"100%"},children:(0,P.jsx)(K.Z,{showDragHandle:!p.isMobile&&!a,title:(0,P.jsx)("div",{style:{display:"flex",alignItems:"center",flexGrow:1,whiteSpace:"nowrap"},onMouseDown:S.$0,children:(0,P.jsx)(O,{index:o,sort:t,schema:n,parentStore:s,collectionViewType:g,onChange:(e,t)=>Q(e,t,u,c,d,l)})}),right:!a&&(0,P.jsx)(E,{onChange:c,sorts:d,collectionViewStore:l,index:o})})})}function z(e){let{sorts:t,schema:o,disabled:n,parentStore:r,collectionViewStore:a,onChange:s}=e;window.__c={n:"SortsComponent"};const l=(0,i.O7)(),{device:c}=l;if(c.isMobile)return(0,P.jsx)(P.Fragment,{children:t.map(((e,i)=>(0,P.jsx)(G,{schema:o,disabled:n,parentStore:r,collectionViewStore:a,onChange:s,sorts:t,sort:e,index:i},i)))});{const e=t.map(((e,t)=>t.toString()));return e.length>0?(0,P.jsx)("div",{style:{marginBottom:2},children:(0,P.jsx)(V.ZP,{direction:"vertical",keys:e,renderKey:e=>(0,P.jsx)(G,{schema:o,disabled:n,parentStore:r,collectionViewStore:a,onChange:s,sorts:t,sort:t[parseInt(e)],index:parseInt(e)}),onDrop:e=>function(e,t,o,n,i){o(u.oA(e.map((e=>n[parseInt(e)]))));const r=R(i);r&&g.wd(t,{action:"reorder_sorts",view_type:r})}(e,l,s,t,a)})}):null}}}}]);