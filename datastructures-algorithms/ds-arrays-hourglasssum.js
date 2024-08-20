/*
    Task
    Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.

    Example
    In the array shown above, the maximum hourglass sum is 7 for the hourglass in the top left corner.

    Input Format
    There are 6 lines of input, where each line contains 6 space-separated integers that describe the 2D Array A.

    Output Format
    Print the maximum hourglass sum in A.
*/

function hourglassSum(arr) {
  let maxSum = -Infinity;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = 0;
      /*  
      console.log(
        `arr[i][j] + arr[i][j + 1] + arr[i][j + 2]; => ${arr[i][j]} + ${
          arr[i][j + 1]
        } + ${arr[i][j + 2]};`
      );
      console.log(
        `arr[i + 1][j + 1]; => ${arr[i + 1][j + 1]};
        };`
      );
      console.log(
        `arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2] => ${
          arr[i + 2][j]
        } + ${arr[i + 2][j + 1]} + ${arr[i + 2][j + 2]}`
      );
        console.log("\n--------------------------\n");
        */
      sum += arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      sum += arr[i + 1][j + 1];
      sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
}

// function main(input) {
//   let arr = Array(6);

//   for (let i = 0; i < 6; i++) {
//     arr[i] = input
//       .replace(/\s+$/g, "")
//       .split(" ")
//       .map((arrTemp) => parseInt(arrTemp, 10));
//   }

//   console.log(arr);
// }

let input = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const result = hourglassSum(input);
console.log(result);
