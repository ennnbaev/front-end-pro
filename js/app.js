document.addEventListener('DOMContentLoaded', function () {
    const tbody = document.getElementById("myTableBody");
    for (let i = 1; i <= 10; i++) {
        let line = document.createElement("tr");
        for (let j = 1; j <= 10; j++) {
            let column = document.createElement("td");
            const num = (i - 1) * 10 + j;
            column.textContent = num;
            line.appendChild(column);
        }
        tbody.appendChild(line);
    }
})