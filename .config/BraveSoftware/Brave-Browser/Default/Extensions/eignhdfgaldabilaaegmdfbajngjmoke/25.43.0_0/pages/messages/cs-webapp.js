"use strict";(()=>{var e,t,n,s,r=window,u=r.location,m=document,d=("undefined"!=typeof chrome&&chrome||{}).runtime.getURL("PATH/").replace("/PATH/",""),l=d.startsWith("safari-web-extension://"),g=!l&&d.startsWith("moz-extension://");function f(e,t,n){r.parent.postMessage({bm_method:e,bm_request:n,bm_value:t},d)}function h(e){m.documentElement.dataset.bmMessagesHideMenus="1",m.querySelector("button[data-e2e-main-nav-menu]").click(),setTimeout(function(){setTimeout(function(){m.documentElement.dataset.bmMessagesHideMenus="0"},50),m.querySelector(e).click()},50)}function v(){(m.querySelector('a[href="/web/conversations"]')||m.querySelector(".back-button")).click()}function b(){h("button[data-e2e-main-nav-menu-archived], a[data-e2e-main-nav-menu-archived]")}e=function(e,t){return"messages"===t&&"https://messages.google.com"===e},t=function(){var n,s,a,o,i,c,e=-1!==u.search.indexOf("bm_udm=1");function t(){m.body.classList.toggle("dark-theme",e),m.body.classList.toggle("dark-mode",e)}!function e(){m.body?(t(),setTimeout(t,100),setTimeout(t,200),setTimeout(t,1e3)):setTimeout(e,10)}(),function e(){var t=u.href,t=(n!==t&&(n=t,t="conversations",(a=u.pathname).contains("/auth")?t="authentication":a.contains("/settings")?t="settings":a.contains("/conversations/new")?t=-1===n.indexOf("mode=group")?"newConversation":"newGroupConversation":a.contains("/conversations/")?t="conversation":a.contains("/calls/")?t="calls":a.contains("/voicemail/")&&(t="voicemail"),t!==s&&f("messagesUpdateView",s=t),f("messagesBackState",!a.contains("/conversations")&&!a.contains("/auth"))),m.querySelector("h2[data-e2e-header-title]")),t=t&&t.textContent,t=(o!==t&&f("messagesPageTitle",o=t),m.querySelector("button.notifications-button[data-e2e-is-muted")),t=t&&"true"===t.dataset.e2eIsMuted;i!==t&&f("messagesMutedState",i=t),setTimeout(e,100)}(),c=function(e,t){"messagesActivateMenuItem"===e&&("archived"===(e=t)?a.startsWith("/web/conversation")?b():(v(),setTimeout(b,50)):"settings"===e?h('a[data-e2e-main-nav-menu-settings], a[href="/web/settings"]'):v())},r.addEventListener("message",function(e){var t;if(l){if(!e.origin.toLowerCase().startsWith("safari-web-extension://"))return}else if(!(e.origin===d))return;(e.isTrusted||g)&&e.source===r.parent&&(t=(e=e.data||{}).bm_method)&&c(t,e.bm_value,e.bm_request)})},(e=>{var t,n;return!(r.top===r.self||m.documentElement instanceof SVGSVGElement)&&("object"!=typeof(t=u.ancestorOrigins)?1:(n=l?d.toLowerCase():d,1===t.length?t[0]===n:e&&2===t.length&&t[1]===n&&!t[0].endsWith(".google.com")))})(n)&&(s=(s=(n=u.search).match(/[&?]bm_cid=([\da-z-]{2,25})(?:&|$)/))&&s[1],e(origin,s,n))&&(s&&(m.documentElement.dataset.bmCid=s),t())})();