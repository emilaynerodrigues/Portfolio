var swiper = new Swiper(".mySwiper", {
  rewind: true,
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  fade: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

/*efeito hover dos links das redes sociais*/

// obtenha todos os links com a classe 'hover-effect'
const hoverLinks = document.querySelectorAll(".hover-effect");
const imageContainer = document.querySelector(".image-container");

// adicione eventos de hover para todos os links
hoverLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    // Obtenha o caminho da imagem associada ao link usando o atributo 'data-image'
    const imagePath = link.dataset.image;

    // Crie uma nova imagem e defina sua origem (src)
    const newImage = new Image();
    newImage.src = imagePath;

    // Limpe o contêiner de imagem antes de adicionar a nova imagem
    while (imageContainer.firstChild) {
      imageContainer.removeChild(imageContainer.firstChild);
    }

    // Adicione a nova imagem ao contêiner
    imageContainer.appendChild(newImage);

    // Adicione a classe 'show-image' para tornar a imagem visível com a transição
    imageContainer.classList.add("show-image");
  });

  link.addEventListener("mouseout", () => {
    // Remova a classe 'show-image' para ocultar a imagem com a transição
    imageContainer.classList.remove("show-image");
  });
});

/*animated title starts*/
document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".dinamic-title", {
    speed: 200,
    loop: true,
  })
    .type("WEB", { delay: 1000 })
    .delete(3)
    .type("MOBILE", { delay: 1000 })
    .delete(6)
    .go();
});

/*animated title ends*/
