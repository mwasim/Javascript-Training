/* 
  Big O and Scalability
  - Big O is a way to measure the performance of an algorithm
  - We simply mean when we grow bigger and bigger with our input, how much is the Algorithm slows down. The slower it slows down the better it is.
*/
const nemo = ["nemo"];
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

let largeArray = new Array(10000).fill("nemo");

/*
  The Big-O notation describes the worst-case running time of a program. We compute the Big-O of an algorithm by counting how many iterations an algorithm will take in the worst-case scenario with an input of N. We typically consult the Big-O because we must always plan for the worst case.
  
  This function findNemo takes more time as the size of the passed array grows.
  For example, for input Array sizes,
  1 => O(1)
  2 => O(2)
  3 => O(3)
  :
  n => O(n) --> Linear Time [Most common] (n means number of inputs or number of items in the array)

  Big O does not measure the algorith in seconds, instead we focus how quickly our run-time grows based on the size of the input
*/
function findNemo(array) {
  //let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
  //let t1 = performance.now();

  /* 
    Instead of using the time to measure the performance of the algorithm, we can just calculate how many operations computer has to perform. Because each operation takes time on the computer.

  - Big O allows us to measure how many steps it takes in a function.
  */
  //console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds");
}

//findNemo(nemo);
//findNemo(everyone);
findNemo(largeArray);
