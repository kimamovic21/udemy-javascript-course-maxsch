// 1.
const sayHello = (name) => {
  console.log('1: Hi ' + name + '!');
};


// 2.
const sayHello2 = (phrase, name) => {
  console.log('2: ' + phrase + ' ' +name + '!');
};

const sayHello3 = () => {
  console.log('3: Hi Hard-coded !');
};

const sayHello4 = (name) => {
  return '4: Hi again ' + name + '!';
};

sayHello('Kerim');
sayHello2('Hello', 'Kerim');
sayHello3();
console.log(sayHello4('Kerim'));


// 3. 
const sayHello5 = (name, phrase = 'Hi') => {
  console.log('5: ' + phrase + ' ' + name);
};
sayHello5('Kerim');
sayHello5('Kerim', 'Hello');


// 4. 
function checkInput(callbackFunction, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      console.log('There is one empty');
      break;
    };
  };
  if (!hasEmptyText) {
    callbackFunction();    
  };
};

checkInput(() => {
    console.log('All not empty');
  }, 'Hi.', 'My', 'name', 'is','Kerim'
);
