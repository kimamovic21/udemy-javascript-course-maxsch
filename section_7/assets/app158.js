// 158. Selecting Sibling Elements

const li = document.querySelector('li');
console.log(li);
const ul = li.parentElement;
console.log(ul);

console.log(ul.previousSibling);
console.log(ul.previousElementSibling);
console.log(ul.nextSibling);
console.log(ul.nextElementSibling);