// 129. Function Expressions vs Function Declaration

const startGameBtn = document.getElementById('start-game-btn');

startGame();

function startGame () {
    console.log('Game is starting...');
};  


start();

const start = function() {
    console.log('Game is starting...');
};  
start();