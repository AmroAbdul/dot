"use strict";(()=>{var w=document,k="undefined"!=typeof chrome&&chrome||{};function y(){cjBasics.reloadAll(!1)}function x(n){return browserStorage.local.get().then(function(e){e=Object.keys(e).filter(function(e){return(-1===e.indexOf("bm_pref")||n)&&!e.startsWith("cj_landing_")&&!e.startsWith("__sync_storage__")&&"__sync_fallback__"!==e&&(!e.endsWith("bm_cache_v32__bookmarks__bookmarks")||n)});return 0===e.length?null:browserStorage.local.remove(e)})}function C(e){var n=w.createElement("p");return n.classList.add("cjmd-secondarytext"),n.textContent=e,n}function E(e){return cjce.createElement("cjmd-title",{label:e})}function n(n){var e=(new Date).toISOString().split("T")[0],t={},a=k.runtime.getManifest(),a=(n._info={extensionName:a.name,extensionUrl:a.homepage_url,extensionVersion:a.version,exportDate:e,vendor:cjBasics.navigator.isFirefox?"firefox":cjBasics.navigator.isSafari?"safari":"chromium"},Object.keys(n).sort().forEach(function(e){t[e]=n[e]}),cjBasics.download.createBlobUrlFromJson(t)),e="bmfg-settings-".concat(e,".json");cjBasics.download.downloadLink(a,e)}function T(e){for(var n=Object.keys(e),t=0;t<n.length;t++){var a=n[t];a.startsWith("bm_pref__")&&"bm_pref__applauncher__clicks"!==a||delete e[a]}return e}function N(e){return a=e,new Promise(function(n,t){var e=new FileReader;e.addEventListener("error",function(e){t(e)}),e.addEventListener("load",function(e){n(e.currentTarget.result)}),e.readAsText(a)}).then(function(e){return JSON.parse(e)}).then(function(e){if(e&&"object"==typeof e)return e;throw new Error("invalid import format")});var a}function S(){k.storage.sync.get(null,function(e){n(T(e))})}cjce.registerTemplate("bm-p-extensionsettings",function(e,t){e.classList.add("bm-p-extensionsettings"),e.style.setProperty("--ccc-accent-color",t.darkMode?"#81a8e6":"#496ddb");var a="options"===t.environment;function n(){cjce.applyTemplate(e,"bm-loading"),setTimeout(y,2e3)}function i(e){e=T(e);k.storage.sync.set(e,n)}function s(e){N(e).then(i)}function c(n){return cjce.createElement("ccbm-button",{color:n.color||!0,label:n.label,outline:!0,onClick:n.onClick||function(){var e=n.newTabUrl||cjgFrontend.urls.getShortcutUrl(n.shortcutId,t.account);t.openTab(e)}})}function o(e){var e="https://apps.jeurissen.co/black-menu-for-google/contact#"+e+"|",n=["Browser: "+cjBasics.navigator.getEnvironment(),"Extension version: "+k.runtime.getManifest().version,"",""];e+=encodeURIComponent(n.join("\n")),t.openTab(e)}cjBasics.navigator.isFirefox&&a&&e.classList.add("bm-p-extensionsettings--firefox"),a||e.classList.add("bm-p-extensionsettings--sidebar");var l=cjce.createElement("cjmd-container",{scrollable:!0,shadow:!a&&"thinOnScroll"});function r(e){var n=cjce.createElement("cjmd-card",{withPadding:!0});if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t]&&n.appendChild(e[t]);return n}l.dataset.view="settings",a||(_=cjce.createElement("bm-ogb",{pageLabel:cjBasics.lang.i18n("cj_i18n_01581","Extension settings"),serviceIcon:"black_menu_for_google"}),e.appendChild(_),_=cjce.createElement("cjmd-appbar",{secondary:!0}),g=cjce.createElement("ccbm-tabs",{items:{settings:cjBasics.lang.i18n("cj_i18n_00291","Home"),notifications:cjBasics.lang.i18n("cj_i18n_00296","Notifications"),help:cjBasics.lang.i18n("cj_i18n_01583","Support & Contribute")},onChange:function(e){l.dataset.view=e},selectedId:"settings"}),_.appendChild(g),e.appendChild(_)),e.appendChild(l);var g=[{label:cjBasics.lang.i18n("cj_i18n_00416","Gmail"),iconName:"gmail",newTabUrl:"https://support.google.com/mail/answer/1075549"},{label:cjBasics.lang.i18n("cj_i18n_00302","Calendar"),iconName:"calendar",newTabUrl:"https://support.google.com/calendar/answer/37242"},{label:cjBasics.lang.i18n("cj_i18n_00390","Drive"),iconName:"drive",newTabUrl:"https://support.google.com/drive/answer/6318501"},{label:cjBasics.lang.i18n("cj_i18n_00819","Chat"),iconName:"chat",newTabUrl:"https://support.google.com/hangoutschat/answer/7655718"},{label:cjBasics.lang.i18n("cj_i18n_00809","Meet"),iconName:"meet",newTabUrl:"https://support.google.com/meet/answer/7353922"},{label:cjBasics.lang.i18n("cj_i18n_00420","Hangouts"),iconName:"hangouts",newTabUrl:"https://support.google.com/hangouts/answer/3111919"},{label:cjBasics.lang.i18n("cj_i18n_00443","Voice"),iconName:"voice",newTabUrl:"https://support.google.com/voice/answer/168521"},{label:cjBasics.lang.i18n("cj_i18n_00423","Maps"),iconName:"maps",newTabUrl:"https://support.google.com/maps/answer/6149565"},{label:cjBasics.lang.i18n("cj_i18n_00445","YouTube"),iconName:"youtube",newTabUrl:"https://support.google.com/youtube/answer/3382248"},{label:cjBasics.lang.i18n("cj_i18n_00730","Duo"),iconName:"duo",newTabUrl:"https://support.google.com/duo/answer/7496896"},{label:cjBasics.lang.i18n("cj_i18n_00554","My Business"),iconName:"my_business",newTabUrl:"https://support.google.com/business/answer/7198436"},{label:cjBasics.lang.i18n("cj_i18n_00305","Classroom"),iconName:"classroom",newTabUrl:"https://support.google.com/edu/classroom/answer/6141557"}].sort(function(e,n){return e.label>n.label?1:-1});for(var u,m,_,p,d,j,b,h,f,B=[{id:"settings",label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),items:[r([E(cjBasics.lang.i18n("cj_i18n_01585","Customize menu")),C(cjBasics.lang.i18n("cj_i18n_01584","To add pages to the black menu bar, click on 'customize' at the bottom of the menu bar and click or drag the services you want to add. If you want to remove services, you can drag/drop them to the left side of the extension or click the remove icon.")),a?null:c({label:cjBasics.lang.i18n("cj_i18n_01586","Start customizing"),onClick:function(){t.pageManager.navigate("customize")}})]),r([E(cjBasics.lang.i18n("cj_i18n_01587","Theme")),(j=["auto","light","classic","dark"],b={auto:cjBasics.lang.i18n("cj_i18n_01792","Auto"),classic:cjBasics.lang.i18n("cj_i18n_01611","Classic"),dark:cjBasics.lang.i18n("cj_i18n_01612","Dark"),light:cjBasics.lang.i18n("cj_i18n_01613","Light")},(h=w.createElement("div")).className="bm-p-extensionsettings-theme",f=j.map(function(n){var e=w.createElement("div"),t=(e.className="bm-p-extensionsettings-theme__item","auto"===n&&(e.title=cjBasics.lang.i18n("cj_i18n_01793","Automatically adapt to Operating System preference")),e.addEventListener("click",function(e){e=e.currentTarget;e!==d&&(d.classList.remove("bm-p-extensionsettings-theme__item--selected"),e.classList.add("bm-p-extensionsettings-theme__item--selected"),browserStorage.sync.set({bm_pref__main__theme:n}).then(y))}),h.appendChild(e),w.createElement("img")),t=(t.draggable=!1,t.className="bm-p-extensionsettings-theme__icon",t.src="/pages/extensionsettings/"+n+".svg",e.appendChild(t),cjce.createElement("cjmd-secondarytext",{label:b[n]}));return t.classList.add("bm-p-extensionsettings-theme__title"),e.appendChild(t),e}),browserStorage.sync.getItem("bm_pref__main__theme").then(function(e){e=j.indexOf(e);(d=f[e=e<0?0:e]).classList.add("bm-p-extensionsettings-theme__item--selected")}),h)]),r([E(cjBasics.lang.i18n("cj_i18n_04163","Language")),(m="bm_pref__main__language",_=w.createElement("div"),p=cjce.createElement("ccbm-switch",{label:cjBasics.lang.i18n("cj_i18n_06432","Use English instead of the browser language"),onChange:function(e){(e?browserStorage.sync.setItem(m,"en"):browserStorage.sync.remove(m)).then(y)}}),_.appendChild(p),browserStorage.sync.getItem(m).then(function(e){p.cjceChecked="en"===e}),_),w.createElement("br"),C(cjBasics.lang.i18n("cj_i18n_01604","We are in desperate need for community translators. We would highly appreciate it if you could help us out.")),c({label:cjBasics.lang.i18n("cj_i18n_01605","Help with translations"),newTabUrl:"https://apps.jeurissen.co/black-menu-for-google/translate"})]),r([E(cjBasics.lang.i18n("cj_i18n_01594","Granted permissions")),C(cjBasics.lang.i18n("cj_i18n_01595","For some services in Black Menu for Google, we ask additional permissions for the functioning of certain features.")),c({label:cjBasics.lang.i18n("cj_i18n_01596","Revoke all permissions"),onClick:function(){cjgApis.auth.revokePermissions(t.account).then(n,n)}})]),r([E(cjBasics.lang.i18n("cj_i18n_07267","Cache control")),c({label:cjBasics.lang.i18n("cj_i18n_01592","Remove all cache"),onClick:function(){x().then(y)}})]),r([E(cjBasics.lang.i18n("cj_i18n_01653","Manage settings")),C(cjBasics.lang.i18n("cj_i18n_01654","Settings are saved automatically and are synced via extension sync if extension sync for extensions is enabled.")),c({label:cjBasics.lang.i18n("cj_i18n_01655","Import settings"),onClick:function(){var n,e;n=s,(e=w.createElement("input")).type="file",e.addEventListener("change",function(e){n(e.target.files[0])}),e.click()}}),c({label:cjBasics.lang.i18n("cj_i18n_01656","Export settings"),onClick:S}),c({color:"#ea4335",label:cjBasics.lang.i18n("cj_i18n_01590","Reset settings to default"),onClick:function(){Promise.all([browserStorage.sync.clear(),x(!0)]).then(y)}})])]},{id:"notifications",label:cjBasics.lang.i18n("cj_i18n_00296","Notifications"),items:[r([E(cjBasics.lang.i18n("cj_i18n_06431","Desktop notifications")),C(cjBasics.lang.i18n("cj_i18n_01589","To enable or configure desktop notifications, select the product and follow the instructions.")),((u=cjce.createElement("bm-shortcutlist",{onNewTab:function(e){e=cjBasics.urlParams.attach(e,{co:"GENIE.Platform=Desktop",authuser:"0"===t.account.authuser?null:t.account.authuser});t.openTab(e)},items:g})).classList.add("bm-p-extensionsettings-applist"),u)])]},{id:"help",label:cjBasics.lang.i18n("cj_i18n_01583","Support & Contribute"),items:[r([E(cjBasics.lang.i18n("cj_i18n_00349","Feedback & Support")),C(cjBasics.lang.i18n("cj_i18n_01602","If you have any questions, feature requests or bug reports, let us know. We can't guarantee all messages get an answer due to the vast amount of messages we get.")),c({label:cjBasics.lang.i18n("cj_i18n_00350","Ask a question"),onClick:function(){o("question")}}),c({color:"#34a853",label:cjBasics.lang.i18n("cj_i18n_00352","Request a feature"),onClick:function(){o("feature_request")}}),c({color:"#ea4335",label:cjBasics.lang.i18n("cj_i18n_00351","Report a bug"),onClick:function(){o("bug_report")}})]),r([E(cjBasics.lang.i18n("cj_i18n_01603","Translations")),C(cjBasics.lang.i18n("cj_i18n_01604","We are in desperate need for community translators. We would highly appreciate it if you could help us out.")),c({label:cjBasics.lang.i18n("cj_i18n_01605","Help with translations"),newTabUrl:"https://apps.jeurissen.co/black-menu-for-google/translate"})]),r([E(cjBasics.lang.i18n("cj_i18n_00354","Donate")),C(cjBasics.lang.i18n("cj_i18n_01606","If you like the extension - and we sincerely hope you do - consider donating. It will help the development process and make it easier for us to improve it for everyone.")),c({label:cjBasics.lang.i18n("cj_i18n_00354","Donate"),newTabUrl:"https://apps.jeurissen.co/black-menu-for-google/donate"})])]}],v=0;v<B.length;v++)(n=>{var e;a&&((e=cjce.createElement("cjmd-title",{label:B[n].label})).classList.add("bm-p-extensionsettings-sectiontitle"),l.appendChild(e)),B[n].items.forEach(function(e){e.dataset.id=B[n].id,l.appendChild(e)})})(v)})})();