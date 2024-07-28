/*
    Task
    Given an array, A, of N integers, print A's elements in reverse order as a single line of space-separated numbers.

    Example
    A = [1, 2, 3, 4]
    Print 4 3 2 1. Each integer is separated by one space.
*/

function main() {
  //const n = 4;

  const arr = "1 4 3 2"
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = arr.reverse().join(" ");
  console.log(result);
}

main();
