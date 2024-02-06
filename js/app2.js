const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let minValue = array[0];
let indexMinValue = 0;
for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
        minValue = array[i];
        indexMinValue = i;
    }
}
alert(`The min element of the array is ${minValue} , index is ${indexMinValue}`);