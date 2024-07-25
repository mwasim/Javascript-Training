/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  const tipValue = percentValue(tip_percent, meal_cost);
  const taxValue = percentValue(tax_percent, meal_cost);

  return Math.round(meal_cost + tipValue + taxValue);
}

const percentValue = (percent, total) => {
  return total * (percent / 100);
};

function main() {
  const meal_cost = parseFloat(12.0);

  const tip_percent = parseInt(20, 10);

  const tax_percent = parseInt(8, 10);

  const totalCost = solve(meal_cost, tip_percent, tax_percent);
  console.log(totalCost);
}

main();
