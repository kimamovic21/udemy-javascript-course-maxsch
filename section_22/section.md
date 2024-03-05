Section 22: Utilizing Browser Storage

426. Module Introduction

427. Browser Storage Options

428. localStorage & sessionStorage
-u app.js fajlu kreiramo varijablu const userId
-kreiramo metodu localStorage
-kreiramo varijable storeBtn i retrBtn
-varijablama storeBtn i retrBtn dodajemo addEventListener
-u retrBtn.addEventListener(), u callback funkciji kreiramo varijablu const extractedId
-dodajemo uslov if (extractedId)
-kreiramo varijablu objekt const user
-u storeBtn.addEventListener(), u callback funkciju dodajemo metode localStorage.setItem()
-u funkciju setItem() dodajemo metodu JSON.stringify(user)
-u retrBtn.addEventListener(), u callback funkciji kreiramo varijablu const extractedUser

429. Getting Started with Cookies
-u storeBtn.addEventListener(), u callback funkciji kreiramo metodu document.cookie
-kreiramo varijablu const userId

430. Working with Cookies
-kreiramo varijablu user
-kreiramo varijablu const cookieData
-varijabli cookieData dodajemo metodu .map()
-vrijednost metode cookieData.map() pohranjujemo u varijablu const data

431. Getting Started with IndexedDB
-u app.js fajlu dodajemo metodu indexedDB.open('...', 1)
-vrijednost metode indexedDB.open() pohranjujemo u varijablu const dbRequest
-varijabli dbRequest dodajemo metode onsuccess i onerror
-i metodi onsuccess kreiramo varijablu const db
-varijabli db dodajemo metodu createObjectStore('products')
-kreiramo varijablu const objStore
-varijabli objStore dodajemo metodu transaction.oncomplete
-u funkciji sa parametrom event kreiramo varijablu const productStore
-varijabli productStore dodajemo metodu .add()

432. Working with IndexedDB
-u app.js kreiramo varijablu let db
-kreiramo varijablu const request
-varijabli request dodajemo metodu onsuccess

433. Wrap Up

434. Useful Resources & Links
