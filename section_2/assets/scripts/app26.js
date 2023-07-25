// 26. Introducing Functions

const defaultResult = 1;
let currentResult = defaultResult;
currentResult = (currentResult + 10) * 4/2 - 1;

let calculationDescription = `(${defaultResult} +  '+ 10) * 4/2 - 1)`;
let errorMessage = ' An \n error \n occurred!';

outputResult(currentResult, calculationDescription);

console.log(currentResult);
console.log(calculationDescription);
console.log(errorMessage);
