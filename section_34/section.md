Section 34: Bonus: Data Structures & Algorithms Introduction

558. Module Introduction

559. What is TypeScript and Why would you use it ?

560. Working with Types
-u terminalu instaliramo typescript paket
-u app.ts fajlu kreiramo funkciju add() sa parametrima a i b
-kreiramo varijablu const result
-kreiramo index.html fajl i importujemo app.ts fajl u index.html fajl kao app.js
-u funkciji add() parametrima dodajemo tipove

561. Core Types & Diving Deeper
-kreiramo funkciju printResult() sa parametrom result
-varijabli buttonElement dodajemo metodu addEventListener()
-u anonimnoj funkciji unutar metode addEventListener() kreiramo varijable const num1, const num2 i const result
-pozivamo funkciju printResult sa argumentom result

562. Object Types, Array Types & Function Types
-u anonimnoj funkciji unutar metode addEventListener() kreiramo varijablu const resultContainer
-kreiramo varijablu const let results
-u anonimnu funkciju dodajemo varijabli results metodu push

563. Advanced Types (Literal Types, Union Types, Enums)
-funkciji printResult() dodajemo parametar printMode sa tipom string
-u funkciju printResult() dodajemo uslov if (printMode === 'console')
-dodajemo uslov else if (printMode === 'alert')
-kreiramo tip type PrintMode
-kreiramo varijablu enum OutputMode { }

564. Classes & Interfaces
-u app.ts fajlu kreiramo klasu class User
-u klasi User kreiramo funkciju constructor() sa parametrima name i age
-parametrima name i age dodajemo tipove string i number
-dodajemo polja name:string i age: number
-kreiramo varijablu const user
-kreiramo klasu class Admin
-u klasi Admin kreiramo funkciju constructor() sa parametrima name, age, permissions
-parametrima dodajemo tipove
-u funkciji constructor() kreiramo funkciju super(name, age)
-kreiramo varijablu interface CalculationContainer
-kreiramo tip type CalculationResults
-kreiramo varijablu interfaceGreetable
-kreiramo varijablu interface Printable

565. Generic Types
-kreiramo varijablu const results
-kreiramo funkciju logAndEcho() sa parametrom val
-parametru val dodajemo tip any
-funkciji logAndEcho dodajemo tip <T>

566. Configuring the TypeScript Compiler
-u terminal ukucamo komandu tsc app.ts
-kreiramo other.ts fajl
-u terminal ukucamo komandu tsc

567. Useful Resources & Links
