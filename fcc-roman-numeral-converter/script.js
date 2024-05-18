const numberInput = document.getElementById("number");
const btnConvert = document.getElementById("convert-btn");
const output = document.getElementById("output");

const onConvertClick = () => {
  let number = numberInput.value;

  if (!number || number === "") {
    output.innerText = "Please enter a valid number";
  }

  number = parseInt(number);
  if (number === -1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  }
};

btnConvert.addEventListener("click", onConvertClick);
