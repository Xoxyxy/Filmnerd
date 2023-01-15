function H(){import("data:text/javascript,")}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();const _="dd2567a5-1ae4-4189-8e75-1c32c30ca4b5",b="https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=",$="https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=",x="https://kinopoiskapiunofficial.tech/api/v2.2/films/",u=document.querySelector(".hero__container"),g=document.querySelector(".loader"),C=document.querySelector(".header__form"),l=document.querySelector(".header__search"),r=document.querySelector(".modal"),v=document.body,h=document.querySelector(".hero__result"),f=document.querySelector(".pagination__list"),m=()=>g.classList.add("hide"),L=()=>g.classList.remove("hide"),o=e=>e=="null"||e==null?"-":e,k=e=>(e=o(e),e.length>16?`${e.slice(0,16)}...`:e),M=e=>{if(e=="-")return e;let t;return e.forEach(s=>t=s.genre),o(t)},E=e=>e.map(t=>` ${t.genre}`),S=e=>(e=o(e),e!="-"?`${e.slice(3)}+`:e),P=e=>(e=o(e),e!="-"?`${e} минут`:e);async function T(e){await A(x,e).then(t=>{m();try{r.innerHTML=`
        <div class="modal__window">
        <button class="modal__close btn-reset"><svg class="modal__close-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#eb8c57" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></button>
          <div class="modal__img-box">
            <img class="modal__img" src=${t.posterUrl} loading="lazy" alt="Обложка фильма">
          </div>
          <div class="modal__content">
            <div class="modal__top">
              <span class="modal__name">${o(t.nameRu)}</span>
            </div>
            <ul class="modal__list list-reset">
              <li class="modal__item"><span>Страна:</span> ${t.countries.map(s=>` ${s.country}`)}</li>
              <li class="modal__item"><span>Год:</span> ${o(t.year)}</li>
              <li class="modal__item"><span>Время:</span> ${P(t.filmLength)}</li>
              <li class="modal__item"><span>Жанр:</span> ${E(t.genres)}</li>
              <li class="modal__item"><span>Возраст:</span> ${S(t.ratingAgeLimits)}</li>
              <li class="modal__item"><span>Оценка:</span> ${o(t.ratingKinopoisk)}</li>
            </ul>
            <div class="modal__descr"><div class="modal__descr-title">Описание:</div>${o(t.description)}</div>
            </div>
          </div>
        `}catch(s){r.innerHTML=`
        <div class="modal__window modal__window--empty">
        <button class="modal__close btn-reset"><svg class="modal__close-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#eb8c57" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></button>
        <div class="modal__empty">Информация отсутствует или недоступна</div>
        </div>
        `}}),r.classList.add("modal--active"),v.classList.add("body--fixed")}function y(){r.classList.remove("modal--active"),v.classList.remove("body--fixed")}function p(e,t){t&&t.classList.contains(e)&&y()}r.addEventListener("click",e=>{p("modal__close",e.target),p("modal",e.target)});window.addEventListener("keydown",e=>{e.code=="Escape"&&r.classList.contains("modal--active")&&y()});function q(e){e.films.forEach(t=>{const s=document.createElement("div");s.classList.add("hero__card","card"),s.innerHTML=`
    <div class="card__img-box">
      <img class="card__img"
        src=${t.posterUrl} loading="lazy"
        alt="Обложка фильма">
    </div>
    <div class="card__content">
      <div class="card__rate">
        <svg class="card__star-img" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.10326 2.31699C5.47008 1.57374 6.52992 1.57374 6.89674 2.31699L7.53068 3.60151C7.67635 3.89665 7.95791 4.10122 8.28362 4.14855L9.70117 4.35453C10.5214 4.47372 10.8489 5.48169 10.2554 6.06022L9.22964 7.06008C8.99395 7.28982 8.8864 7.62082 8.94204 7.94522L9.18419 9.35704C9.3243 10.1739 8.46687 10.7969 7.73324 10.4112L6.46534 9.74464C6.17402 9.59149 5.82598 9.59149 5.53466 9.74464L4.26676 10.4112C3.53313 10.7969 2.6757 10.1739 2.81581 9.35704L3.05796 7.94522C3.1136 7.62082 3.00605 7.28982 2.77036 7.06008L1.74461 6.06023C1.15109 5.48169 1.4786 4.47372 2.29882 4.35453L3.71638 4.14855C4.04209 4.10122 4.32365 3.89665 4.46932 3.60151L5.10326 2.31699Z" fill="#EB8C57"/>
        </svg> 
        <span class="card__rate-numb">${o(t.rating)}</span>
      </div>
      <div class="card__name">${k(t.nameRu)}</div>
      <div class="card__genre">${M(t.genres)}</div>
      <div class="card__time">${o(t.filmLength)}</div>
    </div>
    `,u.append(s),m(),s.addEventListener("click",()=>T(t.filmId))})}async function w(e){try{u.innerHTML="",f.innerHTML="",L();const s=await(await fetch(e,{headers:{"X-API-KEY":_,"Content-type":"application/json"}})).json();return q(s),s}catch(t){throw u.innerHTML=`
  <div class="card__error"><div>Что-то пошло не так :(</div><div>Можете обратится к документации: <a href="https://github.com/Xoxyxy/Filmnerd" target="_blank">https://github.com/Xoxyxy/Filmnerd</a></div></div>
  `,m(),h.remove(),console.error(t)}}async function A(e,t){return L(),await(await fetch(e+t,{headers:{"X-API-KEY":_,"Content-type":"application/json"}})).json()}const I=new Proxy(new URLSearchParams(window.location.search),{get:(e,t)=>e.get(t)});let c=I.page;c||(c=1,history.pushState(null,null,"?page=1"));async function F(e=1){const s=(await w(b+e)).pagesCount;for(let i=s;i>=1;i--)f.insertAdjacentHTML("afterbegin",`
    <li class="pagination__item">
      <a href="?page=${i}" class="pagination__link ${i==c?"pagination__link--active":""}">${i}</a>
    </li>
    `)}function O(e){C.addEventListener("submit",t=>{t.preventDefault(),history.pushState(null,null,"?page=1");const s=l.value.trim();if(s=="")return;const i=`${e}${l.value}`;w(i),h.innerText=`Результат поиска по запросу: ${s.toLowerCase()}`,l.value=""})}document.addEventListener("DOMContentLoaded",()=>{F(c),O($)});export{H as __vite_legacy_guard};
