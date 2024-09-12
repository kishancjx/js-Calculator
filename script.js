let operatorPressed = false;
let previousNum = null;
let currentNum = null;
let currentOperator = "kundi";
let numberOnDisplay = "";
const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

const clear = () => (display.textContent = "");

buttons.addEventListener("click", (event) => {
  // Checks if Numbers are pressed
  if (event.target.className == "number") {
    handleNumberClicked(event.target);
  }
  // Checks if Operators are pressed
  if (event.target.className == "operator") {
    operatorPressed = true;
    calculate();
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

function handleNumberClicked(numButtons) {
  if (operatorPressed) {
    clear();
    operatorPressed = false;
    display.textContent += numButtons.textContent;
  } else display.textContent += numButtons.textContent;

  console.log(numButtons.textContent);
}

function calculate() {
  numberOnDisplay = parseFloat(display.textContent);

  //  Check if it is the First Time
  if (previousNum === null && currentNum === null)
    previousNum = parseFloat(numberOnDisplay);
  //  Other than First time
  else {
    currentNum = parseFloat(numberOnDisplay);

    if (currentOperator === "+") previousNum = previousNum + currentNum;
    else if (currentOperator === "-") previousNum = previousNum - currentNum;
    else if (currentOperator === "*") previousNum = previousNum * currentNum;
    else if (currentOperator === "/") previousNum = previousNum / currentNum;
    else if (currentOperator === "%") previousNum = previousNum % currentNum;

    console.log(previousNum);
  }
}

function handleOtherButtons(thatButton) {
  if (thatButton === "AC") {
    previousNum = null;
    currentNum = null;
    display.textContent = "";
  }

  // other COde I will write Later;
}
