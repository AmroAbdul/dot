import{o as t,L as e,d as a}from"./index-6400eb41.js";import"./index-1a12ff06.js";const i={matches:["https://rentry.co/"]},c=async()=>{const o=document.querySelector(".CodeMirror-code"),r=await e.get("rentryMarkdown");r&&a(o,r),e.remove("rentryMarkdown")};(async()=>{try{await t(".CodeMirror-code"),c()}catch(o){console.error("Error in content script",(o==null?void 0:o.message)||"")}})();export{i as config};
