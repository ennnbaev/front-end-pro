const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let indexOfMexElement = 0;
let maxValue = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > maxValue) {
        maxValue = array[i];
        indexOfMexElement = i;
    }
    array[i] = 0;
}
array[indexOfMexElement] = maxValue;
alert(`The max value is ${maxValue} . Arrays is : ${array}`);