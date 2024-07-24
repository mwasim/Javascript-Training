// Get the necessary DOM elements
const resDisplay = document.getElementById("res");
const btnContainer = document.getElementById("btns");

// Add click event listeners to the buttons
btnContainer.addEventListener("click", handleButtonClick);

// Function to convert binary string to decimal number
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

// Function to convert decimal number to binary string
function decimalToBinary(decimal) {
  return decimal.toString(2);
}

// Function to perform the specified operation on two binary numbers
function performOperation(operand1, operand2, operator) {
  const num1 = binaryToDecimal(operand1);
  const num2 = binaryToDecimal(operand2);

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = Math.trunc(num1 / num2);
      break;
    default:
      result = "Invalid operator";
  }

  return decimalToBinary(result);
}

// Function to handle button clicks
function handleButtonClick(event) {
  const clickedElement = event.target;
  const buttonId = clickedElement.id;

  console.log("buttonId", buttonId);

  if (buttonId === "btnClr") {
    resDisplay.textContent = "";
  } else if (buttonId === "btnEql") {
    const expression = resDisplay.textContent;
    const { operand1, operator, operand2 } = parseExpression(expression);
    console.log(operand1, operator, operand2);
    const result = performOperation(operand1, operand2, operator);
    resDisplay.textContent = result;
  } else {
    //binary number button clicked 0, 1
    const buttonText = clickedElement.textContent;
    resDisplay.textContent += `${buttonText}`;
  }
}

function parseExpression(expression) {
  // Regular expression to match the arithmetic operator
  const operatorRegex = /[-+*/]/;

  // Find the index of the operator
  const operatorIndex = expression.search(operatorRegex);

  // Extract the operands and operator
  const operand1 = expression.slice(0, operatorIndex);
  const operator = expression.charAt(operatorIndex);
  const operand2 = expression.slice(operatorIndex + 1);

  return {
    operand1: operand1,
    operator: operator,
    operand2: operand2,
  };
}
