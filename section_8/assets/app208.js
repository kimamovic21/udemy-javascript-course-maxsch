// 208. Understanding WeakSet

let person = { name: 'Kerim' };
console.log(person);
const persons = new WeakSet();
console.log(persons);

persons.add(person);
console.log(persons);
 
// ... some operations
person = null;
console.log(persons);