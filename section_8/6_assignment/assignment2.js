// Assignment 6

// 1
const numbers = [1,2,3,5,6];
console.log(numbers);
const numsGreater5 = numbers.filter((val) => {
    // console.log(val);
    return val > 5;
});
console.log(numsGreater5);

const mappedNumbers = numbers.map((val) => {
    // console.log(val);
    return { num: val };
});
console.log(mappedNumbers);

const multiplicationResult = numbers.reduce((curResult, curValue) => {
    // console.log(curResult);
    // console.log(curValue);
    return curResult * curValue;
}, 1);
console.log(multiplicationResult);


// 2
const findMax = (...nums) => {
    let curMax = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        };
    };
    return curMax;
};
console.log(findMax(...numbers))


// 3
const findMinMax = (...nums) => {
    let curMax = nums[0];
    let curMin = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        };
        if (num < curMin) {
            curMin = num;
        };
    };
    return [curMin, curMax];
};
console.log(findMinMax(...numbers));

const [minNum, maxNum] = findMinMax(...numbers);
console.log(minNum);
console.log(maxNum);


// 4
const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);
console.log(userIds);
