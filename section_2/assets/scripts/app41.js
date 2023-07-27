// 41. More Operators!

const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUserNumberInput() { 
    return parseInt(userInput.value);
};

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);  // from vendor.js file
};

function addTwoNumbers() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    // currentResult = currentResult + enteredNumber;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
};

function subtractTwoNumbers() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    // currentResult = currentResult - enteredNumber;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
};

function multiplyTwoNumbers() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    // currentResult = currentResult * enteredNumber;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
};

function divideTwoNumbers() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    // currentResult = currentResult / enteredNumber;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
};

addBtn.addEventListener('click', addTwoNumbers);
subtractBtn.addEventListener('click', subtractTwoNumbers);
multiplyBtn.addEventListener('click', multiplyTwoNumbers);
divideBtn.addEventListener('click', divideTwoNumbers);

console.log(currentResult);
