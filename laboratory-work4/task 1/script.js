function createTable() 
{
    let table = document.getElementById("table");
    let rows = document.getElementById("rows");
    let cols = document.getElementById("cols");
    table.innerHTML = "";
    for (let i = 0; i < rows.value; ++i) {
        let row = "<tr>";
        for (let j = 0; j < cols.value; ++j) {
            let cell = "<td></td>";
            row += cell;
        }
        row += "</tr>";
        table.innerHTML += row;
    }
}

function clearForm()
 {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(function (input) {
        if (input.type !== "radio" && input.type !== "checkbox") {
            input.value = "";
        } else {
            input.checked = false;
        }
    });
}
