// 217. Special Key Names & Square Bracket Property Access

let person = {
    'first-name': 'Kerim',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    greet: function() {
        console.log(`Hi there ${this.name}.`);
    },
};

console.log(person.isAdmin);
person.isAdmin = true;
console.log(person);
console.log(person['first-name']);
console.log(person['age']);
