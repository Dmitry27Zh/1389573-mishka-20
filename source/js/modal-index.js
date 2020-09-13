let popularLinks = document.querySelectorAll('.popular__link');
let modal = document.querySelector('.modal');
let modalOverlay = document.querySelector('.modal__overlay');

for (let popularLink of popularLinks) {
  popularLink.onclick = function(evt) {
    evt.preventDefault();
    modal.classList.add('modal--opened');
  }
}

modalOverlay.onclick = function() {
  modal.classList.remove('modal--opened');
}
