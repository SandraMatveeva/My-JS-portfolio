import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const screenWidth = window.innerWidth;
const isMobileOrTablet = screenWidth < 1440;

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.faq-list-left.accordion', {
    duration: 300, // Швидкість анімації (в мс)
    showFirst: false, // Відкрити перший елемент за замовчуванням
    collapse: true, // Автоматично закривати інші елементи
    // openOnInit: [0],
    showMultiple: isMobileOrTablet,
  });
});

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.faq-list-right.accordion', {
    duration: 300, // Швидкість анімації (в мс)
    showFirst: false, // Відкрити перший елемент за замовчуванням
    collapse: true, // Автоматично закривати інші елементи
    // openOnInit: [0],
    showMultiple: isMobileOrTablet,
  });
});
