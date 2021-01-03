$(document).ready(function () {
  // Слайдер в блоке Hotel
  var hotelSlider = new Swiper(".hotel-slider", {
    loop: true,
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    effect: "coverflow",
  });

  // Карта
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map(
        "map",
        {
          center: [7.890703, 98.294772],
          zoom: 17,
        },
        {
          searchControlProvider: "yandex#search",
        }
      ),
      myGeoObject = new ymaps.GeoObject(
        {
          geometry: {
            type: "Point",
            coordinates: [7.890703, 98.294772],
          },
          properties: {
            iconContent: "",
            hintContent: "",
          },
        },
        {
          preset: "islands#blackStretchyIcon",
          draggable: true,
        }
      );
    myMap.geoObjects.add(myGeoObject);
  }

  // Слайдер в блоке Reviews
  var reviewsSlider = new Swiper(".reviews-slider", {
    loop: true,
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

//   Мобильное меню
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

// Модальное окно
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  
  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
}

// Обработка форм
  $('.form').each(function(){
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name must not be less than 2 letters",
        },
        email: {
          required: "We need your email adress to contact you",
          email: "Your email adress must be in the format of name@domain.com",
        },
        phone: {
          required: "Phone number is required",
        },
      },
    });
  });

// Mask
  $(document).ready(function(){
    $('.phone').mask('+7 (999) 999-99-99');
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
      translation: {
        'Z': {
          pattern: /[0-9]/, optional: true
        }
      }
    });
    $('.ip_address').mask('099.099.099.099');
    $('.percent').mask('##0,00%', {reverse: true});
    $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
    $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
    $('.fallback').mask("00r00r0000", {
        translation: {
          'r': {
            pattern: /[\/]/,
            fallback: '/'
          },
          placeholder: "__/__/____"
        }
      });
    $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
  });

  AOS.init();
  
});


