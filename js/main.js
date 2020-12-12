// Слайдер в блоке Hotel
var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
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