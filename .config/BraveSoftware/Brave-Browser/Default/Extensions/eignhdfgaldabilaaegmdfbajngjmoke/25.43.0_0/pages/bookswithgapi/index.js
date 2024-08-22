"use strict";(()=>{var E=document;cjce.registerTemplate("bm-p-bookswithgapi",function(n,s){var a,o,t,i,c,l,r,u,d="books"===s.instanceParameters.productId,b=["https://www.googleapis.com/auth/books"],m="https://content.googleapis.com/books/v1/",h=window.atob("QUl6YVN5QVBncHJvLXAtRXc1ZGtTRDlUVW5aZENJZGJDS1VOQ0Zj"),_=12,p=(d&&n.style.setProperty("--ccc-accent-color","#0179ca"),"https://play.google.com"),j="https://books.google.com",g="https://www.google.com",f=j+"/books?op=library",k=(d?f=p+"/books?authuser="+s.account.authuser:"0"!==s.account.authuser&&(f+="&authuser="+s.account.authuser),"eBooks"),v={libraryHeader:{color:!0,header:!0,label:cjBasics.lang.i18n("cj_i18n_00807","My library")},historyHeader:{color:!0,header:!0,label:cjBasics.lang.i18n("cj_i18n_01685","My history")},favorites:{label:cjBasics.lang.i18n("cj_i18n_00692","Favorites"),shelfId:0,iconName:"__mdi:star_outline",newTabUrl:w(0)},purchases:{label:d?cjBasics.lang.i18n("cj_i18n_00310","Purchases"):cjBasics.lang.i18n("cj_i18n_01686","Purchased"),shelfId:1,iconName:"__mdi:local_offer",newTabUrl:e("books/purchases")},toRead:{label:cjBasics.lang.i18n("cj_i18n_01690","To read"),shelfId:2,iconName:"__mdi:notifications",newTabUrl:w(2)},readingNow:{label:cjBasics.lang.i18n("cj_i18n_01687","Reading now"),shelfId:3,iconName:"__mdi:visibility",newTabUrl:w(3)},haveRead:{label:cjBasics.lang.i18n("cj_i18n_01688","Have read"),shelfId:4,iconName:"__mdi:history",newTabUrl:w(4)},reviewed:{label:cjBasics.lang.i18n("cj_i18n_01689","Reviewed"),shelfId:5,iconName:"__mdi:rate_review",newTabUrl:w(5)},recentlyViewed:{label:cjBasics.lang.i18n("cj_i18n_01107","Recently viewed"),shelfId:6,iconName:"__mdi:schedule",newTabUrl:w(6)},eBooks:{label:d?cjBasics.lang.i18n("cj_i18n_00807","My library"):cjBasics.lang.i18n("cj_i18n_01693","Ebooks"),shelfId:7,iconName:"__mdi:library_books",newTabUrl:e("books")},forYou:{label:d?cjBasics.lang.i18n("cj_i18n_01055","For you"):cjBasics.lang.i18n("cj_i18n_01684","Books for you"),shelfId:8,iconName:"__mdi:person",divider:d,newTabUrl:d?e("store/books"):w(8)},browsingHistory:{label:cjBasics.lang.i18n("cj_i18n_01692","Browsing history"),shelfId:9,external:!0,iconName:"__mdi:history",newTabUrl:w(9)},audiobooks:{label:cjBasics.lang.i18n("cj_i18n_01678","Audiobooks"),external:!0,iconName:"__mdi:headset",newTabUrl:e("books?type=audiobooks")},play:{label:cjBasics.lang.i18n("cj_i18n_00134","Shop"),iconName:"__mdi:shop",newTabUrl:e("store/books"),external:!cjBasics.webRequest.getWrifSupported()},uploads:{label:cjBasics.lang.i18n("cj_i18n_01680","Uploads"),external:!0,iconName:"__mdi:file_upload",newTabUrl:e("books/uploads")},notcompleted:{label:cjBasics.lang.i18n("cj_i18n_07364","Ready to read"),external:!0,iconName:"__mdi:newsstand",newTabUrl:e("books/notcompleted")},series:{label:cjBasics.lang.i18n("cj_i18n_7365","Series"),external:!0,iconName:"__mdi:newsstand",newTabUrl:e("books/series")},rentals:{label:cjBasics.lang.i18n("cj_i18n_01682","Rentals"),external:!0,iconName:"__mdi:newsstand",newTabUrl:e("books/rentals")},samples:{label:cjBasics.lang.i18n("cj_i18n_01681","Samples"),external:!0,iconName:"__mdi:book",newTabUrl:e("books/samples")},family:{label:cjBasics.lang.i18n("cj_i18n_01219","Family"),external:!0,iconName:"__mdi:people",newTabUrl:e("books/family"),divider:!0},classicbooks:{label:cjBasics.lang.i18n("cj_i18n_01911","Google Books"),iconName:"__mdi:collections_bookmark",newTabUrl:w(null)}};function e(e){var a=p+"/"+e;return(a+=-1===e.indexOf("?")?"?":"&")+("authuser="+s.account.authuser)}function w(e){return cjBasics.urlParams.attach(j+"/books",{as_coll:e,authuser:"0"===s.account.authuser?null:s.account.authuser})}function y(e){return v[e].shelfId}function B(e){var a;e&&"not_authorized"===e.cjg_error&&(n.textContent="",a=cjce.createElement("bm-fulldialog",{bmApis:s,onNewTab:function(){s.openTab(f)},lockup:{label:d?cjBasics.lang.i18n("cj_i18n_00285","Play Books"):cjBasics.lang.i18n("cj_i18n_00460","Books")},iconName:d?"play_books":"books",message:cjBasics.lang.i18n("cj_i18n_00321","Before you can use this page, you need to give access to load your Google Books. In case you only want to search for books, navigate to the search page in this extension."),actionLabel:cjBasics.lang.i18n("cj_i18n_01916","Continue with Google"),actionG:!0,action:function(){cjgApis.auth.requestPermissions(s.account,e.cjg_missing_scopes)}}),n.appendChild(a))}function I(e,a){a=a||{},a.hl=cjBasics.lang.getCurrent(),a.prettyPrint="false",e=cjBasics.urlParams.attach(m+e,a);return cjgApis.request(e,{fetchAs:"json"},{pa:"optional",account:s.account,key:h,requiredScopes:b})}function T(e){return u.cjceSetLoading(!0),function o(t){var i=void 0!==t.shelf;if(i&&!0!==t.noCache&&7===t.shelf)return cjgApis.cache.getItem(s.account,"bm_cache_v33__books__mybooks").then(function(e){return t.noCache=!0,e?{result:e,newRequest:!0,freshRequest:function(){return o(t)}}:o(t)});t.startIndex=t.startIndex||0;var e="volumes";return I(e=t.shelf?"mylibrary/bookshelves/"+t.shelf+"/volumes":e,{q:t.q,maxResults:t.maxResults,fields:"items(id,volumeInfo(title,previewLink,authors))",filter:i?null:t.searchFilter,startIndex:t.startIndex}).then(function(e){var a=e.items,n=[],a=(a&&a.forEach(function(e){var a=e.volumeInfo;n.push({id:e.id,title:a.title,previewLink:a.previewLink,authors:a.authors,openBook:Boolean(t.shelf)})}),{result:n,newRequest:0===t.startIndex});return i&&0===t.startIndex&&7===t.shelf&&cjgApis.cache.setItem(s.account,"bm_cache_v33__books__mybooks",n),e.items=e.items||[],e.totalItems-t.startIndex-e.items.length!=0&&(a.followupRequest=function(){return t.startIndex+=t.maxResults,o(t)}),a},B)}({maxResults:_,searchFilter:o.cjceSelectedId,shelf:e.shelf,q:e.q})}function N(e){var e=e.id;return d?p+"/books/reader?id="+encodeURIComponent(e)+"&authuser="+s.account.authuser:(e=e,e=g+"/books/edition/_/"+encodeURIComponent(e),"0"!==s.account.authuser&&(e+="?authuser="+s.account.authuser),e)}function x(e){var a,n=e&&e.followupRequest,o=(n&&i.cjceSetInfiniteScroll(function(){n().then(x)}),e&&Array.isArray(e.result)?e.result:[]);e&&e.newRequest&&(i.textContent="",t=cjce.createElement("cjmd-grid"),i.appendChild(t),0===o.length)&&(a=cjce.createElement("cjmd-emptystate",{color:!0,label:cjBasics.lang.i18n("cj_i18n_00322","No books found"),iconName:"__mdi:book"}),i.appendChild(a)),0<o.length&&o.forEach(function(e){e=(a=>{var e,n=cjce.createElement("cjmd-griditem",{onClick:function(){var e=N(a);s.openTab(e)}}),o=cjBasics.urlParams.attach("https://books.google.com/books/content/reader",{printsec:"frontcover",img:"1",zoom:"1",id:a.id}),t=E.createElement("div"),i=(t.className="cjmd-griditem__thumbnail bm-p-bookswithgapi-griditem__thumbnail",t.style.backgroundImage='url("'+o+'")',n.appendChild(t),(o=E.createElement("div")).className="cjmd-griditem__bottom",n.appendChild(o),(t=E.createElement("div")).className="cjmd-griditem__textcontainer",o.appendChild(t),E.createElement("div")),c=(i.textContent=a.title,t.appendChild(i),20);return Array.isArray(a.authors)&&((e=E.createElement("div")).className="cjmd-secondarytext",e.textContent=a.authors.join(" "),t.appendChild(e)),a.previewLink&&!a.openBook&&(c-=5,t=cjce.createElement("ccbm-iconbutton",{iconName:"__mdi:visibility",label:cjBasics.lang.i18n("cj_i18n_01161","Preview"),onClick:function(){s.openTab(a.previewLink+"&authuser="+s.account.authuser)}}),o.appendChild(t)),a.title.length>c&&(i.title=a.title),n})(e);t.appendChild(e)}),e&&e.freshRequest?e.freshRequest().then(x):u.cjceSetLoading(!1)}function C(){i.textContent="";var e=c.value;a=e,o.hidden=!1,T({q:e}).then(x)}function U(e){e=cjBasics.urlParams.attach(p+"/store/search",{c:"books",q:e,authuser:s.account.authuser});s.openTab(e)}function R(e){e=cjBasics.urlParams.attach(g+"/search",{q:e,tbm:"bks",authuser:"0"===s.account.authuser?null:s.account.authuser});s.openTab(e)}function S(e){return e.map(function(e){var a=v[e];return a.id=e,a})}function q(){var c,a;cjce.applyTemplate(l,"bm-loading"),c=[],a=["historyHeader","purchases","reviewed","recentlyViewed","browsingHistory"],(d?(c=S(["play","forYou","eBooks","purchases","notcompleted","uploads","rentals","samples","series","family","classicbooks"]),Promise.resolve(c)):(c=S(["libraryHeader","eBooks","favorites","readingNow","toRead","haveRead","forYou"]),I("mylibrary/bookshelves",{fields:"items(id,title,volumeCount)"}).then(function(e){var i=[],e=(e.items.forEach(function(e){var a=e.id;if("number"==typeof a)if(a<10)for(var n=0;n<c.length;n++)c[n].shelfId===a&&(c[n].infoSuffix=e.volumeCount);else{var o="bookshelf-"+a,t={id:o,shelfId:a,label:e.title,infoSuffix:e.volumeCount,iconName:"__mdi:newsstand",newTabUrl:w(a)};v[o]=t,i.push(t)}}),i.sort(function(e,a){return e.label>a.label?-1:1}),c=c.concat(i),S(a));return c=c.concat(e)}))).then(function(e){r=cjce.createElement("bm-navlist",{isSelector:!0,selectedId:"eBooks",compact:!d,items:e,onChange:function(e,a){"classicbooks"===e?(s.pageManager.navigate(e),r.cjceSelectedId=k):"play"===e?(r.cjceSelectedId=k,s.pageManager.navigate(e,{typeId:"books"})):(k=e,i.textContent="",a&&(f=a.newTabUrl,u.cjceSetPageLabel(a.label)),T({shelf:y(e)}).then(x))},onNewTab:function(e,a){s.openTab(a.newTabUrl)}}),l.appendChild(r),l.cjceSetLoading(!1)},B)}u=cjce.createElement("bm-ogb",{loading:!0,drawer:!0,serviceIcon:d?"play_books":"books",serviceLabel:d?cjBasics.lang.i18n("cj_i18n_00285","Play Books"):cjBasics.lang.i18n("cj_i18n_00460","Books"),pageLabel:v[k].label,searchbox:{suggestHandler:function(e){return cjgFrontend.suggestquery.get({gAccount:s.account,hl:cjBasics.lang.getCurrent(),q:e,ds:"bo"})},submitInNewTab:d,onSubmit:d?U:C,onMetaSubmit:d?U:R,onClear:function(){a="",o.hidden=!0,T({shelf:y(k)}).then(x)}},bmApis:s,onNewTab:function(){a?(d?U:R)(a):s.openTab(f)}}),n.appendChild(u),l=u.cjceDrawerEl,c=u.cjceSearchboxEl,q(),(o=cjce.createElement("ccbm-button--select",{onChange:C,selectedId:"ebooks",items:[{value:"ebooks",label:cjBasics.lang.i18n("cj_i18n_00198","All prices")},{value:"free-ebooks",label:cjBasics.lang.i18n("cj_i18n_00199","Free")},{value:"paid-ebooks",label:cjBasics.lang.i18n("cj_i18n_00200","Paid")}]})).hidden=!0,u.cjceAppendChild(o),i=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll",infiniteScroll:!0}),s.setOnPageDisplayHandler(c.select),n.appendChild(i),T({shelf:7}).then(x)})})();