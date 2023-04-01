function Cat(name, breed, color) {
  return {
    name,
    breed,
    color,
    greeting() {
      console.log(`Hello, said ${this.name} the ${this.breed}`);
    }
  }
}

const cat = new Cat('Bertie', 'Cymric', 'white');

const para1 = document.createElement('p');
const para2 = document.createElement('p');

para1.textContent = `The cat's name is ${cat.name}.`;
para2.textContent = `The cat's color is ${cat.color}.`;

cat.color = 'black';
cat.greeting();

const section = document.querySelector('section');

section.appendChild(para1);
section.appendChild(para2);
