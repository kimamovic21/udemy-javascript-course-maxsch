// 225. The Object Spread Operator (...)

const person = {
    name: 'Kerim',
    age: 26,
    hobbies: ['Sports', 'Coding'],
};

// const person2 = person;
// person2.name = 'Max';
// person2.age = 32;
// console.log(person);
// console.log(person2);

const person2 = {
    ...person, 
    isUdemyInstructor: true
};
person2.name = 'Max';
person2.hobbies.push('Teaching');
person2.age = 32;

console.log(person);
console.log(person2);