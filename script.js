let num1;
let num2;
let result;
let operation;

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "Error";
  }
}
function operate(num1, num2, operation) {
  switch (operation) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
    default:
      return 0;
  }
}
//Button Selections
const numBtn = document.querySelectorAll(".btn-num");
const screen = document.querySelector(".screen-text");
const clearBtn = document.querySelector(".clear");
const operationBtns = document.querySelectorAll(".btn-operations");
const equalBtn = document.querySelector(".equal");

// Number Buttons Events
numBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (screen.textContent.length < 15 && screen.textContent == 0) {
      screen.textContent = btn.textContent;
    } else if (screen.textContent.length < 15 && result === "e") {
      screen.textContent = btn.textContent;
      result = null;
    } else if (screen.textContent.length < 15) {
      screen.textContent += btn.textContent;
    }
  });
});

// Clear Button Events
clearBtn.addEventListener("click", () => {
  num1 = 0;
  num2 = 0;
  operation = "";
  screen.textContent = "0";
});

//Operation Button Events
operationBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const op = e.target.textContent;
    if (screen.textContent !== "") {
      switch (op) {
        case "+":
          num1 = parseFloat(screen.textContent);
          num2 = 0;
          operation = "add";
          screen.textContent = "";
          break;
        case "-":
          num1 = parseFloat(screen.textContent);
          num2 = 0;
          operation = "subtract";
          screen.textContent = "";
          break;
        case "x":
          num1 = parseFloat(screen.textContent);
          num2 = 0;
          operation = "multiply";
          screen.textContent = "";
          break;
        case "/":
          num1 = parseFloat(screen.textContent);
          num2 = 0;
          operation = "divide";
          screen.textContent = "";
          break;
      }
    }
  });
});
equalBtn.addEventListener("click", () => {
  if (screen.textContent !== "") {
    console.log("sonunda!");
    num2 = parseFloat(screen.textContent);
    console.log(num1, num2, operation);
    result = operate(num1, num2, operation);
    screen.textContent = result.toString();
    num1 = result;
    num2 = null;
    operation = "";
    result = "e";
  }
});
