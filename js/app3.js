function fillInTwoDimensionalArray(array) {
    const firstLength = parseInt(prompt('Enter the length of first array'));
    for (let i = 0; i < firstLength; i++) {
        let innerArray = new Array(parseInt(prompt('Enter the length of inner array # ' + (i + 1))));
        array.push(innerArray);
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            array[i][j] = prompt(`Enter value for array [${i + 1}] [${j + 1}]`);
        }
    }
}

const array = [];
fillInTwoDimensionalArray(array);
alert(array);