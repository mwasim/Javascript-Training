/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
  // Write your code here
  /*
        Step-1: Normalize
        Step-2: Rotate
    */
  //Step-1: // Normalize the rotation amount to be within the array length
  //console.log(4 % 5);
  d = d % arr.length;
  //console.log("d", d);

  //Step-2: Perform the rotation
  return [...arr.slice(d), ...arr.slice(0, d)];
  //   for (let i = 0; i < d; i++) {
  //     const shiftedElement = arr.shift();
  //     arr.push(shiftedElement);
  //     //console.log(arr.shift());
  //   }
  //   return arr;
}

function main_leftRotation(input) {
  //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const inputLines = input.split("\n");

  const firstMultipleInput = inputLines[0].replace(/\s+$/g, "").split(" "); //readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const d = parseInt(firstMultipleInput[1], 10);

  const arr = inputLines[1]
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  //console.log("arr", arr);

  const result = rotateLeft(d, arr);

  console.log(result.join(" ") + "\n");

  //ws.end();
}

const input = "5 4\n1 2 3 4 5";
main_leftRotation(input);
