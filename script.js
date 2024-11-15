let num1;
let num2;
let operation;

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multipy(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function operate(num1, num2, operation) {
  switch (operation) {
    case "add":
      add(num1, num2);
      break;
    case "subtract":
      subtract(num1, num2);
      break;
    case "multiply":
      multipy(num1, num2);
      break;
    case "divide":
      divide(num1, num2);
      break;
    default:
  }
}
//Button Selections
const numBtn = document.querySelectorAll(".btn-num");
const screen = document.querySelector(".screen-text");
const clearBtn = document.querySelector(".clear");
let screenText = "";
// Number Buttons Events
numBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (screenText.length < 15) {
      screenText += btn.textContent;
      console.log(btn.textContent);
      screen.textContent = screenText;
      num1 = screenText;
    }
  });
});
// Clear Button Events
clearBtn.addEventListener("click", () => {
  num1 = 0;
  textContent = "";
  screen.textContent = 0;
});
