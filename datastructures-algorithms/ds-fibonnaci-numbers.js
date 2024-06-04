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

const fibonnaciSequenceUsingForLoop = (n) => {
  let prev2 = 0; //Time complexity = O(1)
  let prev1 = 1; //Time complexity = O(1)
  
  console.log(`${prev2}\n`);
  console.log(`${prev1}\n`);

  for (let i = 2; i < n; i++) { //Time complexity of loop = O(n - 2)
    let current = prev2 + prev1; //Time complexity = O(1)
    console.log(`${current}\n`); 
    prev2 = prev1; //Time complexity = O(1)
    prev1 = current; //Time complexity = O(1)
  }
}

const fibonnaciSequenceUsingRecursion = (n, prev2, prev1) => {
  if (n === 0) {
    return;
  }

  //print first two Fibonacci numbers
  if (prev2 === 0) {
    console.log(prev2);
    console.log(prev1);
  }

  let current = prev2 + prev1;

  //print next calculated Fibonacci number
  console.log(current);
  
  fibonnaciSequenceUsingRecursion(n - 1, prev1, current);
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
  One way to improve the time complexity of the Fibonacci sequence implementation is to use dynamic programming or memoization. Dynamic programming is a technique that allows us to store the results of our recursive calls in a cache so that we can avoid.
*/
const fibonacciNumberWithMemoization = (n) => {
  const memo = new Map();

  const fib = (n) => {
    if (n <= 1) return n;
    if (memo.has(n)) return memo.get(n);

    const result = fib(n - 1) + fib(n - 2);
    memo.set(n, result);
    return result;
  };

  return fib(n);
};

/* 
  Create the 20 first Fibonacci numbers.
*/
//printAllFibonnaciNumbersUsingForLoop(20);
//fibonnaciSequenceUsingForLoop(20);

/*
  The first two numbers of the Fibonacci sequence are 0 and 1. And these are printed as is, so, we pass n = 18 to print remaining 18 numbers and total of 20 numbers.
*/
//fibonnaciSequenceUsingRecursion(18, 0, 1);

/* 
This formula uses a 0-based index. This means that to generate the 20th Fibonacci number, we must write 
findNthFibonacciNumberUsingRecursion(19)
*/
//const nthFibonacci = findNthFibonacciNumberUsingRecursion(35);
//console.log(nthFibonacci);

const nthFibonacci = fibonacciNumberWithMemoization(35);
console.log(nthFibonacci);
