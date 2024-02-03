let inputNumber = parseInt(prompt("Put number"));
for (let i = 1; i <= 100; i++) {
    if (i * i > inputNumber) {
        break;
    }
    console.log(i);
}