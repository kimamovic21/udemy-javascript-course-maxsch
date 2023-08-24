// 260. The "instanceoff" Operator

class Person {
    name = 'Kerim'
};

const kerim = new Person();

console.log(kerim);
console.log(typeof kerim);
console.log(kerim instanceof Person);