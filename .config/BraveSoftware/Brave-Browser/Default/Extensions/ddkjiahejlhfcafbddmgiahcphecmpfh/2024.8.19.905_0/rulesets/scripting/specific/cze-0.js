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

// ruleset: cze-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["#modal-container,\ndiv[id^=\"branding\"]",".modal-backdrop","[class*=\"sda\"]:not(.post-content)","div.banner_position","#banner-left-pane,\n#banner-top-four,\n#sportObchodBanner,\ndiv.bannerHolderZapasRight","#branding_anchor_left,\n#branding_anchor_right,\n.adtea_inpage,\n.adtea_leaderboard",".amalker","#pagefoot","#tblHorniLista",".native-ads",".wpa.top",".ai_widget",".banner-header","#biglink","#content-right > div[style]:first-of-type","#header-banner","#leva-reklama","#content-lead,\ndiv.sky-wrapper","#header-reklama,\n.side-bann-l,\n.side-bann-r",".rklh",".banner2,\n.wrap + div:not(#footer)",".ads",".square_banner","#skyscraper","#sideScrapperLayout,\ndiv[id*=\"Banner\"]","#js-branding,\ndiv[id^=\"czech-\"]","#pr-prace-blok-view,\ndiv.block-jobs-link,\ndiv[class*=\"openx-async\"]","[id^=\"hyperbox\"]",".box-offer",".cornerbox,\n.heurekaIframeHeader","div#td-outer-wrap > div.td-container",".ad-obal",".box-banner",".widget-group-2 li:has(div.ad-pmg)","div[id^=\"ad_\"]","div[class^=\"reklama\"]","div#highlitesAds",".layoutTop","#g-top-bannery","#topSite,\n.gallery-advertisement",".intent-exit-box.l-row,\n.js-popup-quest.intent-exit-popup--quest.intent-exit-popup,\ndiv[class*=\"adcontainer\"]",".adsense,\n.leaderboard,\n.seriesadvert,\n.skyscraper",".banner","#r-leaderboardhp","div[id^=\"cross\"]","div:has(> a[class^=\"glightbox\"])",".rf-branding,\ndiv[class^=\"cross\"]","#fancybox-overlay,\n#h_part_right","#t-content",".topbanner","div[id^=\"ad-leaderboard\"]",".advert","#invelt","div.klik--leaderboard","#blackfooter","div[id^=\"pos-\"]",".topbanners","#box.mb,\n.arr-red","#ahead","#stOverlay,\n.promobox","div._banner","div.ogm-branding > div > div","div.bottom-partners","div.container.partners",".filtr.category-partner,\ndiv[class$=\"advert\"],\ndiv[class*=\"__banner\"]","[class*=\"sda-\"]",".TopFullBanner","div[id^=\"hyper\"]","div.advert-leader-board-container",".mone_box",".reklama-background","#social",".bannLead","[class*=\"ad_\"]",".rleft,\n.rright,\n.tree","div[id^=\"banner\"]",".ad",".v-card--link:has(.ad),\n.v-card.mb-6","[class*=\"partnеr\"],\na[rel=\"sponsored\"]",".top_background","#z990x200,\n#zr300x600,\n[id^=\"adv_\"],\na[href*=\"utm_campaign=kurzy_\"],\niframe[src^=\"https://img.kurzy.cz/og\"]",".square","#box-over-content-a",".design-advert-placeholder,\n.design-box--jobs,\ndiv.article--content:has(div.design-advert)","#box-3,\n#rbackground-link,\ndiv[id*=\"reklama\"]",".banns-group","#block-nodesinblock-0",".header_banner","div[id^=\"mp_banner_\"]",".scroll_banner",".banner, .left-side-banner, .right-side-banner,\na[trgurl], a[href*=\"relocate.php\"],\ndiv:has(> a[href*=\"?act=detail&f=8\"])",".komerce",".bcc:has(.banners)",".npab",".box-responsive","[class*=\"advertisement\"]","pp",".right","div[style^=\"float:left;width:468px;\"] + img[src^=\"data:image/gif;base64,\"]",".advtick","#ad-leaderboard-alt-sides,\n.ad-leaderboard-alt-wrapper","a[class^=\"levakolejroku\"],\na[class^=\"pravakolejroku\"]","#leaderBox,\n.sticky-wrapper","#fixedMenu,\n#rek3,\n#rodkaz",".body_message--ad",".roumingLista","#pvMid","a[href^=\"https://prehrajto.cz/?cc=prlbmso2\"]",".mid-lead-hp",".gadget--zbozi,\ndiv[data-dot*=\"gadgetCommercial\"]","div[data-e-b-n*=\"advert\"],\ndiv[data-e-b-n*=\"sklik\"]","div[class^=\"branding-ad\"]","div.ad-exclusive,\ndiv.dragging-enabled:has(div.gadget--reklama),\ndiv.ogm-sticky-repeater","a[href*=\"track.smartmania.cz\"]","#P_reklama_horni,\n.reklamni_sdeleni,\n.rs_reklama,\n[style=\"vertical-align:middle; text-align: left; width: 139px;\"]",".tdc-row:not(:has(> .tdc-element-style))",".mabo.faa,\n[style=\"width:960px;margin:0 auto;text-align:left\"]","a[data-dot=\"c_pozadi\"],\na[data-dot=\"hp_pozadi\"],\ndiv.ad","#ad",".bbtitle","#vyjizdeciBoxikDiv",".sidebar-banner,\n.skyscrapper-right",".branding-link",".banner-brand",".center,\nobject[id*=\"bfad\"]","#adLocation-21,\n#popwrapper,\n#t-overlay,\n.row0,\na[href=\"http://acu.cz\"],\nh3","[class^=\"ws-banner-\"]",".SkyLeft.Banner","div.main-top,\ndiv.site-reklama",".bannero2","#aa1","div[style*=\"position:absolute;\"]","div[id][style=\"position: absolute; top: 0; left: 0; width: 100%; height: 380px; text-align: center;\"]",".modal","a[id*=\"popup2\"],\ndiv[id*=\"banner\"],\ndiv[id*=\"casino\"]",".desktop-wrapper:has([id^=\"div-gpt-ad\"])",".c_banner300x300","div[class^=\"banner_box\"]","a[href=\"http://www.Onlinefilmy.eu\"],\na[href=\"http://www.movieportal.eu\"],\ndiv[style=\"font-size:20px; font-family:Arial Black, Arial; color:#FF0000; font-weight:bold\"]","div[id^=\"ad\"]","div[class*=\"pohodoWidget\"]","a.predpredaj-black",".h2.grad2.kupons_games",".header_info_text",".s-branding,\n[id^=\"banner-\"],\ndiv[style*=\"Roboto\"][style*=\"fixed\"],\nstripemark",".container--break-branding,\n.container--break:has(.ad--align),\n.container--ticketportal,\n.item--socials,\n.item__ad-center,\ndiv[class^=\"position_\"]:has(.ad--align)","[id^=\"back\"][onclick]",".newsletter,\nheader > div","#footer,\n#headerSlideContent1,\n#ocko","[id^=\"mk-branding-\"]","#brnd","a[href*=\"trackBannerAd\"]","#push_promt,\n.wrapper__list__article:has(.widget__form-subscribe)","iframe[data-src^=\"/default-ad\"]",".artemis-ad-position","#top-offers-slider,\n.addbox.avizo,\n.box_advertisment.addbox.recycle,\n.nastip,\n.takeoverKlik",".gate-advert-wrap",".dragobj > div:nth-of-type(2),\n.stn.stns > a[target=\"_blank\"],\n.stn.stnu > a[target=\"_blank\"]",".content-item:has(.header a[href^=\"/reklama/\"])",".connection-results-ad","div[class=\"advertisement-list-component\"],\ndiv[class^=\"item h2\"]",".widget:has(img[src*=\"/ads/\"]),\ndiv[id^=\"advert_\"]","a[href^=\"https://boxu.sk\"]",".post.bg5",".overlay,\na[class^=\"tv-\"]",".banner-under,\n.product-ad-wrapper,\n.sqaure-mobile-ad"];

const hostnamesMap = new Map([["autozurnal.com",[0,1]],["pppeter.shop",[1,133]],["presovak.sk",[1,152]],["grunex.com",2],["kamsdetmi.com",3],["onlajny.com",4],["programujte.com",5],["tipcars.com",6],["titulky.com",7],["war4all.com",8],["zmeskanyhovor.com",9],["365tipu.cz",10],["anglictina-maturita.cz",11],["biologie-chemie.cz",11],["ekonomie-ucetnictvi.cz",11],["rozbor-dila.cz",11],["rozborknihy.cz",11],["studijni-svet.cz",11],["rozbor-dila.eu",11],["appliste.cz",12],["serialzone.cz",[12,108]],["autobazar.cz",13],["autoforum.cz",[14,15]],["wmmania.cz",15],["autohit.cz",16],["autorevue.cz",17],["e15.cz",[17,39]],["maminka.cz",17],["mobilmania.cz",17],["zive.cz",17],["autosport.cz",18],["autoweb.cz",19],["autozine.cz",20],["isport.blesk.cz",21],["evropa2.cz",21],["filmporno.cz",[21,56]],["businessworld.cz",[22,23]],["computerworld.cz",[22,23,31]],["pcworld.cz",23],["busportal.cz",24],["cc.cz",25],["cdr.cz",26],["diit.cz",26],["ceskenoviny.cz",[27,28]],["nasepenize.cz",28],["cesky-jazyk.cz",29],["cnews.cz",30],["csfd.cz",[32,33]],["csfd.sk",32],["databazeknih.cz",34],["denik.cz",35],["dotekomanie.cz",36],["drbna.cz",37],["e-mostecko.cz",38],["info.cz",39],["echo24.cz",40],["edna.cz",[41,42]],["in-pocasi.cz",42],["ireceptar.cz",42],["webtrh.cz",42],["centrum.sk",[42,142]],["cp.sk",[42,51]],["emimino.cz",43],["enigmaplus.cz",[44,45]],["epochaplus.cz",[45,46]],["esemes.cz",[47,48]],["warforum.cz",[48,125]],["estav.cz",49],["euro.cz",50],["eurogamer.cz",51],["pravopisne.cz",51],["pravda.sk",51],["pravopisne.sk",51],["ewrc.cz",52],["extra.cz",53],["fdb.cz",54],["fdrive.cz",55],["fzone.cz",55],["mobilenet.cz",55],["finance.cz",[57,58]],["motoforum.cz",58],["firstclass.cz",59],["fotoaparat.cz",60],["garaz.cz",61],["prozeny.cz",61],["seznamzpravy.cz",61],["hcdukla.cz",62],["hcmotor.cz",63],["heureka.cz",64],["heureka.sk",64],["hrej.cz",65],["pctuning.cz",65],["tryhard.cz",65],["zing.cz",65],["hybrid.cz",66],["idnes.cz",67],["lidovky.cz",67],["idos.idnes.cz",68],["cnn.iprima.cz",69],["itnetwork.cz",70],["jaknaletenky.cz",71],["kaloricketabulky.cz",72],["karaoketexty.cz",73],["kladenskelisty.cz",74],["kniha.cz",75],["konzolista.cz",[76,77]],["topky.sk",[76,155]],["tvtv.sk",[76,158]],["krimi-plzen.cz",78],["kupi.cz",79],["kurzy.cz",80],["lamer.cz",81],["moda.cz",81],["livesport.cz",82],["lupa.cz",83],["root.cz",83],["matematika.cz",84],["mediar.cz",85],["medop.cz",86],["menicka.cz",87],["meteoprog.cz",88],["mladypodnikatel.cz",89],["motorkari.cz",90],["mrk.cz",91],["msmt.cz",92],["nasepraha.cz",93],["navratdoreality.cz",94],["netconcert.cz",95],["onlymen.cz",96],["osel.cz",97],["parabola.cz",98],["pravidla.cz",99],["prehrajto.cz",100],["primat.cz",101],["reflex.cz",102],["ronnie.cz",103],["forum.root.cz",104],["rouming.cz",105],["sauto.cz",106],["serialycz.cz",107],["seznam.cz",109],["clanky.seznam.cz",110],["search.seznam.cz",110],["tv.seznam.cz",111],["www.seznam.cz",112],["smartmania.cz",113],["sms.cz",114],["sports24.cz",115],["stesti.cz",116],["super.cz",117],["login.szn.cz",118],["tiscali.cz",119],["topzine.cz",120],["tvfreak.cz",121],["uschovna.cz",122],["vortex.cz",123],["warezforum.cz",124],["webshare.cz",126],["zakonyprolidi.cz",127],["zena-in.cz",128],["autobazar.eu",129],["libise.eu",130],["sktorrent.eu",131],["serialy.io",132],["bombuj.si",134],["serialy.bombuj.si",134],["slovnik.aktuality.sk",135],["pokec.azet.sk",136],["behame.sk",137],["best4you.sk",138],["bmwklub.sk",139],["cas.sk",[140,141]],["feminity.zoznam.sk",140],["dsl.sk",143],["hnonline.sk",144],["brainee.hnonline.sk",145],["kinema.sk",146],["sector.sk",[146,153]],["kosicednes.sk",147],["michalovskespravy.sk",148],["modrykonik.sk",149],["mojevideo.sk",150],["mtbiker.sk",151],["sme.sk",154],["touchit.sk",156],["tv-program.sk",157],["ubian.sk",159],["vranovske.sk",160],["vtn-vranov.sk",161],["zoznam.sk",162],["pretaktovanie.zoznam.sk",163],["najserialy.to",164],["mall.tv",165]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
