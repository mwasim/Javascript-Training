/*
// => The pseudocode for insertion sort

    INSERTION-SORT(A, n)
    for i = 2 to n
        key = A[i]
    // Insert A[i] into the sorted subarray A[1 : i – 1].
    j = i – 1
    while j > 0 and A[j] > key
        A[j + 1] = A[j]
        j = j – 1
    A[j + 1] = key
*/

const insertionSort = (array) => {
  //we're starting from index 1 (not zero) because, we don't need to sort the first element which is at ZERO index
  //And we need at least two elements to compare and sort for example array[1] and array[0]
  console.log("Iteration 0: ", array);
  for (let i = 1; i < array.length; i++) {
    const current = array[i]; //store the current element in a temporary variable e.g. current or key

    //Insert A[i] into the sorted subarray A[1 : i – 1].
    let j = i - 1; //when i = 1, i-1 => 0, so we compare first two elements
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j]; //shift element at index j to the index j+1 meaning shift element to the right
      j--;
    }

    //when j = -1, j+1 = 0 (first item index)
    array[j + 1] = current;

    console.log(`Iteration ${i}: `, array);
  }
};

const numbers = [5, 2, 4, 6, 1, 3];
console.log(`ARRAY TO SORT: `, numbers);
insertionSort(numbers);
//console.log(`After Sort (insertionSort)`, numbers);

const numbers2 = [31, 41, 59, 26, 41, 58];
console.log(`ARRAY TO SORT: `, numbers2);
insertionSort(numbers2);

/*
  2.1-3: 
  Rewrite the INSERTION-SORT procedure to sort into monotonically 
  decreasing instead of monotonically increasing order.
*/

const insertionSortMonotonicallyDecreasing = (array) => {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];

    let j = i - 1;
    while (j >= 0 && array[j] < current) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;

    console.log(`Iteration ${i}: `, array);
  }
};

const numbers3 = [5, 2, 4, 6, 1, 3];
console.log(`Array to sort into monotonically decreasing order: `, numbers3);
insertionSortMonotonicallyDecreasing(numbers3);
