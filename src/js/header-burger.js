// toggleClass('open');

const burger = document.querySelector('.burger-js');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay-js')

burger.addEventListener('click', fn);

function fn(e) {
  body.classList.toggle('invisible')
  overlay.classList.toggle('overlay')
  burger.classList.toggle('open');

}
