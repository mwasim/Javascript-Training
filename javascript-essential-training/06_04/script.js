/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

let color = "pink";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

function headingColor() {
  let color = "darkgreen";
  document.querySelector(".title").style.color = color;

  let localScoppedColor = "purple";
  console.log(localScoppedColor);
}

//console.log(localScoppedColor); //ERROR IF ACCESSED HERE

headingColor();

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
