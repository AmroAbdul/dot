import{g as a,U as c}from"./index-1a12ff06.js";import{L as m}from"./hook-90290a85.js";const S=()=>{const[e=c,t]=m({instance:new a({area:"local"}),key:"UserSettings"}),s=e.codeSummarizer.visible;return{blackList:e.codeSummarizer.blackList,codeSummarizer:s,updateBlackList:r=>{const i=e.codeSummarizer.blackList;i.includes(r)?i.splice(i.indexOf(r),1):i.push(r),t({...e,codeSummarizer:{...e.codeSummarizer,blackList:i}})},updateCodeSummarizer:r=>{t({...e,codeSummarizer:{...e.codeSummarizer,visible:r}})}}};export{S as u};