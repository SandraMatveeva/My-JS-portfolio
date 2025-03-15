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
  new Swiper('.swiper', {
    slidesPerView: 'auto', // Автоматична ширина
    spaceBetween: 20, // Відступи між елементами
    loop: true, // Безкінечне прокручування
    navigation: {
      nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: true,
  });
});
