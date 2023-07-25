// 27. Adding A Custom Function

function addTwoNumber(number1, number2) {
    const result = number1 + number2;
    alert('The result is: ' + result);
    console.log(result);
};
addTwoNumber(1, 2);
addTwoNumber(3, 4);
addTwoNumber(5, 6);


const defaultResult = 1;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 4/2 - 1;
let calculationDescription = `(${defaultResult} +  '+ 10) * 4/2 - 1)`;

outputResult(currentResult, calculationDescription);
console.log(currentResult);
console.log(calculationDescription);
