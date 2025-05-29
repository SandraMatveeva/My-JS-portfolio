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
