document.addEventListener('DOMContentLoaded', function () {
    let image = document.createElement("img");
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    image.src = "photos/" + randomNumber + ".jpg";
    image.width=600;
    image.height=400;
    document.getElementById("randomImages").appendChild(image);
});