// 186. Which Data Can You Store in Arrays

const hobbies = ['Cooking', 'Sports'];
const personalData = [26, 'Kerim', {moreDetail: 'Sarajevo'}];

const analyticsData = [[1, 1.6], [-5.4, 2.1]];
for (const data of analyticsData) {
    for (const dataPoint of data) {
        console.log(dataPoint);
    };
};

console.log(personalData[1]);
