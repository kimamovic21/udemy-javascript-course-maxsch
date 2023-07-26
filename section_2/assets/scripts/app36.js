// 36. Converting Data Types

const defaultResult = 0;
let currentResult = defaultResult;

function addTwoNumbers() {
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, '');
};

addBtn.addEventListener('click', addTwoNumbers);

console.log(currentResult);
