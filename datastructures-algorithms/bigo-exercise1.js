// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; //O(1) = Constant Time
  a = 50 + 3; //O(1) = Constant Time

  //O(n)
  for (let i = 0; i < input.length; i++) {
    anotherFunction(); //O(n) - is called n times
    let stranger = true; //O(n) - assigned n times
    a++; //O(n) - incremented n times
  }
  return a; //O(1) = Constant Time
}

/*
    Let's calculate:
    1 + 1 + n + n + n + n + 1 => 3 + 4n 
    
    So, big notation is: Big O(3+4n) which just simplifies to O(n)
    

    NOTE: We don't need to calculate Big O step-by-step like this, 
          there's an easier way to do this, that's more practical.
*/
