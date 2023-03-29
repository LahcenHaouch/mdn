const NAMES = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']

const bodyElement = document.querySelector('body');
const para = document.createElement('p');
bodyElement.appendChild(para);

function random(minBound, maxBound) {
  return Math.floor(Math.random() * (maxBound - minBound) + minBound);
}

function chooseName(names) {
  return names[random(0, names.length)];
}

const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', () => {
  const randomName = chooseName(NAMES);
  para.textContent = randomName;
});
