  const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,

        autoplay: {   //  Добавление параметра autoplay
        delay: 2000, // задержка между переключениями в миллисекундах (3 секунды)
        disableOnInteraction: false, // для того что бы слайдер продолжал листаться, если пользователь с ним взаимодействует
        },
        pagination: {
          el: '.swiper-pagination',
           clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
         breakpoints: {
             640: {
              slidesPerView: 2,
             spaceBetween: 20,
        },
      992:{
           slidesPerView: 3,
          spaceBetween: 20,
        }
  }
});
