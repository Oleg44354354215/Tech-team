import{S as l,N as a,K as u,M as p,a as d}from"./assets/vendor-CCySa_t8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".section-reviews .swiper-wrapper"),f="https://portfolio-js.b.goit.study/api/reviews",m=document.querySelector(".swiper-next-buttonn"),w=document.querySelector(".swiper-prev-buttonn");async function y(){try{const{data:r}=await d(f,{headers:{"Content-Type":"application/json"}});return r}catch(r){console.error("Error reviews:",r.message),c.innerHTML=h()}}function h(){return`
    <div class="swiper-slide error">
      <p class="glush-reviews">Not found</p>
    </div>
  `}y().then(r=>{console.log(r),c.innerHTML=g(r)}).catch(r=>{console.error(r)});function g(r){return r.map(({id:o,author:s,avatar_url:i,review:e})=>`
        <li class="list-item swiper-slide">
          <img src="${i}" alt="${s}" class="author-item-img" />
          <h3 class="author-name">${s}</h3>
          <p class="reviews-descreiption">${e}</p>
        </li>`).join("")}new l(".swiper",{modules:[a,u,p],navigation:{nextEl:m,prevEl:w},loop:!1,spaceBetween:16,slidesPerView:1,speed:800,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{forceToAxis:!0},touchEventsTarget:"container",createElements:!0});
//# sourceMappingURL=index.js.map
