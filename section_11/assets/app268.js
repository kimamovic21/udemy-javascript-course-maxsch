// 268. Introducing Prototypes

function Person() {
    this.age = 26;
    this.name = 'Kerim';
    this.greet = function() {
        console.log(`Hi, I am ` + this.name + ' and I am ' + this.age + ' years old.');
    };
};

Person.prototype = {
    printAge() {
        console.log(this.age);
    }
};

console.dir(Person);

const person = new Person();
person.greet();
person.printAge();

console.log(person.toString());
console.log(person.__proto__);
console.log(person.__proto__ === Person.prototype);