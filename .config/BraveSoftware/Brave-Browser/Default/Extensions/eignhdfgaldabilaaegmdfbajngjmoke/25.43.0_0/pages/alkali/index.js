"use strict";(()=>{var h=document;cjce.registerTemplate("bm-p-alkali",function(e,i){var r,n,a="https://alkalilanding-pa.googleapis.com",l="https://partnerdash.google.com",t=l+"/apps"+i.wizPath+"/landing/",c=window.atob("QUl6YVN5QTRYMVdnWVVxUjhXcFEwY09wQkR6UGY3OG0zWWtwRWdn"),o=i.account.authuser,s="0"===o?null:o;function d(e){return e.displayableApps.map(function(e){var n=null,t=e.iconUrl||"";return t&&-1!==t.indexOf("gstatic.com/partnerdash/application/console/g-logo.svg")&&(n={url:e.iconUrl,size:24}),{label:e.displayName,description:e.description,newTabUrl:e.servingUrl,icon:n}}).sort(function(e,n){return e.label>n.label?1:-1})}function p(){var e,n="bm_cache_v33__alkali__apps",t=(e=cjBasics.urlParams.attach(a+"/v1/displayableApps",{fields:"displayableApps(iconUrl,displayName,description,servingUrl)",prettyPrint:"false"}),cjgApis.request(e,{fetchAs:"json"},{pa:!0,key:c,account:i.account}).then(d).then(function(e){return 0<e.length&&cjgApis.cache.setItem(i.account,n,e),e},function(){return[]}));return cjgApis.cache.getItem(i.account,n).then(function(e){return Array.isArray(e)&&0<e.length?e:t})}function m(e){for(var n=r.querySelectorAll(".cjmd-item"),t=0;t<n.length;t++){var a=-1!==n[t].textContent.toLowerCase().indexOf(e.toLowerCase());n[t].hidden=!a}}n=cjce.createElement("bm-ogb",{loading:!0,serviceIcon:"partner_dash",serviceLabel:cjBasics.lang.i18n("cj_i18n_00683","Partner Dash"),pageLabel:cjBasics.lang.i18n("cj_i18n_00291","Home"),searchbox:{onSubmit:function(e){var n=r.querySelector(".cjmd-item:not([hidden])");n&&n.click()},onInput:m,submitInNewTab:!0},bmApis:i,onNewTab:function(){i.openTab(t)}}),e.appendChild(n),o=n.cjceSearchboxEl,i.setOnPageDisplayHandler(o.select),r=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"}),e.appendChild(r),p().then(function(e){r.textContent="";var c=cjce.createElement("cjmd-list");e.forEach(function(t){var a=cjce.createElement("cjmd-item",{multiline:!0,onClick:function(e){var n;e.target===a&&(e=t.newTabUrl,e=new URL(e,l),n=new URLSearchParams(e.search),s&&n.set("authuser",s),n.delete("hl"),e.search=n,n=e.href,i.openTab(n))},icon:t.icon||{serviceName:"googleg",size:24}}),e=h.createElement("div"),n=(e.className="cjmd-item__body",a.appendChild(e),h.createElement("div"));n.className="cjmd-item__header",n.textContent=t.label,e.appendChild(n),t.description&&((n=h.createElement("div")).className="cjmd-secondarytext cjmd-item__body-item--no-overflow",n.textContent=t.description,e.appendChild(n)),c.appendChild(a)}),r.appendChild(c),n.cjceSetLoading(!1)})})})();