import{d,u as _,a as p,c as m,b as h,r as u,e as a,f as t,t as s,g as r,F as f,h as g,n as v,i as x,o as n,j as y,k as b,l as k,m as N,_ as w}from"./index-QhOmdrmN.js";import{N as P}from"./NoteDisplay-BNCFwdwT.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},j={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=d({__name:"PresenterPrint",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=h(()=>u.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),a("div",{id:"page-root",style:v(r(x))},[t("div",V,[t("div",L,[t("h1",S,s(r(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(n(!0),a(f,null,g(i.value,(e,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",j,[t("div",B,[t("div",D,s(e==null?void 0:e.no)+"/"+s(r(y)),1),b(" "+s(e==null?void 0:e.title)+" ",1),H])]),k(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),a("hr",z)):N("v-if",!0)]))),128))])],4))}}),E=w(C,[["__file","/home/erik/projects/decompiled-lightningtalk-8minutes-with-runtypes/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
