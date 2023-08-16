// 215. Objects - Recap

const person = {
    name: 'Kerim',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    greet: function() {
        console.log(`Hi there ${this.name}.`);
    },
};
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);
person.greet();
