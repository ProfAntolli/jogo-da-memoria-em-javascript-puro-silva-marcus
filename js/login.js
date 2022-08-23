const input = document.querySelector('.login__input')
const button = document.querySelector('.login__button')
const form = document.querySelector('.login-form')
const validateinput = ({ target }) => {
if (target.value.length > 2) {
  button.removeAttribute ('disabled');
} else {
  button.setAttribute('disabled', '');
}
} 
const hendleSubmit = (event) => {
  event.preventDefault();
  
  localStorage.setItem('player',input.value);
  window.location = 'pages/game.html';
}
input.addEventListener('input', validateinput);
form.addEventListener('submit', hendleSubmit);