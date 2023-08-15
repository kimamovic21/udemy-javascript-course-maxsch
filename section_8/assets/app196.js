// 196. sort()ing and reverse()ing

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

const sortedPrices = prices.sort((a, b) => {
    if (a > b) {
        return 1;
    } 
    else if (a === b) {
        return 0;
    } 
    else {
        return -1;
    };
});
console.log(sortedPrices);
sortedPrices.reverse();
console.log(sortedPrices);