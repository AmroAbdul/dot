"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[1760],{18168:(e,t,r)=>{r.d(t,{Z:()=>a});r(67294);var n=r(24405),i=r(64921),s=r(85893);function o(e){window.__c={n:"SegmentedItemView"};const{isFirst:t,isLast:r,isSelected:o,item:a,itemStyle:d,innerStyle:l,children:c,colors:u,onClick:p}=e,{isDisabled:g}=a,m=(0,n.yK)((e=>{const n=(null==u?void 0:u.selectedOutline)??e.blueColor,i=(null==u?void 0:u.unselectedOutline)??e.accentColors.gray[100];return{SegmentedItem:{alignItems:"center",background:o?null==u?void 0:u.selectedBackground:void 0,borderBottomLeftRadius:t?3:0,borderBottomRightRadius:r?3:0,borderColor:o?n:i,borderStyle:"solid",borderTopLeftRadius:t?3:0,borderTopRightRadius:r?3:0,borderWidth:1,cursor:g?void 0:"pointer",display:"flex",flexBasis:"50%",marginLeft:t?0:-1,padding:0,userSelect:"none",zIndex:o?10:0,...d},Inner:{borderBottomLeftRadius:t?2:0,borderBottomRightRadius:r?2:0,borderColor:o?n:"transparent",borderStyle:"solid",borderTopLeftRadius:t?2:0,borderTopRightRadius:r?2:0,borderWidth:1,display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",padding:"12px 20px",textAlign:"center",width:"100%",...l}}}),[null==u?void 0:u.selectedBackground,null==u?void 0:u.selectedOutline,null==u?void 0:u.unselectedOutline,t,r,o,g,d,l]);return(0,s.jsx)(i.Z,{ariaLabel:a.ariaLabel,"aria-pressed":o,onClick:()=>{p&&p(a.key)},style:m.SegmentedItem,disabled:g,children:(0,s.jsx)("div",{style:m.Inner,children:c})})}function a(e){window.__c={n:"SegmentedButton"};const{items:t=[],itemStyle:r,innerStyle:i,value:a,onChange:d,colors:l}=e,c=(0,n.yK)((e=>({SegmentedButton:{background:e.cardContentBackground,display:"flex",width:"100%"}})),[]);return 0===t.length?null:(0,s.jsx)("div",{style:c.SegmentedButton,children:t.map(((e,n)=>(0,s.jsx)(o,{isFirst:0===n,isLast:n===t.length-1,isSelected:e.key===a,item:e,itemStyle:r,innerStyle:i,colors:l,onClick:d,children:e.render()},e.key)))})}},34310:(e,t,r)=>{r.d(t,{Q:()=>F});r(67294);var n=r(480),i=r(86628),s=r(24405),o=r(3791),a=r(47425),d=r(97880),l=r(82990),c=r(9291),u=r(63594),p=r(43250),g=r(38755),m=r(80444),f=r(27242),h=r(70060),x=r(18485),y=r(47910),b=r(76088),M=r(88280),S=r(11066),v=r(85893);const j=function(e){window.__c={n:"AddOnDiscountBadge"};const t=function(e){const t=e?"0px 14px":"12px 0px 0px 0px";return(0,s.yK)((e=>({sharedStyleForDiscountBadge:{display:"inline-flex",alignItems:"center",borderRadius:4,padding:t},innerStyleForDiscountBadge:{padding:"4px 6px",borderRadius:4,color:e.text.purple,background:e.accentColors.purple[50],fontWeight:400,fontSize:14,lineHeight:"16px",letterSpacing:"0.04em",whiteSpace:"nowrap"}})),[t])}(e.padHorizontally);return(0,v.jsx)(S.Z,{style:{...t.sharedStyleForDiscountBadge},disabled:!0,children:(0,v.jsx)("div",{style:{...t.innerStyleForDiscountBadge},children:(0,v.jsx)(c.FormattedMessage,{id:"SpaceSubscriptionPlansAndAddOns.discount.fiftyPercent.label",defaultMessage:"Special 50% off"})})})};function T(e){window.__c={n:"OneLiner"};const{onlyShowAddOn:t,addOnFeature:r,subscriptionTier:s,isTrial:o}=e,a=(0,n.O7)(),l=(0,i.VK)((()=>{const e=m.default.state.currentSpaceStore;if(e)return(0,g.rn)(a,e)}),[a]),p=(0,i.VK)((()=>!u.Z.state&&t&&"ai"===r),[t,r]),f=(0,b.P)();if(!l)return null;if(t&&r)switch(r){case"ai":return(0,v.jsxs)(v.Fragment,{children:[p&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c.FormattedMessage,{id:"addOnUpgrade.confirmation.description.outOfFreeAiResponses",defaultMessage:"Your workspace has used all of its free AI responses."})," "]}),(0,v.jsx)(c.FormattedMessage,{id:"addOnUpgrade.confirmation.description.admins",defaultMessage:"Go unlimited with Notion AI for all members in {spaceName}.",values:{spaceName:l}})]});default:(0,d.t1)(r)}switch(s){case"personal":return(0,v.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.oneLiner.personal",defaultMessage:"For power users who want to do even more."});case"plus":case"business":return o?(0,v.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.oneLiner.trial",defaultMessage:"Collaborate with unlimited people with full access to features such as file uploads and automations. {isMmOrEnt, select, true {30} other {14}} days for free. Cancel the trial stress-free at any time.",values:{isMmOrEnt:f}}):(0,v.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.oneLiner.team",defaultMessage:"Write, plan, and work together in one spot."});case"enterprise":return(0,v.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.oneLiner.enterprise",defaultMessage:"Controls and support to run your company."});default:(0,d.t1)(void 0)}}function w(e){const{onlyShowAddOn:t,addOnFeature:r,subscriptionTier:n,type:i,isTrial:s}=e;if(i===f.U.TargetSpace)return(0,v.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.targetSpace.title.enterprise",defaultMessage:"Claim & Upgrade to Enterprise"});if(t&&r)switch(r){case"ai":return(0,v.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.ai.addOn.title",defaultMessage:"Get more Notion AI"});default:(0,d.t1)(r)}return(0,a.QM)(n)||(0,a.iJ)(n)?null:{personal:(0,v.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.title.personal",defaultMessage:"Upgrade to Personal Pro"}),plus:s?(0,v.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.title.plusTrial",defaultMessage:"Try the Plus plan for free"}):(0,v.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.title.plus",defaultMessage:"Upgrade to Plus"}),business:s?(0,v.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.title.businessTrial",defaultMessage:"Try the Business plan for free"}):(0,v.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.upgradeToBusinessDialog.businessPlan",defaultMessage:"Upgrade to Business"}),enterprise:(0,v.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.title.enterprise",defaultMessage:"Upgrade to Enterprise"}),team_free:(0,v.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.title.teamFree",defaultMessage:"Upgrade to Team Trial"})}[n]}function F(e){window.__c={n:"CheckoutPlanHeader"};const{subscriptionTier:t,onlyShowAddOn:r,addOnFeature:a,type:d,isTrial:c}=e,u=(0,s.yK)((e=>({primaryTextStyle:{fontWeight:l.Z.fontWeight.bold,fontSize:20,lineHeight:1.1,marginTop:16,marginBottom:6,padding:0},secondaryTextStyle:{fontWeight:l.Z.fontWeight.regular,fontSize:16,lineHeight:1.4,color:e.mediumTextColor}})),[]),g=(0,s.Fg)(),m=(0,n.O7)(),b=(0,y.m)(M.subscriptionDataStoreInstance),S=(0,i.VK)((()=>{var e;return(0,h.px)(m)&&!(0,o.de)(null===(e=M.subscriptionDataStoreInstance.state)||void 0===e?void 0:e.addOns)&&b&&d!==f.U.TargetSpace}),[b,m,d]);return(0,v.jsxs)(v.Fragment,{children:[(0,x.T)({tier:t,mode:g.mode,onlyShowAddOn:r}),S?(0,v.jsx)(j,{}):null,(0,v.jsx)("h2",{style:u.primaryTextStyle,id:p.BaY,children:(0,v.jsx)(w,{onlyShowAddOn:r,addOnFeature:a,subscriptionTier:t,type:d,isTrial:c})}),(0,v.jsx)("div",{style:u.secondaryTextStyle,id:p.qr0,children:(0,v.jsx)(T,{onlyShowAddOn:r,addOnFeature:a,subscriptionTier:t,isTrial:c})})]})}},64717:(e,t,r)=>{r.d(t,{E:()=>v});var n=r(67294),i=r(480),s=r(86628),o=r(24405),a=r(3791);const d={USD:{amount:100,currencyCode:"USD"},EUR:{amount:91,currencyCode:"EUR"},BRL:void 0};var l=r(82990),c=r(9291),u=r(54642),p=r(42402),g=r(18514),m=r(80444),f=r(70060),h=r(47910),x=r(33493),y=r(88280),b=r(85893);const M=function(){window.__c={n:"PendingMemberChangesMessage"};const e=(0,o.yK)((e=>({discountDescription:{alignItems:"center",color:e.mediumTextColor,fontSize:12,lineHeight:l.Z.lineHeight.UISmall.desktop}})),[]);return(0,b.jsx)("div",{style:e.discountDescription,children:(0,b.jsx)(c.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.estimatedPriceWarning",defaultMessage:"The final amount due may be impacted by prorations and member changes since your last invoice."})})};var S=r(27533);function v(e){window.__c={n:"CheckoutTermsOfService"};const{products:t,subscriptionTier:r,isTrial:n}=e,i=(0,o.yK)((e=>({termsOfService:{color:e.mediumTextColor,display:"flex",flexDirection:"column",fontSize:12,gap:12,lineHeight:l.Z.lineHeight.UISmall.desktop}})),[]),a=(0,s.VK)((()=>x.Z.state.selectedCurrencyCode),[]),d=t.includes("ai"),c=t.some((e=>"ai"!==e)),u=void 0!==a&&"USD"!==a;return(0,b.jsxs)("div",{style:i.termsOfService,children:[d&&!c?(0,b.jsx)(j,{}):null,d&&c?(0,b.jsx)(T,{}):null,!d&&c?(0,b.jsx)(w,{}):null,u?(0,b.jsx)(F,{currencyCode:a}):null,n?(0,b.jsx)(O,{tier:r}):null]})}function j(){window.__c={n:"AiOnlyTerms"};const e=(0,i.O7)(),t=function(){const e=(0,i.O7)(),t=(0,s.VK)((()=>{var e;return null===(e=m.default.state.currentSpaceStore)||void 0===e?void 0:e.id}),[]),[r,o]=(0,n.useState)();return(0,n.useEffect)((()=>{async function r(){if(!t)return!1;const r=await u.getSpaceMembershipUpdates(e,{spaceId:t});if("failed"===r.type)return!1;const n=!1===r.data[0].isProcessed;o(!!n)}r()}),[e,t]),r}(),r=(0,h.m)(y.subscriptionDataStoreInstance),o=(0,s.VK)((()=>{var t;return(0,f.px)(e)&&!(0,a.de)(null===(t=y.subscriptionDataStoreInstance.state)||void 0===t?void 0:t.addOns)&&r}),[r,e]);return(0,b.jsxs)("div",{children:[o?(0,b.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.confirmation.aiWithDiscount",defaultMessage:"By continuing, you agree to the <aiTerms>Notion AI Product Specific Terms</aiTerms> and agree to receive <bold>50% off Notion AI</bold> for the next 3 months with a paid plan. <terms>See details.</terms>",values:{br:(0,b.jsx)("br",{}),aiTerms:e=>(0,b.jsx)(p.Z,{href:(0,g.UY)("ai.terms"),external:!0,children:e}),bold:e=>(0,b.jsx)("b",{children:e}),terms:e=>(0,b.jsx)(p.Z,{href:(0,g.UY)("terms.discounts.ai.summer.2023"),external:!0,children:e})}}):(0,b.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.confirmation.aiOnly",defaultMessage:"By continuing, you agree to the <aiTerms>Notion AI Product Specific Terms</aiTerms>.",values:{br:(0,b.jsx)("br",{}),aiTerms:e=>(0,b.jsx)(p.Z,{href:(0,g.UY)("ai.terms"),external:!0,children:e})}}),t?(0,b.jsx)(M,{}):null]})}function T(){return(0,b.jsx)("div",{children:(0,b.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.confirmation.planWithAi",defaultMessage:"By continuing, you agree to the <terms>Notion Terms and Conditions</terms> and <aiTerms>Notion AI Product Specific Terms</aiTerms>.",values:{br:(0,b.jsx)("br",{}),terms:e=>(0,b.jsx)(p.Z,{href:(0,g.UY)("terms"),external:!0,children:e}),aiTerms:e=>(0,b.jsx)(p.Z,{href:(0,g.UY)("ai.terms"),external:!0,children:e})}})})}function w(){return(0,b.jsx)("div",{children:(0,b.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.confirmation.planOnly",defaultMessage:"By continuing, you agree to the <terms>Notion Terms and Conditions</terms>.",values:{terms:e=>(0,b.jsx)(p.Z,{href:(0,g.UY)("terms"),external:!0,children:e})}})})}function F(e){const{currencyCode:t}=e,r=d.USD,n=d[t];return r&&n?(0,b.jsx)("div",{children:(0,b.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.confirmation.currency",defaultMessage:"<terms>Learn about FX rates</terms>. Rates will refresh throughout the billing period. Current rate: {usdMoney} ≈ {otherMoney}",values:{usdMoney:(0,b.jsx)(S.W,{cost:r,trailingZeroDisplay:"auto"}),otherMoney:(0,b.jsx)(S.W,{cost:n,trailingZeroDisplay:"auto"}),terms:e=>(0,b.jsx)(p.Z,{href:(0,g.UY)("terms.currency.fxRates"),external:!0,children:e})}})}):null}function O(e){const{tier:t}=e;return(0,b.jsx)("div",{children:(0,b.jsx)(c.FormattedMessage,{id:"subscriptionUpgradeModal.confirmation.trialTerms",defaultMessage:"At the end of your trial, every member of your team will be automatically upgraded to the {tier, select, plus {Plus plan} business {Business plan} other {plan}} and you will be charged at the {tier, select, plus {Plus plan} business {Business plan} other {plan}} pricing described above.",values:{tier:t}})})}},51133:(e,t,r)=>{r.d(t,{Et:()=>h,Lp:()=>c,VT:()=>f,Zr:()=>x,cv:()=>m,hr:()=>y,rF:()=>g});var n=r(480),i=r(24405),s=r(59054),o=r(31919),a=r(18174),d=r(54642),l=r(88893);function c(e){const{subscriptionTier:t,onlyShowAddOn:r,addOnFeature:n}=e;return[u({subscriptionTier:t,onlyShowAddOn:r}),p({addOnFeature:n})].filter(Boolean)}function u(e){const{subscriptionTier:t,onlyShowAddOn:r}=e;if(!r)return(0,a.KE)(t)}function p(e){const{addOnFeature:t}=e;return t}function g(e){const{prices:t,quantity:r,promo:n}=e;return t.map((e=>e.getDiscountPerBillingInterval({quantity:r,promo:n}))).reduce(((e,t)=>e.plus(t)))}function m(e){const{prices:t,quantity:r,coupon:n}=e;return t.map((e=>e.getCostPerBillingInterval({quantity:r,coupon:n}))).reduce(((e,t)=>e.plus(t)))}function f(e){const{taxAmount:t,calculatingTax:r,currencyValue:n}=e,i=t&&!r?t:0;return new o.n(n,i)}function h(e,t){const r=Math.min(0,l.Et(e));return new o.n(t,-r)}function x(e){const t=(0,n.O7)(),[r]=(0,s.r5)((async()=>{if(!e)return;const r=await d.getPromoCode(t,{code:e.code});return"failed"!==r.type?r.data.promo:void 0}),[t,e]);return"resolved"===r.status?r.value:void 0}function y(){return(0,i.yK)((e=>({caption:{fontSize:12,color:e.mediumTextColor},captionContainer:{display:"flex",flexDirection:"column"},container:{marginTop:24},itemContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",lineHeight:1,minHeight:18},name:{fontSize:12,color:e.mediumTextColor},price:{fontSize:12,color:e.regularTextColor},credit:{fontSize:12,color:"#53A83F"},totalName:{fontSize:16,color:e.regularTextColor},totalPrice:{fontSize:20,lineHeight:"20px"}})),[])}},47910:(e,t,r)=>{r.d(t,{m:()=>d});var n=r(67294),i=r(480),s=r(54642),o=r(86628),a=r(88893);function d(e){const t=(0,i.O7)(),[r,d]=(0,n.useState)(),l=function(e){return(0,o.VK)((()=>a.KU(e.state)),[e])}(e);return(0,n.useEffect)((()=>{!async function(){if(!l)return!1;const e=await s.getCustomerOffer(t,{customerId:l,offerType:"add_on_upgrade_flow"});if("failed"===e.type)return!1;d("ai_fifty_percent"===e.data.coupon)}()}),[t,l]),r}},70954:(e,t,r)=>{r.d(t,{C:()=>s});r(67294);var n=r(45238),i=r(85893);const s=(0,n.I)("notionLogoStroked",{viewBox:"0 0 41 42",svg:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{d:"M4.253 2.903h0-.01c-1.02.09-1.806.481-2.322 1.142-.5.642-.671 1.441-.671 2.21v23.228c0 1.267.47 2.316 1.416 3.577h0l.006.008 4.99 6.477h0l.005.005c.465.593.963 1.017 1.617 1.256.63.23 1.33.26 2.138.221h.01l24.652-1.49h.008c1.137-.08 2.038-.396 2.632-1.071.588-.668.746-1.543.746-2.431V9.904c0-.584-.133-1.05-.508-1.486-.27-.311-.669-.602-1.113-.925a54.305 54.305 0 01-.176-.13l-.007-.004-.005-.004-6.772-4.761c-.838-.609-1.516-1.017-2.365-1.21-.824-.187-1.75-.156-3.047-.044L4.253 2.903z",fill:"#fff",stroke:"#fff",strokeWidth:"1.5"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.257 3.158L5.176 4.637c-1.62.14-2.184 1.197-2.184 2.464v21.971c0 .987.352 1.83 1.198 2.959l4.72 6.126c.776.987 1.48 1.198 2.96 1.127l23.32-1.408c1.973-.14 2.537-1.057 2.537-2.606V10.552c0-.801-.316-1.032-1.25-1.714l-.16-.117-6.41-4.507c-1.55-1.126-2.184-1.268-4.65-1.056zM12.4 10.146c-1.904.129-2.337.158-3.418-.72l-2.75-2.183c-.28-.283-.14-.635.565-.705L26.102 5.13c1.62-.141 2.466.423 3.1.916l3.311 2.394c.141.07.493.492.07.492L12.645 10.13l-.245.016zM10.179 35.06V14.074c0-.916.281-1.338 1.126-1.41l22.898-1.337c.777-.07 1.128.423 1.128 1.338v20.844c0 .916-.14 1.691-1.41 1.761l-21.91 1.268c-1.269.07-1.832-.352-1.832-1.48zm21.63-19.86c.141.635 0 1.268-.635 1.34l-1.056.21v15.492c-.916.493-1.761.775-2.466.775-1.128 0-1.41-.352-2.255-1.408l-6.905-10.845v10.493l2.185.493s0 1.267-1.763 1.267l-4.86.282c-.142-.282 0-.986.492-1.127l1.269-.351V17.947l-1.761-.142c-.141-.634.21-1.549 1.197-1.62l5.214-.351 7.187 10.986V17.1l-1.832-.21c-.14-.776.422-1.339 1.127-1.409l4.863-.283z",fill:"#222"})]})})}}]);