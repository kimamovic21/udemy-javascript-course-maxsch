Section 17: Async Javascript: Promises & Callbacks

348. Module Introduction

349. Understanding Synchronous Code Execution ("Sync Code")
-kreiramo varijable button i output
-kreiramo funkciju trackUserHandler
-varijabli button dodajemo addEventListener

350. Understanding Asynchronous Code Execution ("Async Code")

351. Blocking Code & The "Event Loop"
-kreiramo varijablu let result
-kreiramo petlju for

352. Sync + Async Code - The Execution Order
-u funkciju trackUserHandler() dodajemo metodu navigator

353. Multiple Callbacks & setTimeout(0)
-u funkciju trackUserHandler() dodajemo funkcije setTimeout()

Quiz 22: Asynchronous Code

354. Getting Started with Promises
-kreiramo funkciju setTimer() sa parametrom duration
-u funkciji setTimer() kreiramo funkciju new Promise sa parametrima resolve i reject
-vrijednost new Promise pohranimo u varijablu const promise
-u funkciju promise dodajemo funkciju setTimeout()
-u funkciju setTimeout dodajemo funkciju resolve()
-u funkciju trackUserHandler() dodajemo funkciju setTimer()
-funkciji setTimer() dodajemo metodu .then()

355. Chaining Multiple Promises
-kreiramo funkciju getPosition
-u funkciju getPosition() dodajemo metodu navigator.geolocation.getCurrentPosition
-u funkciji getPosition() kreiramo varijablu const promise
-u funkciju getCurrentPosition() dodajemo callback success, error, opts
-u funkciju trackUserHandler() dodajemo funkciju getPosition()
-funkciji getPosition() dodajemo metode .then()
-u funkciji trackUserHandler() kreiramo varijablu let positionData

356. Promise Error Handling
-u funkciji getPosition() u callback error dodajemo funkciju reject()
-u funkciji trackUserHandler(), funkciji getPosition() dodajemo metodu .catch()

357. Promise States & "finally"
-PENDING => ...
-RESOLVED => .then()
-REJECTED => .catch()

358. Async / await
-funkciji trackUserHandler() dodajemo keyword async
-u funkciji trackUserHandler() ispred funkcije getPosition() dodajemo keyword await
-u funkciji trackUserHandler() kreiramo varijable const posData i const timerData

359. Async / await & Error Handling
-u funkciju trackUserHandler() dodajemo blokove koda try i catch
-kreiramo varijable let posData i let timerData

360. Async / await vs "Raw Promises"

361. Promise.all(), Promise.race() etc.
-kreiramo Promise.race()
-kreiramo Promise.allSettled()

Quiz 23: Promises & async / await

362. Wrap Up

363. Useful Resources & Links
