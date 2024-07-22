function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */
  const re = /\d+/g;

  /*
    Explanation:

    The \d character class matches any single digit character (0-9).
    The + quantifier matches one or more occurrences of the preceding element (the \d character class).
    The g flag makes the regular expression global, which means it will match all occurrences of integers in the string, not just the first one.
    */

  /*
   * Do not remove the return statement
   */
  return re;
}

const re = regexVar();
const s = "102, 1948948 and 1.3 and 4.5";

const r = s.match(re);

for (const e of r) {
  console.log(e);
}
