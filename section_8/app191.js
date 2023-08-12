// 191. Retrieving Indexes with indexOf() & lastIndexOf()

const testResults = [1, 5.3, 1.5, 10.99, 1.5, 1.5, -5, 10];
console.log(testResults);
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(testResults);
console.log(storedResults);
console.log(testResults.indexOf(1.5));
console.log(testResults.lastIndexOf(1.5));

const personData = [
    {
        name: 'Kerim'
    },
    {
        name: 'Max'
    }
];
console.log(personData.indexOf({ name: 'Max' }));