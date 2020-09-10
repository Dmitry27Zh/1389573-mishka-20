let catalogAddLinks = document.querySelectorAll('.catalog__item-add');
let modal = document.querySelector('.modal');
let modalOverlay = document.querySelector('.modal__overlay');

for (let catalogAddLink of catalogAddLinks) {
  catalogAddLink.onclick = function(evt) {
    evt.preventDefault();
    modal.classList.add('modal--opened');
  }
}

modalOverlay.onclick = function() {
  modal.classList.remove('modal--opened');
}
