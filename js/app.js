function createDiv() {
    let div = document.createElement("div");
    div.textContent = "Hey, programmer";
    div.id = "cratedDiv";
    document.getElementById("wrapper").appendChild(div);
}

function removeDiv() {
    let parentDiv = document.getElementById("wrapper");
    parentDiv.removeChild(document.getElementById("cratedDiv"));
    //parentDiv.innerHTML = ''; also can use
}

document.getElementById("myInputField").addEventListener("focus", createDiv);
document.getElementById("myInputField").addEventListener("blur", removeDiv);