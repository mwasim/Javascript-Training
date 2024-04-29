/*
    SPACE COMPLEXITY:
    Talking about Space Complexity (Memory) is very similar to talking about the Time Cost.
    - We simply look at the size of the input, and see how many new variables or new memory we're allocating. 
    - How much memory is being used.
    - What causes Space complexity?-
        Adding Variables
        Adding Data Structures
        Function Call
        Allocations
*/

//Space complexity O(1)
function logHello(n) {
  for (let i = 0; i < n.length; i++) {
    //Online variable i is being initialized
    console.log("Hello");
  }
}

//This function has time complexity as Big O => O(n)
//But we're not really creating many variables in this function so, it's Space complexity = O(1)
logHello([1, 2, 3, 4, 5]);

/*
    Let's try another function
*/
// Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = []; //Here we created a new data structure = array
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi"; //each item is additional memrory space
  }
  return hiArray;
}

//This function has Space complexity O(n)
arrayOfHiNTimes(6);
