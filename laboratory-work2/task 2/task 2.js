let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;
let selectedCharacters = text[12] + text[6] + text[18] + text[25];
console.log(selectedCharacters);
let lowerCaseText = text.toLowerCase();
console.log(lowerCaseText);
let positionsOfIn = [];
let searchStr = "in";
let pos = text.indexOf(searchStr);
while (pos !== -1) {
  positionsOfIn.push(pos);
  pos = text.indexOf(searchStr, pos + 1);
}
console.log(positionsOfIn);

let wordsArray = text.split(" ");
console.log(wordsArray);

let reversedText = text.split("").reverse().join("");
console.log(reversedText);

function ucFirst(txt) {
  if (txt.length === 0) return txt;
  return txt[0].toUpperCase() + txt.slice(1);
}
console.log(ucFirst('some text'));
