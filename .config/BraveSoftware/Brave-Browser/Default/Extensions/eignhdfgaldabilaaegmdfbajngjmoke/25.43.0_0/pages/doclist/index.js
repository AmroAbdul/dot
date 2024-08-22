"use strict";(()=>{var y=document,w="id,webViewLink,shortcutDetails,exportLinks,webContentLink,iconLink,name,mimeType,capabilities(canTrash,canUntrash,canRename,canDownload),modifiedTime,shared,starred,trashed,thumbnailLink,folderColorRgb",B=["https://www.googleapis.com/auth/drive"],L=(e="https://content.googleapis.com/drive/")+"v3/",t={archive:{name:"__mdi:drive_archive"},audio:{name:"__mdi:drive_audio",color:"#ea4335"},jam:{name:"__mdi:cj_jam_drive",color:"#fb8c00"},appmaker:{name:"__mdi:cjg_app_maker",color:"#ef6c00"},datareport:{name:"__mdi:cj_gmp_data_studio_report",color:"#1a73e8"},chart:{name:"__mdi:drive_chart",color:"#34a853"},document:{name:"__mdi:drive_document",color:"#4285f4"},drawing:{name:"__mdi:drive_drawing",color:"#ea4335"},earth:{name:"__mdi:earth",color:"#4285f4"},excel:{name:"__mdi:drive_ms_excel",color:"#34a853"},form:{name:"__mdi:drive_form",color:"#673ab7"},fusion:{name:"__mdi:drive_fusiontable",color:"#34a853"},generic:{name:"__mdi:drive_file",color:"#1a73e8"},image:{name:"__mdi:drive_image",color:"#ea4335"},keep:{name:"__mdi:lightbulb",color:"#fbbc05"},map:{name:"__mdi:file_map",color:"#ea4335"},pdf:{name:"__mdi:drive_pdf",color:"#fe4a22"},powerpoint:{name:"__mdi:drive_ms_powerpoint",color:"#ff752a"},presentation:{name:"__mdi:drive_presentation",color:"#fbbc05"},script:{name:"__mdi:drive_script",color:"#1a73e8"},sites:{name:"__mdi:atari_site",color:"#3e50b4"},spreadsheet:{name:"__mdi:drive_spreadsheet",color:"#34a853"},text:{name:"__mdi:drive_text",color:"#1a73e8"},video:{name:"__mdi:drive_video",color:"#ea4335"},word:{name:"__mdi:drive_ms_word",color:"#4583ea"},shortcut:{name:"__mdi:shortcut"},upload:{name:"__mdi:file_upload"},zip:{name:"__mdi:drive_zip"}},e={docs:{portalLabel:cjBasics.lang.i18n("cj_i18n_01289","Docs Suite"),serviceLabel:cjBasics.lang.i18n("cj_i18n_00391","Docs"),entityName:cjBasics.lang.i18n("cj_i18n_00099","documents"),newFileLabel:cjBasics.lang.i18n("cj_i18n_00607","New document"),iconName:"docs",hasTemplates:!0,emptyStateIcon:"__mdi:drive_document",primaryColor:"#4285f4",docPath:"document",mimeTypes:["application/msword","application/vnd.google-apps.document","application/vnd.ms-word","application/vnd.ms-word.document.12","application/vnd.ms-word.document.macroEnabled.12","application/vnd.msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]},sheets:{portalLabel:cjBasics.lang.i18n("cj_i18n_01289","Docs Suite"),serviceLabel:cjBasics.lang.i18n("cj_i18n_00393","Sheets"),entityName:cjBasics.lang.i18n("cj_i18n_00100","spreadsheets"),newFileLabel:cjBasics.lang.i18n("cj_i18n_00608","New spreadsheet"),iconName:"sheets",hasTemplates:!0,emptyStateIcon:"__mdi:drive_spreadsheet",primaryColor:"#34a853",primaryLoadingColor:!0,docPath:"spreadsheets",mimeTypes:["application/msexcel","application/vnd.google-apps.spreadsheet","application/vnd.ms-excel","application/vnd.ms-excel.document.12","application/vnd.ms-excel.sheet.macroEnabled.12","application/vnd.msexcel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]},slides:{portalLabel:cjBasics.lang.i18n("cj_i18n_01289","Docs Suite"),serviceLabel:cjBasics.lang.i18n("cj_i18n_00407","Slides"),entityName:cjBasics.lang.i18n("cj_i18n_00101","presentations"),newFileLabel:cjBasics.lang.i18n("cj_i18n_00609","New presentation"),iconName:"slides",hasTemplates:!0,emptyStateIcon:"__mdi:drive_presentation",primaryColor:"#f5a900",primaryLoadingColor:!0,docPath:"presentation",mimeTypes:["application/mspowerpoint","application/vnd.google-apps.presentation","application/vnd.ms-powerpoint","application/vnd.ms-powerpoint.document.12","application/vnd.ms-powerpoint.presentation.macroEnabled.12","application/vnd.mspowerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation"]},forms:{portalLabel:cjBasics.lang.i18n("cj_i18n_01289","Docs Suite"),serviceLabel:cjBasics.lang.i18n("cj_i18n_00408","Forms"),entityName:cjBasics.lang.i18n("cj_i18n_00102","forms"),newFileLabel:cjBasics.lang.i18n("cj_i18n_00631","New form"),iconName:"forms",hasTemplates:!0,additionalFabs:[{label:cjBasics.lang.i18n("cj_i18n_07591","New quiz"),iconName:"__mdi:quiz",onClick:function(e){var i="https://docs.google.com/forms/createquiz?authuser="+e.account.authuser;e.openTab(i)}}],emptyStateIcon:"__mdi:drive_form",primaryColor:"#673ab7",primaryLoadingColor:!0,docPath:"forms",mimeTypes:["application/vnd.google-apps.form","application/vnd.google-apps.freebird"]},vids:{portalLabel:cjBasics.lang.i18n("cj_i18n_01289","Docs Suite"),serviceLabel:cjBasics.lang.i18n("cj_i18n_07578","Vids"),entityName:cjBasics.lang.i18n("cj_i18n_07582","videos"),newFileLabel:cjBasics.lang.i18n("cj_i18n_07583","New video"),iconName:"vids",emptyStateIcon:"__mdi:cjg_drive_vid",primaryColor:"#a142f4",primaryLoadingColor:!0,mainShortcutId:"1628",docPath:"videos",mimeTypes:["application/vnd.google-apps.vid"]},drawings:{portalLabel:cjBasics.lang.i18n("cj_i18n_01289","Docs Suite"),serviceLabel:cjBasics.lang.i18n("cj_i18n_01270","Drawings"),entityName:cjBasics.lang.i18n("cj_i18n_00103","drawings"),newFileLabel:cjBasics.lang.i18n("cj_i18n_06298","New drawing"),iconName:"drawings",emptyStateIcon:"__mdi:drive_drawing",primaryColor:"#ea4335",primaryLoadingColor:!0,noExternalSearch:!0,docPath:"drawings",mimeTypes:["application/illustrator","application/vnd.google-apps.drawing","application/vnd.oasis.opendocument.graphics","image/vnd.adobe.photoshop","image/x-photoshop"]},atari:{portalLabel:cjBasics.lang.i18n("cj_i18n_00112","Sites"),serviceLabel:cjBasics.lang.i18n("cj_i18n_00112","Sites"),entityName:cjBasics.lang.i18n("cj_i18n_00105","sites"),newFileLabel:cjBasics.lang.i18n("cj_i18n_00688","New site"),iconName:"sites",emptyStateIcon:"__mdi:atari_site",primaryColor:"#3f51b5",primaryLoadingColor:!0,mainShortcutId:"405",mimeTypes:["application/vnd.google-apps.sites","application/vnd.google-apps.site"]},jamboard:{serviceLabel:cjBasics.lang.i18n("cj_i18n_00813","Jamboard"),pageLabel:cjBasics.lang.i18n("cj_i18n_01290","Jams"),entityName:cjBasics.lang.i18n("cj_i18n_01291","jams"),newFileLabel:cjBasics.lang.i18n("cj_i18n_01948","New jam"),iconName:"jamboard",emptyStateIcon:"__mdi:cj_jam_drive",primaryColor:"#fb8c00",mainShortcutId:"740",mimeTypes:["application/vnd.google-apps.jam"]},script:{serviceLabel:cjBasics.lang.i18n("cj_i18n_00447","Apps Script"),pageLabel:cjBasics.lang.i18n("cj_i18n_01293","Projects"),entityName:cjBasics.lang.i18n("cj_i18n_01294","scripts"),iconName:"script",emptyStateIcon:"__mdi:drive_script",primaryColor:"#1a73e8",listview:!0,noViewToggle:!0,mainShortcutId:"126",mimeTypes:["application/vnd.google-apps.script","application/vnd.google-apps.appmaker"]},datastudio:{serviceLabel:cjBasics.lang.i18n("cj_i18n_07261","Looker Studio"),pageLabel:cjBasics.lang.i18n("cj_i18n_01299","Reports"),entityName:cjBasics.lang.i18n("cj_i18n_00098","reports"),iconName:"looker_studio",emptyStateIcon:"__mdi:cj_gmp_data_studio_report",primaryColor:"#1a73e8",whiteTheme:!0,listview:!0,noViewToggle:!0,mainShortcutId:"366",mimeTypes:["application/vnd.google-analytics.rap.report"]},mymaps:{portalLabel:cjBasics.lang.i18n("cj_i18n_00423","Maps"),serviceLabel:cjBasics.lang.i18n("cj_i18n_00410","My Maps"),entityName:cjBasics.lang.i18n("cj_i18n_00104","maps"),newFileLabel:cjBasics.lang.i18n("cj_i18n_06299","New map"),iconName:"my_maps",emptyStateIcon:"__mdi:place",primaryColor:"#ea4335",noExternalSearch:!0,mainShortcutId:"167",mimeTypes:["application/vnd.google-apps.map"]}},c=(cjgApis.docEditors=e,{"application/msword":"word","application/octet-stream":"generic","application/pdf":"pdf","application/vnd.google-analytics.rap.report":"datareport","application/vnd.google-apps.appmaker":"appmaker","application/vnd.google-apps.audio":"audio","application/vnd.google-apps.document":"document","application/vnd.google-apps.drawing":"drawing","application/vnd.google-apps.file":"generic","application/vnd.google-apps.form":"form","application/vnd.google-apps.fusiontable":"fusion","application/vnd.google-apps.jam":"jam","application/vnd.google-apps.map":"map","application/vnd.google-apps.photo":"image","application/vnd.google-apps.presentation":"presentation","application/vnd.google-apps.script":"script","application/vnd.google-apps.shortcut":"shortcut","application/vnd.google-apps.site":"sites","application/vnd.google-apps.sites":"sites","application/vnd.google-apps.spreadsheet":"spreadsheet","application/vnd.google-apps.unknown":"generic","application/vnd.google-apps.video":"video","application/vnd.ms-excel":"excel","application/vnd.ms-powerpoint":"powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation":"powerpoint","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":"excel","application/zip":"archive","vnd.openxmlformats-officedocument.wordprocessingml.document":"word"});function d(e,i){var a=i.targetMimeType,n=c[a];return n?t[n]:i.isFolder?(n=(e.folderColorRgb||"").toLowerCase(),{name:e.shared?"__mdi:folder_shared":"__mdi:folder",color:n&&-1===n.indexOf("8f8f8f")&&-1===n.indexOf("5f6368")?n:null}):a.startsWith("image/")?t.image:a.startsWith("video/")?t.video:a.startsWith("audio/")?t.audio:a.startsWith("text/")?t.text:(i=e.iconLink).endsWith("/type/application/x-zip")?t.archive:{url:i=-1!==i.indexOf("googleusercontent.com/16/type/")?i.replace("/16/type/","/32/type/"):i,size:18}}function g(e,i){var e=new URL(e),a=new URLSearchParams(e.search);return a.delete("usp"),i&&i.authuser&&"0"!==i.authuser&&a.set("authuser",i.authuser),e.search=a,e.href}function C(e,i){return g(e.webViewLink,i)}function p(r,d,p,e){var m=p.starred,_=p.trashed,i=p.capabilities,a={openInNew:{iconName:"__mdi:open_in_new",label:cjBasics.lang.i18n("cj_i18n_01545","Open in a new tab")},copyLink:{iconName:"__mdi:link",label:cjBasics.lang.i18n("cj_i18n_01901","Copy link")},starred:{iconName:m?"__mdi:star":"__mdi:star_border",label:m?cjBasics.lang.i18n("cj_i18n_01902","Remove from Starred"):cjBasics.lang.i18n("cj_i18n_01903","Add to Starred")},rename:{iconName:"__mdi:cjg_rename",label:cjBasics.lang.i18n("cj_i18n_01940","Rename")},trash:{iconName:_?"__mdi:history":"__mdi:delete",label:_?cjBasics.lang.i18n("cj_i18n_01905","Restore"):cjBasics.lang.i18n("cj_i18n_01904","Move to Trash")},locate:{iconName:"cj_search_in_new",label:cjBasics.lang.i18n("cj_i18n_06565","Locate in new")},download:{iconName:"__mdi:file_download",label:cjBasics.lang.i18n("cj_i18n_01622","Download")},downloadPdf:{iconName:"__mdi:file_download",label:cjBasics.lang.i18n("cj_i18n_06326","Download as PDF")}};return e||delete a.openInNew,i.canRename||delete a.rename,p.exportLinks&&p.exportLinks["application/pdf"]||delete a.downloadPdf,p.webContentLink&&i.canDownload||delete a.download,(_?i.canUntrash:i.canTrash)||delete a.trash,cjce.createElement("ccbm-iconbuttonmenu",{label:cjBasics.lang.i18n("cj_i18n_06294","More actions"),items:a,compact:!0,onClick:function(e){var i,a,n,t,c,o,s,l;"trash"===e?u(d,p.id,{trashed:!_}).then(function(e){e&&r.remove()}):"starred"===e?u(d,p.id,{starred:!m}).then(function(e){e&&(m=!m,p.starred=m,e=r.querySelector(".cjg-doclist__listitem__staricon"))&&e.classList.toggle("cjg-doclist__listitem__staricon--starred",m)}):"copyLink"===e?(cjBasics.clipboard.copy(C(p)),(l=d).snackbarEl||(l.snackbarEl=cjce.createElement("ccbm-snackbar",{label:cjBasics.lang.i18n("cj_i18n_07124","Copied to clipboard")}),l.containerEl.appendChild(l.snackbarEl)),l.snackbarEl.cjceShow()):"rename"===e?(a=r,n=d,t=p,c=cjce.createElement("ccbm-textfield",{label:cjBasics.lang.i18n("cj_i18n_01943","File name")}),o=cjBasics.lang.i18n("cj_i18n_01942","Untitled file"),c.cjceValue=t.name||o,s=cjce.createElement("cjmd-dialog",{darkMode:n.darkMode,title:cjBasics.lang.i18n("cj_i18n_01941","Rename file"),message:cjBasics.lang.i18n("cj_i18n_01944","Please enter a file name"),confirmLabel:cjBasics.lang.i18n("cj_i18n_01940","Rename"),cancelLabel:cjBasics.lang.i18n("cj_i18n_01659","Cancel"),additionalFragment:c,onConfirm:function(){var i=c.cjceValue||o;u(n,t.id,{name:i}).then(function(e){e&&(a.querySelector(".cjmd-item__header").textContent=i)})}}),y.body.appendChild(s),setTimeout(function(){s.showModal(),s=null,c.cjceSelect()})):"openInNew"===e||"locate"===e?(l="https://drive.google.com/drive/","0"!==(i=d.gAccount.authuser)&&(l+="u/"+i+"/"),i="openInNew"===e?l+"folders/"+p.id:cjBasics.urlParams.attach(l,{action:"locate",id:p.id}),d.openInNew(i)):"download"===e?cjBasics.download.downloadLink(p.webContentLink):"downloadPdf"===e&&(i=d.gAccount,e="application/pdf",e=g(p.exportLinks[e],i),cjBasics.download.downloadLink(e))}})}function N(e){return cjce.createElement("cjmd-emptystate",{label:(i=e,cjBasics.lang.i18n("cj_i18n_02174","No __entity_name__ found").replace("__entity_name__",i.entityName)),subLabel:(i=e).searching?cjBasics.lang.i18n("cj_i18n_00116","Try a synonym or more general keyword"):i.noNewFile?null:cjBasics.lang.i18n("cj_i18n_02175","You can add new __entity_name__ using the button below").replace("__entity_name__",i.entityName),iconName:e.emptyStateIcon,color:!0});var i}var i=/\\(u{([\dA-Fa-f]+)}|u([\dA-Fa-f]{4})|x([\dA-Fa-f]{2})|([1-7][0-7]{0,2}|[0-7]{2,3})|(["'0\\bfnrtv]))|\\U([\dA-Fa-f]{8})/g,l={0:"\0",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t",v:"\v","'":"'",'"':'"',"\\":"\\"};function r(e){return String.fromCodePoint(parseInt(e,16))}function a(e){return e.replace(i,function(e,i,a,n,t,c,o,s){return a?r(a):n?r(n):t?r(t):c?String.fromCodePoint(parseInt(c,8)):s?r(s):l[o]})}function k(n){return cjBasics.ajax("https://drive.google.com/drive/u/"+n.gAccount.authuser+"/priority?id="+cjBasics.uniqueId.generate()).then(function(e){e=a(e.split("window['_DRIVE_dsp'][ 3.0 ] = '")[1].split("'")[0]);return JSON.parse(JSON.parse(e)[2]).item.sort(function(e,i){return e.confidenceScore>i.confidenceScore?-1:1}).map(function(e){return e.itemId})}).catch(function(){return[]}).then(function(e){return Promise.all(e.map(function(e){return i=n,a=e,a=cjBasics.urlParams.attach(L+"files/"+e,{prettyPrint:"false",supportsAllDrives:"true",fields:w}),cjgApis.request(a,{fetchAs:"json"},{account:i.gAccount,requiredScopes:B}).then(function(e){return e.hasThumbnail="thumbnailLink"in e,delete e.thumbnailLink,e},function(){return{}});var i,a}))})}function u(e,i,a){var n=cjBasics.urlParams.attach(L+"files/"+i,{corpora:"allDrives",prettyPrint:"false",supportsAllDrives:"true",includeItemsFromAllDrives:"true",fields:"id"});return cjgApis.request(n,{fetchAs:"json",method:"PATCH",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}},{account:e.gAccount,requiredScopes:B}).then(function(e){return e&&e.id===i})}function S(e,i){var a,n,t,c,o,s=e.shortcutDetails&&e.shortcutDetails.targetMimeType||e.mimeType,l="application/vnd.google-apps.folder"===s,s={isFolder:l,targetMimeType:s},r=i.listview?((e,i,a)=>{var n=i.isFolder,t=cjce.createElement("cjmd-item"),i=d(e,i),c=cjce.createElement("cjmd-icon",{theme:"solid",name:i.name,url:i.url,size:i.size,color:i.color||a.defaultFileColor}),o=(i.url&&c.classList.add("cjg-doclist__listitem__customicon"),e.shortcutDetails&&((i=y.createElement("div")).className="cjg-doclist__listitem__shortcuticon",c.appendChild(i)),t.appendChild(c),(i=y.createElement("div")).className="cjmd-item__body",(c=y.createElement("div")).className="cjmd-item__header",c.textContent=e.name,i.appendChild(c),e.shared&&!n&&((o=cjce.createElement("cjmd-icon",{theme:"solid",name:"__mdi:people",size:20})).classList.add("cjg-doclist__listitem__infoicon"),c.appendChild(o)),a.isStarredView||((o=cjce.createElement("cjmd-icon",{theme:"solid",name:"__mdi:star",size:20})).classList.add("cjg-doclist__listitem__infoicon","cjg-doclist__listitem__staricon"),e.starred&&o.classList.add("cjg-doclist__listitem__staricon--starred"),c.appendChild(o)),e.modifiedTime&&(c=y.createElement("div"),o=cjBasics.datetime.printDateString(e.modifiedTime,{alwaysYear:!0}),c.className="cjmd-secondarytext",c.textContent=" "+cjBasics.lang.i18n("cj_i18n_00006","modified")+": "+o,i.appendChild(c)),t.appendChild(i),y.createElement("div")),i=(o.className="cjmd-item__hovertools",t.appendChild(o),n&&((c=cjce.createElement("ccbm-iconbutton",{iconName:"__mdi:open_in_new",label:cjBasics.lang.i18n("cj_i18n_00123","Open folder in new tab")})).dataset.id=e.id,c.dataset.openInNew="1",c.classList.add("cjg-doclist__fileitem"),o.appendChild(c)),p(t,a,e));return o.appendChild(i),t})(e,s,i):(a=e,r=(s=s).isFolder,c=(i=i).foldersOnTop&&r,(o=cjce.createElement("cjmd-griditem")).classList.add("cjg-doclist__griditem"),s=d(a,s),c||((t=y.createElement("div")).className="cjmd-griditem__thumbnail cjg-doclist__griditem__thumbnail","__mdi:drive_image"!==s.name&&t.classList.add("cjg-doclist__griditem__thumbnail--document"),o.appendChild(t),a.hasThumbnail?(n=window.devicePixelRatio||2,t.classList.add("cjg-doclist__griditem__thumbnail--customimage"),n=cjBasics.urlParams.attach("https://drive.google.com/thumbnail",{authuser:i.gAccount.authuser,id:a.id,sz:"w"+Math.ceil(144*n)}),t.style.backgroundImage='url("'+n+'")'):(n=cjce.createElement("cjmd-icon",{theme:"solid",size:96,color:i.darkMode?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, .15)",name:s.name}),t.appendChild(n))),i.hideLabels?o.classList.add("cjg-doclist__griditem--nolabels"):((t=y.createElement("div")).className="cjmd-griditem__bottom cjg-doclist__griditem__bottom",o.appendChild(t),(n=cjce.createElement("cjmd-icon",{theme:"solid",name:s.name,color:s.color||i.defaultFileColor,url:s.url,size:s.size})).classList.add("cjg-doclist__griditem__icon"),t.appendChild(n),(s=y.createElement("div")).className="cjmd-griditem__textcontainer",t.appendChild(s),(n=y.createElement("span")).className="cjg-doclist__griditem__tools",t.appendChild(n),t=p(o,i,a,c&&r),n.appendChild(t),i=y.createElement("div"),c=a.name||cjBasics.lang.i18n("cj_i18n_06564","File"),i.textContent=c,s.appendChild(i),20<c.length&&(i.title=c)),o);return r.classList.add("cjg-doclist__fileitem"),r.dataset.id=e.id,r.tabIndex=0,l||(r.dataset.openInNew="1"),r}cjce.registerTemplate("cjg-doclist",function(t,c){var o=c.orderBy&&-1!==c.orderBy.indexOf("older"),s={},l={containerEl:t,openInNew:c.openInNew,gAccount:c.gAccount,noNewFile:c.noNewFile,additionalFragment:c.additionalFragment,listview:c.listview,entityName:c.entityName||cjBasics.lang.i18n("cj_i18n_00144","files"),emptyStateIcon:c.emptyStateIcon||"__mdi:drive_file",searching:c.searching||!1,cachingId:c.cachingId||null,hideLabels:c.hideLabels,priority:c.priority,foldersOnTop:o,isStarredView:c.q&&-1!==c.q.indexOf("starred"),darkMode:c.darkMode,defaultFileColor:c.darkMode?"#bdc1c6":"#5f6368"},e=Math.round(y.documentElement.offsetHeight*y.documentElement.offsetWidth/7500),n={orderBy:c.orderBy,q:c.q,priority:c.priority,pa:c.pa,key:c.key,pageSize:e=e<50?50:e,gAccount:c.gAccount},a=(cjce.applyTemplate(t,"cjmd-container",{scrollable:!0,fabPadding:!c.noFabs,shadow:c.shadow||"transparentOnScroll",infiniteScroll:!0}),cjce.applyTemplate(t,"basic-anyclickhandler",{onClick:function(e){var i,a,n=y.activeElement;n.classList.contains("cjg-doclist__fileitem")&&(i=n.dataset.id,e=!c.onFolderClick||cjBasics.events.hasMeta(e)||"1"===n.dataset.openInNew,n=s[i],n=(n=(i=n).shortcutDetails)?((a=JSON.parse(JSON.stringify(i))).mimeType=n.targetMimeType,a.id=n.targetId,a.webViewLink=n.webViewLink||"https://drive.google.com/file/d/"+n.targetId+"/view",delete a.shortcutDetails,a):i,e?(a=C(n,l.gAccount),l.openInNew(a)):c.onFolderClick(n))}}),cjce.createElement("cjmd-subheader",{label:cjBasics.lang.i18n("cj_i18n_00121","Folders"),color:!0})),r=cjce.createElement("cjmd-subheader",{label:cjBasics.lang.i18n("cj_i18n_00122","Files"),color:!0}),e=l.listview?"cjmd-list":"cjmd-grid",d=cjce.createElement(e),p=cjce.createElement(e),m=(l.listview||(d.classList.add("cjg-doclist__grid"),p.classList.add("cjg-doclist__grid")),y.createDocumentFragment()),_=y.createDocumentFragment(),g=!1,u=!1;function j(e){c.onLoadingChange&&t.parentNode&&c.onLoadingChange(e)}function h(e){for(var i=0;i<e.length;i++){var a=e[i],n="application/vnd.google-apps.folder"===(a.shortcutDetails&&a.shortcutDetails.targetMimeType||a.mimeType),a=(s[a.id]=a,!o||n||g||(g=!0,t.appendChild(r),t.appendChild(p)),S(a,l));(o&&n&&u?_:m).appendChild(a)}d.appendChild(_),p.appendChild(m)}function f(e){var i;t.textContent="",g=!1,0===e.length?(i=N(l),t.appendChild(i)):(d.textContent="",p.textContent="",i=(i=e[0]).shortcutDetails&&i.shortcutDetails.targetMimeType||i.mimeType,u="application/vnd.google-apps.folder"===i,l.additionalFragment&&(t.appendChild(l.additionalFragment),o&&u||t.appendChild(r)),o&&u?(t.appendChild(a),t.appendChild(d)):(g=!0,t.appendChild(p)),t.appendChild(p),h(e))}var v=!0,b=null;l.cachingId&&cjgApis.cache.getItem(l.gAccount,l.cachingId).then(function(e){var i;!1!==v&&e&&(i=JSON.parse(e),Array.isArray(i))&&(f(i),b=e,l.priority)&&j(!1)}),function a(){return b&&l.priority||j(!0),function i(a){var e;return a.priority?k(a).then(function(e){return 0===(e=e.filter(function(e){return e.id})).length?i({q:"(not mimeType = 'application/vnd.google-apps.folder') and trashed = false",orderBy:"recency desc",gAccount:a.gAccount,pa:a.pa,key:a.key,pageToken:a.pageToken,pageSize:10}):{files:e}}):(e=cjBasics.urlParams.attach(L+"files",{corpora:"allDrives",prettyPrint:"false",pageToken:a.pageToken,pageSize:a.pageSize,supportsAllDrives:"true",includeItemsFromAllDrives:"true",q:a.q,orderBy:a.orderBy,fields:"files("+w+"),nextPageToken"}),cjgApis.request(e,{fetchAs:"json"},{account:a.gAccount,requiredScopes:B,pa:a.pa,key:a.key}).then(function(e){return{nextPageToken:e.nextPageToken,files:e.files.map(function(e){return e.hasThumbnail="thumbnailLink"in e,delete e.thumbnailLink,e})}}))}(n).then(function(e){if(e.nextPageToken&&(n.pageToken=e.nextPageToken,t.cjceSetInfiniteScroll(a)),v){v=!1;var i=JSON.stringify(e.files);if(i===b)return void j(!1);l.priority&&b||f(e.files),b=i,cjgApis.cache.setItem(l.gAccount,l.cachingId,i)}else h(e.files);j(!1)},function(){})}()})})();