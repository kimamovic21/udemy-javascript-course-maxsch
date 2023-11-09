// 271. The Prototype Chain and the Global "Object"

// class AgedPerson {
//     pringAge() {
//         console.log(this.age);
//     }
// };

// class Person extends AgedPerson {
//     name = 'Kerim';

//     constructor() {
//         super();
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

// Person.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// };

Person.describe = function() {
    console.log('Creating persons...');
};

Person.prototype.printAge = function() {
    console.log(this.age);
};

console.dir(Person);

const person = new Person();
person.greet();
person.printAge();

console.log(person);
console.log(person.__proto__);
console.log(person.length);
console.log(person.toString());

const person2 = new person.__proto__.constructor();
console.log(person2);
console.dir(Object);
console.dir(Object.prototype.__proto__);
