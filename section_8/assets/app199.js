// 199. The important reduce() Method

const prices = [10.99, 5.99, 3.99, 6.59];

// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//     console.log(prevValue);
//     console.log(curValue);
//     console.log(curIndex);
//     console.log(prices);
//     return prevValue + curValue;
// }, 0);
// console.log(sum);

const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
console.log(sum);