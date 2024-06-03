const printAllFibonnaciNumbersUsingForLoop = (limit) => {
  let prev2 = 0;
  let prev1 = 1;

  let output = ``;
  output += `${prev2}\n`;
  output += `${prev1}\n`;

  for (let i = 2; i < limit; i++) {
    let current = prev2 + prev1;
    output += `${current}\n`;
    prev2 = prev1;
    prev1 = current;
  }

  console.log(output);
};

const printAllFibonnaciNumbersUsingRecursion = (limit, prev2, prev1) => {
  if (limit === 0) {
    return;
  }

  if (prev2 === 0) {
    console.log(prev2);
    console.log(prev1);
  }

  let current = prev2 + prev1;
  console.log(current);
  printAllFibonnaciNumbersUsingRecursion(limit - 1, prev1, current);
};

//Finding The nth Fibonacci Number Using Recursion
const findNthFibonacciNumberUsingRecursion = (n) => {
  if (n <= 1) {
    return n;
  }

  /*
    Notice that this recursive method calls itself two times, not just one. This makes a huge difference in how the program will actually run on our computer. 
  */
  return (
    findNthFibonacciNumberUsingRecursion(n - 1) +
    findNthFibonacciNumberUsingRecursion(n - 2)
  );
};

/* 
  Create the 20 first Fibonacci numbers.
*/
//printAllFibonnaciNumbersUsingForLoop(20);

/*
  The first two numbers of the Fibonacci sequence are 0 and 1. And these are printed as is, so, we pass limit = 18 to print remaining 18 numbers and total of 20 numbers.
*/
//printAllFibonnaciNumbersUsingRecursion(18, 0, 1);

/* 
This formula uses a 0-based index. This means that to generate the 20th Fibonacci number, we must write 
findNthFibonacciNumberUsingRecursion(19)
*/
const nthFibonacci = findNthFibonacciNumberUsingRecursion(19);
console.log(nthFibonacci);
