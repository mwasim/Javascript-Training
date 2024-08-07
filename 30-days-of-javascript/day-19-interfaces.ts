interface AdvancedArithmetic {
  divisorSum(n: number): number;
}

class Calculator implements AdvancedArithmetic {
  divisorSum(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        sum += i;
      }
    }
    return sum;
  }
}

function main(): void {
  let n = 6;
  let myCalculator: AdvancedArithmetic = new Calculator();
  let sum = myCalculator.divisorSum(n);
  console.log(`I implemented: AdvancedArithmetic\n${sum}`);
}

main();
