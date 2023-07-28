// 95. Logical Operator "Tricks" & Shorthands

// const userInput = '';
// console.log(userInput);

// let isValidInput = userInput;
// console.log(isValidInput);

// isValidInput = !userInput;
// console.log(isValidInput);

// isValidInput = !!userInput;
// console.log(isValidInput);


const userInput = '';
console.log(userInput);

const userName = userInput || 'Kerim';
console.log(userName);

const realUserInput = 'Max';
const realUserName = realUserInput || 'Kerim';
console.log(realUserName);


const isLoggedIn = true;
console.log(isLoggedIn);

const shoppingCart = isLoggedIn && ['Books'];
console.log(shoppingCart);
