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

// параллакс-эффект
$(".newsletter-parallax").parallax({
  imageSrc: "./img/newsletter-background.jpg",
});

// API Яндекс карта
// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map-hotel", {
    center: [12.934923151175724, 100.88307986706273],
    zoom: 15,
  });
  // Метка
  var placemark = new ymaps.Placemark(
    [12.934923151175724, 100.88307986706273],
    {
      hintContent: "Hilton Hotel",
    }
  );
  myMap.geoObjects.add(placemark);
}
