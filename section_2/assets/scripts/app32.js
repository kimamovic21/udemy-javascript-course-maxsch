// 32. Shadowed Variables

let userName = 'Max';

function greetUser(name) {
  let userName = name;
  alert(userName);
};

userName = 'Manu';
console.log(userName);
greetUser('Max');
