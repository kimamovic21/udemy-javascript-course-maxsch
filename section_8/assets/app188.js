// 188. The splice() Method

const hobbies = ['Sports', 'Cooking', 'Coding', 'Reading'];
console.log(hobbies);

hobbies.splice(0, 0, 'Video Games');
console.log(hobbies);
hobbies.splice(1, 0, 'Good Food');
console.log(hobbies);
hobbies.splice(0, 1);
console.log(hobbies);
hobbies.splice(-1, 1);
console.log(hobbies);