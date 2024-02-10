function showProducts() {
    for (let i = 0; i < products.length; i++) {
        console.log(`#${i + 1} ${products[i].name} - $${products[i].price}`);
    }
}

function getProductNumber() {
    let productNumber;
    do {
        productNumber = parseInt(prompt('Enter product number'));
    } while (productNumber < 1 || productNumber > products.length || isNaN(productNumber));
    return productNumber;
}

function getProductAmount() {
    let productAmount;
    do {
        productAmount = parseInt(prompt('Enter amount of products you wanna buy'));
    } while (productAmount < 1 || productAmount > productToBuy.availability || isNaN(productAmount));
    return productAmount;
}

function ifDiscountStartsFrom(price, discountStartsFrom) {
    return price >= discountStartsFrom;
}

function calculatePriceWithDiscount(price, discount) {
    return price - price * discount;
}

function showFinalPrice(finalPrice, withDiscount) {
    if (withDiscount) {
        console.log(`Congrats! You get discount. Your final price is ${finalPrice}`)
    } else {
        console.log(`The final price is ${finalPrice}`);
    }
}

showProducts();
const productNumber = getProductNumber();
const productToBuy = products[productNumber - 1];
const productAmount = getProductAmount();
const price = productToBuy.price * productAmount;
const discountStartsFrom = 10000;
const discount = 0.2;
const withDiscount = ifDiscountStartsFrom(price, discountStartsFrom);
const finalPrice = withDiscount ? calculatePriceWithDiscount(price, discount) : price;
showFinalPrice(finalPrice, withDiscount);

