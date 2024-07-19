/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

const isVowel = (char) => {
  const letter = char.toLowerCase();

  return /[aeiou]/.test(letter);
};

function vowelsAndConsonants(s) {
  //print vowels
  for (let letter of s) {
    if (isVowel(letter)) {
      console.log(letter);
    }
  }

  //print consonents
  for (let letter of s) {
    if (!isVowel(letter)) {
      console.log(letter);
    }
  }
}

vowelsAndConsonants("javascriptloops");
