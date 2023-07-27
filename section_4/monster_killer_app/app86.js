// 86. Adding More "if" Statements & A "Strong Attack" Functionality

const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 15;

let chosenKerimLife = 100;
let currentMonsterHealth = chosenKerimLife;
let currentPlayerHealth = chosenKerimLife;

adjustHealthBars(chosenKerimLife);

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
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth = currentPlayerHealth - playerDamage;

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert(`You won !`);
    } 
    else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert(`You lost`);
    } 
    else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert(`You have a draw!`);
    };
};

function attackHandler() {
    attackMonster('ATTACK');
};

function strongAttackHandler() {
   attackMonster('STRONG_ATTACK');
};

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
