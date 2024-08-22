(globalThis.webpackChunkproton_pass_extension=globalThis.webpackChunkproton_pass_extension||[]).push([["date-fns/th-index-js"],{2252:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},1478:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,i=null!=a&&a.width?String(a.width):r;n=e.formattingValues[i]||e.formattingValues[r]}else{var o=e.defaultWidth,u=null!=a&&a.width?String(a.width):e.defaultWidth;n=e.values[u]||e.values[o]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},64906:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(i);if(!o)return null;var u=o[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(d,function(e){return e.test(u)}):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(d,function(e){return e.test(u)});return a=e.valueCallback?e.valueCallback(l):l,{value:a=n.valueCallback?n.valueCallback(a):a,rest:t.slice(u.length)}}},e.exports=t.default},46532:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];return{value:o=a.valueCallback?a.valueCallback(o):o,rest:t.slice(r.length)}}},e.exports=t.default},47624:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"น้อยกว่า 1 วินาที",other:"น้อยกว่า {{count}} วินาที"},xSeconds:{one:"1 วินาที",other:"{{count}} วินาที"},halfAMinute:"ครึ่งนาที",lessThanXMinutes:{one:"น้อยกว่า 1 นาที",other:"น้อยกว่า {{count}} นาที"},xMinutes:{one:"1 นาที",other:"{{count}} นาที"},aboutXHours:{one:"ประมาณ 1 ชั่วโมง",other:"ประมาณ {{count}} ชั่วโมง"},xHours:{one:"1 ชั่วโมง",other:"{{count}} ชั่วโมง"},xDays:{one:"1 วัน",other:"{{count}} วัน"},aboutXWeeks:{one:"ประมาณ 1 สัปดาห์",other:"ประมาณ {{count}} สัปดาห์"},xWeeks:{one:"1 สัปดาห์",other:"{{count}} สัปดาห์"},aboutXMonths:{one:"ประมาณ 1 เดือน",other:"ประมาณ {{count}} เดือน"},xMonths:{one:"1 เดือน",other:"{{count}} เดือน"},aboutXYears:{one:"ประมาณ 1 ปี",other:"ประมาณ {{count}} ปี"},xYears:{one:"1 ปี",other:"{{count}} ปี"},overXYears:{one:"มากกว่า 1 ปี",other:"มากกว่า {{count}} ปี"},almostXYears:{one:"เกือบ 1 ปี",other:"เกือบ {{count}} ปี"}};t.default=function(e,t,n){var r,i=a[e];return(r="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",String(t)),null!=n&&n.addSuffix)?n.comparison&&n.comparison>0?"halfAMinute"===e?"ใน"+r:"ใน "+r:r+"ที่ผ่านมา":r},e.exports=t.default},10153:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(2252)),i={date:(0,r.default)({formats:{full:"วันEEEEที่ do MMMM y",long:"do MMMM y",medium:"d MMM y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"H:mm:ss น. zzzz",long:"H:mm:ss น. z",medium:"H:mm:ss น.",short:"H:mm น."},defaultWidth:"medium"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'เวลา' {{time}}",long:"{{date}} 'เวลา' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},22307:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lastWeek:"eeee'ที่แล้วเวลา' p",yesterday:"'เมื่อวานนี้เวลา' p",today:"'วันนี้เวลา' p",tomorrow:"'พรุ่งนี้เวลา' p",nextWeek:"eeee 'เวลา' p",other:"P"};t.default=function(e,t,n,r){return a[e]},e.exports=t.default},52971:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1478)),i={ordinalNumber:function(e,t){return String(e)},era:(0,r.default)({values:{narrow:["B","คศ"],abbreviated:["BC","ค.ศ."],wide:["ปีก่อนคริสตกาล","คริสต์ศักราช"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["ไตรมาสแรก","ไตรมาสที่สอง","ไตรมาสที่สาม","ไตรมาสที่สี่"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],abbreviated:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],wide:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],short:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],abbreviated:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],wide:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"เช้า",afternoon:"บ่าย",evening:"เย็น",night:"กลางคืน"},abbreviated:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"เช้า",afternoon:"บ่าย",evening:"เย็น",night:"กลางคืน"},wide:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"เช้า",afternoon:"บ่าย",evening:"เย็น",night:"กลางคืน"}},defaultWidth:"wide",formattingValues:{narrow:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"ตอนเช้า",afternoon:"ตอนกลางวัน",evening:"ตอนเย็น",night:"ตอนกลางคืน"},abbreviated:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"ตอนเช้า",afternoon:"ตอนกลางวัน",evening:"ตอนเย็น",night:"ตอนกลางคืน"},wide:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"ตอนเช้า",afternoon:"ตอนกลางวัน",evening:"ตอนเย็น",night:"ตอนกลางคืน"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},67829:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(64906)),i={ordinalNumber:(0,n(a(46532)).default)({matchPattern:/^\d+/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^([bB]|[aA]|คศ)/i,abbreviated:/^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ค\.?ศ\.?)/i,wide:/^(ก่อนคริสตกาล|คริสต์ศักราช|คริสตกาล)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^[bB]/i,/^(^[aA]|ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช|)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^ไตรมาส(ที่)? ?[1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|แรก|หนึ่ง)/i,/(2|สอง)/i,/(3|สาม)/i,/(4|สี่)/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?)/i,abbreviated:/^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?')/i,wide:/^(มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/i},defaultMatchWidth:"wide",parsePatterns:{wide:[/^มก/i,/^กุม/i,/^มี/i,/^เม/i,/^พฤษ/i,/^มิ/i,/^กรก/i,/^ส/i,/^กัน/i,/^ต/i,/^พฤศ/i,/^ธ/i],any:[/^ม\.?ค\.?/i,/^ก\.?พ\.?/i,/^มี\.?ค\.?/i,/^เม\.?ย\.?/i,/^พ\.?ค\.?/i,/^มิ\.?ย\.?/i,/^ก\.?ค\.?/i,/^ส\.?ค\.?/i,/^ก\.?ย\.?/i,/^ต\.?ค\.?/i,/^พ\.?ย\.?/i,/^ธ\.?ค\.?/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,short:/^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,abbreviated:/^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,wide:/^(อาทิตย์|จันทร์|อังคาร|พุธ|พฤหัสบดี|ศุกร์|เสาร์)/i},defaultMatchWidth:"wide",parsePatterns:{wide:[/^อา/i,/^จั/i,/^อั/i,/^พุธ/i,/^พฤ/i,/^ศ/i,/^เส/i],any:[/^อา/i,/^จ/i,/^อ/i,/^พ(?!ฤ)/i,/^พฤ/i,/^ศ/i,/^ส/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{any:/^(ก่อนเที่ยง|หลังเที่ยง|เที่ยงคืน|เที่ยง|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ก่อนเที่ยง/i,pm:/^หลังเที่ยง/i,midnight:/^เที่ยงคืน/i,noon:/^เที่ยง/i,morning:/เช้า/i,afternoon:/บ่าย/i,evening:/เย็น/i,night:/กลางคืน/i}},defaultParseWidth:"any"})};t.default=i,e.exports=t.default},36658:(e,t,a)=>{"use strict";var n=a(4293).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(47624)),i=n(a(10153)),o=n(a(22307)),u=n(a(52971)),d=n(a(67829)),l={code:"th",formatDistance:r.default,formatLong:i.default,formatRelative:o.default,localize:u.default,match:d.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=l,e.exports=t.default},4293:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);