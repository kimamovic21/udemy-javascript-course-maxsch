// 85. Using "if" Statements for Checking the Win-Condition

const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 15;

let chosenKerimLife = 100;
let currentMonsterHealth = chosenKerimLife;
let currentPlayerHealth = chosenKerimLife;

adjustHealthBars(chosenKerimLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
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

attackBtn.addEventListener('click', attackHandler);
