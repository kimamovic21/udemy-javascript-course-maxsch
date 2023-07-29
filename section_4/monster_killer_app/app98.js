// 98. Introducing Loops

// for loop
// Execute code a certain amount of times (with counter variable)
for (let i = 0; i < 3; i++) {
    console.log(i);
};

// for-of loop
// Execute for every element in an array
let myArray = [3, 4, 5];
for (const el of myArray) {
    console.log(el);
};

// for-in loop
// Execute for every key in an object
let myObject = {
    name: 'Kerim',
    city: 'Sarajevo',
    age: 26,
};
for (const key in myObject) {
    console.log(key);
    console.log(myObject[key]);
};

// while loop
// Execute code as long as a condition is true
// while (isLoggedIn) {
//    ...
// };
let myNumber = 0;
while (myNumber < 10) {
    myNumber++
    console.log(`The number is ${myNumber}`);
};
 