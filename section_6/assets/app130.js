// 130. Anonymous Functions

const startGameBtn = document.getElementById('start-game-btn');

// const start = function() {
//     console.log('Game is starting...');
// };  

// startGameBtn.addEventListener('click', function() {
//     console.log('Game is starting...', age);
// });

function start() {
    console.log('Game is starting...', age);
};
startGameBtn.addEventListener('click', start);


const person = {  
    name: 'Kerim',
    greet: function greet() {
        console.log('Hello there');
    },
};
person.greet();
