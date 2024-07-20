/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function
  let uniqueNumbers = new Set(nums);

  //sort the unique numbers array in descending order
  let sortedNumbers = Array.from(uniqueNumbers).sort((a, b) => b - a);

  return sortedNumbers[1];
}

console.log(getSecondLargest([2, 3, 6, 6, 5]));
