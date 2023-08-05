// 135. Outputting Messages to the User

const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you`);
        return DEFAULT_USER_CHOICE;
    };
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random(); // 0 - 0.99
    console.log(randomValue);
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    };
};

const getWinner = (compChoice, plChoice) => {
    return compChoice === plChoice 
        ? RESULT_DRAW 
        : (compChoice === ROCK && plChoice === PAPER) ||
          (compChoice === PAPER && plChoice === SCISSORS) ||
          (compChoice === SCISSORS && plChoice === ROCK)
         ? RESULT_PLAYER_WINS 
         : RESULT_COMPUTER_WINS;

    // if (compChoice === plChoice) {
    //     return RESULT_DRAW;
    // } else if (
    //     compChoice === ROCK && plChoice === PAPER ||
    //     compChoice === PAPER && plChoice === SCISSORS ||
    //     compChoice === SCISSORS && plChoice === ROCK
    // ) {
    //     return RESULT_PLAYER_WINS;
    // } else {
    //     return RESULT_COMPUTER_WINS;
    // };
};

startGameBtn.addEventListener('click', () => {
    if(gameIsRunning === true) {
        return;
    };
    gameIsRunning = true;
    console.log('Game is starting...');

    const playerChoice = getPlayerChoice();
    console.log(playerChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    const winner = getWinner(computerChoice, playerChoice);
    console.log(winner);

    let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you`; 
    if (winner === RESULT_DRAW) {
        message = message + ' had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + ' won.';
    } else {
        message = message + ' lost.';
    };

    alert(message);
    gameIsRunning = false;
});
