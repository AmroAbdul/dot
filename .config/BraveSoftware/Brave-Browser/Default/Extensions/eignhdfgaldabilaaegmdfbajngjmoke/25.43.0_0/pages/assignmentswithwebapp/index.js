"use strict";cjce.registerTemplate("bm-p-assignmentswithwebapp",function(e,c){var a,n,i="https://assignments.google.com",s="/u/"+c.account.authuser+"/",t=cjBasics.uniqueId.generate(),l={bm_cid:"assignmentswithwebapp",bm_wiz:"1",bm_cst:"2",bm_iid:t,forcehl:"1",authuser:c.account.authuser,hl:cjBasics.lang.getCurrent()},o=cjBasics.urlParams.attach(s+"h",l);a=cjce.createElement("bm-ogb",{loading:!0,serviceIcon:"assignments",serviceLabel:cjBasics.lang.i18n("cj_i18n_01956","Assignments"),pageLabel:cjBasics.lang.i18n("cj_i18n_00291","Home"),bmApis:c,onNewTab:function(){n.cjceGetCleanUrl(i).then(function(e){e?c.openTab(e):c.openTab(i+s+"h")})}}),e.appendChild(a),l=cjce.createElement("ccbm-iconbutton",{iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_02162","Open home"),onClick:function(){n.cjceSendFrameCommand({method:"bmCstUpdateState",value:o},i)}}),a.cjceAppendChild(l),l=cjce.createElement("ccbm-iconbutton",{iconName:"__mdi:class",label:cjBasics.lang.i18n("cj_i18n_06356","View classes"),onClick:function(){c.pageManager.navigate("classroom")}}),a.cjceAppendChild(l),cjBasics.webRequest.handleIframeHeaders([i+"/*bm_iid="+t+"*"],{disableOgs:i,handleFirefoxInject:!0,handleSecVariables:!0,handleSwCache:!0}),n=cjce.createElement("bm-iframe",{src:i+o,solid:"#fff",shadow:!0,onLoad:function(){a.cjceSetLoading(!1)}}),e.appendChild(n)});