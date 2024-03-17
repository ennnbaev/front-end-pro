const ALL_CITIES = {
    1: 'Kyiv',
    2: 'Kharkiv',
    3: 'Odesa'
}
const ALL_PAYMENT = {
    'c': 'Cash',
    'b': 'Online'
}

function showCategories() {
    const parent = document.getElementById('categories');

    data.forEach(category => {
        const myCategoryElement = document.createElement('div');
        myCategoryElement.textContent = category.name;
        myCategoryElement.setAttribute('data-category', category.key);

        parent.appendChild(myCategoryElement);
    });
}

function showProductsByCategory(categoryId) {
    const selectedCategory = data.find(category => category.key === categoryId);

    const parent = document.getElementById('products');
    parent.innerHTML = '';

    selectedCategory.products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = product.name;
        productElement.setAttribute('data-product', product.id);
        productElement.setAttribute('data-category', categoryId);

        parent.appendChild(productElement);
    });
}

function showProductInfo(categoryId, productId) {
    const selectedCategory = data.find(category => category.key === categoryId);
    const selectedProduct = selectedCategory.products.find(product => product.id == productId);

    const parent = document.getElementById('product');
    parent.innerHTML = `
    <h2>${selectedProduct.name}</h2>
    <p>Price: $${selectedProduct.price}</p>
    <p>${selectedProduct.description}</p>
  `;

    const buyButton = document.createElement('input');
    buyButton.setAttribute('type', 'button');
    buyButton.setAttribute('value', 'Buy');
    buyButton.addEventListener('click', () => showBill(selectedCategory, selectedProduct));
    parent.appendChild(buyButton);
}

function getOrders() {
    document.getElementById('wrapper').innerHTML = '';
    let ordersListDiv = document.getElementById('ordersList');
    ordersListDiv.innerHTML = '';
    const orders = JSON.parse(localStorage.getItem('orders'))
    orders.forEach(function (order) {
        let orderDiv = document.createElement('div');
        orderDiv.classList.add('order');

        let orderInfo = document.createElement('p');
        orderInfo.textContent = 'Дата: ' + order.date + ', Ціна: ' + order.price + ' грн';
        orderDiv.appendChild(orderInfo);

        let orderDetails = document.createElement('p');
        orderDetails.textContent = `Order name is ${order.name}, order description is ${order.description}. Delivery info: 
        City name is ${ALL_CITIES[order.order.city]}, nova post address is ${order.order.nova_post}`;
        orderDetails.style.display = 'none';
        orderDiv.appendChild(orderDetails);

        orderDiv.addEventListener('click', function () {
            if (orderDetails.style.display === 'none') {
                orderDetails.style.display = 'block';
            } else {
                orderDetails.style.display = 'none';
            }
        });

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Видалити';
        deleteBtn.addEventListener('click', () => {
            ordersListDiv.removeChild(orderDiv);
            orders.splice(getOrderIdById(orders, order.id), 1);
            localStorage.setItem('orders', JSON.stringify(orders));
        });
        orderDiv.appendChild(deleteBtn);

        ordersListDiv.appendChild(orderDiv);
    });
}

function showBill(selectedCategory, selectedProduct) {
    let form = document.createElement("form");
    form.id = "order_form";
    form.appendChild(getLabel("Enter your FIO"))
    form.appendChild(getInputFormField("text", "pib"));
    form.appendChild(getLabel("Select city"))
    form.appendChild(getSelectFormField());
    form.appendChild(getLabel("Enter your nearest Nova Post address"))
    form.appendChild(getInputFormField("text", "nova_post"));
    form.appendChild(getLabel("Choose payment method"))
    form.appendChild(getInputFormField("radio", "payment", "b", "Online"));
    form.appendChild(getInputFormField("radio", "payment", "c", "Cash"));
    form.appendChild(getLabel("Enter amount of product"))
    form.appendChild(getInputFormField("number", "amount"));
    form.appendChild(getLabel("Enter comment for order"))
    form.appendChild(getTextAreaField("comment"));
    let button = getInputFormField("button", "order_button", "Make Order");
    button.addEventListener("click", function () {
        let uncheckedRadio = true;
        let emptyField = false;
        let form = document.getElementById("order_form");
        let order = {};
        for (let i = 0; i < form.elements.length; i++) {
            if (form.elements[i].type !== "button" && form.elements[i].type !== "radio") {
                let fieldName = form.elements[i].name;
                let fieldValue = form.elements[i].value;
                if (form.elements[i].tagName.toLowerCase() === "select") {
                    if (fieldValue === '0') {
                        emptyField = true;
                        form.elements[i].style = "background: red";
                    }
                }
                if (fieldValue === '') {
                    emptyField = true;
                    form.elements[i].style = "background: red";
                }
                order[fieldName] = fieldValue;
            } else if (form.elements[i].type === "radio" && form.elements[i].checked) {
                let fieldName = form.elements[i].name;
                let fieldValue = form.elements[i].value;
                uncheckedRadio = false;
                order[fieldName] = fieldValue;
            }
        }
        if (uncheckedRadio || emptyField) {
            alert("Please check required fields and radio buttons");
        } else {
            let orderView = {
                id: Date.now(),
                date: getCurrentTime(),
                name: selectedProduct.name,
                price: selectedProduct.price,
                description: selectedProduct.description,
                order: order
            };
            addOrderToLocalStorage(orderView);
            document.getElementById('order_form').innerHTML = '';
            showDeliveryInfo(selectedProduct, order);
        }
    });
    form.appendChild(button);
    document.getElementById('product').innerHTML = '';
    document.getElementById('products').innerHTML = '';
    document.body.appendChild(form);
}

function showDeliveryInfo(selectedProduct, order) {
    document.getElementById('product').innerHTML = '';
    document.getElementById('products').innerHTML = '';
    const selectedProductName = selectedProduct.name;
    const selectedProductPrice = selectedProduct.price;
    const cityName = ALL_CITIES[order.city];
    const pib = order.pib;
    const novaPostAddress = order.nova_post;
    const paymentMethod = ALL_PAYMENT[order.payment];

    const alertText = `Congratulate! You ordered this product:
Name: ${selectedProductName}
Price: ${selectedProductPrice}

Delivery info:
City: ${cityName}
FIO: ${pib}
Nova Post address: ${novaPostAddress}
Payment method: ${paymentMethod}`;

    alert(alertText);
}

function addOrderToLocalStorage(orderView) {

    let orders = JSON.parse(localStorage.getItem('orders'))
    if (orders === null) {
        orders = [];
    }
    orders.push(orderView);
    localStorage.setItem('orders', JSON.stringify(orders));
}
