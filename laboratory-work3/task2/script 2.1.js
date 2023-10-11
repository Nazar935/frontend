const paragraphsDiv = document.querySelector("#paragraphs");
const paragraphs = paragraphsDiv.querySelectorAll("p");
const characterCounts = [];
paragraphs.forEach(paragraph => 
    {
    const text = paragraph.innerText;
    const characterCount = text.length;
    characterCounts.push(characterCount);
});
console.log(characterCounts);
