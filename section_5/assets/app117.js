// 117. Inside the JavaScript Engine - How the Code Executes
'use strict';

function getName() {
    return prompt('Your name: ', '');
};

function greet() {
    const userName = getName();
    console.log('Hello ' + userName);
};
greet();
