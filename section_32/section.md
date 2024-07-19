Section 32: Bonus: Programming Paradigms (Procedural vs Object Oriented vs Functional)

540. Module Introduction

541. What are Programming Paradigms ? 

542. Procedural Programming in Practice
-kreiramo procedural.js fajl
-u procedural.js fajlu kreiramo varijablu const form
-kreiramo funkciju signupHandler() sa parametrom event
-u funkciji signupHandler() kreiramo varijable const userNameInput i enteredUsername
-kreiramo varijable const passwordInput i enteredPassword
-dodajemo uslov if (enteredUsername.trim().length === 0)
-dodajemo uslov if (enteredPassword.trim().length <=5)
-kreiramo varijablu objekt const user

543. Object Oriented Programming in Practice
-kreiramo oop.js fajl
-u oop.js fajlu kreiramo klasd Validator, User i UserInputForm
-u klasi UserInputForm kreiramo funkciju constructor()
-u funkciji constructor() kreiramo varijable this.form, this.userNameInput i this.passwordInput
-dodajemo metodu this.form.addEventListener()
-kreiramo funkciju signupHandler() sa parametrom event
-u funkciji signupHandler() kreiramo varijable const enteredUserName i const enteredPassword
-u klasi Validator kreiramo varijable static REQUIRED i static MIN_LENGTH
-kreiramo funkciju static validate() sa tri parametra
-u funkciji validate() dodajemo dva uslova if
-u funkciji signupHandler dodajemo uslov if (Validator.validate(...))
-u uslov if dodajemo funkciju alert()
-u klasi User kreiramo funkciju constructor() sa parametrima uName i uPassword
-u funkciji constructor() kreiramo varijable this.userName i this.password
-kreiramo funkciju greet()
-u funkciji signupHandler kreiramo varijablu const newUser
-varijabli newUser dodajemo funkciju greet()
-kreiramo funkciju new UserNameInput()

544. Functional Programming in Practice

545. Wrap Up
-kreiramo functional.js fajl
-u functional.js fajlu kreiramo funkciju connectForm() sa parametrima formId i formSubmitHandler
-u funkciji connectForm() kreiramo varijablu const form
-varijabli form dodajemo metodu addEventListener()
-kreiramo funkciju signuoHandler() sa parametrom event
-pozivamo funkciju connectForm() sa argumentima
-kreiramo funkciju getUserInput() sa parametrom inputElementId
-kreiramo funkciju validate() sa parametrima value, flag, validatorValue
-u funkciju validate() dodajemo uslove if 
-kreiramo varijable const REQUIRED i const MIN_LENGTH
-kreiramo funkciju createUser() sa parametrima userName i userPassword-
-u funkciji createUser() dodajemo uslov if
-u uslov if dodajemo funkciju alert()
-u funkciji signupHandler() kreiramo varijablu const newUser
-dodajemo blokove koda try - catch
-u blok koda try dodajemo varijablu const newUser

546. Useful Resources & Links
