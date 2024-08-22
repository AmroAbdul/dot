"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[1369],{9909:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var r=a(95826),o=a(63345),n=a(75830),s=a(70879),u=a(40944),i=a(3006),m=a(29081),d=a(3644),l=a(85673),c=a(24221),f=a(40302),h=a(3304),y=a(94638),g=a(15155),M=a(30120),F=a(67294),T=a(87296),D=a(7057),_=a(97880),p=a(85893);function b(e){switch(e){case"en-US":case"pseudo":case void 0:return r.Z;case"es-ES":case"es-LA":return o.Z;case"fr-FR":return n.Z;case"de-DE":return s.Z;case"ja-JP":return u.Z;case"ko-KR":return i.Z;case"pt-BR":return m.Z;case"zh-CN":return d.Z;case"zh-TW":return l.Z;case"da-DK":return c.Z;case"fi-FI":return f.Z;case"nb-NO":return h.Z;case"nl-NL":return y.Z;case"sv-SE":return g.Z;default:(0,_.t1)(e)}}function w(e){let{locale:t,onDayClick:a,onMonthSelected:r,...o}=e;window.__c={n:"ReactDayPicker"};const n=(0,F.useCallback)(((e,t,o)=>{a&&a(e,t,o),r&&r(e)}),[a,r]);return(0,p.jsx)(T._W,{onDayClick:n,mode:"default",onMonthChange:r,modifiersClassNames:{range:"rdp-day_range",start:"rdp-day_start",end:"rdp-day_end",value:"rdp-day_value"},locale:b(t),formatters:{formatCaption:(e,t)=>{var a;return(0,D.ZW)(M.ou.fromJSDate(e),"month_year_short",null==t||null===(a=t.locale)||void 0===a?void 0:a.code)}},...o})}},7057:(e,t,a)=>{a.d(t,{$6:()=>v,$I:()=>Z,$b:()=>k,Cp:()=>b,LU:()=>M,OB:()=>d,Yx:()=>w,ZV:()=>m,ZW:()=>p,er:()=>T,kv:()=>D,mr:()=>f,ns:()=>y,p6:()=>c,tv:()=>L,xE:()=>h});var r=a(30120),o=a(42875),n=a(24211),s=a(97880),u=a(40506),i=a(53877);function m(e){return d({...e,formatValuesFn:e=>{const{endDate:t,endTime:a,startDate:r}=e;return(0,s.$K)(a)?`${r} → ${a}`:(0,s.$K)(t)?`${r} → ${t}`:r}})}function d(e){const{value:t,shortenDateAndRange:a,allowRelativeDates:n,date_format:s,time_format:m,intl:d,alwaysIncludeTimezone:c,formatValuesFn:f,getToday:y}=e,{locale:M}=d,F=e.userTimeZone&&function(e){if(e in l)return l[e];try{Intl.DateTimeFormat(void 0,{timeZone:e})}catch(t){return l[e]=!1,!1}return l[e]=!0,!0}(e.userTimeZone)?e.userTimeZone:(0,o.r)(),T=i.NK(t,F,M),D=Boolean(a),_=s??u.sF,p="date"===t.type||"daterange"===t.type,b=!p&&e.displayInUserTimezone,w=b?T.start.setZone(F):T.start,Z=T.end&&b?T.end.setZone(F):T.end,v=w.toLocaleString(r.ou.DATE_SHORT).startsWith(String(w.year)),L=g({date:w,dateFormat:_,timeFormat:m,shortenDate:D,allowRelativeDates:n,userTimeZone:F,intl:d,hasRangeDate:v?void 0:Z,excludeTime:p,alwaysIncludeTimezone:c,getToday:y});if(Z){if("datetimerange"===t.type&&w.startOf("day").equals(Z.startOf("day"))){return f({endTime:h({dateTime:Z,timeFormat:m,humanReadable:!1}),startDate:L})}return f({endDate:g({date:Z,dateFormat:_,timeFormat:m,shortenDate:D,allowRelativeDates:n,userTimeZone:F,intl:d,hasRangeDate:v?w:void 0,excludeTime:p,alwaysIncludeTimezone:c,getToday:y}),startDate:L})}return f({startDate:L})}const l={};function c(e){const{date:t,dateFormat:a,allowRelativeDates:o,shortenDate:n,hasRangeDate:s,intl:m,getToday:d}=e;return o&&"relative"===a?function(e){const{date:t,intl:a}=e,r=(e.getToday??i.Uu)(t.zone),o=Math.round(t.startOf("day").diff(r,"days").get("days"));if(0===o)return a.formatMessage({defaultMessage:"Today",id:"dateFormatHelpers.text.today"});if(1===o)return a.formatMessage({defaultMessage:"Tomorrow",id:"dateFormatHelpers.text.tomorrow"});if(-1===o)return a.formatMessage({defaultMessage:"Yesterday",id:"dateFormatHelpers.text.yesterday"});const n=t.toLocaleString({weekday:"long"});if(o>1&&o<=7)return t.weekNumber===r.weekNumber?n:a.formatMessage({defaultMessage:"Next {dayOfTheWeek}",id:"dateFormatHelpers.text.nextDayOfTheWeek"},{dayOfTheWeek:n});if(o<-1&&o>=-7)return t.weekNumber===r.weekNumber?n:a.formatMessage({defaultMessage:"Last {dayOfTheWeek}",id:"dateFormatHelpers.text.lastDayOfTheWeek"},{dayOfTheWeek:n});return p(t,"long")}({date:t,intl:m,getToday:d}):function(e){const{date:t,dateFormat:a,shortenDate:o,hasRangeDate:n}=e,s=function(e){const t="relative"===e.dateFormat||"MMM DD, YYYY"===e.dateFormat?u.sF:e.dateFormat;return u.jG(t)}({dateFormat:a});if("DDD"===s){const e=o&&(!n&&t.year===r.ou.now().year||t.year===(null==n?void 0:n.year));return t.toLocaleString({year:e?void 0:"numeric",month:o?"short":"long",day:"numeric"})}return t.toFormat(s)}({date:t,dateFormat:a,shortenDate:n,hasRangeDate:s})}function f(e){const{time_format:t}=e,a=Boolean(e.humanReadable);return h({dateTime:r.ou.fromFormat(e.start_time,u.jK).setLocale(e.intl.locale),timeFormat:t,humanReadable:a})}function h(e){const{dateTime:t,humanReadable:a,timeFormat:o}=e;if(a&&"h:mm A"===o){return t.toLocaleString(r.ou.TIME_SIMPLE).replace(" ","").toLowerCase()}if(o){const e=u._F(o);return t.toFormat(e)}return t.toLocaleString(r.ou.TIME_SIMPLE)}function y(e){const{time_format:t,intl:a,start_time:o,end_time:n,humanReadable:s}=e;let i=r.ou.fromFormat(o,u.jK).setLocale(a.locale).toFormat(u._F(t)),m=r.ou.fromFormat(n,u.jK).setLocale(a.locale).toFormat(u._F(t));return s&&"h:mm A"===t&&((i.includes("AM")&&m.includes("AM")||i.includes("PM")&&m.includes("PM"))&&(i=i.replace("AM","").replace("PM","")),i.includes(":00")&&m.includes(":00")&&(i=i.replace(":00",""),m=m.replace(":00","")),i=i.replace(" ","").toLowerCase(),m=m.replace(" ","").toLowerCase()),[i,m].join("-")}function g(e){const{date:t,dateFormat:a,timeFormat:r,userTimeZone:o,excludeTime:n,alwaysIncludeTimezone:s}=e;if(!t.isValid)return"";const u=c(e);if(n)return u;const m=[u,h({dateTime:t,timeFormat:r,humanReadable:"relative"===a})].join(" "),d=t.setZone(o);if(s||t.toFormat(i._F)!==d.toFormat(i._F)){return`${m} (${t.toFormat("ZZZZ")})`}return m}function M(e,t,a){const r=i.NK(e,t);if(i.qw(r)){const e=r.end.diff(r.start),t=e.as("year");if(t>=1)return a.formatMessage({defaultMessage:"{number, plural, one {{number} year} other {{number} years}}",id:"dateFormatHelpers.formatDuration.years"},{number:F(t)});const o=e.as("months");if(o>=1)return a.formatMessage({defaultMessage:"{number, plural, one {{number} month} other {{number} months}}",id:"dateFormatHelpers.formatDuration.months"},{number:F(o)});const n=e.as("days");if(n>=1)return a.formatMessage({defaultMessage:"{number, plural, one {{number} day} other {{number} days}}",id:"dateFormatHelpers.formatDuration.days"},{number:Math.round(n)});const s=e.as("hours");if(s>=1)return a.formatMessage({defaultMessage:"{number, plural, one {{number} hour} other {{number} hours}}",id:"dateFormatHelpers.formatDuration.hours"},{number:Math.round(s)});const u=e.as("minutes");return a.formatMessage({defaultMessage:"{number, plural, one {{number} minute} other {{number} minutes}}",id:"dateFormatHelpers.formatDuration.minutes"},{number:Math.round(u)})}return""}function F(e){return Math.round(10*e)/10}function T(e,t){const a=r.ou.local().setLocale((0,n.E2)(e)).set({weekday:t});if(a.isValid)return a.toFormat("ccccc")}function D(e,t){return(1===e?[1,2,3,4,5,6,7]:[7,1,2,3,4,5,6]).map((e=>[e,r.ou.fromObject({weekday:e}).setLocale(t).toLocaleString({weekday:"short"})]))}const _={very_short:{year:"2-digit",month:"numeric",day:"numeric"},short:r.ou.DATE_SHORT,short2:{year:"numeric",month:"2-digit",day:"2-digit"},medium:r.ou.DATE_MED,medium_with_time:r.ou.DATETIME_MED,long:r.ou.DATE_FULL,day:{day:"numeric"},month_long:{month:"long"},month_short:{month:"short"},month_day:{day:"numeric",month:"short"},month_day_time:{day:"numeric",month:"short",hour:"numeric",minute:"numeric"},month_day_long:{day:"numeric",month:"long"},month_year_long:{month:"long",year:"numeric"},month_year_short:{month:"short",year:"numeric"},time:{hour:"numeric",minute:"numeric"}};function p(e,t,a){return(a?e.setLocale(a):e).toLocaleString(_[t])}function b(e,t){return"YYYY-MM-DD"===t?e.toISODate():e.toFormat(u.jG(t))}function w(e,t,a,o){return p(r.ou.fromMillis(e,{locale:a,zone:o}),t)}function Z(e){return r.ou.fromMillis(e).toUTC().toISO({format:"extended"})}function v(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const a=t?r.ou.fromMillis(e).toUTC():r.ou.fromMillis(e);return a.toISODate({format:"extended"})}function L(e,t){return r.ou.fromMillis(e,{locale:t}).toRelative()??""}function k(e,t,a){const o=r.ou.now().startOf("day"),n=r.ou.fromMillis(e,{locale:t}),s=Math.round(n.startOf("day").diff(o,"days").as("days")),u=n.toLocaleString(r.ou.TIME_SIMPLE);return 0===s?a.formatMessage({defaultMessage:"Today at {time}",id:"dateFormatHelpers.formatMillisToCalendar.todayAt"},{time:u}):-1===s?a.formatMessage({defaultMessage:"Yesterday at {time}",id:"dateFormatHelpers.formatMillisToCalendar.yesterdayAt"},{time:u}):p(n,"medium_with_time")}}}]);