/*
    TASK:
    A palindrome is a word, phrase, number, or other sequence of characters which reads the same backwards and forwards. Can you determine if a given string, s, is a palindrome?

    To solve this challenge, we must first take each character in s, enqueue it in a queue, and also push that same character onto a stack. Once that's done, we must dequeue the first character from the queue and pop the top character off the stack, then compare the two characters to see if they are the same; as long as the characters match, we continue dequeueing, popping, and comparing each character until our containers are empty (a non-match means s isn't a palindrome).

    Write the following declarations and implementations:

    Two instance variables: one for your stack, and one for your queue.
    A void pushCharacter(char ch) method that pushes a character onto a stack.
    A void enqueueCharacter(char ch) method that enqueues a character in the queue instance variable.
    A char popCharacter() method that pops and returns the character at the top of the stack instance variable.
    A char dequeueCharacter() method that dequeues and returns the first character in the queue instance variable.
*/

function Solution() {
  this.stack = [];
  this.queue = [];
}

Solution.prototype.pushCharacter = function (ch) {
  this.stack.push(ch);
};

Solution.prototype.enqueueCharacter = function (ch) {
  this.queue.push(ch);
};

Solution.prototype.popCharacter = function () {
  return this.stack.pop();
};

Solution.prototype.dequeueCharacter = function () {
  return this.queue.shift();
};

function main(input) {
  // read the string s
  var s = input;
  var len = s.length;
  // create the Solution class object p
  var obj = new Solution();
  //push/enqueue all the characters of string s to stack
  for (var i = 0; i < len; i++) {
    obj.pushCharacter(s.charAt(i));
    obj.enqueueCharacter(s.charAt(i));
  }

  var isPalindrome = true;
  /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

  for (var i = 0; i < len / 2; i++) {
    if (obj.popCharacter() != obj.dequeueCharacter()) {
      isPalindrome = false;
      break;
    }
  }
  //finally print whether string s is palindrome or not

  if (isPalindrome) console.log("The word, " + s + ", is a palindrome.");
  else console.log("The word, " + s + ", is not a palindrome.");
}

main("racecar");
main("racecara");
