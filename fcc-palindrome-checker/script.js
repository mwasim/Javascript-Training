const textInput = document.getElementById("text-input");
const buttonCheck = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = () => {
  const text = textInput.value.trim();

  if (!text) {
    alert("Please input a value");
    return;
  }

  const regex = /[\W_]/g; //// or  /[^A-Za-z0-9]/g;
  const sanitizedInput = text.toLowerCase().replace(regex, ""); //remove non-alphnumeric characters

  console.log("Sanitized str: " + sanitizedInput);

  //https://stackoverflow.com/questions/14813369/palindrome-check-in-javascript
  const isPalindrome =
    sanitizedInput == sanitizedInput.split("").reverse().join("");

  let output = `<strong>${text}</strong> is ${
    !isPalindrome ? "not " : ""
  }a palindrome`;

  result.innerHTML = output;
};

buttonCheck.addEventListener("click", checkPalindrome);
