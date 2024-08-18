/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a) {
  // Write your code here
  //JavaScript funciton a.reverse() can be used
  let reversedArr = [];
  for (let i = a.length - 1; i >= 0; i--) {
    reversedArr.push(a[i]);
    //console.log(a[i]);
  }

  return reversedArr;
}

function reverseArrayModifyingOriginal(a) {
  let left = 0;
  let right = a.length - 1;

  while (left < right) {
    //console.log(`left: ${a[left]}, right: ${a[right]}`);
    // Swap the elements at the left and right indices
    [a[left], a[right]] = [a[right], a[left]];
    //console.log(`AFTER SWAP: left: ${a[left]}, right: ${a[right]}`);

    left++;
    right--;
  }

  return a;
}

function main_reverseArray(integerArray) {
  //const arrCount = integerArray.length;

  console.log("original input array: ", integerArray + "\n");
  console.log(
    "********** REVERSE ARRAY BY NOT MODIFYING THE ORIGINAL ARRAY **************"
  );
  const res = reverseArray(integerArray);
  console.log(res.join(" ") + "\n");

  console.log(
    "********** REVERSE ARRAY BY MODIFYING THE ORIGINAL ARRAY **************"
  );
  const res2 = reverseArrayModifyingOriginal(integerArray);
  console.log(res2.join(" ") + "\n");
}

const inputArr = [1, 4, 3, 2];

main_reverseArray(inputArr);
