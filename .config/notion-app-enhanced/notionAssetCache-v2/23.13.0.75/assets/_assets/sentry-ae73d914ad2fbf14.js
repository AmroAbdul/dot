"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[2897],{98809:(e,t,n)=>{function r(e){const{request:t}=e;t&&(o(t,["url"]),o(t.headers,["Referer"]));const n="urls"in e&&Array.isArray(e.urls)?e.urls:void 0;return n&&function(e){for(let t=0;t<=e.length;t++){const n=e[t];"string"==typeof n&&(e[t]=a(n))}}(n),e}function a(e){if((e=e.replace(/([0-9A-Za-z\-]+)-([0-9a-f]+)/g,(function(e){return`[REDACTED]-${arguments.length<=2?void 0:arguments[2]}`}))).startsWith("/api/")){return new URL(e,"https://example.com").pathname}return e}function o(e,t){if(e&&"object"==typeof e)for(const n of t){const t=e[n];"string"==typeof t&&(e[n]=a(t))}}n.r(t),n.d(t,{default:()=>p});var s=n(94717),i=n(37253);const l=!1;let c=!1;function p(e){c||(c=!0,(0,s.qU)(),function(e){const{Sentry:t,config:n,getErrorsSampleRate:s,getTracesSampleRate:i,getReplaysSessionSampleRate:c,getReplaysOnErrorSampleRate:p,getIsProfilingEnabled:d,getProfilesSampleRate:f}=e,u=s(),g=i(),v=c(),y=p(),S=d(),m=f();t.init({dsn:"https://704fe3b1898d4ccda1d05fe1ee79a1f7@o324374.ingest.sentry.io/5741876",beforeSend:e=>(e.tags={...e.tags,isLocalhost:n.isLocalhost},e),beforeBreadcrumb(e,t){const n=function(e){return"http"===e.type?o(e.data,["url"]):"navigation"===e.category&&o(e.data,["from","to"]),e}(e);return n},environment:n.env,release:n.version,attachStacktrace:!0,integrations:[new t.Integrations.GlobalHandlers({onerror:!0,onunhandledrejection:!1}),...g>0?[new t.BrowserTracing]:[],...v>0||y>0?[new t.Replay({beforeAddRecordingEvent:e=>{var t,n;const r=null==e||null===(t=e.data)||void 0===t?void 0:t.tag,o=null==e||null===(n=e.data)||void 0===n||null===(n=n.payload)||void 0===n?void 0:n.op;if("performanceSpan"===r&&"string"==typeof o&&o.startsWith("navigation")){var s;const t=null==e||null===(s=e.data)||void 0===s||null===(s=s.payload)||void 0===s?void 0:s.description;"string"==typeof t&&(e.data.payload.description=a(t))}return e}})]:[],...S?[new t.BrowserProfilingIntegration]:[]],sampleRate:u,tracesSampleRate:g,replaysSessionSampleRate:v,replaysOnErrorSampleRate:y,profilesSampleRate:m}),t.configureScope((e=>{e.setExtra("clientVersion",n.version)})),t.addGlobalEventProcessor((e=>{const t=r(e);return t})),l}(e),(0,s.Xc)(e.Sentry),i.Z.sdk=e.Sentry)}}}]);