// 33. More about the "return" statement

const defaultResult = 1;
let currentResult = defaultResult;

function addTwoNumbers(number1, number2) {
    const result = number1 + number2;
    return result;
    alert('Hi there');
};

currentResult = addTwoNumbers(1,2);

let calculationDescription = `(${defaultResult} +  '+ 10) * 4/2 - 1)`;
let calculationDescription2 = `Function Result`;

outputResult(currentResult, calculationDescription2);
console.log(currentResult);
console.log(calculationDescription2);
