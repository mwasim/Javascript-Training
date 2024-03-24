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

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
  let t1 = performance.now();

  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds");
}

//findNemo(nemo);
//findNemo(everyone);
findNemo(largeArray);
