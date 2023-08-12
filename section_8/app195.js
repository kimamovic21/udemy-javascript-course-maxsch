// 195. Transforming Data with map()

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
 
const taxAdjustedPrices = prices.map((price, index, prices) => {
   const priceObject = {
      id: index,
      taxAdjPrice: +(price * (1 + tax)).toFixed(2), 
   };
   return priceObject;
});
console.log(prices);
console.log(taxAdjustedPrices);