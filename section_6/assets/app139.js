// 139. Understanding Callback Functions

// not related to game

const sumUp = (resultHandler, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0: number;
    };

    let sum = 0;
    for (const num of numbers) {
        sum = sum + validateNumber(num);
    };
    
    resultHandler(sum);
};

const subtractUp = function() {
    let sum = 0;
    for (const num of arguments) {  // don't use that
        sum = sum - num;
    };
    return sum;
};

const showResult = (result) => {
    alert('The result after adding all numbers is : ' + result);
};

sumUp(showResult, 'kerim', 5, 10, -3, 6, 10);
sumUp(showResult, 1, 5, 10, -3, 6, 10, 25, 88);
console.log(subtractUp(1, 10 ,15, 20));
