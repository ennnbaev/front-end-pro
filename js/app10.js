let number = parseInt(prompt("Put number"));
let evenDivs = 0;
for (let i = number; i > 0; i--) {
    if (number % i === 0 && i % 2 === 0) {
        evenDivs += 1;
    }
}
alert(evenDivs);
