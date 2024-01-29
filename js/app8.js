let numbString = prompt('Write down a six-digit number')
let numb = parseInt(numbString)
if (!isNaN(numb) && numbString.charAt(0) === numbString.charAt(5) && numbString.charAt(1) === numbString.charAt(4)
    && numbString.charAt(2) === numbString.charAt(3)) {
    alert("This number is mirror")
} else {
    alert("This number is not mirror")
}
