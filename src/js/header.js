document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.btn-menu-header');
  const menuList = document.querySelector('.nav-menu-list');

  menuButton.addEventListener('click', () => {
    menuList.classList.toggle('active');
    console.log(menuList.classList);
  });

  document.querySelectorAll('.nav-menu-link').forEach(link => {
    link.addEventListener('click', () => {
      menuList.classList.remove('active');
    });
  });
});

// Modal_Mobile
const openBtn = document.querySelector('[data-modal-mob-open]');
const closeBtn = document.querySelector('[data-modal-mob-close]');
const btnMobileMenu = document.querySelector('.header-mobile-menu-overlay');
const btnCloseMenu = document.querySelector('.header-close-menu-btn');

// Відкриття модального вікна
const openModal = () => {
  btnMobileMenu.classList.add('is-open');
  console.log('ggggg');
  document.body.style.overflow = 'hidden';
  // document.addEventListener('keydown', handleEscapeKey);
};
openBtn.addEventListener('click', openModal);

// Закриття модального вікна
const closeModal = () => {
  btnMobileMenu.classList.remove('is-open');
  console.log('hhhhh');
  document.body.style.overflow = 'hidden';
  // document.addEventListener('keydown', handleEscapeKey);
};
btnCloseMenu.addEventListener('click', closeModal);

// 👉 Щоб в модальці при натисканні кнопки "Order" 'Benefits' and others, спрцьовував перехід в footer Плавний перехід до футера з мобільного меню

// 🟢 Чекаємо, поки завантажиться HTML (DOM), щоб елементи вже були доступні
document.addEventListener('DOMContentLoaded', () => {
  // 🔹 Знаходимо головний контейнер мобільного меню (оверлей)
  const modaMob = document.querySelector('.header-mobile-menu-overlay');

  // 🔹 Всередині цього контейнера шукаємо список <ul> з посиланнями
  const menuList = modaMob.querySelector('.header-mobile-menu-list');

  // 🔹 Зберігаємо посилання на <body>, щоб потім керувати прокруткою сторінки
  const documentBody = document.body;

  // ⚠️ Якщо не знайдено меню або список — виводимо попередження і зупиняємо код
  if (!modaMob || !menuList) {
    console.warn('Menu not found!'); // повідомлення у консоль для розробника
    return; // припиняємо виконання коду, щоб не було помилок
  }

  // 🟢 Функція плавного переходу до певної секції сторінки
  // Отримує на вхід ID секції (наприклад "#about")
  function smoothScrollTo(sectionId) {
    // 🔹 Знаходимо секцію на сторінці за її ID
    const target = document.querySelector(sectionId);

    // ⚠️ Якщо секції з таким ID не існує — повідомляємо в консоль і виходимо
    if (!target) {
      console.warn('Target not found:', sectionId);
      return;
    }

    // 🔹 Закриваємо мобільне меню — прибираємо клас "is-open"
    modaMob.classList.remove('is-open');

    // 🔹 Повертаємо прокрутку сторінки (якщо раніше була заблокована)
    documentBody.style.overflow = '';

    // 🔹 Затримуємо виконання на 300мс, щоб меню встигло закритися з анімацією
    setTimeout(() => {
      // 🔹 Плавно прокручуємо сторінку до потрібної секції
      target.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }

  // 🟣 1. Знаходимо всі посилання в меню, які мають href починається з "#"
  // (тобто це внутрішні посилання, які ведуть на секції сторінки)
  const menuLinks = menuList.querySelectorAll('a[href^="#"]');

  // 🟢 Перебираємо всі знайдені посилання
  menuLinks.forEach(link => {
    // 🔹 Додаємо слухач події "click" для кожного посилання
    link.addEventListener('click', e => {
      // 🔹 Вимикаємо стандартну поведінку (щоб сторінка не "стрибає" різко)
      e.preventDefault();

      // 🔹 Зчитуємо значення href (наприклад "#about" або "#projects")
      const targetId = link.getAttribute('href');

      // 🔹 Викликаємо нашу функцію плавного переходу до потрібної секції
      smoothScrollTo(targetId);
    });
  });

  // 🟣 2. Знаходимо кнопку футера "Order the project", яка розташована поза списком <ul>
  const footerBtnMob = modaMob.querySelector('.header-order-btn-modal');

  // 🟢 Якщо така кнопка існує — додаємо для неї слухач кліку
  if (footerBtnMob) {
    footerBtnMob.addEventListener('click', e => {
      // 🔹 Вимикаємо стандартну дію посилання
      e.preventDefault();

      // 🔹 Викликаємо ту ж функцію плавного переходу, але для секції #footer
      smoothScrollTo('#footer');
    });
  }
});
