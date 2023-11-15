Section 14: Working with Events

304. Module Introduction

305. Introduction to Events in Javascript

306. Different Ways of Listening to Events
-kreiramo folder scripts
-u folderu scripts kreiramo evetns.js fajl
-u events.js fajlu kreiramo varijablu const button
-kreiramo funkciju const buttonClickHanlder()
-varijablu button dodajemo atribut onClick
-kreiramo funkciju anotherButtonClickHandler()

307. Removing Event Listeners
-varijabli button dodajemo addEventListener()
-varijablu button dodajemo removeEventListener()
-kreiramo varijablu const boundFn

308. The "event" Object
-funkciji buttonClickHandler() dodajemo parametar event
-kreiramo varijablu const buttons
-varijabli buttons dodajemo metodu forEach()
-u funkciju buttonClickHandler() dodajemo event.target.value = true

309. Supported Event Types
-u addEventListener metodu dodajemo dogadaj mouseenter
-u events.html fajlu kreiramo element section
-objektu window dodajemo addEventListener
-u addEventListner dodajemo dogadaj mouseleave

310. Example: Basic Infinite Scrolling

311. Working with "preventDefault()"
-u event.html fajlu kreiramo form element
-kreiramo varijablu const form
-varijablu form dodajemo addEventListener()
-u addEventListener() dodajemo dogadaj submit i anonimnu funkciju sa parametrom event
-u anonimnu funkciju dodajemo event.preventDefault()

312. Understanding "Capturing" & "Bubbling" Phases

313. Event Propagation & stopPropagation()
-kreiramo varijablu const div
-varijabli div dodajemo addEventListener
-varijabli button dodajemo addEventListener
-u button.addEventListener dodajemo metodu stopPropagation()

314. Using Event Delegation
-kreiramo varijablu const listItems
-varijabli listItems dodajemo metodu .forEach()
-kreiramo varijablu const list
-varijabli list dodajemo addEventListener()
-u addEventListener dodajemo metodu event.target.closest()

315. Triggering DOM Elements Programmatically
-u addEventListener varijablu form dodajemo metodu .submit()
-varijablu button dodajemo metodu .click()

316. Event Handler Functions & "this"

Quiz 20: Events

317. Drag & Drop - Theory

318. Configuring Draggable Elements
-u index.html fajlu li elementima dodajemo atribut draggable="true"
-u app.js fajlu kreiramo funkciju connectDrag()
-u metodu constructor dodajemo this.connectDrag()
-u funkciju connectDrag() dodajemo document.getElementById()
-u funkciju connectDrag() dodajemo metode event.dataTransfer.setData()
-dodajemo metode event.dataTransfer.effectAllowed

319. Marking the "Drop Area"
-u app.js fajlu kreiramo funkciju connectDroppable()
-u metodu constructor dodajemo this.connectDroppable()
-u funkciji connectDroppable() kreiramo varijablu const list
-varijablu list dodajemo addEventListener()
-u addEventListener dodajemo dogadaje dragenter i dragover
-u addEventListener dodajemo uslove if
-u addEventListener dodajemo metode list.parentElement.classList.add()
-dodajemo list.addEventListener sa dogadajem dragleave
-dodajemo uslov if

320. Dropping & Moving Data + Elements
-varijabli list dodajemo addEventListener sa dogadajem drop
-kreiramo varijablu const prjId
-dodajemo uslov if (this.projects.find(...))
-objektu document dodajemo vise metoda
-list varijabli dodajemo vise metoda
-u funkciji connectDrag kreiramo varijablu const item
-varijabli item dodajemo addEventListener()

321. Firefox Adjustments

322. Wrap Up

323. Useful Resources & Links