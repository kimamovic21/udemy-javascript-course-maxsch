// 99. The "for" Loop

const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 15;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';  // MODE_ATTACK = 0
const MODE_STRONG_ATTACK = 'STRONG_ATTACT'; // MODE_STRONG_ATTACK = 1
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Maximum life for you and the monster', '100');

let chosenKerimLife = parseInt(enteredValue);
let battleLog = [];

if (isNaN(chosenKerimLife) || chosenKerimLife <= 0) {  // built-in JS function
    chosenKerimLife = 100;
};

let currentMonsterHealth = chosenKerimLife;
let currentPlayerHealth = chosenKerimLife;
let hasBonusLife = true;

adjustHealthBars(chosenKerimLife);  // vendor.js

function writeToLog(ev, val, monsterHealth, playerHealth) {
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };
    
    switch(ev) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                target: 'MONSTER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                target: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry = {
                event: ev,
                value: val,
                target: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry = {
                event: ev,
                value: val,
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        default:
            logEntry = { };
    };
    
    battleLog.push(logEntry);
};

function reset() {
    currentMonsterHealth = chosenKerimLife;
    currentPlayerHealth = chosenKerimLife;
    resetGame(chosenKerimLife);  // vendor.js
};

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth = currentPlayerHealth - playerDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife()  // vendor.js
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);  // vendor.js
        alert(`You would be dead but bonus life saved you!`);
    };

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert(`You won !`);
        writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER WON', currentMonsterHealth, currentPlayerHealth);
    } 
    else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert(`You lost`);
        writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER WON', currentMonsterHealth, currentPlayerHealth);
    } 
    else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert(`You have a draw!`);
        writeToLog(LOG_EVENT_GAME_OVER, 'A DRAW', currentMonsterHealth, currentPlayerHealth);
    };

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    };
};

function attackMonster(mode) {
    const maxDamage = mode === MODE_ATTACK  ?  ATTACK_VALUE  :  STRONG_ATTACK_VALUE;  // javascript expression
    const logEvent = mode === MODE_ATTACK  ?  LOG_EVENT_PLAYER_ATTACK  :  LOG_EVENT_PLAYER_STRONG_ATTACK;

    const damage = dealMonsterDamage(maxDamage);  // vendor.js
    currentMonsterHealth = currentMonsterHealth - damage;
    writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
   
    endRound();
};

function attackHandler() {
    attackMonster(MODE_ATTACK);
};

function strongAttackHandler() {
   attackMonster(MODE_STRONG_ATTACK);
};

function healPlayerHandler() {
    let healValue;
    if(currentPlayerHealth >= (chosenKerimLife - HEAL_VALUE)) {
        alert(`You can't heal to more than your max initial health.`);
        healValue = chosenKerimLife - currentPlayerHealth;
    }
    else {
        healValue = HEAL_VALUE;
    };
    increasePlayerHealth(HEAL_VALUE);  // vendor.js
    currentPlayerHealth = currentPlayerHealth + HEAL_VALUE;
    writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);

    endRound();
};

function printLogHandler() {
    for (let i = 0; i < 3; i++) {
        console.log('------------------');
    };
    console.log(battleLog);
};

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
