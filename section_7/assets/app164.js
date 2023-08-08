// 164. Inserting DOM Elements

const list = document.querySelector('ul');
console.log(list);
const newLi = document.createElement('li');
console.log(newLi);

newLi.textContent = 'Item 4 JS';
list.append(newLi);
console.log(list.lastElementChild.before(newLi));
console.log(list.lastElementChild.after(newLi));
console.log(list.lastElementChild.replaceWith(newLi));

const secondLi = list.children[1];
console.log(secondLi);
secondLi.insertAdjacentElement('afterend', newLi);
