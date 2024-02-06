const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sumOfElements = 0;
let countOfPositiveElements = 0;
for (let i = 0; i < array.length; i++) {
    sumOfElements += array[i];
    if (array[i] > 0) {
        countOfPositiveElements++;
    }
}
alert(`The sum elements of array is ${sumOfElements}. The count of positive elements is ${countOfPositiveElements} `);
