const menu = document.querySelector('.menu');
const buttonToggle = document.querySelector('.menu__toggle');

menu.classList.remove('menu--no-js');

buttonToggle.addEventListener('click', function() {
  menu.classList.toggle('menu--opened');
})
