/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const deskArray = [
  "pen",
  "camera",
  "phone",
  "notebook",
  "headphones",
  "light bulb",
  "usb drive",
  "elephant",
];

const processArray = (deskArray) => {
  let newDeskArray = deskArray;
  console.log(newDeskArray);

  //* - Remove the last item
  newDeskArray.pop();
  console.log(newDeskArray);

  //   * - Add the last item as the first item on the array
  //let lastItemIndex = newDeskArray.length - 1;
  //newDeskArray.unshift(newDeskArray[lastItemIndex]);
  newDeskArray.unshift(newDeskArray.pop());
  console.log(newDeskArray);

  //   * - Sort the items by alphabetical order
  newDeskArray.sort();
  console.log(newDeskArray);

  //   * - Use the find() method to find a specific item in the array
  let foundItem = newDeskArray.find((item) => item === `notebook`);
  console.log(foundItem);
  console.log(newDeskArray);

  //   * - Remove the item you found using the find method from the array.
  let foundItemIndex = newDeskArray.indexOf(foundItem);
  console.log(foundItemIndex);

  //https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
  //The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  if (foundItemIndex > -1) {
    newDeskArray.splice(foundItemIndex, 1); // 2nd parameter means remove one item only
  }
  console.log(newDeskArray);
};

processArray(deskArray);
