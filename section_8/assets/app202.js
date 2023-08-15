// 202. The Spread Operator (...)

const prices = [10.99, 5.99, 3.99, 6.59];

const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
console.log(sum);

const data = 'new york;10.99;2000';
console.log(data);
const transformedData = data.split(';');
transformedData[1] = +transformedData[1];
console.log(transformedData);

const nameFragments = ['Kerim', 'Imamovic'];
console.log(nameFragments);
const fullName = nameFragments.join(' ');
console.log(fullName);

const copiedNameFragments = [...nameFragments];
console.log(copiedNameFragments);
nameFragments.push('Mr');
console.log(nameFragments)
console.log(copiedNameFragments);

const minNumber = Math.min(1, 2, 3, 4);
console.log(minNumber);

const minPricesNumber = Math.min(...prices);
console.log(minPricesNumber);

// const persons = [{name:'Kerim', age:26}, {name:'Max', age:32}];
// const copiedPersons = [...persons];
// console.log(persons);
// console.log(copiedPersons);
// persons.push({name:'John', age:30});
// console.log(persons);
// console.log(copiedPersons);

const persons = [{name:'Kerim', age:26}, {name:'Max', age:32}];
const copiedPersons = [...persons.map(person => ({
    name: person.name,
    age: person.age,
}))];
console.log(persons);
console.log(copiedPersons);

persons.push({name:'John', age:30});
console.log(persons);
console.log(copiedPersons);

persons[0].age = 35;
console.log(persons);
console.log(copiedPersons);
