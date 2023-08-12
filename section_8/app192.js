// 192. Finding Stuff: find() and findIndex()

const personsData = [
    {
        name: 'Kerim',
        age: 26,
    },
    {
        name: 'Max',
        age: 32,
    },
    {
        name: 'Kerim',
        age: 30,
    },
];
console.log(personsData);
console.table(personsData);
console.log(personsData.indexOf({ name: 'Max' }));

const kerim = personsData.find((person, index, persons) => {
    return person.name === 'Kerim';
});
// kerim.name = 'John';
console.log(kerim);
console.log(personsData);

const kerimIndex = personsData.findIndex((person, index, persons) => {
    return person.name === 'Kerim';
});
console.log(kerimIndex);
