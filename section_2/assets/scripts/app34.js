//  34. Executing Functions "Indirectly"

const defaultResult = 1;
let currentResult = defaultResult;

function addTwoNumbers() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
};
addTwoNumbers();

addBtn.addEventListener('click', addTwoNumbers);

console.log(currentResult);
