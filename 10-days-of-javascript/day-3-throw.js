/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  if (a > 0) return "YES";
  if (a < 0) throw new Error("Negative Error");
  if (a === 0) throw new Error("Zero Error");
}

const checkNumber = (num) => {
  try {
    console.log(isPositive(num));
  } catch (e) {
    console.log(e.message);
  }
};

checkNumber(3);
checkNumber(2);
checkNumber(0);
checkNumber(-1);
checkNumber(6);
