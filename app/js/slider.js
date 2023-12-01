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
    nextEl: ".mobile-info__button-next",
    prevEl: ".mobile-info__button-prev",
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
    nextEl: ".mobile-about-us__button-next",
    prevEl: ".mobile-about-us__button-prev",
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
    nextEl: ".technologies__button-next",
    prevEl: ".technologies__button-prev",
  },
});

const SliderHowTo = new Swiper(".how-to__swiper", {
  // Optional parameters
  loop: true,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".how-to__button-next",
    prevEl: ".how-to__button-prev",
  },
});