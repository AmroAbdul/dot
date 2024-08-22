"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[7218],{34187:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(49085);class i extends o.default{getInitialState(){return{open:!1}}}const s=new i},57218:(e,t,n)=>{n.r(t),n.d(t,{CollapsibleTextSliceTreeWrapper:()=>g});n(57658);var o=n(45060),i=n(92595),s=n(43993);function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=r(e,t);return l(n).join("\n")}function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a(e,t,{latestRandomId:0,uuidMap:t.uuidMap??{},instanceIdsShown:new Set},0)}function d(e,t){return t[e]??e}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const{simplifiedId:n,hasShownInstance:o,clock:i,textValue:s,simplifiedItems:c,children:r}=e,d=[];if(d.push(`${t}- id: ${n}`),o||d.push(`${t}  clock: ${i}`),d.push(`${t}  text: ${JSON.stringify(s)}`),d.push(`${t}  items: ${c}`),r.length>0){d.push(`${t}  children:`);for(const e of r)d.push(...l(e,`${t}  `))}return d}function a(e,t,n,o){const i=e.getTextSlice(),c=i.textInstanceId;t.isInstanceIdRandom&&!n.uuidMap[c]&&(n.uuidMap[c]=`[random UUID #${++n.latestRandomId}]`);const r=d(i.textInstanceId,n.uuidMap),l=n.instanceIdsShown.has(c),u=i.opClock.getValue();l||n.instanceIdsShown.add(c);const p={simplifiedId:r,clock:u,textValue:i.getTextValue(),simplifiedItems:Array.from(i.iterateItems({includeDeleted:!0,includeEndItem:!0})).map((e=>function(e,t){const n=e.toString();if(e instanceof s.Jy){const o=`${d(e.id[0],t)}@${e.id[1]}`;return n.replace(" ",` ${o} `)}if(e instanceof s.JE){const o=`${d(e.id[0],t)}@${e.id[1]}`;return n.replace("]",` ${o}]`)}return n}(e,n.uuidMap))).join(" "),hasShownInstance:l,children:[],depth:o};for(const s of e.children)p.children.push(a(s,t,n,o+1));return p}var u=n(46227),p=n(82798),f=n(27724),h=n(34187);const m=new class{constructor(e){this.nextId=0,this.uuidMap=e}pseudonymizeSessions(e){for(const t of e.getTextSlice().iterateItems({includeDeleted:!0,includeEndItem:!0}))if(t instanceof s.Jy||t instanceof s.JE){const e=t.id[0];this.uuidMap[e]||(this.uuidMap[e]=this.zeroOrPositiveIntToLetters(this.nextId++))}for(const t of e.children)this.pseudonymizeSessions(t)}zeroOrPositiveIntToLetters(e){const t="A".codePointAt(0)-"0".codePointAt(0);return e.toString().split("").map((e=>String.fromCodePoint(e.charCodeAt(0)+t))).join("")}}({});function I(e,t){m.pseudonymizeSessions(e);return S(r(e,{...t,uuidMap:{...m.uuidMap,...null==t?void 0:t.uuidMap}}))}i.exposeDebugValue("toggleCrdtDebuggingOverlay",(()=>{const e=!h.Z.state.open;h.Z.setState({open:e}),console.log(`CRDT debugging overlay is now ${e?"enabled":"disabled"}.`)})),i.exposeDebugValue("visualizeTextSliceTreesOfSelectedBlocks",(()=>{const e=f.default.state.stores,t={};e.forEach(((e,n)=>{t[e.id]=`block${n+1}`}));for(const n of e){const e=n.getTextSliceTree();if(e){const o=c(e,{uuidMap:t});console.log(`TextSliceTree for ${t[n.id]} (${n.id}):\n\n`,o)}}}));function S(e){const{simplifiedId:t,hasShownInstance:n,clock:i,textValue:s,simplifiedItems:c,children:r,depth:d}=e,{ol:a,li:u,span:f,div:h,objectSummary:m}=o.TI,I=function(e){const t="id"===e?"•":" ";for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return u({},f({},`${t} `),f({style:"font-weight: bold"},`${e}: `),...o)},g=[];for(const o of r){const e=h({},d>4?l(o,"    ").join("\n"):(0,p.TO)(S(o)));g.push(e)}return a({style:"list-style-type: none; padding-left: 2em"},I("id",t),n?void 0:I("clock",i.toString()),I("text",m(s,{asJSON:!0})),I("items",c),g.length>0?I("children",...g):void 0)}(0,o.Rw)({id:"textSliceTreeFormatter",canFormat:e=>Boolean(e&&e instanceof u.ZP),header(e){const{span:t,CONTAINER_STYLE:n,object:i}=o.TI;return t(n,t({},i(e,{useDefaultFormatter:!0}),`(${T(e)})`),(0,p.TO)(I(e)))},hasBody:()=>!1,body:()=>null});class g{constructor(e){this.textSliceTree=e}}function T(e){let t=0;for(const n of e.iterateTextSliceTrees())t++;return t}(0,o.Rw)({id:"collapsibleTextSliceTreeWrapperFormatter",canFormat:e=>Boolean(e&&e instanceof g),header(e){const{span:t}=o.TI;return t({},`TextSliceTree(${T(e.textSliceTree)})`)},hasBody:()=>!0,body:e=>I(e.textSliceTree)})}}]);