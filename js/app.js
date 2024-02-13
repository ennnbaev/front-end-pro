function getAverageNumberForNumericArrayElements(array) {
    let count = 0;
    let sum = 0.0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            count++;
            sum += array[i];
        }
    }
    return sum / count;
}

const array = [1, 6, true, 'string', 'test', {name: 'Admin'}, 10000, 4, 3];
alert(`The average value of numeric elements is: ${getAverageNumberForNumericArrayElements(array)}`)
