// 78. Beware When Comparing Objects & Arrays for Equality!

const person1 = { name: 'Kerim '};
const person2 = { name: 'Kerim'};

console.log(person1 == person2);
console.log(person1 === person2);
console.log(person1.name);
console.log(person2.name);
console.log(person1.name == person2.name);
console.log(person1.name === person2.name);


const hobbies = ['Sports', 'Cooking'];
const moreHobbies = ['Sports', 'Cooking'];

console.log(hobbies == moreHobbies);
console.log(hobbies === moreHobbies);
console.log(hobbies[0]);
console.log(moreHobbies[0]);
console.log(hobbies[0] == moreHobbies[0]);
console.log(hobbies[0] === moreHobbies[0]);
