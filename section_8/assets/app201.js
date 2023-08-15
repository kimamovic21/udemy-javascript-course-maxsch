// 201. Arrays & Strings - split() and join()

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