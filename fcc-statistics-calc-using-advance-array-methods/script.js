const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));

  const mean = getMean(numbers);
  const median = getMedian(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
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
