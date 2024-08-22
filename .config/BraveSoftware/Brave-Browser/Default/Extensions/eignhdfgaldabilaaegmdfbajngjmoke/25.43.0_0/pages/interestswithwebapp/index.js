"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var n;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(n="Object"===(n={}.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}function _iterableToArrayLimit(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,c,i,l,r=[],o=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(a=i.call(n)).done)&&(r.push(a.value),r.length!==t);o=!0);}catch(e){s=!0,c=e}finally{try{if(!o&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw c}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}cjce.registerTemplate("bm-p-interestswithwebapp",function(s,d){var e=cjBasics.uniqueId.generate(),t="0"===d.account.authuser?null:d.account.authuser,a="https://www.google.com",n=a+"/interests/",c={bm_cid:"interestswithwebapp",bm_iid:e,bm_cst:"1",bm_wiz:"1",authuser:t,pageId:d.account.pageId,hl:cjBasics.lang.getCurrent()},i=[],l=(t&&i.push("authuser="+t),d.account.pageId&&i.push("pageId="+d.account.pageId),0<i.length?"?"+i.join("&"):""),r="https://save-pa.googleapis.com/$rpc/google.search.platform.save.v2.SaveService/",m=!0,o=cjBasics.lang.i18n("cj_i18n_07396","Saved"),u={home:{iconName:"__mdi:bookmark_border",id:"home",label:o,shortcutId:"359"},liked:{iconName:"__mdi:favorite_border",id:"liked",label:cjBasics.lang.i18n("cj_i18n_07457","Liked")},followed:{iconName:"__mdi:saved_search",id:"followed",label:cjBasics.lang.i18n("cj_i18n_07458","Followed"),divider:!0},relatedHeader:{color:!0,header:!0,label:cjBasics.lang.i18n("cj_i18n_01539","Related apps")},search:{iconName:"__mdi:search",label:cjBasics.lang.i18n("cj_i18n_01365","Google Search"),shortcutId:"157"},maps:{iconName:"__mdi:place",label:cjBasics.lang.i18n("cj_i18n_01364","Google Maps"),shortcutId:"101"},shopping:{iconName:"__mdi:local_offer",label:cjBasics.lang.i18n("cj_i18n_00059","Google Shopping"),shortcutId:"129"},destinations:{iconName:"__mdi:explore",label:cjBasics.lang.i18n("cj_i18n_01774","Travel Guide"),shortcutId:"764"}};function _(e,t){var n="/interests/",e=("followed"===e||"liked"===e?n+=e:(n+="saved",e&&(n+="/list/"+encodeURIComponent(e))),cjBasics.urlParams.attach(n,c));t?k.src=a+e:k.cjceSendFrameCommand({method:"bmCstUpdateState",value:e},a)}var p=cjce.createElement("bm-ogb",{bmApis:d,drawer:!0,loading:!0,serviceIcon:"save",serviceLabel:cjBasics.lang.i18n("cj_i18n_07373","Interests"),pageLabel:o,onBack:function(){_(null)},onNewTab:function(){k.cjceGetCleanUrl(a).then(function(e){d.openTab(e||n+"saved"+l)})}}),h=(s.appendChild(p),p.cjceDrawerEl),b=cjce.createElement("bm-navlist",{selectedId:"home",items:u,onClick:function(e){"followed"===e||"liked"===e?_(e):"home"===e?_(null):d.pageManager.navigate(e)},onNewTab:function(e,t){t=t.newTabUrl||cjgFrontend.urls.getShortcutUrl(t.shortcutId,d.account);d.openTab(t)}}),j=(h.appendChild(b),!1),f=(A().then(function(e){var t;(j=0<e.length)&&(t=u,j&&(t=(t=[u.home,u.liked,u.followed,{color:!0,header:!0,label:cjBasics.lang.i18n("cj_i18n_07487","Saved collections")}]).concat(e)),b.remove(),b=cjce.createElement("bm-navlist",{isSelector:!0,selectedId:"home",items:t,onChange:function(e){_("home"===e?null:e)},onNewTab:function(e){d.openTab(n+("home"===e?"saved":"saved/list/"+e)+l)}}),h.appendChild(b))}),cjBasics.urlParams.attach(n+"saved",c));function g(e,t,n){t=t||{},t.alt="json",t.prettyPrint="false",e=cjBasics.urlParams.attach(r+e,t);return cjgApis.request(e,{method:"POST",fetchAs:"json",headers:{"Content-Type":"application/json+protobuf"},body:JSON.stringify(n||[])},{account:d.account,pa:!0,key:window.atob("QUl6YVN5QnMtR0pFRHFCQW4wTmlFdjAzbmtXZ0NVVHIydmxhVmww")})}cjBasics.webRequest.handleIframeHeaders([a+"/*bm_iid="+e+"*"],{handleFirefoxInject:!0,handleSecVariables:!0,handleSwCache:!0});var v={IMAGE:"__mdi:image",ITINERARY:"__mdi:assignment",JOB:"__mdi:work_outline",PLACE:"__mdi:place",RECIPE:"__mdi:restaurant",SCREENSHOT:"__mdi:photo",SHOPPING_PRODUCT:"__mdi:local_offer",TVM_ENTITY:"__mdi:play_circle_outline",WEB_PAGE:"__mdi:news"};function w(){return g("ListLists",{fields:"lists(listDescriptor(listId,itemTypes),displayName)",pageSize:"200"}).then(function(e){var a=[];return e.lists.forEach(function(e){var t=e.listDescriptor,n=t&&t.listId;n&&a.push({id:n,supportsAdditions:!Array.isArray(t.itemTypes)||-1!==t.itemTypes.indexOf("WEB_PAGE"),label:(n=(n=e.displayName)||"").charAt(0).toUpperCase()+n.slice(1),iconName:(e=>{var t=e.listDescriptor&&e.listDescriptor.itemTypes;if(Array.isArray(t))for(var n=0;n<t.length;n++){var a=v[t[n]];if(a)return a}return"__mdi:bookmark_border"})(e),newTabUrl:!0})}),a.sort(function(e,t){var n=e.label.toLowerCase(),a=t.label.toLowerCase();return n===a?e.id>t.id?1:-1:a<n?1:-1}),a}).catch(function(){return[]})}function y(){return cjgApis.cache.getItem(d.account,"bm_cache_v33__collections__lists").then(function(e){return Array.isArray(e)?e:[]})}function I(e){return cjgApis.cache.setItem(d.account,"bm_cache_v33__collections__lists",e),e}var C=null;function A(){return C=C||w().then(I,y)}function B(e){var n=cjce.createElement("cjmd-container",{solid:!0,floating:!0}),t=cjce.createElement("bm-ogb",{bmApis:d,displayBack:!0,serviceIcon:"save",serviceLabel:cjBasics.lang.i18n("cj_i18n_07396","Saved"),pageLabel:cjBasics.lang.i18n("cj_i18n_06324","Save new item"),onBack:function(){n.remove()}}),a=(n.appendChild(t),cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"})),c=(n.appendChild(a),cjce.createElement("cjmd-card")),i=(c.classList.add("bm-p-interestswithwebapp-form"),a.appendChild(c),cjce.createElement("ccbm-textfield",{label:cjBasics.lang.i18n("cj_i18n_06316","Name")})),l=(c.appendChild(i),cjce.createElement("ccbm-textfield",{label:cjBasics.lang.i18n("cj_i18n_06317","Location (URL)")})),r=(c.appendChild(l),"_bm_choose_list"),o=(A().then(function(e){var t=[{value:"_bm_choose_list",label:cjBasics.lang.i18n("cj_i18n_06320","Add to collection")+"..."}],n=(e.forEach(function(e){e.supportsAdditions&&t.push({value:e.id,label:e.label})}),cjce.createElement("ccbm-button--select",{outline:!0,items:t,selectedId:r,onChange:function(){r=n.cjceSelectedId}}));n.classList.add("bm-p-interestswithwebapp-form__selectbox"),c.appendChild(n)}),cjce.createElement("ccbm-button",{color:!0,fill:!0,label:cjBasics.lang.i18n("cj_i18n_01363","Save"),onClick:function(){var e,t;p.cjceSetLoading(!0),o.disabled=!0,o.textContent=cjBasics.lang.i18n("cj_i18n_06327","Saving"),k.src="about:blank",e={listId:"_bm_choose_list"!==r&&r||null,title:i.cjceValue,webPageUrl:l.cjceValue},t=[null,null,e.title||null,null,null,null,null,null,[e.webPageUrl||null]],g("AddItems",{fields:"listItems/title"},[null,e.listId?[e.listId]:[null,2,[5]],[t]]).then(function(){m=!0,k.src=f+"&",n.remove()})}})),a=(t.cjceAppendChild(o),e&&e.title),t=(a&&(i.cjceValue=a),e&&e.bkmk);t&&(l.cjceValue=t),s.appendChild(n),setTimeout(function(){i.cjceSelect()})}var S,k=cjce.createElement("bm-iframe",{src:f,solid:"#fff",shadow:!0,onLoad:function(){m&&(m=!1,p.cjceSetLoading(!1))},onBmMessage:function(e,t){var n,a,c,i,l;"interestswithwebappUpdatePath"===e?(i=-1!==(n=t).indexOf("new-list"),a=-1!==n.indexOf("/list/"),p.cjceSetBackState(i||a),c="home",n.startsWith("/interests/liked")?c="liked":n.startsWith("/interests/followed")?c="followed":i?c="new-list":a&&(c=n.split("/list/")[1].split("/")[0]),b.cjceSelectedId=c,i?l=cjBasics.lang.i18n("cj_i18n_06321","New collection"):a?l=(n=j&&b.cjceGetItemElement(c))&&n.textContent||cjBasics.lang.i18n("cj_i18n_06322","Collection"):(l=o,"liked"!==c&&"followed"!==c||(a=u[c])&&(l=a.label)),E.hidden="liked"===c||"followed"===c||i,p.cjceSetPageLabel(l)):"bmCstOpenUrl"===e&&(a=(n=_slicedToArray(t,3))[0],c=n[1],i=n[2],l=cjBasics.cleanBmUrl(a),d.openTab(l,c,i))}}),T=(s.appendChild(k),cjce.createElement("ccbm-fab",{mini:!0,color:!0,iconName:"__mdi:add_link",label:cjBasics.lang.i18n("cj_i18n_06323","Save this"),onClick:function(){B({bkmk:S.url,title:S.title})}})),E=(cjBasics.navigator.getActionableUrl().then(function(e){e?(S=e,T.title=cjBasics.lang.i18n("cj_i18n_06323","Save this")+" ("+S.url+")"):T.parentNode.remove()}),cjce.createElement("ccbm-fabgroup",{items:[cjce.createElement("gmd-fab",{label:cjBasics.lang.i18n("cj_i18n_07429","Create collection"),onClick:function(){k.cjceSendFrameCommand({method:"bmCstClickDomElement",value:'button[jsaction]:has(path[d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"])'},a),E.hidden=!0,setTimeout(function(){E.hidden=!1},4e3)}}),cjce.createElement("ccbm-fab",{mini:!0,color:!0,iconName:"__mdi:bookmark_add",label:cjBasics.lang.i18n("cj_i18n_06324","Save new item"),onClick:function(){B()}}),T]}));s.appendChild(E),d.setOnPageDisplayHandler(function(e){e=e.listId;e&&_(e,!0)})});