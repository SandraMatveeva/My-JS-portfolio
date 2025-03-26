import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.projects-swipper', {
    // ЗБЕРІГАЄМО у ЗМІННУ
    slidesPerView: 1,
    spaceBetween: 0,
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
      const divElement = document.querySelector('.projects-btn-left');

      // Добавляем класс
      divElement.classList.add('block');
    }

    if (swiper.activeIndex === 2) {
      const divElement = document.querySelector('.projects-btn-right');

      // Добавляем класс
      divElement.classList.add('block');
    }

    if (swiper.activeIndex === 2 || swiper.activeIndex === 1) {
      const divElement = document.querySelector('.projects-btn-left');

      // Добавляем класс
      divElement.classList.remove('block');
    }

    if (swiper.activeIndex === 0 || swiper.activeIndex === 1) {
      const divElement = document.querySelector('.projects-btn-right');

      // Добавляем класс
      divElement.classList.remove('block');
    }
  });

  document
    .querySelector('.projects-btn-right')
    .addEventListener('click', () => {
      console.log('Клік по кнопці!');
      console.log(swiper.params.navigation); // Тепер змінна swiper визначена
      swiper.slideNext(); // Додаємо примусовий перехід до наступного слайда
    });

  document.querySelector('.projects-btn-left').addEventListener('click', () => {
    console.log('Клік по кнопці!');
    console.log(swiper.params.navigation); // Тепер змінна swiper визначена
    swiper.slidePrev(); // Додаємо примусовий перехід до наступного слайда
  });
});
