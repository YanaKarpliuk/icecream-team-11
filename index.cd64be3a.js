!function(){var e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),r=document.querySelectorAll("[data-menu-close]"),a=function(){var r="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-active"),e.setAttribute("aria-expanded",!r),t.classList.toggle("is-open"),document.body.classList.toggle("modal-open")},n=!0,o=!1,l=void 0;try{for(var i,c=r[Symbol.iterator]();!(n=(i=c.next()).done);n=!0)i.value.addEventListener("click",a)}catch(e){o=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw l}}e.addEventListener("click",a),$(".review__list").slick({dots:!0,arrows:!1})}();
//# sourceMappingURL=index.cd64be3a.js.map