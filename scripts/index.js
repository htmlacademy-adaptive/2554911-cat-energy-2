var t=document.querySelector(".navigation"),d=document.querySelector(".navigation__menu-button");t.classList.remove("navigation--nojs");d.addEventListener("click",()=>{t.classList.contains("navigation--close")?(t.classList.remove("navigation--close"),t.classList.add("navigation--open")):(t.classList.add("navigation--close"),t.classList.remove("navigation--open"))});var e=document.querySelector(".demo"),i=e.querySelector(".demo__curtain"),u=getComputedStyle(e),o,a;e.classList.remove("demo--nojs");i.classList.remove("demo__curtain--nojs");window.addEventListener("pointerup",m);i.addEventListener("pointerdown",v);function v(n){o=Number(u.getPropertyValue("--curtain-place")),a=n.clientX,window.addEventListener("pointermove",s)}function s(n){let c=n.clientX-a,r=o+c/e.clientWidth,l=Math.min(Math.max(r,0),1);e.style.setProperty("--curtain-place",`${l}`)}function m(){window.removeEventListener("pointermove",s)}