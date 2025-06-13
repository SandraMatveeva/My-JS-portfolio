import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.faq-list-left.accordion', {
    duration: 300, // Швидкість анімації (в мс)
    showFirst: false, // Відкрити перший елемент за замовчуванням
    collapse: true, // Автоматично закривати інші елементи
    // openOnInit: [0],
  });
});

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.faq-list-right.accordion', {
    duration: 300, // Швидкість анімації (в мс)
    showFirst: false, // Відкрити перший елемент за замовчуванням
    collapse: true, // Автоматично закривати інші елементи
    // openOnInit: [0],
  });
});

// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// document.addEventListener('DOMContentLoaded', function () {
//   const screenWidth = window.innerWidth;
//   const isMobileOrTablet = screenWidth < 1440;

//   // 🔁 Очищення попередніх інстансів акордеону
//   const allAccordionItems = document.querySelectorAll('.ac');
//   allAccordionItems.forEach(el => {
//     el.classList.remove('js-enabled'); // Видаляємо клас, який вказує, що Accordion вже ініціалізовано
//   });

//   // 🧠 Параметри залежно від ширини екрана
//   const accordionOptions = {
//     duration: 300,
//     showFirst: false,
//     collapse: !isMobileOrTablet, // true = тільки один відкритий (десктоп), false = можна декілька (моб/таб)
//   };

//   // 📦 Ініціалізація з актуальними параметрами
//   new Accordion('.faq-list-left.accordion', accordionOptions);
//   new Accordion('.faq-list-right.accordion', accordionOptions);
// });
