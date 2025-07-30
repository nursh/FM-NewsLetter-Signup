const formElem = document.querySelector('form');
const inputElem = document.querySelector('input');
const errorElem = document.querySelector('.error-label');


function handleSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const data = Object.fromEntries(formData);
  window.localStorage.setItem('email', data.email);
  window.location.href = 'success.html';
}

formElem.addEventListener('submit', handleSubmit)

inputElem.addEventListener('invalid', (e) => {
  e.preventDefault();
  errorElem.style.visibility = 'visible';
})