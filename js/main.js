$(document).ready(function () {
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
  
  // при нажатии на пункт меню, меню должно открываться/закрываться
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
 });
  
  // при нажатии на пункт меню, меню должно сворачиваться
  
  // Прокрутка на jQuery к якорю
  $(document).ready(function() {
    $(".navbar-menu__link").click(function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 800);
      return false;
    });
  });
  
  // пишем код jquery для того, чтобы при нажатии на кнопку всплывало модальное окно
  var modalButton = $("[data-toggle=modal]");
   // чтобы при нажатии на крестик окно закрывалось
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  // on означает addEventListener
  closeModalButton.on("click", closeModal);
  // когда случиться клик на кнопку, которая содержит data-toggle=modal должна выполниться функция
  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  // функция, чтобы окно закрывалось
  function closeModal(event) {
    // создаем параметр event для того, чтобы отменить действие якорной ссылки, 
    // чтобы при нажатии на крестик не перебрасывало наверх функция preventDefault
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  // чтобы окно закрывалось при нажатии esc
  $(document).keydown(function(event) { 
    if (event.keyCode == 27) { 
      $(".modal__overlay").removeClass('modal__overlay--visible');
      $(".modal__dialog").removeClass('modal__dialog--visible');
    }
  });

  // Валидация форм через плагин jquery
  $(".form").each(function () {
    $(this).validate({
      // чтобы проверка срабатывала для каждой формы по-отдельности
      errorClass: "invalid",
      // присваивался класс invalid, а не стандартный класс error
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Min 2 letters",
        },
        phone: {
          required: "Your phone number",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });
});
