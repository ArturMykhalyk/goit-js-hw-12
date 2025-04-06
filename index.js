import{a as v,S,i as l}from"./assets/vendor-Epugobq5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const w="49632098-24a72905d1eb262516a3f1210";async function f(o,t,i){return(await v.get("https://pixabay.com/api/",{params:{per_page:i,page:t,key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const P=new S(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,showCounter:!1});function g(o){const t=document.querySelector(".gallery"),i=o.map(({webformatURL:n,largeImageURL:e,tags:r,likes:a,views:b,comments:L,downloads:q})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${n}"
      alt="${r}"
    />
    <ul class="gallery-info-img">
    <li><p class ="gallery-info-name">Likes <span>${a}</span></p></li>
    <li><p class ="gallery-info-name">Views <span>${b}</span></p></li>
    <li><p class ="gallery-info-name">Comments <span>${L}</span></p></li>
    <li><p class ="gallery-info-name">Downloads <span>${q}</span></p></li>

    </ul>
  </a>
</li>
`).join("");t.insertAdjacentHTML("beforeend",i),P.refresh()}function B(){document.querySelector(".gallery").innerHTML=""}function y(){document.querySelector(".loader").classList.add("visible")}function m(){document.querySelector(".loader").classList.remove("visible")}function $(){document.querySelector(".moreButton").classList.add("visible")}function h(){document.querySelector(".moreButton").classList.remove("visible")}const p=document.querySelector(".form"),E=document.querySelector('[name="search-text"]'),M=document.querySelector(".moreButton");let c="",s=1,u=15,d=0;p.addEventListener("submit",async o=>{if(o.preventDefault(),h(),c=E.value.trim(),!c)return p.reset(),l.error({message:"The input string must not be empty.",position:"topRight"});y(),B(),s=1,u=document.querySelector(".page_per_selest").value;try{const t=await f(c,s,u);if(m(),t.hits.length===0)return l.info({message:"There are no results for your query.",position:"topRight"});if(g(t.hits),d=t.totalHits/u,d>1)s++,$();else return l.success({message:"This is all that was found by query.",position:"topRight"})}catch(t){m(),console.error("Error fetching images:",t)}p.reset()});M.addEventListener("click",async()=>{y();try{const o=await f(c,s,u);m(),g(o.hits),O()}catch(o){console.error("Error click button images:",o)}d<=s&&(h(),l.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"})),s++});function O(){const o=document.querySelector(".gallery-link").getBoundingClientRect();window.scrollBy({top:o.height*2+48,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
