// Assignment 5

const WHITE_COLOR = 'white';
const BLACK_COLOR = 'black';

// 1. 
const task1Element1 = document.getElementById('task-1');
const task1Element2 = document.querySelector('li');
console.log(task1Element1);
console.log(task1Element2);
task1Element1.style.color = WHITE_COLOR;
task1Element2.style.backgroundColor = BLACK_COLOR;


// 2.
const documentTitle = document.querySelector('title');
console.log(documentTitle);
documentTitle.textContent = 'Assignment - Solved';


// 3.
const h1 = document.getElementsByTagName('h1');
console.log(h1);
h1[0].textContent = 'Assignment - Solved';
