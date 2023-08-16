// 218. Property Types & Property Order

let person = {
    'first-name': 'Kerim',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    greet: function() {
        console.log(`Hi there ${this.name}.`);
    },
    1.5: 'hello',
};

console.log(person.isAdmin);
person.isAdmin = true;
console.log(person);
console.log(person['first-name']);
console.log(person['age']);
console.log(person[1.5]);
