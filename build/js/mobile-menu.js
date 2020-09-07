const menu = document.querySelector('.menu');
const buttonToggle = document.querySelector('.menu__toggle');

menu.classList.remove('menu--opened');

buttonToggle.addEventListener('click', function() {
  menu.classList.toggle('menu--opened');
})
