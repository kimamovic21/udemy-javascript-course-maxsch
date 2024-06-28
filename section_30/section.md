Section 30: Performance & Optimizations

515. Module Introduction

516. What is "Performance Optimization" About ?

517. Optimization Potentials

518. Measuring Performance

519. Diving Into The Browser Devtools (for Performance Measuring)

520. Further Resources

521. Preparing The Testing Setup

522. Optimizing Startup Time & Code Usage / Coverage 
-u shop.js fajlu kreiramo funkciju addProduct(event)
-u funkciju addProduct() dodajemo funkciju import()
-kreiramo folder optimized
-kreiramo product.js fajl
-u product.js fajlu kreiramo i eksportujemo niz varijablu const products
-u shop.js fajl importujemo varijablu products i funkciju renderProducts
-u kreiramo funkciju deleteProduct()

523. Updating The DOM Correctly
-u rendering.js fajlu kreiramo i eksportujemo funkciju updateProducts()
-funkciji updateProducts() dodajemo 4 parametre product, prodId, deleteProductFn, isAdding
-u funkciju udpateProducts() dodajemo uslove if - else
-u uslovu else kreiramo variablu const productEl
-u product-management.js fajlu, u funkciji deleteProduct() kreiramo varijablu let deletedProduct
-importujemo funkciju updateProducts()
-u funkciju deleteProduct(prodId) dodajemo funkciju updateProducts()

524. Updating Lists Correctly
-u rendering.js fajlu kreiramo funkciju createElement()
-funkciji createElement() dodajemo parametre product, prodId, deleteFn
-u funkciji renderProducts() kreiramo varijablu const newListEl
-u funkciji updateProducts() kreiramo varijablu const newProductEl
-u funkciji createElement() dodajemo varijabli newListEl metodu innerHTML

525. Optimizing The Small Things
-u product-management.js fajlu, u funkciji deleteProduct() kreiramo varijablu const deletedProductIndex

526. Micro-Optimizations (Think Twice!)
-u rendering.js fajlu, u funkciji renderProducts() kreiramo varijable const startTime i const endTime

527. Finding & Fixing Memory Leaks

528. Server-side Performance Optimizations

529. Wrap Up

530. Useful Resources & Links
