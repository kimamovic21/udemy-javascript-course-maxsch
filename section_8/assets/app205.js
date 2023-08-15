// 205. Working with Sets

const ids = new Set(['Hi', 'from', 'set!']);

console.log(ids);
console.log(ids.has(1));

ids.add(2);
console.log(ids);
console.log(ids.has(2));

for (const entry of ids.entries()) {
    console.log(entry[0]);
    console.log(entry[1])
    console.log(entry);
};

ids.delete('Hi')
console.log(ids);