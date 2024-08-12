/*
    Task
    A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself. Given a number, n, determine and print whether it is Prime or Not prime.

    Note: If possible, try to come up with a O(sqrt(n)) primality algorithm, or see what sort of optimizations you come up with for an O(n) algorithm. Be sure to check out the Editorial after submitting your code.

    Input Format

    The first line contains an integer, T, the number of test cases.
    Each of the T subsequent lines contains an integer, n, to be tested for primality.
*/

/*
    This algorithm has a time complexity of O(sqrt(n)), which is more efficient than the naive O(n) approach.
*/
function is_prime(n) {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function processData(input) {
  const lines = input.trim().split("\n");
  const T = parseInt(lines[0]);

  for (let i = 1; i <= T; i++) {
    const n = parseInt(lines[i]);
    console.log(is_prime(n) ? "Prime" : "Not prime");
  }
}

const input = "3\n12\n5\n7";
processData(input);
