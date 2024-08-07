/*
    Task
    Given an array, a, of size n distinct elements, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following 3 lines:

    Array is sorted in numSwaps swaps.
    where numSwaps is the number of swaps that took place.
    First Element: firstElement
    where firstElement is the first element in the sorted array.
    Last Element: lastElement
    where lastElement is the last element in the sorted array.
    Hint: To complete this challenge, you will need to add a variable that keeps a running tally of all swaps that occur during execution.
*/

const bubbleSort = (arr) => {
  let noOfSwaps = 0;

  for (let i = 0; i < arr.length; i++) {
    // Track number of elements swapped during a single array traversal
    //noOfSwaps = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        noOfSwaps += 1;
      }
    }

    // If no elements were swapped during a traversal, array is sorted
    if (noOfSwaps === 0) {
      break;
    }
  }

  return noOfSwaps;
};

function main(n, items) {
  //const n = parseInt(readLine().trim(), 10);

  const a = items
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  // Write your code here
  //console.log(a);
  const noOfSwaps = bubbleSort(a);
  /*
        Array is sorted in 5 swaps.
First Element: 1
Last Element: 4
    */
  console.log(`Array is sorted in ${noOfSwaps} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
}

main(3, "3 2 1");
