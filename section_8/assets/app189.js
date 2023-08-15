// 189. Selecting Ranges & Creating Copies with slice()

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
console.log(testResults);
// testResults.slice();

// const storedResults = testResults.slice(0, 2);
const storedResults = testResults.slice(-3, -1);

testResults.push(5.91);

console.log(testResults);
console.log(storedResults);