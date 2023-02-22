/* header configuração scroll starts*/
const header = document.querySelector(".header");
const btn = document.querySelector(".btn-back");

window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);
  if (top >= 80) {
    header.classList.add("active");
    if (top >= 620) {
      btn.classList.add("active-btn");
    } else {
      btn.classList.remove("active-btn");
    }
  } else {
    header.classList.remove("active");
  }
};

function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
/* header configuração scroll ends*/

/*scroll smooth + margin starts*/
const navBarItems = document.querySelectorAll('.menu a[href^="#"]');

navBarItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 30;

  scrollToPosition(to);
}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}
/*scroll smooth + margin ends*/

/*animated title starts*/
document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".dinamic", {
    speed: 200,
    loop: true,
  })
    .type("WEB", { delay: 900 })
    .delete(3)
    .type("MOBILE", { delay: 900 })
    .delete(6)
    .go();
});

document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".name", {
    speed: 200,
    loop: true,
  })
    .type("Emilayne Rodrigues", { delay: 900 })
    .delete(18)
    .go();
});
/*animated title ends*/

/* swiper starts */

var swiper = new Swiper(".mySwiper", {
  rewind: true,
  slidesPerView: 3,
  spaceBetween: 30,
  // loop: true,
  // centeredSlides: 'true',
  fade: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    520:{
      slidesPerView: 2,
    },
    950:{
      slidesPerView: 3,
    }
  },
});
