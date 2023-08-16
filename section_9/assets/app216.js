// 216. Adding, Modifying & Deleting Properties

let person = {
    name: 'Kerim',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    greet: function() {
        console.log(`Hi there ${this.name}.`);
    },
};

console.log(person.isAdmin);
person.isAdmin = true;
console.log(person);
delete person.age;
console.log(person.age);
console.log(person);
