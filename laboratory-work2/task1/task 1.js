document.body.style.fontFamily = 'Arial';

const thElements = document.querySelectorAll("th");

thElements.forEach(function(th, index) {
    if (index % 2 === 0) {
        th.classList.add("test");
        console.log(th.classList); 
    }
});
