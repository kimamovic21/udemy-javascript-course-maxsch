// 166. Live Node Lists vs Static Node Lists

const list = document.querySelector('ul');
console.log(list);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const listItems2 = list.getElementsByTagName('li');
console.log(listItems2);

const newLi = document.createElement('li');
console.log(newLi);
newLi.textContent = 'Item 4 JS';

list.append(newLi);
listItems[0].textContent = 'Item 1 JS modified';
