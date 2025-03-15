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

// document.addEventListener('DOMContentLoaded', () => {
//   const headerOpenMenuBtn = document.querySelector("[data-menu-open='header']");
//   const headerCloseMenuBtn = document.querySelector(
//     "[data-menu-close='header']"
//   );
//   const headerMenuOverlay = document.querySelector("[data-menu='header']");
//   const headerMenuLinks = document.querySelectorAll(
//     '.js-header-mobile-menu-link'
//   );

//   headerOpenMenuBtn.addEventListener('click', () => {
//     headerMenuOverlay.classList.add('is-open');
//   });

//   headerCloseMenuBtn.addEventListener('click', () => {
//     headerMenuOverlay.classList.remove('is-open');
//   });

//   headerMenuLinks.forEach(link => {
//     link.addEventListener('click', () => {
//       headerMenuOverlay.classList.remove('is-open');
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const headerMenuBtn = document.querySelector('.js-header-menu-btn');
//   const headerDropdownMenu = document.querySelector('.js-header-dropdown-menu');

//   function toggleHeaderMenu() {
//     headerDropdownMenu.classList.toggle('open');
//   }

//   headerMenuBtn.addEventListener('click', function (event) {
//     event.stopPropagation();
//     toggleHeaderMenu();
//   });

//   document.addEventListener('click', function (event) {
//     if (
//       !headerMenuBtn.contains(event.target) &&
//       !headerDropdownMenu.contains(event.target)
//     ) {
//       headerDropdownMenu.classList.remove('open');
//     }
//   });

//   headerDropdownMenu.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', function () {
//       headerDropdownMenu.classList.remove('open');
//     });
//   });
// });
