Section 18: Working with Http Requests

364. Module Introduction

365. What & Why

366. How The Web Works

367. More Background about Http

368. Getting Started with Http
-otvorimo web stranicu https://jsonplaceholder.typicode.com/

369. Sending a GET Request
-u app.js fajlu kreiramo varijablu const xhr
-varijabli xhr dodajemo metodu .open()
-varijabli xhr dodajemo metodu .send()

370. JSON Data & Parsing Data
-kreiramo anonimnu funkciju function()
-varijabli xhr dodajemo metodu .onload
-u anoninmoj funkciji kreiramo varijablu const listOfPosts
-varijabli xhr dodajemo metodu .responseType
-kreiramo varijablu const listElement
-kreiramo varijablu const postTemplate
-u anonimnoj funkciji kreiramo petlju for
-u petlji for kreiramo varijablu const postEl
-varijablama postEl dodajemo metode querySelector i textContent
-varijabli postTemplate dodajemo metodu .append()

371. JSON Data Deep Dive

372. Promisifying Http Requests (with XMLHttpRequest)
-kreiramo funkciju sendHttpRequest() sa parametrima method i post
-u funkciji sendHttpRequest() kreiramo varijablu const promise
-u anonimnu funkciju dodajemo metodu resolve(xhr.response)
-kreiramo asinhronu funkciju fetchPosts()
-u funkciju fetchPosts() dodajemo funkciju sendHttpRequest()
-u funkciji fetchPosts() kreiramo varijablu const responseData

373. Sending Data with a POST Request
-kreiramo asinhronu funkciju createPost() sa parametrima title i content
-u funkciji createPost() kreiramo varijablu userId
-kreiramo objekt const post
-funkciji sendHttpRequest() dodajemo parametar data
-u funkciju sendHttpRequest() dodajemo u xhr.send(JSON.stringify(data))
-u funkciju createPost() dodajemo funkciju sendHttpRequest()

374. Triggering Requests via the UI
-kreiramo varijable const form i const fetchButton
-varijbli fetchButton dodajemo addEventListener()
-u addEventListener dodajemo funkciju fetchPosts
-varijabli form dodajemo addEventListener()
-u addEventListener(), u callback funkciji kreiramo varijable enteredTitle i enteredContent
-dodajemo funkciju createPost(enteredTitle, enteredTitle)

375. The "Fetch" Button Always Appends

376. Sending a DELETE Request
-u petlju for dodajemo postEl.querySelector('li')
-kreiramo varijablu const postList
-varijabli postList dodajemo addEventListener()
-u addEventListener(), u callback funkciju dodajemo uslov if
-u uslov if kreiramo varijablu const postId
-u uslov if dodajemo funkciju sendHttpRequest()

377. Handling Errors
-u funkciju sendHttpRequest() dodajemo varijabli xhr metodu .onerror()
-u xhr.onload() metodu dodajemo uslov if
-u uslov if dodajemo metodu resolve(xhr.response)
-u else dodajemo reject()
-u xhr.onerror() dodajemo metodu reject()
-u funkciju fetchPosts() dodajemo blokove koda try - catch

378. Using the fetch() API
-u funkciju sendHttpRequest() dodajemo metodu fetch()
-u metodu fetch() dodajemo url
-metodi fetch(url) dodajemo metodu .then()
-u callback funkciju dodajemo response.json()

379. POSTing Data with fetch () API
-u metodu fetch() dodajemo objekt

380. Adding Request Headers
-u metodu fetch dodajemo objekt headers

381. fetch() & Error Handling
-metodi fetch() dodajemo metodu .catch()
-u metodu .then() dodajemo uslov if - else

382. XMLHttpRequest vs fetch()

383. Working with FormData
-u funkciji createPost kreiramo varijablu const fd
-varijabli fb dodajemo metodu .append()

384. Wrap Up

385. Useful Resources & Links
