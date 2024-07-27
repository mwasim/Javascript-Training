function processData(input) {
  //Enter your code here
  const splitLines = input.split(/\r?\n/);
  const noOfTestCases = Number(splitLines[0]);

  let counter = 0;
  while (counter <= noOfTestCases) {
    counter++;
    if (counter <= noOfTestCases) printResult(splitLines[counter]);
  }
}

const printResult = (input) => {
  let evenIndexStr = "";
  let oddIndexStr = "";

  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      // is even index?
      evenIndexStr += input[i];
    } else {
      oddIndexStr += input[i];
    }
  }

  console.log(`${evenIndexStr} ${oddIndexStr}`);
};

processData("2\nHacker\nRank");
