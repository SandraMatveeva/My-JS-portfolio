document.addEventListener('DOMContentLoaded', () => {
  const coversSection = document.querySelector('.covers');
  const animatedItems = document.querySelectorAll('.covers-item');

  if (!coversSection) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animatedItems.forEach(item => {
            item.style.animationPlayState = 'running';
          });
        } else {
          animatedItems.forEach(item => {
            item.style.animationPlayState = 'paused';
          });
        }
      });
    },
    { threshold: 0.8 }
  );

  observer.observe(coversSection);
});
