// 153. Attributes vs Properties

const input = document.querySelector('input');
console.log(input);
console.dir(input);

input.value = 'Some other input';

const h1 = document.getElementById('main-title');
console.log(h1);
h1.id = 'new-id'
console.log(h1.id);

input.setAttribute('value', 'some other default text');
input.value = input.getAttribute('value');