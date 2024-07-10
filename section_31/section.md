Section 31: Introduction to Testing

531. Module Introduction

532. What Is Testing? Why Does It Matter ?

533. Testing Setup
-u terminalu instaliramo paket Jest sa komandom npm i jest

534. Writing & Running Unit Tests
-kreiramo util.test.js fajl
-importujemo i kreiramo funkciju generateText()
-kreiramo funkciju test()
-prvi argument funkcije test() je string, a drugi anonimna funkcija
-u anonimnoj funkciji kreiramo varijablu const text
-dodajemo funkciju expect(text).toBe()
-u terminal ukucamo komandu npm test
-kreiramo jos jednu funkciju test()

535. Writing & Running Integration Tests

536. Writing & Running e2e Tests
-u terminalu instaliramo paket puppeteer sa komandom npm i puppeteer
-u util.test.js fajlu kreiramo funkciju test()
-u funkciju test() dodajemo dva argumenta
-prvi argument je string a adrugi argument je anonimna funkcija
-dodajemo metodu puppeteer.launch({...})
-vrijednost metode puppeteer.launch() pohranjujemo u varijablu const browser
-kreiramo varijablu const page
-dodajemo metodu await page.goto()

537. Dealing with Async Code
-kreiramo app.test.js fajl
-u app.test.js fajlu importujemo funkciju printTitle
-kreiramo funkciju test()

538. Working with Mocks
-kreiramo folder __mocks__
-u ovom folderu kreiramo http.js fajl
-u http.js fajlu kreiramo funkciju fetchData()
-u util.test.js fajl dodajemo jest.mock('./http')
-kreiramo axios.js fajl
-u axions.js fajlu kreiramo funkciju get()

539. Useful Resources & Links
