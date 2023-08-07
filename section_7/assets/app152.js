// 152. Exploring and Changing DOM Properties

const COLOR_WHITE = 'white';
const COLOR_BLACK = 'black';

const h1 = document.querySelector('h1');
console.log(h1);

h1.textContent = 'Some new text';
console.log(h1);

h1.className = 'title';
console.log(h1.className);

console.log(h1.style);

h1.style.color = COLOR_WHITE;
h1.style.background = COLOR_BLACK;
console.log(h1.style.color);
console.log(h1.style.background);
console.dir(h1);