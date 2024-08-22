"use strict";(()=>{function A(e){var a;return e?(a="text=",a+=e.startsWith('"')&&e.endsWith('"')?e.slice(1,-1):e.split(" ").join(","),"search/"+encodeURIComponent(encodeURIComponent(a))):""}cjce.registerTemplate("bm-p-keepwithwebapp",function(e,c){var i,t,l,a,n="https://keep.google.com",o=c.wizPath+"/",s=n+o,r=!c.account.validSession||!cjBasics.webRequest.getWrifSupported(),d=cjBasics.lang.i18n("cj_i18n_01169","Notes"),m=r?cjBasics.lang.i18n("cj_i18n_00291","Home"):d,b=cjBasics.uniqueId.generate(),p={bm_cid:"keepwithwebapp",bm_udm:c.darkMode?"1":null,bm_iid:b,forcehl:"1",hl:cjBasics.lang.getCurrent()},_="home",h=[],u=!1,j=JSON.stringify(h),g=["home","reminders"],f=["editlabels","archive","trash"],w={home:{iconName:"__mdi:lightbulb_outline",label:d,newTabUrl:!0},reminders:{iconName:"__mdi:notifications",label:cjBasics.lang.i18n("cj_i18n_00081","Reminders"),newTabUrl:!0,divider:!0},editlabels:{iconName:"__mdi:edit",label:cjBasics.lang.i18n("cj_i18n_06576","Edit labels"),divider:!0},archive:{iconName:"__mdi:archive",label:cjBasics.lang.i18n("cj_i18n_00821","Archive"),newTabUrl:!0},trash:{iconName:"__mdi:delete",label:cjBasics.lang.i18n("cj_i18n_00005","Bin"),newTabUrl:!0,divider:r},help:{iconName:"__mdi:help_outline",label:cjBasics.lang.i18n("cj_i18n_00438","Help"),newTabUrl:!0},relatedApps:{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_01539","Related apps")},tasks:{iconName:"__mdi:task_alt",label:cjBasics.lang.i18n("cj_i18n_00439","Tasks"),shortcutId:"140",external:!c.servicesDatabase.tasks},calendar:{iconName:"__mdi:date_range",label:cjBasics.lang.i18n("cj_i18n_00302","Calendar"),shortcutId:"27",external:!c.servicesDatabase.calendar},drive:{iconName:"__mdi:drive",label:cjBasics.lang.i18n("cj_i18n_00390","Drive"),shortcutId:"48",external:!c.servicesDatabase.drive}};function v(e){a.cjceSendFrameCommand({method:"keepwithwebappSetHash",value:e},n)}function C(e){var a="";v(a=e?"#"+A(e):a)}function k(e){"editlabels"===e?(l.cjceSelectedId=_,a.cjceSendFrameCommand({method:"keepwithwebappEditLabels"},n)):v(e)}function N(e){e&&"home"!==e?c.openTab(s+"#"+e):c.openTab(s)}function B(e){N(A(e))}function S(e,a){"tasks"===e||"calendar"===e||"drive"===e?(a=a.shortcutId,a=cjgFrontend.urls.getShortcutUrl(a,c.account),c.openTab(a)):"help"===e?(a="https://support.google.com/keep","0"!==c.account.authuser&&(a+="?authuser="+encodeURIComponent(c.account.authuser)),c.openTab(a)):N(e)}function I(){var e=l,n=[],a=(h.forEach(function(e){var a="label/"+encodeURIComponent(e);w[a]||(w[a]={label:e,iconName:"__mdi:label",newTabUrl:!0}),n.push(a)}),g.concat(n,f)),c={},a=(a.forEach(function(e){c[e]=w[e]}),l=cjce.createElement("bm-navlist",{isSelector:!0,selectedId:_,items:c,onChange:k,onNewTab:S}),t.appendChild(l),t.contains(document.activeElement));cjce.replaceChild(t,l,e),a&&t.cjceToggleState(!0)}function T(e,a){var n;e&&Array.isArray(e)&&(a||!u)&&(n=JSON.stringify(e),j!==n&&(j=n,a&&(u=!0),h=e,I(),a))&&cjgApis.cache.setItem(c.account,"bm_cache_v33__keep__customlabels",h)}function E(e,a){(a||r?N:v)(e)}function U(e){return e.map(function(e){var a=w[e];return a.id=e,a})}function R(e){e&&(e.noteId?v("#NOTE/"+e.noteId):(e="?reminder="+e.reminderId,e=cjBasics.urlParams.attach(o+e,p),a.cjceSendFrameCommand({method:"bmCstUpdateState",value:e},n)))}d=cjce.createElement("ccbm-fabgroup",{items:[cjce.createElement("gmd-fab",{label:cjBasics.lang.i18n("cj_i18n_06306","New note"),onClick:function(){E("newnote")},onMetaClick:function(){E("newnote",!0)}}),cjce.createElement("ccbm-fab",{mini:!0,iconName:"__mdi:check_box",label:cjBasics.lang.i18n("cj_i18n_06307","New list"),onClick:function(){E("newlist")},onMetaClick:function(){E("newlist",!0)}}),cjce.createElement("ccbm-fab",{mini:!0,iconName:"__mdi:add_alert",label:cjBasics.lang.i18n("cj_i18n_06308","New reminder"),onClick:function(){E("newreminder")},onMetaClick:function(){E("newreminder",!0)}})]}),e.appendChild(d),i=cjce.createElement("bm-ogb",{loading:!r,drawer:{color:"#f5a900"},serviceIcon:"keep",serviceLabel:cjBasics.lang.i18n("cj_i18n_00422","Keep"),pageLabel:m,searchbox:{color:"#fbbc05",onSubmit:function(e){(r?B:C)(e)},onMetaSubmit:B,onClear:function(){C("")},submitInNewTab:r},bmApis:c,onNewTab:function(){N(_)}}),e.appendChild(i),t=i.cjceDrawerEl,d=cjBasics.urlParams.attach(s,p),cjBasics.webRequest.handleIframeHeaders([n+"/*bm_iid="+b+"*"],{disableOgs:n,handleSwCache:!0,handleSecVariables:!0}),r?(m=cjce.createElement("cjmd-container",{fabPadding:!0,scrollable:!0,shadow:"thinOnScroll"}),b=cjce.createElement("bm-navlist",{items:U(["home","reminders","archive","trash","help"]),onClick:S,onNewTab:S}),m.appendChild(b),e.appendChild(m),l=cjce.createElement("bm-navlist",{items:U(["relatedApps","drive","calendar","tasks"]),onClick:function(e,a){"tasks"===e||"calendar"===e||"drive"===e?c.pageManager.navigate(e):S(e,a)},onNewTab:S}),t.appendChild(l),c.setOnPageDisplayHandler(i.cjceSearchboxEl.select)):(a=cjce.createElement("bm-iframe",{src:d,shadow:!0,onBmMessage:function(e,a){var n;"keepwithwebappUpdateView"===e&&(((l.cjceSelectedId=a).startsWith("label/")||w[a])&&(n=(n=w[a])?n.label:decodeURIComponent(a.replace("label/","")),i.cjceSetPageLabel(n)),_=a),"keepwithwebappLabels"===e&&T(a,!0)},onLoad:function(){i.cjceSetLoading(!1),c.setOnPageDisplayHandler(function(e){R(e.noteData)})}}),e.appendChild(a),I(),cjgApis.cache.getItem(c.account,"bm_cache_v33__keep__customlabels").then(function(e){T(e,!1)}))})})();