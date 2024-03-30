
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 5,
    perMove: 1,
    breakpoints: {
      992: {
        type: 'loop',
        perPage: 4,
        perMove: 1,
      },
      768: {
        type: 'loop',
        perPage: 3,
        perMove: 1,
      },
      576: {
        type: 'loop',
        perPage: 2,
        perMove: 1,
      },
    },
    rewind: true,
    pagination: false,
  });
  splide.mount();
});

