/*
    Task
    Write a Calculator class with a single method: int power(int,int). The power method takes two integers, n and p, as parameters and returns the integer result of np. If either n or p is negative, then the method must throw an exception with the message: n and p should be non-negative.

    Note: Do not use an access modifier (e.g.: public) in the declaration for your Calculator class.
*/

//Write your code here
class Calculator {
  power(n, p) {
    if (n < 0 || p < 0) throw new Error("n and p should be non-negative");
    return Math.pow(n, p);
  }
}

function main() {
  var myCalculator = new Calculator();
  var T = parseInt(readLine());
  while (T-- > 0) {
    var num = readLine().split(" ");
    try {
      var n = parseInt(num[0]);
      var p = parseInt(num[1]);
      var ans = myCalculator.power(n, p);
      console.log(ans);
    } catch (e) {
      console.log(e);
    }
  }
}

main();
