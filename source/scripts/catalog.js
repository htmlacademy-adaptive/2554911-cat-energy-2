const nav = document.querySelector('.navigation');
const navButton = document.querySelector('.navigation__menu-button');

nav.classList.remove('navigation--nojs');

navButton.addEventListener('click', () => {
  if (nav.classList.contains('navigation--close')) {
    nav.classList.remove('navigation--close');
    nav.classList.add('navigation--open');
  } else {
    nav.classList.add('navigation--close');
    nav.classList.remove('navigation--open');
  }
});
