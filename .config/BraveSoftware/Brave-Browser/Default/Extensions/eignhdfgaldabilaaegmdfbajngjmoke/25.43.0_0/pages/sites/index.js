"use strict";(()=>{var h=document,p=location.origin,b="https://sites.google.com";cjce.registerTemplate("bm-p-sites",function(e,o){var t,a,n,c,i="my",r=b+"/site/sites/system/app/pages/meta/",l={my:{label:cjBasics.lang.i18n("cj_i18n_00054","My sites"),iconName:"__mdi:drive_site",shortcutId:"130"},trash:{label:cjBasics.lang.i18n("cj_i18n_00113","Deleted sites"),iconName:"__mdi:delete",newTabUrl:r+"dashboard/deleted?authuser="+o.account.authuser,divider:!0},atari:{label:cjBasics.lang.i18n("cj_i18n_00112","Sites"),iconName:"__mdi:atari_site",color:"#3f51b5",colorIcon:!0,shortcutId:"504"},manager:{label:cjBasics.lang.i18n("cj_i18n_06643","Classic Sites Manager"),iconName:"__mdi:drive_site",color:!0,colorIcon:!0,shortcutId:"1075",external:!0}};function s(e){e=cjBasics.urlParams.attach(r+"search",{scope:"my",q:e,authuser:o.account.authuser});o.openTab(e)}function d(){var c=cjce.createElement("bm-navlist",{isSelector:!0,selectedId:"my",items:l,onChange:function(e,t){var a;"atari"===e?(o.pageManager.navigate("atari"),c.cjceSelectedId=i):(a=l[i=e=e].label,n.cjceSetPageLabel(a),u(e))},onNewTab:function(e,t){t=t.newTabUrl||cjgFrontend.urls.getShortcutUrl(t.shortcutId||"130",o.account);o.openTab(t)}});a.appendChild(c)}function u(e){t.textContent="";var c=cjce.createElement("cjmd-container",{scrollable:!0,fabPadding:!0,shadow:"thinOnScroll"}),n=(cjce.applyTemplate(c,"bm-loading"),t.appendChild(c),"trash"===e);(n?m("dashboard/deleted").then(function(e){if(-1===e.indexOf('<ul id="sites-dashboard-list-mobile">'))return[];var e=e.replace(/onclick/g,"data-click").split('<ul id="sites-dashboard-list-mobile">')[1].split("</ul>")[0],t=(new DOMParser).parseFromString(e,"text/html").body.children;if(0===t.length||!t[0]||!t[0].querySelector(".sites-dashboard-list-mobile-name"))return[];for(var a=[],c=0;c<t.length;c++){var n=t[c],i=n.querySelector("a").dataset.click.split("'")[1].split("'")[0],r=n.querySelector(".sites-dashboard-list-mobile-name").textContent,l=b+"/site/"+i+"?authuser="+o.account.authuser,s=n.querySelector("div:nth-child(2)").textContent.split(":")[1],n=n.querySelector("div:nth-child(3)").textContent.split(":")[1];a.push({url:l,primaryText:r,secondaryText:"Deleted by"+s+" on"+n,tertiaryText:"/site/"+i})}return a}):m("dashboard").then(function(e){if(-1===e.indexOf("<ul>"))return[];var e=e.split("<ul>")[1].split("</ul>")[0],t=(new DOMParser).parseFromString(e,"text/html").body.children;if(0===t.length||!t[0]||!t[0].querySelector(".your-site-title"))return[];for(var a=[],c=0;c<t.length;c++){var n=t[c],i={url:b+n.querySelector(".your-site-title").href.replace(p,"")+"?authuser="+o.account.authuser,primaryText:n.querySelector(".your-site-title").textContent,secondaryText:n.querySelector(".sites-dash-site-url").textContent};n.querySelector(".wiki_summarized")&&(i.tertiaryText=n.querySelector(".wiki_summarized").textContent),a.push(i)}return a})).then(function(e){var t,a;0===e.length?(a=n,a=cjce.createElement("cjmd-emptystate",{label:cjBasics.lang.i18n("cj_i18n_00055","No sites found"),subLabel:a?null:cjBasics.lang.i18n("cj_i18n_00114","To add a new site, click the add button"),iconName:"__mdi:drive_site"}),c.appendChild(a)):(t=cjce.createElement("cjmd-list"),e.forEach(function(e){e=(e=>{var t=cjce.createElement("cjmd-item",{multiline:!0}),a=(t.addEventListener("click",function(){o.openTab(e.url)}),cjce.createElement("cjmd-icon",{favicon:e.url})),c=(t.appendChild(a),(a=h.createElement("div")).className="cjmd-item__body",t.appendChild(a),h.createElement("div"));return c.className="cjmd-item__header",c.textContent=e.primaryText,a.appendChild(c),(c=h.createElement("div")).className="cjmd-secondarytext",c.textContent=e.secondaryText,a.appendChild(c),e.tertiaryText&&((c=h.createElement("div")).className="cjmd-secondarytext",c.textContent=e.tertiaryText,a.appendChild(c)),t})(e);t.appendChild(e)}),c.appendChild(t)),c.cjceSetLoading(!1)})}function m(e){e=cjBasics.urlParams.attach(r+e,{mobile:"true",hl:"en",authuser:o.account.authuser});return cjBasics.ajax(e)}n=cjce.createElement("bm-ogb",{drawer:!0,serviceIcon:"jotspot",serviceLabel:cjBasics.lang.i18n("cj_i18n_00111","Classic Sites"),pageLabel:cjBasics.lang.i18n("cj_i18n_00054","My sites"),searchbox:{onSubmit:s,submitInNewTab:!0},bmApis:o,onNewTab:function(){var e=l[i].newTabUrl;o.openTab(e)}}),e.appendChild(n),a=n.cjceDrawerEl,d(),o.setOnPageDisplayHandler(n.cjceSearchboxEl.select),c=cjce.createElement("ccbm-fabgroup",{items:[cjce.createElement("gmd-fab",{label:cjBasics.lang.i18n("cj_i18n_00115","Create new site"),onClick:function(){var e=b+o.wizPath+"/create";o.openTab(e)}})]}),e.appendChild(c),t=cjce.createElement("cjmd-container"),e.appendChild(t),u(i)})})();