// 113. var vs let & const - Introducing "Block Scope"

// let myName = 'Kerim';
var myName = 'Kerim';
var myName = 'Max';
let hobbies;

// if (myName === 'Max') {
//     var hobbies = ['Sports', 'Cooking'];
//     console.log(hobbies);
// };

if (myName === 'Max') {
    let hobbies = ['Sports', 'Cooking'];
    console.log(hobbies);
};

function greet() {
    let age = 26;
    let name = 'Manuel';
    console.log(name, age);
};

console.log(myName, hobbies);
greet();
