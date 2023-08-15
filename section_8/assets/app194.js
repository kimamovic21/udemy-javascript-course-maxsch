// 194. Alternative to for Loops: The forEach() Method

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(prices);
const tax = 0.19;
const taxAdjustedPrices = [];

// for (const price of prices) {
//     taxAdjustedPrices.push(Number((price * (1 + tax)).toFixed(2)));
// };
// console.log(taxAdjustedPrices);


// prices.forEach((price, index, prices) => {
//     taxAdjustedPrices.push(+((price * (1 + tax)).toFixed(2)));
// });
// console.log(taxAdjustedPrices);


prices.forEach((price, index, prices) => {
   const priceObject = {
      id: index,
      taxAdjPrice: +(price * (1 + tax)).toFixed(2), 
   };
   taxAdjustedPrices.push(priceObject);
});
console.log(taxAdjustedPrices);