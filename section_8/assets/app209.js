// 209. Understanding WeakMap

let person = { name: 'Kerim' };
const persons = new WeakSet();
persons.add(person);
console.log(persons);
 
// ... some operations
// person = null;

const personData = new WeakMap();
personData.set(person, 'Extra info!');
person = null;
console.log(personData);