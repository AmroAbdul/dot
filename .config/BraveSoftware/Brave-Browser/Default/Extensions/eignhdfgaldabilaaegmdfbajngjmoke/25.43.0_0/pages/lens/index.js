"use strict";function _slicedToArray(e,n){return _arrayWithHoles(e)||_iterableToArrayLimit(e,n)||_unsupportedIterableToArray(e,n)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,n){var a;if(e)return"string"==typeof e?_arrayLikeToArray(e,n):"Map"===(a="Object"===(a={}.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(e,n):void 0}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=Array(n);a<n;a++)t[a]=e[a];return t}function _iterableToArrayLimit(e,n){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var t,r,c,i,o=[],l=!0,s=!1;try{if(c=(a=a.call(e)).next,0===n){if(Object(a)!==a)return;l=!1}else for(;!(l=(t=c.call(a)).done)&&(o.push(t.value),o.length!==n);l=!0);}catch(e){s=!0,r=e}finally{try{if(!l&&null!=a.return&&(i=a.return(),Object(i)!==i))return}finally{if(s)throw r}}return o}}function _arrayWithHoles(e){if(Array.isArray(e))return e}cjce.registerTemplate("bm-p-lens",function(n,t){var a,r,e,c,i="https://consent.google.com",o="https://lens.google.com",l=o+t.wizPath+"/"+"search",s=l+"?p=",m={home:{iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home"),newTabUrl:s},about:{iconName:"__mdi:info",label:cjBasics.lang.i18n("cj_i18n_00838","About"),shortcutId:"911",external:!0},relatedHeader:{color:!0,header:!0,label:cjBasics.lang.i18n("cj_i18n_01539","Related apps")},search:{iconName:"__mdi:search",label:cjBasics.lang.i18n("cj_i18n_01365","Google Search"),shortcutId:"157"}},d=cjBasics.uniqueId.generate();function u(){a.cjceSendFrameCommand({method:"bmCstClickDomElement",value:"#gb div:empty + div > div span > button"},o)}function b(e){a=cjce.createElement("bm-iframe",{solid:"#fff",src:cjBasics.urlParams.attach(l,{bm_cid:"lens",bm_cst:"2",bm_wiz:"1",bm_iid:d,p:e,hl:cjBasics.lang.getCurrent()}),onLoad:function(){r.cjceSetLoading(!1),e||u()},onBmMessage:function(e,n){var a;"lensUpdateView"===e?browserStorage.local.setItem("bm_cache_v33__lens__p",{p:n,time:Date.now()}):"bmCstOpenUrl"===e&&(n=(e=_slicedToArray(n,3))[0],a=e[1],e=e[2],n=cjBasics.cleanBmUrl(n),t.openTab(n,a,e))}}),n.appendChild(a)}r=cjce.createElement("bm-ogb",{drawer:!0,withShadow:!0,serviceIcon:"lens",serviceLabel:cjBasics.lang.i18n("cj_i18n_01778","Lens"),pageLabel:cjBasics.lang.i18n("cj_i18n_00291","Home"),bmApis:t,loading:!0,onNewTab:function(){a.cjceGetCleanUrl(o).then(function(e){t.openTab(e||s)})}}),n.appendChild(r),e=cjce.createElement("ccbm-iconbutton",{iconName:"__mdi:file_upload",label:cjBasics.lang.i18n("cj_i18n_01326","Upload"),onClick:u}),r.cjceAppendChild(e),e=r.cjceDrawerEl,c=cjce.createElement("bm-navlist",{isSelector:!0,items:m,selectedId:"home",onChange:function(e){t.pageManager.navigate(e),c.cjceSelectedId="home"},onNewTab:function(e,n){n=n.newTabUrl||cjgFrontend.urls.getShortcutUrl(n.shortcutId,t.account);t.openTab(n)}}),e.appendChild(c),cjBasics.webRequest.handleIframeHeaders([o+"/*bm_iid="+d+"*",o+"/search*",o+"/v3/upload*",i+"/*bm_iid="+d+"*",i+"/*bm_iid%3D"+d+"*"],{disableOgs:o,handleFirefoxInject:!0,handleSecVariables:!0,handleSwCache:!0}),browserStorage.local.getItem("bm_cache_v33__lens__p").then(function(e){var n;return e&&"object"==typeof e&&(n=e.time,!(3e6<Date.now()-n))&&e.p||""}).then(b)});