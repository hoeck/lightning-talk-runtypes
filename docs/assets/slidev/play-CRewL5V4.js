function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-BaOx2qzd.js","assets/modules/unplugin-icons-C_kUjd2D.js","assets/modules/vue-Dpzh9dbX.js","assets/modules/shiki-BE4Gqpus.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-OBOyfOn3.js","assets/index-4WeUNnZi.js","assets/index-k19Fs7YU.css","assets/slidev/bottom-B5CdzWkZ.js","assets/slidev/SlidesShow-DUDFldZM.js","assets/SlidesShow-DZAAkYiM.css","assets/DrawingControls-BO6lw4N5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{b as g,c as v,_ as M,j as S,x as N,y as P,z as E}from"../index-4WeUNnZi.js";import{d as h,a5 as j,o as s,c as r,z as e,b as y,e as l,f as $,i as b,g as n,a6 as B,I as z,k as x,a4 as f,Z as O,Q as _,l as u,F as I,t as R,h as T}from"../modules/vue-Dpzh9dbX.js";import{c as k,e as w,f as V,h as U,j as D,w as A,k as H,l as L}from"./bottom-B5CdzWkZ.js";import{Q,G as F,r as G,u as W,S as K,N as X,a as Y}from"./SlidesShow-DUDFldZM.js";import{i as Z}from"./DrawingPreview-OBOyfOn3.js";import{P as q}from"./PrintStyle-DVH6luGv.js";import"../modules/shiki-BE4Gqpus.js";import"../modules/unplugin-icons-C_kUjd2D.js";const J="/assets/logo-BYkHSa_O.png",ee={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},te=h({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:a}){const i=c,t=j(i,"modelValue",a);function o(){t.value=!1}return(d,p)=>(s(),r(B,null,[e(t)?(s(),y("div",ee,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:p[0]||(p[0]=C=>o())}),l("div",{class:b(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[$(d.$slots,"default")],2)])):n("v-if",!0)],1024))}}),oe=g(te,[["__file","/home/erik/projects/decompiled-lightningtalk-8minutes-with-runtypes/node_modules/@slidev/client/internals/Modal.vue"]]),le={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},se=["innerHTML"],ae=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:J,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),O("dev ")])])],-1),ie=h({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:a}){const t=j(c,"modelValue",a),o=z(()=>typeof v.info=="string");return(d,p)=>(s(),r(oe,{modelValue:e(t),"onUpdate:modelValue":p[0]||(p[0]=C=>f(t)?t.value=C:null),class:"px-6 py-4"},{default:x(()=>[l("div",le,[o.value?(s(),y("div",{key:0,class:"mb-4",innerHTML:e(v).info},null,8,se)):n("v-if",!0),ae])]),_:1},8,["modelValue"]))}}),ne=g(ie,[["__file","/home/erik/projects/decompiled-lightningtalk-8minutes-with-runtypes/node_modules/@slidev/client/internals/InfoDialog.vue"]]),re=h({__name:"Controls",setup(c){const a=_(),i=_();return(m,t)=>(s(),y(I,null,[u(Q,{modelValue:e(k),"onUpdate:modelValue":t[0]||(t[0]=o=>f(k)?k.value=o:null)},null,8,["modelValue"]),u(F),a.value?(s(),r(e(a),{key:0})):n("v-if",!0),i.value?(s(),r(e(i),{key:1,modelValue:e(w),"onUpdate:modelValue":t[1]||(t[1]=o=>f(w)?w.value=o:null)},null,8,["modelValue"])):n("v-if",!0),e(v).info?(s(),r(ne,{key:2,modelValue:e(V),"onUpdate:modelValue":t[2]||(t[2]=o=>f(V)?V.value=o:null)},null,8,["modelValue"])):n("v-if",!0)],64))}}),de=g(re,[["__file","/home/erik/projects/decompiled-lightningtalk-8minutes-with-runtypes/node_modules/@slidev/client/internals/Controls.vue"]]),ue=h({__name:"play",setup(c){G();const a=R();function i(o){var d;D.value||((d=o.target)==null?void 0:d.id)==="slide-container"&&(o.screenX/window.innerWidth>.6?P():E())}W(a);const m=z(()=>U.value||D.value);_();const t=_();return M(()=>import("./DrawingControls-BaOx2qzd.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])).then(o=>t.value=o.default),(o,d)=>(s(),y(I,null,[e(S)?(s(),r(q,{key:0})):n("v-if",!0),l("div",{id:"page-root",ref_key:"root",ref:a,class:b(["grid",e(L)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[u(Y,{class:"w-full h-full",style:T({background:"var(--slidev-slide-container-background, black)"}),width:e(S)?e(A).width.value:void 0,scale:e(H),"is-main":!0,onPointerdown:i},{default:x(()=>[u(K,{"render-context":"slide"})]),controls:x(()=>[l("div",{class:b(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[m.value?"!opacity-100 right-0":"opacity-0 p-2",e(Z)?"pointer-events-none":""]])},[u(X,{class:"m-auto",persist:m.value},null,8,["persist"])],2),!e(v).drawings.presenterOnly&&!e(N)&&t.value?(s(),r(e(t),{key:0,class:"ml-0"})):n("v-if",!0)]),_:1},8,["style","width","scale"]),n("v-if",!0)],2),u(de)],64))}}),ye=g(ue,[["__file","/home/erik/projects/decompiled-lightningtalk-8minutes-with-runtypes/node_modules/@slidev/client/pages/play.vue"]]);export{ye as default};