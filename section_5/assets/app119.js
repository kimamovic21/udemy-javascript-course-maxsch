// 119. Primitive vs Reference Values

// Two Categories of Types/Values in JavaScript
// Primitive Values - Strings, Numbers, Booleans, null, undefined, Symbol
// Reference Values - All other objects("more expensive to create")

let hobbies = ['Sports'];
console.log(hobbies)
let newHobbies = hobbies;
console.log(newHobbies);

hobbies.push('Cooking');
console.log(hobbies);
console.log(newHobbies);


let person = { age: 26,};
console.log(person)
let anotherPerson = person;
console.log(anotherPerson);

anotherPerson.age = 30;
console.log(person);
console.log(anotherPerson);

let yetAnotherPerson = { ...person };
console.log(yetAnotherPerson);
person.age = 32;
console.log(person);
console.log(yetAnotherPerson);


let hobbies2 = ['Sports'];
console.log(hobbies2);
let moreHobbies = [ ...hobbies2];
console.log(moreHobbies);
hobbies2.push('Cooking');
console.log(hobbies2);
console.log(moreHobbies);


const person1 = { age: 30 };
const person2 = { age: 30};
console.log(person1 === person2);
console.log(person1.age === person2.age);


const hobbies3 = ['Sports']
hobbies3.push('Cooking');
console.log(hobbies3);


const hobbies4 = ['Sports'];
hobbies4 = ['Sports', 'Cooking'];
console.log(hobbies4);
