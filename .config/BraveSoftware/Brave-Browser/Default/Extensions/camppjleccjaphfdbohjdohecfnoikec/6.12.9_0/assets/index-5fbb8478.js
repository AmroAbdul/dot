import{r as i,j as p}from"./client-64cc3330.js";import{g as h,A as a}from"./index-1a12ff06.js";import{L}from"./hook-90290a85.js";import{L as r,k as o}from"./index-6400eb41.js";const l=i.createContext(null),n={email:null,isAuthenticated:!1,isLoading:!0,name:null,session:{refreshToken:null},token:null,usageDetails:{cappedFeatures:{realtimeSerp:{limit:0,used:0}},limit:0,type:"NONE",used:0}},g=({children:c})=>{const[t=n]=L({instance:new h({area:"local"}),key:"authDetails"}),s=async e=>{try{await r.set("authDetails",{...t,...e}),o({action:a.UNINSTALL_URL,payload:{email:e.email,name:e.name}})}catch(m){o({action:a.UNINSTALL_URL,payload:{reset:!0}}),console.error(m)}},u=()=>{s({...n,isLoading:!1}),r.remove("cacheStorage").catch(()=>{}),o({action:a.UNINSTALL_URL,payload:{reset:!0}})},d=i.useMemo(()=>({...t,signOut:u,updateAuthDetails:s}),[t]);return p.jsx(l.Provider,{value:d,children:!t.isLoading&&c})},f=l,v=g;export{v as A,f as a,l as b};