// 163. Adding Elements via createElement()

const list = document.querySelector('ul');
console.log(list);
document.createElement('li');
const newList = document.createElement('li');
console.log(newList);

list.appendChild(newList);
newList.textContent = 'Item 4 JS';
console.log(newList.textContent);