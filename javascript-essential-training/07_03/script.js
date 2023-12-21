/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["calculator", "headlamp", "pen"];

backpackContents.forEach((item, index) => {
  console.log(`<li>${item} - ${index}</li>`);
});

backpackContents.push("pencil", "razer", 5);
//backpackContents.shift(); //takes the first item off the array
//backpackContents.pop(); //removes the last element from the array and return it.
backpackContents.unshift("pencil");

let longItems = backpackContents.find((item) => item.length >= 5); //finds single item

//The above line of code can also be written as below,
let longItems1 = backpackContents.find(function (item) {
  if (item.length >= 8) return item;
});

console.log(backpackContents.join(", "));
console.log("Long Items:" + longItems);
console.log("Long Items:" + longItems1);

backpackContents.sort();
console.log(backpackContents);

// backpackContents.forEach(function (item) {
//   item = `<li>${item}</li>`;
//   console.log(item);
// });

// let longItems = backpackContents.find(function (item) {
//   if (item.length >= 5) {
//     return item;
//   }
// });
// console.log("longItems:", longItems);
