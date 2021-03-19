$(document).ready(function() {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
// слайдер Slick


// начиная отсюда слайдер Owl Carousel 2
// была проблема когда остается 1 картинка она становится большой, решил удалив width 100% из файла owl.carousel.min.css
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         768:{
//             items:2
//         },
//         1200:{
//             items:3
//         }
//     }
// })

// var owl = $('.owl-carousel');
// owl.owlCarousel();
// // Go to the next item
// $('.arrows__right').click(function() {
//     owl.trigger('next.owl.carousel');
// })
// // Go to the previous item
// $('.arrows__left').click(function() {
//     // With optional speed parameter
//     // Parameters has to be in square bracket '[]'
//     owl.trigger('prev.owl.carousel', [300]);
// })

