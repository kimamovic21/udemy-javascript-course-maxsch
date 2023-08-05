Section 6: More on Functions

126. Functions vs Methods
-kreiramo funkciju startGame()
-kreiramo objekt person 
-unutar objekta person kreiramo funkciju greet()


127. Functions are Objects!


128. Functions Expressions: Storing Functions in Variables
-funkciju startGame() pohranimo u varijablu const start


129. Function Expressions vs Function Declaration
-dva primjera sa funkcijama


130. Anonymous Functions
-kreiranje anonimne funkcije u addEventListener()


131. Working on the Project: Adding User Choices to the Game
-kreiramo varijable kamen, papir, makaze i default
-kreiramo varijablu const getPlayerChoice() u koju je pohranjujemo funkciju
-u funkciji getPlayerChoice() kreiramo varijablu const selection
-kreiramo uslov if ako korisnik nije unio ispravne podatke
-u startGameBtn.addEventListene, unutar anonimne funkcije, kreiramo varijablu const playerSelection
-kreiramo varijablu let gameIsRunning
-u anonimnu funkciju dodajemo if uslov (gameIsRunning)


132. Implementing the Core Game Logic
-kreiramo varijablu const getComputerChoice() u koju pohranjujemo funkciju
-u funkciju getComputerChoice() kreiramo varijablu const randomValue
-u startGameBtn.addEventListene, unutar anonimne funkcije,kreiramo varijablu const computerChoice 
-kreiramo varijable za izjednacen rezultat, igrac kad pobijedi i kompjuter kad pobjedi
-kreiramo funkciju getWinner() sa dva parametra
-u funkciji getWinner() dodajemo uslov if ako je igrac izbor isti kao i kompjuterov
-dodajemo uslov else if za slucaje kada igrac pobjedi
-u uslov else dodajemo return kada kompjuter pobjedi
-u startGameBtn.addEventListene, unutar anonimne funkcije,kreiramo varijablu const winner


133. Introducing Arrow Functions
-umjesto kljucne rijeci function dodajemo funkciju sa strijelicom
-u funkciju getWinner() dodajemo uslov sa ternarninom operatorom


134. Different Arrow Function Syntaxes


135. Outputting Messages to the User
-u startGameBtn.addEventListene, unutar anonimne funkcije, kreiramo varijablu let message
-dodajemo uslov pojavljivanja poruke


136. Default Arguments in Functions
-u funkciji getWinner(), parametru plChoice dodajemo default parametar


137. Introducing Rest Parameters ("Rest Operator")
-u funkciji subtractUp, u petlju for dodajemo kljucnu rijec arguments


138. Creating Functions Inside of Functions
-kreiranje jedne funkcije unutar druge funkcije


139. Understanding Callback Functions
-kreiramo funkciju showResult()


Assignment
-kreiramo vise funkcija


140. Working with "bind()"
-kreiramo funckiju combine()


141. Adding bind() to Calculator Project
-kreiramo funkciju calculate() sa parametrom operation
-dodajemo uslov if
-dodajemo metodu .bind()


142. call() and apply()


143. Wrap Up


144. Useful Resources & Links