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
