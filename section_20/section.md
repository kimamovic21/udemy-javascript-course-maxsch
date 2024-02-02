Section 20: Modular Javascript (Working with Modules)

395. Module Introduction

396. Splitting Code in a Sub-optimal Way
-kreiramo foldere App i Utility
-u folderu App kreiramo Component.js, ProjectItem.js, ProjectList.js, Tooltip.js fajlove
-u folderu Utility kreiramo app.js fajl

397. A First Step Towards Javascript Modules
-u Component.js fajlu, eksportujemo klasu Component
-u index.html fajlu, script elementu dodajemo atribut type="module"

398. We Need a Development Server!
-otvorimo web stranicu https://www.npmjs.com/package/serve
-u terminal ukucamo udemo u folder cd section_20
-u terminal ukucamo komandu npm install -g server
-u terminal ukucamo komandu serve

399. First import/export Work
-import - komanda za importovanje fajla
-{ ... } - naziv sta importujemo iz nekog fajla
-from - odakle zelimo da importujemo fajl
-'...' - lokacija fajla
-u Tooltip.js fajl importujemo klasu Component iz Component.js fajla

400. Switching All Files To Use Modules
-u ProjectList.js fajlu, eksportujemo klasu ProjectList
-u app.js importujemo klasu ProjectList iz ProjectList.js fajla
-u ProjectItem.js fajlu, eksportujemo klasu ProjectItem
-u ProjectList.js fajl, importujemo klasu ProjectItem iz ProjectItem.js fajla
-u DOMHelper.js fajlu, eksportujemo klasu DOMHelper
-u ProjectItem.js fajl, importujemo klasu DOMHelper iz DOMHelper.js fajla
-u Tooltip.js fajlu, eksportujemo klasu Tooltip
-u ProjectItem.js fajlu, importujemo klasu Tooltip iz Tooltip.js fajla

401. More Name Export Syntax Variations
-u DOMHelper.js fajlu, kreiramo funkcije clearEventListeners() i moveElement()
-eksportujemo funkcije
-u ProjectList.js fajl importujemo funkciju moveElement
-ProjectItem mozemo importovati isto kao i PrjItem

402. Working With Default Exports
-u Component.js fajlu, klasu Component mozemo eksportovati kao i default
-u Tooltip.js fajl mozemo importovati klasu Component kao Cmp i bez { } ako smo eksportovali klasu Component kao default
-mozemo imati samo jedan default eksport u fajlu

403. Dynamic Imports & Code Splitting
-u ProjectItem.js fajl, u funkciju showMoreInfoHandler() dodajemo funkciju import('./Tooltip')
-funkciji import() dodajemo funkciju .then()

404. When Does Module Code Execute ?

405. Module Scope & globalThis

Quiz 24: Modules

406. Wrap Up

407. Useful Resources & Links