function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
   * followed by one or more letters.
   */
  const re = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z]+$/;
  /*
        Explanation:

        The ^ symbol represents the start of the string.
        The (Mr\.|Mrs\.|Ms\.|Dr\.|Er\.) part of the pattern matches the prefix, which can be "Mr.", "Mrs.", "Ms.", "Dr.", or "Er.". The . after each prefix is escaped using a backslash to match the literal period character.
        The [a-zA-Z]+ part of the pattern matches one or more letters (uppercase or lowercase English alphabetic characters).
        The $ symbol represents the end of the string.
    */
  /*
   * Do not remove the return statement
   */
  return re;
}

const re = regexVar();
let s = "Mr.X";
console.log(!!s.match(re));
s = "Mrs.Y";
console.log(!!s.match(re));
s = "Dr#Joseph";
console.log(!!s.match(re));
s = "Er .Abc";
console.log(!!s.match(re));
