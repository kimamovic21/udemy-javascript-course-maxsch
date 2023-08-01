// 109. Wrap Up

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


let battleLog = [];
let lastLoggedEntry;


function getKerimLifeValues() {
    const enteredValue = prompt('Maximum life for you and the monster', '100');
    const parsedValue = parseInt(enteredValue);
    if (isNaN(parsedValue) || parsedValue <= 0) {  
        throw { message: 'Invalid user input, not a number'} ;
    };
    return parsedValue;
};


let chosenKerimLife;

try {
    chosenKerimLife = getKerimLifeValues();
} 
catch (error) {
    console.log(error);
    chosenKerimLife = 100;
    alert('You entered something wrong. default value of 100 was used');
}

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
    for (let i = 0; i <3; i++) {
        console.log('---------');
    };
    let j = 0;
    outerWhile: do {
        console.log('Outer', j);
        innerFor: for (let k = 0; k < 5; k++) {
            if (k === 3) {
                break outerWhile;
            };
            console.log('Inner', k);
        };
        j++;
    } while (j < 3);

    let i = 0;
    for (const logEntry of battleLog) {
        if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i) {
            console.log(`#${i}`);
            for (const key in logEntry) {
                console.log(`${key} => ${logEntry[key]}`);
            };
            lastLoggedEntry = i;
            break;
        };
        i++;
    };
};


attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
