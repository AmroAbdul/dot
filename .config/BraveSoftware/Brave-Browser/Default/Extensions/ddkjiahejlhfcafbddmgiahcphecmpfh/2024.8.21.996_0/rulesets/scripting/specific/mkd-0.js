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

// ruleset: mkd-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["#form1 > * > * > * > * > .panikaad","#bdv_DSK_top1,\n#bdvifrmloc1789583,\n#component > div:nth-of-type(1),\n#gk-highlighter,\n#gk-main > .cbottom.cleft.ctop.inner > .clearfix.gk-mass-top.gk-mass,\n#gk-right > .clearfix.gk-mass-top.gk-mass > .moduletable:nth-of-type(7),\n#gk-right > .clearfix.gk-mass-top.gk-mass > .moduletabledark:nth-of-type(1),\n#gk-right > .clearfix.gk-mass-top.gk-mass > .moduletabledark:nth-of-type(11),\n#gk-right > .clearfix.gk-mass-top.gk-mass > .moduletabledark:nth-of-type(12),\n#gk-right > .clearfix.gk-mass-top.gk-mass > .moduletabledark:nth-of-type(13),\n#gk-right > .clearfix.gk-mass-top.gk-mass > .moduletabledark:nth-of-type(14),\n#gk-right > .clearfix.gk-mass-top.gk-mass > .moduletabledark:nth-of-type(3),\n#gk-right > .clearfix.gk-mass-top.gk-mass > .moduletabledark:nth-of-type(5),\n#gk-right > .clearfix.gk-mass-top.gk-mass > .moduletabledark:nth-of-type(6),\n#gk-right > .clearfix.gk-mass-top.gk-mass > .moduletabledark:nth-of-type(8)","#col-right > .moduletable-sidebar-a","[href^=\"https://a.kajgana.com/www/delivery/ck.php\"],\nsection > .region-content.region > .page-super-wrapper > .metro.container-separate.container-white.container-padding.container > .row > .col-xs-24 > .pane-metro-1-metro-1-naslovna.pane-views-panes.panel-pane > .pane-content > .view-dom-id-d5f0deb0f1eda0f3d3c4a53adf748031.view-display-id-metro_1_naslovna.view-id-metro_1.view-metro-1.view > .view-header","#content > .pageWidth > .pageContent > aside > .sidebar > ins:nth-of-type(1) > iframe,\n#content > .pageWidth > .pageContent > aside > .sidebar > ins:nth-of-type(2) > iframe","#topwrap",".wp-image-54781.size-full.alignnone","#text-17","#SC_TBlock_92097 > div:nth-of-type(1),\n#__switch_placeholder_1,\n#__switch_placeholder_2,\n#__switch_placeholder_3,\n#header,\n#switch_pp_override_1_289093,\n#switch_pp_override_2_344856,\n#switch_pp_override_3_399861,\n#switch_pp_override_3_833039,\n#switch_pp_override_4_573232,\n#text-28 > .textwidget,\n#text-29,\n#text-30 > .textwidget","#ads300_600-widget-2 > .widget-container","#main > aside",".after-nav-ad.container","#adwidget_imagewidget-31,\n#adwidget_imagewidget-60,\n#page-sidebar > .sidebar-inner,\n#page-wrapper > .vwpc-row.row:nth-of-type(4) > .vwpc-section-latest_category > .col-md-4.col-sm-5 > .sidebar-wrapper > .sidebar-inner,\n#page-wrapper > .vwpc-row.row:nth-of-type(5),\n#text-2 > .textwidget > div","#ads-menu,\n#reklami,\n#text-6 > .textwidget",".wrapper > .clearfix.container_12 > .no-print.sidebar.omega.grid_4 > .no-print.adv:nth-of-type(2),\n.wrapper > .clearfix.container_12 > .no-print.sidebar.omega.grid_4 > .no-print.adv:nth-of-type(4),\n.wrapper > .clearfix.container_12 > .no-print.sidebar.omega.grid_4 > .no-print.adv:nth-of-type(9)","#ad-space,\n#position-7 > .banner-pos-6.module > .module-inner > .clearfix.module-content,\n#position-7 > .banner_2014.module:nth-of-type(1),\n#position-7 > .banner_2014.szd-banner-sidebar.module,\n#position-b > .bitolsko.banner_2014.module > .module-inner > .clearfix.module-content > .clearfix.custom > .bitolsko.banner_2014.bannergroup > .banneritem","#ads_region3,\n.container > .row > .col-md-8.col-xs-12 > .main.row > .col-xs-12:nth-of-type(1)","#sidebar","#SC_TBlock_101394,\n#content > .home-boxes > .home-ads.box-home,\n#header-ads,\ndiv:nth-of-type(4) > .lazyloaded","[href^=\"/ad.php\"],\n[href^=\"ad.php\"],\ndiv.text-center.widget > .img-fluid.banner","#block-views-kgn_advertisment-block_2 > .content","#text-103 > .widgetinner,\n#text-105 > .widgetinner,\n.container > .row > .span12 > .sitebody > .primary-bottomads,\n.container > .row > .span12 > .sitebody > .site-header > .header_2ndrow > .headerbanner.pull-right",".main-wrapper > .sidebar-inside > .singlesid.sidebar > .sidebar-ad:nth-of-type(5) > embed","#venus-86521,\na[href^=\"http://block.s2block.com/click\"]",".site_container > .page > .clearfix.page_layout > .page_margin_top.row > .column_1_3_responsive.column_right_no_padding.column_1_3.column > .banenrs-index-right,\n.site_container > .page > .clearfix.page_layout > .page_margin_top.row > .column_2_3_resposive.column_2_3.column > .banenrs-index-right,\n[href^=\"https://linker.mk/link.php\"]",".theiaStickySidebar","div[data-advadstrackid]","#header > .header-banner","#text-12","#text-13,\n#text-16","#body > .content-container > .content-right > .banner-group:nth-of-type(4)","#frameworkad-111,\n#sidebar-standard",".clever-core-ads,\n.ngg-fancybox,\n.sidebar > div.inner > section.widget_media_image,\n.sidebar > div.inner > section.widget_slideshow,\n.size-full.alignnone,\n.size-full.attachment-full,\n.widget-area-above-main","#text-30,\n#text-32,\n#text-69 > .widget-container","#banner-5,\n.banner-image","#right_top > .moduletable:nth-of-type(3)","#header-banner,\n#main > div:nth-of-type(1) > iframe,\n#sidebar > .widget:nth-of-type(4) > .textwidget > a[href=\"http://malikovski.com\"],\n#sidebar > .widget:nth-of-type(4) > .textwidget > a[href=\"http://www.lagermax.mk\"],\n#sidebar > .widget:nth-of-type(4) > .textwidget > a[href=\"http://www.sportinn.mk\"],\n#sidebar > .widget:nth-of-type(6)","#block-views-kgn_advertisment-block_2","#SC_TBlock_92849,\n.td-a-rec-id-content_top.td-a-rec,\n.textwidget,\n.textwidget > a[target=\"_BLANK\"] > img",".td-a-rec-id-content_bottom.td-a-rec","p > a[target=\"_BLANK\"] > img","#form1 > table > tbody > tr > td > table:nth-of-type(1) > tbody > tr:nth-of-type(5) > td:nth-of-type(2) > table:nth-of-type(1) > tbody > .txt_11_siv > .pading_novi_naslovna,\n#form1 > table > tbody > tr > td > table:nth-of-type(1) > tbody > tr:nth-of-type(5) > td:nth-of-type(2) > table:nth-of-type(1) > tbody > tr:nth-of-type(3) > td",".e3lan-bottom.e3lan,\n.e3lan-top.e3lan","#content > .row:nth-of-type(2) > .col-sm-12.col-md-8 > .row.hide_b > .col-md-12 > a[href^=\"/Banner/RedirectTo\"],\n#content > .row:nth-of-type(2) > .col-sm-12.col-md-8 > .row.hide_b:nth-of-type(3),\n#content > .row:nth-of-type(2) > .col-sm-12.col-md-8 > .row.hide_b:nth-of-type(6),\n#marketing_holder,\n.ar-placeholder","#Mod182 > .module-inner > .module-ct > .bannergroup > .bannerfooter,\n#Mod205 > .module-inner > .module-ct > .bannergroup > .bannerfooter,\n#t3-mainbody > .equal-height.grid-view.magazine-list.row:nth-of-type(2) > .t3-sidebar.col-md-4.col","#home-content-wrap > .clear.home-content > .ad4-area,\n#post-204559 > .latrondigital,\n#sidebar-ad:nth-of-type(3),\n#sidebar-ad:nth-of-type(4),\n#sidebar-ad:nth-of-type(5) > .sidebar-ad-inner,\n.widget.widget-ads","#equal_col_left > .col-module-style2.col-module:nth-of-type(4)","#jm-right > .count_9.right-column > .row:nth-of-type(1)","#content > .section .pane-1.pane-custom.panel-pane,\n#content > .section > .region-content.region > .clearfix.panels-flexible-23.panel-flexible > .panels-flexible-23-inside.panel-flexible-inside > .clearfix.panels-flexible-row-23-2.panels-flexible-row > .clearfix.panels-flexible-row-23-2-inside.panels-flexible-row-inside.inside > .panels-flexible-row-23-2-right > .panels-flexible-region-last.panels-flexible-region-23-sidebar_.panels-flexible-region > .panels-flexible-region-inside-last.panels-flexible-region-23-sidebar_-inside.panels-flexible-region-inside.inside > .banner-mal.pane-2.pane-custom.panel-pane,\n#content > .section > .region-content.region > .clearfix.panels-flexible-24.panel-flexible > .panels-flexible-24-inside.panel-flexible-inside > .clearfix.panels-flexible-row-last.panels-flexible-row-first.panels-flexible-row-24-sidebar.panels-flexible-row > .clearfix.panels-flexible-row-inside-last.panels-flexible-row-inside-first.panels-flexible-row-24-sidebar-inside.panels-flexible-row-inside.inside > .panels-flexible-row-24-main-row-right > .sidebar.panels-flexible-region-last.panels-flexible-region-24-sidebar.panels-flexible-region > .panels-flexible-region-inside-last.panels-flexible-region-24-sidebar-inside.panels-flexible-region-inside.inside > .pane-block-15.pane-block.panel-pane > .pane-content,\n#content > .section > .region-content.region > .clearfix.panels-flexible-25.panel-flexible > .panels-flexible-25-inside.panel-flexible-inside > .clearfix.panels-flexible-row-last.panels-flexible-row-first.panels-flexible-row-25-sidebar.panels-flexible-row > .clearfix.panels-flexible-row-inside-last.panels-flexible-row-inside-first.panels-flexible-row-25-sidebar-inside.panels-flexible-row-inside.inside > .panels-flexible-row-25-main-row-right > .panels-flexible-region-last.panels-flexible-region-25-sidebar.panels-flexible-region > .panels-flexible-region-inside-last.panels-flexible-region-25-sidebar-inside.panels-flexible-region-inside.inside > .pane-block-15.pane-block.panel-pane > .pane-content,\n#content > .section > .region-content.region > .clearfix.panels-flexible-27.panel-flexible > .panels-flexible-27-inside.panel-flexible-inside > .clearfix.panels-flexible-row-last.panels-flexible-row-first.panels-flexible-row-27-sidebar.panels-flexible-row > .clearfix.panels-flexible-row-inside-last.panels-flexible-row-inside-first.panels-flexible-row-27-sidebar-inside.panels-flexible-row-inside.inside > .panels-flexible-row-27-main-row-right > .panels-flexible-region-last.panels-flexible-region-27-sidebar.panels-flexible-region > .panels-flexible-region-inside-last.panels-flexible-region-27-sidebar-inside.panels-flexible-region-inside.inside > .pane-block-15.pane-block.panel-pane > .pane-content,\n#content > .section > .region-content.region > .clearfix.panels-flexible-28.panel-flexible > .panels-flexible-28-inside.panel-flexible-inside > .clearfix.panels-flexible-row-last.panels-flexible-row-first.panels-flexible-row-28-sidebar.panels-flexible-row > .clearfix.panels-flexible-row-inside-last.panels-flexible-row-inside-first.panels-flexible-row-28-sidebar-inside.panels-flexible-row-inside.inside > .panels-flexible-row-28-main-row-right > .panels-flexible-region-last.panels-flexible-region-28-sidebar.panels-flexible-region > .panels-flexible-region-inside-last.panels-flexible-region-28-sidebar-inside.panels-flexible-region-inside.inside > .pane-block-15.pane-block.panel-pane > .pane-content,\n#content > .section > .region-content.region > .clearfix.panels-flexible-3.panel-flexible > .panels-flexible-3-inside.panel-flexible-inside > .clearfix.panels-flexible-row-last.panels-flexible-row-first.panels-flexible-row-3-sidebar.panels-flexible-row > .clearfix.panels-flexible-row-inside-last.panels-flexible-row-inside-first.panels-flexible-row-3-sidebar-inside.panels-flexible-row-inside.inside > .panels-flexible-row-3-main-row-right > .node-sidebar.panels-flexible-region-last.panels-flexible-region-3-sidebar.panels-flexible-region > .panels-flexible-region-inside-last.panels-flexible-region-3-sidebar-inside.panels-flexible-region-inside.inside > .pane-2.pane-custom.panel-pane,\n#content > .section > .region-content.region > .clearfix.panels-flexible-3.panel-flexible > .panels-flexible-3-inside.panel-flexible-inside > .clearfix.panels-flexible-row-last.panels-flexible-row-first.panels-flexible-row-3-sidebar.panels-flexible-row > .clearfix.panels-flexible-row-inside-last.panels-flexible-row-inside-first.panels-flexible-row-3-sidebar-inside.panels-flexible-row-inside.inside > .panels-flexible-row-3-main-row-right > .node-sidebar.panels-flexible-region-last.panels-flexible-region-3-sidebar.panels-flexible-region > .panels-flexible-region-inside-last.panels-flexible-region-3-sidebar-inside.panels-flexible-region-inside.inside > .pane-block-15.pane-block.panel-pane > .pane-content","#td_body_levo > table:nth-of-type(5) > tbody > tr > td:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1),\n#td_body_levo > table:nth-of-type(5) > tbody > tr > td:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3)","#formAll > .global > .content > .side > .sideBanner","#article > p:nth-of-type(21),\n#article > p:nth-of-type(31)","#fujitsu,\n#main > .resto:nth-of-type(4) > .sidebar > .sm:nth-of-type(2),\n#main > .resto:nth-of-type(4) > .sidebar > .sm:nth-of-type(3),\n#main > .sidebar > .sm:nth-of-type(4),\n#main > .sidebar > .sm:nth-of-type(5) > a[href^=\"http://reklami.daily.mk/www/delivery/ck.php\"],\n#main > .sidebar > .sm:nth-of-type(6),\n#main > .sidebar > a[href^=\"http://reklami.daily.mk/www/delivery/ck.php\"],\n#swiffycontainer_21122015_synapse,\n.fullwidth.notextholder > .thesite > .common > header > .sm1 > a[href^=\"http://reklami.daily.mk/www/delivery/ck.php\"],\n.fullwidth.notextholder > .thesite > a[href^=\"http://reklami.daily.mk/www/delivery/ck.php\"]","#text-175 > .widgetinner > .textwidget > h3,\n#text-189 > .widgetinner > .textwidget > .sponzorirano.wp_bannerize > div,\n#text-189 > .widgetinner > .textwidget > div:nth-of-type(1),\n#text-190,\n#text-232,\n#text-251,\n#text-259,\n#text-298,\n#text-299,\na[href^=\"http://hostiranje.mk/\"]","#sb-site > .header-wraper > .header_main_wrapper > .row > .header-top-right.columns.eight > .widget > .ads728x90-thumb,\n#sidebar > .widget:nth-of-type(1) > .ads728x90-thumb,\n#sidebar > .widget:nth-of-type(4) > .ads728x90-thumb,\n#sidebar > .widget:nth-of-type(5) > .ads300x250-thumb,\n#sidebar > .widget:nth-of-type(7) > .ads728x90-thumb,\n#sidebar > .widget:nth-of-type(8) > .ads300x250-thumb,\n#sidebar > .widget:nth-of-type(8) > .widget-title > h2","#text-2","#rightcol > .moduletable:nth-of-type(4)","#content-outer > div:nth-of-type(5) > ins > iframe,\n#hstp_372_interstitial","#category-wrapper:nth-of-type(3) > div:nth-of-type(1),\n#sidebar-baner","#td-outer-wrap > .td-content-wrap.td-transition-content-and-menu > .td-container:nth-of-type(2) > .td-container-border > .td-pb-row.wpb_row.vc_row:nth-of-type(2) > .td-pb-span4.vc_column_container.wpb_column > .wpb_wrapper > .wpb_content_element.wpb_text_column:nth-of-type(3),\n#td-outer-wrap > .td-content-wrap.td-transition-content-and-menu > .td-container:nth-of-type(2) > .td-container-border > .td-pb-row.wpb_row.vc_row:nth-of-type(2) > .td-pb-span4.vc_column_container.wpb_column > .wpb_wrapper > .wpb_content_element.wpb_text_column:nth-of-type(4),\n#td-outer-wrap > .td-content-wrap.td-transition-content-and-menu > .td-container:nth-of-type(2) > .td-container-border > .td-pb-row:nth-of-type(2) > .td-main-sidebar.td-pb-span4 > .td-ss-main-sidebar > .widget_adrotate_widgets.widget,\n#td-outer-wrap > .td-content-wrap.td-transition-content-and-menu > .td-header-style-1.td-header-wrap.td-header-container > .td-header-header.td-header-row > .td-header-sp-ads,\n#td-outer-wrap > .td-content-wrap.td-transition-content-and-menu > .td-post-template-default.td-container > .td-container-border > .td-pb-row > .td-main-sidebar.td-pb-span4 > .td-ss-main-sidebar > .widget_adrotate_widgets.widget > .a-6.a-single","#post-3037 > .td-container:nth-of-type(2) > .td-container-border > .td-pb-row > .td-main-sidebar.td-pb-span4 > .td-ss-main-sidebar > .td-a-rec-id-sidebar.td-a-rec,\n#td-outer-wrap > .td-content-wrap.td-transition-content-and-menu > .td-container:nth-of-type(2) > .td-container-border > .td-pb-row.wpb_row.vc_row:nth-of-type(2) > .td-pb-span4.vc_column_container.wpb_column > .wpb_wrapper > .vc_align_left.wpb_content_element.wpb_single_image","#content-wrap\\ pocetna-wrap > .home-sidebar-right:nth-of-type(5) > .widget.widget-ads:nth-of-type(8),\n#panorama-banner,\n#sidebar > .widget.widget-ads:nth-of-type(9)",".adwidget,\n.clearfix.post-wrapper > .dolg_bn_g,\n.clearfix.sidebar > div:nth-of-type(1),\n.exclusivead","#ads300_250-widget-13 > .e3lan-cell > ins > iframe,\n#ads300_250-widget-17 > .e3lan-cell > ins > iframe,\n#ads300_250-widget-5 > .e3lan-cell > ins > iframe,\n#main-content > .close-icon[href=\"http://faktor.mk\"] > span,\n#main-content > .content > * > .post-inner > div:nth-of-type(4),\n.sponsored_article","#aspnetForm > .clearfix.page-shadow > .clearfix.wrapper > .clearfix.main-content > .sidebar > .f-banner:nth-of-type(1),\n#swiffycontainer > div","#sidebar > .pane-sidebar.pane-panels-mini.panel-pane > .content > .pane-block-6.pane-block.panel-pane","#floater > a[href^=\"http://ads.ereklama.mk/www/delivery/ck.php\"],\n#ja-masscol > .sublogin > .m-bottom,\n#ja-masscol > .sublogin > .m-content,\n#ja-masscol > .sublogin > .m-top","body > a[href=\"http://www.cineplexx.mk/movie/the-brothers-grimsby/\"]:nth-of-type(1)","#adrotate_widgets-37,\n#sidebar > .theiaStickySidebar,\n#text-20,\n#text-22 > .textwidget,\n.elementor-widget-sidebar,\n.fokus-target,\n.penci-sidebar-right,\n.penci-sticky-sidebar.pcicon-right.pciconp-right.pcalign-left.style-12.penci-sidebar-content.penci-sidebar-left,\n.td-a-rec-id-sidebar.td-a-rec,\n[src=\"https://fokus.mk/wp-content/uploads/2024/04/970x250-sednat-1.png\"]","#text-7","#ad_1_3","#text-21,\n#text-23,\n.kopa-page-header > .header-top-2 > .clearfix.wrapper > .pull-right.top-banner",".td-header-sp-recs,\n.td-main-sidebar.td-pb-span4,\n.wpb_wrapper > .td-a-rec-id-sidebar.td-a-rec","#posledni-novosti > .alt.container > .row > .col-xs-12:nth-of-type(2) > .block-grid-md-4.block-grid-sm-2.block-grid-xs-1 > .block-grid-item:nth-of-type(4) > .main300 > ins > iframe,\n#posledni-novosti > .alt.container > .row > .text-center.col-xs-12 > .main728 > ins > iframe","#animation_container,\ndiv.reklama2","#wrapper > .inner-wrapper > .e3lan-bottom.e3lan","#enhancedtextwidget-13,\n#enhancedtextwidget-25,\n#enhancedtextwidget-30,\n#enhancedtextwidget-36 > .widget-text.textwidget,\n#enhancedtextwidget-8,\n#mvp-leader-wrap,\n.off-canvas-wrap > .inner-wrap > .hfeed.main-section > .header-wrap > .hide-for-small.row",".gofollow","#header-branding > .container > .row > .banner-src.text-right.col-sm-8,\n#main > .row-fluid.wpb_row.vc_row:nth-of-type(1),\n#main > .row-fluid.wpb_row.vc_row:nth-of-type(8),\n#main > .row-fluid.wpb_row.vc_row:nth-of-type(9),\n#page-inner-wrap > .container:nth-of-type(3) > .text-center.ad-970x90.ad-top.ad,\n#sidebar > .theiaStickySidebar > .ad:nth-of-type(5),\n#sidebar > .theiaStickySidebar > .ad:nth-of-type(6)","#ireklama","#main210d31973a","#dat-menu > .dat-menu-container > .dat-menu-padding.dat-menu-wrapper > .boxed > .content > .wrapper > .big-sidebar-right.main-content-wrapper > .main-content > .mob.def-panel:nth-of-type(1) > .shortocde-content.panel-content > div:nth-of-type(3),\n#dat-menu > .dat-menu-container > .dat-menu-padding.dat-menu-wrapper > .boxed > .footer > .wrapper > div,\n#dat-menu > .dat-menu-container > .dat-menu-padding.dat-menu-wrapper > .boxed > .header > .wrapper > .header-block > .header-banner,\n.shortocde-content.panel-content > div:nth-of-type(4)","#sponzorirani","#banner,\n#sp-right > .clearfix.sp-inner,\n#sp-right1 > .module_text:nth-of-type(3) > .clearfix.mod-wrapper > .header,\n#sp-right1 > .module_text:nth-of-type(5) > .clearfix.mod-wrapper > .header","#text-10,\n#text-19","#text-8","#home-left > ul > .home-widget:nth-of-type(1),\n#leader-wrapper,\n#sidebar-wrapper > ul","#right_top > .block.yt-position-inner","#banners",".awac-wrapper,\n.col-md-4.sidebar-right,\n.nav-hidden.ml-slider.metaslider-39023.metaslider-flex.metaslider,\n.slides,\n.top-header-right-sidebar","#Advertisement,\n#block-views-kgn_advertisment-block_5","#mini-panel-sidebar_top > .region-one-main.region > .clearfix.region-inner > .panel-pane-odd.pane-mkd-ads-250x208-3.pane-block.panel-pane,\n#mini-panel-sidebar_top > .region-one-main.region > .clearfix.region-inner > .panel-pane-odd.responsive.pane-mkd-ads-250x208-1.pane-block.panel-pane","#main-wrapper > .content:nth-of-type(3),\n#main-wrapper > .content:nth-of-type(4)","#desno-gore-300x250-2 > div > div > a[href^=\"http://ads.off.net.mk/www/delivery/ck.php\"],\n#desno-gore-300x250-2 > div > div > iframe,\n#nad-header > .jumbo-banner,\n#trendolend-banner","#SC_TBlock_90911 > div:nth-of-type(1),\n#\\32 59[href^=\"/modules/redirect.aspx\"],\n#content_wrapper > .googAdsWrapper,\n#ctl00 > .wrapper > .content_wrapper > .center > div > .banner_article > .banner > .marketing_banner_wrapper,\n#ctl00 > .wrapper > .content_wrapper > .center > div > .googAdsWrapper,\n#ctl00 > .wrapper > .content_wrapper > .margin_top.right > .banners_wrapper,\n#ctl00 > .wrapper > .header_wrapper > .top_marketing_banner,\n#ctl00 > .wrapper > .header_wrapper > div:nth-of-type(4),\n#selected_article_paging > .list_view_wrapper > div:nth-of-type(4)","#mh-wrapper > .mh-group.mh-section.home > .home-sidebar,\n#top-news > .sb-widget,\n.mh-sidebar","a[href=\"http://medium3.mk/\"]","#div-gpt-ad-1396109584850-0,\n#div-gpt-ad-1396109584850-1,\n#div-gpt-ad-1396109584850-2,\n#div-gpt-ad-1396109584850-4,\n#div-gpt-ad-1396109584850-5,\n#div-gpt-ad-1396109584850-6,\n#div-gpt-ad-1396109584850-7,\n#div-gpt-ad-1396109584850-8,\n#google_ads_iframe_\\/77487658\\/Pazar3\\.mk_Bottom_Leaderboard_0__container__,\n#google_ads_iframe_\\/77487658\\/Pazar3\\.mk_Leaderboard_0__container__,\n#google_ads_iframe_\\/77487658\\/Pazar3\\.mk_Small_Rectangle_0__container__,\n#google_ads_iframe_\\/77487658\\/Pazar3\\.mk_Small_Skyscraper_0,\n#google_ads_iframe_\\/77487658\\/Pazar3\\.mk_Vertical_0__container__,\n#google_ads_iframe_\\/77487658\\/Right_Side_0__container__","#Form1 > .main_content > .main_content_left > .leftSide.flt > .top5news > .top4news > .glavnaVest > .rubriki_left_banner:nth-of-type(14),\n#Form1 > .main_content > .main_content_left > .leftSide.flt > .top5news > .top4news > .glavnaVest > div:nth-of-type(9),\n#Form1 > .main_content > .main_content_right > div:nth-of-type(1),\n#Form1 > .main_content > .main_content_right > div:nth-of-type(3) > center > div,\n#banner-flash,\n#div-gpt-ad-1434823289232-0,\n.recent-ban:nth-of-type(11),\na[href^=\"http://www.fxlider.com/mk/\"]","#text-14,\n#text-15,\n#text-18,\n#text-9,\n.mkdf-sidebar,\n.vc_col-sm-4.vc_column_container.wpb_column > .vc_column-inner > .wpb_wrapper","#leftContent > .group.post > div:nth-of-type(3),\n#leftContent > .group.post > div:nth-of-type(4),\n#main > .clearfix:nth-of-type(1) > .ad_position5_1_post,\n#main > .clearfix:nth-of-type(1) > .ad_position5_post,\n#main > .clearfix:nth-of-type(1) > .widget:nth-of-type(11)","#block-block-25,\n#block-block-43,\n#block-block-60 > .content,\n#hstp_5345_interstitial_div,\n#node-199636 > .content > .field-label-hidden.field-type-text-long.field-name-field-like.field > .field-items > .even.field-item,\n.brandingWrapper > div > .branding","#leftcontent > .bannerholder,\n#leftcontent > div:nth-of-type(1) > div:nth-of-type(8),\n#main210d31973a > div:nth-of-type(2),\n#rightcontent","#text-4,\n#text-5,\n.main-wrap > .logos","#dvBanner2","#aas_widget-6,\n#aq-block-134-1,\n#mep_0 > .mejs-inner > .mejs-layers > .mejs-overlay-play.mejs-layer.mejs-overlay,\n#post-154499 > .post_content > div > center,\n#post-154499 > .post_content > iframe,\n#post-154499 > .related-posts > .widget-title,\n#sb-site > .header-wraper > .header_main_wrapper > .row > .header-top-right.columns.eight,\n#text-60 > .textwidget,\n#text-66","#content-wrap > .home-sidebar-right:nth-of-type(12) > .widget.widget-ads:nth-of-type(3),\n#content-wrap > .home-sidebar-right:nth-of-type(12) > .widget.widget-ads:nth-of-type(4),\n#content-wrap > .home-sidebar-right:nth-of-type(5),\n#keepadeye,\n#text-101,\n#text-52,\n#text-55,\n.block__advertising-content,\n.home-ad-area,\n.monadplug-native-grid-wrapper,\n.sidebar-inner,\n[title^=\"Sponzorirano\"]","#bg-exit,\n#td-outer-wrap > .td-content-wrap.td-transition-content-and-menu > .td-header-style-9.td-header-wrap > .td-banner-bg.td-banner-wrap-full,\n#td-outer-wrap > .td-content-wrap.td-transition-content-and-menu > .td-main-content-wrap > .td-post-template-default.td-container > .td-pb-row > .td-main-sidebar.td-pb-span4 > .td-ss-main-sidebar > .td-a-rec-id-custom_ad_2.td-a-rec,\n#td-outer-wrap > .td-content-wrap.td-transition-content-and-menu > .td-main-page-wrap.td-main-content-wrap > .td-container:nth-of-type(1) > .td-pb-row.wpb_row.vc_row > .vc_column_container.wpb_column.td-pb-span3:nth-of-type(3) > .wpb_wrapper > .td-a-rec-id-sidebar.td-a-rec,\n#text-9 > .textwidget,\n.custom-position.fixed.active.pum-position-fixed.size-custom.theme-211946.popmake.pum-container","#Mod458 > .module-inner,\n#Mod462 > .module-inner,\n#articlepxfontsize1 > div:nth-of-type(3),\n#articlepxfontsize1 > div:nth-of-type(5),\n#hstp_5650_interstitial_div","#icegram_messages_container","#aswift_0,\n#kae_unique_id_0_parent_div,\n#sidebar > .clearfix.widget_text.sidebar-box:nth-of-type(2) > .textwidget > p:nth-of-type(1),\n#sidebar > .clearfix.widget_text.sidebar-box:nth-of-type(2) > .textwidget > p:nth-of-type(2)",".a-single,\n.header-html-inner,\n.sidebar-inner-wrap",".banner720x100_1,\n.col-sm-4.sidebar,\n.container.wrap > div:nth-of-type(4),\n.sitewrap > div:nth-of-type(1)","#content > .cf.fl.main-content > .cf.mb.single-post > .cf.mb.post-content > .cf.mb.content-banner,\n#content > .cf.fl.mb.sidebar > .cf.widget:nth-of-type(1) > .textwidget,\n#content > .cf.fl.mb.sidebar > .widget-aktuelno.widget:nth-of-type(1) > .textwidget,\n#content > .cf.fl.mb.sidebar > .widget-aktuelno.widget:nth-of-type(4),\n#content > .cf.fl.sidebar:nth-of-type(5) > .cf.widget:nth-of-type(1)",".pane-block-15.pane-block.panel-pane","#inner-wrap > .td-page-wrap.container > .row > .span12 > .td-grid-wrap > .container-fluid > .row-fluid > .td-no-pagination.column_container.span12 > .td-page-text-content > .row-fluid.wpb_row > .column_container.wpb_column.span4 > .wpb_wrapper > .wpb_content_element.wpb_text_column:nth-of-type(1) > .wpb_wrapper > p:nth-of-type(1),\n#inner-wrap > .td-page-wrap.container > .row > .span12 > .td-grid-wrap > .container-fluid > .row-fluid > .td-no-pagination.column_container.span12 > .td-page-text-content > .row-fluid.wpb_row > .column_container.wpb_column.span4 > .wpb_wrapper > .wpb_content_element.wpb_text_column:nth-of-type(6),\n.block-commercial,\n.carousel-slider-outer-image-carousel,\n.owl-stage,\n.py-0.my-0.block-commercial,\n.td-a-rec-id-header.td-a-rec,\n.wp-block-carousel-slider-slider,\ndiv.active.owl-item > .carousel-slider__item","#adpos1,\n#adpos_branding,\n#ads_pane",".tm-page-bg > .uk-container-center.uk-container > .tm-container > .tm-block-bottom > .tm-grid-block.uk-grid.tm-bottom-b > .uk-width-1-4:nth-of-type(1) > .uk-panel-box.uk-panel,\n.tm-page-bg > .uk-container-center.uk-container > .tm-container > .tm-block-bottom > .tm-grid-block.uk-grid.tm-bottom-b > .uk-width-1-4:nth-of-type(3) > .uk-panel-box.uk-panel,\n.tm-page-bg > .uk-container-center.uk-container > .tm-container > .uk-grid.tm-middle > .uk-width-medium-1-4.tm-sidebar-b > .uk-panel-box.uk-panel:nth-of-type(2)",".padding-0.col-md-12:nth-of-type(3),\n.relative.text-center.ad-content","#block-system-main > .content > .clearfix.two-75-25.vecer-panel > .region-first.region-75.region > .pane-block-9.pane-block.panel-pane > .pane-content > .banner:nth-of-type(2),\n#close-btn[href=\"javascript:window.history.back()\"]",".well > p:nth-of-type(2)","#topBanner[href=\"http://olimpiko.com.mk/\"]","#div-gpt-ad-1416060558272-2,\n#div-gpt-ad-1416060558272-3,\n#div-gpt-ad-1426343616905-0,\n#google_ads_iframe_\\/13327072\\/pod_vest_kocka_3_0__container__,\n#google_ads_iframe_\\/13327072\\/pozicija_4_0__container__,\n#google_ads_iframe_\\/13327072\\/vnatresna_nad_naslov_0__container__,\n#google_ads_iframe_\\/13327072\\/zase_pozicija_7_0__container__,\na[href^=\"http://ads.zase.mk/\"]",".maincontainer > .olamazi > .justcontent > .ishome_false.static_detect.content > .innercontainer.container.searchresults > table > tbody > tr > .right > iframe,\n.maincontainer > .olamazi > .justcontent > .ishome_true.static_detect.content > .container:nth-of-type(3) > .shad1.rad_all.basecontainer.coupons > .couponcontainer","#ads300_250-widget-10,\n#ads300_250-widget-2,\n#ads300_250-widget-3,\n#ads300_250-widget-4,\n#ads300_250-widget-9,\n#cornerpeel-bg,\n#cornerpeel-peel,\n#cornerpeel-peel-cover,\n#cornerpeel-tiny,\n#main-content > .content > .e3lan-post.e3lan,\n#popuppress-12795 > .pps-wrap > .pps-content,\n#theme-header > .header-content > .e3lan-top.e3lan",".ad350x300:nth-of-type(1),\n.ad350x300:nth-of-type(3)",".td-visible-desktop"];

const hostnamesMap = new Map([["panika.be",0],["aberdzija.com",1],["crnobelo.com",2],["kajgana.com",3],["forum.kajgana.com",4],["kavadar4e.com",5],["majkatiitatkoti.com",6],["mkd-news.com",[7,8]],["lokalno.mk",[7,29,69,84,85]],["pozitiv.mk",[7,28,85,99]],["navalica.com",9],["ohridnews.com",10],["www.ohridnews.com",11],["ohridsky.com",12],["radiomk.com",13],["mk.rbth.com",14],["sezadeca.com",15],["tirekovmirece.com",16],["turlitava.com",[17,18]],["a1on.mk",[17,21]],["libertas.mk",[17,80,81]],["republika.mk",[17,40,106]],["24.mk",19],["24vesti.mk",20],["akademik.mk",22],["aktuelno24.mk",23],["alsat.mk",[24,25,26]],["makedonijadenes.com.mk",[25,42]],["kanal77.mk",[25,75]],["fokus.mk",[26,68,69]],["autoinfo.mk",[27,28,29]],["radiomof.mk",[28,103]],["avtoplus.mk",30],["bi.mk",31],["bitolanews.mk",32],["biznisvesti.mk",33],["brif.mk",34],["brkajrabota.mk",35],["carclub.mk",36],["24vesti.com.mk",37],["hitportal.com.mk",[38,39,40]],["tvorbis.com.mk",39],["koli.com.mk",41],["makfax.com.mk",43],["motori.com.mk",44],["netpress.com.mk",45],["radiofortuna.com.mk",46],["stipka.com.mk",47],["telma.com.mk",48],["tocka.com.mk",49],["vrabotuvanje.com.mk",50],["weather4all.com.mk",51],["daily.mk",52],["denar.mk",53],["dokaz.mk",54],["dokazm.mk",55],["duma.mk",56],["ekipa.mk",57],["emagazin.mk",58],["enauka.mk",59],["blog.everest.mk",60],["evesti.mk",61],["exclusive.mk",62],["faktor.mk",63],["fakulteti.mk",64],["fashionel.mk",65],["femina.mk",66],["film24.mk",67],["grid.mk",70],["infomax.mk",71],["istokpress.mk",72],["it.mk",73],["jugoinfo.mk",74],["pozitivo.net",[75,124]],["kapital.mk",[76,77]],["stanica.mk",[77,111]],["kumanovskimuabeti.mk",78],["kurir.mk",79],["plusinfo.mk",[80,98]],["lider.mk",82],["lisica.mk",83],["macedoniasky.mk",86],["makborba.mk",87],["maktel.mk",88],["markukule.mk",89],["maxim.mk",90],["mkd.mk",91],["mobile24.mk",92],["off.net.mk",93],["nmd.mk",94],["novatv.mk",95],["svedok.org.mk",96],["pazar3.mk",97],["pravdiko.mk",100],["press24.mk",101],["puls24.mk",102],["reklama5.mk",104],["reporter.mk",105],["sdk.mk",107],["sky.mk",108],["sportski.mk",109],["srekja.mk",110],["strumicadenes.mk",112],["telegraf.mk",113],["telma.mk",114],["tera.mk",115],["time.mk",116],["tvm.mk",117],["tvnova.mk",118],["vecer.mk",119],["webtv.vip.mk",120],["vipmarket5.mk",121],["zase.mk",122],["zk.mk",123],["alsat-m.tv",125],["tv21.tv",126]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/