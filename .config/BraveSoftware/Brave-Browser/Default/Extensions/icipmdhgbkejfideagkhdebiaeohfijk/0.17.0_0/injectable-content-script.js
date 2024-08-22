/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

// if not in a browser, assume we're in a test, return a dummy
if (typeof window === "undefined") exports.browser = {};
else exports.browser = __webpack_require__(6);


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sites; });
const urlPattern1 = { ordered: "/", unordered: { zoom: "zoom", lat: "lat", lon: "lon" } };
const Sites = {
    openstreetmap: {
        link: "www.openstreetmap.org",
        //icon: "www.openstreetmap.org/favicon.ico", // TODO: I will need to pre-download this because otherwise I need additional security permissions in the CSP
        paramOpts: [
            { ordered: "/node/{nodeId}#map={zoom}/{lat}/{lon}" },
            { ordered: "/node/{nodeId}" },
            { ordered: "/way/{wayId}#map={zoom}/{lat}/{lon}" },
            { ordered: "/way/{wayId}" },
            { ordered: "/relation/{relationId}#map={zoom}/{lat}/{lon}" },
            { ordered: "/relation/{relationId}" },
            { ordered: "/changeset/{changesetId}#map={zoom}/{lat}/{lon}" },
            { ordered: "/changeset/{changesetId}" },
            { ordered: "/user/{userName}/traces/{tracesId}" },
            { ordered: "/user/someone/traces/{tracesId}" },
            { ordered: "/user/{userName}" },
            { ordered: "/#map={zoom}/{lat}/{lon}" },
            { ordered: "/", unordered: { lat: "mlat", lon: "mlon" } }
        ],
        extractors: {
            getAttributesFromPage: (window) => {
                // e.g. https://www.openstreetmap.org/edit?editor=id#map=18/-7.57646/110.94519 or http://www.openstreetmap.org/way/263290462?locale=pt#map=17/-26.30144/-48.84531
                const matches = window.location.hash.match(/#map=([0-9.]+)\/([0-9.-]+)\/([0-9.-]+)/);
                if (matches) {
                    const [, zoom, lat, lon] = matches;
                    if (zoom && lat && lon) {
                        return { zoom, lat, lon };
                    }
                }
                return {};
            }
        }
    },
    ideditor: {
        link: "www.openstreetmap.org/edit",
        paramOpts: [
            { ordered: "?editor=id#map={zoom}/{lat}/{lon}" },
            { ordered: "?editor=id&way={wayId}" },
            { ordered: "way={wayId}" },
            { ordered: "?editor=id&node={nodeId}" },
            { ordered: "node={nodeId}" },
            { ordered: "?editor=id&relation={relationId}" },
            { ordered: "relation={relationId}" },
            { ordered: "?editor=id&changeset={changesetId}" },
            { ordered: "changeset={changesetId}" },
        ],
    },
    opencyclemap: {
        link: "www.opencyclemap.org",
        paramOpts: [urlPattern1],
        maxZoom: 18,
        extractors: {
            getPermalink: getPermalinkBySelector("a#permalink")
        },
    },
    hotmap: {
        link: "map.hotosm.org",
        httpOnly: true,
        paramOpts: [
            { ordered: "/#{zoom}/{lat}/{lon}" },
            { ordered: "#{zoom}/{lat}/{lon}" },
        ],
    },
    openseamap: {
        link: "map.openseamap.org",
        paramOpts: [urlPattern1],
        maxZoom: 18,
        extractors: {
            getPermalink: openLayers_getPermalink()
        },
    },
    opensnowmap: {
        link: "www.opensnowmap.org",
        paramOpts: [urlPattern1],
        maxZoom: 18,
        extractors: {
            getPermalink: getPermalinkBySelector("a#permalink")
        },
    },
    sentinelhub: {
        link: "apps.sentinel-hub.com",
        paramOpts: [
            { ordered: "/sentinel-playground/", unordered: { "lat": "lat", "lon": "lng", "zoom": "zoom" } },
            { ordered: "/eo-browser/", unordered: { "lat": "lat", "lon": "lng", "zoom": "zoom" } },
        ],
    },
    mapcompare: {
        link: "mc.bbbike.org",
        paramOpts: [
            { ordered: "/mc/", unordered: urlPattern1.unordered },
        ],
        extractors: {
            getPermalink: getPermalinkBySelector('[id*=permalink i] a'),
        },
    },
    openstreetbrowser: {
        link: "openstreetbrowser.org",
        maxZoom: 20,
        paramOpts: [
            { ordered: "/#map={zoom}/{lat}/{lon}" },
            { ordered: "map={zoom}/{lat}/{lon}" },
        ],
    },
    osmcha: {
        link: 'osmcha.org',
        paramOpts: [
            { ordered: "/changesets/{changesetId}" },
            { ordered: "/?filters=%7B%22users%22:[%7B%22label%22:%22%22,%22value%22:%22{userName}%22%7D]%7D" },
        ],
    },
    pewuosmhistory: {
        link: 'pewu.github.io',
        paramOpts: [
            { ordered: '/osm-history/#/node/{nodeId}' },
            { ordered: '/osm-history/#/way/{wayId}' },
            { ordered: '/osm-history/#/relation/{relationId}' },
        ]
    },
    osmdeephistory: {
        link: "osmlab.github.io/osm-deep-history",
        paramOpts: [
            { ordered: "/#/node/{nodeId}" },
            { ordered: "/#/way/{wayId}" },
            { ordered: "/#/relation/{relationId}" }
        ]
    },
    deepdiff: {
        link: "osm.mapki.com",
        httpOnly: true,
        paramOpts: [
            { ordered: "/history/node.php", unordered: { nodeId: "id" } },
            { ordered: "/history/way.php", unordered: { wayId: "id" } },
            { ordered: "/history/relation.php", unordered: { relationId: "id" } }
        ]
    },
    osmhistoryviewer: {
        link: "osmhv.openstreetmap.de",
        paramOpts: [
            { ordered: "/changeset.jsp", unordered: { changesetId: "id" } },
            { ordered: "/blame.jsp", unordered: { relationId: "id" } }
        ],
        extractors: {
        //TODO: getValues - we can get userName if it's a changeset analysis and maybe map coordinates on both cases
        },
    },
    overpassapi: {
        link: "overpass-api.de/achavi",
        paramOpts: [
            { ordered: "/", unordered: { changesetId: "changeset", zoom: "zoom", lat: "lat", lon: "lon" } },
            { ordered: "/", unordered: { changesetId: "changeset" } }
        ],
        extractors: {
            getPermalink: openLayers_getPermalink(),
        },
    },
    howdidyoucontribute: {
        link: "hdyc.neis-one.org",
        paramOpts: [
            { ordered: "/?{userName}" }
        ],
        extractors: {
            getPermalink: getPermalinkBySelector('a[href*="//hdyc.neis-one.org/?"]'),
        },
    },
    osmchangeviz: {
        link: "resultmaps.neis-one.org",
        paramOpts: [
            { ordered: "/osm-change-viz?c={changesetId}" },
            { ordered: "/osm-change-viz.php?c={changesetId}" },
        ]
    },
    openptmap: {
        link: "www.openptmap.org",
        httpOnly: true,
        paramOpts: [urlPattern1],
        maxZoom: 17,
        extractors: {
            getPermalink: openLayers_getPermalink()
        },
    },
    opnvkarte: {
        link: "xn--pnvkarte-m4a.de",
        paramOpts: [
            { ordered: "/#{lon};{lat};{zoom}" },
            urlPattern1,
        ],
        extractors: {
            getPermalink: getPermalinkBySelector("a#editLink"),
        },
    },
    stamen: {
        link: "maps.stamen.com",
        httpOnly: true,
        paramOpts: [
            { ordered: "/#toner/{zoom}/{lat}/{lon}" },
            { ordered: "/#terrain/{zoom}/{lat}/{lon}" },
            { ordered: "/#watercolor/{zoom}/{lat}/{lon}" },
            { ordered: "/{zoom}/{lat}/{lon}" },
        ]
    },
    f4map: {
        link: "demo.f4map.com",
        paramOpts: [
            { ordered: "/#lat={lat}&lon={lon}&zoom={zoom}" } //there are other attributes that can be added if another website with 3D rendering shows up: &camera.theta=57.319&camera.phi=-2.005
        ]
    },
    osmbuildings: {
        link: "osmbuildings.org",
        paramOpts: [
            urlPattern1,
        ],
        disabledByDefault: true,
    },
    openlevelup: {
        link: "openlevelup.net",
        paramOpts: [
            { ordered: "/#{zoom}/{lat}/{lon}" },
            { ordered: "/old/", unordered: { "zoom": "z", "lat": "lat", "lon": "lon" } },
            { ordered: "#{zoom}/{lat}/{lon}" },
        ],
    },
    indoorequal: {
        link: "indoorequal.org",
        paramOpts: [
            { ordered: "/#map={zoom}/{lat}/{lon}" },
            { ordered: "map={zoom}/{lat}/{lon}" },
        ],
        zoomAdjustment: +1,
    },
    umap: {
        link: "umap.openstreetmap.fr",
        paramOpts: [
            { ordered: "/map/new/#{zoom}/{lat}/{lon}" },
            { ordered: "#{zoom}/{lat}/{lon}" },
        ],
        extractors: {
            getAttributesFromPage: (window) => {
                const url = new URL(window.document.location.href);
                if (url) {
                    const matchArray = url.hash.match(/#([0-9.]+)\/([0-9.-]+)\/([0-9.-]+)/);
                    if (matchArray) {
                        const [, zoom, lat, lon] = matchArray;
                        if (typeof zoom === "string" && typeof lat === "string" && typeof lon === "string") {
                            return { zoom, lat, lon };
                        }
                    }
                }
                return {};
            },
        },
    },
    openstreetcam: {
        link: 'openstreetcam.org',
        paramOpts: [
            { ordered: '/map/@{lat},{lon},{zoom}z' },
            { ordered: '@{lat},{lon},{zoom}z' },
        ],
        zoomAdjustment: +1,
    },
    mapillary: {
        link: "www.mapillary.com",
        paramOpts: [
            { ordered: "/app", unordered: { zoom: "z", lat: "lat", lon: "lng" } }
        ],
        zoomAdjustment: +1,
    },
    opentopomap: {
        link: "www.opentopomap.org",
        paramOpts: [
            { ordered: "/#map={zoom}/{lat}/{lon}" },
            { ordered: "/#marker={zoom}/{lat}/{lon}" },
            { ordered: "{zoom}/{lat}/{lon}" },
        ],
    },
    historicmap: {
        link: "gk.historic.place/historische_objekte",
        paramOpts: [urlPattern1],
        maxZoom: 19,
        extractors: {
            getPermalink: getPermalinkBySelector("a#permalink")
        },
    },
    openinframap: {
        link: 'openinframap.org',
        paramOpts: [
            { ordered: '/#{zoom}/{lat}/{lon}' },
            { ordered: '#{zoom}/{lat}/{lon}' },
        ],
        zoomAdjustment: +1,
    },
    bingmaps: {
        link: "www.bing.com",
        paramOpts: [
            { ordered: "/maps?cp={lat}~{lon}&lvl={zoom}" },
            { ordered: "cp={lat}~{lon}&lvl={zoom}" },
        ],
        extractors: {
            getAttributesFromPage: (window) => {
                // Known bug:
                // If the user enters into bing.com/maps (i.e. without parameters) and doesn't move the
                //    map around at least once, this script won't be able to extract any information.
                if (window.history && window.history.state && window.history.state) {
                    // wrappedJSObject is a security feature from Firefox
                    const whs = window.history.state.wrappedJSObject || window.history.state;
                    if (whs && whs.state && whs.state.MapModeStateHistory) {
                        const m = whs.state.MapModeStateHistory;
                        if (m.level && typeof m.level === "number" && m.centerPoint && m.centerPoint.latitude && m.centerPoint.longitude
                            && typeof m.centerPoint.latitude === "number" && typeof m.centerPoint.longitude === "number") {
                            return {
                                lat: m.centerPoint.latitude.toString(),
                                lon: m.centerPoint.longitude.toString(),
                                zoom: m.level.toString(),
                            };
                        }
                    }
                }
                return {};
            }
        },
    },
    googlemaps: {
        link: "www.google.com",
        domainRegexp: /\.google\.(com?|cat|xxx|(com?\.)?[a-z]{2})$/,
        paramOpts: [
            { ordered: "/maps/@{lat},{lon},{zoom}z" },
            { ordered: "@{lat},{lon},{zoom}z" },
            { ordered: "/maps/search/{lat},{lon}" },
            { ordered: "@{lat},{lon}," },
        ]
    },
    waze: {
        link: "www.waze.com",
        paramOpts: [
            { ordered: "/livemap/directions?latlng={lat}%2C{lon}" },
            { ordered: "/en/livemap/directions?latlng={lat}%2C{lon}" },
            { ordered: "latlng={lat}%2C{lon}" },
            { ordered: "/editor", unordered: { lat: "lat", lon: "lon", zoom: "zoom" } },
        ],
        zoomAdjustment: +12,
        extractors: {
            getPermalink: getPermalinkBySelector("a.permalink"),
            getAttributesFromPage: (window) => {
                const latLngElement = window.document.querySelector('.wm-attribution-control__latlng');
                if (latLngElement) {
                    // works in "livemap" page i.e. https://www.waze.com/livemap/directions?latlng=52.514%2C13.429
                    const latLngText = latLngElement.textContent;
                    if (latLngText) {
                        const [lat, lon] = latLngText.split(" | ");
                        if (lat && lon)
                            return {
                                lat,
                                lon,
                                zoom: '3',
                            };
                    }
                }
                ;
                return {};
            },
        },
    },
    stravaglobal: {
        link: "www.strava.com",
        paramOpts: [
            { ordered: "/heatmap#{zoom}/{lon}/{lat}/hot/all" },
            { ordered: "#{zoom}/{lon}/{lat}" },
        ],
        disabledByDefault: true,
    },
    level0: {
        link: "level0.osmz.ru",
        httpOnly: true,
        paramOpts: [
            { ordered: "/?url=n{nodeId}" },
            { ordered: "/?url=w{wayId}!" },
            { ordered: "/?url=r{relationId}" },
            { ordered: "/?url=map={zoom}/{lat}/{lon}" },
        ],
        disabledByDefault: true,
    },
    osmrelationanalyzer: {
        link: "ra.osmsurround.org",
        httpOnly: true,
        paramOpts: [
            { ordered: "/analyzeRelation", unordered: { relationId: "relationId" } }
        ],
        extractors: {
        //TODO: getValues - we can get userName if it's a changeset analysis and maybe map coordinates on both cases
        },
    },
    osmroutemanager: {
        link: "osmrm.openstreetmap.de",
        paramOpts: [
            { ordered: "/relation.jsp", unordered: { relationId: "id" } }
        ],
        extractors: {
        //TODO: getValues - get user that change this relation for the last time
        },
        disabledByDefault: true,
    },
    osmose: {
        link: "osmose.openstreetmap.fr/map",
        paramOpts: [
            { ordered: "/#zoom={zoom}&lat={lat}&lon={lon}" },
            { ordered: "zoom={zoom}&lat={lat}&lon={lon}" },
        ],
        extractors: {
            getPermalink: getPermalinkBySelector("[class*=permalink] a"),
        },
    },
    osminspector: {
        link: "tools.geofabrik.de/osmi",
        paramOpts: [urlPattern1],
        maxZoom: 18,
        extractors: {
            getPermalink: getPermalinkBySelector("a#permalink")
        },
    },
    osmchangetiles: {
        link: "resultmaps.neis-one.org",
        paramOpts: [
            { ordered: "/osm-change-tiles#{zoom}/{lat}/{lon}" },
            { ordered: "#{zoom}/{lat}/{lon}" },
        ]
    },
    missingmaps: {
        link: "www.missingmaps.org",
        paramOpts: [
            { ordered: "/users/#/{userName}" },
            { ordered: "/users/#/{userName}/badges" },
        ],
    },
    osmlanevisualizer: {
        link: "osm.mueschelsoft.de/lanes",
        paramOpts: [
            { ordered: "/", unordered: { "relationId": "relid" } },
            { ordered: "/", unordered: { "wayId": "wayid" } },
        ],
        httpOnly: true,
        disabledByDefault: true,
    },
};
function getPermalinkBySelector(selector) {
    return function (document) {
        const permalink = document.querySelector(selector);
        return permalink && permalink.href;
    };
}
function openLayers_getPermalink() {
    return getPermalinkBySelector("[id*=Permalink] a");
}


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.7.0 - Tue Nov 10 2020 20:24:04 */

  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */

  /* vim: set sts=2 sw=2 et tw=80: */

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            },
            "elements": {
              "createSidebarPane": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goBack": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goForward": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(extensionAPIs.runtime.lastError);
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      }); // Keep track if the deprecation warning has been logged at least once.


      let loggedSendResponseDeprecationWarning = false;
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }

              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(extensionAPIs.runtime.lastError);
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    } // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sites_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].runtime.onMessage.addListener(async (message) => message.candidateSiteIds.length !== 0 ?
    message.candidateSiteIds.map(extractData) :
    [lookForPermalink()] // helps to get parameters from unknown websites
);
function extractData(siteId) {
    const site = _sites_configuration__WEBPACK_IMPORTED_MODULE_1__[/* Sites */ "a"][siteId];
    if (!site) { // custom user sites are not in the `Sites` object
        return {
            siteId,
            ...lookForPermalink(),
        };
    }
    const extr = site.extractors;
    if (extr) {
        const permalink = extr.getPermalink && extr.getPermalink(document);
        const additionalAttributes = extr.getAttributesFromPage && extr.getAttributesFromPage(window);
        return { siteId, permalink, additionalAttributes };
    }
    else {
        return { siteId };
    }
}
function lookForPermalink() {
    let permalink = document.querySelector('[id*=permalink i]') ||
        document.querySelector('[class*=permalink i]');
    if (permalink && !(permalink instanceof HTMLAnchorElement)) {
        permalink = permalink.querySelector('a');
    }
    if (!permalink) {
        permalink = [...document.querySelectorAll('a')]
            .find(a => /permalink/i.test(a.textContent || ''));
    }
    let url;
    if (permalink && permalink instanceof HTMLAnchorElement) {
        url = permalink.href;
    }
    else {
        url = window.document.location.href;
    }
    return {
        permalink: url,
    };
}


/***/ })
/******/ ]);