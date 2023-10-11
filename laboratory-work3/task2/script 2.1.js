document.addEventListener("DOMContentLoaded", function() {
    const tables = document.querySelectorAll(".table");
    
    tables.forEach(table => {
        const tds = table.querySelectorAll("td");
        
        tds.forEach((td, index) => {
            if (index % 2 !== 0) {
                td.classList.add("selected");
            }
        });
    });
});
