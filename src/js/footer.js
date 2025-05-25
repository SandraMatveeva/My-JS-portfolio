const openBtn = document.querySelector('[data-modal-open]');
const closeBtn = document.querySelector('[data-modal-close]');
const backdropEl = document.querySelector('.backdrop');
const form = document.getElementById('footerForm');

// Відкриття модального вікна
const openModal = () => {
  backdropEl.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', handleEscapeKey);
};

// Закриття модального вікна
const closeModal = () => {
  backdropEl.classList.remove('is-open');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', handleEscapeKey);
};

// Escape
const handleEscapeKey = e => {
  if (e.key === 'Escape') {
    closeModal();
  }
};

// Закриття по кнопці
closeBtn.addEventListener('click', closeModal);

// Закриття по фону
backdropEl.addEventListener('click', e => {
  if (e.target === backdropEl) {
    closeModal();
  }
});

// 📩 Відкриття модалки після submit
form.addEventListener('submit', e => {
  e.preventDefault(); // не перезавантажуємо сторінку
  openModal();
  form.reset(); // очистити форму (за бажанням)
});
