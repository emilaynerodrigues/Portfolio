/*scroll smooth + margin starts*/
const navBarItems = document.querySelectorAll('.menu-nav a[href^="#"]');

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

//-----------------------------

/* button/header scrool starts */
const header = document.querySelector(".header");
const btn = document.querySelector(".btn-scrool");

window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);
  if (top >= 80) {
    header.classList.add("active-header");
    if (top >= 200) {
      btn.classList.add("active-btn");
    } else {
      btn.classList.remove("active-btn");
    }
  } else {
    header.classList.remove("active-header");
  }
};

function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}
/* button/header scrool ends */
