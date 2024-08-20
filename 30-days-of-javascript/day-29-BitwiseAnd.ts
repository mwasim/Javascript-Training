/*
    Given set S = {1,2,3, ..., N}. Find two integers, A and B (where A < B), from set S such that the value of A&B is the maximum possible and also less than a given integer, K. In this case, & represents the bitwise AND operator.

    Function Description
    Complete the bitwiseAnd function in the editor below.

    bitwiseAnd has the following paramter(s):
    - int N: the maximum integer to consider
    - int K: the limit of the result, inclusive

    Returns
    - int: the maximum value of A&B within the limit.

    Input Format
    The first line contains an integer, , the number of test cases.
    Each of the T subsequent lines defines a test case as 2 space-separated integers, N and K, respectively.


    Sample Input

    STDIN   Function
    -----   --------
    3       T = 3
    5 2     N = 5, K = 2
    8 5     N = 8, K = 5
    2 2     N = 8, K = 5


    Sample Output
    1
    4
    0
*/

/*
 * Complete the 'bitwiseAnd' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER N
 *  2. INTEGER K
 */

function bitwiseAnd(N: number, K: number): number {
  // Write your code here
  let maxAnd: number = 0;
  for (let i: number = 1; i <= N; i++) {
    for (let j: number = i + 1; j <= N; j++) {
      const bitAnd: number = i & j;
      if (bitAnd < K && bitAnd > maxAnd) {
        maxAnd = bitAnd;
      }
    }
  }
  return maxAnd;
}

type InputItem = {
  count: number;
  limit: number;
};

function main_bitwiseAnd() {
  const t: number = 3;

  const inputArr: InputItem[] = [
    { count: 5, limit: 2 },
    { count: 8, limit: 5 },
    { count: 2, limit: 2 },
  ];

  for (let tItr: number = 0; tItr < t; tItr++) {
    // const firstMultipleInput: string[] = readLine()
    //   .replace(/\s+$/g, "")
    //   .split(" ");

    const count: number = inputArr[tItr].count;

    const lim: number = inputArr[tItr].limit; //parseInt(firstMultipleInput[1], 10);

    const res: number = bitwiseAnd(count, lim);

    console.log(res + "\n");
  }

  //ws.end();
}

main_bitwiseAnd();