Section 13: Back to the DOM & More Browser APIs

288. Module Introduction

289. Using "dataset" (data-* Attributes)
-kreiramo varijablu const projectElement
-varijablu projectElement dodajemo metodu .dataset
-dodajemo metodu projectElement.dataset.someInfo

290. Getting Element Box Dimensions

291. Working with Element Sizes & Positions

292. The DOM & Prototypes

293. Positioning the Tooltip
-u metodi create() kreiramo varijable hostElPosLeft, hostElPosTop, hostElHeight, parentElementScrolling
-kreiramo varijable const x i const y
-varijabli tooltipElement dodajemo metode .position, .left i .top

294. Handling Scrolling

295. Working with <templates> Tags
-u metodi create(), varijabli tooltipElement dodajemo metdu innerHTML
-kreiramo varijablu const tooltipTemplate
-kreiramo varijablu const tooltipBody
-varijablu tooltipBody dodajemo metode querySelector i textContent
-varijabli tooltipElement dodajemo metodu append()

296. Loading Scripts Dynamically
-u metodi static init() kreiramo varijablu const someScript
-varijablu someScript dodajemo metodu textContent
-u folderu scripts kreiramo analytics.js fajl
-u metodi static init() kreiramo metodu static startAnalytics()
-u metodi startAnalytics() kreiramo varijablu const analyticsScript
-varijabli analyticsScript dodajemo metode src i defer
-u index.html fajlu kreiramo footer i button element sa id-em
-u metodu init() dodajemo metodu document.getElementById() i addEventListener()

297. Setting Timers & Intervals
-u app.js fajl kreiramo funkciju setTimeout()
-u analytics.js fajlu kreiramo funkciju setInterval()
-kreiramo varijablu const timerId
-dodajemo document.getElementById i addEventListener u koji dodajemo funkciju clearTimeout(timerId)
-u analytics.js fajlu kreiramo varijablu const intervalId

298. The "location" and "history" Objects

299. The "navigator" Object

300. Working with Dates

301. The "Error" Object & Constructor Function

302. Wrap Up

303. Usefuk Resources & Links