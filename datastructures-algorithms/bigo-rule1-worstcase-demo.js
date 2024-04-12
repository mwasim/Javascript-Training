/*
RULE-1: Worst Case:
    When calculating Big O, we always think about the worst case.
    EXAMPLE: 
    In findNemo example, let's say loop executes 10 times to find nemo, but nemo is found on 4th iteration, and we exist the loop. 
    Still, in the worst case, nemo could be the last item (10th item).
*/

const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("running...");
    if (array[i] === "nemo") {
      console.log("Found NEMO!");

      //Although we're breaking out of the loop, and it could be n(1), but in the worst case, it's O(n)
      //When nemo is the first item in the array, it's Big O = O(1)
      //When nemo is the last item in the array, it's Big O = O(n)
      //But based on the Worst Case Rule, we always think about the Worst Case, which is O(n)
      break;
    }
  }
}

findNemo(everyone);
