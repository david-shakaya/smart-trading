// toggleClass('open');

const burger = document.querySelector('.burger-js');

burger.addEventListener('click', fn);

function fn(e) {
  burger.classList.toggle('open');
}
