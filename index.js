import{S as c,N as l,K as u,M as a,a as d}from"./assets/vendor-CCySa_t8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f=document.querySelector(".projects-swiper-next-button"),w=document.querySelector(".projects-swiper-prev-button");new c(".swiper-projects-container",{modules:[l,u,a],navigation:{nextEl:f,prevEl:w},spaceBetween:100,slidesPerView:1,speed:800,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{forceToAxis:!0},touchEventsTarget:"wrapper",createElements:!0});const p=document.querySelector(".section-reviews .swiper-wrapper"),m="https://portfolio-js.b.goit.study/api/reviews",y=document.querySelector(".swiper-next-buttonn"),h=document.querySelector(".swiper-prev-buttonn");async function v(){try{const{data:r}=await d(m,{headers:{"Content-Type":"application/json"}});return r}catch(r){console.error("Error reviews:",r.message),p.innerHTML=g()}}function g(){return`
    <div class="swiper-slide error">
      <p class="glush-reviews">Not found</p>
    </div>
  `}v().then(r=>{console.log(r),p.innerHTML=b(r)}).catch(r=>{console.error(r)});function b(r){return r.map(({id:o,author:s,avatar_url:n,review:e})=>`
        <li class="list-item swiper-slide">
          <img src="${n}" alt="${s}" class="author-item-img" />
          <h3 class="author-name">${s}</h3>
          <p class="reviews-descreiption">${e}</p>
        </li>`).join("")}new c(".swiper",{modules:[l,u,a],navigation:{nextEl:y,prevEl:h},loop:!1,spaceBetween:16,slidesPerView:1,speed:800,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{forceToAxis:!0},touchEventsTarget:"container",createElements:!0});
//# sourceMappingURL=index.js.map
