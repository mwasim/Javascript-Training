/*
    Task
    Given an integer, , perform the following conditional actions:

    If  is odd, print Weird
    If  is even and in the inclusive range of  to , print Not Weird
    If  is even and in the inclusive range of  to , print Weird
    If  is even and greater than , print Not Weird
*/

const isInRange = (num, min, max) => {
  return num >= min && num <= max;
};

function main(N) {
  //const N = parseInt(readLine().trim(), 10);

  const isEvenNumber = N % 2 === 0;
  const isOddNumber = !isEvenNumber;

  if (isOddNumber) {
    console.log("Weird");
  } else if (isEvenNumber && isInRange(N, 2, 5)) {
    console.log("Not Weird");
  } else if (isEvenNumber && isInRange(N, 6, 20)) {
    console.log("Weird");
  } else if (isEvenNumber && N > 20) {
    console.log("Not Weird");
  }
}

main(3);
main(24);
