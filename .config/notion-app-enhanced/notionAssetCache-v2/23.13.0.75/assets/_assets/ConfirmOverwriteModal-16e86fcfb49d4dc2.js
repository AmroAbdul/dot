"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[1346],{34236:(e,t,o)=>{o.r(t),o.d(t,{ConfirmOverwriteModal:()=>y});var l=o(67294),a=o(24405),i=o(64275),n=o(60291),r=o(97880),s=o(82990),d=o(9291),c=o(50506),p=o(89728),u=o(85893);function y(e){let{open:t,onClose:o,onConfirm:y,propertyName:f,collectionName:g,sourceAction:h}=e;window.__c={n:"ConfirmOverwriteModal"};const m=(0,a.yK)((e=>({closeButtonWrapperStyle:{display:"flex",justifyContent:"flex-end"},closeButtonStyle:{fontWeight:500,cursor:"pointer",alignItems:"center",borderRadius:"50%",backgroundColor:e.buttonHoveredBackground,fontSize:14,height:18,width:18,display:"flex",justifyContent:"center",color:e.lightIconColor},syncButtonStyle:{display:"flex",justifyContent:"center",userSelect:"none"},headerStyle:{fontSize:14,paddingTop:6,textAlign:"center",fontWeight:600,userSelect:"none"},lightDescriptionTextStyle:{color:e.mediumTextColor,textAlign:"center",paddingTop:8,fontWeight:400,userSelect:"none",fontSize:12},mainDescriptionTextStyle:{paddingTop:4,textAlign:"center",fontWeight:500,userSelect:"none",fontSize:12},aiPurpleColor:{color:e.aiPurpleColor},confirmButtonWrap:{border:`1px solid ${e.outlineButtonBorder}`,marginTop:20,paddingX:180,display:"flex",justifyContent:"center",cursor:"pointer",height:32},confirmButton:{...s.Z.textOverflowStyle},cancelButtonStyle:{display:"flex",justifyContent:"center",fontWeight:500,color:e.lightTextColor,paddingTop:16,cursor:"pointer",fontSize:12}})),[]);let x,S,v;"auto_update"===h?(x=(0,u.jsx)(d.FormattedMessage,{defaultMessage:"{hasPropertyName, select, true {Turn on auto-update for “{propertyName}”?} other {Turn on auto-update for this property?}}",id:"database.viewSettings.propertyTab.aiAutofill.confirmOverwriteModal.turnonAutoUpdate",values:{hasPropertyName:Boolean(f),propertyName:f}}),S=(0,u.jsx)(d.FormattedMessage,{defaultMessage:"The property value will be updated a few minutes after significant page edits.",id:"database.viewSettings.propertyTab.aiAutofill.confirmOverwriteModal.propertyValueUpdated"}),v=(0,u.jsx)(d.FormattedMessage,{defaultMessage:"Turn on auto-update",id:"database.viewSettings.propertyTab.aiAutofill.confirmOverwriteModal.TurnOnAutoUpdates"})):"fill_all_pages"===h?(x=(0,u.jsx)(d.FormattedMessage,{defaultMessage:"{hasNames, select, true {Update “{propertyName}” for all pages in “{collectionName}”?} other {Update this property for all pages?}}",id:"database.viewSettings.propertyTab.aiAutofill.confirmOverwriteModal.updateAllPages",values:{hasNames:Boolean(f)&&Boolean(g),propertyName:f,collectionName:g}}),v=(0,u.jsx)(d.FormattedMessage,{defaultMessage:"{hasCollectionName, select, true {Update all pages in {collectionName}} other {Update all pages}}",id:"database.viewSettings.propertyTab.aiAutofill.confirmOverwriteModal.updateAllPagesButton",values:{hasCollectionName:Boolean(g),collectionName:g}})):(0,r.t1)(h);const w=(0,l.useCallback)((()=>(0,u.jsxs)("div",{style:{padding:24,width:300},children:[(0,u.jsx)("div",{style:m.closeButtonWrapperStyle,children:(0,u.jsx)("div",{style:m.closeButtonStyle,onClick:o,children:(0,i.D)({height:12,width:12})})}),(0,u.jsx)("div",{style:m.syncButtonStyle,children:(0,n.b)({height:32,width:32,color:m.aiPurpleColor.color})}),(0,u.jsx)("div",{style:m.headerStyle,children:x}),S&&(0,u.jsx)("div",{style:m.lightDescriptionTextStyle,children:S}),(0,u.jsx)("div",{style:m.mainDescriptionTextStyle,children:(0,u.jsx)(d.FormattedMessage,{defaultMessage:"This will replace all existing values, including manual edits.",id:"database.viewSettings.propertyTab.aiAutofill.confirmOverwriteModal.willReplace"})}),(0,u.jsx)(p.Z,{style:m.confirmButtonWrap,onClick:y,children:(0,u.jsx)("span",{style:m.confirmButton,children:v})}),(0,u.jsx)("div",{style:m.cancelButtonStyle,onClick:o,children:(0,u.jsx)(d.FormattedMessage,{defaultMessage:"Cancel",id:"database.viewSettings.propertyTab.aiAutofill.confirmOverwriteModal.cancelButton"})})]})),[m.closeButtonWrapperStyle,m.closeButtonStyle,m.syncButtonStyle,m.aiPurpleColor.color,m.headerStyle,m.lightDescriptionTextStyle,m.mainDescriptionTextStyle,m.confirmButtonWrap,m.confirmButton,m.cancelButtonStyle,o,x,S,y,v]);return(0,u.jsx)(c.Z,{open:t,render:w,onDismiss:o})}}}]);