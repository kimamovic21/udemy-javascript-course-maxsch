const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
console.log(randomNumber);

// 1.
if (randomNumber > 0.7) {
    alert('The number is greater than 0.7');
};


// 2. 
const numbers = [5, 10, 15, 20, 25];

// Method 1: Using a for loop
console.log("Using a for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
};

// Method 2
let counter = 0;
console.log("Using a while loop");
while (counter < numbers.length) {
    console.log(numbers[counter]);
    counter++;
};

// Method 3: Using a forEach loop
console.log("Using a forEach loop:");
numbers.forEach((number) => {
  console.log(number);
});


// 3. 
console.log("Loop starting from the end to the first element:");
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
};


// 4. 
const randomNumber1 = Math.random();
console.log(randomNumber1);
const randomNumber2 = Math.random();
console.log(randomNumber2);

if (randomNumber1 > 0.7 && randomNumber2 > 0.7) {
  alert("Both numbers are greater than 0.7!");
} 
else if (randomNumber1 <= 0.2 || randomNumber2 <= 0.2) {
  alert("At least one of the two numbers is not greater than 0.2!");
};