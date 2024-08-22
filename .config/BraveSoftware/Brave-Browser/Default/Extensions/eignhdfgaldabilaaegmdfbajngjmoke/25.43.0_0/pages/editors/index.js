"use strict";(()=>{var j=window,_=document;cjce.registerTemplate("bm-p-editors",function(e,o){var a,c,t="my-drive",n=_.documentElement.offsetHeight,i=_.documentElement.offsetWidth,r=(Math.round(n*i/7500),"https://drive.google.com/drive"+o.wizPath+"/");function s(){var e=r+("folder"===t||"shareddrive"===t?"folders/"+c.id:t);o.openTab(e)}var l,d=j.atob("QUl6YVN5RFA3MkZMTVpCNng0ejZDVnlCOG8wQUthWC0yRDdueGMw"),u="https://content.googleapis.com",p=["https://www.googleapis.com/auth/drive.apps.readonly"],m=["196802322321","230754619982","335078253515","619683526622","629453589428","796396377186","889782162350","897606708560","952342923413","371237729773","1083656409722"];function h(e){var a=((a=(e=e).docPath)?"https://docs.google.com/"+a+"/u/"+o.account.authuser+"/":cjgFrontend.urls.getShortcutUrl(e.mainShortcutId,o.account))+"?ftv=1";o.openTab(a)}function g(e,a){e=e,a=a,c=o.account.authuser;var c,a="datastudio"===e?"https://datastudio.google.com/u/"+c+"/reporting/":"mymaps"===e?cjBasics.urlParams.attach("https://www.google.com/maps/d/u/"+c+"/drive",{state:JSON.stringify({action:"create",userId:o.account.obfuscatedId})}):"atari"===e?"https://sites.google.com/create?authuser="+c:"script"===e?"https://script.google.com/create?authuser="+c:"jamboard"===e?"https://jamboard.google.com/create?authuser="+c:(e=a.docPath)?"https://docs.google.com/"+e+"/create?authuser="+c:void 0;o.openTab(a)}function b(){var e=cjce.createElement("cjmd-subheader",{color:!0,label:cjBasics.lang.i18n("cj_i18n_01309","Google apps")}),e=(a.appendChild(e),cjce.createElement("bm-navlist",{compact:!0,items:["docs","sheets","slides","forms","drawings","atari","mymaps","jamboard","script","datastudio"].map(function(e){var a=cjgApis.docEditors[e],c=_.createDocumentFragment();return a.hasTemplates&&c.appendChild(cjce.createElement("ccbm-iconbutton",{id:e,icon:{name:"__mdi:category"},label:cjBasics.lang.i18n("cj_i18n_06216","From template"),onClick:function(){h(a)}})),c.appendChild(cjce.createElement("ccbm-iconbutton",{icon:{name:"__mdi:add"},label:a.newFileLabel||cjBasics.lang.i18n("cj_i18n_00090","New file"),onClick:function(){g(e,a)}})),{id:e,shortcutId:a.shortcutId,icon:{serviceName:a.iconName},label:a.serviceLabel,additionalFragment:c}}),onClick:function(e){o.pageManager.navigate(e)},onNewTab:function(e,a){a=a.newTabUrl||cjgFrontend.urls.getShortcutUrl(a.shortcutId,o.account);o.openTab(a)}})),t=(a.appendChild(e),_.createElement("div"));function c(e){t.textContent="";var a="NOT_AUTHORIZED"===e,c=Array.isArray(e)&&0<e.length;(a||c)&&(c=cjce.createElement("cjmd-subheader",{color:!0,label:cjBasics.lang.i18n("cj_i18n_01310","More apps")}),t.appendChild(c),a?(c=cjce.createElement("bm-inlinepermission",{description:cjBasics.lang.i18n("cj_i18n_01311","Grant read-only access to your Drive Apps so we can list more apps here"),onClick:function(){cjgApis.auth.requestPermissions(o.account,p)}}),t.appendChild(c)):(a=cjce.createElement("bm-navlist",{compact:!0,items:e.map(function(e){var a=_.createDocumentFragment();return e.createUrl&&a.appendChild(cjce.createElement("ccbm-iconbutton",{icon:{name:"__mdi:add"},label:cjBasics.lang.i18n("cj_i18n_00090","New file"),onClick:function(){o.openTab(e.createUrl)}})),{icon:e.icon,label:e.label,newTabUrl:e.newTabUrl,additionalFragment:a}}),onClick:function(e,a){o.openTab(a.newTabUrl)},onNewTab:function(e,a){o.openTab(a.newTabUrl)}}),t.appendChild(a)))}a.appendChild(t);var n=null,i=!1;cjgApis.cache.getItem(o.account,"bm_cache_v33__doclist__createapps").then(function(e){!i&&e&&(n=JSON.stringify(e),c(e))}),e=cjBasics.urlParams.attach(u+"/drive/v2/apps",{prettyPrint:"false",hl:cjBasics.lang.getCurrent(),fields:"items(supportsCreate,id,name,createUrl,productUrl,icons(size,category,iconUrl))"}),cjgApis.request(e,{fetchAs:"json"},{account:o.account,pa:"optional",key:d,requiredScopes:p}).then(function(e){var t=[],n=j.devicePixelRatio||2;return e.items.forEach(function(e){var a,c;e.supportsCreate&&-1===m.indexOf(e.id)&&(a="/images/placeholder_32dp.svg",c=24*n,Array.isArray(e.icons)&&e.icons.sort(function(e,a){return e.size<a.size?1:-1}).forEach(function(e){"application"===e.category&&e.size>=c&&(a=e.iconUrl)}),t.push({label:e.name,newTabUrl:e.productUrl,createUrl:e.createUrl,icon:{url:a}}))}),t.sort(function(e,a){return e.label.toLowerCase()>a.label.toLowerCase()?1:-1})},function(){return"NOT_AUTHORIZED"}).then(function(e){i=!0;var a=JSON.stringify(e);n&&a===n||(c(e),cjgApis.cache.setItem(o.account,"bm_cache_v33__doclist__createapps",e))})}n=cjce.createElement("bm-ogb",{drawer:!0,serviceIcon:"editors",bmApis:o,onNewTab:s,pageLabel:cjBasics.lang.i18n("cj_i18n_00291","Home"),serviceLabel:cjBasics.lang.i18n("cj_i18n_06709","Editors")}),i=n.cjceDrawerEl,l=cjce.createElement("bm-navlist",{items:[{id:"editors",iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home")},{id:"help",iconName:"__mdi:info",label:cjBasics.lang.i18n("cj_i18n_01532","Help"),newTabUrl:!0,external:!0},{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_01539","Related apps")},{id:"drive",label:cjBasics.lang.i18n("cj_i18n_00390","Drive"),iconName:"__mdi:drive",shortcutId:"48"}],selectedId:"editors",bmApis:o,onClick:function(e){o.pageManager.navigate(e)},onNewTab:function(e,a){var c=a.newTabUrl;"help"===e?c="https://support.google.com/docs/"+("0"===o.account.authuser?"":"?authuser="+o.account.authuser):a.shortcutId&&(c=cjgFrontend.urls.getShortcutUrl(a.shortcutId,o.account)),o.openTab(c)}}),i.appendChild(l),e.appendChild(n),a=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"}),b(),e.appendChild(a)})})();