const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".mobile-info__button-prev",
    prevEl: ".mobile-info__button-next",
  },
});

const SliderAboutUs = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".mobile-about-us__button-prev",
    prevEl: ".mobile-about-us__button-next",
  },
});