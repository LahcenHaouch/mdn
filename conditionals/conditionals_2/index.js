let response;
let score = 75;
let machineActive = false;

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${score}`;

section.appendChild(para1);
section.appendChild(para2);

const switchButton = document.querySelector('#switch');
switchButton.textContent = 'Switch On';

switchButton.addEventListener('click', event => {
  if (machineActive) {
    event.currentTarget.textContent = 'Switch On';
    machineActive = false;
  } else {
    event.currentTarget.textContent = 'Switch Off';
    machineActive = true;
  }
  run();
})

const scoreButton = document.querySelector('#score');
scoreButton.addEventListener('click', () => {
  const newScore = Number.parseInt(prompt('Enter new score'), 10);
  if (!Number.isNaN(newScore)) {
    score = newScore;
    para1.textContent = `Your score is ${score}`;
    run();
  }
})

function run() {
  // Add your code here
  if (machineActive) {
    if (score < 0 || score > 100) {
      response = 'This is not possible, an error has occured.';
    } else if (score >= 0 && score <= 19) {
      response = 'That was a terrible score -- total fail!';
    } else if (score >= 20 && score <= 39) {
      response = 'You know some things, but it\'s a pretty bad score. Needs improvement.'
    } else if (score >= 40 && score <= 69) {
      response = 'You did a passable job, not bad!';
    } else if (score >= 70 && score <= 89) {
      response = 'That\'s a great score, you really know your stuff.';
    } else {
      response = 'What an amazing score! Did you cheat? Are you for real?';
    }
  } else {
    response = 'You need to switch the machine On!';
  }
  para2.textContent = response;
}

run();