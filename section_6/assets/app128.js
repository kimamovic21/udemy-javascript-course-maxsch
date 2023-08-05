// 128. Functions Expressions: Storing Functions in Variables

const startGameBtn = document.getElementById('start-game-btn');

const start = function() {
    console.log('Game is starting...');
};  
startGameBtn.addEventListener('click', start);


const person = {  
    name: 'Kerim',
    greet: function greet() {
        console.log('Hello there');
    },
};
person.greet();
