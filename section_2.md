Section 2: Variables, Data Types, Operators & Functions

15. Module Introduction


16. Setting Up The Project


17. More on Version Cotrol & Git


18. Adding Javascript to the Website
-kreiranje app.js fajla
-povezivanje app.js fajla sa index.html fajlom
-u index.html fajl kreiramo script elementom sa atributom src
-u src atribut dodamo putanju do fajla


19. Introducing Variables & Constants
-kreiranje varijable let
-pridruzivanje nove vrijednost let varijabli
-kreiranje varijable const
-varijabli const ne mozemo ponovo pridruziti vrijednost


20. Declaring & Defining Variables
-rezervisana imena varijabli u Javascript-u
-camelCase konvenzija
-vise nacina imenovanje varijabli
-koristenje imena varijabli kao stringovi, sa $ znakom i _ znakom
-izbjegavati - i  _ izmedu dva imena varijabli
-ne mozemo imenovati varijablu sa slovom kao pocetnim imenom
-ne mozemo imenovati varijablu sa rezervisanim imenom
-u app.js fajlu kreiramo currentResult varijablu
-dodavanje tacke i zareza na kraju linije koda


21. Working with Variables & Operators
-redeklarisemo vrijednost varijable
-operatori nam omogucavaju manipulaciju sa varijablama ( +, -, *, /, %, **, =)
-ispisujemo vrijednost varijable u konzolu
-pozivamo funkciju outputResult(currentResult, '');


22. Understanding the Starting Code
-pojasnjenje za vendor.js fajl i outputResult() funkciju


23. Data Types: Numbers & Strings (Text)
-vrste podataka
-kreiranje nove varijable calculationDescription
-proslijedivanje  varijable calculationDescription u outputResult funkciju
-spajanje varijabli sa stringovima


24. Using Constants
-kreiramo varijablu defaultResult
-inicializacija nove varijable sa koristenjem prethodne varijable


25. More on Strings
-zatvaranje string varijable sa onim istim stringom sa kojim smo zapoceli ( " ", ' ', ` `)
-dodavanje varijable u Template literals ${...} kada koristimo ` `
-kreiramo varijablu let errorMessage


Assignment 1
-kreiramo let userInput varijablu
-kreiramo let result varijablu bez inicijalizacije
-varijalbi myResult dodajemo 18 i myUserInput
-varijabl myResult oduzimama, mnozimo i dijelimo sa odredenim brojem
-vrijednost varijable myResult ispisujemo u konzolu


26. Introducing Functions
-definisanje funkcije sa kljucnom rijecnu function
-dodavanje parametara funkciji
-dodavanje tijela funkciji
-pozivanje funkcije sa argumentima
-koristenje iste funkcije na vise mjesta sa razlicitim parametrima
-funkciju pozivama kada nama odgovara
-funkcija se nece izvrsiti dok se ne pozove


27. Adding A Custom Function
-odabrati deskriptivno ime funkcije
-kreiranje funkcije addTwoNumbers sa parametrima number1 i number2
-varijable koje su definisane samo unutar funkcije
-kreiramo varijablu result koja je jednaka sumi dva broja
-alert je built-in funkcija koja ce da prikaze rezultat varijable result na ekranu
-pozivamo addTwoNumbers funkciju sa dva broja
-ako pozovemo funkciju bez brojeva rezultat ce da bude NaN
-funkciju pozivamo vise puta sa razlicitim vrijednostima


28. Code Styles, Conventions & Syntax


29. Returning value
-dodovanje return kljucne rijeci u funkciju
-u varijablu currentResult pohranimo rezultat dobiven iz funkcije


30. The (Un)Importance of Code Order
-deklarisanje varijabli prije njihove upotrebe
-pozivanje funkcija prije njihovog deklarisanje
-konzistentno pisanje koda
-pisanje funkcija na pocetku


31. An Introduction to Global & Local Scope
-varijable koje se definisane unutar na pocetku fajla
-varijable koje su definisanje unutar opsega funkcije


32. "Shadowed Variables"


33. More about the "return" statement
-kljucna rijec return zavrsava izvrsavanje funkcije
-ne mozemo dodati novi kod ispod kljucne rijeci return
-nema smisla dodavati vise od jedne kljucne rijeci return 


34. Executing Functions "Indirectly"
-kreiramo addBtn varijablu i varijabli dodajemo addEventListener funkciju koja ima dva argumenta
-prvi argument je string, dogadaj koji zelimo da slusamo
-drugi argument je funkcija
-u funciju addTwoNumber pisemo currentResult = currentResult + userInput.value
-u funkciju addTwoNumber dodajemo outputResult funkciju


35. "Indirect" vs "Direct" Function Execution - Summary
-someButton.addEventListener('click', add) - funkcija ce se izvrsiti samo kada kliknemo
-someButton.addEventListener('click', add()) - funkcija ce se izvrsiti cim se skripta ucita


Assignment 2
-kreiramo greet funkciju
-kreiramo greetUser funkciju sa parametrom userName
-u obadvije funkcije dodajemo alert built-in funkcije
-pozivamo obadvije funkcije
-varijabli task3Element dodajemo addEventListener
-prvi parametar je click dogadaj, a drugi parametar je funkcija
-kreiramo funkciju combine3Strings sa tri parametra
-unutar funkcije combine3Strings kreiramo combinedText varijablu
-kreiramo combinedString varijablu


36. Converting Data Types
-vrijednost koju unesemo u input polje je string
-konvertovanje stringa u broj
-u funkciju addTwoNumbers dodajemo parseInt(userInput.value)
-mozemo i samo dodati plus ispred varijable userInput.value


37. Splitting Code into Functions


38. Splitting Code into Functions
-u funkciji  addTwoNumbers kreiramo calcDescription varijablu
-u funkiciu outputResult dodajemo varijablu calcDescription kao drugi argument
-kreiramo varijablu const enteredNumber
-kreiramo funkciju getUserNumberInput


39. Connecting all Buttons to Functions
-kreiramo funkcije za oduzimanje, mnozenje i dijeljenje
-kreiramo funkciju createAndWriteOutput sa tri parametra
-u funkciji createAndWriteOutput kreiramo calcDescription varijablu
-u funkciji addTwoNumbers kreiramo varijablu const initialResult
-u funkciju addTwoNumbers dodajemo createAndWriteOutput funkciju 
-funkciju createAndWriteOutput pozivamo u ostalim funkcijama, samo promjenimo prvi argument
-varijablama subtractBtn, multiplyBtn i divideBtn dodajemo addEventListener


40. Working with Code Comments
-dodavanje komentara sa // ili /* */
-komentar se nece izvrstiti kao kod u aplikaciji
-komentari trebaju biti kratki i deskriptivni


41. More Operators!
-u funkciju addTwoNumbers dodajemo currentResult += enteredNumber
-u ostale funkcije dodajemo -=, *=, /=
-currentResult++ je isto sto i currentResult = currentResult + 1


42. More Core Data Types
-tipovi podataka - Numbers, Strings(Text), Booleans, Objects, Arrays
-objekti omogucavaju da grupisemo podatke
-niz je lista podataka


43. Using Arrays
-kreiramo varijablu niz logEntries
-u funkciju addTwoNumbers dodajemo logEntries niz sa metodom push
-u push() metodu dodajemo enteredNumber varijablu
-varijablu logEntries ispisujemo u konzolu


44. Creating Objects
-u funkciji addTwoNumbers kreiramo varijablu objekt const logEntry
-u objekt logEntry dodajemo key - value par vrijednosti
-dodajemo logEntries.push(logEntry)
-

