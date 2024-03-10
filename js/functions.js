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
            showDeliveryInfo(selectedProduct, order);
        }
    });
    form.appendChild(button);
    document.getElementById('product').innerHTML = '';
    document.getElementById('products').innerHTML = '';
    document.body.appendChild(form);
}

function showDeliveryInfo(selectedProduct, order) {
    document.body.innerHTML = '';
    let h2 = document.createElement("h2");
    h2.textContent = `Congratulate! You ordered this product ${selectedProduct.name} , price is ${selectedProduct.price}. `;
    document.body.appendChild(h2);
    let h3 = document.createElement("h3");
    h3.textContent = `Delivery info: City - ${ALL_CITIES[order.city]}; FIO - ${order.pib}; Nova Post address - ${order.nova_post}; Payment method - ${ALL_PAYMENT[order.payment]}`;
    document.body.appendChild(h3);
}
