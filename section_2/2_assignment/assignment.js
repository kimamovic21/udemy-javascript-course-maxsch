const task3Element = document.getElementById('task-3');

function greet() {
    alert('Hi there :D');
};

function greetUser(userName) {
    alert('Hi ' + userName + '!');
};

function clickTaskNumber3() {
    alert('Task Number 3 clicked!');
};

greet();
greetUser('Kerim');

task3Element.addEventListener('click', clickTaskNumber3);

function combine3Strings(string1, string2, string3) {
    const combinedText = `${string1} ${string2} ${string3}`;
    return combinedText;
};

const combinedString = combine3Strings('Hi', 'there', '!');
console.log(combinedString);
