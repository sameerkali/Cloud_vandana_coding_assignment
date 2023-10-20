let currentInput = "";
let previousOperator = "";

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", buttonClick);
}

function buttonClick(event) {
  const buttonValue = event.target.textContent;

  if (isNaN(buttonValue)) {
    handleOperator(buttonValue);
  } else {
    handleNumber(buttonValue);
  }
}

function handleNumber(number) {
  currentInput += number;
  display.textContent = currentInput;
}

function handleOperator(operator) {
  if (currentInput !== "") {
    if (previousOperator !== "") {
      calculate();
    }

    previousOperator = operator;
    currentInput = "";
  }
}

function calculate() {
  const currentValue = parseFloat(currentInput);
  const previousValue = parseFloat(display.textContent);

  switch (previousOperator) {
    case "+":
      display.textContent = previousValue + currentValue;
      break;
    case "-":
      display.textContent = previousValue - currentValue;
      break;
    case "*":
      display.textContent = previousValue * currentValue;
      break;
    case "/":
      display.textContent = previousValue / currentValue;
      break;
    case "%":
      display.textContent = previousValue % currentValue;
      break;
  }

  previousOperator = "";
}
