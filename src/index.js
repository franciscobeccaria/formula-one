import Router from './router.js';

console.log(Router);

const headerNav = document.getElementById('main-header-nav');
const closeMenu = document.getElementById('close-menu');
const toggleMenu = document.getElementById('toggle-menu');

toggleMenu.addEventListener('click', () => {
  headerNav.classList.add('show-modal-menu');
});

closeMenu.addEventListener('click', () => {
  headerNav.classList.remove('show-modal-menu');
});
