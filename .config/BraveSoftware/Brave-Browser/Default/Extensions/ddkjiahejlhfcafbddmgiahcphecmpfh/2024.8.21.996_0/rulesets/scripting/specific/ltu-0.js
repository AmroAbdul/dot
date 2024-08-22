/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: ltu-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["#info_video,\niframe[src*=\"rekovers.ru/filmux.net.html\"]","#inside > .block:has(.middle > #left_banner),\n#left_banner,\n#top_banner_torrent_details,\n.tb_click,\n.tb_click_left,\n.tb_click_right,\n[href^=\"https://bit.ly/\"][target=\"_blank\"],\na[href*=\"flirtai.lt\"],\na[href*=\"topsport.lt\"],\na[href=\"store?ad=0\"],\na[href^=\"https://7bet.lt\"]","#AutoNumber1","marquee img","#Image2_img","a[href=\"http://www.veltinis.lt\"] > img","#Slideshow2_slideshow","#HTML3 A > img",".content.citems.banner","#sidebar-primary-sidebar",".sidebar","#cc-m-imagesubtitle-image-3868849257","#banners_170","#norbe_sponsors-2,\n#norbe_sponsors-3","a[href=\"http://prekes.suaugusiems.lt/naujienos/knyga-kaip-prailginti-seksa?id=3691\"] > img",".ads",".wrapper-sticky","div:last-child > P[align=\"center\"]",".col-lg-6 > [align=\"center\"]",".banner",".col-sm-4.sidebar-column","[alt=\"Klipas Donorystė\"]",".textwidget > a[href^=\"http://\"] > img","[href=\"https://www.lovejob.lt/darbo-skelbimai\"][target=\"_blank\"],\n[id^=\"custom_html-\"],\n[id^=\"media_image\"]","#text-5.widget.widget_text",".contentadbox + * *",".border_style.padding0px","img[alt=\"laisvoji banga tiesiogine laida\"]",".block_sms,\n.greeting_right","#headerBanner",".ads-cnt,\n.article-0,\n.col-18.no-padding.vl-auto-row:has(iframe),\n.col-right-small > .widget-group:first-of-type,\n.dfp,\n.item:has(> a[href*=\"//bit.ly\"][target=\"_blank\"] > img),\n.page-item-lazyload,\n.top-banner,\n[class*=\"field_banner_\"],\nbody > div[class][style=\"display: block;\"],\nbody > em,\nbody > i,\nbody > label,\nbody > span,\nbody > strong,\ndiv > abbr,\ndiv[class*=\" \"][style^=\"top: \"],\ndiv[class*=\"block-right\"],\nlabel > label [src*=\"s1.15min.lt/static/cache/\"][src*=\"adblock\"],\nscript + div:not(.header):has(+ .wrapper),\nsmall",".widget-ad,\ndiv > em","#adrotate_1,\n#adrotate_2,\n.parama","#warp > div[style^=\"text-align\"],\n.bdaia-widget:has(a[href*=\"farming\"]),\n.non_sticky_side_el > div[style],\n.sticky_side_el,\n.vc_col-sm-4 a:not([href*=\"aina\"]),\ndiv[data-vc-full-width]:has(div[id^=\"aina_lt_300x250_\"])","#top","._reklamaTopR,\n.block_text_links,\n.cosite_block,\n.reklamaTopFilled,\n.reklamaTopTop,\ndiv[class=\"col-xs-12 col-sm-12 col-md-4 col-lg-3 sidebar-block \"],\ndiv[id*=\"_300x250_inarticle_\"]","#advert_right,\n#banner-top,\n#main-content-right,\n#rssReader_b,\n.fl.marginb10.vipadvertise,\n.margint10,\n.mobilehide[style=\"min-height: 250px\"]",".content-inner > iframe[style*=\" width: 300px\"],\n.widget_custom_html,\n.wpb_raw_html iframe,\ndiv[style^=\"text-align: center; margin: 10px 0\"]:not([class], [id])","#banner_cont",".col-md-6:has(ins.adsbygoogle)","#top_veliavos,\n#weather,\n.main-right.m-hide,\n.outer.bg-rhomb-grey-light.flag-block-wrapper.m-hide,\n.right_veliava",".right_banner",".banneritem","a[href$=\"://www.octenisept.lt\"]",".right_block",".ad-980-200,\n.banner-top,\n.luminor-calculus-21-2,\n.luminor-content,\n.luminor-header,\n.numai-link,\n.obj-cont .runningrow-wr,\n.obj-details .small-label,\na[href$=\"&utm_content=ad\"]",".bigbank-calculator",".ad1,\n.ad2","#banner-placeholder-1.banner-placeholder",".js-autotaurage-banner,\ndiv[class^=\"banner_container_corner_\"]","#citadele-box",".header-ann,\n.no-print.view-bottom-media,\n.no-print:not([class*=\" \"]),\n.reklama-300x250,\ndiv[class^=\"lenders-\"]",".list-media","#bigbank-mobile,\n.bottom-media",".col-md-4.col-sm-6:has(> ._slot),\n.header > .container,\n.reklamaadd",".ap-loan-calculator-native,\n.apl-content-calculator,\n.apl-example-note,\n.bigbank-price-leasing-button,\n.gallery-loan-opacity,\n.gallery-loan-wrapper,\n.head-small,\n.ket-rules,\n.leader-board-wrapper,\n.parameter-value-bigbank,\n.partner-banner-wrapper,\n.superdedes-inannouncement,\ndiv[class*=\"bigbank-slideshow\"]",".ads-items",".bigbank-button,\n.bigbank-leasing-button,\n.bigbank-price-calculators-container,\n.middle-banner-label",".ad",".showWhenBlocked,\n[style=\"margin-bottom: 10px; height: 100px; padding-left: 10px; padding-right: 10px; text-align: center;\"],\nimg[alt=\"Olybet\"]",".main_title > div[style=\"text-align: center;\"] > a > img,\ndiv[style^=\"text-align: center; width: 300px; height: 250px;\"]",".archive.tax-recipe-categories.term-velykos.term-82[style=\"overflow: hidden;\"]:last-child,\n.dialogBg,\n.valdiklis_reklama.clearfix [alt=\"probiotic valikliai\"]","#marquee,\n#paremk-panel",".hook.roof-placeholder","#for-product1",".banners","#sp-right .custom > p[style^=\"text\"],\n#sp-right .module:has(script, a[data-saferedirecturl]),\n#sp-top-banner-block-wrapper,\n.bottom iframe",".widget_text:has(ins)",".textwidget.custom-html-widget",".top_banner.banner",".standartinisSarasas.sriftas13,\na[href=\"http://egu.lt\"]","a[href^=\"/component/banners/click/\"] > img",".post.bg3,\nimg[onclick=\"Set_Cookie( 'popunder31254', 'true', 3, '/', '', '' );document.getElementById('myBtn').style.display='none';\"]","[style=\"line-height: 25px; margin: 15px 8px 2px auto;\"]","#alio_block,\n.C-banner,\n.ad-marker,\n.col-xs-9 a[href^=\"https://bit.ly/\"],\n.col-xs-9.left + div[class]:not([class*=\" \"]),\n.header-nav-container + :not(script, div, a, iframe, link),\n.hero,\n.revolut-juosta,\n.row > .left + div[class]:not(.right):not([id]) > :not(iframe):not(span):not(table):not(form):not([class]),\n[style] > [href] > img[width=\"100%\"],\nbody > #header-top-banner + [class]:not(div):not(iframe):not(span):not(table):not(form),\nbody > .container > .row > .left ~ :not(.right) > :not(.delfi-ads-block),\nbody > div[style*=\"height:\"][style*=\"z-index:\"],\ndiv[class^=\"col-xs-\"][style^=\"float: left; \"]:first-of-type + div[class]:not([class*=\" \"]):last-of-type,\ndiv[itemprop=\"articleBody\"] > div[style=\"float:left;margin: 0 25px 25px 0;\"],\niframe[src*=\"alio.lt/posPages.html\"],\niframe[src=\"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==\"]",".lb-adx-frame.ad-marker,\n.md-block > div:not([class]):has(> [class*=\"adx\"]),\ndiv[id^=\"adx-\"] + div","img[src$=\"rozmarinas.gif\"]","#komentaru-top-left,\n#sticky-reklama,\n.article_showcase_1,\n.node > iframe[src$=\".php\"],\n.panel-pane:has(.pane-content > script:first-of-type + style + div:last-of-type),\n.panel-separator,\ndiv[class^=\"header-reklama-\"],\ndiv[id*=\"ado-\"],\niframe[src*=\"diena.lt/cview.php\"]",".header-reklama-pagrindine-top-new,\nimg[height=\"50\"][width=\"300\"]","iframe[width=\"728\"][height=\"90\"]",".headtop,\n.visibankai-calculator",".middle[style=\"border:none;padding:5px 0px;\"] *","img[title=\"Poko.lt = (lietuviški blogai + socialiniai tinklai) * vienas kitas algoritmas\"]",".row.dr-ad-top",".rkl","div[style=\"border: solid 3px #fcb617; width: 166px; padding: 8px 0px 8px 5px;\"]",".module-content A > img","#sotewsadds",".footer-container > *","#friends_block,\n#lojalumas_block",".randomcontent.group1 + * + * + * > *,\n[style=\"border:1px solid #000000;padding:6px;\"],\ntd[bgcolor=\"#FFFFFF\"][align=\"center\"][style=\"border:1px solid #000000;\"]","#unit-details-sidebar-ad","td[style^=\"TEXT-ALIGN: \"]","iframe[data-id]",".adsbygoogle",".advert","#popup-w",".xoxo.blogroll a[href=\"/\"] > img,\na[href=\"http://www.fotofaze.lt\"] > img","div[style=\"text-align: center\"]","[src^=\"http://www.friendsclub.lt/banners/\"] + *","a[href=\"http://www.vilniausgidas.lt\"]",".text-center.row","#marquee > .tickercontainer img","#ct_testimonials-4",".geoturgus-ad",".xoxo.blogroll img",".add-2","#sideRight.sidebarRigt,\n.jspContainer[style=\"width: 550px; height: 299px;\"],\n.menu.draugailinks,\n.vp[style=\"height: 249px;\"]","img[alt=\"JPEG baneris\"][title=\"JPEG baneris\"]","#product2,\n.block.villa","#stulpelis1c img","#v1b13546c9f","img[alt^=\"baner_\"]","a[href*=\"casino\"]","#brandpage","#inxAds-imr,\n#social,\n.col-xs-12.col-sm-5.col-md-6.col-lg-3.col-widget-4.games_widget",".b-kaspersky > *","#Reklama,\n#canvas,\n.col-sm-3 > .ad,\n.row.ad-no-space","[title=\"ksi_120x60\"],\nimg[alt=\"inFROST - CS 1.6 Serveriai\"]",".projects-container-home","[src^=\"site/banners/\"] + * TD",".span4.column_container.td-post-sidebar,\n[id^=\"penci-banner_box\"]",".pixel6",".moduletable_ads",".product-social",".left_banner",".miestasreng",".top_baneris,\ntd[style=\"PADDING-BOTTOM: 13px; PADDING-LEFT: 0px; BACKGROUND: url(/kaunas/m/m_images/wfiles/il4sk332.jpg) #faf6f5 no-repeat left top; PADDING-TOP: 13px\"]",".code-block.code-block-1,\n.jeg_block_container,\n.jeg_postblock_content","#sidebar1 > .block-title","td[valign=\"top\"][height=\"168\"][bgcolor=\"#ffffff\"][style=\"PADDING-TOP: 15px\"]",".widget_block","#linkcat-30.widget_links.widget",".Banner,\n.left-banner-wrap","a[rel=\"nofollow\"] > img",".sidebar-item.friends",".useful_banner_manager_banner *","div#draugai > *",".sp-column:has(#krepsiniozinios_lt_top),\ndiv[itemprop=\"articleBody\"] > p + div[style*=\"padding-top\"]",".box1[style=\"background:none; text-align:center; padding:5px;\"],\n.box1[style=\"padding:10px 0;\"]","#leftbar-w A > img","#right_banner","img.aligncenter","#minic_slider.theme-default *",".greitasis_menu,\nSECTION#akcijos_wrapper.akcijos > img,\nimg[alt=\"OZO estetinės odontologijos ir implantologijos klinika\"]",".infobox-banner","#sidebar-primary",".nivo-controlNav,\n.nivoSlider","#scr > .js-marquee-wrapper > *","img[alt=\"klausyk.net, muzika, mp3, dainu zodziai\"]","#slaidukas,\n.sam-container.sam-place > img[style=\"display: inline;\"]","div[class^=\"cpcta-\"]","#aside-right","#banners_container",".custom a[href^=\"http://\"][target=\"_blank\"]","#parama,\n[action=\"https://www.paypal.com/cgi-bin/webscr\"] > *,\ndiv[style=\"position:relative; display:block; margin: 10px auto; text-align: center;\"]",".banner-holder *",".text-center:has(img)","div[style=\"margin:5px;text-align:center\"],\ndiv[style=\"text-align:center\"],\nimg[alt=\"Ruba.lt - vyriški marškiniai, megztiniai internetu, išpardavimas\"]",".textwidget",".widget.widget-promobox-small.width-1-5.no-bottom-margin,\n.widget.widget-promobox-wide.width-1-1.no-bottom-margin","a[href*=\"lova.lt/baldai/draugas/\"],\na[href*=\"lova.lt/imones/partneris/\"]","#block-block-31.block.block-block",".Scrolling_banner,\ntd[height=\"118\"]",".banner-block",".left_banners,\n.right_banners",".LBlockSidebar__item,\n[href^=\"https://delivery.adnuntius.com\"]","div[class*=\" min-h-[\"]",".fl-row:has(iframe[src*=\"reklama\"])","a[href^=\"http://www.\"][target=\"_blank\"]",".bannergroup","#custom_html-9,\n#madeinvilnius_lt_300x250_below_article,\n.content-inner > div[style^=\"text-align: center;\"][style*=\"min-height:\"],\ndiv[style$=\"margin: 15px 0; min-height: 250px;\"]","#container-ads","[href*=\"?utm_source=mainyk\"]",".djslider-loader","img[alt=\"SVEIKATOS RADIJO LOGObaneris180 x90\"]",".banners_mklt_side1.banner_cont","#text-86775731",".bnrdid","#MarksPlus,\n.ban_script_code,\n.navParentLi.menu_img_payment,\n[href^=\"https://pubads.g.doubleclick.net\"],\ndiv[class^=\"premium-info\"]",".tb-content-block.tb-content-block-banners-sidebar",".banner-wide-border",".banner-article-wide,\n.banner-inline,\n.col-article-3.non-mobile,\n.lazyloading",".title-right-banner,\ndiv[style=\"background: url('client/img/sep-1.gif') repeat-x center;\"]",".squarebanner","#imagecontainer.header-image-container","#popopen[url=\"http://www.maxima.lt/asortimentas/meistro-kokybes-grilio-gaminiai-1/\"],\n.remas","#product-view-blokas-lizingas",".description",".partners",".mainBannerContainer,\na[href^=\"/sportas/straipsnis/kai-truksta-vitaminu-gelbsti-papildai-\"]",".box_outer.widget_awpcp-latest-ads + * + * *,\n[data-ai] [target=\"_blank\"][rel=\"nofollow\"]",".index_ads1",".banner-desktop,\n.banner-mobile",".module-outer","#categories-3 + * a[target=\"_blank\"]","img[src*=\"baneris\"]","#promotional_banner_root",".banner1",".widget_custom_html:has(.stickyContainer)","a[target=\"_blank\"]",".bannerWrapper","#leftBanners,\n#startBanners",".sidebar-banner",".column.right,\n.section.vertical.mt20",".article-banner","div[style=\"border: 1px solid black; text-align: center; margin-bottom: 10px; font-size: 12px;  padding-top: 10px; padding-bottom: 10px; width: 628px; margin-left: 81px;\"]",".promotion.cp-banner *,\n.top-banner-ex","[style=\"font-family: georgia,palatino; font-size: 10pt;\"] > a[href^=\"http://\"],\na + * + a",".baneriokas + * *",".pp-article-banner,\na[href=\"http://www.perpasauli.lt/naujienos/10-ispudingiausiu-austrijos-kampeliu.d?id=64743063&utm_source=external&utm_medium=newsexport&utm_campaign=250x500\"] > img",".full-width-banner,\n.full-width-banner-top,\n[id^=\"ox_ad_idAdbillboard\"],\n[widget-attachpoint^=\"easyPay\"].not-marketplace,\niframe[src^=\"https://www.sblizingas.lt/\"]",".ban","aside > .uk-panel-box:has(> ins)",".dialog.facebook-dialog > *,\n.widget-overlay",".top-media","#bfad178770,\n#bfad240549,\n.headerhorizontalbanners,\n.headerverticalbanners","[title=\"Blogosferos Autorių Teisių Gynimo Asociacijos Agentūra\"] > *,\nimg[alt=\"FlyLAL logo\"]","a[target=\"_blank\"] > *",".main_banner.hidden-xs,\n.side_banners__items,\n.top_banners.visible-md","#content-banners,\n.header-banner","#dnn_LeftPane,\n#dnn_daugiauInfo","#ja-col2","[class^=\"banner\"]","img[title=\"Free Delivery on all Books at the Book Depository\"]",".ukio10","div[style=\"background-color: rgb(0, 0, 0); z-index: 100000001; opacity: 0.85; position: fixed; top: 0px; left: 0px; right: 0px; bottom: 0px; display: block;\"],\ndiv[style=\"background-color: rgb(92, 103, 103); z-index: 100000001; opacity: 0.85; position: fixed; top: 0px; left: 0px; right: 0px; bottom: 0px; display: block;\"],\ndiv[style=\"position: fixed; z-index: 100000003; visibility: visible; display: block; left: 0px; right: 0px; top: 0px; bottom: 0px;\"]",".mobile_banner,\na[href^=\"http://www.respublika.lt/,banner_id.\"]",".advertisement.list","#newsticker-demo,\n.infiniteCarousel > *,\n.infiniteCarousel LI",".banner-left-side",".banner_right","div[align=\"center\"]","[id^=\"fm_adv_\"],\ndiv[class^=\"news_p\"]",".flexbannergroup,\na[href=\"http://www.lefkada-hotels.com/\"]","[src*=\"http://www.senukai.lt/out/1/html/0/images/wysiwigpro/Baneris*\"]","a[target=\"_blank\"][href*=\"http://\"] > img","#ads","[style=\"height: 90px; width: 728px;\"]","#header-banner","#banner-three-in-one-between-items,\n#bigbank-small-loan,\n#items-view-type-grid > div[style^=\"margin-top: \"]:not([class]),\n#list-middle-zone,\n#right-side-layout,\n#top-item-zone,\n.bigbank-loan-calculator-wrapper,\n.bigbank-recommendation-by,\n.gallery-kainos-more-products,\n.kainos-gallery-item,\n.kainos-item,\n.lazy-zone,\n.luminor-item-container,\n.luminor-item-container-new,\n.luminor-spacer,\n[href^=\"https://www.aruodas.lt/nauji-projektai/?utm_source\"]","#big-bank-small-mobile","[src^=\"images/drawflash.php\"] + * > *,\na[href^=\"go.php?lt=\"]",".campaigns-list,\n.front-ads,\n.gfBlock,\na[href^=\"http://www.skytech.lt/\"] > *","#partners","img[alt=\"Poligrafijos įmonė 'Spauda': SPAUDA.COM\"]","#promo,\n.shortcode","[id^=\"s300x600_\"],\na[href^=\"http://www.taupiems.lt\"]",".outerContainer","div[style=\"width: 752px; padding-top: 7px;\"]",".center.desktop.shadow-top,\nli[style=\"overflow:visible\"]",".widget_text:has(a:not([href*=\"suvalkai.\"])),\na[href*=\"pakavimopleveles.lt\"]",".side-block.side-banner *","A.close","div[style=\"width:250px; float:left\"] > div[style^=\"height:\"]","[class^=\"baneris\"]",".blog-sidebar *,\n.wsite-image.wsite-image-border-none","div[class=\"margin: 10px 0px\"]",".left_side","#portal_baner_750x100_td_v2,\n.lygiuoti_centras[style=\"padding: 1.5em 0em 1.25em 0em;\"],\n.main_block > center,\n.portlet_nuorodos,\n.visualPadding.lygiuoti_centras,\ndiv[style=\"margin:0.5em 0.5em 0.5em 0.0em; display:table; width:300px; height:250px;\"]",".leasing-info",".boxcontent.bannersr",".td_ads_item",".MokiWidgets-leasingContainer-2Xd,\n.homepage-banners,\ndiv[id^=\"leasing-proposal-\"]","#headerr > [href=\"http://topwarez.lt/buy_vip.php\"] *","#ls7[src=\"http://www.topzone.lt/pav/esports.gif\"],\ndiv[id^=\"edit\"] > .tborder:not([id^=\"post\"]),\ndiv[style=\"margin-top:3px; margin-bottom:3px; height:250px;\"]","a[href=\"http://ldiena.lt\"] + * *","div[style=\"padding-top:4px;padding-bottom:4px;text-align:center;\"]","td[style=\"PADDING-BOTTOM: 15px; PADDING-LEFT: 12px; PADDING-RIGHT: 10px; BACKGROUND: url(/trakai/m/m_images/wfiles/igxbdh5338.jpg) repeat-y left top; PADDING-TOP: 15px\"],\ntd[style=\"PADDING-BOTTOM: 15px; PADDING-LEFT: 22px; BACKGROUND: url(/trakai/m/m_images/wfiles/ipxjgy5347.jpg) repeat-y left top; PADDING-TOP: 16px\"]","#tv300x600_1d_tv3\\.lt *,\n#tv980x200_tv3_lt,\n#tv980x200_tv3_lt *,\n.custom-stick-div,\n.imMobile,\n[id^=\"tv300x250\"],\n[onclick=\"ga('send', 'event', 'Anonsai', 'Click', 'Svarbiausia blokelio paspaudimas');\"] *,\na[href*=\"goo.gl/\"]",".custom-div","#ad_banner_skin,\n.c-details__leaderboard-ad,\niframe[style=\"border: 0px none transparent; width: 1440px; height: 750px; overflow: hidden;\"],\nspan[id*=\"_ad_container\"]","#adblocker","#area1.home-banner,\n#area2.home-banner","#billboardwrapper,\n#table-rightbanner1,\n#table-rightbanner3.rightbanner_info,\n.module_right_content_col,\n.topbanner_info [data^=\"http://www.vaistai.lt/images/banners/\"]",".col-md-12.col-sm-6.col-xs-12.nopaddingright.nopaddingright-small.nopaddingleft-xs.padding-left-sidebar-small",".banner-1",".popup_overlay","#block-adaboveheader,\n.layout__region--ad",".ad120_box,\n.ad468_frame_bot,\n.widget3",".otRounded.module-other-website-banner *","#page-ads,\n#sidebar-madmen",".moduletabledesinen",".adv_b",".links",".content_banners","a[rel=\"nofollow\"] + * + * + * > img",".fluid-width-video-wrapper",".bannerbox,\n.cvWr.row.hidden-xxs,\n.cvWrSidebar,\n[onclick=\"window.open('http://www.cv.lt','_blank')\"]",".adv","#bottom-banners,\n.remejulogo","#rightcol",".sp-module:has(.adsbygoogle, img[src*=\"/reklama_\"], a[href*=\"mods.\"])","a[href*=\"http://www\"] > img","CENTER > A > *,\na[alt=\"Prezi.lt\"] + CENTER","img[alt=\"Informacija ir pagalba telefonu 1588\"]","div[style=\"width: 80%; font-size: 12px; padding: 5px; border: 1px dashed #CCF5CC; background: #F0FCF0; margin: 0 auto;\"]","#k980x200_krepsinis_net > *,\na[href^=\"https://goo.gl/\"],\ndiv[style=\"width:100%; top:44px; left:0; height:100vh; background-repeat:no-repeat;  position:fixed; background-position:50% 0px; background-image:url(https://www.tv3.lt/Uploads/wp_danai.jpg);\"]",".home.blog .homeslider.rotator,\n.rightbar *","img[alt=\"www.linda-seeds.com\"]","a[href=\"http://sportouzdarbis.com/\"] > *","#wdBannerImg",".side-body > TABLE[bgcolor=\"#87B6D9\"]","#block-block-7 P,\n#sidebar-right",".adsb","a[target=\"titul\"] > img","a[href^=\"/redirect/ad/\"] > *",".hometakeover.gofollow","a[href=\"http://www.filmux.us\"]"];

const hostnamesMap = new Map([["161.97.106.129",0],["torrent.ai",1],["torrent.lt",1],["orai.biz",2],["cagsolution.blogspot.com",3],["enorca.blogspot.com",4],["knygoholike.blogspot.com",5],["rinkoje.blogspot.com",6],["zhalia-pieva.blogspot.com",7],["dumblas.com",8],["infodiena.com",[9,10]],["bigbenas.lt",9],["siandien.com",[10,16]],["kuliesius.jimdo.com",11],["lzskelbimai.com",12],["norbefilms.com",13],["pirmas-kartas.com",14],["pokernews.com",15],["15min.lt",[15,30,31]],["sorimpeksas.com",17],["telefononumeris.com",18],["tikrojilietuva.com",[19,20]],["1588.lt",[19,29]],["m.autogidas.lt",[19,53]],["basketnews.lt",[19,59]],["cs-servers.lt",19],["delfi.lt",[19,58,74]],["ekopirk.lt",[19,89]],["kcci.lt",19],["pasikeisk.lt",[19,206]],["priekavos.lt",[19,220]],["racas.lt",19],["rinkaplius.lt",19],["sodobaldai.lt",19],["strazdaneles.lt",19],["zaislaivaikams.lt",19],["donoryste.eu",21],["gyvenimas.eu",22],["muge.eu",23],["pasidarykpats.eu",24],["reitingai.eu",25],["zodynai.igloro.info",26],["psichologas.info",27],["sveikinimai.link",28],["aciu.lt",32],["aina.lt",33],["akmensmagija.lt",34],["alfa.lt",35],["alio.lt",36],["alkas.lt",37],["alytus-tourism.lt",38],["anekdotai.lt",39],["anglija.lt",[40,41]],["kamane.lt",[41,125]],["anyksta.lt",42],["l24.lt",[42,148]],["smc.kedainiai.lm.lt",42],["suduvosgidas.lt",42],["treneris.net",42],["apiterapija.lt",43],["archyvai.lt",44],["aruodas.lt",[45,46]],["skelbiu.lt",[46,240]],["asvyras.lt",47],["atvfanai.lt",48],["auto-loads.lt",49],["autobilis.lt",50],["autogidas.lt",[51,52]],["www.plius.lt",[52,56,215]],["automokyklos.lt",54],["autoplius.lt",[55,56]],["m.autoplius.lt",[57,58]],["etaplius.lt",[58,93]],["imunitetas.lt",58],["mesmoterys.lt",58],["snaujienos.lt",58],["anglija.today",[58,306]],["m.basketnews.lt",60],["beatosvirtuve.lt",61],["bernardinai.lt",62],["beta.lt",63],["server2.beta.lt",64],["bitute.lt",65],["meistras1.lt",65],["piniginuke.lt",65],["tuka.lt",65],["vivasaninfo.lt",65],["vz.lt",[65,288]],["budas.lt",66],["bukimevieningi.lt",67],["chatas.lt",68],["cvmarket.lt",69],["dainos.lt",70],["danguje.lt",71],["diskusijos.darnipora.lt",72],["day.lt",73],["m.delfi.lt",75],["depresijosklubas.lt",76],["diena.lt",77],["kauno.diena.lt",[78,79]],["klaipeda.diena.lt",79],["domoplius.lt",80],["dovanos.lt",81],["dratas.lt",82],["draugas.lt",83],["fortuna.draugas.lt",84],["pazintys.draugas.lt",85],["drg.lt",86],["ecoland.lt",87],["efarma.lt",88],["elektronika.lt",90],["elenta.lt",91],["elta.lt",92],["eurobasket.lt",94],["fightclub.lt",95],["fotofabrikas.lt",96],["fotofaze.lt",97],["fotoservisas.lt",98],["friendsclub.lt",99],["g-taskas.lt",100],["game-game.lt",101],["gamtosnamai.lt",102],["gedulas.lt",103],["geoturgus.lt",104],["gintarinesvajone.lt",105],["grokiskis.lt",106],["grozionamai.lt",107],["grozioperlas.lt",108],["grupinis.lt",109],["gyvenimoguru.lt",110],["hardas.lt",[111,112]],["solisun.lt",112],["hey.lt",113],["imones.lt",114],["inbox.lt",115],["mail.inbox.lt",116],["info.lt",117],["infrost.lt",118],["interjeras.lt",119],["invega.lt",120],["jp.lt",121],["jumsinfo.lt",122],["juokauju.lt",123],["kaina24.lt",124],["kabutes.kasvyksta.lt",126],["kaunas.lt",127],["kaunieciams.lt",128],["kaunozinios.lt",129],["kedainiai.lt",130],["kinomanija.lt",131],["kitokiagrafika.lt",132],["kkml.lt",133],["klauskkunigo.lt",134],["voruta.lt",[134,286]],["kmobiles.lt",135],["konsultuokis.lt",136],["kosmetikos.lt",137],["krepsiniozinios.lt",138],["zodynas.kriu.lt",139],["kronika.lt",140],["krs.lt",141],["ksi.lt",142],["kudikiuprekes.lt",143],["kupi.lt",144],["kurjeris.lt",145],["kursenuparapija.lt",146],["kvitrina.lt",147],["l2info.lt",149],["laikrastisplunge.lt",150],["laisvadienis.lt",151],["laisvaslaikrastis.lt",152],["lankasautodalys.lt",153],["lbks.lt",154],["ldiena.lt",155],["legionas.lt",156],["lietuviuzodynas.lt",157],["liguabc.lt",158],["lituanicon.lt",159],["pump.lt",159],["lkl.lt",160],["lova.lt",161],["lrprezidentas.lt",162],["lrt.lt",[163,164]],["ziukai.lt",164],["lrvalstybe.lt",165],["lrytas.lt",166],["tv.lrytas.lt",167],["lzinios.lt",168],["macpartija.lt",169],["madairgrozis.lt",170],["madeinvilnius.lt",171],["magic-shop.lt",172],["mainyk.lt",173],["mamairtetis.lt",174],["mamairvaikas.lt",175],["mamyciuklubas.lt",176],["man.lt",177],["mano-gargzdai.lt",178],["manodienynas.lt",179],["manoekonamai.lt",180],["manonamai.lt",[181,182]],["moteris.lt",[181,193]],["panele.lt",[181,193,205]],["tavovaikas.lt",[181,193,205]],["maps.lt",183],["martens.lt",184],["masazonamai.lt",185],["maxima.lt",186],["mediashop.lt",187],["medicina.lt",188],["miegantysdrambliai.lt",189],["skytech.lt",[189,243]],["minfo.lt",190],["miske.lt",191],["miskobirza.lt",192],["motersgrozis.lt",194],["musupaveldas.lt",195],["mususavaite.lt",196],["siloaidas.lt",[196,236]],["spainetosdraudimas.lt",[196,244]],["myheritage.lt",197],["nemokamosknygos.lt",198],["tvenkiniu-projektai.lt",198],["nidosreceptai.lt",199],["niekonaujo.lt",200],["vilniaus-turtas.lt",200],["nklyga.lt",201],["officeday.lt",202],["ohoskelbimai.lt",203],["one.lt",204],["pasveik.lt",207],["pegasusfoto.lt",208],["perkuvaikui.lt",209],["perpasauli.lt",210],["pigu.lt",211],["pirkanglijoje.lt",212],["pirkis.lt",213],["domo.plius.lt",214],["pokeris.lt",216],["rokiskis.popo.lt",217],["portas.lt",218],["reksas.lt",218],["priejuros.lt",219],["prokuraturos.lt",221],["pulsas.lt",222],["pzemaitis.lt",223],["xn--mslaikas-qzb5f.lt",223],["radiocool.lt",224],["rde.lt",225],["receptai.lt",226],["respublika.lt",227],["rinka.lt",228],["rkdragunas.lt",229],["rutana.lt",230],["samata.lt",231],["sapnuotisapnus.lt",232],["savaite.lt",233],["savas.lt",234],["senukai.lt",235],["silokarcema.lt",237],["skaiciuokle.lt",238],["skelbikas.lt",239],["skelbimai.lt",239],["m.skelbiu.lt",241],["skrastas.lt",242],["spauda.lt",245],["sport24.lt",246],["sportas.lt",247],["widgets.sportotv.lt",248],["supermama.lt",249],["sutarta.lt",250],["suvalkai.lt",251],["sveikas.lt",252],["gyvensena.sveikas.lt",253],["sveikatosabc.lt",254],["sveikatossodas.lt",255],["sveksnosnaujienos.lt",256],["tavovaikams.lt",257],["technews.lt",258],["technologijos.lt",259],["technorama.lt",260],["teisescentras.lt",261],["tevu-darzelis.lt",262],["topocentras.lt",263],["topwarez.lt",264],["topzone.lt",265],["torentai.lt",266],["traders.lt",267],["trakai.lt",268],["tv3.lt",[269,270]],["krepsinis.net",[270,297]],["play.tv3.lt",271],["powerhitradio.tv3.lt",272],["vaikutis.lt",273],["vaistai.lt",274],["valstietis.lt",275],["vandensparkas.lt",276],["varle.lt",277],["ve.lt",278],["veidas.lt",279],["vela.lt",280],["versliukai.lt",281],["verslosavaite.lt",282],["vilniausskelbimai.lt",283],["vilniauszinios.lt",284],["visalietuva.lt",285],["naujienos.vu.lt",287],["rekvizitai.vz.lt",289],["zalgiris.lt",290],["zappy.lt",291],["zarasuose.lt",292],["zindyk.lt",293],["zooplius.lt",294],["zurnalai.lt",295],["danielius.net",296],["kulturizmas.net",298],["legalus.net",299],["linksmiau.net",300],["lietuvis.no",301],["drauge.org",302],["pradzia.org",303],["vardai.org",304],["internetine-tv.narod.ru",305],["ekspresas.co.uk",307],["lttv.us",308]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/