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
    }
    else{
      btn.classList.remove("active-btn");
    }
  } else {
    header.classList.remove("active");
  }
};

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
