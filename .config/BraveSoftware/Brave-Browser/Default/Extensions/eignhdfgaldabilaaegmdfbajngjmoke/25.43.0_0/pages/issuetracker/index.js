"use strict";(()=>{function l(e){return"/issues?q="+encodeURIComponent(e)}cjce.registerTemplate("bm-p-issuetracker",function(e,c){var n=c.account.displayEmail||"me",i="https://issuetracker.google.com"+c.wizPath;function a(e){c.openTab(i+e)}function s(e,c){var n=c.newTabUrl;"/issues"!==n?a(n):(n=t.cjceSearchboxEl.value||"",c=c.shortcutQuery,n&&(c+=" "+n),a(l(c)))}var t=cjce.createElement("bm-ogb",{bmApis:c,serviceIcon:"issue_tracker",serviceLabel:cjBasics.lang.i18n("cj_i18n_00804","Issue Tracker"),pageLabel:cjBasics.lang.i18n("cj_i18n_00291","Home"),searchbox:{color:!0,onSubmit:function(e){a(l(e))}},onNewTab:function(){a("/issues")}}),o=(e.appendChild(t),c.setOnPageDisplayHandler(t.cjceSearchboxEl.select),cjce.createElement("cjmd-container",{fabPadding:!0,scrollable:!0,shadow:"thinOnScroll"})),n=(e.appendChild(o),[{iconName:"__mdi:person",label:cjBasics.lang.i18n("cj_i18n_07592","Assigned to me"),shortcutQuery:"assignee:".concat(n," status:open"),newTabUrl:"/issues"},{iconName:"__mdi:star_outline",label:cjBasics.lang.i18n("cj_i18n_07593","Starred by me"),shortcutQuery:"star:true",newTabUrl:"/issues"},{iconName:"__mdi:person_add",label:cjBasics.lang.i18n("cj_i18n_07594","CC’d to me"),shortcutQuery:"cc:".concat(n),newTabUrl:"/issues"},{iconName:"__mdi:user_attributes",label:cjBasics.lang.i18n("cj_i18n_07595","Reported by me"),shortcutQuery:"reporter:".concat(n),newTabUrl:"/issues"},{iconName:"__mdi:check",label:cjBasics.lang.i18n("cj_i18n_07596","To be verified"),shortcutQuery:"verifier:".concat(n," status:open | status:fixed"),newTabUrl:"/issues"},{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_00298","Settings")},{iconName:"__mdi:search",label:cjBasics.lang.i18n("cj_i18n_07597","Browse components"),newTabUrl:"/components"},{iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_05388","General"),newTabUrl:"/settings"},{iconName:"__mdi:notifications",label:cjBasics.lang.i18n("cj_i18n_00296","Notifications"),newTabUrl:"/settings/notifications"}]),n=cjce.createElement("bm-navlist",{items:n,onClick:s,onNewTab:s}),o=(o.appendChild(n),cjce.createElement("ccbm-fabgroup",{items:[cjce.createElement("gmd-fab",{label:cjBasics.lang.i18n("cj_i18n_07106","Create issue"),onClick:function(){a("/issues/new")}}),cjce.createElement("ccbm-fab",{mini:!0,color:!0,iconName:"__mdi:bookmark_add",label:cjBasics.lang.i18n("cj_i18n_07599","Create a new bookmark group"),onClick:function(){a("/bookmark-groups/new")}}),cjce.createElement("ccbm-fab",{mini:!0,color:!0,iconName:"__mdi:playlist_add",label:cjBasics.lang.i18n("cj_i18n_07600","Create a new hotlist"),onClick:function(){a("/hotlists/new")}})]}));e.appendChild(o)})})();