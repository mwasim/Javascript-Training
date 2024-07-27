/*
    Task
Given a string, S, of length N that is indexed from 0 to N-1, print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line (see the Sample below for more detail).

Note: 0 is considered to be an even index.

Example
s = abcdef

Print abc def

Input Format
The first line contains an integer, T (the number of test cases).
Each line i of the T subsequent lines contain a string, .

Constraints
1 <= T <= 10
2 <= length of S <= 10000

Output Format

For each String Sj (where 0<=j<=T-1), print 's even-indexed characters, followed by a space, followed by Sj's odd-indexed characters.

Sample Input:
2
Hacker
Rank


Sample Output:
Hce akr
Rn ak

*/

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
