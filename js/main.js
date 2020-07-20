var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
    pageUpDown: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },

  effect: "fade",

  speed: 800,
});
