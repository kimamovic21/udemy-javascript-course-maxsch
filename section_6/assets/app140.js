// 140. Working with "bind()"

// not related to game

const combine = (resultHandler, operation, ...numbers) => {
    const validateNumber = (number) => {
        // console.log(resultHandler);
        console.log(operation);
        console.log(number);
        console.log(numbers);
        return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    for (const num of numbers) {
        console.log(num);
        // console.log(numbers);
        if (operation === 'ADD') {
            sum = sum + validateNumber(num);
            console.log('Sum:', sum);
        }
        else {
            sum = sum - validateNumber(num);
            console.log('Sum:',sum);
        };
    };
    resultHandler(sum);
};

const showResult = (messageText, result) => {
    console.log(messageText);
    console.log(result);
    console.log(messageText + ' ' + result);
};

combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1, 5, 'kerim', -3, 6, 10);
combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1, 5, 10, -3, 6, 10, 25, 88);
combine(showResult.bind(this, 'The result after subtracting all numbers is:'), 'SUBTRACT', 1, 10 ,15, 20);
