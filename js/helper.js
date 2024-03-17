
function getInputFormField(type, name, value, text) {
    let p = document.createElement("p");
    let input = document.createElement("input");
    input.name = name;
    input.type = type;
    if (value) {
        input.value = value;
    }
    p.appendChild(input);

    if (text) {
        p.appendChild(document.createTextNode(text));
    }
    return p;
}

function getSelectFormField() {
    let p = document.createElement("p");
    let select = document.createElement("select");
    select.name = "city";
    let option0 = document.createElement("option");
    option0.value = "0";
    option0.textContent = "Select city";
    option0.selected = true;
    select.appendChild(option0);

    let option1 = document.createElement("option");
    option1.value = "1";
    option1.textContent = "Kyiv";
    select.appendChild(option1);

    let option2 = document.createElement("option");
    option2.value = "2";
    option2.textContent = "Kharkiv";
    select.appendChild(option2);

    let option3 = document.createElement("option");
    option3.value = "3";
    option3.textContent = "Odesa";
    select.appendChild(option3);
    p.appendChild(select);
    return p;
}
function getTextAreaField(name){
    let p = document.createElement("p");
    p.className = name;
    let text = document.createElement("textarea");
    text.name = name;
    p.appendChild(text);
    return p;
}
function getLabel(text) {
    let label = document.createElement("label");
    label.textContent = text;
    return label;
}
function getOrderIdById(orders,id) {
    return orders.findIndex(order => order.id === id);
}
function getCurrentTime(){
    const currentDate = new Date();

    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}