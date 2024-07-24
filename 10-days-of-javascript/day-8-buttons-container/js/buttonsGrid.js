const btn5 = document.getElementById("btn5");

const buttonsOrderArr = ["4", "7", "8", "9", "6", "3", "2", "1"];
//const buttonsOrderArr = ["1", "2", "3", "6", "9", "8", "7", "4"].reverse();
const buttonIdArr = buttonsOrderArr.slice();

const rotateButtonsText = () => {
  //ORDER OF ROTATION
  /*
        1 => 2 => 3 => 6 => 9 => 8 => 7 => 4 => 1 (Back to 1)
        1 <= 4
        4 <= 7
        7 <= 8
        8 <= 9
        9 <= 6
        6 <= 3
        3 <= 2
        2 <= 1

    */

  //console.log("BEFORE SHIFT: ", buttonsOrderArr);
  const btnsCount = buttonsOrderArr.length;
  const element = buttonsOrderArr.shift();
  buttonsOrderArr.push(element);
  // console.log("AFTER SHIFT: ", buttonsOrderArr);
  // console.log("Button IDs", buttonIdArr);

  for (let i = 0; i < btnsCount; i++) {
    document.getElementById(`btn${buttonIdArr[i]}`).innerHTML =
      buttonsOrderArr[i];
  }
};

btn5.addEventListener("click", rotateButtonsText);
