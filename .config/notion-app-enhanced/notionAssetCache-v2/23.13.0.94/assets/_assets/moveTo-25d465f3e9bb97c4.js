"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[4670],{54814:(e,t,a)=>{a.d(t,{nc:()=>d,rG:()=>i});a(57658);var s=a(6287),n=a(98165),o=a(79797),r=a(54642);async function i(e){let{environment:t,spaceId:a,databaseType:n,parentStore:i}=e;if(!a)return;const d=await r.getTypedDatabases(t,{spaceId:a,databaseType:n});return"success"===d.type?d.data.result.map((e=>o.NW.createChildStore(i,{table:s.v,id:e.collectionId}))):void 0}async function d(e){let{environment:t,spaceId:a,databaseTypes:s,parentStore:o,teamId:r}=e;const d=[];return await Promise.all(s.map((async e=>{const s=await async function(e){let{environment:t,spaceId:a,databaseType:s,parentStore:o,teamId:r}=e;const d=await i({spaceId:a,environment:t,databaseType:s,parentStore:o});if(!d)return!1;for(const i of d){const e=n.VP(i);if(e&&e.id===r)return!0}return!1}({environment:t,spaceId:a,databaseType:e,parentStore:o,teamId:r});s&&d.push(e)}))),d}},60442:(e,t,a)=>{a.d(t,{Z:()=>r});a(67294);var s=a(82990),n=a(47853),o=a(85893);const r=function(e){let{imageURL:t,imageWidth:a,imageHeight:s,caption:r,title:d}=e;if(t){const e=(0,n.D)(t);return(0,o.jsxs)("div",{style:{width:a||200,marginTop:4,marginBottom:4},children:[(0,o.jsx)("div",{style:{width:"100%",height:s||100,borderRadius:4,backgroundImage:`url(${e})`,backgroundSize:"cover",marginBottom:6}}),(0,o.jsx)(i,{caption:r,title:d})]})}return(0,o.jsx)(i,{caption:r,title:d,style:{width:a}})};function i(e){let{style:t,caption:a,title:n}=e;return(0,o.jsxs)("div",{style:{whiteSpace:"normal",lineHeight:1.4,...t},children:[n&&(0,o.jsx)("header",{style:{fontWeight:s.Z.fontWeight.bold,marginBottom:4},children:n}),a]})}},83564:(e,t,a)=>{a.r(t),a.d(t,{MoveOrDuplicateProgress:()=>y.Z,MoveToMenuRenderer:()=>m,MoveToOrCreateMenu:()=>s.Z,MoveToSnackbarButtons:()=>f.Z});var s=a(96065),n=(a(67294),a(480)),o=a(86628),r=a(73990),i=a(11302),d=a(91851),c=a(53437),l=a(75770),p=a(42330),u=a(85893);function v(){window.__c={n:"MoveToMenuModal"};const e=(0,n.O7)(),t=(0,o.VK)((()=>{const e=p.ZP.state;if(e.isOpen)return{autocompleteQuery:e.autocompleteQuery,targets:e.targets,isAddTo:e.isAddTo,isOpen:e.isOpen}}),[]);if(void 0===t||!t.isOpen)return null;const a=()=>{if(p.ZP.state.isOpen){const{flowId:t,targets:a,moveToContext:s}=p.ZP.state;r.A6(e,{from:s,render_type:"web",target_block_ids:a.map((e=>e.id)),flowId:t})}i.xv(e)},{autocompleteQuery:c,targets:v,isAddTo:m}=t,f=e.device.isMobile;return(0,u.jsx)(s.Z,{captureSelection:!0,restoreSelection:!f,autocompleteQuery:c,targets:v,onAutocompleteQueryChange:t=>{if(p.ZP.state.isOpen){p.ZP.setState({...p.ZP.state,autocompleteQuery:t});const{flowId:a,moveToContext:s}=p.ZP.state;r.a6(e,{flowId:a,from:s,newValue:t})}},onAccept:async t=>{const s=p.ZP.state.isOpen&&p.ZP.state.targets||[],n=await(0,l.ed)({environment:e,blocks:s,from:"moveTo",moveToArgs:{moveToValue:t,destination:(0,l.uw)(t)}});if(!n.confirmed)return void a();for(const r of s){const t=await d.NN({environment:e,block:r,action:"move"});"user_canceled"===t?a():t.length>1&&p.ZP.state.isOpen&&p.ZP.setState({...p.ZP.state,targets:t})}if(p.ZP.state.isOpen){const{flowId:a,targets:s,moveToContext:n,openedTimeMs:o,autocompleteQuery:i}=p.ZP.state,d="space-private-pages"===t.type?-1:s.findIndex((e=>e.id===t.id));r.mf(e,{from:n,render_type:"web",type:t.type,target_block_ids:s.map((e=>e.id)),time_to_select_ms:Date.now()-o,selected_item_index:d,query_length:i.length,flowId:a})}const{shouldClearPagePermissions:o}=n;(async t=>{let{value:a,shouldClearPagePermissions:s}=t;await i.pB({environment:e,value:a,useSudoMode:p.ZP.state.isOpen&&p.ZP.state.useSudoMode,renderType:"web",shouldClearPagePermissions:s})})({value:t,shouldClearPagePermissions:o})},onCancel:a,desktopWidth:330,isAddTo:m,isCreateIn:!1})}function m(){window.__c={n:"MoveToMenuRenderer"};const e=(0,n.O7)(),t=(0,o.VK)((()=>e.device.isPhone),[e]),a=(0,o.VK)((()=>{const e=p.ZP.state;if(e.isOpen)return{renderType:e.renderType,isOpen:e.isOpen,rect:e.rect}}),[]);return(0,u.jsx)(c.ZP,{popupType:t?c.ZP.PopupType.SlideUp:c.ZP.PopupType.Popup,alignmentToOrigin:c.ZP.Alignment.Start,open:void 0!==a&&"mobileNative"!==a.renderType&&a.isOpen,render:()=>(0,u.jsx)(v,{}),originRect:null==a?void 0:a.rect,onDismiss:()=>{if(p.ZP.state.isOpen){const{flowId:t,targets:a,moveToContext:s}=p.ZP.state;r.A6(e,{from:s,render_type:"web",target_block_ids:a.map((e=>e.id)),flowId:t})}i.xv(e)}})}m.displayName="MoveToMenuRenderer";var f=a(98110),y=a(91948)},62395:(e,t,a)=>{a.d(t,{n:()=>s});const s=a(49085).default.createValue(void 0)},63334:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(49085);class n extends s.default{getInitialState(){return{}}}const o=n},40215:(e,t,a)=>{a.d(t,{F:()=>f});var s=a(86628),n=a(94714),o=a(59054),r=a(6287),i=a(54814),d=a(23924),c=a(77907),l=a(75822),p=a(62395),u=a(77080),v=a(42330),m=a(79797);function f(e){let{environment:t,spaceStore:a,joinedTeamIds:f,parentStore:y,moveToTargets:g,overrideDatabaseType:C}=e;const h=(0,s.VK)((()=>{const e=null==a?void 0:a.id;if(e)return function(e){if(!p.n.state)return;if(e!==p.n.state.spaceId)return;return p.n.state.typedDatabases}(e)}),[null==a?void 0:a.id]),T=(0,s.VK)((()=>u.default.checkGate("typed_move_to_improved_default_results")),[]),P=(0,c.useDependency)(c.deps.searchActions),[{value:Z,status:w}]=(0,o.r5)((async()=>{if(h)return h;if(!a||!y)return;const e=v.ZP.getTargetsDatabaseType()??C;if(!e)return;if("resolved"!==P.status)return;const s=P.value;let o=[];if(T){const n=((await s.searchCollectionsWithRecents({environment:t,query:"",limit:20,databaseType:[e],spaceStore:a,parentStore:a,collectionViewBlockStore:void 0,searchSessionId:v.ZP.state.isOpen?v.ZP.state.flowId:void 0})).results||[]).map((e=>m.NW.createChildStore(y,{table:r.v,id:e})));o=(0,d.qJ)({typedDatabases:n,blocksToFilterParents:g})}else{const s=await i.rG({environment:t,spaceId:a.id,databaseType:e,parentStore:y})??[];o=(0,d.mL)({environment:t,typedDatabases:s,spaceStore:a,joinedTeamIds:f})}return p.n.setState({typedDatabases:o,spaceId:a.id}),v.ZP.setState({...v.ZP.state,variant:n.ii}),o}),[h,a,T,t,g,C,y,f,P.status,P.value],{debounce:l.vp,throttle:l.vp});return h?{success:!0,typedDatabases:h}:"resolved"===w&&Z?{success:!0,typedDatabases:Z}:{success:!1}}},16184:(e,t,a)=>{a.d(t,{Q:()=>o});a(67294);var s=a(45238),n=a(85893);const o=(0,s.I)("lockedFilled",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M4.69141 14.6338H11.3018C12.2178 14.6338 12.6689 14.1826 12.6689 13.1914V8.08496C12.6689 7.18945 12.293 6.72461 11.541 6.64941V4.96094C11.541 2.36328 9.81152 1.1123 7.99316 1.1123C6.18164 1.1123 4.45215 2.36328 4.45215 4.96094V6.67676C3.74805 6.78613 3.32422 7.2373 3.32422 8.08496V13.1914C3.32422 14.1826 3.77539 14.6338 4.69141 14.6338ZM5.75098 4.83105C5.75098 3.22461 6.76953 2.35645 7.99316 2.35645C9.2168 2.35645 10.2422 3.22461 10.2422 4.83105V6.64258L5.75098 6.64941V4.83105Z"})})},22686:(e,t,a)=>{a.d(t,{f:()=>o});a(67294);var s=a(45238),n=a(85893);const o=(0,s.I)("person",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M7.7832 8.00195C9.27344 8.00195 10.5381 6.67578 10.5381 4.95996C10.5381 3.28516 9.2666 2 7.7832 2C6.29297 2 5.01465 3.30566 5.02148 4.97363C5.02148 6.67578 6.28613 8.00195 7.7832 8.00195ZM3.51758 14.3594H12.0352C13.1631 14.3594 13.5527 14.0176 13.5527 13.3887C13.5527 11.6318 11.3242 9.21191 7.77637 9.21191C4.23535 9.21191 2 11.6318 2 13.3887C2 14.0176 2.38965 14.3594 3.51758 14.3594Z"})})},14734:(e,t,a)=>{a.d(t,{X:()=>o});a(67294);var s=a(45238),n=a(85893);const o=(0,s.I)("personCrossedOut",{viewBox:"0 0 44 44",svg:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{d:"M5.4857 44H0L44 8.56549V13.0061L5.4857 44Z"}),(0,n.jsx)("path",{d:"M39.8048 44H8.66491L25.6448 30.4378C26.9394 30.6489 28.1581 30.9719 29.3009 31.4067C31.5362 32.2374 33.4346 33.326 34.9964 34.6723C36.5725 36.0044 37.7761 37.4367 38.6071 38.9692C39.4525 40.5018 39.8752 41.9555 39.8752 43.3305C39.8752 43.5675 39.8517 43.7906 39.8048 44Z"}),(0,n.jsx)("path",{d:"M30.3971 16.7973C30.3971 16.8668 30.3965 16.9359 30.3952 17.0048L19.3828 25.9192C18.7467 25.7134 18.1339 25.4228 17.5446 25.0473C16.2408 24.2023 15.1876 23.0708 14.3853 21.6528C13.5972 20.2205 13.2032 18.6163 13.2032 16.8403C13.2032 15.0929 13.5972 13.5174 14.3853 12.1137C15.1876 10.7101 16.2408 9.60007 17.5446 8.78366C18.8485 7.96725 20.267 7.55905 21.8001 7.55905C23.3332 7.55905 24.7517 7.96009 26.0556 8.76218C27.3595 9.56426 28.4054 10.6671 29.1935 12.0708C29.9959 13.4601 30.3971 15.0356 30.3971 16.7973Z"})]})})},35840:(e,t,a)=>{a.d(t,{R:()=>o,T:()=>n});a(67294);var s=a(45238);const n=(0,a(85893).jsx)("path",{d:"M.281 6.438c0-.875.164-1.696.492-2.461a6.484 6.484 0 011.375-2.032A6.237 6.237 0 016.64.078 6.2 6.2 0 019.11.57c.77.328 1.447.787 2.03 1.375a6.374 6.374 0 011.368 2.032c.333.765.5 1.586.5 2.46 0 .688-.107 1.342-.32 1.961a6.28 6.28 0 01-.868 1.696l3.563 3.578c.11.104.19.226.242.367.057.14.086.29.086.445 0 .22-.05.417-.149.594a1.122 1.122 0 01-1 .57c-.156 0-.307-.028-.453-.086a1.058 1.058 0 01-.382-.25l-3.586-3.585c-.5.333-1.047.596-1.641.789a6.089 6.089 0 01-1.86.28 6.237 6.237 0 01-2.468-.491 6.4 6.4 0 01-2.024-1.367A6.509 6.509 0 01.773 8.913a6.256 6.256 0 01-.492-2.476zm1.664 0c0 .65.12 1.26.36 1.828a4.775 4.775 0 001.015 1.5c.433.427.933.763 1.5 1.007a4.548 4.548 0 001.82.368c.652 0 1.261-.123 1.829-.368a4.747 4.747 0 002.508-2.507 4.567 4.567 0 00.367-1.829c0-.645-.123-1.252-.367-1.82a4.776 4.776 0 00-1.016-1.5A4.578 4.578 0 008.469 2.11a4.567 4.567 0 00-1.828-.367c-.646 0-1.253.123-1.82.367a4.667 4.667 0 00-1.5 1.008c-.433.432-.772.932-1.016 1.5a4.633 4.633 0 00-.36 1.82z"}),o=(0,s.I)("search",{viewBox:"0 0 16 16",svg:n})}}]);