"use strict";
class Calculator {
    divisorSum(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                sum += i;
            }
        }
        return sum;
    }
}
function main() {
    let n = 6;
    let myCalculator = new Calculator();
    let sum = myCalculator.divisorSum(n);
    console.log(`I implemented: AdvancedArithmetic\n${sum}`);
}
main();
