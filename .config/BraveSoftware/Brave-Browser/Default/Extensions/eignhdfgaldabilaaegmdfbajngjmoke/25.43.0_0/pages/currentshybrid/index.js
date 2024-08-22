"use strict";function _slicedToArray(e,n){return _arrayWithHoles(e)||_iterableToArrayLimit(e,n)||_unsupportedIterableToArray(e,n)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,n){var t;if(e)return"string"==typeof e?_arrayLikeToArray(e,n):"Map"===(t="Object"===(t={}.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,n):void 0}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=Array(n);t<n;t++)i[t]=e[t];return i}function _iterableToArrayLimit(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i,c,a,o,r=[],s=!0,l=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(i=a.call(t)).done)&&(r.push(i.value),r.length!==n);s=!0);}catch(e){l=!0,c=e}finally{try{if(!s&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw c}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}cjce.registerTemplate("bm-p-currentshybrid",function(n,i){var t,c,a,o,r,e,s,l,m,d,u,b,p,h,f,g,j,_,v,y,w=!cjBasics.webRequest.getWrifSupported()||!i.account.validSession,P="#1a73e8",T=cjBasics.lang.i18n("cj_i18n_01772","Currents"),C=i.wizPath+"/",S="https://currents.google.com",B="https://plus.google.com",O=B+C,U=S+C,R=U,D=U,L=i.account.obfuscatedId,A=!1,H=["stream","tags","communities","me","people","notifications","discover","collections","explore","settings"],W={stream:{label:cjBasics.lang.i18n("cj_i18n_00291","Home"),iconName:"__mdi:home",newTabUrl:""},tags:{label:cjBasics.lang.i18n("cj_i18n_06609","Tags"),iconName:"__mdi:tag",newTabUrl:"tags"},discover:{label:cjBasics.lang.i18n("cj_i18n_00926","Discover"),iconName:"__mdi:explore",newTabUrl:"discover"},explore:{label:cjBasics.lang.i18n("cj_i18n_00485","What’s hot"),iconName:"__mdi:whatshot",newTabUrl:"explore",divider:!0},collections:{label:cjBasics.lang.i18n("cj_i18n_00292","Collections"),iconName:"__mdi:google_collections",newTabUrl:"collections"},communities:{label:cjBasics.lang.i18n("cj_i18n_00293","Communities"),iconName:"__mdi:communities",newTabUrl:"communities"},me:{label:cjBasics.lang.i18n("cj_i18n_00294","Profile"),iconName:"__mdi:account_circle",newTabUrl:L},people:{label:cjBasics.lang.i18n("cj_i18n_00295","People"),iconName:"__mdi:people",newTabUrl:"people"},notifications:{label:cjBasics.lang.i18n("cj_i18n_00296","Notifications"),iconName:"__mdi:notifications",newTabUrl:"notifications/all",divider:!0},settings:{label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),iconName:"__mdi:settings",newTabUrl:"settings"},up:{label:cjBasics.lang.i18n("cj_i18n_06610","Join Currents"),iconName:"__mdi:login",newTabUrl:"up"}};function k(e){return e.map(function(e){var n=W[e];return n.id=e,n})}function x(e){i.openTab(R+e)}function q(e,n){x(n.newTabUrl)}function z(e,n){var n=n.newTabUrl,t=("collections"===e||"communities"===e||"people"===e||"stream"===e)&&r.value;t&&(n="s/"+encodeURIComponent(t),"stream"!==e)&&(n+="/"+e),x(n)}function F(e){x("s/"+encodeURIComponent(e))}function G(){x("")}function I(){w=!0,n.textContent="",a=cjce.createElement("bm-ogb",{serviceIcon:"currents",serviceLabel:T,pageLabel:cjBasics.lang.i18n("cj_i18n_01167","Links"),searchbox:{color:P,submitInNewTab:!0,onSubmit:F},bmApis:i,onNewTab:G}),n.appendChild(a),r=a.cjceSearchboxEl,i.setOnPageDisplayHandler(r.select);var e=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"});n.appendChild(e),d=k(H),o=cjce.createElement("bm-navlist",{color:!0,items:d,onClick:z,onNewTab:z}),e.appendChild(o)}function M(){l.cjceGetCleanUrl(S).then(function(e){e?i.openTab(e):x("back"===b?"":b)})}function J(e){var n=cjBasics.urlParams.attach(e,j),t=++g;f.then(function(){g===t&&l.cjceSendFrameCommand({method:"bmCstUpdateState",value:n})})}function N(e,n){var t=W[e];!n&&b===e||(b=e,J(C+t.newTabUrl),a.cjceSetPageLabel(t.label))}function V(){o=cjce.createElement("bm-navlist",{isSelector:!0,selectedId:b,items:d,onChange:function(e){N(e)},onNewTab:q}),e.textContent="",e.appendChild(o)}function $(){return cjBasics.urlParams.attach(D+(o&&(e=o.cjceSelectedId,"string"==typeof(e=W[e].newTabUrl))?e:""),j);var e}function K(e){!1===h&&(h=!0,p()),b="/"===(e=e)||"/stream"===e||"/stream/"===e?"stream":"/discover"===e||"/discover/"===e?"discover":e.startsWith("/settings")?"settings":e.startsWith("/people")||e.startsWith("/circles")?"people":e.startsWith("/notifications")?"notifications":e.startsWith("/tags")?"tags":"/me"===e||"/me/"===e||e==="/"+L||e==="/"+L+"/"||e==="/"+L+"/posts"||e==="/"+L+"/posts/"?"me":e.startsWith("/explore")?"explore":e.startsWith("/up")?"up":"/s"===e||e.startsWith("/s/")?"search":"/collections"===e||"/collections/"===e||e.startsWith("/collections/featured")||e.startsWith("/collections/followed")||e.startsWith("/collections/yours")?"collections":"/communities"===e||"/communities/"===e||e.startsWith("/communities/member")||e.startsWith("/communities/member/")||e.startsWith("/communities/yours")||e.startsWith("/communities/yours/")?"communities":"back",s.hidden="back"!==b,a.cjceSetBackState("search"===b),m.hidden=!A||!("stream"===b||"search"===b),"back"!==b&&(o.cjceSelectedId=b,W[b])&&a.cjceSetPageLabel(W[b].label)}function E(){r.value="",r.focus(),a.cjceSetNavigatorCollapseState(!1),N(u,!0)}function Q(){var e;t||(t=!0,d=k(["communities","notifications","collections","discover","explore","up"]),b=u="up",a.cjceSetPageLabel(W[b].label),V(),e=$(),l?l.src=e:f.then(function(){l.src=e}))}function X(e){c&&!e||(c=!0,I())}function Y(){cjgApis.info.getUserDomain(i.account).then(function(e){e||X()}),(i.account.validSession?cjBasics.ajax(O).then(function(e){return e||""},function(e){return e&&e.body||""}).then(function(e){return-1!==e.indexOf("Join Google+")||-1!==e.indexOf('rel="canonical" href="https://plus.google.com/discover')?"disabled":-1!==e.indexOf("<title>Google</title>")?"disabledAdministrator":"enabled"}):Promise.resolve("invalidSession")).then(function(e){!0!==e&&("disabled"===e||"invalidSession"===e?Q():"disabledAdministrator"===e&&X(!0))})}w?I():(w=!0,setTimeout(function(){w&&!c&&I()},4e3),d=k(H),b=u="stream",h=!1,f=new Promise(function(e){p=e}),g=0,_=cjBasics.uniqueId.generate(),j={bm_cid:"currentshybrid",bm_cst:"2",bm_wiz:"1",bm_iid:_,hl:cjBasics.lang.getCurrent()},cjBasics.webRequest.handleIframeHeaders([S+"/*bm_iid="+_+"*",B+"/*bm_iid="+_+"*"],{handleFirefoxInject:!0}),Y(),_=cjce.createElement("cjmd-container"),y=$(),l=cjce.createElement("bm-iframe",{src:y,solid:"#fff",onLoad:function(){a.cjceSetLoading(!1)},onBmMessage:function(e,n){var t;"currentshybridWebsiteOrigin"===e?(w=!1,n===B&&(D=n+C)):"currentshybridPageTitle"===e?"back"===b&&s.cjceSetPageLabel(n):"currentshybridUpdateView"===e?K(n):"currentshybridWorkspaceLimit"===e?(m.cjceChecked=n,A||(A=!0,"stream"!==b&&"search"!==b)||(m.hidden=!1)):"bmCstOpenUrl"===e&&(n=(e=_slicedToArray(n,3))[0],t=e[1],e=e[2],n=cjBasics.cleanBmUrl(n),i.openTab(n,t,e))}}),v=cjBasics.webRequest.addListener("onBeforeRedirect",function(e){e.redirectUrl.startsWith(U+"up")&&(Q(),v.removeListener(),v=null)},{types:["sub_frame"],urls:[y]}),_.appendChild(l),y=_,a=cjce.createElement("bm-ogb",{drawer:{color:!0},loading:!0,serviceIcon:"currents",serviceLabel:T,pageLabel:W[b].label,searchbox:{color:P,onClear:E,onSubmit:function(e){J("s/"+encodeURIComponent(e))},onMetaSubmit:F},bmApis:i,onNewTab:M,onBack:E}),n.appendChild(a),e=a.cjceDrawerEl,r=a.cjceSearchboxEl,(m=cjce.createElement("ccbm-switch",{compact:!0,icon:"__mdi:business",onChange:function(){a.cjceSetLoading(!0),l.cjceSendFrameCommand({method:"bmCstClickDomElement",value:'c-wiz > div[data-checked-veid][data-unchecked-veid][jslog][role="checkbox"][title][aria-checked][aria-label]'},S)}})).hidden=!0,a.cjceAppendChild(m),(s=cjce.createElement("bm-ogb",{displayBack:!0,floating:!0,serviceLabel:T,pageLabel:cjBasics.lang.i18n("cj_i18n_01174","Loading"),bmApis:i,onNewTab:M,onBack:E})).hidden=!0,n.appendChild(s),V(),i.setOnPageDisplayHandler(r.select),n.appendChild(y),N(b))});