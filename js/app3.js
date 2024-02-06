const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let maxValue = array[0];
let indexMaxValue = 0;
for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
        maxValue = array[i];
        indexMaxValue = i;
    }
}
alert(`The max element of the array is ${maxValue} , index is ${indexMaxValue}`)