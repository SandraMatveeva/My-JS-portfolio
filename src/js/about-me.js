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

// document.addEventListener('DOMContentLoaded', () => {
//   const swiper = new Swiper('.swiper', {
//     slidesPerView: 'auto', // Автоматична ширина
//     spaceBetween: 20, // Відступи між елементами
//     loop: true, // Безкінечне прокручування
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     keyboard: {
//       enabled: true,
//       onlyInViewport: true,
//     },
//     mousewheel: true,
//   });
// });

// document.querySelector('.swiper-button-next').addEventListener('click', () => {
//   console.log('Клік по кнопці!');
//   console.log(typeof Swiper);
//   console.log(swiper.params.navigation);

//   const swiper = new Swiper('.swiper', {
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     slidesPerView: 1,
//     spaceBetween: 20,
//     loop: true,
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.skills-swiper-about-me', {
    // ЗБЕРІГАЄМО у ЗМІННУ
    slidesPerView: 'auto',
    spaceBetween: 20,
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
