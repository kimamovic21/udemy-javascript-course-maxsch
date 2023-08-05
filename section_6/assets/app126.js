// 126. Functions vs Methods

const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log('Game is starting...');
};  
// startGame();  // direct execution

startGameBtn.addEventListener('click', startGame);


const person = {  
    // function in an object is called a method
    name: 'Kerim',
    greet: function greet() {
        console.log('Hello there');
    },
};
person.greet();
