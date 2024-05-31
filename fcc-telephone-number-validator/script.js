const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const btnCheck = document.getElementById("check-btn");
const btnClear = document.getElementById("clear-btn");

function validatePhoneNumber() {
  const phoneNumber = userInput.value.trim();

  if (!phoneNumber) {
    alert("Please provide a phone number");
  }

  const countryCode = "^(1\\s?)?";
  const areaCode = "(\\([0-9]{3}\\)|[0-9]{3})";
  const spacesDashes = "[\\s\\-]?";
  const phoneNum = "[0-9]{3}[\\s\\-]?[0-9]{4}$";
  const validPhoneNumberRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNum}`
  );

  //   const validPhoneNumberRegex =
  //     /^(\+?1)?(\s|-)?\(?\d{3}\)?(?!\d\))[^\)]*[\s-]?\d{3}[\s-]?\d{4}(?!\)\-\d{3}\-\d{4})$/; ///^(\+?1)?(\s|-)?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/;

  /*
        This regular expression has the following components:

        ^ - Matches the start of the string.
        (\+?1)? - Matches an optional country code of "1" (for the U.S.).
        (\s|-)? - Matches an optional space or hyphen after the country code.
        \(?\d{3}\)? - Matches an optional area code, enclosed in parentheses if present.
        [\s-]? - Matches an optional space or hyphen after the area code.
        \d{3} - Matches the next 3 digits (the first part of the local number).
        [\s-]? - Matches an optional space or hyphen after the first 3 digits.
        \d{4} - Matches the last 4 digits (the second part of the local number).
        $ - Matches the end of the string.

        // Matches all of these phone number formats:
        "1 555-555-5555"
        "1 (555) 555-5555"
        "1(555)555-5555"
        "1 555 555 5555"
        "5555555555"
        "555-555-5555"
        "(555)555-5555"
    */

  if (validPhoneNumberRegex.test(phoneNumber)) {
    result.textContent = `Valid US number: ${phoneNumber}`;
  } else {
    result.textContent = `Invalid US number: ${phoneNumber}`;
  }
}

function clearInput() {
  //userInput.value = '';
  result.textContent = "";
}

btnCheck.addEventListener("click", validatePhoneNumber);
btnClear.addEventListener("click", clearInput);
