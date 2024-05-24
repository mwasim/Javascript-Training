const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));

  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
  document.querySelector("#range").textContent = range;
};

/*
    EXAMPLE: Finding the median for odd and even arrays

    const testArr1 = [1, 2, 3, 4, 5]; //Odd example array
    const testArr2 = [1, 2, 3, 4, 5, 6]; //Even example array

    const isEven = testArr2.length % 2 === 0;
    console.log(isEven);

    //For odd number of items the array, middle item is the median
    const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
    console.log(oddListMedian);

    //For even numberof items of the array, mean of the middle two items is the median
    const evenListMedian = getMean([testArr2[testArr2.length / 2 - 1], testArr2[testArr2.length / 2]]);
    console.log(evenListMedian);
*/

const getMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);
  const arrayLength = sorted.length;

  const isEven = arrayLength % 2 === 0;

  let median = 0;
  if (isEven) {
    median = getMean([sorted[arrayLength / 2 - 1], sorted[arrayLength / 2]]);
  } else {
    median = sorted[Math.floor(arrayLength / 2)];
  }

  return median;
};

const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  });
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );

  return mode;
};

const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
};
