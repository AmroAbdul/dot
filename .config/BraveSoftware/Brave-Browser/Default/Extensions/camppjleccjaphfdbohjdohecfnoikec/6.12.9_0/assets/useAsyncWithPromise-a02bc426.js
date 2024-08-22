import{r as s}from"./client-64cc3330.js";import{t as w}from"./backend-8962bc7f.js";import{a as A}from"./index-5fbb8478.js";import{E as y}from"./index-1a12ff06.js";const T=2,b=(h,g=!1)=>{const[a,t]=s.useState(g?"pending":"idle"),[f,o]=s.useState(null),[p,r]=s.useState(null),[n,E]=s.useState(null),u=s.useRef(0),l=s.useRef([]),{signOut:m,updateAuthDetails:k,...c}=s.useContext(A),d=s.useCallback(()=>{n&&(n.abort(),t("idle"),r(null),o(null),u.current=0,l.current=[])},[n]),S=s.useCallback(()=>{n&&(n.abort(),t("idle"),r(null),o(null),u.current=0,l.current=[])},[n]),O=async()=>{try{if(u.current>=T){t("error"),m();return}const i=await w(c.session.refreshToken,"USE_ASYNC_HOOK");i?await k({session:{refreshToken:i.refreshToken},token:i.accessToken}):(t("error"),m())}catch{t("error"),m()}},R=s.useCallback(async(...i)=>{l.current=i;const C=new AbortController;E(C),t("pending"),o(null),r(null);try{const e=await h(c.token,...i,C.signal);return e&&e.hasOwnProperty("usage")?(o(e.data),k({usageDetails:{...c.usageDetails,...e.usage}})):o(e),t("success"),u.current=0,e}catch(e){if((e==null?void 0:e.type)===y.TOKEN_EXPIRED||(e==null?void 0:e.type)===y.TOKEN_INVALID||(e==null?void 0:e.type)===y.TOKEN_MISSING||(e==null?void 0:e.type)===y.UNAUTHORIZED){t("retrying"),r(e),await O();return}if(e!=null&&e.hasOwnProperty("type")&&(e!=null&&e.hasOwnProperty("message"))){r(e),t("error");return}if((e==null?void 0:e.name)==="AbortError"||(e==null?void 0:e.message)==="The user aborted a request."){t("idle"),o(null),r(null);return}r({message:"Something went wrong, please try again later.",type:y.UNKNOWN_ERROR}),t("error")}},[h,c.token,c.usageDetails,O]);return s.useEffect(()=>{g&&R(...l.current)},[]),s.useEffect(()=>{a==="retrying"&&c.token&&(u.current+=1,R(...l.current))},[c.token]),s.useMemo(()=>({error:p,execute:R,loading:a==="pending"||a==="retrying",reset:d,status:a,stop:S,value:f}),[a,f,p,R,d,S])},_=(h,g,a=!1)=>{const t=b(h,a),[f,o]=s.useState(null),[p,r]=s.useState(null);s.useEffect(()=>{(t.status==="success"||t.status==="error")&&(f&&t.status==="success"?f(t.value):p&&t.status==="error"&&p(t.error))},[t.status,t.value,t.error,f,p]);const n=s.useCallback((...E)=>{const u=new Promise((l,m)=>{o(()=>l),r(()=>m)});return t.execute(...E),u},[t]);return s.useMemo(()=>({[g]:{...t,execute:n}}),[g,t,n])};export{_ as u};
