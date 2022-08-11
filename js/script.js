
const swiper = new Swiper('.swiper', {
   // Optional parameters
   effect: "flip",
   grabCursor: true,
   // loop: true,
   centeredSlides: true,

   autoplay: {
      delay: 3000,
      stopOnLastSlide: true,
   },



   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },


});

// screen.addEventListener("orientationchange", function () {
//    console.log("The orientation of the screen is: " + screen.orientation);
// });