// 187. push(), pop(), unshift(), shift() -Adding & Removing Elements

const hobbies = ['Sports', 'Cooking'];
console.log(hobbies);
hobbies.push('Reading');
console.log(hobbies);
hobbies.unshift('Coding');
console.log(hobbies);
hobbies.pop();
console.log(hobbies);
hobbies.shift();
console.log(hobbies);

hobbies[1] = 'Coding';
console.log(hobbies);
hobbies[3] = 'Reading';
console.log(hobbies);
console.log(hobbies[2]);