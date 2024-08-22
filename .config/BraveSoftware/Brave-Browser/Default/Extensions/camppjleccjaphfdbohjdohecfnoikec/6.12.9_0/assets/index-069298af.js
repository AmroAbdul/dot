import{L as a,D as n,_ as l,g as h}from"./index-6400eb41.js";import{B as u}from"./index-1a12ff06.js";import{e as f,M as m,A as g,g as d,c as p}from"./analytics-4a9d4e40.js";import{t as y,v as D}from"./backend-8962bc7f.js";const o={email:"",isAuthenticated:!1,isLoading:!0,name:"",session:{refreshToken:null},token:null,usageDetails:{limit:0,type:"NONE",used:0}},r=async t=>{try{const e=await a.get("authDetails");a.set("authDetails",{...e,...t}).then(()=>console.log("updated authDetails =>")),await c({email:t.email,name:t.name})}catch(e){console.error(e),await c({reset:!0})}},A=async()=>{const t=await a.get("authDetails");t&&t.isAuthenticated?t.hasOwnProperty("session")||r({...o,isLoading:!1}):r({...o,isLoading:!1})};async function I(){try{const t=await a.get("authDetails"),e=await y(t.session.refreshToken);e?await r({session:{refreshToken:e.refreshToken},token:e.accessToken}):(await r({...o,isLoading:!1}),await c({reset:!0}))}catch{}}async function L(){try{const t=await a.get("authDetails"),e=await D(t.token);e&&r({usageDetails:e.user})}catch(t){console.error("Error in updating usage details",t)}}async function k(){const t=await n.commands.getAll(),e=t.find(i=>i.name==="toggle_merlin"),s=t.find(i=>i.name==="_execute_action");return e&&e.shortcut!==""?await a.set("shortcut",e.shortcut):s&&s.shortcut!==""?await a.set("shortcut",s.shortcut):await a.set("shortcut",""),e.shortcut==="⇧⌘,"||e.shortcut==="Ctrl+Shift+Comma"?s.shortcut||"":e.shortcut||s.shortcut||""}const C=t=>{n.tabs.create({url:t})};function S(t){l().then(e=>e&&n.tabs.sendMessage(e.id,{data:{...t}})).catch(e=>console.error(e))}const $=async()=>{try{A(),h()}catch(t){console.error(t)}},P=async t=>{try{const e=await fetch(`${f}?measurement_id=${m}&api_secret=${g}`,{body:JSON.stringify(t),method:"POST"});return}catch(e){console.error("Google Analytics request failed with an exception",e)}},w=(t,e)=>{for(const s in e)e.hasOwnProperty(s)&&(typeof e[s]=="object"&&!Array.isArray(e[s])?(t.hasOwnProperty(s)||(t[s]={}),w(t[s],e[s])):t.hasOwnProperty(s)||(t[s]=e[s]))},c=async t=>{let e=`extensionVersion=${n.runtime.getManifest().version}&clientId=${await d()}&sessionId=${await p()}`;if(t.reset||t.email===""||t.email===null)n.runtime.setUninstallURL(`${u}?${e}`);else{const{email:s,name:i}=t;e+=`&email=${s}&name=${i}`,n.runtime.setUninstallURL(`${u}?${e}`)}};export{r as a,$ as b,k as c,S as d,c as e,P as f,o as i,C as o,I as r,L as s,w as u};