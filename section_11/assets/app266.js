// 266. Introducing Constructor Functions

// class Person {
//     name = 'Kerim';

//     constructor() {
//         this.age = 26;
//     };

//     greet() {
//         console.log(`Hi, I am ` + this.name + ' and I am ' + this.age + ' years old.');
//     };
// };

function Person() {
    this.age = 26;
    this.name = 'Kerim';
    this.greet = function() {
        console.log(`Hi, I am ` + this.name + ' and I am ' + this.age + ' years old.');
    };
};

const person = new Person();
person.greet();