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

const footerForm = document.getElementById('footerForm'); //знаходимо форму в HTML
const modalBackdrop = document.querySelector('.backdrop'); //знаходимо модалку (вікно “Thank you…”)

if (footerForm) {
  //перевіряємо, що форма справді існує
  footerForm.addEventListener('submit', e => {
    //слухаємо подію “submit” (натискання кнопки “Send”)
    e.preventDefault(); // щоб браузер перезавантажив сторінку

    const emailValue = footerForm
      .querySelector("input[name='email']")
      .value.trim();
    const commentsValue = footerForm
      .querySelector("input[name='comments']")
      .value.trim(); //зчитуємо значення з полів

    const data = { email: emailValue, comments: commentsValue }; //створюємо зручний об’єкт із даними
    console.log('📩 Введені дані:', data);

    // Відправка на сервер
    fetch('http://localhost:3001/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          console.log('✅ Дані успішно відправлені на сервер!');
          if (modalBackdrop) {
            modalBackdrop.classList.add('is-open');
            document.body.style.overflow = 'hidden';
          }
          footerForm.reset();
        } else {
          console.error('❌ Сервер не прийняв дані');
        }
      })
      .catch(err => console.error('🚨 Помилка при запиті:', err));

    // Відкриваємо модалку тільки після зчитування даних
    if (modalBackdrop) {
      //відкриваємо модалку “Thank you”
      modalBackdrop.classList.add('is-open'); //додає клас, який у CSS робить модалку видимою
      document.body.style.overflow = 'hidden'; //забороняє скрол сторінки, поки модалка відкрита
    }

    // Очищаємо форму (за бажанням)
    footerForm.reset(); //робить усі інпути порожніми — форма готова для наступного користувача.
  });
}

// Закриття модалки
const modalCloseBtn = document.querySelector('[data-modal-close]');
if (modalCloseBtn && modalBackdrop) {
  modalCloseBtn.addEventListener('click', () => {
    //натискаємо хрестик на модальці
    modalBackdrop.classList.remove('is-open'); //видаляється клас
    document.body.style.overflow = ''; //повертає можливість скролити сторінку
  });
}


