"use strict";cjce.registerTemplate("bm-p-notebooklm",function(c,n){var e="https://notebooklm.google.com",a=e+n.wizPath+"/",o=cjBasics.uniqueId.generate(),i=cjBasics.urlParams.attach(a,{bm_cid:"notebooklm",bm_cst:"1",bm_iid:o,bm_udm:n.darkMode?"1":null,bm_wiz:"1",hl:cjBasics.lang.getCurrent()});cjBasics.lang.i18n("cj_i18n_00291","Home"),n.wizPath,cjBasics.lang.i18n("cj_i18n_01515","Activity"),cjBasics.lang.i18n("cj_i18n_06754","FAQ"),cjBasics.lang.i18n("cj_i18n_00313","Updates"),"0"!==n.account.authuser&&n.account.authuser,cjBasics.lang.i18n("cj_i18n_07332","Help & support");function t(){var e=cjce.createElement("bm-fulldialog",{bmApis:n,iconName:"notebooklm",lockup:{label:cjBasics.lang.i18n("cj_i18n_07393","NotebookLM")},message:cjBasics.lang.i18n("cj_i18n_07405","__product_name__ is not yet available in your country.").replace("__product_name__",cjBasics.lang.i18n("cj_i18n_07393","NotebookLM")),onNewTab:function(){n.openTab(a)}});c.textContent="",c.appendChild(e)}var s=cjce.createElement("bm-ogb",{loading:!0,serviceIcon:"notebooklm",serviceLabel:cjBasics.lang.i18n("cj_i18n_07393","NotebookLM"),pageLabel:cjBasics.lang.i18n("cj_i18n_00291","Home"),bmApis:n,onNewTab:function(){n.openTab(a)}}),e=(c.appendChild(s),e+"/*bm_iid="+o+"*"),o=(cjBasics.webRequest.handleIframeHeaders([e],{handleFirefoxInject:!0,handleSecVariables:!0,handleSwCache:!0}),cjBasics.webRequest.catchAndStop(["https://notebooklm.google/*"],t),cjBasics.webRequest.addListener("onBeforeRedirect",function(e){e=e.redirectUrl;(e.startsWith("https://notebooklm.google/")||e.startsWith("https://www.notebooklm.google/"))&&t()},{types:["sub_frame"],urls:[e]}),cjce.createElement("bm-iframe",{src:i,onLoad:function(){s.cjceSetLoading(!1)}}));c.appendChild(o)});