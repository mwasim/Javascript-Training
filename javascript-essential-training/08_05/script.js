/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log("this.volume in the method:", this.volume);
    this.volume = volume;
    console.log("this.volume after update:", this.volume);
    (function () {
      console.log(
        "this.volume in nested STANDARD function: (this refers to window.volume)",
        this.volume
      );
    })();
    (() => {
      console.log(
        "this.volume in nested ARROW function: (this points to the closest in scope volume which is this object)",
        this.volume
      );
    })();
  },
};

console.log(greenPack.newVolume(5));
