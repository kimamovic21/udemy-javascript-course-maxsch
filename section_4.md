Section 4: Working with Control Structures (if Statements, Loops, Error Handling)

73. Module Introduction


74. Introducing "if" Statements & Boolean (Comparison) Operators
-operatori koje koristimo u if uslovima ==, !=, ===, !==, <, >, <=, >=, !
-provjeravanje vrijednosti varijabli sa ==
-provjeravanje vrijednost i tipa varijabli sa ===
-uslov je boolean vrijednost


75. Using Booleans in Conditions & More on Text Comparisons


76. Using "if" Statement
-kreiramo funkciju calculateResult sa parametrom calculationType
-u funkciju calculateResult dodajemo if uslov
-u if uslov dodajemo calculationType === 'ADD'
-nakon if uslova dodajemo else uslov
-u calculateResult funkciji kreiramo varijablu mathOperator
-u calculateResult funkciju dodajemo createAndWriteOutput funkciju sa tri argumenta
-dodajemo writeToLog funkciju sa cetiri argumenta
-u funkcijama add i subtract dodajemo calculateResult funkciju


77. Working with "if", "else" and "else-if" Statement
-dodajemo if else uslove
-u funkcije multiply i divide dodajemo calculateResult funkciju


78. Beware When Comparing Objects & Arrays for Equality!
-poredenje objekata i nizova sa == i ===


79. The Logical AND and OR Operators
-operatori ( &&  i  || )
-u funkciju calculationResult dodajemo uslov if(calculationType !== ... &&)
-u funkciju calculateResult dodajemo uslov if(calculationType === ... ||)
-rezultat if uslova je return izjava 


80. Understanding Operator Precedence
-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence


81. Beyond true/false: "Truthy" and "Falsy" Values
-u uslov if (calculationType !== ... ) { } dodajemo !enteredNumber


82. Coercion vs Converison


83. Setting Up a Bigger Example Project(The "Monster Killer")


84. Adding an "Attack Function"
-kreiramo varijablu const ATTACK_VALUE
-kreiramo varijablu let chosenKerimLife 
-pozivamo funkciju adjustHealthBars() sa chosenMaxLife argumentom
-kreiramo attackHandler() funkciju
-varijabli attackBtn dodajemo funkciju addEventListener
-u funkciji addEventListener prvi argument je dogadaj click, a drugi argument je attackHandler funkcija
-u funkciji attackHandler() kreiramo varijablu const damage
-kreiramo varijable currentMonsterHealth i currentPlayerHealth
-u funkciju attackHandler() dodajemo currentMonsterHealth = currentMonsterHealth - damage
-kad kliknemo attack dugme health bar za monster se smanjuje


85. Using "if" Statements for Checking the Win-Condition
-u funkciju attackHandler() dodajemo uslov if (currentMonsterHealth <= 0)
-kreiramo varijablu const MONSTER_ATTACK_VALUE
-u funkciji attackHandler() kreiramo varijablu const playerDamage
-dodajemo currentPlayerHealth = currentPlayerHealth - playerDamage
-dodajemo uslov else if (currentPlayerHealth <= 0)
-u if i else-if uslove dodajemo &&


86. Adding More "if" Statements & A "Strong Attack" Functionality
-kreiramo funkciju strongAttackHandler()
-strongAttackBtn varijabli dodajemo funkciju addEventListener
-prvi argument je dogadaj click, a drugi argument je funkcija strongAttackHandler
-kreiramo varijablu const STRONG_ATTACK_VALUE
-u funkciji strongAttackHandler() kreiramo varijablu const damage 
-vrijednost varijable damage jednaka je dealMonsterDamage(STRONG_ATTACK_VALUE)
-kreiramo funkciju attackMonster() sa parametrom mode
-u funkciji attackMonster() kreiramo varijablu let kerimDamage
-dodajemo if - else-if uslove
-u funkciju attackMonster() dodajemo const damage = dealMonsterDamage(kerimDamage)
-u funkciju attackHandler() dodajemo attackMonster funkciju
-u funkciju strongAttackHandler() dodajemo attackMonster funkciju


87. Time for a "Heal Player" Functionality!
-kreiramo funkciju healPlayerHandler
-varijabli healBtn dodajemo funkciju addEventListener 
-prvi arugment addEventListener funkcije je dogadaj click, a drugi argument healPlayerHandler funkcija
-kreiramo varijablu const HEAL_VALUE
-u funkciju healPlayerHandler() dodajemo increasePlayerHealth(HEAL_VALUE)
-kreiramo funkciju endRound()
-u funkciju attackMonster() dodajemo endRound()
-u funkciju healPlayerHandler() dodajemo endRound()
-u funkciju healPlayerHandler() dodajemo currentPlayerHealth = currentPlayerHealth + HEAL_VALUE
-dodajemo uslov if currentPlayerHealth >= (chosenKerimLife - HEAL_VALUE)
-u uslovu if dodajemo alert i varijablu healValue
-u uslov else dodajemo healValue = HEAL_VALUE


88. Controlling the Conditional Bonus Life(Without Boolean Operators!)
-kreiramo varijablu let hasBonusLife
-u endRound() funkciji kreiramo uslov if (currentPlayerHealth <= 0 && hasBonusLife)
-u uslov if dodajemo hasBonusLife = false
-u uslov if dodajemo removeBonusLife() funkciju
-u funkciji endRound() kreiramo varijablu const initialPlayerHealth
-u prvi uslov if dodajemo currentPlayerHealth = initialPlayerHealth
-dodajemo setPlayerHealth(initialPlayerHealth)
