const array = [];
const minLengthForDelete = 5;
let size = parseInt(prompt("Enter array length"));
if (!isNaN(size)) {
    for (let i = 0; i < size; i++) {
        let value = parseInt(prompt('Enter value #' + (i + 1)));
        array.push(value);
    }
    alert("Your array is " + array);
    alert("Sorted array is " + array.sort());
    if (array.length >= minLengthForDelete) {
        array.splice(2, 3);
        alert("Spliced array is " + array);
    } else {
        alert("The size of the array to small, we can not delete elements from 2 to 4. Please enter array with min length " + minLengthForDelete);
    }
} else {
    alert("Please enter correct number and try again");
}