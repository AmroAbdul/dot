(globalThis.webpackChunkproton_pass_extension=globalThis.webpackChunkproton_pass_extension||[]).push([["date-fns/sk-index-js"],{85773:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultOptions=function(){return a},t.setDefaultOptions=function(e){a=e};var a={}},73656:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){(0,r.default)(2,arguments);var n=(0,o.default)(e,a),u=(0,o.default)(t,a);return n.getTime()===u.getTime()};var r=n(a(80136)),o=n(a(30309));e.exports=t.default},80136:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},30309:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,o.default)(1,arguments);var a,n,d,l,s,f,p,c,m=(0,i.getDefaultOptions)(),v=(0,u.default)(null!==(a=null!==(n=null!==(d=null!==(l=null==t?void 0:t.weekStartsOn)&&void 0!==l?l:null==t?void 0:null===(s=t.locale)||void 0===s?void 0:null===(f=s.options)||void 0===f?void 0:f.weekStartsOn)&&void 0!==d?d:m.weekStartsOn)&&void 0!==n?n:null===(p=m.locale)||void 0===p?void 0:null===(c=p.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==a?a:0);if(!(v>=0&&v<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=(0,r.default)(e),b=h.getUTCDay();return h.setUTCDate(h.getUTCDate()-((b<v?7:0)+b-v)),h.setUTCHours(0,0,0,0),h};var r=n(a(90602)),o=n(a(80136)),u=n(a(15217)),i=a(85773);e.exports=t.default},15217:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},2252:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},1478:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=null!=a&&a.width?String(a.width):r;n=e.formattingValues[o]||e.formattingValues[r]}else{var u=e.defaultWidth,i=null!=a&&a.width?String(a.width):e.defaultWidth;n=e.values[i]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},64906:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],u=t.match(o);if(!u)return null;var i=u[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(d,function(e){return e.test(i)}):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(d,function(e){return e.test(i)});return a=e.valueCallback?e.valueCallback(l):l,{value:a=n.valueCallback?n.valueCallback(a):a,rest:t.slice(i.length)}}},e.exports=t.default},46532:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],o=t.match(e.parsePattern);if(!o)return null;var u=e.valueCallback?e.valueCallback(o[0]):o[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:t.slice(r.length)}}},e.exports=t.default},81945:(e,t)=>{"use strict";function a(e,t,a){return(1===t&&e.one?e.one:t>=2&&t<=4&&e.twoFour?e.twoFour:e.other)[a].replace("{{count}}",String(t))}function n(e){var t="";return"almost"===e&&(t="takmer"),"about"===e&&(t="približne"),t.length>0?t+" ":""}function r(e){var t="";return"lessThan"===e&&(t="menej než"),"over"===e&&(t="viac než"),t.length>0?t+" ":""}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={xSeconds:{one:{present:"sekunda",past:"sekundou",future:"sekundu"},twoFour:{present:"{{count}} sekundy",past:"{{count}} sekundami",future:"{{count}} sekundy"},other:{present:"{{count}} sekúnd",past:"{{count}} sekundami",future:"{{count}} sekúnd"}},halfAMinute:{other:{present:"pol minúty",past:"pol minútou",future:"pol minúty"}},xMinutes:{one:{present:"minúta",past:"minútou",future:"minútu"},twoFour:{present:"{{count}} minúty",past:"{{count}} minútami",future:"{{count}} minúty"},other:{present:"{{count}} minút",past:"{{count}} minútami",future:"{{count}} minút"}},xHours:{one:{present:"hodina",past:"hodinou",future:"hodinu"},twoFour:{present:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{present:"{{count}} hodín",past:"{{count}} hodinami",future:"{{count}} hodín"}},xDays:{one:{present:"deň",past:"dňom",future:"deň"},twoFour:{present:"{{count}} dni",past:"{{count}} dňami",future:"{{count}} dni"},other:{present:"{{count}} dní",past:"{{count}} dňami",future:"{{count}} dní"}},xWeeks:{one:{present:"týždeň",past:"týždňom",future:"týždeň"},twoFour:{present:"{{count}} týždne",past:"{{count}} týždňami",future:"{{count}} týždne"},other:{present:"{{count}} týždňov",past:"{{count}} týždňami",future:"{{count}} týždňov"}},xMonths:{one:{present:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{present:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{present:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xYears:{one:{present:"rok",past:"rokom",future:"rok"},twoFour:{present:"{{count}} roky",past:"{{count}} rokmi",future:"{{count}} roky"},other:{present:"{{count}} rokov",past:"{{count}} rokmi",future:"{{count}} rokov"}}};t.default=function(e,t,u){var i,d=["lessThan","about","over","almost"].filter(function(t){return!!e.match(RegExp("^"+t))})[0]||"",l=o[(i=e.substring(d.length)).charAt(0).toLowerCase()+i.slice(1)];return null!=u&&u.addSuffix?u.comparison&&u.comparison>0?n(d)+"o "+r(d)+a(l,t,"future"):n(d)+"pred "+r(d)+a(l,t,"past"):n(d)+r(d)+a(l,t,"present")},e.exports=t.default},37735:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(2252)),o={date:(0,r.default)({formats:{full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. M. y",short:"d. M. y"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}}, {{time}}",long:"{{date}}, {{time}}",medium:"{{date}}, {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=o,e.exports=t.default},22429:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(73656)),o=["nedeľu","pondelok","utorok","stredu","štvrtok","piatok","sobotu"];function u(e){var t=o[e];return 4===e?"'vo' eeee 'o' p":"'v "+t+" o' p"}var i={lastWeek:function(e,t,a){var n=e.getUTCDay();return(0,r.default)(e,t,a)?u(n):function(e){var t=o[e];switch(e){case 0:case 3:case 6:return"'minulú "+t+" o' p";default:return"'minulý' eeee 'o' p"}}(n)},yesterday:"'včera o' p",today:"'dnes o' p",tomorrow:"'zajtra o' p",nextWeek:function(e,t,a){var n=e.getUTCDay();return(0,r.default)(e,t,a)?u(n):function(e){var t=o[e];switch(e){case 0:case 4:case 6:return"'budúcu "+t+" o' p";default:return"'budúci' eeee 'o' p"}}(n)},other:"P"};t.default=function(e,t,a,n){var r=i[e];return"function"==typeof r?r(t,a,n):r},e.exports=t.default},99501:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1478)),o={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,r.default)({values:{narrow:["pred Kr.","po Kr."],abbreviated:["pred Kr.","po Kr."],wide:["pred Kristom","po Kristovi"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. štvrťrok","2. štvrťrok","3. štvrťrok","4. štvrťrok"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],wide:["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"]},defaultWidth:"wide",formattingValues:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],wide:["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra"]},defaultFormattingWidth:"wide"}),day:(0,r.default)({values:{narrow:["n","p","u","s","š","p","s"],short:["ne","po","ut","st","št","pi","so"],abbreviated:["ne","po","ut","st","št","pi","so"],wide:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"ráno",afternoon:"pop.",evening:"več.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"ráno",afternoon:"popol.",evening:"večer",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"polnoc",noon:"poludnie",morning:"ráno",afternoon:"popoludnie",evening:"večer",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"o poln.",noon:"nap.",morning:"ráno",afternoon:"pop.",evening:"več.",night:"v n."},abbreviated:{am:"AM",pm:"PM",midnight:"o poln.",noon:"napol.",morning:"ráno",afternoon:"popol.",evening:"večer",night:"v noci"},wide:{am:"AM",pm:"PM",midnight:"o polnoci",noon:"napoludnie",morning:"ráno",afternoon:"popoludní",evening:"večer",night:"v noci"}},defaultFormattingWidth:"wide"})};t.default=o,e.exports=t.default},82835:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(64906)),o={ordinalNumber:(0,n(a(46532)).default)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(pred Kristom|pred na[šs][íi]m letopo[čc]tom|po Kristovi|n[áa][šs]ho letopo[čc]tu)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^pr/i,/^(po|n)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\. [šs]tvr[ťt]rok/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|m[áa]j|j[úu]n|j[úu]l|aug|sep|okt|nov|dec)/i,wide:/^(janu[áa]ra?|febru[áa]ra?|(marec|marca)|apr[íi]la?|m[áa]ja?|j[úu]na?|j[úu]la?|augusta?|(september|septembra)|(okt[óo]ber|okt[óo]bra)|(november|novembra)|(december|decembra))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^m[áa]j/i,/^j[úu]n/i,/^j[úu]l/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[npusšp]/i,short:/^(ne|po|ut|st|št|pi|so)/i,abbreviated:/^(ne|po|ut|st|št|pi|so)/i,wide:/^(nede[ľl]a|pondelok|utorok|streda|[šs]tvrtok|piatok|sobota])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^u/i,/^s/i,/^š/i,/^p/i,/^s/i],any:[/^n/i,/^po/i,/^u/i,/^st/i,/^(št|stv)/i,/^pi/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(am|pm|(o )?poln\.?|(nap\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]\.?|(v n\.?|noc))/i,abbreviated:/^(am|pm|(o )?poln\.?|(napol\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]er|(v )?noci?)/i,any:/^(am|pm|(o )?polnoci?|(na)?poludnie|r[áa]no|popoludn(ie|í|i)|ve[čc]er|(v )?noci?)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/poln/i,noon:/^(nap|(na)?pol(\.|u))/i,morning:/^r[áa]no/i,afternoon:/^pop/i,evening:/^ve[čc]/i,night:/^(noc|v n\.)/i}},defaultParseWidth:"any"})};t.default=o,e.exports=t.default},7912:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(81945)),o=n(a(37735)),u=n(a(22429)),i=n(a(99501)),d=n(a(82835)),l={code:"sk",formatDistance:r.default,formatLong:o.default,formatRelative:u.default,localize:i.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default},90602:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,o.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,r.default)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))};var r=n(a(14319)),o=n(a(80136));e.exports=t.default},4293:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},14319:e=>{function t(a){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(a)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);