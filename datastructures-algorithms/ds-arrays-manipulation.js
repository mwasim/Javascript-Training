/*
    Given Problem:
    Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in the array.

    Example
    n = 10
    queries = [[1,5,3][4,8,7][6,9,1]]

    Queries are interpreted as follows:
        a b k
        1 5 3
        4 8 7
        6 9 1
        
    Add the values of k between the indices a and b inclusive:

    index->	 1 2 3  4  5 6 7 8 9 10
        [0,0,0, 0, 0,0,0,0,0, 0]
        [3,3,3, 3, 3,0,0,0,0, 0]
        [3,3,3,10,10,7,7,7,0, 0]
        [3,3,3,10,10,8,8,8,1, 0]
        
    The largest value is 10 after all operations are performed.	
*/

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
  // Write your code here
  //   console.log("n", n);
  //   console.log("queries", queries);

  //Code optimized using prefix sum approach
  // Create an array of size n+1, initialized with 0s
  let arr = new Array(n + 1).fill(0);

  // Loop through each query
  for (let query of queries) {
    let [a, b, k] = query;
    arr[a - 1] += k;
    arr[b] -= k;
  }

  console.log(arr);

  // Calculate the prefix sum
  let max = 0;
  let current = 0;
  for (let i = 0; i < n; i++) {
    current += arr[i];
    max = Math.max(max, current);
  }

  return max;

  /*
  // Create an array of size n, initialized with 0s
  const arr = new Array(n).fill(0);

  // Loop through each query
  for (let query of queries) {
    // Extract the values from the query
    const [a, b, k] = query;

    // Increment the values in the range [a, b] by k
    for (let i = a - 1; i < b; i++) {
      arr[i] += k;
    }
  }

  const result = Math.max(...arr);

  return result;*/
}

function main_arrayManipulation(input) {
  const inputLines = input.split("\n");
  const firstMultipleInput = inputLines[0].replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const m = parseInt(firstMultipleInput[1], 10);

  let queries = Array(m);

  for (let i = 1; i <= m; i++) {
    queries[i - 1] = inputLines[i]
      .replace(/\s+$/g, "")
      .split(" ")
      .map((queriesTemp) => parseInt(queriesTemp, 10));
  }

  const result = arrayManipulation(n, queries);

  console.log(result + "\n");

  //ws.end();
}

const input = "5 3\n1 2 100\n2 5 100\n3 4 100";
main_arrayManipulation(input);
