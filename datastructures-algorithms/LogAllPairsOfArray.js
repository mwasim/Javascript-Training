/*
    Common interview question:
        Log all pairs of array
    EXAMPLE:
        We've an array = [1,2,3,4,5]
        We need to log all pairs like,
             [1,2],[1,2],[1,3],[1,4],[1,5]
        then [2,1],[2,2],[2,3],[2,4],[2,5] and so on.
*/
//Log all pairs of array

const boxes = ["a", "b", "c", "d", "e"];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes);
