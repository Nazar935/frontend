const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const button = header.querySelector('.toggle-button');

    header.addEventListener('click', () => {
        item.classList.toggle('active');

        
        if (item.classList.contains('active')) {
            button.textContent = '-';
        } else {
            button.textContent = '+';
        }
    });
});
