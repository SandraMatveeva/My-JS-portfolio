import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.accordion', {
    duration: 300, // Швидкість анімації (в мс)
    showFirst: true, // Відкрити перший елемент за замовчуванням
    collapse: true, // Автоматично закривати інші елементи
    openOnInit: [0],
  });
});

import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.skills-swiper-about-me', {
    // ЗБЕРІГАЄМО у ЗМІННУ
    slidesPerView: 'auto',
    spaceBetween: 0,
    // breakpoints: {
    //   680: {
    //     slidesPerView: 3,
    //     spaceBetween: 0,
    //   },
    //   343: {
    //     slidesPerView: 2,
    //     spaceBetween: 0,
    //   },
    // },
    loop: true,
    initialSlide: 0,
    centeredSlides: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: true,
  });

  document
    .querySelector('.swiper-button-next')
    .addEventListener('click', () => {
      console.log('Клік по кнопці!');
      console.log(swiper.params.navigation); // Тепер змінна swiper визначена
      swiper.slideNext(); // Додаємо примусовий перехід до наступного слайда
    });
});
