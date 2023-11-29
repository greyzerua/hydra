const swiper = new Swiper(".hero-section__swiper", {
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

const SliderAboutUs = new Swiper(".about-us__swiper", {
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

const SliderTechnologies = new Swiper(".technologies__swiper", {
  // Optional parameters
  loop: true,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".technologies__button-prev",
    prevEl: ".technologies__button-next",
  },
});