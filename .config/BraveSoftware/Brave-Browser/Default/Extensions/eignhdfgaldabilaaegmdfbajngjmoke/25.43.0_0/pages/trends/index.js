"use strict";cjce.registerTemplate("bm-p-trends",function(n,c){var e="https://trends.google.com/trends/";function i(n,e){c.openTab(e.newTabUrl)}var a=cjce.createElement("bm-ogb",{serviceIcon:"trends",serviceLabel:cjBasics.lang.i18n("cj_i18n_00441","Trends"),pageLabel:cjBasics.lang.i18n("cj_i18n_01167","Links"),searchbox:{submitInNewTab:!0,onSubmit:function(n){n=cjBasics.urlParams.attach("https://trends.google.com/trends/explore",{q:n});c.openTab(n)}},bmApis:c,onNewTab:function(){c.openTab(e)}}),a=(n.appendChild(a),c.setOnPageDisplayHandler(a.cjceSearchboxEl.select),cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"})),n=(n.appendChild(a),[{iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home"),newTabUrl:e},{iconName:"__mdi:search",label:cjBasics.lang.i18n("cj_i18n_00061","Explore"),newTabUrl:e+"explore"},{id:"trendingsearches",iconName:"__mdi:trending_up",label:cjBasics.lang.i18n("cj_i18n_00195","Trending searches"),newTabUrl:e+"trendingsearches/daily"},{iconName:"__mdi:calendar_month",label:cjBasics.lang.i18n("cj_i18n_00512","Year in search"),newTabUrl:e+"yis/2023/GLOBAL/"},{iconName:"__mdi:notifications",label:cjBasics.lang.i18n("cj_i18n_00193","Subscriptions"),newTabUrl:e+"subscriptions",divider:!0},{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_00191","Trending on YouTube")},{iconName:"__mdi:youtube_trending",label:cjBasics.lang.i18n("cj_i18n_00338","Now"),newTabUrl:cjgFrontend.urls.youtube(c.account,"feed/trending")},{iconName:"__mdi:youtube_music",label:cjBasics.lang.i18n("cj_i18n_01204","Music"),newTabUrl:cjgFrontend.urls.youtube(c.account,"feed/trending?bp=4gINGgt5dG1hX2NoYXJ0cw%3D%3D")},{iconName:"__mdi:cj_yt_gaming",label:cjBasics.lang.i18n("cj_i18n_01068","Gaming"),newTabUrl:cjgFrontend.urls.youtube(c.account,"feed/trending?bp=4gIcGhpnYW1pbmdfY29ycHVzX21vc3RfcG9wdWxhcg%3D%3D")},{iconName:"__mdi:cj_yt_movies",label:cjBasics.lang.i18n("cj_i18n_00480","Films"),newTabUrl:cjgFrontend.urls.youtube(c.account,"feed/trending?bp=4gIKGgh0cmFpbGVycw%3D%3D")}]),n=cjce.createElement("bm-navlist",{items:n,onClick:i,onNewTab:i});a.appendChild(n)});