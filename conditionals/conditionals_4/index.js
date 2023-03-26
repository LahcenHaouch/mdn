let machineActive = false;
let validUsername = 'lahcen';
let validPassword = 'something';

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = 'You need to switch the machine On!';

section.appendChild(para1);
section.appendChild(para2);

const switchButton = document.querySelector('#switch');
switchButton.textContent = 'Switch On';

const formElements = document.querySelectorAll('.form-element');
const usernameElement = document.querySelector('#username');
const passwordElement = document.querySelector('#password');

switchButton.addEventListener('click', event => {
  if (machineActive) {
    event.currentTarget.textContent = 'Switch On';
    machineActive = false;
    formElements.forEach(element => element.setAttribute('disabled', ''));
    para1.textContent = 'You need to switch the machine On!';
  } else {
    event.currentTarget.textContent = 'Switch Off';
    machineActive = true;
    formElements.forEach(element => element.removeAttribute('disabled'));
    para1.textContent = '';
  }
})

const formElement = document.querySelector('#login-form');

formElement.addEventListener('submit', event => {
  event.preventDefault();
  const { value: usernameValue } = usernameElement;
  const { value: passwordValue } = passwordElement;

  if (usernameValue === validUsername && passwordValue === validPassword) {
    para2.textContent = 'You\'re in Broo!!!';
  } else {
    para2.textContent = 'GTFO of here!!!';
  }
})
