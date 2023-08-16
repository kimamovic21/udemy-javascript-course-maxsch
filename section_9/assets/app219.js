// 219. Dynamic Property Access & Setting Properties Dynamically

const userChosenKeyName = 'city';

let person = {
    'first-name': 'Kerim',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    [userChosenKeyName]: 'Sarajevo',
    greet: function() {
        console.log(`Hi there ${this.name}.`);
    },
    1.5: 'hello',
};

const keyName = 'first-name';

console.log(person.isAdmin);
person.isAdmin = true;
console.log(person);
console.log(person['first-name']);
console.log(person[keyName]);
console.log(person['age']);
console.log(person[1.5]);
