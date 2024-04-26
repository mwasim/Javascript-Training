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
//console.log(`Before Sort (insertionSort)`, numbers);
insertionSort(numbers);
//console.log(`After Sort (insertionSort)`, numbers);
