// 127. Functions are Objects!

const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log('Game is starting...');
};  
startGameBtn.addEventListener('click', startGame);


const person = {  
    name: 'Kerim',
    greet: function greet() {
        console.log('Hello there');
    },
};
person.greet();

console.log(startGame);
console.log(typeof startGame);
console.dir(startGame);