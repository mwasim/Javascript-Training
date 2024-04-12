/*
    RULE-2: Remove Constants:
        When calculating Big O, we drop constants.
    Example:
        If a function as Big O = O(1 + n/2 + 100)
         Based on this Rule, we remove/drop constants, so it becomes
        O(n/2 + 1) 
        As n gets larger and larger, dividing by 2 has significanly descreasingly significant
        So, it becomes O(n)
        
        Other examples:
        - O(a + 5000000) becomes O(a) [simply drop constants]
*/

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); //O(1)

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]); //O(n/2)
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log("hi"); //O(100)
  }
}

//BIG O of this function = O(1 + n/2 + 100)
/*
    Based on this Rule, we remove/drop constants, so it becomes
    O(n/2 + 1) 
    As n gets larger and larger, dividing by 2 has significanly descreasingly significant
    So, it becomes O(n)
*/

//EXAMPLE-2:
function compressBoxesTwice(boxes) {
  boxes.forEach((box) => {
    console.log(box); //O(n)
  });

  boxes.forEach((box) => {
    console.log(box); //O(n)
  });
}

//Big O for compressBoxesTwice = O(2n)
//On dropping constants, we get O(n)
