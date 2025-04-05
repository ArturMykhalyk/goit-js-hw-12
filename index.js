import{a as q,S as v,i as l}from"./assets/vendor-Epugobq5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const S="49632098-24a72905d1eb262516a3f1210";async function f(r,t,n){return(await q.get("https://pixabay.com/api/",{params:{per_page:n,page:t,key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const w=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,showCounter:!1});function y(r){const t=document.querySelector(".gallery"),n=r.map(({webformatURL:i,largeImageURL:e,tags:o,likes:a,views:h,comments:b,downloads:L})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${i}"
      alt="${o}"
    />
    <ul class="gallery-info-img">
    <li><p class ="gallery-info-name">Likes <span>${a}</span></p></li>
    <li><p class ="gallery-info-name">Views <span>${h}</span></p></li>
    <li><p class ="gallery-info-name">Comments <span>${b}</span></p></li>
    <li><p class ="gallery-info-name">Downloads <span>${L}</span></p></li>

    </ul>
  </a>
</li>
`).join("");t.insertAdjacentHTML("beforeend",n),w.refresh()}function P(){document.querySelector(".gallery").innerHTML=""}function B(){document.querySelector(".loader").classList.add("visible")}function m(){document.querySelector(".loader").classList.remove("visible")}function $(){document.querySelector(".moreButton").classList.add("visible")}function g(){document.querySelector(".moreButton").classList.remove("visible")}const p=document.querySelector(".form"),E=document.querySelector('[name="search-text"]'),M=document.querySelector(".moreButton");let c="",s=1,u=15,d=0;p.addEventListener("submit",r=>{if(r.preventDefault(),g(),c=E.value.trim(),!c)return p.reset(),l.error({message:"The input string must not be empty.",position:"topRight"});B(),P(),s=1,u=document.querySelector(".page_per_selest").value,f(c,s,u).then(t=>{if(m(),t.hits.length===0)return l.info({message:"There are no results for your query.",position:"topRight"});if(y(t.hits),d=t.totalHits/u,d>1)s++,$();else return l.success({message:"This is all that was found by query.",position:"topRight"})}).catch(t=>{m(),console.error("Error fetching images:",t)}),p.reset()});M.addEventListener("click",async()=>{f(c,s,u).then(r=>{y(r.hits),O()}).catch(r=>{console.error("Error click button images:",r)}),s++,d<=s&&(g(),l.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"}))});function O(){const r=document.querySelector(".gallery-link").getBoundingClientRect();window.scrollBy({top:r.height*2+48,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
