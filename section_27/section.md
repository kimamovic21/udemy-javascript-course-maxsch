Section 27: Node.js: An Introduction

480. Module Introduction

481. JavaScript is a Hosted Language

482. Installation & Basics
-kreiramo app.js fajl
-u app.js fajlu kreiramo varijablu const userName
-u VS Code terminalu ukucamo komandu node app.js

483. Understanding Modules & File Access
-kreiramo varijablu const fs
-varijabli fs dodajemo metodu writeFile()
-varijabli fs dodajemo metodu readFile()
-kreiramo user-data.txt fajl

484. Working with Incoming Http Requests
-app.js preimenujemo u files.js i kreiramo novi app.js fajl
-kreiramo varijablu const http 
-varijabli http dodajemo metodu createServer()
-u metodu createServer() dodajemo anonimnu funkciju sa parametrima request i response
-u anonimnu funkciju dodajemo parametru response metode write() i end()
-vrijednost metode http.createServer() pohranjujemo u varijabli const server
-varijabli server dodajemo metodu listen(3000)
-u pretrazivacu ukucamo localhost:3000

485. Sending Responses(HTML Data)
-dodajemo metodu response.setHeader()

486. Parsing Incoming Data
-kreiramo varijablu let body
-parametru request dodajemo metodu on() sa dva argumenta
-prvi arugment je 'data' a drugi anonimna funkcija sa parametrom chunk
-parametru request dodajemo jos jednu metodu on()
-prvi argument je 'end', a drugi anonimna funkcija
-u anonimnoj funkciji deklarisemo varijablu body
-kreiramo varijablu let userName
-dodajemo uslov if (body)

487. Introducing & Installing Express.js
-u terminal ukucamo komandu npm init da inicijaliziramo package.json fajl
-u terminal ukucamo komandu npm i express --save
-app.js preimenujemo u pure-node.js fajl
-kreiramo novi app.js fajl

488. Express.js: The Basics
-kreiramo varijablu const epxress
-kreiramo funkciju express()
-vrijednost funkcije express() pohranjujemo u varijablu const app
-varijabli app dodajemo metodu listen(3000)
-varijabli app dodajemo metodu use()
-u metodu use() dodajemo anonimnu funkciju sa tri parametra req, res i next
-u anonimnu funkciju dodajemo parametru res metodu setHeader()
-kreiramo jos jednu metodu app.use()
-u anonimnu funkciju dodajemo res.send()

489. Extracting Data
-u terminalu ukucamo komandu npm i body-parser --save
-kreiramo varijablu const bodyParser
-kreiramo jos jednu metodu app.use(bodyParser.urlencoded())

490. Rendering Server-side HTML with Templates & EJS
-u terminal ukucamo komandu npm i ejs --save
-kreiramo dvije metode app.set()
-u folderu views kreiramo index.ejs
-u metodi app.use() gdje se nalazi varijabla userName kreiramo parametru res dodajemo metodu render()

491. Enhancing Our Project

492. Adding Basic REST Routes
-u folderu routes kreiramo location.js fajl
-u location.js fajlu kreiramo varijablu const express
-kreiramo metodu express.Router()
-vrijednost metode express.Router() pohranjujemo u varijablu const router
-kreiramo metode router.post(), router.get()
-kreiramo varijablu objekt const locationStorage
-u metodu router.post() dodajemo varijablu locationStorage
-varijabli locationStorage dodajemo metode locations.push()
-dodajemo metodu res.json({ ... })
-u location.js fajl dodajemo module.exports
-u app.js fajlu kreiramo varijablu const locationRoutes
-kreiramo metodu app.use(locationRoutes)
-u SharePlace.js fajl, u funkciju selectPlace() dodajemo funkciju fetch()

493. Understanding CORS (Cross Origin Resource Sharing)
-kreiramo novu metodu app.use()
-u metodi app.use() parametru res dodajemo metodu setHeader()

494. Sending the Location ID to the Frontend

495. Adding the GET Location Route
-u location.js fajlu kreiramo novu metodu router.get()
-u metodi router.get() kreiramo varijablu const locationId
-kreiramo varijablu const location
-dodajemo uslov if(!location)
-u uslov if dodajemo metodu res.status(404).json({ ... })
-nakon if uslova dodajemo res.json({ ... })

496. Introducing MongoDB (Dababase)
-u location.js fajlu kreiramo varijablu const url
-importujemo MongoClient
-u terminalu instaliramo pakete za mongoDB

497. NodeJS Error Handling

498. Wrap Up

499. Useful Resources & Links
 