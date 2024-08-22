"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[5645],{10644:(e,t,o)=>{o.r(t),o.d(t,{AutomationModal:()=>S});var n=o(67294),r=o(480),i=o(86628),a=o(24405),c=o(63362),l=o(82990),s=o(9291),u=o(42922),d=o(1743),p=o(50506),m=o(89728),f=o(31278),h=o(65187),g=o(68657),x=o(63474),C=o(80444),v=o(58454),y=o(68373),b=o(85893);const k=(0,s.defineMessages)({confirmationDialogAriaLabel:{defaultMessage:"Confirmation",id:"automations.ConfirmationDialog.ariaLabel"}});function S(){window.__c={n:"AutomationModal"};const e=(0,i.VK)((()=>v.Z.state),[]),t=(0,r.Fy)(),o=(0,i.VK)((()=>t.isPhone),[t]),l=(0,a.yK)((e=>({innerStyle:{padding:24,width:o?"calc(100% - 20px)":320}})),[o]),s=(0,x.D)(),u=(0,i.VK)((()=>{var e;return null===(e=C.default.state.currentSpaceViewStore)||void 0===e?void 0:e.getSpaceId()}),[]),d=(0,n.useCallback)((e=>{v.Z.setState({open:!1,result:e});const t=v.Z.state;(0,c.W5)(s,{automation_id:t.open&&t.recordStore instanceof y.Mz?t.recordStore.id:void 0,option:e})}),[s]),m=(0,n.useCallback)((()=>d("cancel")),[d]),f=function(){const e=(0,i.VK)((()=>v.Z.state),[]),[t,o]=(0,n.useReducer)(((e,t)=>e+1),1),r=(0,n.useRef)(void 0);return(0,n.useEffect)((()=>{e.open&&e.format!==r.current&&(o(void 0),r.current=e.format)}),[e,r]),t}();return(0,b.jsx)(p.Z,{open:e.open,keepFocus:!0,innerStyle:l.innerStyle,disableAnimation:!0,onDismiss:m,render:()=>e.open&&u&&(0,b.jsx)(M,{id:`${f}`,modalState:e,onDismiss:d},`${f}`)})}function M(e){window.__c={n:"OpenAutomationModal"};const{id:t,modalState:o,onDismiss:r}=e,{icon:i}=o.format,c=(0,s.useIntl)(),p=(0,n.useRef)(null);(0,n.useEffect)((()=>{null!==p.current&&p.current.focus()}),[]);const x=(0,a.yK)((e=>({wrap:{display:"flex",flexDirection:"column"},buttonWrap:{display:"flex",flexDirection:"column",gap:10,marginTop:10},textWrap:{whiteSpace:"pre-wrap",wordBreak:"break-word",textAlign:"center",fontWeight:l.Z.fontWeight.medium,marginTop:10,marginBottom:10,display:"flex",flexDirection:"column",alignItems:"center"},icon:{marginBottom:10},cancelButton:{justifyContent:"center"}})),[]),{store:C}=(0,g.Cl)({initialValue:o.format.text,onChange:()=>{}}),v=[(0,b.jsx)(u.Z,{isLarge:!0,onClick:()=>r("continue"),ref:p,children:o.format.continueButtonText},"continue"),(0,b.jsx)(m.Z,{isLarge:!0,onClick:()=>r("cancel"),isLightGray:!0,style:x.cancelButton,children:o.format.cancelButtonText},"cancel")],y=`automation-modal-dialog-${t}`;return(0,b.jsx)(d.Z,{capture:!0,allowEsc:!0,children:(0,b.jsxs)("div",{"aria-modal":"true","aria-label":c.formatMessage(k.confirmationDialogAriaLabel),"aria-describedby":y,role:"dialog",style:x.wrap,children:[(0,b.jsxs)("div",{style:x.textWrap,children:[i&&(0,b.jsx)("div",{style:x.icon,children:(0,b.jsx)(f.Z,{size:50,icon:{icon:i,pointer:o.recordStore.pointer},disabled:!0,isEmptyPage:!1,bucket:"public",onChange:()=>{}})}),(0,b.jsx)("div",{id:y,children:(0,b.jsx)(h.Z,{disabled:!0,store:C,parentStore:o.recordStore})})]}),(0,b.jsx)("div",{style:x.buttonWrap,children:v})]})})}},68657:(e,t,o)=>{o.d(t,{Cl:()=>p,NY:()=>m});var n=o(67294),r=o(480),i=o(86628),a=o(72126),c=o(4615),l=o(21202),s=(o(70203),o(84398)),u=o(77080),d=o(68373);function p(e){const{initialValue:t,onChange:o,source:u="title",parentCollection:p}=e,m=(0,r.O7)(),f=(0,s.$)("formulaPrototypeHelpers.useMockTextStore",{isMockTextStore:!0,overrideDefaultRecordCache:!0}),h=function(e){const{initialValue:t,inMemoryRecordCache:o,source:i,parentCollection:a}=e,s=(0,r.O7)(),u=(0,n.useMemo)((()=>t),[]);return(0,n.useMemo)((()=>{const e={id:(0,c.ZP)(),table:l.iU};o.setRecord({pointer:e,userId:s.currentUser.id},{value:{alive:!0,id:e.id,parent_id:(null==a?void 0:a.id)??c._6,parent_table:"block",properties:{[i]:u},space_id:(null==a?void 0:a.getSpaceId())??c._6,type:"page",version:0},role:"editor"});const t=new d.ST({environment:s,inMemoryRecordCache:o,path:["properties",i],pointer:e,userId:s.currentUser.id});return o.emitRecord(e,[]),t}),[s,o,u,a,i])}({initialValue:t,inMemoryRecordCache:f,source:u,parentCollection:p}),g=(0,n.useRef)(t),x=(0,n.useCallback)((e=>{const t=m.currentUser.id,o=h.getRecordStoreAtRootPath();if(o instanceof d.G){const n=o.getValue();n&&(f.setRecord({pointer:h.pointer,userId:t},{role:"editor",value:{...n,properties:{...null==n?void 0:n.properties,[u]:e}}}),f.emitRecord(h.pointer,[]))}}),[m.currentUser.id,h,f,u]);return(0,i.VK)((()=>{const e=h.getValue();a.Xy(g.current,e)||(g.current=e,null==o||o(e))}),[h,o]),{store:h,setValue:x}}function m(){return u.default.checkGate("formula_buttons")}},84398:(e,t,o)=>{o.d(t,{$:()=>a});var n=o(67294),r=o(26263),i=o(480);function a(e,t){const{cacheFallback:o,isMockTextStore:a,isTemporaryData:c,overrideDefaultRecordCache:l}=t??{},s=(0,i.O7)(),{inMemoryRecordCache:u}=s.defaultRecordCache,d=(0,n.useMemo)((()=>{const t=new r.Z({isTemporaryData:Boolean(c),name:e});return t.isMockTextStore=Boolean(a),o&&t.addCacheFallback(o),l&&u.addCacheOverride(t),t}),[o,u,a,c,e,l]);return(0,n.useEffect)((()=>function(){o&&d.removeCacheFallback(o),l&&u.removeCacheOverride(d)}),[o,u,d,l]),d}}}]);