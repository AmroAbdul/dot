"use strict";function _slicedToArray(e,a){return _arrayWithHoles(e)||_iterableToArrayLimit(e,a)||_unsupportedIterableToArray(e,a)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,a){var n;if(e)return"string"==typeof e?_arrayLikeToArray(e,a):"Map"===(n="Object"===(n={}.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,a):void 0}function _arrayLikeToArray(e,a){(null==a||a>e.length)&&(a=e.length);for(var n=0,t=Array(a);n<a;n++)t[n]=e[n];return t}function _iterableToArrayLimit(e,a){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,c,i,l,o=[],r=!0,s=!1;try{if(i=(n=n.call(e)).next,0===a){if(Object(n)!==n)return;r=!1}else for(;!(r=(t=i.call(n)).done)&&(o.push(t.value),o.length!==a);r=!0);}catch(e){s=!0,c=e}finally{try{if(!r&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw c}}return o}}function _arrayWithHoles(e){if(Array.isArray(e))return e}(()=>{var Ae="undefined"!=typeof chrome&&chrome||{},v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",B="BCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz",ve="thread-",Be="msg-",Ie="thread-msg-";function Se(e){if(/^\s*$/.test(e))return e;e=e.replace(ve,"");var a=btoa(e).replace(/=/g,""),n=v,t=B;if(!t)throw new Error("rd");for(var c=n.length,i=t.length,l=!0,o=0;o<a.length;o++)if(a.charAt(o)!==n.charAt(0)){l=!1;break}if(l)return t.charAt(0);var r={};for(o=0;o<c;o++)r[n.charAt(o)]=o;var s=[];for(o=a.length-1;0<=o;o--){var d=a.charAt(o);if(void 0===r[d])throw new Error("sd`"+a+"`"+n+"`"+d);s.push(r[d])}var m=[];for(o=s.length-1;0<=o;o--){for(var u=0,_=0;_<m.length;_++){var b,p=m[_]*c+u;i<=p?(u=(p-(b=p%i))/i,p=b):u=0,m[_]=p}for(;u;){var h=u%i;m.push(h),u=(u-h)/i}for(u=s[o],_=0;u;_++){m.length<=_&&m.push(0);var j,g=m[_]+u;i<=g?(u=(g-(j=g%i))/i,g=j):u=0,m[_]=g}}var f=[];for(o=m.length-1;0<=o;o--){var A=m[o];if(A>=t.length||A<0)throw new Error("td`"+m+"`"+A);f.push(t.charAt(A))}return f.join("")}function ye(e){return"tl/priority/"+encodeURIComponent(e.replace(",PI",""))}var Te="https://accounts.google.com",Ne="https://mail.google.com",we=Ne+"/mail/",Ee=we+"mu/mp/",Le="bm_cache_v33__mail__sessionid";cjce.registerTemplate("bm-p-mail",function(i,d){i.classList.add("bm-p-mail");var t,O,n,c,l,o,r,s,P,m,u,_,b,p,x,h,j,g="inbox"===(d.instanceParameters.productId||"mail"),f=!d.account.validSession,H=(f||cjce.applyTemplate(i,"bm-loading"),g&&i.classList.add("bm-p-mail--bigtop"),i.classList.add("bm-p-mail--inboxview"),["https://www.googleapis.com/auth/gmail.labels"]),A=we+"u/"+d.account.authuser+"/",v=A+"#",D=v+"label/",F=g?"inbox":"gmail",W=g?cjBasics.lang.i18n("cj_i18n_00421","Inbox"):cjBasics.lang.i18n("cj_i18n_00416","Gmail"),B=d.darkMode?"#669df6":"#1a73e8",I=g?"tl/priority/":"",q="INBOX",S=!1,y=!1,z=["SMARTLABEL_TRAVEL","SV_I","SMARTLABEL_RECEIPT","SMARTLABEL_FINANCE","SMARTLABEL_SOCIAL","SMARTLABEL_PURE_NOTIF","SMARTLABEL_GROUP","SMARTLABEL_PROMO","IO_UNIM"],X=z.concat(["SNOOZED","DONE","REMINDERS","CHAT","ALL"]),G=g?["INBOX","SNOOZED","DONE","DRAFT","SENT","REMINDERS","TRASH","SPAM"]:["INBOX","STARRED","SNOOZED","IMPORTANT","CHAT","SENT","DRAFT","ALL","SPAM","TRASH"],e='div[style*="translate3d"] div[role="button"]',a=d.darkMode?"dark":"light",T="bm_mail_"+(g?"bigtop":"gmail")+"__theme_"+a+"__"+d.account.authuser+"_"+window.btoa(d.account.obfuscatedId).replace(/=+/,""),V="GMAIL_AT",N="",a=we+"mu/*mui="+T+"*",Z=["^smartlabel_personal","^smartlabel_social","^smartlabel_promo","^smartlabel_notification","^smartlabel_group"],J={"^smartlabel_personal":{label:cjBasics.lang.i18n("cj_i18n_00178","Primary"),color:"#ea4335"},"^smartlabel_social":{label:cjBasics.lang.i18n("cj_i18n_00312","Social"),color:"#4285f4"},"^smartlabel_promo":{label:cjBasics.lang.i18n("cj_i18n_00315","Promos"),color:"#1e8e3e"},"^smartlabel_notification":{label:cjBasics.lang.i18n("cj_i18n_00313","Updates"),color:"#fa7b17"},"^smartlabel_group":{label:cjBasics.lang.i18n("cj_i18n_00182","Forums"),color:"#a142f4"},"^io_im,PI":{label:cjBasics.lang.i18n("cj_i18n_00184","Important")},"^u,PI":{label:cjBasics.lang.i18n("cj_i18n_01559","Unread")},"^t,PI":{label:cjBasics.lang.i18n("cj_i18n_00004","Starred")},"^io_im,^u,PI":{label:cjBasics.lang.i18n("cj_i18n_01560","Important & unread")},"^all,^f,PI":{label:cjBasics.lang.i18n("cj_i18n_00303","Sent")},"^all,^r,PI":{label:cjBasics.lang.i18n("cj_i18n_00187","Drafts")},",PI":{label:cjBasics.lang.i18n("cj_i18n_00331","Everything")}},K={"^all":"ALL","^f":"SENT","^i":"INBOX","^io_im":"IMPORTANT","^k":"TRASH","^r":"DRAFT","^s":"SPAM","^t":"STARRED"},w={INBOX:{label:cjBasics.lang.i18n("cj_i18n_00299","Inbox"),newTabUrl:v,superpuduHash:g?"tl/priority/":"tl/please_redirect_me_google",iconName:"__mdi:inbox",color:B,colorIcon:g},PINNED:{superpuduHash:"tl/search/label%3Apinned",color:B},STARRED:{label:cjBasics.lang.i18n("cj_i18n_00004","Starred"),newTabUrl:v+"starred",superpuduHash:"tl/Starred",iconName:"__mdi:star_outline"},SNOOZED:{label:cjBasics.lang.i18n("cj_i18n_00300","Snoozed"),newTabUrl:v+"snoozed",superpuduHash:"tl/search/in%3Asnoozed",iconName:g?"__mdi:schedule":"__mdi:watch_later",color:g?"#ef6c00":B,colorIcon:g},DONE:{label:cjBasics.lang.i18n("cj_i18n_00301","Done"),newTabUrl:v+"done",superpuduHash:"tl/search/label%3Adone",iconName:"__mdi:bigtop_done",color:"#34a853",colorIcon:!0,divider:g},IMPORTANT:{label:cjBasics.lang.i18n("cj_i18n_00184","Important"),newTabUrl:v+"imp",superpuduHash:"tl/Important",iconName:"__mdi:label_important_outline",color:B},CHAT:{label:cjBasics.lang.i18n("cj_i18n_00185","Chats"),newTabUrl:v+"chats",superpuduHash:"tl/Chats",iconName:"__mdi:cjg_hangout",color:B},SENT:{label:cjBasics.lang.i18n("cj_i18n_00303","Sent"),newTabUrl:v+"sent",superpuduHash:"tl/Sent%20Mail",iconName:"__mdi:send",color:B},REMINDERS:{label:cjBasics.lang.i18n("cj_i18n_00081","Reminders"),newTabUrl:v+"reminders",superpuduHash:"tl/Reminders",iconName:"__mdi:reminder",color:B},DRAFT:{label:cjBasics.lang.i18n("cj_i18n_00187","Drafts"),newTabUrl:v+"drafts",superpuduHash:"tl/Drafts",iconName:g?"__mdi:drafts":"__mdi:insert_drive_file",color:B},ALL:{label:cjBasics.lang.i18n("cj_i18n_00188","All mail"),newTabUrl:v+"all",superpuduHash:"tl/All%20Mail",iconName:"__mdi:stacked_email",color:B},SPAM:{label:cjBasics.lang.i18n("cj_i18n_00306","Spam"),newTabUrl:v+"spam",superpuduHash:"tl/Spam",iconName:"__mdi:report",divider:g,color:B},TRASH:{label:cjBasics.lang.i18n("cj_i18n_00005","Bin"),newTabUrl:v+"trash",superpuduHash:"tl/Trash",iconName:"__mdi:delete",color:B},SMARTLABEL_TRAVEL:{label:cjBasics.lang.i18n("cj_i18n_00308","Travel"),iconName:"__mdi:travel",newTabUrl:v+"trips",superpuduHash:"tl/search/category%3Atravel",color:"#9c27b0",colorIcon:!0},SV_I:{label:cjBasics.lang.i18n("cj_i18n_00309","Saved"),iconName:"__mdi:bookmark_border",superpuduHash:"tl/search/label%3Asaved",color:"#4285f4",colorIcon:!0},SMARTLABEL_RECEIPT:{label:cjBasics.lang.i18n("cj_i18n_00310","Purchases"),iconName:"__mdi:shopping_cart",superpuduHash:"tl/search/category%3Apurchases",color:"#795548",colorIcon:!0},SMARTLABEL_FINANCE:{label:cjBasics.lang.i18n("cj_i18n_00311","Finance"),iconName:"__mdi:trending_up",gmailPath:"search/category%3Afinance",superpuduHash:"tl/search/category%3Afinance",color:"#689f38",colorIcon:!0},SMARTLABEL_SOCIAL:{label:cjBasics.lang.i18n("cj_i18n_00312","Social"),iconName:"__mdi:people",superpuduHash:"tl/search/category%3Asocial",color:"#ea4335",colorIcon:!0},SMARTLABEL_PURE_NOTIF:{label:cjBasics.lang.i18n("cj_i18n_00313","Updates"),iconName:"__mdi:flag",superpuduHash:"tl/search/category%3Aupdates",color:"#ff6839",colorIcon:!0},SMARTLABEL_GROUP:{label:cjBasics.lang.i18n("cj_i18n_00182","Forums"),iconName:"__mdi:question_answer",superpuduHash:"tl/search/category%3Aforums",color:"#3f51b5",colorIcon:!0},SMARTLABEL_PROMO:{label:cjBasics.lang.i18n("cj_i18n_00315","Promos"),iconName:"__mdi:local_offer",superpuduHash:"tl/search/category%3Apromotions",color:"#00bcd4",colorIcon:!0},IO_UNIM:{label:cjBasics.lang.i18n("cj_i18n_00316","Low Priority"),iconName:"__mdi:low_priority",superpuduHash:"tl/search/label%3Alowpriority"}},Q={apply:cjBasics.lang.i18n("cj_i18n_01567","Apply"),archive:g?cjBasics.lang.i18n("cj_i18n_01734","Mark done"):cjBasics.lang.i18n("cj_i18n_01579","Archive"),delete:cjBasics.lang.i18n("cj_i18n_01563","Delete"),deleteForever:cjBasics.lang.i18n("cj_i18n_01577","Delete forever"),label:cjBasics.lang.i18n("cj_i18n_01571","Label…"),markUnread:cjBasics.lang.i18n("cj_i18n_01573","Mark as unread"),more:cjBasics.lang.i18n("cj_i18n_00047","More"),move:cjBasics.lang.i18n("cj_i18n_01570","Move…"),moveToInbox:cjBasics.lang.i18n("cj_i18n_01575","Move to inbox"),notSpam:cjBasics.lang.i18n("cj_i18n_01576","Not spam"),openInNew:cjBasics.lang.i18n("cj_i18n_01545","Open in a new tab"),reportSpam:cjBasics.lang.i18n("cj_i18n_01572","Report spam"),send:cjBasics.lang.i18n("cj_i18n_01565","Send")},$={archive:g?"__mdi:bigtop_done":"__mdi:archive",delete:"__mdi:delete",deleteForever:"__mdi:delete_forever",label:"__mdi:label",markUnread:"__mdi:email",more:cjBasics.navigator.isSafari?"__mdi:more_horiz":"__mdi:more_vert",move:"__mdi:drive_file_move",moveToInbox:"__mdi:move_to_inbox",notSpam:"__mdi:report_off",openInNew:"__mdi:open_in_new",reportSpam:"__mdi:report",send:"__mdi:send"};function E(e){c.cjceSendFrameCommand({method:"mailClickEl",value:e},Ne)}function Y(e,a,n){var t=v;e&&(t+=e),d.openTab(t,a,n)}function ee(e){var a="search/";e&&(a+=encodeURIComponent(e).split("%20").join("+")),Y(a)}function ae(e,a,n){var e=cjBasics.numbers.hex2dec(e),e=(t=[],(e={messageId:e,threadId:e}).threadId&&t.push(ve+"f:"+e.threadId),e.messageId&&t.push(Be+"f:"+e.messageId),e.mergeId&&t.push(Ie+"f:"+e.mergeId),Se(t.join("|"))),t="all";I.startsWith("cv/Draft")?t="drafts":I.startsWith("cv/Trash")?t="trash":I.startsWith("cv/Spam")&&(t="spam"),Y(t+"/"+e,a,n)}function L(){var e=I.split("/");ae(e[e.length-1])}function ne(){d.openTab(A+"?view=cm&fs=1&tf=1")}var te,k=null,ce={ad:{onBackAction:['#adstopbar [role="button"]'],label:cjBasics.lang.i18n("cj_i18n_01564","Ad"),mainActions:[["button","delete",['#adstopbar [role="button"]',1]]]},co:{onBackAction:['#cvtbt [role="button"]'],label:cjBasics.lang.i18n("cj_i18n_00317","Compose"),mainActions:[["fillbutton","send",['#cvtbt [role="button"]',1]]]},"lb-label":{onBackAction:['#lbttb [role="button"]'],label:cjBasics.lang.i18n("cj_i18n_01566","Label"),mainActions:[["fillbutton","apply",['#lbttb [role="button"]',1]]]},"lb-move":{onBackAction:['#lbttb [role="button"]'],label:cjBasics.lang.i18n("cj_i18n_01568","Move")},cv:{onBackAction:['#cv__cntbt [role="button"]'],label:cjBasics.lang.i18n("cj_i18n_01569","Thread"),mainActions:[["iconbutton","archive",[e]],["iconbutton","delete",[e,1]],["iconbutton","openInNew",L]],secondaryActions:{move:[e,3,2],label:[e,4,2],reportSpam:[e,6,2],markUnread:[e,8,2]}},"cv-draft":{onBackAction:['#cv__cntbt [role="button"]'],label:cjBasics.lang.i18n("cj_i18n_01574","Draft"),mainActions:[["iconbutton","archive",[e]],["iconbutton","delete",[e,1]],["iconbutton","openInNew",L]],secondaryActions:{moveToInbox:[e,3,2],label:[e,4,2],markUnread:[e,6,2]}},"cv-spam":{onBackAction:['#cv__cntbt [role="button"]'],label:cjBasics.lang.i18n("cj_i18n_01569","Thread"),mainActions:[["button","notSpam",[e]],["iconbutton","openInNew",L]],secondaryActions:{deleteForever:[e,2,1],label:[e,3,1],markUnread:[e,5,1]}},"cv-trash":{onBackAction:['#cv__cntbt [role="button"]'],label:cjBasics.lang.i18n("cj_i18n_01569","Thread"),mainActions:[["button","deleteForever",[e]],["iconbutton","openInNew",L]],secondaryActions:{moveToInbox:[e,2,1],label:[e,3,1],reportSpam:[e,4,1],markUnread:[e,6,1]}},"tl-selection":{onBackAction:[e,-1],label:cjBasics.lang.i18n("cj_i18n_01578","Selection"),mainActions:[["iconbutton","archive",[e]],["iconbutton","delete",[e,1]]],secondaryActions:{move:[e,3,2],label:[e,4,2],reportSpam:[e,6,2],markUnread:[e,7,2]}},"tl-selection-all":{onBackAction:[e,-1],label:cjBasics.lang.i18n("cj_i18n_01578","Selection"),mainActions:[["button","moveToInbox",[e]]],secondaryActions:{archive:[e,2,1],delete:[e,3,1],label:[e,4,1],reportSpam:[e,5,1],markUnread:[e,6,1]}},"tl-selection-draft":{onBackAction:[e,-1],label:cjBasics.lang.i18n("cj_i18n_01578","Selection"),mainActions:[["iconbutton","archive",[e,0]],["iconbutton","delete",[e,1]]],secondaryActions:{moveToInbox:[e,3,2],label:[e,4,2],markUnread:[e,5,2]}},"tl-selection-spam":{onBackAction:[e,-1],label:cjBasics.lang.i18n("cj_i18n_01578","Selection"),mainActions:[["button","notSpam",[e]]],secondaryActions:{deleteForever:[e,2,1],label:[e,3,1],markUnread:[e,4,1]}},"tl-selection-trash":{onBackAction:[e,-1],label:cjBasics.lang.i18n("cj_i18n_01578","Selection"),mainActions:[["button","deleteForever",[e]]],secondaryActions:{moveToInbox:[e,2,1],label:[e,3,1],reportSpam:[e,4,1],markUnread:[e,5,1]}}};function ie(a){var e=a.onBack,l=(Array.isArray(a.onBackAction)&&(e=function(){E(a.onBackAction)}),cjce.createElement("bm-ogb",{displayBack:!0,floating:!0,serviceLabel:W,pageLabel:a.label,onBack:e}));if(Array.isArray(a.mainActions)&&a.mainActions.forEach(function(e){a=e[0],n=e[1],t=e[2],e=$[n],c={label:Q[n],onClick:function(e){"move"===n?y=!0:"label"===n&&(y=!1),"function"==typeof t?t(e):E(t)}},i="ccbm-button","iconbutton"===a?(i="ccbm-iconbutton",c.iconName=e):(c.color=!0,c.outline="fillbutton"!==a,c.fill="fillbutton"===a);var a,n,t,c,i,e=cjce.createElement(i,c);l.cjceAppendChild(e)}),a.secondaryActions){var n,t={};for(n in a.secondaryActions)Array.isArray(a.secondaryActions[n])&&(t[n]={label:Q[n],iconName:$[n]});e=cjce.createElement("ccbm-iconbuttonmenu",{open:"end",label:cjBasics.lang.i18n("cj_i18n_06294","More actions"),items:t,onClick:function(e){"move"===e?y=!0:"label"===e&&(y=!1),E(a.secondaryActions[e])}});l.cjceAppendChild(e)}return a.additionalFragment&&l.cjceAppendChild(a.additionalFragment),l}function R(e){k&&ce[k]&&ce[k].toolbar&&(ce[k].toolbar.hidden=!0),(k=e)&&((e=ce[e]).toolbar?e.toolbar.hidden=!1:(e.toolbar=ie(e),i.appendChild(e.toolbar)))}function le(){var e=I.startsWith("tl")&&!t,a=!I||e&&("tl/"===I||"tl/Inbox"===I||I.startsWith("tl/priority")||"tl/search/label%3Apinned"===I);i.classList.toggle("bm-p-mail--inboxview",a),I.startsWith("mn")?(U("tl"),R()):I.startsWith("er")||I.startsWith("pr")?(R(),U("tl")):I.startsWith("co")?R("co"):I.startsWith("ad")?R("ad"):I.startsWith("cv/Draft")?R("cv-draft"):I.startsWith("cv/Spam")?R("cv-spam"):I.startsWith("cv/Trash")?R("cv-trash"):I.startsWith("cv")?R("cv"):I.startsWith("lb")?R(y?"lb-move":"lb-label"):R(),n&&(n.hidden=!e)}function oe(e,a){a=a||{},a.prettyPrint="false",e=cjBasics.urlParams.attach("https://content.googleapis.com/gmail/v1/users/me/"+e,a);return cjgApis.request(e,{fetchAs:"json"},{account:d.account,requiredScopes:H})}function re(e){return-1===X.indexOf(e.id)}function se(){return oe("labels",{fields:"labels(id,name,type)"}).then(function(e){var a=e&&e.labels||[],e=a.filter(re).map(function(a){return oe("labels/"+a.id,{fields:"threadsUnread"}).then(function(e){return e&&e.threadsUnread||null},function(){return null}).then(function(e){a.unreadCount=e})});return Promise.all(e).then(function(){return cjgApis.cache.setItem(d.account,"bm_cache_v33__mail__apilabels",a),a})},function(e){if(e&&"not_authorized"===e.cjg_error)return"not_authorized"})}function de(e,n){e.forEach(function(e){var a=w[e];a.id=e,n.push(a)})}function me(){var e=cjgFrontend.urls.getShortcutUrl("1188",d.account);d.openTab(e)}function ue(t){var e="not_authorized"!==t,a=t,n=[];if(f||de(G,n),Array.isArray(a)){n.forEach(function(e){for(var a=0;a<t.length;a++)if(t[a].id===e.id){var n="string"!=typeof(n=t[a].unreadCount)&&"number"!=typeof n||"0"===n.toString()?null:n;n&&(e.infoSuffix=n);break}});for(var c=[],i=g?"__mdi:stacked_email":"__mdi:label",l=(a.forEach(function(e){var a,n;"system"!==e.type&&(a=!g&&e.color&&e.color.backgroundColor,w.TRASH.divider=!g,n=e.name,c.push({id:e.id,theme:"solid",newTabUrl:g?null:D+n,label:n,iconName:i,infoSuffix:e.infoSuffix,color:a,colorIcon:Boolean(a),superpuduHash:"tl/"+n.toLowerCase().replace(/ |\//g,"-")}))}),c.sort(function(e,a){return e.label>a.label?1:-1}),"///////////"),o=0;o<c.length;o++){var r=c[o],s=r.label;s.startsWith(l)?(r.label=s.replace(l,""),r.indent=!0):l=s+"/"}0<c.length&&n.push({header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_06318","Labels")}),n=n.concat(c)}e||(w[g?"IO_UNIM":"TRASH"].divider=!0),g&&de(z,n);a=n[n.length-1];return a&&(a.divider=!0),n.push({header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_01539","Related apps")},{id:"tasks",iconName:"__mdi:task_alt",label:cjBasics.lang.i18n("cj_i18n_00439","Tasks"),shortcutId:"140",external:!d.servicesDatabase.tasks},{id:"chat",iconName:"__mdi:chat_bubble_outline",label:cjBasics.lang.i18n("cj_i18n_00819","Chat"),shortcutId:"559",external:!d.servicesDatabase.chat},{id:"meet",iconName:"__mdi:meet",label:cjBasics.lang.i18n("cj_i18n_00809","Meet"),shortcutId:"545",external:!d.servicesDatabase.meet,additionalFragment:cjce.createElement("ccbm-iconbutton",{iconName:"__mdi:video_call",label:cjBasics.lang.i18n("cj_i18n_06916","New meeting"),onClick:me})}),{labels:n,authorized:e}}function _e(e,a){a=a.newTabUrl||cjgFrontend.urls.getShortcutUrl(a.shortcutId,d.account);d.openTab(a)}function be(e){return cjce.createElement("bm-navlist",{compact:!f,isSelector:!0,selectedId:q,items:e,onChange:function(e,a){"chat"===e||"meet"===e||"tasks"===e?(d.pageManager.navigate(e),o.cjceSelectedId=q):f?_e(0,a):("REMINDERS"===(q=e)?_?_.hidden=!1:((_=cjce.createElement("cjmd-container")).classList.add("bm-p-mail-sheet","bm-p-mail-reminders"),cjce.applyTemplate(s,"bm-loadingbar"),i.appendChild(_),d.requirePage("reminderswithgapi").then(function(){var e=cjce.createElement("bm-p-reminderswithgapi__reminderslist",{bmApis:d,onLoadChange:function(e){i.cjceSetLoading(e)}});_.appendChild(e)})):(U(a.superpuduHash),_&&(_.hidden=!0)),s.cjceSetPageLabel(a.label),"INBOX"!==e&&i.classList.remove("bm-p-mail--inboxview"),g?(r.style.color=a.colorIcon?a.color:"",P.cjceChecked=!1):m&&(m.cjceSelectedId=p,x=p,pe()),"INBOX"===e&&i.classList.add("bm-p-mail--inboxview"))},onNewTab:_e})}function pe(){}function he(e){!g&&u&&(e.length<2?(u.hidden=!0,u.textContent=""):(p=e[0],w.INBOX.superpuduHash=ye(p),O={},e.forEach(function(e){O[e]=J[e]}),m=cjce.createElement("ccbm-tabs",{color:B,items:O,onChange:function(e){U(ye(x=e))},selectedId:x||p}),u.textContent="",1<e.length&&(u.hidden=!1),u.appendChild(m)))}function C(e,a){var n,t,e=ue(e);JSON.stringify(h)!==JSON.stringify(e.labels)&&(h=e.labels,n=l.contains(document.activeElement)&&l.classList.contains("cjmd-sheet--open"),t=o,o=be(e.labels),cjce.replaceChild(l,o,t),n&&l.cjceToggleState(!0),a)&&!e.authorized&&(t=cjce.createElement("bm-inlinepermission",{description:cjBasics.lang.i18n("cj_i18n_01155","To list your labels and give you unread counts, please grant read-only access to your labels and unread count"),onClick:function(){cjgApis.auth.requestPermissions(d.account,H)}}),o.insertBefore(t,o.querySelector(".cjmd-subheader")))}function U(e){c.src=j.split("#")[0]+"#"+e,I=e,le()}function je(e){t=e,_&&(_.hidden=!0),n.hidden=!0,i.classList.remove("bm-p-mail--inboxview"),U("tl/search/"+e)}function ge(){s=cjce.createElement("bm-ogb",{drawer:{color:"#212121"},serviceIcon:F,serviceLabel:W,pageLabel:cjBasics.lang.i18n("cj_i18n_00299","Inbox"),searchbox:{onClear:function(){t="",n.hidden=!1,i.classList.add("bm-p-mail--inboxview"),E(['#tltbt [role="button"]'])},onSubmit:f?ee:je,onMetaSubmit:ee,submitInNewTab:f},bmApis:d,onNewTab:function(){var a,n;t?ee(t):(a=!1,n=o&&o.cjceSelectedId,h&&n&&h.forEach(function(e){e.id===n&&(d.openTab(e.newTabUrl),a=!0)}),a||Y(v))}}),i.appendChild(s),f||(g?((a=cjce.createElement("ccbm-switch",{compact:!0,icon:"__mdi:push_pin",label:cjBasics.lang.i18n("cj_i18n_01580","Pinned"),onChange:function(){var e=a.cjceChecked;s.cjceSetPageLabel(e?cjBasics.lang.i18n("cj_i18n_01580","Pinned"):cjBasics.lang.i18n("cj_i18n_00299","Inbox")),U(w[e?"PINNED":"INBOX"].superpuduHash)}})).classList.add("bm-p-mail-pintoggle"),P=a,s.cjceAppendChild(P)):((u=cjce.createElement("cjmd-appbar",{secondary:!0})).classList.add("bm-p-mail-prioritytabs"),s.appendChild(u))),r=s.querySelector(".cjmd-navigator"),g&&r&&(r.style.color=B),(l=s.cjceDrawerEl).classList.add("bm-p-mail-drawer"),C([]);var a,e=s.cjceSearchboxEl;f||e.classList.add("bm-p-mail-searchbox"),d.setOnPageDisplayHandler(e.select)}function M(){N&&c.cjceSendFrameCommand({method:"mailAtToken",value:N},Ne)}function fe(e,a){Ae.cookies.get({name:V,url:e},function(e){e=e&&e.value;!e||N&&!a||(N=e,c&&M())})}cjBasics.webRequest.registerMainWorldScript([a],["/pages/mail/cs-mw-webapp.js"]),ge(),e=[cjce.createElement("gmd-fab",{label:cjBasics.lang.i18n("cj_i18n_00317","Compose"),onClick:function(){f?ne():U("co")},onMetaClick:ne})],f||e.push(cjce.createElement("ccbm-fab",{mini:!0,color:B,iconName:"__mdi:create",label:cjBasics.lang.i18n("cj_i18n_06325","Compose in new tab"),onClick:ne})),g||e.push(cjce.createElement("ccbm-fab",{mini:!0,color:"#00897b",iconName:"__mdi:video_call",label:cjBasics.lang.i18n("cj_i18n_06916","New meeting"),onClick:me})),n=cjce.createElement("ccbm-fabgroup",{items:e}),i.appendChild(n),f?(e=cjce.createElement("cjmd-container",{fabPadding:!0,scrollable:!0,shadow:"thinOnScroll"}),de(G,te=[]),te=cjce.createElement("bm-navlist",{items:te,onClick:_e,onNewTab:_e}),e.appendChild(te),i.appendChild(e)):(cjBasics.webRequest.handleIframeHeaders([a],{handleFirefoxInject:!0,handleSwCache:!0,useMobileUserAgent:!1}),cjBasics.webRequest.handleIframeHeaders([Te+"/*"+a,Te+"/*"+encodeURIComponent(a)]),fe(A,!1),cjBasics.webRequest.addListener("onBeforeSendHeaders",function(e){for(var a=e.requestHeaders,n=0;n<a.length;n++){var t=a[n];if("cookie"===t.name.toLowerCase()){var t=t.value;-1!==t.indexOf(V)&&(t=t.split(V+"=")[1].split(";")[0])&&-1===t.indexOf(T)&&(N=t);break}}},{urls:[Ne+"/*/s*at=*"],types:["xmlhttprequest"]},["requestHeaders","extraHeaders"]),cjBasics.webRequest.addListener("onBeforeRequest",function(e){return{redirectUrl:e.url.replace("at="+T,"at="+N).replace(we,A)}},{urls:[Ne+"/*/s*at="+T+"*"],types:["xmlhttprequest"]},["blocking"]),cjBasics.webRequest.addListener("onBeforeRequest",function(e){return{redirectUrl:e.url.replace("at="+T,"at="+N)}},{urls:[Ne+"/*/photos*at="+T+"*"],types:["image"]},["blocking"]),cjgApis.cache.getItem(d.account,Le).then(function(e){var a=Ee+(e?e+"/":"");e&&fe(a,!0),j=cjBasics.urlParams.attach(a,{mui:T,hl:"en",authuser:d.account.authuser}),c=cjce.createElement("bm-iframe",{sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",src:j+"#"+I,solid:!0,shadow:!0,onLoad:function(){M(),i.cjceSetLoading(!1)},onBmMessage:function(e,a){var n,t,c;"mailContentBlocking"===e?cjBasics.navigator.isFirefox&&(b?b.hidden=!1:((b=cjce.createElement("cjmd-container")).classList.add("bm-p-mail-sheet","bm-p-mail-contentblocking"),c=cjce.createElement("bm-app",{pageId:"pagestateupdate",pageParameters:{contentBlocking:"gmail"},bmApis:d}),b.appendChild(c),i.appendChild(b))):"mailCachedLabels"===e?Array.isArray(a)&&2<a.length&&(c=(e=>{for(var a=[],n=[],t={priority:a,other:n},c=!1,i=0;i<e.length;i++){var l=e[i],o=l.id,o=((c="^all"===o?!0:c)?(n.push(l),o.startsWith("^")&&(l.type="system")):o in J&&a.push(o),K[l.id]);o&&(l.id=o)}return cjgApis.cache.setItem(d.account,"bm_cache_v33__mail__sqllabels2",t),t})(a),S=!0,he(c.priority),C(c.other)):"mailOpenThreadInNew"===e?ae((n=_slicedToArray(a,3))[0],n[1],n[2]):"mailHashChange"===e?(I=a,le()):"mailPageUrl"===e?j=a:"mailSessionId"===e?a&&(cjgApis.cache.setItem(d.account,Le,a),t=Ee+a+"/",cjBasics.webRequest.addListener("onBeforeRequest",function(e){return{redirectUrl:e.url.replace(t,A+"s/")}},{urls:[t+"?view=att&*"],types:["image"]},["blocking"])):"mailSelectionState"===e?a?I.startsWith("tl/Draft")?R("tl-selection-draft"):I.startsWith("tl/Spam")?R("tl-selection-spam"):I.startsWith("tl/Trash")?R("tl-selection-trash"):I.startsWith("tl/All")?R("tl-selection-all"):I.startsWith("tl")&&R("tl-selection"):R():"bmCstOpenUrl"===e&&(e=(n=_slicedToArray(a,3))[0],a=n[1],n=n[2],e=cjBasics.cleanBmUrl(e),d.openTab(e,a,n))}}),i.appendChild(c),M(),setTimeout(M,100),setTimeout(M,200),setTimeout(M,300),setTimeout(M,1e3)}),"openDatabase"in window||(he(Z),cjgApis.cache.getItem(d.account,"bm_cache_v33__mail__apilabels").then(function(e){e&&Array.isArray(e)&&(S||C(e))}),se().then(function(e){S||C(e,!0)})),cjgApis.cache.getItem(d.account,"bm_cache_v33__mail__sqllabels2").then(function(e){return"object"==typeof e&&null!==e&&"priority"in e?e:null}).then(function(e){S||e&&(he(e.priority),C(e.other))}))})})();