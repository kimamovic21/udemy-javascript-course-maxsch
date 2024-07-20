Section 33: Bonus: Data Structures & Algorithms Introduction

547. Module Introduction

548. What are "Data Structures" & "Algorithmgs" ?

549. A First Example
-kreiramo alg-1-minimum.js fajl
-u ovom fajlu kreiramo funkciju getMin() sa parametrom numbers
-u funkciji getMin() kreiramo varijablu let currentMinimum
-izvan funkcije getMin() kreiramo varijablu niz const testNumbers
-kreiramo varijablu const min
-u funkciji getMin() dodajemo uslov if (!numbers.length)
-dodajemo uslov if (numbers.length === 1)
-dodajemo petlju for ()
-u petlji for() dodajemo uslov if()

550. Solving the Same Problem Differently
-kreiramo funkciju getMin2() sa parametrom numbers
-u funkciju getMin2() dodajemo uslov if (!numbers.length)
-kreiramo varijablu let sortedNumbers
-kreiramo petlju for()
-u petlji for () kreiramo varijablu let outerElement
-u toj petlji kreiramo jos jednu petlju for()
-u drugoj petlji kreiramo varijablu let innerElement
-dodajemo uslov if (outerElement > innerElement)
-u uslov if dodajemo numbers[i] = innerElement i numbers[i] = outerElement
-dodajemo outerElement = numbers[i] i innerElement = numbers[i]

551. Performance & The "Big 0" Notation

552. More Time Complexities & Comparing Algorithms

553. More on Big O

554. More Examples
-kreiramo alg-2-event-odd.js fajl
-u alg-2-event-oldd.js fajlu kreiramo funkciju isEvenOrOdd sa parametrom number
-u funkciji isEventOrOdd() kreiramo varijablu const result 
-dodajemo uslov if (result === 0)
-kreiramo alg-3-array-sum.js fajl
-u alg-3-array-sum.js fajlu kreiramo funckciju sumUp() sa parametrom numbers
-u funkciji sumUp() kreiramo varijablu let sum = 0
-kreiramo petlju for()
-izvan funkcije kreiramo varijablu const array

555. Diving into Data Structures & Time Complexities
-kreiramo data-structures.js fajl
-u data-structures.js fajlu kreiramo varijablu niz const age
-varijabli age dodajemo metodu push()
-varijabli age dodajemo metodu unshift()
-kreiramo varijablu const myAge
-kreiramo varijablu objekt const namePopularity
-kreiramo varijablu const manuUsages
-kreiramo varijablu const nameMap
-kreiramo varijablu const manuUsages2
-kreiramo varijablu const nameRealMap

556. Where to Learn More & Wrap Up

557. Useful Resources & Links
