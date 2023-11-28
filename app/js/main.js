//Cards transform cursor
document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelectorAll(".about-us__card");
  card.forEach((card) => {
    if (card) {
      card.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = card.getBoundingClientRect();

        const x = clientX - left - width / 2;
        const y = clientY - top - height / 2;

        const rotationX = +(y / height) * 10;
        const rotationY = -(x / width) * 10;

        card.style.transition = "transform 0.1s";
        card.style.transform = `perspective(500px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transition = "transform 0.3s";
        card.style.transform = "perspective(500px) rotateX(0deg) rotateY(0deg)";
      });
    }
  });
});


//Scroll to section
document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll(".nav-link");

  scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      closeBurgerMenu();
      scrollToSectionByLink(event);
    });
  });
});
