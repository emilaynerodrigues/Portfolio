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
