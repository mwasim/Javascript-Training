const updateBackpack = (update) => {
  let main = document.querySelector("main");
  main.innerHTML = markup(backpack);
  console.info(update);
};

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
    updateBackpack(`Lid status changed.`);
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
    updateBackpack(`Strap lengths updated.`);
  },
};

console.log("The backpack obect: ", backpack); //output string first, and then object

//Accessing object's properties using dot-notation
console.log("pocketNum value (dot-notation): ", backpack.pocketNum);
console.log("strap length L: ", backpack.strapLength.left);

//Accessing object's properties using bracket-notation
//It's more clunky but it gives us more control
console.log("pocketNum value (bracket-notation): ", backpack["pocketNum"]);

//brack-notation example with more control (we can query using variables)
var query = "pocketNum"; //useful when properties names are non standard (e.g. property name starts with DOT, hyphen etc.)
console.log("pocketNum value (bracket-notation - query): ", backpack[query]);

export default backpack;
