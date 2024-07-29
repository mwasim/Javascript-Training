/*
    Function Description
Complete the factorial function in the editor below. Be sure to use recursion.

factorial has the following paramter:

int n: an integer
Returns

int: the factorial of n
Note: If you fail to use recursion or fail to name your recursive function factorial or Factorial, you will get a score of 0.

Input Format
A single integer,  (the argument to pass to factorial).

Constraints
Your submission must contain a recursive function named factorial.

Sample Input
3

Sample Output
6
*/

function factorial(n) {
  // Write your code here
  if (n <= 1) return 1;

  return n * factorial(n - 1);
}

function main() {
  const n = 3;

  const result = factorial(n);

  console.log(result);
}

main();
