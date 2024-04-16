/*
    RULE-4: Drop Non Dominants (Or Drop Non Dominant Terms)
    Let's say a function has Big O = O(n + n^2)
    But by Rule#4 - We need to Drop Non Dominant Terms, it means we care about the most important term
    So, here we drop the first 'n' in expression O(n + n^2), so it becomes O(n^2)
    Big O = O(n^2)

    EXAMPLE-2:
        Let's say we've a function with 
            Big O = O(x^2 + 3x + 1000 + x / 2)
            Here, value for x can be anything e.g. 5, 5000, 10,000 etc.
            By putting the bigger values in place of X, we see x^2 is the DOMINANT term, 
            And the other terms can be dropped.
        By droping the non dominating terms we've,
            Big O = O(x^2)
*/

function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers:");
  numbers.forEach(function (number) {
    console.log(number); //Big O = O(n)
  });

  console.log("and these are their sums:");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      //Big O = O(n * n) => O(n^2)
      //NOTE: if we had 3 nested loops, it would've been O(n^3)
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]); // O(n^2)

//What is the Big O?
/*
    Here the Big O = O(n + n^2)
    But by Rule#4 - We need to Drop Non Dominant Terms, it means we care about the most important term
    So, here we drop the first 'n' in expression O(n + n^2), so it becomes O(n^2)
    Big O = O(n^2)

    EXAMPLE-2:
        Let's say we've a function with 
            Big O = O(x^2 + 3x + 1000 + x / 2)
            Here, value for x can be anything e.g. 5, 5000, 10,000 etc.
            By putting the bigger values in place of X, we see x^2 is the DOMINANT term, 
            And the other terms can be dropped.
        By droping the non dominating terms we've,
            Big O = O(x^2)
*/
