/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

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

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"#CookieWrapper\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".fixed\",\"tasks\":[[\"has-text\",\"cookies\"]]}"],["{\"selector\":\".MuiBox-root\",\"tasks\":[[\"has-text\",\"Welcome,\"]]}"],["{\"selector\":\".hasParental.cookies-modal\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#ask-consent\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".gb_g\",\"tasks\":[[\"has-text\",\"cookie\"]]}"],["{\"selector\":\".cc-banner\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack:not([title=\\\"Sanoman sisällönjakelukumppanit\\\"]) button.pm-switch.checked\",\"action\":[\"remove-class\",\"checked\"]}"],["{\"selector\":\"#moduleCookies\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".css-175oi2r.r-12vffkv[style^=\\\"position: absolute; bottom: 0px; width: 100%;\\\"]\",\"tasks\":[[\"has-text\",\"data protection\"]]}"],["{\"selector\":\"button\",\"tasks\":[[\"has-text\",\"Accept\"],[\"upward\",\"section\"]]}"]];

const hostnamesMap = new Map([["schwarzenbacher-kundl.at",0],["blog.smithsecurity.biz",1],["news.abs-cbn.com",2],["buktube.com",3],["xhaccess.com",3],["xhamster.com",3],["xhamster2.com",3],["xhamster3.com",3],["xhamster.desi",3],["e-comas.com",4],["play.google.com",5],["nature.com",6],["link.springer.com",6],["cdn.privacy-mgmt.com",7],["topographic-map.com",8],["x.com",9],["xe.com",10]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/