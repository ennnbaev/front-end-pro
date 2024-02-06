const array = [];
let size = parseInt(prompt("Enter array length"));
if (!isNaN(size)) {
    for (let i = 0; i < size; i++) {
        let value = prompt('Enter value #' + i);
        array.push(value);
    }
    alert("Your array is " + array);
    alert("Sorted array is " + array.sort());
    if (array.length <= 5) {
        array.splice(2, 5);
        alert("Spliced array is " + array);
    } else {
        alert("The size of the array to small, we can not delete elements from 2 to 4. Please enter array with min length 5");
    }
} else {
    alert("Please enter correct number and try again");
}