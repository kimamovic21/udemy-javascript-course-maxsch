// 267. Constructor Functions vs Classes & Understanding "new"

function Person() {
    this.age = 26;
    this.name = 'Kerim';
    this.greet = function() {
        console.log(`Hi, I am ` + this.name + ' and I am ' + this.age + ' years old.');
    };
};

const person = new Person();
person.greet();