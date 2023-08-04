// 114. Understanding "Hoisting"

let myName = 'Kerim';
let hobbies;

if (myName === 'Kerim') {
    let hobbies = ['Sports', 'Cooking'];
    console.log(hobbies);
};

function greet() {
    let age = 26;
    let name = 'Manuel';
    console.log(name, age, hobbies);
};

console.log(myName, hobbies);
greet();


// console.log(userName);
// var userName = 'Kerim';
// let userName = 'Kerim';
