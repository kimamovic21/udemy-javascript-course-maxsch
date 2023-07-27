// 88. Controlling the Conditional Bonus Life(Without Boolean Operators!)

const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 15;
const HEAL_VALUE = 20;

let chosenKerimLife = 100;
let currentMonsterHealth = chosenKerimLife;
let currentPlayerHealth = chosenKerimLife;
let hasBonusLife = true;

adjustHealthBars(chosenKerimLife);  // vendor.js

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth = currentPlayerHealth - playerDamage;

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife()  // vendor.js
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert(`You would be dead but bonus life saved you!`);
    };

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert(`You won !`);
    } 
    else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert(`You lost`);
    } 
    else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert(`You have a draw!`);
    };
};

function attackMonster(mode) {
    let kerimDamage;
    if (mode === 'ATTACK') {
        kerimDamage = ATTACK_VALUE;
    } 
    else if (mode === 'STRONG_ATTACK') {
        kerimDamage = STRONG_ATTACK_VALUE;
    };

    const damage = dealMonsterDamage(kerimDamage);
    currentMonsterHealth = currentMonsterHealth - damage;
   
    endRound();
};

function attackHandler() {
    attackMonster('ATTACK');
};

function strongAttackHandler() {
   attackMonster('STRONG_ATTACK');
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
    endRound();
};

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
