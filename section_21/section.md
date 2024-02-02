Section 21: Javascript Tooling & Workflows

408. Module Introduction

409. Project Limitations & Why We Need Tools

410. Workflow Overview

411. Setting Up a npm Package
-instaliramo VS Code ekstenziju ESLint
-u terminal ukucamo komandu npm i

412. Working with npm Packages
-u terminal ukucamo komandu npm install --save-dev eslint
-instaliramo pakete sa npm i

413. Linting with ESLint
-konfigurisemo eslint fajl

414. Configuring ESLint

415. Importnant: Webpack Version & Configuring npm Scripts

416. Bundling with Webpack
-u terminal ukucamo komandu npm i --save-dev webpack webpack-cli
-kreiramo webpack.config.js fajl
-u webpack.config.js fajl dodajemo module.exports = { ... }
-kreiramo folder src
-u module.exports dodajemo property entry: '...'
-u objekt dodajemo property output
-u objekt output dodajemo property filename i path
-kreiramo varijablu const path
-u package.json, u objekt scripts dodajemo komandu build
-u terminal ukucamo komandu npm run build

417. Bonus: Multiple Entry Points

418. Development Mode & Fixing "Lazy Loading"
-u webpack.config.js dodajemo propery mode
-u objekt output dodajemo property publicPath
-u terminal ukucamo komandu serve

419. Using webpack-dev-server
-u package.json fajl dodajemo komandu build:dev

420. Generating Sourcemaps
-u webpack.config.js fajl, u objekt module.exports dodajemo property devtool

421. Building For Production
-u package.json fajl dodajemo komandu build:prod

422. Final Optimizations
-u terminal ukucamo komandu npm i --save-dev clean-webpack-plugin
-u webpack.config.js fajlu kreiramo varijablu const CleanPlugin
-u objekt module.exports dodajemo property plugins niz [ ... ]
-u niz dodajemo new CleanPlugin.CleanWebpackPlugin()
-objekt output dodajemo property filename

423. Using Third Party Packages with npm & Webpack

424. Wrap Up

425. Useful Resources & Links
