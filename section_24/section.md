Section 24: Time to Practice: Share My Place App

448. Module Introduction

449. Note: Use the LTS Version of NodeJS

450. Setting Up the Project
-preuzmemo pocetne foldere i fajlove

451. Getting DOM access
-folderu src kreiramo SharePlace.js fajl
-u SharePlace.js fajlu kreiramo klasu PlaceFinder()
-u klasi PlaceFinder kreiramo funkciju constructor()
-u funkciju constructor() kreiramo varijable const addressForm i const locateUserBtn
-varijablama addressForm i locateUserBtn dodajemo addEventListener()
-kreiramo funkcije locateUserHandler() i findAddressHandler()

452. Getting the User Location
-u funkciju locateUserHandler() dodajemo uslov if(!navigator.geolocation)
-u funkciji locateUserBtn() varijabli navigator dodajemo metode geolocation i getCurrentPosition
-u funkciju getCurrentPosition() dodajemo funkciju successResult
-u funkciji successResult kreiramo varijablu const coordinates
-kreiramo instancu klase new PlaceFinder()

453. Adding Feedback (Showing a Modal)
-u folderu src kreiramo folder UI
-u folderu UI kreiramo Modal.js fajl
-u Modal.js fajlu kreiramo klasu Modal
-u klasi Modal kreiramo funkciju constructor() sa parametrom contentId
-kreiramo funkcije show() i hide()
-u funkciju constructor() dodajemo varijable this.contentTemplateEl i this.modalTemplateEl, this.fallbackText
-u funkciju show() dodajemo uslov if('content' ...)
-dodajemo uslov else
-u uslovu if kreiramo varijable const modalContent, const modalElement, const backdropElement, const contentElement
-varijabli modalElement dodajemo metodu appendChild(contentElement)
-dodajemo metode document.body.insertAdjacentElement()
-u Modal.js fajlu eksportujemo klasu Modal
-kreiramo varijablu const modal
-dodajemo metodu modal.show()

454. Hiding the Modal
-u funkciju hide() dodajemo uslov if(this.modalElement)
-u uslov if dodajemo metode document.body.removeChild()
-dodajemo metode this.modalElement i this.backdropElement

455. Rendering a Map with Google Maps
-dodajemo API za Google mape
-u folderu UI kreiramo Map.js fajl
-u Map.js fajlu kreiramo klasu Map
-u klasi Map kreiramo funkciju constructor(coords)
-u funkciju constructor(coors) dodajemo varijable this.coordinates i this.render()
-dodajemo metodu render()
-u metodu render() dodajemo uslov if(!google)
-dodajemo metodu new google.maps.Map()
-vrijednost metode new google.maps.Map() pohranjujemo u varijablu const map
-dodajemo metodu new google.maps.Marker()
-eksportujemo klasu Map
-u SharePlace.js fajlu kreiramo metodu selectPlace(coordinates)
-u metodi selectPlace() kreiramo metodu new Map(coordinates)
-dodajemo uslove if i else
-u uslov if (this.map) dodajemo metodu this.map.render(coordinates)
-u uslovu else vrijednost metode new Map(coordinates) pohranjujemo u varijablu this.map
-u funkciju constructor() dodajemo metodu this.render(coords)
-u funkcije getCurrentPosition() dodajemo metodu this.selectPlace(coordinates)

456. Continuing withoud a Credit Card

457. Finding an Address & Getting the Coordinates
-u SharePlace.js fajlu, u funkciju findAddressHandler() dodajemo metodu event.preventDefault()
-kreiramo varijablu const address
-dodajemo uslov if 
-kreiramo varijablu const modal
-varijabli modal dodajemo metodu show()
-kreiramo folder Utiliy i Location.js fajl
-u Location.js fajlu kreiramo i eksportujemo asinhronu funkciju getCoordsFromAddress(address)
-u funkcije getCoordsFromAddress() dodajemo metodu fetch()
-kreiramo varijablu const GOOGLE_API_KEY
-dodajemo varijablu const urlAddress
-vrijednost metode await fetch('...') pohranjujemo u varijablu const response
-dodajemo uslov if (!response.ok)
-kreiramo varijablu const data
-dodajemo uslov if (data.error_message)
-kreiramo varijablu const coordinates

458. Converting User Input to Coordinates
-u SharePlace.js fajl importujemo funkciju getCoordsFromAddress
-u metodi modal.show() dodajemo funkciju getCoordsFromAddress(address)
-vrijednost asinhrone funkcije getCoordsFromAddress(address) pohranjujemo u varijablu const coordinates
-dodajemo metodu this.selectPlace(coordinates)
-dodajemo blokove koda try - catch
-nakon blokova koda try - catch dodajemo metodu modal.hide()

459. Creating a "Share Place" Link
-u Location.js fajlu kreiramo i eksportujemo asinhronu funkciju getAddressFormCoords(coords)
-u funkciju getAddressFormCoords() dodajemo funkciju fetch()
-vrijednost funkcije fetch() pohranjujemo u varijablu const response
-kreiramo varijablu const data i dodajemo dva if uslova
-kreiramo varijablu const address
-u SharePlace.js fajl 
varijablu const address importujemo i kreiramo funkciju getAddressFromCoords()
-vrijednost funkcije getAddressFromCoords(coordinates) pohranjujemo u varijablu const address
-u SharePlace.js fajlu, u funkciji constructor() dodajemo metodu this.shareBtn
-metodi this.shareBtn dodajemo addEventListener()
-u funkciju selectPlace() dodajemo metodu this.shareBtn.disabled
-kreiramo varijablu const sharedLinkInputElement
-varijabli sharedLinkInputElement dodajemo metodu value

460. Copying the Link to the Clipboard
-u SharePlace.js fajlu, u funkciju sharePlaceHandler() dodajemo uslov if (!navigator.clipboard)
-kreiramo varijablu const sharedLinkInputElement
-u uslov if dodajemo varijablu sharedLinkInputElement 
-varijabli sharedLinkInputElement dodajemo metodu select()
-dodajemo varijablu navigator
-varijabli navigator dodajemo metode clipboard i writeText()
-u metode writeText() dodajemo sharedLinkInputElement.value
-dodajemo metode then() i catch()

461. Rendering the "Shared Place" Screen
-kreiramo MyPlace.js fajl
-u MyPlace.js fajlu kreiramo klasu LoadedPlace
-u klasu LoadedPlace dodajemo funkciju constructor()
-funkciji constructor() dodajemo parametre coordinates i address
-importujemo klasu Map
-u funkciju constructor() dodajemo metodu new Map(coordinates)
-kreiramo varijablu const headerTittleEl
-varijabli headerTittleEl dodajemo metodu textContent
-kreiramo instancu klase new LoadedPlace()
-kreiramo metodu new URL(location.href)
-vrijednost metode new Url() pohranjujemo u varijablu const url
-kreiramo varijablu const queryParams
-kreiramo varijablu objekt const coords
-kreiramo varijablu const address

462. Useful Resources & Links
 