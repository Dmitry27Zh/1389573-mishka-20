let popularLink = document.querySelector('.popular__link');
let modal = document.querySelector('.modal');
let modalOverlay = document.querySelector('.modal__overlay');

popularLink.onclick = function(evt) {
  evt.preventDefault();
  modal.classList.add('modal--opened');
}

modalOverlay.onclick = function() {
  modal.classList.remove('modal--opened');
}
