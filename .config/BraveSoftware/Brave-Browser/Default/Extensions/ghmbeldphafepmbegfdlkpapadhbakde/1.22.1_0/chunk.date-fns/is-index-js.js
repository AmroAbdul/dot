(globalThis.webpackChunkproton_pass_extension=globalThis.webpackChunkproton_pass_extension||[]).push([["date-fns/is-index-js"],{2252:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},1478:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var n=e.defaultFormattingWidth||e.defaultWidth,i=null!=a&&a.width?String(a.width):n;r=e.formattingValues[i]||e.formattingValues[n]}else{var u=e.defaultWidth,d=null!=a&&a.width?String(a.width):e.defaultWidth;r=e.values[d]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},64906:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],u=t.match(i);if(!u)return null;var d=u[0],o=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(o)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(o,function(e){return e.test(d)}):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(o,function(e){return e.test(d)});return a=e.valueCallback?e.valueCallback(l):l,{value:a=r.valueCallback?r.valueCallback(a):a,rest:t.slice(d.length)}}},e.exports=t.default},46532:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var n=r[0],i=t.match(e.parsePattern);if(!i)return null;var u=e.valueCallback?e.valueCallback(i[0]):i[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:t.slice(n.length)}}},e.exports=t.default},68856:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"minna en 1 sekúnda",other:"minna en {{count}} sekúndur"},xSeconds:{one:"1 sekúnda",other:"{{count}} sekúndur"},halfAMinute:"hálf mínúta",lessThanXMinutes:{one:"minna en 1 mínúta",other:"minna en {{count}} mínútur"},xMinutes:{one:"1 mínúta",other:"{{count}} mínútur"},aboutXHours:{one:"u.þ.b. 1 klukkustund",other:"u.þ.b. {{count}} klukkustundir"},xHours:{one:"1 klukkustund",other:"{{count}} klukkustundir"},xDays:{one:"1 dagur",other:"{{count}} dagar"},aboutXWeeks:{one:"um viku",other:"um {{count}} vikur"},xWeeks:{one:"1 viku",other:"{{count}} vikur"},aboutXMonths:{one:"u.þ.b. 1 mánuður",other:"u.þ.b. {{count}} mánuðir"},xMonths:{one:"1 mánuður",other:"{{count}} mánuðir"},aboutXYears:{one:"u.þ.b. 1 ár",other:"u.þ.b. {{count}} ár"},xYears:{one:"1 ár",other:"{{count}} ár"},overXYears:{one:"meira en 1 ár",other:"meira en {{count}} ár"},almostXYears:{one:"næstum 1 ár",other:"næstum {{count}} ár"}};t.default=function(e,t,r){var n,i=a[e];return(n="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",t.toString()),null!=r&&r.addSuffix)?r.comparison&&r.comparison>0?"í "+n:n+" síðan":n},e.exports=t.default},94553:(e,t,a)=>{"use strict";var r=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(2252)),i={date:(0,n.default)({formats:{full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"d.MM.y"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},48499:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lastWeek:"'síðasta' dddd 'kl.' p",yesterday:"'í gær kl.' p",today:"'í dag kl.' p",tomorrow:"'á morgun kl.' p",nextWeek:"dddd 'kl.' p",other:"P"};t.default=function(e,t,r,n){return a[e]},e.exports=t.default},30139:(e,t,a)=>{"use strict";var r=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(1478)),i={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,n.default)({values:{narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["fyrir Krist","eftir Krist"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["1F","2F","3F","4F"],wide:["1. fjórðungur","2. fjórðungur","3. fjórðungur","4. fjórðungur"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,n.default)({values:{narrow:["J","F","M","A","M","J","J","Á","S","Ó","N","D"],abbreviated:["jan.","feb.","mars","apríl","maí","júní","júlí","ágúst","sept.","okt.","nóv.","des."],wide:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["S","M","Þ","M","F","F","L"],short:["Su","Má","Þr","Mi","Fi","Fö","La"],abbreviated:["sun.","mán.","þri.","mið.","fim.","fös.","lau."],wide:["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"f",pm:"e",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"},wide:{am:"fyrir hádegi",pm:"eftir hádegi",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"}},defaultWidth:"wide",formattingValues:{narrow:{am:"f",pm:"e",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"},wide:{am:"fyrir hádegi",pm:"eftir hádegi",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},4069:(e,t,a)=>{"use strict";var r=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(64906)),i={ordinalNumber:(0,r(a(46532)).default)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+(\.)?/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(f\.Kr\.|e\.Kr\.)/i,abbreviated:/^(f\.Kr\.|e\.Kr\.)/i,wide:/^(fyrir Krist|eftir Krist)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(f\.Kr\.)/i,/^(e\.Kr\.)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]\.?/i,abbreviated:/^q[1234]\.?/i,wide:/^[1234]\.? fjórðungur/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1\.?/i,/2\.?/i,/3\.?/i,/4\.?/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jfmásónd]/i,abbreviated:/^(jan\.|feb\.|mars\.|apríl\.|maí|júní|júlí|águst|sep\.|oct\.|nov\.|dec\.)/i,wide:/^(januar|febrúar|mars|apríl|maí|júní|júlí|águst|september|október|nóvember|desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^á/i,/^s/i,/^ó/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maí/i,/^jún/i,/^júl/i,/^áu/i,/^s/i,/^ó/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|má|þr|mi|fi|fö|la)/i,abbreviated:/^(sun|mán|þri|mið|fim|fös|lau)\.?/i,wide:/^(sunnudagur|mánudagur|þriðjudagur|miðvikudagur|fimmtudagur|föstudagur|laugardagur)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^þ/i,/^m/i,/^f/i,/^f/i,/^l/i],any:[/^su/i,/^má/i,/^þr/i,/^mi/i,/^fi/i,/^fö/i,/^la/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(f|e|síðdegis|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i,any:/^(fyrir hádegi|eftir hádegi|[ef]\.?h\.?|síðdegis|morgunn|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^f/i,pm:/^e/i,midnight:/^mi/i,noon:/^há/i,morning:/morgunn/i,afternoon:/síðdegi/i,evening:/kvöld/i,night:/nótt/i}},defaultParseWidth:"any"})};t.default=i,e.exports=t.default},88034:(e,t,a)=>{"use strict";var r=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(68856)),i=r(a(94553)),u=r(a(48499)),d=r(a(30139)),o=r(a(4069)),l={code:"is",formatDistance:n.default,formatLong:i.default,formatRelative:u.default,localize:d.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default},4293:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
