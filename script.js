console.log("Hello World");

let previousNum = null;
let currentNum = null;
let currentOperator = "kundi";

const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");
display.textContent = "0";

buttons.addEventListener("click", (event) => {
  // Checks if Numbers are pressed
  if (event.target.className == "number") {
    updateNumber(event.target.textContent);
    console.log(event.target.textContent);
    display.textContent = event.target.textContent;
  }
  // Checks if Operators are pressed
  if (event.target.className == "operator") {
    currentOperator = event.target.textContent;
    console.log(event.target.textContent);
    display.textContent = previousNum;
  }

  // Checks if other Buttons Press
  if (event.target.className == "other") {
    handleOtherButtons(event.target.textContent);
  }
  console.log(event.target.className);
});

function updateNumber(pressedNumber) {
  // Check if it is the First Time
  if (previousNum === null && currentNum === null)
    previousNum = parseFloat(pressedNumber);
  // Other than First time
  else {
    currentNum = parseFloat(pressedNumber);
    calculate();
  }
}

function calculate() {
  if (currentOperator === "+") previousNum = previousNum + currentNum;
  else if (currentOperator === "-") previousNum = previousNum - currentNum;
  else if (currentOperator === "*") previousNum = previousNum * currentNum;
  else if (currentOperator === "/") previousNum = previousNum / currentNum;
  else if (currentOperator === "%") previousNum = previousNum % currentNum;

  console.log(previousNum);
}

function handleOtherButtons(thatButton) {
  if (thatButton === "AC") {
    previousNum = null;
    currentNum = null;
    display.textContent = "0";
  }

  // other COde I will write Later;
}
