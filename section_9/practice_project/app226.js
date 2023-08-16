// 226. Understanding Object.assing()

const person = {
    name: 'Kerim',
    age: 26,
    hobbies: ['Sports', 'Coding'],
};

const person2 = Object.assign({}, person);
person2.isUdemyInstructor = true;
console.log(person);
console.log(person2);