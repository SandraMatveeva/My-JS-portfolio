import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.reviews-swipper', {
    // ЗБЕРІГАЄМО у ЗМІННУ
    slidesPerView: 4,
    spaceBetween: 16,
    breakpoints: {
      // when window width is >= 768px
      1439: {
        slidesPerView: 4,
        spaceBetween: 16,
      },

      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },

      // when window width is >= 375px
      375: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
    loop: false,
    initialSlide: 0,
    centeredSlides: false,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: true,
  });

  swiper.on('slideChange', function () {
    console.log('slide changed', swiper.activeIndex);
    console.log(swiper);

    if (swiper.activeIndex === 0) {
      const divElement = document.querySelector('.reviews-button-left');

      // Добавляем класс
      divElement.classList.add('block');
    }

    if (swiper.activeIndex === 2) {
      const divElement = document.querySelector('.reviews-button-right');

      // Добавляем класс
      divElement.classList.add('block');
    }

    if (swiper.activeIndex === 2 || swiper.activeIndex === 1) {
      const divElement = document.querySelector('.reviews-button-left');

      // Добавляем класс
      divElement.classList.remove('block');
    }

    if (swiper.activeIndex === 0 || swiper.activeIndex === 1) {
      const divElement = document.querySelector('.reviews-button-right');

      // Добавляем класс
      divElement.classList.remove('block');
    }
  });

  document
    .querySelector('.reviews-button-right')
    .addEventListener('click', () => {
      console.log('Клік по кнопці!');
      console.log(swiper.params.navigation); // Тепер змінна swiper визначена
      swiper.slideNext(); // Додаємо примусовий перехід до наступного слайда
    });

  document
    .querySelector('.reviews-button-left')
    .addEventListener('click', () => {
      console.log('Клік по кнопці!');
      console.log(swiper.params.navigation); // Тепер змінна swiper визначена
      swiper.slidePrev(); // Додаємо примусовий перехід до наступного слайда
    });
});
