// 137. Introducing Rest Parameters ("Rest Operator")

// not related to game

// const sumUp = (a, b, c ,d, e, f, g, h) => {
//     ...
// };
// sumUp(1, 5, 10, -3, 6, 10);
// sumUp(1, 5, 10, -3, 6, 10, 25, 88);


// const sumUp = (numbers) => {
//     let sum = 0;
//     for (const num of numbers) {
//         sum = sum + num;
//     };
//     return sum;
// };
// console.log(sumUp([1, 5, 10, -3, 6, 10]));


// const sumUp = (...numbers) => {
//     let sum = 0;
//     for (const num of numbers) {
//         sum = sum + num;
//     };
//     return sum;
// };
// console.log(sumUp(1, 5, 10, -3, 6, 10));
// console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));


const sumUp = (a, b, ...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum = sum + num;
    };
    return sum;
};

const subtractUp = function() {
    let sum = 0;
    for (const num of arguments) {  // don't use that
        sum = sum - num;
    };
    return sum;
};

console.log(sumUp(1, 5, 10, -3, 6, 10));
console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));
console.log(subtractUp(1, 10 ,15, 20));
