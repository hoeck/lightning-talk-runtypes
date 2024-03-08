import{d as p,Y as d,I as _,b as a,e as t,x as s,z as r,F as h,X as u,o as n,Z as f,l as g,g as v}from"../modules/vue-Dpzh9dbX.js";import{k as x,c as m,f as b,t as k,b as y}from"../index-4WeUNnZi.js";import{N}from"./NoteDisplay-PywBm-06.js";import"../modules/shiki-BE4Gqpus.js";const w={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},D={class:"text-lg"},H={class:"font-bold flex gap-2"},S={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-main mb-8"},C=p({__name:"print",setup(F){d(`
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
`),x({title:`Notes - ${m.title}`});const l=_(()=>b.value.map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,i)=>(n(),a("div",w,[t("div",L,[t("div",T,[t("h1",V,s(r(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(n(!0),a(h,null,u(l.value,(e,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",D,[t("div",H,[t("div",S,s(e==null?void 0:e.no)+"/"+s(r(k)),1),f(" "+s(e==null?void 0:e.title)+" ",1),j])]),g(N,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<l.value.length-1?(n(),a("hr",z)):v("v-if",!0)]))),128))])]))}}),W=y(C,[["__file","/home/erik/projects/decompiled-lightningtalk-8minutes-with-runtypes/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{W as default};
