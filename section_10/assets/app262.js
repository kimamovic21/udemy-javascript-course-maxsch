// 262. Understanding Object Descriptors

const person = { 
    name: 'Kerim',
    greet() {
        console.log('Hello')
    },
};
person.greet();

console.log(Object.getOwnPropertyDescriptors(person));
console.log(Object.defineProperty(person, 'name', {
    configurable: true,
    enumerable: true,
    value: person.name,
    writable: false,
}));
person.name = 'Max';
console.log(person);

for (const key in person) {
    console.log(key);
};