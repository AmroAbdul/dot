"use strict";cjce.registerTemplate("bm-p-admob",function(a,n){function i(a){a="https://apps.admob.com/v2/"+a;"0"!==n.account.authuser&&(a+="?authuser="+n.account.authuser),n.openTab(a)}function e(a,n){i(n.newTabUrl)}var c=cjce.createElement("bm-ogb",{serviceIcon:"admob",serviceLabel:cjBasics.lang.i18n("cj_i18n_00580","AdMob"),pageLabel:cjBasics.lang.i18n("cj_i18n_01167","Links"),bmApis:n,onNewTab:function(){i("home")}}),c=(a.appendChild(c),cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"})),a=(a.appendChild(c),[{label:cjBasics.lang.i18n("cj_i18n_00291","Home"),iconName:"__mdi:home",newTabUrl:"home"},{label:cjBasics.lang.i18n("cj_i18n_00216","Apps"),iconName:"__mdi:apps",newTabUrl:"apps/list"},{label:cjBasics.lang.i18n("cj_i18n_01152","Reports"),iconName:"__mdi:assessment",newTabUrl:"reports/library"},{label:cjBasics.lang.i18n("cj_i18n_01417","Mediation"),iconName:"__mdi:workflow",newTabUrl:"mediation/groups/list"},{label:cjBasics.lang.i18n("cj_i18n_01418","Campaigns"),iconName:"__mdi:campaign",newTabUrl:"campaigns/reports/campaigns",divider:!0},{label:cjBasics.lang.i18n("cj_i18n_07005","Policy center"),iconName:"__mdi:policy",newTabUrl:"verified_user"},{label:cjBasics.lang.i18n("cj_i18n_07006","Privacy & messaging"),iconName:"__mdi:admin_panel_settings",newTabUrl:"privacymessaging"},{label:cjBasics.lang.i18n("cj_i18n_01151","Blocking controls"),iconName:"__mdi:block",newTabUrl:"pubcontrols/general-categories"},{label:cjBasics.lang.i18n("cj_i18n_01154","Payments"),iconName:"__mdi:payments",newTabUrl:"payments/overview"},{label:cjBasics.lang.i18n("cj_i18n_01411","Change history"),iconName:"__mdi:history",newTabUrl:"changehistory"},{label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),iconName:"__mdi:settings",newTabUrl:"settings/personal-settings"}]),a=cjce.createElement("bm-navlist",{compact:!0,items:a,onClick:e,onNewTab:e});c.appendChild(a)});