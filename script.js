const formElem = document.querySelector('form');
const inputElem = document.querySelector('input');
const errorElem = document.querySelector('.error-label');

formElem.addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = 'success.html';
})

inputElem.addEventListener('invalid', (e) => {
  e.preventDefault();
  errorElem.style.visibility = 'visible';
})