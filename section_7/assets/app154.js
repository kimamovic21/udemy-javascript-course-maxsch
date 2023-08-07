// 154. Selecting Multiple Elements & Summary

const WHITE_COLOR = 'white';
const BLACK_COLOR = 'black';

const h1 = document.getElementById('main-title');
h1.textContent = 'Some new title';
h1.style.color = WHITE_COLOR;
h1.style.backgroundColor = BLACK_COLOR;

const allListItems = document.querySelectorAll('li');
console.log(allListItems);
console.log(allListItems[0]);

// const listItemsElements = document.querySelectorAll('li');
const listItemsElements = document.getElementsByTagName('li');
console.log(typeof listItemsElements);

for (const listItemEl of listItemsElements) {
    console.dir(listItemEl);
};

const liLastOfType = document.querySelector('li:last-of-type');
console.log(liLastOfType);
liLastOfType.textContent += ' Changed from JS file';