/*
    Given Task/Problem,

    Declare a 2-dimensional array, arr, of n empty arrays. All arrays are zero indexed.
    Declare an integer, lastAnswer, and initialize it to 0.

    There are 2 types of queries, given as an array of strings for you to parse:

    Query: 1 x y
    Let idx = ((x XOR lastAnswer)%n).
    Append the integer y to arr[idx].

    Query: 2 x y
    Let idx = ((x XOR lastAnswer)%n).
    Assign the value arr[idx]y%size(arr[idx]) to lastAnswer.
    Store the new value of lastAnswer to an answers array.

    Note:  is the bitwise XOR operation, which corresponds to the ^ operator in most languages.
    Finally, size(arr[idx]) is the number of elements in arr[idx]

    Function Description
    Complete the dynamicArray function below.

    dynamicArray has the following parameters:
    - int n: the number of empty arrays to initialize in arr
    - string queries[q]: query strings that contain 3 space-separated integers

    Returns
    int[]: the results of each type 2 query in the order they are presented

    Sample Input
    2 5
    1 0 5
    1 1 7
    1 0 3
    2 1 0
    2 1 1

    Sample Output
    7
    3
*/

/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
  // Write your code here
  // Declare a 2-dimensional array, arr, of n empty arrays
  let arr = Array.from({ length: n }, () => []);
  let lastAnswer = 0;
  let answers = [];

  for (let query of queries) {
    let [queryType, x, y] = query;
    let idx = (x ^ lastAnswer) % n;

    if (queryType === 1) {
      // Append the integer y to arr[idx]
      arr[idx].push(y);
    } else {
      // Assign the value arr[idx][y % size(arr[idx])] to lastAnswer
      lastAnswer = arr[idx][y % arr[idx].length];
      answers.push(lastAnswer);
    }
  }

  return answers;
}

function main_dynamicArrays(input) {
  //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const inputLines = input.split("\n");
  const firstMultipleInput = inputLines[0].replace(/\s+$/g, "").split(" "); //readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const q = parseInt(firstMultipleInput[1], 10);

  let queries = Array(q);

  for (let i = 0; i < q; i++) {
    queries[i] = inputLines[i + 1]
      .replace(/\s+$/g, "")
      .split(" ")
      .map((queriesTemp) => parseInt(queriesTemp, 10));
    // queries[i] = readLine()
    //   .replace(/\s+$/g, "")
    //   .split(" ")
    //   .map((queriesTemp) => parseInt(queriesTemp, 10));
  }

  const result = dynamicArray(n, queries);

  console.log(result.join("\n") + "\n"); //TODO: uncomment this line

  //ws.end();
}

const input = "2 5\n1 0 5\n1 1 7\n1 0 3\n2 1 0\n2 1 1";
main_dynamicArrays(input);
