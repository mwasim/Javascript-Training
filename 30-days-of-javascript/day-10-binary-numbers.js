/*
    Task
    Given a base-10 integer, n, convert it to binary (base-2). Then find and print the base-10 integer denoting the maximum number of consecutive 1's in n's binary representation. When working with different bases, it is common to show the base as a subscript.

    Example
    n = 125
    The binary representation of 125 (base-10) is 11111101 (base-2). In base 10, there are 5 and 1 consecutive ones in two groups. Print the maximum, 5.

    Input Format

    A single integer, .

    Constraints

    Output Format

    Print a single base- integer that denotes the maximum number of consecutive 's in the binary representation of .

    Sample Input 1
    5

    Sample Output 1
    1

    Sample Input 2
    13

    Sample Output 2
    2
*/

const findMaxConsecutiveOnes = (n) => {
  // Convert n to binary
  const binaryNumberStr = n.toString(2);

  // Find the maximum number of consecutive 1's
  let maxConsecutiveOnes = 0;
  let currentCount = 0;
  for (let num of binaryNumberStr) {
    if (num === "1") {
      currentCount += 1;
    } else {
      maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currentCount);
      currentCount = 0;
    }
  }
  maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currentCount);

  return maxConsecutiveOnes;
};

function main() {
  const n = 13;

  const result = findMaxConsecutiveOnes(n);

  console.log(result);
}

main();
