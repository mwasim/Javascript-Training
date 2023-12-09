/**
 * Arithmetic operators
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators
 */

import CalculateSales from "./CalculateSalesChallenge.js";

let a = 5;
let b = 4;
let c = 3.2;

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);
console.log(`let c: ${c} (${typeof c})`);

let result = a * b;

console.log("Result: ", result);

const pricesArr = [
  [2.5, 9.99, 3.99, 18.59, 49.96],
  [2.99, 3.99, 4.99, 5.99, 6.99],
  [100.99, 200.99, 300.99, 400.99, 500.99],
  [1.99, -2.99, 3.99, -4.99, 5.99],
];

//pick random array of prices
const randomPricesIndex = Math.floor(Math.random() * pricesArr.length);
const salesTaxResult = CalculateSales(pricesArr[randomPricesIndex]);
console.log(salesTaxResult);
