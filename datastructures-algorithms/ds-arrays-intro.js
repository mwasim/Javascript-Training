const strings = ["a", "b", "c", "d"];
const numbers = [1, 2, 3, 4, 5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

strings[2]; //O(1)

strings.push(`e`); //O(1)

strings.pop(); //O(1)
strings.pop(); //O(1)

strings.unshift(`z`); //O(n) - because all array items are shiffted to the right when items is added on the first index

//splice
strings.splice(2, 0, "insertedItem"); //O(n/2) => O(n)

console.log(strings);
