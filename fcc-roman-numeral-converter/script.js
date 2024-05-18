const numberInput = document.getElementById("number");
const btnConvert = document.getElementById("convert-btn");
const output = document.getElementById("output");

const arabicArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanArray = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];

const onConvertClick = () => {
  let number = parseInt(numberInput.value);

  const numberRegex = /^(0|[1-9]\d*)$/; //Test this regular express here - https://regex101.com/r/b7gBxR/1

  if (number < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }

  if (number >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  if (!numberRegex.test(number)) {
    output.innerText = "Please enter a valid number";
    return;
  }

  let romanNumeral = "";
  let i = 0;

  while (number > 0) {
    //console.log(`number: ${number}`);
    if (arabicArray[i] <= number) {
      romanNumeral += romanArray[i];
      //console.log(`romanNumeral: ${romanNumeral}`);
      number -= arabicArray[i];
      //console.log(`number: ${number}`);
    } else {
      i++;
    }

    //console.log(`i: ${i}`);
  }

  output.innerText = romanNumeral;
};

btnConvert.addEventListener("click", onConvertClick);
