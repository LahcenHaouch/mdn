const NAMES = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']

const bodyElement = document.querySelector('body');
const para = document.createElement('p');
bodyElement.appendChild(para);

function chooseName(names) {
  return names[Math.floor(Math.random() * names.length)];
}


const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', () => {
  const randomName = chooseName(NAMES);
  para.textContent = randomName;
});
