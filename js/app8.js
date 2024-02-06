const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sumOfPositiveOddElements = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0 && array[i] > 0) {
        sumOfPositiveOddElements++;
    }
}
alert(`The sum of positive odd elements is ${sumOfPositiveOddElements}`);