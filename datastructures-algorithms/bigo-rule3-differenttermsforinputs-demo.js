/*
    RULE-3: Different terms for Inputs
    This is the trickiest part of the interview that lot of people make mistakes on. But once, you understand it, it becomes really easy to spot.
    EXAMPLE:
    With different terms as parameters (inputs e.g. a, b),
    most people, will still say, it's Big O = O(n), but it's INCORRECT.

    Because 3rd Rule says different terms for inputs!
    In this example, 
        boxes input => can be 100 items
        boxes2 input => can be just 1 item,
        So, Big O for this example = O(a + b) OR O(n + m) OR O(boxes1 + boxes2)
    
*/

//We've same compressBoxesTwice function which in rule-2 had Big O = O(n),
//but here the terms for inputs are different - boxes, and boxes2
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach((box) => {
    console.log(box); //O(a)
  });

  boxes2.forEach((box) => {
    console.log(box); //O(b)
  });
}

/*
    With different terms as parameters (inputs),
    most people, will still say, it's Big O = O(n), but it's INCORRECT.

    Because 3rd Rule says different terms for inputs!
    In this example, 
        boxes input => can be 100 items
        boxes2 input => can be just 1 item,
        So, Big O for this example = O(a + b) OR O(n + m) OR O(boxes1 + boxes2)

*/

//AND When we've nested loops as in the below example,
//Big O = O(a * b) =>For any nested inputs, we multiply
function compressBoxesNested(boxes, boxes2) {
  boxes.forEach((firstBox) => {
    boxes2.forEach((secondBox) => {
      console.log(firstBox, secondBox); //O(a * b)
    });
  });
}
