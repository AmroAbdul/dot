import{g as t,I as m}from"./index-1a12ff06.js";import{L as r}from"./hook-90290a85.js";function S(){const[n=m,l]=r({instance:new t({area:"local"}),key:"UserSettings"});return[n,i=>{var o,s,e;if(i==="gmail"&&(i="merlinOnGmail"),i==="merlinOnSocialMedia"){l({...n,[`${i}`]:{...n[`${i}`],visible:!((o=n[`${i}`])!=null&&o.visible)}});return}if(i==="linkedin"||i==="twitter"||i==="facebook"||i==="outlook"){l({...n,merlinOnSocialMedia:{...n.merlinOnSocialMedia,[`${i}`]:{visible:!((s=n.merlinOnSocialMedia[`${i}`])!=null&&s.visible)}}});return}l({...n,[`${i}`]:{visible:!((e=n[`${i}`])!=null&&e.visible)}})},l]}export{S as u};
