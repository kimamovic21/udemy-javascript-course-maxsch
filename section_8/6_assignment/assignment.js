// Assignment 6

// 1
const numbers = [2, 7, 4, 9, 3, 6];

// Filter for numbers greater than 5
const filteredNumbers = numbers.filter(number => number > 5);
console.log(filteredNumbers); // Output: [7, 9, 6]

// Map each number to an object with a "num" property
const mappedObjects = numbers.map(number => ({ num: number }));
console.log(mappedObjects); // Output: [ { num: 2 }, { num: 7 }, { num: 4 }, { num: 9 }, { num: 3 }, { num: 6 } ]

// Reduce the array to the multiplication of all numbers
const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product); // Output: 9072


// 2
function findMax(...args) {
    if (args.length === 0) {
        return undefined; // Handle the case when no arguments are provided
    };

    let max = args[0];

    for (let i = 1; i < args.length; i++) {
        if (args[i] > max) {
            max = args[i];
        };
    };

    return max;
};

const originalNumbers = [2, 7, 4, 9, 3, 6];
const filteredNumbersArray = originalNumbers.filter(number => number > 5);
const maxFilteredNumber = findMax(...filteredNumbersArray);

console.log(maxFilteredNumber); // Output: 9



// 3
function findMinMax(...args) {
    if (args.length === 0) {
        return [undefined, undefined]; // Handle the case when no arguments are provided
    };

    let min = args[0];
    let max = args[0];

    for (let i = 1; i < args.length; i++) {
        if (args[i] < min) {
            min = args[i];
        };
        if (args[i] > max) {
            max = args[i];
        };
    };

    return [min, max];
};

const initialNumbers = [2, 7, 4, 9, 3, 6];
const filteredNumberList = initialNumbers.filter(number => number > 5);
const [minValue, maxValue] = findMinMax(...filteredNumberList);

console.log("Minimum Value:", minValue); // Output: Minimum Value: 6
console.log("Maximum Value:", maxValue); // Output: Maximum Value: 9


// 4
function createUniqueList() {
    const items = new Set();

    return {
        add(value) {
            if (!items.has(value)) {
                items.add(value);
                console.log(`Added ${value} to the list.`);
            } 
            else {
                console.log(`${value} is already in the list.`);
            };
        },

        getList() {
            return Array.from(items);
        }
    };
};

const uniqueList = createUniqueList();

uniqueList.add(5);    // Added 5 to the list.
uniqueList.add(10);   // Added 10 to the list.
uniqueList.add(5);    // 5 is already in the list.

console.log(uniqueList.getList()); // Output: [5, 10]