// 206. Working with Maps

const person1 = { name: 'Kerim' };
const person2 = { name: 'Max' };

const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);
personData.set(person2, [ {date: 'two weeks ago', price: 100 }]);
console.log(personData);
console.log(personData.get(person1));

for (const [key, value] of personData.entries()) {
    console.log(key);
    console.log(value);
};

for (const key of personData.keys()) {
    console.log(key);
};

for (const value of personData.values()) {
    console.log(value);
};

console.log(personData.size);