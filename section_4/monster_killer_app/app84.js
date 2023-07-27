// 84. Adding an "Attack Function"

const ATTACK_VALUE = 10;

let chosenKerimLife = 100;
let currentMonsterHealth = chosenKerimLife;
let currentPlayerHealth = chosenKerimLife;

adjustHealthBars(chosenKerimLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth = currentMonsterHealth - damage;
};

attackBtn.addEventListener('click', attackHandler);
