// 157. Using parentNode & parentElement

const liFirst = document.querySelector('li');
console.log(liFirst.parentElement);
console.log(liFirst.parentNode);

console.log(liFirst.closest('body'));
console.log(liFirst.closest('header'));