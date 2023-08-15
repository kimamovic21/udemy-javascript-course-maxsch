// 203. Understanding Array Destructuring

// const nameData = ['Kerim', 'Imamovic'];
// console.log(nameData);

// const firstName = nameData[0];
// const secondName = nameData[1];
// console.log(firstName);
// console.log(secondName);


const nameData = ['Kerim', 'Imamovic', 'Mr', 26];
console.log(nameData);

const [firstName, lastName, ...otherInformations] = nameData;
console.log(firstName);
console.log(lastName);
console.log(otherInformations);