import{r as f,c as m,a as p,_ as h,b as _,d as g,e as v,o as y,f as L,g as E,s as w,h as P,B as O,i as b}from"./vendor.4bab8948.js";const A=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};A();const R="modulepreload",l={},k="/assets/lms_frontend/frontend/",a=function(o,s){return!s||s.length===0?o():Promise.all(s.map(n=>{if(n=`${k}${n}`,n in l)return;l[n]=!0;const e=n.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":R,e||(r.as="script",r.crossOrigin=""),r.href=n,document.head.appendChild(r),e)return new Promise((u,d)=>{r.addEventListener("load",u),r.addEventListener("error",d)})})).then(()=>o())},B=[{path:"/",name:"Home",component:()=>a(()=>import("./Home.c3ddd997.js"),["assets/Home.c3ddd997.js","assets/vendor.4bab8948.js","assets/vendor.1f7d581e.css"])},{path:"/training",name:"Training",component:()=>a(()=>import("./Home.c3ddd997.js"),["assets/Home.c3ddd997.js","assets/vendor.4bab8948.js","assets/vendor.1f7d581e.css"])},{path:"/lesson/:lesson",name:"Lesson",component:()=>a(()=>import("./Lesson.e48fd0f3.js"),["assets/Lesson.e48fd0f3.js","assets/vendor.4bab8948.js","assets/vendor.1f7d581e.css"])}],j=f(window.location.hash);window.addEventListener("hashchange",()=>{j.value=window.location.hash});let C=m({history:p("/training"),routes:B});const H={};function I(i,o){const s=v("router-view");return y(),_("div",null,[g(s)])}var N=h(H,[["render",I]]);const S=L({state(){return{count:0,lecciones:[{parent:""}]}},mutations:{increment(i){i.count++},setLecciones(i,o){i.lecciones=o}}});let c=E(N);w("resourceFetcher",b);c.use(C);c.use(P);c.use(S);c.component("Button",O);c.mount("#app");