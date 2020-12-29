// Слайдер в блоке Hotel
var hotelSlider = new Swiper('.hotel-slider', {
  loop: true,
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: "coverflow",
})

// Карта
ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
            center: [7.890703, 98.294772],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [7.890703, 98.294772]
            },
            properties: {
                iconContent: '',
                hintContent: ''
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: true
        });
    myMap.geoObjects
        .add(myGeoObject);
}

// Слайдер в блоке Reviews
var reviewsSlider = new Swiper('.reviews-slider', {
    loop: true,
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
  })

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function() {
    document
    .querySelector('.navbar-bottom')
    .classList.toggle('navbar-bottom--visible');
    document
    .querySelector('body')
    .classList.toggle('body');
});