function makeSumFunction() {
    let currentSum = 0;
    return function (number) {
        return currentSum += number;
    }
}

const sum = makeSumFunction();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

