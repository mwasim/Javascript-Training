/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  return {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };
}

const rec = new Rectangle(4, 5);

console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);
