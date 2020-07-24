var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
    pageUpDown: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },

  effect: "fade",

  speed: 800,
});

var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  keyboard: {
    enabled: true,
    pageUpDown: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },

  speed: 600,
});

$(".newsletter-parallax").parallax({
  imageSrc: "../img/newsletter-background.jpg",
});
