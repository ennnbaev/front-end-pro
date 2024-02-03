const firstNumb = 1;
const lastNumb = 500;
let sum = 0;
for (let i = 1; i <= lastNumb; i++) {
    sum += i;
}
const average = sum / (lastNumb - firstNumb + 1)
alert(average)