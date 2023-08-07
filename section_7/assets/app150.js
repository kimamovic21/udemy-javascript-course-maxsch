// 150. Selecting Elements in the DOM

console.log(document);

const mainTitle= document.getElementById('main-title');
console.log(mainTitle);
console.log(document.getElementById('main-title'));

const listItems = document.getElementsByClassName('list-item');
console.log(listItems); 

const header = document.querySelector('header');
console.log(header);

const listItemQuerySelector = document.querySelector('.list-item');
console.log(listItemQuerySelector);

const listItemsQuerySelectorAll = document.querySelectorAll('.list-item');
console.log(listItemsQuerySelectorAll);
